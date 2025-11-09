import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopBar from '../../components/TopBar';

const OtpForgot = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const toastAnim = useRef(new Animated.Value(-100)).current;
  const modalScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    showToastMessage('OTP sent to abcd@gmail.com');
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);

    Animated.spring(toastAnim, {
      toValue: 0,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(toastAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShowToast(false);
      });
    }, 3000);

    return () => clearTimeout(timer);
  };

  const handleOtpChange = (value: string, index: number) => {
    if (value && !/^\d+$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    if (value.length > 1) {
      const digits = value.split('').slice(0, 4 - index);
      digits.forEach((digit, i) => {
        if (index + i < 4) {
          newOtp[index + i] = digit;
        }
      });
      setOtp(newOtp);

      const nextIndex = Math.min(index + digits.length, 3);
      inputRefs.current[nextIndex]?.focus();
      if (newOtp.every(digit => digit !== '')) {
        setTimeout(() => handleVerify(), 500);
      }
      return;
    }
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    if (value && index === 3 && newOtp.every(digit => digit !== '')) {
      setTimeout(() => handleVerify(), 500);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');

    if (otpCode.length !== 4) {
      showToastMessage('Please enter complete OTP');
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      const isValid = otpCode.length === 4;

      if (isValid) {
        router.navigate('/ForgotPassword/New-Password')
          
      } else {
        showToastMessage('Invalid OTP. Please try again.');
        setOtp(['', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    }, 1500);
  };

  const handleResend = () => {
    setOtp(['', '', '', '']);

    setTimeout(() => {
      showToastMessage('OTP resent successfully');
      inputRefs.current[0]?.focus();
    }, 500);
  };

  const handleFocus = (index: number) => {
    if (otp[index]) {
      setTimeout(() => {
        inputRefs.current[index]?.setNativeProps({
          selection: { start: 0, end: 1 }
        });
      }, 10);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
        <View className='flex-1 bg-white pt-10 px-6'>
          <TopBar/>
          <View className='items-center mb-10'>
            <Text className='text-4xl font-semibold mb-4'>OTP Verification</Text>
            <Text className='text-xl font-medium text-gray-500'>
              We have sent verification code on
            </Text>
            <Text className='text-xl font-semibold text-cyan-500'>
              abcd@gmail.com
            </Text>
          </View>
          <View>
            <View className="flex-row justify-center mb-10">
              {otp.map((digit, index) => (
                <View key={index} className="relative mx-2">
                  <TextInput
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    className={`w-20 h-20 border-2 rounded-xl text-center text-2xl font-semibold ${digit
                      ? 'border-cyan-400 bg-cyan-50 text-cyan-500'
                      : 'border-gray-300 bg-white text-gray-800'
                      }`}
                    maxLength={1}
                    keyboardType="number-pad"
                    value={digit}
                    onChangeText={(value) => handleOtpChange(value, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    onFocus={() => handleFocus(index)}
                    selectTextOnFocus
                    autoComplete="off"
                    textContentType="oneTimeCode"
                  />
                  {!digit && (
                    <View className="absolute inset-0 items-center justify-center pointer-events-none">
                      <Text className="text-3xl text-gray-300 font-light">0</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>

            <View className="flex-row justify-center mb-16">
              <Text className="text-gray-500 text-xl">Don&#39;t receive the OTP? </Text>
              <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
                <Text className="text-green-500 font-semibold text-xl">Resend</Text>
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity
                onPress={handleVerify}
                className={`py-6 rounded-xl ${isVerifying ? 'bg-gray-400' : 'bg-sky-400'
                  }`}
                activeOpacity={0.8}
                disabled={isVerifying}
              >
                <Text className="text-white text-center text-2xl font-bold">
                  {isVerifying ? 'Verifying...' : 'Verify'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {showToast && (
          <Animated.View
            style={{
              transform: [{ translateY: toastAnim }],
              position: 'absolute',
              top: Platform.OS === 'ios' ? 60 : 40,
              left: 20,
              right: 20,
              zIndex: 9999,
            }}
            className="bg-gray-800 rounded-2xl p-4 shadow-lg"
          >
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-cyan-400 mr-3" />
              <Text className="text-white text-base flex-1">{toastMessage}</Text>
            </View>
          </Animated.View>
        )}

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OtpForgot;
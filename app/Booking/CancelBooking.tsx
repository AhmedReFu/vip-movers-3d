import TopBar from '@/components/TopBar';
import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CancelBooking = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [showModal, setShowModal] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showModal) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }).start();
    } else {
      scaleAnim.setValue(0);
    }
  }, [showModal]);

  const reasons = [
    'Waiting for long time',
    'Unable to contact driver',
    'Driver denied to go to destination',
    'Driver denied to come to pickup',
    'Wrong address shown',
    'The price is not reasonable',
    'I want to order another restaurant',
    'I just want to cancel',
  ];

  const handleSend = () => {
    if (!selectedReason && !otherReason.trim()) {
      alert('Please select a reason for cancellation');
      return;
    }
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>

      <View className="bg-white px-6 py-4 flex-row items-center pb-10">
        <TopBar />
        <Text className="text-xl font-bold text-gray-800 ml-4">
          Cancel Booking
        </Text>
      </View>

      <View className='flex-1 bg-white pt-6'>
        <ScrollView
          className="flex-1 px-6"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <Text className='text-gray-700 text-xl font-bold mb-10 leading-6'>
            Please select the reason for cancellation:
          </Text>


          <View className="mb-10">
            {reasons.map((reason, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedReason(reason)}
                className="flex-row items-center py-4"
                activeOpacity={0.7}
              >

                <View
                  className={`w-6 h-6 rounded-full border-2 items-center justify-center mr-4 ${selectedReason === reason
                      ? 'border-cyan-400'
                      : 'border-gray-300'
                    }`}
                >
                  {selectedReason === reason && (
                    <View className="w-3.5 h-3.5 rounded-full bg-cyan-400" />
                  )}
                </View>
                <Text className="text-gray-800 text-xl font-bold flex-1">
                  {reason}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          <View className="">
            <Text className="text-gray-900 text-xl font-bold  mb-6">
              Others
            </Text>
            <TextInput
              value={otherReason}
              onChangeText={setOtherReason}
              placeholder="Others reason..."
              placeholderTextColor="#9CA3AF"
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-800 text-xl font-bold"
              multiline
              numberOfLines={3}
              style={{ textAlignVertical: 'top', minHeight: 100 }}
            />
          </View>
        </ScrollView>


        <View className="absolute bottom-0 left-0 right-0 bg-white px-6 pb-6 pt-4">
          <TouchableOpacity
            onPress={handleSend}
            className="bg-cyan-400 py-5 rounded-xl"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-center text-lg">
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View
          className="flex-1 justify-center items-center px-8"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        >
          <Animated.View
            style={{ transform: [{ scale: scaleAnim }] }}
            className="bg-white rounded-3xl p-10 w-full max-w-sm items-center"
          >
            <View className="mb-6">
              <Text style={{ fontSize: 90 }}>😔</Text>
            </View>
            <Text className="text-gray-900 font-bold text-2xl text-center mb-4">
              We're so sad about{'\n'}your cancellation
            </Text>
            <Text className="text-gray-500 text-center text-sm mb-8 leading-5">
              We will continue to improve our service & satisfy you on the next order.
            </Text>
            <TouchableOpacity
              onPress={handleOk}
              className="bg-primary w-full py-5 rounded-xl"
              activeOpacity={0.8}
            >
              <Text className="text-white font-bold text-center text-lg">
                OK
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CancelBooking;
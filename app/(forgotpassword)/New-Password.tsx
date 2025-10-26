import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";

const NewPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const modalScale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (showSuccessModal) {
            Animated.spring(modalScale, {
                toValue: 1,
                useNativeDriver: true,
                tension: 50,
                friction: 7,
            }).start();
        } else {
            modalScale.setValue(0);
        }
    }, [showSuccessModal]);

    const handleSubmit = () => {
        // Validate passwords
        if (!newPassword || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (newPassword.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        setShowSuccessModal(true);
    }
    const handleDone = () => {
        setShowSuccessModal(false);
        router.replace('/Sign-In');
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
                <View className='flex-1 bg-white pt-10 px-8'>
                    <TopBar />
                    <View className='items-center'>
                        <Text className='text-3xl font-semibold '>Create New Password</Text>
                        <Text className='text-lg font-light leading-10'>Enter your new password</Text>
                    </View>
                    <View className="flex-1 gap-4 py-5 ">
                        <View className="bg-[url(/assets/images/email-bg.png)] border rounded-xl border-gray-200 w-full pl-4 flex-row items-center justify-items-center">
                            <View className=" p-0">
                                <Image source={require("@/assets/images/lock-vector.png")} className="w-8" />
                            </View>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                className=" h-20 text-black w-3/4 pl-4 font-medium text-lg"
                                placeholder="Enter your new password"
                                secureTextEntry={!showNewPassword}
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                            <TouchableOpacity
                                className="pr-6"
                                onPress={() => setShowNewPassword(!showNewPassword)}
                            >
                                <Image source={require("@/assets/images/show-eye.png")} className="w-8" />
                            </TouchableOpacity>
                        </View>
                        <View className="bg-[url(/assets/images/email-bg.png)] border rounded-xl border-gray-200 w-full pl-4 flex-row items-center justify-items-center">
                            <View className=" p-0">
                                <Image source={require("@/assets/images/lock-vector.png")} className="w-8" />
                            </View>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                className=" h-20 text-black w-3/4 pl-4 font-medium text-lg"
                                placeholder="Enter confirm password"
                                secureTextEntry={!showConfirmPassword}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <TouchableOpacity
                                className="pr-6"
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <Image source={require("@/assets/images/show-eye.png")} className="w-8" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            className="bg-sky-400 py-6 rounded-xl my-10"
                            activeOpacity={0.8}
                            onPress={handleSubmit}
                        >
                            <Text className="text-white text-center text-3xl font-bold">
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    transparent={true}
                    visible={showSuccessModal}
                    animationType="fade"
                    onRequestClose={handleDone}
                >
                    <View className="flex-1 justify-center items-center bg-black/50 px-8">
                        <Animated.View
                            style={{
                                transform: [{ scale: modalScale }],
                            }}
                            className="bg-white rounded-3xl p-12 w-full max-w-md items-center"
                        >
                            <Image
                                source={require("@/assets/images/groupicon.png")}
                                className="mb-6"
                            />

                            <Text className="text-3xl font-bold text-gray-800 text-center">
                                Success!
                            </Text>
                            <Text className="text-xl font-bold text-gray-500 text-center mb-8">
                                Your password is successfully created
                            </Text>

                            <TouchableOpacity
                                onPress={handleDone}
                                className="bg-sky-400 w-full py-6 rounded-xl"
                                activeOpacity={0.8}
                            >
                                <Text className="text-white text-center text-2xl font-bold">
                                    Log In
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default NewPassword;
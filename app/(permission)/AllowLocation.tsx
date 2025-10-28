import { images } from '@/constants'
import { router } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AllowLocation = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
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

    const handleAllowLocation = () => {
        // Here you can add actual location permission logic
        // For now, just show the modal
        setShowSuccessModal(true);
    };

    const handleDone = () => {
        setShowSuccessModal(false);
        // Navigate to home screen
        setTimeout(() => {
            router.replace('/(tabs)'); // Update this to your home screen route
        }, 200);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
            <View className='flex-1 bg-white px-6 justify-center'>
                <View className='items-center justify-center'>
                    <View className='mb-8'>
                        <Image source={images.locationIcon} />
                    </View>
                    <View className='items-center mb-10'>
                        <Text className='text-3xl font-semibold mb-4 text-center'>Allow location access?</Text>
                        <Text className='text-xl font-medium text-gray-500 text-center'>We need your location access to easily find Skillr professionals around you.</Text>
                    </View>
                    <TouchableOpacity
                        onPress={handleAllowLocation}
                        className="bg-sky-400 py-6 rounded-xl my-2 w-full"
                        activeOpacity={0.8}
                    >
                        <Text className="text-white text-center text-2xl font-bold">
                            Allow Location Access
                        </Text>
                    </TouchableOpacity>
                    <View className="mt-4">
                        <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
                            <Text className="text-gray-500 text-xl font-medium">Skip</Text>
                        </TouchableOpacity>
                    </View>
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
                            source={images.successIcon}
                            className="mb-6"
                        />

                        <Text className="text-3xl font-bold text-gray-800 text-center mb-8">
                            Your location access allowed
                        </Text>

                        <TouchableOpacity
                            onPress={handleDone}
                            className="bg-sky-400 w-full py-6 rounded-xl"
                            activeOpacity={0.8}
                        >
                            <Text className="text-white text-center text-2xl font-bold">
                                Done
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default AllowLocation
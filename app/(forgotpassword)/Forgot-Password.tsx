import { images } from '@/constants'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../components/TopBar'

const ForgotPassword = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
                <View className='flex-1 bg-white pt-10 px-6'>
                    <TopBar/>
                        <View className='items-start'>
                            <Text className='text-3xl font-semibold '>Forgot Password</Text>
                            <Text className='text-lg font-light leading-10'>Recover your account password</Text>
                        </View>
                        <View className="flex-1 gap-4 py-5 ">
                        <View className="border rounded-xl border-gray-200 w-full pl-4 flex-row items-center justify-items-center">
                            <Image source={images.emailIcon} className="w-8" />
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    className=" h-20 p-4 text-black w-5/6 font-medium text-lg"
                                    placeholder="Enter your email"
                                    keyboardType="email-address"
                                />
                            </View>
                        <TouchableOpacity
                            onPress={()=> router.navigate('/Otp-Forgot')}
                                className="bg-sky-400 py-6 rounded-xl my-6"
                                activeOpacity={0.8}
                            >
                                <Text className="text-white text-center text-3xl font-bold">
                                    Sent OTP
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default ForgotPassword
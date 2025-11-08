
import { images } from '@/constants'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
    Image,

import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const EditProfile = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSave = () => {
        console.log('Saving changes...', { fullName, email, phone })
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00D2FF' }}>
            <View className="flex-1 bg-white px-6 justify-between" >
                <View
                    className="mt-10"
                    
                >
                    <View className="items-center my-8">
                        <View className="relative">
                            <View className=''>
                                <Image source={images.ahmedReFat} className='rounded-full size-28 absolute ' />
                            </View>
                            <View className="w-28 h-28 rounded-full  items-center justify-center">
                                <Ionicons name="camera-outline" size={30} color="white" />
                            </View>
                        </View>
                    </View>
                    <View className="mb-6">
                        <View className="mb-6">
                            <Text className="text-xl font-medium text-gray-900 mb-2">
                                Full Name
                            </Text>
                            <View className="bg-white p-3 border border-gray-200 rounded-2xl">
                                <TextInput
                                    value={fullName}
                                    onChangeText={setFullName}
                                    placeholder="Enter your full name"
                                    placeholderTextColor="#9CA3AF"
                                    className="p-4 text-gray-800 text-xl"
                                />
                            </View>
                        </View>
                        <View className="mb-6">
                            <Text className="text-xl font-medium text-gray-900 mb-2">
                                Email Address
                            </Text>
                            <View className="bg-white p-3 border border-gray-200 rounded-2xl">
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Enter your email"
                                    placeholderTextColor="#9CA3AF"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    className=" text-gray-800 text-xl"
                                />
                            </View>
                        </View>
                        <View className="mb-6">
                            <Text className="text-xl font-medium text-gray-900 mb-2">
                                Phone Number
                            </Text>
                            <View className="bg-white p-3 border border-gray-200 rounded-2xl flex-row items-center px-4">
                                <View className="mr-3">
                                    <Text className="text-2xl">🇺🇸</Text>
                                </View>
                                <TextInput
                                    value={phone}
                                    onChangeText={setPhone}
                                    placeholder="Enter phone number"
                                    placeholderTextColor="#9CA3AF"
                                    keyboardType="phone-pad"
                                    className="text-gray-800 text-xl"
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="my-4">
                    <TouchableOpacity
                        onPress={handleSave}
                        className="w-full p-6 bg-[#00D2FF] rounded-2xl items-center justify-center"
                        activeOpacity={0.8}
                    >
                        <Text className="text-white font-semibold text-lg">
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
    const handleImagePick = () => {
        console.log('Pick image...')
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00D2FF' }}>
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Picture */}
                <View className="items-center my-8">
                    <View className="relative">
                        <View className="w-28 h-28 rounded-full bg-gray-600 items-center justify-center">
                            <Ionicons name="camera" size={48} color="white" />
                        </View>
                        <TouchableOpacity
                            onPress={handleImagePick}
                            className="absolute bottom-0 right-0 w-9 h-9 bg-[#00D2FF] rounded-full items-center justify-center border-[3px] border-white"
                        >
                            <Ionicons name="camera" size={18} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Form Fields */}
                <View className="mb-6">
                    {/* Full Name */}
                    <View className="mb-6">
                        <Text className="text-sm font-medium text-gray-900 mb-2">
                            Full Name
                        </Text>
                        <View className="bg-gray-50 border border-gray-200 rounded-2xl">
                            <TextInput
                                value={fullName}
                                onChangeText={setFullName}
                                placeholder="Enter your full name"
                                placeholderTextColor="#9CA3AF"
                                className="px-4 py-4 text-gray-800 text-base"
                            />
                        </View>
                    </View>

                    {/* Email Address */}
                    <View className="mb-6">
                        <Text className="text-sm font-medium text-gray-900 mb-2">
                            Email Address
                        </Text>
                        <View className="bg-gray-50 border border-gray-200 rounded-2xl">
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Enter your email"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                className="px-4 py-4 text-gray-800 text-base"
                            />
                        </View>
                    </View>

                    {/* Phone Number */}
                    <View className="mb-6">
                        <Text className="text-sm font-medium text-gray-900 mb-2">
                            Phone Number
                        </Text>
                        <View className="bg-gray-50 border border-gray-200 rounded-2xl flex-row items-center px-4">
                            {/* US Flag */}
                            <View className="mr-3">
                                <Text className="text-2xl">🇺🇸</Text>
                            </View>
                            <TextInput
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="Enter phone number"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="phone-pad"
                                className="flex-1 py-4 text-gray-800 text-base"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Save Button */}
            <View className="px-6 pb-6 pt-4">
                <TouchableOpacity
                    onPress={handleSave}
                    className="w-full py-4 bg-[#00D2FF] rounded-2xl items-center justify-center"
                    activeOpacity={0.8}
                >
                    <Text className="text-white font-semibold text-base">
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default EditProfile
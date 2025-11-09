import { images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSave = () => {
        console.log("Saving changes...", { fullName, email, phone });
    };

    const handleImagePick = () => {
        console.log("Pick image...");
        // You can later integrate ImagePicker from expo-image-picker here.
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
            <ScrollView
                className="flex-1 bg-white px-6"
                showsVerticalScrollIndicator={false}
            >

                <View className="items-center my-10">
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
                        <Text className="text-lg font-bold text-gray-900 mb-2">
                            Full Name
                        </Text>
                        <View className="bg-gray-50 border border-gray-200 rounded-2xl">
                            <TextInput
                                value={fullName}
                                onChangeText={setFullName}
                                placeholder="Enter your full name"
                                placeholderTextColor="#9CA3AF"
                                className=" p-5 text-gray-800 font-bold text-lg"
                            />
                        </View>
                    </View>

                    <View className="mb-6">
                        <Text className="text-lg font-bold text-gray-900 mb-2">
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
                                className="p-5 text-gray-800 font-bold text-lg"
                            />
                        </View>
                    </View>

                    <View className="mb-6">
                        <Text className="text-lg font-bold text-gray-900 mb-2">
                            Phone Number
                        </Text>
                        <View className="bg-gray-50 border border-gray-200 rounded-2xl flex-row items-center px-4">
                            <View className="mr-3">
                                <Text className="text-2xl">🇺🇸</Text>
                            </View>
                            <TextInput
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="Enter phone number"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="phone-pad"
                                className="p-5 text-gray-800 font-bold text-lg"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>


            <View className="px-6 pb-6 pt-4 bg-white">
                <TouchableOpacity
                    onPress={handleSave}
                    className="w-full p-6 bg-[#00D2FF] rounded-2xl items-center justify-center"
                    activeOpacity={0.8}
                >
                    <Text className="text-white font-semibold text-base">
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default EditProfile;

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
                {/* Profile Picture */}
                <View className="items-center my-10">
                    <View className="relative">
                        <Image
                            source={images.ahmedReFat}
                            className="w-28 h-28 rounded-full"
                        />
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
                        <Text className="text-lg font-medium text-gray-900 mb-2">
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
                        <Text className="text-lg font-medium text-gray-900 mb-2">
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
                        <Text className="text-lg font-medium text-gray-900 mb-2">
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
                                className="flex-1 py-4 text-gray-800 text-base"
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

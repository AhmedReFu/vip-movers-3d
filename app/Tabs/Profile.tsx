import { images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Image, Pressable, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      <View className="flex-1 bg-white px-6">
        {/* Profile Image */}
        <View className="items-center mt-14 mb-6">
          <View className="relative">
            <Image
              source={images.ahmedReFat}
              className="w-32 h-32 rounded-full"
            />
            <View className="absolute bottom-1 right-1 bg-[#00D2FF] p-2 rounded-full">
              <Ionicons name="camera-outline" size={14} color="white" />
            </View>
          </View>

          <Text className="text-2xl font-semibold text-gray-800 mt-4">
            Ahmed ReFat
          </Text>
          <Text className="text-gray-500 mt-1 text-base">
            mdnazmulislam5608@gmail.com
          </Text>
        </View>

        {/* Section Title */}
        <Text className="text-lg font-bold text-gray-800 mb-3 mt-4">General</Text>

        {/* Menu Items */}
        <View className="space-y-6">

          {/* Edit Profile */}
          <Pressable className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Ionicons name="person-outline" size={22} />
              <Text className="text-[17px] text-gray-800">Edit Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </Pressable>

          {/* Language */}
          <Pressable className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <MaterialIcons name="language" size={22} />
              <Text className="text-[17px] text-gray-800">Language</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </Pressable>

          {/* Push Notifications */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Ionicons name="notifications-outline" size={22} />
              <Text className="text-[17px] text-gray-800">
                Push Notifications
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#D1D5DB", true: "#00D2FF" }}
              thumbColor="white"
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </View>

          {/* Help Center */}
          <Pressable className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <MaterialIcons name="help-outline" size={22} />
              <Text className="text-[17px] text-gray-800">Help Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </Pressable>
        </View>

        {/* Logout */}
        <Pressable className="flex-row items-center mt-10 space-x-3">
          <AntDesign name="logout" size={22} color="red" />
          <Text className="text-[17px] font-semibold text-red-500">Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

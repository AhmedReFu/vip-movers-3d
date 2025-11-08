import { images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Profile = () => {

  const [isEnabled, setIsEnabled] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const handleNotificationPress = () => {
    router.push("/Profile/NotificationSettings");
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    alert("Logged out!");
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      <View className="flex-1 bg-white px-6">
        {/* Profile Header */}
        <View className="items-center mt-14 mb-6">
          <View className="relative">
            <Image source={images.ahmedReFat} className="w-32 h-32 rounded-full" />
            <View className="absolute bottom-1 right-1 bg-[#00D2FF] p-1 rounded-full border-2 border-white">
              <Ionicons name="camera-outline" size={18} color="white" />
            </View>
          </View>
          <Text className="text-2xl font-semibold mt-4">Ahmed ReFat</Text>
          <Text className="text-gray-500 mt-1 text-base">
            mdnazmulislam5608@gmail.com
          </Text>
        </View>

        {/* General Section */}
        <Text className="text-2xl font-bold mb-3 mt-4 text-[#00D2FF]">
          General
        </Text>
        <View className="space-y-6">
          <TouchableOpacity
            className="flex-row items-center justify-between my-4"
            onPress={() => router.navigate("/Profile/EditProfile")}
          >
            <View className="flex-row items-center space-x-3">
              <Ionicons name="person-outline" size={22} />
              <Text className="text-[18px] ml-2">Edit Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between my-4"
            onPress={() => router.navigate("/Profile/Language")}
          >
            <View className="flex-row items-center space-x-3">
              <MaterialIcons name="language" size={22} />
              <Text className="text-[18px] ml-2">Language</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between my-4"
            onPress={handleNotificationPress}
          >
            <View className="flex-row items-center space-x-3">
              <Ionicons name="notifications-outline" size={22} />
              <Text className="text-[18px] ml-2">Push Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: "#D1D5DB", true: "#00D2FF" }}
              thumbColor="white"
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.navigate("/Profile/HelpCenter")}
            className="flex-row items-center justify-between my-4"
          >
            <View className="flex-row items-center space-x-3">
              <MaterialIcons name="help-outline" size={22} />
              <Text className="text-[18px] ml-2">Help Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          className="flex-row items-center space-x-3 my-6"
          onPress={() => setShowLogoutModal(true)}
        >
          <AntDesign name="logout" size={22} color="black" />
          <Text className="text-[18px] font-semibold text-red-500 ml-2">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="none"
        transparent
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-3xl px-6 py-6">
            <Text className="text-red-500 text-center text-2xl font-bold mb-4">
              Logout
            </Text>
            <View className='bg-gray-300 w-full h-[1px] my-4' />
            <Text className="text-center text-xl font-bold text-gray-600 my-6">
              Are you sure you want to log out?
            </Text>
            <View className="flex-row justify-between px-4">
              <Pressable
                onPress={() => setShowLogoutModal(false)}
                className="bg-gray-100 rounded-2xl px-8 py-3 flex-1 mr-2"
              >
                <Text className="text-center text-gray-700 text-lg font-bold">
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                onPress={handleLogout}
                className="bg-[#00D2FF] rounded-2xl px-8 py-3 flex-1 ml-2"
              >
                <Text className="text-center text-lg text-white font-bold">
                  Yes, Logout
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;

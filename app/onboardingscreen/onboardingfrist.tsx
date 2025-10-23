import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingFirst() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-14">
  
      

      {/* Skip Button */}
      <View className="items-end">
        <TouchableOpacity onPress={() => router.replace("/home/home")}>
          <Text className="text-gray-500 text-base font-medium">Skip</Text>
        </TouchableOpacity>
      </View>
      {/* Background Ellipses */}
      <View className="absolute top-60 left-10 w-4 h-4 bg-sky-200 rounded-full opacity-60" />
      <View className="absolute top-80 right-4 w-4 h-4 bg-sky-200 rounded-full opacity-60" />
      <View className="absolute top-60 left-60 w-3 h-3 bg-sky-200 rounded-full opacity-60" />
      <View className="absolute top-36 left-20 w-3 h-3 bg-sky-200 rounded-full opacity-60" />
     

      {/* Illustration */}
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("@/assets/images/onBoardingOne.png")}
          className="w-96 h-96"
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text className="text-center text-3xl font-bold text-gray-800 mb-2">
        Easy Booking & Scheduling
      </Text>

      {/* Subtitle */}
      <Text className="text-center text-gray-500 text-base leading-7 mb-8">
        Easily schedule pickups with flexible timing, instant booking, and
        hassle-free recurring transfer options.
      </Text>

      {/* Pagination dots */}
      <View className="flex-row justify-center items-center mb-8">
        <View className="w-3 h-1.5 bg-blue-400 rounded-full mr-2" />
        <View className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2" />
        <View className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
      </View>

      {/* Next Button */}
      <TouchableOpacity
        onPress={() => router.push("/onboardingscreen/onboardingsecond")}
        className="bg-sky-400 py-3 rounded-xl mb-10"
        activeOpacity={0.8}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}

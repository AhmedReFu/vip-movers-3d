
import { useRouter, } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnBoardingSecond() {
  const router = useRouter();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#00D2FF"}}>
    <View className="flex-1 bg-white px-6 mt-4">
      <View className="items-end">
        <TouchableOpacity onPress={() => router.replace("/SignIn")}>
          <Text className="text-gray-500 text-2xl font-medium">Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("@/assets/images/onBoardingSecond.png")}
          className="w-[400px] h-[400px]"
          resizeMode="contain"
        />
      </View>
      <Text className="text-center text-3xl font-bold text-gray-800 mb-2">
        Eco-Friendly Moving
      </Text>
      <Text className="text-center text-gray-500 text-2xl leading-7 mb-20">
        Sustainable transport with electric vehicles, recyclable packaging & carbon footprint tracking for greener deliveries.
      </Text>
      <View className="flex-row justify-center items-center mb-20">
        <View className="w-[6px] h-[6px]  bg-gray-300 rounded-full mr-2" />
        <View className="w-[24px] h-[6px] bg-blue-400 rounded-full mr-2" />
        <View className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/OnBoardingThird")}
          className="bg-sky-400 py-6 rounded-xl mb-16"
        activeOpacity={0.8}
      >
        <Text className="text-white text-center text-3xl font-bold">
          Next
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}

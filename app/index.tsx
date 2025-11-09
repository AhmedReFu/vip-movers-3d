import { images } from "@/constants";
import { router, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import Spinner from "../components/Spinner";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigator = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate('/Tabs')
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <View className="flex-1 items-center justify-center bg-[#00D2FF]" >
      <View className="flex-1 items-center justify-center mt-32 mb-30">
        <View className="absolute w-64 h-64 rounded-full bg-white/15" />
        <View className="absolute w-56 h-56 rounded-full bg-white/20" />
        <Image
          source={images.icon}
          className="rounded-full w-48 h-48   "

        />

      </View>
      <Text className="text-white font-semibold text-4xl ">Services 24/7 Inc</Text>

      <Spinner />
    </View>
  );
}

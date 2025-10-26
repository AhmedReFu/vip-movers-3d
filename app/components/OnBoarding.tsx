import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type OnBoardingProps = {
    buttonName: string;
    title: string;
    widthSize1: string;
    widthSize2: string;
    widthSize3: string;
    description: string;
    skip: boolean;
    routeName: any;
    images: ImageSourcePropType; // 👈 could be ImageSourcePropType (better)
};

const OnBoarding: React.FC<OnBoardingProps> = ({
    buttonName,
    title,
    description,
    images,
    routeName,
    widthSize1,
    widthSize2,
    widthSize3,
    skip
}) => {
    
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
            <View className="flex-1 bg-white px-6">

                <View className="items-end mt-4">
                    <TouchableOpacity onPress={() => router.navigate("/Sign-In")}>
                        {skip && <Text className="text-gray-500 text-xl font-medium ">Skip</Text>}
                    </TouchableOpacity>
                </View>
                <View className="flex-1 justify-center items-center">
                    <Image
                        source={images}
                        className="w-[430px] h-[400px]"
                        resizeMode="contain"
                    />
                </View>
                <Text className="text-center text-2xl font-bold text-gray-800 mb-2">
                    {title}
                </Text>
                <Text className="text-center text-gray-500 text-xl leading-7 mb-16">
                    {description}
                </Text>
                <View className="flex-row justify-center items-center mb-16">
                    <View className={`${widthSize1} h-[6px] rounded-full mr-2`}  />
                    <View className={`${widthSize2} h-[6px] rounded-full mr-2`} />
                    <View className={`${widthSize3} h-[6px] rounded-full`} />
                </View>
                <TouchableOpacity
                    onPress={() => router.navigate(routeName)}
                    className="bg-sky-400 py-4 rounded-xl mb-12"
                    activeOpacity={0.8}
                >
                    <Text className="text-white text-center text-3xl font-bold">
                        {buttonName}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default OnBoarding;
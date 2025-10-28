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
    imagesPath: ImageSourcePropType;
};

const OnBoarding: React.FC<OnBoardingProps> = ({
    buttonName,
    title,
    description,
    imagesPath,
    routeName,
    widthSize1,
    widthSize2,
    widthSize3,
    skip
}) => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
            <View className="bg-white flex-1 px-6">
                <View className="items-end mt-4 pb-4 ">
                    {skip && (
                        <TouchableOpacity onPress={() => router.navigate("/Sign-In")} activeOpacity={0.8}>
                            <Text className="text-gray-500 text-xl">Skip</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View className="flex-1 justify-between  pb-8">
                    <View className="flex-1 justify-center items-center">
                        <Image
                            source={imagesPath}
                            style={{ width: 450, height: 400 }}
                            resizeMode="contain"
                        />
                    </View>

                    <View>
                        <View className="mb-6">
                            <Text className="text-4xl font-bold text-gray-900 mb-3 text-center px-2">
                                {title}
                            </Text>
                            <Text className="text-xl text-gray-500 leading-6 text-center px-4">
                                {description}
                            </Text>
                        </View>
                        <View className="flex-row justify-center my-8">
                            <View className={`${widthSize1} h-2 rounded-full mr-1.5`} />
                            <View className={`${widthSize2} h-2 rounded-full mr-1.5`} />
                            <View className={`${widthSize3} h-2 rounded-full`} />
                        </View>
                        <TouchableOpacity
                            onPress={() => router.navigate(routeName)}
                            className="bg-[#00D2FF] rounded-2xl mb-10"
                            style={{ paddingVertical: 18 }}
                            activeOpacity={0.8}
                        >
                            <Text className="text-white text-center text-lg font-bold">
                                {buttonName}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default OnBoarding;
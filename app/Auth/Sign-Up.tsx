import { images } from "@/constants";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
        <View className='flex-1 bg-white pt-10 px-8'>
          <View className='items-center mb-4 '>
            <Image
              source={images.icon}
              className="rounded-full w-44 h-44"
            />
          </View>
          <View className='items-start'>
            <Text className='text-3xl font-semibold '>Sign Up</Text>
            <Text className='text-lg font-light leading-10'>Hello! Let's join with us</Text>
          </View>
          <View className="flex-1 gap-4 py-5 ">
            <View className="border rounded-xl border-gray-200 w-full pl-4 flex-row items-center justify-items-center">
              <Image source={images.profile} className="w-8" />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Full name"
                className=" h-20 p-4 text-black w-5/6 font-medium text-lg"
              />
            </View>
            <View className="border rounded-xl border-gray-200 w-full pl-4 flex-row items-center justify-items-center">
              <Image source={images.emailIcon} className="w-8" />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter your email"
                keyboardType="email-address"
                className=" h-20 p-4 text-black w-5/6 font-medium text-lg"
              />
            </View>
            <View className="border rounded-xl border-gray-200 w-full pl-4 flex-row items-center justify-items-center">
              <View className=" p-0">
                <Image source={images.lockIcon} className="w-8" />
              </View>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                className=" h-20 text-black w-3/4 pl-4 font-medium text-lg"
                placeholder="Enter your password"
                secureTextEntry={true}
              />
              <View className="pr-6">
                <Image source={images.eyeIcon} className="w-8" />
              </View>
            </View>
            <TouchableOpacity
              className="bg-sky-400 py-6 rounded-xl my-2"
              activeOpacity={0.8}
            >
              <Text className="text-white text-center text-3xl font-bold">
                Sign Up
              </Text>
            </TouchableOpacity>
            <View className="flex justify-center flex-row gap-2 ">
              <Text className=" text-xl text-gray-700">
                Already have an account?
              </Text>
              <Link href="/Auth/Sign-In" className=" text-[#00D2FF] text-xl font-semibold">Sign In</Link>
            </View>
            <View className="flex-row items-center gap-8 justify-items-center max-w-full">
              <Image source={images.line} className="border-gray-500" />
              <Text className="font-semibold">Or</Text>
              <Image source={images.line} className="border-gray-500" />
            </View>
            <View className="flex items-center">
              <Text className="text-xl text-gray-700">Sign Up With</Text>
            </View>
            <View className="flex-row justify-center items-center gap-10">
              <TouchableOpacity
                className="flex-row items-center justify-center border border-gray-300 rounded-xl px-10 py-5 bg-white"
                activeOpacity={0.8}
              >
                <Image
                  className="w-8 h-8 mr-2"
                  source={images.google}
                  resizeMode="contain"
                />
                <Text className="text-black text-center text-xl font-bold">
                  Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row items-center justify-center border border-gray-300 rounded-xl px-10 py-5 bg-white"
                activeOpacity={0.8}
              >
                <Image
                  className="w-8 h-8 mr-2"
                  source={images.facebook}
                  resizeMode="contain"
                />
                <Text className="text-black text-center text-xl font-bold">
                  Facebook
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SignUp
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
        <View className='flex-1 bg-[#00D2FF]'>
          <View className='px-8'>
            <View className='flex-row items-center justify-between my-6'>
              <View className='border-2 border-dashed border-white rounded-full p-1'>
                <Image source={require("@/assets/images/Ahmed-ReFat.jpg")} className='w-16 h-16 rounded-full' />
              </View>
              <View className='grow mx-2'>
                <Text className='text-xl text-white'>Hello,</Text>
                <Text className='text-3xl text-white font-semibold'>Ahmed ReFat</Text>
              </View>
              <View className='relative'>
                <View className='bg-white w-14 h-14 rounded-full items-center justify-center'>
                  <Ionicons name="notifications-outline" size={30} color="#00D2FF" />
                </View>
                <View className="absolute top-3 right-3 w-4 h-4 bg-[#00D2FF] rounded-full border-2 border-white" />
              </View>
            </View>
            <View className='mb-10'>
              <View className="rounded-xl bg-white w-full pl-4 pr-4 flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                  <Ionicons name="search" size={24} color="gray" />
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    className="h-16 text-black flex-1 pl-3 font-medium text-base"
                    placeholder="Search"
                    placeholderTextColor="#9CA3AF"
                  />
                </View>
                <View className="flex-row items-center gap-2">
                  <View className="w-px h-6 bg-gray-300" />
                  <Image source={require("@/assets/images/filter.png")} className="w-6 h-6" />
                </View>
              </View>
            </View>
          </View>
          <View className='bg-white flex-1 rounded-t-3xl pt-10 px-8'>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className='rounded-2xl overflow-hidden mb-6' >
                <Image
                  source={require("@/assets/images/card-background.png")}
                  className='w-full h-full absolute'
                  resizeMode="cover"
                />
                <View className='flex-1 p-5 justify-between' style={{ zIndex: 10 }}>
                  <View className='mb-10'>
                    <Text className='text-4xl font-bold text-black drop-shadow-lg'>
                      VIP Movers
                    </Text>
                    <Text className='text-4xl font-bold text-black drop-shadow-lg'>
                      Services 24/7
                    </Text>
                    <Text className='text-xl text-black drop-shadow-md mt-2'>
                      Floridas #1 Moving Company
                    </Text>
                  </View>
                  <TouchableOpacity className='bg-cyan-400 py-3 px-12 rounded-lg self-start'>
                    <Text className='text-white font-bold text-xl'>
                      Call Us
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className='absolute right-0 left-56 bottom-2 w-56 h-56'>
                  <Image
                    source={require("@/assets/images/moving-truck-new.png")}
                    className='w-full h-full'
                    resizeMode="contain"
                  />
                </View>
              </View>
              <TouchableOpacity className='bg-cyan-400 py-5 rounded-2xl my-4'>
                <Text className='text-white text-center font-bold text-xl'>
                  Donation
                </Text>
              </TouchableOpacity>
              <View className=" items-center justify-items-center max-w-full my-8">
                <View className='bg-gray-200 px-96 py-[0.5px]'>
                </View>
              </View>
              <View className='mb-6'>
                <View className='flex-row items-center justify-between mb-4'>
                  <Text className='text-2xl font-bold text-gray-800'>
                    Our Services
                  </Text>
                  <TouchableOpacity>
                    <Text className='text-cyan-400 font-semibold text-xl'>
                      View all
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>

                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home
import Services from '@/components/Services';
import { images } from '@/constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useEffect, useRef } from 'react';

import { Animated, Easing, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 7000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
        <View className='flex-1 bg-[#00D2FF] '>
          <View className='px-6'>
            <View className='flex-row items-center justify-between my-6'>
              <View className='relative w-[72px] h-[72px]'>
                <Animated.View
                  style={{
                    transform: [{ rotate }],
                  }}
                  className='absolute inset-0 border-2 border-dashed border-white rounded-full'
                />

                {/* Static Image in Center */}
                <View className='absolute inset-0 items-center justify-center'>
                  <Image
                    source={images.ahmedReFat}
                    className='w-16 h-16 rounded-full'
                  />
                </View>
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
                  <Image source={images.filter} className="w-6 h-6" />
                </View>
              </View>
            </View>
          </View>

          <View className='bg-gray-100 flex-1 rounded-t-3xl pt-10 '>
            <ScrollView showsVerticalScrollIndicator={false} className='mb-10'>
              <View className='px-6'>
                <View className='rounded-2xl overflow-hidden mb-6' >
                  <Image
                    source={images.cardBackground}
                    className='w-full h-full absolute'
                    resizeMode="cover"
                  />
                  <View className='flex-1 p-4 justify-between' style={{ zIndex: 10 }}>
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
                    <TouchableOpacity className='bg-cyan-400 py-3 px-12 rounded-lg self-start' activeOpacity={0.8}>
                      <Text className='text-white font-bold text-xl'>
                        Call Us
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className='absolute right-0 left-56 bottom-2 w-56 h-56'>
                    <Image
                      source={images.movingTruck}
                      className='w-full h-full'
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <TouchableOpacity className='bg-cyan-400 py-5 rounded-2xl my-4' activeOpacity={0.8}>
                  <Text className='text-white text-center font-bold text-xl'>
                    Donation
                  </Text>
                </TouchableOpacity>
                <View className=" items-center justify-items-center max-w-full my-8">
                  <View className='bg-gray-200 px-96 py-[0.5px]'>
                  </View>
                </View>

                <View className='mb-6'>
                  <View className=' flex-row items-center justify-between my-6'>
                    <Text className='text-2xl font-bold text-gray-800'>
                      Our Services
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.navigate("/Services")}

                    >
                      <Text className='text-cyan-400 font-semibold text-xl'>
                        View all
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className='flex-row flex-wrap justify-between gap-4 mb-4'>
                    <View className='items-center w-32 h-32'>
                      <Image source={images.packing} className='size-28' />
                      <Text>Packing</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                      <Image source={images.loading} className='size-28' />
                      <Text>Loading</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                      <Image source={images.unloading} className='size-28' />
                      <Text>Unloading</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                      <Image source={images.deliveryTruckIcon} className='size-28' />
                      <Text>Delivery</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                      <Image source={images.removeIcon} className='size-28' />
                      <Text>Junk Removal</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                      <Image source={images.labourIcon} className='size-28' />
                      <Text>Labour Service</Text>
                    </View>
                  </View>



                </View>

              </View>
              <View className='bg-white my-10'>
                <View className=' flex-row items-center justify-between my-4 px-6'>
                  <Text className='text-2xl font-bold text-gray-800'>
                    Popular Services
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.navigate("/Services")}

                  >
                    <Text className='text-cyan-400 font-semibold text-xl'>
                      View all
                    </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView

                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="mb-20 bg-white px-6">
                  <Services images={images.services1} title='Packing' rating='4.8' review='10000' />
                  <Services images={images.services2} title='Loading' rating='4.8' review='10000' />
                  <Services images={images.services3} title='Loading' rating='4.8' review='10000' />
                  <Services images={images.services4} title='Unloading' rating='4.9' review='67,000' />
                </ScrollView>


              </View>
              <View className='bg-white mb-10'>
                <View className=' flex-row items-center justify-between my-4 px-6'>
                  <Text className='text-2xl font-bold text-gray-800'>
                    Popular Services
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.navigate("/Services")}

                  >
                    <Text className='text-cyan-400 font-semibold text-xl'>
                      View all
                    </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="mb-20 bg-white px-6">
                  <Services images={images.services1} title='Packing' rating='4.8' review='10000' />
                  <Services images={images.services2} title='Loading' rating='4.8' review='10000' />
                  <Services images={images.services3} title='Loading' rating='4.8' review='10000' />
                  <Services images={images.services4} title='Unloading' rating='4.9' review='67,000' />
                </ScrollView>


              </View>
            </ScrollView>
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home
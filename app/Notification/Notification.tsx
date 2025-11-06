import TopBar from '@/components/TopBar';
import { images } from "@/constants";
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      
        <View className='bg-white px-6'>
          <View className="  py-4 flex-row items-center">
            <TopBar />
            <Text className="text-xl font-bold text-gray-800 ml-4">Notification</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='my-10'>
            <Text className='text-xl font-semibold'>Today</Text>
          </View>
          <View className=' border border-gray-300 rounded-2xl flex-row items-center gap-4 p-2 mb-6'>
            <Image source={images.Wallet} className='w-32 h-32' />
            <View>
              <Text className='text-xl font-semibold'>Payment Successful!</Text>
              <Text>You have made a services payment</Text>
            </View>
          </View>
          <View className=' border border-gray-300 rounded-2xl flex-row items-center gap-4 p-2 mb-6'>
            <Image source={images.Category} className='w-32 h-32' />
            <View>
              <Text className='text-xl font-semibold'>New Category Services!</Text>
              <Text>Now the plumbing service is available</Text>
            </View>
          </View>
          <View className='my-8'>
            <Text className='text-xl font-semibold'>Yesterday</Text>
          </View>
          <View className=' border border-gray-300 rounded-2xl flex-row items-center gap-4 p-2 mb-6'>
            <Image source={images.Offer} className='w-32 h-32' />
            <View>
              <Text className='text-xl font-semibold'>Today’s Special Offers</Text>
              <Text>You get a special promo today!</Text>
            </View>
          </View>
          <View className='my-8'>
            <Text className='text-xl font-semibold'>December 22, 2024</Text>
          </View>
          <View className=' border border-gray-300 rounded-2xl flex-row items-center gap-4 p-2 mb-6'>
            <Image source={images.Wallet} className='w-32 h-32' />
            <View>
              <Text className='text-xl font-semibold'>Credit Card Connected!</Text>
              <Text>Credit Card has been linked!</Text>
            </View>
          </View>
        </ScrollView>
        </View>
     
    </SafeAreaView>
  )
}

export default Notification
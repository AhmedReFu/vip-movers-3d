
import { images } from '@/constants'
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ServicesDetails = () => {
  return (
    <View className='flex-2 bg-white'>
      <View>
        <Image source={images.services1} className='absolute h-[350px] w-full' resizeMode='cover' />
        <View className='mt-16 mx-6 flex-row items-center gap-4'>
          <View className="">
            <TouchableOpacity onPress={() => router.back()}>
              <FontAwesome6 name="arrow-left" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <Text className='text-xl font-bold text-white'>Services Details</Text>
        </View>
      </View>

    </View>
  )
}

export default ServicesDetails
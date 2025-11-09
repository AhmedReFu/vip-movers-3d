import { images } from '@/constants'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../components/TopBar'

const Services = () => {
    return (
        <SafeAreaView className='flex-1 bg-primary'>
            <View className='flex-1 bg-white py-4 px-6'>
                <View className='flex-row items-start'>
                    <TopBar />
                    <View className='ml-6'>
                        <Text className='text-3xl font-bold'>All Services</Text>
                    </View>
                </View>
                <View className='flex-row flex-wrap gap-6 my-10'>
                    <View className='items-center w-32 h-32'>
                        <Image source={images.packing} className='size-28' resizeMode='cover' />
                        <Text>Packing</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.loading} className='size-28' resizeMode='cover' />
                        <Text>Loading</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.unloading} className='size-28' resizeMode='cover' />
                        <Text>Unloading</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.deliveryTruckIcon} className='size-28' resizeMode='cover' />
                        <Text>Delivery</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.removeIcon} className='size-28' resizeMode='cover' />
                        <Text>Junk Removal</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.labourIcon} className='size-28' resizeMode='cover' />
                        <Text>Labour Service</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.cleaning} className='size-24 my-4' resizeMode='contain' />
                        <Text>Cleaning</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.labourTruck} className='size-24 my-4' resizeMode='contain' />
                        <Text>Labor & Truck</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.longDistance} className='size-24 my-4' resizeMode='contain' />
                        <Text>Long Distance</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.piano} className='size-24 my-4' resizeMode='contain' />
                        <Text>Piano</Text>
                    </View>
                    <View className='items-center w-32 h-32 my-2'>
                        <Image source={images.safe} className='size-24 my-4' resizeMode='contain' />
                        <Text>Safe</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Services
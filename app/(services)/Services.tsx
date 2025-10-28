import { images } from '@/constants'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../components/TopBar'

const Services = () => {
    return (
        <SafeAreaView className='flex-1 '>
            <View className='flex-1 bg-white pt-10 px-6'>
                <View className='flex-row items-start'>
                    <TopBar />
                    <View className='ml-6'>
                        <Text className='text-3xl font-bold'>All Services</Text>
                    </View>
                </View>
                <View className='flex-row flex-wrap gap-6 mb-20'>
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
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.cleaning} className='size-28' />
                        <Text>Cleaning</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.labourTruck} className='size-28' />
                        <Text>Labor & Truck</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.longDistance} className='size-28' />
                        <Text>Long Distance</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.piano} className='size-28' />
                        <Text>Piano</Text>
                    </View>
                    <View className='items-center w-32 h-32 '>
                        <Image source={images.safe} className='size-28' />
                        <Text>Safe</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Services
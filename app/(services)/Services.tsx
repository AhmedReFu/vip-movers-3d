import TopBar from '@/components/TopBar'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Services = () => {
    return (
        <SafeAreaView className='flex-1 bg-primary'>
            <View className='flex-1 bg-white pt-10 px-6'>
                <View className='flex-row items-start'>
                    <TopBar />
                    <View className='ml-6'>
                        <Text className='text-3xl font-bold'>All Services</Text>
                    </View>
                </View>
                <View className='flex-row flex-wrap gap-6 mb-20'>
                    <View className='flex-row gap-6'>
                        <TouchableOpacity className='w-24 p-4  bg-primary rounded-full items-center justify-center'>
                            <Text>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='w-24 p-4 border border-gray-700 rounded-full items-center justify-center'>
                            <Text>Packing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='w-24 p-4  border border-gray-700  rounded-full items-center justify-center'>
                            <Text>Loading</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Services
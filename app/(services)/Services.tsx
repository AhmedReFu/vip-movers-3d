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
                <View className='flex-row flex-wrap items-center justify-center justify-items-center gap-6'>
                    <View className='items-center size-28'>
                        <Image source={require("@/assets/images/packing-3d.png")} />
                        <Text>Packing</Text>
                    </View>
                    <View className='items-center'>
                        <Image source={require("@/assets/images/loading.png")} />
                        <Text>Loading</Text>
                    </View>
                    <View className='items-center'>
                        <Image source={require("@/assets/images/unloading.png")} />
                        <Text>Unloading</Text>
                    </View>
                    <View className='items-center'>
                        <Image source={require("@/assets/images/packing-3d.png")} />
                        <Text>Packing</Text>
                    </View>
                    <View className='items-center'>
                        <Image source={require("@/assets/images/loading.png")} />
                        <Text>Loading</Text>
                    </View>
                    <View className='items-center'>
                        <Image source={require("@/assets/images/unloading.png")} />
                        <Text>Unloading</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Services
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScheduleShifting = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>

            <View className='bg-white px-5 mt-4'>
                <View className='flex-row items-center gap-4'>
                    <TouchableOpacity onPress={() => router.back()}>
                        <FontAwesome6 name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className='text-xl font-bold '>Schedule Shifting</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ScheduleShifting
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      <View className='flex-1 bg-white pt-20 px-8'>
        <View className='items-center mb-10 '>
          <Image
            source={require("../../assets/images/icon.png")}
            className="rounded-full w-48 h-48   "

          />
        </View>
        <View className='items-start'>
          <Text className='text-4xl font-semibold '>Welcome Back!</Text>
          <Text className='text-2xl leading-10'>Hey! Good to see you again</Text>
        </View>
        <View className='mt-8'>
          <TextInput
            
            value="name"
            placeholder={'Please type here…'}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}


export default SignIn
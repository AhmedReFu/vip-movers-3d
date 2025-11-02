import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '@/constants'
import Spinner from '@/components/Spinner'
import OnBoardingFirst from '@/OnBoarding/OnBoardingFirst';
import {

    useNavigation,
} from '@react-navigation/native';

const SplashScreen = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
  return (
      <View className="flex-1 items-center justify-center bg-[#00D2FF]" >
          <View className="flex-1 items-center justify-center mt-32 mb-30">
              <View className="absolute w-64 h-64 rounded-full bg-white/15" />
              <View className="absolute w-56 h-56 rounded-full bg-white/20" />
              <Image
                
                  source={images.icon}
                  className="rounded-full w-48 h-48   "

              />

          </View>
          <Text className="text-white font-semibold text-4xl ">Services 24/7 Inc</Text>

          <Spinner />
      </View>
  )
}

export default SplashScreen
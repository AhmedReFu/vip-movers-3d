import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';


type OnBoardingProps = {
    title?: string;
    review?: string;
    rating?: string;
    images?: ImageSourcePropType;
};

const Services = ({ images, title, rating, review }: OnBoardingProps) => {

  return (
      <TouchableOpacity
          className='bg-white pr-6'
          activeOpacity={0.8}
          onPress={() => router.navigate("/Services/ServicesDetails")}
      >
          <View className='mr-2'>
              <Image source={images} className='w-64 h-44 rounded-xl' resizeMode='cover' />
              <Text className='text-2xl my-2'>{title}</Text>
              <View className='flex-row my-2'>

                  <View className='flex-row px-2'>
                      <FontAwesome name="star-half-full" size={20} color="#FB9400" />
                      <Text className='text-xl mx-2'>{rating}</Text>
                  </View>
                  <View>
                      <Text className='text-xl'> | {review} reviews</Text>
                  </View>
              </View>
              
          </View>
          
    </TouchableOpacity>
  )
}

export default Services
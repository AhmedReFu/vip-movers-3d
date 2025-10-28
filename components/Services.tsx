import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';


type OnBoardingProps = {
    title: string;
    review: string;
    rating: string;
    images: ImageSourcePropType;
};

const Services = ({ images, title, rating, review }: OnBoardingProps) => {

  return (
      <TouchableOpacity
          className='bg-gray-700 mr-8'
          activeOpacity={0.8}
      >
          <View className=''>
              <Image source={images} />
              <Text className='text-2xl my-2'>{title}</Text>
              <View className='flex-row'>
                  <View className='flex-row mr-2'>
                      <FontAwesome name="star-half-full" size={20} color="#FB9400" />
                      <Text className='text-xl ml-2'>{rating}</Text>
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
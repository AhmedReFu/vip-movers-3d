import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

type OnBoardingProps = {
    title?: string;
    images?: ImageSourcePropType;
};

const ServicesArea = ({ images, title, }: OnBoardingProps) => {
    return (
        <TouchableOpacity
            className='bg-gray-700 pr-4'
            activeOpacity={0.8}
        >
            <View className=' h-64 pr-6'>
                <Image source={images} className='w-56 h-44 rounded-xl' />
                <Text className='text-2xl my-2'>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ServicesArea
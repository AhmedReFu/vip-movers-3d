import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

type OnBoardingProps = {
    title?: string;
    images?: ImageSourcePropType;
};

const ServicesArea = ({ images, title, }: OnBoardingProps) => {
    return (
        <TouchableOpacity
            className='bg-white pr-6'
            activeOpacity={0.8}
        >
            <View className='mr-2'>
                <Image source={images} className='w-64 h-44 rounded-xl' resizeMode='cover' />
                <Text className='text-2xl my-2'>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ServicesArea
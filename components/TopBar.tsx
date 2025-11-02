import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type TopBarProps = {
    className?: string;
};


const TopBar = ({ className }: TopBarProps) => {
    return (
        <View className={className}>
            <TouchableOpacity onPress={() => router.back()}>
                <FontAwesome6 name="arrow-left" size={28} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default TopBar
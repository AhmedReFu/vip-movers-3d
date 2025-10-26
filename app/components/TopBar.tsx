import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';



const TopBar = () => {
    return (
        <View className="items-start mb-20">
            <TouchableOpacity onPress={() => router.back()}>
                <FontAwesome6 name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default TopBar
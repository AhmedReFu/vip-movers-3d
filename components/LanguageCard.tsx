import { LanguageCardProps } from '@/type-d';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';



const LanguageCard = ({ flag, name, isSelected, onPress }: LanguageCardProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className={`flex-row items-center justify-between border-2 rounded-2xl p-5 mb-3 ${isSelected
                    ? 'bg-cyan-50 border-[#00D2FF]'
                    : 'bg-white border-gray-200'
                }`}
        >
            <View className="flex-row items-center">
                <Text className="text-3xl mr-4">{flag}</Text>
                <Text className="text-lg font-medium text-gray-800">{name}</Text>
            </View>

            <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${isSelected
                    ? 'bg-[#00D2FF] border-[#00D2FF]'
                    : 'bg-white border-gray-300'
                }`}>
                {isSelected && (
                    <Ionicons name="checkmark" size={16} color="white" />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default LanguageCard;
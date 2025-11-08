import TopBar from '@/components/TopBar';
import { images } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ['General', 'Account', 'Services', 'Loading']

const HelpCenter = () => {
    return (
        <SafeAreaView className="flex-1 bg-primary">

            <View className='flex-1 bg-white px-6'>
                <View className="flex-row items-center justify-start  py-4">
                    <TopBar />
                    <Text className="text-xl ml-4 font-semibold text-gray-800">
                        Help Center
                    </Text>
                    <View className="w-10" />
                </View>
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="my-4 "
                    >
                        {categories.map((cat, i) => (
                            <TouchableOpacity
                                key={i}
                                className={`px-6 py-2 mr-3 rounded-full ${i === 0 ? 'bg-primary px-5' : 'border border-[#20DFFF] '
                                    }`}
                            >
                                <Text
                                    className={`text-xl   font-semibold ${i === 0 ? 'text-white' : 'text-gray-700'
                                        }`}
                                >
                                    {cat}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View className='my-6'>
                        <View className="rounded-xl bg-white w-full pl-4 pr-4 flex-row items-center justify-between border border-[#00D2FF]">
                            <View className="flex-row items-center flex-1">
                                <Ionicons name="search" size={24} color="#00D2FF" />
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    className="h-16 text-black flex-1 pl-3 font-medium text-base"
                                    placeholder="Search issue"
                                    placeholderTextColor="#9CA3AF"
                                />
                            </View>

                            <TouchableOpacity>
                                <View className="flex-row items-center gap-2">
                                    <View className="w-px h-6 bg-gray-300" />
                                    <Image source={images.filter} className="w-6 h-6" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className='bg-gray-50 rounded-3xl p-5'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='text-xl font-bold'>What is Hamo?</Text>
                            <MaterialCommunityIcons name="pan-bottom-right" size={44} color="#20DFFF" />
                        </View>
                        <View className='bg-gray-300 w-full h-[1px] my-4' />
                        <Text className='text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum asperiores voluptas corporis magni? Quis officiis suscipit iure modi fugiat.
                        </Text>
                    </View>
                    <View className='bg-gray-50 rounded-3xl my-4 p-5'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='text-xl font-bold'>How to use Hamo?</Text>
                            <MaterialCommunityIcons name="pan-bottom-right" size={44} color="#20DFFF" />
                        </View>
                        
                    </View>
                    <View className='bg-gray-50 rounded-3xl my-4 p-5'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='text-xl font-bold'>How do I cancel a booking??</Text>
                            <MaterialCommunityIcons name="pan-bottom-right" size={44} color="#20DFFF" />
                        </View>
                       
                    </View>
                    <View className='bg-gray-50 rounded-3xl my-4 p-5'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='text-xl font-bold'>Is Hamo free to use?</Text>
                            <MaterialCommunityIcons name="pan-bottom-right" size={44} color="#20DFFF" />
                        </View>
                       
                    </View>
                    
                </View>
            </View>

        </SafeAreaView>
    )
}

export default HelpCenter
import TopBar from '@/components/TopBar'
import { images } from '@/constants'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const categories = ['All', 'Cleaning', 'Repairing', 'Loading']

const services = [
    { id: 1, title: 'Packing', image: images.services1 },
    { id: 2, title: 'Loading', image: images.services2 },
    { id: 3, title: 'Unloading', image: images.services3 },
    { id: 4, title: 'Pickup Delivery', image: images.services4 },
    { id: 5, title: 'Pickup Delivery', image: images.services4 },
    { id: 6, title: 'Pickup Delivery', image: images.services4 },
]

const Services = () => {
    return (
        <SafeAreaView className="flex-1 bg-primary">
            <View className="bg-white  px-6 pt-4 pb-2">
                <View className='flex-row items-start'>
                    <TopBar className='mb-6' />
                    <View className='ml-6'>
                        <Text className='text-2xl font-bold'>Popular Services</Text>
                    </View>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mb-4 "
                >
                    {categories.map((cat, i) => (
                        <TouchableOpacity
                            key={i}
                            className={`px-6 py-2 mr-3 rounded-full ${i === 0 ? 'bg-primary px-5' : 'border border-gray-300 '
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
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                className="px-4"
                style={{ backgroundColor: "white" }}
            >
                {services.map((service) => (
                    <View
                        key={service.id}
                        className="flex-row bg-white rounded-2xl shadow-sm mb-5 overflow-hidden"
                        style={{
                            elevation: 6,
                            shadowColor: '#000',
                            shadowOpacity: 0.8,
                            shadowRadius: 0.3,

                        }}
                    >
                        <Image
                            source={service.image}
                            className="w-44 h-28 rounded-xl m-3"
                            resizeMode="cover"
                        />
                        <View className="flex-1 justify-center px-2">
                            <Text className="text-xl font-semibold mb-1">
                                {service.title}
                            </Text>
                            <View className="flex-row items-center mb-2">
                                <FontAwesome name="star" size={16} color="#FB9400" />
                                <Text className="ml-1 text-gray-700 font-medium">4.9</Text>
                                <Text className="text-gray-500 ml-1">| 6,182 reviews</Text>
                            </View>
                            <Text className="text-primary text-lg font-bold">$19</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Services

import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const OrderDetails = () => {
    const [paymentMethod, setPaymentMethod] = useState<'online' | 'cash'>('online')

    const pickupLocation = '2045 Lodgeville Street, Eagan'
    const dropoffLocation = '3329 Joyce Stree, PA, USA'

    const costs = {
        vehicle: 20,
        distance: 15,
        additionalHours: 10,
        service: 2
    }

    const total = costs.vehicle + costs.distance + costs.additionalHours + costs.service

    return (
        <View className="flex-1 ">
            <StatusBar style="dark" />

            {/* Header */}
            <View className="px-6 pt-12 pb-4 bg-white ">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold ml-4">Order Details</Text>
                </View>
            </View>

            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                {/* Locations Card */}
                <View className="bg-gray-50 rounded-2xl p-5 my-6">
                    {/* Pickup Location */}
                    <View className="flex-row items-start mb-4">
                        <View className="bg-black rounded-full p-1.5 mt-1">
                            <View className="bg-white rounded-full h-2.5 w-2.5" />
                        </View>
                        <Text className="text-base ml-3 flex-1">{pickupLocation}</Text>
                    </View>

                    {/* Dotted Line */}
                    <View className="ml-3 mb-4">
                        <View className="w-0.5 h-1 bg-gray-400 mb-1" />
                        <View className="w-0.5 h-1 bg-gray-400 mb-1" />
                        <View className="w-0.5 h-1 bg-gray-400 mb-1" />
                        <View className="w-0.5 h-1 bg-gray-400 mb-1" />
                    </View>

                    {/* Dropoff Location */}
                    <View className="flex-row items-start">
                        <MaterialIcons name="location-pin" size={24} color="#00D2FF" />
                        <Text className="text-base ml-2 flex-1">{dropoffLocation}</Text>
                    </View>
                </View>

                {/* Order Details Section */}
                <View className="bg-gray-50 rounded-2xl p-5 mb-6">
                    {/* Header with Edit */}
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-base font-bold">Order Details</Text>
                        <TouchableOpacity className="flex-row items-center">
                            <MaterialIcons name="edit" size={18} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#00D2FF] px-4 py-2 rounded-full">
                            <Text className="text-white text-sm font-semibold">Add Extra Hour</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Cost Breakdown */}
                    <View className="space-y-4">
                        <View className="flex-row justify-between py-2">
                            <Text className="text-gray-600">Vehicle (Mini Truck)</Text>
                            <Text className="font-semibold">${costs.vehicle}</Text>
                        </View>

                        <View className="flex-row justify-between py-2">
                            <Text className="text-gray-600">Distance Cost</Text>
                            <Text className="font-semibold">${costs.distance}</Text>
                        </View>

                        <View className="flex-row justify-between py-2">
                            <Text className="text-gray-600">Additional Hours Cost</Text>
                            <Text className="font-semibold">${costs.additionalHours}</Text>
                        </View>

                        <View className="border-t border-gray-200 my-2" />

                        <View className="flex-row justify-between py-2">
                            <Text className="text-gray-600">Service Charge</Text>
                            <Text className="font-semibold">${costs.service}</Text>
                        </View>

                        <View className="border-t border-gray-300 my-2" />

                        {/* Total */}
                        <View className="flex-row justify-between py-2">
                            <View>
                                <Text className="text-lg font-bold">Total</Text>
                                <Text className="text-xs text-gray-500">(Estimated Cost)</Text>
                            </View>
                            <Text className="text-2xl font-bold">${total}</Text>
                        </View>
                    </View>
                </View>

                {/* Payment Method */}
                <View className="flex-row gap-4 mb-8">
                    {/* Online Payment */}
                    <TouchableOpacity
                        onPress={() => setPaymentMethod('online')}
                        className={`flex-1 items-center py-6 rounded-2xl border-2 ${paymentMethod === 'online'
                                ? 'bg-gray-50 border-[#00D2FF]'
                                : 'bg-white border-gray-200'
                            }`}
                    >
                        <View className="relative">
                            <FontAwesome
                                name="credit-card"
                                size={32}
                                color={paymentMethod === 'online' ? '#000' : '#999'}
                            />
                            {paymentMethod === 'online' && (
                                <View className="absolute -top-2 -right-2 bg-[#00D2FF] rounded-full p-0.5">
                                    <Ionicons name="checkmark" size={12} color="white" />
                                </View>
                            )}
                        </View>
                        <Text className={`mt-3 font-bold ${paymentMethod === 'online' ? 'text-black' : 'text-gray-500'
                            }`}>
                            Online Payment
                        </Text>
                    </TouchableOpacity>

                    {/* Cash */}
                    <TouchableOpacity
                        onPress={() => setPaymentMethod('cash')}
                        className={`flex-1 items-center py-6 rounded-2xl border-2 ${paymentMethod === 'cash'
                                ? 'bg-gray-50 border-[#00D2FF]'
                                : 'bg-white border-gray-200'
                            }`}
                    >
                        <View className="relative">
                            <FontAwesome
                                name="money"
                                size={32}
                                color={paymentMethod === 'cash' ? '#000' : '#999'}
                            />
                            {paymentMethod === 'cash' && (
                                <View className="absolute -top-2 -right-2 bg-[#00D2FF] rounded-full p-0.5">
                                    <Ionicons name="checkmark" size={12} color="white" />
                                </View>
                            )}
                        </View>
                        <Text className={`mt-3 font-bold ${paymentMethod === 'cash' ? 'text-black' : 'text-gray-500'
                            }`}>
                            Cash
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Confirm Button */}
            <View className="px-6 pb-8 pt-4 bg-white border-t border-gray-100">
                <TouchableOpacity
                    onPress={() => {
                        // Handle confirmation
                        console.log('Order confirmed with', paymentMethod)
                    }}
                    className="bg-[#00D2FF] py-6 rounded-2xl"
                >
                    <Text className="text-white text-center font-bold text-xl">
                        Confirm (${total + 9})
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderDetails
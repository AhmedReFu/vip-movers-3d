import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, Polyline } from 'react-native-maps';

const LocationScreen = () => {
    const [selectedVehicle, setSelectedVehicle] = useState<string>('Mini Truck');

    const pickupLocation = {
        latitude: 37.78825,
        longitude: -122.4324,
        address: '2045 Lodgeville Road, Eagan...'
    };

    const dropoffLocation = {
        latitude: 37.79825,
        longitude: -122.4424,
        address: '3329 Joyce Stree'
    };

    const vehicles = [
        { name: 'Mini Truck', capacity: '1.8 Ton', icon: '🚐' },
        { name: 'Pickup', capacity: '1.2Ton', icon: '🚙' },
        { name: 'Large Truck', capacity: '5 Ton', icon: '🚚' },
    ];

    const handleBack = () => {
        // Use your navigation method here
        // Option 1: expo-router
        // router.back();

        // Option 2: React Navigation
        // navigation.goBack();

        console.log('Go back');
    };

    const handleConfirm = () => {
        console.log('Selected Vehicle:', selectedVehicle);
        console.log('Pickup:', pickupLocation.address);
        console.log('Dropoff:', dropoffLocation.address);

        // Navigate to next screen
        // router.push('/confirmation');
        // or
        // navigation.navigate('Confirmation');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center justify-between px-5 py-3 bg-white">
                <TouchableOpacity onPress={handleBack}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View className="flex-1 ml-4">
                    <Text className="text-lg font-semibold text-gray-900">Friday, May 11, 2021</Text>
                    <Text className="text-sm text-gray-500">8:00 pm</Text>
                </View>
            </View>

            {/* Map Section */}
            <View className="h-80 bg-gray-100 relative">
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.79025,
                        longitude: -122.4374,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                    }}
                >
                    {/* Pickup Marker */}
                    <Marker
                        coordinate={{
                            latitude: pickupLocation.latitude,
                            longitude: pickupLocation.longitude
                        }}
                    >
                        <View className="bg-cyan-400 rounded-full p-2">
                            <Ionicons name="location" size={20} color="white" />
                        </View>
                    </Marker>

                    {/* Dropoff Marker */}
                    <Marker
                        coordinate={{
                            latitude: dropoffLocation.latitude,
                            longitude: dropoffLocation.longitude
                        }}
                    >
                        <View className="bg-cyan-400 rounded-full p-2">
                            <Ionicons name="location" size={20} color="white" />
                        </View>
                    </Marker>

                    {/* Route Line */}
                    <Polyline
                        coordinates={[
                            { latitude: pickupLocation.latitude, longitude: pickupLocation.longitude },
                            { latitude: 37.79025, longitude: -122.4374 },
                            { latitude: dropoffLocation.latitude, longitude: dropoffLocation.longitude }
                        ]}
                        strokeColor="#8B5CF6"
                        strokeWidth={4}
                    />
                </MapView>

                {/* Recenter Button */}
                <TouchableOpacity
                    className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                >
                    <Ionicons name="locate" size={24} color="black" />
                </TouchableOpacity>

                {/* Address Label on Map */}
                <View className="absolute bottom-4 left-4 bg-cyan-400 rounded-full px-4 py-2 flex-row items-center">
                    <Ionicons name="location" size={16} color="white" className="mr-2" />
                    <Text className="text-white font-medium text-sm">2045 Lodgeville Street, Eagan</Text>
                </View>
            </View>

            {/* Address Details */}
            <View className="px-5 py-4 border-b border-gray-100">
                {/* Pickup Address */}
                <View className="flex-row items-start mb-3">
                    <View className="w-6 h-6 rounded-full border-2 border-gray-400 mr-3 mt-1" />
                    <View className="flex-1 flex-row items-center justify-between">
                        <Text className="text-gray-900 font-medium flex-1">
                            2045 Lodgeville Road, Eagan...
                        </Text>
                        <TouchableOpacity>
                            <Ionicons name="close" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Dotted Line */}
                <View className="ml-3 border-l-2 border-dotted border-gray-300 h-4" />

                {/* Dropoff Address */}
                <View className="flex-row items-start">
                    <View className="mr-3 mt-1">
                        <Ionicons name="location" size={24} color="#06B6D4" />
                    </View>
                    <Text className="text-gray-900 font-medium flex-1">3329 Joyce Stree</Text>
                </View>
            </View>

            {/* Vehicle Selection */}
            <View className="px-5 py-4 flex-1">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="flex-row" style={{ gap: 12 }}>
                        {vehicles.map((vehicle, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedVehicle(vehicle.name)}
                                className={`rounded-2xl p-4 items-center justify-center ${selectedVehicle === vehicle.name
                                        ? 'bg-gray-900'
                                        : 'bg-gray-100'
                                    }`}
                                style={{ width: 100 }}
                            >
                                <Text className="text-4xl mb-2">{vehicle.icon}</Text>
                                <Text
                                    className={`font-semibold text-sm ${selectedVehicle === vehicle.name
                                            ? 'text-white'
                                            : 'text-gray-900'
                                        }`}
                                >
                                    {vehicle.name}
                                </Text>
                                <Text
                                    className={`text-xs ${selectedVehicle === vehicle.name
                                            ? 'text-gray-300'
                                            : 'text-gray-500'
                                        }`}
                                >
                                    - {vehicle.capacity}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            {/* Confirm Button */}
            <View className="px-5 py-4 bg-white border-t border-gray-100">
                <TouchableOpacity
                    onPress={handleConfirm}
                    className="bg-cyan-400 rounded-2xl py-4 items-center active:bg-cyan-500"
                >
                    <Text className="text-white text-lg font-semibold">Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LocationScreen;

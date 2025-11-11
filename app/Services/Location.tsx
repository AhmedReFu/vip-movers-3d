import TopBar from '@/components/TopBar'
import { images } from '@/constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import * as ExpoLocation from 'expo-location'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'

const trucks = [
    { id: 1, name: 'Mini Truck', ton: '1.8 Ton', image: images.truck1 },
    { id: 2, name: 'Pickup', ton: '1.2 Ton', image: images.car },
    { id: 3, name: 'Large Truck', ton: '5 Ton', image: images.truck2 },
]

// Define the two locations
const pickupLocation = {
    latitude: 44.8041,
    longitude: -93.1669,
    address: '2045 Lodgeville Road, Eagan'
}

const dropoffLocation = {
    latitude: 44.9537,
    longitude: -93.0900,
    address: '3329 Joyce Street'
}

const Location = () => {
    const [location, setLocation] = useState<ExpoLocation.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [selectedTruck, setSelectedTruck] = useState<number>(1)

    const now = new Date()
    const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now)
    const fullDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(now)
    const time = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).format(now)

    useEffect(() => {
        (async () => {
            let { status } = await ExpoLocation.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission denied')
                return
            }
            const loc = await ExpoLocation.getCurrentPositionAsync({})
            setLocation(loc)
        })()
    }, [])

    // Calculate the center point between the two locations
    const centerLatitude = (pickupLocation.latitude + dropoffLocation.latitude) / 2
    const centerLongitude = (pickupLocation.longitude + dropoffLocation.longitude) / 2

    // Calculate delta to show both points
    const latitudeDelta = Math.abs(pickupLocation.latitude - dropoffLocation.latitude) * 2
    const longitudeDelta = Math.abs(pickupLocation.longitude - dropoffLocation.longitude) * 2

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <View className="px-6 pt-12 pb-4">
                <View className="flex-row items-center">
                    <TopBar />
                    <View className="ml-4">
                        <Text className="text-2xl font-bold">{`${dayName}, ${fullDate}`}</Text>
                    </View>
                </View>
                <Text className="text-xl text-center font-semibold mt-2">{time}</Text>
            </View>
            <View className="flex-1 rounded-t-3xl overflow-hidden">
                <MapView
                    style={{ flex: 1, }}
                    initialRegion={{
                        latitude: centerLatitude,
                        longitude: centerLongitude,
                        latitudeDelta: latitudeDelta,
                        longitudeDelta: longitudeDelta,
                    }}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                >
                    {/* Pickup Location Marker */}
                    <Marker
                        coordinate={{
                            latitude: pickupLocation.latitude,
                            longitude: pickupLocation.longitude,
                        }}
                        title="Pickup Location"
                        description={pickupLocation.address}
                        pinColor="#1B1D21"
                    />

                    {/* Dropoff Location Marker */}
                    <Marker
                        coordinate={{
                            latitude: dropoffLocation.latitude,
                            longitude: dropoffLocation.longitude,
                        }}
                        title="Dropoff Location"
                        description={dropoffLocation.address}
                        pinColor="#00D2FF"
                    />

                    {/* Route Line between locations */}
                    <Polyline
                        coordinates={[
                            { latitude: pickupLocation.latitude, longitude: pickupLocation.longitude },
                            { latitude: dropoffLocation.latitude, longitude: dropoffLocation.longitude },
                        ]}
                        strokeColor="#00D2FF"
                        strokeWidth={4}

                    />
                </MapView>
            </View>
            <View className="bg-white absolute bottom-0 w-full rounded-t-3xl p-5 shadow-lg">
                <View className='flex-row items-center gap-4'>
                    <MaterialIcons name="my-location" size={28} color="black" />
                    <Text className="text-xl font-bold">2045 Lodgeville Road, Eagan</Text>
                    <Ionicons name="close-outline" size={28} color="black" />
                </View>
                <View className='flex-row gap-8 my-2 items-center'>
                    <View className='ml-3'>
                        <View className='rounded-full m-[1px] h-1 w-1 bg-primary' />
                        <View className='rounded-full m-[1px] h-1 w-1 bg-primary' />
                        <View className='rounded-full m-[1px] h-1 w-1 bg-primary' />
                        <View className='rounded-full m-[1px] h-1 w-1 bg-primary' />
                        <View className='rounded-full m-[1px] h-1 w-1 bg-primary' />
                    </View>
                    <View className='bg-gray-100 h-1 w-full' />
                </View>
                <View className="mb-2 flex-row gap-4">
                    <MaterialCommunityIcons name="map-marker-star" size={32} color="#00D2FF" />
                    <Text className="text-xl">3329 Joyce Street</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
                    {trucks.map((truck) => (
                        <TouchableOpacity
                            key={truck.id}
                            onPress={() => setSelectedTruck(truck.id)}
                            className={`p-3 mr-3 rounded-2xl border ${selectedTruck === truck.id ? 'border-primary bg-[#1B1D21]' : 'border-gray-200'
                                }`}
                        >
                            <Image source={truck.image} className="w-32 h-24 mb-2" resizeMode="contain" />
                            <View className='bg-gray-100 h-[2px] w-full my-2' />
                            <Text className={`text-center text-lg ${selectedTruck === truck.id ? 'text-white' : 'text-gray-500'}`}>{truck.name}</Text>
                            <Text className={`text-center text-lg ${selectedTruck === truck.id ? 'text-white' : 'text-gray-500'}`}>~ {truck.ton}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <TouchableOpacity
                    onPress={() => router.navigate('/Services/OrderDetails')}
                    className="bg-primary my-2 p-6 rounded-2xl">
                    <Text className="text-white text-center font-bold text-xl">Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Location
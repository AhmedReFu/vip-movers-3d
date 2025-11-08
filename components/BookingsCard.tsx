import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { BookingStatus } from '@/type-d';




const BookingsCard = ({ booking, status }: { booking: any; status: BookingStatus }) => {
  const handleButtonPress = () => {
    if (status === 'active') {
      router.push("/Booking/CancelBooking");
    } else if (status === 'completed') {
      alert("Order Again functionality coming soon!");
    }
  };

  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
      <View className="flex-row">
        <Image
          source={booking.image}
          className="w-44 h-28 rounded-xl"
          resizeMode="cover"
        />
        <View className="flex-1 ml-4">
          <Text className="text-gray-800 font-bold text-xl mb-1">
            {booking.title}
          </Text>
          <View className="flex-row items-center mb-1">
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text className="text-gray-600 text-lg ml-1">
              {booking.rating} | {booking.reviews} reviews
            </Text>
          </View>
          <Text className="text-cyan-400 font-bold text-xl">
            ${booking.price}
          </Text>
        </View>
      </View>
      {status !== 'cancelled' && (
        <TouchableOpacity
          onPress={handleButtonPress}
          className={`mt-2 py-3 w-44 rounded-xl ${status === 'active' ? 'bg-cyan-400' : 'bg-cyan-400'
            }`}
          activeOpacity={0.7}
        >
          <Text className="text-white font-bold text-center text-base">
            {status === 'active' ? 'Cancel Service' : 'Order Again'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BookingsCard
import TopBar from '@/components/TopBar';
import { images } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BookingStatus = 'active' | 'completed' | 'cancelled';

const BookingCard = ({ booking, status }: { booking: any; status: BookingStatus }) => {
  const handleButtonPress = () => {
    if (status === 'active') {
      // Navigate to cancel screen
      router.push("/Booking/CancelBooking");
    } else if (status === 'completed') {
      // Navigate to order again
      router.push({
        pathname: '/book-service',
        params: { serviceId: booking.serviceId }
      });
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

const Bookings = () => {
  const [selectedTab, setSelectedTab] = useState<BookingStatus>('active');

  const bookings = {
    active: [
      {
        id: 1,
        title: 'Packing',
        rating: 4.9,
        reviews: '6,182',
        price: 19,
        image: images.services1,
        serviceId: 'packing-001'
      },
      {
        id: 2,
        title: 'Loading',
        rating: 4.9,
        reviews: '6,182',
        price: 19,
        image: images.services1,
        serviceId: 'loading-001'
      },
    ],
    completed: [
      {
        id: 3,
        title: 'Packing',
        rating: 4.9,
        reviews: '6,182',
        price: 19,
        image: images.services1,
        serviceId: 'packing-001'
      },
      {
        id: 4,
        title: 'Loading',
        rating: 4.9,
        reviews: '6,182',
        price: 19,
        image: images.services1,
        serviceId: 'loading-001'
      },
    ],
    cancelled: [
      {
        id: 5,
        title: 'Packing',
        rating: 4.9,
        reviews: '6,182',
        price: 19,
        image: images.services1,
        serviceId: 'packing-001'
      },
      {
        id: 6,
        title: 'Loading',
        rating: 4.9,
        reviews: '6,182',
        price: 19,
        image: images.services1,
        serviceId: 'loading-001'
      },
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      <View className="bg-white px-6 py-4 flex-row items-center">
        <TopBar/>
        <Text className="text-xl font-bold text-gray-800 ml-4">
          My Booking
        </Text>
      </View>
      <View className="bg-white px-6 py-4 flex-row justify-between">
        <TouchableOpacity
          onPress={() => setSelectedTab('active')}
          className="flex-1 pb-2 border-b-gray-500"
          style={{
            borderBottomWidth: selectedTab === 'active' ? 3 : 0,
            borderBottomColor: '#00D2FF',
          }}
        >
          <Text
            className={`text-center font-bold text-xl text-gray-500 ${selectedTab === 'active' ? 'text-cyan-400' : 'text-gray-500'
              }`}
          >
            Active
          </Text>
        </TouchableOpacity>
        <View className="h-[1px] bg-gray-200" />
        <TouchableOpacity
          onPress={() => setSelectedTab('completed')}
          className="flex-1 pb-2 border-b-gray-500"
          style={{
            borderBottomWidth: selectedTab === 'completed' ? 3 : 0,
            borderBottomColor: '#00D2FF',
          }}
        >
          <Text
            className={`text-center font-bold text-xl ${selectedTab === 'completed' ? 'text-cyan-400' : 'text-gray-500'
              }`}
          >
            Completed
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setSelectedTab('cancelled')}
          className="flex-1 pb-2 border-b-gray-500"
          style={{
            borderBottomWidth: selectedTab === 'cancelled' ? 3 : 0,
            borderBottomColor: '#00D2FF',
            
          }}
        >
          <Text
            className={`text-center font-bold text-xl ${selectedTab === 'cancelled' ? 'text-cyan-400' : 'text-gray-500'
              }`}
          >
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {bookings[selectedTab].map((booking) => (
          <BookingCard key={booking.id} booking={booking} status={selectedTab} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookings;
import BookingsCard from '@/components/BookingsCard';
import TopBar from '@/components/TopBar';
import { images } from '@/constants';
import { BookingStatus } from '@/type-d';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



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
          <BookingsCard key={booking.id} booking={booking} status={selectedTab} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookings;
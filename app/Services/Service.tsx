import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants';
import TopBar from '@/components/TopBar';

// Service icons


interface ServiceItemProps {
  icon: any;
  label: string
  bgColor: string
}

interface Service {
  icon: any
  label: string
  bgColor: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, label, bgColor }) => (
  <TouchableOpacity className="items-center mb-8 w-1/3">
    <View className={`w-20 h-20 rounded-full items-center justify-center ${bgColor} mb-2`}>
      <Image source={icon} />
    </View>
    <Text className="text-sm text-gray-800 text-center font-medium px-1">
      {label}
    </Text>
  </TouchableOpacity>
)

const Services: React.FC = () => {
  const services: Service[] = [
    { icon: images.packing, label: 'Packing', bgColor: 'bg-orange-50' },
    { icon: images.loading, label: 'Loading', bgColor: 'bg-purple-50' },
  ]

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className='flex-row items-start py-4 px-6'>
          <TopBar />
          <View className='ml-6'>
            <Text className='text-3xl font-bold'>All Services</Text>
          </View>
        </View>

        {/* Services Grid */}
        <ScrollView
          className="flex-1 px-6 pt-6"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row flex-wrap pb-8">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                label={service.label}
                bgColor={service.bgColor}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Services
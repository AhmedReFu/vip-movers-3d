import { images } from '@/constants'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('window')

const ServicesDetails = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const serviceImages = [images.services1, images.services1, images.services1]
  const galleryPhotos = [
    images.services1,
    images.services1,
    images.services1,
    images.services1,
    images.services1,
  ]

  const filters = ['All', '5', '4', '3']

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim visi ut aliquip."

  return (
    <View className='flex-1 bg-white'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='relative'>
          <View>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={(e) => {
                const offset = e.nativeEvent.contentOffset.x
                const index = Math.round(offset / width)
                setActiveImage(index)
              }}
              scrollEventThrottle={16}
            >
              {serviceImages.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={{ width, height: 350 }}
                  resizeMode='cover'
                />
              ))}
            </ScrollView>
            <View className='absolute bottom-4 left-0 right-0 flex-row justify-center'>
              {serviceImages.map((_, index) => (
                <View
                  key={index}
                  className={`h-2 rounded-full mx-1 ${index === activeImage ? 'bg-cyan-400 w-6' : 'bg-white/60 w-2'
                    }`}
                />
              ))}
            </View>
          </View>
          <View className='absolute top-0 left-0 right-0 pt-12 px-6 pb-4'>
            <View className='flex-row items-center gap-4'>
              <TouchableOpacity onPress={() => router.back()}>
                <FontAwesome6 name="arrow-left" size={24} color="white" />
              </TouchableOpacity>
              <Text className='text-xl font-semibold text-white'>Services Details</Text>
            </View>
          </View>
        </View>
        <View className="px-6 py-5">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-2xl font-bold text-gray-900">Packing</Text>
            <Text className="text-2xl font-bold text-cyan-400">$200.00</Text>
          </View>
          <View className="flex-row items-center mb-4">
            <Text className='text-xl font-bold text-gray-700 mr-4'>Ahmed ReFat</Text>
            <FontAwesome name="star" size={24} color="#FFA500" />
            <Text className="ml-4 text-gray-700 text-xl">4.6</Text>
            <Text className="text-gray-500 text-xl ml-4">(5,287 reviews)</Text>
          </View>
          <View className="flex-row items-center my-4">
            <FontAwesome name="map-marker" size={24} color="#06B6D4" />
            <Text className="text-xl text-gray-600 ml-4">
              9081 Lakewood Gardens Junction
            </Text>
          </View>
          <View className="flex-row items-center mb-6">
            <View className="flex-row items-center mr-6">
              <FontAwesome6 name="users" size={24} color="#06B6D4" />
              <Text className="text-xl font-bold text-gray-600 ml-2">2 Labor</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome name="clock-o" size={28} color="#06B6D4" />
              <Text className="text-xl font-bold text-gray-600 ml-2">5 hours</Text>
            </View>
          </View>
          <View className='bg-gray-200 w-full h-[1px] mb-4' />
          <View className='mb-6'>
            <Text className="text-2xl font-bold text-gray-900 mb-3">About me</Text>
            <Text className="text-xl text-gray-600 leading-6">
              {showFullDescription
                ? description
                : `${description.substring(0, 120)}...`}
              {!showFullDescription && (
                <Text
                  onPress={() => setShowFullDescription(true)}
                  className="text-cyan-400 font-semibold"
                >
                  {' '}Read more...
                </Text>
              )}
            </Text>
          </View>
          <View className='my-4'>
            <Text className='text-2xl font-bold mb-4'>Photos & Videos</Text>
            <View className='flex-row mb-3' style={{ gap: 12 }}>
              <View className='flex-1'>
                <Image
                  source={galleryPhotos[0]}
                  className='w-full rounded-2xl'
                  style={{ height: 320 }}
                  resizeMode='stretch'
                />
              </View>
              <View className='flex-1' style={{ gap: 12 }}>
                <Image
                  source={galleryPhotos[1]}
                  className='w-full rounded-2xl'
                  style={{ height: 154 }}
                  resizeMode='stretch'
                />
                <Image
                  source={galleryPhotos[2]}
                  className='w-full rounded-2xl'
                  style={{ height: 154 }}
                  resizeMode='stretch'
                />
              </View>
            </View>
            <View className='flex-row mb-4' style={{ gap: 12 }}>
              <View className='flex-1 ' style={{ gap: 12 }}>
                <Image
                  source={galleryPhotos[3]}
                  className='w-full rounded-2xl'
                  style={{ height: 154 }}
                  resizeMode='stretch'
                />
                <Image
                  source={galleryPhotos[3]}
                  className='w-full rounded-2xl'
                  style={{ height: 154 }}
                  resizeMode='stretch'
                />
              </View>
              <View className='flex-1'>
                <Image
                  source={galleryPhotos[4]}
                  className='w-full rounded-2xl'
                  style={{ height: 320 }}
                  resizeMode='stretch'
                />
              </View>
            </View>
            <View className='flex-row items-center mb-4'>
              <FontAwesome name="star" size={20} color="#FFA500" />
              <Text className='text-xl font-semibold ml-2'>4.6</Text>
              <Text className='text-gray-500 text-xl ml-1'>(5,287 reviews)</Text>
            </View>
            <View className='flex-row flex-wrap' style={{ gap: 10 }}>
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setSelectedFilter(filter)}
                  className={`px-6 py-2.5 rounded-full flex-row items-center ${selectedFilter === filter
                    ? 'bg-cyan-400'
                    : 'bg-white  border-primary border-[2px]'
                    }`}
                >
                  <FontAwesome
                    name="star"
                    size={20}
                    color={selectedFilter === filter ? 'white' : '#06B6D4'}
                  />
                  <Text
                    className={`ml-4 font-semibold text-xl text-primary ${selectedFilter === filter
                      ? 'text-white'
                      : 'text-gray-700'
                      }`}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <View className='flex-row justify-between'>
              <View className='flex-row items-center'>
                <Image source={images.ahmedReFat} className='h-14 w-14 rounded-full' />
                <Text className='text-2xl ml-6'>Ahmed ReFat</Text>
              </View>
              <View className='my-8'>
                <TouchableOpacity
                  className={`px-5 py-1.5 rounded-full flex-row items-center bg-white border-primary border-[2px]
                  `}
                >
                  <FontAwesome
                    name="star"
                    size={20}
                    color={'#06B6D4'}
                  />
                  <Text className="ml-4 font-semibold text-xl text-primary">5</Text>
                </TouchableOpacity>

              </View>

            </View>
            <Text className='text-xl my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, expedita?❤️❤️️❤️</Text>
            <Text className='text-xl my-2'>3 weeks ago</Text>
          </View>
          <View>
            <View className='flex-row justify-between'>
              <View className='flex-row items-center'>
                <Image source={images.ahmedReFat} className='h-14 w-14 rounded-full' />
                <Text className='text-2xl ml-6'>Ahmed ReFat</Text>
              </View>
              <View className='my-8'>
                <TouchableOpacity
                  className={`px-5 py-1.5 rounded-full flex-row items-center bg-white border-primary border-[2px]
                  `}
                >
                  <FontAwesome
                    name="star"
                    size={20}
                    color={'#06B6D4'}
                  />
                  <Text className="ml-4 font-semibold text-xl text-primary">4</Text>
                </TouchableOpacity>

              </View>

            </View>
            <Text className='text-xl my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, expedita?❤️❤️️❤️</Text>
            <Text className='text-xl my-2'>3 weeks ago</Text>
          </View>
          <View>
            <View className='flex-row justify-between'>
              <View className='flex-row items-center'>
                <Image source={images.ahmedReFat} className='h-14 w-14 rounded-full' />
                <Text className='text-2xl ml-6'>Ahmed ReFat</Text>
              </View>
              <View className='my-8'>
                <TouchableOpacity
                  className={`px-5 py-1.5 rounded-full flex-row items-center bg-white border-primary border-[2px]
                  `}
                >
                  <FontAwesome
                    name="star"
                    size={20}
                    color={'#06B6D4'}
                  />
                  <Text className="ml-4 font-semibold text-xl text-primary">3</Text>
                </TouchableOpacity>

              </View>

            </View>
            <Text className='text-xl my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, expedita?❤️❤️️❤️</Text>
            <Text className='text-xl my-2'>3 weeks ago</Text>
          </View>
        </View>
        <View className="px-6 my-6 bg-white flex-row justify-between ">
          <View className='w-1/2 '>
            <TouchableOpacity className="px-6 py-6  rounded-xl items-center bg-[#00D2FF1A] m-2">
              <Text className="text-primary text-2xl font-semibold">Cancel</Text>
            </TouchableOpacity>
          </View>
          <View className='w-1/2 '>
            <TouchableOpacity
              onPress={() => { router.navigate('/Services/ScheduleShifting') }}
              className="px-6 py-6  rounded-xl items-center bg-primary m-2">
              <Text className="text-white text-2xl font-semibold">Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default ServicesDetails
import TopBar from '@/components/TopBar'
import { images } from '@/constants'
import { Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React, { useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  PanResponder,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const Search = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Cleaning')
  const [minPrice, setMinPrice] = useState(16)
  const [maxPrice, setMaxPrice] = useState(56)
  const [selectedRating, setSelectedRating] = useState(5)

  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current
  const backdropOpacity = useRef(new Animated.Value(0)).current

  // Price slider state
  const minPriceAnim = useRef(new Animated.Value(16)).current
  const maxPriceAnim = useRef(new Animated.Value(56)).current
  const MIN_PRICE = 0
  const MAX_PRICE = 100
  const SLIDER_WIDTH = Dimensions.get('window').width - 80

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy > 5
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          slideAnim.setValue(gestureState.dy)
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100 || gestureState.vy > 0.5) {
          closeFilter()
        } else {
          Animated.spring(slideAnim, {
            toValue: 0,
            useNativeDriver: true,
          }).start()
        }
      },
    })
  ).current

  const openFilter = () => {
    setIsFilterVisible(true)
    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const closeFilter = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsFilterVisible(false)
    })
  }

  const handleReset = () => {
    setSelectedCategory('All')
    setMinPrice(16)
    setMaxPrice(56)
    setSelectedRating(0)
  }

  const handleFilter = () => {
    // Apply filter logic here
    console.log({
      category: selectedCategory,
      priceRange: [minPrice, maxPrice],
      rating: selectedRating
    })
    closeFilter()
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      <View className='flex-1 bg-white px-6'>
        <View className="py-4 flex-row items-center">
          <TopBar />
          <Text className="text-xl font-bold text-gray-800 ml-4">Search</Text>
        </View>

        <View className='my-6'>
          <View className="rounded-xl bg-white w-full pl-4 pr-4 flex-row items-center justify-between border border-[#00D2FF]">
            <View className="flex-row items-center flex-1">
              <Ionicons name="search" size={24} color="#00D2FF" />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                className="h-16 text-black flex-1 pl-3 font-medium text-base"
                placeholder="Search"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <TouchableOpacity onPress={openFilter}>
              <View className="flex-row items-center gap-2">
                <View className="w-px h-6 bg-gray-300" />
                <Image source={images.filter} className="w-6 h-6" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='flex-row justify-between my-6'>
            <Text className='text-xl font-semibold'>Recent</Text>
            <Text className='text-xl text-primary font-semibold'>Clear All</Text>
          </View>
          <View className='flex-row justify-between my-2'>
            <Text className='text-2xl'>Packing</Text>
            <MaterialCommunityIcons name="close-octagon-outline" size={28} color="black" />
          </View>
          <View className='flex-row justify-between my-2'>
            <Text className='text-2xl'>Unloading service</Text>
            <MaterialCommunityIcons name="close-octagon-outline" size={28} color="black" />
          </View>
          <View className='flex-row justify-between my-2'>
            <Text className='text-2xl'>Cleaning service</Text>
            <MaterialCommunityIcons name="close-octagon-outline" size={28} color="black" />
          </View>
          <View className='flex-row justify-between my-2'>
            <Text className='text-2xl'>Labor Service</Text>
            <MaterialCommunityIcons name="close-octagon-outline" size={28} color="black" />
          </View>
        </ScrollView>
      </View>

      {/* Filter Bottom Sheet Modal */}
      <Modal
        visible={isFilterVisible}
        transparent
        animationType="none"
        onRequestClose={closeFilter}
      >
        <View className="flex-1">
          {/* Backdrop */}
          <Animated.View
            className="absolute inset-0 bg-black"
            style={{
              opacity: backdropOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5]
              })
            }}
          >
            <TouchableOpacity
              className="flex-1"
              activeOpacity={1}
              onPress={closeFilter}
            />
          </Animated.View>

          {/* Bottom Sheet */}
          <Animated.View
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl"
            style={{
              transform: [{ translateY: slideAnim }],
              height: SCREEN_HEIGHT * 0.7,
            }}
          >
            {/* Drag Handle */}
            <View
              className="items-center pt-3 pb-4"
              {...panResponder.panHandlers}
            >
              <View className="w-12 h-1 bg-gray-300 rounded-full" />
            </View>

            <ScrollView
              className="px-6 pb-6"
              showsVerticalScrollIndicator={false}
            >
              <Text className="text-2xl font-bold text-center mb-6">Filter</Text>

              {/* Category Section */}
              <Text className="text-lg font-semibold mb-3">Category</Text>
              
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className='gap-4'>
                <View className="flex-row gap-2 mb-6">
                  {['All', 'Cleaning', 'Repairing', 'Loading', 'Labor'].map((category) => (
                    <TouchableOpacity
                      key={category}
                      onPress={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full ${selectedCategory === category
                        ? 'bg-[#00D2FF]'
                        : 'bg-gray-100'
                        }`}
                    >
                      <Text className={`font-medium ${selectedCategory === category
                        ? 'text-white'
                        : 'text-gray-700'
                        }`}>
                        {category}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
                </ScrollView>
              

              {/* Price Section */}
              <Text className="text-lg font-semibold mb-3">Price</Text>
              <View className="mb-6">
                <View className="flex-row justify-between mb-4">
                  <View className="bg-[#00D2FF] px-4 py-2 rounded-lg">
                    <Text className="text-white font-bold">${minPrice}</Text>
                  </View>
                  <View className="bg-[#00D2FF] px-4 py-2 rounded-lg">
                    <Text className="text-white font-bold">${maxPrice}</Text>
                  </View>
                </View>

                {/* Custom Range Slider */}
                <View className="h-16 justify-center px-2">
                  <View className="h-1 bg-gray-200 rounded-full">
                    {/* Active Range Track */}
                    <View
                      className="h-1 bg-[#00D2FF] rounded-full absolute"
                      style={{
                        left: `${(minPrice / MAX_PRICE) * 100}%`,
                        right: `${100 - (maxPrice / MAX_PRICE) * 100}%`
                      }}
                    />
                  </View>

                  {/* Min Price Thumb */}
                  <Animated.View
                    className="absolute"
                    style={{
                      left: `${(minPrice / MAX_PRICE) * 100}%`,
                      marginLeft: -12
                    }}
                    {...PanResponder.create({
                      onStartShouldSetPanResponder: () => true,
                      onMoveShouldSetPanResponder: () => true,
                      onPanResponderGrant: () => {
                        minPriceAnim.setOffset(minPrice)
                        minPriceAnim.setValue(0)
                      },
                      onPanResponderMove: (_, gestureState) => {
                        const newValue = Math.round(
                          ((gestureState.dx / SLIDER_WIDTH) * MAX_PRICE) + minPrice
                        )
                        if (newValue >= MIN_PRICE && newValue < maxPrice - 5) {
                          setMinPrice(newValue)
                        }
                      },
                      onPanResponderRelease: () => {
                        minPriceAnim.flattenOffset()
                      }
                    }).panHandlers}
                  >
                    <View className="w-6 h-6 bg-[#00D2FF] rounded-full border-4 border-white shadow-lg" />
                  </Animated.View>

                  {/* Max Price Thumb */}
                  <Animated.View
                    className="absolute"
                    style={{
                      left: `${(maxPrice / MAX_PRICE) * 100}%`,
                      marginLeft: -12
                    }}
                    {...PanResponder.create({
                      onStartShouldSetPanResponder: () => true,
                      onMoveShouldSetPanResponder: () => true,
                      onPanResponderGrant: () => {
                        maxPriceAnim.setOffset(maxPrice)
                        maxPriceAnim.setValue(0)
                      },
                      onPanResponderMove: (_, gestureState) => {
                        const newValue = Math.round(
                          ((gestureState.dx / SLIDER_WIDTH) * MAX_PRICE) + maxPrice
                        )
                        if (newValue <= MAX_PRICE && newValue > minPrice + 5) {
                          setMaxPrice(newValue)
                        }
                      },
                      onPanResponderRelease: () => {
                        maxPriceAnim.flattenOffset()
                      }
                    }).panHandlers}
                  >
                    <View className="w-6 h-6 bg-[#00D2FF] rounded-full border-4 border-white shadow-lg" />
                  </Animated.View>
                </View>
              </View>

              {/* Rating Section */}
              <Text className="text-lg font-semibold mb-3">Rating</Text>
              <View className="flex-row gap-2 mb-8">
                {[0, 5, 4, 3].map((rating) => (
                  <TouchableOpacity
                    key={rating}
                    onPress={() => setSelectedRating(rating)}
                    className={`px-4 py-3 rounded-full flex-row items-center gap-1 ${selectedRating === rating
                        ? 'bg-[#00D2FF]'
                        : 'bg-gray-100'
                      }`}
                  >
                    <Ionicons
                      name="star"
                      size={16}
                      color={selectedRating === rating ? 'white' : '#9CA3AF'}
                    />
                    <Text className={`font-medium ${selectedRating === rating
                        ? 'text-white'
                        : 'text-gray-700'
                      }`}>
                      {rating === 0 ? 'All' : rating}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Action Buttons */}
              <View className="flex-row gap-3">
                <TouchableOpacity
                  onPress={handleReset}
                  className="flex-1 py-4 bg-cyan-50 rounded-2xl"
                >
                  <Text className="text-[#00D2FF] font-bold text-center text-base">
                    Reset
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleFilter}
                  className="flex-1 py-4 bg-[#00D2FF] rounded-2xl"
                >
                  <Text className="text-white font-bold text-center text-base">
                    Filter
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Search
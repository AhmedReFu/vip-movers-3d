import TopBar from "@/components/TopBar";
import { images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useRef, useState } from "react";
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
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Search = () => {
  // Filter States
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Cleaning");
  const [minPrice, setMinPrice] = useState(16);
  const [maxPrice, setMaxPrice] = useState(56);
  const [selectedRating, setSelectedRating] = useState(5);

  // Animations
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  const MIN_PRICE = 0;
  const MAX_PRICE = 100;
  const SLIDER_WIDTH = SCREEN_WIDTH - 80;

  // Filter modal open/close
  const openFilter = () => {
    setIsFilterVisible(true);
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
    ]).start();
  };

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
    ]).start(() => setIsFilterVisible(false));
  };

  const handleReset = () => {
    setSelectedCategory("All");
    setMinPrice(16);
    setMaxPrice(56);
    setSelectedRating(0);
  };

  const handleFilter = () => {
    console.log({
      category: selectedCategory,
      priceRange: [minPrice, maxPrice],
      rating: selectedRating,
    });
    closeFilter();
  };

  // PanResponder for dragging modal down
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, g) => g.dy > 5,
      onPanResponderMove: (_, g) => {
        if (g.dy > 0) slideAnim.setValue(g.dy);
      },
      onPanResponderRelease: (_, g) => {
        if (g.dy > 100 || g.vy > 0.5) closeFilter();
        else
          Animated.spring(slideAnim, { toValue: 0, useNativeDriver: true }).start();
      },
    })
  ).current;

  // Price slider thumbs
  const makeThumbPanResponder = (isMin: boolean) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, g) => {
        const delta = (g.dx / SLIDER_WIDTH) * MAX_PRICE;
        if (isMin) {
          const newVal = Math.max(MIN_PRICE, Math.min(maxPrice - 5, minPrice + delta));
          setMinPrice(Math.round(newVal));
        } else {
          const newVal = Math.min(MAX_PRICE, Math.max(minPrice + 5, maxPrice + delta));
          setMaxPrice(Math.round(newVal));
        }
      },
    });

  const minPan = useRef(makeThumbPanResponder(true)).current;
  const maxPan = useRef(makeThumbPanResponder(false)).current;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      <View className="flex-1 bg-white px-6">

        <View className="py-4 flex-row items-center">
          <TopBar />
          <Text className="text-xl font-bold text-gray-800 ml-4">Search</Text>
        </View>

        <View className="my-6">
          <View className="rounded-xl bg-white w-full px-4 flex-row items-center justify-between border border-[#00D2FF]">
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
          <View className="flex-row justify-between my-6">
            <Text className="text-xl font-semibold">Recent</Text>
            <Text className="text-xl text-[#00D2FF] font-semibold">Clear All</Text>
          </View>

          {["Packing", "Unloading service", "Cleaning service", "Labor Service"].map(
            (item, index) => (
              <View key={index} className="flex-row justify-between my-2">
                <Text className="text-2xl">{item}</Text>
                <MaterialCommunityIcons
                  name="close-octagon-outline"
                  size={28}
                  color="black"
                />
              </View>
            )
          )}
        </ScrollView>
      </View>

      <Modal visible={isFilterVisible} transparent animationType="none">
        <View className="flex-1">

          <Animated.View
            className="absolute inset-0 bg-black"
            style={{
              opacity: backdropOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            }}
          >
            <TouchableOpacity
              className="flex-1"
              activeOpacity={1}
              onPress={closeFilter}
            />
          </Animated.View>

          <Animated.View
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl"
            style={{
              transform: [{ translateY: slideAnim }],
              height: SCREEN_HEIGHT * 0.7,
            }}
          >
            <View className="items-center pt-3 pb-4" {...panResponder.panHandlers}>
              <View className="w-12 h-1 bg-gray-300 rounded-full" />
            </View>

            <ScrollView className="px-6 pb-6" showsVerticalScrollIndicator={false}>
              <Text className="text-2xl font-bold text-center mb-6">Filter</Text>

              <Text className="text-lg font-semibold mb-3">Category</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-2 mb-6">
                  {["All", "Cleaning", "Repairing", "Loading", "Labor"].map((c) => (
                    <TouchableOpacity
                      key={c}
                      onPress={() => setSelectedCategory(c)}
                      className={`px-6 py-3 rounded-full ${selectedCategory === c ? "bg-[#00D2FF]" : "bg-gray-100"
                        }`}
                    >
                      <Text
                        className={`font-medium ${selectedCategory === c ? "text-white" : "text-gray-700"
                          }`}
                      >
                        {c}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
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
                <View className="h-16 justify-center px-2">
                  <View className="h-1 bg-gray-200 rounded-full">
                    <View
                      className="h-1 bg-[#00D2FF] rounded-full absolute"
                      style={{
                        left: `${(minPrice / MAX_PRICE) * 100}%`,
                        right: `${100 - (maxPrice / MAX_PRICE) * 100}%`,
                      }}
                    />
                  </View>
                  <Animated.View
                    className="absolute"
                    style={{
                      left: `${(minPrice / MAX_PRICE) * 100}%`,
                      marginLeft: -12,
                    }}
                    {...minPan.panHandlers}
                  >
                    <View className="w-6 h-6 bg-[#00D2FF] rounded-full border-4 border-white shadow-lg" />
                  </Animated.View>

                  <Animated.View
                    className="absolute"
                    style={{
                      left: `${(maxPrice / MAX_PRICE) * 100}%`,
                      marginLeft: -12,
                    }}
                    {...maxPan.panHandlers}
                  >
                    <View className="w-6 h-6 bg-[#00D2FF] rounded-full border-4 border-white shadow-lg" />
                  </Animated.View>
                </View>
              </View>
              <Text className="text-lg font-semibold mb-3">Rating</Text>
              <View className="flex-row gap-2 mb-8">
                {[0, 5, 4, 3].map((r) => (
                  <TouchableOpacity
                    key={r}
                    onPress={() => setSelectedRating(r)}
                    className={`px-4 py-3 rounded-full flex-row items-center gap-1 ${selectedRating === r ? "bg-[#00D2FF]" : "bg-gray-100"
                      }`}
                  >
                    <Ionicons
                      name="star"
                      size={16}
                      color={selectedRating === r ? "white" : "#9CA3AF"}
                    />
                    <Text
                      className={`font-medium ${selectedRating === r ? "text-white" : "text-gray-700"
                        }`}
                    >
                      {r === 0 ? "All" : r}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
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
  );
};

export default Search;

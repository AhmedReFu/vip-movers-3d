import TopBar from "@/components/TopBar";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";


type ImageAsset = ImagePicker.ImagePickerAsset;

interface DonationProps {
  navigation?: any; // optional, only if using react-navigation
}

const Donation: React.FC<DonationProps> = ({ navigation }) => {
  const router = useRouter?.() ?? null;
  const [selectedFile, setSelectedFile] = useState<ImageAsset | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [aboutLength, setAboutLength] = useState<number>(0);

  const [formData, setFormData] = useState({
    furnitureName: "",
    donationType: "Furniture",
    about: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission needed", "Please grant permission to access photos");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false,
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedFile(result.assets[0]);
      }
    } catch (err) {
      console.error("pickImage error:", err);
      Alert.alert("Error", "Failed to pick image");
    }
  };

  const handleSubmit = () => {
    // Required fields check
    if (!formData.furnitureName || !formData.email || !formData.phone) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    // TODO: call your API here if needed. Show modal on success.
    setShowSuccessModal(true);
  };

  const goToHome = () => {
    setShowSuccessModal(false);

    // Prefer expo-router if available
    try {
      if (router && typeof router.replace === "function") {
        router.replace("/Tabs"); // change to your home route
        return;
      }
    } catch (e) {
      // ignore and fallback
    }

    // Fallback to react-navigation if provided as prop
    if (navigation && typeof navigation.replace === "function") {
      navigation.replace("Home"); // adjust route name if needed
      return;
    }

    // Otherwise, only close modal (no navigation)
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
      <StatusBar style="dark" />
      <View className="bg-white px-6 py-4 flex-row items-center">
        <TopBar />
        <Text className="text-xl font-bold text-gray-800 ml-4">Fill up Donation Form</Text>
      </View>

      <View className="flex-1 bg-white">
        <ScrollView
          className="flex-1 px-6"
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">Upload Photos</Text>

            <View className="flex-row items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
              <TouchableOpacity
                onPress={pickImage}
                className="w-1/2 py-4 items-center bg-gray-100 justify-center border-r border-gray-300"
                activeOpacity={0.7}
              >
                <Text className="text-gray-900 text-base">Choose File</Text>
              </TouchableOpacity>

              <View className="w-1/2 py-4 px-4 justify-center">
                <Text className="text-gray-500 text-base" numberOfLines={1}>
                  {selectedFile ? selectedFile.fileName || selectedFile.uri.split("/").pop() : "No file chosen"}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={pickImage}
              className="bg-cyan-400 py-3 px-5 rounded-2xl self-end mt-3"
              activeOpacity={0.8}
            >
              <Text className="text-white font-semibold text-sm">+Add More</Text>
            </TouchableOpacity>
          </View>
          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">Furniture Name</Text>
            <View className="border border-gray-300 rounded-lg bg-white">
              <TextInput
                value={formData.furnitureName}
                onChangeText={(text) => setFormData({ ...formData, furnitureName: text })}
                placeholder="Type name"
                placeholderTextColor="#9CA3AF"
                className="px-4 py-4 text-gray-600 text-base"
              />
              <View className="absolute right-4 top-4">
                <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
              </View>
            </View>
          </View>
          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">Donation Type</Text>
            <View className="border border-gray-300 rounded-lg bg-white">
              <TextInput
                value={formData.donationType}
                onChangeText={(text) => setFormData({ ...formData, donationType: text })}
                placeholder="Furniture"
                placeholderTextColor="#9CA3AF"
                className="px-4 py-4 text-gray-600 text-base"
                editable={false}
              />
              <View className="absolute right-4 top-4">
                <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
              </View>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">About</Text>
            <View className="border border-gray-300 rounded-lg bg-white">
              <TextInput
                value={formData.about}
                onChangeText={(text) => {
                  setFormData({ ...formData, about: text });
                  setAboutLength(text.length);
                }}
                placeholder="Short description"
                placeholderTextColor="#9CA3AF"
                className="px-4 py-3 text-gray-600 text-base"
                multiline
                numberOfLines={4}
                maxLength={200}
                style={{ height: 100, textAlignVertical: "top" }}
              />
            </View>
            <Text className="text-gray-400 text-xs mt-1">{aboutLength}/200</Text>
          </View>

          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">Email</Text>
            <TextInput
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder=""
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              className="border border-gray-300 rounded-lg px-4 py-4 text-gray-600 text-base bg-white"
            />
          </View>

          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">Phone</Text>
            <TextInput
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              placeholder=""
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
              className="border border-gray-300 rounded-lg px-4 py-4 text-gray-600 text-base bg-white"
            />
          </View>

          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">Address</Text>
            <TextInput
              value={formData.address}
              onChangeText={(text) => setFormData({ ...formData, address: text })}
              placeholder=""
              placeholderTextColor="#9CA3AF"
              className="border border-gray-300 rounded-lg px-4 py-4 text-gray-600 text-base bg-white"
            />
          </View>

          <View className="mb-6">
            <Text className="text-gray-900 text-xl font-semibold mb-3">City</Text>
            <TextInput
              value={formData.city}
              onChangeText={(text) => setFormData({ ...formData, city: text })}
              placeholder=""
              placeholderTextColor="#9CA3AF"
              className="border border-gray-300 rounded-lg px-4 py-4 text-gray-600 text-base bg-white"
            />
          </View>

          <View className="flex-row mb-6" style={{ gap: 12 }}>
            <View className="flex-1">
              <Text className="text-gray-900 text-xl font-semibold mb-3">State/Province</Text>
              <TextInput
                value={formData.state}
                onChangeText={(text) => setFormData({ ...formData, state: text })}
                placeholder=""
                placeholderTextColor="#9CA3AF"
                className="border border-gray-300 rounded-lg px-4 py-4 text-gray-600 text-base bg-white"
              />
            </View>
            <View className="flex-1">
              <Text className="text-gray-900 text-xl font-semibold mb-3">Postal/Zip Code</Text>
              <TextInput
                value={formData.postalCode}
                onChangeText={(text) => setFormData({ ...formData, postalCode: text })}
                placeholder=""
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                className="border border-gray-300 rounded-lg px-4 py-4 text-gray-600 text-base bg-white"
              />
            </View>
          </View>
        </ScrollView>

        <View className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-white border-t border-gray-100">
          <TouchableOpacity onPress={handleSubmit} className="bg-cyan-400 p-5 rounded-xl" activeOpacity={0.8}>
            <Text className="text-white font-bold text-center text-lg">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={showSuccessModal}
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropOpacity={0.6}
        onBackdropPress={() => setShowSuccessModal(false)}
        avoidKeyboard
      >
        <View className="bg-white rounded-3xl px-6 py-8 items-center">
          <View className="bg-cyan-400 p-5 rounded-full mb-4 shadow">
            <Ionicons name="checkmark-sharp" size={40} color="white" />
          </View>

          <Text className="text-gray-900 text-2xl font-bold mb-2">Congratulations!</Text>

          <Text className="text-gray-500 text-center mb-6">
            You have successfully filled up the donation form. You will get a response very soon.
          </Text>

          <TouchableOpacity onPress={goToHome} className="bg-cyan-400 rounded-xl w-full py-4" activeOpacity={0.8}>
            <Text className="text-white font-bold text-center text-base">Go To Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Donation;

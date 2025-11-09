import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';

import TabLayout from "./Tabs/_layout";
import Home from "./Tabs/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";




export default function RootLayout() {
  useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf")
  });
  return (

    <>
      <Stack screenOptions={{ headerShown: false, statusBarStyle: "dark", statusBarHidden: false }}>

      </Stack>
    </>


  )
}
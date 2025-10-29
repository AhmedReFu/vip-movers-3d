import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf")
  });
  return (

    <Stack screenOptions={{ headerShown: false, statusBarStyle: "auto", statusBarHidden: false }}>
      <Stack.Screen name="index" />
    </Stack>


  )
}
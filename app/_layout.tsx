import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (

    <Stack screenOptions={{ headerShown: false, statusBarHidden: false }}>
      <Stack.Screen name="index" />
    </Stack>


  )
}
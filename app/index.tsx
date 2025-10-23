import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Wait 2 seconds, then navigate
    const timer = setTimeout(() => {
      router.replace("/onboardingscreen/onboardingfrist");
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={require("../assets/images/icon.png")} 
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Services 24/7 Inc</Text>
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    height: 200,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop:300
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: "contain",
    borderRadius: 80,
  },
  title: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
  },
  loader: {
    marginTop: 300,
  },
});
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  // const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("/onboardingscreen/onboardingfrist");
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [router]);
  return (
    <View style={styles.container}>
      <View  >
        <Image
          source={require("../assets/images/icon.png")}
          className="rounded-full outline-4 outline-offset-2 outline-cyan-400"

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
    marginTop: 180
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: "contain",
    borderRadius: 80,
  },
  title: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  loader: {
    marginTop: 250,
  },
});
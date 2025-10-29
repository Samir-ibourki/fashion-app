import bg from "@/assets/home.jpg";
import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const slideAnim = useRef(new Animated.Value(50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
    ]).start();
  }, [opacityAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.hero} source={bg} resizeMode="cover">
        <View style={styles.overlay} />

        <SafeAreaView style={styles.safearea}>
          {/* Login Button */}
          <Link href='/logIn' asChild >
            <TouchableOpacity style={styles.topRight}>
            <Text style={styles.logIn}>Log in</Text>
          </TouchableOpacity>
          </Link>
        

          {/* Main Content Center */}
          <Animated.View
            style={[
              styles.contentBox,
              { transform: [{ translateY: slideAnim }], opacity: opacityAnim },
            ]}
          >
            <Text style={styles.fashion}>Fashion</Text>
            <Text style={styles.explore}>Explore the new world of clothing</Text>

            <TouchableOpacity style={styles.button}>
              <Link href={'/products'}>
              <Text style={styles.buttonText}>Start Browsing</Text></Link>
            </TouchableOpacity>

            <Text style={styles.footer}>
              Don’t have an account?{" "}
              <Link href={'/signUp'} ><Text style={styles.signUp}>Sign up</Text></Link>
            </Text>
          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  safearea: {
    flex: 1,
    width: "100%",
  },
  topRight: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logIn: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contentBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  fashion: {
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    letterSpacing: 2,
  },
  explore: {
    color: "#f1f1f1",
    fontSize: 16,
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    color: "#ddd",
    marginTop: 15,
  },
  signUp: {
    color: "#fff",
    fontWeight: "bold",
  },
});

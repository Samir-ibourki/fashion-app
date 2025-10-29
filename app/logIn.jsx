import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  
} from "react-native";
import b5 from "../assets/b5.jpg";
import { Link } from "expo-router";

export default function LogIn() {
  const slideAnim = useRef(new Animated.Value(50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacityAnim, slideAnim]);

  return (
    <ImageBackground style={styles.bglog} source={b5} resizeMode="cover">
      <View style={styles.overlay} />

      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: slideAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <View style={styles.tit}>
          <Text style={styles.title}>Log into your Account</Text>
        </View>

        <TextInput
          placeholder="Your number / Email"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "semibold",
            fontSize: 20,
            letterSpacing: 3,
            marginVertical: 15,
          }}
        >
          Or log in With
        </Text>

        <View style={styles.containIcon}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <FontAwesome name="facebook" size={40} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.icontext}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.icon}>
            <TouchableOpacity>
              <AntDesign name="twitter" size={40} color="#1DA1F2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.icontext}>Twitter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{justifyContent:'flex-end',alignItems:'center', marginTop:70}}>
          <Text style={{color:'#eee', fontSize:23,fontWeight:'semibold'}}>
            Dont have an account ? 
          </Text>
          <Link href={'/signUp'}>
            <Text style={{color:'#c7a6a6ff', fontSize:22, fontWeight:'bold'}}>Sign up</Text></Link>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bglog: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(31, 30, 30, 0.86)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#eeeeeec9",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#fff",
    padding: 12,
    // borderRadius: 8,
    color: "white",
    marginBottom:10
  },
  button: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 4,
  },
  containIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  icontext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#a79898ff",
  },
});

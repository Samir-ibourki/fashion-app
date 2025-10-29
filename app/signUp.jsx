/* eslint-disable react-hooks/rules-of-hooks */
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import {
  Alert,
  Animated,
  Easing,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import b1 from "../assets/b1.jpg";
import { useEffect, useRef, useState } from "react";


export default function signUP() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

function HandleInput(text) {
  if (username==='' || password ==='') {
    Alert.alert('Error', 'Please enter your infos')
    return;
  }
Alert.alert('Success', `Welcome ${username} your account has been created!`);
}
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
    <ImageBackground style={styles.bglog} source={b1} resizeMode="cover">
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
          <Text style={styles.title}>Create new Account</Text>
        </View>

        <TextInput value={username} onChangeText={setUsername}
          placeholder="Your Username / Email"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput value={password} onChangeText={setPassword}
          placeholder="Your Password"
          placeholderTextColor="#fff"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity onPress={HandleInput} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
          Or Sign up  With
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

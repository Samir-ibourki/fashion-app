import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/logo.png";
import { Link } from "expo-router";
import banner from "../../assets/banner.png";
export default function index() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={logo} resizeMode="contain" />
        <TouchableOpacity>
            <Link href={'/'}>
            <MaterialIcons name="shopping-cart" size={30} />
            </Link>
        </TouchableOpacity>
      </View>
<View style={styles.banner}>
    <Image style={styles.bannerImg} source={banner} resizeMode="cover" />
</View>

<View style={styles.parentInput}>
      <Ionicons name="search" size={20} color="#0a0a0aff" style={styles.icon} />
      <TextInput
    
        placeholder="search.."
        style={styles.input}
        underlineColorAndroid="transparent"
      />
    </View>


    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: "auto",
    padding:10
  },
   banner:{
     width: "95%",
    height: 250,
   
    marginHorizontal:'auto'
  },
  bannerImg:{
    flex: 1,
    
    width:'100%'
  },
   parentInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeee",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 15,
  },

  icon: { marginRight: 10 },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

});

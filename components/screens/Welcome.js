import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLOURS } from "../database/Database";

function Welcome({ navigation }) {
  return (
    <View style={styles.background}>
      <Image 
        source={require("../database/images/Thenia.png")}
        style={styles.logo}
      />
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar")}>
          <Text style={styles.textButton}>DAFTAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textButton}>MASUK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLOURS.backgroundDark
  },
  logo: {
    bottom:"5%",
  },
  loginButton: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 40,
    margin: 20,
  },
  textButton: {
    color: COLOURS.black,
    fontWeight: "bold",
  },
});

export default Welcome;

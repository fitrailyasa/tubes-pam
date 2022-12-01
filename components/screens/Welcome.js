import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLOURS } from "../database/Database";

function Login({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../database/images/LogoBackground.png")}
    >
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textButton}>DAFTAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textButton}>MASUK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default Login;

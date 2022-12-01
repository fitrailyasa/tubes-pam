import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLOURS } from "../database/Database";

function Daftar({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../database/images/LogoBackground.png")}
    >
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="No. Handphone atau Email"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Kata Sandi"
        placeholderTextColor="white"
      />

      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("AccountCreated")}>
          <Text style={styles.textButton}>DAFTAR</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textDefault1}>Sudah memiliki akun?</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textDefault2}>MASUK</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLOURS.white,
    width: 200,
    padding: 8,
    margin: 10,
    color: COLOURS.white,
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
  textDefault1: {
    color: COLOURS.backgroundLight,
  },
  textDefault2: {
    color: COLOURS.backgroundLight,
    fontWeight: "bold",
    margin: 10,
  },
});

export default Daftar;

import React from "react";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLOURS } from "../database/Database";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";



function Daftar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("AccountCreated")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  };

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
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Kata Sandi"
        placeholderTextColor="white"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.loginButton}>
        <TouchableOpacity onPress={handleSignUp} >
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

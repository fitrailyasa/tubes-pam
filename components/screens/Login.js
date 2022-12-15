import React, { useEffect, useState } from "react";
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.repalce("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogIn = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged In with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../database/images/LogoBackground.png")}
    >
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
        <TouchableOpacity onPress={handleLogIn}>
          <Text style={styles.textButton}>MASUK</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textDefault1}>Belum memiliki akun?</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Daftar")}>
        <Text style={styles.textDefault2}>DAFTAR</Text>
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

export default Login;

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLOURS } from "../database/Database";

function AccountCreated({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../database/images/AccountCreated.png")}
    >
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textButton}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
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
    bottom: "30%",
  },
  textButton: {
    color: COLOURS.black,
    fontWeight: "bold",
  },
});

export default AccountCreated;

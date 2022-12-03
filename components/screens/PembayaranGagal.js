import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
  } from 'react-native'
  import React from 'react'
  import { COLOURS } from "../database/Database";
  
  export default function PembayaranGagal({navigation}) {
      return (
      <ImageBackground
          style={styles.background}
          source={require("../database/images/PembayaranGagal.png")}
          >
          <View style={styles.loginButton}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.textButton}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }
  
  const styles = StyleSheet.create({
      background:{
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
        top:"35%",
      },
      textButton: {
        color: COLOURS.black,
        fontWeight: "bold",
      },
  })
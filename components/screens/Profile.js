import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { COLOURS } from "../database/Database";
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core';

export default function Profile() {

const navigation = useNavigation()

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Welcome")
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={styles.RectButtonBack}>
        <Entypo name="chevron-left" size={24} color= 'COLOURS.backgroundDark' />
      </TouchableOpacity>

      <Image
            style={styles.userImage}
            source={{uri: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/19040430/Mengenal-Faktor-yang-Mempengaruhi-Pertumbuhan-Kucing.jpg" }}
          />
      <Text style= {styles.name}> Sumbul</Text>

      <Text style={styles.title}>+6289898989</Text>
      <Text style={styles.title}>m.sumbul@mail.com</Text>

      <Text style={styles.Header}>Akun</Text>
      <TouchableOpacity 
        onPress={handleSignOut}
        style={styles.RectButtonList}>
        <Text style={styles.text}>Keluar</Text>
        <Entypo name="chevron-right" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("MyCart")}
        style={styles.RectButtonList}>
        <Text style={styles.text}>Keranjang Saya</Text>
        <Entypo name="chevron-right" size={24} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.backgroundDark,
    alignItems: 'center',
  },
  RectButtonBack:{
    flexDirection: "row",
    width:"10%",
    backgroundColor: COLOURS.backgroundLight,
    top:"15%",
    right:"18%",
    height:"5%",
    alignItems:"center",
    justifyContent: "center",
    borderRadius:10,
  },
  RectButtonList: {
    flexDirection: "row",
    width:"77%",
    top:"25%",
    height:"4%",
    alignItems:"center",
    justifyContent: "space-between",

  },
  userImage: {
    top:"9%",
    borderRadius: 100,
    width:200,
    height: 200,
  },
  title: {
    color: COLOURS.white,
    fontSize: 16,
    top:"11%",
  },
  name: {
    color: COLOURS.white,
    fontSize: 24,
    top:"11%",
  },
  Header:{
    color: COLOURS.white,
    top:"11%",
    fontSize: 25,
    right:"30%"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  text: {
    fontSize: 19,
    color: COLOURS.white,
  }
});

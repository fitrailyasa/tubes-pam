import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { 
StyleSheet,
SafeAreaView,
View,
TouchableOpacity,
Text,
} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { COLOURS } from "../database/Database";

export default function Location({navigation}) {
  return (
    
    <View style={styles.container}>
        <MapView style={styles.map} 
            initialRegion={{
                latitude: -5.3583,
                longitude: 105.3148,
                latitudeDelta: 0.0030,
                longitudeDelta: 0.0030,}}>

            <Marker
                coordinate={{
                    latitude: -5.3583,
                    longitude: 105.3148,
                }}
            />
        </MapView>
        <View style={styles.info}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
                <Entypo
                    name="chevron-left"
                    style={{
                        width:"10%",
                        top:"2%",
                        left:"3%",
                        fontSize: 24,
                        color: COLOURS.white,
                        padding: 12,
                        backgroundColor: COLOURS.backgroundDark,
                        borderRadius: 30,
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.teks1}>{`Institut Teknologi\nSumatera`}</Text>
            <Text style={styles.teks2}>{`Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung,\nKabupaten Lampung Selatan, Lampung 35365`}</Text>
        
            <View style={styles.pilihalamatButton}>
                <TouchableOpacity onPress={() => navigation.goBack("Home")}>
                    <Text style={styles.textButton}>Pilih Alamat</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white
  },
  map: {
    width: "100%",
    height: "60%",
    overflow:"hidden",
  },
  info:{
    backgroundColor:COLOURS.backgroundDark,
    width:"100%",
    height:"40%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  teks1:{
    color: COLOURS.white,
    fontWeight:"bold",
    left:"7%",
    fontSize:36,
    letterSpacing:2,
  },
  teks2:{
    color: COLOURS.white,
    fontWeight:"normal",
    top:"5%",
    left:"7%",
    fontSize:12,
  },
  pilihalamatButton: {
    width: "70%",
    height: "15%",
    top:"10%",
    left:"9.5%",
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
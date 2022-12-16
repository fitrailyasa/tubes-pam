import React, { useEffect, useState} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { 
StyleSheet,
View,
TouchableOpacity,
Text,
Platform,
TextInput,
} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { COLOURS } from "../database/Database";
import * as Location from "expo-location";

export default function Locations({navigation}) {
  const [location, setLocation] = useState(Object);
  const [address, setAddress] = useState(Object);
  useEffect(() => {
    (async() => {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        console.log("Sorry, Permission Not Granted");
      }
      if(status == 'granted'){
        console.log("Permission Granted!");
      }
      const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
      setLocation(location.coords);

      let address = await Location.reverseGeocodeAsync(location.coords);
      setAddress(location.coords);
      console.log(address);
    })();
  },[location.coords])
  return (
    
    <View style={styles.container}>
        <MapView style={styles.map} 
            region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0030,
                longitudeDelta: 0.0030,}}>

            <Marker
                coordinate={{
                    latitude: location.latitude ? location.latitude : 0,
                    longitude: location.longitude ? location.longitude : 0,
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
            <Text style={styles.teks1}>{'Alamat Anda'}</Text>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={3}
              placeholder ="Masukkan Alamat Anda"
              placeholderTextColor="white"
            />
            
        
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
  input: {
    alignSelf: 'center',
    width: 350,
    height: 100,
    padding: 8,
    margin: 10,
    color: COLOURS.white,
    borderRadius: 10,
    borderColor: COLOURS.white,
    borderWidth: 1,
  },
});
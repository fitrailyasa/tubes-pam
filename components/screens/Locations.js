import React, { useEffect, useState} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { 
StyleSheet,
View,
TouchableOpacity,
Text,
} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { COLOURS } from "../database/Database";
import * as Location from "expo-location";

export default function Locations({navigation}) {
  const [location, setLocation] = useState(Object);
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [postal, setPostal] = useState('');
  const [region, setRegion] = useState('');
  const [subregion, setSubregion] = useState('');
  const [street, setStreet] = useState('');
  const [snumber, setSnumber] = useState('');

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

      let place = await Location.reverseGeocodeAsync({
        latitude : location.coords.latitude,
        longitude : location.coords.longitude,
      });
      
      let city;
      place.find( p => {
        city = p.city
        setCity(p.city)
      });
      let district;
      place.find( p => {
        district = p.district
        setDistrict(p.district)
      });
      let postalcode;
      place.find( p => {
        postalcode = p.postalCode
        setPostal(p.postalCode)
      });
      let region;
      place.find( p => {
        region = p.region
        setRegion(p.region)
      });
      let subregion;
      place.find( p => {
        subregion = p.subregion
        setSubregion(p.subregion)
      });
      let street;
      place.find( p => {
        street = p.street
        setStreet(p.street)
      });
      let snumber;
      place.find( p => {
        snumber = p.streetNumber
        setSnumber(p.streetNumber)
      });
      console.log(city);
      console.log(district);
      console.log(postalcode);
      console.log(region);
      console.log(subregion);
      console.log(street);
      console.log(snumber);

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
            <Text style={styles.teks1}>{city}</Text>
            <View style={styles.alamatlengkap}>
              <Text style={styles.teks2}>{street}, No.{snumber}, {district}, {subregion}, {region}, {postal}</Text>
            </View>

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
    fontSize:12,
  },
  pilihalamatButton: {
    width: "70%",
    height: "15%",
    top:"13%",
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
    width: "90%",
    height: "30%",
    padding: 12,
    margin: 10,
    color: COLOURS.white,
    borderRadius: 10,
    borderColor: COLOURS.white,
    borderWidth: 1,
  },
  alamatlengkap:{
    width: "90%",
    left:"7%",
    top:"7%",
  }
});
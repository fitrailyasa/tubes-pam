import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import Welcome from "./components/screens/Welcome";
import Daftar from "./components/screens/Daftar";
import Login from "./components/screens/Login";
import AccountCreated from "./components/screens/AccountCreated";
import Locations from "./components/screens/Locations";
import PembayaranSukses from "./components/screens/PembayaranSukses";
import PembayaranGagal from "./components/screens/PembayaranGagal";
import Profile from "./components/screens/Profile";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="AccountCreated" component={AccountCreated} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Locations" component={Locations} />
        <Stack.Screen name="PembayaranBerhasil" component={PembayaranSukses} />
        <Stack.Screen name="PembayaranGagal" component={PembayaranGagal} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

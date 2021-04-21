import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import useFirebase from "./useFirebase";
const Stack = createStackNavigator();
const App = () => {
  const { initializeAppFirebase } = useFirebase();
  useEffect(() => {
    initializeAppFirebase();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const homeScreen = () => {
  return <Home />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

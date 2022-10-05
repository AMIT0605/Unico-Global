import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './Components/MainScreen';
import AddFoodForm from "./Components/AddFoodForm";
import Signup from "./Components/Signup";
import Feed from "./Components/Feed";
import Share from "./Components/Share";
import Comment from "./Components/Comment";
const App=()=> {
  const Stack = createNativeStackNavigator();
  return (

 <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={MainScreen}/>
      <Stack.Screen name="Login" component={AddFoodForm} />
      <Stack.Screen name="Sign Up" component={Signup} />
      <Stack.Screen name="Feeds" component={Feed}/>
      <Stack.Screen name="Comments" component={Comment}/>
      <Stack.Screen name="Share" component={Share}/>
    </Stack.Navigator>
  </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;



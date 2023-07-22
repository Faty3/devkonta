import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import GenreScreen from '../screens/GenreScreen';
import BonjourScreen from '../screens/BonjourScreen';
import BonjoursScreen from '../screens/BonjoursScreen';
import JamaisScreen from '../screens/JamaisScreen';
import DejaScreen from '../screens/DejaScreen';
import JamaissScreen from '../screens/JamaissScreen'
import FonctionScreen from '../screens/FonctionScreen';
import KunafoniScreen from '../screens/KunafoniScreens';
import PuberteScreen from '../screens/PuberteScreen';
import CycleScreen from '../screens/CycleScreen';
import ReglesScreen from '../screens/ReglesScreen';
import InfectionScreen from '../screens/InfectionScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="Genre" options={{headerShown: false}} component={GenreScreen} />
        <Stack.Screen name="Bonjour" options={{headerShown: false}} component={BonjourScreen} />
        <Stack.Screen name="Bonjours" options={{headerShown: false}} component={BonjoursScreen} />
        <Stack.Screen name="Jamais" options={{headerShown: false}} component={JamaisScreen} />
        <Stack.Screen name="Jamaiss" options={{headerShown: false}} component={JamaissScreen} />
        <Stack.Screen name="Deja" options={{headerShown: false}} component={DejaScreen} />
        <Stack.Screen name="Fonction" options={{headerShown: false}} component={FonctionScreen} />
        <Stack.Screen name="Kunafoni" options={{headerShown: false}} component={KunafoniScreen} />
        <Stack.Screen name="Puberte" options={{headerShown: false}} component={PuberteScreen} />
        <Stack.Screen name="Cycle" options={{headerShown: false}} component={CycleScreen} />
        <Stack.Screen name="Regles" options={{headerShown: false}} component={ReglesScreen} />
        <Stack.Screen name="Infection" options={{headerShown: false}} component={InfectionScreen} />
</Stack.Navigator>
    </NavigationContainer>
  )
}
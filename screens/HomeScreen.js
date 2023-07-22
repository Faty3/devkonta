import { View, Text, Image, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useColorScheme } from 'tailwindcss-react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown : false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#559FD3] flex-1">
      <View className="items-center top-12">
      <Image source={require('../assets/images/logo.png')} className="w-[250px] h-[250px]"/>
      </View>
      <View className="flex-1 relative items-center justify-center">
        <Text className="text-[26px] font-bold bottom-16 -mt-40">Bienvevue Sur Keneya Lakika</Text>
        <Text className="text-[20px] font-bold bottom-16 mt-8">Choisissez Votre Thematique</Text>
      </View>
      <View className="flex-row">
        <TouchableOpacity onPress={() => navigation.navigate("Genre")}>
          <View className="w-[160px] h-[130px] bg-white rounded-lg absolute bottom-36 -right-35 ml-6">
            <Text className="text-[30px] font-bold ml-11 mt-3">SSR</Text>
            <Text className="text-[16px] ml-4 mt-3">Santé Sexuelle et Réproductive</Text>
          </View>
        </TouchableOpacity>
        <View className="w-[160px] h-[130px] bg-white rounded-lg absolute right-5 bottom-36">
         <TouchableOpacity>
            <Text className="text-[30px] font-bold ml-11 mt-3">MGF</Text>
            <Text className="text-[16px] ml-1 mt-3">Mutilations Genitales Feminines</Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
  )
}
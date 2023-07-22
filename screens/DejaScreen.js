import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'


export default function DejaScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown : false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#EED6DE] relative">
        
        <View className="absolute w-full h-[100px] bg-[#DE1457]">
            <View className="flex-row justify-start top-12">
            <TouchableOpacity onPress={()=> navigation.goBack()} 
            className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                <ArrowLeftIcon size="20" color="#DE1457" />
            </TouchableOpacity>
            </View>  
        </View>
        <View className="w-[150px] h-[30px] rounded-full bg-[#fff] mt-16 -ml-2">
            <Text className="text-[18px] ml-5">Bonjour !
            <FontAwesome name="hand-peace-o" size={24} color="red" /></Text>
        </View>
        <View className="w-[360px] h-[120px] rounded-full bg-[#fff] mt-2 -ml-16">
            <Text className="text-[18px] ml-20 mt-1">Je suis Keneya Lakika, j’ai été</Text>
            <Text className="text-[18px] ml-20">conçu dans le but de t’aider a</Text>
            <Text className="text-[18px] ml-20">avoir accès á des informations fiables sur ta santé sexuelle et reproductive. </Text>
        </View>
        <View className="w-[360px] h-[100px] rounded-full bg-[#fff] mt-2 -ml-16">
            <Text className="text-[18px] ml-20 mt-3">Considère moi comme une amie</Text>
            <Text className="text-[18px] ml-20">avec qui tu peux poser toutes les</Text>
            <Text className="text-[18px] ml-20">questions en lien avec la santé sexuelle et reproductive. </Text>
        </View>
          <View className="w-[60px] h-[40px] rounded-lg bg-[#559FD3] ml-72">
              <Text className="text-[22px] mt-2 ml-3">Ok</Text>
          </View>
          <View className="w-[360px] h-[50px] rounded-full bg-[#fff] mt-2 -ml-16">
            <Text className="text-[18px] ml-20 mt-1">Ne t'inquietes pas cela reste confidentiel.</Text>
        </View>
        <View className="w-[360px] h-[100px] rounded-full bg-[#fff] mt-2 -ml-16">
            <Text className="text-[18px] ml-20 mt-1">Afin de t'offrire une experience agreable etefficace, dit moi dans</Text>
            <Text className="text-[18px] ml-20"> quelle situation tu te trouve parmi</Text>
            <Text className="text-[18px] ml-20">ces deux options qui suivent.</Text>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Bonjours")}>
          <View className="w-[98px] h-[45px] rounded-lg bg-[#559FD3] ml-72">
              <Text className="text-[22px] mt-2 ml-1">D'accord</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

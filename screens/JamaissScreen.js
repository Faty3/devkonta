import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { Entypo } from '@expo/vector-icons'; 



export default function JamaissScreen() {
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
        <Text className="text-[22px] text-white font-bold mt-6 ml-16">Je n’ai jamais vu mes règles</Text>
        <View className="flex-row justify-center mt-40">
                <Image source={require("../assets/images/ms.png")}
                style={{width: 350, height: 350}} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Fonction")}>
          <View className="w-[100] h-[45px] rounded-lg bg-[#559FD3] ml-64">
              <Text className="text-[22px] mt-2 ml-1">D'accord</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

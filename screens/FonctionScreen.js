import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'


export default function FunctionScreen() {
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
        <View className="flex-row mt-12">
            <TouchableOpacity onPress={() => navigation.navigate("Kunafoni")}
            className="rounded-lg w-44 border border-[#DE1457] bg-white space-x-2 px-4 py-4 shadow-md my-10 mx-3">
                <Image source={require('../assets/images/kunafoni.png')} className="ml-3 w-28 h-28 rounded-md object-cover"/>
                <Text className="text-[15px] font-bold">Keneya Kunafoni</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")}
            className="rounded-lg w-44 border border-[#DE1457] bg-white px-4 py-4 shadow-md my-10 ">
                <Image source={require('../assets/images/quiz.png')} className="ml-3 w-28 h-28 rounded-md object-cover"/>
                <Text className="text-[15px] font-bold ml-8">Quiz SSR</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row">
            <TouchableOpacity onPress={() => navigation.navigate("Locate")}
            className="rounded-lg w-44 border border-[#DE1457] bg-white px-4 py-3 shadow-md mx-3">
                <Image source={require('../assets/images/geo.png')} className="ml-4 w-28 h-28 rounded-md object-cover"/>
                <Text className="text-[15px] font-bold">Gélocalisation des structures de SSR </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Rdv")}
            className="rounded-lg w-44  border border-[#DE1457] bg-white px-2 py-3 shadow-md">
                <Image source={require('../assets/images/rdv.png')} className="ml-6 w-28 h-28 rounded-md object-cover"/>
                <Text className="text-[15px] font-bold">Prise de rendez-vous avec gynécologue</Text>
            </TouchableOpacity>
        </View>  
    </SafeAreaView>
  )
}
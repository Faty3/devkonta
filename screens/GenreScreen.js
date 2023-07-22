import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'


export default function GenreScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown : false,
        });
    }, []);
    return (
        <SafeAreaView className="flex-1 bg-[#559FD3] relative">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="#06B2BE" />
          </TouchableOpacity>
        </View>
            <View className="items-center top-12">
            <Image source={require('../assets/images/logo.png')} className="w-[160px] h-[160px]"/>
        </View>
        <View className="items-center">
            <Text className="text-[20px] font-bold mt-20">Je suis une fille</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Bonjour")}>
                <Image source={require('../assets/images/fille.png')} className="w-[200px] h-[200px] rounded-lg"/>
            </TouchableOpacity>
        </View>
        <View className="items-center">
            <Text className="text-[20px] font-bold bottom- mt-8">Je suis un garçon</Text>
            <Image source={require('../assets/images/garcon.png')} className="w-[200px] h-[200px] rounded-lg"/>
        </View>
        </SafeAreaView>
    )
}

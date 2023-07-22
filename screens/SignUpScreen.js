import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="#06B2BE" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/logo.png')} 
                style={{width: 150, height: 150}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <TextInput
                className="p-4  text-black rounded-2xl mb-3 border border-[#559FD3]"
                placeholder='Nom Complet' placeholderTextColor="#000"
            />
            <TextInput
                className="p-4  text-black rounded-2xl mb-3 border border-[#559FD3]"
                placeholder='Date de naissance' placeholderTextColor="#000"
            />
            <TextInput
                className="p-4 text-black-900 rounded-2xl mb-3 border border-[#559FD3]"
                placeholder='Address Email' placeholderTextColor="#000"
            />
            <TextInput
                className="p-4  text-black rounded-2xl mb-7 border border-[#559FD3]"
                secureTextEntry
                placeholder='Mot de Passe' placeholderTextColor="#000"
            />
            <TouchableOpacity
                className="py-3 bg-[#559FD3] rounded-xl"
            >
                <Text className="text-xl font-bold text-center text-black">
                    S'inscrire
                </Text>
            </TouchableOpacity>
        </View>
        {/* <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View> */}
        <View className="flex-row justify-center mt-7">
        <Text className="text-[#559FD3] font-semibold">Si vous avez deja un compte?</Text>
                    <TouchableOpacity className="rounded-xl bg-[#559FD3]" onPress={()=> navigation.navigate('Login')}>
                        <Text className="text-xl font-semibold text-black-900"> Se Connecter </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="#06B2BE" />
          </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/logo.png')} 
          style={{width: 200, height: 200}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <TextInput
                className="p-4 text-black rounded-2xl mb-3 border border-[#559FD3]"
                placeholder='Addresse Email' placeholderTextColor="#000"
            />
            <TextInput
                className="p-4  text-black rounded-2xl mb-7 border border-[#559FD3]"
                secureTextEntry
                placeholder='Mot de Passe' placeholderTextColor="#000"
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}
              className="py-3 bg-[#559FD3] rounded-xl">
                <Text className="text-xl font-bold text-center text-gray-700">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">Vous n'avez pas de compte?</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text className="font-semibold text-[#559FD3]">S'inscrire</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
    
  )
}
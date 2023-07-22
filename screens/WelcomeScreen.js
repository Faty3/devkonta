import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-around my-4">
            <Text 
                className="text-white font-bold text-4xl text-center">
                Bienvenue Sur Keneya Lakika!
            </Text>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/logo.png")}
                    style={{width: 350, height: 350}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-white mx-7 rounded-xl">
                    <Text className="text-xl font-bold text-center text-black-700">Creer Un Compte</Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Si vous avez deja un compte?</Text>
                    <TouchableOpacity className="rounded-xl bg-white" onPress={()=> navigation.navigate('Login')}>
                        <Text className="text-xl font-semibold text-black-900"> Se Connecter </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
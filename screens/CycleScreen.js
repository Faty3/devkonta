import { StyleSheet, View, Image, Button, Text, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, { useRef, useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

export default function CycleScreen() {
  const [showContent, setShowContent] = useState( initialState = false);
  const [showContent1, setShowContent1] = useState( initialState = false);
  const [showContent2, setShowContent2] = useState( initialState = false);
  const [showContent3, setShowContent3] = useState( initialState = false);
  const [showContent4, setShowContent4] = useState( initialState = false);
  const [showContent5, setShowContent5] = useState( initialState = false);
  const [showContent6, setShowContent6] = useState( initialState = false);
  const [showContent7, setShowContent7] = useState( initialState = false);
  const [showContent8, setShowContent8] = useState( initialState = false);
  const [showContent9, setShowContent9] = useState( initialState = false);
  const animationController = useRef(new Animated.Value( value=0)).current;
  const animationController1 = useRef(new Animated.Value( value=0)).current;
  const animationController2 = useRef(new Animated.Value( value=0)).current;
  const animationController3 = useRef(new Animated.Value( value=0)).current;
  const animationController4 = useRef(new Animated.Value( value=0)).current;
  const animationController5 = useRef(new Animated.Value( value=0)).current;
  const animationController6 = useRef(new Animated.Value( value=0)).current;
  const animationController7 = useRef(new Animated.Value( value=0)).current;
  const animationController8 = useRef(new Animated.Value( value=0)).current;
  const animationController9 = useRef(new Animated.Value( value=0)).current;
  const animationController10 = useRef(new Animated.Value( value=0)).current;
  const animationController11 = useRef(new Animated.Value( value=0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true
    };
    Animated.timing(animationController, config).start();
    setShowContent(!showContent);
  };
    const arrowTransform = animationController.interpolate( config= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem1 = () => {
      const config1 = {
        duration: 300,
        toValue: showContent1 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController1, config1).start();
      setShowContent1(!showContent1)
    };
    const arrowTransform1 = animationController1.interpolate( config1= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem2 = () => {
      const config2 = {
        duration: 300,
        toValue: showContent2 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController2, config2).start();
      setShowContent2(!showContent2)
    };
    const arrowTransform2 = animationController2.interpolate( config2= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });
    
    const toggleListItem3 = () => {
      const config3 = {
        duration: 300,
        toValue: showContent3 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController3, config3).start();
      setShowContent3(!showContent3)
    };
    const arrowTransform3 = animationController3.interpolate( config3= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem4 = () => {
      const config4 = {
        duration: 300,
        toValue: showContent4 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController4, config4).start();
      setShowContent4(!showContent4)
    };
    const arrowTransform4 = animationController4.interpolate( config4= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem5 = () => {
      const config5 = {
        duration: 300,
        toValue: showContent5 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController5, config5).start();
      setShowContent5(!showContent5)
    };
    const arrowTransform5 = animationController5.interpolate( config5= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem6 = () => {
      const config6 = {
        duration: 300,
        toValue: showContent6 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController6, config6).start();
      setShowContent6(!showContent6)
    };
    const arrowTransform6 = animationController6.interpolate( config6= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem7 = () => {
      const config7 = {
        duration: 300,
        toValue: showContent7 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController7, config7).start();
      setShowContent7(!showContent7)
    };
    const arrowTransform7 = animationController7.interpolate( config7= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem8 = () => {
      const config8 = {
        duration: 300,
        toValue: showContent8 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController8, config8).start();
      setShowContent8(!showContent8)
    };
    const arrowTransform8 = animationController8.interpolate( config8= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem9 = () => {
      const config9 = {
        duration: 300,
        toValue: showContent9 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController9, config9).start();
      setShowContent9(!showContent9)
    };
    const arrowTransform9 = animationController9.interpolate( config9= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown : false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <View className="absolute w-full h-[100px] bg-[#DE1457]">
            <View className="flex-row justify-start top-12">
                <TouchableOpacity onPress={()=> navigation.goBack()} 
                    className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                      <ArrowLeftIcon size="20" color="#DE1457" />
                </TouchableOpacity>
            </View>
        </View>
        <View className="items-center rounded-xl border border-[#DE1457] bg-white shadow-md shadow-red-400 mt-16 mb-3 space-y-2 mx-4">
            <Image source={require('../assets/images/higyène.png')} className="ml-3 w-32 h-32 rounded-lg object-cover"/>
            <Text className="text-[18px] font-bold">Cycle menstruel et Grossesses précoces</Text>
        </View>
        <ScrollView>
        <View className="flex-col divide-y">
        <TouchableOpacity onPress={()=> toggleListItem()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Qu’est-ce le cycle menstruel ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform}],marginLeft:92 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent && (
              <Text className="text-[16px] px-4">Quand on parle du “cycle” : c’est en fait un raccourci pour parler du “cycle OVARIEN“, c’est-à-dire qu’on parle du cycle de l’ovaire et du follicule ovarien. Il s’agit d’un cycle hormonal qui connait 3 phases : une phase pré ovulatoire (phase folliculaire), une phase ovulatoire (Fenêtre fertile), une phase post ovulatoire (phase lutéale). {'\n'}Le cycle menstruel est la période qui va du premier jour des règles jusqu’au premier jour des règles suivantes. En moyenne, un cycle menstruel dure 28 jours (c’est le nombre de jours compris entre deux règles), mais il est possible qu’il soit plus long ou plus court.
              Il existe des cycles courts (21 jours) et des cycles longs (45 jours). Surveille ton cycle menstruel pour éviter une grossesse non désirée et comprendre comment fonctionne ton corps. La durée du cycle varie d’une femme à l’autre.
              Le cycle menstruel est un mécanisme qui prépare le corps féminin à accueillir une grossesse chaque mois, de la puberté à la ménopause.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem1()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Quel est mon type de cycle : long, court ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform1}],marginLeft:4 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent1 && (
              <Text className="text-[16px] px-4">Certaines femmes ont des cycles plus courts, d’autres plus longs, et cela n’atteste pas forcément d’un problème de fertilité ni de santé. {'\n'}Un cycle menstruel est dit long s'il depasse 28 jours ; {'\n'}A l'inverse, si un cycle menstruel fait moins de 28 jours, on parlera alors de cycle menstruel court.              
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem2()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Comment savoir si on a un cycle             menstruel régulier et irrégulier ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform2}],marginLeft:24 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent2 && (
              <Text className="text-[16px] px-4">La durée de ton propre cycle menstruel est unique. Toute durée allant de 21 à 35 jours est considérée comme normale. Si, par contre, ton cycle menstruel est inférieur à 21 jours ou supérieur à 35 jours, c'est qu'il est irrégulier.
              </Text>
             )}
        <TouchableOpacity onPress={()=> toggleListItem3()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Quelles règles d’hygiène pendant la menstruation ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform3}],marginLeft:40 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent3 && (
              <Text className="text-[16px] px-4">L’hygiène des sous-vêtements est très important :
              {'\n'}- Utiliser des slips en coton ;
              {'\n'}- Changer quotidiennement les slips ou chaque fois qu’ils sont salis ;
              {'\n'}- Eviter l’usage intempestif des détergents ;
              {'\n'}- Rincer à grande eau le linge et bien le sécher au soleil ;
              {'\n'}- Remplacer de temps en temps les collants ou pantalons par des vêtements plus aérés (pagnes, jupes, grand boubou etc).
              {'\n'}- Pendant les règles :
              Utiliser des serviettes hygiéniques propres et les changer très souvent.
              </Text>
             )}
              <TouchableOpacity onPress={()=> toggleListItem4()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Qu’est-ce que l’ovulation ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform4}],marginLeft:116 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent4 && (
              <Text className="text-[16px] px-4">L’ovulation est le processus de libération de l’ovule par les ovaires.
              Après l’ovulation, l’ovule peut être soit fécondé (cela veut dire qu’il y’ a une grossesse) soit expulsé (cela veut dire qu’il y’ a les règles). L’ovulation a lieu le 14 -ème jour du cycle menstruel de 28 jours mais varie selon la durée du cycle qu’il soit long ou court.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem5()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Comment observer ta période de danger        ou période de prudence ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform5}],marginLeft:-26 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent5 && (
              <Text className="text-[16px] px-4">La période de danger correspond au moment où il est probable de tomber enceinte. {'\n'}Un spermatozoïde a une durée de vie d’environ 3 jours et un ovule un (1) jour.  {'\n'}Pendant la période de danger, il est recommandé de s’abstenir d’avoir des relations sexuelles ou d’utiliser une méthode de contraception, trois jours avant le début de l’ovulation et trois jours après (ce qui correspond à une semaine).</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem6()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Les grossesses précoces, quelles en           sont les conséquences ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform6}],marginLeft:-4 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent6 && (
              <Text className="text-[16px] px-4">Une grossesse précoce (avoir un enfant avant l’âge de 18 ans) à des conséquences aussi bien chez la jeune fille que chez le père de l’enfant, l’enfant, les parents, la famille etc.
              {'\n'}Une grossesse précoce chez la jeune fille l’expose à de nombreuses complications lors de la grossesse et de l’accouchement.{'\n'}Ces complications peuvent être un accouchement difficile voire fatal (décès), un risque de stérilité, un risque de maladie chronique, de troubles psychologique, l’interruption de la scolarité, des conflits avec la famille et un risque de rejet par la famille.
              {'\n'}Les grossesses précoces et les grossesses non désirées ont pour principales conséquences les avortements chez les jeunes filles.
              </Text>
             )}
            <TouchableOpacity onPress={()=> toggleListItem7()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                La grossesse adolescente comporte-t-elle   de risques ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform7}],marginLeft:-8 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent7 && (
              <Text className="text-[16px] px-4">La grossesse à l’adolescence n’est pas sans risque, mais peut facilement être menée à terme avec un bon suivi médical. En effet, à partir du moment où vous êtes réglée, cela signifie que votre corps est théoriquement prêt à concevoir un bébé.
              Cependant, tomber enceinte à 14 ans, juste après la puberté, n’implique pas les mêmes conséquences qu’à 17 ans. Le bassin n’est pas encore complètement formé et le manque de maturité peut avoir des répercussions émotionnelles et psychologiques. L’angoisse, la gestion de la douleur, les interrogations ou même la méconnaissance de son propre corps peuvent engendrer des complications de grossesse : hypertension artérielle, accouchement prématuré, retard de croissance fœtale...
              </Text>
             )}
             
        </View>
        </ScrollView>   
    </SafeAreaView>  
  )
  }  
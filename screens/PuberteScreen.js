import { StyleSheet, View, Image, Button, Text, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, { useRef, useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

export default function PuberteScreen() {
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
            <Image source={require('../assets/images/puber.png')} className="ml-3 w-50 h-50 rounded-lg object-cover"/>
            <Text className="text-[18px] font-bold">Puberté et adolescence</Text>
        </View>
        <ScrollView>
        <View className="flex-col divide-y">
        <TouchableOpacity onPress={()=> toggleListItem()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Qu’est-ce que la puberté ? À quel âge ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform}],marginLeft:30 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent && (
              <Text className="text-[16px] px-4">La puberté apparait autour de 12 ans.
              C’est une période de transition entre l’enfance et l’âge adulte. Elle est
              caractérisée par le développement des organes et des caractères sexuels.
              Elle débute plus ou moins tôt et dure plusieurs années. Elle est très variable d’un
              individu à l’autre, et s’accompagne de modifications psychologiques.
              Au terme de la puberté, la fille a acquis sa fonction de
              reproduction.
              La puberté est variable d’une fille à l’autre et se situe entre 9 et 16 ans.</Text>
             )}
          <TouchableOpacity onPress={()=> toggleListItem1()}
              className="flex-row border-[#DE1457] rounded-xl ml-4">
                <Text className="text-[17px] font-bold">
                Quels sont les signes de la puberté chez la fille ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform1}],marginLeft:-4 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent1 && (
          <Text className="text-[16px] px-4">Le premier signe de la puberté chez la fille est le développement des seins vers 11
          et 12 ans environ, l’apparition des poils sur le pubis, sous les aisselles, l’acné
          (irruption soudaine de bouton sur le visage et la peau), le désir sexuel et
          la sur venue des règles.</Text>
          )} 
          <TouchableOpacity onPress={()=> toggleListItem2()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-3 mr-4">
                <Text className="text-[16px] font-bold">
                Quels sont les changements psychologiques à la puberté ? C’est quand la Fin de la puberté?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform2}],marginLeft:-8 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent2 && (
              <Text className="text-[17px] px-3">Si la puberté entraine un changement physique, elle est aussi une période de
              bouleversement psychologique car la transition de l’enfance vers l’âge adulte peut
              s’avérer difficile à gérer.
              Elle peut notamment générer de l’anxiété, des inquiétudes et des sauts
              d’humeurs.
              Les modifications corporelles et le déferlement des hormones sexuelles peuvent
              aussi amener à des modifications de la personnalité.
              Mais le grand changement qui s’opère est aussi le désir sexuel. La maturation
              émotionnelle et psychologique doit être accompagnée par les parents, qui doivent
              rester à l’écoute de leur enfant.
              
              En moyenne, les transformations physiques sont terminées vers 18 ans.</Text>
             )}
              <TouchableOpacity onPress={()=> toggleListItem3()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[16px] font-bold">
                Est-il normal de prendre du poids pendant la puberté ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform3}],marginLeft:3 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent3 && (
              <Text className="text-[16px] px-4">Absolument, tu grandis et la forme de ton corps change aussi. Les femmes
              adultes ont plus de graisse que les jeunes filles. Tes hanches vont s’élargir, tes
              cuisses et tes fesses vont devenir plus rebondies. Tant que tu auras des repas
              équilibrés et feras du sport, tu ne devrais pas avoir besoin de faire un régime
              particulier. Souviens-toi que ton corps a besoin d’énormément d’énergie pour
              grandir !</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem4()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Puberté, période de tentation : que faire ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform4}],marginLeft:12 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent4 && (
              <Text className="text-[16px] px-4">La puberté est une période pendant laquelle tu peux être tenté de consommer de
              la drogue, de l’alcool, du tabac etc. Ces produits ont des effets néfastes sur ta
              santé et ta vie. C’est aussi la période rebelle.
              La consommation de la drogue, de l’alcool et du tabac sont des tentations
              fréquentes, mais tu as les moyens et tu peux les refuser et donc te protéger.
              Quelques façons de refuser :
              Se dire que c’est dangereux ;
              Dire non, merci ;
              Se détourner de la personne ou le groupe qui te le propose ;
              Quitter le groupe.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem5()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Qu’est-ce que l’adolescence ? Quelle différence entre puberté et adolescence ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform5}],marginLeft:20 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent5 && (
              <Text className="text-[16px] px-4">L’adolescence est une période de la vie marquée par d’importants changements
              biologiques et psychosociaux, qui représente le passage entre l’enfance et la vie
              adulte. Elle commence avec le début de la puberté.
              Certains ont tendance à croire que puberté et adolescence sont deux notions
              différentes. D’autres au contraire auraient tendance à les confondre, pensant qu’il
              s’agit de la même chose.
              En fait la puberté signe l’entrée dans l’adolescence, mais les deux sont intimement
              liées et fortement entremêlées. L’une ne va pas sans l’autre, puisque les deux
              nous permettent de devenir une grande personne.
              
              La puberté se traduit par des transformations physiques importantes au niveau
              du corps. Et tous ces changements ont un impact sur ce qu’il se passe dans notre
              tête. En fait ils s’accompagnent de ce que l’on appelle des bouleversements
              psychologiques.</Text>
             )}
            <TouchableOpacity onPress={()=> toggleListItem6()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Comment suis-je perçue par les autres pendant l'adolescence?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform6}],marginLeft:30 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent6 && (
              <Text className="text-[16px] px-4">Que l’on soit une fille ou un garçon, tous les changements pubertaires qui
              s’opèrent dans notre corps font qu’on a une image chamboulée de notre corps ;
              ça peut nous donner un sentiment d’étrangeté. C’est pour ça que souvent on
              passe du temps devant le miroir, comme pour se réapproprier ce corps qu’on ne
              reconnaît plus, se ré-familiariser avec lui. Parfois même des complexes
              apparaissent et se pose alors la question du regard des autres : « Comment suis-je
              perçue ? », « Est-ce que les autres vont m’aimer telle que je suis ? ».</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem7()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Comment l'on se sent pendant l'adolescence ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform7}],marginLeft:90 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent7 && (
              <Text className="text-[16px] px-4">La puberté apparait autour de 12 ans.
              C’est une période de transition entrC’est une phase durant laquelle on se pose aussi des tas de questions
existentielles sur qui on est, d’où on vient, quel sens donner à la vie, que va-t-on
devenir plus tard, pourquoi le monde est-il ainsi fait, etc… Même si elles nous
préoccupent, ces questions sont normales : elles traduisent le fait qu’on mûrit et
que donc on réfléchit différemment. Parfois elles nous tourmentent parce qu’on a
l’impression d’être en décalage avec les autres, avec le monde qui nous entoure,
et du coup on ressent un sentiment de solitude ou on a l’impression que personne
ne nous comprend. Et puis parfois au contraire, ces questions existentielles nous
stimulent, nous donnent envie de grandir, de savoir qui on sera plus tard.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem8()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Quelles relations avec les parents pendant Adolescence?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform8}] }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent8 && (
              <Text className="text-[16px] px-4">C’est un moment aussi où les relations avec nos parents sont un peu compliquées,
              parce qu’à la fois on aimerait plus de libertés, de responsabilités, on veut qu’ils
              nous fassent confiance, qu’ils nous lâchent un peu les baskets, on remet même en
              cause l’éducation qu’ils nous donnent. Et en même temps on a encore parfois
              besoin de leurs conseils, de leur avis, de leurs câlins, et de leurs limites.
              Finalement on a besoin de pouvoir compter sur nos parents, même si on ne se
              l’avoue pas toujours.
              Et puis les parents représentent un modèle qu’on veut à la fois garder et à la fois
              rejeter. Ça permet de s’identifier tout en continuant de chercher qui on est
              exactement. Par exemple c’est comme si on avait envie de « devenir comme papa
              mais faire mieux que papa ! ». Du coup, ça crée comme de la rivalité. C’est pour ça
              qu’il peut exister parfois une certaine agressivité ou animosité envers son père ou
              sa mère. Alors avec ce corps en pleine transformation ajouté aux difficultés qu’on
              rencontre, pas facile de rester serein.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem9()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                À quel âge peut-on avoir ses premières relations sexuelles ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform9}],marginLeft:30 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent9 && (
              <Text className="text-[16px] px-4">Vous pouvez légalement avoir des relations sexuelles à partir de 18 ans. Avant
              cette limite d’âge, toute relation sexuelle est interdite et considérée comme un
              acte punissable. Indépendamment de ce contexte légal, il est indispensable que le
              développement de votre corps permette la pénétration : les parois du vagin
              doivent être suffisamment élastiques, les lèvres gonflées et le vagin lubrifié. Outre
              ces aspects physiques, la jeune fille doit aussi – et surtout – se sentir
              psychologiquement prête.</Text>
             )}
        </View>
        </ScrollView>   
    </SafeAreaView>  
  )
  }  
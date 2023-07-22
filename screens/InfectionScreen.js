import { StyleSheet, View, Image, Button, Text, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, { useRef, useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

export default function InfectionScreen() {
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
  const [showContent10, setShowContent10] = useState( initialState = false);
  const [showContent11, setShowContent11] = useState( initialState = false);

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

    const toggleListItem10 = () => {
      const config10 = {
        duration: 300,
        toValue: showContent10 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController10, config10).start();
      setShowContent10(!showContent10);
    };
      const arrowTransform10 = animationController10.interpolate( config10= {
        inputRange: [0,1],
        outputRange: ['0deg', '90deg']
      });

      const toggleListItem11 = () => {
        const config11 = {
          duration: 300,
          toValue: showContent11 ? 0 : 1,
          useNativeDriver: true
        };
        Animated.timing(animationController11, config11).start();
        setShowContent11(!showContent11);
      };
        const arrowTransform11 = animationController11.interpolate( config11= {
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
            <Image source={require('../assets/images/infection.png')} className="ml-3 w-50 h-50 rounded-lg object-cover"/>
            <Text className="text-[18px] font-bold">Infections sexuellements transmissibles</Text>
        </View>
        <ScrollView>
        <View className="flex-col divide-y">
        <TouchableOpacity onPress={()=> toggleListItem()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Qu’est-ce qu’une infection sexuellement transmissible ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform}],marginLeft:12 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent && (
              <Text className="text-[16px] px-4">Une infection sexuellement transmissible (IST) est une infection qui se transmet principalement au cours d’un rapport sexuel non protégé. 
              </Text>
             )}
          <TouchableOpacity onPress={()=> toggleListItem1()}
              className="flex-row border-[#DE1457] rounded-xl ml-4">
                <Text className="text-[17px] font-bold">
                Quelles sont les infections sexuellement transmissibles les plus courantes ? 
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform1}],marginLeft:12 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent1 && (
          <Text className="text-[16px] px-4">Les infections que l’on rencontre le plus souvent sont la syphilis, la gonorrhée, chlamydiose et la trichomonase.
          Celles-ci peuvent être guéries mais l’hépatite B, le virus de l’herpès, le VIH/SIDA sont non guérissable à ce jour mais peuvent être prise en charge dans un centre de santé.
          </Text>
          )} 
          <TouchableOpacity onPress={()=> toggleListItem2()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-3 mr-4">
                <Text className="text-[16px] font-bold">
                Quelles sont les voies de transmission d’une IST ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform2}],marginLeft:2 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent2 && (
              <Text className="text-[17px] px-3">Les IST se transmettent principalement :
              {'\n'}Lors d’un rapport sexuel non protégé (vaginal, anal ou oral) ;
              Lors d’une transfusion sanguine ;
              Lors de la grossesse, de l’accouchement et de l’allaitement :
              Le VIH/SIDA, la syphilis, la gonorrhée, la chlamydiose, l’hépatite B peuvent se transmettre de la mère à l’enfant ;
              {'\n'}Lors d’échange de sous-vêtements, de pantalon, etc. ;
              {'\n'}Lors de l’utilisation de toilettes communes.
              </Text>
             )}
              <TouchableOpacity onPress={()=> toggleListItem3()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[16px] font-bold">
                Quels sont les symptômes courants d’une infection sexuellement transmissible ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform3}],marginLeft:12 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent3 && (
              <Text className="text-[16px] px-4">Il est possible de contracter une IST sans avoir des symptômes visibles. {'\n'}Les symptômes les plus courants sont :
              {'\n'}Les écoulements ou pertes vaginales (importantes, mauvaises odeurs) ;
              {'\n'}Les démangeaisons et sensations de brulures en urinant ;
              {'\n'}Les boutons et plaies sur les parties génitales (sexe, anus, pubis), et aussi dans la bouche ;
              {'\n'}Les douleurs dans le bas ventre ;
              {'\n'}Les saignements.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem4()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Comment éviter d’avoir une infection sexuellement transmissible ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform4}],marginLeft:38 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent4 && (
              <Text className="text-[16px] px-4">Tu as une chance sur deux d’attraper une IST lorsque tu as plusieurs partenaires sexuels.
              {'\n'}Le meilleur moyen d’éviter une IST est de t’abstenir d’avoir des relations sexuelles tout en respectant les règles d’hygiènes individuelle ; 
              {'\n'}Le moyen le plus efficace reste l’utilisation systématique et correcte des préservatifs (masculins ou féminin) lors de chaque rapport sexuel.
              Il est recommandé de faire le dépistage tous les 3 mois comme pour le VIH/SIDA surtout lorsque tu as plusieurs partenaires sexuels.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem5()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Qu’est-ce que le VIH/SIDA ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform5}],marginLeft:116 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent5 && (
              <Text className="text-[16px] px-4">Le VIH (Virus d’Immunodéficience Humaine) est un type de virus qui s’attaque aux cellules du système immunitaire (système naturel de défense de corps contre les maladies) en les détruisant pour les rendre inefficace contre les maladies. La maladie qu’il cause (sida) est le dernier stade de l’infection liée au VIH.
              {'\n'}Le sida ou syndrome d’Immunodéficience Acquise est la conséquence tardive d’une infection par le VIH.
              {'\n'}Une fois les défenses détruites, le VIH t’expose à de nombreuses maladies difficiles à traiter. 
              C’est le cas des petites infections telles que la grippe ou la bronchite qui peuvent entrainer la mort.</Text>
             )}
            <TouchableOpacity onPress={()=> toggleListItem6()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Quels sont les modes de transmissions          du VIH/SIDA ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform6}],marginLeft:-16 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent6 && (
              <Text className="text-[16px] px-4">Il existe trois modes de transmissions du VIH.
              {'\n'}1. Transmission par voie sexuelle : 
              {'\n'}    Lors des rapports sexuels avec pénétration {'\n'}    vaginale ou anale sans préservatif.
              {'\n'}2. Transmission par voie sanguine :
              {'\n'}     Lors du partage des objets souillés (lame, {'\n'}     aiguille, échange de seringue) surtout entre {'\n'}     usagers de drogues par voie intraveineuses ;
              {'\n'}     Lors d’une transfusion de sang provenant {'\n'}     d’une personne infectée par le VIH ;
              {'\n'}     Lors d’une plaie accidentelle survenue, par {'\n'}     piqûre ou par coupure provoquée par du {'\n'}     matériel infecté, surtout chez les agents de la {'\n'}     santé (risque faible). 
              {'\n'}3. Transmission de la mère à l’enfant :
              {'\n'}     Pendant la grossesse (transmission par voie {'\n'}     sanguine) ;
              {'\n'}     Pendant l’accouchement (par voie sanguine et {'\n'}     par les secrétions vaginales)
              Au cours de {'\n'}     l’allaitement (par le lait maternel)
              .</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem7()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Quels sont les gestes quotidiens qui ne risquent pas de te transmettre le VIH ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform7}],marginLeft:20 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent7 && (
              <Text className="text-[16px] px-4">Saluer en serrant la main, partager des moments d’affection (en embrassant sur la joue), faire du sport ensemble, manger ensemble, faire un massage, etc.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem8()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Quels sont les moyens de prévention              du VIH/SIDA ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform8}],marginLeft:-14 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent8 && (
              <Text className="text-[16px] px-4">Abstinence sexuelle ; 
              {'\n'}Fidélité réciproque après le test du VIH ; 
              {'\n'}Relation sexuelle avec utilisation systématique et correcte du préservatif masculin ou féminin.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem9()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Commen prévention la transmission {'\n'}mère-enfant ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform9}],marginLeft:40 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent9 && (
              <Text className="text-[16px] px-4">Conseil/dépistage lors des consultations prénatales ;
              {'\n'}Traitement antirétroviral et suivi de la femme enceinte séropositive ;
              {'\n'}Accouchement dans un centre de santé afin de bénéficier d’une prise en charge pour to enfant et toi ;
              {'\n'}Traitement et suivi du nouveau-né et de la mère.
              Une mère séropositive peut donner naissance à un enfant en bonne santé et qui n’est pas porteur du virus du VIH sida.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem10()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Où faire le test du VIH/SIDA ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform10}],marginLeft:100 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent10 && (
              <Text className="text-[16px] px-4">Centre de santé communautaire (CSCOM) ;
              Centre de conseil de dépistage volontaire ;
              Centre de santé de référence (USAC, maternité, laboratoire) ;
              {'\n'}Hôpitaux, cliniques (Marie Stopes Mali, clinique de l’AMPPF), cabinets ;
              {'\n'}Laboratoire d’analyse.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem11()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Le dépistage volontaire du VIH est-il fait discrètement?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform11}],marginLeft:10 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent11 && (
              <Text className="text-[16px] px-4">Les centres de conseil et de dépistage volontaires et les autres centres de santé t’offrent des services de prévention de qualité dans la plus grande confidentialité.  Ils ouvrent également la voie au traitement en cas de test positif.
              {'\n'}La connaissance de ton statut sérologique VIH est essentielle pour limiter le risque de transmission au cas où tu es séropositif et dans le cas contraire, te permettre d’adopter un mode de vie sain.
              {'\n'}Les traitements antirétroviraux sont un moyen efficace pour empêcher la transmission du virus et aussi bloquer l’évolution de la maladie chez les personnes vivant avec le VIH.
              </Text>
             )}
        </View>
        </ScrollView>   
    </SafeAreaView>  
  )
  }  
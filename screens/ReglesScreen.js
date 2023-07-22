import { StyleSheet, View, Image, Button, Text, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, { useRef, useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

export default function ReglesScreen() {
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
  const [showContent12, setShowContent12] = useState( initialState = false);
  const [showContent13, setShowContent13] = useState( initialState = false);
  const [showContent14, setShowContent14] = useState( initialState = false);
  const [showContent15, setShowContent15] = useState( initialState = false);
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
  const animationController12 = useRef(new Animated.Value( value=0)).current;
  const animationController13 = useRef(new Animated.Value( value=0)).current;
  const animationController14 = useRef(new Animated.Value( value=0)).current;
  const animationController15 = useRef(new Animated.Value( value=0)).current;

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
      setShowContent10(!showContent10)
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
      setShowContent11(!showContent11)
    };
    const arrowTransform11 = animationController11.interpolate( config11= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem12 = () => {
      const config12 = {
        duration: 300,
        toValue: showContent12 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController12, config12).start();
      setShowContent12(!showContent12)
    };
    const arrowTransform12 = animationController12.interpolate( config12= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem13 = () => {
      const config13 = {
        duration: 300,
        toValue: showContent13 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController13, config13).start();
      setShowContent13(!showContent13)
    };
    const arrowTransform13 = animationController13.interpolate( config13= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem14 = () => {
      const config14 = {
        duration: 300,
        toValue: showContent14 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController14, config14).start();
      setShowContent14(!showContent14)
    };
    const arrowTransform14 = animationController14.interpolate( config11= {
      inputRange: [0,1],
      outputRange: ['0deg', '90deg']
    });

    const toggleListItem15 = () => {
      const config15 = {
        duration: 300,
        toValue: showContent15 ? 0 : 1,
        useNativeDriver: true
      };
      Animated.timing(animationController15, config15).start();
      setShowContent15(!showContent15)
    };
    const arrowTransform15 = animationController15.interpolate( config15= {
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
            <Image source={require('../assets/images/cycle.png')} className="ml-3 w-50 h-50 rounded-lg object-cover"/>
            <Text className="text-[18px] font-bold">Règles ou menstrues</Text>
        </View>
        <ScrollView>
        <View className="flex-col divide-y">
        <TouchableOpacity onPress={()=> toggleListItem()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Les règles (menstrues), c’est quoi ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform}],marginLeft:160 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent && (
              <Text className="text-[16px] px-4">Les règles sont un phénomène normal, naturel et propre à chaque femme.
              On appelle règles ou menstrues, les écoulements sanguins que les femmes vivent chaque mois pour une durée allant de la puberté jusqu’à la ménopause.
              Lorsqu’à la puberté, une jeune fille à ses premières règles, cela signifie que son système reproducteur est arrivé à maturité.  En d’autres termes, son appareil génital est prêt à accueillir une grossesse.
              Les premières règles surviennent généralement entre 10 et 16 ans.
              </Text>
             )}
          <TouchableOpacity onPress={()=> toggleListItem1()}
              className="flex-row border-[#DE1457] rounded-xl ml-4">
                <Text className="text-[17px] font-bold">
                Quand aurai-je mes premières règles ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform1}],marginLeft:30 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent1 && (
          <Text className="text-[16px] px-4">De manière générale, la plupart des filles ont leurs premières règles entre 10 et 16 ans, le plus courant étant vers 14 ans. Garde toutefois à l’esprit qu’il ne s’agit là que de statistiques. C’est tout à fait normal (et non préoccupant) si tu as tes premières règles avant ou après tes amies car chacune d’entre nous est unique et liée au developpement de son organisme. Chaque femme est différente et tes règles apparaîtront lorsque ton corps sera prêt.

          </Text>
          )} 
          <TouchableOpacity onPress={()=> toggleListItem2()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-3 mr-4">
                <Text className="text-[16px] font-bold">
                Comment saurai-je que mes règles vont commencer ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform2}],marginLeft:36 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent2 && (
              <Text className="text-[17px] px-3">Les premiers signes de l’arrivée de tes règles sont le développement de tes seins, et l’apparition de pertes blanchâtres provenant de ton vagin.  pour la plupart des filles, les règles commencent entre 10 et 16 ans. En fait, le moment auquel on a ses premières règles dépend surtout de ses antécédents familiaux. Si tu veux en savoir plus sur le moment auquel tu pourrais bien avoir tes premières règles, fais confiance à la génétique : demande de conseils à ta mère (elle pourrait te dire à âge elle a eu les siennes). Nos mamans sont les mieux placées pour nous guider en ces périodes.</Text>
             )}
              <TouchableOpacity onPress={()=> toggleListItem3()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[16px] font-bold">
                Quels sont les signes des premières règles ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform3}],marginLeft:2 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent3 && (
              <Text className="text-[16px] px-4">Plusieurs signes physiques peuvent t’indiquer si tes premières règles vont bientôt arriver. Faire attention aux changements dans son corps est l’une des méthodes les plus précises pour prévoir l’arrivée des premières règles. Alors, quels sont les signes annonciateurs des premières règles ?
              Tes seins commencent à pousser et forment des bourgeons mammaires (des petits gonflements sous les mamelons). Tu peux t’attendre à avoir tes premières règles environ deux ans après leur apparition.
              Tu commences à avoir des poils pubiens. Les poils pubiens apparaissent généralement peu de temps après le développement des bourgeons mammaires.
              Tu commences à avoir des pertes vaginales (un liquide clair ou d’aspect laiteux que tu peux remarquer dans tes sous-vêtements). Les pertes vaginales sont la réponse de ton organisme aux changements hormonaux et indiquent que ton corps se prépare à l’arrivée très prochaine des règles.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem4()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                À quoi ressemblent les premières règles ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform4}],marginLeft:4 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent4 && (
              <Text className="text-[16px] px-4">Tu seras peut-être surprise de voir que tes premières règles ne sont représentées que par quelques taches brunes dans tes sous-vêtements et n’ont rien à voir avec les premières règles abondantes que tu redoutes. Le sang est marron pour la seule raison qu’il n’est pas frais. Lorsque le flux menstruel est très léger, le sang met souvent un peu plus de temps pour s’écouler et devient marron avant même d’être évacué par le vagin. C’est pour cette raison que tes premières règles ne seront pas nécessairement d’un rouge vif comme tu l’as peut-être imaginé.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem5()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Comment me préparer pour mes premières règles ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform5}],marginLeft:-8 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent5 && (
              <Text className="text-[16px] px-4">Prépare une réserve de serviettes hygiéniques. Tu peux demander à ta mère ou à ta grande sœur d’en acheter pour toi. Les serviettes hygiéniques sont très petites et donc faciles à emporter partout avec toi. Comme ça, tu seras prête lorsque tes règles arriveront. Pour être encore mieux préparée, tu peux aussi mettre un protège-slip pour ne pas être prise au dépourvu lorsque tes règles arriveront.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem6()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Les règles durent combien de temps ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform6}],marginLeft:36 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent6 && (
              <Text className="text-[16px] px-4">Les règles peuvent durer de 3 à 7 jours. Lorsqu’elles deviendront régulières (ce qui peut prendre un ou deux ans le temps que ton corps s’adapte aux nouvelles hormones qui contrôlent la menstruation), elles surviendront tous les 28 jours environ. Songe à noter dans un calendrier la date de tes premières règles. De cette manière, tu sauras plus ou moins à quelle date les prochaines arriveront.
              Il est possible que tes premières règles soient abondantes (ou tout au moins plus abondantes) le premier ou les deux premiers jours, avant de commencer à se réduire au cours des derniers jours. C’est normal. Ces quelques premiers jours, lorsque tes premières règles seront abondantes, il te suffira de changer de tampon ou de serviette hygiénique plus souvent. Il n’y a aucun souci à se faire.
              </Text>
             )}
            <TouchableOpacity onPress={()=> toggleListItem7()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Est-ce vrai que les règles font-elles mal ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform7}],marginLeft:8 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent7 && (
              <Text className="text-[16px] px-4">Pas toujours, ce n’est pas comme si l’on perdait du sang lors d’une blessure ou d’une coupure, mais la plupart des filles et des femmes ressentent des crampes ou des douleurs. Certains mouvements ou exercices physiques, ou bien un bain chaud, peuvent te soulager mais parles-en à ton médecin ou à l’infirmière de l’école si tu as besoin de quelque chose pour soulager tes douleurs.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem8()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Que faire si j’ai mes règles à l’école ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform8}],marginLeft:50 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent8 && (
              <Text className="text-[16px] px-4">Ceci arrive à un grand nombre de filles, mais cela ne devrait pas te poser de problème. Tu remarqueras quelques taches rosées dans ta culotte qui t’indiqueront que tes règles ont commencé. Il est judicieux de prévoir une serviette hygiénique dans ton sac, par précaution. Tu peux toujours en demander à une amie ou à un professeur, et tu peux très bien utiliser des mouchoirs en papier ou du papier toilette si tu en as besoin.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem9()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Est-ce que tout le monde verra que j’ai mes règles ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform9}],marginLeft:-6 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent9 && (
              <Text className="text-[16px] px-4">Non, à moins que tu ne leur dises ! Les serviettes hygiéniques sont si minces qu’elles ne se voient pas du tout sous les vêtements, il faut juste que tu les portes correctement et que tu les changes à temps.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem10()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Vais-je sentir mauvais lors de mes règles ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform10}],marginLeft:4 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent10 && (
              <Text className="text-[16px] px-4">Le liquide menstruel commence à avoir une odeur lorsqu’il entre en contact avec l’air, mais tu peux minimiser cela en changeant de serviette ou de tampon régulièrement et en te lavant également.</Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem11()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Aurai-je mes règles durant toute la vie ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform11}],marginLeft:20 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent11 && (
              <Text className="text-[16px] px-4">Les écoulements sanguins que les femmes vivent chaque mois ont une durée allant de la puberté jusqu’à la ménopause.
              Les règles ne s’arrêtent qu’a deux moments phares :
              Lorsque vous êtes enceinte et lorsque vous atteignez l’âge de la ménopause.
              Cependant, les règles peuvent disparaitre pour d’autres raisons et il est primordiale d'en parler à un gynécoloque.
              </Text>
             )}
             <TouchableOpacity onPress={()=> toggleListItem12()}
              className="flex-row border-[#DE1457] rounded-xl mt-3 ml-4">
                <Text className="text-[17px] font-bold">
                Les règles douloureuses, que faire ?
                </Text>
                <Animated.View style={{transform: [{rotateZ: arrowTransform12}],marginLeft:50 }}><MaterialIcons name={'keyboard-arrow-right'} size={26}/></Animated.View>
          </TouchableOpacity>
          {showContent12 && (
              <Text className="text-[16px] px-4">Les règles douloureuses se manifestent par des douleurs au niveau de l'abdomen ou du dos arrivant avant et / ou pendant la période des règles. Sans gravité, elles disparaissent généralement à la fin de l'adolescence. Chez la femme adulte, elles peuvent éventuellement être un symptôme d'une pathologie. 
              30 à 40% des femmes sont concernés par ces douleurs accompagnées par une irritabilité, gonflement des seins, ballonnements… Ces signes définissent le syndrome prémenstruel. Pendant ou avant vos règles, il est possible de ressentir quelques symptômes désagréables. C’est ce qu’on appelle le syndrome prémenstruel SPM).
              Si toutefois, vos douleurs devenaient invivables et problématiques, n’hésitez pas à consulter votre médecin ou gynécologue pour en parler. Le médecin peut vous prescrire un antidouleur pour diminuer les douleurs menstruelles et atténuer les symptômes qui en découlent, il peut aussi vous donner des conseils simples et efficaces.</Text>
             )}
        </View>
        </ScrollView>   
    </SafeAreaView>  
  )
  }  
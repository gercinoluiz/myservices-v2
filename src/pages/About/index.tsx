import React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import logoPrefeitura from '../../assets/logoPrefeitura.png';
import GooglePlacesInput from '../../components/GooglePlacesInput';

import image from './image.png'

import pallete from '../../style/pallete';





import { Center, Flex, Image, Text } from 'native-base';



export interface AboutProps {

}


const About: React.FC<AboutProps> = () => {




    return (


        //TODO: Consertar com FlatList: Não acho como fazer em typescript



        <Center flex={1}  bg='#fff'>
                
                {/* <GooglePlacesInput/> */}

            

                

              

                    <Image alt="Entrar" w='80%'  h='40%' resizeMode="contain" source={image}  />

                    

                    <Text fontSize={'lg'} ml='2' w='80%'>
                        Com o aplicativo <Text style={{fontWeight:'bold', color:pallete.primary}}>AquiSP</Text>  você encontra um local que atenda o serviço de sua procura.  É simples, basta clicar no ícone de filtro (laranja), no canto inferior direito da página de busca, e escolher o serviço que deseja realizar.
                    </Text>
        

            
        </Center >





    );
}

export default About;


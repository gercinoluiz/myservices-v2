import React from 'react';
import { Image, Text, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import logoPrefeitura from '../../assets/logoPrefeitura.png';
import GooglePlacesInput from '../../components/GooglePlacesInput';

import prodamparavoce from '../../assets/prodamparavoce.png'

import pallete from '../../style/pallete';




import {Container, DescriptionView, Logo, TextParagraph} from './styles'



export interface AboutProps {

}


const About: React.FC<AboutProps> = () => {




    return (


        //TODO: Consertar com FlatList: Não acho como fazer em typescript



        <Container>
                
                {/* <GooglePlacesInput/> */}

            

                <DescriptionView>

                    <TextParagraph>
                        Com o aplicativo <Text style={{fontWeight:'bold', color:pallete.primary}}>AquiSP</Text>  você encontra um local que atenda o serviço de sua procura.  É simples, basta clicar no ícone de filtro (laranja), no canto inferior direito da página de busca, e escolher o serviço que deseja realizar.
                    </TextParagraph>

                    <Logo source={prodamparavoce}/>

                    
                </DescriptionView>


        

            
        </Container >





    );
}

export default About;


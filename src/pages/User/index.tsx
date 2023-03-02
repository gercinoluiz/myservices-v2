import React from 'react';
import { Dimensions, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import logoPrefeitura from '../../assets/logoPrefeitura.png';
import GooglePlacesInput from '../../components/GooglePlacesInput';

import { MaterialIcons } from '@expo/vector-icons';

import pallete from '../../style/pallete';

import medalImage from './assets/medal.png'
import customerService from './assets/customer-service.png'
import serviceImage from './assets/service.png'
import star from './assets/star.png'
import goal from './assets/goal.png'
import gold from './assets/gold.png'

import { IconButton, Box, Center, Divider, Flex, HStack, Text, VStack, Image, Icon } from 'native-base';
import AvatarWithCompletion from './AvatarWithCompletion';
import { GamingItemButton } from './GamingItemButton/GamingItemButton';
import { useAuthentication } from '../../hooks/authHook/UserHook';
import { asyncStorageUser } from '../../hooks/authHook/userStorage';
import { Entypo } from '@expo/vector-icons';



export interface UserProps {

}




const User: React.FC<UserProps> = (props: any) => {

    const { user, updateUser } = useAuthentication()

    const handleLogout = () => {
        asyncStorageUser.removeUser()

        updateUser(undefined)

        // props.navigation.navigate('SignIn')
    }


    return (


        //TODO: Consertar com FlatList: Não acho como fazer em typescript


        <Flex alignItems={'center'} flex={1}


            bg={{
                linearGradient: {
                    colors: ['#373B44', '#4286f4'],
                    start: [0, 0],
                    end: [1, 0]
                }
            }}
        >


            <Flex w='100%' mt='5' direction='row' justifyContent={'space-between'} align='center'>
                <Center>

                    <IconButton

                        icon={<MaterialIcons name="logout" size={35} color="#FFF" />}

                        onPress={handleLogout}

                    />
                    <Text color='white' mt='-2'>Sair</Text>
                </Center>

                <Image source={gold} size={50} alt='nível' mr='5' />
            </Flex>



            <AvatarWithCompletion name={user?.name} source={{
                uri: user?.avatarUrl
            }} percentage={50} />

            <Text bold color={'white'} fontSize={'30'}>
                {user?.name}
            </Text>
            <Text color={'white'}>
                {user?.email}
            </Text>
            <Text color={'white'}>
                97/100
            </Text>


            <Center mt='4' bg='white' w={'100%'} roundedTopLeft='40' flex={1} roundedTopRight='40'>


                <HStack


                    w='90%'
                    space={10}

                    flexWrap="wrap"
                    justifyContent={'center'}

                >


                    <GamingItemButton name='Pontos' text='10'

                        src={medalImage}
                    />

                    <GamingItemButton name='Serviços' text='35'

                        src={customerService}
                    />

                    <GamingItemButton name='Perfil' text='55'

                        src={serviceImage}
                    />








                </HStack>

                <HStack


                    w='90%'
                    space={10}

                    flexWrap="wrap"
                    justifyContent={'center'}

                >


                 

                    <GamingItemButton name='Nível' text='5'

                        src={star}
                    />
                    <GamingItemButton name='Objetivo' text='35%'

                        src={goal}
                    />
                    <GamingItemButton name='Objetivo' text='35%'

                        src={goal}
                    />







                </HStack>
            </Center>


        </Flex>





    );
}

export default User;


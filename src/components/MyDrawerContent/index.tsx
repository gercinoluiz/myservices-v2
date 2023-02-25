
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Contact from '../../pages/Contact';

export interface DrawerContentProps {

}


const MyDrawerContent: React.FC<DrawerContentProps> = (...props) => {

    const Drawer = createDrawerNavigator()

    return (

        <Drawer.Navigator

            drawerPosition='left'
            drawerType='slide'
            drawerStyle={{ width: 500 }}
        >
            <Drawer.Screen name='Fale Conosco' component={Contact} />
        </Drawer.Navigator>
    );
}

export default MyDrawerContent;
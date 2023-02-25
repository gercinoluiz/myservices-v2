import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Appearance } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { useModal } from '../../hooks/ModalHook';
import pallete from '../../style/pallete';




export interface FABProps {

}



const FilterButton: React.FC<FABProps> = () => {

    const deviceTheme = Appearance.getColorScheme()


    


    const { setVisible } = useModal()

    const handleOpenModal = () => {
        setVisible()
    }






    return (



        <FloatingAction

            color={pallete.secondary}
            distanceToEdge={{ vertical: 8, horizontal: 30 }}

            onPressMain={handleOpenModal}
            floatingIcon={<FontAwesome5 name="filter" size={20} color={pallete.onSecondary} />}
            overlayColor='none'
            showBackground={false}
            animated={true}
            position='right'
            
            
        >

        </FloatingAction>




    );


}

export default FilterButton;


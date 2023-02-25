import React, { createContext, useContext, useState } from "react";



const ModalContext = createContext({} as IModalContext)



const ModalProvider: React.FC = ({ children }) => {

    const [visible, setModaVisible] = useState(false)

    const setVisible = () => {

        setModaVisible(true)

    }

    const setHidden = () => {

        setModaVisible(false)

    }






    return (
        <ModalContext.Provider value={{ setHidden, setVisible, visible }}>
            {children}
        </ModalContext.Provider>
    )


}



function useModal(): IModalContext {
    const context = useContext(ModalContext);

    return context
}


export { ModalProvider, useModal }
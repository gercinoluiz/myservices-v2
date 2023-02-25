import React, { createContext, useContext, useState } from 'react'

const ImageModalContext = createContext({} as IImageModalContext)

const ImageModalProvider: React.FC<AppProviderProps> = ({ children }) => {
     const [visible, setModaVisible] = useState(false)
     const [index, setIndex] = useState(0)

     const setVisible = () => {
          setModaVisible(true)
     }

     const setHidden = () => {
          setModaVisible(false)
     }

     const getIndex = (i: number ) => {
         setIndex(i)
     }

     return (
          <ImageModalContext.Provider
               value={{ setHidden, setVisible, visible, getIndex, index }}
          >
               {children}
          </ImageModalContext.Provider>
     )
}

function useImageModal(): IImageModalContext {
     const context = useContext(ImageModalContext)

     return context
}

export { ImageModalProvider, useImageModal }

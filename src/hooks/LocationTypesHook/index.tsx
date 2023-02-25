import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";






const LocationTypeContext = createContext({} as ILocationTypes)


const LocationTypeProvider: React.FC<AppProviderProps> = ({children}) =>{

    const [locationTypes, setLocationTypes] = useState([])
    const [locationType, setLocationtype] = useState<ILocationType>()


    useEffect(()=>{

        fetchLocationTypes()

    },[])


    const fetchLocationTypes = async () =>{


        await api.get('/locationTypes').then(response =>{

            setLocationTypes(response.data.data)

        })

    }    

    const changeLocationType =  (passedLocationType:ILocationType) =>{
        

        setLocationtype(passedLocationType)


    }    


    // // I think maybe I wont use It
    // const fetchService = async (id:string) =>{

    //     await api.get(`/services/getOne/${id}`).then(response =>{

    //         setService(response.data.data)

    //     })

    // }    



    // const changeService =  (passedService:IService) =>{
        

    //     setService(passedService)


    // }    





    return(
        <LocationTypeContext.Provider value={{fetchLocationTypes, locationType, locationTypes, changeLocationType}}>
            {children}
        </LocationTypeContext.Provider>
    )

}


function useLocationTypes() {

    const contex = useContext(LocationTypeContext)


    return contex

}


export {useLocationTypes, LocationTypeProvider}
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";






const ServiceTypesContext = createContext({} as IServiceTypes)


const ServiceTypeProvider: React.FC<AppProviderProps> = ({children}) =>{

    const [serviceTypes, setServiceTypes] = useState([])
    const [serviceType, setServicetype] = useState<IServiceType>()


    useEffect(()=>{

        fetchServiceTypes()

    },[])


    const fetchServiceTypes = async () =>{


        await api.get('/serviceType/getAll').then(response =>{

            setServiceTypes(response.data.data)

        })

    }    

    const changeServiceType =  (passedServiceType:IServiceType) =>{
        

        setServicetype(passedServiceType)


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
        <ServiceTypesContext.Provider value={{fetchServiceTypes, serviceType, serviceTypes, changeServiceType}}>
            {children}
        </ServiceTypesContext.Provider>
    )

}


function useServiceTypes() {

    const contex = useContext(ServiceTypesContext)


    return contex

}


export {useServiceTypes, ServiceTypeProvider}
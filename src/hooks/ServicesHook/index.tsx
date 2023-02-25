import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";






const ServicesContext = createContext({} as IServices)


const ServiceProvider: React.FC<AppProviderProps> = ({children}) =>{

    const [services, setServices] = useState([])
    const [service, setService] = useState<IService>()


    useEffect(()=>{

        fetchServices()

    },[])


    const fetchServices = async () =>{


        await api.get('/services/').then(response =>{

            setServices(response.data.data)

        })

    }    


    // I think maybe I wont use It
    const fetchService = async (id:string) =>{

        await api.get(`/services/${id}`).then(response =>{

            setService(response.data.data)

        })

    }    



    const changeService =  (passedService:IService) =>{
        

        setService(passedService)


    }    





    return(
        <ServicesContext.Provider value={{fetchServices, fetchService, changeService, service, services}}>
            {children}
        </ServicesContext.Provider>
    )

}


function useServices() {

    const contex = useContext(ServicesContext)


    return contex

}


export {useServices, ServiceProvider}
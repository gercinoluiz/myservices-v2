

import React from 'react';
import MapView, { MapViewProps } from 'react-native-maps';





interface MyMapViewProps extends MapViewProps{
 children:any
}


const MyMapView = ({children, ...rest}:MyMapViewProps)=>{
 return (
    <MapView {...rest}>
         {children}
    </MapView>
  )
}

export default MyMapView
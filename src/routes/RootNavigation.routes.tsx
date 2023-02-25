// /https://stackoverflow.com/questions/61480003/know-what-the-current-route-is-in-a-component-outside-of-the-stack-navigator-wit   ==> tutorial
// Esse aqui é usado para usar o router fora de um componente de rotas, no caso do services modal
import { createNavigationContainerRef } from '@react-navigation/native';


export const navigationRef = createNavigationContainerRef()

export function navigate(name: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}


  export function getRootState() {
    return navigationRef.current?.getCurrentRoute();
  }
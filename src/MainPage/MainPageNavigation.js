import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FullImageData from "./FullImageData";
import MainPage from "./MainPage";


const Stack = createNativeStackNavigator()

const MainPageNavigation = () => {
   return (
      <Stack.Navigator screenOptions={{
         gestesEnabled: true,
      }}>
         <Stack.Screen name='MainPage' component={MainPage} options={{ headerShown: false }} />
         <Stack.Screen name='FullImageData' component={FullImageData} options={{ headerShown: false }} />
      </Stack.Navigator>
   )
}

export default MainPageNavigation
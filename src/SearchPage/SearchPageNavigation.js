import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FullImageData from "../MainPage/FullImageData";
import SearchPage from "./SearchPage";


const Stack = createNativeStackNavigator()

const SearchPageNavigation = () => {
   return (
      <Stack.Navigator screenOptions={{
         gestesEnabled: true,
      }}>
         <Stack.Screen name='SearchPage' component={SearchPage} options={{ headerShown: false }} />
         <Stack.Screen name='FullImageData' component={FullImageData} options={{ headerShown: false }} />
      </Stack.Navigator >
   )
}

export default SearchPageNavigation
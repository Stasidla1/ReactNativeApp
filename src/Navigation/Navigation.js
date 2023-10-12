import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import MainPageNavigation from "../MainPage/MainPageNavigation";
import SearchPageNavigation from "../SearchPage/SearchPageNavigation";
import { Ionicons } from '@expo/vector-icons';
import LikeImagePage from "../LikeImagePage/LikeImagePage";
import AddNewImagePage from "../AddNewImagePage/AddNewImagePage";
import MyCollection from "../MyCollectionPage/MyCollection";



const Drawer = createDrawerNavigator()

const SearchIcons = () => {
   const navigation = useNavigation()
   return (
      <Ionicons name="search" size={24} color="black" style={{ marginRight: 10 }} onPress={() => navigation.navigate('SearchPageNavigation')} />
   )
}


const Navigation = () => {
   return (
      <NavigationContainer>
         <Drawer.Navigator initialRouteName="MainPageNavigation" screenOptions={{
            headerTitleAlign: 'center'
         }}>
            <Drawer.Screen name="MainPageNavigation" component={MainPageNavigation} options={{
               headerRight: () => <SearchIcons />,
               title: 'Images'
            }} />
            <Drawer.Screen name="SearchPageNavigation" component={SearchPageNavigation} options={{ title: 'Search images' }} />
            <Drawer.Screen name="MyCollectonPage" component={MyCollection} options={{ title: 'My collection' }} />
            <Drawer.Screen name="LikeImagePage" component={LikeImagePage} options={{ title: 'Liked images' }} />
            <Drawer.Screen name="AddNewImagePage" component={AddNewImagePage} options={{ title: 'Create own gallery' }} />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}


export default Navigation
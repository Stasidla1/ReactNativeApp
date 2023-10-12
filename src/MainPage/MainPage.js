import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButtom from "./CustomButtom";
import ImageCards from "./ImageCards/ImageCards";




const MainPage = ({ navigation, route }) => {
   return (
      <View style={style.container}>
         <ImageCards navigation={navigation} route={route} />
         <CustomButtom navigation={navigation} route={route} />
      </View>
   )
}

const style = StyleSheet.create({
   container: {
      flex: 1,
   },
})

export default MainPage
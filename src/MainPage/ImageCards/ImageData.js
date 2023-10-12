import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";



const ImageData = ({ image, firstName }) => {

   return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
         <Image source={{ uri: image }} style={style.image} />
         <Text style={style.description}>Photo by: {firstName}</Text>
      </View>
   )
}

const style = StyleSheet.create({
   description: {
      fontSize: 20,
      fontWeight: "600",
   },
   image: {
      width: 300,
      height: 200,
      borderRadius: 10
   },
})

export default ImageData
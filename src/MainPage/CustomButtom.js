import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'


const CustomButtom = ({ navigation, route }) => {
   return (
      <View style={style.customButton}>
         <TouchableOpacity activeOpacity={0.4} style={style.button} onPress={() => navigation.navigate('AddNewImagePage')} >
            <Text style={style.text}><AntDesign name="pluscircle" size={21} color="white" /> New image</Text>
         </TouchableOpacity>
      </View>
   )
}

const style = StyleSheet.create({
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      backgroundColor: '#2235e3',
      height: 50,
      marginBottom: 23
   },
   customButton: {
      flex: 1,
      justifyContent: "flex-end",
      alignSelf: 'center',
      width: 235
   },
   text: {
      color: 'white',
      fontSize: 23,
   }
})

export default CustomButtom
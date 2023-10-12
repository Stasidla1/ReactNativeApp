import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentImage } from "../../Selectors/MyImageSelector";
import { launchImageLibraryAsync } from "expo-image-picker";
import { addCurrentImage, addMyImageData } from "../../Redux/MyImageReducer";
import { useState } from "react";


const AddNewImagePage = ({ navigation, route }) => {
   const currentImage = useSelector(getCurrentImage)
   const dispatch = useDispatch()
   const [counterId, setCounterId] = useState(1)
   const [name, setName] = useState('')
   const [userName, setUserName] = useState('')
   const imageData = {
      id: counterId,
      name: name,
      username: userName
   }

   const addImage = async () => {
      const result = await launchImageLibraryAsync({ mediaType: "photo" });
      if (!result.canceled) {
         dispatch(addCurrentImage(result.assets[0].uri))
      }
   }

   const createImageData = () => {
      imageData.image = currentImage
      dispatch(addMyImageData(imageData))
      setCounterId(counterId + 1)
   }

   return (
      <ScrollView style={styles.body}>
         {currentImage ? <Image source={{ uri: currentImage }} style={styles.imageForm} /> :
            <TouchableOpacity style={styles.imageForm} onPress={() => addImage()}>
               <AntDesign name="pluscircleo" size={40} color="black" style={{ alignSelf: "center" }} />
            </TouchableOpacity>
         }
         <View style={styles.textView} >
            <TextInput style={styles.textInput} placeholder='Your real name' defaultValue={name} onChange={(e) => { setName(e.nativeEvent.text) }} clear />
            <TextInput style={styles.textInput} placeholder='Your userName' onChange={(e) => { setUserName(e.nativeEvent.text) }} />
         </View>
         <View style={styles.customButton}>
            <TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={() => {
               createImageData();
               navigation.navigate("MyCollectonPage")
            }} >
               <Text style={styles.text}><AntDesign name="pluscircle" size={21} color="white" /> Add image</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
   },
   imageForm: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 3,
      borderColor: 'grey',
      width: 300,
      height: 350,
      margin: 20,
      borderRadius: 20
   },
   textInput: {
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 10,
      height: 40,
      padding: 10,
      margin: 10
   },
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
      width: 235,
      marginTop: 20
   },
   text: {
      color: 'white',
      fontSize: 23,
   }
})


export default AddNewImagePage
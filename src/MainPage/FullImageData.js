import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { addSingleImageData, deleteLikeImageSucces, likeNewImageSuccess } from "../../Redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoadingSingleImageData, getSingleImageData } from "../../Selectors/MainSelectors";
import Loading from "./LoadingPage/Loading";
import { AntDesign } from '@expo/vector-icons';
import { removeFromLikedPageSuccess, setLikedImage } from "../../Redux/LikedImageReducer";




const FullImageData = ({ navigation, route }) => {
   const imageData = useSelector(getSingleImageData)
   const dispatch = useDispatch()
   const isLoading = useSelector(getIsLoadingSingleImageData)



   useEffect(() => {
      dispatch(addSingleImageData(route.params.itemId))
   }, [])

   const likeImage = () => {
      dispatch(likeNewImageSuccess(route.params.itemId))
      dispatch(setLikedImage(route.params.itemId))
   }
   const deleteLikedImage = () => {
      dispatch(deleteLikeImageSucces(route.params.itemId))
      dispatch(removeFromLikedPageSuccess(route.params.itemId))
   }


   return (
      <>
         {
            isLoading ?
               <Loading /> :
               <ScrollView style={style.container}>
                  <Image style={style.image} source={{ uri: imageData.urls.regular }} />
                  {imageData.liked_by_user ?
                     <Text style={{ ...style.text, paddingTop: 10, width: 200 }} onPress={() => deleteLikedImage()} >
                        <AntDesign name="like1" size={24} color="black" />
                        {imageData.likes + 1}
                     </Text> :
                     <Text style={{ ...style.text, paddingTop: 10, width: 200 }} onPress={() => likeImage()} >
                        <AntDesign name="like2" size={24} color="black" />
                        {imageData.likes}
                     </Text>}
                  <Text style={style.text}>Author: {imageData.user.name}</Text>
                  <Text style={style.text}>NickName: {imageData.user.username}</Text>
                  {imageData.user.bio ? <Text style={style.text}>Bio: {imageData.user.bio}</Text> : null}
                  {imageData.description ? <Text style={style.text}>Description: {imageData.description}</Text> : null}
               </ScrollView>
         }
      </>
   )
}

const style = StyleSheet.create({
   image: {
      width: 300,
      height: 350,
      borderRadius: 20,
      flex: 1,
      alignSelf: "center",
   },
   container: {
      marginTop: 10,
   },
   text: {
      paddingLeft: 20,
      paddingRight: 20,
      fontSize: 17,
      marginTop: 15,
      lineHeight: 22

   }
})

export default FullImageData
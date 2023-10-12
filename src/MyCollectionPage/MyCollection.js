import React from "react";
import { FlatList, View } from "react-native";
import { getImageData } from "../../Selectors/MyImageSelector";
import { useSelector } from "react-redux";
import ImageData from '../MainPage/ImageCards/ImageData'


const MyCollection = () => {
   const imageData = useSelector(getImageData)

   return (
      <View>
         <FlatList
            data={imageData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
               <ImageData image={item.image} firstName={item.name} />
            }
         />
      </View>
   )
}

export default MyCollection

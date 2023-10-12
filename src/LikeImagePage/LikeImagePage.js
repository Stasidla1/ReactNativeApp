import React from "react";
import { FlatList, Text, View } from "react-native";
import ImageData from "../MainPage/ImageCards/ImageData";
import { useSelector } from 'react-redux'
import { getLikeImageData } from "../../Selectors/LikeImageSelectors";

const LikeImagePage = () => {
   const likeImage = useSelector(getLikeImageData)

   return (
      <View>
         <FlatList
            data={likeImage}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
               <View>
                  {item.urls ? <ImageData image={item.urls.small} firstName={item.user.first_name} /> : <Text style={{ marginTop: -15 }} />}
               </View>
            }
         />
      </View>
   )
}
export default LikeImagePage
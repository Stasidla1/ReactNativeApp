import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addImageData } from "../../../Redux/MainReducer";
import { getImageStore, getLoadIamgeStore } from "../../../Selectors/MainSelectors";
import Loading from "../LoadingPage/Loading";
import ImageData from "./ImageData";





const ImageCards = ({ navigation, route }) => {
   const dispatch = useDispatch()
   const imageStore = useSelector(getImageStore)
   const isLoad = useSelector(getLoadIamgeStore)

   useEffect(() => {
      dispatch(addImageData())
   }, [])


   return (<>
      {isLoad ?
         <View>
            <FlatList
               data={imageStore}
               keyExtractor={item => item.id}
               renderItem={({ item }) =>
                  <TouchableOpacity activeOpacity={0.4} onPress={() => {
                     navigation.navigate('FullImageData', {
                        itemId: item.id,
                     })
                  }}>
                     <ImageData image={item.urls.small} firstName={item.user.first_name} />
                  </TouchableOpacity>
               }
               onEndReached={() => dispatch(addImageData())}
               ListFooterComponent={<ActivityIndicator size='small' color="#0000ff" />}
            />
         </View> :
         <Loading />
      }
   </>

   )
}



export default ImageCards
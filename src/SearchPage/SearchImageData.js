import React from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import ImageData from "../MainPage/ImageCards/ImageData";


const SearchImageData = ({ searchImage, navigation, infinityScrolling }) => {
   return (
      <>
         {searchImage ?
            <View>
               <FlatList
                  style={{ marginTop: 20, marginBottom: 60 }}
                  data={searchImage}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) =>
                     <TouchableOpacity activeOpacity={0.4} onPress={() => {
                        navigation.navigate('FullImageData', {
                           itemId: item.id,
                        })
                     }}>
                        <ImageData image={item.urls.small} firstName={item.user.first_name} />
                     </TouchableOpacity>}
                  onEndReached={infinityScrolling}
                  ListFooterComponent={<ActivityIndicator size='small' color="#0000ff" />}
               />
            </View> :
            <View>
            </View>
         }
      </>
   )
}

export default SearchImageData
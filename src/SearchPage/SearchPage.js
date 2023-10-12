import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addSearchItems } from "../../Redux/SearchImageReducer";
import { getSearchImage } from "../../Selectors/SearchImageSelectors";
import SearchImageData from "./SearchImageData";
import useDebounce from "./useDebounce";


const SearchPage = ({ navigation, route }) => {
   const [searchTerm, setSearchTerm] = useState("")
   const debouncedSearchTerm = useDebounce(searchTerm, 500);
   const searchImage = useSelector(getSearchImage)
   const dispatch = useDispatch()
   const [counter, setCounter] = useState(1)

   const infinityScrolling = () => {
      setCounter(counter + 1)
      dispatch(addSearchItems(debouncedSearchTerm, counter))
   }


   useEffect(() => {
      if (debouncedSearchTerm) {
         dispatch(addSearchItems(debouncedSearchTerm))
      }

   }, [debouncedSearchTerm]);

   return (
      <View style={{ flex: 1, alignItems: 'center' }}>
         <TextInput placeholder="Search..." onChange={(e) => setSearchTerm(e.nativeEvent.text)} style={style.input} autoFocus />
         <SearchImageData searchImage={searchImage} infinityScrolling={infinityScrolling} navigation={navigation} />
      </View>
   )
}


const style = StyleSheet.create({
   input: {
      width: 350,
      height: 45,
      borderColor: 'black',
      borderWidth: 2,
      backgroundColor: '#ffffff',
      fontSize: 20,
      textAlign: 'center',
      borderRadius: 30,
      marginTop: 10
   }
})

export default SearchPage
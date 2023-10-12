import { imageAPI } from "../Api/api";

const ADD_IMAGE_STORE = 'ADD_IMAGE_STORE';
const ADD_SINGLE_IMAGE_DATA = 'ADD_SINGLE_IMAGE_DATA'
const LIKE_NEW_IMAGE = 'LIKE_NEW_IMAGE'
const DELETE_LIKED_IMAGE = 'DELETE_LIKED_IMAGE'


let initialState = {
   imageStore: [],
   singleImageData: null,
   isLoadImageStore: false,
   isLoadingSingleImageData: true
}

let MainReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_IMAGE_STORE:
         return {
            ...state,
            imageStore: [...state.imageStore, ...action.payload],
            isLoadImageStore: true
         }
      case ADD_SINGLE_IMAGE_DATA:
         return {
            ...state,
            singleImageData: { ...action.payload },
            isLoadingSingleImageData: false
         }
      case LIKE_NEW_IMAGE:
         return {
            ...state,
            singleImageData: action.id === state.singleImageData.id ?
               { ...state.singleImageData, liked_by_user: true } : { ...state.singleImageData }
         }
      case DELETE_LIKED_IMAGE:
         return {
            ...state,
            singleImageData: action.id === state.singleImageData.id ?
               { ...state.singleImageData, liked_by_user: false } : { ...state.singleImageData }
         }
      default: return state

   }
}

const addImageStoreSuccess = (payload) => {
   return { type: ADD_IMAGE_STORE, payload }
}
const addSingleImageDataSuccess = (payload) => {
   return { type: ADD_SINGLE_IMAGE_DATA, payload }
}
export const likeNewImageSuccess = (id) => {
   return { type: LIKE_NEW_IMAGE, id }
}
export const deleteLikeImageSucces = (id) => {
   return { type: DELETE_LIKED_IMAGE, id }
}

export const addImageData = () => {
   return async (dispatch) => {
      try {
         let response = await imageAPI.getAllImage()
         if (response.status === 200) {
            dispatch(addImageStoreSuccess(response.data))
         }
      } catch (error) {
         console.log(error)
      }
   }
}


export const addSingleImageData = (imageId) => {
   return async (dispatch) => {
      try {
         const response = await imageAPI.getImageData(imageId)
         if (response.status === 200) {
            dispatch(addSingleImageDataSuccess(response.data))
         }
      } catch (error) {
         console.log(error)
      }
   }
}


export default MainReducer
import { imageAPI } from "../Api/api"

const GET_LIKED_IMAGE = 'GET_LIKED_IMAGE'
const DELETE_LIKED_IMAGE = 'DELETE_LIKED_IMAGE'


let initialState = {
   likedImageData: [],
}

let LikedImageReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_LIKED_IMAGE:
         return {
            ...state,
            likedImageData:
               [...state.likedImageData, action.payload],
         }
      case DELETE_LIKED_IMAGE:
         return {
            ...state,
            likedImageData: state.likedImageData.map(id => id !== action.imageId),
         }

      default: return state

   }
}

const getLikedImageSuccess = (payload, id) => {
   return { type: GET_LIKED_IMAGE, payload, id }
}

export const removeFromLikedPageSuccess = (imageId) => {
   return { type: DELETE_LIKED_IMAGE, imageId }
}


export const setLikedImage = (imageId) => {
   return async (dispatch) => {
      try {
         const response = await imageAPI.getImageData(imageId)
         if (response.status === 200) {
            dispatch(getLikedImageSuccess(response.data, imageId))
         }
      } catch (error) {
         console.log(error)
      }
   }
}


export default LikedImageReducer
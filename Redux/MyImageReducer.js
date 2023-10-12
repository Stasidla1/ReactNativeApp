const ADD_MY_IMAGE_DATA = 'ADD_MY_IMAGE_DATA'
const ADD_CURRENT_IMAGE = 'ADD_CURRENT_IMAGE'

const initialState = {
   currentImage: '',
   imageData: []
}


let MyImageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MY_IMAGE_DATA:
         return {
            ...state,
            imageData: [...state.imageData, action.payload],
            currentImage: ''
         }
      case ADD_CURRENT_IMAGE:
         return {
            ...state,
            currentImage: action.image
         }
      default: return state
   }
}


const addMyImageDataSuccess = (payload) => {
   return { type: ADD_MY_IMAGE_DATA, payload }
}
const addCurrentImageSucces = (image) => {
   return { type: ADD_CURRENT_IMAGE, image }
}

export const addMyImageData = (payload) => {
   return (dispatch) => {
      dispatch(addMyImageDataSuccess(payload))
   }
}

export const addCurrentImage = (image) => {
   return (dispatch) => {
      dispatch(addCurrentImageSucces(image))
   }
}
export default MyImageReducer
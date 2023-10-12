import { imageAPI } from "../Api/api"

const ADD_SEARCH_IMAGE = 'ADD_SEARCH_IMAGE'


let initialState = {
   searchImage: [],
   queryParams: ''
}

let SearchImageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_SEARCH_IMAGE:
         return {
            ...state,
            searchImage: state.queryParams.toLocaleLowerCase() === action.queryParams?.toLocaleLowerCase() ?
               [...state.searchImage, ...action.payload] : [...action.payload],
            queryParams: action.queryParams
         }

      default: return state
   }
}

const addSearchImageSuccess = (payload, queryParams) => {
   return { type: ADD_SEARCH_IMAGE, payload, queryParams }
}



export const addSearchItems = (queryParams, page) => {
   return async (dispatch) => {
      try {
         let response = await imageAPI.getSearchImage(queryParams, page)
         if (response.status = 200) {
            dispatch(addSearchImageSuccess(response.data.results, queryParams))
         }
      } catch (error) {
         console.log(error)
      }
   }
}

export default SearchImageReducer


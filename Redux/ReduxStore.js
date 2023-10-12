import { applyMiddleware, combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import MainReducer from './MainReducer';
import LikedImageReducer from './LikedImageReducer';
import SearchImageReducer from './SearchImageReducer';
import MyImageReducer from './MyImageReducer';

let rootReducers = combineReducers({
   MainPage: MainReducer,
   SavedImagePage: LikedImageReducer,
   SearchPage: SearchImageReducer,
   LikedImagePage: LikedImageReducer,
   MyImagePage: MyImageReducer,
})

let store = createStore(rootReducers, applyMiddleware(thunk))


export default store
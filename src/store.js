import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from '_utils/reducers/userInfoSlice';
import searchReducer from '_utils/reducers/searchSlice';
import discussionsReducer from '_utils/reducers/discussionsSlice';

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
    search: searchReducer,
    discussions: discussionsReducer,
  }
})
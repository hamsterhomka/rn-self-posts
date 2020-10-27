import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../slices/postSlice';

const rootReducer = combineReducers({
  post: postSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

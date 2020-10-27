import { createSlice } from '@reduxjs/toolkit';
import IPost from '../types/post';

interface InitialState {
  entities: IPost[],
  isLoading: boolean,
  error: string | null,
}

const initialState: InitialState = {
  entities: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.isLoading = true
    },
  }
});

export const { fetchPostsRequest } = postsSlice.actions;
export default postsSlice.reducer;

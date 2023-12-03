import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//
const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue,dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.org/posts");
    dispatch(setPosts(res.data))
  }
);
export const removePostById = createAsyncThunk(
  "posts/removePostById",
   async (id, {rejectWithValue,dispatch}) => {
   await axios.delete(`https://jsonplaceholder.org/posts/${id}`)
   dispatch(deletePosts(id))
   }
)


export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state,action) => {
        state.posts = action.payload
    },
    deletePosts: (state,action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    }
  },
  extraReducers: {
  [getPosts.fulfilled]: () => console.log("fulfiled"),
  [getPosts.pending]: () => console.log("pending"),
  [getPosts.rejected]: () => console.log("rejected"),
  [removePostById.fulfilled]: () => console.log("fulfiled"),
  [removePostById.pending]: () => console.log("pending"),
  [removePostById.rejected]: () => console.log("rejected")
}
 });

export const {setPosts,deletePosts} = postSlice.actions;
export default postSlice.reducer 
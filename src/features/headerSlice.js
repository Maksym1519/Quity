import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    headerShop: "",
    headerHosting: "",
    headerRepair: ""
}

export const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        setHeaderShop: (state,action) => {
          state.headerShop = action.payload
        }
    }
})

export const {setHeaderShop} = headerSlice.actions;
export default headerSlice.reducer
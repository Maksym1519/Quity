"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: null
}

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state,action) => {
          state.currency = action.payload
        }
    }
})
export const infoCurrency = (state) => state.currency.currency
export const {setCurrency} = currencySlice.actions;
export default currencySlice.reducer

export const Currency = () => {
    const [currencyInfo, setCurrencyInfo] = useState()
    const dispatch = useAppDispatch()
    dispatch(setCurrency(currencyInfo))
    async function getCryptoCurrencies() {
      const response = await axios.get("https://api.coingecko.com/api/v3/exchange_rates");
      setCurrencyInfo(response)
      console.log(response)
     }
      useEffect(() => {
      getCryptoCurrencies();
    }, []);
   }
  
  
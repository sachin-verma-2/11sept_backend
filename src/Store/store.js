import { configureStore } from "@reduxjs/toolkit";


import userSlice from "./userSlice";


const store = configureStore({
    reducer:{
        login:userSlice
    }
})

export default store;
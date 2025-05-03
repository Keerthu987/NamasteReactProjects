import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"

const store=configureStore({
    reducer:{
        nav:NavSlice,
        search:searchSlice,
        chat:chatSlice
    }
});

export default store;
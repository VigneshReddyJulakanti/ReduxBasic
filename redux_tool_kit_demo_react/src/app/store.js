import {configureStore } from "@reduxjs/toolkit"
import CakeSlice from "./../features/cake/cakeSlice"
import IceCreamSlice from "./../features/iceCream/iceCreamSlice"
import userSlice from "./../features/users/userSlice"
// const reduxLogger=require("redux-logger")


// const logger=reduxLogger.createLogger()
const store=configureStore({
    reducer:{
        cake:CakeSlice,
        iceCream:IceCreamSlice,
        user:userSlice

    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
export default store
// module.exports=store
const configureStore=require("@reduxjs/toolkit").configureStore
const { getDefaultMiddleware } = require("@reduxjs/toolkit")
const CakeSlice=require("./../features/cake/cakeSlice")
const IceCreamSlice=require("./../features/iceCream/iceCreamSlice")
const reduxLogger=require("redux-logger")
const userSlice = require("../features/users/userSlice")

const logger=reduxLogger.createLogger()
const store=configureStore({
    reducer:{
        cake:CakeSlice,
        iceCream:IceCreamSlice,
        user:userSlice

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports=store
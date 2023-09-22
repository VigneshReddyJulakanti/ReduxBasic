import {createSlice } from "@reduxjs/toolkit"

const initialState={
    numOfCakes:5
}

const cakeSlice=createSlice({
    name:"Cake",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCakes--
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.payload
        }
    }
})

export default  cakeSlice.reducer
export const {ordered,restocked}=cakeSlice.actions
// module.exports=cakeSlice.reducer
// module.exports.cakeActions=cakeSlice.actions

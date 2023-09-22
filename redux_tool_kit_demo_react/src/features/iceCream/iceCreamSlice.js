import {createSlice } from "@reduxjs/toolkit"
const initialState={
    noOfIceCreams:2
}
const iceCreamSlice=createSlice({
    name:"iceCreamSlice",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.noOfIceCreams-=1
        },
        restocked:(state,actions)=>{
            state.noOfIceCreams+=actions.payload
        }
    }
})


export default  iceCreamSlice.reducer
export const {ordered,restocked}=iceCreamSlice.actions
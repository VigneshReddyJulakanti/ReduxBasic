const createSlice=require("@reduxjs/toolkit").createSlice
const initialState={
    noOfIceCreams:0
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

module.exports=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions
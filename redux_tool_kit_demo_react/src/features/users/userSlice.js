import {createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState={
    users:[],
    error:"",
    loading:false
}

// const fetchusers=createAsyncThunk("user/fetchusers",()=>{
//     return
    
//     axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then(Response=>Response.data)
// })

const fetchusers=createAsyncThunk("user/fetchusers",async()=>{
    
    
    
    const response=await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.

        headers: {
          'Content-Type': 'application/json',
         
        },
    //    body: JSON.stringify({"email":credentials.email,"password":credentials.password})
      });
      return await response.json()

})

const userSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchusers.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchusers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.error=""
        })
        builder.addCase(fetchusers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error.message
        })
    }


})

export default userSlice.reducer
export {fetchusers}

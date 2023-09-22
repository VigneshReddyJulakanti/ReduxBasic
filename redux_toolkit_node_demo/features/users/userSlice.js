const createSclice=require("@reduxjs/toolkit").createSlice
const createAsyncThunk=require("@reduxjs/toolkit").createAsyncThunk
const axios=require("axios")
const initialState={
    users:[],
    error:"",
    loading:false
}

const fetchusers=createAsyncThunk("user/fetchusers",()=>{
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(Response=>Response.data.map((user)=>user.id))
})

const userSlice=createSclice({
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

module.exports=userSlice
module.exports.fetchusers=fetchusers
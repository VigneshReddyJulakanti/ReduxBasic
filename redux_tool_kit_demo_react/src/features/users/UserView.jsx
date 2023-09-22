import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchusers } from './userSlice'
export default function UserView() {
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(fetchusers())},[])
  const data=useSelector((state)=>state.user)
  useEffect(()=>{console.log(data)},[data])
  return (<>
    <div>the Data is</div>
    {
     data && !data.loading && data.users.length!==0  && data.users.map((item)=>(
        <>
        <p>{item.name}</p>
        </>
      ))
    }
    </>

  )
}

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './iceCreamSlice'
export default function IceCreamView() {
  const numOfIce=useSelector((state)=>state.iceCream.noOfIceCreams)
const dispatch=useDispatch()
  return (
    <>
    <div>IceCream</div>
    <p>No . of Ice - {numOfIce}</p>
    <button onClick={()=>{dispatch(ordered())}}>Order</button>
    <button  onClick={()=>{dispatch(restocked(1))}}>ReFill</button>
    </>
  )
}

import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { ordered,restocked } from './cakeSlice'
export default function CakeView() {
  const numOfCake=useSelector((state)=>state.cake.numOfCakes)
  const dispatch=useDispatch()
  return (<>
    <div>CakeSlice</div>
    <p>No . of Cakes - {numOfCake}</p>
    <button onClick={()=>{dispatch(ordered())}}>Order</button>
    <button  onClick={()=>{dispatch(restocked(1))}}>ReFill</button>
    </>
  )
}

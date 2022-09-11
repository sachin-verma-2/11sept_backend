import Navi from './nav';
import './dashboard.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Land from './land'
import { saved } from '../../Store/userSlice';

// store.dispatch(fetchSavedData())

const Wishlist=()=>{
    const dispatch=useDispatch()
  const [datab,setdata]=useState([])

  const{saving}=useSelector((state)=>state.login)
  const userid = localStorage.getItem('userId')
  
useEffect(()=>
{
    axios.get('http://localhost:9000/user').then((res)=>{setdata(res.data)
    console.log(res)}).catch((e)=>console.log(e))
},[])

useEffect(()=>
{
  console.log(datab)
//   dispatch(appliedfun({data:userid,newdb:datab}))
  dispatch(saved({data:userid,newdb:datab}))



},[datab])



return(
  <div>

    <Navi></Navi>
    <h2>Your wishlisted jobs</h2>

    {
      saving.length===0?<div><h2>no Wishlist found</h2></div>:<div>  
    <Land value={saving} val2='wishlist'></Land>

      </div>
}
  </div>
  );
};


export default Wishlist
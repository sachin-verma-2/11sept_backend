import React, { useState } from "react";
import Navi from "./nav";
import './dashboard.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sorting,sortdate } from "../../Store/userSlice";
import Card from "./card";

// store.dispatch(fetchData())
const Dashboard=()=>
{
    const dispatch=useDispatch()
    const{jobdata,sorted}=useSelector((state)=>state.login)
    const[issort,setissort]=useState('initial')
    const[search,setsearch]=useState('')
    const [toggle,settoggle]=useState(true)
    console.log(jobdata)
    console.log(sorted)
    const sortfun=(e,key)=>
    {
        settoggle(!toggle)
        dispatch(sorting({data:key,test:toggle}))
        setissort('sort')
    }
    const searchitem=(e)=>
    {
        e.preventDefault();
        setsearch(e.target.value)
        // console.log(search)
    }
    const date=(e,key)=>
    {
      dispatch(sortdate({data:key}))
      setissort('sort')

    }
return  (
    <div>
        <Navi></Navi>
        {console.log('hello')}
        <div>
        <h1 className="heading">Jobs</h1>
        <form class="searching d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>searchitem(e)}></input>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      </div>
      <div>
      <button class="btn btn-dark dropdown-toggle mid" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Job Type
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button class="btn btn-dark" onClick={(e)=>sortfun(e,'fulltime')}>fullTime</button></li>
    <li><button class="btn btn-dark" onClick={(e)=>sortfun(e,'parttime')}>Part Time</button></li>
    <li><button class="btn btn-dark" onClick={(e)=>sortfun(e,'wfh')}>work from Home</button></li>
  </ul>
  <button class="btn btn-dark" onClick={(e)=>sortfun(e,'duration')}>duration</button>
  <button class="btn btn-dark" onClick={(e)=>sortfun(e,'salary')}>Salary</button>
  <button class="btn btn-dark" onClick={(e)=>date(e,'date')}>Date</button>
        </div>
        {issort==='initial'?<Card value={jobdata} val2={search}></Card>:
        issort==='sort'?<Card value={sorted} val2={search}></Card>:
        <div></div>}
 
    </div> 
)
}
export default Dashboard
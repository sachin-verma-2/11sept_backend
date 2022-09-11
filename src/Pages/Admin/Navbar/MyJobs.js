import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "./AdminNav";
import * as ReactBootstrap from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './Employee.css'
import { Link } from 'react-router-dom'

const ViewJobPosted = () => {
  const [classdesc, setclassdesc] = useState("btn-warning")
  const Applicant = [{
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  },
  {
    title: "React",
    description: "developer",
    organization: "GL",
    location: "Noida",
    date: "2/2/2",
    salary: 2000,
    keywords: "react",
    rating: "5"
  }]
  // const item=useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  const handleJobUpdate=(id)=>{
    alert("Indide Update",id)
  }
  const handleJobDelete=(id)=>{
    alert("Indide Delete",id)
  }
  const renderItem = (item, index) => {
    return (
      <Card className="cardstyle" key={index}>
        <Card.Body>
          <Card.Header><h2><b>Title:</b>{  item.title}</h2></Card.Header>
          
          <Card.Text>
            <h5><b>Organization: </b>{  item.organization}</h5>
            <h5><b>Location: </b>{  item.location}</h5>
            <h5><b>Date: </b>{  item.date}</h5>
            <h5><b>Salary: </b>{  item.salary}</h5>
            <h4><b>Rating: </b>{  item.rating}</h4>
            <h5><b>Description: </b>{  item.description}</h5>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <ReactBootstrap.Button className="btn-warning" onClick={()=>{handleJobUpdate(index)}}>Update</ReactBootstrap.Button>
          <ReactBootstrap.Button className="btn-danger" onClick={()=>{handleJobDelete(index)}} style={{marginLeft: '0.3rem'} }>Delete</ReactBootstrap.Button>
        </Card.Footer>
      </Card>
    )
  }
  return (
    <div>
      <AdminNav />
      <h1 className='navbrand'>My Jobs</h1>
      <Link to='/addjobs'><ReactBootstrap.Button className="btn btn-primary mb-2" size="lg">Add New</ReactBootstrap.Button></Link>
      <div className="cardblockstyle">
        {
          Applicant.map(renderItem)
        }
      </div>
    </div>
  )
}

export default ViewJobPosted;

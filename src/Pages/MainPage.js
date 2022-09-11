import React  ,{useState}from 'react'
import { useSelector } from 'react-redux';
import Carousel from 'better-react-carousel'
import Navbar from '../Components/Navbar';
import "../CSS/Search.css"
import Footer from '../Components/Footer';
import "../CSS/MainPage.css"
const MainPage = () => {
  const{jobdata}=useSelector((state)=>state.login.jobdata)
  const[search,setsearch]=useState('')
  const searchitem=(e)=>
    {
        e.preventDefault();
        setsearch(e.target.value)
        console.log(search)
    }
  return(
    <div> 
      <Navbar></Navbar>
      <Carousel cols={1} rows={1} gap={5} loop>
      <Carousel.Item>
        <img width="102%" height="400" src="https://st2.depositphotos.com/3591429/7712/i/600/depositphotos_77127743-stock-photo-job-search-qualification-concept.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="102%" height="400" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTFGiMihy0IHY8B4F2ILWrr7-GdwaILfs1jXzFRr1oEtwaW-yzfxBMcQi9ND6SunyGzo&usqp=CAU" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="102%" height="400"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsMH4UfNE9SlvygNdxezLPaZ3LTC0nca4UBkT9aY1kshAkvr5RDdmJ6MZrieCBeyZL20&usqp=CAU" />
      </Carousel.Item>
    </Carousel>
    <div class="container"> <div class="search"> <div class="row"> <div class="col-md-6"> <div class="search-1"> <i class='bx bx-search-alt'></i> <input type="text" placeholder="Search by Place"/> </div> </div> <div class="col-md-6"> <div> <div class="search-2"> <i class='bx bxs-map' ></i> <input type="text" placeholder="Search by Name" /> <button onChange={(e)=>searchitem(e)}>Search</button> </div> </div> </div> </div> </div>
</div>
<Footer></Footer>
</div>

  )
  }
export default MainPage
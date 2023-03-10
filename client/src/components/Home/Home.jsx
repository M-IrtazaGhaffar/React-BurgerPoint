import React from 'react'
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import headerPic from "../images/header-removebg.png";

function Home() {

  //States:
  //(Header)
  const [DataHead, setDataHead] = React.useState("Startup Discount")
  const [DataPara1, setDataPara1] = React.useState("it is a good time for great taste of burgers")
  const [DataPara2, setDataPara2] = React.useState("Feed your belly with something special today!")
  //(Grid section)
  const [Grid1, setGrid1] = React.useState("most popular burger")
  const [Grid2, setGrid2] = React.useState("more fun, more taste")
  const [Grid3, setGrid3] = React.useState("fresh & chilli")
  //(Form)
  const [Name, setName] = React.useState("")
  const [Email, setEmail] = React.useState()
  const [Date, setDate] = React.useState()
  
  //Function
  const reserveTable = async (e) => {
    e.preventDefault()
    axios.get("").then((docs) => {
      console.log(docs.data.fact)
      setName(docs.data.fact)
    }).catch ((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <div className="home">


        <div className="header-upper">
        <div className="header">
          <div className="header-1">
            {/* { Note: Data from DB } */}
            <p>
              {DataPara1}
            </p>
            <h1>
              {DataHead}
            </h1>
            <p className='desc'>
              {DataPara2}
            </p>
          </div>
          <div className="header-2">
            <img src={headerPic} alt="picture" srcset="" />
          </div>
        </div>
        </div>


        <div className="cards">
          <div className="cards-center">
            <div className="card-1">
              {Grid1}
            </div>
            <div className="card-2">
              <div className="card-2-1">
                {Grid2}
              </div>
              <div className="card-2-2">
                {Grid3}
              </div>
            </div>
          </div>
        </div>


        <div className="towardsMenu">
          <div className="towardsMenu-center">
            <p>
              always tasty burger
            </p>
            <h1>
              choose & enjoy
            </h1>
            <Link to='/menu'>
              Ride towards Menu!
            </Link>
          </div>
        </div>


        <div className="reserve">
          <p>
            reservation
          </p>
          <h1>
            " book your table "
          </h1>
          <div className="reserve-table">
            <form method="post" onSubmit={reserveTable}>
              <div className="input">
                <input type="text" name="name" placeholder='name' required />
                <input type="email" name='email' placeholder='email' required />
              </div>
              <div className="input">
                <input type="date" name="date" placeholder='Date' required />
                <input type="time" name="time" placeholder='Time' required />
              </div>
              <div className="input">
                <input type="number" name="number" placeholder='people (maximum 5)' required max={5} />
                <button type='submit'>find a table</button>
              </div>
              { Name }
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
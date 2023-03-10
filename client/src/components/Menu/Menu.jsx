import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Menu.css";

function Menu() {
  //State:
  const [ID, setID] = React.useState()
  const [searchedItem, setsearchedItem] = React.useState("")

  //Navigate:
  const Navigate = useNavigate()
  const submitFunc = async (e) => {
    e.preventDefault()

    Navigate(`/CardDetail/${ID}`)
  }

  //Search dunction
  const searchFormHandler = async (e) => {
    e.preventDefault()

    console.log(searchedItem)
  }

  return (
    <>
      <div className="menu-head">
        <h1>
          Menu
        </h1>
        <p>
          Order what your belly want.
        </p>
        <br />
        <form method="post" onSubmit={searchFormHandler}>
          <input type="text" name="searchedItem" onChange={(e) => setsearchedItem(e.target.value)} autoComplete="off" placeholder='Search anything...' />
          <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </div>

      <div className="card">

        <form onSubmit={submitFunc} method="post">
          <div className="image">
            <img src="https://via.placeholder.com/150/5c0d0b" alt="logo" />
          </div>
          <div className="details">
            <div className="title">
              <h1>
                Title
              </h1>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iusto.
            </div>
            <div className="btn">
              <button type='submit' onClick={() => setID(123)}>
                Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Menu
import React from 'react'
import './Feedback.css'

function Feedback() {
  return (
    <>
    <div className="feedback">
    <h1>
      Feedback
    </h1>
      <form method="post">
        <div className="formDetails">
          <input type="text" name="Name" placeholder='Name' required />
          <input type="email" name="Email" placeholder='Email' required />
        </div>
        <div className="formMessage">
        <textarea name="Message" cols="30" rows="10" required placeholder='Type your message here'>
        </textarea>
        </div>
        <div className="formBtn">
        <button type='submit'>
          Send
        </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Feedback
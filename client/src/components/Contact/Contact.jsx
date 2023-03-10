import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <div className="contact-details">
    <h1 className='contact-head'>
      Contact Us
    </h1>
    <p className='contact-desc'>
      Wanna visit our resturant?
    </p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27200.065474974854!2d74.332541015625!3d31.551389999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905243198a003%3A0x18d491f61c050d21!2sBurger%20Point!5e0!3m2!1sen!2s!4v1664644548538!5m2!1sen!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p className='contact-foot'>
      Thanks for staying connected with us.
    </p>
    </>
  )
}

export default Contact
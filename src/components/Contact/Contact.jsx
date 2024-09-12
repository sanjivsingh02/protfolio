import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import Location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4812b97c-fdd2-4164-b17c-5e29d8222ba0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Currently i'm available to join  your company and implement my knowledge to the company which help to growth your comany and my knowledge </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>singhsanjiv8888@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91:8180934081</p>
            </div>
            <div className="contact-detail">
              <img src={Location_icon} alt="" /> <p>Mumbai</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your Email' name='email'/>
          <label htmlFor="">Enter your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

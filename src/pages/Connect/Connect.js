import React, { useRef } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Connect.css';

function Connect() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    alert("Message sent successfully! We'll reach you shortly :)");
  };

  return (
    <>
      <div className="containerc">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text1">Send us the message and contact now. Get your all queries resolved here!</p>

            <div className="social-media">
              <p>Connect with us:</p>
              <div className="social-media-icons">
                <a href="#">
                  <i className="fa"> <FaTwitter /> </i>
                </a>
                <a href="#">
                  <i className="fa"> <FaInstagram /> </i>
                </a>
                <a href="#">
                  <i className="fa"> <FaLinkedin /> </i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">

            <form ref={form} onSubmit={handleSubmit}>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" id="username" placeholder="Name"/>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" id="email" placeholder="Email"/>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" id="phone" placeholder="Phone"/>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" id="message" placeholder="Message"></textarea>
                <span>Message</span>
              </div>
              <input type="submit" name="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
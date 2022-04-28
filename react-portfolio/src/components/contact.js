import React from 'react';
import './styling/contact.css'

function Contact() {
    return (
        <div className="contactform">
        <h2>Contact</h2>
        <form>
         <label for="name">Name</label>
            <input type="text" id="name" name="name"/>
         <label for="email">Email Address</label>
            <input type="text" id="email" name="email"/>
         <label for="message">Message</label>
            <textarea id="message" rows="10" cols="30"></textarea>
            <input type="submit" value="Submit"/>
         </form>
      </div>
    );
  }
  
  export default Contact;
  
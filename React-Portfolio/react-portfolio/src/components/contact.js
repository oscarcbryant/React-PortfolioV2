import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import './styling/contact.css';

function Contact() {

   // const handleSubmit = event => {
   //    event.preventDefault();
   //    alert('You have submitted the form.')
   // }

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      if (inputType === 'username') {
         setUsername(inputValue)
      } else if (inputType === 'email') {
         setEmail(inputValue)
      } else { setMessage(inputValue) }
  };

   const handleSubmit=(e) => {

   e.preventDefault();

   if (!validateEmail(email) || !username) {
      setErrorMessage('Email or username is invalid!');
   return;
   }

   setUsername('');
   setEmail('');
   setMessage('');
};

    return (
        <div id="contactbody">
        <h2>Contact</h2>
        <form className="contactform">
            <label>
               <p id='formlabel'>Username</p>
               <input 
                  value={username}
                  name="username" 
                  onChange={handleInputChange}
                  type='text'
                  placeholder='username'
                  />
            </label>
            <label>
               <p id='formlabel'>Email Address</p>
               <input
               value={email} 
               name="email"
               onChange={handleInputChange}
               type='email'
               placeholder='email'
               />
            </label>
            <label>
               <p id='formlabel'>Message</p>
               <input
                  value={message}
                  name='message'
                  onChange={handleInputChange}
                  type='message'
                  placeholder='message'/>
            </label>
            <button id="submitbutton" type="submit" onClick={handleSubmit}>Submit</button>
         </form>
         {errorMessage && (
            <div>
               <p className='error-text'>{errorMessage}</p>
            </div>
         )}
      </div>
    );
   }
  
  export default Contact;
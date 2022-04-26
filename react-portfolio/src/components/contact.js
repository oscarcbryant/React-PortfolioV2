import React from 'react';

// const styles = {
//     contact: {
//         background: '#5e7f8a'
//     }
// };


function Contact() {
    return (
        <div className="component">
        {/* <div style={styles.contact}> */}
        <div className="contactform">
        <h1>Contact</h1>
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
      </div>
    //   </div>
    );
  }
  
  export default Contact;
  
import './Form.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = React.useState("");


  const form = useRef();

  const handleOnChange = (e)=> {
      setEmail(e.target.value);
 }

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('service_ll5ddne', 'template_6izdx9n', form.current, '2re0x90mAMwbDc4Dx')
      .then((result) => {
        setPending(false);
          console.log(result.text);
          alert("Message Sent Successfully");
          form.current.reset();
      }, (error) => {
        setPending(false);
          console.log(error.text);
          alert("Oops! There was an error!");
      });
  };

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
       setMessage("Valid Email");
       } else if (!regEx.test(email`enter code here`) && email !== "") {
            setMessage("Invalid email");
       } else {
           setMessage("");
       }
  }
  return (
    <div className='form'>
         <form ref={form} onSubmit={sendEmail} onChange={handleOnChange}>
            <label>Your Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Subject</label>
            <input type="text" name='sub_name' required></input>
            <label>Message</label>
            <textarea rows={6} placeholder="Type your message" name='message'  required/>
            <button onClick={emailValidation} class="btn" type="submit" value="Send" disabled={pending ? true : false}>{pending ? "Loading..." : "Send Message"}</button>
            <p className="message">{message}</p>
        </form>
    </div>
  )
}

export default Form
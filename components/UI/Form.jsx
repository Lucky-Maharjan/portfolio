import React from "react";
import classes from "../../styles/form.module.css";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const Form = () => {
  function submitHandler (e)  {
    e.preventDefault();

    emailjs.sendForm('service_pluhs28', 'template_poj3o7u', e.target, 'gzl2UBXqZhH2kjYKl')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

    e.target.reset();
  };

    function open() {
      swal(
        "Please be patient while we respond !", {
            buttons: false,
            timer: 2500,
            color: "white",
        });
      };



  return (


    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <br/><br/>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" name="name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" name="email" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="text"  placeholder="Subject" name="subject" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={4} placeholder="Message" name="message" required />
      </div>

      <button className="primary__btn" type="submit" onClick={open}>
        Send
      </button>
    </form>
  );
};

export default Form;

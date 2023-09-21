import React from "react";
import ContactUsInfo from './contactUsInfo'
import { useForm } from "react-hook-form";
import contactUsImg from '../Media/contactUsImg01.jpg';

{/*Copyright free media sources:
Photo by Burak The Weekender: https://www.pexels.com/photo/photo-of-sea-during-sunset-64201/ */}

{/* contactUs.js component displays contact info beside iframe of google maps for location
below it displays an image beside a contact form with validated inputs, user is prompted if not valid*/}
const ContactUs = () => {
  {/*destructure the useForm object from library */}
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="contactUs">
      
      <h2>Contact Us</h2>
      <p>
        For any enquiries, including joining our club, or to gather additional information please see the below provided contact methods.<br/>
        Alternatively you can submit your message via our contact form.<br/>
        We endeavour to respond to all messages within two business days.
      </p>
      
      <ContactUsInfo />

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.7714461700305!2d144.
        95389331229!3d-37.82417454805445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
        1s0x6ad65d9edcc576e1%3A0x4bd1300ed2b0f669!2sPolly%20Woodside%20Park!5e0!3m2!1sen!2sau!4v1692157395214!5m2!1sen!2sau"  
        allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      <img src={contactUsImg} className="contactUsImg" alt="rowers at sunset" /> 

      <form className="contactForm" name="contact" onSubmit={handleSubmit(onSubmit)}>
        <h3>Send us a Message</h3>
        <label className="formTitle" for="userName">Name:</label><br/>
        <input className="userName" name="userName" placeholder="John Doe" required/><br/><br/>

        <label className="formTitle" for="userEmail">Email:</label><br/>
        <input className="userEmail" name="userEmail" {...register("inputEmail",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} placeholder="johndoe@email.com" />
        {errors.inputEmail && <p>Please follow the email format of johndoe@email.com</p>} <br/><br/>

        <label className="formTitle" for="userPhone">Phone Number:</label><br/>
        <input name="userPhone" {...register("inputPhone",
                            {
                                required: true,
                                maxLength: 10,
                                minLength: 10,
                                pattern: /^[0-9]*$/
                            })} placeholder="04xx xxx xxx" />
        {errors.inputPhone && <p>Please ensure you use 10 digits and only input numbers</p>}<br/><br/>

        <label className="formTitle" for="contactMethod">Preferred Contact Method:</label><br/>
        <input className="contact_email" name="contactMethod" type="radio" value="email" required/>
        <label for="contact_email">Email</label><br/>
        <input className="contact_phone" name="contactMethod" type="radio" value="phone" required/>
        <label for="contact_phone">Phone</label><br/><br/>

        <label className="formTitle" for="userMessage">Comment:</label><br/>
        <textarea name="userMessage" placeholder="Your message..." required></textarea>
        <button name="submit" type="submit">Submit</button>
        <p><i>By submitting this form, you are acknowledging and accepting our 'Terms & Conditions'</i></p>
      </form>
    </div>
    );
};

export default ContactUs;
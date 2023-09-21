import React from "react";

{/* contactUsInfo.js component contains club contact info in its diplay format */}
const ContactUsInfo = () => {
  return (
    <div className="contactUsInfo">
    <h3>Location</h3>
    <p>
        21 S Wharf Promenade,<br/>
        South Wharf VIC 3006
    </p>

    <h3>Hours</h3>
    <table>
        <tr>
        <td class="openHours">Monday-Friday:</td>
        <td>6:00am-9:00am | 4:00pm-7:00pm</td>
        </tr>
        <tr>
        <td class="openHours">Saturday:</td>
        <td>6:00am-4:00pm</td>
        </tr>
    </table>
    
    <h3>Email</h3>
    <a href="mailto:PLACEHOLDER@EXAMPLE.edu.au">PLACEHOLDER@EXAMPLE.edu.au</a>
    <h3>Call</h3>
    <a href="tel:+61400111XXX">+61 400 111 XXX</a>
    </div>
    );
};

export default ContactUsInfo;
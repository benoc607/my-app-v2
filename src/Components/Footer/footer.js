import React from "react";
import FacebookIcon from '../Media/facebookIcon.png';
import InstagramIcon from '../Media/instagramIcon.png';
import TwitterIcon from '../Media/twitterIcon.png';
import EmailIcon from '../Media/emailIcon.png';
import PhoneIcon from '../Media/phoneIcon.png';

{/*Copyright free media sources (in order of appearance):
"https://icons8.com/icon/13912/facebook" Facebook icon by "https://icons8.com" Icons8 
"https://icons8.com/icon/32323/instagram" Instagram icon by "https://icons8.com" Icons8 
"https://icons8.com/icon/13963/twitter" Twitter icon by "https://icons8.com" Icons8 
"https://icons8.com/icon/X0mEIh0RyDdL/email" Email icon by "https://icons8.com" Icons8 
"https://icons8.com/icon/jShwZ2RCyPSO/phone" Phone icon by "https://icons8.com" Icons8 */}


{/*Display Terms and Conditions*/}
function termsAndCond() {
  window.confirm("Terms & Conditions:\nLorem ipsum");
}

{/*Display Privacy Statement */}
function privacyState() {
  window.confirm("Privacy Statement:\nLorem ipsum");
}

{/* footer.js component displays button links for contact/socials and terms & conditons + privacy statement*/}
const Footer = () => {

  const footItems = [
  <a className="contactLinks" href="https://www.facebook.com/PLACEHOLDER/" target="_blank" rel="noopener noreferrer">
    <img src={FacebookIcon} className="contactIcons" alt="Facebook" />
  </a>, 
  <a className="contactLinks" href="https://www.instagram.com/PLACEHOLDER/" target="_blank" rel="noopener noreferrer">
    <img src={InstagramIcon} className="contactIcons" alt="Instagram" />
  </a>, 
  <a className="contactLinks" href="https://www.twitter.com/PLACEHOLDER/" target="_blank" rel="noopener noreferrer">
    <img src={TwitterIcon} className="contactIcons" alt="Twitter" />
  </a>, 
  <a className="contactLinks" href="mailto:PLACEHOLDER@student.swin.edu.au" target="_blank" rel="noopener noreferrer" >
    <img src={EmailIcon} className="contactIcons" alt="Email" />
  </a>,
  <a className="contactLinks" href="tel:+61400111xxx" target="_blank" rel="noopener noreferrer">
    <img src={PhoneIcon} className="contactIcons" alt="Phone" />
  </a>
  ]; 
  const footList = footItems.map((foot,index) => <li key={index}>{foot}</li>);

  return (
    <div className="footer">
      <ul className="footerContactInfo">{footList}</ul>
      <p>Copyright&copy; 2023 
        <button id="termsAndCond" onClick={termsAndCond}>Terms & Conditions</button>
        <button id="privacyState" onClick={privacyState}>Privacy Statement</button>
      </p>
    </div>
    );
};

export default Footer;
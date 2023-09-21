import React from "react";
import TitleImg from '../Media/headerImg01.jpg'; 

{/*Copyright free media sources:
01 Photo by Patrick Case: https://www.pexels.com/photo/people-riding-boat-on-water-3693081/ */}

{/* header.js component displays the page title over the top of an image */}
const Header = () => {
  return (
    <div className="home">
        <h1>Victorian Rowers Boathouse Club<br/>VRBC</h1>
        <img src={TitleImg} className="titleImg" alt="Octuple scull on angle rowing away" />
    </div>
    );
};

export default Header;
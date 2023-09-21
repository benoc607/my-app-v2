import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

{/* navigation.js component displays nav bar at top of screen with search bar */}
const Navigation = () => {
  {/* set default state as home */}
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  {/* create array with nav bar items */}
  const navItems = [
    { id: 1, title: "Home", name: "home" },
    { id: 2, title: "About", name: "about" },
    { id: 3, title: "The Team", name: "theTeam" },
    { id: 4, title: "Timetable", name: "timetable" },
    { id: 5, title: "Gallery", name: "gallery" },
    { id: 5, title: "Contact Us", name: "contactUs" }
  ];

  return (
    <div className="nav">
      
      {/* display nav bar and internal link to array item on selection */}
      <ul className="navMenu">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`#${item.name}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>

      {/* create search bar and use react-icons for search symbol on button */}
      <div className="searchBar">
                <input id="searchInput" type="text" placeholder="Search.." />  
                <button name="search" type="submit" onclick="search()"><BiSearch/></button> 
            </div>   
    </div>
  );
};

export default Navigation;


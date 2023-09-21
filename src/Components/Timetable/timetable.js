import React, { useState }  from "react";

{/* timetable.js component displays training timetable with buttons to apply for beginner tryouts which prompt for user email */}
const Timetable = () => {
  const [beginnerEmail, setBeginnerEmail] = useState("");
  
  {/*Beginner trial signup, grab user email so further information can be sent re: what to expect, backend use beginnerEmail to access user input */}
  function BeginnerTrial() {
    const beginnerApplication = prompt("Please enter your email address to apply for our beginner session so we can confirm numbers and send you additional information. Come join us this Friday at 4:00pm!", "john.doe@email.com");
    setBeginnerEmail(beginnerApplication);
  }
  
  return (
    <div className="timetable">
      <h2>Timetable</h2>
      <p>
        If you wish to come and see what our club is like, and even learn some rowing 
        basics, then click on the 'Beginner try outs' in the below table 
        or simply <button className="beginnerTrial2" onClick={BeginnerTrial}><i>click here to apply.</i></button>
      </p>
      <table>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <th>6:00am-8:00am</th>
          <td>Water - strength</td>
          <td>Water - endurance</td>
          <td>Ergo</td>
          <td>Water - strength</td>
          <td>Water - technical</td>
          <td rowspan="2">Travel and<br/>set up boats</td>
          <td></td>
        </tr>
        <tr>
          <th>8:00am-9:00am</th>
          <td>Ergo - light</td>
          <td></td>
          <td>Gym - strength</td>
          <td>Ergo - technical</td>
          <td>Boat maintenance/Packing</td>
          <td></td>
        </tr>
        <tr>
          <th>9:00am-4:00pm</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Racing</td>
          <td></td>
        </tr>
        <tr>
          <th>4:00pm-7:00pm</th>
          <td>Water - technical</td>
          <td>Ergo - technical</td>
          <td>Water - endurance</td>
          <td>Water - technical</td>
          <td><button className="beginnerTrial" onClick={BeginnerTrial}>Beginner try outs</button></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    );
};

export default Timetable;
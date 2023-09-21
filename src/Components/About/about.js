import React from "react";
import AboutImg from '../Media/aboutImg01.jpg';

{/*Copyright free media sources:
01 Photo by Phil Evenden: https://www.pexels.com/photo/eight-during-training-16981635/ */}

{/* about.js component displays text next to a photo*/}
const About = () => {
  return (
    <div className="about">
        <h1>About</h1>
        {<p>
          The Victorian Rowers Boathouse Club (VBRC) was established in 1994 by a first division quad crew following the completion of their highschool studies with the financial backing of their parents as they feared if they were to join an already established rowing club that they may never row together again.<br/>
          The simple crew of just five students complemented one another's skill sets fabulously and had previously seen much success at Regattas both across Victoria and also in New South Wales, largely aided by their coach at the time, a prior rowing olympian himself, who followed them in their journey and and thus became the club's first coach.<br/>
          Their personal aspirations were to make names for themselves, here in the state in which they all grew up with the hopes to travel not only interstate, but to be recognised on an international level, just as their coach had done before them.<br/>
          Owing largely to those students prior successes, burning passions and financial backing from their parents, the club initially saw a lot of interest from fellow university students who joined their number and their popularity and size only grew from there, it was not long until the club was even successful in getting sponsored.<br/>
          Now the club has grown considerably from its original standing of just four rowers, one coxswain and a single coach and has since become a high-profile rowing club that regularly competes nationally and stands out among all the other boathouses situated along the Yarra River in Southbank.<br/>
          In keeping with their roots with accomodating student members, the club structures their training times outside of typical study hours and additionally prescribes the same activities to all members just at various intensities to help foster a sense of community which is only possible due to the club's extensive facilities and equipment.
        </p>}
        <img src={AboutImg} className="aboutImg" alt="Black and white photo of original rowing crew" />
    </div>
    );
};

export default About;
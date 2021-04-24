import React from 'react';
import Card from "./Card";
import organizer_team_data from './Organizer_team_data';

const Organizer = () => (
    <div id="organizer">
      {/* ====================================================== organizer_team Details Start ===================================================== */}

      {/* -------------   Here i am using only one img as background , you can use 2 diff background for organizer_team and judges
                          by uncomment the div below and add img in css part using background1 &  background2 class of css ------------ */}

      <div className="background1">
        <h1 className="heading">::: Organizer :::</h1>
        <div className="container">
          {organizer_team_data.map( (value) => {
            return(
              < Card 
                  key = {value.id}
                  name = {value.Person_name}
                  role = {value.Person_role}
                  IMG = {value.Person_IMG}
                  FB = {value.Link_FB}
                  twitter = {value.Link_twitter}
                  instagram = {value.Link_instagram}
                  linkedin= {value.Link_linkedin}
              /> 
            );
            }
          )}
        </div>
     {/*  </div> */ }
    {/* ====================================================== organizer_team Details End ===================================================== */}

     </div>
    </div>
);

export default Organizer;
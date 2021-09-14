import React, { useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import { Card, CardContent, Grid } from 'semantic-ui-react';
import App from '../App';

 function Home({data}) {
     const [vehicleState, setvehicleState] = useState("Choose from the above");
    
    return( <div>
    
       <select
       value={vehicleState}
        onChange={(e) => {
           const selectedveh=e.target.value;
            setvehicleState(selectedveh);
           
       }}
       >
       <option value="">Choose</option>
          <option value="Sand Crawler
Model:
Digger Crawler

Manufacturer:
Corellia Mining Corporation

Cost In Credits:
150000

">Sand Crawler</option>

          <option value="T-16 skyhopper
Model:
T-16 skyhopper

Manufacturer:
Incom Corporation

Cost In Credits:
14500">T-16 skyhopper</option>

          <option value="X-34 landspeeder
Model:
X-34 landspeeder

Manufacturer:
SoroSuub Corporation

Cost In Credits:
10550">X-34 landspeeder</option>

          <option value="TIE/LN starfighter
Model:
Twin Ion Engine/Ln Starfighter

Manufacturer:
Sienar Fleet Systems

Cost In Credits:
unknown">TIE/LN starfighter</option>

          <option value="Snowspeeder
Model:
t-47 airspeeder

Manufacturer:
Incom corporation

Cost In Credits:
unknown">Snowspeeder</option>

          <option value="TIE bomber
Model:
TIE/sa bomber

Manufacturer:
Sienar Fleet Systems

Cost In Credits:
unknown">TIE bomber</option>

          <option value="AT-AT
Model:
All Terrain Armored Transport

Manufacturer:
Kuat Drive Yards, Imperial Department of Military Research

Cost In Credits:
unknown">AT-AT</option>

          <option value="AT-ST
Model:
All Terrain Scout Transport

Manufacturer:
Kuat Drive Yards, Imperial Department of Military Research

Cost In Credits:
unknown">AT-ST</option>

          <option value="Storm IV Twin-Pod cloud car
Model:
Storm IV Twin-Pod

Manufacturer:
Bespin Motors

Cost In Credits:
75000">Stom |V Twin-Pod Cloud Car</option>

          <option value="Sail barge
Model:
Modified Luxury Sail Barge

Manufacturer:
Ubrikkian Industries Custom Vehicle Division

Cost In Credits:
285000">Sail barge</option>
           


       </select>
       <h1>Vehicles List</h1>
       <Grid columns={1}>
                     <Card>
                         <Card.Content>
                             {vehicleState}
                         </Card.Content>
                     </Card>
           </Grid>
    </div>
    );     
   
}
export default Home;
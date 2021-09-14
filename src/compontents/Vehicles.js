import React from 'react';
import { Grid, Card} from 'semantic-ui-react';

export default function vehicles({data}) {
    return (
        <>
        <h1>Vehicles List</h1>
           <Grid columns={3}>
             {data.map((vehicles,i) => {
                return (
                  <Grid.Column key={i}>
                     <Card>
                         <Card.Content>
                             <Card.Header>{vehicles.name}</Card.Header>
                             <Card.Description>
                                 <strong>Model</strong>
                                 <p>{vehicles.model}</p>

                                 <strong>Manufacturer</strong>
                                 <p>{vehicles.manufacturer}</p>

                                 <strong>Cost In Credits</strong>
                                 <p>{vehicles.cost_in_credits}</p>
                                 
                             </Card.Description>
                         </Card.Content>
                     </Card>
                  </Grid.Column>  
                )
             })}
           </Grid>
        </>
    );
}

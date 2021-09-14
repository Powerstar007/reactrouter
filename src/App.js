import React, {useState, useEffect} from 'react';
import Navbar from './compontents/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './compontents/Home';
import Vehicles from './compontents/Vehicles';
import Films from './compontents/Films';


function App(){
    const [films,setfilms] = useState([]);
    const [vehicles,setvehicles] = useState([]);
    const [loading,setLoading] = useState(true);

 useEffect(() => {
       async function fetchfilms() {
        let res = await fetch('https://swapi.dev/api/films/?format=json');
        let data = await res.json();
        setfilms(data.results);
        setLoading(false);
       }
       async function fetchvehicles() {
           let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
           let data = await res.json();
           setvehicles(data.results);
           setLoading(false);
       };

       fetchfilms();
       fetchvehicles();
       
 }, []);
    return(
        <>
        <Router>
          <Navbar />
          <Container>
          {loading ? (
              <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
              </Dimmer>
          ) : (
             <Switch>
                 <Route exact path='/'>
                     <Home data={vehicles} />
                 </Route>
                 <Route exact path='/films'>
                      <Films data={films} />
                 </Route>
                 <Route exact path='/vehicles'>
                     <Vehicles data={vehicles} />
                 </Route>
             </Switch>
          )}
          </Container>
        </Router>
        </>
    );
}

export default App;
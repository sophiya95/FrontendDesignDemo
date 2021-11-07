import React from 'react'
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom';
import LandingPage from '../pages/Home/LandingPage';

function Routes() {
    return (
        <div>
             <Router>
            
                <Switch>         
                        
                        <Route exact path="/" component={LandingPage}/>
                </Switch>
           
            
          </Router>
        </div>
    )
}

export default Routes

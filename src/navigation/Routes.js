import React from 'react'
import Home from '../pages/Home/Home'
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom';

function Routes() {
    return (
        <div>
             <Router>
            
                <Switch>         
                        
                        <Route exact path="/" component={Home}/>
                </Switch>
           
            
          </Router>
        </div>
    )
}

export default Routes

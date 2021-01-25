import React from 'react';
import './App.css';

//Import react routes and its other modules
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

//All components
import AddUser from './AddUser';
import Home from './Home';
import Header from './Header';
import ViewUser from './ViewUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Import axios services
import axios from 'axios';

class App extends React.Component {
  
 
  render() {
   
    return (
      <Router>
      <div className="maincontainer">
        <Header/>
        

        <Switch>
            
            
            <Route exact path='/adduser' component={AddUser} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Home} />
            <Route exact path='/viewuser' component={ViewUser} />
            <Route exact path='/updateuser' component={UpdateUser} />
            <Route exact path='/deleteuser' component={DeleteUser} />
            
          </Switch>
            
      

      
      </div>
      </Router>
)
};
}

export default App;
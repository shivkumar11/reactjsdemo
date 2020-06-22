import React from 'react';
import { 
	BrowserRouter as Router, 
	Route, 
  Switch
} from 'react-router-dom'; 
import './App.css';
import Header from './containers/Header/Index';
import Footer from './containers/Footer/Index';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/contact';
import RoleList from './redux/RoleList';

function App(props) {
  
  return (
    <div className="App">
     
    

    <Router>  
    <Header />
    <Switch>
  
          <Route path="/" exact component={Home}>
          </Route>
          <Route path="/About" component={About}>
          </Route>
          <Route path="/RoleList" component={RoleList}>
          </Route>
          
          <Route path="/Contact" component={Contact}>
          </Route>
         
        </Switch>
      
        <Footer />
    </Router>
    
   
    </div>
  );



}


export default App;

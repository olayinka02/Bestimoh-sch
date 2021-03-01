import React, { Component } from 'react';
import Navbar from './components/Navbarx';
import Landingpage from './components/Landingpage';
import Displaypage from './components/Displaypage';
import Formbody from './components/Formbody';


class App extends Component {
  render() {
    return (
      <div>
        <div >
        <Navbar />
        <Displaypage />
        <Landingpage /><br/>
        <Formbody />
      
        </div>
       
      
      </div>
    );
  }
}




export default App;



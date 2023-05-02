import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Base from "./Base/Base"
import Buttons from './Components/Buttons';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Cards from './Components/Cards';
import DashBoard from './Components/Dashboard';

function App() {
  return (
    <div className="App fulid-container">
      
      {/* <Students/> */}
      {/* <SideBar/> */}

      <Switch>
        <Route exact path="/">
          <DashBoard/>
        </Route>
        <Route  path="/buttons">
          <Buttons/>
        </Route>
        <Route path="/cards">
          <Cards/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;



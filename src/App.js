import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PageContent from './PageContent';

class App extends React.Component {

  render() {
    return (
      <div>  
        <BrowserRouter>
        <div className="grid-container">
          <div className="grid-x">
            <img src={logo} alt="logo" className="cell small-2" />
            <Nav />
          </div>
        </div>
        <Switch>
          <Redirect from='/' to='/medicore' exact />
          <Route path='/:pagename' component={PageContent} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

import React from 'react';
import { BrowserRouter as ReactRouter, Route,
Switch} from "react-router-dom";

import Home from './pages/Home';
import App from './App';

export default class Router extends React.Component{


  render(){
    return(
    <ReactRouter>
    <App>
    <Switch>
      <Route exact path="/" component={Home}></Route>
    
      </Switch>
    </App>
    </ReactRouter>
  );
  }
}

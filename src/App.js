import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {withRouter} from 'react-router-dom';

import  './App.css';
import MyAppBar from  './components/MyAppBar'
class App extends Component {

  constructor(props){
    super(props);
    console.log(props.location.pathname.split('/')[1]);
  }



  render() {
    return (
      <MuiThemeProvider>
      <div>
      <MyAppBar/>
          {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);

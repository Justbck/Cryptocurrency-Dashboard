import React, {Component} from 'react';
import './App.css';

import Welcome from './WelcomeComponent/WelcomeMessage';
import AppLayout from './AppLayoutComponent/AppLayout';
import AppBar from './AppBar/AppBar';
import {AppProvider} from './AppProvider';

class App extends Component {
  render(){
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Welcome/>
      </AppProvider>
    </AppLayout>
  );
}
}

export default App;

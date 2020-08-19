import React, {Component} from 'react';
import './App.css';

import Welcome from './WelcomeComponent/WelcomeMessage';
import AppLayout from './AppLayoutComponent/AppLayout';
import AppBar from './AppBar/AppBar';

class App extends Component {
  render(){
  return (
    <AppLayout>
      <AppBar/>
      <Welcome/>
    </AppLayout>
  );
}
}

export default App;

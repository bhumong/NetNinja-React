import React, { Component } from 'react';
import Ninjas from './Ninjas'
class App extends Component {
  render() {
      return (
        <div className="App">
            <h1>My first react app</h1>
            <p>test</p>
            <Ninjas name='ryu' age='25' belt='black' />
            <Ninjas name='budi' age='22' belt='white' />
        </div>
      );
  }
}

export default App;

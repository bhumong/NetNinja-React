import React, {Component} from 'react';
import Ninja from './Ninja';

class App extends Component{

    render() {
        return (
          <div className="App">
              <h1>My first react app!</h1>
              <Ninja name="ryu" age="25" belt="black"/>
              <Ninja name="yoshi" age="30" belt="test"/>
          </div>
        );
    }
}

export default App;

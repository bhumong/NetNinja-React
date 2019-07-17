import React, {Component} from 'react';
import Ninja from './Ninja';

class App extends Component {
    render()
    {
        return (
          <div className="App">
              <h1>My first react app!</h1>
              <Ninja />
          </div>
        );
    }
}

export default App;

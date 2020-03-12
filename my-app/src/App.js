import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
    state = {
        ninjas: [
            { name: 'alpha', age: 38, belt: 'black', id: 1},
            { name: 'beta', age: 28, belt: 'green', id: 2},
            { name: 'carlie', age: 32, belt: 'yellow', id: 3},
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>My first react app</h1>
                <p>test</p>
                <Ninjas ninjas={ this.state.ninjas }/>
                <AddNinja />
            </div>
        );
    }
}

export default App;

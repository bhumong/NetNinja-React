import React, {Component} from 'react';
import Ninja from './Ninja';
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas: [
            {name: 'ryu', age: 30, belt: 'black', id: 1},
            {name: 'yoshi', age: 25, belt: 'green', id: 2},
            {name: 'uragan', age: 35, belt: 'pink', id: 3},
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>My first react app!</h1>
                <Ninja ninjas={this.state.ninjas} />
                <br />
                <AddNinja />
            </div>
        );
    }
}

export default App;

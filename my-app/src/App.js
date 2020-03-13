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

    addNinja = (ninja) => {
        ninja.id = Math.floor(Math.random() * 1000000);
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        });
    }

    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter((ninja) => {
            return ninja.id !== id
        });

        this.setState({
            ninjas : ninjas
        });
    }
    render() {
        return (
            <div className="App">
                <h1>My first react app</h1>
                <p>test</p>
                <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja }/>
                <AddNinja addNinja={ this.addNinja } />
            </div>
        );
    }
}

export default App;

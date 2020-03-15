import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={Contact}/>
                <Route path='/contact' component={About}/>
            </div>
        </BrowserRouter>
    );
}

export default App;

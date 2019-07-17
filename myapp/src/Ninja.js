import React, { Component } from 'react';


class Ninja extends Component {
    render() {
        // console.log(this);
        let {ninjas} = this.props;
        
        let ninja_list = ninjas.map((ninja) => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                </div>
            )
        })
        return (
            <div className='ninja-list'>
                {ninja_list}
            </div>
        )
    }
}

export default Ninja;
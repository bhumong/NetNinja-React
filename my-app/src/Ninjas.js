import React, { Component } from 'react'

class Ninjas extends Component {
    render() {
        let ninjas = this.props.ninjas;
        let ninjaList = ninjas.map((ninja) => {
            return (
                <div className="ninja" key={ ninja.id }>
                    <div>name : { ninja.name }</div>
                    <div>age : { ninja.age }</div>
                    <div>belt : { ninja.belt }</div>
                </div>
            )
        })
        return (
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
    }
}

export default Ninjas
import React, { Component } from 'react'

class Ninjas extends Component {
    render() {
        console.log(this.props);
        let { name: nama, age, belt} = this.props
        return (
            <div className="ninja">
                <div>name : { nama }</div>
                <div>age : { age }</div>
                <div>belt : { belt }</div>
            </div>
        )
    }
}

export default Ninjas
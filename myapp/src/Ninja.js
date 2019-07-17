import React from 'react';


const Ninja = (props) => {
    // console.log(this);
    let {ninjas} = props;
    
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

export default Ninja;
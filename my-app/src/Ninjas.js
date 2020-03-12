import React from 'react'

const Ninjas = ({ ninjas }) => {

    return (
        <div className="ninja-list">
            {
                ninjas.map((ninja) => {
                    return (!(ninja.age >= 30)) ? null : (
                        <div className="ninja" key={ninja.id}>
                            <div>name : {ninja.name}</div>
                            <div>age : {ninja.age}</div>
                            <div>belt : {ninja.belt}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Ninjas
import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {

    return (
        <div className="ninja-list">
            {
                ninjas.map((ninja) => {
                    return (!(ninja.age >= 1)) ? null : (
                        <div className="ninja" key={ninja.id}>
                            <div>name : {ninja.name}</div>
                            <div>age : {ninja.age}</div>
                            <div>belt : {ninja.belt}</div>
                            <button onClick={() => {deleteNinja(ninja.id)} }>Delete Ninja</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Ninjas
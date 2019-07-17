import React from 'react';


const Ninja = (props) => {
    // console.log(this);
    let {ninjas} = props;
    

    /**
     * @way_1
     */
    // let ninja_list = ninjas.map((ninja) => {
    //     if (ninja.age > 25) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div>
    //         );
    //     } else {
    //         return null;
    //     }
    // })


     /**
      * @way_2
      */
    const ninja_list = ninjas.map((ninja) => {
        return (ninja.age > 25) ? 
        (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        ) : null;
    });
    return (
        <div className='ninja-list'>
            {ninja_list}
        </div>
    )



    /**
     * @way_3
     */
    // return (
    //     <div className='ninja-list'>
    //         {
    //             ninjas.map((ninja) => {
    //                 return (ninja.age > 25) ? 
    //                 (
    //                     <div className="ninja" key={ninja.id}>
    //                         <div>Name: {ninja.name}</div>
    //                         <div>Age: {ninja.age}</div>
    //                         <div>Belt: {ninja.belt}</div>
    //                     </div>
    //                 ) : null;
    //             })
    //         }
    //     </div>
    // )

}

export default Ninja;
import React from 'react';

const Rainbow = (WrappedComponent) => {
    let colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellew'];
    let randomColor = colours[Math.floor(Math.random() * 5)];
    let className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;
import React from 'react';

const validation = (props) => {
    let message = null;

    if (props.textLength <= 5) {
        message = (
            <p>Text too short</p>
        );
    } else {
        message = (<p>Text long enough</p>);
    }
    return (
        <div>{message}</div>
    );
};

export default validation;
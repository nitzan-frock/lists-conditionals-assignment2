import React from 'react';

const Validation = (props) => {
    let message = 'Text too short.';

    if (props.textLength > 4) {
        message = 'Text long enough.';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default Validation;
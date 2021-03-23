import React from 'react';

const button = (props) => {
    const classes = ['btn'];
    const {type, onButtonPress, children} = props;

    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
        classes.push('btn--' + type);

    return (
        <button
            type={type}
            className={classes.join(' ')}
            onClick={onButtonPress}
        >
            {children}
        </button>
    );
}

export default button;
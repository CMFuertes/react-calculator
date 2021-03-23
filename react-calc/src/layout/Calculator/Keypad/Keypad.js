import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';

const keypad = (props) => {
    const {onButtonPress} = props;

    return (
        <section className="keypad">
            <KeypadRow>
                <Button type="primary" onButtonPress={onButtonPress}>C</Button>
                <Button type="primary" onButtonPress={onButtonPress}>&larr;</Button>
                <Button type="operator" onButtonPress={onButtonPress}>%</Button>
                <Button type="operator" onButtonPress={onButtonPress}>/</Button>
            </KeypadRow>

            <KeypadRow>
                <Button type="button" onButtonPress={onButtonPress}>7</Button>
                <Button type="button" onButtonPress={onButtonPress}>8</Button>
                <Button type="button" onButtonPress={onButtonPress}>9</Button>
                <Button type="operator" onButtonPress={onButtonPress}>*</Button>
            </KeypadRow>

            <KeypadRow>
                <Button type="button" onButtonPress={onButtonPress}>4</Button>
                <Button type="button" onButtonPress={onButtonPress}>5</Button>
                <Button type="button" onButtonPress={onButtonPress}>6</Button>
                <Button type="operator" onButtonPress={onButtonPress}>-</Button>
            </KeypadRow>

            <KeypadRow>
                <Button type="button" onButtonPress={onButtonPress}>1</Button>
                <Button type="button" onButtonPress={onButtonPress}>2</Button>
                <Button type="button" onButtonPress={onButtonPress}>3</Button>
                <Button type="operator" onButtonPress={onButtonPress}>+</Button>
            </KeypadRow>

            <KeypadRow>
                <Button type="button" onButtonPress={onButtonPress}>0</Button>
                <Button type="button" onButtonPress={onButtonPress}>.</Button>
                <Button type="large" onButtonPress={onButtonPress}>=</Button>
            </KeypadRow>
        </section>
    );
}
export default keypad;
import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';

const keypad = (props) => (
    <section className="keypad">
        {props.children}
        <KeypadRow />
        <Button />
        <Button />
        <Button />
        <Button />
        <KeypadRow />
        <Button />
        <Button />
        <Button />
        <Button />
        <KeypadRow />
        <Button />
        <Button />
        <Button />
        <Button />
        <KeypadRow />
        <Button />
        <Button />
        <Button />
        <Button />
        <KeypadRow />
        <Button />
        <Button />
        <Button />
        <Button />
    </section>
);

export default keypad;

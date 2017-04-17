import React, { Component } from 'react';

import Button from '../components/button'
import SumField from '../components/sum_field'

export default class App extends Component {
    render() {
        return (
            <div className="input-group">
                <SumField />
                <Button value="1" />
                <Button value="2" />
                <Button value="3" />
                <Button value="4" />
                <Button value="5" />
                <Button value="6" />
                <Button value="7" />
                <Button value="8" />
                <Button value="9" />
                <Button value="x" />
                <Button value="/" />
                <Button value="+" />
                <Button value="-" />
                <Button value="=" />
                <Button value="C" />
            </div>
        );
    }
}

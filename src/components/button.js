import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateSum} from '../actions/index';

class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {value: this.props.value};
    }

    handelClick(){
        this.props.updateSum(this.props.value);
    }

    render() {
        return <button
            className="col-sm-4"
            onClick={this.handelClick.bind(this)}>
            {this.state.value}
        </button>;
    }

}

export default connect(null, {updateSum})(Button);
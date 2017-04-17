import React, {Component} from 'react';
import {connect} from 'react-redux'

class SumField extends Component {
    //constructor(props) {
    //    super(props);
    //
    //    this.state = {value: 0}
    //}

    render() {
        return <div>{this.props.sum}</div>;
    }
}
function mapStateToProps(state){
    return {
        sum: state.sum
    };
}

export default connect(mapStateToProps)(SumField);
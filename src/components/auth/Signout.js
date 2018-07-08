import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import {Spin} from 'antd';
class Signout extends Component {
  componentDidMount() {
    this.props.signout();
    this.props.history.push('/signin');
  }
  render() {
    return (
      <div >
        <Spin size="large" />
      </div>

    );
  }
}

export default connect(null, actions)(Signout);

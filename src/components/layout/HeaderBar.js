import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './layout.less';
import {toUpper} from 'lodash';

import {Layout, Menu, Dropdown, Button, Icon, Divider} from 'antd';
const {Header} = Layout;

class HeaderBar extends Component {
  renderLinks() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/home"><Icon type="setting" /> Profile Settings</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signout"><Icon type="logout" /> Sign Out</Link>
        </Menu.Item>
      </Menu>
    );

    if (this.props.authenticated) {
      return (
        <Dropdown overlay={menu} >
          <a>
            <Icon type="user" />
              Welcome {toUpper(this.props.authenticated.username)}
            <Icon type="down" />
          </a>
        </Dropdown>
      );
    }
  }

  render() {
    return (
      <Header className="header" >
        {this.renderLinks()}
      </Header>
    );
  }
}

function mapStateToProps(state) {

  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(HeaderBar);

import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './layout.less';

import {Layout, Menu, Icon, Divider} from 'antd';
const {Sider} = Layout;
class SideBar extends Component {


  render() {

    return (
      <Fragment>
        <Sider className="sider">
          <Divider><Icon type="notification" className="logo" />
            <b>Hemanths</b>
          </Divider>
          <Menu theme="light" mode="inline" >
            <Menu.Item>
              <Link to="/home">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sites">
                <Icon type="global" />
                <span className="nav-text">Menu 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item disabled>
              <Icon type="copy" />
              <span className="nav-text">Menu 3</span>
            </Menu.Item>
            <Menu.Item disabled>
              <Icon type="code" />
              <span className="nav-text">Menu 4</span>
            </Menu.Item>
            <Menu.Item disabled>
              <Icon type="hourglass" />
              <span className="nav-text">Menu 5</span>
            </Menu.Item>
            <Menu.Item disabled>
              <Icon type="export" />
              <span className="nav-text">Menu 6</span>
            </Menu.Item>
            <Menu.Item disabled>
              <Icon type="info" />
              <span className="nav-text">Menu 7</span>
            </Menu.Item>
            <Menu.Item disabled>
              <Icon type="book" />
              <span className="nav-text">Menu 8</span>
            </Menu.Item>
            <Menu.Item disabled>
              <Icon type="tool" />
              <span className="nav-text">Menu 9</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(SideBar);

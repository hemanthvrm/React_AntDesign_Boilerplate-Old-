import React from 'react';
import {Link} from 'react-router-dom';
import HeaderBar from './layout/HeaderBar';
import SideBar from './layout/SideBar';
import NavBar from './layout/NavBar';

import './app.less';

import {Layout} from 'antd';
const {Footer, Content} = Layout;

export default ({children}) => {
  return (
    <Layout>
      <SideBar />
      <Layout className="contentlayout" >
        <HeaderBar />
        <Content className="contentstyle" >
          <NavBar />
          { children }
        </Content>
        <Footer className="footer" >
        </Footer>
      </Layout>
    </Layout>

  );
};

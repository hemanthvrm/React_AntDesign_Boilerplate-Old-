import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Breadcrumb, Icon} from 'antd';
import _ from 'lodash';
class NavBar extends Component {

  renderBreadcrumbs() {

    const breadcrumbNameMap = url =>{
      let nameIndex = url.lastIndexOf("/");
      return _.capitalize(url.slice(nameIndex + 1));
    }

    const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
    const breadcrumbItemsList = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      if(url == '/home'){
        return
      }else{
        return (
          <Breadcrumb.Item key={url}  href={url}>
            {breadcrumbNameMap(url)}
          </Breadcrumb.Item>
        );

      }
    });

    const breadcrumbItems = [(
      <Breadcrumb.Item key="home"  href="/home" >
          <Icon type="home" /> Home
      </Breadcrumb.Item>
    )].concat(breadcrumbItemsList);


    return(
      <Fragment>
          {breadcrumbItems}
      </Fragment>
    );
  }

render() {
    return (
        <Breadcrumb className="breadcrumb" >
          
            {this.renderBreadcrumbs()}
        </Breadcrumb>
    );
  }
}


export default withRouter(NavBar);

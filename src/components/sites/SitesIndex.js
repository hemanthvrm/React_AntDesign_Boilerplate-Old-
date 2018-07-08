import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import requireAuth from '../requireAuth';
import './sites.less';

import Sites from '../overview/Sites';
import {Card, Row, Col, Button, Breadcrumb, Icon} from 'antd';

class sitesIn extends Component {


  render() {
    return (
      <Fragment>
        <Card title="Sites List" className="sitescard" bordered={false} >
          <Row>
            <Col >
              <Sites size={480} />
            </Col>
          </Row>
        </Card>
      </Fragment>
    );
  }
};

export default sitesIn;

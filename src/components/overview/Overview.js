import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import requireAuth from '../requireAuth';
import './overview.less';

import D3chart from './D3';
import Sites from './Sites';
import {Card, Row, Col, Button} from 'antd';

class Overview extends Component {


  render() {
    return (
      <Fragment>
        <Card title="Pie Chart" className="piechartcard" bordered={false} >
          <Row>
            <Col span={6} offset={6}><D3chart /></Col>
          </Row>
        </Card>
        <Card title="Sites List" className="sitescard" bordered={false} >
      
          <br />
          <br />
          <Row>
            <Col >
              <Sites size={240} />
            </Col>
          </Row>

        </Card>
      </Fragment>
    );
  }
}

//export default Overview; //temp
export default requireAuth(Overview);

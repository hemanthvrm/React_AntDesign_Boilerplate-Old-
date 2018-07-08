import _ from "lodash";
import React, {Component} from 'react';
import requireAuth from '../requireAuth';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSites } from "../../actions";
import './overview.less';


import {Table, Tag, Spin} from 'antd';

const columns = [{
  title: '#',
  dataIndex: 'index',
  width: 150
},{
  title: 'Site',
  dataIndex: 'site',
  width: 250
}, {
  title: 'Corridor',
  dataIndex: 'corridor',
  width: 250
}, {
  title: 'Status',
  dataIndex: 'status',
  width: 250
}, {
  title: 'Report',
  dataIndex: 'report',
  width: 250
}, {
  title: 'Details',
  dataIndex: 'details',
  width: 250
}];


class Sites extends Component {

  componentDidMount() {
     this.props.fetchSites();
   }

  renderSites(){
    let siteArr = _.values(this.props.sites);
    return _.map(siteArr, (site, index) =>  {
      return (
        {
          key: site.sitename,
          index: index + 1,
          site: site.sitename,
          corridor: site.corridor,
          status: <Tag color="green">{site.status}</Tag>,
          report: <Tag color="blue">Quick View</Tag>,
          details: <Link to={`/sites/${site.sitename}`}><Tag color="teal">Details</Tag></Link>
        }
      );
    });

  }



  render() {
    if(_.isEmpty(this.props.sites)){
      return (
        <div  className="spinner"><Spin  size="large"  /></div>
      );
    }else{
      return (
        <Table columns={columns} dataSource={this.renderSites()} pagination={{ pageSize: 20 }} scroll={{ y: this.props.size }} />

      );

    }

  }
}


function mapStateToProps(state) {
  
  return { sites: state.sites };
}

export default connect(mapStateToProps, { fetchSites })(Sites);

//export default Sites; //temp
//export default requireAuth(Sites);

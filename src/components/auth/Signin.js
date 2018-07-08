import React, {Component, Fragment} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import './auth.less';
import {Form, Card, Col, Row, Button, Icon, Tag, Alert} from 'antd';
import {
  TextField
} from 'redux-form-antd';
const FormItem = Form.Item;

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/home');

    });
  };

  renderError(){
    if(this.props.errorMessage){
      return(
        <Alert type="error" message={this.props.errorMessage}  />
      );
    }
  }

  render() {

    const { handleSubmit } = this.props;
    return (
           <div className="signinstyle">
             <Card className="loginCard" >
               <h1><Icon type="notification"  /> Hemanths </h1>
                 <Card title="Log-in to your account" bordered>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                      <Field prefix={<Icon type="user"  />} name="username" type="text" component={TextField} placeholder="username"/>
                      <Field prefix={<Icon type="lock"  />} name="password" type="password" component={TextField} placeholder="password"/>
                     <Button  type="primary" htmlType="submit" >Log In</Button>
                    </form>
                    <br />
                    {this.renderError()}
               </Card>
             </Card>
           </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
}


function mapStateToProps(state) {

  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({  validate, form: 'signin' })
)(Signin);

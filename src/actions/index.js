import axios from 'axios';
import {
          AUTH_USER,
          AUTH_ERROR
        } from './types';

//Replace with auth url
const AUTH_URL = "#############################";


var API_ACCESS = localStorage.getItem('token');




//Signin and signout action
export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      AUTH_URL,
      formProps
    );

    let username = response.data.username.slice(5)

    dispatch({
                 type: AUTH_USER,
                 payload: {
                             'token' : response.data.access_token,

                          }
               });


    localStorage.setItem('token', response.data.access_token);

    callback();

  } catch (e) {

    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};



export const signout = ( callback) => dispatch =>{
  localStorage.removeItem('token');
  dispatch({
              type: AUTH_ERROR,
              payload: ''
           });
  dispatch ({
              type: AUTH_USER,
              payload: ''
          });

};

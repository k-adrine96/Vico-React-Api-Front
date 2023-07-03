import React, {useState} from 'react';
import {lastIndexOf, substr} from '@7urtle/lambda';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import { ConfigProvider } from 'antd';
import { theme } from "./styles/mainTheme";

import './App.css';

const getBasename = path => substr(lastIndexOf('/')(path))(0)(path);
const setToken = userToken => sessionStorage.setItem('token', JSON.stringify(userToken));
// const setClientID = userToken => sessionStorage.setItem('clientID', JSON.stringify(clientId));

const getToken = () => {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken;
}

const App = () => {
  // const [token, setToken] = useState();
  const token = getToken();
  // console.log(token, 'token');

  return (
    <ConfigProvider theme={theme}>
      <Router basename={getBasename(window.location.pathname)}>
        <Routes token={token} setToken={setToken} />
      </Router>
    </ConfigProvider>
  );
};

export default App;
import React from 'react';
import { Route, Routes as Router, useNavigate } from 'react-router-dom';
import LoginPage from './pages/login';
import ProjectListPage from './pages/projectListPage';
import Project from './pages/projectPage';

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const Routes = ({ setToken, token }) => {
  // const navigate = useNavigate();
  
  if(!token) {
  //   navigate("/");
    return <LoginPage setToken={setToken} />
  }

  return (
    <Router>
      <Route path='/' element={<LoginPage setToken={setToken}/>} />
      <Route path='/projects' element={<ProjectListPage token={token}/>} />
      <Route path='/projects/:id' element={<Project />} />
      <Route path="*" element={<div> Page Not Found</div>}/>
    </Router>
  )
};

export default Routes;
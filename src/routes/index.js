import { Route } from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute';
import React from 'react';
import Home from '../screens/HomePage/Home';
import Login from '../screens/admin/Login';
import ProjectForm from '../screens/admin/ProjectForm';
import Dashboard  from '../screens/admin/Dashboard';

export default () => [
  <Route key="home" exact path="/" component={Home} />,
  <Route key="login" exact path="/login" component={Login} />,
  <PrivateRoute key="dashboard" exact path="/dashboard" component={Dashboard} />,
  <PrivateRoute key="projectform" exact path="/projectform" component={ProjectForm} />,
];
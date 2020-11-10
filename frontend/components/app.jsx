// front end routes go here!
import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import CategoryShow from './category/category_show_container'
 import Footer from './footer/footer'
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './home/home';
import intermediary from './session/intermediary'
import ProfileComponent from './profile/profile'
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <Route exact path="/" component={Home} />
    <Route path="/categories/:categoryId" component={CategoryShow}/>
    <Route path="/intermediary" component={intermediary} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    {/* <ProtectedRoute path="/" component={} /> */}
    <ProtectedRoute path="/users/:userId" component={ProfileComponent} />
    <Footer />
  </div>
);

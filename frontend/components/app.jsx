// front end routes go here!
import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import CategoryShow from './category/category_show_container'
import Footer from './footer/footer'
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './home/home';
import intermediary from './session/intermediary';
import ProfileComponent from './profile/profile_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import QuestForm from './quest/create_quest_form_container';
import QuestPage from './quest/quest_page_container';
import EditQuest from './quest/edit_quest_container';
import CancelQuest from './quest/cancel_quest_container';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <Route exact path="/" component={Home} />
    <Route path="/categories/:categoryId" component={CategoryShow}/>
    <Route path="/intermediary" component={intermediary} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/quest" component={QuestForm} />
    <ProtectedRoute path='/quests' component={QuestPage} />
    <ProtectedRoute path='/edit/:questId' component={EditQuest} />
    <ProtectedRoute path="/users/:userId" component={ProfileComponent} />
    <ProtectedRoute path="/delete/:questId" component={CancelQuest} />
    <Footer />
  </div>
);

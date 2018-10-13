import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../modules/pages/home/home';
import Warning from '../modules/utils/warning/warning';

import GroupList from '../modules/group/list/groupList';
import GroupView from '../modules/group/view/groupView';
import GroupForm from '../modules/group/form/groupForm';

import QuizList from '../modules/quiz/list/quizList';
import QuizForm from '../modules/quiz/form/quizForm';

import UserRegisterForm from '../modules/user/register/userRegisterForm';
import UserLoginForm from '../modules/user/login/userLoginForm';
import UserList from '../modules/user/list/userList';
import UserProfile from '../modules/user/profile/userProfile';
import UserProfileEdit from '../modules/user/profile/form/userProfileEdit';
import About from '../modules/pages/about';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/error" component={Warning} />

    <Route exact path="/groups" component={GroupList} />
    <Route exact path="/group/:groupId" component={GroupView} />
    <Route exact path="/group/edit/:groupId" component={GroupForm} />

    <Route exact path="/quiz" component={QuizList} />
    <Route exact path="/quiz/create" component={QuizForm} />

    <Route exact path="/users" component={UserList} />
    <Route exact path="/user/login" component={UserLoginForm} />
    <Route exact path="/user/register" component={UserRegisterForm} />
    <Route exact path="/user/edit/:userId" component={UserProfileEdit} />
    <Route exact path="/user/:userId" component={UserProfile} />

    <Route exact path="/about" component={About} />
  </Switch>
);

export default Routes;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import MyComponent from './rest/MyComponent';
import NotFound from './rest/NotFound';
import ListGroup from './rest/group/ListGroup';
import Search from './rest/Search';
import Login from './rest/Login';
import Notifications from './rest/Notifications';
import Home from './rest/Home';
import NewEmoji from './rest/emoji/NewEmoji';
import NewGroup from './rest/group/NewGroup';

const MyRoutes = ({ match }) => {
  console.log(match)
  console.log(match.url)
  return(
  <Router>
  <div>
    <MyComponent />
    <Switch>
      <Route path={match.url+"/search"} component={Search} />
      <Route path={match.url+"/login"} component={Login} />
      <Route path={match.url+"/group/new"} component={NewGroup} />
      <Route path={match.url+"/emoji/new"} component={NewEmoji} />
      <Route path={match.url+"/notifications"} component={Notifications} />
      <Route exact path={match.url} component={Home} />
      {/* <Route exact path="/search" component={Search} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/group/new" component={NewGroup} />
      <Route exact path="/emoji/new" component={NewEmoji} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="" component={Home} /> */}
      <Route component={NotFound} />
    </Switch>
  </div>
</Router>
  )
}

const BasicExample = () => (

  //   <Router>
  //   <div>
  //     <MyComponent />
  //     <Switch>
  //       <Route path="/react-app/search" component={Search} />
  //       <Route path="/react-app/login" component={Login} />
  //       <Route path="/react-app/group/new" component={NewGroup} />
  //       <Route path="/react-app/emoji/new" component={NewEmoji} />
  //       <Route path="/react-app/notifications" component={Notifications} />
  //       {/* <Route exact path="/react-app" component={Home} /> */}
  //       {/* <Route exact path="/search" component={Search} />
  //       <Route exact path="/login" component={Login} />
  //       <Route exact path="/group/new" component={NewGroup} />
  //       <Route exact path="/emoji/new" component={NewEmoji} />
  //       <Route exact path="/notifications" component={Notifications} />
  //       <Route exact path="" component={Home} /> */}
  //       <Route component={NotFound} />
  //     </Switch>
  //   </div>
  // </Router>
  <Router>
    <Switch>
      <Route path="/react-app" component={MyRoutes} />
      <Route component={MyRoutes} />
    </Switch>
  </Router>
  // <MyRoutes />
)
export default BasicExample
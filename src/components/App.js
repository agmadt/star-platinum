import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Grid, Divider, Progress } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

import Home from './Home/Home';
import Sidebar from './Sidebar/Sidebar';
import Detail from './Detail/Detail';
import Tagged from './Tagged/Tagged';
import AskQuestion from './AskQuestion/AskQuestion';
import Login from './Login/Login';
import Profile from './Profile/Profile';

@inject('authStore')
@observer
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Grid container>
            <Grid.Column width={3}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={1}>
              <Divider vertical />
            </Grid.Column>
            <Grid.Column width={12}>
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/questions/ask" render={ (props) => this.props.authStore.user.email ? (<AskQuestion />) : <Redirect to="/" /> } />
                <Route exact path="/questions/tagged/:tag" component={ Tagged } />
                <Route exact path="/questions/show/:id" component={ Detail } />

                <Route exact path="/login" component={ Login } />
                <Route exact path="/profile" component={ Profile } />
              </Switch>
            </Grid.Column>
          </Grid>
        </Router>
        <style jsx='true'>{`
          body { background: #F0F0F0; padding: 20px 0 0 0; }
          .ui.progress { margin: 0; position: fixed; top: 0; left: 0; right: 0; background: transparent; z-index: 9999; }
          .ui.progress .bar { background: #2185d0; border-radius: 0; height: 1px; }
        `}</style>
      </React.Fragment>
    );
  }
}

export default App;

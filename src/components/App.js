import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Divider } from 'semantic-ui-react';

import Home from './Home/Home';
import Sidebar from './Sidebar/Sidebar';
import Detail from './Detail/Detail';
import Tagged from './Tagged/Tagged';
import AskQuestion from './AskQuestion/AskQuestion';

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
                <Route exact path="/questions/ask" component={ AskQuestion } />
                <Route exact path="/questions/tagged/:tag" component={ Tagged } />
                <Route exact path="/questions/:id/:slug" component={ Detail } />
              </Switch>
            </Grid.Column>
          </Grid>
        </Router>
        <style jsx='true'>{`
          body { background: #F0F0F0; padding: 20px 0 0 0; }
        `}</style>
      </React.Fragment>
    );
  }
}

export default App;

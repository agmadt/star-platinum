import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('authStore')
@withRouter
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(ev) {
    this.props.authStore.logout();
    this.props.history.push('/questions/1/lorem')
  }

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Row>
            <Grid.Column width={12}><h1>Logout here</h1></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Button onClick={this.handleLogout}>Logout</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <style jsx="true">{`
          .ui.stacked.segment .content, .ui.stacked.segment .title { cursor: pointer; }
          .ui.stacked.segment .content, .ui.stacked.segment .tags { margin-top: 10px; }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Profile;
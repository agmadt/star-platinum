import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('authStore')
@withRouter
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const target = ev.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value 
    });
  }

  handleSubmit(ev) {
    this.props.authStore.setEmail(this.state.email);
    this.props.history.push('/questions/1/lorem')
  }

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Row>
            <Grid.Column width={12}><h1>Login</h1></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder='Email' onChange={this.handleChange} name="email" value={this.state.email} />
                </Form.Field>
                <Button onClick={this.handleSubmit}>Login</Button>
              </Form>
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

export default Login;
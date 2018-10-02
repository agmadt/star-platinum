import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('commonStore', 'authStore', 'questionStore')
@observer
@withRouter
class AskQuestion extends Component {

    constructor(props) {
      super(props);

      this.state = {
        title: '',
        content: '',
        user: this.props.authStore.user.email
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
      const name = ev.target.name;
      const value = ev.target.value;

      this.setState({
        [name]: value
      })
    }

    handleSubmit(ev) {
      this.props.questionStore.postQuestion(this.state);

      this.setState({
        title: '',
        content: ''
      })

      this.props.history.push('/');
    }

    render() {
        return (
          <React.Fragment>
            <Grid container>
              <Grid.Row>
                <Grid.Column width={12}><h1>Ask a Question</h1></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <label>Title</label>
                      <input placeholder='Title' name="title" onChange={this.handleChange} value={this.state.title} />
                    </Form.Field>
                    <Form.Field>
                      <label>Body</label>
                      <textarea name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                    </Form.Field>
                    <Button type="submit">Post Question</Button>
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

export default AskQuestion;
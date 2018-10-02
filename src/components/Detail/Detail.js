import React, { Component } from 'react';
import { Grid, Button, Segment, Label, Form } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import moment from 'moment';

@inject('questionStore', 'answerStore', 'authStore')
@observer
class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: '',
      user: this.props.authStore.user.email
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    const target = ev.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.answerStore.postAnswer(this.props.match.params.id, this.state);
    this.setState({
      content: ''
    });
  }

  componentDidMount() {
    this.props.questionStore.loadQuestion(this.props.match.params.id);
    this.props.answerStore.loadAnswers(this.props.match.params.id);
  }

  render() {
    const question = this.props.questionStore.question;
      return (
        <React.Fragment>
          <Grid container>
            <Grid.Row>
              <Grid.Column width={12}><h1>{ question.title }</h1></Grid.Column>
              <Grid.Column width={4}><Button fluid content='Ask Question' primary as={Link} to="/questions/ask" /></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                {(
                    <Segment color='red'>
                      <div className="content">
                        { question.content }
                      </div>
                      <div className="footer">
                        <Label as='a' color='teal'>
                          { question.user }
                          <Label.Detail>{ moment(question.created_at, 'YYYY-MM-DD').fromNow() }</Label.Detail>
                        </Label>
                      </div>
                    </Segment>
                  )}
                { this.props.answerStore.answers.map(item => (
                  <Segment key={item.id}>
                    <div className="content">{ item.content }</div>
                    <div className="footer">
                      <Label as='a' color='teal'>
                        { item.user }
                        <Label.Detail>{ moment(question.created_at, 'YYYY-MM-DD').fromNow() }</Label.Detail>
                      </Label>
                    </div>
                  </Segment>
                )) }
                <Segment color='blue' stacked>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <label>Your Answer</label>
                      <textarea onChange={this.handleChange} name="content" value={this.state.content}></textarea>
                    </Form.Field>
                    <Button>Post Answer</Button>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <style jsx="true">{`
            .ui.segment .tags, .ui.segment .footer { margin-top: 10px; }
          `}</style>
        </React.Fragment>
      );
  }
}

export default withRouter(Detail);
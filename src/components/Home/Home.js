import React, { Component } from 'react';
import { Grid, Button, Segment, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import axios from 'axios';

@inject('commonStore', 'questionStore')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }

  }

  changeToDetailPage = e => ev => {
    this.props.history.push({
      pathname: '/questions/' + e
    })
  }

  componentWillMount() {
    this.props.commonStore.setMessage('')

    this.props.questionStore.loadQuestions();
  }

  render() {
    const { message } = this.props.commonStore;
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Row>
            <Grid.Column width={12}><h1>All Questions</h1></Grid.Column>
            <Grid.Column width={4}><Button fluid content='Ask Question' primary as={Link} to="/questions/ask" /></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              { message ? (<Segment>{message}</Segment>) : ''}
              { this.props.questionStore.questions.map(item => (
                  <Segment stacked key={item.id}>
                    <div className="title" onClick={ this.changeToDetailPage(item.id) }>{ item.title }</div>
                    <div className="content" onClick={ this.changeToDetailPage(item.id) }>{ item.content }</div>
                  </Segment>
                  ))
                }
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

import React, { Component } from 'react';
import { Grid, Button, Segment, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.changeToDetailPage = this.changeToDetailPage.bind(this);
  }

  changeToDetailPage(ev) {
    this.props.history.push({
      pathname: '/questions/1/lorem'
    })
  }

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Row>
            <Grid.Column width={12}><h1>All Questions</h1></Grid.Column>
            <Grid.Column width={4}><Button fluid content='Ask Question' primary as={Link} to="/questions/ask" /></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment stacked>
                <div className="title" onClick={ this.changeToDetailPage }>Lorem</div>
              <div className="content" onClick={ this.changeToDetailPage }>Lorem ipsum do ut ut incididunt dolore non veniam in elit amet aute aute ut amet velit non nulla consequat ad pariatur dolore cupidatat laboris reprehenderit veniam sunt nisi ad qui officia quis magna cillum deserunt non ea tempor dolor esse.</div>
                <div className="tags">
                  <Label as={Link} to="/questions/tagged/insert">Insert</Label>
                  <Label as={Link} to="/questions/tagged/the">The</Label>
                  <Label as={Link} to="/questions/tagged/question">Question</Label>
                  <Label as={Link} to="/questions/tagged/tag">Tag</Label>
                  <Label as={Link} to="/questions/tagged/here">Here</Label>
                </div>
              </Segment>
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

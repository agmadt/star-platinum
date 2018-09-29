import React, { Component } from 'react';
import { Grid, Button, Segment, Label, Form } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Detail extends Component {

  render() {
      return (
        <React.Fragment>
          <Grid container>
            <Grid.Row>
              <Grid.Column width={12}><h1>Question Title</h1></Grid.Column>
              <Grid.Column width={4}><Button fluid content='Ask Question' primary as={Link} to="/questions/ask" /></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Segment color='red'>
                  <div className="content">
                    Id dolor dolore dolore pariatur aliqua sed eiusmod dolore in ullamco enim commodo proident ullamco culpa do eiusmod reprehenderit dolore ea velit dolor occaecat nostrud anim veniam dolor exercitation velit fugiat eiusmod dolor nisi consectetur sint ad irure reprehenderit esse in sed dolore minim voluptate sed velit incididunt consectetur est enim aliquip culpa minim magna sint velit veniam consequat sint ex aliqua nisi fugiat nulla consectetur eu magna ut dolor in proident veniam qui in sint deserunt ut amet sint mollit commodo consequat ad quis ex aliquip deserunt fugiat veniam quis nostrud quis fugiat ut in labore ea mollit consectetur minim ea anim amet nisi eu nulla nostrud non incididunt ex cillum dolore esse magna laborum aute nulla magna dolor velit dolor pariatur nostrud fugiat veniam proident dolore ullamco sed dolor proident do do dolor minim pariatur velit excepteur ut ea nostrud irure laborum amet fugiat occaecat anim labore in aute pariatur enim in id consectetur labore minim exercitation consectetur laboris non sunt nulla proident enim aliqua irure irure esse anim consectetur sit ut sunt excepteur voluptate elit irure ea voluptate sunt nulla dolor eu adipisicing reprehenderit consectetur ut culpa mollit irure ut magna aliqua duis sit ex proident quis tempor cupidatat tempor ut nisi et sed excepteur et fugiat in ullamco aute exercitation incididunt voluptate commodo in incididunt dolore.
                  </div>
                  <div className="tags">
                    <Label as={Link} to="/questions/tagged/insert">Insert</Label>
                    <Label as={Link} to="/questions/tagged/the">The</Label>
                    <Label as={Link} to="/questions/tagged/question">Question</Label>
                    <Label as={Link} to="/questions/tagged/tag">Tag</Label>
                    <Label as={Link} to="/questions/tagged/here">Here</Label>
                  </div>
                  <div className="footer">
                    <Label as='a' color='teal'>
                      PersonWhoAsked@email.com
                      <Label.Detail>27 mins ago</Label.Detail>
                    </Label>
                  </div>
                </Segment>
                <Segment>
                  <div className="content">Commodo sint ullamco mollit anim et pariatur esse cillum est laborum ad fugiat ut et nostrud tempor dolore laborum consequat est consequat dolor.</div>
                  <div className="footer">
                    <Label as='a' color='teal'>
                      PersonWhoAsked@email.com
                      <Label.Detail>27 mins ago</Label.Detail>
                    </Label>
                  </div>
                </Segment>
                <Segment>
                  <div className="content">Commodo sint ullamco mollit anim et pariatur esse cillum est laborum ad fugiat ut et nostrud tempor dolore laborum consequat est consequat dolor.</div>
                  <div className="footer">
                    <Label as='a' color='teal'>
                      PersonWhoAsked@email.com
                      <Label.Detail>27 mins ago</Label.Detail>
                    </Label>
                  </div>
                </Segment>
                <Segment>
                  <div className="content">Commodo sint ullamco mollit anim et pariatur esse cillum est laborum ad fugiat ut et nostrud tempor dolore laborum consequat est consequat dolor.</div>
                  <div className="footer">
                    <Label as='a' color='teal'>
                      PersonWhoAsked@email.com
                      <Label.Detail>27 mins ago</Label.Detail>
                    </Label>
                  </div>
                </Segment>
                <Segment>
                  <div className="content">Commodo sint ullamco mollit anim et pariatur esse cillum est laborum ad fugiat ut et nostrud tempor dolore laborum consequat est consequat dolor.</div>
                  <div className="footer">
                    <Label as='a' color='teal'>
                      PersonWhoAsked@email.com
                      <Label.Detail>27 mins ago</Label.Detail>
                    </Label>
                  </div>
                </Segment>
                <Segment color='blue' stacked>
                  <Form>
                    <Form.Field>
                      <label>Title</label>
                      <input placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                      <label>Body</label>
                      <textarea></textarea>
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
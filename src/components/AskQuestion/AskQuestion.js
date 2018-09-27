import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class AskQuestion extends Component {
    render() {
        return (
          <React.Fragment>
            <Grid container>
              <Grid.Row>
                <Grid.Column width={12}><h1>Ask a Question</h1></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Form>
                    <Form.Field>
                      <label>Title</label>
                      <input placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                      <label>Body</label>
                      <textarea></textarea>
                    </Form.Field>
                    <Button as={Link} to="/">Post Question</Button>
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
import { observable, action } from 'mobx';
import agent from '../agent';

class QuestionStore {

    @observable questions = [];
    @observable question = [];

    @action loadQuestions() {
      return agent.Questions.all()
        .then( (res) => { 
          this.questions = res.data.questions;
        });
    }

    @action loadQuestion(id) {
      return agent.Questions.find(id)
        .then( (res) => {
          this.question = res.data.question
        });
    }

    @action postQuestion(data) {
      return agent.Questions.postQuestion(data)
        .then( (res) => {
          this.questions.unshift(res.data.question)
        })
    }

}

export default new QuestionStore();
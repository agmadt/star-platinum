import { observable, action } from 'mobx';
import agent from '../agent';

class AnswerStore {

    @observable answers = [];
    @observable message = [];

    @action loadAnswers(id) {
      return agent.Answers.findByQuestion(id)
        .then( (res) => { 
          this.answers = res.data.answers;
        });
    }

    @action postAnswer(id, data) {
    	return agent.Answers.postAnswer(id, data)
    		.then( (res) => {
    			this.message = res.data.message
    			this.answers.push(res.data.answer)
    		})
    }

}

export default new AnswerStore();
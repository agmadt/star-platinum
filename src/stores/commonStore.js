import { observable, action } from 'mobx';
import agent from '../agent';

class CommonStore {

    @observable message = '';

    @action setMessage(message) {
        this.message = message;
    }

    @action deleteMessage() {
        this.message = '';
    }

}

export default new CommonStore();
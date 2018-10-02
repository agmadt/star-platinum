import { reaction, observable, action } from 'mobx';

class AuthStore {

    @observable user = {};

    constructor() {
      const localStorage = window.localStorage.getItem('agmadt-star-platinum-user');
      
      if (localStorage) {
        this.user = JSON.parse(localStorage)
      }
    }

    @action setEmail(email) {
        this.user = { email: email };

        window.localStorage.setItem('agmadt-star-platinum-user', JSON.stringify(this.user))
    }

    @action logout() {
        this.user = {};

        window.localStorage.removeItem('agmadt-star-platinum-user')
    }

}

export default new AuthStore();
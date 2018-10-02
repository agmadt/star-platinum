import axios from 'axios';
import authStore from './stores/authStore';

const API_ROOT = 'http://localhost:5000/star-platinum';

const responseBody = res => res.body;

const handleError = err => {
  return err;
}

const request = {
  get: url => {
    return axios
      .get(API_ROOT + url);
  },
  post: (url, body) => {
    return axios
      .post(API_ROOT + url, body);
  }
};

const Questions = {
  all: () => request.get('/questions'),
  find: (id) => request.get('/questions/' + id),
  postQuestion: (data) => request.post('/questions/store', data)
}

const Answers = {
  findByQuestion: (id) => request.get('/questions/' + id + '/answers'),
  postAnswer: (id, data) => request.post('/questions/' + id + '/answers', data)
}

export default { Questions, Answers };
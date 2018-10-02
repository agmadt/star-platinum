import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules/semantic-ui-css/semantic.min.css';
import { Provider } from 'mobx-react';

import commonStore from './stores/commonStore';
import authStore from './stores/authStore';
import questionStore from './stores/questionStore';
import answerStore from './stores/answerStore';

const stores = {
	commonStore,
	authStore,
	questionStore,
	answerStore
};

ReactDOM.render((
	<Provider {...stores}>
		<App />
	</Provider>
), document.getElementById('root'));
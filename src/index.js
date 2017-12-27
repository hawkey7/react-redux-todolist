import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js' 

store.subscribe((dispatch,getState)=>{
	console.log(store.getState())
})

console.log('initial state is ', store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

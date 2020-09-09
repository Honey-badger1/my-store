import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundary';
import StoreService from './services/store-serv';
import StoreServiceContext from './components/store-service-context';
import store from './store';


const storeService=new StoreService(); 
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
    <StoreServiceContext.Provider value={storeService} >
   <Router>
   <App />
   </Router>
    </StoreServiceContext.Provider>


    </ErrorBoundry>
    
   
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

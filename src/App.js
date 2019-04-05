import React, {Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';

import store from './store';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import ChatBot from './components/ChatBot.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="conteudo">
          <Header />
          <Home />
          <ChatBot />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

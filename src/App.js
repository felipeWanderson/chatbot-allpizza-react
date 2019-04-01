import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import ChatBot from './components/ChatBot.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <ChatBot />
        <Footer />
      </div>
    );
  }
}

export default App;

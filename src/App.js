import React, { Component } from 'react';
import './App.css';
import messagesData from './data/messages.json';

import ChatLog from './components/ChatLog';

class App extends Component {
  render() {
    // Customize the code below
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Chat between Vladimir and Estragon</h1>
          </div>
        <main className="App-main">
          <ChatLog messages={messagesData} />
        </main>
      </div>
    );
  }
}
export default App;

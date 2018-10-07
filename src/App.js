import React, { Component } from 'react';
import './App.css';

import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <CommentBox></CommentBox>
        <CommentList></CommentList>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import BookmarkApp from './components/BookmarkApp';
import './css/App.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <BookmarkApp />
      </div>
    );
  }
}

export default App;


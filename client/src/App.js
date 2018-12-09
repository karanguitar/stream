import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import StreamCreate from './components/streams/StreamCreate'
import StreamDelete from './components/streams/StreamDelete'
import StreamEdit from './components/streams/StreamEdit'
import StreamList from './components/streams/StreamList'
import StreamShow from './components/streams/StreamShow'
import Header from './components/navigation/Header'


class App extends Component {
  render() {
    return (
      <div className="App ui container">
        
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={StreamList} exact/>
            <Route path="/streams/new" component={StreamCreate} exact/>
            <Route path="/streams/delete" component={StreamDelete} exact/>
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/show" component={StreamShow} exact/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

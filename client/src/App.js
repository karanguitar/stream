import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import StreamCreate from './components/streams/StreamCreate'
import StreamDelete from './components/streams/StreamDelete'
import StreamEdit from './components/streams/StreamEdit'
import StreamList from './components/streams/StreamList'
import StreamShow from './components/streams/StreamShow'
import Header from './components/navigation/Header'
import history from './history'


class App extends Component {
  render() {
    return (
      <div className="App ui container">
        
        <Router history={history}>
          <div>
            <Header />
            <Switch>
            <Route path="/" component={StreamList} exact/>
            <Route path="/streams/new" component={StreamCreate} exact/>
            <Route path="/streams/delete/:id" component={StreamDelete} exact/>
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/:id" component={StreamShow} exact/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allReducer from './reducer';
import Home from './component/Home'
import SinglePost from './component/SinglePost'
import AddPost from './component/AddPost'
import EditPost from './component/EditPost'
import { initialState } from './reducer/post';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const store = createStore(allReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/add" component={ AddPost }></Route>
        <Route exact path="/post/:postId" component={ SinglePost }></Route>
        <Route exact path="/edit/:postId" component={ EditPost }></Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;

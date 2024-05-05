import Blog from './component/Blog'
import Details from './component/Details'
import Edit from './component/Edit'
import Add from './component/Add'
import './component/style.css'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App"><Router>
      <h1 style={{textAlign:"center"} }>Welcome Fetch API</h1>
      <div style={{textAlign:"center"}}>
        <Link to="/add" style={{fontSize:"15px"}}>Create Blog</Link>
      </div>
      <Switch>
      <Route path="/" exact component={ Blog } />
      <Route path="/details/:id" exact component={ Details } />
      <Route path="/edit/:id" exact component={ Edit } />
      <Route path="/add" component={ Add } />

      </Switch>
      </Router>
      
    </div>
  );
}

export default App;

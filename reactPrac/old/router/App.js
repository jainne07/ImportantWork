import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './component/style.css'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Contact from './component/Contact'
//import { useState } from 'react'
function App() {
    /* const [counter, setCounter] = useState(0);
    const handleCounter = (operation) => {
    if (operation === 'add') {
    return setCounter(counter + 1)
    }
    return setCounter(counter - 1)
    } */

const list= [
                {
                  id:1,
                  title: 'dolor sit amet',
                  body: 'Accusantium doloribus soluta, necessitatibus unde odio laudantium cum maiores doloremque, excepturi quod assumenda.'
                },
                {
                  id:2,
                  title: 'Consequatur iure',
                  body: 'Quibusdam eveniet sunt provident iusto, asperiores eius eligendi animi labore temporibus quas sequi nesciunt ab cumque, consequatur iure officia commodi dignissimos distinctio? Accusantium doloribus soluta, necessitatibus unde odio laudantium cum maiores doloremque, excepturi quod assumenda.'
                },
                {
                  id:3,
                  title: 'adipisicing elit',
                  body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia beatae, commodi consequuntur quam, consectetur cupiditate iste vitae, repudiandae asperiores ad magni. Quibusdam eveniet sunt provident iusto, asperiores eius eligendi animi labore temporibus quas sequi nesciunt ab cumque, consequatur iure officia commodi dignissimos distinctio? Accusantium doloribus soluta, necessitatibus unde odio laudantium cum maiores doloremque, excepturi quod assumenda.'
                }
              ] 

  return (
    <div className="container">
      {/* <p>
      Counter: {counter} <br />
      <button onClick={() => handleCounter('add')} className="btn btn-info m-2">+ Add</button>
      <button onClick={() => handleCounter('subtract')} className="btn btn-info mx-2">- Subtract</button>
      </p> */}
     <Router>
     <Navbar />
       <Switch>
         <Route path="/" exact>
             <Home list={list}></Home>
         </Route>
         <Route path="/about" exact component={About}></Route>
         <Route path="/contact" exact component={Contact}></Route>
         <Route path="/contact/:contactId" exact component={Contact}></Route>
         <Route path="/:id" exact component={Home}></Route>
         <Route path="*"><h3 className="m-2">Not found</h3></Route>
         {/* <Route path="/contact/:contactId" component={Contact} exact /> */}
       </Switch>
     </Router>
    </div>
  );
}

export default App;
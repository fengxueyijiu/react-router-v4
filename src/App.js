import React, { PropTypes } from 'react'
import { BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom';
import Login from './login'
import Home from './home'
const loggedIn=false;
const App= () =>(
  <Router>
   <div>
     <Link to='/'>Home</Link>
     <Link to='/login'>Login</Link>
     <Route exact path='/' render={()=>(loggedIn ? (<Home/>):(<Redirect to='/login'/>))}/>
     <Route path='/login' component={Login}/>
   </div>
  </Router>
)

export default App;

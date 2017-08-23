import React, { PropTypes } from 'react'
import { BrowserRouter as Router,Link,Route,Redirect,withRouter} from 'react-router-dom';
// import Login from './login'
// import Home from './home'
// const loggedIn=false;
// const App= () =>(
//   <Router>
//    <div>
//      <Link to='/'>Home</Link>
//      <Link to='/login'>Login</Link>
//      <Route exact path='/' render={()=>(loggedIn ? (<Home/>):(<Redirect to='/login'/>))}/>
//      <Route path='/login' component={Login}/>
//    </div>
//   </Router>
// )
//
// export default App;


const Public = () => <h3>公开页面</h3>
const Video = () => <h3>视频页面333333</h3>

const fakeAuth={
  isAuthenticated:false,
  authenticate(){
    this.isAuthenticated=true
    console.log(this.isAuthenticated)
  }
}
class Login extends React.Component {
  state ={
    redirectToReferrer:false
  }
  login = () => {
    fakeAuth.authenticate()
    this.setState({
      redirectToReferrer:true
    })
  }
  render(){
    const {redirectToReferrer} = this.state
    if(redirectToReferrer){
      return(
        <Redirect to={'/'}/>
      )
    }
    return(
      <div>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}

const AuthButton = withRouter(() => (
  fakeAuth.isAuthenticated ? (
    <p>你好！</p>
  ):
  (<p>尚未登录</p>)
 )
)

const PrivateRoute =({component:Component,...rest}) => (
  <Route {...rest} render={()=>(
      fakeAuth.isAuthenticated ?
      (<Component />) : (
        <Redirect to='/login'/>
      )
    )}/>
)

class App extends React.Component{

  render(){

    return(
      <Router>
        <div>
          <AuthButton/>
          <ul>
            <li><Link to='/public'>公开页面</Link></li>
            <li><Link to='video'>视频</Link></li>
            <li><Link to='login'>登录</Link></li>
          </ul>
          <Route path='/public' component={Public}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/video' component={Video}/>
        </div>
      </Router>
    )
  }
}

export default App

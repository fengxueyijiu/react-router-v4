import React, { PropTypes } from 'react'
import { BrowserRouter as Router,Link,Route,Redirect,withRouter, Switch} from 'react-router-dom';
//第一部分
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

//第二部分
// const Public = () => <h3>公开页面</h3>
// const Video = () => <h3>视频页面333333</h3>
//
// const fakeAuth={
//   isAuthenticated:false,
//   authenticate(){
//     this.isAuthenticated=true
//     console.log(this.isAuthenticated)
//   }
// }
// class Login extends React.Component {
//   state ={
//     redirectToReferrer:false
//   }
//   login = () => {
//     fakeAuth.authenticate()
//     this.setState({
//       redirectToReferrer:true
//     })
//   }
//   render(){
//     if(this.props.location.state){
//       var from=this.props.location.state.from
//     }else{
//       var from='/'
//     }
//     console.log(this.props.location)
//     const {redirectToReferrer} = this.state
//     if(redirectToReferrer){
//       return(
//         <Redirect to={from}/>
//       )
//     }
//     return(
//       <div>
//         <button onClick={this.login}>登录</button>
//       </div>
//     )
//   }
// }
//
// const AuthButton = withRouter(() => (
//   fakeAuth.isAuthenticated ? (
//     <p>你好！</p>
//   ):
//   (<p>尚未登录</p>)
//  )
// )
//
// const PrivateRoute =({component:Component,...rest}) => (
//   <Route {...rest} render={(props)=>(
//       fakeAuth.isAuthenticated ?
//       (<Component />) : (
//         <Redirect to={{
//             pathname:'/login',
//             state:{from:props.location}
//           }}/>
//       )
//     )}/>
// )
//
// class App extends React.Component{
//
//   render(){
//
//     return(
//       <Router>
//         <div>
//           <AuthButton/>
//           <ul>
//             <li><Link to='/public'>公开页面</Link></li>
//             <li><Link to='/video'>视频</Link></li>
//             <li><Link to='/login'>登录</Link></li>
//           </ul>
//           <Route path='/public' component={Public}/>
//           <Route path='/login' component={Login}/>
//           <PrivateRoute path='/video' component={Video}/>
//         </div>
//       </Router>
//     )
//   }
// }
//
// export default App


// //第三部分
//
//
// const Video = ({match}) =>(
//
//   <div>{match.params.id}</div>
// )
//
// const App = () =>(
//   <Router>
//     <div>
//       <h2>Accounts</h2>
//       <ul>
//         <li><Link to='/v/1-git'>1-git</Link></li>
//         <li><Link to='/v/2-react'>2-react</Link></li>
//       </ul>
//       <Route path="/v/:id"  component={Video} />
//     </div>
//   </Router>
// )
//
// export default App


//第四部分 match.url
// const Home=()=>(
//   <div>Home</div>
// )
// const Item=({match})=>(
//   <h1>{match.params.item}</h1>
// )
// const About = ({match})=>(
//   <div>
//     <ul>
//       <li><Link to={`${match.url}/me`}>About Me</Link></li>
//       <li><Link to={`${match.url}/work`}>About Work</Link></li>
//     </ul>
//     <Route path={`${match.url}/:item`} component={Item} />
//
//   </div>
// )
// const App=()=>(
//   <Router>
//     <div>
//       <ul>
//         <li><Link to='/'>home</Link></li>
//         <li><Link to='/about'>about</Link></li>
//       </ul>
//       <Route exact path='/' component={Home}/>
//       <Route  path='/about' component={About}/>
//
//     </div>
//   </Router>
// )
// export default App

//第五部分  老版本切换到v4

// import Header from './Header'
// import Main from './Main'
// import Footer from './Footer'
// const App =()=>(
//   <Router>
//     <div>
//       <Header/>
//       <Main/>
//       <Footer/>
//     </div>
//   </Router>
// )
// export default App


//第六部分  如何实现404
// const Home =()=>(
//   <div>Home</div>
// )
// const About =()=>(
//   <div>About</div>
// )
// const NotFound =()=>(
//   <div>悲剧了，404！</div>
// )
// const App = ()=>(
//   <Router>
//     <Switch>
//       <Route exact path='/' component={Home}/>
//       <Route path='/about' component={About}/>
//       <Route component={NotFound}/>
//     </Switch>
//   </Router>
// )
// export default App

//第七部分 Switch如果有多个 Route 都可以配对上 url ，那么就只去触发第一个 Route

const Home =()=>(
  <div>Home</div>
)
const About =()=>(
  <div>About</div>
)
const User = ({match})=>(
  <div>User:{match.params.user}</div>
)
const App = ()=>(
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/happypeter'>happypeter</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/:user' component={User}/>
      </Switch>    
    </div>
  </Router>
)
export default App

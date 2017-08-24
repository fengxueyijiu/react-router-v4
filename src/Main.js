import React from 'react'
import {Route} from 'react-router-dom'

const Home=()=>(
  <div>Home</div>
)
const About=()=>(
  <div>About</div>
)
const Faq=()=>(
  <div>Faq</div>
)
const Main=()=>(
  <div>
   <Route exact path='/' component={Home}/>
   <Route path='/about' component={About}/>
   <Route path='/faq' component={Faq}/>
  </div>
)
export default Main

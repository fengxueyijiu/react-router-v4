import React, { PropTypes } from 'react'
import {withRouter,Link} from 'react-router-dom'
class Header extends React.Component {
  goBack=(e)=>{
      e.preventDefault()
      this.props.history.goBack()
  }
  render () {
    return(
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/happypeter'>happypeter</Link></li>
        <li><Link to='' onClick={this.goBack}>goBack</Link></li>
      </ul>
    )

  }
}

export default withRouter(Header);

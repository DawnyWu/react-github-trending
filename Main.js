import React from 'react'
import { Link } from 'react-router'
// https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&order=desc
class Main extends React.Component {
  render(){
    return(
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Github</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link to='/javascript'>Javascript</Link></li>
              </ul>
            </div>
          </div>  


        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
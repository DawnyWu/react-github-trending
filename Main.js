import React from 'react'
import ShareButtons from './ShareButtons'
import { Link } from 'react-router'

class Main extends React.Component {
  render(){
    return(
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Github</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link to='/trending/javascript'>Javascript</Link></li>
                <li><Link to='/trending/ruby'>ruby</Link></li>
                <li><Link to='/trending/python'>python</Link></li>
              </ul>
            </div>
          </div>  


        </nav>
        <div className="container">
          {this.props.children}
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ShareButtons sites = {["qzone", "weibo", "google", "twitter", "qq", "tencent", "wechat", "douban", "linkedin", "facebook" ]} />
        </div>
      </div>
    )
  }
}

export default Main;
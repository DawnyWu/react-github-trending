import React from 'react'
import getItems from './utils/helpers';
import ReposList from './ReposList'
import { Link } from 'react-router'
class Javascript extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      language: this.props.params.language,
      repos: []
    }
  }

  componentWillMount(){
    this.init(this.props.params.language)
  }

  componentWillReceiveProps(nextProps){
    this.init(nextProps.params.language);
    console.log('will receive language:' + nextProps.params.language)
  } 

  init(language){
    getItems(language)
    .then(function (data) {
      this.setState({
        language: language,
        repos: data.items
      })
    }.bind(this))
  }

  render(){
    const activeJavascript = this.props.params.language == 'javascript' ? 'active' : ''
    const activeRuby = this.props.params.language == 'ruby' ? 'active' : ''
    const activePython = this.props.params.language == 'python' ? 'active' : ''
    return(
      <div>
        <div className='explore-marketing-header'>
          <h2>Trending repositories</h2>
          <p className="lead">Find what repositories the GitHub community is most excited about today.</p>
        </div>
        <div className="col-md-8">
          <ReposList repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <ul className="nav nav-pills nav-stacked">
            <li role="presentation" className={activeJavascript}><Link to='/trending/javascript'>Javascript</Link></li>
            <li role="presentation" className={activeRuby}><Link to='/trending/ruby'>ruby</Link></li>
            <li role="presentation" className={activePython}><Link to='/trending/python'>python</Link></li>
          </ul>         
        </div>

      </div>
    )
  }
}

export default Javascript;
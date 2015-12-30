import React from 'react'
import getItems from './utils/helpers';
import ReposList from './ReposList'

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
    return(
      <div>
        <div className='explore-marketing-header'>
          <h2>Trending repositories</h2>
          <p className="lead">Find what repositories the GitHub community is most excited about today.</p>
        </div>
        <div className="col-md-8">
          <ReposList repos={this.state.repos}/>
        </div>
      </div>
    )
  }
}

export default Javascript;
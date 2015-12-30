import React from 'react'
import getItems from './utils/helpers';
import ReposList from './ReposList'

class Javascript extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount(){
    this.init()
  }

  componentWillReceiveProps(nextProps){
    this.init();
  }

  init(){
    getItems()
         .then(function (data) {
          console.log(data.items)
           this.setState({
              repos: data.items
          }) 
        }.bind(this))
  }

  render(){
    const repos = this.state.repos.map(function (repo, index) {
      <div>{repo.description}{repo.full_name}</div>
    })
    const a = this.state.repos
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
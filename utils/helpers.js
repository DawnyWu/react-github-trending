import axios from 'axios'

function getRepos(){
    return axios.get('https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&order=desc')
  }
  
export default function getItems(){
    return axios.all([getRepos()]).then(function (attr) {
      return {items: attr[0].data.items}
    })
  }
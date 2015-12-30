import axios from 'axios'
//search language not right, param language not right
function getRepos(language){
    console.log('search language:'+ language)
    return axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc`)
  }
  
export default function getItems(language){
    return axios.all([getRepos(language)]).then(function (attr) {
      return {items: attr[0].data.items}
    })
  }
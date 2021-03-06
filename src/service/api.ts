import axios from 'axios'

const hostname = () => {
  const app = window.location.hostname 
  //https://enturmacao.netlify.app/
  if(app === 'enturmacao.netlify.app')
    return 'https://enturmacao.herokuapp.com'
  
  return 'http://localhost:8000/api'
}

const api = axios.create({
  baseURL: hostname(),
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})
//console.log('23:38')
console.log(hostname())
export default api
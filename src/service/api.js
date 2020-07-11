import axios from 'axios'

const hostname = () => {
  const app = window.location.hostname 
  if(app === 'enturmacao.netlify.com')
    return 'https://enturmacao.herokuapp.com'
  
  return 'http://192.168.0.28:8000'
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
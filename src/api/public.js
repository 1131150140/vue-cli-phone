import axios from 'axios'
axios.defaults.timeout = 10000
import router from '../router'
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

export default {
  fetchGet (url, params = {}) {
    const token = localStorage.getItem('token');
    axios.defaults.headers.get['token'] = token;
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
      res.data.code == 10001 ? router.push({path: '/'}) : ''; 
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchQuickSearch (url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    const token = localStorage.getItem('token');
    axios.defaults.headers.post['token'] = token;
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        res.data.code == 10001 ? router.push({path: '/'}) : ''; 
        resolve(res.data)
      }).catch(error => {
        console.log(error)
        reject(error)

      })
    })
  }
}

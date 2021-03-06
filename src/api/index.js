import axios from 'axios'
import router from '../router/index'

// axios.defaults.withCredentials = true
axios.defaults.timeout = 10000


// 添加请求拦截器
axios.interceptors.request.use(
  response => {
    console.log('请求成功：')
    return response
  },
  error => {
    console.log('请求失败：')
    return Promise.reject(error)
  }
)


// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    console.log('响应成功：' + response)
    return response
  },
  error => {
    console.log('响应失败')
    router.push({path: '*'})
    return Promise.reject(error)
  }
)

//-----------------华丽丽的的分割线---------------------------------
let qs = require('qs');
import {
  Api,
  Api2
} from './resource'

export default {

  CheckAccount(data) {
    return axios.post(Api + 'login/checkAccount', qs.stringify(data))
  },
  Register(data) {
    return axios.post(Api + 'login/createAccount', qs.stringify(data))
  },
  GetLogin(data) {
    return axios.post(Api + 'login/getLogin', qs.stringify(data))
  },
  GetAccount() {
    return axios.get(Api + 'login/getAccount')
  },
  PostArticle(data) {
    return axios.post(Api + 'admin/article', qs.stringify(data))
  },
  GetArticle(data) {
    return axios.get(Api + 'admin/article')
  },
  OpenArticle(data) {
    return axios.get(Api + `admin/${data}`)
  },
  DeleteArticle(data) {
    return axios.delete(Api + `admin/${data}`)
  },

  getApi(data) {
    return axios.get(Api + `admin/${data}`)
  },
  getSplash(data) {
    return axios.get('https://www.apiopen.top/weatherApi?city=' + data)
  },
  getOne() {
    return axios.get(Api + `one`)
  },
  getImages() {
    return axios.get('https://www.apiopen.top/meituApi?page=1')
  },
  getJock(data) {
    return axios.get(`https://www.apiopen.top/satinGodApi?type=1&page=${data}`)
  },
  getLaifu(data) {
    return axios.get(Api2 + `laifu`)
  },
  getPost(type, data) {
    return axios.get(`https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=${data}`)
  },
}
// export default {
//
//   getLogin(data) {
//     return axios.post(Login, qs.stringify(data))
//   },
//   getLoginOut(data) {
//     return axios.post(LoginOut, qs.stringify(data))
//   },
//   CheckAccount(data) {
//     return axios.post('/api/login/checkAccount', qs.stringify(data))
//   },
//   Register(data) {
//     return axios.post('/api/login/createAccount', qs.stringify(data))
//   },
//   GetLogin(data) {
//     return axios.post('/api/login/getLogin', qs.stringify(data))
//   },
//   GetAccount() {
//     return axios.get('/api/login/getAccount')
//   },
//   PostArticle(data) {
//     return axios.post('/api/admin/article', qs.stringify(data))
//   },
//   GetArticle(data) {
//     return axios.get('/api/admin/article')
//   },
//   OpenArticle(data) {
//     return axios.get(`/api/admin/${data}`)
//   },
//   DeleteArticle(data) {
//     return axios.delete(`/api/admin/${data}`)
//   },
//
// }

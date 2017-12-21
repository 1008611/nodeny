import {
  API_ROOT,
} from './config.js'

var apiHYZ = {
  Login: 'user/login/',
  LoginOut: 'user/logOut/',
}
export const Api = API_ROOT
export const Login = API_ROOT.concat(apiHYZ.Login)
export const LoginOut = API_ROOT.concat(apiHYZ.LoginOut)

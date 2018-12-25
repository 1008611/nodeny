let API_ROOT = window.configs.API_ROOT

var apiHYZ = {
  Login: 'user/login/',
  LoginOut: 'user/logOut/',
}
export const Api = API_ROOT+'api/'
export const Api2 = API_ROOT
export const Login = API_ROOT.concat(apiHYZ.Login)
export const LoginOut = API_ROOT.concat(apiHYZ.LoginOut)


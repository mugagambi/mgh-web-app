import { logIn, getUser } from '../../http/Auth'
import router from '../../router'
import decode from 'jwt-decode'

/* global  localStorage:true */

export function login (context, credentials, redirect) {
  logIn(credentials).then(response => {
    context.loading = false
    localStorage.setItem('token', response.token)
    getUser().then(response => {
      context.$store.dispatch('storeUser', response).then(() => {
        context.$notify({
          title: 'Success',
          message: 'Welcome',
          type: 'success',
          duration: 5000
        })
        if (redirect) {
          router.push(redirect)
        } else {
          router.push({ path: '/' })
        }
      })
    })
  })
}
export function isLoggedIn () {
  return !!localStorage.token && !isTokenExpired(localStorage.getItem('token'))
}
function getTokenExpirationDate (encodedToken) {
  const token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}
function isTokenExpired (token) {
  const expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}
export function logout (context) {
  localStorage.removeItem('token')
  context.$store
    .dispatch('storeUser', {
      username: '',
      email: '',
      phone_number: '',
      first_name: '',
      last_name: '',
      last_login: '',
      token: ''
    })
    .then(() => router.push({ path: '/login' }))
}

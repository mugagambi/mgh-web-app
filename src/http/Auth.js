import HTTP from './Http'

export const logIn = credentials => {
  return HTTP({
    method: 'post',
    url: 'auth/jwt/create/',
    data: credentials
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}
export const getUser = () => {
  return HTTP({
    method: 'get',
    url: 'auth/me/'
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

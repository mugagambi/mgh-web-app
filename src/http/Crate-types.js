import HTTP from './Http'

export const fetchCrateTpes = () => {
  return HTTP.get(`core/crate-types/`)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}
export const addCrateType = data => {
  return HTTP({
    method: 'post',
    url: 'core/crate-types/',
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

export const removeCrateType = id => {
  return HTTP({
    method: 'delete',
    url: `core/crate-types/${id}`
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}
export const updateProducts = (id, data) => {
  return HTTP({
    method: 'put',
    url: `core/products/${id}`,
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

import HTTP from './Http'

export const fetchProducts = () => {
  return HTTP.get(`core/products/`)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}
export const addProducts = data => {
  return HTTP({
    method: 'post',
    url: 'core/products/',
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

export const removeProduct = id => {
  return HTTP({
    method: 'delete',
    url: `core/products/${id}`
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}
export const updateAggregationCenter = (id, data) => {
  return HTTP({
    method: 'put',
    url: `core/aggregation-centers/${id}`,
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

import HTTP from './Http'

export const fetchAggregationProducts = () => {
  return HTTP.get(`core/aggregation-centers-products/`)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}
export const addAggregationProduct = data => {
  return HTTP({
    method: 'post',
    url: 'core/aggregation-centers-products/',
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

export const removeAggregationProduct = id => {
  return HTTP({
    method: 'delete',
    url: `core/aggregation-centers-products/${id}`
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}
export const updateAggregationProduct = (id, data) => {
  return HTTP({
    method: 'put',
    url: `core/aggregation-centers-products/${id}`,
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

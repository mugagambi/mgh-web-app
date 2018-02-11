import HTTP from './Http'

export const fetchAggregationCenters = () => {
  return HTTP.get(`core/aggregation-centers/`)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}
export const addAggregationCenters = data => {
  return HTTP({
    method: 'post',
    url: 'core/aggregation-centers/',
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

export const removeAggregationCenter = id => {
  return HTTP({
    method: 'delete',
    url: `core/aggregation-centers/${id}`
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

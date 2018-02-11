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

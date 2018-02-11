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

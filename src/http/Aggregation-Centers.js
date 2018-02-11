import axios from 'axios'

export const fetchAggregationCenters = () => {
  return axios.get(`core/aggregation-centers/`)
    .then(response => {
      console.log(`${response}`)
    })
    .catch(e => {
      console.log(e)
    })
}

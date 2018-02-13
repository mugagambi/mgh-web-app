import HTTP from './Http'

export const fetchGrades = () => {
  return HTTP.get(`core/grades/`)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}
export const addGrade = data => {
  return HTTP({
    method: 'post',
    url: 'core/grades/',
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

export const removeCrateAction = id => {
  return HTTP({
    method: 'delete',
    url: `core/crates/${id}`
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}
export const updateCrate = (id, data) => {
  return HTTP({
    method: 'put',
    url: `core/crates/${id}`,
    data: data
  })
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e))
}

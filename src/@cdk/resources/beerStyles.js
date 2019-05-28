import axios from 'axios'
import config from './config'

const beerStylesResources = () => {
  const endpoint = `${config.rootUrl}/styles`
  const singleEndpoint = `${config.rootUrl}/style`
  const keySuffix = `?key=${config.apiKey}`

  return {
    list: () => axios.get(`${endpoint}/${keySuffix}`),
    get: (id) => axios.get(`${singleEndpoint}/${id}/${keySuffix}`)
  }
}

export default beerStylesResources

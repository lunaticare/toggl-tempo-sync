const axios = require('axios')
const {
  togglAPIToken,
  togglBaseURL,
  tempoPassword,
  tempoBaseURL,
  tempoUserName
} = require('../config')

module.exports.tempoClient = (options = {}) => axios.create({
  baseURL: tempoBaseURL,
  auth: {
    username: tempoUserName,
    password: tempoPassword
  },
  timeout: 60 * 4 * 1000, // 4 min
  ...options
})

module.exports.togglClient = (options = {}) => {
  const basicAuthToken = Buffer.from(`${togglAPIToken}:api_token`)
    .toString('base64')

  return axios.create({
    baseURL: togglBaseURL,
    headers: {
      Authorization: `Basic ${basicAuthToken}`
    },
    ...options
  })
}

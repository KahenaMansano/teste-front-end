import axios from 'axios'
const API_KEY = 'AIzaSyATfhVn94Jm7VsZrAH1Orl0jx30YR-nu6s'

function videosAPI({ query }) {
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${query}&key=${API_KEY}`
  })
}

export default videosAPI

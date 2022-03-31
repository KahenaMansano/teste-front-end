import React, { useEffect, useState } from 'react'
// import videosAPI from '../services/videosAPI'
import axios from 'axios'

function HomePage() {
  const [query, setQuery] = useState([])
  const [results, setResults] = useState([])
  const [linkSearch, setLink] = useState([])
  const API_KEY = 'AIzaSyATfhVn94Jm7VsZrAH1Orl0jx30YR-nu6s'

  const searchInput = e => {
    if (e.keyCode === 13) {
      const search = e.target.value
      setQuery(search)
    }
  }

  useEffect(() => {
    async function searchAPI() {
      const videosAPI = axios.create({
        baseURL: `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${query}&key=${API_KEY}`
      })
      setLink(videosAPI)
      return videosAPI
    }
    searchAPI()
  }, [query])

  useEffect(() => {
    console.log(linkSearch)
    async function searchchData() {
      const request = await axios.get(linkSearch)
      setResults(request.data.results)
      return request
    }

    searchchData()
  }, [linkSearch])

  return (
    <div>
      <input
        type="text"
        placeholder="Que tipo de vídeo está procurando?"
        onKeyDown={e => searchInput(e)}
      />
      <div>{results}</div>
    </div>
  )
}

export default HomePage

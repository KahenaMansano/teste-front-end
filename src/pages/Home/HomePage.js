import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import videosAPI from '../../services/api'
import apiKey from '../../services/apiKey'
import './HomePage.css'

function HomePage() {
  const [query, setQuery] = useState()
  const [results, setResults] = useState([])
  let navigate = useNavigate()

  const searchInput = e => {
    if (e.keyCode === 13) {
      const search = e.target.value
      setQuery(search)
    }
  }

  useEffect(() => {
    if (query !== undefined) {
      async function searchData() {
        const request = await videosAPI.get(
          `search?part=id,snippet&q=${query}&key=${apiKey}&regionCode=BR&type=video&maxResults=10`
        )
        setResults(request.data.items)

        return request
      }
      searchData()
    }
  }, [query])

  const imageClick = id => {
    navigate(`/${id}`)
  }

  return (
    <div className="home">
      <input
        type="text"
        className="input"
        placeholder="Quero buscar um vídeo sobre..."
        onKeyDown={e => searchInput(e)}
      />
      <div className="containerList">
        <div className="listCards">
          {results.map(video => {
            return (
              <div key={video.etag} className="cardVideo">
                <div className="Imgs">
                  <div
                    className="cardImg"
                    style={{
                      backgroundImage: `url(${video.snippet.thumbnails.high.url})`
                    }}
                  />

                  <img
                    className="imgPlay"
                    src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                    alt=""
                    onClick={() => imageClick(video.id.videoId)}
                  />
                </div>
                <div className="texts">
                  <p className="cardTitle">{video.snippet.title}</p>
                  <p className="cardChannel">{video.snippet.channelTitle}</p>
                  <p className="carddescription">{video.snippet.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage

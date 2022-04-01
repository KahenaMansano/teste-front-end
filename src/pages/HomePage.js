import React, { useEffect, useState } from 'react'
// import videosAPI from '../services/videosAPI'
import videosAPI from '../services/api'
import apiKey from '../services/apiKey'
import './HomePage.css'

function HomePage() {
  const [query, setQuery] = useState()
  const [results, setResults] = useState([])

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
          `search?part=id,snippet&q=${query}&key=${apiKey}&regionCode=BR`
        )
        console.log(request.data.items, ' retorno do request')
        setResults(request.data.items)

        return request
      }
      searchData()
    }
  }, [query])

  function imageClick() {
    alert('image')
  }

  return (
    <div className="home">
      <input
        type="text"
        className="input"
        placeholder="Que tipo de vídeo está procurando?"
        onKeyDown={e => searchInput(e)}
      />
      <div className="containerList">
        <div className="listCards">
          {results.map((video, i) => {
            return (
              <div key={video.id.videoId} className="cardVideo">
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
                    onClick={() => imageClick()}
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

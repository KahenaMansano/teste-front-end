// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { buscaVideo } from '../store/actions/detailsAC'

import React, { useEffect, useState } from 'react'
import videosAPI from '../services/api'
import apiKey from '../services/apiKey'

function Details({ id }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    async function searchData() {
      const request = await videosAPI.get(
        `videos?id=${id}&part=snippet,statistics&key=${apiKey}`
      )
      console.log(request.data.items, ' retorno do request')
      setResults(request.data.items)

      return request
    }
    searchData()
  }, [id])

  return (
    <div>
      <div key={results.id.videoId} className="cardVideo">
        <p>{results.snippet.title}</p>
        {/* <div
            className="cardVideo"
            style={{
              backgroundImage: `url(${results.snippet.thumbnails.high.url})`
            }}
          /> */}

        {/* <div className="texts"> */}
        {/* <p className="cardTitle">{video.snippet.title}</p>
          <p className="cardChannel">{video.snippet.channelTitle}</p>
          <p className="carddescription">{video.snippet.description}</p> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Details

// class Details extends Component {
//   buscaInput = e => {
//     console.log(e, 'event dentro do busca')
//     if (e.keyCode === 13) {
//       const valor = e.target.value
//       console.log(valor, 'valor dentro do busca')
//       return buscaVideo(valor)
//     }
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Que tipo de vídeo está procurando?"
//           onKeyDown={e => this.buscaInput(e)}
//         />
//       </div>
//     )
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     buscaInput: params => dispatch(buscaVideo(params))
//   }
// }

// export default connect(null, mapDispatch)(Details)

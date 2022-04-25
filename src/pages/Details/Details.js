import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import videosAPI from '../../services/api'
import apiKey from '../../services/apiKey'
import './Details.css'

function Details() {
  const { id } = useParams()
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)
  let navigate = useNavigate()

  useEffect(() => {
    async function searchData() {
      if (!id) return
      const request = await videosAPI.get(
        `videos?id=${id}&part=snippet,statistics&key=${apiKey}`
      )
      const [video] = request.data.items
      setResults(video)
      setLoading(false)

      return request
    }

    searchData()
  }, [id])

  const cardClick = id => {
    navigate(`/`)
  }

  return (
    <div className="details">
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <div className="container">
            <img
              className="button"
              src="https://cdn-icons-png.flaticon.com/512/60/60651.png"
              alt=""
              onClick={() => cardClick()}
            />

            <p className="titleVideo" key={results.id}>
              {results.snippet.title}
            </p>
            <div className="containerVideo">
              <iframe
                className="cardVideoPlay"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
              ></iframe>
            </div>

            <p className="cardChannel">{results.snippet.channelTitle}</p>
            <p className="cardescription">{results.snippet.description}</p>
          </div>
        </>
      )}
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

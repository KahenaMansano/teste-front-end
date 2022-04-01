import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buscaVideo } from '../store/actions/detailsAC'

class Details extends Component {
  buscaInput = e => {
    console.log(e, 'event dentro do busca')
    if (e.keyCode === 13) {
      const valor = e.target.value
      console.log(valor, 'valor dentro do busca')
      return buscaVideo(valor)
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Que tipo de vídeo está procurando?"
          onKeyDown={e => this.buscaInput(e)}
        />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    buscaInput: params => dispatch(buscaVideo(params))
  }
}

export default connect(null, mapDispatch)(Details)

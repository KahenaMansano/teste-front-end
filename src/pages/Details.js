import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buscaVideo } from '../store/actions/detailsAC'

class Details extends Component {
  buscaInput = e => {
    const valor = e.target.value
    this.props.buscaVideo(valor)
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

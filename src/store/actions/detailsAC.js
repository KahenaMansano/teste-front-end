import youtubeSearch from 'youtube-api-v3-search'
import API_KEY from '../../services/api'

export const detailsVideo = params => {
  return dispatch => {
    dispatch(detailsVideoStart())
    youtubeSearch(API_KEY, { q: params })
      .then(data => dispatch(detailsVideoSucess(data.items)))
      .catch(() => dispatch(detailsVideoError()))
  }
}

export const detailsVideoStart = () => {
  return {
    type: 'DETAILS_VIDEO',
    loading: true,
    error: false
  }
}

export const detailsVideoSucess = videos => {
  return {
    type: 'DETAILS_SUCESS',
    videos,
    loading: false,
    error: false
  }
}

export const detailsVideoError = () => {
  return {
    type: 'DETAILS_ERROR',
    loading: false,
    error: true
  }
}

export const buscaVideo = params => {
  return dispatch => {
    dispatch(detailsVideoStart())
    youtubeSearch(API_KEY, { q: params })
      .then(data => dispatch(detailsVideoSucess(data.items)))
      .catch(() => dispatch(detailsVideoError()))
  }
}

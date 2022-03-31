const SET_STATE = {
  videos: [],
  loading: false,
  error: false
}

export default function details(state = SET_STATE, action) {
  switch (action.type) {
    case 'DETAILS_VIDEO':
      return { videos: [], loading: true, error: false }

    case 'DETAILS_SUCESS':
      return { videos: action.videos, loading: false, error: false }

    case 'DETAILS_ERROR':
      return { videos: [], loading: false, error: true }

    default:
      return { state }
  }
}

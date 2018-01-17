import ApiClient from '../api/client'
import { loading, showError } from './loading'

export const CREATE_GAME = 'CREATE_GAME'

const api = new ApiClient()

export const createGame = (newGame) => {
  return dispatch => {
    const path = '/'
    dispatch(loading(path, true))

    api.post(path, newGame)
      .then(res => {
        dispatch(loading(path, false))
        api.storeToken(res.body.token)
        dispatch({
          type: CREATE_GAME,
          payload: newGame
        })
      })
      .catch(err => {
        dispatch(loading(path, false))
        dispatch(showError(err))
      })
  }
}

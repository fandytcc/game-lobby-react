import { CREATE_GAME } from '../actions/games'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME :
      return [...payload].concat(state)

    // case FETCHED_GAMES :


    default :
      return state
  }
}

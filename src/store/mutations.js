import * as types from './mutation_types'

export default {
  [types.TEST_MUTATION](state, data) {
    state.count += data
  },
  [types.SET_OPENMENU](state, data) {
    state.openMenu = data
  },
}

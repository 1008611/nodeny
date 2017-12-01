import * as types from './mutation_types'

export default {
  test_mutation: ({commit}, data) => {
    commit(types.TEST_MUTATION, data)
  },
  openMenu: ({commit}, data) => {
    commit(types.SET_OPENMENU, data)
  },
}

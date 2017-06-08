import axios from 'axios'
const state = {
  topicsList: [],
  searchKey: {
    page: 0,
    limit: 20,
    tab: 'all'
  }
}

const actions = {
  getTopicList ({ commit }) {
    commit('setPageNum')
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${state.searchKey.tab}&page=${state.searchKey.page}&limit=20`)
      .then(res => {
        commit('setTopicList', res)
      })
  }
}

const getters = {
  getTopicsList: state => state.topicsList
}

const mutations = {
  setPageNum (state) {
    state.searchKey['page'] += 1
  },
  setTopicList (state, res) {
    if (state.searchKey.page <= 1) {
      state.topicsList = res.data.data
    } else {
      state.topicsList = state.topicsList.concat(res.data)
    }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

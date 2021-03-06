var apiKey = process.env.API_KEY;
var baseUrl = process.env.API_URL
var headers = {headers: {'Authorization': 'Bearer ' + process.env.API_KEY, 'Content-Type': 'application/json' }}

export const state = () => ({
  ideas: []
})

export const mutations = {
  SET_IDEAS (state, ideas) {
    state.ideas = ideas
  },
}

export const actions = {
  async loadAllIdeas({commit}) {
    this.$axios.get(baseUrl + 'Ideas', headers).then(response => response).then((data) => {
      const updateIdeas = data.data.records;
      commit('SET_IDEAS', updateIdeas);
    });
  },
  async createIdea({dispatch}, idea) {
    this.$axios.post(baseUrl + 'Ideas', idea, headers).then(response => response).then(() => {
      dispatch('loadAllIdeas');
    })
  },
  async updateIdea({dispatch}, idea) {
    this.$axios.patch(baseUrl + 'Ideas', idea, headers).then(response => response).then(() => {
      dispatch('loadAllIdeas');
    })
  },
  async deleteIdea({dispatch}, id) {
    this.$axios.delete(baseUrl + 'Ideas/' + id, headers).then(response => response).then(() => {
      dispatch('loadAllIdeas');
    })
  },
  async editIdea({dispatch}, idea) {
    this.$axios.put(baseUrl + 'Ideas', idea, headers).then(response => response).then(() => {
      dispatch('loadAllIdeas');
    })
  },
}

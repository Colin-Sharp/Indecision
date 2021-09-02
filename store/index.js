var apiKey = 'keyHWvShVlxbfFwBq';
var baseUrl = 'https://api.airtable.com/v0/appAZxQ29dzBN2Y7Z/'
var headers = { headers: { 'Authorization': 'Bearer ' + apiKey } }
var headerspost = {headers: {'Authorization': 'Bearer ' + apiKey, 
'Content-Type': 'application/json' }}

export const state = () => ({
  ideas: []
})

export const mutations = {
  SET_IDEAS (state, ideas) {
    state.ideas = ideas
  }
}

export const actions = {
  async loadAllIdeas({commit}) {
    this.$axios.get(baseUrl + 'Ideas', headers).then(response => response).then((data) => {
      const updateIdeas = data.data.records;
      commit('SET_IDEAS', updateIdeas)
    });
  },
  async createIdea({commit}, idea) {
    console.log('store: ', idea);
    this.$axios.post(baseUrl + 'Ideas', idea, headerspost).then(response => response).then((data) => {
      console.log(data);
    })
  }
}

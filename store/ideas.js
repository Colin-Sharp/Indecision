import axios from "axios";

var apiKey = 'keyHWvShVlxbfFwBq';
var baseUrl = 'https://api.airtable.com/v0/appAZxQ29dzBN2Y7Z/'
var headers = { headers: { 'Authorization': 'Bearer ' + apiKey } }

export const state = () => {
  list: [];
}

export const mutations = {
    updateIdeas(state) { axios.get(baseUrl + 'Ideas', headers)
    .then(response => response)
    .then((data) => {
      const updateIdeas = data.data.records;
      console.log('update', updateIdeas);
      state.list = [...updateIdeas];
    });
  }
}

getter: {
  ideas: state => {
    return {
      list: state.list
    }
  }
}

actions: {
  updateIdeas: state => {
    axios.get(baseUrl + 'Ideas', headers)
    .then(response => response)
    .then((data) => {
      const updateIdeas = data.data.records;
      console.log('update', updateIdeas);
      state.list = [...updateIdeas];
    });
  }
}

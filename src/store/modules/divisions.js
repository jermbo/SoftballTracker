import axios from "axios";

const state = {
  apiURL: `${process.env.VUE_APP_API_URL}/divisions`,
  phase: "NOT_LOADED", // ALL_LOADED
  divisions: [],
  tempHolder: ""
};

const getters = {
  getDivisionById(state, id) {
    return state.divisions.filter(division => division.id == id)[0];
  }
};

const actions = {
  getDivisions({ state, commit }) {
    if (state.phase == "NOT_LOADED") {
      axios
        .get(state.apiURL)
        .then(resp => {
          commit("SET_DATA", resp.data);
          commit("UPDATE_PHASE", "ALL_LOADED");
        })
        .catch(err => console.log(err));
    }
  },
  addNewDivision({ state, commit }, target) {
    const data = {
      name: target
    };
    return axios
      .post(state.apiURL, data)
      .then(resp => {
        console.log(resp.data);
        commit("ADD_NEW_DIVISION", resp.data);
        return true;
      })
      .catch(err => console.log(err));
  }
};

const mutations = {
  SET_DATA(state, divisions) {
    state.divisions = divisions;
  },
  ADD_NEW_DIVISION(state, division) {
    state.divisions.push(division);
  },
  UPDATE_PHASE(state, phase) {
    state.phase = phase;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

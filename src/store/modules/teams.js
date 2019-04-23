import axios from "axios";

// https://www.leaguelineup.com/teams_baseball.asp?url=cityofbocaraton&divisionid=667664

const state = {
  apiURL: `${process.env.VUE_APP_API_URL}/teams`,
  phase: "NOT_LOADED", // ALL_LOADED
  teams: [],
  tempHolder: ""
};

const getters = {
  getTeamById(state, id) {
    return state.teams.filter(division => division.id == id)[0];
  }
};

const actions = {
  getTeams({ state, commit }) {
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
  addNewTeam({ state, commit }, target) {
    const data = {
      name: target
    };
    return axios
      .post(state.apiURL, data)
      .then(resp => {
        console.log(resp.data);
        commit("ADD_NEW_TEAM", resp.data);
        return true;
      })
      .catch(err => console.log(err));
  }
};

const mutations = {
  SET_DATA(state, teams) {
    state.teams = teams;
  },
  ADD_NEW_TEAM(state, team) {
    state.teams.push(team);
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

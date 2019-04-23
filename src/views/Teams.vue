<template>
  <div class="page">
    <header class="page-header">
      <h1>teams</h1>
    </header>
    <main class="page-content">
      <div class="create">
        <input type="text" v-model="tempHolder" placeholder="Team Name">
        <button type="button" @click="createTempTeam(tempHolder)">Add</button>
      </div>
      <div class="teams">
        <div v-if="teams.length">
          <ul>
            <li v-for="(team, index) in teams" :key="index">
              <span>{{team.name}}</span>
            </li>
            <li v-if="tempHolder">{{tempHolder}}</li>
          </ul>
        </div>
        <p v-else>Loading Teams</p>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
const base = "teams";

export default {
  name: "Teams",
  data() {
    return {
      tempHolder: ""
    };
  },
  created() {
    this.getTeams();
  },
  computed: {
    ...mapState(base, ["teams"]),
    ...mapGetters(base, [])
  },
  methods: {
    ...mapActions(base, ["getTeams", "addNewTeam"]),
    createTempTeam() {
      this.addNewTeam(this.tempHolder).then(result => {
        if (result) {
          this.tempHolder = "";
        }
      });
    }
  }
};
</script>

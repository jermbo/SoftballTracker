<template>
  <div class="page">
    <header class="page-header">
      <h1>Divisions</h1>
    </header>
    <main class="page-content">
      <div class="create">
        <input type="text" v-model="tempHolder" placeholder="Division Name">
        <button type="button" @click="createTempDivision(tempHolder)">Add</button>
      </div>
      <div class="divisions">
        <div v-if="divisions.length">
          <ul>
            <li v-for="(division, index) in divisions" :key="index">
              <span>{{division.name}}</span>
            </li>
            <li v-if="tempHolder">{{tempHolder}}</li>
          </ul>
        </div>
        <p v-else>Loading Divisions</p>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

const base = "divisions";

export default {
  name: "Divisions",
  data() {
    return {
      tempHolder: ""
    };
  },
  created() {
    this.getDivisions();
  },
  computed: {
    ...mapState(base, ["divisions"]),
    ...mapGetters(base, [])
  },
  methods: {
    ...mapActions(base, ["getDivisions", "addNewDivision"]),
    createTempDivision() {
      this.addNewDivision(this.tempHolder).then(result => {
        if (result) {
          this.tempHolder = "";
        }
      });
    }
  }
};
</script>

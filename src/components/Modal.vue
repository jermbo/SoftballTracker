<template>
  <div class="modal-wrapper">
    <div class="modal-background">
      <div class="modal --player"></div>
      <!-- modal -->
    </div>
    <!-- modal-background -->
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    player: Object,
    type: String
  },
  methods: {
    destroyModal() {
      this.$emit("close");
    },
    AddToTeam(player) {
      console.log(player);
      this.player.team.name = "Atlantic Partners";
      this.$emit("close");

      fetch(`http://localhost:4000/players/${this.player.id}`, {
        method: "PATCH",
        body: JSON.stringify(this.player),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .catch(err => console.log(err));
    },
    RemoveFromTeam(player) {
      console.log(player);
      this.player.team.name = null;
    }
  }
};
</script>
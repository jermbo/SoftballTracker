<template>
    <div>
        <h3>Teams</h3>
        <Player v-for="(player, index) in playersOnTeam" :key="index" :name="player.name" />
    </div>
</template>

<script>
import Player from "@/components/Player";

export default {
    name: "Teams",
    components: {
        Player
    },
    props: {
        players: Array
    },
    computed: {
        playersOnTeam() {
            return this.players.filter(player => player.team.name == 'Atlantic Partners')
        }
    },
    methods: {
        playerClicked(info) {
            this.$emit('show', info, 'remove');
        }
    }
}
</script>
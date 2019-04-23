<template>
    <div>
        <h3>Free Agents</h3>
        <Player v-for="(player, index) in freePlayers" :key="index" :name="player.name" />
    </div>
</template>

<script>
import Player from '@/components/Player';

export default {
    name: "FreeAgents",
    components: {
        Player
    },
    props: {
        players: Array
    },
    computed: {
        freePlayers() {
            return this.players.filter(player => !player.team.name)
        }
    },
    methods: {
        playerClicked(info) {
            this.$emit('show', info, 'add');
        }
    }
}
</script>
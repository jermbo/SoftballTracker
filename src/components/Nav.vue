<template>
  <div id="nav">
    <nav class="utility-nav">
      <router-link to="/" class="utility-nav__item">
        <i class="fas fa-home"></i>
        <span class="utility-nav__text">Home</span>
      </router-link>
      <router-link :to="{name: 'games'}" class="utility-nav__item">
        <i class="fas fa-baseball-ball fa-fw"></i>
        <span class="utility-nav__text">Games</span>
      </router-link>
      <router-link to="/divisions" class="utility-nav__item">
        <i class="fas fa-bell"></i>
        <span class="utility-nav__text">Divisions</span>
      </router-link>
      <router-link :to="{name: 'teams'}" class="utility-nav__item">
        <i class="fas fa-user-shield fa-fw"></i>
        <span class="utility-nav__text">Teams</span>
      </router-link>
      <router-link :to="{name: 'players'}" class="utility-nav__item">
        <i class="fas fa-user-circle fa-fw"></i>
        <span class="utility-nav__text">Players</span>
      </router-link>
      <router-link :to="{name: 'fantasy'}" class="utility-nav__item">
        <i class="fas fa-star fa-fw"></i>
        <span class="utility-nav__text">fantasy</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

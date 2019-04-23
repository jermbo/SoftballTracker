<template>
  <div class="home">
    <header class="main-header">
      <div class="main-header__logo">
        <img src="@/assets/images/st-logo.png" alt="Sofball Tracker Logo" class="img-responsive">
      </div>
    </header>
    <main class="main-wrapper" role="main">
      <nav class="widgets">
        <div class="widget">
          <div class="widget__inner">
            <div class="widget__icon">
              <i class="fas fa-baseball-ball fa-fw"></i>
            </div>
            <h2 class="widget__title">Games</h2>
            <p class="widget__desc">Please click here to start a new game or view old games</p>
            <router-link :to="{name: 'games'}" class="btn --primary">
              <i class="fas fa-angle-right"></i>
              <span class="btn__text">Start</span>
            </router-link>
          </div>
        </div>
        <div class="widget">
          <div class="widget__inner">
            <div class="widget__icon">
              <i class="fas fa-shield-alt fa-fw"></i>
            </div>
            <h2 class="widget__title">Divisions</h2>
            <p class="widget__desc">Please click here to view and add divisions</p>
            <router-link :to="{name: 'divisions'}" class="btn --primary">
              <i class="fas fa-angle-right"></i>
              <span class="btn__text">Start</span>
            </router-link>
          </div>
        </div>
        <div class="widget">
          <div class="widget__inner">
            <div class="widget__icon">
              <i class="fas fa-user-shield fa-fw"></i>
            </div>
            <h2 class="widget__title">Teams</h2>
            <p class="widget__desc">Please click here to view and add teams</p>
            <router-link :to="{name: 'teams'}" class="btn --primary">
              <i class="fas fa-angle-right"></i>
              <span class="btn__text">Start</span>
            </router-link>
          </div>
        </div>
        <div class="widget">
          <div class="widget__inner">
            <div class="widget__icon">
              <i class="fas fa-user-circle fa-fw"></i>
            </div>
            <h2 class="widget__title">Players</h2>
            <p class="widget__desc">Please click here to view and players</p>
            <router-link :to="{name: 'players'}" class="btn --primary">
              <i class="fas fa-angle-right"></i>
              <span class="btn__text">Start</span>
            </router-link>
          </div>
        </div>
        <div class="widget --full">
          <div class="widget__inner">
            <div class="widget__icon">
              <i class="fas fa-star fa-fw"></i>
            </div>
            <h2 class="widget__title">Fantasy</h2>
            <p class="widget__desc">Create a league</p>
            <router-link to="/fantasy" class="btn --primary">
              <i class="fas fa-angle-right"></i>
              <span class="btn__text">Start</span>
            </router-link>
          </div>
        </div>
      </nav>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>


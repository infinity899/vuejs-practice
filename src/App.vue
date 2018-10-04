<template>
  <div id="app">
    <section class="section-header">
      <Header/>
    </section>
    <NavBar v-if="$store.state.dashboardFlag"></NavBar>
    <section class="main-container row" :class="pageDasboard()">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/dashboard/NavBar'

export default {
  name: 'app',
  components: {
    Header,
    NavBar
  },
  methods: {
    pageDasboard() {
      // If route is dashboard than main container gets page-dashboard with specific style
      return this.$store.state.dashboardFlag ? 'page-dashboard' : ''
    }
  }
}
</script>

<style lang="scss">
  @import "./style/base.scss";

  .main-container:not(.page-dashboard) {
    background-color: $brand-light-color;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
    padding: 64px 90px;
    margin-left: 150px;
    margin-bottom: 80px;
    width: 1140px;
    height: 100%;

    &.page-dashboard {
    }
  }

  .section-header {
    width: 100%;
  }

</style>

<template>
  <div id="app">
    <section class="section-header">
      <Header/>
    </section>
    <section class="main-container row">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "./style/base.scss";

.main-container {
  background-color: $brand-light-color;
  padding: 64px 90px;
  width: 1140px;
  height: 100%;
}

.section-header {
  width: 100%;
}

</style>

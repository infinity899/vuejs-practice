<template>
  <ul class="navbar">
    <li class="navbar-menu-item active"><i class="material-icons icon-left">home</i>Overview</li>
    <li class="navbar-menu-item"><i class="material-icons icon-left">calendar_today</i>Tasks
      <Tasks :width="30"
             :height="30"
             css-classes="task-graph"
             ></Tasks></li>
    <li class="navbar-menu-item"><i class="material-icons icon-left">insert_chart</i>Reports</li>
    <li class="navbar-menu-item"><i class="material-icons icon-left">map</i>Blog</li>
    <h6 class="navbar-menu-item navbar-title">Settings</h6>
    <li class="navbar-menu-item"><i class="material-icons icon-left">settings</i>General</li>
    <li class="navbar-menu-item"><i class="material-icons icon-left">date_range</i>Seo</li>
    <li class="navbar-menu-item"><i class="material-icons icon-left">location_on</i>Local</li>
  </ul>
</template>

<script>
  import Tasks from './charts/Tasks'

  export default {
    components: {Tasks},
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

@import "../../style/base.scss";

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $spacing-l $spacing-xl;
  width: 280px;

  @media screen and (max-width: 1420px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  li {
    list-style-type: none;
  }

  .navbar-menu-item {
    display: flex;
    align-items: center;
    color: $light-gray-color-s;
    margin-bottom: $spacing-l;
    text-transform: uppercase;
    font-size: $f-size-s;

    @media screen and (max-width: 1420px) {
      margin-bottom: 0;
      margin-right: $spacing-s;
      font-size: 0;
    }

    &.navbar-title {
      font-size: $f-size-s;
    }

    &.active {
      color: $brand-primary-color;
    }

    .icon-left {
      margin-right: $spacing-s;
    }
  }

  .navbar-title {
    &::before,
    &::after {
      content: '';
      width: 36px;
      height: 2px;
      display: block;
      background-color: $light-gray-color-s;
    }

    &::before{
      margin-right: $spacing-s;
    }

    &::after {
      margin-left: $spacing-s;
    }
  }
}

.task-graph {
  margin-left: auto;
}

</style>
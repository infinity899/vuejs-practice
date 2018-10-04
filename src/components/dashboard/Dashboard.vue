<template>
  <div class="component-container">
    <div class="component-card">
      <h6 class="card-title">Local Visibility</h6>
      <div class="row">
        <div class="col-lg-6">
          <visibility-chart :width="400"
                            :height="125"
          ></visibility-chart>
        </div>
        <div class="col-lg-6">
          <div class="device-images">
            <img class="device-iphone" src="../../assets/iphone_wireframe.svg" alt="mac">
            <img class="device-ipad" src="../../assets/iPad_wireframe.svg" alt="mac">
          </div>
        </div>
        <div class="col-lg-4">
          <search-engines :width="120"
                          :height="120"
          ></search-engines>
          <social-media :width="120"
                        :height="120"
          ></social-media>
          <local-seo :width="120"
                     :height="120"
          ></local-seo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisibilityChart from './charts/VisibilityChart';
import SearchEngines from './charts/SearchEngines';
import SocialMedia from './charts/SocialMedia';
import LocalSeo from './charts/LocalSeo';

export default {
  data() {
    return {
      routeLink: ''
    }
  },
  components: {
    VisibilityChart,
    SearchEngines,
    SocialMedia,
    LocalSeo
  },
  methods: {

  },
  created() {
    if (this.$route.name === "Dashboard") {
      this.$store.state.dashboardFlag = true; // hide progress bar from header
    }
  },
  destroyed() {
    this.$store.state.dashboardFlag = false; // when component is destroyed display progress bar from header
  }
}
</script>

<style lang="scss" scoped>

  @import "../../style/base.scss";

  .component-card {
    background-color: $brand-light-color;
    box-shadow: $brand-box-shadow;
    padding: 64px;
    width: 1142px;

    .card-title {
      color: $brand-primary-color;
      font-size: 22px;
      text-transform: uppercase;
    }
  }

  .page-dashboard {
    .component-container {
      margin-top: 0;
    }
  }

  .device-iphone {
    width: 90px;
    height: 200px;
  }

  .device-ipad {
    width: 190px;
    height: 270px;
  }

  .device-laptop {
    width: 420px;
    height: 260px;
  }




</style>
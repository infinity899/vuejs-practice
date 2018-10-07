<template>
  <div class="component-container">
    <div class="component-card">
      <h6 class="card-title">Local Visibility</h6>
      <div class="row">
        <div class="col-lg-6 col-sm-12 chart-container">
          <div class="chart-header">
            <div class="chart-data">
              <div class="chart-initial">
                <span class="chart-data-number">2.147</span>
                <span class="chart-data-legend">Initial</span>
              </div>
              <div class="chart-current">
                <span class="chart-data-number">8.781</span>
                <span class="chart-data-legend">Current</span>
              </div>
            </div>
            <div class="chart-percentage">
              <div class="chart-percentage-number">
                <h1>356</h1>
              </div>
              <span class="chart-percentage-label">Improvement</span>
            </div>
          </div>
          <visibility-chart :width="400"
                            :height="125"
          ></visibility-chart>
          <div class="chart-legend">
            <p>Initial</p>
            <p>Current</p>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 devices-cotainer">
          <div class="device-images">
            <div class="device-images-item item-mac">
              <img src="../../assets/macbook_wireframe.svg" alt="mac">
              <img src="../../assets/mackfc.png" alt="mac" class="mac-image">
            </div>
            <div class="device-images-item item-ipad">
              <img src="../../assets/iPad_wireframe.svg" alt="ipad">
              <img src="../../assets/ipadkfc.png" alt="ipad" class="ipad-image">
            </div>
            <div class="device-images-item item-iphone">
              <img src="../../assets/iphone_wireframe.svg" alt="iphone">
              <img src="../../assets/mobilekfc.png" alt="mobile" class="iphone-image">
            </div>
          </div>
        </div>
        <div class="container-doghnuts row">
          <div class="col-lg-4">
            <search-engines :width="120"
                            :height="120"
                            css-classes="chart-wrapper"
            ></search-engines>
            <h5 class="medium-title">Search engines <span class="icon-right title-link"><img src="../../assets/link.svg"></span></h5>
          </div>
          <div class="col-lg-4">
            <social-media :width="120"
                          :height="120"
                          css-classes="chart-wrapper"
            ></social-media>
            <h5 class="medium-title">Social media <span class="icon-right title-link"><img src="../../assets/link.svg"></span></h5>
          </div>
          <div class="col-lg-4">
            <local-seo :width="120"
                       :height="120"
                       css-classes="chart-wrapper"
            ></local-seo>
            <h5 class="medium-title">Local Seo <span class="icon-right title-link"><img src="../../assets/link.svg"></span></h5>
          </div>
        </div>
      </div>
    </div>
    <div class="component-card n-p-b">
      <h6 class="card-title">Your tasks for this week</h6>
      <div class="card-task-container row">
        <div class="card-task card-task-main col-lg-7 col-xs-12">
          <div class="card-task-main-header">
            <div class="card-task-header-text">
              <p>Improve your keyword relevance</p>
            </div>
            <div class="card-task-header-icon">
              <img src="../../assets/if_G_google._logo_2258499.svg" alt="google">
            </div>
          </div>
          <div class="card-task-main-body">
            <h2>Incorporate <strong>steakhouse NYC, best burgers</strong> and <strong>places</strong> to eat in the &lt;TITLE&gt; of your website</h2>
          </div>
          <div class="card-task-main-footer">
            <button class="button button-primary">Complete now <i class="material-icons icon-right">arrow_forward</i></button>
            <p class="task-time-remaining"><i class="material-icons icon-left">access_time</i>10 min</p>
          </div>
        </div>
        <div class="col-lg-5 col-xs-12 card-task-secondary-container">
          <div class="card-task card-task-secondary card-social-media">
            <div class="card-task-secondary-header">
              <i class="material-icons">chat_bubble</i>
            </div>
            <div class="card-task-secondary-body">
              <h4>Add your company information on <strong>Twitter</strong></h4>
            </div>
            <div class="card-task-secondary-footer">
              <p class="task-time-remaining"><i class="material-icons icon-left">access_time</i>10 min</p>
            </div>
          </div>
          <div class="card-task card-task-secondary card-search-engines">

            <div class="card-task-secondary-header">
              <i class="material-icons">business_center</i>
            </div>
            <div class="card-task-secondary-body">
              <h4>Try to get a backlink from <strong>wheretoeat.com</strong></h4>
            </div>
            <div class="card-task-secondary-footer">
              <p class="task-time-remaining"><i class="material-icons icon-left">access_time</i>10 min</p>
            </div>
          </div>
        </div>
      </div>
        <button class="button button-text">See more</button>
    </div>
    <div class="component-card n-p-b">
      <h6 class="card-title">Ongoing events</h6>
      <div class="event-container">
        <div class="card-image">
          <div class="card-image-container">
            <img src="../../assets/menu1.jpeg" alt="menu">
          </div>
        </div>
        <div class="event-wrapper">
          <h5 class="event-title">Publication date: 10 NOV - 20 NOV</h5>
          <p class="event-details">Tom's Steak House opens daily at 11am and it's your perfect spot for your weekday business lunch or your weekend treat. With the best steaks around and a varity of dishes, your best lunch is just around the corner.</p>
        </div>
      </div>
      <button class="button button-text">Show more</button>
    </div>
    <div class="component-section">
      <div class="card-teaser-listing">
        <div class="card">
          <h4 class="card-title">Why reviews are essential for your business?</h4>
          <div class="teaser-post">
            <p class="teaser-date">30 MAY</p>
            <p class="teaser-publisher">posted by <a href="#">rankingCoach</a></p>
          </div>
          <div class="teaser-body">
            <p>After outlining local SEO as a whole, we will now focus on 3 different components of client reviews: how..</p>
          </div>
          <div class="teaser-image">
            <img src="../../assets/menthon-ponton.jpg" alt="ponton">
          </div>
        </div>
        <div class="card">
          <h4 class="card-title">rankingCoach ON TOUR!</h4>
          <div class="teaser-post">
            <p class="teaser-date">30 MAY</p>
            <p class="teaser-publisher">posted by <a href="#">rankingCoach</a></p>
          </div>
          <div class="teaser-body">
            <p>March 28th, 07:00. The rankingCoach team is waiting eagerly for the coach that will take us to the hosting...</p>
          </div>
          <div class="teaser-image">
            <img src="../../assets/bustrip.jpg" alt="ponton">
          </div>
        </div>
        <div class="card">
          <h4 class="card-title">10 terms to know about Search Engine Advertising - Part 1</h4>
          <div class="teaser-post">
            <p class="teaser-date">30 MAY</p>
            <p class="teaser-publisher">posted by <a href="#">rankingCoach</a></p>
          </div>
          <div class="teaser-body">
            <p>Search Engine Advertising refers to advertisements displayed in the search engines results, on some websites...</p>
          </div>
          <div class="teaser-image">
            <img src="../../assets/texting.jpg" alt="ponton">
          </div>
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
    @media screen and (min-width: $desktop) {
      max-width: 1142px;
    }

    @media screen and (max-width: $desktop-min) {
      padding: $spacing-s;
      margin: $spacing-m;
    }

    background-color: $brand-light-color;
    box-shadow: $brand-box-shadow;
    padding: 64px;
    margin-bottom: $spacing-l;

    .card-title {
      color: $brand-primary-color;
      font-size: 22px;
      text-transform: uppercase;
      margin-bottom: $spacing-xxl;
    }

    .row {
      justify-content: space-between;
      @media screen and (max-width: $desktop) {
        justify-content: center;
      }
    }

    .button-text {
      margin: auto;
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

  // Main chart

  .chart-legend {
    display: flex;
    justify-content: space-between;
    margin-top: $spacing-m;
    width: 400px;

    p {
      text-transform: uppercase;
      font-size: $f-size-s;
    }
  }

  .chart-container {
    max-width: 400px;

    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: $spacing-xl;
      height: 70px;
    }

    .chart-data {
      .chart-initial {
        color: $light-gray-color;
        margin-bottom: $spacing-m;
      }

      .chart-current {
        color: $brand-primary-color;
      }

      .chart-data-number {
        font-weight: 700;
        font-size: $f-size-m;
      }

      .chart-data-number {
        margin-right: $spacing-m;
      }
    }

    .chart-data-legend,
    .chart-percentage-label {
      font-weight: 700;
      text-transform: uppercase;
      font-size: $f-size-xs;
    }

    .chart-percentage-label,
    .chart-percentage-number {
      color: $brand-primary-color;
    }

    .chart-percentage-number {
      h1 {
        position: relative;
        margin-bottom: $spacing-s;
        color: $brand-primary-color;

        &::after {
          content: '\e5d8';
          font-family: 'Material Icons';
          font-weight: 700;
          font-style: normal;
          font-size: 14px;  /* Preferred icon size */
          display: inline-block;
          position: absolute;
          background-color: $brand-green-color;
          border-radius: 50%;
          color: $brand-light-color;
          transform: rotate(32deg);
          padding: 2px;
          width: 16px;
          text-align: center;
          line-height: 1;
          top: -15px;
          right: -4px;
        }

        &::before {
          content: '%';
          display: inline-block;
          font-size: 24px;
          position: absolute;
          right: 0;
          bottom: -9px;
        }
      }
    }
  }


  // Doghnuts charts
  .container-doghnuts {
    margin-top: 80px;
    width: 100%;

    @media screen and (max-width: $mobile) {
      flex-direction: column;
    }

    .medium-title {
      margin-top: $spacing-m;
      text-align: center;
    }

    .chart-wrapper {
      display: flex;
      justify-content: center;
    }
  }

  // Devices wireframe

  .devices-cotainer {
    max-width: 515px;

    @media screen and (max-width: $mobile) {
      display: none;
    }

    @media screen and (max-width: $desktop-min) {
      margin-top: $spacing-l;
    }
  }

  .device-images {
    height: 305px;
    position: relative;

    &-item {
      position: absolute;
    }

    .item-ipad {
      height: 265px;
      width: 38%;
      right: 5%;
      bottom: 10%;

      .ipad-image {
        position: absolute;
        width: 84%;
        left: 7%;
        bottom: 12%;
      }
    }

    .item-iphone {
      height: 195px;
      width: 19%;
      right: 34%;
      bottom: 2%;

      .iphone-image {
        position: absolute;
        width: 81%;
        left: 10%;
        bottom: 19%;
      }
    }

    .item-mac {
      width: 84%;
      height: 270px;

      .mac-image {
        position: absolute;
        width: 79%;
        left: 13%;
        bottom: 16%;
        height: 74%;
      }
    }
  }

  // Task cards
  .card-task-container {
    @media screen and (min-width: $desktop) {
      margin-left: -50px;
      margin-right: -50px;
    }

    .material-icons {
      color: $brand-light-color;
    }

    .card-task-secondary-container {
      @media screen and (max-width: $bg-screen-min) {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .card-task-secondary {
      height: 196px;
      padding: 30px 30px 55px 55px;


      &:first-of-type {
        @media screen and (min-width: $bg-screen) {
          margin-bottom: $spacing-s;
        }
      }
    }

    h2,p,h4 {
      color: $brand-light-color;
    }

    h2 {
      @media screen and (max-width: $mobile) {
        font-size: $f-size-m;
      }
    }

    .card-task-main-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: $spacing-m;
    }

    .button-primary {
      background-color: transparent;
      border: 1px solid $brand-light-color;
    }

    .card-task-main-body {
      margin-bottom: $spacing-xl;
    }

    .card-task-main-footer {
      display: flex;
      justify-content: space-between;
    }

    .task-time-remaining {
      display: flex;
      align-items: center;
    }
  }

  .card-task-main {
    height: 400px;
    background-image: url("../../assets/search_engines.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 70px 55px;

    img {
      width: 42px;
      height: 42px;
    }
  }

  .card-task-secondary {
    &-body {
      margin-bottom: $spacing-m;
      max-width: 280px;
    }

    &-header {
      text-align: right;
    }
  }


  .card-social-media {
    background-image: url("../../assets/social_media.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
  }

  .card-search-engines {
    background-image: url("../../assets/business_listings.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
  }

  // Events style
  .event-container {
    display: flex;
    align-items: center;
    margin-bottom: $spacing-xl;

    @media screen and (max-width: $mobile) {
      flex-wrap: wrap;
      justify-content: center;
    }


    .event-wrapper {
      margin-left: $spacing-xl;

      @media screen and (max-width: $mobile) {
        margin-top: $spacing-m;
      }
    }

    .event-title {
      color: $brand-primary-color;
      text-transform: uppercase;
      margin-bottom: $spacing-xl;
    }

    .event-details {
      padding-right: $spacing-xxl;
    }
  }

  // Teasers
  .card-title {
    margin-bottom: $spacing-m;
  }

  .teaser-post {
    display: flex;
    align-items: center;

    p {
      font-size: 10px;
      text-transform: uppercase;

      a {
        color: $brand-blue-color;
        text-transform: none;
      }
    }

    .teaser-date::after {
      content: '|';
      display: inline-block;
      width: 1px;
      margin-left: $spacing-s;
    }

    .teaser-publisher {
      margin-left: $spacing-s;
    }
  }

  .teaser-post,
  .teaser-body {
    margin-bottom: $spacing-l;
  }

  .teaser-image {
    height: 233px;
    overflow: hidden;
    margin-left: -24px;
    margin-right: -24px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .component-section {
    @media screen and (min-width: $desktop) {
      max-width: 1142px;
    }
  }

  .card-teaser-listing {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: $spacing-xxl;

    @media screen and (max-width: $bg-screen) {
      justify-content: center;
    }

    .card {
      padding: $spacing-xl $spacing-xl $spacing-s $spacing-xl;
      flex-basis: 32.3%;

      @media screen and (max-width: $bg-screen) {
        flex-basis: 77%;
        margin-bottom: $spacing-l;
      }

      &:not(:last-of-type) {
        @media screen and (min-width: $bg-screen-min) {
          margin-right: $spacing-m;
        }
      }
    }
  }

</style>
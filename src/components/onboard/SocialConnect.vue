<template>
  <div class="component-container">
    <div class="component-intro-text">
      <h1 class="intro-title">Connect rankingCoach to your social media accounts</h1>
      <p>Social media links make your website even more relevant and interactive. If you already have social media accounts for your business, you can manually connect them now.</p>
    </div>
    <div class="social-wrapper row">
      <div class="col-lg-4 col-xs-12 social-block">
        <div class="social-media-icon">
          <img src="../../assets/facebookico.svg" alt="facebook">
        </div>
        <h5 class="social-media-title">
          Facebook
        </h5>
        <p class="social-media-user">
          Connected as: <b>@tomssteakhouse</b>
        </p>
        <button class="button button-secondary">DISCONNECT ACCOUNT</button> 
      </div>
      <div class="col-lg-4 col-xs-12 social-block">
        <div class="social-media-icon">
          <img src="../../assets/twitter.svg" alt="twitter">
        </div>
        <h5 class="social-media-title">
          Twitter
        </h5>
        <p class="social-media-user">
          Connected as: <b>@tomssteakhouse</b>
        </p>
        <button class="button button-secondary">DISCONNECT ACCOUNT</button> 
      </div>
      <div class="col-lg-4 col-xs-12 social-block">
        <div class="social-media-icon">
          <img src="../../assets/gplus.svg" alt="gplus">
        </div>
        <h6 class="social-media-title">
          Google Plus
        </h6>
        <p class="social-media-user">
        </p>
        <button class="button button-primary">CONNECT ACCOUNT</button> 
      </div>
    </div>
    <div class="action-buttons">
      <router-link v-bind:to="'/images'"><button class="button button-secondary"><i class="material-icons">arrow_back</i>Back</button></router-link>
      <router-link v-bind:to="'/review'"><button class="button button-primary">Next<i class="material-icons">arrow_forward</i></button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "../../style/base.scss";

.intro-title {
  color: $brand-primary-color;
  font-size: $f-size-xl;
}

.social-wrapper {
  margin-top: 100px;
}

.social-block {
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: $spacing-m;
  }

  .button {
    margin-top: auto;
  }

  img {
    width: 50px;
    height: 50px;
  }
}

.social-media-title {
  text-transform: uppercase;
  color: $brand-secondary-color;
}

</style>



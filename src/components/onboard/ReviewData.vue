<template>
  <div class="component-container">
    <div class="component-intro-text">
      <h1 class="intro-title">Please review your data before pressing the Sync button.</h1>
    </div>
    <div class="image-cover">
      <img src="../../assets/FlamedSteaks.jpg" alt="seaks">
    </div>
    <div class="image-logo">
       <div class="card-image">
          <div class="card-image-container">
           <img src="../../assets/steaklogo.jpeg" alt="logo">
          </div>
        </div>
    </div>
    <div class="info-container row">
      <div class="col-lg-4 col-xs-12 col-sm-12">
        <div class="info-wrapper">
          <div class="info-title">
            <h4>Address</h4>
            <i class="material-icons">edit</i>
          </div>
          <div class="info-details-wrapper">
            <p><i class="material-icons">business_center</i>TOM'S STAKE HOUSE LOCATION</p>
            <p><i class="material-icons">location_on</i>1901 West North Avenue, Melrose Park, Ilionois, 60160, USA</p>
            <p><i class="material-icons">phone</i>+1 617-425-4444</p>
            <p><i class="material-icons">mobile_screen_share</i>+1 617-425-4444</p>
            <p><i class="material-icons">launch</i>www.tomsstakehouse.com</p>
            <p><i class="material-icons">mail_outline</i>toms@tomsstakehouse.com</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-xs-12 col-sm-12">
        <div class="info-wrapper">
          <div class="info-title">
            <h4>Opening Hours</h4>
            <i class="material-icons">edit</i>
          </div>
          <div class="info-details-wrapper">
             <div class="opening-hours-wrapper"
                  v-for="item in $store.state.schedule" :key="item.id">
              <p class="opening-day">{{ item.day}}</p>
              <p class="opening-hour"> {{ item.openingTime}}</p>
              <p class="closing-hour">{{ item.closingTime }}</p>
          </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-xs-12 col-sm-12">
        <div class="info-wrapper">
          <div class="info-title">
            <h4>Contact Info</h4>
            <i class="material-icons">edit</i>
          </div>
          <div class="info-details-wrapper">
            <img src="../../assets/location.png" alt="location">
          </div>
        </div>
      </div>
    </div>
    <div class="component-container">
      <h4 class="section-title">Short description <i class="material-icons">edit</i></h4>
      <p>Do you enjoy a steak dinner at Tom's? How about a glass of wine for your dinner? Or even an amazing salad? Then the Tom's Dinner club is for you</p>
    </div>
    <div class="component-container">
      <h4 class="section-title">Long description <i class="material-icons">edit</i></h4>
      <p>The charm of Tom's stake house has little to do with the steak that we serve or our special salad dressing. Is is rooted in the people who walk through our doors. Whether they are regulars, first-timers or guests at a party, each leaves with a special story. We encourage yo to share those stories here, on a spcial "Tom's stories" page. We will feature some of our favourites on our Facebook page!</p>
    </div>
    <div class="component-container">
      <h4 class="section-title">Business sectors <i class="material-icons">edit</i></h4>
      <div class="tag">
        <p>Food & Drink > Restaurant > Steakhouse</p>
      </div>
    </div>
    <div class="component-container">
      <h4 class="section-title">Your keywords <i class="material-icons">edit</i></h4>
      <div class="tag">
        <p>steak house</p>
      </div>
      <div class="tag">
        <p>best burgers</p>
      </div>
      <div class="tag">
        <p>premium beef</p>
      </div>
      <div class="tag">
        <p>steak restaurant</p>
      </div>
      <div class="tag">
        <p>places to eat</p>
      </div>
      <div class="tag">
        <p>quality steak house</p>
      </div>
      <div class="tag">
        <p>where to eat</p>
      </div>
      <div class="tag">
        <p>t bone steak</p>
      </div>
    </div>
    <div class="component-images-container">
      <h4 class="section-title">Photos <i class="material-icons">edit</i></h4>
      <div class="card-image">
        <div class="card-image-container">
          <img src="../../assets/menu.jpeg" alt="menu">
        </div>
      </div>
      <div class="card-image">
        <div class="card-image-container">
          <img src="../../assets/menu6.jpg" alt="menu">
        </div>
      </div>
      <div class="card-image">
        <div class="card-image-container">
          <img src="../../assets/menu1.jpeg" alt="menu">
        </div>
      </div>
      <div class="card-image">
        <div class="card-image-container">
          <img src="../../assets/menu2.jpeg" alt="menu">
        </div>
      </div>
      <div class="card-image">
        <div class="card-image-container">
          <img src="../../assets/menu3.jpeg" alt="menu">
        </div>
      </div>
      <div class="card-image">
        <div class="card-image-container">
          <img src="../../assets/menu4.jpeg" alt="menu">
        </div>
      </div>
      <div class="card-image">
        <div class="card-image-container">
          <img src="../../assets/menu5.jpeg" alt="menu">
        </div>
      </div>
    </div>
    <div class="social-wrapper row">
      <h4 class="section-title">Social Media</h4>
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
    </div>
    <div class="action-buttons">
      <router-link v-bind:to="'/dashboard'"><button class="button button-primary"><i class="material-icons icon-left">autorenew</i>Synchronise business directories</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";

.image-cover {
  display: flex;
  align-items: center;
  margin-right: -80px;
  margin-left: -80px;
  margin-top: $spacing-xxl;
  overflow: hidden;
  height: 212px;

  @media screen and (max-width: $mobile) {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }
}

.component-images-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: $spacing-xl;

  @media screen and (max-width: $mobile) {
    justify-content: center;
  }

  .card-image {
    flex-basis: 23%;
    margin-bottom: $spacing-l;

    &:not(:last-of-type) {
      margin-right: $spacing-m;
    }
  }
}

.image-logo {
  @media screen and (min-width: $mobile-min) {
    position: relative;
    top: -104px;
    left: 43px;
  }

  @media screen and (max-width: $mobile) {
    display: flex;
    justify-content: center;
  }
}

.info-wrapper {
  max-width: 310px;
}

.info-container {
  .col-sm-12 {
    @media screen and (max-width: $bg-screen-min) {
      display: flex;
      justify-content: center;

      .info-title {
        justify-content: center;
      }
    }
  }
}

.info-details-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  > * {
    margin-bottom: $spacing-m;
    display: flex;
    align-items: flex-start;
  }

  .material-icons {
    margin-right: $spacing-s;
  }
}

.info-title,
.section-title {
  display: flex;
  align-items: center;
  margin-bottom: $spacing-xxl;

  .material-icons {
    margin-left: $spacing-s;
    color: $dark-gray-color-xxs;
    opacity: 0.4;
  }

  h4 {
    color: $brand-primary-color;
  }
}

.opening-hour {
  margin-right: $spacing-xs;
}

.closing-hour:not(:empty)::before {
  content: '-';
  width: 4px;
  height: 1px;
  background-image: $brand-secondary-color;
  margin-right: $spacing-xs;
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



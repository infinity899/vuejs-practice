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
      <div class="col-lg-4">
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
      <div class="col-lg-4">
        <div class="info-wrapper">
          <div class="info-title">
            <h4>Opening Hours</h4>
            <i class="material-icons">edit</i>
          </div>
          <div class="info-details-wrapper">
             <div class="opening-hours-wrapper"
                  v-for="item in $store.state.schedule" :key="item.id">
              <p class="opening-day">{{ item.day}}</p>
              <p class="opening-hour"> {{ item.openingTime}}:00 <span>-</span></p>
              <p class="closing-hour">{{ item.closingTime }}:00</p>
          </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
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

  img {
    width: 100%;
    height: auto;
  }
}

.card-image {
  background-color: $brand-light-color;
  border: 1px solid $light-gray-color-xxs;
  padding: $spacing-s;
  width: 150px;
  height: 150px;
}

.card-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

.image-logo {
  position: relative;
  top: -104px;
  left: 43px;
}

.info-details-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  > * {
    margin-bottom: $spacing-l;
    display: flex;
    align-items: flex-start;
  }

  .material-icons {
    margin-right: $spacing-s;
  }
}

.info-title {
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

</style>



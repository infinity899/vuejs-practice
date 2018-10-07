<template>
    <header class="header">
      <div class="header-container">
        <div class="header-logo">
          <img src="../assets/logo.svg" alt="logo">
        </div>
        <div class="header-progress" v-if="!$store.state.dashboardFlag">
          <div class="header-progress-item">
            <router-link v-bind:to="'/open-hours'">
              <div class="header-progress-icon">
                <i class="material-icons">format_align_right</i>
              </div>
            </router-link>
          </div>
          <div class="header-progress-item">
            <router-link v-bind:to="'/connect'">
              <div class="header-progress-icon">
                <i class="material-icons">chat</i>
              </div>
            </router-link>
          </div>
          <div class="header-progress-item">
            <router-link v-bind:to="'/review'">
              <div class="header-progress-icon">
                <i class="material-icons">autorenew</i>
              </div>
            </router-link>
          </div>
        </div>
        <div class="header-profile-picture">
          <img src="../assets/avatar.png" alt="avatar">
        </div>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
  
  .header {
    height: 90px;
    padding: $spacing-l;

    @media screen and (min-width: $desktop) {
      width: 75%;
    }
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-profile-picture {
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 2px solid $brand-primary-color;
    border-radius: 100%;
    
    height: 45px;
    width: 45px;

    img {
      width: auto;
      height: 100%;
      margin: auto;
    }
  }

  .header-logo {
    margin-right: auto;
  }

  .header-progress {
    display: flex;
    align-items: center;
    margin-right: auto;

    @media screen and (max-width: $desktop-min) {
      display: none;
    }

    .header-progress-item {
      display: flex;
      align-items: center;

      &:not(:last-of-type)::after {
        content: '';
        height: 2px;
        width: 80px;
        background-color: $brand-primary-color;
      }
      
      .header-progress-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $brand-primary-color;
        border-radius: 100%;
        height: 35px;
        width: 35px;

        .material-icons {
          color: $brand-primary-color;
          font-size: $f-size-m;
        }
      }
    }

    .router-link-active {
      .header-progress-icon {
        background-color: $brand-primary-color;
        .material-icons {
          color: $brand-light-color;
        }
      }
    }
  }

</style>



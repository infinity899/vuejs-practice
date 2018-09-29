<template>
    <header class="header">
      <div class="header-container">
        <div class="header-logo">
          <img src="../assets/logo.svg" alt="logo">
        </div>
        <div class="header-progress">
          <div class="header-progress-item">
            <div class="header-progress-icon">
              <i class="material-icons">format_align_right</i>
            </div>
          </div>
          <div class="header-progress-item">
            <div class="header-progress-icon">
              <i class="material-icons">chat</i>
            </div>
          </div>
          <div class="header-progress-item">
            <div class="header-progress-icon">
              <i class="material-icons">refresh</i>
            </div>
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
  
  header {
    height: 90px;
    padding: $spacing-xl;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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

  .header-progress {
    display: flex;
    align-items: center;

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
        }
      }
    }
  }

</style>



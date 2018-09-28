<template>
  <div class="header">
    <header>
      <div class="header-container">
        <div class="header-logo">
          <img src="../assets/logo.svg" alt="logo">
        </div>
        <div class="header-progress">
          <div class="header-progress-item">
            <div class="header-progress-icon">
              <img src="../assets/outline-list-24px.svg" alt="progress">
            </div>
          </div>
          <div class="header-progress-item">
            <div class="header-progress-icon">
              <img src="../assets/round-chat-24px.svg" alt="progress">
            </div>
          </div>
          <div class="header-progress-item">
            <div class="header-progress-icon">
              <img src="../assets/outline-refresh-24px .svg" alt="progress">
            </div>
          </div>
        </div>
        <div class="header-profile-picture">
          <img src="../assets/avatar.png" alt="avatar">
        </div>
      </div>
    </header>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
  
  header {
    height: 90px;
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
        background-color: #234361;
      }
      
      .header-progress-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #234361;
        border-radius: 100%;
        height: 35px;
        width: 35px;
      }
    }
  }

</style>



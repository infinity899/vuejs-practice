<template>
  <div class="component-container">
    <div class="component-intro-text">
      <h1 class="intro-title">When are you open for business?</h1>
      <p>Many directories display the opening hours for your business. This helps customers find the best time to visit or get in contact with you.</p>
    </div>
    <div class="container-images row">
      <div class="col-lg-6 image-wrapper">
        <div class="card-image">
          <div class="card-image-container">
           <img src="../../assets/steaklogo.jpeg" alt="logo">
          </div>
        </div>
        <div class="help-text-container">
          <div class="help-text-title">
            <h4>Logo</h4>
          </div>
          <div class="help-text-paragraph">
            <p>Upload your company's logo. Maximum size of 5MB, file format PNG or JPG, aspect ratio 1:1</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 image-wrapper">
        <div class="card-image">
          <div class="card-image-container">
            <img src="../../assets/FlamedSteaks.jpg" alt="main">
          </div>
        </div>
        <div class="help-text-container">
          <div class="help-text-title">
            <h4>Main photo</h4>
          </div>
          <div class="help-text-paragraph">
            <p>Upload additional pictures showing your company. Maximum size 5MB, file format PNG or JPG, Minimum resolution: 720px tall and 720px wide.</p>
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

<style lang="scss">
@import "../../style/base.scss";

.container-images {
  margin-top: $spacing-xxxl;
}

.image-wrapper {
  display: flex;

  .help-text-container {
    margin-left: $spacing-l;  
  }

  .help-text-title {
    margin-bottom: $spacing-l;
  }
}

.card-image {
  background-color: $brand-light-color;
  border: 1px solid $light-gray-color-xxs;
  padding: $spacing-xs;
  width: 218px;
  height: 218px;

  .card-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;

    img {
        height: 100%;
        width: auto;
      }
  }
}
</style>



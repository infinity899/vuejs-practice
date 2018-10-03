<template>
  <div class="component-container">
    <div class="component-intro-text">
      <h1 class="intro-title">When are you open for business?</h1>
      <p>Many directories display the opening hours for your business. This helps customers find the best time to visit or get in contact with you.</p>
    </div>
    <div class="container-images row">
      <div class="col-lg-6 image-wrapper">
        <div class="card-image">
          <div class="card-image-container hidden-icons-container">
           <img src="../../assets/steaklogo.jpeg" alt="logo">

           <!-- edit and delete button displayed only on image hover -->
           <div class="icons-hidden">
             <div class="icons-hidden-wrapper">
               <i class="material-icons">edit</i>
               <p>Barbeiten</p>
             </div>
             <div class="icons-hidden-wrapper">
               <i class="material-icons">delete</i>
               <p>LOSCHEN</p>
             </div>
           </div>
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
    <div class="component-container">
      <h4 class="section-title">Other photos</h4>
      <p>Upload a picture that is best suited to attract your customers. Maximum size 5MB, file format PNG or JPG. Minimul resolution: 720px tall and 720px wide.</p>
      <p>You can upload as many additional pictures as  you want-some directories may allows more photos than others. Order your photos in order of importance to make sure the best ones appear most often.</p>
    </div>
    <div class="component-images-container">
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
      <div class="card-image-browse">
        <input id="browse" type="file" name="filename" accept="image/gif, image/jpeg, image/png">
        <i class="material-icons icon-image">image</i>
        <i class="material-icons icon-add">add_circle</i>
      </div>
    </div>
    <div class="component-container">
      <h4 class="section-title">Youtube url</h4>
      <p>Some directories can display video. Some directories need to have videos uploaded to them, others may only show embedded YouTube videos. It is recommended to upload a video and paste a youtube link to a video about your business</p>
      <div class="video-container">
        <div class="video-thumbnail">
          <img src="../../assets/tomsteak.png" alt="video">
          <i class="material-icons play-icon">play_circle_outline</i>
        </div>
        <div class="video-details">
          <div class="video-link">
            <h6>URL</h6>
            <input type="text" id="url" name="url" class="input-details"/>
          </div>
          <div class="video-description">
            <h6>Description</h6>
            <textarea rows="4" cols="50" name="comment" maxlength="250" class="input-details"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="action-buttons">
      <router-link v-bind:to="'/open-hours'"><button class="button button-secondary"><i class="material-icons">arrow_back</i>Back</button></router-link>
      <router-link v-bind:to="'/connect'"><button class="button button-primary">Next<i class="material-icons">arrow_forward</i></button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
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
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;

    .icons-hidden {
      display: none;

      .material-icons {
        color: $brand-light-color;
        font-size: $f-size-xxl;
      }
    }

    &.hidden-icons-container:hover {
       p {
         color: $light-gray-color-xxs;
       }

      .icons-hidden {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute
      }

      img {
        opacity: 0.5;
      }
    }

    img {
        height: 100%;
        width: auto;
      }

      .icons-hidden-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          font-size: $f-size-s;
        }
      }

      .icons-hidden-wrapper:not(:last-of-type) {
        margin-right: $spacing-xl;
        position: relative;

        &::after {
          position: absolute;
          content: '';
          width: 1px;
          height: 40px;
          right: -17px;
          top: 7%;
          background-color: $brand-light-color;
        }
      }
  }
}

.component-images-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: $spacing-xl;

  .card-image,
  .card-image-browse {
    flex-basis: 23%;
    margin-bottom: $spacing-l;

    &:not(:last-of-type) {
      margin-right: $spacing-m;
    }
  }
}

.card-image-browse {
  position: relative;
  height: 208px;
  border: 1px dotted $brand-secondary-color;

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 3;
    position: relative;
  }

  .material-icons {
    position: absolute;
  }

  .icon-image {
    color: $dark-gray-color-xxs;
    font-size: 70px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
  }

  .icon-add {
    color: $brand-blue-color;
    font-size: $f-size-xl;
    left: 56%;
    top: 50%;
    z-index: 2;
  }
}

.video-container {
   margin-top: $spacing-xxxl;
   display: flex;
}

.video-details {
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  flex: 1;
  margin-left: $spacing-xl;

  .input-details {
    font-family: $font-family-base;
    font-size: $f-size;
    color: $brand-secondary-color;
    padding: 12px 8px;
    width: 100%;
  }
}

.video-thumbnail {
  display: flex;
  align-items: center;
  background-color: #000000;
  overflow: hidden;
  position: relative; 
  width: 218px;
  height: 218px;

  .play-icon {
    position: absolute;
    left: 50%;
    font-size: $f-size-xl;
    transform: translateX(-50%);
    color: $brand-light-color;
  }

  img {
    width: 100%;
    height: auto;
    opacity: 0.4;
  }
}
</style>



<template>
  <div class="component-container">
    <div class="component-intro-text">
      <h1 class="intro-title">When are you open for business?</h1>
      <p>Many directories display the opening hours for your business. This helps customers find the best time to visit or get in contact with you.</p>
    </div>
    <div class="business-hours-widget">
      <div class="widget-week-days">
        <h6>Weekdays</h6>
        <span class="widget-button button-calendar"><i class="material-icons">date_range</i></span>
        <input id="mon" type="checkbox" name="MON" value="mon" v-model="pickedDays">
        <label for="mon" class="widget-button">MON</label>
        <input id="tue" type="checkbox" name="tue" value="tue" v-model="pickedDays">
        <label for="tue" class="widget-button">TUE</label>
        <input id="wed" type="checkbox" name="wed" value="wed" v-model="pickedDays">
        <label for="wed" class="widget-button">WED</label>
        <input id="thu" type="checkbox" name="thu" value="thu" v-model="pickedDays">
        <label for="thu" class="widget-button">THU</label>
        <input id="fri" type="checkbox" name="fri" value="fri" v-model="pickedDays">
        <label for="fri" class="widget-button">FRI</label>
        <input id="sat" type="checkbox" name="sat" value="sat" v-model="pickedDays">
        <label for="sat" class="widget-button">SAT</label>
        <input id="sun" type="checkbox" name="sun" value="sun" v-model="pickedDays">
        <label for="sun" class="widget-button">SUN</label>
      </div>
      <div class="widget-hours">
        <div class="widget-hours-wrapper">
          <h6>FROM</h6>
          <i class="material-icons hours-icon">access_time</i>
          <select class="widget-button" v-model="selectedOpeningTime">
            <option v-for="openingTime in filteredOpeningTimes" :key="openingTime.id" 
                    v-bind:value="openingTime.value">
              {{ openingTime.name }}
            </option>
          </select>
        </div>
         <div class="widget-hours-wrapper">
          <h6>TO</h6>
          <i class="material-icons hours-icon">access_time</i>
          <select class="widget-button" v-model="selectedClosingTime">
            <option v-for="closingTime in filteredClosingTimes" :key="closingTime.id" 
                    v-bind:value="closingTime.value">
              {{ closingTime.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="opening-hours-container">
      <button class="button-text button-add-hours" @click="addHours" ref="addBtn"><i class="material-icons">add_circle</i>Add Opening Hours</button>
      <div class="opening-hours-wrapper"
            v-for="item in $store.state.schedule" :key="item.id">
        <p class="opening-day">{{ item.day}}</p>
        <p class="opening-hour"> {{ item.openingTime}}<span>-</span></p>
        <p class="closing-hour">{{ item.closingTime }}</p>
      </div>
    </div>
    <div class="opening-hours-info">
      <h6>Additional information regarding opening hours</h6>
      <textarea rows="15" cols="50" name="comment" maxlength="250"></textarea>
    </div>
    <div class="action-buttons">
      <button class="button button-secondary"><i class="material-icons">arrow_back</i>Back</button>
      <router-link v-bind:to="'/images'"><button class="button button-primary" @click="closedDays">Next<i class="material-icons">arrow_forward</i></button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputsArray: [],
      disabledCounter: 0,
      selectedOpeningTime: 11,
      selectedClosingTime: 23,
      sorter: {
        "mon": 1,
        "tue": 2,
        "wed": 3,
        "thu": 4,
        "fri": 5,
        "sat": 6,
        "sun": 7
      },
      pickedDays: [],
      openingHours: [],
      openingTimes: [
        { value: 1, name: '1:00' },
        { value: 2, name: '2:00' },
        { value: 3, name: '3:00' },
        { value: 4, name: '4:00' },
        { value: 5, name: '5:00' },
        { value: 6, name: '6:00' },
        { value: 7, name: '7:00' },
        { value: 8, name: '8:00' },
        { value: 9, name: '9:00' },
        { value: 10, name: '10:00' },
        { value: 11, name: '11:00' },
        { value: 12, name: '12:00' },
        { value: 13, name: '13:00' },
        { value: 14, name: '14:00' },
        { value: 15, name: '15:00' },
        { value: 16, name: '16:00' },
        { value: 17, name: '17:00' },
        { value: 18, name: '18:00' },
        { value: 19, name: '19:00' },
        { value: 20, name: '20:00' },
        { value: 21, name: '21:00' },
        { value: 22, name: '22:00' },
        { value: 23, name: '23:00' },
        { value: 24, name: '24:00' }
      ],
      closingTimes: [
      { value: 1, name: '1:00' },
        { value: 2, name: '2:00' },
        { value: 3, name: '3:00' },
        { value: 4, name: '4:00' },
        { value: 5, name: '5:00' },
        { value: 6, name: '6:00' },
        { value: 7, name: '7:00' },
        { value: 8, name: '8:00' },
        { value: 9, name: '9:00' },
        { value: 10, name: '10:00' },
        { value: 11, name: '11:00' },
        { value: 12, name: '12:00' },
        { value: 13, name: '13:00' },
        { value: 14, name: '14:00' },
        { value: 15, name: '15:00' },
        { value: 16, name: '16:00' },
        { value: 17, name: '17:00' },
        { value: 18, name: '18:00' },
        { value: 19, name: '19:00' },
        { value: 20, name: '20:00' },
        { value: 21, name: '21:00' },
        { value: 22, name: '22:00' },
        { value: 23, name: '23:00' },
        { value: 24, name: '24:00' }
      ]
    }
  },
  computed: {
    filteredOpeningTimes() {
      // Filter times after every pick so that user can not pick closing hours earlier then starting hours
      return this.openingTimes.filter(function(el) {
      return el.value < this.selectedClosingTime;
    }, this);
    },
    filteredClosingTimes() {
      // Filter times after every pick so that user can not pick starting hours later then closing hours
      return this.closingTimes.filter(function (el) {
        return el.value > this.selectedOpeningTime;
      }, this);
    }
  },
  methods: {
    disableInputs() {
      let that = this;
      this.inputsArray.forEach(function(input) {
        if(input.checked) {
          input.click();
          input.disabled = true;
          that.disabledCounter++;
        }
      })   
    },
    addHours() {
      // convert HTML collection of inputs to array
      this.inputsArray = Array.from(document.getElementsByTagName("input")); 
      if (this.pickedDays.length === 0) {
        alert('please choose a day');
      } else {
        let that = this;
        this.pickedDays.forEach(function(day) {
          that.$store.state.schedule.push({
          day: day,
          openingTime: that.selectedOpeningTime + ':00',
          closingTime: that.selectedClosingTime + ':00'
        });
        })
      }
      this.disableInputs(); // disable picking day after picked hours for it
      if(this.disabledCounter === 7) {
        this.$refs.addBtn.disabled = true; // disable add hours btn if all days got picked hours
      }
    },
    closedDays() {
      // If day is not picked than set the hours as closed
      let that = this;
      this.inputsArray.forEach(function(input) {
        if(!input.disabled) {
          that.$store.state.schedule.push({
            day: input.value,
            openingTime: 'Closed',
            closingTime: null
          });
        }
      })
      this.sortDays(); // sort store by days
    },
    sortDays() {
      let that = this;
      this.$store.state.schedule.sort(function sortByDay(a, b) {
        return that.sorter[a.day] > that.sorter[b.day];
      });
    }
  }
}
</script>

<style lang="scss">
@import "../../style/base.scss";

.component-intro-text {
  text-align: center;
}

.intro-title {
  margin-bottom: $spacing-xl;
}

.business-hours-widget {
  display: flex;
  margin-top: $spacing-xxxl;
  margin-bottom: $spacing-l;

  .widget-button,
  .hours-icon {
    border-radius: 2px;
    border: 1px solid $light-gray-color-xs;
    color: $brand-primary-color;
    text-align: center;
    font-size: $f-size-s;
  } 
  
  .widget-button {
    cursor: pointer;
    padding: 14px 16px;
    margin-right: $spacing-s;
    text-transform: uppercase;
    background-color: transparent;
  }

  select {
    min-width: 70px;
  }

  .hours-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.widget-hours {
  flex-basis: 30%;
  display: flex;
  align-items: center;

  @media screen and (max-width: $desktop-min) {
    flex-direction: column;
    align-items: flex-start;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  select::-ms-expand {
    display: none;
  }

  .widget-hours-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-width: 128px;

    h6 {
      margin-bottom: $spacing-s;
      width: 100%;
    }
  }
}

.widget-week-days {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 60%;
  margin-right: $spacing-xxl;

  .widget-button {
    margin-top: $spacing-s;
    min-width: 63px;
  }

  h6 {
    text-transform: uppercase;
    width: 100%;
  }

  .material-icons {
    color: $brand-primary-color;
    font-size: $f-size;
  }

  input {
    display: none;
  }

  input:checked + label {
    color: $brand-light-color;
    background-color: $brand-blue-color;
    border: 1px solid $brand-blue-color;
  }

  input[disabled] + label {
    cursor: initial;
    background-color: $brand-blue-color;
    opacity: 0.5;
  }

  .button-calendar {
    cursor: default;
    width: 65px;
    height: 45px;
  }
}

.opening-hours-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dotted $light-gray-color-xs;
}

.opening-hours-wrapper {
  display: flex;
  align-items: flex-start;
  min-width: 205px;
  
  .opening-day {
    text-transform: uppercase;
    font-weight: bold;
    width: 120px;
  }
}

.button-add-hours {
  display: flex;
  align-items: center;
  font-size: $f-size-s;
  text-transform: uppercase;
  margin: $spacing-m 0;

  .material-icons {
    margin-right: $spacing-xs;
  }
}

.opening-hours-info {
  margin-top: $spacing-xxxl;

  textarea {
    border-color: $light-gray-color-xs;
    width: 100%;
  }
}

</style>



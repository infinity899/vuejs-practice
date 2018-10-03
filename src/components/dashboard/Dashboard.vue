<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      routeLink: ''
    }
  },
  methods: {

  },
  created() {
    if (this.$route.name === "Dashboard") {
      this.$store.state.hideProgress = true; // hide progress bar from header
    }
  },
  destroyed() {
    this.$store.state.hideProgress = false; // when component is destroyed display progress bar from header
  }
}
</script>

<style lang="scss" scoped>


</style>
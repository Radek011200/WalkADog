<template>
  <div>
    <h1 class="head-title"> {{title}}</h1>
    <v-divider>inset</v-divider>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    title: {
      type: String,
      default: "Title"
    }
  }
}
</script>

<style scoped>

</style>
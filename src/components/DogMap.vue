<template>
  <h1><img :src="image" style="height: 40px; width: 40px"/>{{DogName}}</h1>
</template>

<script>
import logo from "@/assets/logo.svg"
// import axios from "axios"
export default {
  name: "DogMap",
  props:{
    image: {
      default:logo
    },
    DogName: {
      Type: String,
      default: "Dog"
    }
  },
}
</script>
<style scoped>
</style>

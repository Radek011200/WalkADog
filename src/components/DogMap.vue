<template>
  <h1 style="position: relative; top:5%; left: 46.5%;"><img :src="image" style="height: 40px; width: 40px"/>{{dogsDataList[0].name}}</h1>
</template>

<script>
import logo from "@/assets/logo.svg"
import axios from "axios"
export default {
  name: "DogMap",
  props:{
    image: {
      default:logo
    }
  },
  data() {
    return {
      dogsDataList: []
    };
  },
  methods: {
    getDogsData() {
      axios
          .get("Dogs.json")
          .then(response => (this.dogsDataList = response.data));
    }
  },
  created() {
    this.dogsDataList = this.getDogsData()
  }
}
</script>
<style scoped>
</style>

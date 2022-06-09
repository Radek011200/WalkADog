<template>
    <h1><img :src = "image" style="height: 40px; width: 40px"/>{{ TrainerName }}</h1>
</template>

<script>
import logo from "@/assets/logo.svg"
export default {
  name: "TrainerMap",
  props:{
    TrainerName:{
      Type:String,
      default:"Trainer"
    },
    image: {
      default:logo
    }
  },
}
</script>
<style scoped>
</style>
<template>
  <div style="height: 100%">
    <title-component></title-component>
    <DogMap></DogMap>
    <TrainerMap></TrainerMap>
    <MapComponent style="height: 100%"></MapComponent>
  </div>

</template>

<script>

import TitleComponent from "@/components/TitleComponent";
import MapComponent from "@/components/MapComponent"
import DogMap from "@/components/DogMap"
import TrainerMap from "@/components/TrainerMap"
export default {
  name: "NewWalkPart2",
  components: {
    TitleComponent,
    MapComponent,
    DogMap,
    TrainerMap
  },
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>

</style>

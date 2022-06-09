<template>
  <v-container style="display: flex; flex-direction: column; align-items: center">
    <title-component></title-component>
    <DogMap :image="imageDog" :DogName="dog"></DogMap>
    <TrainerMap :image="imageTrainer" :TrainerName="trainer"></TrainerMap>
    <MapComponent style="height: 100%"></MapComponent>
  </v-container>

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
      dog: localStorage.getItem("SelectedDogName"),
      trainer: localStorage.getItem("SelectedTrainerName"),
      imageDog: localStorage.getItem("SelectedDogImage"),
      imageTrainer: localStorage.getItem("SelectedTrainerImage")
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  }

}
</script>

<style scoped>

</style>

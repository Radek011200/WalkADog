<template>
  <v-container style="display: flex; flex-direction: column; align-items: center">
    <title-component></title-component>
    <DogMap :DogName="dog"></DogMap>
    <TrainerMap :TrainerName="trainer"></TrainerMap>
    <button id='btn' @click="changeColor"
            style="border-radius: 25px; border: 2px solid #00B300;"
            v-on:click='remove'>Remove last
    </button>
    <MapComponent style="height: 100%"></MapComponent>
    <v-btn href="/new-walk-summary" color="success" :x-large=true rounded style="position:absolute; bottom: 5%">Podsumowanie</v-btn>
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
      trainer: localStorage.getItem("SelectedTrainerName")
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    remove() {
      this.markers.splice(-1, 1);
      this.polyline.latlngs.splice(-1, 1);
    },
    changeColor() {
      document.getElementById("btn").style.backgroundColor = '#00B300';
      document.getElementById("btn").style.color = 'white';
      setTimeout(() => {
        document.getElementById("btn").style.backgroundColor = 'white';
        document.getElementById("btn").style.color = 'black';
      }, 100);
    },
  }

}
</script>

<style scoped>

</style>

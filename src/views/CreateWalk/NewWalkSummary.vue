<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <v-card-actions class="justify-center">
      <b>Podsumowanie</b>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <Summary :trainer="trainer" :dog="dog"></Summary>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <v-btn color="success" :x-large=true rounded v-on:click="postAWalk(), postCords()">Zatwierdź</v-btn>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <v-btn text :x-large=true @click="back()">Powrót</v-btn>
    </v-card-actions>
  </div>

</template>

<script>

import TitleComponent from "@/components/TitleComponent";
import Summary from "@/components/Summary";
import axios from "axios";

export default {
  name: "NewWalkSummary",
  components: {
    TitleComponent,
    Summary,
  },
  data() {
    return {
      title: "Nowy spacer",
      date: {
        dateCalendar: localStorage.getItem("SelectedData"),
        timeClockStart: localStorage.getItem("SelectedStartHour"),
        timeClockEnd: localStorage.getItem("SelectedEndHour"),
      },
      trainer: localStorage.getItem("SelectedTrainerName"),
      dog: localStorage.getItem("SelectedDogName"),
      markers: localStorage.getItem("Markers")
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    postAWalk: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/walks/',
        data: {
          dog: localStorage.getItem("SelectedDogId"),
          date: localStorage.getItem("SelectedData"),
          start_hour: localStorage.getItem("SelectedStartHour"),
          end_hour: localStorage.getItem("SelectedEndHour"),
          trainer: localStorage.getItem("SelectedTrainerId")
        },
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => localStorage.setItem("walk", response.data.walk_id));
      console.log(localStorage.getItem("walk"))
    },
    postCords: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/coords/',
        data: {
          latitude_start: this.markers.split(",")[0],
          longitude_start: this.markers.split(",")[1],
          latitude_end: this.markers.split(",")[2],
          longitude_end: this.markers.split(",")[3],
          walk: localStorage.getItem("walk"),
        },
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      })
      localStorage.setItem('added_walk', 'true')
      this.$router.push("/")
    },


  }
}
</script>

<style scoped>

</style>
<template>
<div>
  <TitleComponent :title="title"></TitleComponent>
  <v-card-actions class="justify-center">
      <b>Podsumowanie</b>
  </v-card-actions>
  <v-card-actions class="justify-center">
    <Summary :></Summary>
  </v-card-actions>
  
  <v-card-actions class="justify-center">
    <v-btn href="/new-walk-summary" color="success" :x-large=true rounded v-on:click="postAWalk()">Zatwierdź</v-btn>
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
          //could handle with moment.js
          dateFull: "06-05-2022 12:00",
          dateCalendar: "2022-06-05",
          timeClockStart: "12:00",
          timeClockEnd: "13:00"
        },
        trainer:localStorage.getItem("SelectedTrainerName"),
        dog:localStorage.getItem("SelectedDogName")
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      getToken: function () {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api-token-auth/',
          data: {
            username: 'admin',
            password: 'admin'
          }
        }).then(response => localStorage.setItem("token",response.data.token ));
      },
      postAWalk: function (){
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/walks/',
          data:{
            dog: localStorage.getItem("SelectedDogId"),
            date:this.date.dateCalendar,
            start_hour: this.date.timeClockStart,
            end_hour: this.date.timeClockEnd,
            trainer: localStorage.getItem("SelectedTrainerId")
          },
          headers: {
            Authorization: 'Token ' + localStorage.token
          }
        }).catch((err) => {
          let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
          console.warn("error", message);
        });
      },

      getDogs2: function () {
        axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/dog/',
          headers: {
            Authorization: 'Token ' + localStorage.token
          }
        }).then(response => {this.dogs = response.data.results, console.log(response.status), console.log(response.statusText), console.log(response.data)});
      },
    },
    created() {
      this.getToken()
    }

  }
</script>

<style scoped>

</style>
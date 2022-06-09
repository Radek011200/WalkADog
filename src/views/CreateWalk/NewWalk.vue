<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <Calendar v-on:change="updateDate($event)"/>
    <v-container v-if="czyWybranoTrenera">
      <h3>Dostępni Trenerzy:</h3>
      <v-list-item-group >
        <v-list-item v-for="trainer in trainers" :key="trainer.url" dense v-on:click="selectedTrainer = trainer,saveTrainer(), changeSelectedTrainer(), getTrainerName(),getAvailability(), letDisplayAvailability()">
          <div class="lista" >
            <v-list-item-content>
              <v-list-item-title>
                <v-list-item-icon>
                  <img :src = "trainer.photo" style="height: 40px; width: 40px"/>
                </v-list-item-icon>
                <span class="headline">{{ trainer.first_name }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-container>
    <v-container v-if="!czyWybranoTrenera">
      <v-list-item-group >
        <v-list-item v-for="godzina in this.availability" :key="godzina.id" dense v-on:click="selectedStartHour=godzina, saveDateAndHour(), displayHour()" >
          <div class="lista">
            <v-list-item-content>
              <v-list-item-title>
                <span class="headline">{{ parseInt(godzina) }}:00 - {{ parseInt(godzina) +1 }}:00</span>
              </v-list-item-title>
            </v-list-item-content>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-container>
    <v-card-actions class="justify-center" v-if="!czyWybranoTrenera &&  data!=0 && godzina !=0">
      <v-btn href="/map-view" color="success" :x-large=true rounded>Przejdź Dalej</v-btn>
    </v-card-actions>
    <v-card-actions class="justify-center" v-if="czyWybranoTrenera">
      <v-btn text :x-large=true @click="back()">Powrót</v-btn>
    </v-card-actions>
    <v-card-actions class="justify-center" v-if="!czyWybranoTrenera">
      <v-btn text :x-large=true @click="czyWybranoTrenera=1">Powrót</v-btn>
    </v-card-actions>


  </div>
</template>

<script>

import Calendar from '../../components/Calendar.vue'
import TitleComponent from "@/components/TitleComponent";
import axios from "axios";

export default {
  name: 'NewWalk',
  emits: 'change',
  components: {
    TitleComponent,
    Calendar
  },
  computed: {

  },
  created() {
    this.title = "Nowy Spacer";
    this.showDog();
    this.getTrainers()
  },

  data(){
    return {
      title: 'Nowy spacer',
      trainers: [],
      selectedTrainer: null,
      czyWybranoTrenera: 1,
      availability:[],
      selectedStartHour:null,
      data: localStorage.getItem("SelectedData"),
      godzina: console.log(localStorage.getItem("SelectedStartHour"))
    }
  },


  methods: {
    back() {
      this.$router.go(-1)
    },
    displayHour: function (){
      console.log(localStorage.getItem("SelectedStartHour"))
      console.log(localStorage.getItem("SelectedEndHour"))
      console.log(localStorage.getItem("SelectedData"))
    },
    updateDate: function (updatedDate) {
      this.date = updatedDate
      console.log(this.date)
    },
    saveTrainer:function (){
      localStorage.setItem("SelectedTrainerId", this.selectedTrainer.trainer_id)
      localStorage.setItem("SelectedTrainerImage", this.selectedTrainer.photo)
    },
    saveDateAndHour: function (){
      localStorage.setItem("SelectedStartHour", this.selectedStartHour)
      localStorage.setItem("SelectedEndHour", String(parseInt(this.selectedStartHour)+1)+":00")
      localStorage.setItem("SelectedData", this.date)
    },
    letDisplayAvailability: function (){
      this.czyWybranoTrenera = 0
    },
    getTrainerName: function (){
      localStorage.setItem("SelectedTrainerName", this.selectedTrainer.first_name)
    },
    showDog: function (){
      console.log(localStorage.SelectedDogName)
      console.log(localStorage.SelectedDogId)
    },
    changeSelectedTrainer(){
      var TrainerNameList = document.getElementsByClassName("headline")
      for(var i =0; i<TrainerNameList.length; i++){
        TrainerNameList[i].style.color = 'black'
        if(this.selectedTrainer.first_name === TrainerNameList[i].innerHTML){
          TrainerNameList[i].style.color = 'green'
        }
      }
    },
    getToken() {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api-token-auth/',
        data: {
          username: 'admin',
          password: 'admin'
        }
      }).then(response => localStorage.setItem("token",response.data.token ));
    },
    getTrainers(){
      axios({
        method:'get',
        url:'http://127.0.0.1:8000/api/trainer/',
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response=>{this.trainers = response.data.results,console.log(response.status), console.log(response.statusText), console.log(response.data)})

    },
    getAvailability(){
      axios({
      method:'get',
      url:`http://127.0.0.1:8000/api/availability/get_availability?trainer_id=${this.selectedTrainer.trainer_id}&date=2022-06-16`,
      headers: {
      Authorization: 'Token ' + localStorage.token
      }
    }).then(response=>{this.availability = response.data.available_hours})
    }
  },
}
</script>
<style>
.v-list-item__title {
  font-size: 22px;
}

/*.trainer-list {*/
/*  font-size: 50px;*/
/*}*/
/*.text-sm-body-2-subtitle-2 {*/
/*  font-size: 20px;*/
/*}*/
.lista {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
</style>

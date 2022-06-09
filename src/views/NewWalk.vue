<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <Calendar v-on:change="updateDate($event)"/>
    <v-container>
      <h3>Dostępni Trenerzy:</h3>
      <v-list-item-group >
        <v-list-item v-for="trainer in trainers" :key="trainer.url" dense v-on:click="selectedTrainer = trainer,saveTrainer(), changeSelectedTrainer(), getTrainerName()">
          <div class="lista" >
            <v-list-item-content>
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon size="45px">mdi-account-circle</v-icon>
                </v-list-item-icon>
                <span class="headline">{{ trainer.first_name }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-container>
    <v-card-actions class="justify-center">
      <v-btn href="/new-walk-part-2" color="success" :x-large=true rounded>Przejdź Dalej</v-btn>
    </v-card-actions>
    <v-card-actions class="justify-center">


      <v-btn text :x-large=true @click="back()">Powrót</v-btn>


    </v-card-actions>


  </div>
</template>

<script>

import Calendar from '../components/Calendar.vue'
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
    // filteredTrainersByDate() {
    //   return this.trainers;
    // },

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
      selectedTrainer: null
    }
  },


  methods: {
    back() {
      this.$router.go(-1)
    },
    updateDate: function (updatedDate) {
      this.date = updatedDate
      console.log(this.date)
    },
    saveTrainer:function (){
      localStorage.setItem("SelectedTrainerId", this.selectedTrainer.trainer_id)
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
    // showTrainer: function (){
    //   console.log(localStorage.SelectedTrainer)
    // },
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

    }
  }
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

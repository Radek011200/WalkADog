<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <div class="grid-item">
      <div class="star_container">
        <v-icon :large="true" v-bind:class="[star1 ? 'starLit' : 'star' ]" @click="updateStars(1)">
          mdi-star
        </v-icon>
        <v-icon :large="true" v-bind:class="[star2 ? 'starLit' : 'star' ]" @click="updateStars(2)" >
          mdi-star
        </v-icon>
        <v-icon :large="true" v-bind:class="[star3 ? 'starLit' : 'star' ]" @click="updateStars(3)" >
          mdi-star
        </v-icon>
        <v-icon :large="true" v-bind:class="[star4 ? 'starLit' : 'star' ]" @click="updateStars(4)" >
          mdi-star
        </v-icon>
        <v-icon :large="true" v-bind:class="[star5 ? 'starLit' : 'star' ]" @click="updateStars(5)" >
          mdi-star
        </v-icon>
      </div>
      <v-textarea v-model="comment" class="text" filled auto-grow></v-textarea>
    </div>
    <v-card-actions class="justify-center">
      <v-btn text :x-large=true @click="addOpinion()">Dodaj Opinię</v-btn>
      <v-btn text :x-large=true @click="back()">Powrót</v-btn>
    </v-card-actions>
  </div>
</template>

<script>

import TitleComponent from "@/components/TitleComponent";
import axios from "axios";
//import axios from "axios";

export default {
  name: "OpinionDetails",
  components: {
    TitleComponent
  },
  data() {
    return {
      trainer_id: Number.parseInt(this.$route.params.trainer_id),
      walk: Number.parseInt(this.$route.params.walk_id),
      title: "Szczegóły opinii",
      stars:0,
      star1:false,
      star2:false,
      star3:false,
      star4:false,
      star5:false,
      comment:"",
      temp:{}
    }

  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    updateStars(number){
      this.stars = number;
      this.star1 = 0<number;
      this.star2 = 1<number;
      this.star3 = 2<number;
      this.star4 = 3<number;
      this.star5 = 4<number;
      console.log(this.comment)
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('default', {dateStyle: 'medium'}).format(date);
    },
    getDate(string) {
      return new Date(string)
    },
    async addOpinion1(){
      if(this.stars !== 0 && this.comment.length !== 0)
      {
        console.log(new Date().toISOString().substring(0,10));
        await axios({
          method: 'post',
          url: 'http://localhost:8000/api/trainer_review/',
          headers: {
            Authorization: 'Token ' + localStorage.token
          },
          data:{
            date: new Date().toISOString().substring(0,10),
            trainer: this.trainer_id,
            client: localStorage.getItem("client_id"),
            comment: this.comment,
            rating: this.stars
          }
        }).then(response => this.temp = response.data);
        await this.addOpinion2();
        this.back()
      }
    },
    async addOpinion2(){
      await axios({
        method: 'patch',
        url: 'http://localhost:8000/api/walks/'+String(this.walk)+"/",
        headers: {
          Authorization: 'Token ' + localStorage.token
        },
        data:{
          review: this.temp.review_id
        }
      });
    },
    async addOpinion(){
      this.temp = {};
      await this.addOpinion1();
      console.log(this.temp)

    }
  }
}
</script>

<style scoped>
.grid-item{
  display: inline-grid;
  text-align: center;
  width: 100%;
  margin: auto;
  min-width: 180px;
}
.star{
  background: linear-gradient(to right, black, black 0, lightgrey 0, lightgrey);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 32px;
}

.starLit{
  background: linear-gradient(to right, black, black 100%, lightgrey 100%, lightgrey);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 32px;
}

.star_container{
  width: auto;
  margin: auto;
}
.text{
  width: 90%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
.v-text-field.v-text-field--enclosed{
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
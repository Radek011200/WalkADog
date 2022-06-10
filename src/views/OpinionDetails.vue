<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <div class="grid-item">
      <div class="star_container">
        <v-icon :style="this.star_fill(1)" :large="true" class="star" >
        mdi-star
        </v-icon>
        <v-icon :style="this.star_fill(2)" :large="true" class="star" >
          mdi-star
        </v-icon>
        <v-icon :style="this.star_fill(3)" :large="true" class="star" >
          mdi-star
        </v-icon>
        <v-icon :style="this.star_fill(4)" :large="true" class="star" >
          mdi-star
        </v-icon>
        <v-icon :style="this.star_fill(5)" :large="true" class="star" >
          mdi-star
        </v-icon>
      </div>
      <v-textarea class="text" filled auto-grow disabled :value="this.review.comment" ></v-textarea>
    </div>
    <v-card-actions class="justify-center">
      <v-btn text :x-large=true @click="back()">Powrót</v-btn>
    </v-card-actions>
  </div>
</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  import axios from "axios";

  export default {
    name: "OpinionDetails",
    components: {
      TitleComponent
    },
    data() {
      return {
        title: "Szczegóły opinii",
        id: Number.parseInt(this.$route.params.opinion_id),
        review: {}
      }

    },
    created() {
      this.getReview();
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      star_fill(number) {
        let temp = this.review.rating - (number-1)
        if (temp > 1) temp = 1
        return {
          '--fill': (temp).toFixed(2) * 100 + "%"
        }
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('default', {dateStyle: 'medium'}).format(date);
      },
      getReview() {
        axios({
          method: 'get',
          url: 'http://localhost:8000/api/trainer_review/'+String(this.id)+"/",
          headers: {
            Authorization: 'Token ' + localStorage.token
          }
        }).then(response => this.review = response.data);
      },
      getDate(string) {
        return new Date(string)
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
  background: linear-gradient(to right, black, black var(--fill), lightgrey var(--fill), lightgrey);
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
  width: 100%;
  padding-top: 30px;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
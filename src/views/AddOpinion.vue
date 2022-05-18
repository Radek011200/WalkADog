<template>
  <div>
  <TitleComponent :title="title"></TitleComponent>
  <star-rating :increment="0.5" active-color= "black"></star-rating>
  <div class= 'text'>
    <v-textarea v-model="message" placeholder="Twoja opinia"></v-textarea>
    </div>
    <div class="bottom">
    <v-card-actions class="justify-center">
    <v-btn href="/" color="succes" :x-large=true rounded>Zatwierdź opinie</v-btn>
    </v-card-actions>
    <v-card-actions class="justify-center" >

    <v-btn text :x-large=true @click="back()">Powrót</v-btn>



  </v-card-actions>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "AddOpinion",
  components: {
      StarRating,
      TitleComponent
  },
      computed: {
      filteredTrainersByDate() {
        return this.trainers;
      },

    },
    created() {
      this.title = "Podziel się swoją opinią";
    },

    data() {
      return {
        title: 'Podziel się swoją opinią',
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
    }

};

</script>
<style>

.line{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}
.header {
 display:flex;
 flex-direction: column;
  font-size: 19px;
  margin: auto;
  width: 100%;
  height: 70%;
  text-align: center;
}
.text{
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 40%;
}
textarea{
    resize:none;
    padding: 10px;
    background-color: #f6f6f6;
    width: 100%;
    height: 90%;
    border-radius: 10px;
}
.vue-star-rating{
    padding: 10px 0 10px 0;
    justify-content: center;
}


</style>
<template>
  <div>
<form @submit="postData" method="post">
  <star-rating :increment="1" active-color= "black" v-model="opinions.rating"></star-rating>
  <div class= 'text'>
    <v-textarea id='opinion' name='opinion' v-model="opinions.opinion" placeholder="Twoja opinia"></v-textarea>
    </div>
    <v-card-actions class="justify-center">
    <v-btn type="submit" color="success" :x-large=true rounded>Zatwierdź opinie</v-btn>
    </v-card-actions>
</form>
    <v-card-actions class="justify-center" >

    <v-btn text :x-large=true @click="back()">Powrót</v-btn>
  </v-card-actions>



  </div>
</template>

<script>

// import axios from 'axios';
import StarRating from 'vue-star-rating';

export default {
  name: 'AddOpinionComponent',
  components: {StarRating},
  data(){
    return {
      opinions: {
        opinion:null,
        rating:null
      }
    }
  },
  methods:{
    back() {
      this.$router.go(-1)
    },
    // postData(){ 
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/api/opinions/',
    //   headers: {
    //     Authorization 
    //   }
    //   axios.post('/opinion', this.opinions)
    //   .then((response) => {
    //     console.log(response);
    //   });
    
    },
  }

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
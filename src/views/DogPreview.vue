<template>
  <div>
    <title-component :title="title"></title-component>
    <div class="container">
      <v-img class="dog-img"
             src="../assets/previewDog.jpeg"></v-img>
      <p class="dog-text">{{ dogData.name }} </p>
      <p class="dog-text mt-2" style="font-size: 2.5em; font-weight: 450; line-height: 0;">{{ dogData.breed }}</p>
      <p class="dog-text mt-1" style="font-size: 2.5em; font-weight: 450;">{{ dogData.age }} lat </p>
      <div class="control">
        <textarea class="textarea has-fixed-size" v-model="dogData.description" readonly> </textarea>
      </div>
      <v-btn class="mt-4" color="success" @click="moreDetails" :large=true rounded> Więcej szczegółów</v-btn>
      <v-btn class="mt-2" text :x-large=true @click="back()">Powrót</v-btn>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import axios from "axios";

export default {
  name: "DogPreview",
  components: {TitleComponent},
  data() {
    return {
      title: "Profil psa",
      id: this.$route.params.dogId,
      dogData: [],
    };
  },
  methods: {
    async getDogData() {
      await axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/dog/" + this.id + "/",
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => {
        this.dogData = response.data
      })
          .catch(function (error) {
            if (error.response.status === 500) {
              alert("Błąd serwera");
            }
          });
    },
    moreDetails() {
      this.$router.push("/dogs/" + this.id + "/more-details");
    },
    back() {
      this.$router.go(-1)
    },
  },
  created() {
    this.getDogData();


  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.dog-img {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 54px;
  gap: 10px;

  width: 60vw;
  height: 60vw;
  border-radius: 50%;


  /* Szary 3 */

  background: #EBEBEB;
  /* Szary 2 */
  margin: auto;
  border: 3px solid #BDBDBD;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

@media screen and (min-width: 600px) {
  .dog-img {
    width: 20vw;
    height: 20vw;
  }
}

.dog-text {
  font-family: 'Roboto';
  font-style: normal;

  /* identical to box height */
  font-weight: 500;
  font-size: 3em;
  display: flex;
  align-items: center;
  text-align: center;
}

.textarea {
  width: 80vw;
  height: 10vw;
  /*border: none;*/
  border: 3px solid #BDBDBD;
  text-align: center;
  font-size: 1.3em;
  min-height: 2em;
  /*background: transparent;*/
  /*font-size: 1.5em;*/
  /*font-weight: 400;*/
  /*line-height: 1.5;*/
  /*color: #EBEBEB;*/
  /*padding: 10px;*/
  /*margin: 10px;*/
}

.textarea:not([rows]) {
  min-height: 5em;
  max-height: 6em;
  max-width: 40em;
}
</style>
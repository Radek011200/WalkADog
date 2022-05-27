<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <DogsList v-for="dog in dogsDataList" :key="dog.name" :dog="dog"/>

  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import DogsList from "@/components/DogsList";
import axios from "axios";

export default {
  name: "DogsView",
  data() {
    return {
      title: "Moje psy",
      dogsDataList: [],
    }
  },

  components: {
    TitleComponent,
    DogsList,
  },

  methods: {
    async getDogsData() {
      await axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/dog/",
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => this.dogsDataList = response.data.results)
          .catch(function (error) {
            if (error.response.status === 500) {
              alert("Błąd serwera");
            }
          });
    }
  },
  created() {

    this.getDogsData();


  },
}
</script>

<style scoped>

</style>
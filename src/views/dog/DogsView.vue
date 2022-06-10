<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <DogsList v-for="dog in dogsDataList" :key="dog.name" :dog="dog"/>
    <v-btn color="success" href="/dog/add-dog/" :large=true rounded> Dodaj psa</v-btn>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import DogsList from "@/components/dog/DogsList";
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
              console.log('toDo')
            }
          });
    }
  },
  created() {
    this.getDogsData();
    if (localStorage.getItem('edited_dog') !== 'null') {
      this.$toast.success("Dane zostały zaktualizowane!", {
        position: "top-right",
        timeout: 4718,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 1,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    }
    localStorage.setItem('edited_dog', 'null')


    if (localStorage.getItem('added_dog') !== 'null') {
      this.$toast.success("Pomyślnie dodano psa", {
        position: "top-right",
        timeout: 4718,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 1,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });

    }
    localStorage.setItem('added_dog', 'null')


  },
}
</script>

<style scoped>
.v-btn {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 100px;
  margin-bottom: 1.5rem;

}

@media screen and (min-width: 600px) {
  .v-btn {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>
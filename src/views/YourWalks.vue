<template>
<div>
<TitleComponent :title="title"></TitleComponent>
<Calendar></Calendar>
<h2>Zaplanowane Spacery</h2>
<v-list-item v-for="walk in this.walks" :key="walk.url" dense>
  <v-list-item-content class="lista">
      <PlannedWalks :id="walk.id" :dog_name="walk.dog_name" :start_hour="walk.start_hour" :end_hour="walk.end_hour"></PlannedWalks>
  </v-list-item-content>
  </v-list-item>
      <v-btn class="center" href="/walk-list" color="success" :large=true rounded>
                          Pokaż szczegóły
                  </v-btn>
      <v-btn class="center" text :x-large=true @click="back()">Powrót</v-btn>
</div>
</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  import Calendar from "@/components/Calendar";
  import PlannedWalks from "@/components/PlannedWalks";
  import axios from 'axios';


  export default {
    name: 'YourWalks',
    components: {
      TitleComponent,
      PlannedWalks,
      Calendar
    },

    

    created() {
      this.title = "Twoje Spacery";
      this.getToken();
      this.getWalks();
    },

    data() {
      return {
        title: 'Lista Spacerów',
        walks: [    
          {
            id: 1,
            dog_name: 'Jan',
            start_hour: '10:00',
            end_hour: '12:00',
          },
        ]
      }
    },

    methods: {
        back() {
      this.$router.go(-1)
    },
      getToken() {
     axios({
            method: 'post',
            url: 'http://localhost:8000/api-token-auth/',
            data: {
              username: 'admin',
              password: 'admin'
            }
        }).then(response => localStorage.setItem("token",response.data.token ));
    },

    getWalks() {
      axios({
            method: 'get',
            url: 'http://localhost:8000/api/walks/',
            headers: {
              Authorization: 'Token ' + localStorage.token
            }
        }).then(response => this.walks = response.data.results);
        }
    },

     getDetails(url) {
      let result = '';
      axios({
            method: 'get',
            url: url,
            headers: {
              Authorization: 'Token ' + localStorage.token
            }
        }).then(response => result = response.data.result);
        return result;
    },
    }
  
</script>

<style>

.lista {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
h2{
    padding-left: 5%;
}
.center{
    width: 40%;
    margin: auto;
}

</style>
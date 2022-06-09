<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>

    <v-list-item v-for="walk in this.walks" :key="walk.url" dense>
      <v-list-item-content class="lista">
        <WalkEntry :id="walk.id" :dog_name="walk.dog.name" :start_hour="walk.start_hour" :end_hour="walk.end_hour"
                   :trainer="walk.trainer.first_name + ' ' + walk.trainer.last_name"></WalkEntry>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>

import TitleComponent from "@/components/TitleComponent";
import WalkEntry from "@/components/WalkEntry";
import axios from 'axios';


export default {
  name: 'WalkList',
  components: {
    TitleComponent,
    WalkEntry
  },


  created() {
    this.title = "Lista Spacerów";
    this.getToken();
    this.getWalks();
  },

  data() {
    return {
      title: 'Lista Spacerów',
      walks: []
    }
  },

  methods: {
    getToken() {
      axios({
        method: 'post',
        url: 'http://localhost:8000/api-token-auth/',
        data: {
          username: 'admin',
          password: 'admin'
        }
      }).then(response => localStorage.setItem("token", response.data.token));
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

<style scoped>

.lista {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

</style>
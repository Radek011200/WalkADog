<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <div class="centered">
      <v-btn-toggle v-model="toggle" mandatory rounded>
        <v-btn class="switch_button" @click="getGroupedWalks" href="#" color="success" :large=true rounded>
          Umówione
        </v-btn>
        <v-btn class="switch_button" @click="getGroupedWalks" href="#" color="success" :large=true rounded>
          Trwające
        </v-btn>
        <v-btn class="switch_button" @click="getGroupedWalks" href="#" color="success" :large=true rounded>
          Odbyte
        </v-btn>
      </v-btn-toggle>
    </div>
    <div v-if="toggle === 0">
      <v-list-item v-for="walk in this.walks_future" :key="walk.walk_id" dense>
        <v-list-item-content class="lista">
          <WalkEntry :mode="0" :id="walk.walk_id" :trainer_id="walk.trainer.trainer_id" :review="walk.review"
                     :dog_name="walk.dog.name" :date="walk.date" :start_hour="walk.start_hour" :end_hour="walk.end_hour"
                     :trainer="walk.trainer.first_name + ' ' + walk.trainer.last_name"></WalkEntry>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-if="toggle === 1">
      <v-list-item v-for="walk in this.walks_present" :key="walk.walk_id" dense>
        <v-list-item-content class="lista">
          <WalkEntry :mode="1" :id="walk.walk_id" :trainer_id="walk.trainer.trainer_id" :review="walk.review"
                     :dog_name="walk.dog.name" :date="walk.date" :start_hour="walk.start_hour" :end_hour="walk.end_hour"
                     :trainer="walk.trainer.first_name + ' ' + walk.trainer.last_name"></WalkEntry>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-if="toggle === 2">
      <v-list-item v-for="walk in this.walks_past" :key="walk.walk_id" dense>
        <v-list-item-content class="lista">
          <WalkEntry :mode="2" :id="walk.walk_id" :trainer_id="walk.trainer.trainer_id" :review="walk.review"
                     :dog_name="walk.dog.name" :date="walk.date" :start_hour="walk.start_hour" :end_hour="walk.end_hour"
                     :trainer="walk.trainer.first_name + ' ' + walk.trainer.last_name"></WalkEntry>
        </v-list-item-content>
      </v-list-item>
    </div>

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
    this.getGroupedWalks()

    if (localStorage.getItem('added_opinion') !== 'null') {
      this.$toast.success("Pomyślnie dodano opinie", {
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
    localStorage.setItem('added_opinion', 'null')
  },

  data() {
    return {
      title: 'Lista Spacerów',
      walks: [],
      walks_past: [],
      walks_present: [],
      walks_future: [],
      toggle: undefined
    }
  },

  methods: {
    async getWalks() {
      await axios({
        method: 'get',
        url: 'http://localhost:8000/api/walks/',
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => this.walks = response.data.results.filter(({active}) => active === true));
    },
    groupWalk(walk) {
      const now = new Date();
      const thirty_ago = new Date(now);
      thirty_ago.setDate(thirty_ago.getDate() - 30);
      const walk_date_start = new Date(walk.date);
      walk_date_start.setHours(Number(walk.start_hour.substring(0, 2)));
      const walk_date_end = new Date(walk.date);
      walk_date_end.setHours(Number(walk.end_hour.substring(0, 2)));
      if (thirty_ago > walk_date_end) {
        return
      } else if (now < walk_date_start) {
        this.walks_future.push(walk);
      } else if (now > walk_date_end) {
        this.walks_past.push(walk);
      } else {
        this.walks_present.push(walk);
      }
    },
    async getGroupedWalks() {
      this.walks_past = [];
      this.walks_present = [];
      this.walks_future = [];
      await this.getWalks();
      this.walks.forEach(this.groupWalk)
    }
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

.centered {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.switch_button {
  width: 110px;
  margin: 5px;
}
</style>
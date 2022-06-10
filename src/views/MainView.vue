<template>
  <v-responsive>
    <v-container :fluid="true" class="container">
      <v-container class="FigmaMainView">
        <v-container class="column">Wybór zwierzaka</v-container>
        <v-list-item v-for="dog in this.dogs" :key="dog.url" dense>
          <ChoseAPet :pet="dog"></ChoseAPet>
        </v-list-item>
      </v-container>
    </v-container>
    <v-list-item v-for="walk in this.walks_present" :key="walk.id" dense>
      <v-list-item-content>
        <v-list-item-title>
          <planned-walks :dog_name="walk.dog.name" :start_hour="walk.start_hour"
                         :end_hour="walk.end_hour"></planned-walks>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-container>
      <v-btn href="/new-walk" color="success" :x-large=true rounded>Zaplanuj spacer</v-btn>
    </v-container>
  </v-responsive>
</template>

<script>
import ChoseAPet from "@/components/ChoseAPet";
import axios from 'axios';
import PlannedWalks from "@/components/PlannedWalks";

export default {
  name: 'MainViewUnderConstruction',
  components: {
    ChoseAPet,
    PlannedWalks
  },


  created() {
    this.title = "Lista Spacerów";
    this.getDogs();
    this.getGroupedWalks()

    if (localStorage.getItem('added_walk') !== 'null') {
      this.$toast.success("Pomyślnie dodano spacer", {
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
    localStorage.setItem('added_walk', 'null')
  },

  data() {
    return {
      title: 'MainView',
      dogs: [],
      walks: [],
      walks_past: [],
      walks_present: [],
      walks_future: [],
    }
  },

  methods: {
    getDogs: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/client/1/dogs/',
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => {
        this.dogs = response.data, console.log(response.status), console.log(response.statusText), console.log(response.data)
      });
    },
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
      const walk_date_start = new Date(walk.date);
      walk_date_start.setHours(Number(walk.start_hour.substring(0, 2)));
      const walk_date_end = new Date(walk.date);
      walk_date_end.setHours(Number(walk.end_hour.substring(0, 2)));
      if (now < walk_date_start) {
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
      this.walks_future = []
      await this.getWalks();
      this.walks.forEach(this.groupWalk)
    }
  },
}

</script>

<style scoped>
.FigmaMainView {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #4cae50;
  border-radius: 50px;
  height: 220px;
  max-width: fit-content;
  block-size: fit-content;
  padding-top: 40px;
}

.lista {
  display: flex;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  position: absolute;
  top: 20px;

}

</style>
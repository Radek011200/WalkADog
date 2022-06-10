<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card outlined>          
            <v-card-text>
                <v-container>
                    <div class="lista">
                        <v-icon size="75px">mdi-file-image</v-icon>
                        <span class="headline"><b> {{ dog_name }} </b></span>
                    <ul style="list-style-type: none;">
                        <li>{{date}}</li>
                        <li>{{start_hour}} - {{end_hour}}</li>
                        <li><b>{{trainer}}</b></li>
                    </ul>
                    </div>
                </v-container>
            </v-card-text>
            <v-card-actions v-if="mode===0" class="lista" style="margin: 0 20px;">
                <v-btn href="#" color="success" :large=true rounded>
                    Edytuj
                </v-btn>
              <WalkResign @delete_walk = "deleteAction"/>
            </v-card-actions>
            <v-card-actions v-if="mode===1" class="lista" style="margin: 0 20px;">
              <v-btn color="success" :large=true rounded>
                Mapa
              </v-btn>
            </v-card-actions>
            <v-card-actions v-if="mode===2" class="lista" style="margin: 0 20px;">
              <v-btn @click="opinionAction" color="success" :large=true rounded>
                Opinia
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
  </div>
</template>

<script>

import WalkResign from "@/components/WalkResign";
import axios from "axios";

export default {
  name: "WalkEntry",
  components: {
    WalkResign
  },
  props: {
    id:{
      type: Number,
    },
    review:{
      type: Number,
    },
    dog_name: {
      type: String,
      default: "Dog Name"
    },
    start_hour: {
      type: String,
      default: "Start Hour"
    },
    end_hour: {
      type: String,
      default: "End Hour"
    },
    date: {
      type: String,
      default: "1900-01-01"
    },
    trainer: {
      type: String,
      default: "Trainer"
    },
    trainer_id:{
      type: Number
    },
    mode: {
      type: Number,
      default: 0
    }
  },
  methods:{
    async deleteAction(){
      await axios({
        method: 'patch',
        url: 'http://localhost:8000/api/walks/'+String(this.id)+"/",
        headers: {
          Authorization: 'Token ' + localStorage.token
        },
        data:{
          active: false
        }
      })
      window.location.reload(true);
    },
    opinionAction(){
      if(this.review === null)
      {
        console.log("brak review")
        this.$router.push("/add-opinion/"+String(this.id)+"/"+String(this.trainer_id))
      }
      else{
        this.$router.push("/opinion_details/"+String(this.review))
      }
    }
  }
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

</style>
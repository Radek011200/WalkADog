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
                        <li>{{start_hour}} - {{end_hour}}</li>
                        <li><b>{{trainer}}</b></li>
                    </ul>
                    </div>
                </v-container>
            </v-card-text>
            <v-card-actions class="lista">
                <WalkResign/>
                <v-btn href="#" color="success" :large=true rounded>
                    Edytuj
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

export default {
  name: "WalkEntry",
  components: {
    WalkResign
  },
  props: {
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
    trainer: {
      type: String,
      default: "Trainer"
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
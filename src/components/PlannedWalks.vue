<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="walk" outlined>          
            <v-card-text>
                <v-container>
                        <div class="lista">
                            <p><b>{{dog_name}}</b></p>
                            <p>{{start_hour}}</p>
                            <p>{{end_hour}}</p>
                            <v-icon size="50px">mdi-information-variant</v-icon>
                            <v-icon size="50px">mdi-map</v-icon>
                        </div>
                </v-container>
            </v-card-text>
            <v-card-actions class="lista">
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
  </div>
</template>

<script>

export default {
  name: "TrainerEntry",
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
  }
}
</script>

<style>

.walk{
    width: 50%;
    height: 70%;
    display: inline;
    justify-content: center;
}

.lista {
    width: 50%;
}

</style>
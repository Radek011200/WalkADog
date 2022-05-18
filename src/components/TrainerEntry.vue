<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card outlined>          
            <v-card-text>
                <v-container>
                        <div class="lista">
                            <v-icon size="75px">mdi-account-box</v-icon>
                            <ul style="list-style-type: none;">
                                <li><b>{{name}}</b></li>
                                <li>{{mobile}}</li>
                            </ul>
                        </div>
                </v-container>
            </v-card-text>
            <v-card-actions class="lista">
                <v-spacer></v-spacer>
                <v-btn href="#" color="success" :large=true rounded>
                    Podgląd opinii
                </v-btn>
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
    name: {
      type: String,
      default: "Trainer Name"
    },
    mobile: {
      type: String,
      default: "Mobile"
    },
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
  text-align: right;
}

</style>
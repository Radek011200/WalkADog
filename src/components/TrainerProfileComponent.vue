<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
         
            <v-card-text>

                        <div class="profile">
                            <v-icon size="200px">mdi-account-box</v-icon>
                            <ul style="list-style-type: none;">
                                <li><StarRating increment="1" :rating="rating" active-color="black" read-only="True"></StarRating></li>
                                <li>{{name}}</li>
                                <li>{{address}}</li>
                                <li>{{mobile}}</li>
                            </ul>
                        </div>
            <v-btn class="center" href="#" color="success" :large=true rounded>
                    Opinie
            </v-btn>
            </v-card-text>
            <v-card-actions class="lista">
                <v-spacer></v-spacer>
            </v-card-actions>

        </v-flex>
      </v-layout>
      </v-container>
  </div>
</template>

<script>


import StarRating from 'vue-star-rating';

export default {
  name: "TrainerProfile",
  components: {
    StarRating
  },
  props: {
    name: {
      type: String,
      default: "Trainer Name"
    },
    mobile: {
      type: String,
      default: "Mobile"
    },
    address: {
      type: String,
      default: "Address"
    },
    rating: {
      type: String,
      default: '5'
    },
  }
}
</script>

<style>

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-align: center;
}
.center{
  display: flex;
  align-items: center;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.vue-star-rating{
    padding: 10px 0 10px 0;
    justify-content: center;
}
</style>
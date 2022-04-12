<template>
<div>
<Calendar />
  <v-container>
    <h3>Dostępni Trenerzy:</h3>
    <v-list-item-group >
      <v-list-item v-for="trainer in trainers" :key="trainer.id" dense>
        <div class="lista">
        <v-list-item-content >

          <v-list-item-title >
            <v-list-item-icon >
              <v-icon size="45px">mdi-account-circle</v-icon>
            </v-list-item-icon>
            <span class="headline">{{trainer.name}}</span>
          </v-list-item-title>

        </v-list-item-content>
        </div>
      </v-list-item>

    </v-list-item-group>





  </v-container>
  <v-card-actions class="justify-center">
    <v-btn color="success" :x-large=true rounded>Następna strona</v-btn>
  </v-card-actions>
  <v-card-actions class="justify-center" >

    <v-btn text :x-large=true @click="back()">Powrót</v-btn>
<!--  make return button-->



  </v-card-actions>


</div>
</template>

<script>

  import Calendar from '../components/Calendar.vue'


  export default {
    name: 'NewWalk',
    components: {
      Calendar
    },
    data() {
      return {
        trainers: [
          {
            id: 1,
            name: 'Jan',
            surname: 'Kowalski',
            photo: 'mdi-home'
          },
          {
            id: 2,
            name: 'Adam',
            surname: 'Nowak'
          },
          {
            id: 3,
            name: 'Krzysztof',
            surname: 'Kowalski'
          },
          {
            id: 4,
            name: 'Krzysztof',
            surname: 'Kowalski'
          },
          {
            id: 5,
            name: 'Krzysztof',
            surname: 'Kowalski'
          },
        ]
      }
    },


    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
.v-list-item__title {
  font-size: 22px;
}
/*.trainer-list {*/
/*  font-size: 50px;*/
/*}*/
/*.text-sm-body-2-subtitle-2 {*/
/*  font-size: 20px;*/
/*}*/
.lista {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
</style>

<template>
<div>
  <TitleComponent :title="title"></TitleComponent>
  <v-card-actions class="justify-center">
      <b>Podsumowanie</b>
  </v-card-actions>
  <v-card-actions class="justify-center">
      <Summary />
  </v-card-actions>
  
  <v-card-actions class="justify-center">
    <v-btn href="/new-walk-summary" color="success" :x-large=true rounded>Zatwierdź</v-btn>
  </v-card-actions>
  <v-card-actions class="justify-center">
    <v-btn text :x-large=true @click="back()">Powrót</v-btn>
  </v-card-actions>
</div>

</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  import Summary from "@/components/Summary";
  export default {
    name: "NewWalkSummary",
    components: {
      TitleComponent,
      Summary,
    },
    data() {
      return {
        title: "Nowy spacer",
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }

  }
</script>

<style scoped>

</style>
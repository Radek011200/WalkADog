<template>
<div>
  <TitleComponent :title="title"></TitleComponent>
  <v-card-actions class="justify-center">
    {{ trainer.name}} - Dostępne godziny
  </v-card-actions>
  <v-card-actions class="justify-center">
    <v-btn href="/new-walk-part-2" color="success" :x-large=true rounded>Przejdź do podsumowania</v-btn>
  </v-card-actions>
  <v-card-actions class="justify-center">
    <v-btn text :x-large=true @click="back()">Powrót</v-btn>
  </v-card-actions>
</div>

</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  export default {
    name: "NewWalkPart2",
    components: {
      TitleComponent
    },
    data() {
      return {
        title: "Nowy spacer",
        trainer: {
          name: "Trener 1",

        }
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
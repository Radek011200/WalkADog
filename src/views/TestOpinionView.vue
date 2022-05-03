<template>
<div>
  <TitleComponent :title="title"></TitleComponent>
  <OpinionSummary :i_star="10" :i-i_star="7" :i-i-i_star="13" :i-v_star="51" :v_star="183"></OpinionSummary>
  <v-card-actions class="justify-center">
    <v-btn color="success" :x-large=true rounded>Dodaj Opinię</v-btn>
  </v-card-actions>
</div>

</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  import OpinionSummary from "@/components/OpinionSummary";
  export default {
    name: "NewWalkPart2",
    components: {
      TitleComponent,
      OpinionSummary
    },
    data() {
      return {
        title: "Opinie",
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
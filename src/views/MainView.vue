<template>
  <div>
    <TitleComponent :title="title"/>
    <v-card-actions class="justify-center">
      <v-btn href="/new-walk" color="success" :x-large=true rounded>Zaplanuj spacer</v-btn>
    </v-card-actions>
  </div>
</template>

<script>

import TitleComponent from "@/components/TitleComponent";

export default {
  name: "MainView",
  components: {TitleComponent},
  data() {
    return {
      title: "Strona główna",
    };
  },
}
</script>

<style scoped>

</style>
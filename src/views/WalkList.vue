<template>
<div>
<TitleComponent :title="title"></TitleComponent>

<v-list-item v-for="walk in filteredWalksByDate" :key="walk.id" dense>
  <v-list-item-content class="lista">
    <WalkEntry :id="walk.id" :dog_name="walk.dog_name" :start_hour="walk.start_hour" :end_hour="walk.end_hour" :trainer="walk.trainer"></WalkEntry>
  </v-list-item-content>
  </v-list-item>
</div>
</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  import WalkEntry from "@/components/WalkEntry";


  export default {
    name: 'WalkList',
    components: {
      TitleComponent,
      WalkEntry
    },
    computed: {
      filteredWalksByDate() {
        return this.walks;
      },

    },
    created() {
      this.title = "Lista Spacerów";
    },

    data() {
      return {
        title: 'Lista Spacerów',
        walks: [
          {
            id: 1,
            dog_name: 'Max',
            start_hour: '12:00',
            end_hour: '13:00',
            trainer: 'Jan Kowalski',
          },
          {
            id: 2,
            dog_name: 'Burek',
            start_hour: '13:00',
            end_hour: '14:00',
            trainer: 'Jan Kowalski',
          },
          {
            id: 3,
            dog_name: 'Rex',
            start_hour: '14:00',
            end_hour: '15:00',
            trainer: 'Jan Kowalski',
          },
          {
            id: 4,
            dog_name: 'Mruczek',
            start_hour: '15:00',
            end_hour: '16:00',
            trainer: 'Jan Kowalski',
          },
        ]
      }
    },
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
<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>

    <v-list-item v-for="trainer in getTreners" :key="trainer.id" dense>
      <v-list-item-content class="lista">
        <TrainerEntry :name="trainer.name" :mobile="trainer.mobile"></TrainerEntry>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>

import TitleComponent from "@/components/TitleComponent";
import TrainerEntry from "@/components/TrainerEntry";


export default {
  name: 'TrainersList',
  components: {
    TitleComponent,
    TrainerEntry
  },
  computed: {
    getTreners() {
      return this.trainers;
    },

  },
  created() {
    this.title = "Lista Trenerów";
  },

  data() {
    return {
      title: 'Lista Trenerów',
      trainers: [
        {
          id: 1,
          name: 'Kajtek',
          mobile: '156-123-123',
        },
        {
          id: 2,
          name: 'Marcin',
          mobile: '156-123-123',
        },
        {
          id: 3,
          name: 'Krzysztof',
          mobile: '156-123-123',
        },
      ]
    }
  }
}
</script>

<style scoped>

.lista {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

</style>
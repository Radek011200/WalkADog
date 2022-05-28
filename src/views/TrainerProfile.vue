<template>
<div>
<TitleComponent :title="title"></TitleComponent>

<v-list-item v-for="trainer in getTreners" :key="trainer.id" dense>
  <v-list-item-content class="lista">
    <TrainerProfileComponent :rating="trainer.rating" :name="trainer.name" :address="trainer.address" :mobile="trainer.mobile"></TrainerProfileComponent>
  </v-list-item-content>
  </v-list-item>
</div>
</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  import TrainerProfileComponent from "@/components/TrainerProfileComponent";



  export default {
    name: 'TrainersList',
    components: {
    TitleComponent,
    TrainerProfileComponent,
},
    computed: {
      getTreners() {
        return this.trainers;
      },

    },
    created() {
      this.title = "Profil Trenera";
    },

    data() {
      return {
        title: 'Profil Trenera',
        trainers: [
          {
            id: 1,
            name: 'Kajtek',
            mobile: '156-123-123',
            address: 'Olsztyn ul.Słoneczna 54',
            rating: 4,
          },
        ]
      }
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
}

</style>
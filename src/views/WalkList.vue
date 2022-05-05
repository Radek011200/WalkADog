<template>
<div>
<TitleComponent :title="title"></TitleComponent>

</div>
</template>

<script>

  import TitleComponent from "@/components/TitleComponent";


  export default {
    name: 'WalkList',
    components: {
      TitleComponent
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


    methods: {
      back() {
        this.$router.go(-1)
      },
      updateDate: function(updatedDate) {
        this.date = updatedDate
        console.log(this.date)
      }
    }
  }
</script>

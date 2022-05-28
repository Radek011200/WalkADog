<template>
<div>
  <TitleComponent :title="title"></TitleComponent>
  <AddOpinionComponent></AddOpinionComponent>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import AddOpinionComponent from "@/components/AddOpinionComponent"

export default {
  name: "AddOpinion",
  components: {
      TitleComponent,
      AddOpinionComponent
  },
    created() {
      this.title = "Podziel się swoją opinią";
    },

    data() {
      return {
        title: 'Podziel się swoją opinią',
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
    }

};
</script>
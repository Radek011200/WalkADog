<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <OpinionSummary :i_star="ratings['1']" :ii_star="ratings['2']" :iii_star="ratings['3']" :iv_star="ratings['4']" :v_star="ratings['5']"></OpinionSummary>
    <v-list-item v-for="review in this.reviews" :key="review.review_id" dense>
      <v-list-item-content>
        <v-divider>inset</v-divider>
        <OpinionComponent :opinion_text="review.comment" :star_rating="review.rating" :date_posted="getDate(review.date)" :username="review.client.username"></OpinionComponent>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>

  import TitleComponent from "@/components/TitleComponent";
  import OpinionSummary from "@/components/OpinionSummary";
  import OpinionComponent from "@/components/OpinionComponent";
  import axios from "axios";

  export default {
    name: "OpinionView",
    components: {
      TitleComponent,
      OpinionSummary,
      OpinionComponent
    },
    data() {
      return {
        title: "Opinie",
        id: Number.parseInt(this.$route.params.trainer_id),
        reviews: [],
        ratings: []
      }

    },
    created() {
      this.getRating();
      this.getReview();
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      getRating() {
        axios({
          method: 'get',
          url: 'http://localhost:8000/api/trainer_review/ratings/',
          headers: {
            Authorization: 'Token ' + localStorage.token
          }
        }).then(response => this.ratings = response.data.filter(({trainer_id}) => trainer_id === this.id)[0]);
      },
      getReview() {
        axios({
          method: 'get',
          url: 'http://localhost:8000/api/trainer_review/',
          headers: {
            Authorization: 'Token ' + localStorage.token
          }
        }).then(response => this.reviews = response.data.results.filter(x => x.trainer.trainer_id === this.id));
      },
      getDate(string) {
        return new Date(string)
      }
    }
  }
</script>

<style scoped>

</style>
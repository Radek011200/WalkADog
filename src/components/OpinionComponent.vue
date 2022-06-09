<template>
  <div class="grid-container">

    <div class="grid-item">
      <div><v-icon :style="this.star_fill(1)" :large="true" class="star" >
        mdi-star
      </v-icon>
        <v-icon :style="this.star_fill(2)" :large="true" class="star" >
          mdi-star
        </v-icon>
        <v-icon :style="this.star_fill(3)" :large="true" class="star" >
          mdi-star
        </v-icon>
        <v-icon :style="this.star_fill(4)" :large="true" class="star" >
          mdi-star
        </v-icon>
        <v-icon :style="this.star_fill(5)" :large="true" class="star" >
          mdi-star
        </v-icon>
        <h5 class="opinion-info">Przesłano {{formatDate(date_posted)}} przez {{username}}</h5>
      </div>
      <h3 class="opinion-text"> {{opinion_text}}</h3>


    </div>
  </div>
</template>

<script>
export default {
  name: "OpinionComponent",
  props: {
    star_rating: {
      type: Number
    },
    opinion_text: {
      type: String
    },
    username: {
      type: String
    },
    date_posted: {
      type: Date
    }
  },
  methods: {
    star_fill(number) {
      let temp = this.star_rating - (number-1)
      if (temp > 1) temp = 1
      return {
        '--fill': (temp).toFixed(2) * 100 + "%"
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('default', {dateStyle: 'medium'}).format(date);
    }
  }
}
</script>

<style scoped>
.opinion-info{
  font-size: 12px;
  color: gray;
}
.opinion-text{
  font-size: 20px;
}
.star{
  background: linear-gradient(to right, black, black var(--fill), lightgrey var(--fill), lightgrey);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 32px;
}
.grid-container{
  display: inline-flex;
  width: 80%;
  margin: 0 10%;
}
.grid-item{
  display: inline-grid;
  text-align: left;
  width: 100%;
  margin: auto;
  min-width: 180px;
}

</style>
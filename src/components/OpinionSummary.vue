<template>
  <div class="shadow grid-container">
    <div v-if="sum_opinion === 0" class="grid-item">
      <h1 class="head-title">Brak opinii</h1>
    </div>
    <div v-else class="grid-item">
      <h1 class="head-title"> {{avg_opinion}}/5</h1>
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
      </div>

        <h5>Na podstawie {{sum_opinion}} opinii</h5>
    </div>
    <div class="grid-item-2">
      <h3>5 <div :style="this.bar_fill(this.v_star)" class="bar"></div> {{this.v_star}}</h3>
      <h3>4 <div :style="this.bar_fill(this.iv_star)" class="bar"></div> {{this.iv_star}}</h3>
      <h3>3 <div :style="this.bar_fill(this.iii_star)" class="bar"></div> {{this.iii_star}}</h3>
      <h3>2 <div :style="this.bar_fill(this.ii_star)" class="bar"></div> {{this.ii_star}}</h3>
      <h3>1 <div :style="this.bar_fill(this.i_star)" class="bar"></div> {{this.i_star}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    i_star: {
      type: Number,
      default: 0
    },
    ii_star: {
      type: Number,
      default: 0
    },
    iii_star: {
      type: Number,
      default: 0
    },
    iv_star: {
      type: Number,
      default: 0
    },
    v_star: {
      type: Number,
      default: 0
    }
  },
  methods: {
    bar_fill(number) {
      return {
        '--fill': (number / this.sum_opinion).toFixed(2) * 100 + "%"
      }
    },
    star_fill(number) {
      let temp = this.avg_opinion - (number-1)
      if (temp > 1) temp = 1
      return {
        '--fill': (temp).toFixed(2) * 100 + "%"
      }
    }
  },
  computed: {
    sum_opinion(){
      return this.i_star + this.ii_star + this.iii_star + this.iv_star + this.v_star
    },
    avg_opinion (){
      return ((this.i_star + 2*this.ii_star + 3*this.iii_star + 4*this.iv_star + 5*this.v_star)/this.sum_opinion).toFixed(2)
    }
  }
}
</script>

<style scoped>
.shadow{
  width: 90%;
  box-shadow: 0px 0px 1px 3px rgba(0,0,0,20%);
  margin: 5%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.bar {
  background: linear-gradient(to right, black, black var(--fill), white var(--fill), white);
  display: inline-block;
  width: 55%;
  height: 13px;
  box-shadow: 0px 0px 0px 2px rgb(0, 0, 0);
}
.star{
  background: linear-gradient(to right, black, black var(--fill), white var(--fill), white);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 32px;
}
.grid-container{
  display: inline-flex;
}
.grid-item{
  display: inline-grid;
  text-align: center;
  margin: auto;
  width: 45%;
  min-width: 180px;
}

.grid-item-2{
  padding-left: 5px;
  display: inline-grid;
  margin: auto;
  width: 55%;
  max-width: 400px;
}

</style>
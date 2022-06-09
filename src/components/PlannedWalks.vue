<template>
  <div>

    <div class="walk" outlined>

      <p class="item"><b>{{ dog_name }}</b></p>
      <p>|</p>
      <p class="item">{{ start_hour }}</p>
      <p>:</p>
      <p class="item">{{ end_hour }}</p>
      <p>|</p>
      <v-icon size="50px" style="position: relative; top: 5px;">mdi-information-variant</v-icon>
      <v-icon size="50px" style="position: relative; top: 5px;">mdi-map</v-icon>


    </div>

  </div>
</template>

<script>

export default {
  name: "TrainerEntry",
  props: {
    dog_name: {
      type: String,
      default: "Dog Name"
    },
    start_hour: {
      type: String,
      default: "Start Hour"
    },
    end_hour: {
      type: String,
      default: "End Hour"
    },
  },

  data() {
    return {
      title: 'Nowy spacer',
      trainers: []
    }
  }
}
</script>

<style scoped>

.walk {
  width: fit-content;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #4caf50;
  border-radius: 20px;
  margin: auto;
  color: white;
  font-size: 2em;
  font-weight: 500;
  text-align: center;
  align-items: baseline;
  padding: 0 10px 0 10px
}

.vl {
  border-left: 3px solid black;
  height: 500px;
}

.item {
  justify-content: space-between;
  padding: 5px;
}

</style>
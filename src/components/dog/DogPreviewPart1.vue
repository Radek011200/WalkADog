<template>
  <div v-if="active" class="container">
    <v-img class="dog-img" :src="dog.photo"/>
    <p class="dog-text">{{ dog.name }} </p>
    <p class="dog-text mt-2" style="font-size: 2.5em; font-weight: 450; line-height: 0;">{{ dog.breed }}</p>
    <p class="dog-text mt-1" style="font-size: 2.5em; font-weight: 450;">{{ dog.age }} lat </p>
    <div class="control">
      <textarea class="textarea has-fixed-size" :value="dog.description" readonly> </textarea>
    </div>
    <v-btn class="mt-4" color="success" @click="$emit('active')" :large=true rounded> Więcej szczegółów</v-btn>
    <v-btn class="mt-2 green--text" text :x-large=true @click="back()">Powrót</v-btn>
  </div>
</template>

<script>

export default {
  name: "DogPreviewPart1",
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    dog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    back() {
      this.$router.push("/dogs/");
    },

  },


}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.dog-img {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 54px;
  gap: 10px;

  width: 60vw;
  height: 60vw;
  border-radius: 50%;


  /* Szary 3 */

  background: #EBEBEB;
  /* Szary 2 */
  margin: auto;
  border: 3px solid #BDBDBD;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

@media screen and (min-width: 600px) {
  .dog-img {
    width: 20vw;
    height: 20vw;
  }
}

.dog-text {
  font-family: 'Roboto';
  font-style: normal;

  font-weight: 500;
  font-size: 3em;
  display: flex;
  align-items: center;
  text-align: center;
}

.textarea {
  width: 80vw;
  height: 10vw;
  text-align: center;
  font-weight: 700;
  font-size: 1.3em;
  min-height: 2em;
  border: 4px solid #BDBDBD;
  border-radius: 30px;

}

.textarea:not([rows]) {
  min-height: 5em;
  max-height: 6em;
  max-width: 40em;
}
</style>
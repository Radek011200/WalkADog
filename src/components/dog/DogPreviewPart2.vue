<template>
  <div v-if="!active" class="container">
    <v-img class="dog-img" :src="dog.photo"/>
    <div class="control">
      <span class="subtitle-dog-preview">Zachowanie</span>
      <textarea class="textarea has-fixed-size" :value="dog.behavior" readonly> </textarea>
      <span class="subtitle-dog-preview mt-3">Zakazy</span>
      <textarea class="textarea has-fixed-size" :value="dog.prohibitions" readonly> </textarea>
      <span class="subtitle-dog-preview mt-3">Zalecenia</span>
      <textarea class="textarea has-fixed-size" :value="dog.recommendations" readonly> </textarea>
    </div>
    <v-btn class="mt-2 green--text" text :x-large=true @click="$emit('active')">Powrót</v-btn>
  </div>
</template>

<script>


export default {
  name: "DogPreviewPart2",
  components: {},

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
  data() {
    return {
      title: 'Profil psa',
      id: this.$route.params.dogId,
    }
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


.textarea {
  width: 80vw;
  height: 10vw;

  font-weight: 700;
  font-size: 1.3em;
  min-height: 2em;
  border: 4px solid #BDBDBD;
  border-radius: 30px;

}

.textarea:not([rows]) {
  min-height: 4em;
  max-height: 6em;
  max-width: 40em;
}

.subtitle-dog-preview {
  font-family: 'Roboto';
  font-style: normal;

  display: flex;
  align-items: center;
  text-align: center;

  color: #7A7A7A;
}
</style>
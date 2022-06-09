<template>
  <div class="container">

    <div class="asd">
      <v-img class="dog-photo"
             v-bind:src=dog.photo></v-img>
      <p class="dog-name">{{ dog.name }} |</p>
      <div></div>
      <div>
        <v-btn icon v-bind:href="'/dogs/'+dog.dog_id" color="success" class="dog-link">
          <v-icon large class="info-icon" color="white">mdi-information-variant</v-icon>
        </v-btn>
        <v-btn icon v-bind:href="'/dogs/'+dog.dog_id+'/edit'" color="success" class="dog-link" :data-id="dog.dog_id">
          <v-icon large class="edit-icon" color="white" style="opacity: 60%">mdi-pencil</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DogsList.vue",
  props: {
    dog: {
      type: Object,
      default() {
      }
    }
  },


}
</script>

<style scoped>
.container {

  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  margin-bottom: 1.5rem;
  gap: 15px;


  width: 90%;
  height: 20%;

  background: #4bae50;
  border-radius: 30px;
}

.asd {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
}

.img {
  width: 18%;
  height: 18%;
  border-radius: 40px;
}

.dog-photo {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 54px;
  gap: 10px;

  width: 10%;
  height: 10%;

  /* Szary 3 */

  background: #EBEBEB;
  /* Szary 2 */

  border: 3px solid #BDBDBD;
  border-radius: 260px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.dog-name {


  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.7em;
  line-height: 66px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  /* Szary 3 */

  color: #EBEBEB;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

@media screen and (min-width: 600px) {
  .dog-photo {
    width: 10vw;
    height: 10vw;
  }
}
</style>
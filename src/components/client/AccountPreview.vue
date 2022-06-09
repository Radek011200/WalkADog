<template>
  <div class="container">
    <v-img class="client-img" :src="client.photo"/>

    <p class="client-text">{{ client.last_name }} {{ client.first_name }}</p>
    <p class="client-text" style="font-size: 1.5em; font-weight: 350;">Email: {{ client.email }}</p>
    <p class="client-text mt-2" style="font-size: 1.5em; font-weight: 350;">Adres: {{ client.address }}</p>
  </div>
</template>

<script>
export default {
  name: "AccountPreview",
  props: {
    client: {
      type: Object,
      required: true,
    },
  }
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

.client-img {
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
  .client-img {
    width: 20vw;
    height: 20vw;
  }
}

.client-text {
  font-family: 'Roboto';
  font-style: normal;

  font-weight: 500;
  font-size: 2em;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
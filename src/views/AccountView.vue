<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <v-container fluid>
      <v-row align="center" justify="center" dense>
        <v-btn color="success" @click="toggleModal" :large=true rounded> Wyloguj</v-btn>
      </v-row>
    </v-container>
    <ModalComponent
        @confirm="logoutAction"
        @close-modal="toggleModal"
        :modal-title="logout"
        :is-active="isActive"
        :confirm-button-title="confirmButtonTitle"
        :cancel-button-title="cancelButtonTitle"
        :content="false">
      <!--      Przykładowe użycia slota-->
      <!--      <template v-slot:content>Coś w środku modala</template>-->
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent";
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "AccountView",
  components: {ModalComponent, TitleComponent},
  data() {
    return {
      isActive: false,
      logout: 'Czy jesteś pewny?',
      confirmButtonTitle: 'Tak, wyloguj',
      cancelButtonTitle: 'Nie, wróć',
      title: 'Moje konto',
    };
  },
  methods: {
    toggleModal() {
      this.isActive = !this.isActive;
    },
    logoutAction() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
}
</script>


<style scoped>

</style>
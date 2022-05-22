<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <v-btn color="success" @click="togglePopup" :large=true rounded> Powiadomienia</v-btn>
    <v-btn color="success" @click="toggleModal" :large=true rounded> Wyloguj</v-btn>
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
    <PopupComponent
        @close-modal="togglePopup"
        :is-active="isActivePopup"
        :confirm-button-title="closePopup">
      Przykładowe użycia slota
      <template v-slot:content>
        <div class="popup-text">
          {{ notifications }}
        </div>
      </template>
    </PopupComponent>
  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent";
import TitleComponent from "@/components/TitleComponent";
import PopupComponent from "@/components/PopupComponent";

export default {
  name: "AccountView",
  components: {PopupComponent, ModalComponent, TitleComponent},
  data() {
    return {
      isActive: false,
      logout: 'Czy jesteś pewny?',
      confirmButtonTitle: 'Tak, wyloguj',
      cancelButtonTitle: 'Nie, wróć',
      title: 'Moje konto',
      isActivePopup: false,
      closePopup: 'Zamknij',
      notifications: 'Brak powiadomień',
    };
  },
  methods: {
    toggleModal() {
      this.isActive = !this.isActive;
    },
    togglePopup() {
      this.isActivePopup = !this.isActivePopup;
    },
    logoutAction() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
}
</script>


<style scoped>
.popup-text {
  font-size: 1.4rem;
  text-align: center;
}

.v-btn {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 100px;
  margin-bottom: 1.5rem;

}

@media screen and (min-width: 600px) {
  .v-btn {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>
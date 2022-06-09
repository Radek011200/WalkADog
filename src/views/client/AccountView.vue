<template>
  <div>
    <TitleComponent :title="title"></TitleComponent>
    <div>
      <AccountPreview :client="client"/>
      <v-btn color="success" @click="togglePopup" :large=true rounded> Powiadomienia</v-btn>
      <v-btn color="success" @click="edit" :large=true rounded> Edytuj dane konta</v-btn>
      <v-btn color="success" @click="toggleModal" :large=true rounded> Wyloguj</v-btn>
    </div>
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
import AccountPreview from "@/components/client/AccountPreview";
import axios from "axios";

export default {
  name: "AccountView",
  components: {AccountPreview, PopupComponent, ModalComponent, TitleComponent},
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
      client: {},
      id: localStorage.client_id
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
    },
    edit() {
      this.$router.push('/client/' + this.id + '/edit')
    },
    async getClientData() {
      await axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/client/" + this.id + "/",
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => {
        this.client = response.data
      })
          .catch(function (error) {
            if (error.response.status === 500) {
              alert("Błąd serwera");
            }
          });
    },
  },
  created() {
    this.getClientData()
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
<template>
  <div>
    <title-component :title="title"/>
    <AccountEdit
        :form="client"
        @save="save($event)"
    />
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import AccountEdit from "@/components/client/AccountEdit";
import axios from "axios";

export default {
  name: "AccountEditView",
  components: {AccountEdit, TitleComponent},
  data() {
    return {
      id: localStorage.client_id,
      client: {},
      title: 'Moje konto',
    };
  },
  methods: {
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
    save(form) {
      axios({
        method: 'patch',
        url: 'http://127.0.0.1:8000/api/client/' + this.id + '/',
        data: form,
        headers: {
          Authorization: 'Token ' + localStorage.token
        },
      }).then(response => console.log(response)).catch(function (error) {
        if (error.response) {
          alert(1)
        } else if (error.request) {
          alert(2)
        } else if (error.message) {
          alert(3)
        }
      })
      localStorage.setItem('edited_client', 'true')
      this.$router.push('/account')
    }
  },
  created() {
    this.getClientData()
  }

}
</script>

<style scoped>

</style>
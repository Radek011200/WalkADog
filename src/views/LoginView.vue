<template>
  <div>
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "LoginView.vue",
  components: {LoginForm},
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    // login() {
    //   if (this.email !== "" && this.password !== "") {
    //     this.$emit('login', {
    //       email: this.email,
    //       password: this.password,
    //       access_token: 1,
    //     });
    //     this.$router.push('/');
    //     this.access_token = 1;
    //   }
    // }
  },
}
</script>

<style scoped>

</style>
<template>
<div>
  <RegisterUserComponent></RegisterUserComponent>
  </div>
</template>

<script>

import RegisterUserComponent from "@/components/RegisterUserComponent";
export default {
  name: "RegisterUser",
  components: {
    RegisterUserComponent
  },
    created() {
      this.title = "Podziel się swoją opinią";
    },
    data() {
      return {
        title: 'Podziel się swoją opinią',
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
    }
};
</script>
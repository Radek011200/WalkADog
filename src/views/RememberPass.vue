<template>
  <div>
    <RememberPassForm />
  </div>
  
</template>

<script>
import RememberPassForm from "@/components/RememberPassForm.vue";

export default {
  name: "RememberPassForm.vue",
  components: {RememberPassForm},
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
  }),
}
</script>

<style scoped>

</style>
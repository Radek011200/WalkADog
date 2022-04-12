<template>
  <div>
    <form class="form-horizontal" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" v-model="name" placeholder="Name">
        </p>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <p class="control">
          <input class="input" type="text" v-model="email" placeholder="Email">
        </p>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <p class="control">
          <input class="input" type="password" v-model="password" placeholder="Password">
        </p>
      </div>
      <div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TestRoute"
}
</script>

<style scoped>

</style>
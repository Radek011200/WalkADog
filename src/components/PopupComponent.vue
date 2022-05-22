<template>
  <div>
    <div :class="{ modal: 'modal', 'is-active': isActive}">
      <div class="modal-background" @click="$emit('close-modal')"></div>
      <div class="modal-card rounded">
        <section class="modal-card-body is-active">
          <slot name="content"></slot>
          <v-row align="center" justify="center" dense>
            <button @click="closeModal" class="button is-success mt-6" align="center">{{ confirmButtonTitle }}</button>
          </v-row>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: {
    modalTitle: {
      type: String,
      default: 'Tytuł',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    confirmButtonTitle: {
      type: String,
      default: 'Zatwierdź',
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');

    },

  }
}
</script>

<style scoped>
@media screen and (max-width: 776px) {
  .modal-card {
    width: 80%;
  }
}

</style>
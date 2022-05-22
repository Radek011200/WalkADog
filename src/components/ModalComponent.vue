<template>
  <div>
    <div :class="{ modal: 'modal', 'is-active': isActive}">
      <div class="modal-background" @click="$emit('close-modal')"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalTitle }}</p>
          <button @click="closeModal" class="delete" aria-label="close"></button>
        </header>
        <section :class="{ 'modal-card-body is-active': content}">
          <slot name="content"></slot>
        </section>
        <footer class="modal-card-foot">
          <button @click="confirm" class="button is-success">{{ confirmButtonTitle }}</button>
          <button @click="closeModal" class="button">{{ cancelButtonTitle }}</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
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
    cancelButtonTitle: {
      type: String,
      default: 'Anuluj',
    },
    content: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');

    },
    confirm() {
      this.$emit('confirm');
    }
  }

}
</script>

<style scoped>
.modal-card-foot {
  border-top: 0;
}

@media screen and (max-width: 776px) {
  .modal-card {
    width: 80%;
  }
}

</style>
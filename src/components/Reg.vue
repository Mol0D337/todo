<template>
  <div>

    <!-- Modal Trigger -->
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1" @click="modal">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Reg",
    data() {
      return {
        modal: null,
      }
    },
    methods: {
      modal() {

      }
    },
    mounted() {
      this.modal = M.Modal.init(this.$refs.modal, {
        opacity: 0.9,
      });
    }
  }
</script>

<style scoped>

</style>

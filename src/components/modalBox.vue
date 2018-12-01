<template>
  <div class="modal">
      <div class="modal_main"></div>
  </div>
</template>
<script>
export default {
  name: 'modalBox',
  components: {},
  data () {
    return {};
  }
}
</script>
<style lang='stylus' scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(79, 79, 79, 0.7);
  .modal_main {
    width: auto;
  }
}
</style>

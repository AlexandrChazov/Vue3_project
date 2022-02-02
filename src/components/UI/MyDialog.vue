<template>
  <div
    class="dialog"
    v-show="show"
    @click="$emit('update:show', false)"
  >
    <div
      class="dialog__content"
      @click.stop
    >
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "my-dialog",
    props: {
      show: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style scoped>
  .dialog {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    background-color: rgba(0,0,0, 0.5);
  }
  .dialog__content {
    margin: auto;
    min-width: 20em;
    min-height: 10em;
    background-color: white;
    padding: 5em;
    border-radius: 12px;
  }
</style>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "MyButton"  // указываем имя компонента, оно нам нужно для глобальной регистрации компонента в main.js
  }
</script>

<style scoped>
  .btn {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
</style>

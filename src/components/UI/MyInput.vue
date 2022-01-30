<template>
    <input
      :value="modelValue"
      @input="updateInput"
      class="input"/>        <!-- v-model без атрибутов (v-model:value="post.title") сохраняет значение в modelValue -->
</template>

<script>
  export default {
    name: "my-input",
    props: {
      modelValue: {
        type: [String, Number],
        required: true
      },
   // modelValue: [String, Number]  это краткая запись пропса
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value)
      }
    }
  }
</script>

<style scoped>
  .input {
    border: 1px solid teal;
    margin-top: 10px;
    padding: 10px;
  }
</style>

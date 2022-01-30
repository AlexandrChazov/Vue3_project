<template>
  <form class="form" @submit.prevent> <!-- @submit.prevent это модификатор чтобы не писать функцию event.preventDefault() -->
    <h4>Create post</h4>
    <my-input
            type="text"
            placeholder="Title"
            v-model="post.title"/>
      <!--  :value="post.title"
            @input="post.title = $event.target.value"> -->
    <my-input
            type="text"
            placeholder="Body"
            v-model="post.body"
    />
    <MyButton
        class="btn"
        @click="addPost">
      Send
    </MyButton>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: "",
          body: ""
        }
      }
    },
    methods: {
      addPost() {
        if (this.post.title && this.post.body) {
          this.post.id = Date.now()
          this.$emit("createPost", this.post) // генерируем событие "createPost", а родитель подписывается на это событие
          this.post = {
            title: "",
            body: ""
          }
        }
      }
    }
  }
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
  }
  .btn {
    margin-top: 15px;
    align-self: flex-end;
  }
</style>

<template>
  <div>
      <div class="post">
        <div>
          <div>Title: <strong>{{ post.title }}</strong></div>
          <div>Text: {{ post.body }}</div>
        </div>
        <MyButton @click="$emit('deletePost', post)">Delete</MyButton>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style scoped>
  .post {
    border: 2px solid #55b75d;
    margin: 15px 0px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

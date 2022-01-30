<template>
  <div>
    <PostItem
      v-for="post in posts"
      :post="post"
      key="post.id"
      @deletePost="$emit('deletePost', post)"
    />
  </div>
</template>

<script>
  import PostItem from "@/components/PostItem"
  export default {
    components: {
      PostItem
    },
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>

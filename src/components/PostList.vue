<template>
  <div>
    <div v-show="posts.length"> <!-- если false, то не убирает эл-т из DOM, а применяет "display:none" -->
      Posts list
    </div>
    <div v-if="posts.length">   <!-- если false, то убирает эл-т из DOM -->
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @deletePost="$emit('deletePost', post)"
      />
    </div>
    <div v-else style="color: red; font-weight: bold">
      Posts list is empty
    </div>
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

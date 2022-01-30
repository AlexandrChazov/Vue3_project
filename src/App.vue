<template>
  <div class="app">

    <PostForm
      @createPost="addPost"/> <!-- подписываемся на событие "createPost" и если оно произойдёт вызываем ф-цию "addPost" -->
    <PostList
      :posts="posts"
      @deletePost="deletePost"/> <!-- ":posts" это короткая запись "v-bind:posts="posts"" -->
  </div>

</template>

<script>
  import PostList from "@/components/PostList"; // символ @ указывает на папку "src" (alias)
  import PostForm from "@/components/PostForm";

  export default {
    components: {
      PostList, PostForm
    },
    data() {
      return {
        posts: [
          {id: 1, title: "About JavaScript", body: "JS is the best language ever"},
          {id: 2, title: "About PHP", body: "PHP is the worst language"},
          {id: 3, title: "About CSS", body: "we need CSS for styling"}
        ]
      }
    },
    methods: {
      addPost(post) {
        this.posts.push(post);
      },
      deletePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    padding: 20px;
  }
</style>

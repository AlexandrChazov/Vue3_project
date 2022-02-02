<template>
  <div class="app">
    <my-dialog v-model:show="show"> <!-- "v-model:show" это двусторонее связываение с пропсом "show" -->
      <post-form
        @createPost="addPost"/> <!-- подписываемся на событие "createPost" и если оно произойдёт вызываем ф-цию "addPost" -->
    </my-dialog>
    <my-button @click="openModal">Add post</my-button>
    <post-list
      :posts="posts"
      @deletePost="deletePost"/> <!-- ":posts" это короткая запись "v-bind:posts="posts"" -->
  </div>

</template>

<script>
  import PostList from "@/components/PostList"; // символ @ указывает на папку "src" (alias)
  import PostForm from "@/components/PostForm";

  export default {
    components: {
      PostList,   // при использовании этих компонент название можно написать через дефис "post-list"
      PostForm    // чтобы не перепутать с дефолтными компонентами
    },
    data() {
      return {
        posts: [
          {id: 1, title: "About JavaScript", body: "JS is the best language ever"},
          {id: 2, title: "About PHP", body: "PHP is the worst language"},
          {id: 3, title: "About CSS", body: "we need CSS for styling"}
        ],
        show: false
      }
    },
    methods: {
      addPost(post) {
        this.posts.push(post);
        this.show = false
      },
      deletePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      openModal() {
        this.show = true
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

<template>
  <div class="home">
    <Header/>
    <TodoList />
    <HideCompleted />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import TodoList from '@/components/TodoList.vue'
import HideCompleted from '@/components/HideCompleted.vue'

export default {
  name: 'home',
  components: {
    Header,
    TodoList,
    HideCompleted
  }
}
</script>

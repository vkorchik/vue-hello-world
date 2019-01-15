<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoListItem
      v-for="item in todoList"
      :key="item.title"
      :title="item.title"
    ></TodoListItem>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoListItem from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TodoListItem
  },
  props: {
    todoList: Array
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #232d36;
  margin-top: 60px;
}
</style>

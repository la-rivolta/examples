<template>
  <div>
    <h2>Todo List</h2>
    <router-link class='link' to="/">Back to home</router-link>
    <div class="top-elements">
      <AddTodo @add-todo="addTodo"/>
      <select class="options" v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </div>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="filteredTodos.length"
        :todos="filteredTodos"
              @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/views/Loader'
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json;
            this.loading = false;
          }, 2000)
        })
  },
  computed: {
    filteredTodos() {
      if (this.filter == 'all'){
        return this.todos
      }
      else if(this.filter == 'completed'){
        return this.todos.filter(t => t.completed);
      }
      else if(this.filter == 'not-completed'){
        return this.todos.filter(t => !t.completed);
      }
    }
  },
  components: {
    TodoList, AddTodo, Loader
  },
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(t => {
        if (t.id != id){
          return t;
        }
      })
    },
    addTodo(todo){
      this.todos.push(todo);
    }

  }
}
</script>

<style>
  .link{
    text-decoration: none;
    color: blue;
    margin-bottom: 16px;
    font-weight: bold;
  }

  .top-elements{
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin: 20px 0;
  }

  .options{
    width: 160px;
    font-size: 16px;
  }
</style>
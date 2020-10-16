<template>
  <li>
    <span :class="{done: todo.completed}">
      <input type="checkbox" @change="todo.completed = !todo.completed">
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="delete" @click="$emit('remove-todo', todo.id)">&times</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value){
     return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
  li{
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  .delete{
    background-color: red;
    border-radius: 40%;
    color: white;
    border: none;
  }

  input{
    margin-right: 10px;
  }
  .done {
    text-decoration: line-through;
  }

</style>
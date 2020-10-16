<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">
      Create
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return{
      title: ''
    }
  },
  methods: {
    onSubmit(){
      if(this.title != ''){
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo);
        this.title = '';
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input{
    width: 400px;
    margin-right: 10px;
    height: 30px;
  }

  button{
    background-color: #42b983;
    border: none;
    border-radius: 2px;
    font-weight: bold;
    font-size: 15px;
    color: white;
    height: 36px;
    width: 120px;
  }
</style>
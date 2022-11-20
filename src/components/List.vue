<template>
  <ul class="todo-main">
    <ItemVue v-for="(todo,index) in todos"  :key='todo.id' :todo="todo" :checkOne="checkOne" :index="index" ></ItemVue>
  </ul>
</template>

<script>
import ItemVue from './Item.vue'
export default {
  name: '',
  props:['todos','checkOne',],
  components: {
    ItemVue
  },
  data() {
    return {

    }
  }
}
</script>


<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
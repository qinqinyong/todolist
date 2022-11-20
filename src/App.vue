<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <HeaderVue @adComent="adComent"></HeaderVue>
      <ListVue :todos="todos" :checkOne="checkOne" ></ListVue>
      <FooterVue :todos="todos" :allCheck="allCheck"  :NoAllCheck="NoAllCheck"></FooterVue>
    </div>
  </div>
</template>



<script>
import HeaderVue from './components/Header.vue'
import ListVue from './components/List.vue'
import FooterVue from './components/Footer.vue'
export default {
  name: '',
  // 在App当中找到总线，给总线绑定一个事件'delOne'
   mounted(){
    this.$bus.$on('delOne',this.delOne)
   },
  components: {
    HeaderVue,
    ListVue,
    FooterVue
  },
  data() {
    return {
      // todos: [
      //   { id: 1, content: '看书', done: true },
      //   { id: 2, content: '下棋', done: false },
      //   { id: 3, content: '听歌', done: true },

      // ]
      todos:JSON.parse(localStorage.getItem('TODOS_KET'))  || []
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(newVal,oldVal){
        // localStorage  永久储存数据 setItem getItem removeItem clear
        // sessionStorage 浏览器关闭数据就没了
          localStorage.setItem('TODOS_KET',JSON.stringify(newVal))
      }
    }
  },
  methods: {
    // 增加一条
    adComent(obj) {
      this.todos.unshift(obj)
    },
    // 选定一条
    checkOne(index) {
      this.todos[index].done = !this.todos[index].done
    },
    // 删除一人
    delOne(index) {
      this.todos.splice(index, 1)
    },
    // 全选
    allCheck(val){
      this.todos.forEach(item => item.done=val)
    },
    //删除已完成
    NoAllCheck() {
     this.todos = this.todos.filter((item) => {
        return  !item.done
      })
    }
  }

}
</script>



<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
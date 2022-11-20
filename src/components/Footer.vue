<template>
      <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="allC" />
        </label>
        <span>
          <span>已完成{{checkDone}}</span> / 全部{{allT}}
        </span>
        <button class="btn btn-danger" @click="delC">清除已完成任务</button>
      </div>
</template>

<script>
export default {
  name: '',
  props:['todos','allCheck','NoAllCheck'],
  methods:{
    delC(){
      this.NoAllCheck()
    }
  },
  computed:{
    // 总数
    allT(){
      return this.todos.length
    },
    // 已完成数
    checkDone(){
      return this.todos.reduce((pre,item)=>{
        if(item.done){
          pre+=1
        }
        return pre
      },0)
    },
    // 全选或全不选
    allC:{
      get(){
        return   this.allT === this.checkDone  && this.checkDone>0
       
      },
      set(val){
        this.allCheck(val)
      }
    }
  },
  data(){
    return {
     
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
<template>
    <li @mouseenter="isShow=true" @mouseleave="isShow=false" :class="{myClass:isShow}">
          <label>
            <input type="checkbox" :checked="todo.done"  @click="checkO"/>
            <!-- <input type="checkbox" v-model="isDone" /> -->
            <span>{{todo.content}}</span>
          </label>
          <button class="btn btn-danger"  v-show="isShow" @click="delO">删除</button>
        </li>
</template>

<script>
export default {
  name: '',
  props:['todo','checkOne','index'],
  // computed:{
  //   isDone(){
  //     return  this.todo.done
  //   }
  // },
  methods:{
    checkO(){
      this.checkOne(this.index)
    },
    delO(){
      // this.delOne(this.index)
      // 全局事件总线
      this.$bus.$emit('delOne',this.index)
    }
  },
  data(){
    return {
     isShow:false
    }
  }
}
</script>

<style scoped>
.myClass{
  background-color:hotpink;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
 
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>
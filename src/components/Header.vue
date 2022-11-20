<template>
     <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content"   @keyup.enter="adC"/>
      </div>
</template>

<script>
export default {
  name: '',
  methods:{
    adC(){
      let {content} = this
      if (content.trim()) {
          let id = Date.now() 
          let  done = false
          let obj = {
            id,
            content,
            done
          }
        this.$emit('adComent',obj)

      } else {
      alert('请合法输入内容')  
      }
      this.content = ''
    }
  },
  data(){
    return {
     content:''
    }
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
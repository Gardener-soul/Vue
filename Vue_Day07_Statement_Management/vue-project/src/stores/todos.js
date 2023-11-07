import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const useTodosStore = defineStore('todos', () => {
  let id= 0;
  //state
  const todos= ref([
    {id:id++, text: '수업듣기', isDone:false},
    {id:id++, text: '춤추기', isDone:false},
    {id:id++, text: '사랑하기', isDone:false},
  ])

  const addTodo = function(text){
    todos.value.push({
      id: id++,
      text, // == text: text
      isDone: false
    })
  }

  const deleteTodo = function(todoId){
    const idx = todos.value.findIndex((todo)=>{
      return todo.id === todoId
    })
    // const idx = todox.value.findIndex((todo)=> todo.id===todoId)
    todos.value.splice(idx,1);
  }

  const updateTodo = function(todoId){
    //아래의 map 함수를 한 번 사용해보자 라는 느낌으로 작성을 한거.

    todos.value = todos.value.map((todo)=>{
      if(todo.id===todoId){
        todo.isDone = !todo.isDone
      }
      return todo
    })
    // 정말 고전 느낌으로다가 반복문으로도 가능한거야
  
  }

  const doneTodoCount = computed(()=>{
    return todos.value.filter((todo)=> todo.isDone).length
  })

  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);


  return { todos,addTodo,deleteTodo, updateTodo, doneTodoCount }
}, {persist: true})

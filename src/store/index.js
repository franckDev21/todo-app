import {createStore} from 'vuex'

export default createStore({
  state: {
    todos : [
      {
        id: (new Date).getTime(),
        content : "Apprendre React JS",
        completed : false
      },
      {
        id: (new Date).getTime()+1,
        content : "Apprendre React Vue JS",
        completed : true
      },
      {
        id: (new Date).getTime()+2,
        content : "Faire mon site porte-folio",
        completed : false
      },
    ]
  },
  getters :{
    todos : state => state.todos
  },
  mutations: {
    ADD_TODO : (state,newTodo) => state.todos.push({id:(new Date).getTime(),content: newTodo,completed: false}),
    SET_TODO : (state,id) => {
      let task = state.todos.filter(todo => todo.id === id)[0]
      if (task.completed === true) {
        task.completed = false
      }else{
        task.completed = true
      }
    },
    DELETE_TODO : (state,id) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  actions: {
    addTodo : ({commit},newTodo) => commit('ADD_TODO',newTodo),
    setTodo : ({commit},id) => commit('SET_TODO',id),
    deleteTodo : ({commit},id) => commit('DELETE_TODO',id)
  },
  modules: {
  }
})

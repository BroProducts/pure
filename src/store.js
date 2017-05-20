import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [],
    user: null,
    newTodo: {
      title: ''
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    },
    newTodo (state) {
      return state.newTodo.title
    }
  },
  mutations: {
    addTodo (state, payload) {
      state.newTodo.title = 'swag'
      const newTodo = Object.assign({}, payload.newTodo)
      state.todos.push(newTodo)
      state.newTodo.title = ''
    },
    removeTodo (state, payload) {
      state.todos.splice(state.todos.indexOf(payload.todo), 1)
    }
  },
  actions: {
    addTodo (context, payload) {
      setTimeout(() => {
        context.commit('addTodo', {
          newTodo: payload.newTodo
        })
      }, 1000)
    }
  }
})

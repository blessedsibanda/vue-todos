import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "Blessed",
    todoItems: [
      { action: 'Finish math assignment', done: false},
      { action: 'Study vue.js', done: false},
      { action: 'Visit aunt Mary', done: true},
      { action: 'Feed the kids', done: false},
      { action: 'Go for a walk', done: false},
      { action: 'Watch season finale of Lost', done: false},
    ],
    hideCompleted: false
  },
  getters: {
    filteredTodos(state) {
      if (state.hideCompleted) {
        return state.todoItems.filter(item => !item.done)
      }
      return state.todoItems
    },
    totalUnfinishedTodos(state) {
      return state.todoItems.filter(item => !item.done).length
    }
  },
  mutations: {
    toggleTodo(state, todo) {
      state.todoItems.map(item => item == todo ? 
        item.done = !item.done : item)
    },
    toggleHideCompleted(state) {
      state.hideCompleted = !state.hideCompleted
    }
  },
  actions: {

  }
})

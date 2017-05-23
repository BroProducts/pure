import { mapGetters } from 'vuex'
import { db } from '@/helpers/firebase.config.js'

const todosRef = db.ref('todos')

export default {
  name: 'todos',
  props: [],
  firebase: {
    todos: todosRef
  },
  methods: {
    addTodo: function () {
      // this.$store.commit({
      //  type: 'addTodo',
      //  newTodo: this.newTodo
      // })
      this.$store.dispatch('addTodo', {
        newTodo: this.newTodo
      })
      // todosRef.push(this.newTodo)
      // this.newTodo.title = ''
    },
    removeTodo: function (todo) {
      this.$store.commit('removeTodo', {
        todo
      })
      // todosRef.child(book['.key']).remove()
    }
  },
  computed: {
    ...mapGetters(['allTodos', 'newTodo'])
  }
}

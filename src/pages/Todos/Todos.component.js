import { db } from '@/helpers/firebaseConfig.js'

const todosRef = db.ref('todos')

export default {
  name: 'todos',
  props: [],
  firebase: {
    todos: todosRef
  },
  mounted () {

  },
  data () {
    return {
      newTodo: {
        title: ''
      }
    }
  },
  methods: {
    addTodo: function () {
      todosRef.push(this.newTodo)
      this.newTodo.title = ''
    },
    removeTodo: function (book) {
      todosRef.child(book['.key']).remove()
    }
  },
  computed: {

  }
}

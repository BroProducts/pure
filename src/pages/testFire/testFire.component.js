import { db } from '@/helpers/firebase.config.js'

const booksRef = db.ref('books')

console.log(db)

export default {
  name: 'TestFire',
  firebase: {
    books: booksRef
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newBook: {
        title: '',
        author: '',
        url: 'http://'
      }
    }
  },
  methods: {
    addBook: function () {
      booksRef.push(this.newBook)
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.url = 'http://'
    },
    removeBook: function (book) {
      booksRef.child(book['.key']).remove()
    }
  }
}

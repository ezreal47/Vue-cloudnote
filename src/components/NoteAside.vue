<template>
  <aside class="note-aside">
    <div class="aside-head">
      <el-dropdown @command="handleCommand" placement='top' class="dropdown">
        <span class="title">
          {{currentbook.title}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="notebook.id" v-for="notebook in notebooks" :key="notebook.id" >{{notebook.title}}</el-dropdown-item>          
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="primary" icon="el-icon-edit" size="mini" round class="addnote"
      @click="add">添加笔记</el-button>
    </div>
    <div class="notes">
  <ul>
    <li class="notelist-item" v-for="(note,index) in notes" 
    :key="note.id" @click="addClass(index)" :class="{selected: select == index}">
      <router-link :to="`/note?noteId=${note.id}&notebookId=${currentbook.id}`" class="routerlink">
        <div class="notetitle">
          <svg class="icon-note">
            <use xlink:href="#icon-notes"></use>
          </svg>
          <span>{{note.title}}</span>
        </div>
        <div class="notecontent">
          <p>{{note.content}}</p>
        </div>
        <span class="notedate">{{note.localDate}}</span>
    </router-link>
      </li>
  </ul>
    </div>
  </aside>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'


export default {
  created() {
    this.getNotebooks()
      .then(() => {
        this.setCurrentbook({ currentbookId: this.$route.query.notebookId })
        return this.getNotes({ notebookId: this.currentbook.id })
      }).then(() => {
        this.setCurrentnote({ currentnoteId: this.$route.query.noteId })
        this.$router.replace({
          path: '/note',
          query: {
            noteId: this.currentNote.id,
            notebookId: this.currentbook.id
          }
        })
      })
  },

  data() {
    return {
      select: 0
    }
  },

  computed: {
    ...mapGetters([
      'notebooks',
      'notes',
      'currentbook',
      'currentNote'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentbook',
      'setCurrentnote'
    ]),
    ...mapActions([
      'getNotebooks',
      'getNotes',
      'addNote'
    ]),
    handleCommand(notebookId) {
      this.$store.commit('setCurrentbook', { currentbookId: notebookId })
      this.getNotes({ notebookId }).then(() => {
        this.setCurrentnote()
        this.$router.replace({
          path: '/note',
          query: {
            noteId: this.currentNote.id,
            notebookId: this.currentbook.id
          }
        })
      })
    },
    addClass(index) {
      this.select = index
    },
    add() {
      this.addNote({ notebookId: this.currentbook.id })
        .then(() => {
          this.getNotes({ notebookId: this.currentbook.id })
           .then(() => {
            this.select = 0;
            this.$router.replace({
              path: '/note',
              query: {
                noteId: this.notes[0].id,
                notebookId: this.currentbook.id
              }
            })
          })
        })
    }
  }
}
</script>

<style scoped lang="scss">

@import '../assets/scss/noteaside.scss';

</style>

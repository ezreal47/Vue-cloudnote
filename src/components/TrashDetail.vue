<template>
  <div id="trash-detail">
    <div class="note-aside">
      <h2>回收站</h2>
      <ul class="note-list">
        <li class="note-item" v-for="note in trashNotes" :key="note.id">
          <router-link :to="`/trash?noteId=${note.id}`" class="routerlink">
            <div class="note-title">
              <span>{{note.title}}</span>
              <div class="icon-wrapper">
                <div title="恢复笔记" @click="onRevertNote">
                  <svg class="icon icon-recover"><use xlink:href="#icon-redovariant"></use></svg>
                </div>
                <div title="永久删除" @click="onDeleteNote">
                  <svg class="icon icon-delete"><use xlink:href="#icon-trashcan"></use></svg>
                </div>
              </div>
            </div>
            <div class="createdate">{{note.localDate}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="note-detail">
      <div class="notedetail-title">
        <p>{{currentTrashNote.title}}</p>
        <div class="icon-wrapper">
          <div title="恢复笔记" @click="onRevertNote">
            <svg class="icon icon-recover"><use xlink:href="#icon-redovariant"></use></svg>
          </div>
          <div title="永久删除" @click="onDeleteNote">
            <svg class="icon icon-delete"><use xlink:href="#icon-trashcan"></use></svg>
          </div>
        </div>
      </div>
      <div class="notedetail-content">
        <p>{{currentTrashNote.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },

  created() {
    this.checkLogin({ path: '/login' })
    this.getTrashNotes()
      .then(() => {
        this.setCurrentTrashNote({ currentTrashNoteId: this.$route.query.noteId })
      })
  },  

  computed: {
    ...mapGetters([
      'trashNotes',
      'currentTrashNote'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentTrashNote'
    ]),

    ...mapActions([
      'getTrashNotes',
      'deleteTrashNote',
      'revertTrashNote',
      'checkLogin'
    ]),

    onDeleteNote() {
      this.deleteTrashNote({ noteId: this.currentTrashNote.id })
    },

    onRevertNote() {
      this.revertTrashNote({ noteId: this.currentTrashNote.id })
        .then(() => {
          this.setCurrentTrashNote()
          this.$router.replace({
            path: '/trash',
            query: { noteId: this.currentTrashNote.id }
          })
        })
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.setCurrentTrashNote({ currentTrashNoteId: to.query.noteId })
    next()
  }
}
</script>

<style scoped lang="scss">
 
@import '../assets/scss/trashdetail.scss';

</style>
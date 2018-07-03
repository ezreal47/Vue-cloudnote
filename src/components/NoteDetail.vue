<template>
  <div id="note-detail">
    <!--<note-aside @update:notes = 'val => notes = val'></note-aside> -->
    <note-aside></note-aside> 
    <div class="note-content">
      <div class="note-bar">
        <div class="date">
          <span>创建日期:&nbsp{{currentNote.localDate}}</span> 
          <span class="update">更新日期:&nbsp{{currentNote.newCreatedAt}}</span>
          <span>{{status}}</span>
        </div>  
        <div class="icon">
          <span title="编辑笔记" v-show="isPreview">
            <svg class="icon-preview" @click="isPreview = !isPreview"><use xlink:href="#icon-edit"></use></svg>
          </span>
          <span title="预览笔记" v-show="!isPreview">
            <svg class="icon-preview" @click="isPreview = !isPreview"><use xlink:href="#icon-preview"></use></svg>
          </span>
          <span title="删除笔记">
            <!--<svg class="icon-deletenote" @click="onDeleteNote"><use xlink:href="#icon-delete"></use></svg>-->
            <svg class="icon-deletenote" @click="onDeleteNote"><use xlink:href="#icon-trashcan"></use></svg>
          </span>
        </div> 
      </div>
      <div class="note-title">
        <input type="text" placeholder="请输入标题" v-model:value="currentNote.title" @input="onUpdateNote" 
        @keydown="status = '正在输入...'" v-show="!isPreview">
        <div class="preview" v-html="PreviewTitle" v-show="isPreview" ></div>
      </div>
      <div class="editor">
        <textarea placeholder="请输入内容 支持markdown语法" v-model:value='currentNote.content'  @keydown="status='正在输入...'"
        @input="onUpdateNote" v-show="!isPreview"></textarea>
        <div class="preview" v-html="PreviewContent" v-show="isPreview" ></div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteAside from '@/components/NoteAside.vue'
import _ from 'lodash'
import MarkdownIt from 'markdown-it'
import { mapState, mapGetters, mapMutaions, mapActions } from 'vuex'

let md = new MarkdownIt();
let result = md.render('# markdown-it rulezz!');

export default {
  components: {
    NoteAside
  },
  data() {
    return {
      status: '',
      isPreview: false
    }
  },

  computed: {
    ...mapGetters([
      'notes',
      'currentNote'
    ]),

    PreviewTitle() {
      return md.render(this.currentNote.title || '')
    },

    PreviewContent() {
      return md.render(this.currentNote.content || '')
    }
  },

  created() {
    this.checkLogin({ path: '/login' })
    if (!this.$route.query.noteId) {
      console.log('noteID不存在')
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.commit('setCurrentnote', { currentnoteId: to.query.noteId })
    next()
  },
  methods: {
    ...mapActions([
      'updateNote',
      'deleteNote',
      'checkLogin'
    ]),

    onUpdateNote: _.debounce(function() {
      if (!this.currentNote.id) {
          this.$message({message:'请先添加笔记本',center:true}) 
          return
        }
      this.updateNote({
        noteId: this.$route.query.noteId, title: this.currentNote.title,
        content: this.currentNote.content
      })
        .then(data => {
          this.status = '已保存'
        }).catch(data => {
          this.status = '保存失败'
        })
    }, 800),

    onDeleteNote() {
      this.deleteNote({ noteId: this.currentNote.id })
        .then(data => {
          this.$router.replace({ path: '/note' })
        })
    }
  }
}
</script>

<style scoped lang="scss"> 

@import '../assets/scss/notedetail.scss';

</style>
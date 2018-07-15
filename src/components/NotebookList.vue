<template>
  <div id="notebooks">
    <header>
      <a href="#" class="add" @click.prevent="onCreate">
        <svg class="icon-plus">
          <use xlink:href="#icon-plus-circle-s"></use>
        </svg>
        <span>添加笔记本</span>
      </a>
    </header>
    <main>
      <div class="notebook-wrapper">
        <h3>笔记本列表({{notebooks.length}})</h3>
        <ul class="notebook-list">
          <li class="item" v-for="(notebook,index) in notebooks" :key="notebook.id"> 
            <router-link :to="`/note/?notebookId=${notebook.id}`" class="notebook">
              <div class="left-message">
                <svg class="icon-notebook">
                  <use xlink:href="#icon-notebook2"></use>
                </svg>
                <span>{{notebook.title}}</span>
                <span class="note-num">{{notebook.noteCounts}}</span>
              </div>
              <div class="right-message">
                <span class="date">{{notebook.newCreatedAt}}</span>
                <span class="action" @click.stop.prevent="onDelete(notebook,index)">删除</span>
                <span class="action" @click.stop.prevent="onEdit(notebook,index)">编辑</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },

  created() {
    this.checkLogin()
    this.$store.dispatch('getNotebooks')
  },

  computed: {
    ...mapGetters(['notebooks'])
  },

  methods: {
    ...mapActions([
      'getNotebooks',
      'addNotebook',
      'updateNotebook',
      'deleteNotebook',
      'checkLogin'
    ]),

    onCreate() {
      this.$prompt('', '请输入笔记本标题', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: '笔记本标题不能为空且不能超过20个字符',
        customClass: 'EUaddnote'
      }).then(({ value }) => {
        this.addNotebook({ title: value })
      })
    },
    onEdit(notebook, index) {
      let id = this.notebooks[index].id
      this.$prompt('', '请输入新的笔记本标题', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^.{1,30}$/,
        inputValue: notebook.title,
        inputErrorMessage: '笔记本标题不能为空且不能超过20个字符',
        customClass: 'EUeditnote'
      }).then(({ value }) => {
        this.updateNotebook({ notebookId: id, title: value })
      })
    },
    onDelete(notebook, index) {
      let id = this.notebooks[index].id
      this.$confirm('是否删除当前笔记本?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteNotebook({ notebookId: id })
      })
    }
  }
}
</script>

<style scoped lang="scss">

@import '../assets/scss/notebooklist.scss';

</style>

<style lang="scss">
  .EUaddnote {
    .el-message-box__header {
      color: #606266;
      .el-message-box__title {
        color: #606266;
        font-size: 16px;
      }
    }
    .el-message-box__message {
      padding: 0px;
    }
    .el-message-box__content {
      padding-top: 0;
    }
  }
 .EUeditnote {
  .el-message-box__header {
    .el-message-box__title {
        color: #606266;
        font-size: 16px;
    }
  }
  .el-message-box__content {
    padding-top: 0;
  }
 } 

</style>

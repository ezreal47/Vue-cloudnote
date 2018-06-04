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
            <a href="" class="notebook">
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
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '@/api/auth'
import Notebooks from '@/api/notebooks'
import tranformTime from '@/helpers/util'

export default {
  data () {
    return {
      msg: '笔记本列表',
      notebooks: []
    }
  },

  created() {
    Auth.getInfo()
      .then(res => {
        if(!res.isLogin){
          this.$router.push({path:'/login'})
        }
      })

    Notebooks.getLIST()
      .then(res => {
        this.notebooks = res.data
        this.notebooks.reverse();
      })  
  },
  methods: {
    onCreate() {
      let title = window.prompt('创建笔记本')
      if(title.trim() === '') {
        alert('不能为空')
        return
      }
      Notebooks.addNotebook({ title })
        .then(res => {
          this.notebooks.unshift(res.data)
          res.data.newCreatedAt = tranformTime(res.data.createdAt)
        })
    },
    onEdit(notebook,index) {
      let id = this.notebooks[index].id
      let title = window.prompt('修改标题',notebook.title)
      Notebooks.updateNotebook(id,{title})
        .then(res => {
          notebook.title = title
        })
    },
    onDelete(notebook,index) {
      let id = this.notebooks[index].id
      Notebooks.deleteNotebook(id)
        .then(res => {
          this.notebooks.splice(index,1)
        })
    }
  }
}
</script>

<style scoped lang="scss">

#notebooks {
  flex: 1;
  header {
    border-bottom: 1px solid #bbb;
    padding: 12px;
    .add {
      color: #555;
      display: flex;
      width: 100px;
      border-radius: 30px;
      padding: 5px;
      background-color: #fff;
      border: 1px solid;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      .icon-plus {
        width: 18px;
        height: 18px;
        fill: #666;
      }
    }
    span {
      margin-left: 2px;
    }
  }
  main {
    .notebook-wrapper {
      max-width: 900px;
      margin: 0 auto;
      margin-top: 30px;
      h3 {
        font-size: 12px;
        color: #000;
        padding-bottom: 10px;
      }
      .notebook-list {
        // padding: 10px;
        border-radius: 2px;
        background-color: #fff;
        margin-bottom: 50px;
        .item {
          font-size: 12px;
          padding: 16px;
          border-bottom: 1px solid #b3c0c8;
          &:last-child {border: none;} 
          .notebook {
            display: flex;
            justify-content: space-between;
            color: #666;
            vertical-align: baseline;
            .left-message {
              display: flex;
              align-items: center;
              line-height: 16px;
              color: #222;
              font-weight: bold;
              .note-num {
                color: #666;
                font-weight: normal;
                margin-left: 2px;
              }
            }
            .right-message {
              font-weight: 600;
              color: #b3c0c8;
              span {
                margin-right: 4px;
              }
            }
            .icon-notebook {
              width: 16px;
              height: 16px;
              fill: #666;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}

</style>
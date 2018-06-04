<template>
  <div id="login">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="main"></div>
        <div class="form-wrapper">

          <div class="head">
            <svg class="icon-head">
              <use xlink:href="#icon-yezi-"></use>
            </svg>
            <div class="title">
              <h2>CloudNote</h2>
              <p>随时随地获取、整理、分享笔记</p>
            </div>
          </div>

          <div class="form">
            <div class="tab">
              <div class="bt-tab" :class="{active: login.status}" @click="showLogin">登录</div>
              <div class="bt-tab" :class="{active: signup.status}" @click="showSignup">注册</div>
            </div>
            <transition name="nice">
              <div class="signin" v-show="isShowLogin">
                <div class="input-wrapper">
                  <svg class="icon-account iconfont">
                    <use xlink:href="#icon-account"></use>
                  </svg>
                  <input type="text" placeholder="账号" v-model="login.username">
                </div>
                <div class="input-wrapper">
                  <svg class="icon-key iconfont">
                    <use xlink:href="#icon-key"></use>
                  </svg>
                  <input type="password" placeholder="密码" v-model="login.password">
                </div>
                <p v-bind:class="{error: login.isError}" class="tip">{{login.notice}}</p>
                <div class="button" @click="onLogin">SIGN IN</div>
              </div>
            </transition>

            <transition name="nice">
              <div class="register" v-show="isShowSignup">
                <div class="input-wrapper">
                  <svg class="icon-account iconfont">
                    <use xlink:href="#icon-account-plus"></use>
                  </svg>
                  <input type="text" placeholder="创建账号" v-model="signup.username">
                </div>
                <div class="input-wrapper">
                  <svg class="icon-key iconfont">
                    <use xlink:href="#icon-keypairs"></use>
                  </svg>
                  <input type="password" placeholder="设置密码" v-model="signup.password">
                </div>
                <p v-bind:class="{error: signup.isError}" class="tip">{{signup.notice}}</p>
                <div class="button" @click="onSignup">SIGN UP</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '@/api/auth'
import Bus from '@/helpers/bus'

  Auth.getInfo()
    .then(data => {
      console.log(data)
    })

export default {
  name: 'Login',
  data () {
    return {
      isShowLogin: true,
      isShowSignup:false,
      login: {
        username: '',
        password: '',
        notice: '请输入账号和密码',
        isError:false,
        status: true
      },
      signup: {
        username: '',
        password: '',
        notice: '请创建账号和密码',
        isError:false,
        status:false
      }
    }
  },
  methods: {
    showLogin(){
      this.isShowSignup = false
      this.isShowLogin = true
      this.login.status = true
      this.signup.status = false
    },
    showSignup(){
      this.isShowLogin = false
      this.isShowSignup = true
      this.login.status = false
      this.signup.status = true
    },
    onLogin(){
      if(!/^[\w]{3,16}$/.test(this.login.username)){
        console.log('用户名必须是字母,数字或者下划线,3-16位')
        console.log(this.login.username)
        this.login.isError = true
        this.login.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
        return
      }
      if(!/^.{3,16}$/.test(this.login.password)){
        this.login.isError = true
        this.login.notice = "密码必须在3-16位之间"
        return
      }
      this.login.isError = false
      this.login.notice = ''
      
      Auth.login({username:this.login.username, password:this.login.password})
        .then(data => {
          console.log(data)
          Bus.$emit('userInfo',{username: this.login.username})
          this.$router.push({path:'notebooks'})
        }).catch(data => {
          console.log(data)
          this.login.isError = true
          this.login.notice = data.msg
        })
    },
    onSignup(){
     if(!/^[\w]{3,16}$/.test(this.signup.username)){
        console.log('用户名必须是字母,数字或者下划线,3-16位')
        console.log(this.signup.username)
        this.signup.isError = true
        this.signup.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
        return
      }
      if(!/^.{3,16}$/.test(this.signup.password)){
        this.signup.isError = true
        this.signup.notice = "密码必须在3-16位之间"
        return
      }
      this.signup.isError = false
      this.signup.notice = ''

      Auth.signup({username:this.signup.username, password:this.signup.password})
        .then(data => {
          console.log(data)
           Bus.$emit('userInfo',{username: this.signup.username})
          this.$router.push({path: 'notebooks'})
        }).catch(data => {
          console.log(data)
          this.signup.isError = true
          this.signup.notice = data.msg
        })

    }
  }
}
</script>

<style  lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  color: #fff;
}
.modal-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 70vw;
  height: 70vh;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background: #273339;
  .main {
    flex: 1;
    background: #232c33 url('//p9fqeuw7k.bkt.clouddn.com/notebook1.jpg') center no-repeat;
    background-size: contain;
  }
  .form-wrapper{
    width: 280px;
    background: linear-gradient(#1b2029,#1e252c,#222b32,#2c3a41);
    .head {
      padding-top: 20px;
      text-align: center;
      .icon-head {
        width: 50px;
        height: 50px;
      }
      h2 {
        margin-top: 6px;
      }
      p {
        font-size: 12px;
      }
    }
    .form {
      .tab {
        margin-top: 60px;
        display: flex;
        justify-content: space-around;
        .bt-tab  {
          color: #787a87;
          cursor: pointer;
          &.active {
            border-bottom: 2px solid #ff6567;
            padding-bottom: 3px;
            color: #fff;
          }
        }
      }
      .signin, .register {
        position: relative;
        margin-top: 50px;
        .iconfont {
          width: 20px;
          height: 20px;
          fill: #fff;
          margin-right: 16px;
        }
        .input-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 16px;
          input {
            outline: none;
            border-radius: 4px;
          }
        }
        
        .tip {
          width: 180px;
          left: 50%;
          top: 70px;
          text-align: center;
          transform: translateX(-50%);
          position: absolute;
          color: #ddd;
          font-size: 12px;
          &.error {
            color: red;
          }
        }
      }
      .button {
        width: 210px;
        height: 35px;
        line-height: 35px;
        border-radius: 20px;
        margin:  0 auto;
        margin-top: 80px;
        background: #ff6567;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
      }
    }
    .nice-enter-active {
      transition: all .8s ease;
    }
    // .nice-leave-active {
    //   transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    // }
    .nice-enter {
      transform: translateX(100px);
      opacity: 0;
    }
    // .nice-leave-to{
    //   color: red;
    //   transform: translateX(100px);
    //   opacity: 0;
    // } 
  }
}

</style>
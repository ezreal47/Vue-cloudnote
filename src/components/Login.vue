<template>
  <div id="login">
    <div class="Tip" v-if="Tip">
      <svg class="Tip-icon"><use xlink:href="#icon-tip"></use></svg>
      <p>测试账号:test1 &nbsp&nbsp&nbsp&nbsp  密码:123456</p>
      <div class="closeTip" @click="Tip = false">
        <svg class="closeTip-icon"><use xlink:href="#icon-close"></use></svg>
      </div>
    </div>
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
import {  mapGetters , mapActions } from 'vuex'
import { Message } from 'element-ui'

export default {
  name: 'Login',
  data () {
    return {
      isShowLogin: true,
      isShowSignup:false,
      Tip: true,
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
    ...mapActions({
      longinVuex: 'login',
      signupVuex: 'signup',

    }),
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
      
      this.longinVuex({username:this.login.username, password:this.login.password})
        .then(() => {
          this.$router.push({path:'notebooks'})
          Message.success({message:'登录成功',center:true,duration:2000})
        }).catch(data => {
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

      this.signupVuex({username:this.signup.username, password:this.signup.password})
        .then(() => {
           this.$router.push({path: 'notebooks'})
           Message.success({message:'注册成功',center:true,duration:2000})
        }).catch(data => {
          this.signup.isError = true
          this.signup.notice = data.msg
        })
    }
  }
}
</script>

<style  lang="scss" scoped>

@import '../assets/scss/login.scss';

</style>
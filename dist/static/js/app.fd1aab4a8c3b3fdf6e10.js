webpackJsonp([5],{"7sfN":function(t,e){},"8LgM":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("/5sW"),r=n("Dd8w"),a=n.n(r),s=n("NYxO"),i={data:function(){return{}},computed:a()({},Object(s.c)(["username"])),methods:a()({},Object(s.d)(["setUser"]),Object(s.b)(["checkLogin"])),created:function(){this.checkLogin()}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"symbol",attrs:{title:this.username}},[e("svg",{staticClass:"avatar"},[e("use",{attrs:{"xlink:href":"#icon-icon-test"}})]),this._v(" "),e("div",{staticClass:"title"},[this._v("CloudNote")])])},staticRenderFns:[]};var c=n("VU/8")(i,u,!1,function(t){n("8LgM")},"data-v-633fb02a",null).exports,d=n("zL8q"),f=n.n(d),l={components:{avatar:c},methods:a()({},Object(s.b)(["logout"]),{onLogout:function(){this.logout().then(function(){d.Message.success({message:"注销成功",center:!0,duration:2e3})})}})},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("avatar"),t._v(" "),n("div",{staticClass:"icons"},[n("router-link",{attrs:{to:"/note",title:"笔记"}},[n("div",{staticClass:"wrap"},[n("svg",{staticClass:"iconfont icon-note"},[n("use",{attrs:{"xlink:href":"#icon-icon-test1"}})]),t._v(" "),n("span",{staticClass:"tip"},[t._v("笔记详情")])])]),t._v(" "),n("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[n("div",{staticClass:"wrap"},[n("svg",{staticClass:"iconfont icon-notebook"},[n("use",{attrs:{"xlink:href":"#icon-notebook"}})]),t._v(" "),n("span",{staticClass:"tip"},[t._v("笔记本列表")])])]),t._v(" "),n("router-link",{attrs:{to:"/trash",title:"回收站"}},[n("div",{staticClass:"wrap"},[n("svg",{staticClass:"iconfont icon-trash"},[n("use",{attrs:{"xlink:href":"#icon-trashcan"}})]),t._v(" "),n("span",{staticClass:"tip"},[t._v("回收站")])])])],1),t._v(" "),n("div",{staticClass:"logout",attrs:{title:"注销用户"}},[n("div",{staticClass:"wrap",on:{click:t.onLogout}},[n("svg",{staticClass:"iconfont icon-logout"},[n("use",{attrs:{"xlink:href":"#icon-logout"}})]),t._v(" "),n("span",{staticClass:"tip"},[t._v("注销")])])])],1)},staticRenderFns:[]};var v={name:"App",components:{sidebar:n("VU/8")(l,h,!1,function(t){n("UYE/")},"data-v-4f1709d6",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(v,b,!1,function(t){n("7sfN")},null,null).exports,k=n("/ocq");o.default.use(k.a);var g=new k.a({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e(1).then(n.bind(null,"C3fl"))}},{path:"/login",component:function(){return n.e(2).then(n.bind(null,"xJsL"))}},{path:"/note",component:function(){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return n.e(3).then(n.bind(null,"WMg/"))}}]}),p=(n("tvR6"),n("//Fk")),I=n.n(p),N=n("mtWM"),E=n.n(N);function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new I.a(function(o,r){var a={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?a.params=n:a.data=n,E()(a).then(function(t){200===t.status?o(t.data):"缺少 notebookId 参数或者 notebookId 无效"==t.data.msg?(d.Message.error("请先添加笔记本"),r(t.data)):(d.Message.error(t.data.msg),r(t.data))}).catch(function(t){d.Message.error("网络异常"),r({msg:"网络异常"})})})}E.a.defaults.baseURL="//note-server.hunger-valley.com",E.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",E.a.defaults.withCredentials=!0;var w=n("pFYg"),C=n.n(w),A=function(t){var e=("object"===(void 0===t?"undefined":C()(t))?t:new Date(t)).getTime(),n=(Date.now()-e)/1e3,o="";switch(!0){case n<60:o="刚刚";break;case n<3600:o=Math.floor(n/60)+"分钟前";break;case n<86400:o=Math.floor(n/3600)+"小时前";break;default:o=Math.floor(n/86400)+"天前"}return o},D=function(t){return("object"===(void 0===t?"undefined":C()(t))?t:new Date(t)).toLocaleString()},_={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},L=function(){return new I.a(function(t,e){T(_.GET).then(function(e){e.data=e.data.sort(function(t,e){t.createdAt,e.createdAt}),e.data.forEach(function(t){t.newCreatedAt=A(t.createdAt)}),t(e)}).catch(function(t){e(t)})})},M=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return T(_.UPDATE.replace(":id",t),"PATCH",{title:n})},U=function(t){return T(_.DELETE.replace(":id",t),"DELETE")},P=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new I.a(function(t,n){T(_.ADD,"POST",{title:e}).then(function(e){e.data.newCreatedAt=A(e.data.createdAt),t(e)}).catch(function(t){n(t)})})},x={state:{notebooks:null,currentbookId:null},getters:{notebooks:function(t){return t.notebooks||[]},currentbook:function(t){return Array.isArray(t.notebooks)?t.currentbookId?t.notebooks.find(function(e){return e.id==t.currentbookId}):t.notebooks[0]||{}:{}}},mutations:{setNotebooks:function(t,e){t.notebooks=e.notebooks.reverse()},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){t.notebooks.find(function(t){return t.id==e.notebookId}).title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!==e.notebookId})},setCurrentbook:function(t,e){t.currentbookId=e.currentbookId}},actions:{getNotebooks:function(t){var e=t.commit;return L().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;return P({title:e.title}).then(function(t){n("addNotebook",{notebook:t.data}),d.Message.info({message:t.msg,center:!0,duration:2e3})})},updateNotebook:function(t,e){var n=t.commit;return M(e.notebookId,{title:e.title}).then(function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title})})},deleteNotebook:function(t,e){var n=t.commit;return U(e.notebookId).then(function(t){n("deleteNotebook",{notebookId:e.notebookId}),d.Message.info({message:t.msg,center:!0,duration:2e3})})}}},O={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},R=function(t){var e=t.notebookId;return new I.a(function(t,n){T(O.GET.replace(":notebookId",e)).then(function(e){e.data.forEach(function(t){t.newCreatedAt=A(t.updatedAt),t.localDate=D(t.createdAt)}),t(e)}).catch(function(t){n(t)})})},y=function(t,e){var n=t.noteId,o=e.title,r=e.content;return T(O.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},G=function(t){var e=t.noteId;return T(O.DELETE.replace(":noteId",e),"DELETE")},j=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,s=void 0===a?"":a;return T(O.ADD.replace(":notebookId",e),"POST",{title:r,content:s})},S={state:{notes:null,currentnoteId:null},getters:{notes:function(t){return t.notes},currentNote:function(t){return Array.isArray(t.notes)?t.currentnoteId?t.notes.find(function(e){return e.id==t.currentnoteId})||{}:t.notes[0]||{}:{}}},mutations:{setNotes:function(t,e){t.notes=e.notes.reverse()},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find(function(t){return t.id==e.noteId});n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter(function(t){return t.id!==e.noteId})},setCurrentnote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.currentnoteId=e.currentnoteId}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return R({notebookId:o}).then(function(t){n("setNotes",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return j({notebookId:o},{title:r,content:a}).then(function(t){n("addNote",{note:t.data}),d.Message.info({message:t.msg,center:!0,duration:2e3})})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return y({noteId:o},{title:r,content:a}).then(function(t){n("updateNote",{noteId:o,title:r,content:a})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return G({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),d.Message.info({message:t.msg,center:!0,duration:2e3})})}}},F={GET:"./notes/trash",REVERT:"./notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},H=function(){return new I.a(function(t,e){T(F.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),e.data.forEach(function(t){t.newCreatedAt=A(t.createdAt),t.localDate=D(t.createdAt)}),t(e)}).catch(function(t){e(t)})})},V=function(t){var e=t.noteId;return T(F.REVERT.replace(":noteId",e),"PATCH")},Y=function(t){var e=t.noteId;return T(F.DELETE.replace(":noteId",e),"DELETE")},W={state:{trashNotes:null,currentTrashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||[]},currentTrashNote:function(t,e){return t.currentTrashNoteId?t.trashNotes.find(function(e){return e.id==t.currentTrashNoteId})||{}:e.trashNotes[0]||{}}},mutations:{setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!=e.noteId})},setCurrentTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.currentTrashNoteId=e.currentTrashNoteId},addTrashNote:function(t,e){t.trashNotes.unshift(e.note)}},actions:{getTrashNotes:function(t){var e=t.commit;return H().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Y({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),d.Message.info({message:t.msg,center:!0,duration:2e3})})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return V({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),d.Message.info({message:"已恢复笔记",center:!0,duration:2e3})})}}},$="/auth/register",q="/auth/login",J="/auth/logout",z="/auth",B=function(t){var e=t.username,n=t.password;return T($,"POST",{username:e,password:n})},K=function(t){var e=t.username,n=t.password;return T(q,"POST",{username:e,password:n})},Q=function(){return T(J)},X=function(){return T(z)},Z={state:{user:null},getters:{username:function(t){return null==t.user?"未登录":t.user.username}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return K({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},signup:function(t,e){var n=t.commit,o=e.username,r=e.password;return B({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},checkLogin:function(t){var e=t.commit;return null!==t.state.user?I.a.resolve():X().then(function(t){t.isLogin?e("setUser",{user:t.data}):g.push({path:"/login"})})},logout:function(t){var e=t.commit;return Q().then(function(t){e("setUser",{user:null}),g.push({path:"/login"})})}}};o.default.use(s.a);var tt=new s.a.Store({modules:{notebook:x,note:S,trash:W,user:Z}});o.default.use(f.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:g,store:tt,render:function(t){return t(m)}})},"UYE/":function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fd1aab4a8c3b3fdf6e10.js.map
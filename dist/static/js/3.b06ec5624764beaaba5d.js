webpackJsonp([3],{C3fl:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),s=o.n(n),a=o("NYxO"),i={data:function(){return{}},created:function(){this.checkLogin({path:"/login"}),this.$store.dispatch("getNotebooks")},computed:s()({},Object(a.c)(["notebooks"])),methods:s()({},Object(a.b)(["getNotebooks","addNotebook","updateNotebook","deleteNotebook","checkLogin"]),{onCreate:function(){var t=this;this.$prompt("请输入笔记本标题","新建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"笔记本标题不能为空且不能超过20个字符"}).then(function(e){var o=e.value;t.addNotebook({title:o})})},onEdit:function(t,e){var o=this,n=this.notebooks[e].id;this.$prompt("请输入新的笔记本标题","",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputValue:t.title,inputErrorMessage:"笔记本标题不能为空且不能超过20个字符"}).then(function(t){var e=t.value;o.updateNotebook({notebookId:n,title:e})})},onDelete:function(t,e){var o=this,n=this.notebooks[e].id;this.$confirm("是否删除当前笔记本?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.deleteNotebook({notebookId:n})})}})},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"notebooks"}},[o("header",[o("a",{staticClass:"add",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onCreate(e)}}},[o("svg",{staticClass:"icon-plus"},[o("use",{attrs:{"xlink:href":"#icon-plus-circle-s"}})]),t._v(" "),o("span",[t._v("添加笔记本")])])]),t._v(" "),o("main",[o("div",{staticClass:"notebook-wrapper"},[o("h3",[t._v("笔记本列表("+t._s(t.notebooks.length)+")")]),t._v(" "),o("ul",{staticClass:"notebook-list"},t._l(t.notebooks,function(e,n){return o("li",{key:e.id,staticClass:"item"},[o("router-link",{staticClass:"notebook",attrs:{to:"/note/?notebookId="+e.id}},[o("div",{staticClass:"left-message"},[o("svg",{staticClass:"icon-notebook"},[o("use",{attrs:{"xlink:href":"#icon-notebook2"}})]),t._v(" "),o("span",[t._v(t._s(e.title))]),t._v(" "),o("span",{staticClass:"note-num"},[t._v(t._s(e.noteCounts))])]),t._v(" "),o("div",{staticClass:"right-message"},[o("span",{staticClass:"date"},[t._v(t._s(e.newCreatedAt))]),t._v(" "),o("span",{staticClass:"action",on:{click:function(o){o.stopPropagation(),o.preventDefault(),t.onDelete(e,n)}}},[t._v("删除")]),t._v(" "),o("span",{staticClass:"action",on:{click:function(o){o.stopPropagation(),o.preventDefault(),t.onEdit(e,n)}}},[t._v("编辑")])])])],1)}))])])])},staticRenderFns:[]};var r=o("VU/8")(i,c,!1,function(t){o("sfpv")},"data-v-1d020d94",null);e.default=r.exports},sfpv:function(t,e){}});
//# sourceMappingURL=3.b06ec5624764beaaba5d.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(t,e,n){"use strict";n.r(e);var r=n(41),o=(n(117),{data:function(){return{user:null}},methods:{submitForm:function(t){var e=document.querySelector("input[name=subject]"),content=document.querySelector("textarea[name=content]"),n={records:[{fields:{Subject:e.value,Content:content.value,Rating:100,id:this.user.uid,email:this.user.email}}]};this.$store.dispatch("createIdea",n),t.preventDefault()}},mounted:function(){var t=this,e=document.getElementById("idea_form");console.log(this.$store),e.addEventListener("submit",this.submitForm),r.a.auth().onAuthStateChanged((function(e){t.user=e,console.log(t.user),t.user||t.$router.push("/")}))}}),l=n(31),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"w-full max-w-lg p-4",attrs:{id:"idea_form",action:"post"}},[n("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[t._v("\n      Subject\n  ")]),t._v(" "),n("input",{staticClass:"appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{name:"subject",id:"grid-first-name",type:"text",placeholder:"Subject"}}),t._v(" "),n("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[t._v("\n      Whats your idea?)\n  ")]),t._v(" "),n("textarea",{staticClass:"appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{name:"content",id:"",cols:"30",rows:"10"}}),t._v(" "),n("button",{staticClass:"w-full bg-green-400 border rounded p-1 text-white",attrs:{type:"submit"}},[t._v("Face jugment")])])}],!1,null,null,null);e.default=component.exports}}]);
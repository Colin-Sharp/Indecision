(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{247:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{showPassword:!1,userInfo:{email:"colin@gmail.com",password:"sadsosad12345"}}},props:["submitForm","buttonText","hasName","error"]},n=r(33),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mx-2 mb-4 flex flex-col",on:{submit:function(t){return t.preventDefault(),e.submitForm(e.userInfo)}}},[e.hasName?r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"name"}},[e._v("\n        Your Name\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.name,expression:"userInfo.name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",attrs:{id:"name",type:"text",placeholder:"name"},domProps:{value:e.userInfo.name},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"name",t.target.value)}}})]):e._e(),e._v(" "),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("\n        Your email\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.email,expression:"userInfo.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",attrs:{id:"email",type:"text",placeholder:"email"},domProps:{value:e.userInfo.email},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("\n        Password\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.password,expression:"userInfo.password"}],staticClass:"shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3",attrs:{id:"password",type:"password",placeholder:"******************"},domProps:{value:e.userInfo.password},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"password",t.target.value)}}}),e._v(" "),r("p",{staticClass:"text-red text-xs italic"},[e._v("Please choose a password.")])]),e._v(" "),r("div",{staticClass:"flex items-center justify-between"},[r("button",{staticClass:"bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded",attrs:{type:"submit"}},[e._v("\n        "+e._s(e.buttonText)+"\n      ")])])])}),[],!1,null,null,null);t.default=component.exports},259:function(e,t,r){"use strict";r.r(t);var o=r(46),n=(r(125),{data:function(){return{error:""}},methods:{loginUser:function(e){var t=this;o.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){console.log(e),t.$router.push("/home")})).catch((function(e){t.errors=e}))}}}),l=r(33),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Login")]),e._v(" "),r("UserAuthForm",{attrs:{buttonText:"Login",submitForm:e.loginUser}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UserAuthForm:r(247).default})}}]);
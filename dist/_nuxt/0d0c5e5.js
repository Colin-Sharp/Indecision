(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{249:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{showPassword:!1,userInfo:{email:"",password:"",name:""}}},props:["submitForm","buttonText","hasName","error"]},n=r(23),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mx-2 mb-4 flex flex-col",on:{submit:function(t){return t.preventDefault(),e.submitForm(e.userInfo)}}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("\r\n        Your email\r\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.email,expression:"userInfo.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",attrs:{id:"email",type:"text",placeholder:"email"},domProps:{value:e.userInfo.email},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("\r\n        Password\r\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.password,expression:"userInfo.password"}],staticClass:"shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3",attrs:{id:"password",type:"password",placeholder:"******************"},domProps:{value:e.userInfo.password},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"password",t.target.value)}}}),e._v(" "),e.hasName?r("p",{staticClass:"text-green-800 text-xs italic"},[e._v("Please choose a password.")]):r("nuxt-link",{attrs:{to:"/register"}},[r("button",{staticClass:"text-green-800 text-xs italic"},[e._v("Have you register?")])])],1),e._v(" "),r("button",{staticClass:"bg-green-300 hover:bg-green-400 font-bold py-2 px-4 rounded text-white",attrs:{type:"submit"}},[e._v("\r\n      "+e._s(e.buttonText)+"\r\n    ")])])])}),[],!1,null,null,null);t.default=component.exports},266:function(e,t,r){"use strict";r.r(t);var o=r(41),n=(r(118),{data:function(){return{error:"",user:"",name:""}},methods:{registerUser:function(e){var t=this;o.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){t.$router.push("/home")})).catch((function(e){t.errors=e}))}},mounted:function(){var e=this;o.a.auth().onAuthStateChanged((function(t){e.user=t,e.user&&e.$router.push("/home")}))}}),l=r(23),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("UserAuthForm",{attrs:{buttonText:"Register",submitForm:e.registerUser,error:"error",hasName:!0}})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center text-lg text-green-400 font-bold my-4"},[r("h1",[e._v("Register")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{UserAuthForm:r(249).default})}}]);
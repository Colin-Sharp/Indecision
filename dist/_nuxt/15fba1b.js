(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(t,n,e){"use strict";var o=e(46);e(125);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyD7uiRYUYQVlUVrxjn4wCpdJa3brO0WR2c",authDomain:"indecision-eb85e.firebaseapp.com",projectId:"indecision-eb85e",storageBucket:"indecision-eb85e.appspot.com",messagingSenderId:"1068509593484",appId:"1:1068509593484:web:6b4c3be36b29dfb7cb20a9",measurementId:"G-99TF1H3KPH"}),n.a=o.a},166:function(t,n,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("1239d49d",content,!0,{sourceMap:!1})},182:function(t,n,e){"use strict";e(223);var o=e(33),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Header"),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Header:e(246).default})},183:function(t,n,e){e(184),t.exports=e(185)},223:function(t,n,e){"use strict";e(166)},224:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,'html{\n  font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n.button--green{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #3b8070;\n  color:#3b8070;\n  text-decoration:none;\n  padding:10px 30px\n}\n.button--green:hover{\n  color:#fff;\n  background-color:#3b8070\n}\n.button--grey{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #35495e;\n  color:#35495e;\n  text-decoration:none;\n  padding:10px 30px;\n  margin-left:15px\n}\n.button--grey:hover{\n  color:#fff;\n  background-color:#35495e\n}\nbody{\n  background:#e7e2e2\n}',""]),t.exports=o},226:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return f})),e.d(n,"mutations",(function(){return x}));var o=e(124),r=e(39),l=e.n(r),c="https://api.airtable.com/v0/appAZxQ29dzBN2Y7Z/",d={headers:{Authorization:"Bearer keyHWvShVlxbfFwBq"}},f=function(){},x={updateIdeas:function(t){l.a.get(c+"Ideas",d).then((function(t){return t})).then((function(data){var n=data.data.records;console.log("update",n),t.list=Object(o.a)(n)}))}}},246:function(t,n,e){"use strict";e.r(n);var o=e(46),r=(e(125),{data:function(){return{user:""}},mounted:function(){var t=this;o.a.auth().onAuthStateChanged((function(n){t.user=n}))},methods:{signout:function(){var t=this;o.a.auth().signOut().then((function(n){console.log(n),t.user="",t.$router.push("/")}))}}}),l=e(33),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flxed flex"},[e("div",{staticClass:"flex justify-start pl-4 items-center w-9/12"},[e("nuxt-link",{staticClass:"inline-block rounded mr-20 text-green-500 logo flex",attrs:{to:"/"}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),e("h2",{staticClass:"pl-1 font-bold"},[t._v("Indecision")])])],1),t._v(" "),t.$auth.loggedIn?e("div",[t._v("\r\n      "+t._s(t.$auth.user.email)+"\r\n      ")]):e("div",{staticClass:"flex items-center"},[t.user?t._e():e("nuxt-link",{staticClass:"m-2",attrs:{to:"/"}},[t._v("Login")]),t._v(" "),t.user?t._e():e("nuxt-link",{staticClass:"m-2",attrs:{to:"/register"}},[t._v("Register")]),t._v(" "),t.user?e("a",{staticClass:"nav-link ml-1",on:{click:t.signout}},[t._v("Signout")]):t._e()],1),t._v(" "),t.user?e("ul",{staticClass:"flex w-4/12 justify-between items-center px-4 mr-2 py-4"},[e("li",[e("nuxt-link",{staticClass:"inline-block rounded w-4/12 text-green-400 py-1",attrs:{to:"/addIdea"}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])],1),t._v(" "),e("li",{staticClass:"mx-2"},[e("nuxt-link",{staticClass:"inline-block rounded w-4/12 text-green-400 py-1",attrs:{to:"/ideas"}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}})])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"inline-block rounded w-4/12 text-green-400 py-1",attrs:{to:"/results"}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"}})])])],1)]):t._e()])}),[],!1,null,null,null);n.default=component.exports}},[[183,10,1,11]]]);
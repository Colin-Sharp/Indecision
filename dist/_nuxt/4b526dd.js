(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{248:function(t,e,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("0078097d",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n(248)},251:function(t,e,n){var r=n(69)((function(i){return i[1]}));r.push([t.i,".card{\n  transition:all 1s;\n  will-change:opacity\n}\n.card.faded-out{\n  opacity:0\n}\n.cards{\n  display:flex;\n  flex-wrap:wrap;\n  flex-direction:row\n}\n.card.expand{\n  width:90%;\n  margin:0 auto;\n  padding:0\n}\n.take-me-there{\n  width:60%;\n  margin:2px 20% 10px\n}\n.card.position{\n  position:absolute;\n  z-index:100\n}\n.circle-button{\n  height:40px;\n  width:40px;\n  border-radius:50%;\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23fff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 7l5 5m0 0l-5 5m5-5H6'/%3E%3C/svg%3E\")\n}",""]),t.exports=r},255:function(t,e,n){"use strict";n.r(e);n(55);var r=n(46),d=(n(125),{data:function(){return{cardisselected:!1,cardclickdisabled:!1,displayfull:!1,currentselectedcardindex:0,user:""}},computed:{getCardPosition:function(){if(this.displayfull)return this.currentselectedcardindex%2!=0?{right:"5%"}:{left:"5%"}}},methods:{handleCards:function(t,e){var n=this,r=e.currentTarget;if(!this.cardclickdisabled){if(this.cardclickdisabled=!0,this.cardisselected){if(this.currentselectedcardindex!==t)return;this.resetCards(r)}else this.currentselectedcardindex=t,this.expandCard(r);this.cardisselected=!this.cardisselected,setTimeout((function(){n.cardclickdisabled=!1}),1e3)}},expandCard:function(t){var e=this;this.toggleVanishCard("show"),setTimeout((function(){t.classList.add("position"),t.classList.add("expand"),e.displayfull=!0}),1e3)},resetCards:function(t){var e=this;this.displayfull=!1,t.classList.remove("expand"),setTimeout((function(){t.classList.remove("position"),e.toggleVanishCard("hide")}),1e3)},toggleVanishCard:function(t){var e=this.$refs.cards?this.$refs.cards.children:null;if(null!=e)for(var i=0;i<=3;i++)i!==this.currentselectedcardindex&&("show"===t?e[i].classList.add("faded-out"):e[i].classList.remove("faded-out"))}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged((function(e){t.user=e,t.user||t.$router.push("/")}))}}),l=(n(250),n(33)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"p-2"},[n("div",{ref:"cards",staticClass:"flex flex-wrap justify-between cards"},[n("div",{staticClass:"p-1 w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(0,e)}}},[n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1445583934509-4ad5ffe6ef08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRoaW5raW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:"Sunset in the mountains"}}),t._v(" "),t._m(0),t._v(" "),t.displayfull&&0===t.currentselectedcardindex?n("nuxt-link",{attrs:{to:"/addIdea"}},[n("button",{staticClass:"bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there"},[t._v("\n              Take me there\n            ")])]):t._e()],1)]),t._v(" "),n("div",{staticClass:"p-1 card w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(1,e)}}},[n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWRlYXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}),t._v(" "),t._m(1),t._v(" "),t.displayfull&&1===t.currentselectedcardindex?n("nuxt-link",{attrs:{to:"/ideas"}},[n("button",{staticClass:"bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there"},[t._v("\n              Take me there\n            ")])]):t._e()],1)]),t._v(" "),n("div",{staticClass:"p-1 card w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(2,e)}}},[n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:"Sunset in the mountains"}}),t._v(" "),t._m(2),t._v(" "),t.displayfull&&2===t.currentselectedcardindex?n("nuxt-link",{attrs:{to:"/results"}},[n("button",{staticClass:"bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there"},[t._v("\n            Take me there\n            ")])]):t._e()],1)]),t._v(" "),n("div",{staticClass:"p-1 card w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(3,e)}}},[t._m(3)])])]),t._v(" "),n("div",{staticClass:"flex w-full justify-end mt-4"},[n("nuxt-link",{attrs:{to:"/addIdea"}},[t.cardisselected?t._e():n("div",{staticClass:"circle-button bg-green-500 mb-1 mr-4"})])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("Add Your Idea")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n              Let everyone know your idea!\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("View Ideas")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n              Checkout all the idea.\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("View results")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n              See what idea were loved.\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}),t._v(" "),n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("About")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n              Lorem ipsum dolor sit.\n            ")])])])}],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{201:function(t,e,n){var content=n(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("0348c759",content,!0,{sourceMap:!1})},202:function(t,e,n){"use strict";n(201)},203:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,".card{\n  transition:all 1s;\n  will-change:opacity\n}\n.card.faded-out{\n  opacity:0\n}\n.cards{\n  display:flex;\n  flex-wrap:wrap;\n  flex-direction:row\n}\n.card.expand{\n  width:100%\n}\n.take-me-there{\n  width:60%;\n  margin:2px 20% 10px\n}\n.card.position{\n  position:absolute;\n  z-index:100\n}",""]),t.exports=r},205:function(t,e,n){"use strict";n.r(e);n(43);var r={data:function(){return{cardisselected:!1,cardclickdisabled:!1,displayfull:!1,currentselectedcardindex:0}},computed:{getCardPosition:function(){if(this.displayfull)return this.currentselectedcardindex%2!=0?{right:"0px"}:{left:"0px"}}},methods:{handleCards:function(t,e){var n=this,r=e.currentTarget;this.currentselectedcardindex=t,this.cardclickdisabled||(this.cardclickdisabled=!0,this.cardisselected?this.resetCards(r):this.expandCard(r),this.cardisselected=!this.cardisselected,setTimeout((function(){n.cardclickdisabled=!1}),1e3))},expandCard:function(t){var e=this;this.toggleVanishCard("show"),setTimeout((function(){t.classList.add("position"),t.classList.add("expand"),e.displayfull=!0}),1e3)},resetCards:function(t){var e=this;this.displayfull=!1,t.classList.remove("expand"),setTimeout((function(){t.classList.remove("position"),e.toggleVanishCard("hide")}),1e3)},toggleVanishCard:function(t){var e=this.$refs.cards?this.$refs.cards.children:null;if(null!=e)for(var i=0;i<=3;i++)i!==this.currentselectedcardindex&&("show"===t?e[i].classList.add("faded-out"):e[i].classList.remove("faded-out"))}}},d=(n(202),n(28)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4"},[n("div",{ref:"cards",staticClass:"flex flex-wrap justify-between cards"},[n("div",{staticClass:"p-1 w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(0,e)}}},[n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Sunset in the mountains"}}),t._v(" "),t._m(0),t._v(" "),n("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:t.displayfull,expression:"displayfull"}],attrs:{to:"/addIdea"}},[n("button",{staticClass:"bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there"},[t._v("\n            Take me there\n          ")])])],1)]),t._v(" "),n("div",{staticClass:"p-1 card w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(1,e)}}},[n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Sunset in the mountains"}}),t._v(" "),t._m(1),t._v(" "),n("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:t.displayfull,expression:"displayfull"}],attrs:{to:"/addIdea"}},[n("button",{staticClass:"bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there"},[t._v("\n            Take me there\n          ")])])],1)]),t._v(" "),n("div",{staticClass:"p-1 card w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(2,e)}}},[n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Sunset in the mountains"}}),t._v(" "),t._m(2),t._v(" "),n("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:t.displayfull,expression:"displayfull"}],attrs:{to:"/addIdea"}},[n("button",{staticClass:"bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there"},[t._v("\n          Take me there\n          ")])])],1)]),t._v(" "),n("div",{staticClass:"p-1 card w-6/12 card",style:t.getCardPosition,on:{click:function(e){return t.handleCards(3,e)}}},[n("div",{staticClass:"max-w-sm rounded h-full overflow-hidden shadow-lg"},[n("img",{staticClass:"w-full",attrs:{src:"https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Sunset in the mountains"}}),t._v(" "),t._m(3),t._v(" "),n("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:t.displayfull,expression:"displayfull"}],attrs:{to:"/addIdea"}},[n("button",{staticClass:"bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there"},[t._v("\n          Take me there\n          ")])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("Add Your Idea")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n            Let everyone know your idea!\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("View Ideas")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n            Checkout all the idea that other people have.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("View results")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n            See what idea were love and others not so much.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-2 my-2"},[n("div",{staticClass:"font-bold text-l mb-2"},[t._v("Why this is cool?")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-1"},[t._v("\n            Lorem ipsum dolor sit.\n          ")])])}],!1,null,null,null);e.default=component.exports}}]);
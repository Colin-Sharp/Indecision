(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{258:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{user:""}},mounted:function(){var t=this;firebase.auth().onAuthStateChanged((function(e){t.user=e,t.user||t.$router.push("/")}))}},o=n(33),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("This is the results")])}),[],!1,null,null,null);e.default=component.exports}}]);
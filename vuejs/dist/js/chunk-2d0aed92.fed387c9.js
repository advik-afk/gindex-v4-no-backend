(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed92"],{"0c8a":function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{class:t.ismobile?"content mx-0 mt-2 px-0 g2-content":"content ml-5 mt-2 mr-5 pl-5 pr-5 g2-content"},[i("figure",{staticClass:"image"},[i("img",{class:t.display?"":"is-hidden",attrs:{src:t.imgurl},on:{load:t.loading}}),i("center",{class:t.display?"is-hidden":""},[i("i",{staticClass:"fa fa-spinner fa-pulse fa-2x fa-fw"}),i("span",{staticClass:"sr-only"},[t._v("Loading...")])])],1),i("hr")])},e=[],s=i("45d8"),r={data:function(){return{imgurl:"",display:!1}},computed:{url:function(){return this.$route.params.path?Object(s["d"])(this.$route.params.path):""},ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)}},activated:function(){this.render()},methods:{render:function(){var t=this.url;this.imgurl=t},loading:function(t){1==t.target.complete&&(this.display=!0)}}},l=r,c=i("2877"),o=Object(c["a"])(l,a,e,!1,null,null,null);n["default"]=o.exports}}]);
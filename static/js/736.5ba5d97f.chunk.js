"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,r){r.r(t),r.d(t,{default:function(){return g}});var e,a,c=r(861),u=r(439),i=r(687),o=r.n(i),s=r(791),p=r(689),f=r(323),l=r(585),d=r(168),h=r(686),v=h.Z.ul(e||(e=(0,d.Z)(["\n  margin-top: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n"]))),x=h.Z.li(a||(a=(0,d.Z)(["\n  min-width: 182px;\n  font-size: 14px;\n  padding: 6px;\n  max-width: min-content;\n  background-color: #2a2a2a;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  img {\n    max-width: 182px;\n    border-radius: 8px;\n  }\n  span {\n    color: #ffc700;\n  }\n"]))),m=r(184),g=function(){var n=(0,p.UO)().movieId,t=(0,s.useState)([]),r=(0,u.Z)(t,2),e=r[0],a=r[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,c.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Eb)(n);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(v,{children:e.map((function(n){var t=n.id,r=n.profile_path,e=n.original_name,a=n.character;return(0,m.jsxs)(x,{children:[(0,m.jsx)("img",{src:"".concat(r?l.f+r:l.l+"?text="+e),alt:e}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:" Actor:"})," ",e]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"Character:"})," ",a]})]},t)}))})})}},323:function(n,t,r){r.d(t,{Df:function(){return o},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return s}});var e=r(861),a=r(687),c=r.n(a),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="b36bd8b54d5e83153930bb0f785e5b93",o=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},585:function(n,t,r){r.d(t,{f:function(){return e},l:function(){return a}});var e="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=736.5ba5d97f.chunk.js.map
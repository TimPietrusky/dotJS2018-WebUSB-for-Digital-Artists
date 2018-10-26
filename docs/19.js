(window.webpackJsonp=window.webpackJsonp||[]).push([[19,25],{423:function(n,e,t){"use strict";t.r(e),e.default={}},445:function(n,e,t){"use strict";t.r(e);t(423);var r=t(0),i=t.n(r),a=t(40),u=t.n(a),o=t(446),l=t.n(o),c=t(63),s=(t(448),t(65)),f=t.n(s),d=t(449),p=t(16),h=t(447),v=d.Main.Slide,m=d.Main.A,w=i.a.createElement(f.a,null,i.a.createElement("h3",null,"WebUSB"),i.a.createElement("p",null,"When you want to learn how USB can be used in the browser your first starting point will be the specification"),i.a.createElement("p",null,"It's very well written and explains WebUSB in an easy to follow way"));e.default=i.a.createElement(v,{key:u()()},i.a.createElement(p.Plugins.Data,{luminave:[""]}),w,i.a.createElement(m,null,i.a.createElement(c.Title,null,i.a.createElement(h.c,{time:30,text:"WebUSB"})),i.a.createElement(l.a,{order:1},i.a.createElement(c.Subtitle,null,i.a.createElement("a",{href:"https://wicg.github.io/webusb"},"wicg.github.io/webusb")))))},447:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(63),u=t(8),o=t.n(u),l=t(9),c=t.n(l),s=t(10),f=t.n(s),d=t(6),p=t.n(d),h=t(11),v=t.n(h),m=t(1),w=t.n(m),b=t(66),g=t.n(b),y=(g.a,t(5)),k=t.n(y),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function P(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return P=function(){return n},n}E.default.div(P());function S(){var n=k()(["\n  font-style: italic\n"]);return S=function(){return n},n}E.default.span(S());function q(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return q=function(){return n},n}E.default.span(q());function U(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return U=function(){return n},n}function D(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return D=function(){return n},n}var F=Object(E.keyframes)(D()),z=E.default.span(U(),F,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),B=function(n){var e=n.text.split(""),t=e.length;return i.a.createElement(i.a.Fragment,null,e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(z,{key:r,time:n.time,delay:a},e)}))};B.defaultProps={time:.85};var C=B;function V(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return V=function(){return n},n}E.default.span(V());var W=t(450),I=t.n(W),M=(t(446),t(451));function j(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return j=function(){return n},n}var A=t(13).search.parse(window.location.href),J=A.present,O=(A.live,function(n){function e(n){return o()(this,e),c()(this,f()(e).call(this,n))}return v()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),T=E.default.div(j()),Q=function(n){function e(n){return o()(this,e),c()(this,f()(e).call(this,n))}return v()(e,n),p()(e,[{key:"render",value:function(){var n=this;return J?this.props.children(I()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(M.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,null,e.iframe),n.props.children(I()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function R(){var n=k()(["\n  width: 5vw;\n"]);return R=function(){return n},n}function X(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return X=function(){return n},n}function Y(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Y=function(){return n},n}E.default.div(Y()),E.default.div(X()),E.default.div(R());var G=t(452),H=t.n(G),K=(t(453),t(454),function(n){return i.a.createElement("div",{style:{width:"80vw"}},i.a.createElement(H.a,n))});function L(){var n=k()(["\n    font-size: 4.5rem;\n    --quote-border-color: #ddd;\n"]);return L=function(){return n},n}var N=E.default.div(L()),Z=function(n){return i.a.createElement(N,null,i.a.createElement(a.Quote,n))};function $(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return $=function(){return n},n}var _=E.default.span($()),nn=t(64);t.d(e,"c",function(){return C}),t.d(e,"g",function(){return Q}),t.d(e,"f",function(){return O}),t.d(e,"a",function(){return K}),t.d(e,"b",function(){return Z}),t.d(e,"e",function(){return _}),t.d(e,"d",function(){return nn.a})}}]);
//# sourceMappingURL=19.js.map
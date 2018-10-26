(window.webpackJsonp=window.webpackJsonp||[]).push([[13,25],{423:function(n,e,t){"use strict";t.r(e),e.default={}},424:function(n,e,t){"use strict";t.r(e);t(423);var r=t(0),i=t.n(r),a=t(40),u=t.n(a),o=(t(446),t(63)),l=(t(448),t(65)),c=t.n(l),s=t(449),f=t(16),d=t(447),p=s.Main.Slide,v=s.Main.A,m=i.a.createElement(c.a,null,i.a.createElement("h3",null,"WebUSB for Digital Artists"),i.a.createElement("p",null));e.default=i.a.createElement(p,{key:u()(),background:"#fff",mixin:"--slide-color: #000;"},i.a.createElement(f.Plugins.Data,{luminave:[""]}),m,i.a.createElement(v,null,i.a.createElement(o.Title,null,"WebUSB for"),i.a.createElement(o.Title,null,i.a.createElement(d.c,{time:30,text:"Digital Artists"})),i.a.createElement(o.Subtitle,null," "),i.a.createElement(o.Subtitle,null,i.a.createElement("img",{src:"media/dotjs-logo.png",alt:"dotJS Logo",style:{height:"15vh"}}))))},447:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(63),u=t(8),o=t.n(u),l=t(9),c=t.n(l),s=t(10),f=t.n(s),d=t(6),p=t.n(d),v=t(11),m=t.n(v),h=t(1),g=t.n(h),b=t(66),w=t.n(b),y=(w.a,t(5)),k=t.n(y),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function D(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return D=function(){return n},n}E.default.div(D());function P(){var n=k()(["\n  font-style: italic\n"]);return P=function(){return n},n}E.default.span(P());function S(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return S=function(){return n},n}E.default.span(S());function q(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return q=function(){return n},n}function F(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return F=function(){return n},n}var z=Object(E.keyframes)(F()),A=E.default.span(q(),z,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),C=function(n){var e=n.text.split(""),t=e.length;return i.a.createElement(i.a.Fragment,null,e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(A,{key:r,time:n.time,delay:a},e)}))};C.defaultProps={time:.85};var U=C;function V(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return V=function(){return n},n}E.default.span(V());var j=t(450),J=t.n(j),M=(t(446),t(451));function T(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return T=function(){return n},n}var B=t(13).search.parse(window.location.href),I=B.present,O=(B.live,function(n){function e(n){return o()(this,e),c()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),W=E.default.div(T()),L=function(n){function e(n){return o()(this,e),c()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"render",value:function(){var n=this;return I?this.props.children(J()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(M.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(W,null,e.iframe),n.props.children(J()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function Q(){var n=k()(["\n  width: 5vw;\n"]);return Q=function(){return n},n}function R(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return R=function(){return n},n}function X(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return X=function(){return n},n}E.default.div(X()),E.default.div(R()),E.default.div(Q());var Y=t(452),G=t.n(Y),H=(t(453),t(454),function(n){return i.a.createElement("div",{style:{width:"80vw"}},i.a.createElement(G.a,n))});function K(){var n=k()(["\n    font-size: 4.5rem;\n    --quote-border-color: #ddd;\n"]);return K=function(){return n},n}var N=E.default.div(K()),Z=function(n){return i.a.createElement(N,null,i.a.createElement(a.Quote,n))};function $(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return $=function(){return n},n}var _=E.default.span($()),nn=t(64);t.d(e,"c",function(){return U}),t.d(e,"g",function(){return L}),t.d(e,"f",function(){return O}),t.d(e,"a",function(){return H}),t.d(e,"b",function(){return Z}),t.d(e,"e",function(){return _}),t.d(e,"d",function(){return nn.a})}}]);
//# sourceMappingURL=13.js.map
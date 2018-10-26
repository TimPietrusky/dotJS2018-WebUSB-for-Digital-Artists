(window.webpackJsonp=window.webpackJsonp||[]).push([[14,25],{423:function(n,e,t){"use strict";t.r(e),e.default={}},432:function(n,e,t){"use strict";t.r(e);t(423);var r=t(0),i=t.n(r),a=t(40),o=t.n(a),u=(t(446),t(63),t(448),t(65)),c=t.n(u),l=t(449),d=t(16),s=(t(447),l.Main.Slide),f=l.Main.A,p=i.a.createElement(c.a,null,i.a.createElement("h3",null,"WebUSB Arduino added"),i.a.createElement("p",null,"When you attach the Arduino via USB to the computer"),i.a.createElement("p",null,"Message in the browser that the device was added with the URL we specified in the Arduino Sketch"),i.a.createElement("p",null,"Not working in Windows as of now"));e.default=i.a.createElement(s,{key:o()(),background:"#f8f8ff"},i.a.createElement(d.Plugins.Data,{luminave:[""]}),p,i.a.createElement(f,null,i.a.createElement("img",{src:"media/webusb_dmxcontroller_added.png",alt:"Added WebUSB DMX512 Controller to computer",style:{width:"90vw"}})))},447:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(63),o=t(8),u=t.n(o),c=t(9),l=t.n(c),d=t(10),s=t.n(d),f=t(6),p=t.n(f),h=t(11),v=t.n(h),m=t(1),w=t.n(m),g=t(66),b=t.n(g),y=(b.a,t(5)),k=t.n(y),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function P(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return P=function(){return n},n}E.default.div(P());function q(){var n=k()(["\n  font-style: italic\n"]);return q=function(){return n},n}E.default.span(q());function A(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return A=function(){return n},n}E.default.span(A());function D(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return D=function(){return n},n}function S(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return S=function(){return n},n}var U=Object(E.keyframes)(S()),C=E.default.span(D(),U,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),F=function(n){var e=n.text.split(""),t=e.length;return i.a.createElement(i.a.Fragment,null,e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(C,{key:r,time:n.time,delay:a},e)}))};F.defaultProps={time:.85};var M=F;function z(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return z=function(){return n},n}E.default.span(z());var V=t(450),W=t.n(V),B=(t(446),t(451));function j(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return j=function(){return n},n}var I=t(13).search.parse(window.location.href),J=I.present,O=(I.live,function(n){function e(n){return u()(this,e),l()(this,s()(e).call(this,n))}return v()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),R=E.default.div(j()),X=function(n){function e(n){return u()(this,e),l()(this,s()(e).call(this,n))}return v()(e,n),p()(e,[{key:"render",value:function(){var n=this;return J?this.props.children(W()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(B.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,null,e.iframe),n.props.children(W()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function _(){var n=k()(["\n  width: 5vw;\n"]);return _=function(){return n},n}function L(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return L=function(){return n},n}function N(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return N=function(){return n},n}E.default.div(N()),E.default.div(L()),E.default.div(_());var Q=t(452),T=t.n(Q),Y=(t(453),t(454),function(n){return i.a.createElement("div",{style:{width:"80vw"}},i.a.createElement(T.a,n))});function G(){var n=k()(["\n    font-size: 4.5rem;\n    --quote-border-color: #ddd;\n"]);return G=function(){return n},n}var H=E.default.div(G()),K=function(n){return i.a.createElement(H,null,i.a.createElement(a.Quote,n))};function Z(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return Z=function(){return n},n}var $=E.default.span(Z()),nn=t(64);t.d(e,"c",function(){return M}),t.d(e,"g",function(){return X}),t.d(e,"f",function(){return O}),t.d(e,"a",function(){return Y}),t.d(e,"b",function(){return K}),t.d(e,"e",function(){return $}),t.d(e,"d",function(){return nn.a})}}]);
//# sourceMappingURL=14.js.map
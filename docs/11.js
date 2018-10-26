(window.webpackJsonp=window.webpackJsonp||[]).push([[11,25],{423:function(n,e,t){"use strict";t.r(e),e.default={}},439:function(n,e,t){"use strict";t.r(e);t(423);var r=t(0),i=t.n(r),a=t(40),o=t.n(a),u=t(446),l=t.n(u),c=t(63),d=(t(448),t(65)),s=t.n(d),f=t(449),p=t(16),h=(t(447),t(455)),m=f.Main.Slide,v=f.Main.A,b=i.a.createElement(s.a,null,i.a.createElement("h3",null,"WebUSB DMX512 controller"),i.a.createElement("p",null,"An Arduino can be extended by using shields"),i.a.createElement("p",null,"I created a WebUSB DMX512 controller by using a DMX512 shield, which you can see in the top"),i.a.createElement("p",null,"Which is connected to the Arduino, which you can see in the bottom"),i.a.createElement("p",null,"I have written an detailed guide on what you have to do in order to create your own WebUSB DMX512 controller"),i.a.createElement("p",null,"And also published a module on npm that is doing all the WebUSB code needed to control DMX"),i.a.createElement("p",null,"With that in place we can now control the lights directly from the browser"));e.default=i.a.createElement(m,{key:o()(),background:'url("media/webusb_dmx512_controller.jpg")'},i.a.createElement(p.Plugins.Data,{luminave:[""]}),b,i.a.createElement(v,null,i.a.createElement(c.Subtitle,null,i.a.createElement(l.a,{order:0},i.a.createElement(h.a,{href:"https://medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino-e0dd8efb7bf0"},"medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino"))),i.a.createElement("br",null),i.a.createElement("br",null)))},447:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(63),o=t(8),u=t.n(o),l=t(9),c=t.n(l),d=t(10),s=t.n(d),f=t(6),p=t.n(f),h=t(11),m=t.n(h),v=t(1),b=t.n(v),w=t(66),y=t.n(w),g=(y.a,t(5)),k=t.n(g),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function D(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return D=function(){return n},n}E.default.div(D());function M(){var n=k()(["\n  font-style: italic\n"]);return M=function(){return n},n}E.default.span(M());function P(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return P=function(){return n},n}E.default.span(P());function S(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return S=function(){return n},n}function q(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return q=function(){return n},n}var A=Object(E.keyframes)(q()),U=E.default.span(S(),A,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),W=function(n){var e=n.text.split(""),t=e.length;return i.a.createElement(i.a.Fragment,null,e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(U,{key:r,time:n.time,delay:a},e)}))};W.defaultProps={time:.85};var X=W;function F(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return F=function(){return n},n}E.default.span(F());var z=t(450),B=t.n(z),C=(t(446),t(451));function I(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return I=function(){return n},n}var V=t(13).search.parse(window.location.href),j=V.present,J=(V.live,function(n){function e(n){return u()(this,e),c()(this,s()(e).call(this,n))}return m()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),O=E.default.div(I()),_=function(n){function e(n){return u()(this,e),c()(this,s()(e).call(this,n))}return m()(e,n),p()(e,[{key:"render",value:function(){var n=this;return j?this.props.children(B()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(C.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(O,null,e.iframe),n.props.children(B()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function Q(){var n=k()(["\n  width: 5vw;\n"]);return Q=function(){return n},n}function R(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return R=function(){return n},n}function T(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return T=function(){return n},n}E.default.div(T()),E.default.div(R()),E.default.div(Q());var Y=t(452),G=t.n(Y),H=(t(453),t(454),function(n){return i.a.createElement("div",{style:{width:"80vw"}},i.a.createElement(G.a,n))});function K(){var n=k()(["\n    font-size: 4.5rem;\n    --quote-border-color: #ddd;\n"]);return K=function(){return n},n}var L=E.default.div(K()),N=function(n){return i.a.createElement(L,null,i.a.createElement(a.Quote,n))};function Z(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return Z=function(){return n},n}var $=E.default.span(Z()),nn=t(64);t.d(e,"c",function(){return X}),t.d(e,"g",function(){return _}),t.d(e,"f",function(){return J}),t.d(e,"a",function(){return H}),t.d(e,"b",function(){return N}),t.d(e,"e",function(){return $}),t.d(e,"d",function(){return nn.a})},455:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(5),i=t.n(r);t(0);function a(){var n=i()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1rem var(--theme-primary);\n  line-height: 1.25em;\n  display: inline-block;\n  max-width: 80vw;\n  text-decoration: none;\n\n  :hover {\n      filter: invert(100%);\n  }\n"]);return a=function(){return n},n}var o=t(2).default.a(a())}}]);
//# sourceMappingURL=11.js.map
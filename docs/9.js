(window.webpackJsonp=window.webpackJsonp||[]).push([[9,25],{423:function(n,e,t){"use strict";t.r(e),e.default={}},434:function(n,e,t){"use strict";t.r(e);t(423);var r=t(0),a=t.n(r),i=t(40),o=t.n(i),u=t(446),c=t.n(u),l=t(63),s=(t(448),t(65)),d=t.n(s),f=(t(449),t(16)),m=t(447),p=t(456),h=t(455),v=t(462),b=v.b.Slide,g=v.b.A,E=v.b.B,w=a.a.createElement(d.a,null,a.a.createElement("h3",null,"Custom Device"),a.a.createElement("p",null,"Let's create our own device by using an Arduino"),a.a.createElement("p",null,"Arduino is a microcrontroller that comes in different shapes and sizes"),a.a.createElement("p",null,'The one you see right now is called "Leonardo", which gives full control over it\'s USB hardware to the code running on it'),a.a.createElement("p",null,"We can do this because Reilly Grant, one of the authors of the WebUSB spec, has created this repo"),a.a.createElement("p",null,"In there we find code that we have to put onto the Arduino in order to be accessable via WebUSB"),a.a.createElement("p",null,"And code for the browser to talk via WebUSB with the Arduino"));e.default=a.a.createElement(b,{key:o()()},a.a.createElement(f.Plugins.Data,{luminave:[""]}),w,a.a.createElement(g,null,a.a.createElement(l.Title,null,a.a.createElement(m.c,{time:30,text:"Arduino"})),a.a.createElement(c.a,{order:1},a.a.createElement(l.Subtitle,null,a.a.createElement(h.a,{href:"https://github.com/webusb/arduino"},"github.com/webusb/arduino"))),a.a.createElement("br",null),a.a.createElement("br",null)),a.a.createElement(E,null,a.a.createElement(p.b,{src:"media/arduino_leonardo_.png",alt:"Arduino Leonardo"})))},447:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(63),o=t(8),u=t.n(o),c=t(9),l=t.n(c),s=t(10),d=t.n(s),f=t(6),m=t.n(f),p=t(11),h=t.n(p),v=t(1),b=t.n(v),g=t(66),E=t.n(g),w=(E.a,t(5)),y=t.n(w),k=t(2);function x(){var n=y()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}k.default.div(x());function S(){var n=y()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}k.default.div(S());function A(){var n=y()(["\n  font-style: italic\n"]);return A=function(){return n},n}k.default.span(A());function B(){var n=y()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return B=function(){return n},n}k.default.span(B());function j(){var n=y()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return j=function(){return n},n}function O(){var n=y()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return O=function(){return n},n}var C=Object(k.keyframes)(O()),M=k.default.span(j(),C,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),D=function(n){var e=n.text.split(""),t=e.length;return a.a.createElement(a.a.Fragment,null,e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(M,{key:r,time:n.time,delay:i},e)}))};D.defaultProps={time:.85};var z=D;function P(){var n=y()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return P=function(){return n},n}k.default.span(P());var q=t(450),U=t.n(q),F=(t(446),t(451));function V(){var n=y()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return V=function(){return n},n}var W=t(13).search.parse(window.location.href),I=W.present,L=(W.live,function(n){function e(n){return u()(this,e),l()(this,d()(e).call(this,n))}return h()(e,n),m()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),R=k.default.div(V()),T=function(n){function e(n){return u()(this,e),l()(this,d()(e).call(this,n))}return h()(e,n),m()(e,[{key:"render",value:function(){var n=this;return I?this.props.children(U()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(F.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,e.iframe),n.props.children(U()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function J(){var n=y()(["\n  width: 5vw;\n"]);return J=function(){return n},n}function _(){var n=y()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return _=function(){return n},n}function G(){var n=y()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return G=function(){return n},n}k.default.div(G()),k.default.div(_()),k.default.div(J());var Q=t(452),X=t.n(Q),Y=(t(453),t(454),function(n){return a.a.createElement("div",{style:{width:"80vw"}},a.a.createElement(X.a,n))});function H(){var n=y()(["\n    font-size: 4.5rem;\n    --quote-border-color: #ddd;\n"]);return H=function(){return n},n}var K=k.default.div(H()),N=function(n){return a.a.createElement(K,null,a.a.createElement(i.Quote,n))};function Z(){var n=y()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return Z=function(){return n},n}var $=k.default.span(Z()),nn=t(64);t.d(e,"c",function(){return z}),t.d(e,"g",function(){return T}),t.d(e,"f",function(){return L}),t.d(e,"a",function(){return Y}),t.d(e,"b",function(){return N}),t.d(e,"e",function(){return $}),t.d(e,"d",function(){return nn.a})},455:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(5),a=t.n(r);t(0);function i(){var n=a()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1rem var(--theme-primary);\n  line-height: 1.25em;\n  display: inline-block;\n  max-width: 80vw;\n  text-decoration: none;\n\n  :hover {\n      filter: invert(100%);\n  }\n"]);return i=function(){return n},n}var o=t(2).default.a(i())},456:function(n,e,t){"use strict";t.d(e,"c",function(){return g}),t.d(e,"a",function(){return w}),t.d(e,"b",function(){return y});var r=t(5),a=t.n(r),i=(t(0),t(2)),o=t(448),u=t.n(o);function c(){var n=a()(["\n  height: 40vh;\n"]);return c=function(){return n},n}function l(){var n=a()(["\n  height: 90vh;\n"]);return l=function(){return n},n}function s(){var n=a()(["\n  ",";\n  ",";  \n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  --background-size: 200% auto;\n"]);return f=function(){return n},n}function m(){var n=a()(["\n  --background-position: top center;\n"]);return m=function(){return n},n}function p(){var n=a()(["\n  --background-position: top right;\n"]);return p=function(){return n},n}function h(){var n=a()(["\n  --width: 300px;\n  --height: 300px;\n"]);return h=function(){return n},n}var v=Object(i.css)(h()),b=Object(i.css)(p()),g=Object(i.css)(m()),E=Object(i.css)(f()),w=(Object(i.default)(u.a)(d(),v),Object(i.default)(u.a)(s(),E,b),i.default.img(l())),y=i.default.img(c())},462:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"b",function(){return h});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),u=t(463),c=t.n(u),l=t(464);function s(){var n=a()(["\n  ",";\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return f=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}var p=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(m(),c.a.AB.leftRight,u.vertical.center),h=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(f(),c.a.AB.topBottom,u.vertical.end,u.vertical.start);Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"})))(d(),c.a.ABC.right,u.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"}),o.a.createElement(l.Slot,{name:"D"})))(s(),c.a.ABCD)}}]);
//# sourceMappingURL=9.js.map
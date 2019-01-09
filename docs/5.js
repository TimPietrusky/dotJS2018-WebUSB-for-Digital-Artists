(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14],{421:function(n,e,t){"use strict";t.r(e),e.default={}},427:function(n,e,t){"use strict";t.r(e);var r=t(5),a=t.n(r),i=(t(421),t(0)),o=t.n(i),c=t(64),u=t.n(c),l=t(433),d=t.n(l),s=t(61),f=(t(435),t(63)),m=t.n(f),v=(t(437),t(16)),p=t(434),h=t(66),b=t(436),E=t(2),g=t(445),y=t(446);function x(){var n=a()(["invert(0%)"]);return x=function(){return n},n}var w=b.a.Slide,S=b.a.A,A=b.a.B,k=[[Object(y.a)([1,0],[3,0])],[Object(y.a)([2,30],[2,78])]],O=o.a.createElement(m.a,null,o.a.createElement("h3",null,"Enable WebUSB"),o.a.createElement("p",null,"The User has to trigger requestDevice by an explicit user gesture"),o.a.createElement("p",null,"And we set a filter to only interact with the Arduino"),o.a.createElement("p",null,"When this gets executed a pop-up opens"));e.default=o.a.createElement(w,{key:u()(),animationOut:h.fade.in},o.a.createElement(v.Plugins.Data,{luminave:[""]}),O,o.a.createElement(S,null,o.a.createElement(s.Subtitle,null,o.a.createElement(p.b,{style:{filter:Object(E.css)(x())},time:30,text:"JavaScript"})),o.a.createElement(g.a,null,o.a.createElement(d.a,{order:1},o.a.createElement("li",null,"Request access to Arduino")),o.a.createElement(d.a,{order:2},o.a.createElement("li",null,"Set filter for Arduino Leonardo")))),o.a.createElement(A,null,o.a.createElement(p.a,{ranges:k,options:{lineNumbers:!0,mode:"javascript",theme:"dracula"}},"// Request access to the Arduino Leonardo ETH\nnavigator.usb.requestDevice({ filters: [{vendorId: 0x2a03, productId: 0x8040}] })\n\n  // Open session to selected Arduino\n  .then(selectedDevice => {\n    device = selectedDevice\n    return device.open()\n  })\n\n  // Select #1 configuration if not automatially set by OS\n  .then(() => {\n    if (device.configuration === null) {\n      return device.selectConfiguration(1)\n    }\n  })\n\n  // Get exclusive access to Interface #2\n  .then(() => device.claimInterface(2))\n\n  // Tell the Arduino that we are ready to send data on Interface #2\n  .then(() => device.controlTransferOut({\n    'requestType': 'class',\n    'recipient': 'interface',\n    'request': 0x22, // SET_CONTROL_LINE_STATE\n    'value': 0x01, // Yes\n    'index': 0x02 // Interface: #2\n  }))\n\n  // Receive 512 bytes on Endpoint #5\n  .then(() => device.transferIn(5, 512))\n\n  .then(({ data }) => {\n    console.log('Received: ' + new TextDecoder().decode(data))\n  })")))},434:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=(t(61),t(8)),o=t.n(i),c=t(9),u=t.n(c),l=t(10),d=t.n(l),s=t(6),f=t.n(s),m=t(11),v=t.n(m),p=t(1),h=t.n(p),b=t(65),E=t.n(b),g=(E.a,t(5)),y=t.n(g),x=t(2);function w(){var n=y()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return w=function(){return n},n}x.default.div(w());function S(){var n=y()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}x.default.div(S());function A(){var n=y()(["\n  font-style: italic\n"]);return A=function(){return n},n}x.default.span(A());function k(){var n=y()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return k=function(){return n},n}x.default.span(k());function O(){var n=y()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return O=function(){return n},n}function B(){var n=y()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return B=function(){return n},n}function T(){var n=y()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return T=function(){return n},n}var j=Object(x.keyframes)(T()),D=x.default.span(B(),j,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),C=x.default.div(O()),I=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(D,{key:r,time:n.time,delay:i},e)})))};I.defaultProps={time:.85};var M=I;function q(){var n=y()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return q=function(){return n},n}x.default.span(q());var z=t(438),R=t.n(z),F=(t(433),t(439));function L(){var n=y()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return L=function(){return n},n}var W=t(14).search.parse(window.location.href),J=W.present,N=(W.live,r.Component,x.default.div(L()));r.Component;function _(){var n=y()(["\n  width: 5vw;\n"]);return _=function(){return n},n}function P(){var n=y()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return P=function(){return n},n}function U(){var n=y()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return U=function(){return n},n}x.default.div(U()),x.default.div(P()),x.default.div(_());var G=t(440),H=t.n(G),X=(t(441),t(442),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(H.a,n))});function Y(){var n=y()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return Y=function(){return n},n}x.default.div(Y());function K(){var n=y()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return K=function(){return n},n}x.default.span(K()),t(62);t.d(e,"b",function(){return M}),t.d(e,"a",function(){return X})},436:function(n,e,t){"use strict";t.d(e,"a",function(){return v});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),c=t(443),u=t.n(c),l=t(444);function d(){var n=a()(["\n  ",";\n"]);return d=function(){return n},n}function s(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return s=function(){return n},n}function f(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return f=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}var v=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(m(),u.a.AB.leftRight,c.vertical.center);Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(f(),u.a.AB.topBottom,c.vertical.end,c.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"})))(s(),u.a.ABC.right,c.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"}),o.a.createElement(l.Slot,{name:"D"})))(d(),u.a.ABCD)},445:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(5),a=t.n(r);t(0);function i(){var n=a()(["\n  list-style: none;\n  text-align: right;\n  font-size: 2em;\n  padding-right: .25em;\n  margin: .5em 1em 0 0;\n  width: 100%;\n\n  > span {\n    display: block !important;\n  }\n\n  > span[style=\"--time:0;\"] {\n  }\n\n  li {\n      position: relative;\n      text-align: right;\n      display: inline-block;\n      margin: 0 0 .35em auto;\n      padding-bottom: .1em;\n      border-bottom: 1px solid var(--theme-primary-dark);\n\n      &:before {\n          content: '';\n          position: absolute;\n          left: -1em;\n          top: 0;\n      }\n  }\n"]);return i=function(){return n},n}var o=t(2).default.ul(i())},446:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(447),a=t.n(r),i=function(n,e){var t=a()(n,2),r=t[0],i=void 0===r?0:r,o=t[1],c=void 0===o?0:o,u=a()(e,2),l=u[0],d=void 0===l?0:l,s=u[1];return{anchor:{line:i-1,ch:c},head:{line:d-1,ch:void 0===s?0:s}}}},447:function(n,e,t){var r=t(448),a=t(449),i=t(450);n.exports=function(n,e){return r(n)||a(n,e)||i()}},448:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},449:function(n,e){n.exports=function(n,e){var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}},450:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);
//# sourceMappingURL=5.js.map
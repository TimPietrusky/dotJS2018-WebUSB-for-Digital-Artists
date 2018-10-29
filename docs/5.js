(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14],{423:function(n,e,t){"use strict";t.r(e),e.default={}},430:function(n,e,t){"use strict";t.r(e);t(423);var r=t(0),a=t.n(r),i=t(40),o=t.n(i),u=(t(435),t(63)),c=(t(437),t(65)),l=t.n(c),s=(t(439),t(16)),d=t(436),f=t(41),p=t(438),v=t(447),m=p.a.Slide,h=p.a.A,y=p.a.B,b=[[Object(v.a)([1,0],[3,0])],[Object(v.a)([2,30],[2,78])]],g=a.a.createElement(l.a,null,a.a.createElement("h3",null,"Enable WebUSB"),a.a.createElement("p",null,"The User has to trigger requestDevice by an explicit user gesture"),a.a.createElement("p",null,"And we set a filter to only interact with the Arduino"),a.a.createElement("p",null,"When this gets executed a pop-up opens"));e.default=a.a.createElement(m,{key:o()(),animationOut:f.fade.in},a.a.createElement(s.Plugins.Data,{luminave:[""]}),g,a.a.createElement(h,null,a.a.createElement(u.Subtitle,null,"Request Access to Arduino")),a.a.createElement(y,null,a.a.createElement(d.a,{ranges:b,options:{lineNumbers:!0,mode:"javascript",theme:"neo"}},"// Request access to the Arduino Leonardo ETH\nnavigator.usb.requestDevice({ filters: [{vendorId: 0x2a03, productId: 0x8040}] })\n\n  // Open session to selected Arduino\n  .then(selectedDevice => {\n    device = selectedDevice\n    return device.open()\n  })\n\n  // Select #1 configuration if not automatially set by OS\n  .then(() => {\n    if (device.configuration === null) {\n      return device.selectConfiguration(1)\n    }\n  })\n\n  // Get exclusive access to Interface #2\n  .then(() => device.claimInterface(2))\n\n  // Tell the Arduino that we are ready to send data on Interface #2\n  .then(() => device.controlTransferOut({\n    'requestType': 'class',\n    'recipient': 'interface',\n    'request': 0x22, // SET_CONTROL_LINE_STATE\n    'value': 0x01, // Yes\n    'index': 0x02 // Interface: #2\n  }))\n\n  // Receive 512 bytes on Endpoint #5\n  .then(() => device.transferIn(5, 512))\n\n  .then(({ data }) => {\n    console.log('Received: ' + new TextDecoder().decode(data))\n  })")))},436:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=(t(63),t(8)),o=t.n(i),u=t(9),c=t.n(u),l=t(10),s=t.n(l),d=t(6),f=t.n(d),p=t(11),v=t.n(p),m=t(1),h=t.n(m),y=t(66),b=t.n(y),g=(b.a,t(5)),E=t.n(g),w=t(2);function x(){var n=E()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}w.default.div(x());function k(){var n=E()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return k=function(){return n},n}w.default.div(k());function S(){var n=E()(["\n  font-style: italic\n"]);return S=function(){return n},n}w.default.span(S());function A(){var n=E()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return A=function(){return n},n}w.default.span(A());function O(){var n=E()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return O=function(){return n},n}function B(){var n=E()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return B=function(){return n},n}function q(){var n=E()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return q=function(){return n},n}var D=Object(w.keyframes)(q()),T=w.default.span(B(),D,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),I=w.default.div(O()),C=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(T,{key:r,time:n.time,delay:i},e)})))};C.defaultProps={time:.85};var j=C;function M(){var n=E()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return M=function(){return n},n}w.default.span(M());var P=t(440),R=t.n(P),z=(t(435),t(441));function F(){var n=E()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return F=function(){return n},n}var U=t(13).search.parse(window.location.href),V=U.present,L=(U.live,function(n){function e(n){return o()(this,e),c()(this,s()(e).call(this,n))}return v()(e,n),f()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),N=w.default.div(F()),W=function(n){function e(n){return o()(this,e),c()(this,s()(e).call(this,n))}return v()(e,n),f()(e,[{key:"render",value:function(){var n=this;return V?this.props.children(R()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(z.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,e.iframe),n.props.children(R()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function _(){var n=E()(["\n  width: 5vw;\n"]);return _=function(){return n},n}function J(){var n=E()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return J=function(){return n},n}function Y(){var n=E()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Y=function(){return n},n}w.default.div(Y()),w.default.div(J()),w.default.div(_());var G=t(442),H=t.n(G),X=(t(443),t(444),function(n){return a.a.createElement("div",{style:{maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(H.a,n))});function K(){var n=E()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return K=function(){return n},n}w.default.div(K());function Q(){var n=E()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return Q=function(){return n},n}w.default.span(Q()),t(64);t.d(e,"b",function(){return j}),t.d(e,"d",function(){return W}),t.d(e,"c",function(){return L}),t.d(e,"a",function(){return X})},438:function(n,e,t){"use strict";t.d(e,"a",function(){return v});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),u=t(445),c=t.n(u),l=t(446);function s(){var n=a()(["\n  ",";\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return f=function(){return n},n}function p(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return p=function(){return n},n}var v=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(p(),c.a.AB.leftRight,u.vertical.center);Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(f(),c.a.AB.topBottom,u.vertical.end,u.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"})))(d(),c.a.ABC.right,u.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"}),o.a.createElement(l.Slot,{name:"D"})))(s(),c.a.ABCD)},447:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(448),a=t.n(r),i=function(n,e){var t=a()(n,2),r=t[0],i=void 0===r?0:r,o=t[1],u=void 0===o?0:o,c=a()(e,2),l=c[0],s=void 0===l?0:l,d=c[1];return{anchor:{line:i-1,ch:u},head:{line:s-1,ch:void 0===d?0:d}}}},448:function(n,e,t){var r=t(449),a=t(450),i=t(451);n.exports=function(n,e){return r(n)||a(n,e)||i()}},449:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},450:function(n,e){n.exports=function(n,e){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=n[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}},451:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);
//# sourceMappingURL=5.js.map
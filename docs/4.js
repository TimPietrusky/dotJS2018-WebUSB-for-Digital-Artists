(window.webpackJsonp=window.webpackJsonp||[]).push([[4,14],{423:function(e,n,t){"use strict";t.r(n),n.default={}},429:function(e,n,t){"use strict";t.r(n);t(423);var r=t(0),a=t.n(r),i=t(40),o=t.n(i),c=(t(435),t(63)),u=(t(437),t(65)),l=t.n(u),s=(t(439),t(16)),d=t(436),f=t(41),v=t(438),p=t(447),m=v.a.Slide,h=v.a.A,y=v.a.B,b=[[Object(p.a)([4,0],[9,0])],[Object(p.a)([10,0],[16,0])],[Object(p.a)([17,0],[19,0])],[Object(p.a)([20,0],[28,0])],[Object(p.a)([29,0],[31,0])],[Object(p.a)([32,0],[35,0])]],E=a.a.createElement(l.a,null,a.a.createElement("h3",null,"Enable WebUSB"),a.a.createElement("p",null,"Connect to the selectedPort and open a session to the device"),a.a.createElement("p",null,"Use configuration #1 if no configuration was automatially applied by the Operating System"),a.a.createElement("p",null,"Get exclusive access to interface #2"),a.a.createElement("p",null,"We are ready to receive data on Interface #2 using a controlTransferOut -> Send control commands to the USB device"),a.a.createElement("p",null,"Receive 512 bytes on Endpoint 5"),a.a.createElement("p",null,"Convert the received bytes data into a String by using a TextDecoder (decodes encodings)"),a.a.createElement("p",null,"Catch all the errors"));n.default=a.a.createElement(m,{key:o()(),animationIn:f.fade.in},a.a.createElement(s.Plugins.Data,{luminave:[""]}),E,a.a.createElement(h,null,a.a.createElement(c.Subtitle,null,"Connect to Arduino")),a.a.createElement(y,null,a.a.createElement(d.a,{ranges:b,options:{lineNumbers:!0,mode:"javascript",theme:"neo"},order:-1},"// Request access to the Arduino Leonardo ETH\nnavigator.usb.requestDevice({ filters: [{vendorId: 0x2a03, productId: 0x8040}] })\n\n  // Open session to selected Arduino\n  .then(selectedDevice => {\n    device = selectedDevice\n    return device.open()\n  })\n\n  // Select #1 configuration if not automatially set by OS\n  .then(() => {\n    if (device.configuration === null) {\n      return device.selectConfiguration(1)\n    }\n  })\n\n  // Get exclusive access to Interface #2\n  .then(() => device.claimInterface(2))\n\n  // Tell the Arduino that we are ready to send data on Interface #2\n  .then(() => device.controlTransferOut({\n    'requestType': 'class',\n    'recipient': 'interface',\n    'request': 0x22, // SET_CONTROL_LINE_STATE\n    'value': 0x01, // Yes\n    'index': 0x02 // Interface: #2\n  }))\n\n  // Receive 512 bytes on Endpoint #5\n  .then(() => device.transferIn(5, 512))\n\n  .then(({ data }) => {\n    console.log('Received: ' + new TextDecoder().decode(data))\n  })")))},436:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=(t(63),t(8)),o=t.n(i),c=t(9),u=t.n(c),l=t(10),s=t.n(l),d=t(6),f=t.n(d),v=t(11),p=t.n(v),m=t(1),h=t.n(m),y=t(66),b=t.n(y),E=(b.a,t(5)),g=t.n(E),w=t(2);function x(){var e=g()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return e},e}w.default.div(x());function S(){var e=g()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return e},e}w.default.div(S());function k(){var e=g()(["\n  font-style: italic\n"]);return k=function(){return e},e}w.default.span(k());function A(){var e=g()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return A=function(){return e},e}w.default.span(A());function O(){var e=g()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return O=function(){return e},e}function B(){var e=g()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return B=function(){return e},e}function C(){var e=g()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return C=function(){return e},e}var j=Object(w.keyframes)(C()),I=w.default.span(B(),j,function(e){var n=e.time;return void 0===n?.85:n},function(e){var n=e.delay;return void 0===n?0:n}),T=w.default.div(O()),D=function(e){var n=e.text.split(""),t=n.length,r=e.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{style:r},n.map(function(n,r){var i=e.time/t*(t-r)*-1;return a.a.createElement(I,{key:r,time:e.time,delay:i},n)})))};D.defaultProps={time:.85};var q=D;function M(){var e=g()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return M=function(){return e},e}w.default.span(M());var P=t(440),R=t.n(P),z=(t(435),t(441));function F(){var e=g()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return F=function(){return e},e}var U=t(13).search.parse(window.location.href),V=U.present,L=(U.live,function(e){function n(e){return o()(this,n),u()(this,s()(n).call(this,e))}return p()(n,e),f()(n,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(e){if(this.props.quiet)return!0;if(e.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(e){return!!this.props.quiet||e.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),n}(r.Component)),N=w.default.div(F()),W=function(e){function n(e){return o()(this,n),u()(this,s()(n).call(this,e))}return p()(n,e),f()(n,[{key:"render",value:function(){var e=this;return V?this.props.children(R()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(z.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,n.iframe),e.props.children(R()({},e.props,n,{children:[],iframe:null})))}})}}]),n}(r.Component);function _(){var e=g()(["\n  width: 5vw;\n"]);return _=function(){return e},e}function G(){var e=g()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return G=function(){return e},e}function J(){var e=g()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return J=function(){return e},e}w.default.div(J()),w.default.div(G()),w.default.div(_());var Y=t(442),H=t.n(Y),X=(t(443),t(444),function(e){return a.a.createElement("div",{style:{maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(H.a,e))});function K(){var e=g()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return K=function(){return e},e}w.default.div(K());function Q(){var e=g()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return Q=function(){return e},e}w.default.span(Q()),t(64);t.d(n,"b",function(){return q}),t.d(n,"d",function(){return W}),t.d(n,"c",function(){return L}),t.d(n,"a",function(){return X})},438:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),c=t(445),u=t.n(c),l=t(446);function s(){var e=a()(["\n  ",";\n"]);return s=function(){return e},e}function d(){var e=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return d=function(){return e},e}function f(){var e=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return f=function(){return e},e}function v(){var e=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return v=function(){return e},e}var p=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(v(),u.a.AB.leftRight,c.vertical.center);Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(f(),u.a.AB.topBottom,c.vertical.end,c.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"})))(d(),u.a.ABC.right,c.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"}),o.a.createElement(l.Slot,{name:"D"})))(s(),u.a.ABCD)},447:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(448),a=t.n(r),i=function(e,n){var t=a()(e,2),r=t[0],i=void 0===r?0:r,o=t[1],c=void 0===o?0:o,u=a()(n,2),l=u[0],s=void 0===l?0:l,d=u[1];return{anchor:{line:i-1,ch:c},head:{line:s-1,ch:void 0===d?0:d}}}},448:function(e,n,t){var r=t(449),a=t(450),i=t(451);e.exports=function(e,n){return r(e)||a(e,n)||i()}},449:function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},450:function(e,n){e.exports=function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}},451:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);
//# sourceMappingURL=4.js.map
(this["webpackJsonpnhs-hack-pwa"]=this["webpackJsonpnhs-hack-pwa"]||[]).push([[0],{106:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(99),a(100),a(26)),l=a(16),s=a(25),u=a(14),m=a(31),v=a(32),d=a(34),p=a(164),f=a(155),h=a(159),E=a(78),b=a.n(E),g=a(157),O=a(158),w=a(156),j=a(9),y=a(71),k=a(17),S=a(74),A=a(167),C=a(149),D=a(151),x=a(118),N=a(77),W=a.n(N),T=a(152),I=a(153),M=a(154),L=Object(S.a)({list:{width:250},fullList:{width:"auto"}});function z(){var e=L(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(k.a)(t,2),n=a[0],o=a[1],c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(Object(y.a)({},n,Object(j.a)({},e,t)))}},i=Object(l.f)();function s(){i.push("/device-angles")}function u(){i.push("/")}var m;return r.a.createElement(p.a,{className:"drawer",mt:2},r.a.createElement(T.a,{position:"static"},r.a.createElement(I.a,null,r.a.createElement(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:c("left",!0)},r.a.createElement(W.a,null)),r.a.createElement(f.a,{variant:"h6",className:e.title},"Digital rehab assistant"))),r.a.createElement(A.a,{open:n.left,onClose:c("left",!1)},(m="left",r.a.createElement("div",{className:e.list,role:"presentation",onClick:c(m,!1),onKeyDown:c(m,!1)},r.a.createElement(C.a,null,r.a.createElement(x.a,{button:!0,key:"home-btn",onClick:u},"Home"),r.a.createElement(x.a,{button:!0,key:"device-angles-btn",onClick:s},"Device Angles")),r.a.createElement(D.a,null)))))}var F=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(w.a,null),r.a.createElement(g.a,{container:!0,className:"base-screen"},r.a.createElement(O.a,null,r.a.createElement(z,null),t)))},P=(a(55),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement(p.a,{mt:2},r.a.createElement(f.a,{variant:"h4"},"Home")),r.a.createElement(p.a,{mt:2},r.a.createElement(h.a,{variant:"contained",color:"primary",component:i.b,to:"/create-exercise",label:"create-exercise",value:"create-exercise",startIcon:r.a.createElement(b.a,null)},"Create exercise")),r.a.createElement(p.a,{mt:2},r.a.createElement(h.a,{variant:"contained",color:"primary",component:i.b,to:"/device-angles",label:"device-angles",value:"device-angles"},"Device Angles")))}}]),t}(n.Component)),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={absolute:!0,alpha:0,beta:0,gamma:0,isSupported:"",errMsg:"none"},a.handleOrientation=function(e){var t=e.absolute,n=e.alpha,r=e.beta,o=e.gamma;a.setState({absolute:t,alpha:n,beta:r,gamma:o})},a.listenToDeviceOrientationEvents=function(){console.log("Adding event deviceorientation listener"),window.addEventListener("deviceorientation",a.handleOrientation,!0)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.DeviceOrientationEvent&&"ontouchstart"in window?(console.log("DeviceOrientationEvent supported"),this.setState({isSupported:"Yes"}),"function"===typeof DeviceOrientationEvent.requestPermission?(console.log("Requesting permission to use deviceorientation"),DeviceOrientationEvent.requestPermission().then((function(t){"granted"===t&&e.listenToDeviceOrientationEvents()})).catch((function(t){console.error(t),e.setState({errMsg:"iOS 13+: error requesting permission: ".concat(JSON.stringify(t))})}))):this.listenToDeviceOrientationEvents()):(console.log("DeviceOrientationEvent NOT supported"),this.setState({isSupported:"No"}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("deviceorientation",this.handleOrientation,!0)}},{key:"render",value:function(){return this.props.children(this.state)}}]),t}(n.Component);q.defaultProps={children:function(){return null}};a(106);var B=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"formatAngleData",value:function(e){return Number(e).toFixed(2)}},{key:"render",value:function(){var e=this;return r.a.createElement(F,null,r.a.createElement(p.a,null,r.a.createElement("p",null,"Device Angles")),r.a.createElement(p.a,{mt:1},r.a.createElement(q,null,(function(t){var a=t.absolute,n=t.alpha,o=t.beta,c=t.gamma,i=t.errMsg,l=t.isSupported;return r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"h5",component:"h5"},"Absolute: ".concat(a)),r.a.createElement(f.a,{variant:"h3",component:"h3"},"Alpha: ".concat(e.formatAngleData(n))),r.a.createElement(f.a,{variant:"h3",component:"h3"},"Beta: ".concat(e.formatAngleData(o))),r.a.createElement(f.a,{variant:"h3",component:"h3"},"Gamma: ".concat(e.formatAngleData(c))),r.a.createElement(f.a,{variant:"h5",component:"h5"},"isSupported: ".concat(l)),r.a.createElement(f.a,{variant:"h5",component:"h5"},"Err: ".concat(i)))}))))}}]),t}(n.Component),J=a(168),R=a(163),U=a(160),K=a(165),H=a(169),G=a(49),X=a.n(G),Y=function(e){return X.a.getItem(e)},$=function(e,t){return X.a.setItem(e,t)},Q=Object(S.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,display:"flex"},selectEmpty:{marginTop:e.spacing(2)}}}));function V(){var e=Q(),t=r.a.useState(""),a=Object(k.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(k.a)(c,2),l=i[0],s=i[1],u=r.a.useState(""),m=Object(k.a)(u,2),v=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement(p.a,{mt:2},r.a.createElement(U.a,{className:e.formControl},r.a.createElement(J.a,{id:"demo-simple-select-label"},"Joint"),r.a.createElement(K.a,{labelId:"demo-simple-select-label",id:"demo-simple-select-joint",value:n,onChange:function(e){var t=e.target.value;o(t),$("joint",t)}},r.a.createElement(R.a,{value:"Elbow"},"Elbow"),r.a.createElement(R.a,{value:"Knee"},"Knee"),r.a.createElement(R.a,{value:"Shoulder"},"Shoulder")))),r.a.createElement(p.a,{mt:2},r.a.createElement(U.a,{className:e.formControl},r.a.createElement(J.a,{id:"demo-simple-select-label"},"Direction of motion"),r.a.createElement(K.a,{labelId:"demo-simple-select-label",id:"demo-simple-select-direction",value:l,onChange:function(e){var t=e.target.value;s(t),$("directionOfMotion",t)}},r.a.createElement(R.a,{value:"Extension"},"Extension"),r.a.createElement(R.a,{value:"Flexion"},"Flexion")))),r.a.createElement(p.a,{mt:2,ml:1},r.a.createElement(H.a,{id:"standard-basic",label:"Instructions",value:v,onChange:function(e){var t=e.target.value;d(t),$("instructions",t)}})))}var Z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement(p.a,{mt:2},r.a.createElement(f.a,{variant:"h4"},"Create Exercise")),r.a.createElement(p.a,{mt:2},r.a.createElement(V,null)),r.a.createElement(p.a,{mt:2},r.a.createElement(h.a,{variant:"contained",color:"primary",component:i.b,to:"/measure",label:"measure",value:"measure"},"Measure initial")),r.a.createElement(p.a,{mt:2},r.a.createElement(h.a,{variant:"contained",color:"primary",component:i.b,to:"/device-angles",label:"device-angles",value:"device-angles"},"Device Angles")))}}]),t}(n.Component),_=a(59),ee=a.n(_);function te(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(k.a)(c,2),l=i[0],s=i[1];return function(){var e;ee.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee.a.awrap(Y("zeroAngle"));case 2:return e=t.sent,t.abrupt("return",o(e));case 4:case"end":return t.stop()}}))}(),r.a.createElement(F,null,r.a.createElement(p.a,{mt:2},r.a.createElement(f.a,{variant:"h5"},"Take Measurement")),r.a.createElement(f.a,null,"zero angle: ".concat(a)),r.a.createElement(p.a,{mt:13},r.a.createElement(q,null,(function(e){var t,n=e.beta;return r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"h1",component:"h1",align:"center"},"".concat((t=n,l?Number(t).toFixed(0)-a:Number(t).toFixed(0)),"\xb0")))}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(p.a,{mt:10},r.a.createElement(h.a,{variant:"contained",label:"device-angles",value:"device-angles",onClick:function(){$("zeroAngle"),s(!0)}},"Set zero"))))}var ae=a(60);function ne(e){return Object(ae.b)(e,{stiffness:174,damping:24})}var re={atEnter:{offset:100},atLeave:{offset:ne(-100)},atActive:{offset:ne(0)}};X.a.config({name:"myApp",version:1,size:4980736,storeName:"nhshack"});var oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement((function(){return r.a.createElement(i.a,{basename:null},r.a.createElement(l.a,{render:function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(ae.a,Object.assign({},re,{runOnMount:"/"===t.pathname,mapStyles:function(e){return{transform:"translateX(".concat(e.offset,"%)")}}}),r.a.createElement(l.a,{path:"/",exact:!0,component:P}),r.a.createElement(l.a,{path:"/device-angles",component:B}),r.a.createElement(l.a,{path:"/create-exercise",component:Z}),r.a.createElement(l.a,{path:"/measure",component:te})))}}))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nhs-hack-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nhs-hack-pwa","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()},55:function(e,t,a){},94:function(e,t,a){e.exports=a(117)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.3d6fe9c0.chunk.js.map
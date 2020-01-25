(this["webpackJsonpnhs-hack-pwa"]=this["webpackJsonpnhs-hack-pwa"]||[]).push([[0],{102:function(e,t,a){},110:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(102),a(103),a(25)),l=a(20),s=a(27),u=a.n(s),m=a(28),f=a(19),v=a(32),h=a(33),d=a(35),p=a(167),E=a(158),b=a(162),g=a(81),O=a.n(g),w=a(80),y=a.n(w),j=a(160),x=a(161),k=a(159),S=a(10),C=a(73),A=a(14),D=a(76),N=a(170),L=a(152),T=a(154),W=a(121),I=a(79),R=a.n(I),B=a(155),M=a(156),z=a(157),P=Object(D.a)({list:{width:250},fullList:{width:"auto"}});function U(){var e=P(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(A.a)(t,2),n=a[0],o=a[1],c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(Object(C.a)({},n,Object(S.a)({},e,t)))}},i=Object(l.f)();function s(){i.push("/device-angles")}function u(){i.push("/")}var m;return r.a.createElement(p.a,{className:"drawer",mt:2},r.a.createElement(B.a,{position:"static"},r.a.createElement(M.a,null,r.a.createElement(z.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:c("left",!0)},r.a.createElement(R.a,null)),r.a.createElement(E.a,{variant:"h6",className:e.title},"Rehabify"))),r.a.createElement(N.a,{open:n.left,onClose:c("left",!1)},(m="left",r.a.createElement("div",{className:e.list,role:"presentation",onClick:c(m,!1),onKeyDown:c(m,!1)},r.a.createElement(L.a,null,r.a.createElement(W.a,{button:!0,key:"home-btn",onClick:u},"Home"),r.a.createElement(W.a,{button:!0,key:"device-angles-btn",onClick:s},"Device Angles")),r.a.createElement(T.a,null)))))}var q=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(k.a,null),r.a.createElement(j.a,{container:!0,className:"base-screen"},r.a.createElement(x.a,null,r.a.createElement(U,null),t)))},F=(a(52),a(50)),H=a.n(F),J=function(e){return H.a.getItem(e)},K=function(e,t){return H.a.setItem(e,t)},V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).doesExerciseExist=function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(J("targetUpperLimit"));case 2:e=t.sent,a.setState({isExercise:!!e});case 4:case"end":return t.stop()}}))},a.state={isExercise:!1},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){this.doesExerciseExist()}},{key:"render",value:function(){return r.a.createElement(q,null,r.a.createElement(p.a,{mt:2},r.a.createElement(E.a,{variant:"h4"},"Home")),r.a.createElement(p.a,{mt:2},this.state.isExercise?r.a.createElement(b.a,{variant:"contained",color:"secondary",component:i.b,to:"/perform-exercise",label:"perform-exercise",value:"perform-exercise",startIcon:r.a.createElement(y.a,null)},"Perform exercise"):null),r.a.createElement(p.a,{mt:2},r.a.createElement(b.a,{variant:"contained",color:"primary",component:i.b,to:"/create-exercise",label:"create-exercise",value:"create-exercise",startIcon:r.a.createElement(O.a,null)},"Create exercise")))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={absolute:!0,alpha:0,beta:0,gamma:0,isSupported:"",errMsg:"none"},a.handleOrientation=function(e){var t=e.absolute,n=e.alpha,r=e.beta,o=e.gamma;a.setState({absolute:t,alpha:n,beta:r,gamma:o})},a.listenToDeviceOrientationEvents=function(){console.log("Adding event deviceorientation listener"),window.addEventListener("deviceorientation",a.handleOrientation,!0)},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.DeviceOrientationEvent&&"ontouchstart"in window?(console.log("DeviceOrientationEvent supported"),this.setState({isSupported:"Yes"}),"function"===typeof DeviceOrientationEvent.requestPermission?(console.log("Requesting permission to use deviceorientation"),DeviceOrientationEvent.requestPermission().then((function(t){"granted"===t&&e.listenToDeviceOrientationEvents()})).catch((function(t){console.error(t),e.setState({errMsg:"iOS 13+: error requesting permission: ".concat(JSON.stringify(t))})}))):this.listenToDeviceOrientationEvents()):(console.log("DeviceOrientationEvent NOT supported"),this.setState({isSupported:"No"}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("deviceorientation",this.handleOrientation,!0)}},{key:"render",value:function(){return this.props.children(this.state)}}]),t}(n.Component);$.defaultProps={children:function(){return null}};a(110);var G=function(e){function t(){return Object(m.a)(this,t),Object(v.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(f.a)(t,[{key:"formatAngleData",value:function(e){return Number(e).toFixed(2)}},{key:"render",value:function(){var e=this;return r.a.createElement(q,null,r.a.createElement(p.a,null,r.a.createElement("p",null,"Device Angles")),r.a.createElement(p.a,{mt:1},r.a.createElement($,null,(function(t){var a=t.absolute,n=t.alpha,o=t.beta,c=t.gamma,i=t.errMsg,l=t.isSupported;return r.a.createElement(p.a,null,r.a.createElement(E.a,{variant:"h5",component:"h5"},"Absolute: ".concat(a)),r.a.createElement(E.a,{variant:"h3",component:"h3"},"Alpha: ".concat(e.formatAngleData(n))),r.a.createElement(E.a,{variant:"h3",component:"h3"},"Beta: ".concat(e.formatAngleData(o))),r.a.createElement(E.a,{variant:"h3",component:"h3"},"Gamma: ".concat(e.formatAngleData(c))),r.a.createElement(E.a,{variant:"h5",component:"h5"},"isSupported: ".concat(l)),r.a.createElement(E.a,{variant:"h5",component:"h5"},"Err: ".concat(i)))}))))}}]),t}(n.Component),X=a(172),Y=a(166),Q=a(163),Z=a(168),_=a(175),ee=Object(D.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,display:"flex"},selectEmpty:{marginTop:e.spacing(2)}}}));function te(){var e=ee(),t=r.a.useState(""),a=Object(A.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(A.a)(c,2),l=i[0],s=i[1],u=r.a.useState(""),m=Object(A.a)(u,2),f=m[0],v=m[1];return r.a.createElement("div",null,r.a.createElement(p.a,{mt:2},r.a.createElement(Q.a,{className:e.formControl},r.a.createElement(X.a,{id:"demo-simple-select-label"},"Joint"),r.a.createElement(Z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select-joint",value:n,onChange:function(e){var t=e.target.value;o(t),K("joint",t)}},r.a.createElement(Y.a,{value:"Elbow"},"Elbow"),r.a.createElement(Y.a,{value:"Knee"},"Knee"),r.a.createElement(Y.a,{value:"Shoulder"},"Shoulder")))),r.a.createElement(p.a,{mt:2},r.a.createElement(Q.a,{className:e.formControl},r.a.createElement(X.a,{id:"demo-simple-select-label"},"Direction of motion"),r.a.createElement(Z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select-direction",value:l,onChange:function(e){var t=e.target.value;s(t),K("directionOfMotion",t)}},r.a.createElement(Y.a,{value:"Extension"},"Extension"),r.a.createElement(Y.a,{value:"Flexion"},"Flexion")))),r.a.createElement(p.a,{mt:2,ml:1},r.a.createElement(_.a,{id:"standard-basic",label:"Instructions",multiline:!0,value:f,onChange:function(e){var t=e.target.value;v(t),K("instructions",t)},style:{width:"100%"}})))}var ae=function(e){function t(){return Object(m.a)(this,t),Object(v.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null,r.a.createElement(p.a,{mt:2},r.a.createElement(E.a,{variant:"h4"},"Create Exercise")),r.a.createElement(p.a,{mt:2},r.a.createElement(te,null)),r.a.createElement(j.a,{container:!0,direction:"row",justify:"center"},r.a.createElement(p.a,{mt:20},r.a.createElement(b.a,{variant:"contained",color:"primary",component:i.b,to:"/measure",label:"measure",value:"measure"},"Take measurement"))))}}]),t}(n.Component);function ne(){var e=Object(D.a)((function(e){return{hidden:{display:"none"}}}))(),t=function(e){return Number(e).toFixed(0)},a=function(){return v?t(O)-i:O},o=Object(n.useState)(""),c=Object(A.a)(o,2),i=c[0],s=c[1],m=Object(n.useState)(!1),f=Object(A.a)(m,2),v=f[0],h=f[1],d=Object(n.useState)(""),g=Object(A.a)(d,2),O=g[0],w=g[1],y=Object(l.f)();return function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(J("zeroAngle"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}(),r.a.createElement(q,null,r.a.createElement(p.a,{mt:2},r.a.createElement(E.a,{variant:"h5"},"Take Measurement")),r.a.createElement(p.a,{mt:10},r.a.createElement($,null,(function(e){var n=e.beta,o=t(n);return w(o),r.a.createElement(p.a,null,r.a.createElement(E.a,{variant:"h1",component:"h1",align:"center",className:v?"txt-green":""},"".concat(a(),"\xb0")))}))),r.a.createElement(j.a,{container:!0,direction:"row",justify:"center"},r.a.createElement(p.a,{mt:10},r.a.createElement(b.a,{variant:"contained",label:"set-zero",value:"set-zero",onClick:function(){var e=t(O);s(e),K("zeroAngle",e),h(!0)},className:v?e.hidden:""},"Set zero & start motion"),r.a.createElement(p.a,{mt:2},r.a.createElement(b.a,{variant:"contained",color:"primary",label:"finalise-measurement",value:"finalise-measurement",onClick:function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(K("initialRange",t(O)-i));case 2:y.push("/set-target");case 3:case"end":return e.stop()}}))},style:{justifyContent:"center"},className:v?"":e.hidden},"Ok & configure target")))))}var re=a(5),oe=a(171),ce=Object(re.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(oe.a);function ie(){var e=Object(n.useState)(""),t=Object(A.a)(e,2),a=t[0],o=t[1],c=r.a.useState([-10,10]),i=Object(A.a)(c,2),s=i[0],m=i[1];!function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(J("initialRange"));case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}))}();var f=Object(l.f)();return r.a.createElement(q,null,r.a.createElement(p.a,{mt:2},r.a.createElement(E.a,{variant:"h4"},"Configure target range")),r.a.createElement(p.a,{mt:2},r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Initial Range"),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},a,"\xb0")),r.a.createElement(p.a,{mt:2},r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Set target range limits"),r.a.createElement(j.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(ce,{defaultValue:0,getAriaValueText:function(e){return"".concat(e,"\xb0")},step:1,min:-180,max:180,valueLabelDisplay:"auto",onChange:function(e,t){m(t)},value:s,"aria-labelledby":"range-slider"}))),r.a.createElement(j.a,{mt:2,container:!0,direction:"row",justify:"center"},r.a.createElement(p.a,null,r.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Target range set between ",r.a.createElement("strong",null,s[0],"\xb0")," and ",r.a.createElement("strong",null,s[1]),"\xb0")),r.a.createElement(p.a,{mt:15},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){K("targetUpperLimit",s[1]),K("targetLowerLimit",s[0]),f.push("/")},label:"Home",value:"Home"},"Save")))))}var le=a(63);function se(e){return Object(le.b)(e,{stiffness:174,damping:24})}var ue={atEnter:{offset:100},atLeave:{offset:se(-100)},atActive:{offset:se(0)}};H.a.config({name:"myApp",version:1,size:4980736,storeName:"nhshack"});var me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement((function(){return r.a.createElement(i.a,{basename:null},r.a.createElement(l.a,{render:function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(le.a,Object.assign({},ue,{runOnMount:"/"===t.pathname,mapStyles:function(e){return{transform:"translateX(".concat(e.offset,"%)")}}}),r.a.createElement(l.a,{path:"/",exact:!0,component:V}),r.a.createElement(l.a,{path:"/device-angles",component:G}),r.a.createElement(l.a,{path:"/create-exercise",component:ae}),r.a.createElement(l.a,{path:"/measure",component:ne}),r.a.createElement(l.a,{path:"/set-target",component:ie})))}}))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nhs-hack-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nhs-hack-pwa","/service-worker.js");me?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()},52:function(e,t,a){},97:function(e,t,a){e.exports=a(120)}},[[97,1,2]]]);
//# sourceMappingURL=main.f57e32cf.chunk.js.map
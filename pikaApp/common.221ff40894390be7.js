"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4833:(y,C,v)=>{v.d(C,{c:()=>d});var o=v(7205),_=v(7683),m=v(3139);const d=(l,n)=>{let t,e;const i=(u,a,p)=>{if(typeof document>"u")return;const c=document.elementFromPoint(u,a);c&&n(c)?c!==t&&(g(),r(c,p)):g()},r=(u,a)=>{t=u,e||(e=t);const p=t;(0,o.c)(()=>p.classList.add("ion-activated")),a()},g=(u=!1)=>{if(!t)return;const a=t;(0,o.c)(()=>a.classList.remove("ion-activated")),u&&e!==t&&t.click(),t=void 0};return(0,m.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>i(u.currentX,u.currentY,_.a),onMove:u=>i(u.currentX,u.currentY,_.b),onEnd:()=>{g(!0),(0,_.h)(),e=void 0}})}},8685:(y,C,v)=>{v.d(C,{g:()=>o});const o=(n,t,e,i,r)=>m(n[1],t[1],e[1],i[1],r).map(g=>_(n[0],t[0],e[0],i[0],g)),_=(n,t,e,i,r)=>r*(3*t*Math.pow(r-1,2)+r*(-3*e*r+3*e+i*r))-n*Math.pow(r-1,3),m=(n,t,e,i,r)=>l((i-=r)-3*(e-=r)+3*(t-=r)-(n-=r),3*e-6*t+3*n,3*t-3*n,n).filter(u=>u>=0&&u<=1),l=(n,t,e,i)=>{if(0===n)return((n,t,e)=>{const i=t*t-4*n*e;return i<0?[]:[(-t+Math.sqrt(i))/(2*n),(-t-Math.sqrt(i))/(2*n)]})(t,e,i);const r=(3*(e/=n)-(t/=n)*t)/3,g=(2*t*t*t-9*t*e+27*(i/=n))/27;if(0===r)return[Math.pow(-g,1/3)];if(0===g)return[Math.sqrt(-r),-Math.sqrt(-r)];const u=Math.pow(g/2,2)+Math.pow(r/3,3);if(0===u)return[Math.pow(g/2,.5)-t/3];if(u>0)return[Math.pow(-g/2+Math.sqrt(u),1/3)-Math.pow(g/2+Math.sqrt(u),1/3)-t/3];const a=Math.sqrt(Math.pow(-r/3,3)),p=Math.acos(-g/(2*Math.sqrt(Math.pow(-r/3,3)))),c=2*Math.pow(a,1/3);return[c*Math.cos(p/3)-t/3,c*Math.cos((p+2*Math.PI)/3)-t/3,c*Math.cos((p+4*Math.PI)/3)-t/3]}},5062:(y,C,v)=>{v.d(C,{i:()=>o});const o=_=>_&&""!==_.dir?"rtl"===_.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},1112:(y,C,v)=>{v.r(C),v.d(C,{startFocusVisible:()=>d});const o="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=l=>{let n=[],t=!0;const e=l?l.shadowRoot:document,i=l||document.body,r=w=>{n.forEach(h=>h.classList.remove(o)),w.forEach(h=>h.classList.add(o)),n=w},g=()=>{t=!1,r([])},u=w=>{t=m.includes(w.key),t||r([])},a=w=>{if(t&&w.composedPath){const h=w.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));r(h)}},p=()=>{e.activeElement===i&&r([])};return e.addEventListener("keydown",u),e.addEventListener("focusin",a),e.addEventListener("focusout",p),e.addEventListener("touchstart",g),e.addEventListener("mousedown",g),{destroy:()=>{e.removeEventListener("keydown",u),e.removeEventListener("focusin",a),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g)},setFocus:r}}},1878:(y,C,v)=>{v.d(C,{C:()=>l,a:()=>m,d:()=>d});var o=v(5861),_=v(3756);const m=function(){var n=(0,o.Z)(function*(t,e,i,r,g,u){var a;if(t)return t.attachViewToDom(e,i,g,r);if(!(u||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof i?null===(a=e.ownerDocument)||void 0===a?void 0:a.createElement(i):i;return r&&r.forEach(c=>p.classList.add(c)),g&&Object.assign(p,g),e.appendChild(p),yield new Promise(c=>(0,_.c)(p,c)),p});return function(e,i,r,g,u,a){return n.apply(this,arguments)}}(),d=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},l=()=>{let n,t;return{attachViewToDom:function(){var r=(0,o.Z)(function*(g,u,a={},p=[]){var c,w;if(n=g,u){const f="string"==typeof u?null===(c=n.ownerDocument)||void 0===c?void 0:c.createElement(u):u;p.forEach(s=>f.classList.add(s)),Object.assign(f,a),n.appendChild(f),yield new Promise(s=>(0,_.c)(f,s))}else if(n.children.length>0){const f=null===(w=n.ownerDocument)||void 0===w?void 0:w.createElement("div");p.forEach(s=>f.classList.add(s)),f.append(...n.children),n.appendChild(f)}const h=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),h.appendChild(n),n});return function(u,a){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7683:(y,C,v)=>{v.d(C,{a:()=>m,b:()=>d,c:()=>_,d:()=>n,h:()=>l});const o={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:i})},notification(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},_=()=>{o.selection()},m=()=>{o.selectionStart()},d=()=>{o.selectionChanged()},l=()=>{o.selectionEnd()},n=t=>{o.impact(t)}},6465:(y,C,v)=>{v.d(C,{I:()=>l,a:()=>r,b:()=>n,c:()=>a,d:()=>c,f:()=>g,g:()=>i,i:()=>e,p:()=>p,r:()=>w,s:()=>u});var o=v(5861),_=v(3756),m=v(7208);const l="ion-content",n=".ion-content-scroll-host",t=`${l}, ${n}`,e=h=>h&&"ION-CONTENT"===h.tagName,i=function(){var h=(0,o.Z)(function*(f){return e(f)?(yield new Promise(s=>(0,_.c)(f,s)),f.getScrollElement()):f});return function(s){return h.apply(this,arguments)}}(),r=h=>h.querySelector(n)||h.querySelector(t),g=h=>h.closest(t),u=(h,f)=>e(h)?h.scrollToTop(f):Promise.resolve(h.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),a=(h,f,s,E)=>e(h)?h.scrollByPoint(f,s,E):Promise.resolve(h.scrollBy({top:s,left:f,behavior:E>0?"smooth":"auto"})),p=h=>(0,m.a)(h,l),c=h=>{if(e(h)){const s=h.scrollY;return h.scrollY=!1,s}return h.style.setProperty("overflow","hidden"),!0},w=(h,f)=>{e(h)?h.scrollY=f:h.style.removeProperty("overflow")}},7208:(y,C,v)=>{v.d(C,{a:()=>m,b:()=>_,p:()=>o});const o=d=>console.warn(`[Ionic Warning]: ${d}`),_=(d,...l)=>console.error(`[Ionic Error]: ${d}`,...l),m=(d,...l)=>console.error(`<${d.tagName.toLowerCase()}> must be used inside ${l.join(" or ")}.`)},3230:(y,C,v)=>{v.d(C,{a:()=>o,b:()=>g,c:()=>n,d:()=>u,e:()=>s,f:()=>m,g:()=>_,h:()=>h,i:()=>t,j:()=>i,k:()=>a,l:()=>e,m:()=>l,n:()=>d,o:()=>r,p:()=>p,q:()=>c,r:()=>w,s:()=>f});const o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(y,C,v)=>{v.d(C,{s:()=>o});const o=e=>{try{if(e instanceof class t{constructor(i){this.value=i}})return e.value;if(!d()||"string"!=typeof e||""===e)return e;const i=document.createDocumentFragment(),r=document.createElement("div");i.appendChild(r),r.innerHTML=e,n.forEach(p=>{const c=i.querySelectorAll(p);for(let w=c.length-1;w>=0;w--){const h=c[w];h.parentNode?h.parentNode.removeChild(h):i.removeChild(h);const f=m(h);for(let s=0;s<f.length;s++)_(f[s])}});const g=m(i);for(let p=0;p<g.length;p++)_(g[p]);const u=document.createElement("div");u.appendChild(i);const a=u.querySelector("div");return null!==a?a.innerHTML:u.innerHTML}catch(i){return console.error(i),""}},_=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const g=e.attributes.item(r),u=g.name;if(!l.includes(u.toLowerCase())){e.removeAttribute(u);continue}const a=g.value;null!=a&&a.toLowerCase().includes("javascript:")&&e.removeAttribute(u)}const i=m(e);for(let r=0;r<i.length;r++)_(i[r])},m=e=>null!=e.children?e.children:e.childNodes,d=()=>{var e;const r=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},l=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},1316:(y,C,v)=>{v.r(C),v.d(C,{KEYBOARD_DID_CLOSE:()=>_,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>f,keyboardDidClose:()=>p,keyboardDidOpen:()=>u,keyboardDidResize:()=>a,resetKeyboardAssist:()=>t,setKeyboardClose:()=>g,setKeyboardOpen:()=>r,startKeyboardAssist:()=>e,trackViewportChanges:()=>h});const o="ionKeyboardDidShow",_="ionKeyboardDidHide";let d={},l={},n=!1;const t=()=>{d={},l={},n=!1},e=s=>{i(s),s.visualViewport&&(l=f(s.visualViewport),s.visualViewport.onresize=()=>{h(s),u()||a(s)?r(s):p(s)&&g(s)})},i=s=>{s.addEventListener("keyboardDidShow",E=>r(s,E)),s.addEventListener("keyboardDidHide",()=>g(s))},r=(s,E)=>{c(s,E),n=!0},g=s=>{w(s),n=!1},u=()=>!n&&d.width===l.width&&(d.height-l.height)*l.scale>150,a=s=>n&&!p(s),p=s=>n&&l.height===s.innerHeight,c=(s,E)=>{const D=new CustomEvent(o,{detail:{keyboardHeight:E?E.keyboardHeight:s.innerHeight-l.height}});s.dispatchEvent(D)},w=s=>{const E=new CustomEvent(_);s.dispatchEvent(E)},h=s=>{d=Object.assign({},l),l=f(s.visualViewport)},f=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},7741:(y,C,v)=>{v.d(C,{S:()=>_});const _={bubbles:{dur:1e3,circles:9,fn:(m,d,l)=>{const n=m*d/l-m+"ms",t=2*Math.PI*d/l;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(m,d,l)=>{const n=d/l,t=m*n-m+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,d)=>({r:6,style:{left:9-9*d+"px","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,d,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*d+(d<l/2?180:-180)}deg)`,"animation-delay":m*d/l-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,d,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*d+(d<l/2?180:-180)}deg)`,"animation-delay":m*d/l-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,d,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":m*d/l-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,d,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":m*d/l-m+"ms"}})}}},6546:(y,C,v)=>{v.r(C),v.d(C,{createSwipeBackGesture:()=>l});var o=v(3756),_=v(5062),m=v(3139);v(3509);const l=(n,t,e,i,r)=>{const g=n.ownerDocument.defaultView,u=(0,_.i)(n),p=s=>u?-s.deltaX:s.deltaX;return(0,m.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(s=>{const{startX:M}=s;return u?M>=g.innerWidth-50:M<=50})(s)&&t(),onStart:e,onMove:s=>{const M=p(s)/g.innerWidth;i(M)},onEnd:s=>{const E=p(s),M=g.innerWidth,D=E/M,T=(s=>u?-s.velocityX:s.velocityX)(s),L=T>=0&&(T>.2||E>M/2),x=(L?1-D:D)*M;let k=0;if(x>5){const b=x/Math.abs(T);k=Math.min(b,540)}r(L,D<=0?.01:(0,o.l)(0,D,.9999),k)}})}},2854:(y,C,v)=>{v.d(C,{c:()=>m,g:()=>l,h:()=>_,o:()=>t});var o=v(5861);const _=(e,i)=>null!==i.closest(e),m=(e,i)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},i):i,l=e=>{const i={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(r=>null!=r).map(r=>r.trim()).filter(r=>""!==r):[])(e).forEach(r=>i[r]=!0),i},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,o.Z)(function*(i,r,g,u){if(null!=i&&"#"!==i[0]&&!n.test(i)){const a=document.querySelector("ion-router");if(a)return r?.preventDefault(),a.push(i,g,u)}return!1});return function(r,g,u,a){return e.apply(this,arguments)}}()},686:(y,C,v)=>{v.d(C,{G:()=>u});var o=v(6353),_=v(2507),m=v(1558),d=v(6861);let l=(()=>{class a{constructor(c){this.userService=c}logoutClick(){this.userService.logout()}}return a.\u0275fac=function(c){return new(c||a)(o.Y36(d.K))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-logout"]],decls:3,vars:0,consts:[["color","danger",3,"click"],["slot","start","name","log-out-outline"]],template:function(c,w){1&c&&(o.TgZ(0,"ion-button",0),o.NdJ("click",function(){return w.logoutClick()}),o._UZ(1,"ion-icon",1),o._uU(2," D\xe9connexion\n"),o.qZA())},dependencies:[m.YG,m.gu]}),a})(),n=(()=>{class a{}return a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-module-title"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"title"]],template:function(c,w){1&c&&(o.TgZ(0,"div",0),o._uU(1),o.qZA()),2&c&&(o.xp6(1),o.hij(" ",w.title,"\n"))},styles:[".title[_ngcontent-%COMP%]{text-align:center}"]}),a})(),t=(()=>{class a{constructor(c){this.navCtrl=c}logoClick(){this.navCtrl.navigateRoot("home")}}return a.\u0275fac=function(c){return new(c||a)(o.Y36(m.SH))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-logo"]],decls:1,vars:0,consts:[["height","50","src","assets/client/img/logos/main_logo.png","alt","IMAGE LOGO",3,"click"]],template:function(c,w){1&c&&(o.TgZ(0,"img",0),o.NdJ("click",function(){return w.logoClick()}),o.qZA())}}),a})();var e=v(6895);function i(a,p){if(1&a){const c=o.EpF();o.TgZ(0,"ion-button",2),o.NdJ("click",function(){const f=o.CHM(c).$implicit,s=o.oxw();return o.KtG(s.navigate(f.path))}),o._uU(1),o.qZA()}if(2&a){const c=p.$implicit;o.xp6(1),o.hij(" ",c.name," ")}}const r=[{name:"execution",type:"core",path:"execution"}];let g=(()=>{class a{constructor(c){this.navCtrl=c,this.modules=r}navigate(c){this.navCtrl.navigateForward(c)}}return a.\u0275fac=function(c){return new(c||a)(o.Y36(m.SH))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-navigation"]],decls:3,vars:1,consts:[["slot","start"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(c,w){1&c&&(o.TgZ(0,"ion-toolbar")(1,"ion-buttons",0),o.YNc(2,i,2,1,"ion-button",1),o.qZA()()),2&c&&(o.xp6(2),o.Q6J("ngForOf",w.modules))},dependencies:[e.sg,m.YG,m.Sm,m.sr]}),a})(),u=(()=>{class a{constructor(c){this.route=c}ngOnInit(){this.route.data.subscribe(c=>{this.moduleTitle=c.moduleTitle})}}return a.\u0275fac=function(c){return new(c||a)(o.Y36(_.gz))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-header"]],decls:6,vars:1,consts:[["slot","start"],[3,"title"],["slot","end"]],template:function(c,w){1&c&&(o.TgZ(0,"ion-header")(1,"ion-toolbar"),o._UZ(2,"app-logo",0)(3,"app-navigation",0)(4,"app-module-title",1)(5,"app-logout",2),o.qZA()()),2&c&&(o.xp6(4),o.Q6J("title",w.moduleTitle))},dependencies:[m.Gu,m.sr,l,n,t,g]}),a})()}}]);
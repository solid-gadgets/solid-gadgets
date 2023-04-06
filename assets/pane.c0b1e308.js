import{h as X,A as Q,$,B as ee,C as Y,c as te,a as m,D as ne,x as j,i as K,f as C,t as D,E as re,S as oe,I as se,n as ie}from"./web.a5c6c600.js";X(["click"]);var we=`.pane-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.splitter-wrapper {
  display: flex;
}
.splitter-wrapper .resize-bar {
  position: relative;
  z-index: 1000;
}
.splitter-wrapper .resize-bar-hover {
  background-color: #e6dfdf;
}
.splitter-wrapper .resize-bar-normal {
  background-color: whitesmoke;
}

.horizontal-splitter {
  flex-direction: column;
}
.horizontal-splitter .splitter-horizontal-resizing {
  cursor: row-resize;
}
.horizontal-splitter .horizontal-resize-bar::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.1490196078);
  transform: translate(-50%);
  width: 30px;
  height: 1px;
}
.horizontal-splitter .horizontal-bar-resizing {
  height: 10px;
  cursor: row-resize;
}

.vertical-splitter {
  flex-direction: row;
}
.vertical-splitter .splitter-vertical-resizing {
  cursor: col-resize;
}
.vertical-splitter .vertical-resize-bar::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.1490196078);
  transform: translate(-50%);
  width: 1px;
  height: 30px;
}
.vertical-splitter .vertical-bar-resizing {
  width: 10px;
  cursor: col-resize;
}

.splitter-horizontal-resizing {
  cursor: row-resize;
}

.splitter-vertical-resizing {
  cursor: col-resize;
}`;const Z=Symbol("store-raw"),L=Symbol("store-node"),ce=Symbol("store-name");function q(e,t){let n=e[$];if(!n){Object.defineProperty(e,$,{value:n=new Proxy(e,fe)});const r=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let o=0,s=r.length;o<s;o++){const f=r[o];if(i[f].get){const l=i[f].get.bind(n);Object.defineProperty(e,f,{get:l})}}}return n}function P(e){return e!=null&&typeof e=="object"&&(e[$]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function O(e,t=new Set){let n,r,i,o;if(n=e!=null&&e[Z])return n;if(!P(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,f=e.length;s<f;s++)i=e[s],(r=O(i,t))!==i&&(e[s]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),f=Object.getOwnPropertyDescriptors(e);for(let l=0,d=s.length;l<d;l++)o=s[l],!f[o].get&&(i=e[o],(r=O(i,t))!==i&&(e[o]=r))}return e}function V(e){let t=e[L];return t||Object.defineProperty(e,L,{value:t={}}),t}function M(e,t,n){return e[t]||(e[t]=G(n,!0))}function le(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===$||t===L||t===ce||(delete n.value,delete n.writable,n.get=()=>e[$][t]),n}function U(e){if(Y()){const t=V(e);(t._||(t._=G()))()}}function ae(e){return U(e),Reflect.ownKeys(e)}function G(e,t){const[n,r]=te(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=r,n}const fe={get(e,t,n){if(t===Z)return e;if(t===$)return n;if(t===ee)return U(e);const r=V(e),i=r[t];let o=i?r[t]():e[t];if(t===L||t==="__proto__")return o;if(!i){const s=Object.getOwnPropertyDescriptor(e,t);Y()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(o=M(r,t,o)())}return P(o)?q(o):o},set(){return!0},deleteProperty(){return!0},ownKeys:ae,getOwnPropertyDescriptor:le};function T(e,t,n){if(e[t]===n)return;const r=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=V(e),s;(s=M(o,t,r))&&s.$(()=>n),Array.isArray(e)&&e.length!==i&&(s=M(o,"length",i))&&s.$(e.length),(s=o._)&&s.$()}function ue(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];T(e,i,t[i])}}function pe(e,t){if(typeof t=="function"&&(t=t(e)),t=O(t),e===t)return;let n=0,r=t.length;for(;n<r;n++){const i=t[n];e[n]!==i&&T(e,n,i)}T(e,"length",r)}function _(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const s=typeof r,f=Array.isArray(e);if(Array.isArray(r)){for(let l=0;l<r.length;l++)_(e,[r[l]].concat(t),n);return}else if(f&&s==="function"){for(let l=0;l<e.length;l++)r(e[l],l)&&_(e,[l].concat(t),n);return}else if(f&&s==="object"){const{from:l=0,to:d=e.length-1,by:w=1}=r;for(let h=l;h<=d;h+=w)_(e,[h].concat(t),n);return}else if(t.length>1){_(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||r===void 0&&o==null||(o=O(o),r===void 0||P(i)&&P(o)&&!Array.isArray(o)?ue(i,o):T(e,r,o))}function x(e,t){const n=O(e||{}),r=Array.isArray(n),i=q(n);function o(...s){Q(()=>{r&&s.length===1?pe(n,s[0]):_(n,s)})}return[i,o]}function B(e){return typeof e=="string"}class me{promise;resolve;reject;constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}function H(e,t,...n){const r=t&&B(t)?`[solid-gadget-component] ${t}:`:"[solid-gadget]";B(e)?console.warn(`${r} ${e}`,...n):console.warn(r,e,...n)}var v=(e=>(e.HORIZONTAL="horizontal",e.VERTICAL="vertical",e))(v||{});const W="ResizableSplitter";function I({event:e,paneSizes:t,lastPaneIdx:n,nextPaneIdx:r,containerRef:i,direction:o,paneInfo:s,setPaneSizes:f,isMovingToLast:l,pushOtherPane:d}){if(n<0||r>=t.length)return;const w=s.minSizes[n],h=s.maxSizes[n],S=s.minSizes[r],E=s.maxSizes[r],k=l===!1?n+1:r,b=t.slice(0,k).reduce((z,y)=>z+y,0),R=o===v.VERTICAL?e.pageX-i.offsetLeft:e.pageY-i.offsetTop,N=getComputedStyle(i),A=R/Number(o===v.VERTICAL?N.width.replace("px",""):N.height.replace("px",""))-b,c=A<0,p=t[n]+A,g=t[r]-A;if(!c&&p>h||c&&g>E)return;const a=c&&p<w,u=!c&&g<S;if(!a&&!u){f(n,p),f(r,g);return}!d||I({event:e,containerRef:i,lastPaneIdx:a?n-1:n,nextPaneIdx:u?r+1:r,direction:o,paneSizes:t,paneInfo:s,setPaneSizes:f,isMovingToLast:c,pushOtherPane:d})}function ge(e){const t=e.reduce((o,s)=>o+s,0),n=e.map(()=>1/e.length);if(t===0)return n;if(t>1)return H("The total size of all panes exceed 1.",W),n;const r=[];if(e.forEach((o,s)=>{o===0&&r.push(s)}),!r.length)return t<1?(H("The total size of all panes is less than 1.",W),n):e;const i=(1-t)/r.length;return r.forEach(o=>e[o]=i),e}const de=D("<main></main>"),he=D('<div class="item-wrapper"></div>'),ze=D("<div></div>"),ve=({horizontal:e,children:t=[],customClass:n="",resizeBarClass:r="",pushOtherPane:i=!1})=>{let o;const s=[],f=[],l=m(()=>{const c=typeof t=="function"?t():t;return Array.isArray(c)?c:[c]}),d=m(()=>{const c=l().reduce((p,g)=>{const a=typeof g=="function"?g():g;return p.doms.push(a),p.sizes.push(Number(a.getAttribute("size")??0)/100),p.minSizes.push(Number(a.getAttribute("minsize")??0)/100),p.maxSizes.push(Number(a.getAttribute("maxsize")??100)/100),p},{doms:[],sizes:[],minSizes:[],maxSizes:[]});return c.sizes=ge(c.sizes),c}),[w,h]=x([]),[S,E]=x([]);ne(()=>{E([...d().sizes]),h(l().map(()=>!1))});const k=m(()=>w.some(c=>c)),b=m(()=>e?v.HORIZONTAL:v.VERTICAL),R=m(()=>`${n} ${b()}-splitter ${k()?`splitter-${b()}-resizing`:""}`),N=m(()=>`${r} ${b()}-resize-bar ${b()}-bar-resizing`),F=c=>b()===v.VERTICAL?{width:`${(S[c]*100).toFixed(2)}%`}:{height:`${(S[c]*100).toFixed(2)}%`},A=(c,p)=>{p.preventDefault(),h(c,!0);const g=z=>{if(!o)return;const y=c,J=c+1;I({event:z,containerRef:o,lastPaneIdx:y,nextPaneIdx:J,direction:b(),paneSizes:S,paneInfo:d(),setPaneSizes:E,pushOtherPane:i})},a=()=>{h(c,!1),o?.removeEventListener("mousemove",g),o?.removeEventListener("mouseup",a)},u=()=>{a(),o?.removeEventListener("mouseup",u)};o?.addEventListener("mousemove",g),o?.addEventListener("mouseup",a),o?.addEventListener("mouseleave",u)};return(()=>{const c=de.cloneNode(!0),p=o;return typeof p=="function"?p(c):o=c,j(c,K(se,{get each(){return l()},children:(g,a)=>[(()=>{const u=he.cloneNode(!0),z=s[a];return typeof z=="function"?z(u):s[a]=u,j(u,g),C(y=>re(u,F(a),y)),u})(),K(oe,{get when(){return a<l().length-1},get children(){const u=ze.cloneNode(!0);u.$$mousedown=y=>{A(a,y)};const z=f[a];return typeof z=="function"?z(u):f[a]=u,C(()=>u.className=`resize-bar ${N()} ${w[a]?"resize-bar-hover":"resize-bar-normal"}`),u}})]})),C(()=>c.className=`splitter-wrapper ${R()}`),c})()};X(["mousedown"]);const be=D("<section></section>"),$e=({customClass:e="",children:t,...n})=>(()=>{const r=be.cloneNode(!0);return r.className=`pane-wrapper ${e}`,ie(r,n,!1,!0),j(r,t),r})();export{me as D,$e as P,ve as S,we as s};

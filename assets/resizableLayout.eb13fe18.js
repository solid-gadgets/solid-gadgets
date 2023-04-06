import{k as S,x as p,c as v,a as A,y as d,f as x,i as h,m as f,t as y,p as k}from"./web.d5397485.js";import{s as w,S as z,P as O}from"./pane.3b480a05.js";const P=w;function E(e){return Object.keys(e).reduce((s,r)=>{const t=e[r];return s[r]=Object.assign({},t),_(t.value)&&!L(t.value)&&!Array.isArray(t.value)&&(s[r].value=Object.assign({},t.value)),Array.isArray(t.value)&&(s[r].value=t.value.slice(0)),s},{})}function j(e){return e?Object.keys(e).reduce((s,r)=>{const t=e[r];return s[r]=_(t)&&"value"in t?t:{value:t},s[r].attribute||(s[r].attribute=R(r)),s[r].parse="parse"in s[r]?s[r].parse:typeof s[r].value!="string",s},{}):{}}function $(e){return Object.keys(e).reduce((s,r)=>(s[r]=e[r].value,s),{})}function K(e,n){const s=E(n);return Object.keys(n).forEach(t=>{const i=s[t],l=e.getAttribute(i.attribute),o=e[t];l&&(i.value=i.parse?g(l):l),o!=null&&(i.value=Array.isArray(o)?o.slice(0):o),i.reflect&&b(e,i.attribute,i.value),Object.defineProperty(e,t,{get(){return i.value},set(a){const C=i.value;i.value=a,i.reflect&&b(this,i.attribute,i.value);for(let c=0,m=this.__propertyChangedCallbacks.length;c<m;c++)this.__propertyChangedCallbacks[c](t,a,C)},enumerable:!0,configurable:!0})}),s}function g(e){if(!!e)try{return JSON.parse(e)}catch{return e}}function b(e,n,s){if(s==null||s===!1)return e.removeAttribute(n);let r=JSON.stringify(s);e.__updating[n]=!0,r==="true"&&(r=""),e.setAttribute(n,r),Promise.resolve().then(()=>delete e.__updating[n])}function R(e){return e.replace(/\.?([A-Z]+)/g,(n,s)=>"-"+s.toLowerCase()).replace("_","-").replace(/^-/,"")}function _(e){return e!=null&&(typeof e=="object"||typeof e=="function")}function L(e){return Object.prototype.toString.call(e)==="[object Function]"}function N(e){return typeof e=="function"&&e.toString().indexOf("class")===0}let u;function T(e,n){const s=Object.keys(n);return class extends e{static get observedAttributes(){return s.map(t=>n[t].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=K(this,n);const t=$(this.props),i=this.Component,l=u;try{u=this,this.__initialized=!0,N(i)?new i(t,{element:this}):i(t,{element:this})}finally{u=l}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let t=null;for(;t=this.__releaseCallbacks.pop();)t(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(t,i,l){if(!!this.__initialized&&!this.__updating[t]&&(t=this.lookupProp(t),t in n)){if(l==null&&!this[t])return;this[t]=n[t].parse?g(l):l}}lookupProp(t){if(!!n)return s.find(i=>t===i||t===n[i].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(t){this.__releaseCallbacks.push(t)}addPropertyChangedCallback(t){this.__propertyChangedCallbacks.push(t)}}}function q(e,n={},s={}){const{BaseElement:r=HTMLElement,extension:t}=s;return i=>{if(!e)throw new Error("tag is required to register a Component");let l=customElements.get(e);return l?(l.prototype.Component=i,l):(l=T(r,j(n)),l.prototype.Component=i,l.prototype.registeredTag=e,customElements.define(e,l,t),l)}}function B(e){const n=Object.keys(e),s={};for(let r=0;r<n.length;r++){const[t,i]=v(e[n[r]]);Object.defineProperty(s,n[r],{get:t,set(l){i(()=>l)}})}return s}function F(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let n=e.parentNode;for(;n&&!n._$owner&&!(n.assignedSlot&&n.assignedSlot._$owner);)n=n.parentNode;return n&&n.assignedSlot?n.assignedSlot._$owner:e._$owner}function H(e){return(n,s)=>{const{element:r}=s;return S(t=>{const i=B(n);r.addPropertyChangedCallback((o,a)=>i[o]=a),r.addReleaseCallback(()=>{r.renderRoot.textContent="",t()});const l=e(i,s);return p(r.renderRoot,l)},F(r))}}function J(e,n,s){return arguments.length===2&&(s=n,n={}),q(e,n)(H(s))}const M=y(`<style>* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          </style>`),V=y('<link rel="stylesheet">'),I={horizontal:!1,customClass:"",resizeBarClass:"",pushOtherPane:!1,styleCode:"",splitterId:"0",styleLink:""},Z=()=>{J("so-splitter",I,(e,{element:n})=>{const s=A(()=>[...n.children].map(r=>{const t={customClass:r.getAttribute("custom-class")??"",maxSize:r.getAttribute("max-size")??100,minSize:r.getAttribute("min-size")??0,size:r.getAttribute("size")??0};return h(O,f(t,{get children(){return[...r.children]}}))}));return[(()=>{const r=M.cloneNode(!0);return r.firstChild,p(r,P,null),p(r,()=>e.styleCode,null),r})(),d((()=>{const r=d(()=>e.styleLink?.trim()!=="",!0);return()=>r()&&(()=>{const t=V.cloneNode(!0);return x(()=>k(t,"href",e.styleLink)),t})()})()),h(z,f(e,{children:s}))]})};var G=`.my-pane {
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 2rem;
  opacity: 0.7;
}

.splitter-parent {
  width: 1000px;
  height: 500px;
  border: 1px solid rgb(224, 224, 232);
}

.splitter-child {
  width: 100%;
  height: 100%;
}

.child-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2) inset;
  background-color: #b3b1b1;
}
.child-container .desc {
  font-size: 1rem;
  color: rgb(231, 228, 228);
}`;const Q=document.querySelectorAll("so-splitter");Q.forEach(e=>{e.setAttribute("style-code",G)});Z();

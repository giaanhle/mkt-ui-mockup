var AclWebComponents=(function(c){"use strict";var Je,V1;const t7=':root{--color-gray-0: oklch(1 0 0);--color-gray-1: oklch(.9846 .0017 247.84);--color-gray-2: oklch(.9515 .0046 258.32);--color-gray-3: oklch(.9336 .0058 264.53);--color-gray-4: oklch(.8618 .0141 258.35);--color-gray-5: oklch(.7073 .0268 263.28);--color-gray-6: oklch(.6528 .0316 266.24);--color-gray-7: oklch(.5371 .0337 264.24);--color-gray-8: oklch(.3544 .0326 260.94);--color-gray-9: oklch(.2776 .0341 255.81);--color-danger-1: oklch(.9437 .0174 17.47);--color-danger-2: oklch(.8643 .0573 18.32);--color-danger-3: oklch(.712 .1517 21.64);--color-danger-4: oklch(.5948 .2165 26.91);--color-danger-5: oklch(.531 .2147 28.91);--color-primary-1: oklch(.9474 .0256 221.57);--color-primary-2: oklch(.8652 .066 236.86);--color-primary-3: oklch(.7219 .1335 240.15);--color-primary-4: oklch(.5679 .1784 254.76);--color-primary-5: oklch(.4682 .1548 255.23);--color-success-1: oklch(.9276 .0541 150.91);--color-success-2: oklch(.8592 .1078 149.75);--color-success-3: oklch(.6953 .1711 149.14);--color-success-4: oklch(.6149 .1634 148.21);--color-success-5: oklch(.5075 .136 146.46);--color-warning-1: oklch(.9549 .0496 88.08);--color-warning-2: oklch(.912 .0811 83.56);--color-warning-3: oklch(.8282 .1628 78.73);--color-warning-4: oklch(.7325 .1512 75.97);--color-warning-5: oklch(.5329 .1098 82);--color-semantic-gray-0: oklch(1 0 0);--color-semantic-gray-1: oklch(.9846 .0017 247.84);--color-semantic-gray-2: oklch(.9515 .0046 258.32);--color-semantic-gray-3: oklch(.9336 .0058 264.53);--color-semantic-gray-4: oklch(.8618 .0141 258.35);--color-semantic-gray-5: oklch(.7073 .0268 263.28);--color-semantic-gray-6: oklch(.6528 .0316 266.24);--color-semantic-gray-7: oklch(.5371 .0337 264.24);--color-semantic-gray-8: oklch(.3544 .0326 260.94);--color-semantic-gray-9: oklch(.2776 .0341 255.81);--color-semantic-danger-1: oklch(.9437 .0174 17.47);--color-semantic-danger-2: oklch(.8643 .0573 18.32);--color-semantic-danger-3: oklch(.712 .1517 21.64);--color-semantic-danger-4: oklch(.5948 .2165 26.91);--color-semantic-danger-5: oklch(.531 .2147 28.91);--color-semantic-primary-1: oklch(.9474 .0256 221.57);--color-semantic-primary-2: oklch(.8652 .066 236.86);--color-semantic-primary-3: oklch(.7219 .1335 240.15);--color-semantic-primary-4: oklch(.5679 .1784 254.76);--color-semantic-primary-5: oklch(.4682 .1548 255.23);--color-semantic-success-1: oklch(.9276 .0541 150.91);--color-semantic-success-2: oklch(.8592 .1078 149.75);--color-semantic-success-3: oklch(.6953 .1711 149.14);--color-semantic-success-4: oklch(.6149 .1634 148.21);--color-semantic-success-5: oklch(.5075 .136 146.46);--color-semantic-warning-1: oklch(.9549 .0496 88.08);--color-semantic-warning-2: oklch(.912 .0811 83.56);--color-semantic-warning-3: oklch(.8282 .1628 78.73);--color-semantic-warning-4: oklch(.7325 .1512 75.97);--color-semantic-warning-5: oklch(.5329 .1098 82);--color-purple-50: oklch(.9676 .016 286.1);--color-purple-100: oklch(.9434 .0255 288.32);--color-purple-200: oklch(.8927 .0519 287.71);--color-purple-300: oklch(.81 .0925 287.61);--color-purple-400: oklch(.7048 .1478 287.77);--color-purple-500: oklch(.5961 .2043 286.53);--color-purple-600: oklch(.5316 .2303 286.64);--color-purple-700: oklch(.471 .2307 285.3);--color-purple-800: oklch(.4148 .2014 285.43);--color-purple-900: oklch(.3654 .17 286.37);--color-purple-950: oklch(.2734 .1288 284.42);--color-white: var(--color-gray-0);--font-sans: system-ui, -apple-system, Roboto, Oxygen, Cantarell, Ubuntu, "Segoe UI", sans-serif;--font-mono: monospace;--text-9: 9px;--text-10: 10px;--text-11: 11px;--text-12: 12px;--text-13: 13px;--text-15: 15px;--text-17: 17px;--text-20: 20px;--text-23: 23px;--text-26: 26px;--text-30: 30px;--text-35: 35px;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--leading-16: 16px;--leading-20: 20px;--leading-24: 24px;--leading-28: 28px;--leading-32: 32px;--leading-40: 40px;--leading-44: 44px;--leading-r1p5: 1.5;--radius-0: 0;--radius-2: 2px;--radius-3: 3px;--radius-4: 4px;--radius-6: 6px;--radius-8: 8px;--radius-12: 12px;--radius-16: 16px;--radius-20: 20px;--radius-24: 24px;--radius-full: 9999px;--shadow-1: 0px 1px 2px rgba(29, 41, 57, .07);--shadow-2: 0px 1px 2px rgba(29, 41, 57, .04), 0px 2px 8px rgba(29, 41, 57, .08);--shadow-3: 0px 2px 8px rgba(29, 41, 57, .08), 0px 8px 24px rgba(29, 41, 57, .12);--shadow-4: 0px 4px 8px rgba(29, 41, 57, .08), 0px 16px 48px rgba(29, 41, 57, .16);--spacing-px: 1px;--spacing-0: 0;--spacing-2: 2px;--spacing-4: 4px;--spacing-6: 6px;--spacing-8: 8px;--spacing-12: 12px;--spacing-16: 16px;--spacing-20: 20px;--spacing-24: 24px;--spacing-28: 28px;--spacing-32: 32px;--spacing-40: 40px;--spacing-48: 48px;--spacing-56: 56px;--spacing-64: 64px;--spacing-128: 128px;--spacing-256: 256px;--z-0: 0;--z-1: 1;--z-2: 2;--z-3: 3;--z-4: 4;--z-5: 5;--z-999: 999;--z-9999: 9999}body{font-family:var(--font-sans);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:var(--text-13)}';/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S2=globalThis,_5=S2.ShadowRoot&&(S2.ShadyCSS===void 0||S2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L5=Symbol(),y3=new WeakMap;let _3=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==L5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(_5&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=y3.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&y3.set(t,e))}return e}toString(){return this.cssText}};const i7=l=>new _3(typeof l=="string"?l:l+"",void 0,L5),f=(l,...e)=>{const t=l.length===1?l[0]:e.reduce((o,i,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+l[n+1],l[0]);return new _3(t,l,L5)},o7=(l,e)=>{if(_5)l.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),i=S2.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,l.appendChild(o)}},L3=_5?l=>l:l=>l instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return i7(t)})(l):l;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:n7,defineProperty:l7,getOwnPropertyDescriptor:r7,getOwnPropertyNames:a7,getOwnPropertySymbols:s7,getPrototypeOf:d7}=Object,f1=globalThis,V3=f1.trustedTypes,c7=V3?V3.emptyScript:"",V5=f1.reactiveElementPolyfillSupport,C2=(l,e)=>l,D2={toAttribute(l,e){switch(e){case Boolean:l=l?c7:null;break;case Object:case Array:l=l==null?l:JSON.stringify(l)}return l},fromAttribute(l,e){let t=l;switch(e){case Boolean:t=l!==null;break;case Number:t=l===null?null:Number(l);break;case Object:case Array:try{t=JSON.parse(l)}catch{t=null}}return t}},x5=(l,e)=>!n7(l,e),x3={attribute:!0,type:String,converter:D2,reflect:!1,useDefault:!1,hasChanged:x5};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f1.litPropertyMetadata??(f1.litPropertyMetadata=new WeakMap);let G1=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x3){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);i!==void 0&&l7(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=r7(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){const d=i==null?void 0:i.call(this);n==null||n.call(this,r),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x3}static _$Ei(){if(this.hasOwnProperty(C2("elementProperties")))return;const e=d7(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C2("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C2("properties"))){const t=this.properties,o=[...a7(t),...s7(t)];for(const i of o)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,i]of t)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const i=this._$Eu(t,o);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)t.unshift(L3(i))}else e!==void 0&&t.push(L3(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o7(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){var n;const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:D2).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){var n,r;const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const d=o.getPropertyOptions(i),C=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)==null?void 0:n.fromAttribute)!==void 0?d.converter:D2;this._$Em=i;const u=C.fromAttribute(t,d.type);this[i]=u??((r=this._$Ej)==null?void 0:r.get(i))??u,this._$Em=null}}requestUpdate(e,t,o,i=!1,n){var r;if(e!==void 0){const d=this.constructor;if(i===!1&&(n=this[e]),o??(o=d.getPropertyOptions(e)),!((o.hasChanged??x5)(n,t)||o.useDefault&&o.reflect&&n===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(d._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:n},r){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i){const{wrapped:d}=r,C=this[n];d!==!0||this._$AL.has(n)||C===void 0||this.C(n,void 0,r,C)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};G1.elementStyles=[],G1.shadowRootOptions={mode:"open"},G1[C2("elementProperties")]=new Map,G1[C2("finalized")]=new Map,V5==null||V5({ReactiveElement:G1}),(f1.reactiveElementVersions??(f1.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u2=globalThis,M3=l=>l,B2=u2.trustedTypes,w3=B2?B2.createPolicy("lit-html",{createHTML:l=>l}):void 0,Z3="$lit$",v1=`lit$${Math.random().toFixed(9).slice(2)}$`,k3="?"+v1,C7=`<${k3}>`,x1=document,p2=()=>x1.createComment(""),h2=l=>l===null||typeof l!="object"&&typeof l!="function",M5=Array.isArray,u7=l=>M5(l)||typeof(l==null?void 0:l[Symbol.iterator])=="function",w5=`[ 	
\f\r]`,g2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R3=/-->/g,E3=/>/g,M1=RegExp(`>|${w5}(?:([^\\s"'>=/]+)(${w5}*=${w5}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$3=/'/g,A3=/"/g,z3=/^(?:script|style|textarea|title)$/i,S3=l=>(e,...t)=>({_$litType$:l,strings:e,values:t}),s=S3(1),P2=S3(2),w1=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),D3=new WeakMap,Z1=x1.createTreeWalker(x1,129);function B3(l,e){if(!M5(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return w3!==void 0?w3.createHTML(e):e}const p7=(l,e)=>{const t=l.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",r=g2;for(let d=0;d<t;d++){const C=l[d];let u,p,v=-1,H=0;for(;H<C.length&&(r.lastIndex=H,p=r.exec(C),p!==null);)H=r.lastIndex,r===g2?p[1]==="!--"?r=R3:p[1]!==void 0?r=E3:p[2]!==void 0?(z3.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=M1):p[3]!==void 0&&(r=M1):r===M1?p[0]===">"?(r=i??g2,v=-1):p[1]===void 0?v=-2:(v=r.lastIndex-p[2].length,u=p[1],r=p[3]===void 0?M1:p[3]==='"'?A3:$3):r===A3||r===$3?r=M1:r===R3||r===E3?r=g2:(r=M1,i=void 0);const b=r===M1&&l[d+1].startsWith("/>")?" ":"";n+=r===g2?C+C7:v>=0?(o.push(u),C.slice(0,v)+Z3+C.slice(v)+v1+b):C+v1+(v===-2?d:b)}return[B3(l,n+(l[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class f2{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const d=e.length-1,C=this.parts,[u,p]=p7(e,t);if(this.el=f2.createElement(u,o),Z1.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(i=Z1.nextNode())!==null&&C.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const v of i.getAttributeNames())if(v.endsWith(Z3)){const H=p[r++],b=i.getAttribute(v).split(v1),x=/([.?@])?(.*)/.exec(H);C.push({type:1,index:n,name:x[2],strings:b,ctor:x[1]==="."?g7:x[1]==="?"?f7:x[1]==="@"?v7:O2}),i.removeAttribute(v)}else v.startsWith(v1)&&(C.push({type:6,index:n}),i.removeAttribute(v));if(z3.test(i.tagName)){const v=i.textContent.split(v1),H=v.length-1;if(H>0){i.textContent=B2?B2.emptyScript:"";for(let b=0;b<H;b++)i.append(v[b],p2()),Z1.nextNode(),C.push({type:2,index:++n});i.append(v[H],p2())}}}else if(i.nodeType===8)if(i.data===k3)C.push({type:2,index:n});else{let v=-1;for(;(v=i.data.indexOf(v1,v+1))!==-1;)C.push({type:7,index:n}),v+=v1.length-1}n++}}static createElement(e,t){const o=x1.createElement("template");return o.innerHTML=e,o}}function U1(l,e,t=l,o){var r,d;if(e===w1)return e;let i=o!==void 0?(r=t._$Co)==null?void 0:r[o]:t._$Cl;const n=h2(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((d=i==null?void 0:i._$AO)==null||d.call(i,!1),n===void 0?i=void 0:(i=new n(l),i._$AT(l,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=i:t._$Cl=i),i!==void 0&&(e=U1(l,i._$AS(l,e.values),i,o)),e}class h7{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=((e==null?void 0:e.creationScope)??x1).importNode(t,!0);Z1.currentNode=i;let n=Z1.nextNode(),r=0,d=0,C=o[0];for(;C!==void 0;){if(r===C.index){let u;C.type===2?u=new v2(n,n.nextSibling,this,e):C.type===1?u=new C.ctor(n,C.name,C.strings,this,e):C.type===6&&(u=new m7(n,this,e)),this._$AV.push(u),C=o[++d]}r!==(C==null?void 0:C.index)&&(n=Z1.nextNode(),r++)}return Z1.currentNode=x1,i}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class v2{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U1(this,e,t),h2(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==w1&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):u7(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&h2(this._$AH)?this._$AA.nextSibling.data=e:this.T(x1.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=f2.createElement(B3(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const r=new h7(i,this),d=r.u(this.options);r.p(t),this.T(d),this._$AH=r}}_$AC(e){let t=D3.get(e.strings);return t===void 0&&D3.set(e.strings,t=new f2(e)),t}k(e){M5(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new v2(this.O(p2()),this.O(p2()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e!==this._$AB;){const i=M3(e).nextSibling;M3(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class O2{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(n===void 0)e=U1(this,e,t,0),r=!h2(e)||e!==this._$AH&&e!==w1,r&&(this._$AH=e);else{const d=e;let C,u;for(e=n[0],C=0;C<n.length-1;C++)u=U1(this,d[o+C],t,C),u===w1&&(u=this._$AH[C]),r||(r=!h2(u)||u!==this._$AH[C]),u===h?e=h:e!==h&&(e+=(u??"")+n[C+1]),this._$AH[C]=u}r&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class g7 extends O2{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class f7 extends O2{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class v7 extends O2{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=U1(this,e,t,0)??h)===w1)return;const o=this._$AH,i=e===h&&o!==h||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==h&&(o===h||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class m7{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){U1(this,e)}}const Z5=u2.litHtmlPolyfillSupport;Z5==null||Z5(f2,v2),(u2.litHtmlVersions??(u2.litHtmlVersions=[])).push("3.3.2");const b7=(l,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let i=o._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;o._$litPart$=i=new v2(e.insertBefore(p2(),n),n,void 0,t??{})}return i._$AI(l),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k1=globalThis;let g=class extends G1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=b7(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return w1}};g._$litElement$=!0,g.finalized=!0,(Je=k1.litElementHydrateSupport)==null||Je.call(k1,{LitElement:g});const k5=k1.litElementPolyfillSupport;k5==null||k5({LitElement:g}),(k1.litElementVersions??(k1.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H7={attribute:!0,type:String,converter:D2,reflect:!1,hasChanged:x5},y7=(l=H7,e,t)=>{const{kind:o,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),o==="setter"&&((l=Object.create(l)).wrapped=!0),n.set(t.name,l),o==="accessor"){const{name:r}=t;return{set(d){const C=e.get.call(this);e.set.call(this,d),this.requestUpdate(r,C,l,!0,d)},init(d){return d!==void 0&&this.C(r,void 0,l,d),d}}}if(o==="setter"){const{name:r}=t;return function(d){const C=this[r];e.call(this,d),this.requestUpdate(r,C,l,!0,d)}}throw Error("Unsupported decorator location: "+o)};function a(l){return(e,t)=>typeof t=="object"?y7(l,e,t):((o,i,n)=>{const r=i.hasOwnProperty(n);return i.constructor.createProperty(n,o),r?Object.getOwnPropertyDescriptor(i,n):void 0})(l,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(l){return a({...l,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _7=(l,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(l,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(l,e){return(t,o,i)=>{const n=r=>{var d;return((d=r.renderRoot)==null?void 0:d.querySelector(l))??null};return _7(t,o,{get(){return n(this)}})}}var L7=Object.defineProperty,P3=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&L7(e,t,i),i};const J5=class J5 extends g{constructor(){super(...arguments),this.size="medium",this.percent=""}getSizeParams(e){switch(e){case"small":return[16,2];case"medium":return[24,2];case"large":return[32,3];case"extraLarge":return[48,4];default:return[24,2]}}render(){const[e,t]=this.getSizeParams(this.size),o=this.percent===""||this.percent===null;let i;o?i=.75*Math.PI*e:i=(1-Math.max(0,Math.min(1,parseFloat(this.percent)||0)))*Math.PI*e;const n=t/2,r=t+e,d=e/2,C=Math.PI*e;return P2`
      <svg
        class=${o?"spinner":""}
        width="${e}px"
        height="${e}px"
        transform="rotate(-90)"
        viewBox="-${n} -${n} ${r} ${r}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="${t}px"
          cx="${d}"
          cy="${d}"
          r="${d}"
          stroke-opacity="0.2"
          fill-opacity="0"
        />
        <circle
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="${t}px"
          cx="${d}"
          cy="${d}"
          r="${d}"
          fill-opacity="0"
          stroke-dasharray="${C}"
          stroke-dashoffset="${i}"
        />
      </svg>
    `}};J5.styles=f`
    :host { display: inline-block; line-height: 0; font-family: var(--font-sans); }
    .spinner { animation: circle 0.6s linear infinite; }
    @keyframes circle { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  `;let j1=J5;P3([a()],j1.prototype,"size"),P3([a()],j1.prototype,"percent"),customElements.get("anduin-spinner")||customElements.define("anduin-spinner",j1);var V7=Object.defineProperty,O3=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&V7(e,t,i),i};const T3="M7.23359 3.5336C7.49685 2.82213 8.50314 2.82213 8.76641 3.5336L9.63534 5.88184C9.71811 6.10553 9.89447 6.28189 10.1182 6.36466L12.4664 7.23359C13.1779 7.49685 13.1779 8.50314 12.4664 8.76641L10.1182 9.63534C9.89447 9.71811 9.71811 9.89447 9.63534 10.1182L8.76641 12.4664C8.50314 13.1779 7.49685 13.1779 7.23359 12.4664L6.36466 10.1182C6.28189 9.89447 6.10553 9.71811 5.88185 9.63534L3.5336 8.76641C2.82213 8.50314 2.82213 7.49685 3.5336 7.23359L5.88184 6.36466C6.10553 6.28189 6.28189 6.10553 6.36466 5.88185L7.23359 3.5336Z",x7={small:16,medium:24,large:32},Q5=class Q5 extends g{constructor(){super(...arguments),this.size="small",this.color="default"}render(){const e=x7[this.size]??16;return P2`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${e}"
        height="${e}"
        viewBox="0 0 16 16"
        fill="currentColor"
        overflow="visible"
      >
        <path class="star"        d="${T3}"/>
        <path class="star star-2" d="${T3}"/>
      </svg>
    `}};Q5.styles=f`
    :host { display: inline-block; line-height: 0; }

    /* ── Colors ─────────────────────────────────────────────────── */
    :host([color="primary"]) { color: var(--color-primary-4); }
    :host([color="success"])  { color: var(--color-success-4); }
    :host([color="warning"])  { color: var(--color-warning-4); }
    :host([color="danger"])   { color: var(--color-danger-4); }

    /* ── Star base ──────────────────────────────────────────────── */
    .star {
      transform-box: fill-box;
      transform-origin: center;
      animation: sparkle-sm 2s linear infinite;
      opacity: 0;
    }
    .star-2 { animation-delay: 1s; }

    /* ── Size-specific animation names ──────────────────────────── */
    :host([size="medium"]) .star { animation-name: sparkle-md; }
    :host([size="large"])  .star { animation-name: sparkle-lg; }

    /* ── Keyframes ──────────────────────────────────────────────── */
    @keyframes sparkle-sm {
      0%   { transform: translate(-6px, -6px) scale(0.5); opacity: 0; }
      50%  { transform: translate(0, 0)       scale(1);   opacity: 1; }
      100% { transform: translate(6px, 6px)   scale(0.5); opacity: 0; }
    }
    @keyframes sparkle-md {
      0%   { transform: translate(-9px, -9px) scale(0.5); opacity: 0; }
      50%  { transform: translate(0, 0)       scale(1);   opacity: 1; }
      100% { transform: translate(9px, 9px)   scale(0.5); opacity: 0; }
    }
    @keyframes sparkle-lg {
      0%   { transform: translate(-12px, -12px) scale(0.5); opacity: 0; }
      50%  { transform: translate(0, 0)         scale(1);   opacity: 1; }
      100% { transform: translate(12px, 12px)   scale(0.5); opacity: 0; }
    }
  `;let K1=Q5;O3([a({reflect:!0})],K1.prototype,"size"),O3([a({reflect:!0})],K1.prototype,"color"),customElements.get("anduin-sparkle-spinner")||customElements.define("anduin-sparkle-spinner",K1);const I3={access:[{d:"M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V5.75H1V3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V10.25H2.5V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5ZM7.53033 4.21979C7.23744 3.9269 6.76256 3.9269 6.46967 4.21979C6.17678 4.51269 6.17678 4.98756 6.46967 5.28045L8.43922 7.25L0.75 7.25C0.335786 7.25 0 7.58579 0 8C0 8.41421 0.335786 8.75 0.75 8.75L8.43946 8.75L6.46967 10.7198C6.17678 11.0127 6.17678 11.4876 6.46967 11.7805C6.76256 12.0733 7.23744 12.0733 7.53033 11.7805L10.7803 8.53044C11.0732 8.23755 11.0732 7.76268 10.7803 7.46978L7.53033 4.21979Z",fillRule:"evenodd",clipRule:"evenodd"}],alignCenter:[{d:"M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H2ZM2 9C1.44772 9 1 9.44771 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44771 14.5523 9 14 9H2ZM4 6C4 5.44772 4.44772 5 5 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H5C4.44772 7 4 6.55228 4 6ZM5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13H5Z",fillRule:"evenodd",clipRule:"evenodd"}],alignJustify:[{d:"M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H2ZM2 9C1.44772 9 1 9.44771 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44771 14.5523 9 14 9H2ZM1 6C1 5.44772 1.44772 5 2 5H14C14.5523 5 15 5.44772 15 6C15 6.55228 14.5523 7 14 7H2C1.44772 7 1 6.55228 1 6ZM2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H2Z",fillRule:"evenodd",clipRule:"evenodd"}],alignLeft:[{d:"M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H2ZM2 9C1.44772 9 1 9.44771 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44771 14.5523 9 14 9H2ZM1 6C1 5.44772 1.44772 5 2 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H2C1.44772 7 1 6.55228 1 6ZM2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H8C8.55228 15 9 14.5523 9 14C9 13.4477 8.55228 13 8 13H2Z",fillRule:"evenodd",clipRule:"evenodd"}],alignRight:[{d:"M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H2ZM2 9C1.44772 9 1 9.44771 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44771 14.5523 9 14 9H2ZM5 6C5 5.44772 5.44772 5 6 5H14C14.5523 5 15 5.44772 15 6C15 6.55228 14.5523 7 14 7H6C5.44772 7 5 6.55228 5 6ZM8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H8Z",fillRule:"evenodd",clipRule:"evenodd"}],alignmentBottom:[{d:"M9 2C9 1.44771 9.44772 1 10 1H11C11.5523 1 12 1.44772 12 2V11C12 11.5523 11.5523 12 11 12H10C9.44771 12 9 11.5523 9 11V2ZM1 14.25C1 13.8358 1.33579 13.5 1.75 13.5H14.25C14.6642 13.5 15 13.8358 15 14.25C15 14.6642 14.6642 15 14.25 15H1.75C1.33579 15 1 14.6642 1 14.25ZM5 4C4.44772 4 4 4.44772 4 5V11C4 11.5523 4.44772 12 5 12H6C6.55228 12 7 11.5523 7 11V5C7 4.44772 6.55228 4 6 4H5Z",fillRule:"evenodd",clipRule:"evenodd"}],alignmentCenter:[{d:"M8.75 1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V4H2C1.44772 4 1 4.44772 1 5V6C1 6.55228 1.44772 7 2 7H7.25V9H5C4.44772 9 4 9.44771 4 10V11C4 11.5523 4.44772 12 5 12H7.25V14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V12H11C11.5523 12 12 11.5523 12 11V10C12 9.44772 11.5523 9 11 9H8.75V7H14C14.5523 7 15 6.55228 15 6V5C15 4.44772 14.5523 4 14 4H8.75V1.75Z",fillRule:"",clipRule:""}],alignmentLeft:[{d:"M1 1.75C1 1.33579 1.33579 1 1.75 1C2.16421 1 2.5 1.33579 2.5 1.75V14.25C2.5 14.6642 2.16421 15 1.75 15C1.33579 15 1 14.6642 1 14.25V1.75ZM4 5C4 4.44772 4.44772 4 5 4H14C14.5523 4 15 4.44772 15 5V6C15 6.55228 14.5523 7 14 7H5C4.44772 7 4 6.55228 4 6V5ZM5 9C4.44772 9 4 9.44771 4 10V11C4 11.5523 4.44772 12 5 12H9C9.55228 12 10 11.5523 10 11V10C10 9.44772 9.55228 9 9 9H5Z",fillRule:"evenodd",clipRule:"evenodd"}],alignmentMiddle:[{d:"M9 2C9 1.44772 9.44772 1 10 1H11C11.5523 1 12 1.44772 12 2V7.25H14.25C14.6642 7.25 15 7.58579 15 8C15 8.41421 14.6642 8.75 14.25 8.75H12V14C12 14.5523 11.5523 15 11 15H10C9.44771 15 9 14.5523 9 14V8.75H7V11C7 11.5523 6.55228 12 6 12H5C4.44772 12 4 11.5523 4 11V8.75H1.75C1.33579 8.75 1 8.41421 1 8C1 7.58579 1.33579 7.25 1.75 7.25H4V5C4 4.44772 4.44772 4 5 4H6C6.55228 4 7 4.44772 7 5V7.25H9V2Z",fillRule:"",clipRule:""}],alignmentRight:[{d:"M13.5 1.75C13.5 1.33579 13.8358 1 14.25 1C14.6642 1 15 1.33579 15 1.75V14.25C15 14.6642 14.6642 15 14.25 15C13.8358 15 13.5 14.6642 13.5 14.25V1.75ZM1 5C1 4.44772 1.44772 4 2 4H11C11.5523 4 12 4.44772 12 5V6C12 6.55228 11.5523 7 11 7H2C1.44771 7 1 6.55228 1 6V5ZM6 9C5.44772 9 5 9.44771 5 10V11C5 11.5523 5.44772 12 6 12H11C11.5523 12 12 11.5523 12 11V10C12 9.44772 11.5523 9 11 9H6Z",fillRule:"evenodd",clipRule:"evenodd"}],alignmentTop:[{d:"M1 1.75C1 1.33579 1.33579 1 1.75 1H14.25C14.6642 1 15 1.33579 15 1.75C15 2.16421 14.6642 2.5 14.25 2.5H1.75C1.33579 2.5 1 2.16421 1 1.75ZM9 5C9 4.44772 9.44772 4 10 4H11C11.5523 4 12 4.44772 12 5V14C12 14.5523 11.5523 15 11 15H10C9.44771 15 9 14.5523 9 14V5ZM5 4C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H6C6.55228 10 7 9.55228 7 9V5C7 4.44772 6.55228 4 6 4H5Z",fillRule:"evenodd",clipRule:"evenodd"}],anduin:[{d:"M1 13.2L8 2L15 13.2H12.2L10.8 10.96L9.4 13.2H6.6L5.2 10.96L3.8 13.2H1ZM8 6.41L6.67 8.65L8 10.82L9.33 8.65L8 6.41Z",fillRule:"evenodd",clipRule:"evenodd"}],anduinIntelligence:[{d:"M8.84961 15.4883L7.96973 16L7.0918 15.4932L7.08887 12.7217L4.55664 14.0293L2.74902 12.9854L8.84277 9.83789L8.84961 15.4883Z",fillRule:"",clipRule:""},{d:"M14.9102 11.0088L14.9131 12.0264L14.0352 12.5332L11.6328 11.1494L11.5 13.9971L9.69238 15.041L10.0127 8.18945L14.9102 11.0088Z",fillRule:"",clipRule:""},{d:"M6.83008 9.64844L1.93945 12.4805L1.05664 11.9736V10.96L3.45605 9.57129L1.05664 8.0332V5.94531L6.83008 9.64844Z",fillRule:"",clipRule:""},{d:"M14.9434 4.02637V5.04004L12.5439 6.42871L14.9434 7.9668V10.0547L9.16992 6.35156L14.0605 3.51953L14.9434 4.02637Z",fillRule:"",clipRule:""},{d:"M5.9873 7.81055L1.08984 4.99121L1.08691 3.97363L1.96484 3.4668L4.36719 4.85059L4.5 2.00293L6.30762 0.958984L5.9873 7.81055Z",fillRule:"",clipRule:""},{d:"M8.9082 0.506836L8.91113 3.27832L11.4434 1.9707L13.251 3.01465L7.15723 6.16211L7.15039 0.511719L8.03027 0L8.9082 0.506836Z",fillRule:"",clipRule:""}],archive:[{d:"M1 3C1 2.44772 1.44772 2 2 2H14C14.5523 2 15 2.44772 15 3V4C15 4.55228 14.5523 5 14 5H2C1.44772 5 1 4.55228 1 4V3ZM2 6H14V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V6ZM6.75 8C6.33579 8 6 8.33579 6 8.75C6 9.16421 6.33579 9.5 6.75 9.5H9.25C9.66421 9.5 10 9.16421 10 8.75C10 8.33579 9.66421 8 9.25 8H6.75Z",fillRule:"evenodd",clipRule:"evenodd"}],arrowDown:[{d:"M8.54795 14.765C8.40626 14.915 8.20903 15 8.00269 15C7.79634 15 7.59911 14.915 7.45743 14.765L3.20743 10.265C2.92302 9.96383 2.93658 9.48915 3.23772 9.20474C3.53886 8.92033 4.01354 8.93389 4.29795 9.23503L7.25 12.3607V1.75C7.25 1.33579 7.58579 1 8 1C8.41422 1 8.75 1.33579 8.75 1.75V12.3664L11.7074 9.23503C11.9918 8.93389 12.4665 8.92033 12.7677 9.20474C13.0688 9.48915 13.0824 9.96383 12.7979 10.265L8.54795 14.765Z",fillRule:"",clipRule:""}],arrowDownLeft:[{d:"M9.24792 14.0021C9.66214 14.0021 9.99792 13.6663 9.99792 13.2521C9.99792 12.8379 9.66214 12.5021 9.24792 12.5021H4.55859L13.7803 3.28033C14.0732 2.98744 14.0732 2.51256 13.7803 2.21967C13.4874 1.92678 13.0126 1.92678 12.7197 2.21967L3.49792 11.4414V6.75206C3.49792 6.33785 3.16214 6.00206 2.74792 6.00206C2.33371 6.00206 1.99792 6.33785 1.99792 6.75206V13.2521C1.99792 13.6663 2.33371 14.0021 2.74792 14.0021H9.24792Z",fillRule:"",clipRule:""}],arrowDownRight:[{d:"M6.74999 14.0021C6.33578 14.0021 5.99999 13.6663 5.99999 13.2521C5.99999 12.8379 6.33578 12.5021 6.74999 12.5021H11.4393L2.21759 3.28033C1.9247 2.98744 1.9247 2.51256 2.21759 2.21967C2.51049 1.92678 2.98536 1.92678 3.27825 2.21967L12.5 11.4414V6.75206C12.5 6.33785 12.8358 6.00206 13.25 6.00206C13.6642 6.00206 14 6.33785 14 6.75206V13.2521C14 13.6663 13.6642 14.0021 13.25 14.0021H6.74999Z",fillRule:"",clipRule:""}],arrowHorizontal:[{d:"M0.0569091 7.71291C0.0202391 7.80134 0 7.89831 0 8C0 8.10169 0.0202391 8.19866 0.0569091 8.28709C0.0935089 8.37555 0.147763 8.45842 0.21967 8.53033L3.46967 11.7803C3.76256 12.0732 4.23744 12.0732 4.53033 11.7803C4.82322 11.4874 4.82322 11.0126 4.53033 10.7197L2.56066 8.75H13.4393L11.4697 10.7197C11.1768 11.0126 11.1768 11.4874 11.4697 11.7803C11.7626 12.0732 12.2374 12.0732 12.5303 11.7803L15.7803 8.53033C16.0732 8.23744 16.0732 7.76256 15.7803 7.46967L12.5303 4.21967C12.2374 3.92678 11.7626 3.92678 11.4697 4.21967C11.1768 4.51256 11.1768 4.98744 11.4697 5.28033L13.4393 7.25H2.56066L4.53033 5.28033C4.82322 4.98744 4.82322 4.51256 4.53033 4.21967C4.23744 3.92678 3.76256 3.92678 3.46967 4.21967L0.21967 7.46967C0.147763 7.54158 0.0935089 7.62445 0.0569091 7.71291Z",fillRule:"",clipRule:""}],arrowLeft:[{d:"M1.23772 7.45474C1.0877 7.59643 1.00269 7.79366 1.00269 8C1.00269 8.20635 1.0877 8.40358 1.23772 8.54526L5.73772 12.7953C6.03886 13.0797 6.51354 13.0661 6.79795 12.765C7.08235 12.4638 7.06879 11.9892 6.76765 11.7047L3.64195 8.75269H14.2527C14.6669 8.75269 15.0027 8.4169 15.0027 8.00269C15.0027 7.58847 14.6669 7.25269 14.2527 7.25269H3.63626L6.76765 4.29526C7.06879 4.01085 7.08235 3.53617 6.79795 3.23503C6.51354 2.9339 6.03886 2.92033 5.73772 3.20474L1.23772 7.45474Z",fillRule:"",clipRule:""}],arrowMerge:[{d:"M8 1.00378C8.21262 1.00378 8.41524 1.09403 8.55747 1.25206L10.8075 3.75206C11.0846 4.05994 11.0596 4.53416 10.7517 4.81125C10.4438 5.08835 9.96962 5.06339 9.69253 4.75551L8.7508 3.70914L8.75049 5.37118L8.75078 6.96378C8.75086 7.36986 8.94818 7.75059 9.27993 7.98476L11.8369 9.78965C12.5668 10.3049 13.001 11.1428 13.001 12.0363V14.25C13.001 14.6642 12.6652 15 12.251 15C11.8368 15 11.501 14.6642 11.501 14.25V12.0363C11.501 11.6302 11.3036 11.2493 10.9718 11.0151L8.41491 9.21021C8.26494 9.10436 8.12747 8.98489 8.00367 8.85412C7.88153 8.98403 7.74593 9.1029 7.59804 9.20848L5.02371 11.0463C4.69506 11.2809 4.5 11.6599 4.5 12.0637V14.25C4.5 14.6642 4.16421 15 3.75 15C3.33579 15 3 14.6642 3 14.25V12.0637C3 11.1753 3.42914 10.3417 4.15216 9.82549L6.72648 7.98766C7.05506 7.75309 7.25012 7.37426 7.25019 6.97054L7.25049 5.37144L7.25018 3.70805L6.30747 4.75551C6.03038 5.06339 5.55616 5.08835 5.24828 4.81125C4.94039 4.53416 4.91544 4.05994 5.19253 3.75206L7.44253 1.25206C7.58476 1.09403 7.78738 1.00378 8 1.00378Z",fillRule:"evenodd",clipRule:"evenodd"}],arrowRight:[{d:"M14.7677 8.54526C14.9177 8.40358 15.0027 8.20635 15.0027 8C15.0027 7.79366 14.9177 7.59642 14.7677 7.45474L10.2677 3.20474C9.96651 2.92033 9.49184 2.9339 9.20743 3.23503C8.92302 3.53617 8.93658 4.01085 9.23772 4.29526L12.3634 7.24732H1.75269C1.33847 7.24732 1.00269 7.5831 1.00269 7.99732C1.00269 8.41153 1.33847 8.74732 1.75269 8.74732H12.3691L9.23772 11.7047C8.93658 11.9892 8.92302 12.4638 9.20743 12.765C9.49184 13.0661 9.96651 13.0797 10.2677 12.7953L14.7677 8.54526Z",fillRule:"evenodd",clipRule:"evenodd"}],arrowTopLeft:[{d:"M9.24794 2C9.66215 2 9.99794 2.33579 9.99794 2.75C9.99794 3.16421 9.66215 3.5 9.24794 3.5H4.5586L13.7803 12.7217C14.0732 13.0146 14.0732 13.4895 13.7803 13.7824C13.4874 14.0753 13.0126 14.0753 12.7197 13.7824L3.49794 4.56066V9.25C3.49794 9.66421 3.16215 10 2.74794 10C2.33373 10 1.99794 9.66421 1.99794 9.25V2.75C1.99794 2.33579 2.33373 2 2.74794 2H9.24794Z",fillRule:"evenodd",clipRule:"evenodd"}],arrowTopRight:[{d:"M6.74999 2C6.33578 2 5.99999 2.33579 5.99999 2.75C5.99999 3.16421 6.33578 3.5 6.74999 3.5H11.4393L2.21759 12.7217C1.9247 13.0146 1.9247 13.4895 2.21759 13.7824C2.51049 14.0753 2.98536 14.0753 3.27825 13.7824L12.5 4.56066V9.25C12.5 9.66421 12.8358 10 13.25 10C13.6642 10 14 9.66421 14 9.25V2.75C14 2.33579 13.6642 2 13.25 2H6.74999Z",fillRule:"",clipRule:""}],arrowUp:[{d:"M8.54795 1.23503C8.40626 1.08502 8.20903 1 8.00269 1C7.79634 1 7.59911 1.08502 7.45743 1.23503L3.20743 5.73503C2.92302 6.03617 2.93658 6.51085 3.23772 6.79526C3.53886 7.07967 4.01354 7.06611 4.29795 6.76497L7.25 3.63926V14.25C7.25 14.6642 7.58579 15 8 15C8.41422 15 8.75 14.6642 8.75 14.25V3.63358L11.7074 6.76497C11.9918 7.06611 12.4665 7.07967 12.7677 6.79526C13.0688 6.51085 13.0824 6.03617 12.7979 5.73503L8.54795 1.23503Z",fillRule:"",clipRule:""}],arrowVertical:[{d:"M8.28709 0.0569091C8.19866 0.0202391 8.10169 0 8 0C7.89831 0 7.80134 0.0202391 7.71291 0.0569091C7.62445 0.0935089 7.54158 0.147763 7.46967 0.21967L4.21967 3.46967C3.92678 3.76256 3.92678 4.23744 4.21967 4.53033C4.51256 4.82322 4.98744 4.82322 5.28033 4.53033L7.25 2.56066V13.4393L5.28033 11.4697C4.98744 11.1768 4.51256 11.1768 4.21967 11.4697C3.92678 11.7626 3.92678 12.2374 4.21967 12.5303L7.46967 15.7803C7.76256 16.0732 8.23744 16.0732 8.53033 15.7803L11.7803 12.5303C12.0732 12.2374 12.0732 11.7626 11.7803 11.4697C11.4874 11.1768 11.0126 11.1768 10.7197 11.4697L8.75 13.4393V2.56066L10.7197 4.53033C11.0126 4.82322 11.4874 4.82322 11.7803 4.53033C12.0732 4.23744 12.0732 3.76256 11.7803 3.46967L8.53033 0.21967C8.45842 0.147763 8.37555 0.0935089 8.28709 0.0569091Z",fillRule:"",clipRule:""}],arrows:[{d:"M8.53033 0.21967C8.23744 -0.0732233 7.76256 -0.0732233 7.46967 0.21967L4.96967 2.71967C4.67678 3.01256 4.67678 3.48744 4.96967 3.78033C5.26256 4.07322 5.73744 4.07322 6.03033 3.78033L7.25 2.56066V5.2713C7.25 5.68551 7.58579 6.0213 8 6.0213C8.41421 6.0213 8.75 5.68551 8.75 5.2713V2.56066L9.96967 3.78033C10.2626 4.07322 10.7374 4.07322 11.0303 3.78033C11.3232 3.48744 11.3232 3.01256 11.0303 2.71967L8.53033 0.21967ZM7.71291 15.9431C7.62445 15.9065 7.54158 15.8522 7.46967 15.7803L4.96967 13.2803C4.67678 12.9874 4.67678 12.5126 4.96967 12.2197C5.26256 11.9268 5.73744 11.9268 6.03033 12.2197L7.25 13.4393V10.75C7.25 10.3358 7.58579 10 8 10C8.41421 10 8.75 10.3358 8.75 10.75V13.4393L9.96967 12.2197C10.2626 11.9268 10.7374 11.9268 11.0303 12.2197C11.3232 12.5126 11.3232 12.9874 11.0303 13.2803L8.53078 15.7799L7.71291 15.9431ZM7.71291 15.9431L8.52541 15.7852C8.39009 15.9181 8.20462 16 8 16C7.89831 16 7.80134 15.9798 7.71291 15.9431ZM0.21967 8.53033C-0.0732233 8.23744 -0.0732233 7.76256 0.21967 7.46967L2.71967 4.96967C3.01256 4.67678 3.48744 4.67678 3.78033 4.96967C4.07322 5.26256 4.07322 5.73744 3.78033 6.03033L2.56066 7.25H5.2713C5.68551 7.25 6.0213 7.58579 6.0213 8C6.0213 8.41421 5.68551 8.75 5.2713 8.75H2.56066L3.78033 9.96967C4.07322 10.2626 4.07322 10.7374 3.78033 11.0303C3.48744 11.3232 3.01256 11.3232 2.71967 11.0303L0.21967 8.53033ZM13.2803 4.96967L15.7803 7.46967C16.0732 7.76256 16.0732 8.23744 15.7803 8.53033L13.2803 11.0303C12.9874 11.3232 12.5126 11.3232 12.2197 11.0303C11.9268 10.7374 11.9268 10.2626 12.2197 9.96967L13.4393 8.75L10.75 8.75C10.3358 8.75 10 8.41421 10 8C10 7.58578 10.3358 7.25 10.75 7.25L13.4393 7.25L12.2197 6.03033C11.9268 5.73744 11.9268 5.26256 12.2197 4.96967C12.5126 4.67678 12.9874 4.67678 13.2803 4.96967Z",fillRule:"evenodd",clipRule:"evenodd"}],asterisk:[{d:"M7 3C7 2.44772 7.44772 2 8 2C8.55229 2 9 2.44772 9 3V6.26795L11.8301 4.63397C12.3084 4.35783 12.92 4.5217 13.1962 5C13.4723 5.47829 13.3084 6.08988 12.8301 6.36602L10 8L12.8301 9.63398C13.3084 9.91012 13.4723 10.5217 13.1962 11C12.92 11.4783 12.3084 11.6422 11.8301 11.366L9 9.73205V13C9 13.5523 8.55229 14 8 14C7.44772 14 7 13.5523 7 13V9.73205L4.16988 11.366C3.69158 11.6422 3.07999 11.4783 2.80385 11C2.52771 10.5217 2.69158 9.91011 3.16988 9.63397L6 8L3.16988 6.36603C2.69158 6.08989 2.52771 5.4783 2.80385 5C3.07999 4.52171 3.69158 4.35783 4.16988 4.63398L7 6.26795V3Z",fillRule:"evenodd",clipRule:"evenodd"}],at:[{d:"M5.31756 1.52918C6.74121 0.939492 8.31965 0.836035 9.80808 1.23486C11.2965 1.63368 12.6118 2.5125 13.5498 3.73501C14.4727 4.93773 14.9798 6.40698 14.9959 7.92155C14.9986 7.94733 15 7.9735 15 7.99998V9.00139C15 10.3813 13.8813 11.5 12.5014 11.5C11.67 11.5 10.9335 11.094 10.4793 10.4694C9.84567 11.1056 8.96881 11.4993 8 11.4993C6.0674 11.4993 4.50072 9.93258 4.50072 7.99998C4.50072 6.06738 6.0674 4.5007 8 4.5007C8.74925 4.5007 9.44351 4.73618 10.0128 5.13717C10.0714 4.7814 10.3804 4.51003 10.7528 4.51003C11.167 4.51003 11.5028 4.84582 11.5028 5.26003V9.00139C11.5028 9.55291 11.9499 10 12.5014 10C13.0529 10 13.5 9.55291 13.5 9.00139V8.07083C13.4976 8.04633 13.4963 8.02148 13.4963 7.99634C13.4963 6.7856 13.0968 5.6087 12.3598 4.64815C11.6227 3.68761 10.5893 2.99711 9.41985 2.68375C8.25037 2.37039 7.01017 2.45167 5.89159 2.915C4.77301 3.37833 3.83858 4.19781 3.23321 5.24634C2.62784 6.29487 2.38537 7.51385 2.5434 8.71423C2.70143 9.91461 3.25114 11.0293 4.10726 11.8854C4.96338 12.7415 6.07807 13.2913 7.27845 13.4493C8.16187 13.5656 9.08733 13.3954 9.97956 13.0505C10.3659 12.9011 10.8002 13.0932 10.9495 13.4796C11.0989 13.8659 10.9068 14.3002 10.5204 14.4495C9.46964 14.8558 8.28483 15.0947 7.08266 14.9365C5.55491 14.7353 4.13621 14.0357 3.0466 12.9461C1.95699 11.8565 1.25737 10.4378 1.05623 8.91002C0.855101 7.38227 1.1637 5.83083 1.93417 4.49634C2.70464 3.16185 3.89392 2.11888 5.31756 1.52918ZM8 6.0007C6.89583 6.0007 6.00072 6.89581 6.00072 7.99998C6.00072 9.10416 6.89583 9.99927 8 9.99927C9.10417 9.99927 9.99928 9.10416 9.99928 7.99998C9.99928 6.89581 9.10417 6.0007 8 6.0007Z",fillRule:"evenodd",clipRule:"evenodd"}],attachment:[{d:"M3 3.75C3 1.67893 4.67893 0 6.75 0C8.82107 0 10.5 1.67893 10.5 3.75V10.75C10.5 11.9926 9.49264 13 8.25 13C7.00736 13 6 11.9926 6 10.75V4.75C6 4.33579 6.33579 4 6.75 4C7.16421 4 7.5 4.33579 7.5 4.75V10.75C7.5 11.1642 7.83579 11.5 8.25 11.5C8.66421 11.5 9 11.1642 9 10.75V3.75C9 2.50736 7.99264 1.5 6.75 1.5C5.50736 1.5 4.5 2.50736 4.5 3.75V10.75C4.5 12.8211 6.17893 14.5 8.25 14.5C10.3211 14.5 12 12.8211 12 10.75V4.75C12 4.33579 12.3358 4 12.75 4C13.1642 4 13.5 4.33579 13.5 4.75V10.75C13.5 13.6495 11.1495 16 8.25 16C5.35051 16 3 13.6495 3 10.75V3.75Z",fillRule:"evenodd",clipRule:"evenodd"}],autoTrack:[{d:"M5.92945 0.272593C7.28589 -0.0908646 8.71411 -0.0908644 10.0706 0.272594C11.427 0.636052 12.6639 1.35016 13.6569 2.34315C14.6498 3.33613 15.3639 4.57301 15.7274 5.92945C15.8346 6.32955 15.5972 6.7408 15.1971 6.84801C14.797 6.95521 14.3857 6.71778 14.2785 6.31768C13.9832 5.21557 13.403 4.21061 12.5962 3.40381C11.7894 2.59701 10.7844 2.01679 9.68232 1.72148C8.58021 1.42617 7.41979 1.42617 6.31768 1.72148C5.21557 2.01679 4.21061 2.597 3.40381 3.40381C2.59701 4.21061 2.01679 5.21557 1.72148 6.31768C1.42617 7.41979 1.42617 8.58021 1.72148 9.68232C2.01679 10.7844 2.597 11.7894 3.40381 12.5962C4.21061 13.403 5.21557 13.9832 6.31768 14.2785C6.71778 14.3857 6.95521 14.797 6.84801 15.1971C6.7408 15.5972 6.32955 15.8346 5.92945 15.7274C4.573 15.3639 3.33613 14.6498 2.34315 13.6569C1.35016 12.6639 0.636051 11.427 0.272593 10.0706C-0.0908646 8.71411 -0.0908644 7.28589 0.272594 5.92945C0.636052 4.573 1.35016 3.33613 2.34315 2.34314C3.33613 1.35016 4.57301 0.636051 5.92945 0.272593ZM10.0718 15.6522L8.02207 8.64502C7.91117 8.2659 8.263 7.91394 8.64216 8.0247L15.6517 10.0723C16.1153 10.2078 16.1365 10.8567 15.6826 11.0221L13.0459 11.9826L15.8567 14.7893C16.0525 14.9849 16.0522 15.3023 15.8561 15.4975L15.498 15.8538C15.3025 16.0483 14.9865 16.0478 14.7916 15.8527L11.9832 13.0411L11.0216 15.6829C10.8564 16.1367 10.2074 16.1158 10.0718 15.6522ZM9.13627 3.62494C8.37328 3.42049 7.5699 3.42049 6.8069 3.62494C6.0439 3.82938 5.34816 4.23107 4.78961 4.78962C4.23105 5.34818 3.82937 6.04392 3.62492 6.80692C3.42048 7.56992 3.42048 8.37329 3.62492 9.13629C3.82937 9.89929 4.23105 10.595 4.78961 11.1536C5.1159 11.4799 5.48901 11.7526 5.89499 11.9638C6.26246 12.155 6.71531 12.012 6.90646 11.6445C7.09761 11.2771 6.95467 10.8242 6.58719 10.6331C6.31653 10.4923 6.06779 10.3105 5.85027 10.0929C5.4779 9.72055 5.21011 9.25673 5.07381 8.74806C4.93751 8.23939 4.93751 7.70381 5.07381 7.19515C5.21011 6.68648 5.4779 6.22265 5.85027 5.85028C6.22264 5.47791 6.68647 5.21012 7.19513 5.07383C7.7038 4.93753 8.23938 4.93753 8.74805 5.07383C9.25671 5.21012 9.72054 5.47791 10.0929 5.85028C10.3146 6.07196 10.4992 6.32606 10.6411 6.60274C10.8301 6.97132 11.2821 7.11689 11.6507 6.92789C12.0193 6.73889 12.1648 6.28688 11.9758 5.9183C11.763 5.5033 11.4861 5.12215 11.1536 4.78962C10.595 4.23107 9.89927 3.82938 9.13627 3.62494Z",fillRule:"evenodd",clipRule:"evenodd"}],bell:[{d:"M8 1C5.23858 1 3 3.23858 3 6V7.67157C3 8.20201 2.78929 8.71071 2.41421 9.08579L1.87868 9.62132C1.31607 10.1839 1 10.947 1 11.7426V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V11.7426C15 10.947 14.6839 10.1839 14.1213 9.62132L13.5858 9.08579C13.2107 8.71071 13 8.20201 13 7.67157V6C13 3.23858 10.7614 1 8 1ZM8 16C9.10457 16 10 15.1046 10 14H6C6 15.1046 6.89543 16 8 16Z",fillRule:"evenodd",clipRule:"evenodd"}],bellOff:[{d:"M8 1C5.23858 1 3 3.23858 3 6V7.67157C3 8.20201 2.78929 8.71071 2.41421 9.08579L1.87868 9.62132C1.31607 10.1839 1 10.947 1 11.7426V12C1 12.1582 1.03673 12.3078 1.10213 12.4408L11.2996 2.24326C10.4192 1.46932 9.26439 1 8 1ZM12.4238 2.51556C12.4042 2.54681 12.3807 2.57636 12.3536 2.60355L1.13138 13.8257C0.930538 14.1179 0.95997 14.5206 1.21967 14.7803C1.51256 15.0732 1.98744 15.0732 2.28033 14.7803L4.06066 13H14C14.5523 13 15 12.5523 15 12V11.7426C15 10.947 14.6839 10.1839 14.1213 9.62132L13.5858 9.08579C13.2107 8.71071 13 8.20201 13 7.67157V6C13 5.41888 12.9009 4.86091 12.7186 4.34209L14.7803 2.28033C15.0732 1.98744 15.0732 1.51256 14.7803 1.21967C14.4874 0.926777 14.0126 0.926777 13.7197 1.21967L12.4238 2.51556ZM8 16C9.10457 16 10 15.1046 10 14H6C6 15.1046 6.89543 16 8 16Z",fillRule:"evenodd",clipRule:"evenodd"}],blank:[{d:"",fillRule:"",clipRule:""}],bold:[{d:"M3 2C3 1.44772 3.44772 1 4 1H9C11.2091 1 13 2.79086 13 5C13 5.98196 12.6462 6.88128 12.059 7.57741C13.2224 8.28109 14 9.55829 14 11.0171C14 13.2357 12.2015 15.0342 9.98288 15.0342H4C3.44772 15.0342 3 14.5865 3 14.0342V2ZM5 9V13.0342H9.98288C11.0969 13.0342 12 12.1311 12 11.0171C12 9.9031 11.0969 9 9.98288 9H5ZM5 7H9C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3H5V7Z",fillRule:"evenodd",clipRule:"evenodd"}],bookmark:[{d:"M3 15.4998V2C3 0.895431 3.89543 0 5 0H11C12.1046 0 13 0.895431 13 2V15.4998C13 15.9365 12.4795 16.1633 12.1596 15.866L8 12L3.84039 15.866C3.52052 16.1633 3 15.9365 3 15.4998Z",fillRule:"evenodd",clipRule:"evenodd"}],brush:[{d:"M14.4106 1.59369C14.2141 1.39686 13.9796 1.24273 13.7216 1.14084C13.4637 1.03894 13.1878 0.991441 12.9109 1.00126C12.6342 1.00885 12.362 1.07348 12.111 1.19118C11.86 1.30888 11.6357 1.47715 11.4517 1.68562L6.13269 7.6382C6.60427 7.84591 7.03345 8.13981 7.39797 8.50523C7.79645 8.90468 8.10929 9.38119 8.31737 9.90564C8.32808 9.93263 8.3385 9.95973 8.34864 9.98692L14.3194 4.57624C14.525 4.39198 14.6912 4.16745 14.808 3.91633C14.9247 3.66522 14.9895 3.39278 14.9983 3.11561C15.0095 2.83482 14.9631 2.55474 14.8619 2.29287C14.7608 2.031 14.6072 1.79298 14.4106 1.59369ZM6.39191 13.5989L6.40996 13.5808C4.99565 14.9859 2.68776 15.5184 1.16668 14.3884C0.949759 14.2272 0.954775 13.9162 1.12268 13.7045C1.85699 12.7785 1.78858 12.0732 1.72517 11.4196C1.66337 10.7825 1.60633 10.1944 2.30191 9.49886C2.56529 9.20546 2.88574 8.96886 3.24366 8.8035C3.60159 8.63814 3.98947 8.54751 4.38361 8.53714C4.77775 8.52676 5.16986 8.59687 5.53599 8.74317C5.90211 8.88947 6.23456 9.10889 6.51302 9.38803C6.79147 9.66716 7.01008 10.0001 7.15549 10.3666C7.30089 10.7331 7.37004 11.1254 7.35871 11.5195C7.34737 11.9136 7.25579 12.3013 7.08956 12.6588C6.92333 13.0163 6.68594 13.3362 6.39191 13.5989Z",fillRule:"evenodd",clipRule:"evenodd"}],button:[{d:"M2 4.5H14C14.2761 4.5 14.5 4.72386 14.5 5V11C14.5 11.2761 14.2761 11.5 14 11.5H2C1.72386 11.5 1.5 11.2761 1.5 11V5C1.5 4.72386 1.72386 4.5 2 4.5ZM0 5C0 3.89543 0.895431 3 2 3H14C15.1046 3 16 3.89543 16 5V11C16 12.1046 15.1046 13 14 13H2C0.895431 13 0 12.1046 0 11V5ZM4.75 7.25C4.33579 7.25 4 7.58579 4 8C4 8.41421 4.33579 8.75 4.75 8.75H11.25C11.6642 8.75 12 8.41421 12 8C12 7.58579 11.6642 7.25 11.25 7.25H4.75Z",fillRule:"evenodd",clipRule:"evenodd"}],calendar:[{d:"M4 7.75C4 7.33579 4.33579 7 4.75 7H11.25C11.6642 7 12 7.33579 12 7.75C12 8.16421 11.6642 8.5 11.25 8.5H4.75C4.33579 8.5 4 8.16421 4 7.75ZM4.75 10C4.33579 10 4 10.3358 4 10.75C4 11.1642 4.33579 11.5 4.75 11.5H9.25C9.66421 11.5 10 11.1642 10 10.75C10 10.3358 9.66421 10 9.25 10H4.75ZM3 1C3 0.447715 3.44772 0 4 0C4.55228 0 5 0.447715 5 1H11C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3C1 1.89543 1.89543 1 3 1ZM2.5 5V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V5H2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],card:[{d:"M2 1C0.895431 1 0 1.89543 0 3V12.9998C0 14.1043 0.895431 14.9998 2 14.9998H14C15.1046 14.9998 16 14.1043 16 12.9998V3C16 1.89543 15.1046 1 14 1H2ZM14 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V12.9998C1.5 13.2759 1.72386 13.4998 2 13.4998H14C14.2761 13.4998 14.5 13.2759 14.5 12.9998V3C14.5 2.72386 14.2761 2.5 14 2.5ZM3.75 4C3.33579 4 3 4.33579 3 4.75C3 5.16421 3.33579 5.5 3.75 5.5H6.25C6.66421 5.5 7 5.16421 7 4.75C7 4.33579 6.66421 4 6.25 4H3.75ZM3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H11.25C11.6642 6.5 12 6.83579 12 7.25C12 7.66421 11.6642 8 11.25 8H3.75C3.33579 8 3 7.66421 3 7.25ZM4 9.5C3.44772 9.5 3 9.94771 3 10.5V11C3 11.5523 3.44772 12 4 12H8C8.55228 12 9 11.5523 9 11V10.5C9 9.94771 8.55228 9.5 8 9.5H4Z",fillRule:"evenodd",clipRule:"evenodd"}],caretDown:[{d:"M11.8784 6.825L8.75941 10.651C8.36041 11.117 7.63941 11.117 7.24041 10.651L4.12141 6.825C3.84341 6.501 4.07341 6 4.50141 6H11.4994C11.9264 6 12.1564 6.501 11.8784 6.825Z",fillRule:"evenodd",clipRule:"evenodd"}],caretHorizontal:[{d:"M1.34875 7.24044L5.17475 4.12144C5.49975 3.84344 6.00075 4.07344 6.00075 4.50044V11.4984C6.00075 11.9264 5.49975 12.1564 5.17475 11.8784L1.34875 8.75944C0.88375 8.36044 0.88375 7.63944 1.34875 7.24044ZM10.8249 4.12164L14.6509 7.24064C15.1159 7.63964 15.1159 8.36064 14.6509 8.75964L10.8249 11.8786C10.5009 12.1566 9.99985 11.9266 9.99985 11.4986V4.50064C9.99985 4.07364 10.5009 3.84364 10.8249 4.12164Z",fillRule:"evenodd",clipRule:"evenodd"}],caretLeft:[{d:"M9.1755 11.8784L5.3495 8.75941C4.8835 8.36041 4.8835 7.63941 5.3495 7.24041L9.1755 4.12141C9.4995 3.84341 10.0005 4.07341 10.0005 4.50141V11.4994C10.0005 11.9264 9.4995 12.1564 9.1755 11.8784Z",fillRule:"evenodd",clipRule:"evenodd"}],caretRight:[{d:"M6.825 4.12144L10.651 7.24044C11.117 7.63944 11.117 8.36044 10.651 8.75944L6.825 11.8784C6.501 12.1564 6 11.9264 6 11.4984V4.50044C6 4.07344 6.501 3.84344 6.825 4.12144Z",fillRule:"evenodd",clipRule:"evenodd"}],caretUp:[{d:"M4.12144 9.1755L7.24044 5.3495C7.63944 4.8835 8.36044 4.8835 8.75944 5.3495L11.8784 9.1755C12.1564 9.4995 11.9264 10.0005 11.4984 10.0005H4.50044C4.07344 10.0005 3.84344 9.4995 4.12144 9.1755Z",fillRule:"evenodd",clipRule:"evenodd"}],caretVertical:[{d:"M11.4989 6.0005H4.50088C4.07388 6.0005 3.84288 5.4995 4.12188 5.1745L7.24088 1.3495C7.63988 0.8835 8.35988 0.8835 8.75888 1.3495L11.8779 5.1745C12.1569 5.4995 11.9259 6.0005 11.4989 6.0005ZM4.50098 9.9995H11.499C11.926 9.9995 12.157 10.5005 11.878 10.8255L8.75898 14.6505C8.35998 15.1165 7.63998 15.1165 7.24098 14.6505L4.12198 10.8255C3.84298 10.5005 4.07398 9.9995 4.50098 9.9995Z",fillRule:"evenodd",clipRule:"evenodd"}],channel:[{d:"M12.4793 1.92502C12.576 1.52224 12.3278 1.11736 11.925 1.0207C11.5223 0.924032 11.1174 1.17218 11.0207 1.57496L10.1987 5H6.7413L7.47929 1.92503C7.57596 1.52225 7.32781 1.11738 6.92503 1.02071C6.52226 0.924043 6.11738 1.17219 6.02071 1.57497L5.1987 5H3C2.58579 5 2.25 5.33579 2.25 5.75C2.25 6.16421 2.58579 6.5 3 6.5H4.8387L4.1128 9.5246H1.99991C1.58569 9.5246 1.24991 9.86038 1.24991 10.2746C1.24991 10.6888 1.58569 11.0246 1.99991 11.0246H3.7528L3.02071 14.075C2.92404 14.4777 3.1722 14.8826 3.57497 14.9793C3.97775 15.076 4.38263 14.8278 4.47929 14.425L5.2954 11.0246H8.7528L8.02071 14.075C7.92404 14.4777 8.1722 14.8826 8.57497 14.9793C8.97775 15.0759 9.38263 14.8278 9.47929 14.425L10.2954 11.0246H12.2499C12.6641 11.0246 12.9999 10.6888 12.9999 10.2746C12.9999 9.86038 12.6641 9.5246 12.2499 9.5246H10.6554L11.3813 6.5H13.25C13.6642 6.5 14 6.16421 14 5.75C14 5.33579 13.6642 5 13.25 5H11.7413L12.4793 1.92502ZM9.1128 9.5246L9.8387 6.5H6.3813L5.6554 9.5246H9.1128Z",fillRule:"evenodd",clipRule:"evenodd"}],chartBarHorizontal:[{d:"M14 6C14.5523 6 15 6.44772 15 7V8C15 8.55228 14.5523 9 14 9H5C4.44771 9 4 8.55228 4 8V7C4 6.44772 4.44772 6 5 6H14ZM12 11C12 10.4477 11.5523 10 11 10H5C4.44771 10 4 10.4477 4 11V12C4 12.5523 4.44771 13 5 13H11C11.5523 13 12 12.5523 12 12V11ZM2.5 1.75C2.5 1.33579 2.16421 1 1.75 1C1.33579 1 1 1.33579 1 1.75V14.25C1 14.6642 1.33579 15 1.75 15C2.16421 15 2.5 14.6642 2.5 14.25V1.75ZM10 3C10 2.44772 9.55228 2 9 2H5C4.44772 2 4 2.44772 4 3V4C4 4.55228 4.44772 5 5 5H9C9.55228 5 10 4.55228 10 4V3Z",fillRule:"evenodd",clipRule:"evenodd"}],chartBarVertical:[{d:"M6 2C6 1.44771 6.44772 1 7 1H8C8.55228 1 9 1.44772 9 2V11C9 11.5523 8.55228 12 8 12H7C6.44772 12 6 11.5523 6 11V2ZM11 4C10.4477 4 10 4.44772 10 5V11C10 11.5523 10.4477 12 11 12H12C12.5523 12 13 11.5523 13 11V5C13 4.44772 12.5523 4 12 4H11ZM1.75 13.5C1.33579 13.5 1 13.8358 1 14.25C1 14.6642 1.33579 15 1.75 15H14.25C14.6642 15 15 14.6642 15 14.25C15 13.8358 14.6642 13.5 14.25 13.5H1.75ZM3 6C2.44772 6 2 6.44772 2 7V11C2 11.5523 2.44772 12 3 12H4C4.55228 12 5 11.5523 5 11V7C5 6.44772 4.55228 6 4 6H3Z",fillRule:"evenodd",clipRule:"evenodd"}],chartDonut:[{d:"M3.65779 8.75026C3.89797 8.75026 4.10097 8.92235 4.17005 9.15239C4.6647 10.7995 6.19133 12 7.99953 12.0003C8.68483 12.0003 9.33009 11.8275 9.89398 11.5237C10.1054 11.4098 10.3705 11.4317 10.5403 11.6015L12.7119 13.7732C12.9202 13.9815 12.9048 14.325 12.6658 14.497C11.3523 15.4423 9.7412 16.0003 7.99953 16.0003C4.02239 16 0.724913 13.0971 0.106168 9.29482C0.0588771 9.00421 0.290877 8.75026 0.585313 8.75026H3.65779Z",fillRule:"evenodd",clipRule:"evenodd"},{d:"M8.74953 0.585019C8.74953 0.290602 9.00344 0.0586084 9.29404 0.105868C13.0969 0.724321 15.9995 4.02261 15.9995 8.00026C15.9995 9.74229 15.4427 11.354 14.4973 12.6676C14.3252 12.9066 13.9817 12.9219 13.7735 12.7137L11.6009 10.5411C11.431 10.3712 11.4091 10.1061 11.5231 9.89467C11.827 9.33081 11.9995 8.68578 11.9995 8.00026C11.9995 6.19154 10.7994 4.66338 9.15177 4.16878C8.92169 4.09972 8.74953 3.89669 8.74953 3.65646V0.585019Z",fillRule:"evenodd",clipRule:"evenodd"},{d:"M7.24953 3.65656C7.24953 3.89675 7.07747 4.09973 6.84744 4.16885C5.56523 4.55411 4.55489 5.56562 4.16999 6.8481C4.10094 7.07817 3.89793 7.25026 3.65772 7.25026H0.58527C0.29085 7.25026 0.0588489 6.99638 0.106113 6.70578C0.656021 3.32472 3.32407 0.65621 6.705 0.105937C6.99561 0.0586373 7.24953 0.290644 7.24953 0.585084V3.65656Z",fillRule:"evenodd",clipRule:"evenodd"}],chartLine:[{d:"M1.75098 1C2.16486 1.00026 2.50081 1.33609 2.50098 1.75V9.40332L5.28125 6.4502L5.33691 6.39648C5.47343 6.27852 5.6489 6.21299 5.83105 6.21387C6.03892 6.21495 6.23688 6.30239 6.37793 6.45508L8.7832 9.06055L12.9883 3.74805C13.2454 3.4233 13.7172 3.36896 14.042 3.62598C14.3668 3.88307 14.4221 4.35491 14.165 4.67969L9.41504 10.6797C9.27896 10.8514 9.07443 10.9546 8.85547 10.9629C8.63651 10.9712 8.42504 10.8836 8.27637 10.7227L5.82129 8.0625L2.50098 11.5908V13.4912L14.252 13.5C14.6656 13.5008 15.0011 13.8372 15.001 14.251C15.0004 14.6648 14.6638 15 14.25 15L1.75 14.9912C1.33633 14.9907 1.00022 14.6549 1 14.2412V1.75C1.00016 1.33593 1.33686 1 1.75098 1Z",fillRule:"evenodd",clipRule:"evenodd"}],chartPie:[{d:"M15.4291 4.62987C15.806 5.53982 16 6.51509 16 7.5H8.5V0C9.48492 0 10.4602 0.193993 11.3701 0.570903C12.2801 0.947814 13.1069 1.50026 13.8033 2.1967C14.4997 2.89314 15.0522 3.71993 15.4291 4.62987ZM12.8203 12.889C13.5895 11.7378 14 10.3845 14 9H7V2C5.61553 2 4.26216 2.41054 3.11101 3.17971C1.95987 3.94888 1.06266 5.04213 0.532846 6.32122C0.00303298 7.6003 -0.13559 9.00776 0.134506 10.3656C0.404603 11.7235 1.07129 12.9708 2.05026 13.9497C3.02922 14.9287 4.2765 15.5954 5.63437 15.8655C6.99224 16.1356 8.3997 15.997 9.67879 15.4672C10.9579 14.9373 12.0511 14.0401 12.8203 12.889Z",fillRule:"evenodd",clipRule:"evenodd"}],chartProgress:[{d:"M5 2.5C5 1.67157 5.67157 1 6.5 1H12.5C13.3284 1 14 1.67157 14 2.5C14 3.32843 13.3284 4 12.5 4H6.5C5.67157 4 5 3.32843 5 2.5ZM1 7.5C1 6.67157 1.67157 6 2.5 6H8.5C9.32843 6 10 6.67157 10 7.5C10 8.32843 9.32843 9 8.5 9H2.5C1.67157 9 1 8.32843 1 7.5ZM7.5 11C6.67157 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14H13.5C14.3284 14 15 13.3284 15 12.5C15 11.6716 14.3284 11 13.5 11H7.5Z",fillRule:"evenodd",clipRule:"evenodd"}],chartProgressBar:[{d:"M13 9C14.1046 9 15 9.89543 15 11V13C15 14.0357 14.2128 14.887 13.2041 14.9893L13 15H3L2.7959 14.9893C1.85435 14.8938 1.1062 14.1457 1.01074 13.2041L1 13V11C1 9.89543 1.89543 9 3 9H13ZM10 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V11C13.5 10.7239 13.2761 10.5 13 10.5H10V13.5Z",fillRule:"evenodd",clipRule:"evenodd"},{d:"M13 1C14.1046 1 15 1.89543 15 3V5C15 6.03565 14.2128 6.887 13.2041 6.98926L13 7H3L2.7959 6.98926C1.85435 6.8938 1.1062 6.14565 1.01074 5.2041L1 5V3C1 1.89543 1.89543 1 3 1H13ZM6 5.5H13C13.2761 5.5 13.5 5.27614 13.5 5V3C13.5 2.72386 13.2761 2.5 13 2.5H6V5.5Z",fillRule:"evenodd",clipRule:"evenodd"}],chartValue:[{d:"M11.75 6.5C11.9489 6.49795 12.1396 6.57518 12.2803 6.71582C12.4209 6.85643 12.5 7.04906 12.5 7.25C12.5 7.45094 12.4209 7.64357 12.2803 7.78418C12.1396 7.92483 11.9489 8.00205 11.75 8C11.6723 7.99921 11.5943 7.99884 11.5166 7.99805C10.9613 7.99241 10.4059 7.98611 9.85059 7.98047C9.82084 8.2627 9.7905 8.54492 9.76074 8.82715C10.179 8.68493 10.6451 8.6303 11.126 8.75391C11.9572 8.91313 12.7025 9.87111 12.6562 10.7285C12.6729 11.2873 12.4882 11.9599 11.998 12.4209C11.5129 12.8862 10.8656 13.0448 10.3154 13.0518C9.72521 13.0607 9.1729 12.8256 8.75488 12.4619C8.60919 12.3326 8.47534 12.1964 8.34473 11.9844C8.24033 11.8151 8.20838 11.6123 8.25879 11.4199C8.30914 11.2277 8.43765 11.0608 8.61328 10.958C8.78908 10.8552 8.99809 10.8255 9.19043 10.876C9.38254 10.9264 9.5434 11.0528 9.63965 11.2266C9.64562 11.2451 9.69357 11.3113 9.74609 11.3613C9.90784 11.5189 10.1208 11.6156 10.3154 11.6221C10.9766 11.6287 11.3092 11.3685 11.3438 10.7285C11.3532 10.317 11.1904 10.0646 10.79 9.9209C10.4666 9.81041 10.0323 9.76819 9.60059 9.87305C9.51249 9.89429 9.42522 9.92273 9.33887 9.95605C9.21599 10.024 9.07581 10.0553 8.93457 10.042C8.75095 10.0245 8.58077 9.9353 8.46191 9.79297C8.34322 9.65067 8.28521 9.46694 8.30078 9.2832C8.30733 9.20608 8.31377 9.12888 8.32031 9.05176C8.37322 8.42857 8.42561 7.80483 8.47852 7.18164C8.50994 6.81171 8.82895 6.53014 9.2002 6.52637C9.97233 6.51852 10.7445 6.5098 11.5166 6.50195C11.5943 6.50116 11.6723 6.50079 11.75 6.5Z",fillRule:"evenodd",clipRule:"evenodd"},{d:"M6.74805 6.5C7.16209 6.50019 7.49803 6.83592 7.49805 7.25V8C7.49804 8.12212 7.46818 8.24262 7.41113 8.35059L5.16309 12.6006C4.96945 12.9667 4.51555 13.1067 4.14941 12.9131C3.7833 12.7194 3.64334 12.2656 3.83691 11.8994L5.89941 8H3.75C3.33579 8 3.00001 7.6642 3 7.25C3.00002 6.8358 3.3358 6.5 3.75 6.5H6.74805Z",fillRule:"evenodd",clipRule:"evenodd"},{d:"M7.5 3C7.77614 3 8 3.22386 8 3.5V4C8 4.27614 7.77614 4.5 7.5 4.5H3.5C3.22386 4.5 3 4.27614 3 4V3.5C3 3.22386 3.22386 3 3.5 3H7.5Z",fillRule:"evenodd",clipRule:"evenodd"},{d:"M14 0C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2C0 0.895431 0.895431 0 2 0H14ZM2 1.5C1.72386 1.5 1.5 1.72386 1.5 2V14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V2C14.5 1.72386 14.2761 1.5 14 1.5H2Z",fillRule:"evenodd",clipRule:"evenodd"}],check:[{d:"M14.6643 3.25271C15.0772 3.6197 15.1143 4.25178 14.7471 4.6645L6.74009 13.6645C6.55686 13.8705 6.29671 13.9917 6.02108 13.9996C5.74544 14.0075 5.47877 13.9014 5.28403 13.7063L1.29218 9.70669C0.901926 9.31568 0.902708 8.68252 1.29393 8.29248C1.68514 7.90243 2.31865 7.90322 2.7089 8.29422L5.95055 11.5421L13.2517 3.33552C13.6189 2.9228 14.2514 2.88573 14.6643 3.25271Z",fillRule:"evenodd",clipRule:"evenodd"}],checkBold:[{d:"M12.6431 4.23195C13.0673 4.58562 13.1245 5.2162 12.7708 5.64039L7.76806 11.6404C7.58798 11.8564 7.32529 11.9865 7.04437 11.999C6.76344 12.0115 6.49025 11.9051 6.29174 11.7059L3.30204 8.70638C2.91216 8.31521 2.91321 7.68205 3.30437 7.29217C3.69554 6.90229 4.32871 6.90333 4.71859 7.2945L6.93418 9.51741L11.2347 4.3596C11.5884 3.93542 12.219 3.87827 12.6431 4.23195Z",fillRule:"evenodd",clipRule:"evenodd"}],checkCircle:[{d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.8433 6.2127C12.0967 5.88502 12.0365 5.41398 11.7088 5.1606C11.3811 4.90722 10.9101 4.96744 10.6567 5.29512L6.95638 10.0804L5.30747 8.24827C5.03037 7.94039 4.55616 7.91544 4.24827 8.19253C3.94039 8.46963 3.91544 8.94384 4.19253 9.25173L6.44254 11.7517C6.59131 11.917 6.80575 12.0078 7.02798 11.9995C7.2502 11.9912 7.45729 11.8847 7.59332 11.7088L11.8433 6.2127Z",fillRule:"evenodd",clipRule:"evenodd"}],checkCircleLine:[{d:"M11.8433 6.2127C12.0967 5.88502 12.0365 5.41398 11.7088 5.1606C11.3811 4.90722 10.9101 4.96744 10.6567 5.29512L6.95636 10.0804L5.30746 8.24827C5.03036 7.94039 4.55614 7.91544 4.24826 8.19253C3.94038 8.46963 3.91542 8.94384 4.19252 9.25173L6.44253 11.7517C6.5913 11.917 6.80574 12.0078 7.02796 11.9995C7.25019 11.9912 7.45727 11.8847 7.59331 11.7088L11.8433 6.2127ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z",fillRule:"evenodd",clipRule:"evenodd"}],checkDouble:[{d:"M15.743,4.19212 C16.0532,4.46655 16.0822,4.94054 15.8078,5.25079 L10.0617,11.7469 C9.91425,11.9136 9.70034,12.0062 9.47786,11.9997 C9.25537,11.9931 9.04729,11.8881 8.90989,11.7129 L7.58643,10.0261 L8.59681,8.88388 L9.53447,10.079 L14.6843,4.25698 C14.9587,3.94672 15.4327,3.91768 15.743,4.19212 Z M8.68433,4.257 C8.95876,3.94674 9.43275,3.9177 9.743,4.19214 C10.0533,4.46657 10.0823,4.94056 9.80786,5.25081 L9.80786,5.25081 L4.06177,11.7469 C3.9143,11.9136 3.70039,12.0062 3.47791,11.9997 C3.25542,11.9931 3.04734,11.8881 2.90994,11.713 L2.90994,11.713 L0.163849,8.21296 C-0.0918356,7.88708 -0.0349312,7.41563 0.290949,7.15994 C0.61683,6.90426 1.08828,6.96116 1.34397,7.28704 L1.34397,7.28704 L3.53452,10.079 Z",fillRule:"evenodd",clipRule:"evenodd"}],checkList:[{d:"M5.1715 0.0885C5.0535 -0.0295 4.8635 -0.0295 4.7455 0.0885L2.3185 2.4135L1.1725 1.4205C1.0555 1.3025 0.8645 1.3025 0.7465 1.4205L0.0885 2.0795C-0.0295 2.1965 -0.0295 2.3875 0.0885 2.5045L1.9655 4.2295C2.1605 4.4245 2.4775 4.4245 2.6725 4.2295L5.8305 1.1725C5.9475 1.0555 5.9475 0.8655 5.8305 0.7475L5.1715 0.0885ZM15.7003 1.2379H8.3003C8.1343 1.2379 8.0003 1.3729 8.0003 1.5379V2.8389C8.0003 3.0039 8.1343 3.1379 8.3003 3.1379H15.7003C15.8663 3.1379 16.0003 3.0039 16.0003 2.8389V1.5379C16.0003 1.3729 15.8663 1.2379 15.7003 1.2379ZM5.1715 5.9005C5.0535 5.7825 4.8635 5.7825 4.7455 5.9005L2.3185 8.2255L1.1725 7.2325C1.0555 7.1145 0.8645 7.1145 0.7465 7.2325L0.0885 7.8915C-0.0295 8.0085 -0.0295 8.1995 0.0885 8.3175L1.9655 10.0415C2.1605 10.2365 2.4775 10.2365 2.6725 10.0415L5.8305 6.9855C5.9475 6.8675 5.9475 6.6775 5.8305 6.5595L5.1715 5.9005ZM15.7003 7.0499H8.3003C8.1343 7.0499 8.0003 7.1839 8.0003 7.3499V8.6509C8.0003 8.8159 8.1343 8.9499 8.3003 8.9499H15.7003C15.8663 8.9499 16.0003 8.8159 16.0003 8.6509V7.3499C16.0003 7.1839 15.8663 7.0499 15.7003 7.0499ZM5.1715 11.713C5.0535 11.595 4.8635 11.595 4.7455 11.713L2.3185 14.037L1.1725 13.045C1.0555 12.927 0.8645 12.927 0.7465 13.045L0.0885 13.704C-0.0295 13.821 -0.0295 14.011 0.0885 14.129L1.9655 15.854C2.1605 16.049 2.4775 16.049 2.6725 15.854L5.8305 12.797C5.9475 12.68 5.9475 12.489 5.8305 12.372L5.1715 11.713ZM15.7003 12.8624H8.3003C8.1343 12.8624 8.0003 12.9964 8.0003 13.1624V14.4624C8.0003 14.6284 8.1343 14.7624 8.3003 14.7624H15.7003C15.8663 14.7624 16.0003 14.6284 16.0003 14.4624V13.1624C16.0003 12.9964 15.8663 12.8624 15.7003 12.8624Z",fillRule:"evenodd",clipRule:"evenodd"}],checkSmall:[{d:"M12.7511 4.19237C13.0612 4.46695 13.09 4.94095 12.8154 5.25108L7.06407 11.7472C6.9166 11.9137 6.7028 12.0062 6.48043 11.9997C6.25806 11.9931 6.05008 11.8882 5.91268 11.7132L3.16406 8.21323C2.90823 7.88746 2.96492 7.41599 3.29069 7.16016C3.61645 6.90433 4.08793 6.96102 4.34376 7.28679L6.53703 10.0796L11.6924 4.25675C11.9669 3.94662 12.4409 3.9178 12.7511 4.19237Z",fillRule:"evenodd",clipRule:"evenodd"}],checkbox:[{d:"M3 2.5H9C9.27614 2.5 9.5 2.72386 9.5 3V3.5H11V3C11 1.89543 10.1046 1 9 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H3.5V9.5H3C2.72386 9.5 2.5 9.27614 2.5 9V3C2.5 2.72386 2.72386 2.5 3 2.5ZM12.636 8.39751C12.8555 8.04626 12.7487 7.58354 12.3975 7.36401C12.0462 7.14448 11.5835 7.25126 11.364 7.60251L9.4437 10.675L8.59998 9.55001C8.35145 9.21864 7.88135 9.15148 7.54998 9.40001C7.21861 9.64854 7.15145 10.1186 7.39998 10.45L8.89998 12.45C9.04836 12.6479 9.28473 12.7598 9.53181 12.7493C9.77889 12.7388 10.0049 12.6072 10.136 12.3975L12.636 8.39751ZM7 5C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H7ZM13 6.5H7C6.72386 6.5 6.5 6.72386 6.5 7V13C6.5 13.2761 6.72386 13.5 7 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V7C13.5 6.72386 13.2761 6.5 13 6.5Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleDown:[{d:"M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM11.7996 7.26034C12.0814 6.95681 12.0639 6.48226 11.7603 6.20041C11.4568 5.91855 10.9823 5.93613 10.7004 6.23966L8 9.14779L5.29959 6.23966C5.01774 5.93613 4.54319 5.91855 4.23966 6.20041C3.93613 6.48226 3.91855 6.95681 4.2004 7.26034L7.45041 10.7603C7.59231 10.9132 7.79145 11 8 11C8.20855 11 8.40769 10.9132 8.54959 10.7603L11.7996 7.26034Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleLeft:[{d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.73966 11.7996C9.04319 12.0814 9.51774 12.0639 9.79959 11.7603C10.0814 11.4568 10.0639 10.9823 9.76034 10.7004L6.85221 8L9.76034 5.29959C10.0639 5.01774 10.0814 4.54319 9.79959 4.23966C9.51774 3.93613 9.04319 3.91855 8.73966 4.2004L5.23966 7.45041C5.08684 7.59231 5 7.79145 5 8C5 8.20855 5.08684 8.40769 5.23966 8.54959L8.73966 11.7996Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleLineDown:[{d:"M11.7996 7.26034C12.0814 6.95681 12.0639 6.48226 11.7603 6.20041C11.4568 5.91855 10.9823 5.93613 10.7004 6.23966L8 9.14779L5.29959 6.23966C5.01774 5.93613 4.54319 5.91855 4.23966 6.20041C3.93613 6.48226 3.91855 6.95681 4.2004 7.26034L7.45041 10.7603C7.59231 10.9132 7.79145 11 8 11C8.20855 11 8.40769 10.9132 8.54959 10.7603L11.7996 7.26034ZM16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleLineLeft:[{d:"M8.73966 11.7996C9.0432 12.0814 9.51774 12.0639 9.79959 11.7603C10.0814 11.4568 10.0639 10.9823 9.76034 10.7004L6.85221 8L9.76034 5.29959C10.0639 5.01774 10.0814 4.54319 9.79959 4.23966C9.51774 3.93613 9.0432 3.91855 8.73966 4.2004L5.23966 7.45041C5.08684 7.59231 5 7.79145 5 8C5 8.20855 5.08684 8.40769 5.23966 8.54959L8.73966 11.7996ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleLineRight:[{d:"M7.26034 4.20041C6.95681 3.91855 6.48226 3.93613 6.20041 4.23966C5.91855 4.54319 5.93613 5.01774 6.23966 5.29959L9.14779 8L6.23966 10.7004C5.93613 10.9823 5.91855 11.4568 6.20041 11.7603C6.48226 12.0639 6.95681 12.0814 7.26034 11.7996L10.7603 8.54959C10.9132 8.40769 11 8.20855 11 8C11 7.79145 10.9132 7.59231 10.7603 7.45041L7.26034 4.20041ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleLineUp:[{d:"M11.7996 8.73966C12.0814 9.0432 12.0639 9.51774 11.7603 9.79959C11.4568 10.0814 10.9823 10.0639 10.7004 9.76034L8 6.85221L5.29959 9.76034C5.01774 10.0639 4.54319 10.0814 4.23966 9.79959C3.93613 9.51774 3.91855 9.0432 4.2004 8.73966L7.45041 5.23966C7.59231 5.08684 7.79145 5 8 5C8.20855 5 8.40769 5.08684 8.54959 5.23966L11.7996 8.73966ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleRight:[{d:"M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM7.26034 11.7996C6.95681 12.0814 6.48226 12.0639 6.20041 11.7603C5.91855 11.4568 5.93613 10.9823 6.23966 10.7004L9.14779 8L6.23966 5.29959C5.93613 5.01774 5.91855 4.54319 6.20041 4.23966C6.48226 3.93613 6.95681 3.91855 7.26034 4.2004L10.7603 7.45041C10.9132 7.59231 11 7.79145 11 8C11 8.20855 10.9132 8.40769 10.7603 8.54959L7.26034 11.7996Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronCircleUp:[{d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7996 8.73966C12.0814 9.04319 12.0639 9.51774 11.7603 9.79959C11.4568 10.0814 10.9823 10.0639 10.7004 9.76034L8 6.85221L5.29959 9.76034C5.01774 10.0639 4.54319 10.0814 4.23966 9.79959C3.93613 9.51774 3.91855 9.04319 4.2004 8.73966L7.45041 5.23966C7.59231 5.08684 7.79145 5 8 5C8.20855 5 8.40769 5.08684 8.54959 5.23966L11.7996 8.73966Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronDoubleDown:[{d:"M12.7953 4.26497C13.0797 3.96383 13.0661 3.48915 12.765 3.20474C12.4638 2.92033 11.9892 2.9339 11.7047 3.23503L8 7.1577L4.29526 3.23503C4.01085 2.9339 3.53617 2.92033 3.23503 3.20474C2.9339 3.48915 2.92033 3.96383 3.20474 4.26497L7.45474 8.76497C7.59643 8.91499 7.79366 9 8 9C8.20635 9 8.40358 8.91499 8.54526 8.76497L12.7953 4.26497ZM12.7953 9.26497C13.0797 8.96383 13.0661 8.48915 12.765 8.20474C12.4638 7.92033 11.9892 7.9339 11.7047 8.23503L8 12.1577L4.29526 8.23503C4.01085 7.9339 3.53617 7.92033 3.23503 8.20474C2.9339 8.48915 2.92033 8.96383 3.20474 9.26497L7.45474 13.765C7.59643 13.915 7.79366 14 8 14C8.20635 14 8.40358 13.915 8.54526 13.765L12.7953 9.26497Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronDoubleLeft:[{d:"M11.735 12.7953C12.0362 13.0797 12.5109 13.0661 12.7953 12.765C13.0797 12.4638 13.0661 11.9892 12.765 11.7047L8.8423 8L12.765 4.29526C13.0661 4.01085 13.0797 3.53617 12.7953 3.23503C12.5109 2.9339 12.0362 2.92033 11.735 3.20474L7.23503 7.45474C7.08502 7.59643 7 7.79366 7 8C7 8.20635 7.08502 8.40358 7.23503 8.54526L11.735 12.7953ZM6.73503 12.7953C7.03617 13.0797 7.51085 13.0661 7.79526 12.765C8.07967 12.4638 8.06611 11.9892 7.76497 11.7047L3.8423 8L7.76497 4.29526C8.06611 4.01085 8.07967 3.53617 7.79526 3.23503C7.51085 2.9339 7.03617 2.92033 6.73503 3.20474L2.23503 7.45474C2.08502 7.59643 2 7.79366 2 8C2 8.20635 2.08502 8.40358 2.23503 8.54526L6.73503 12.7953Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronDoubleRight:[{d:"M4.26497 12.7953C3.96383 13.0797 3.48915 13.0661 3.20474 12.765C2.92033 12.4638 2.9339 11.9892 3.23503 11.7047L7.1577 8L3.23503 4.29526C2.9339 4.01085 2.92033 3.53617 3.20474 3.23503C3.48915 2.9339 3.96383 2.92033 4.26497 3.20474L8.76497 7.45474C8.91499 7.59643 9 7.79366 9 8C9 8.20635 8.91499 8.40358 8.76497 8.54526L4.26497 12.7953ZM9.26497 12.7953C8.96383 13.0797 8.48915 13.0661 8.20474 12.765C7.92033 12.4638 7.9339 11.9892 8.23503 11.7047L12.1577 8L8.23503 4.29526C7.9339 4.01085 7.92033 3.53617 8.20474 3.23503C8.48915 2.9339 8.96383 2.92033 9.26497 3.20474L13.765 7.45474C13.915 7.59643 14 7.79366 14 8C14 8.20635 13.915 8.40358 13.765 8.54526L9.26497 12.7953Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronDoubleUp:[{d:"M12.7953 11.735C13.0797 12.0362 13.0661 12.5109 12.765 12.7953C12.4638 13.0797 11.9892 13.0661 11.7047 12.765L8 8.8423L4.29526 12.765C4.01085 13.0661 3.53617 13.0797 3.23503 12.7953C2.9339 12.5109 2.92033 12.0362 3.20474 11.735L7.45474 7.23503C7.59643 7.08502 7.79366 7 8 7C8.20635 7 8.40358 7.08502 8.54526 7.23503L12.7953 11.735ZM12.7953 6.73503C13.0797 7.03617 13.0661 7.51085 12.765 7.79526C12.4638 8.07967 11.9892 8.06611 11.7047 7.76497L8 3.8423L4.29526 7.76497C4.01085 8.06611 3.53617 8.07967 3.23503 7.79526C2.9339 7.51085 2.92033 7.03617 3.20474 6.73503L7.45474 2.23503C7.59643 2.08502 7.79366 2 8 2C8.20635 2 8.40358 2.08502 8.54526 2.23503L12.7953 6.73503Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronDown:[{d:"M2.23214 5.20941C2.53177 4.9234 3.00651 4.93444 3.29252 5.23407L8 10.1657L12.7075 5.23407C12.9935 4.93444 13.4682 4.9234 13.7679 5.20941C14.0675 5.49541 14.0785 5.97016 13.7925 6.26978L8.54252 11.7698C8.401 11.918 8.20496 12.0019 8 12.0019C7.79504 12.0019 7.59901 11.918 7.45748 11.7698L2.20748 6.26978C1.92148 5.97016 1.93252 5.49541 2.23214 5.20941Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronHorizontalDown:[{d:"M12.7953 4.26497C13.0797 3.96383 13.0661 3.48915 12.765 3.20474C12.4638 2.92033 11.9892 2.9339 11.7047 3.23503L8 7.1577L4.29526 3.23503C4.01085 2.9339 3.53617 2.92033 3.23503 3.20474C2.9339 3.48915 2.92033 3.96383 3.20474 4.26497L7.45474 8.76497C7.59643 8.91499 7.79366 9 8 9C8.20635 9 8.40358 8.91499 8.54526 8.76497L12.7953 4.26497ZM12.25 12C12.6642 12 13 11.6642 13 11.25C13 10.8358 12.6642 10.5 12.25 10.5H3.75C3.33579 10.5 3 10.8358 3 11.25C3 11.6642 3.33579 12 3.75 12H12.25Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronHorizontalUp:[{d:"M12.7953 11.735C13.0797 12.0362 13.0661 12.5109 12.765 12.7953C12.4638 13.0797 11.9892 13.0661 11.7047 12.765L8 8.8423L4.29526 12.765C4.01085 13.0661 3.53617 13.0797 3.23503 12.7953C2.9339 12.5109 2.92033 12.0362 3.20474 11.735L7.45474 7.23503C7.59643 7.08502 7.79366 7 8 7C8.20635 7 8.40358 7.08502 8.54526 7.23503L12.7953 11.735ZM12.25 4C12.6642 4 13 4.33579 13 4.75C13 5.16421 12.6642 5.5 12.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75C3 4.33579 3.33579 4 3.75 4H12.25Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronLeft:[{d:"M10.7923 2.23214C10.5063 1.93252 10.0315 1.92148 9.7319 2.20748L4.2319 7.45748C4.08364 7.59901 3.99976 7.79504 3.99976 8C3.99976 8.20496 4.08364 8.401 4.2319 8.54252L9.7319 13.7925C10.0315 14.0785 10.5063 14.0675 10.7923 13.7679C11.0783 13.4682 11.0672 12.9935 10.7676 12.7075L5.83596 8L10.7676 3.29252C11.0672 3.00651 11.0783 2.53177 10.7923 2.23214Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronRight:[{d:"M5.20724 2.23214C5.49324 1.93252 5.96799 1.92148 6.26761 2.20748L11.7676 7.45748C11.9159 7.59901 11.9998 7.79504 11.9998 8C11.9998 8.20496 11.9159 8.401 11.7676 8.54252L6.26761 13.7925C5.96799 14.0785 5.49324 14.0675 5.20724 13.7679C4.92124 13.4682 4.93228 12.9935 5.2319 12.7075L10.1635 8L5.2319 3.29252C4.93228 3.00651 4.92124 2.53177 5.20724 2.23214Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronUp:[{d:"M2.23214 11.7944C2.53177 12.0804 3.00651 12.0694 3.29252 11.7698L8 6.83813L12.7075 11.7698C12.9935 12.0694 13.4682 12.0804 13.7679 11.7944C14.0675 11.5084 14.0785 11.0337 13.7925 10.7341L8.54252 5.23406C8.401 5.0858 8.20496 5.00192 8 5.00192C7.79504 5.00192 7.59901 5.0858 7.45748 5.23406L2.20748 10.7341C1.92148 11.0337 1.93252 11.5084 2.23214 11.7944Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronVerticalLeft:[{d:"M11.735 3.20474C12.0362 2.92033 12.5109 2.9339 12.7953 3.23503C13.0797 3.53617 13.0661 4.01085 12.765 4.29526L8.8423 8L12.765 11.7047C13.0661 11.9892 13.0797 12.4638 12.7953 12.765C12.5109 13.0661 12.0362 13.0797 11.735 12.7953L7.23503 8.54526C7.08502 8.40358 7 8.20635 7 8C7 7.79366 7.08502 7.59642 7.23503 7.45474L11.735 3.20474ZM4 3.75C4 3.33579 4.33579 3 4.75 3C5.16421 3 5.5 3.33579 5.5 3.75V12.25C5.5 12.6642 5.16421 13 4.75 13C4.33579 13 4 12.6642 4 12.25V3.75Z",fillRule:"evenodd",clipRule:"evenodd"}],chevronVerticalRight:[{d:"M4.26497 3.20474C3.96383 2.92033 3.48915 2.9339 3.20474 3.23503C2.92033 3.53617 2.9339 4.01085 3.23503 4.29526L7.1577 8L3.23503 11.7047C2.9339 11.9892 2.92033 12.4638 3.20474 12.765C3.48915 13.0661 3.96383 13.0797 4.26497 12.7953L8.76497 8.54526C8.91499 8.40358 9 8.20635 9 8C9 7.79366 8.91499 7.59642 8.76497 7.45474L4.26497 3.20474ZM12 3.75C12 3.33579 11.6642 3 11.25 3C10.8358 3 10.5 3.33579 10.5 3.75V12.25C10.5 12.6642 10.8358 13 11.25 13C11.6642 13 12 12.6642 12 12.25V3.75Z",fillRule:"evenodd",clipRule:"evenodd"}],circle:[{d:"M12 8C12 10.2096 10.2088 12 8 12C5.7912 12 4 10.2096 4 8C4 5.7904 5.7912 4 8 4C10.2088 4 12 5.7904 12 8Z",fillRule:"evenodd",clipRule:"evenodd"}],circleLargeLine:[{d:"M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",fillRule:"evenodd",clipRule:"evenodd"}],circleLine:[{d:"M8 4C5.7912 4 4 5.7904 4 8C4 10.2096 5.7912 12 8 12C10.2096 12 12 10.2096 12 8C12 5.7904 10.2096 4 8 4ZM8 5.5C9.37857 5.5 10.5 6.62143 10.5 8C10.5 9.37857 9.37857 10.5 8 10.5C6.62143 10.5 5.5 9.37857 5.5 8C5.5 6.62143 6.62143 5.5 8 5.5Z",fillRule:"evenodd",clipRule:"evenodd"}],circleMediumHalfFilled:[{d:"M11 8C11 9.65685 9.65685 11 8 11V5C9.65685 5 11 6.34315 11 8Z M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5Z",fillRule:"evenodd",clipRule:"evenodd"}],circleMediumLine:[{d:"M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5Z",fillRule:"evenodd",clipRule:"evenodd"}],citation:[{d:"M9.00118 9.91496C9.0004 9.94321 9 9.97156 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C11.4541 7 10.9422 7.14583 10.5012 7.40066V6.75C10.5012 5.50736 11.5085 4.5 12.7512 4.5H13.25C13.6642 4.5 14 4.16421 14 3.75C14 3.33579 13.6642 3 13.25 3H12.7512C10.6801 3 9.00118 4.67893 9.00118 6.75V9.91496ZM1.00118 9.91494C1.0004 9.9432 1 9.97155 1 10C1 11.6569 2.34315 13 4 13C5.65685 13 7 11.6569 7 10C7 8.34315 5.65685 7 4 7C3.45406 7 2.94217 7.14583 2.50118 7.40066V6.75C2.50118 5.50736 3.50854 4.5 4.75118 4.5H5.25C5.66421 4.5 6 4.16421 6 3.75C6 3.33579 5.66421 3 5.25 3H4.75118C2.68011 3 1.00118 4.67893 1.00118 6.75V9.91494Z",fillRule:"evenodd",clipRule:"evenodd"}],clearFormatting:[{d:"M5.60685 1.00098C5.91252 1.00099 6.18762 1.18638 6.30229 1.46963L8.35966 6.55194L6.40896 8.50195H3.68265L2.45 11.5462C2.29454 11.9301 1.85714 12.1154 1.47306 11.96C1.08898 11.8046 0.903648 11.3673 1.05911 10.9834L4.91137 1.46957C5.02606 1.18633 5.30118 1.00096 5.60685 1.00098ZM5.60673 3.75011L6.92312 7.00195H4.29002L5.60673 3.75011Z M5.29436 13.1584C4.9037 12.7679 4.9037 12.1347 5.29436 11.7442L7.03956 9.9996L11.0047 13.9634L9.25954 15.708C8.86889 16.0986 8.23551 16.0986 7.84485 15.708L5.29436 13.1584Z M11.7121 13.2563L7.74691 9.29249L11.7459 5.29485C12.1366 4.90432 12.77 4.90432 13.1606 5.29485L15.7111 7.84447C16.1018 8.23499 16.1018 8.86816 15.7111 9.25868L11.7121 13.2563Z",fillRule:"evenodd",clipRule:"evenodd"}],clipboard:[{d:"M9 1C9 0.817856 8.9513 0.647087 8.86622 0.5C8.69331 0.201099 8.37014 0 8 0C7.62986 0 7.30669 0.201099 7.13378 0.5C7.0487 0.647087 7 0.817856 7 1H5.5C5.22386 1 5 1.22386 5 1.5V3.5C5 3.77614 5.22386 4 5.5 4H10.5C10.7761 4 11 3.77614 11 3.5V1.5C11 1.22386 10.7761 1 10.5 1H9ZM2 4C2 2.89543 2.89543 2 4 2V4C4 4.55228 4.44772 5 5 5H11C11.5523 5 12 4.55228 12 4V2C13.1046 2 14 2.89543 14 4V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V4Z",fillRule:"evenodd",clipRule:"evenodd"}],clipboardCopied:[{d:"M9 1C9 0.817856 8.9513 0.647087 8.86622 0.5C8.69331 0.201099 8.37014 0 8 0C7.62986 0 7.30669 0.201099 7.13378 0.5C7.0487 0.647087 7 0.817856 7 1H5.5C5.22386 1 5 1.22386 5 1.5V3.5C5 3.77614 5.22386 4 5.5 4H10.5C10.7761 4 11 3.77614 11 3.5V1.5C11 1.22386 10.7761 1 10.5 1H9ZM4 2C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H12C13.1046 16 14 15.1046 14 14V4C14 2.89543 13.1046 2 12 2V4C12 4.55228 11.5523 5 11 5H5C4.44772 5 4 4.55228 4 4V2ZM10.6253 7.10395C10.9825 7.31371 11.102 7.7733 10.8922 8.13047L8.24977 12.63C8.1223 12.847 7.89444 12.9857 7.64308 12.9991C7.39172 13.0126 7.15039 12.899 7.0005 12.6968L5.14746 10.1966C4.90081 9.86383 4.97064 9.39412 5.30341 9.14748C5.63619 8.90083 6.1059 8.97066 6.35254 9.30343L7.53048 10.8927L9.59877 7.37087C9.80853 7.01369 10.2681 6.89419 10.6253 7.10395Z",fillRule:"evenodd",clipRule:"evenodd"}],clock:[{d:"M8.5 3.74606C8.5 3.33185 8.16421 2.99606 7.75 2.99606C7.33579 2.99606 7 3.33185 7 3.74606V8.75C7 9.16421 7.33579 9.5 7.75 9.5H11.2465C11.6607 9.5 11.9965 9.16421 11.9965 8.75C11.9965 8.33579 11.6607 8 11.2465 8H8.5V3.74606ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z",fillRule:"evenodd",clipRule:"evenodd"}],cloud:[{d:"M12.995 7.05C12.995 7.033 13 7.018 13 7C13 4.238 10.762 2 8 2C5.542 2 3.509 3.777 3.089 6.113C1.321 6.528 0 8.106 0 10C0 12.209 1.791 14 4 14H12.5C14.433 14 16 12.433 16 10.5C16 8.737 14.691 7.292 12.995 7.05Z",fillRule:"evenodd",clipRule:"evenodd"}],cloudDownload:[{d:"M12.9974 5.02572C12.9962 5.03373 12.995 5.04162 12.995 5.05C14.691 5.292 16 6.737 16 8.5C16 10.0872 14.9435 11.4276 13.4954 11.8564C13.4619 11.3293 13.2438 10.8118 12.841 10.409C12.14 9.70801 11.0915 9.56626 10.25 9.98375V7.75C10.25 6.50736 9.24264 5.5 8 5.5C6.75736 5.5 5.75 6.50736 5.75 7.75V9.98375C4.90848 9.56626 3.86001 9.70801 3.15901 10.409C2.79196 10.7761 2.57824 11.2384 2.51784 11.7164C1.04254 11.1274 0 9.68536 0 8C0 6.106 1.321 4.528 3.089 4.113C3.509 1.777 5.542 0 8 0C10.762 0 13 2.238 13 5C13 5.00913 12.9987 5.01749 12.9974 5.02572ZM8.55126 15.7585C8.41423 15.907 8.21798 16 8 16C7.78205 16 7.58581 15.907 7.44878 15.7586L4.20041 12.2603C3.91856 11.9568 3.93613 11.4823 4.23967 11.2004C4.5432 10.9186 5.01775 10.9361 5.2996 11.2397L7.25 13.3401V7.75C7.25 7.33579 7.58579 7 8 7C8.41422 7 8.75 7.33579 8.75 7.75V13.3401L10.7004 11.2397C10.9823 10.9361 11.4568 10.9186 11.7603 11.2004C12.0639 11.4823 12.0815 11.9568 11.7996 12.2603L8.55126 15.7585Z",fillRule:"evenodd",clipRule:"evenodd"}],cloudDownloadLine:[{d:"M11.495 5.05C11.495 5.79657 12.044 6.4295 12.7831 6.53496C13.7607 6.67445 14.5 7.50428 14.5 8.5C14.5 9.40846 13.8943 10.1754 13.0647 10.4192C13.3756 10.8421 13.521 11.3516 13.4976 11.8558C14.9446 11.4263 16 10.0864 16 8.5C16 6.737 14.691 5.292 12.995 5.05C12.995 5.04162 12.9962 5.03373 12.9974 5.02572C12.9987 5.01749 13 5.00913 13 5C13 2.238 10.762 0 8 0C5.542 0 3.509 1.777 3.089 4.113C1.321 4.528 0 6.106 0 8C0 9.6787 1.03431 11.116 2.50037 11.7093C2.50951 11.2068 2.68599 10.7079 3.02645 10.3033C2.12945 9.92364 1.5 9.03524 1.5 8C1.5 6.82482 2.31963 5.83436 3.43178 5.57331C4.01405 5.43663 4.45949 4.9671 4.56533 4.37844C4.8601 2.73897 6.28622 1.5 8 1.5C9.91093 1.5 11.4633 3.02996 11.4994 4.93224C11.4969 4.96609 11.495 5.00582 11.495 5.05ZM8 8C8.41421 8 8.75 8.33579 8.75 8.75V13.3401L10.7004 11.2397C10.9823 10.9361 11.4568 10.9186 11.7603 11.2004C12.0639 11.4823 12.0814 11.9568 11.7996 12.2603L8.55128 15.7585C8.54588 15.7644 8.54039 15.7701 8.53481 15.7758C8.39875 15.9142 8.2094 16 8 16C7.79821 16 7.61504 15.9203 7.48023 15.7907L7.46519 15.7758C7.4596 15.7701 7.4541 15.7644 7.44869 15.7585L4.20041 12.2603C3.91855 11.9568 3.93613 11.4823 4.23966 11.2004C4.54319 10.9186 5.01774 10.9361 5.29959 11.2397L7.25 13.3401V8.75C7.25 8.33579 7.58579 8 8 8Z",fillRule:"evenodd",clipRule:"evenodd"}],cloudLine:[{d:"M12.245 7.05C12.245 7.42329 12.5195 7.73975 12.8891 7.79248C14.2259 7.98323 15.25 9.12064 15.25 10.5C15.25 12.0188 14.0188 13.25 12.5 13.25H4C2.20521 13.25 0.75 11.7948 0.75 10C0.75 8.46541 1.82032 7.18118 3.26039 6.84315C3.55153 6.77482 3.77424 6.54005 3.82716 6.24572C4.18455 4.25798 5.91411 2.75 8 2.75C10.3344 2.75 12.2282 4.63054 12.2498 6.9598C12.2474 6.98256 12.245 7.01353 12.245 7.05ZM12.2562 6.91133L12.2559 6.91348C12.2563 6.91086 12.2566 6.90905 12.2562 6.91133Z",fillRule:"evenodd",clipRule:"evenodd"}],cloudUpload:[{d:"M12.9974 5.02572C12.9962 5.03373 12.995 5.04162 12.995 5.05C14.691 5.292 16 6.737 16 8.5C16 10.1182 14.9019 11.4798 13.4102 11.8805C13.6239 11.1458 13.4573 10.3205 12.8988 9.71898L9.64879 6.21899C9.22306 5.76051 8.62565 5.5 8 5.5C7.37435 5.5 6.77694 5.76051 6.35121 6.21899L3.10121 9.71898C2.58063 10.2796 2.40055 11.0347 2.55152 11.7296C1.05843 11.1493 0 9.69816 0 8C0 6.106 1.321 4.528 3.089 4.113C3.509 1.777 5.542 0 8 0C10.762 0 13 2.238 13 5C13 5.00913 12.9987 5.01749 12.9974 5.02572ZM8.55126 7.24145C8.41423 7.09299 8.21798 7 8 7C7.78205 7 7.58581 7.09297 7.44878 7.24141L4.20041 10.7397C3.91856 11.0432 3.93613 11.5177 4.23967 11.7996C4.5432 12.0814 5.01775 12.0639 5.2996 11.7603L7.25 9.6599V15.25C7.25 15.6642 7.58579 16 8 16C8.41422 16 8.75 15.6642 8.75 15.25V9.6599L10.7004 11.7603C10.9823 12.0639 11.4568 12.0814 11.7603 11.7996C12.0639 11.5177 12.0815 11.0432 11.7996 10.7397L8.55126 7.24145Z",fillRule:"evenodd",clipRule:"evenodd"}],cloudUploadLine:[{d:"M12.7831 6.53496C12.044 6.4295 11.495 5.79657 11.495 5.05C11.495 5.00582 11.4969 4.96609 11.4994 4.93224C11.4633 3.02996 9.91093 1.5 8 1.5C6.28622 1.5 4.8601 2.73897 4.56533 4.37844C4.45949 4.9671 4.01405 5.43663 3.43178 5.57331C2.31963 5.83436 1.5 6.82482 1.5 8C1.5 8.93402 2.01237 9.7485 2.77134 10.1777C2.5107 10.6578 2.43874 11.2105 2.55152 11.7296C1.05843 11.1493 0 9.69816 0 8C0 6.106 1.321 4.528 3.089 4.113C3.509 1.777 5.542 0 8 0C10.762 0 13 2.238 13 5C13 5.00913 12.9987 5.01749 12.9974 5.02572C12.9962 5.03373 12.995 5.04162 12.995 5.05C14.691 5.292 16 6.737 16 8.5C16 10.1182 14.9019 11.4798 13.4102 11.8805C13.5578 11.3728 13.5239 10.822 13.3047 10.3315C14.0085 10.0219 14.5 9.31832 14.5 8.5C14.5 7.50428 13.7607 6.67445 12.7831 6.53496ZM8 7C8.20855 7 8.40769 7.08684 8.54959 7.23966L11.7996 10.7397C12.0814 11.0432 12.0639 11.5177 11.7603 11.7996C11.4568 12.0814 10.9823 12.0639 10.7004 11.7603L8.75 9.6599V15.25C8.75 15.6642 8.41421 16 8 16C7.58579 16 7.25 15.6642 7.25 15.25V9.6599L5.29959 11.7603C5.01774 12.0639 4.54319 12.0814 4.23966 11.7996C3.93613 11.5177 3.91855 11.0432 4.20041 10.7397L7.45041 7.23966C7.59231 7.08684 7.79145 7 8 7Z",fillRule:"evenodd",clipRule:"evenodd"}],code:[{d:"M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3ZM4.19253 4.24828C4.46962 3.94039 4.94384 3.91543 5.25172 4.19253L7.75172 6.44252C7.90976 6.58475 8 6.78738 8 6.99999C8 7.21261 7.90976 7.41523 7.75172 7.55746L5.25172 9.80747C4.94384 10.0846 4.46962 10.0596 4.19253 9.75172C3.91544 9.44384 3.94039 8.96962 4.24828 8.69253L6.12886 6.99999L4.24828 5.30747C3.94039 5.03038 3.91543 4.55616 4.19253 4.24828ZM9.25 8.50967C8.83579 8.50967 8.5 8.84546 8.5 9.25967C8.5 9.67389 8.83579 10.0097 9.25 10.0097H12.25C12.6642 10.0097 13 9.67389 13 9.25967C13 8.84546 12.6642 8.50967 12.25 8.50967H9.25Z",fillRule:"evenodd",clipRule:"evenodd"}],codeLine:[{d:"M4.19253 4.24828C4.46962 3.94039 4.94384 3.91543 5.25172 4.19253L7.75172 6.44252C7.90976 6.58475 8 6.78738 8 6.99999C8 7.21261 7.90976 7.41523 7.75172 7.55746L5.25172 9.80747C4.94384 10.0846 4.46962 10.0596 4.19253 9.75172C3.91544 9.44384 3.94039 8.96962 4.24828 8.69253L6.12886 6.99999L4.24828 5.30747C3.94039 5.03038 3.91543 4.55616 4.19253 4.24828ZM8.25 8.50967C7.83579 8.50967 7.5 8.84546 7.5 9.25967C7.5 9.67389 7.83579 10.0097 8.25 10.0097H11.25C11.6642 10.0097 12 9.67389 12 9.25967C12 8.84546 11.6642 8.50967 11.25 8.50967H8.25ZM3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1H3ZM13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],cog:[{d:"M6.50073 12.7713C6.21768 12.6825 5.94547 12.5691 5.68658 12.4338L4.59507 13.2678C4.19693 13.572 3.63511 13.5346 3.28081 13.1803L2.82008 12.7196C2.46589 12.3654 2.42839 11.8038 2.73236 11.4056L3.56623 10.3134C3.43095 10.0547 3.31766 9.78265 3.22883 9.49978L1.86685 9.3168C1.37048 9.25011 1 8.82652 1 8.3257V7.67375C1 7.17277 1.3707 6.74911 1.86724 6.6826L3.22883 6.50022C3.31761 6.21752 3.43082 5.94564 3.56598 5.68706L2.73209 4.59432C2.42826 4.19619 2.46581 3.63469 2.81995 3.28056L3.28095 2.81956C3.63519 2.46531 4.19689 2.42786 4.59503 2.73194L5.68706 3.56598C5.94564 3.43082 6.21752 3.31761 6.50022 3.22883L6.6832 1.86685C6.74989 1.37048 7.17348 1 7.6743 1H8.32625C8.82723 1 9.25089 1.3707 9.3174 1.86724L9.49978 3.22883C9.78248 3.31761 10.0544 3.43082 10.3129 3.56598L11.4057 2.73209C11.8038 2.42826 12.3653 2.46581 12.7194 2.81995L13.1804 3.28095C13.5347 3.63519 13.5721 4.19689 13.2681 4.59503L12.434 5.68706C12.5693 5.9458 12.6825 6.21785 12.7713 6.50073L14.1325 6.68276C14.6292 6.74917 15 7.17288 15 7.67394V8.32551C15 8.82642 14.6294 9.25004 14.1329 9.31664L12.7713 9.49927C12.6825 9.78232 12.5691 10.0545 12.4338 10.3134L13.2678 11.4049C13.572 11.8031 13.5346 12.3649 13.1803 12.7192L12.7196 13.1799C12.3654 13.5341 11.8038 13.5716 11.4056 13.2676L10.3134 12.4338C10.0545 12.5691 9.78232 12.6825 9.49927 12.7713L9.31724 14.1325C9.25083 14.6292 8.82712 15 8.32606 15H7.67449C7.17358 15 6.74995 14.6294 6.68336 14.1329L6.50073 12.7713ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",fillRule:"evenodd",clipRule:"evenodd"}],collapse:[{d:"M8.54963 6.76031C8.40772 6.91314 8.20858 6.99997 8.00003 6.99997C7.79148 6.99997 7.59234 6.91314 7.45044 6.76031L4.20044 3.26031C3.91858 2.95678 3.93616 2.48223 4.23969 2.20038C4.54323 1.91853 5.01777 1.9361 5.29963 2.23963L8.00003 5.14776L10.7004 2.23963C10.9823 1.9361 11.4568 1.91853 11.7604 2.20038C12.0639 2.48223 12.0815 2.95678 11.7996 3.26031L8.54963 6.76031ZM8.5496 9.23966C8.40769 9.08684 8.20855 9 8 9C7.79145 9 7.59232 9.08684 7.45041 9.23966L4.20041 12.7397C3.91856 13.0432 3.93613 13.5177 4.23966 13.7996C4.5432 14.0814 5.01775 14.0639 5.2996 13.7603L8 10.8522L10.7004 13.7603C10.9823 14.0639 11.4568 14.0814 11.7603 13.7996C12.0639 13.5177 12.0815 13.0432 11.7996 12.7397L8.5496 9.23966Z",fillRule:"evenodd",clipRule:"evenodd"}],columns:[{d:"M0 3C0 1.89543 0.895431 1 2 1H14C15.1046 1 16 1.89543 16 3V12.9998C16 14.1043 15.1046 14.9998 14 14.9998H2C0.895431 14.9998 0 14.1043 0 12.9998V3ZM2 2.5H4.5V13.4998H2C1.72386 13.4998 1.5 13.2759 1.5 12.9998V3C1.5 2.72386 1.72386 2.5 2 2.5ZM6 13.4998V2.5H10V13.4998H6ZM11.5 13.4998H14C14.2761 13.4998 14.5 13.2759 14.5 12.9998V3C14.5 2.72386 14.2761 2.5 14 2.5H11.5V13.4998Z",fillRule:"evenodd",clipRule:"evenodd"}],comment:[{d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 9.31931 1.36498 10.5534 1.99948 11.6067L1.04342 14.334C0.915441 14.6991 1.23274 15.0649 1.61224 14.9899L4.99073 14.322C5.90234 14.7567 6.92275 15 8 15ZM4.75 6C4.33579 6 4 6.33579 4 6.75C4 7.16421 4.33579 7.5 4.75 7.5H11.25C11.6642 7.5 12 7.16421 12 6.75C12 6.33579 11.6642 6 11.25 6H4.75ZM5 9.75C5 9.33579 5.33579 9 5.75 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z",fillRule:"evenodd",clipRule:"evenodd"}],commentCheck:[{d:"M1.91237e-05 8C1.91237e-05 3.58172 3.58174 0 8.00002 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8.00002 16C7.3343 16 6.53737 15.825 5.82189 15.6119C5.21522 15.4312 4.62204 15.2092 4.14683 15.0002L0.96839 15.9675C0.703332 16.0482 0.415389 15.9761 0.219534 15.7802C0.023678 15.5842 -0.0481836 15.2962 0.0326419 15.0312L1.00049 11.8578C0.790959 11.3819 0.568797 10.7879 0.388027 10.1805C0.1748 9.46402 1.91237e-05 8.6663 1.91237e-05 8ZM8.00002 1.5C4.41017 1.5 1.50002 4.41015 1.50002 8C1.50002 8.44839 1.62591 9.08126 1.82571 9.7526C2.02198 10.4121 2.2711 11.048 2.4779 11.4821C2.55845 11.6512 2.57281 11.8443 2.51818 12.0235L1.87792 14.1228L3.98165 13.4825C4.16053 13.4281 4.35331 13.4424 4.52217 13.5227C4.95617 13.7291 5.59153 13.9781 6.25016 14.1743C6.92075 14.3741 7.55256 14.5 8.00002 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8.00002 1.5ZM11.5857 5.96852C11.8444 5.64507 11.792 5.17311 11.4685 4.91435C11.1451 4.65559 10.6731 4.70803 10.4143 5.03148L6.93781 9.37715L5.53033 7.96967C5.23744 7.67678 4.76256 7.67678 4.46967 7.96967C4.17678 8.26256 4.17678 8.73744 4.46967 9.03033L6.46967 11.0303C6.62052 11.1812 6.82847 11.2606 7.04148 11.2489C7.25448 11.2371 7.45238 11.1351 7.58565 10.9685L11.5857 5.96852Z",fillRule:"evenodd",clipRule:"evenodd"}],commentLine:[{d:"M8.00002 0C3.58174 0 1.91237e-05 3.58172 1.91237e-05 8C1.91237e-05 8.6663 0.1748 9.46402 0.388027 10.1805C0.568797 10.7879 0.790959 11.3819 1.00049 11.8578L0.0326419 15.0312C-0.0481836 15.2962 0.023678 15.5842 0.219534 15.7802C0.415389 15.9761 0.703332 16.0482 0.96839 15.9675L4.14683 15.0002C4.62204 15.2092 5.21522 15.4312 5.82189 15.6119C6.53737 15.825 7.3343 16 8.00002 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8.00002 0ZM1.50002 8C1.50002 4.41015 4.41017 1.5 8.00002 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8.00002 14.5C7.55256 14.5 6.92075 14.3741 6.25016 14.1743C5.59153 13.9781 4.95617 13.7291 4.52217 13.5227C4.35331 13.4424 4.16053 13.4281 3.98165 13.4825L1.87792 14.1228L2.51818 12.0235C2.57281 11.8443 2.55845 11.6512 2.4779 11.4821C2.2711 11.048 2.02198 10.4121 1.82571 9.7526C1.62591 9.08126 1.50002 8.44839 1.50002 8Z",fillRule:"evenodd",clipRule:"evenodd"}],commentLineLock:[{d:"M8.00002 0C3.58174 0 1.91254e-05 3.58172 1.91254e-05 8C1.91254e-05 8.6663 0.1748 9.46402 0.388027 10.1805C0.568797 10.7879 0.790959 11.3819 1.00049 11.8578L0.0326419 15.0312C-0.0481836 15.2962 0.023678 15.5842 0.219534 15.7802C0.415389 15.9761 0.703332 16.0482 0.96839 15.9675L4.14683 15.0002C4.62204 15.2092 5.21522 15.4312 5.82189 15.6119C6.08693 15.6909 6.36313 15.7646 6.63971 15.8261C6.54921 15.5675 6.5 15.2895 6.5 15V14.2458C6.41752 14.2232 6.33414 14.1994 6.25016 14.1743C5.59153 13.9781 4.95617 13.7291 4.52217 13.5227C4.35331 13.4424 4.16053 13.4281 3.98165 13.4825L1.87792 14.1228L2.51818 12.0235C2.57281 11.8443 2.55845 11.6512 2.4779 11.4821C2.2711 11.048 2.02198 10.4121 1.82571 9.7526C1.62591 9.08126 1.50002 8.44839 1.50002 8C1.50002 4.41015 4.41017 1.5 8.00002 1.5C10.9606 1.5 13.4588 3.47927 14.2437 6.18676C15.1398 6.79407 15.7765 7.75514 15.9533 8.86936C15.9842 8.58381 16 8.29375 16 8C16 3.58172 12.4183 0 8.00002 0Z M8 12C8 11.4477 8.44772 11 9 11H9.5V9.50149C9.5 8.11995 10.62 7 12.0015 7C13.383 7 14.503 8.11995 14.503 9.50149V11H15C15.5523 11 16 11.4477 16 12V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V12ZM13.003 11V9.50149C13.003 8.94838 12.5546 8.5 12.0015 8.5C11.4484 8.5 11 8.94838 11 9.50149V11H13.003Z",fillRule:"evenodd",clipRule:"evenodd"}],commentPlus:[{d:"M8.00002 4.75C8.41423 4.75 8.75002 5.08579 8.75002 5.5V7.25H10.5C10.9142 7.25 11.25 7.58579 11.25 8C11.25 8.41421 10.9142 8.75 10.5 8.75H8.75002V10.5C8.75002 10.9142 8.41423 11.25 8.00002 11.25C7.5858 11.25 7.25002 10.9142 7.25002 10.5V8.75H5.50002C5.0858 8.75 4.75002 8.41421 4.75002 8C4.75002 7.58579 5.0858 7.25 5.50002 7.25H7.25002V5.5C7.25002 5.08579 7.5858 4.75 8.00002 4.75ZM8.00002 0C3.58174 0 1.91237e-05 3.58172 1.91237e-05 8C1.91237e-05 8.6663 0.1748 9.46402 0.388027 10.1805C0.568797 10.7879 0.790959 11.3819 1.00049 11.8578L0.0326419 15.0312C-0.0481836 15.2962 0.023678 15.5842 0.219534 15.7802C0.415389 15.9761 0.703332 16.0482 0.96839 15.9675L4.14683 15.0002C4.62204 15.2092 5.21522 15.4312 5.82189 15.6119C6.53737 15.825 7.3343 16 8.00002 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8.00002 0ZM1.50002 8C1.50002 4.41015 4.41017 1.5 8.00002 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8.00002 14.5C7.55256 14.5 6.92075 14.3741 6.25016 14.1743C5.59153 13.9781 4.95617 13.7291 4.52217 13.5227C4.35331 13.4424 4.16053 13.4281 3.98165 13.4825L1.87792 14.1228L2.51818 12.0235C2.57281 11.8443 2.55845 11.6512 2.4779 11.4821C2.2711 11.048 2.02198 10.4121 1.82571 9.7526C1.62591 9.08126 1.50002 8.44839 1.50002 8Z",fillRule:"evenodd",clipRule:"evenodd"}],comparison:[{d:"M8 0C7.58579 0 7.25 0.335786 7.25 0.75V15.25C7.25 15.6642 7.58579 16 8 16C8.41421 16 8.75 15.6642 8.75 15.25V0.75C8.75 0.335786 8.41421 0 8 0ZM2 2H5.75V3.5V5.75H3.75C3.33579 5.75 3 6.08579 3 6.5C3 6.91421 3.33579 7.25 3.75 7.25H5.75V8.75H3.75C3.33579 8.75 3 9.08579 3 9.5C3 9.91421 3.33579 10.25 3.75 10.25H5.75V12.5V14H2C0.895431 14 0 13.1046 0 12V4C0 2.89543 0.895431 2 2 2ZM12.25 5.75H10.25V7.25H12.25C12.6642 7.25 13 6.91421 13 6.5C13 6.08579 12.6642 5.75 12.25 5.75ZM12.25 8.75H10.25V10.25H12.25C12.6642 10.25 13 9.91421 13 9.5C13 9.08579 12.6642 8.75 12.25 8.75ZM14 12.5H10.25V14H14C15.1046 14 16 13.1046 16 12V4C16 2.89543 15.1046 2 14 2H10.25V3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V12C14.5 12.2761 14.2761 12.5 14 12.5Z",fillRule:"evenodd",clipRule:"evenodd"}],computer:[{d:"M2 1C0.895431 1 0 1.89543 0 3V9.5C0 10.6046 0.895431 11.5 2 11.5H6V13.5H4.75C4.33579 13.5 4 13.8358 4 14.25C4 14.6642 4.33579 15 4.75 15H11.25C11.6642 15 12 14.6642 12 14.25C12 13.8358 11.6642 13.5 11.25 13.5H10V11.5H14C15.1046 11.5 16 10.6046 16 9.5V3C16 1.89543 15.1046 1 14 1H2ZM14 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V9.5C1.5 9.77614 1.72386 10 2 10H14C14.2761 10 14.5 9.77614 14.5 9.5V3C14.5 2.72386 14.2761 2.5 14 2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],cross:[{d:"M2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L8 6.58579L12.2929 2.29289C12.6834 1.90237 13.3166 1.90237 13.7071 2.29289C14.0976 2.68342 14.0976 3.31658 13.7071 3.70711L9.41421 8L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L8 9.41421L3.70711 13.7071C3.31658 14.0976 2.68342 14.0976 2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929L6.58579 8L2.29289 3.70711Z",fillRule:"",clipRule:""}],crossCircle:[{d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.7803 4.21967C12.0732 4.51256 12.0732 4.98744 11.7803 5.28033L9.06066 8L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L8 9.06066L5.28033 11.7803C4.98744 12.0732 4.51256 12.0732 4.21967 11.7803C3.92678 11.4874 3.92678 11.0126 4.21967 10.7197L6.93934 8L4.21967 5.28033C3.92678 4.98744 3.92678 4.51256 4.21967 4.21967C4.51256 3.92678 4.98744 3.92678 5.28033 4.21967L8 6.93934L10.7197 4.21967C11.0126 3.92678 11.4874 3.92678 11.7803 4.21967Z",fillRule:"evenodd",clipRule:"evenodd"}],crossCircleLine:[{d:"M10.7803 5.21967C11.0732 5.51256 11.0732 5.98744 10.7803 6.28033L9.05453 8.00613L10.7803 9.73194C11.0732 10.0248 11.0732 10.4997 10.7803 10.7926C10.4874 11.0855 10.0126 11.0855 9.71968 10.7926L7.99387 9.06679L6.28033 10.7803C5.98744 11.0732 5.51256 11.0732 5.21967 10.7803C4.92678 10.4874 4.92678 10.0126 5.21967 9.71967L6.93321 8.00613L5.21967 6.2926C4.92678 5.9997 4.92678 5.52483 5.21967 5.23194C5.51256 4.93904 5.98744 4.93904 6.28033 5.23194L7.99387 6.94547L9.71967 5.21967C10.0126 4.92678 10.4874 4.92678 10.7803 5.21967ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z",fillRule:"evenodd",clipRule:"evenodd"}],crossSmall:[{d:"M11.7803 5.28033C12.0732 4.98744 12.0732 4.51256 11.7803 4.21967C11.4874 3.92678 11.0126 3.92678 10.7197 4.21967L8 6.93934L5.28033 4.21967C4.98744 3.92678 4.51256 3.92678 4.21967 4.21967C3.92678 4.51256 3.92678 4.98744 4.21967 5.28033L6.93934 8L4.21967 10.7197C3.92678 11.0126 3.92678 11.4874 4.21967 11.7803C4.51256 12.0732 4.98744 12.0732 5.28033 11.7803L8 9.06066L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L9.06066 8L11.7803 5.28033Z",fillRule:"",clipRule:""}],dashboard:[{d:"M3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1H3ZM4.25 4C3.83579 4 3.5 4.33579 3.5 4.75V11.25C3.5 11.6642 3.83579 12 4.25 12C4.66421 12 5 11.6642 5 11.25V4.75C5 4.33579 4.66421 4 4.25 4ZM7.25 7.75C7.25 7.33579 7.58579 7 8 7C8.41421 7 8.75 7.33579 8.75 7.75V11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25V7.75ZM11.75 6C11.3358 6 11 6.33579 11 6.75V11.25C11 11.6642 11.3358 12 11.75 12C12.1642 12 12.5 11.6642 12.5 11.25V6.75C12.5 6.33579 12.1642 6 11.75 6Z",fillRule:"evenodd",clipRule:"evenodd"}],dataRoom:[{d:"M3 3C3 1.89543 3.89543 1 5 1H11C12.1046 1 13 1.89543 13 3H3Z",fillRule:"",clipRule:""},{d:"M4 4C2.89543 4 2 4.89543 2 6H14C14 4.89543 13.1046 4 12 4H4Z",fillRule:"",clipRule:""},{d:"M3 7C1.89543 7 1 7.89543 1 9V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V9C15 7.89543 14.1046 7 13 7H3ZM6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H9.25C9.66421 10.5 10 10.1642 10 9.75C10 9.33579 9.66421 9 9.25 9H6.75Z",fillRule:"evenodd",clipRule:"evenodd"}],database:[{d:"M8 0C11.866 0 15 1.119 15 2.5C15 3.881 11.866 5 8 5C4.134 5 1 3.881 1 2.5C1 1.119 4.134 0 8 0ZM8 16C4.134 16 1 14.881 1 13.5V10.911C1 10.733 1.218 10.637 1.337 10.769C2.245 11.773 4.884 12.5 8 12.5C11.116 12.5 13.755 11.773 14.663 10.769C14.782 10.637 15 10.733 15 10.911V13.5C15 14.881 11.866 16 8 16ZM1 5.4111C1 5.2341 1.218 5.1371 1.337 5.2681C2.245 6.2731 4.884 7.0001 8 7.0001C11.116 7.0001 13.755 6.2731 14.663 5.2681C14.782 5.1371 15 5.2341 15 5.4111V8.0001C15 9.3811 11.866 10.5001 8 10.5001C4.134 10.5001 1 9.3811 1 8.0001V5.4111Z",fillRule:"evenodd",clipRule:"evenodd"}],deal:[{d:"M7.5 11.4844V12.9844H1C0.447715 12.9844 0 12.5367 0 11.9844V3.98438C0 3.43209 0.447715 2.98438 1 2.98438H15C15.5523 2.98438 16 3.43209 16 3.98438V10.95L14.5 9.45V6.94438C13.2405 6.73085 12.254 5.74392 12.041 4.48438H3.96C3.74648 5.74383 2.75955 6.73036 1.5 6.94338V9.02437C2.75946 9.2379 3.74599 10.2248 3.959 11.4844H7.5ZM8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10ZM9 12.75C9 12.3358 9.33579 12 9.75 12L13.4393 12L12.2197 10.7803C11.9268 10.4874 11.9268 10.0126 12.2197 9.71967C12.5126 9.42678 12.9874 9.42678 13.2803 9.71967L15.7803 12.2197C15.7915 12.2309 15.8024 12.2424 15.8128 12.2542C15.9293 12.3864 16 12.5599 16 12.75C16 12.9584 15.915 13.147 15.7778 13.2829L13.2803 15.7803C12.9874 16.0732 12.5126 16.0732 12.2197 15.7803C11.9268 15.4874 11.9268 15.0126 12.2197 14.7197L13.4393 13.5L9.75 13.5C9.33579 13.5 9 13.1642 9 12.75Z",fillRule:"evenodd",clipRule:"evenodd"}],decreaseFontSize:[{d:"M6.00001 0.999023C6.30203 0.999023 6.57458 1.18018 6.69151 1.45864L11.9415 13.9607C12.1019 14.3426 11.9223 14.7822 11.5404 14.9425C11.1585 15.1029 10.7189 14.9233 10.5585 14.5414L8.86233 10.5023H3.13769L1.44151 14.5414C1.28114 14.9233 0.841534 15.1029 0.459627 14.9425C0.0777204 14.7822 -0.101867 14.3426 0.0585084 13.9607L1.90519 9.56308C1.92335 9.4932 1.95134 9.42727 1.98758 9.36688L5.30851 1.45864C5.42544 1.18018 5.69799 0.999023 6.00001 0.999023ZM6.00001 3.68611L8.23243 9.00226H3.76759L6.00001 3.68611ZM10.25 2.5C9.83581 2.5 9.50002 2.83579 9.50002 3.25C9.50002 3.66422 9.83581 4 10.25 4L15.25 4C15.6642 4 16 3.66421 16 3.25C16 2.83579 15.6642 2.5 15.25 2.5L10.25 2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],distributeHorizontal:[{d:"M2.75 1C2.33579 1 2 1.33579 2 1.75V14.25C2 14.6642 2.33579 15 2.75 15C3.16421 15 3.5 14.6642 3.5 14.25V1.75C3.5 1.33579 3.16421 1 2.75 1ZM12.5 1.75C12.5 1.33579 12.8358 1 13.25 1C13.6642 1 14 1.33579 14 1.75V14.25C14 14.6642 13.6642 15 13.25 15C12.8358 15 12.5 14.6642 12.5 14.25V1.75ZM6 5C6 4.44772 6.44772 4 7 4H9C9.55228 4 10 4.44772 10 5V11C10 11.5523 9.55228 12 9 12H7C6.44772 12 6 11.5523 6 11V5Z",fillRule:"evenodd",clipRule:"evenodd"}],distributeVertical:[{d:"M1 2.75C1 2.33579 1.33579 2 1.75 2H14.25C14.6642 2 15 2.33579 15 2.75C15 3.16421 14.6642 3.5 14.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75ZM1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H14.25C14.6642 12.5 15 12.8358 15 13.25C15 13.6642 14.6642 14 14.25 14H1.75C1.33579 14 1 13.6642 1 13.25ZM5 6C4.44772 6 4 6.44772 4 7V9C4 9.55228 4.44772 10 5 10H11C11.5523 10 12 9.55228 12 9V7C12 6.44772 11.5523 6 11 6H5Z",fillRule:"evenodd",clipRule:"evenodd"}],divider:[{d:"M1 8C1 7.44772 1.44772 7 2 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H2C1.44772 9 1 8.55228 1 8Z",fillRule:"evenodd",clipRule:"evenodd"}],download:[{d:"M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V8.43934L11.7197 5.46967C12.0126 5.17678 12.4874 5.17678 12.7803 5.46967C13.0732 5.76256 13.0732 6.23744 12.7803 6.53033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L3.21967 6.53033C2.92678 6.23744 2.92678 5.76256 3.21967 5.46967C3.51256 5.17678 3.98744 5.17678 4.28033 5.46967L7.25 8.43934V2C7.25 1.58579 7.58579 1.25 8 1.25ZM1.75 10C2.16421 10 2.5 10.3358 2.5 10.75V13.25C2.5 13.3881 2.61193 13.5 2.75 13.5H13.25C13.3881 13.5 13.5 13.3881 13.5 13.25V10.75C13.5 10.3358 13.8358 10 14.25 10C14.6642 10 15 10.3358 15 10.75V13.25C15 14.2165 14.2165 15 13.25 15H2.75C1.7835 15 1 14.2165 1 13.25V10.75C1 10.3358 1.33579 10 1.75 10Z",fillRule:"evenodd",clipRule:"evenodd"}],drag:[{d:"M5.5 4C6.32843 4 7 3.32843 7 2.5C7 1.67157 6.32843 1 5.5 1C4.67157 1 4 1.67157 4 2.5C4 3.32843 4.67157 4 5.5 4ZM5.5 15C6.32843 15 7 14.3284 7 13.5C7 12.6716 6.32843 12 5.5 12C4.67157 12 4 12.6716 4 13.5C4 14.3284 4.67157 15 5.5 15ZM12 2.5C12 3.32843 11.3284 4 10.5 4C9.67157 4 9 3.32843 9 2.5C9 1.67157 9.67157 1 10.5 1C11.3284 1 12 1.67157 12 2.5ZM10.5 15C11.3284 15 12 14.3284 12 13.5C12 12.6716 11.3284 12 10.5 12C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15ZM7 8C7 8.82843 6.32843 9.5 5.5 9.5C4.67157 9.5 4 8.82843 4 8C4 7.17157 4.67157 6.5 5.5 6.5C6.32843 6.5 7 7.17157 7 8ZM10.5 9.5C11.3284 9.5 12 8.82843 12 8C12 7.17157 11.3284 6.5 10.5 6.5C9.67157 6.5 9 7.17157 9 8C9 8.82843 9.67157 9.5 10.5 9.5Z",fillRule:"evenodd",clipRule:"evenodd"}],draw:[{d:"M2.71926 10.1372C2.59518 10.329 2.48089 10.5057 2.37772 10.6635C2.15101 11.0101 1.6862 11.1074 1.33954 10.8807C0.992871 10.654 0.895625 10.1892 1.12233 9.8425C1.22001 9.69314 1.33007 9.5229 1.45103 9.3358C2.13394 8.2795 3.16425 6.68585 4.27435 5.27857C4.92761 4.45043 5.63058 3.65779 6.3301 3.06554C6.99992 2.49842 7.79824 2 8.62779 2C8.90309 2 9.2014 2.06089 9.46129 2.24803C9.72784 2.43997 9.8734 2.70655 9.94211 2.96629C10.0655 3.43283 9.96695 3.97232 9.84023 4.43292C9.58324 5.36703 9.02744 6.573 8.50608 7.70425C8.4894 7.74043 8.47276 7.77653 8.45617 7.81255C7.89838 9.02326 7.38947 10.1413 7.17811 10.9526C7.11581 11.1917 7.09262 11.3582 7.0868 11.4668C7.1127 11.4547 7.14464 11.4379 7.18303 11.4144C7.31705 11.3324 7.48143 11.1992 7.67725 11.008C8.05949 10.6349 8.47122 10.1324 8.92394 9.57984C8.93933 9.56106 8.95477 9.54222 8.97025 9.52333C9.42419 8.96942 9.9202 8.36741 10.4107 7.9063C10.6577 7.67402 10.9253 7.45616 11.2079 7.29337C11.4884 7.1318 11.826 7 12.2001 7C12.41 7 12.6309 7.04667 12.8346 7.16921C13.0388 7.29214 13.1796 7.46375 13.2716 7.64104C13.4411 7.96772 13.461 8.34287 13.4491 8.63971C13.4247 9.25319 13.2341 10.0203 13.0498 10.6983C12.9937 10.9046 12.9379 11.1038 12.8845 11.2944C12.7989 11.5998 12.7195 11.883 12.6552 12.1379C12.6735 12.1245 12.6919 12.1107 12.7105 12.0967C13.0245 11.8602 13.3244 11.5834 13.5903 11.3379C13.6428 11.2894 13.694 11.2421 13.7438 11.1966C14.0494 10.917 14.5238 10.9381 14.8034 11.2437C15.083 11.5494 15.0619 12.0238 14.7563 12.3034C14.7154 12.3408 14.6706 12.3822 14.6224 12.4268C14.3585 12.6707 13.9933 13.0084 13.6131 13.2948C13.3855 13.4662 13.1317 13.6358 12.8673 13.7649C12.6095 13.8908 12.292 14.003 11.95 14.003C11.6725 14.003 11.4018 13.8825 11.221 13.6425C11.0716 13.4443 11.0315 13.2271 11.0178 13.0926C10.9901 12.8206 11.0383 12.5093 11.0917 12.2446C11.1734 11.8404 11.3158 11.3322 11.4561 10.8318C11.506 10.6534 11.5557 10.476 11.6023 10.3047C11.7894 9.61647 11.9298 9.01494 11.9496 8.59721C11.8067 8.68063 11.6363 8.81287 11.4381 8.99915C11.0316 9.38131 10.5979 9.90366 10.1304 10.4741C10.1068 10.503 10.083 10.5319 10.0592 10.561C9.62901 11.0863 9.16904 11.648 8.72508 12.0814C8.489 12.3119 8.23382 12.53 7.96575 12.694C7.70204 12.8553 7.37199 12.9974 7.00002 12.9974C6.72253 12.9974 6.4259 12.9385 6.16476 12.7609C5.89545 12.5778 5.73807 12.3189 5.65874 12.0562C5.51625 11.5844 5.60577 11.038 5.72657 10.5744C5.97918 9.60484 6.55769 8.34854 7.0938 7.18489L7.09997 7.1715C7.6561 5.9644 8.17008 4.8488 8.39396 4.03503C8.46019 3.7943 8.48737 3.62488 8.49601 3.51312C8.22459 3.56361 7.82505 3.76524 7.29936 4.21033C6.71053 4.70887 6.079 5.41277 5.45204 6.20757C4.3904 7.55342 3.40518 9.07667 2.71926 10.1372Z",fillRule:"evenodd",clipRule:"evenodd"}],drop:[{d:"M8 0.75L8.46371 0.160534C8.19162 -0.0535126 7.80837 -0.0535112 7.53628 0.160537L8 0.75ZM12.5 10C12.5 12.4853 10.4853 14.5 8 14.5V16C11.3137 16 14 13.3137 14 10H12.5ZM8 14.5C5.51472 14.5 3.5 12.4853 3.5 10H2C2 13.3137 4.68629 16 8 16V14.5ZM3.5 10C3.5 7.68718 4.69339 5.53846 5.96502 3.91804C6.59354 3.11711 7.22347 2.46784 7.69603 2.01928C7.93186 1.79542 8.12733 1.62266 8.26224 1.50713C8.32967 1.44939 8.38187 1.40603 8.41632 1.37781C8.43354 1.36371 8.44631 1.35339 8.45432 1.34697C8.45832 1.34376 8.46113 1.34152 8.46271 1.34026C8.4635 1.33963 8.46399 1.33925 8.46416 1.33912C8.46424 1.33905 8.46425 1.33905 8.46417 1.3391C8.46414 1.33913 8.46402 1.33922 8.464 1.33924C8.46387 1.33934 8.46372 1.33946 8 0.75C7.53628 0.160537 7.53609 0.16069 7.53588 0.160858C7.53578 0.160935 7.53554 0.16112 7.53535 0.161274C7.53496 0.161583 7.53448 0.161956 7.53393 0.162392C7.53283 0.163263 7.53141 0.164389 7.52968 0.165766C7.52621 0.16852 7.52149 0.172282 7.51556 0.17704C7.5037 0.186556 7.48699 0.200058 7.46576 0.21745C7.42331 0.252231 7.36272 0.302601 7.28658 0.367794C7.13439 0.498127 6.9197 0.688027 6.66335 0.931359C6.15153 1.41719 5.46896 2.12042 4.78498 2.99201C3.43161 4.7166 2 7.19288 2 10H3.5ZM8 0.75C7.53629 1.33947 7.53613 1.33935 7.536 1.33924C7.53598 1.33923 7.53587 1.33914 7.53583 1.33911C7.53576 1.33905 7.53576 1.33905 7.53585 1.33912C7.53602 1.33925 7.5365 1.33964 7.53729 1.34026C7.53887 1.34152 7.54168 1.34376 7.54568 1.34697C7.55369 1.3534 7.56647 1.36371 7.58369 1.37782C7.61813 1.40604 7.67034 1.4494 7.73776 1.50713C7.87267 1.62266 8.06814 1.79542 8.30398 2.01928C8.77653 2.46783 9.40646 3.1171 10.035 3.91802C11.3066 5.53843 12.5 7.68715 12.5 10H14C14 7.19285 12.5684 4.71657 11.215 2.99198C10.531 2.1204 9.84847 1.41717 9.33665 0.931347C9.0803 0.688018 8.86561 0.49812 8.71341 0.367789C8.63728 0.302596 8.57669 0.252226 8.53423 0.217446C8.513 0.200054 8.49629 0.186552 8.48444 0.177037C8.47851 0.172279 8.47379 0.168517 8.47032 0.165762C8.46859 0.164385 8.46717 0.16326 8.46606 0.162388C8.46551 0.161952 8.46504 0.16158 8.46465 0.161271C8.46445 0.161116 8.46422 0.160932 8.46412 0.160855C8.46391 0.160686 8.46371 0.160534 8 0.75Z",fillRule:"evenodd",clipRule:"evenodd"}],dropOff:[{d:"M8.46371 0.160534L8 0.75L7.53628 0.160537C7.80837 -0.0535112 8.19162 -0.0535126 8.46371 0.160534ZM11.5303 3.40616C11.4252 3.26372 11.3199 3.1256 11.215 2.99198C10.531 2.1204 9.84847 1.41717 9.33665 0.931347C9.0803 0.688018 8.86561 0.49812 8.71341 0.367789C8.63728 0.302596 8.57669 0.252226 8.53423 0.217446C8.513 0.200054 8.49629 0.186552 8.48444 0.177037L8.47032 0.165762L8.46606 0.162388L8.46465 0.161271C8.46443 0.161102 8.46371 0.160534 8 0.75C7.53628 0.160537 7.5365 0.160369 7.53628 0.160537L7.53535 0.161274L7.53393 0.162392L7.52968 0.165766L7.51556 0.17704C7.5037 0.186555 7.48699 0.200057 7.46576 0.21745C7.42331 0.252231 7.36272 0.302601 7.28658 0.367794C7.13439 0.498127 6.9197 0.688027 6.66335 0.931359C6.15153 1.41719 5.46896 2.12042 4.78498 2.99201C3.43161 4.7166 2 7.19288 2 10C2 10.8646 2.18289 11.6866 2.5121 12.4292L1.21953 13.7225C0.926713 14.0154 0.926841 14.4903 1.21981 14.7831C1.51278 15.0759 1.98766 15.0758 2.28047 14.7828L14.7764 2.28019C15.0692 1.98722 15.0691 1.51234 14.7761 1.21953C14.4831 0.926713 14.0083 0.926841 13.7154 1.21981L11.5303 3.40616ZM10.4567 4.48035C10.3181 4.28665 10.177 4.09904 10.035 3.91802C9.40646 3.1171 8.77653 2.46783 8.30398 2.01928C8.19302 1.91395 8.09099 1.81994 8 1.73787C7.90902 1.81994 7.80699 1.91396 7.69603 2.01928C7.22347 2.46784 6.59354 3.11711 5.96502 3.91804C4.69339 5.53846 3.5 7.68718 3.5 10C3.5 10.4379 3.56255 10.8612 3.67921 11.2615L10.4567 4.48035ZM11.9591 7.22071L13.107 6.07213C13.6385 7.26227 14 8.58936 14 10C14 13.3137 11.3137 16 8 16C6.64503 16 5.39495 15.5509 4.39055 14.7933L5.46484 13.7185C6.18679 14.2116 7.05971 14.5 8 14.5C10.4853 14.5 12.5 12.4853 12.5 10C12.5 9.03629 12.2928 8.10108 11.9591 7.22071Z",fillRule:"evenodd",clipRule:"evenodd"}],duplicate:[{d:"M12 12H13C14.1046 12 15 11.1046 15 10V3C15 1.89543 14.1046 1 13 1H6C4.89543 1 4 1.89543 4 3V4H3C1.89543 4 1 4.89543 1 6V13C1 14.1046 1.89543 15 3 15H10C11.1046 15 12 14.1046 12 13V12ZM13 2.5H6C5.72386 2.5 5.5 2.72386 5.5 3V4H10C11.1046 4 12 4.89543 12 6V10.5H13C13.2761 10.5 13.5 10.2761 13.5 10V3C13.5 2.72386 13.2761 2.5 13 2.5ZM3 5.5H10C10.2761 5.5 10.5 5.72386 10.5 6V13C10.5 13.2761 10.2761 13.5 10 13.5H3C2.72386 13.5 2.5 13.2761 2.5 13V6C2.5 5.72386 2.72386 5.5 3 5.5Z",fillRule:"evenodd",clipRule:"evenodd"}],edit:[{d:"M1.0185 14.3551L1.8565 11.4905C1.95064 11.1687 2.12418 10.8757 2.36116 10.6385L8.93332 4.06006L11.9404 7.06608L5.36314 13.6372C5.12489 13.8752 4.8304 14.0492 4.50697 14.1431L1.63773 14.9757C1.25875 15.0857 0.907702 14.7339 1.0185 14.3551ZM13.0015 6.00591L14.7077 4.30133C15.0986 3.91078 15.0987 3.27721 14.7078 2.88659L13.1124 1.29211C12.7217 0.901645 12.0885 0.901888 11.6981 1.29265L9.99347 2.99889L13.0015 6.00591Z",fillRule:"evenodd",clipRule:"evenodd"}],editField:[{d:"M5.68989 8.07023L5.02075 10.358C4.90997 10.7368 5.26104 11.0886 5.64001 10.9786L7.93067 10.3137C8.25409 10.2199 8.54857 10.0458 8.7868 9.80782L13.5973 5.00145L11.001 2.40562L6.19436 7.21835C5.95747 7.45555 5.784 7.74848 5.68989 8.07023ZM15.7092 2.89131L14.3047 4.29465L11.7077 1.69807L13.1105 0.293402C13.5009 -0.0974885 14.1343 -0.0977529 14.5251 0.292811L15.7094 1.47665C16.1002 1.86727 16.1001 2.50078 15.7092 2.89131ZM3 1.00001H10.2845L8.78617 2.50001H3C2.72386 2.50001 2.5 2.72387 2.5 3.00001V11.4202C2.49738 11.4791 2.49741 11.5375 2.5 11.5954V13C2.5 13.2762 2.72386 13.5 3 13.5H4.4306C4.47066 13.5012 4.51099 13.5013 4.55156 13.5H13C13.2761 13.5 13.5 13.2762 13.5 13V7.21941L15 5.72055V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3.00001C1 1.89544 1.89543 1.00001 3 1.00001Z",fillRule:"evenodd",clipRule:"evenodd"}],editInline:[{d:"M3.68989 9.07023L3.02075 11.358C2.90997 11.7368 3.26104 12.0886 3.64001 11.9786L5.93067 11.3137C6.25409 11.2199 6.54857 11.0458 6.7868 10.8078L11.5973 6.00145L9.001 3.40562L4.19436 8.21835C3.95747 8.45555 3.784 8.74848 3.68989 9.07023ZM13.7092 3.89131L12.3047 5.29465L9.70766 2.69807L11.1105 1.2934C11.5009 0.902512 12.1343 0.902247 12.5251 1.29281L13.7094 2.47665C14.1002 2.86727 14.1001 3.50078 13.7092 3.89131ZM1.75 13.5069C1.33579 13.5069 1 13.8427 1 14.2569C1 14.6711 1.33579 15.0069 1.75 15.0069L14.25 15.0069C14.6642 15.0069 15 14.6711 15 14.2569C15 13.8427 14.6642 13.5069 14.25 13.5069L1.75 13.5069Z",fillRule:"evenodd",clipRule:"evenodd"}],ellipsisHorizontal:[{d:"M4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z",fillRule:"evenodd",clipRule:"evenodd"}],ellipsisVertical:[{d:"M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z",fillRule:"evenodd",clipRule:"evenodd"}],embeddedVideo:[{d:"M2.5 13C2.5 13.2761 2.72386 13.5 3 13.5H5.5V15H3L2.7959 14.9893C1.85435 14.8938 1.1062 14.1457 1.01074 13.2041L1 13V10.5H2.5V13ZM15 13C15 14.0357 14.2128 14.887 13.2041 14.9893L13 15H10.5V13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V10.5H15V13ZM6 5.50098C6.00018 5.10861 6.43107 4.86948 6.76367 5.07715L10.7646 7.57617C11.0781 7.77194 11.0781 8.22806 10.7646 8.42383L6.76367 10.9229C6.43108 11.1305 6.00021 10.8914 6 10.499V5.50098ZM5.5 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V5.5H1V3C1 1.89543 1.89543 1 3 1H5.5V2.5ZM13 1C14.1046 1 15 1.89543 15 3V5.5H13.5V3C13.5 2.72386 13.2761 2.5 13 2.5H10.5V1H13Z",fillRule:"evenodd",clipRule:"evenodd"}],enter:[{d:"M6.7805 12.7198C7.0733 13.0128 7.07315 13.4877 6.78016 13.7805C6.48717 14.0733 6.0123 14.0731 5.7195 13.7802L1.2195 9.27726C1.07889 9.13657 0.999936 8.94578 1 8.74686C1.00006 8.54795 1.07914 8.35721 1.21984 8.2166L5.71984 3.7195C6.01283 3.4267 6.4877 3.42686 6.7805 3.71984C7.0733 4.01283 7.07315 4.4877 6.78016 4.7805L3.55859 8H9.25C11.0449 8 12.5 6.54493 12.5 4.75V1.75C12.5 1.33579 12.8358 1 13.25 1C13.6642 1 14 1.33579 14 1.75V4.75C14 7.37335 11.8734 9.5 9.25 9.5H3.56273L6.7805 12.7198Z",fillRule:"",clipRule:""}],enterFullScreen:[{d:"M1.75 1C1.33579 1 1 1.33579 1 1.75V5.24573C1 5.65994 1.33579 5.99573 1.75 5.99573C2.16421 5.99573 2.5 5.65994 2.5 5.24573V2.5H5.24573C5.65994 2.5 5.99573 2.16421 5.99573 1.75C5.99573 1.33579 5.65994 1 5.24573 1H1.75ZM1.75 14.9957C1.33579 14.9957 1 14.6599 1 14.2457V10.75C1 10.3358 1.33579 10 1.75 10C2.16421 10 2.5 10.3358 2.5 10.75V13.4957H5.24573C5.65994 13.4957 5.99573 13.8315 5.99573 14.2457C5.99573 14.6599 5.65994 14.9957 5.24573 14.9957H1.75ZM14.9957 1.75C14.9957 1.33579 14.6599 1 14.2457 1H10.75C10.3358 1 10 1.33579 10 1.75C10 2.16421 10.3358 2.5 10.75 2.5H13.4957V5.24573C13.4957 5.65994 13.8315 5.99573 14.2457 5.99573C14.6599 5.99573 14.9957 5.65994 14.9957 5.24573V1.75ZM14.2457 14.9957C14.6599 14.9957 14.9957 14.6599 14.9957 14.2457V10.75C14.9957 10.3358 14.6599 10 14.2457 10C13.8315 10 13.4957 10.3358 13.4957 10.75V13.4957H10.75C10.3358 13.4957 10 13.8315 10 14.2457C10 14.6599 10.3358 14.9957 10.75 14.9957H14.2457Z",fillRule:"evenodd",clipRule:"evenodd"}],envelope:[{d:"M2 2C0.895431 2 0 2.89543 0 4V4.00702C0.0223212 4.01659 0.0443848 4.02733 0.066116 4.03926L8 8.39443L15.9339 4.03926C15.9556 4.02733 15.9777 4.01659 16 4.00702V4C16 2.89543 15.1046 2 14 2H2ZM16 5.7141L8.3609 9.90746C8.13612 10.0308 7.86388 10.0308 7.6391 9.90746L0 5.7141V12C0 13.1046 0.895431 14 2 14H14C15.1046 14 16 13.1046 16 12V5.7141Z",fillRule:"evenodd",clipRule:"evenodd"}],envelopeClock:[{d:"M0.323787 0.908562L7.5 5.12986L14.6762 0.908562C14.3193 0.361547 13.7019 0 13 0H2C1.29813 0 0.680695 0.361547 0.323787 0.908562ZM15 2.45837L7.88027 6.64645C7.64555 6.78452 7.35445 6.78452 7.11973 6.64645L0 2.45837V9C0 10.1046 0.89543 11 2 11H6.59069C7.06094 8.43988 9.30393 6.5 12 6.5C13.1068 6.5 14.1372 6.82692 15 7.38947V2.45837ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM12 9C12.2761 9 12.5 9.22386 12.5 9.5V11.7324L13.7773 12.584C14.0071 12.7372 14.0692 13.0476 13.916 13.2774C13.7628 13.5071 13.4524 13.5692 13.2227 13.416L11.7226 12.416C11.5836 12.3233 11.5 12.1672 11.5 12V9.5C11.5 9.22386 11.7239 9 12 9Z",fillRule:"evenodd",clipRule:"evenodd"}],envelopeCog:[{d:"M12.643 8a.5.5 0 0 1 .488.394l.168.774c.353.124.677.312.955.55l.746-.24.005-.002a.5.5 0 0 1 .587.225l.343.595a.5.5 0 0 1-.096.62l-.587.533a3 3 0 0 1 0 1.102l.587.531a.5.5 0 0 1 .098.621l-.346.599a.5.5 0 0 1-.589.224l-.75-.246a3 3 0 0 1-.953.552l-.167.773a.5.5 0 0 1-.488.395h-.692a.5.5 0 0 1-.49-.398l-.16-.77a3 3 0 0 1-.955-.55l-.753.241a.5.5 0 0 1-.586-.226l-.346-.599a.5.5 0 0 1 .1-.622l.587-.524a3 3 0 0 1 0-1.104l-.587-.528a.5.5 0 0 1-.098-.621l.343-.595a.5.5 0 0 1 .586-.226l.755.242c.278-.239.6-.428.954-.552l.165-.772a.5.5 0 0 1 .49-.396zm-.343 3.001a1 1 0 1 0 0 1.998 1 1 0 0 0 0-1.998 M15 7.209A5.5 5.5 0 0 0 6.892 11H2a2 2 0 0 1-2-2V2.458l7.12 4.188a.75.75 0 0 0 .76 0L15 2.458z M13 0c.702 0 1.319.361 1.676.908L7.5 5.13.324.908A2 2 0 0 1 2 0z",fillRule:"evenodd",clipRule:"evenodd"}],envelopeOpenOutline:[{d:"M13.2 16H2.8C1.26 16 0 14.74 0 13.2V5.13C0 4 0.680001 2.98 1.72 2.55L7.69 0.06C7.89 -0.02 8.11 -0.02 8.31 0.06L14.28 2.55C15.33 2.99 16 4 16 5.13V13.2C16 14.74 14.74 16 13.2 16ZM1.6 6.39V13.2C1.6 13.86 2.14 14.4 2.8 14.4H13.2C13.86 14.4 14.4 13.86 14.4 13.2V6.37L9.54 9.54C8.61 10.15 7.41 10.15 6.47 9.54L1.6 6.39ZM1.74 4.57L7.34 8.2C7.74 8.46 8.26 8.46 8.66 8.2L14.25 4.56C14.12 4.33 13.92 4.13 13.66 4.03L8 1.67L2.34 4.03C2.08 4.14 1.87 4.34 1.74 4.58V4.57Z",fillRule:"evenodd",clipRule:"evenodd"}],envelopeOutline:[{d:"M13.2 14H2.8C1.26 14 0 12.74 0 11.2V4.8C0 3.26 1.26 2 2.8 2H13.2C14.74 2 16 3.26 16 4.8V11.2C16 12.74 14.74 14 13.2 14ZM1.6 5.36V11.2C1.6 11.86 2.14 12.4 2.8 12.4H13.2C13.86 12.4 14.4 11.86 14.4 11.2V5.34L9.54 8.54C8.61 9.15 7.4 9.15 6.47 8.54L1.6 5.36ZM2.14 3.8L7.35 7.2C7.75 7.46 8.27 7.46 8.67 7.2L13.86 3.79C13.67 3.67 13.45 3.6 13.21 3.6H2.8C2.55 3.6 2.33 3.67 2.14 3.8Z",fillRule:"evenodd",clipRule:"evenodd"}],envelopeSend:[{d:"M0.323787 0.908562L7.5 5.12986L14.6762 0.908562C14.3193 0.361547 13.7019 0 13 0H2C1.29813 0 0.680695 0.361547 0.323787 0.908562ZM15 2.45837L7.88027 6.64645C7.64555 6.78452 7.35445 6.78452 7.11973 6.64645L0 2.45837V9C0 10.1046 0.89543 11 2 11H7.33564C7.72208 10.6873 8.21416 10.5 8.75 10.5H10.5024C10.4895 10.3709 10.4883 10.2401 10.499 10.1089C10.5475 9.51716 10.8286 9.02007 11.1775 8.6739C11.5267 8.32755 12.0249 8.05152 12.6146 8.00622C13.2447 7.95781 13.8651 8.18455 14.3384 8.65635L14.341 8.65899L14.9789 9.29184C14.9928 9.19657 15 9.09913 15 9V2.45837ZM8.75 12.0001C8.33579 12.0001 8 12.3359 8 12.7501C8 13.1643 8.33579 13.5001 8.75 13.5001L13.4393 13.5001L12.2197 14.7197C11.9268 15.0126 11.9268 15.4875 12.2197 15.7803C12.5126 16.0732 12.9874 16.0732 13.2803 15.7803L15.7803 13.2804C16.0695 12.9912 16.0709 12.4906 15.7803 12.2001L13.2803 9.71982C12.5981 9.03764 11.529 10.0995 12.21 10.7805L13.4393 12.0001L8.75 12.0001Z",fillRule:"evenodd",clipRule:"evenodd"}],envelopeStack:[{d:"M13 12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.235l6.14 3.096a.75.75 0 0 0 .72 0L13 8.235z M14 2a2 2 0 0 1 2 2v5c0 .932-.638 1.711-1.5 1.934V5.5a2 2 0 0 0-2-2H3.065A2 2 0 0 1 5 2z M11 5c.95 0 1.744.664 1.947 1.553L6.5 9.818.052 6.553A2 2 0 0 1 2 5z",fillRule:"evenodd",clipRule:"evenodd"}],error:[{d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM7 4C7 3.44772 7.44772 3 8 3C8.55229 3 9 3.44772 9 4V8C9 8.55228 8.55229 9 8 9C7.44772 9 7 8.55228 7 8V4ZM8 13C8.69036 13 9.25 12.4404 9.25 11.75C9.25 11.0596 8.69036 10.5 8 10.5C7.30964 10.5 6.75 11.0596 6.75 11.75C6.75 12.4404 7.30964 13 8 13Z",fillRule:"evenodd",clipRule:"evenodd"}],excerpt:[{d:"M6.99882 6.08504C6.9996 6.05679 7 6.02844 7 6C7 4.34315 5.65685 3 4 3C2.34315 3 1 4.34315 1 6C1 7.65685 2.34315 9 4 9C4.54594 9 5.05783 8.85417 5.49882 8.59934V9.25C5.49882 10.4926 4.49146 11.5 3.24882 11.5H2.75C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H3.24882C5.31989 13 6.99882 11.3211 6.99882 9.25V6.08504ZM14.9988 6.08506C14.9996 6.0568 15 6.02845 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C12.5459 9 13.0578 8.85417 13.4988 8.59934V9.25C13.4988 10.4926 12.4915 11.5 11.2488 11.5H10.75C10.3358 11.5 10 11.8358 10 12.25C10 12.6642 10.3358 13 10.75 13H11.2488C13.3199 13 14.9988 11.3211 14.9988 9.25V6.08506Z",fillRule:"evenodd",clipRule:"evenodd"}],exitFullScreen:[{d:"M9.75 6.99573C9.33579 6.99573 9 6.65994 9 6.24573V2.75C9 2.33579 9.33579 2 9.75 2C10.1642 2 10.5 2.33579 10.5 2.75V5.49573H13.2457C13.6599 5.49573 13.9957 5.83151 13.9957 6.24573C13.9957 6.65994 13.6599 6.99573 13.2457 6.99573H9.75ZM9.75 9C9.33579 9 9 9.33579 9 9.75V13.2457C9 13.6599 9.33579 13.9957 9.75 13.9957C10.1642 13.9957 10.5 13.6599 10.5 13.2457V10.5H13.2457C13.6599 10.5 13.9957 10.1642 13.9957 9.75C13.9957 9.33579 13.6599 9 13.2457 9H9.75ZM6.99573 9.75C6.99573 9.33579 6.65994 9 6.24573 9H2.75C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H5.49573V13.2457C5.49573 13.6599 5.83151 13.9957 6.24573 13.9957C6.65994 13.9957 6.99573 13.6599 6.99573 13.2457V9.75ZM6.24573 6.99573C6.65994 6.99573 6.99573 6.65994 6.99573 6.24573V2.75C6.99573 2.33579 6.65994 2 6.24573 2C5.83151 2 5.49573 2.33579 5.49573 2.75V5.49573H2.75C2.33579 5.49573 2 5.83151 2 6.24573C2 6.65994 2.33579 6.99573 2.75 6.99573H6.24573Z",fillRule:"evenodd",clipRule:"evenodd"}],expand:[{d:"M8.67048 2.24934C8.53121 2.09401 8.33354 2.0037 8.12494 2.00011C7.91635 1.99652 7.71569 2.07998 7.57117 2.23044L4.20912 5.73044C3.92217 6.02916 3.93172 6.50394 4.23044 6.79088C4.52916 7.07783 5.00394 7.06828 5.29088 6.76956L8.09309 3.85237L10.6916 6.75066C10.9681 7.05907 11.4423 7.08493 11.7507 6.80843C12.0591 6.53192 12.0849 6.05775 11.8084 5.74934L8.67048 2.24934ZM8.67048 13.7507C8.53121 13.906 8.33354 13.9963 8.12494 13.9999C7.91635 14.0035 7.71569 13.92 7.57117 13.7696L4.20912 10.2696C3.92217 9.97084 3.93172 9.49606 4.23044 9.20912C4.52916 8.92217 5.00394 8.93172 5.29088 9.23044L8.09309 12.1476L10.6916 9.24934C10.9681 8.94093 11.4423 8.91507 11.7507 9.19157C12.0591 9.46808 12.0849 9.94225 11.8084 10.2507L8.67048 13.7507Z",fillRule:"evenodd",clipRule:"evenodd"}],eye:[{d:"M10.0019 8C10.0019 9.10457 9.10646 10 8.00189 10C6.89732 10 6.00189 9.10457 6.00189 8C6.00189 6.89543 6.89732 6 8.00189 6C9.10646 6 10.0019 6.89543 10.0019 8Z M8.00189 2C4.31218 2 1.19217 4.36955 0.0608221 7.66533C0.0199959 7.78423 2.06634e-05 7.89258 1.46898e-08 8C-2.09697e-05 8.10916 0.0205667 8.21736 0.0608221 8.33467C1.19217 11.6304 4.31218 14 8.00189 14C11.6214 14 14.7211 11.7198 15.9052 8.52179C15.9689 8.34969 16 8.17417 16 8C16 7.82302 15.9679 7.64743 15.9052 7.47822C14.7211 4.28024 11.6214 2 8.00189 2ZM11.5019 8C11.5019 9.933 9.93489 11.5 8.00189 11.5C6.0689 11.5 4.50189 9.933 4.50189 8C4.50189 6.067 6.0689 4.5 8.00189 4.5C9.93489 4.5 11.5019 6.067 11.5019 8Z",fillRule:"evenodd",clipRule:"evenodd"}],eyeOff:[{d:"M13.7156,1.21981 C14.0084,0.926841 14.4833,0.926713 14.7763,1.21953 C15.0692,1.51234 15.0694,1.98722 14.7765,2.28019 L14.7765,2.28019 L13.2385,3.81902 L13.243,3.82258 L10.9504,6.11629 L10.9473,6.11149 L9.8414,7.21803 L9.8437,7.22351 L7.22436,9.84403 L7.21902,9.84178 L6.11308,10.9483 L6.11766,10.9512 L4.05212,13.0178 L4.04732,13.0152 L2.28062,14.7828 C1.98781,15.0758 1.51293,15.0759 1.21996,14.7831 C0.92699,14.4903 0.92686,14.0154 1.21967,13.7225 L1.21967,13.7225 L2.76804,12.1733 C1.53265,11.1877 0.58269,9.86045 0.05893,8.33467 C0.01867,8.21736 -0.00189201605,8.10916 -0.00189201605,8.00000022 C-0.00189201605,7.89258 0.0181,7.78423 0.05893,7.66533 C1.19028,4.36955 4.31029,2.00000022 8,2.00000022 C9.4279,2.00000022 10.7749,2.35489 11.9554,2.981 L11.9554,2.981 Z M14.332,4.85491 C15.0066,5.61907 15.5434,6.50626 15.9033,7.47822 C15.966,7.64743 15.9981,7.82302 15.9981,8 C15.9981,8.17417 15.967,8.34969 15.9033,8.52179 C14.7192,11.7198 11.6195,14 8,14 C7.1479,14 6.32619,13.8736 5.55233,13.6387 L5.55233,13.6387 L7.70246,11.4875 C7.80054,11.4958 7.89978,11.5 8,11.5 C9.933,11.5 11.5,9.933 11.5,8 C11.5,7.89923 11.4957,7.79945 11.4874,7.70084 L11.4874,7.70084 Z M8,4.5 C6.067,4.5 4.5,6.067 4.5,8 C4.5,8.69524 4.70271,9.34314 5.05226,9.88781 L6.15831,8.78117 C6.05638,8.54118 6,8.27717 6,8 C6,6.89543 6.89543,6 8,6 C8.27679,6 8.54045,6.05623 8.78018,6.15789 L9.8862,5.05124 C9.3419,4.70232 8.69457,4.5 8,4.5 Z",fillRule:"evenodd",clipRule:"evenodd"}],fastBackward:[{d:"M2.5 4.75C2.5 4.33579 2.16421 4 1.75 4C1.33579 4 1 4.33579 1 4.75V11.25C1 11.6642 1.33579 12 1.75 12C2.16421 12 2.5 11.6642 2.5 11.25V4.75ZM4.34907 7.24109L8.17507 4.12109C8.49907 3.84409 9.00007 4.07409 9.00007 4.50109V11.4991C9.00007 11.9261 8.49907 12.1561 8.17507 11.8791L4.34907 8.76009C3.88307 8.36009 3.88307 7.64009 4.34907 7.24109ZM10.3491 7.24109L14.1751 4.12109C14.4991 3.84409 15.0001 4.07409 15.0001 4.50109V11.4991C15.0001 11.9261 14.4991 12.1561 14.1751 11.8791L10.3491 8.76009C9.88307 8.36009 9.88307 7.64009 10.3491 7.24109Z",fillRule:"evenodd",clipRule:"evenodd"}],fastForward:[{d:"M14.25 4C14.6642 4 15 4.33579 15 4.75V11.25C15 11.6642 14.6642 12 14.25 12C13.8358 12 13.5 11.6642 13.5 11.25V4.75C13.5 4.33579 13.8358 4 14.25 4ZM1.825 4.12111C1.501 3.84411 1 4.07411 1 4.50111V11.4991C1 11.9261 1.501 12.1561 1.825 11.8791L5.651 8.75911C6.116 8.36011 6.116 7.64011 5.651 7.24011L1.825 4.12111ZM7.825 4.12111C7.501 3.84411 7 4.07411 7 4.50111V11.4991C7 11.9261 7.501 12.1561 7.825 11.8791L11.651 8.75911C12.117 8.36011 12.117 7.64011 11.651 7.24011L7.825 4.12111Z",fillRule:"evenodd",clipRule:"evenodd"}],fileAdd:[{d:"M3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H8.33276C8.55486 15.0601 8.88043 15.568 9.28588 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08579C9.54992 0 9.99504 0.184375 10.3232 0.512563L13.4874 3.67678C13.8156 4.00497 14 4.45008 14 4.91421V8.16619C13.6017 8.05783 13.1826 8 12.75 8C12.6661 8 12.5828 8.00217 12.5 8.00647V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 1.81066L12.1893 4.5H9.75C9.61193 4.5 9.5 4.38807 9.5 4.25V1.81066ZM12.75 9.49994C13.1642 9.49994 13.5 9.83573 13.5 10.2499V11.9999H15.25C15.6642 11.9999 16 12.3357 16 12.7499C16 13.1642 15.6642 13.4999 15.25 13.4999H13.5V15.2499C13.5 15.6642 13.1642 15.9999 12.75 15.9999C12.3358 15.9999 12 15.6642 12 15.2499V13.4999H10.25C9.83579 13.4999 9.5 13.1642 9.5 12.7499C9.5 12.3357 9.83579 11.9999 10.25 11.9999H12V10.2499C12 9.83573 12.3358 9.49994 12.75 9.49994Z",fillRule:"evenodd",clipRule:"evenodd"}],fileArchive:[{d:"M9.08594 0C9.55001 4.00268e-05 9.99509 0.184542 10.3232 0.512695L13.4873 3.67676C13.8155 4.00491 14 4.44999 14 4.91406V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08594ZM7 1.5C7 1.77614 6.77614 2 6.5 2H6V3H6.5C6.77614 3 7 3.22386 7 3.5C7 3.77614 6.77614 4 6.5 4H6V5H6.5C6.77614 5 7 5.22386 7 5.5C7 5.77614 6.77614 6 6.5 6H6V7H6.5C6.77614 7 7 7.22386 7 7.5V11C7 11.5523 6.55228 12 6 12H5C4.44772 12 4 11.5523 4 11V8.5C4 8.22386 4.22386 8 4.5 8H5V7H4.5C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6H5V5H4.5C4.22386 5 4 4.77614 4 4.5C4 4.22386 4.22386 4 4.5 4H5V3H4.5C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2H5V1.5H3.75C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H7ZM5 11H6V10H5V11ZM9.5 4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1895L9.5 1.81055V4.25Z",fillRule:"evenodd",clipRule:"evenodd"}],fileAudio:[{d:"M11.5 4C11.7761 4 12 4.22386 12 4.5V6C12 6.27614 11.7761 6.5 11.5 6.5H9V10C9 11.1046 8.10457 12 7 12C5.89543 12 5 11.1046 5 10C5 8.89543 5.89543 8 7 8C7.36429 8 7.70583 8.09741 8 8.26758V4.5C8 4.22386 8.22386 4 8.5 4H11.5Z",fillRule:"",clipRule:""},{d:"M13 1C14.1046 1 15 1.89543 15 3V13C15 14.0357 14.2128 14.887 13.2041 14.9893L13 15H3L2.7959 14.9893C1.85435 14.8938 1.1062 14.1457 1.01074 13.2041L1 13V3C1 1.89543 1.89543 1 3 1H13ZM3 2.5C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5H3Z",fillRule:"evenodd",clipRule:"evenodd"}],fileBlueprint:[{d:"M6.5 13.5H5C4.72386 13.5 4.5 13.2761 4.5 13V10H6.5V13.5Z",fillRule:"",clipRule:""},{d:"M11.5 13C11.5 13.2761 11.2761 13.5 11 13.5H7.5V10H11.5V13Z",fillRule:"",clipRule:""},{d:"M11 7C11.2761 7 11.5 7.22386 11.5 7.5V9H4.5V7.5C4.5 7.22386 4.72386 7 5 7H11Z",fillRule:"",clipRule:""},{d:"M9.08594 0C9.55001 4.00268e-05 9.99509 0.184542 10.3232 0.512695L13.4873 3.67676C13.8155 4.00491 14 4.44999 14 4.91406V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08594ZM3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1895L9.5 1.81055V4.25Z",fillRule:"evenodd",clipRule:"evenodd"}],fileBrush:[{d:"M9.0859 0C9.54998 4.00266e-05 9.99505 0.184542 10.3232 0.512693L13.4873 3.67674C13.8154 4.0049 13.9999 4.44997 13.9999 4.91404V5.99998H9.74996C8.78347 5.99998 7.99997 5.21648 7.99997 4.24998V1.49999H3.74999C3.61192 1.49999 3.49999 1.61192 3.49999 1.74999V14.2499C3.49999 14.388 3.61191 14.4999 3.74999 14.4999H5.99998V15.9999H3.74999C2.78349 15.9999 1.99999 15.2164 1.99999 14.2499V1.74999C1.99999 0.783499 2.78349 0 3.74999 0H9.0859ZM9.49996 4.24998C9.49996 4.38805 9.61189 4.49998 9.74996 4.49998H12.1894L9.49996 1.81054V4.24998Z",fillRule:"evenodd",clipRule:"evenodd"},{d:"M14.5595 13.7187C14.6934 13.8369 14.8013 13.9813 14.8769 14.1425C14.9526 14.3039 14.9941 14.4793 14.999 14.6572C15.0052 14.835 14.9745 15.012 14.9091 15.1777C14.8436 15.3435 14.7446 15.4947 14.6181 15.621C14.49 15.7474 14.3372 15.8461 14.1689 15.9111C14.0005 15.9761 13.8201 16.0062 13.6396 15.999C13.4615 15.9933 13.2863 15.9519 13.1249 15.8769C12.9636 15.8018 12.8196 15.6946 12.7011 15.5624L9.22262 11.7246C9.2401 11.718 9.258 11.7109 9.27536 11.7041C9.6122 11.5703 9.91814 11.3691 10.1748 11.1132C10.4096 10.879 10.5989 10.6028 10.7324 10.2998L14.5595 13.7187Z",fillRule:"",clipRule:""},{d:"M6.39353 7.10739C6.49717 6.96797 6.6969 6.97114 6.83298 7.07907C7.42814 7.55092 7.88161 7.50655 8.30173 7.46579C8.7112 7.42607 9.08906 7.38994 9.5361 7.83688C9.72471 8.0062 9.87706 8.21226 9.98336 8.44235C10.0896 8.67233 10.1475 8.92153 10.1543 9.17477C10.1609 9.42812 10.1165 9.68063 10.0224 9.91598C9.92837 10.1513 9.78683 10.3649 9.60739 10.5439C9.42795 10.7229 9.21406 10.8635 8.97848 10.957C8.74289 11.0505 8.49062 11.0951 8.23727 11.0878C7.98397 11.0805 7.73464 11.0218 7.50485 10.915C7.33243 10.8348 7.17404 10.7283 7.03415 10.6005L6.91208 10.4775C6.00899 9.56828 5.66717 8.08514 6.39353 7.10739Z",fillRule:"",clipRule:""}],fileCheck:[{d:"M3.5 1.75C3.5 1.61193 3.61193 1.5 3.75 1.5H8V4.25C8 5.2165 8.7835 6 9.75 6H12.5V10.3807L14 8.07602V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99504 0.184375 9.54992 0 9.08579 0H3.75C2.7835 0 2 0.783502 2 1.75V14.25C2 15.2165 2.7835 16 3.75 16H9.77029L8.65836 14.5H3.75C3.61193 14.5 3.5 14.3881 3.5 14.25V1.75ZM12.1893 4.5L9.5 1.81066V4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1893ZM15.8922 10.1305C16.102 9.77336 15.9825 9.31376 15.6253 9.10398C15.2682 8.89419 14.8086 9.01366 14.5988 9.37082L11.9427 13.8929L10.3525 11.7477C10.1058 11.415 9.63612 11.3452 9.30337 11.5919C8.97061 11.8385 8.90082 12.3082 9.14749 12.641L11.4127 15.6968C11.5626 15.899 11.8039 16.0126 12.0553 15.9991C12.3066 15.9857 12.5345 15.8471 12.6619 15.63L15.8922 10.1305Z",fillRule:"evenodd",clipRule:"evenodd"}],fileCSV:[{d:"M9.08594 0C9.55001 4.00268e-05 9.99509 0.184542 10.3232 0.512695L13.4873 3.67676C13.8155 4.00491 14 4.44999 14 4.91406V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08594ZM7.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V12.3418H7.75V14.5ZM3.5 14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H6.25V12.3418H3.5V14.25ZM7.75 10.8418H12.5V8.8418H7.75V10.8418ZM3.5 10.8418H6.25V8.8418H3.5V10.8418ZM3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V7.3418H12.5V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1895L9.5 1.81055V4.25Z",fillRule:"",clipRule:""}],fileDoc:[{d:"M5.97724 8.35086C5.89487 8.08729 5.61443 7.94039 5.35086 8.02276C5.08729 8.10513 4.94039 8.38556 5.02276 8.64914L6.27276 12.6491C6.33799 12.8579 6.53131 13 6.75 13C6.96869 13 7.16201 12.8579 7.22724 12.6491L8 10.1763L8.77276 12.6491C8.83799 12.8579 9.03131 13 9.25 13C9.46869 13 9.66201 12.8579 9.72724 12.6491L10.9772 8.64914C11.0596 8.38556 10.9127 8.10513 10.6491 8.02276C10.3856 7.94039 10.1051 8.08729 10.0228 8.35086L9.25 10.8237L8.47724 8.35086C8.41201 8.14213 8.21869 8 8 8C7.78131 8 7.58799 8.14213 7.52276 8.35086L6.75 10.8237L5.97724 8.35086ZM2 1.75C2 0.783502 2.7835 0 3.75 0H9.08579C9.54992 0 9.99504 0.184375 10.3232 0.512563L13.4874 3.67678C13.8156 4.00497 14 4.45008 14 4.91421V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75ZM3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 1.81066L12.1893 4.5H9.75C9.61193 4.5 9.5 4.38807 9.5 4.25V1.81066Z",fillRule:"evenodd",clipRule:"evenodd"}],fileDownload:[{d:"M3.5 1.75C3.5 1.61193 3.61193 1.5 3.75 1.5H8V4.25C8 5.2165 8.7835 6 9.75 6H12.5V6.51373C12.5821 6.50466 12.6655 6.5 12.75 6.5C13.2125 6.5 13.6425 6.63957 14 6.87889V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99504 0.184375 9.54992 0 9.08579 0H3.75C2.7835 0 2 0.783502 2 1.75V14.25C2 15.2165 2.7835 16 3.75 16H10.318L8.81802 14.5H3.75C3.61193 14.5 3.5 14.3881 3.5 14.25V1.75ZM12.1893 4.5L9.5 1.81066V4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1893ZM12.75 8C13.1642 8 13.5 8.33579 13.5 8.75V13.4393L14.7197 12.2197C15.0126 11.9268 15.4874 11.9268 15.7803 12.2197C16.0732 12.5126 16.0732 12.9874 15.7803 13.2803L13.2803 15.7803C13.269 15.7917 13.2573 15.8026 13.2453 15.8132C13.1132 15.9295 12.9399 16 12.75 16C12.5416 16 12.353 15.915 12.2171 15.7778L9.71967 13.2803C9.42678 12.9874 9.42678 12.5126 9.71967 12.2197C10.0126 11.9268 10.4874 11.9268 10.7803 12.2197L12 13.4393V8.75C12 8.33579 12.3358 8 12.75 8Z",fillRule:"evenodd",clipRule:"evenodd"}],fileExport:[{d:"M3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H7V16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08579C9.54992 0 9.99504 0.184375 10.3232 0.512563L13.4874 3.67678C13.8156 4.00497 14 4.45008 14 4.91421V8H12.5V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 1.81066L12.1893 4.5H9.75C9.61193 4.5 9.5 4.38807 9.5 4.25V1.81066ZM8 12.75C8 12.3358 8.33579 12 8.75 12L13.4393 12L12.2197 10.7803C11.9268 10.4874 11.9268 10.0126 12.2197 9.71967C12.5126 9.42678 12.9874 9.42678 13.2803 9.71967L15.7803 12.2197C15.921 12.3603 16 12.5511 16 12.75C16 12.9489 15.921 13.1397 15.7803 13.2803L13.2803 15.7803C12.9874 16.0732 12.5126 16.0732 12.2197 15.7803C11.9268 15.4874 11.9268 15.0126 12.2197 14.7197L13.4393 13.5L8.75 13.5C8.33579 13.5 8 13.1642 8 12.75Z",fillRule:"evenodd",clipRule:"evenodd"}],fileEye:[{d:"M3.5 1.75C3.5 1.61193 3.61193 1.5 3.75 1.5H8V4.25C8 5.2165 8.7835 6 9.75 6H12.5V7.76747C13.025 7.91118 13.5272 8.11007 14 8.35745V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99504 0.184375 9.54992 0 9.08579 0H3.75C2.7835 0 2 0.783502 2 1.75V14.25C2 15.2165 2.7835 16 3.75 16H5.97945C5.40792 15.5733 4.89861 15.0678 4.46744 14.5H3.75C3.61193 14.5 3.5 14.3881 3.5 14.25V1.75ZM12.1893 4.5L9.5 1.81066V4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1893ZM10.5 14C11.3284 14 12 13.3284 12 12.5C12 11.6716 11.3284 11 10.5 11C9.67157 11 9 11.6716 9 12.5C9 13.3284 9.67157 14 10.5 14ZM5.11489 12.9237C4.96259 12.6616 4.96259 12.3383 5.11489 12.0762C6.1828 10.2385 8.19441 9.00002 10.5 9.00002C12.8056 9.00002 14.8172 10.2385 15.8851 12.0762C16.0374 12.3383 16.0374 12.6616 15.8851 12.9237C14.8172 14.7614 12.8056 15.9999 10.5 15.9999C8.19441 15.9999 6.1828 14.7614 5.11489 12.9237ZM10.5 15C11.8807 15 13 13.8807 13 12.5C13 11.1193 11.8807 10 10.5 10C9.11929 10 8 11.1193 8 12.5C8 13.8807 9.11929 15 10.5 15Z",fillRule:"evenodd",clipRule:"evenodd"}],fileForm:[{d:"M6 10.75C6.27614 10.75 6.5 10.9739 6.5 11.25V12.25C6.5 12.5261 6.27614 12.75 6 12.75H5C4.72386 12.75 4.5 12.5261 4.5 12.25V11.25C4.5 10.9739 4.72386 10.75 5 10.75H6Z",fillRule:"",clipRule:""},{d:"M10.75 11C11.1642 11 11.5 11.3358 11.5 11.75C11.5 12.1642 11.1642 12.5 10.75 12.5H8C7.58579 12.5 7.25 12.1642 7.25 11.75C7.25 11.3358 7.58579 11 8 11H10.75Z",fillRule:"",clipRule:""},{d:"M6 7.75C6.27614 7.75 6.5 7.97386 6.5 8.25V9.25C6.5 9.52614 6.27614 9.75 6 9.75H5C4.72386 9.75 4.5 9.52614 4.5 9.25V8.25C4.5 7.97386 4.72386 7.75 5 7.75H6Z",fillRule:"",clipRule:""},{d:"M10.75 8C11.1642 8 11.5 8.33579 11.5 8.75C11.5 9.16421 11.1642 9.5 10.75 9.5H8C7.58579 9.5 7.25 9.16421 7.25 8.75C7.25 8.33579 7.58579 8 8 8H10.75Z",fillRule:"",clipRule:""},{d:"M9.08594 0C9.55001 4.00268e-05 9.99509 0.184542 10.3232 0.512695L13.4873 3.67676C13.8155 4.00491 14 4.44999 14 4.91406V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08594ZM3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1895L9.5 1.81055V4.25Z",fillRule:"evenodd",clipRule:"evenodd"}],fileGenerate:[{d:"M3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H6V16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08579C9.54992 0 9.99504 0.184375 10.3232 0.512563L13.4874 3.67678C13.8156 4.00497 14 4.45008 14 4.91421V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 1.81066L12.1893 4.5H9.75C9.61193 4.5 9.5 4.38807 9.5 4.25V1.81066ZM11.2165 11.2164C11.5094 10.9235 11.9843 10.9235 12.2772 11.2164L15.7813 14.7206C16.0742 15.0135 16.0742 15.4884 15.7813 15.7813C15.4884 16.0742 15.0135 16.0742 14.7207 15.7813L11.2165 12.2771C10.9236 11.9842 10.9236 11.5093 11.2165 11.2164ZM12 7.5C12 7.22386 11.7761 7 11.5 7C11.2239 7 11 7.22386 11 7.5V9C11 9.27614 11.2239 9.5 11.5 9.5C11.7761 9.5 12 9.27614 12 9V7.5ZM8.14645 8.14645C8.34171 7.95118 8.65829 7.95118 8.85355 8.14645L10.3536 9.64645C10.5488 9.84171 10.5488 10.1583 10.3536 10.3536C10.1583 10.5488 9.84171 10.5488 9.64645 10.3536L8.14645 8.85355C7.95118 8.65829 7.95118 8.34171 8.14645 8.14645ZM14.1464 8.14645C14.3417 7.95118 14.6583 7.95118 14.8536 8.14645C15.0488 8.34171 15.0488 8.65829 14.8536 8.85355L13.3536 10.3536C13.1583 10.5488 12.8417 10.5488 12.6464 10.3536C12.4512 10.1583 12.4512 9.84171 12.6464 9.64645L14.1464 8.14645ZM7.00012 11.5029C7.00012 11.2268 7.22398 11.0029 7.50012 11.0029H9.00012C9.27626 11.0029 9.50012 11.2268 9.50012 11.5029C9.50012 11.7791 9.27626 12.0029 9.00012 12.0029H7.50012C7.22398 12.0029 7.00012 11.7791 7.00012 11.5029ZM10.3536 13.3536C10.5488 13.1583 10.5488 12.8417 10.3536 12.6464C10.1583 12.4512 9.84171 12.4512 9.64645 12.6464L8.14645 14.1464C7.95118 14.3417 7.95118 14.6583 8.14645 14.8536C8.34171 15.0488 8.65829 15.0488 8.85355 14.8536L10.3536 13.3536Z",fillRule:"evenodd",clipRule:"evenodd"}],fileGeneric:[{d:"M3.75 0C2.7835 0 2 0.783502 2 1.75V14.25C2 15.2165 2.7835 16 3.75 16H12.25C13.2165 16 14 15.2165 14 14.25V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99504 0.184375 9.54992 0 9.08579 0H3.75ZM3.5 1.75C3.5 1.61193 3.61193 1.5 3.75 1.5H8V4.25C8 5.2165 8.7835 6 9.75 6H12.5V14.25C12.5 14.3881 12.3881 14.5 12.25 14.5H3.75C3.61193 14.5 3.5 14.3881 3.5 14.25V1.75ZM12.1893 4.5L9.5 1.81066V4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1893Z",fillRule:"evenodd",clipRule:"evenodd"}],fileLock:[{d:"M3.75 0C2.7835 0 2 0.783502 2 1.75V14.25C2 15.2165 2.7835 16 3.75 16H6.70802C6.57422 15.6938 6.5 15.3556 6.5 15V14.5H3.75C3.61193 14.5 3.5 14.3881 3.5 14.25V1.75C3.5 1.61193 3.61193 1.5 3.75 1.5H8V4.25C8 5.2165 8.7835 6 9.75 6H10.0631C10.6374 5.68142 11.2982 5.5 12.0015 5.5C12.7294 5.5 13.4119 5.69437 14 6.03404V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99504 0.184375 9.54992 0 9.08579 0H3.75ZM12.1893 4.5L9.5 1.81066V4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1893Z M8 12C8 11.4477 8.44772 11 9 11H9.5V9.50149C9.5 8.11995 10.62 7 12.0015 7C13.383 7 14.503 8.11995 14.503 9.50149V11H15C15.5523 11 16 11.4477 16 12V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V12ZM13.003 11V9.50149C13.003 8.94838 12.5546 8.5 12.0015 8.5C11.4484 8.5 11 8.94838 11 9.50149V11H13.003Z",fillRule:"evenodd",clipRule:"evenodd"}],filePdf:[{d:"M3.49999 1.75C3.49999 1.61193 3.61192 1.5 3.74999 1.5H7.99999V4.25C7.99999 5.2165 8.78349 6 9.74999 6H12.5V7.5H14V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99503 0.184375 9.54991 0 9.08578 0H3.74999C2.78349 0 1.99999 0.783502 1.99999 1.75V7.5H3.49999V1.75ZM12.1893 4.5L9.49999 1.81066V4.25C9.49999 4.38807 9.61192 4.5 9.74999 4.5H12.1893ZM6.50385 9C6.2277 9 6.00385 9.22386 6.00385 9.5V14.5C6.00385 14.7761 6.2277 15 6.50385 15H7.50385C8.88456 15 10.0038 13.8807 10.0038 12.5V11.5C10.0038 10.1193 8.88456 9 7.50385 9H6.50385ZM7.50385 14H7.00385V10H7.50385C8.33227 10 9.00385 10.6716 9.00385 11.5V12.5C9.00385 13.3284 8.33227 14 7.50385 14ZM1.5 9.00397C1.22386 9.00397 1 9.22783 1 9.50397V14.504C1 14.7801 1.22386 15.004 1.5 15.004C1.77614 15.004 2 14.7801 2 14.504V13H3.00198C4.10546 13 5 12.1055 5 11.002C5 9.89851 4.10546 9.00397 3.00198 9.00397H1.5ZM3.00198 12H2V10.004H3.00198C3.55317 10.004 4 10.4508 4 11.002C4 11.5532 3.55317 12 3.00198 12ZM11 9.5C11 9.22386 11.2239 9 11.5 9H14.5C14.7761 9 15 9.22386 15 9.5C15 9.77615 14.7761 10 14.5 10H12V11.5H14C14.2761 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.2761 12.5 14 12.5H12V14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5V9.5Z",fillRule:"evenodd",clipRule:"evenodd"}],filePowerPoint:[{d:"M9.08594 0C9.55001 4.00268e-05 9.99509 0.184542 10.3232 0.512695L13.4873 3.67676C13.8155 4.00491 14 4.44999 14 4.91406V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08594ZM3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM8.25 7C9.49264 7 10.5 8.00736 10.5 9.25C10.5 10.4926 9.49264 11.5 8.25 11.5H7.5V12.75C7.5 13.1642 7.16421 13.5 6.75 13.5C6.33579 13.5 6 13.1642 6 12.75V7.75C6 7.33579 6.33579 7 6.75 7H8.25ZM7.5 10H8.25C8.66421 10 9 9.66421 9 9.25C9 8.83579 8.66421 8.5 8.25 8.5H7.5V10ZM9.5 4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1895L9.5 1.81055V4.25Z",fillRule:"",clipRule:""}],fileSend:[{d:"M9.08579,0 C9.54992,0 9.99504,0.184375 10.3232,0.512563 L13.3385,3.52788 C13.2273,3.51097 13.1135,3.5022 12.9976,3.5022 C12.4895,3.5022 12.0207,3.67069 11.6442,3.95485 L9.5,1.81066 L9.5,4.25 C9.5,4.38807 9.61193,4.5 9.75,4.5 L11.1285,4.5 C10.8886,4.85769 10.7487,5.28805 10.7487,5.7511 C10.7487,5.83522 10.7533,5.91827 10.7623,6 L9.75,6 C8.7835,6 8,5.2165 8,4.25 L8,1.5 L3.75,1.5 C3.61193,1.5 3.5,1.61193 3.5,1.75 L3.5,14.25 C3.5,14.3881 3.61193,14.5 3.75,14.5 L12.25,14.5 C12.3881,14.5 12.5,14.3881 12.5,14.25 L12.5,12 L14,12 L14,14 C14,15.1046 13.1046,16 12,16 L3.75,16 C2.7835,16 2,15.2165 2,14.25 L2,1.75 C2,0.783502 2.7835,0 3.75,0 L9.08579,0 Z M12.4697,5.21967 C12.7626,4.92678 13.2374,4.92678 13.5303,5.21967 L13.5303,5.21967 L15.4971,7.18643 C15.5199,7.20662 15.5414,7.22817 15.5616,7.25096 L15.5616,7.25096 L15.7784,7.46772 C16.0713,7.76061 16.0713,8.23548 15.7784,8.52838 L15.7784,8.52838 L13.5303,10.7764 C13.2374,11.0693 12.7626,11.0693 12.4697,10.7764 C12.1768,10.4835 12.1768,10.0087 12.4697,9.71576 L12.4697,9.71576 L13.6874,8.49805 L12.75,8.49805 C10.9551,8.49805 9.5,9.95312 9.5,11.748 L9.5,11.748 L9.5,12.2469 C9.5,12.6611 9.16421,12.9969 8.75,12.9969 C8.33579,12.9969 8,12.6611 8,12.2469 L8,12.2469 L8,11.748 C8,9.1247 10.1266,6.99805 12.75,6.99805 L12.75,6.99805 L13.1874,6.99805 L12.4697,6.28033 C12.1768,5.98744 12.1768,5.51256 12.4697,5.21967 Z",fillRule:"evenodd",clipRule:"evenodd"}],fileSigned:[{d:"M7.75 8C8.10985 8 8.47327 8.14708 8.69629 8.49707C8.87793 8.78216 8.89733 9.10183 8.89258 9.31348C8.88287 9.74278 8.74451 10.2778 8.64844 10.6758C8.58014 10.9588 8.5293 11.1912 8.5 11.376C8.59705 11.3018 8.71103 11.1902 8.84961 11.0225C8.96212 10.8862 9.15487 10.6313 9.30859 10.4688C9.45002 10.3192 9.77279 10 10.25 10C10.7837 10 11.0983 10.3547 11.2461 10.6299C11.3859 10.8903 11.4443 11.1845 11.4727 11.4033C11.5029 11.6362 11.5088 11.8607 11.5078 12.0205C11.5073 12.1016 11.5051 12.1697 11.5029 12.2188C11.5018 12.2434 11.5009 12.2637 11.5 12.2783C11.4996 12.2855 11.4993 12.2914 11.499 12.2959C11.4989 12.2982 11.498 12.3018 11.498 12.3018V12.3047C11.4673 12.7176 11.1073 13.0285 10.6943 12.998C10.2815 12.9673 9.97146 12.6073 10.002 12.1943C10.002 12.1943 10.0028 12.1911 10.0029 12.1885C10.0034 12.1811 10.0032 12.1685 10.0039 12.1523C10.0054 12.1194 10.0075 12.0699 10.0078 12.0107C10.0079 11.9993 10.0069 11.9875 10.0068 11.9756L10.0059 11.9775C9.69389 12.3552 9.11638 13 8.19531 13C7.84984 13 7.49072 12.8785 7.24316 12.5596C7.0269 12.2809 6.98082 11.9555 6.97363 11.7266C6.9595 11.2761 7.0924 10.7304 7.19043 10.3242C7.23687 10.1318 7.2758 9.96097 7.30859 9.81152C7.18067 9.94379 7.04336 10.1137 6.90527 10.3193C6.50286 10.9188 6.156 11.7126 5.97754 12.4307C5.87766 12.8326 5.47128 13.0774 5.06934 12.9775C4.66739 12.8777 4.42266 12.4713 4.52246 12.0693C4.74098 11.19 5.15585 10.2335 5.66016 9.48242C5.91221 9.10706 6.20462 8.75624 6.5293 8.49121C6.84588 8.23281 7.26359 8 7.75 8Z",fillRule:"",clipRule:""},{d:"M9.08594 0C9.55001 4.00268e-05 9.99509 0.184542 10.3232 0.512695L13.4873 3.67676C13.8155 4.00491 14 4.44999 14 4.91406V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75C2 0.783502 2.7835 0 3.75 0H9.08594ZM3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V6H9.75C8.7835 6 8 5.2165 8 4.25V1.5H3.75ZM9.5 4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1895L9.5 1.81055V4.25Z",fillRule:"evenodd",clipRule:"evenodd"}],fileText:[{d:"M5.75 8C5.33579 8 5 8.33579 5 8.75C5 9.16421 5.33579 9.5 5.75 9.5H10.25C10.6642 9.5 11 9.16421 11 8.75C11 8.33579 10.6642 8 10.25 8H5.75ZM5 11.75C5 11.3358 5.33579 11 5.75 11H10.25C10.6642 11 11 11.3358 11 11.75C11 12.1642 10.6642 12.5 10.25 12.5H5.75C5.33579 12.5 5 12.1642 5 11.75ZM3.75 0C2.7835 0 2 0.783502 2 1.75V14.25C2 15.2165 2.7835 16 3.75 16H12.25C13.2165 16 14 15.2165 14 14.25V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99504 0.184375 9.54992 0 9.08579 0H3.75ZM3.5 1.75C3.5 1.61193 3.61193 1.5 3.75 1.5H8V4.25C8 5.2165 8.7835 6 9.75 6H12.5V14.25C12.5 14.3881 12.3881 14.5 12.25 14.5H3.75C3.61193 14.5 3.5 14.3881 3.5 14.25V1.75ZM12.1893 4.5L9.5 1.81066V4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1893Z",fillRule:"evenodd",clipRule:"evenodd"}],fileUnknown:[{d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM6.5 5.99969C6.5 5.17127 7.17157 4.49969 8 4.49969C8.82843 4.49969 9.5 5.17127 9.5 5.99969C9.5 6.59608 9.152 7.11266 8.64465 7.35468C8.06993 7.62885 7.25 8.24849 7.25 9.24969V9.75C7.25 10.1642 7.58579 10.5 8 10.5C8.41421 10.5 8.75 10.1642 8.75 9.75V9.24969C8.75 9.19909 8.76889 9.12246 8.86192 9.01588C8.95853 8.90519 9.10945 8.7949 9.2905 8.70852C10.2999 8.22698 11 7.19583 11 5.99969C11 4.34284 9.65685 2.99969 8 2.99969C6.34315 2.99969 5 4.34284 5 5.99969C5 6.41391 5.33579 6.74969 5.75 6.74969C6.16421 6.74969 6.5 6.41391 6.5 5.99969ZM2 1.75C2 0.783502 2.7835 0 3.75 0H9.08579C9.54992 0 9.99504 0.184375 10.3232 0.512563L13.4874 3.67678C13.8156 4.00497 14 4.45008 14 4.91421V14.25C14 15.2165 13.2165 16 12.25 16H3.75C2.7835 16 2 15.2165 2 14.25V1.75ZM3.75 1.5C3.61193 1.5 3.5 1.61193 3.5 1.75V14.25C3.5 14.3881 3.61193 14.5 3.75 14.5H12.25C12.3881 14.5 12.5 14.3881 12.5 14.25V4.91421C12.5 4.84791 12.4737 4.78432 12.4268 4.73744L9.26256 1.57322C9.21568 1.52634 9.15209 1.5 9.08579 1.5H3.75Z",fillRule:"evenodd",clipRule:"evenodd"}],fileXls:[{d:"M6.24275 7.07125C6.47954 6.92918 6.78667 7.00596 6.92875 7.24275L8 9.02818L9.07125 7.24275C9.21333 7.00596 9.52046 6.92918 9.75725 7.07125C9.99404 7.21333 10.0708 7.52046 9.92875 7.75725L8.5831 10L9.92875 12.2428C10.0708 12.4795 9.99404 12.7867 9.75725 12.9287C9.52046 13.0708 9.21333 12.994 9.07125 12.7572L8 10.9718L6.92875 12.7572C6.78667 12.994 6.47954 13.0708 6.24275 12.9287C6.00596 12.7867 5.92918 12.4795 6.07125 12.2428L7.4169 10L6.07125 7.75725C5.92918 7.52046 6.00596 7.21333 6.24275 7.07125ZM3.75 0C2.7835 0 2 0.783502 2 1.75V14.25C2 15.2165 2.7835 16 3.75 16H12.25C13.2165 16 14 15.2165 14 14.25V4.91421C14 4.45008 13.8156 4.00497 13.4874 3.67678L10.3232 0.512563C9.99504 0.184375 9.54992 0 9.08579 0H3.75ZM3.5 1.75C3.5 1.61193 3.61193 1.5 3.75 1.5H8V4.25C8 5.2165 8.7835 6 9.75 6H12.5V14.25C12.5 14.3881 12.3881 14.5 12.25 14.5H3.75C3.61193 14.5 3.5 14.3881 3.5 14.25V1.75ZM12.1893 4.5L9.5 1.81066V4.25C9.5 4.38807 9.61193 4.5 9.75 4.5H12.1893Z",fillRule:"evenodd",clipRule:"evenodd"}],filter:[{d:"M2 1H14C14.5523 1 15 1.44772 15 2V2.58544C15 2.85086 14.8945 3.10539 14.7067 3.29296L10 7.99408V12.7324C10 12.8996 9.91645 13.0557 9.77735 13.1484L7.12596 14.916C7.04383 14.9708 6.94732 15 6.84861 15H6.5C6.22386 15 6 14.7761 6 14.5V7.99609L1.29317 3.29294C1.10546 3.10538 1 2.85091 1 2.58556V2C1 1.44772 1.44772 1 2 1Z",fillRule:"",clipRule:""}],flag:[{d:"M2.74926 1C2.33546 1 2 1.33579 2 1.75V14.25C2 14.6642 2.33546 15 2.74926 15C3.16307 15 3.49853 14.6642 3.49853 14.25V9H13.4996C13.9112 9 14.1462 8.52962 13.8992 8.2L11 5L13.8992 1.8C14.1462 1.47038 13.9112 1 13.4996 1H2.99902C2.91435 1 2.83423 1 2.74926 1Z",fillRule:"",clipRule:""}],flagLine:[{d:"M2.75 1C2.33579 1 2 1.33579 2 1.75V14.25C2 14.6642 2.33579 15 2.75 15C3.16421 15 3.5 14.6642 3.5 14.25V9H13C13.412 9 13.6472 8.52962 13.4 8.2L11 5L13.4 1.8C13.6472 1.47038 13.412 1 13 1H3C2.95454 1 2.90979 1.00303 2.86595 1.00891C2.82816 1.00304 2.78943 1 2.75 1ZM3.5 2.5V7.5H11L9.125 5L11 2.5H3.5Z",fillRule:"evenodd",clipRule:"evenodd"}],folderAdd:[{d:"M0 13V3C0 1.89543 0.89543 1 2 1H7L9 3H14C15.1046 3 16 3.89543 16 5V9.28588C15.1503 8.48843 14.0072 8 12.75 8C10.1266 8 8 10.1266 8 12.75C8 13.5641 8.20479 14.3303 8.56565 15H2C0.895431 15 0 14.1046 0 13ZM12.75 9.5C13.1642 9.5 13.5 9.83579 13.5 10.25V12H15.25C15.6642 12 16 12.3358 16 12.75C16 13.1642 15.6642 13.5 15.25 13.5H13.5V15.25C13.5 15.6642 13.1642 16 12.75 16C12.3358 16 12 15.6642 12 15.25V13.5H10.25C9.83579 13.5 9.5 13.1642 9.5 12.75C9.5 12.3358 9.83579 12 10.25 12H12V10.25C12 9.83579 12.3358 9.5 12.75 9.5Z",fillRule:"evenodd",clipRule:"evenodd"}],folderAddLine:[{d:"M9 4.5C8.60218 4.5 8.22064 4.34196 7.93934 4.06066L6.37868 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V13C1.5 13.2761 1.72386 13.5 2 13.5H8.05888C8.14374 14.035 8.31791 14.5402 8.56565 15H2C0.895431 15 0 14.1046 0 13V3C0 1.89543 0.89543 1 2 1H7L9 3H14C15.1046 3 16 3.89543 16 5V9.28588C15.568 8.88043 15.0601 8.55486 14.5 8.33276V5C14.5 4.72386 14.2761 4.5 14 4.5H9ZM12.75 9.5C13.1642 9.5 13.5 9.83579 13.5 10.25V12H15.25C15.6642 12 16 12.3358 16 12.75C16 13.1642 15.6642 13.5 15.25 13.5H13.5V15.25C13.5 15.6642 13.1642 16 12.75 16C12.3358 16 12 15.6642 12 15.25V13.5H10.25C9.83579 13.5 9.5 13.1642 9.5 12.75C9.5 12.3358 9.83579 12 10.25 12H12V10.25C12 9.83579 12.3358 9.5 12.75 9.5Z",fillRule:"evenodd",clipRule:"evenodd"}],folderClose:[{d:"M0 13V3C0 1.89543 0.89543 1 2 1H7L9 3H14C15.1046 3 16 3.89543 16 5V13C16 14.1046 15.1046 15 14 15H2C0.895431 15 0 14.1046 0 13Z",fillRule:"",clipRule:""}],folderCloseLine:[{d:"M9 4.5C8.60218 4.5 8.22064 4.34196 7.93934 4.06066L6.37868 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V13C1.5 13.2761 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.2761 14.5 13V5C14.5 4.72386 14.2761 4.5 14 4.5H9ZM7 1L9 3H14C15.1046 3 16 3.89543 16 5V13C16 14.1046 15.1046 15 14 15H2C0.895431 15 0 14.1046 0 13V3C0 1.89543 0.89543 1 2 1H7Z",fillRule:"evenodd",clipRule:"evenodd"}],folderOpen:[{d:"M1.49711 7.75722L0 11.5V3C0 1.89543 0.95939 1 2.14286 1H6.5625L8.4375 3H12.8571C14.0406 3 15 3.89543 15 5V6.5H3.35407C2.53626 6.5 1.80084 6.9979 1.49711 7.75722ZM3.08835 8.62656C3.24091 8.24798 3.60845 8 4.01698 8H14.9978C15.7235 8 16.208 8.74716 15.9114 9.40873L13.6698 14.4087C13.5085 14.7685 13.1508 15 12.7562 15H2.00204C1.29289 15 0.808591 14.2837 1.07342 13.6266L3.08835 8.62656Z",fillRule:"evenodd",clipRule:"evenodd"}],folderOpenLine:[{d:"M15 6.00002V5C15 3.89543 14.1046 3 13 3H8.4375L6.5625 1H2C0.89543 1 0 1.89543 0 3V13C0 14.1046 0.895431 15 2 15H13.6563C14.1362 15 14.5485 14.6591 14.6385 14.1877L15.9762 7.18769C16.0936 6.57328 15.6245 6.00368 15 6.00002ZM8.4375 4.5C8.02289 4.5 7.62677 4.32839 7.34319 4.02591L5.91265 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V12.9873L3.04722 6.75891C3.15798 6.31304 3.5583 6 4.01773 6H13.5V5C13.5 4.72386 13.2761 4.5 13 4.5H8.4375ZM2.91822 13.5H13.2428L14.3893 7.5H4.40871L2.91822 13.5Z",fillRule:"evenodd",clipRule:"evenodd"}],folderReceiveLine:[{d:"M7,1 L9,3 L14,3 C15.1046,3 16,3.89543 16,5 L16,13 C16,14.1046 15.1046,15 14,15 L2,15 C0.895431,15 0,14.1046 0,13 L0,12.5 L1.5,12.5 L1.5,13 C1.5,13.2761 1.72386,13.5 2,13.5 L14,13.5 C14.2761,13.5 14.5,13.2761 14.5,13 L14.5,5 C14.5,4.72386 14.2761,4.5 14,4.5 L9,4.5 C8.60218,4.5 8.22064,4.34196 7.93934,4.06066 L6.37868,2.5 L2,2.5 C1.72386,2.5 1.5,2.72386 1.5,3 L1.5,4 L0,4 L0,3 C0,1.89543 0.89543,1 2,1 L7,1 Z M3.21967,5.21967 C3.51256,4.92678 3.98743,4.92678 4.28033,5.21967 L4.28033,5.21967 L6.78033,7.71966 C6.79154,7.73087 6.80236,7.7424 6.81278,7.75423 C6.92931,7.8864 7,8.05994 7,8.25 C7,8.45841 6.91499,8.64696 6.77777,8.78288 L6.77777,8.78288 L4.28033,11.2803 C3.98744,11.5732 3.51257,11.5732 3.21967,11.2803 C2.92678,10.9874 2.92678,10.5126 3.21967,10.2197 L3.21967,10.2197 L4.43933,9.0000025 L0.75,9.0000025 C0.335787,9.0000025 0,8.66421 0,8.25 C0,7.83579 0.335787,7.5000025 0.75,7.5000025 L0.75,7.5000025 L4.43935,7.5000025 L3.21967,6.28033 C2.92678,5.98744 2.92678,5.51257 3.21967,5.21967 Z",fillRule:"evenodd",clipRule:"evenodd"}],folderSend:[{d:"M0 13V3C0 1.89543 0.89543 1 2 1H7L9 3H14C15.1046 3 16 3.89543 16 5V10.318L14.341 8.65901C13.4623 7.78033 12.0377 7.78033 11.159 8.65901C10.656 9.16204 10.4409 9.84399 10.5138 10.5H9.75C8.50736 10.5 7.5 11.5074 7.5 12.75V15H2C0.895431 15 0 14.1046 0 13ZM15.7803 12.2197C15.921 12.3603 16 12.5511 16 12.75C16 12.9489 15.921 13.1397 15.7803 13.2803L13.2803 15.7803C12.9874 16.0732 12.5126 16.0732 12.2197 15.7803C12.0086 15.5693 11.9497 15.2638 12.0427 15C12.0788 14.8976 12.1378 14.8015 12.2197 14.7197L13.4393 13.5H9.75C9.33579 13.5 9 13.1642 9 12.75C9 12.3358 9.33579 12 9.75 12H13.4393L12.2197 10.7803C12.1378 10.6985 12.0788 10.6024 12.0427 10.5C11.9497 10.2362 12.0086 9.93069 12.2197 9.71967C12.5126 9.42678 12.9874 9.42678 13.2803 9.71967L15.7803 12.2197Z",fillRule:"evenodd",clipRule:"evenodd"}],folderSendLine:[{d:"M7.93934 4.06066C8.22064 4.34196 8.60218 4.5 9 4.5H14C14.2761 4.5 14.5 4.72386 14.5 5V9H16V5C16 3.89543 15.1046 3 14 3H9L7 1H2C0.89543 1 0 1.89543 0 3V13C0 14.1046 0.895431 15 2 15H7V13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V3C1.5 2.72386 1.72386 2.5 2 2.5H6.37868L7.93934 4.06066ZM9 12.75C9 12.3358 9.33579 12 9.75 12L13.4393 12L12.2197 10.7803C11.9268 10.4874 11.9268 10.0126 12.2197 9.71967C12.5126 9.42678 12.9874 9.42678 13.2803 9.71967L15.7803 12.2197C15.7915 12.2309 15.8024 12.2424 15.8128 12.2542C15.9293 12.3864 16 12.5599 16 12.75C16 12.9584 15.915 13.147 15.7778 13.2829L13.2803 15.7803C12.9874 16.0732 12.5126 16.0732 12.2197 15.7803C11.9268 15.4874 11.9268 15.0126 12.2197 14.7197L13.4393 13.5L9.75 13.5C9.33579 13.5 9 13.1642 9 12.75Z",fillRule:"evenodd",clipRule:"evenodd"}],fontSize:[{d:"M6 3C6 2.44772 6.44772 2 7 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H12V13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13V4H7C6.44772 4 6 3.55228 6 3ZM0 7C0 6.44772 0.447715 6 1 6H7C7.55228 6 8 6.44772 8 7C8 7.55228 7.55228 8 7 8H5V13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13V8H1C0.447715 8 0 7.55228 0 7Z",fillRule:"evenodd",clipRule:"evenodd"}],footnote:[{d:"M16 0.750183C16 0.48015 15.8548 0.230963 15.6199 0.0977683C15.385 -0.0354263 15.0967 -0.0320632 14.8649 0.106573L12.365 1.60225C12.0095 1.8149 11.8937 2.27545 12.1064 2.63091C12.3191 2.98636 12.7796 3.10212 13.1351 2.88946L14.5 2.07286V6.24524C14.5 6.65945 14.8358 6.99524 15.25 6.99524C15.6642 6.99524 16 6.65945 16 6.24524V0.750183ZM8.00001 7.75C8.00001 7.33579 8.3358 7 8.75001 7H10.5023C11.883 7 13.0023 8.11929 13.0023 9.5C13.0023 9.99959 12.8557 10.465 12.6033 10.8555C13.4372 11.3278 14 12.2232 14 13.25C14 14.7688 12.7688 16 11.25 16H8.75001C8.3358 16 8.00001 15.6642 8.00001 15.25V7.75ZM9.50001 12V14.5H11.25C11.9404 14.5 12.5 13.9404 12.5 13.25C12.5 12.5596 11.9404 12 11.25 12H9.50001ZM9.50001 10.5H10.5023C11.0546 10.5 11.5023 10.0523 11.5023 9.5C11.5023 8.94772 11.0546 8.5 10.5023 8.5H9.50001V10.5ZM4.19117 7.49095C4.08248 7.19564 3.80099 6.99957 3.48631 7C3.17163 7.00043 2.89067 7.19725 2.78278 7.49286L0.0454791 14.9929C-0.0965352 15.382 0.103774 15.8125 0.492881 15.9545C0.881989 16.0966 1.31255 15.8962 1.45456 15.5071L2.18712 13.5H4.80444L5.54387 15.5091C5.68694 15.8978 6.11804 16.0969 6.50676 15.9538C6.89548 15.8108 7.09462 15.3797 6.95155 14.991L4.19117 7.49095ZM4.25236 12L3.49028 9.92943L2.73458 12H4.25236Z",fillRule:"evenodd",clipRule:"evenodd"}],google:[{d:"M13.4616 6.8742H8.48962C8.21362 6.8742 7.98962 7.0982 7.98962 7.3742V8.7102C7.98962 8.9852 8.21362 9.2102 8.48962 9.2102H11.3956C10.8206 10.8392 9.13462 11.9432 7.23462 11.5592C5.88662 11.2862 4.77362 10.2142 4.46462 8.8742C3.91562 6.4972 5.70562 4.3862 7.98962 4.3862C8.72462 4.3862 9.39962 4.6132 9.96862 4.9912C10.1646 5.1212 10.4196 5.1132 10.5856 4.9462L11.7636 3.7702C11.8896 3.6442 11.8836 3.4312 11.7446 3.3192C10.4976 2.3192 8.84762 1.8022 7.07062 2.0702C4.52962 2.4542 2.46262 4.5112 2.07262 7.0522C1.50062 10.7912 4.38462 14.0102 8.01762 14.0002C10.3366 13.9932 12.4246 12.5312 13.4306 10.4412C13.9636 9.3342 14.0766 8.2802 13.9576 7.2992C13.9276 7.0532 13.7086 6.8742 13.4616 6.8742Z",fillRule:"evenodd",clipRule:"evenodd"}],gridAdd:[{d:"M6 9C6.55228 9 7 9.44772 7 10V13C7 13.5523 6.55228 14 6 14H3C2.44772 14 2 13.5523 2 13V10C2 9.44772 2.44772 9 3 9H6Z M13 9C13.5523 9 14 9.44772 14 10V13C14 13.5523 13.5523 14 13 14H10C9.44772 14 9 13.5523 9 13V10C9 9.44772 9.44772 9 10 9H13Z M6 2C6.55228 2 7 2.44772 7 3V6C7 6.55228 6.55228 7 6 7H3C2.44772 7 2 6.55228 2 6V3C2 2.44772 2.44772 2 3 2H6Z M12 1C12.4142 1 12.75 1.33579 12.75 1.75V3.25H14.25C14.6642 3.25 15 3.58579 15 4C15 4.41421 14.6642 4.75 14.25 4.75H12.75V6.25C12.75 6.66421 12.4142 7 12 7C11.5858 7 11.25 6.66421 11.25 6.25V4.75H9.75C9.33579 4.75 9 4.41421 9 4C9 3.58579 9.33579 3.25 9.75 3.25H11.25V1.75C11.25 1.33579 11.5858 1 12 1Z",fillRule:"evenodd",clipRule:"evenodd"}],hamburger:[{d:"M1 3C1 2.44772 1.44772 2 2 2H14C14.5523 2 15 2.44772 15 3C15 3.55228 14.5523 4 14 4H2C1.44772 4 1 3.55228 1 3ZM1 13C1 12.4477 1.44772 12 2 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H2C1.44772 14 1 13.5523 1 13ZM2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H2Z",fillRule:"evenodd",clipRule:"evenodd"}],heading:[{d:"M4 1C4.55228 1 5 1.44772 5 2V7H11V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V8.5H5V14C5 14.5523 4.55228 15 4 15C3.44772 15 3 14.5523 3 14V2C3 1.44772 3.44772 1 4 1Z",fillRule:"",clipRule:""}],heading1:[{d:"M3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2V12C1 12.5523 1.44772 13 2 13C2.55228 13 3 12.5523 3 12V7.5H7V12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12V2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V6H3V2ZM14 8.75C14 8.46611 13.8397 8.20655 13.5859 8.07941C13.332 7.95228 13.0282 7.97936 12.8008 8.14938L10.8008 9.64505C10.4691 9.89312 10.4013 10.3631 10.6494 10.6948C10.8974 11.0266 11.3675 11.0944 11.6992 10.8463L12.5 10.2474V14.2451C12.5 14.6593 12.8358 14.9951 13.25 14.9951C13.6642 14.9951 14 14.6593 14 14.2451V8.75Z",fillRule:"evenodd",clipRule:"evenodd"}],heading2:[{d:"M3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2V12C1 12.5523 1.44772 13 2 13C2.55228 13 3 12.5523 3 12V7.5H7V12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12V2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V6H3V2ZM14.6645 10.7509C14.8852 10.369 15.001 9.93554 15 9.49445C14.999 9.05337 14.8814 8.62039 14.659 8.23948C14.4366 7.85856 14.1173 7.54327 13.7337 7.3256C13.3501 7.10794 12.9157 6.99565 12.4746 7.00013C12.0335 7.00461 11.6015 7.12571 11.2224 7.35113C10.8432 7.57655 10.5305 7.89827 10.3159 8.28362C10.1882 8.51292 10.056 8.80779 10.0076 9.14411C9.94867 9.5541 10.2332 9.93427 10.6432 9.99324C11.0532 10.0522 11.4334 9.76764 11.4924 9.35765C11.5046 9.27251 11.5453 9.1589 11.6263 9.01345C11.7122 8.85931 11.8373 8.73062 11.9889 8.64045C12.1406 8.55028 12.3134 8.50184 12.4898 8.50005C12.6663 8.49826 12.84 8.54317 12.9935 8.63024C13.1469 8.71731 13.2746 8.84342 13.3636 8.99579C13.4525 9.14816 13.4996 9.32135 13.5 9.49778C13.5004 9.67422 13.4541 9.84761 13.3658 10.0004C13.2822 10.1451 13.1637 10.2664 13.0214 10.3533C12.997 10.3648 12.9627 10.3814 12.9212 10.4022C12.8381 10.4439 12.7228 10.5045 12.5859 10.5836C12.3137 10.7407 11.9475 10.9758 11.5776 11.2867C10.8613 11.8888 10.0001 12.8886 10.0003 14.2548C10.0003 14.6689 10.3361 15.0047 10.7503 15.0047H14.2496C14.6638 15.0047 15 14.6689 15 14.2547C15 13.8404 14.6642 13.5047 14.25 13.5047H11.6722C11.8557 13.1071 12.1708 12.7476 12.5428 12.435C12.8279 12.1953 13.1168 12.0091 13.3359 11.8826C13.4446 11.8198 13.534 11.773 13.5943 11.7427C13.6244 11.7276 13.6471 11.7167 13.6611 11.7101L13.6754 11.7034L13.6765 11.7029C13.699 11.6928 13.7219 11.6812 13.7433 11.6689C14.126 11.4495 14.4438 11.1328 14.6645 10.7509Z",fillRule:"evenodd",clipRule:"evenodd"}],highlight:[{d:"M7 3.00157L9.69884 0.301344C10.0894 -0.0893805 10.7225 -0.0893806 11.1131 0.301345L15.6988 4.8895C16.0894 5.28023 16.0894 5.91372 15.6988 6.30445L13 9.00468L12.5 8.50442L10.7071 10.2982C10.3166 10.689 9.68342 10.689 9.29289 10.2982L5.70711 6.7106C5.31658 6.31987 5.31658 5.68638 5.70711 5.29565L7.5 3.50183L7 3.00157ZM1.75 11.3059L5.00445 8L8 11L6.36 12.7166C6.26656 12.8093 6.15574 12.8827 6.03391 12.9325C5.91207 12.9823 5.78161 13.0075 5.65 13.0067H2.46C2.26342 13.0059 2.07145 12.9472 1.90806 12.8378C1.74468 12.7284 1.61714 12.5733 1.54138 12.3918C1.46562 12.2103 1.44501 12.0105 1.48211 11.8174C1.51921 11.6242 1.61239 11.4463 1.75 11.3059ZM1 14.0073H15C15.2652 14.0073 15.5196 14.1127 15.7071 14.3003C15.8946 14.4879 16 14.7424 16 15.0078C16 15.2731 15.8946 15.5276 15.7071 15.7153C15.5196 15.9029 15.2652 16.0083 15 16.0083H1C0.734784 16.0083 0.48043 15.9029 0.292893 15.7153C0.105357 15.5276 0 15.2731 0 15.0078C0 14.7424 0.105357 14.4879 0.292893 14.3003C0.48043 14.1127 0.734784 14.0073 1 14.0073Z",fillRule:"evenodd",clipRule:"evenodd"}],home:[{d:"M8.43067 0.148725C8.16418 -0.0499629 7.7987 -0.0495356 7.53267 0.149775L0.300345 5.56836C-0.0311503 5.81672 -0.098543 6.28679 0.149819 6.61829C0.398181 6.94978 0.868249 7.01717 1.19974 6.76881L7.98347 1.68633L14.8018 6.76986C15.1338 7.01745 15.6037 6.94896 15.8513 6.61688C16.0989 6.28481 16.0304 5.8149 15.6983 5.56731L8.43067 0.148725ZM2.03316 8L2.0042 14.9959C2.00191 15.5498 2.45029 16 3.00419 16H6.00004V12C6.00004 11.4477 6.44776 11 7.00004 11H9.00004C9.55233 11 10 11.4477 10 12V16H13C13.5523 16 14 15.5523 14 15V8L8.00004 3.5L2.03316 8Z",fillRule:"evenodd",clipRule:"evenodd"}],image:[{d:"M3 11.9997L6.07992 7.22836C6.27687 6.92325 6.72313 6.92325 6.92008 7.22836L9 10.4505L10.0799 8.77755C10.2769 8.47243 10.7231 8.47243 10.9201 8.77755L13 11.9997H3ZM11.5 7C12.3284 7 13 6.32843 13 5.5C13 4.67157 12.3284 4 11.5 4C10.6716 4 10 4.67157 10 5.5C10 6.32843 10.6716 7 11.5 7ZM0 3C0 1.89543 0.895431 1 2 1H14C15.1046 1 16 1.89543 16 3V12.9998C16 14.1043 15.1046 14.9998 14 14.9998H2C0.895431 14.9998 0 14.1043 0 12.9998V3ZM2 2.5H14C14.2761 2.5 14.5 2.72386 14.5 3V12.9998C14.5 13.2759 14.2761 13.4998 14 13.4998H2C1.72386 13.4998 1.5 13.2759 1.5 12.9998V3C1.5 2.72386 1.72386 2.5 2 2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],import:[{d:"M12.027 3.5C10.2321 3.5 8.77699 4.95508 8.77699 6.75V8.26425L9.69036 7.24852C9.96732 6.94052 10.4415 6.91535 10.7495 7.19231C11.0575 7.46927 11.0827 7.94348 10.8057 8.25148L8.55769 10.7515C8.41545 10.9097 8.21273 11 8 11C7.78727 11 7.58455 10.9097 7.44231 10.7515L5.19427 8.25148C4.9173 7.94348 4.94247 7.46927 5.25047 7.19231C5.55847 6.91535 6.03268 6.94052 6.30964 7.24852L7.27699 8.32429V6.75C7.27699 4.12665 9.40364 2 12.027 2H14.25C14.6642 2 15 2.33579 15 2.75C15 3.16421 14.6642 3.5 14.25 3.5H12.027ZM12.5 6V13C12.5 13.2761 12.2761 13.5 12 13.5H4C3.72386 13.5 3.5 13.2761 3.5 13V5C3.5 4.72386 3.72386 4.5 4 4.5H6.19424C6.40279 3.95973 6.68424 3.45571 7.02654 3H4C2.89543 3 2 3.89543 2 5V13C2 14.1046 2.89543 15 4 15H12C13.1046 15 14 14.1046 14 13V6H12.5Z",fillRule:"evenodd",clipRule:"evenodd"}],inbox:[{d:"M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3ZM3 2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V9H11C10.4477 9 10 9.44771 10 10V11H6V10C6 9.44772 5.55228 9 5 9H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],inboxFlat:[{d:"M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3ZM3 2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V9H11C10.4477 9 10 9.44771 10 10V11H6V10C6 9.44772 5.55228 9 5 9H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],inboxReceive:[{d:"M8.75 5.43934V0.75C8.75 0.335786 8.41421 0 8 0C7.58579 0 7.25 0.335786 7.25 0.75V5.43934L6.03033 4.21967C5.73744 3.92678 5.26256 3.92678 4.96967 4.21967C4.67678 4.51256 4.67678 4.98744 4.96967 5.28033L7.46967 7.78033C7.76256 8.07322 8.23744 8.07322 8.53033 7.78033L11.0303 5.28033C11.3232 4.98744 11.3232 4.51256 11.0303 4.21967C10.7374 3.92678 10.2626 3.92678 9.96967 4.21967L8.75 5.43934ZM5 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1H11V2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V9H11C10.4477 9 10 9.44771 10 10V11H6V10C6 9.44772 5.55228 9 5 9H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5H5V1Z",fillRule:"evenodd",clipRule:"evenodd"}],inboxSend:[{d:"M8.28709 0.0569091C8.19866 0.0202391 8.10169 0 8 0C7.89831 0 7.80134 0.0202391 7.71291 0.0569091C7.62445 0.0935089 7.54158 0.147763 7.46967 0.21967L4.96967 2.71967C4.67678 3.01256 4.67678 3.48744 4.96967 3.78033C5.26256 4.07322 5.73744 4.07322 6.03033 3.78033L7.25 2.56066V7.25C7.25 7.66421 7.58579 8 8 8C8.41421 8 8.75 7.66421 8.75 7.25V2.56066L9.96967 3.78033C10.2626 4.07322 10.7374 4.07322 11.0303 3.78033C11.3232 3.48744 11.3232 3.01256 11.0303 2.71967L8.53038 0.21972C8.45847 0.147812 8.37555 0.0935089 8.28709 0.0569091ZM4 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1H12V2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V9H11C10.4477 9 10 9.44771 10 10V11H6V10C6 9.44772 5.55228 9 5 9H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5H4V1Z",fillRule:"evenodd",clipRule:"evenodd"}],increaseFontSize:[{d:"M12.75 0C13.1642 0 13.5 0.335786 13.5 0.75V2.5H15.25C15.6642 2.5 16 2.83579 16 3.25C16 3.66421 15.6642 4 15.25 4H13.5V5.75C13.5 6.16421 13.1642 6.5 12.75 6.5C12.3358 6.5 12 6.16421 12 5.75V4H10.25C9.83579 4 9.50001 3.66421 9.50001 3.25C9.50001 2.83579 9.83579 2.5 10.25 2.5H12V0.75C12 0.335786 12.3358 0 12.75 0ZM6 0.999021C6.30201 0.999021 6.57456 1.18018 6.6915 1.45864L11.9415 13.9607C12.1019 14.3426 11.9223 14.7822 11.5404 14.9425C11.1585 15.1029 10.7189 14.9233 10.5585 14.5414L8.86233 10.5023H3.13769L1.44152 14.5414C1.28114 14.9233 0.841535 15.1029 0.459628 14.9425C0.0777209 14.7822 -0.101866 14.3426 0.0585081 13.9607L1.90517 9.56312C1.92333 9.49321 1.95133 9.42726 1.98759 9.36683L5.30849 1.45864C5.42543 1.18018 5.69798 0.999021 6 0.999021ZM6 3.68611L8.23243 9.00226H3.76758L6 3.68611Z",fillRule:"evenodd",clipRule:"evenodd"}],indentLeft:[{d:"M3.00001 2C2.44773 2 2.00001 2.44772 2.00001 3C2.00001 3.55228 2.44773 4 3.00002 4H15C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2H3.00001ZM9.00001 7C8.44773 7 8.00001 7.44772 8.00001 8C8.00001 8.55228 8.44773 9 9.00001 9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H9.00001ZM2.00001 13C2.00001 12.4477 2.44773 12 3.00001 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H3.00002C2.44773 14 2.00001 13.5523 2.00001 13ZM1.23186 8.42731C0.917994 8.23138 0.917994 7.77399 1.23186 7.57806L5.23468 5.0793C5.56772 4.8714 5.99929 5.11107 5.99929 5.50392L5.99929 10.5014C5.99929 10.8943 5.56772 11.134 5.23468 10.9261L1.23186 8.42731Z",fillRule:"evenodd",clipRule:"evenodd"}],indentRight:[{d:"M3.00002 2C2.44773 2 2.00002 2.44772 2.00002 3C2.00002 3.55228 2.44773 4 3.00002 4H15C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2H3.00002ZM9.00002 7C8.44773 7 8.00002 7.44772 8.00002 8C8.00002 8.55228 8.44773 9 9.00002 9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H9.00002ZM2.00002 13C2.00002 12.4477 2.44773 12 3.00002 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H3.00002C2.44773 14 2.00002 13.5523 2.00002 13ZM5.76389 8.42731C6.07775 8.23138 6.07775 7.77399 5.76389 7.57806L1.76106 5.0793C1.42802 4.8714 0.99646 5.11107 0.99646 5.50392V10.5014C0.99646 10.8943 1.42802 11.134 1.76106 10.9261L5.76389 8.42731Z",fillRule:"evenodd",clipRule:"evenodd"}],info:[{d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.5 6H6.75C6.33579 6 6 6.33579 6 6.75C6 7.16421 6.33579 7.5 6.75 7.5H7.5V11H6.75C6.33579 11 6 11.3358 6 11.75C6 12.1642 6.33579 12.5 6.75 12.5H9.75C10.1642 12.5 10.5 12.1642 10.5 11.75C10.5 11.3358 10.1642 11 9.75 11H9V6.5C9 6.22386 8.77614 6 8.5 6ZM8 5C8.55229 5 9 4.55228 9 4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5Z",fillRule:"evenodd",clipRule:"evenodd"}],infoCircleLine:[{d:"M8.5 6H6.75C6.33579 6 6 6.33579 6 6.75C6 7.16421 6.33579 7.5 6.75 7.5H7.5V11H6.75C6.33579 11 6 11.3358 6 11.75C6 12.1642 6.33579 12.5 6.75 12.5H9.75C10.1642 12.5 10.5 12.1642 10.5 11.75C10.5 11.3358 10.1642 11 9.75 11H9V6.5C9 6.22386 8.77614 6 8.5 6ZM8 5C8.55229 5 9 4.55228 9 4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z",fillRule:"evenodd",clipRule:"evenodd"}],input:[{d:"M7.25479 0.998596C6.84058 0.998596 6.50479 1.33438 6.50479 1.7486C6.50479 2.16281 6.84058 2.4986 7.25479 2.4986H9.00131V13.4839H7.25479C6.84058 13.4839 6.50479 13.8197 6.50479 14.2339C6.50479 14.6481 6.84058 14.9839 7.25479 14.9839H12.25C12.6642 14.9839 13 14.6481 13 14.2339C13 13.8197 12.6642 13.4839 12.25 13.4839H10.5013V2.4986H12.25C12.6642 2.4986 13 2.16281 13 1.7486C13 1.33438 12.6642 0.998596 12.25 0.998596H7.25479ZM1.75 4H7.5V5.5H1.75C1.61193 5.5 1.5 5.61193 1.5 5.75V10.25C1.5 10.3881 1.61193 10.5 1.75 10.5H7.5V12H1.75C0.783501 12 0 11.2165 0 10.25V5.75C0 4.7835 0.783502 4 1.75 4ZM14.25 10.5H12V12H14.25C15.2165 12 16 11.2165 16 10.25V5.75C16 4.7835 15.2165 4 14.25 4H12V5.5H14.25C14.3881 5.5 14.5 5.61193 14.5 5.75V10.25C14.5 10.3881 14.3881 10.5 14.25 10.5Z",fillRule:"evenodd",clipRule:"evenodd"}],italic:[{d:"M6.74999 1C6.33578 1 5.99999 1.33579 5.99999 1.75C5.99999 2.16421 6.33578 2.5 6.74999 2.5L8.97244 2.5L5.45143 13.5H2.74649C2.33228 13.5 1.99649 13.8358 1.99649 14.25C1.99649 14.6642 2.33228 15 2.74649 15H5.98165C5.99326 15.0003 6.00484 15.0003 6.0164 15H9.24649C9.6607 15 9.99649 14.6642 9.99649 14.25C9.99649 13.8358 9.6607 13.5 9.24649 13.5H7.0264L10.5474 2.5L13.25 2.5C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H6.74999Z",fillRule:"",clipRule:""}],key:[{d:"M16 5C16 7.76142 13.7614 10 11 10C10.4021 10 9.8288 9.89507 9.29737 9.70263L7 12H5V14H3V16H0V13L6.29737 6.70263C6.10493 6.1712 6 5.59785 6 5C6 2.23858 8.23858 0 11 0C13.7614 0 16 2.23858 16 5ZM12.5 5C13.3284 5 14 4.32843 14 3.5C14 2.67157 13.3284 2 12.5 2C11.6716 2 11 2.67157 11 3.5C11 4.32843 11.6716 5 12.5 5Z",fillRule:"evenodd",clipRule:"evenodd"}],laptop:[{d:"M2.75 2C1.7835 2 1 2.7835 1 3.75V12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12V3.75C15 2.7835 14.2165 2 13.25 2H2.75ZM13.5 12V3.75C13.5 3.61193 13.3881 3.5 13.25 3.5H2.75C2.61193 3.5 2.5 3.61193 2.5 3.75V12H13.5Z",fillRule:"evenodd",clipRule:"evenodd"}],layer:[{d:"M0.597777 3.08497L7.21301 0.169949C7.72836 -0.0571387 8.31576 -0.0566278 8.83071 0.171357L15.4076 3.08317C16.2 3.43401 16.1999 4.55665 15.4075 4.90739L8.80684 7.82874C8.29073 8.05716 7.70194 8.05708 7.1859 7.82852L0.596043 4.90978C-0.196973 4.55854 -0.195904 3.4347 0.597777 3.08497ZM15.9149 7.60034C16.1381 8.10553 15.9095 8.69597 15.4043 8.91913L8.80467 11.8343C8.28966 12.0618 7.70262 12.0617 7.1877 11.834L0.595818 8.91896C0.0907164 8.6956 -0.137679 8.10506 0.0856825 7.59996C0.309044 7.09486 0.899581 6.86646 1.40468 7.08982L7.99657 10.0048L14.5962 7.08966C15.1013 6.8665 15.6918 7.09514 15.9149 7.60034ZM15.9149 11.6004C16.1381 12.1056 15.9095 12.696 15.4043 12.9191L8.80467 15.8343C8.28966 16.0618 7.70262 16.0617 7.1877 15.834L0.595818 12.919C0.0907164 12.6956 -0.137679 12.1051 0.0856825 11.6C0.309044 11.0949 0.899581 10.8665 1.40468 11.0898L7.99657 14.0048L14.5962 11.0897C15.1013 10.8665 15.6918 11.0952 15.9149 11.6004Z",fillRule:"evenodd",clipRule:"evenodd"}],lightBolt:[{d:"M3.10057 8.19177L9.08564 0.203293C9.3976 -0.213089 10.0599 0.0641345 9.98098 0.578069L8.99619 7H12.4987C12.9108 7 13.1463 7.46191 12.8993 7.79124L6.89478 15.7992C6.58254 16.2156 5.92014 15.9377 5.99964 15.4237L7 9H3.5013C3.08927 9 2.85381 8.52112 3.10057 8.19177Z",fillRule:"",clipRule:""}],lightBoltCircle:[{d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.08586 2.26846L4.09126 8.2214C3.86836 8.55357 4.10642 9 4.50645 9H7.5L7.01291 13.4106C6.9555 13.9304 7.63377 14.1783 7.92511 13.744L11.927 7.77855C12.1499 7.44637 11.9118 7 11.5118 7H8.5L8.99787 2.60332C9.05679 2.08298 8.37764 1.83362 8.08586 2.26846Z",fillRule:"evenodd",clipRule:"evenodd"}],lightBulb:[{d:"M9.25,14.5 C9.66421,14.5 10,14.8358 10,15.25 C10,15.6642 9.66421,16 9.25,16 L6.75,16 C6.33579,16 6,15.6642 6,15.25 C6,14.8358 6.33579,14.5 6.75,14.5 L9.25,14.5 Z M10.25,12 C10.6642,12 11,12.3358 11,12.75 C11,13.1642 10.6642,13.5 10.25,13.5 L5.75,13.5 C5.33579,13.5 5,13.1642 5,12.75 C5,12.3358 5.33579,12 5.75,12 L10.25,12 Z M8,0 C10.7614,0 13,2.23858 13,5 C13,5.66132 12.8716,6.29265 12.6384,6.87043 C12.5025,7.20712 12.3432,7.53462 12.1839,7.86205 C11.9648,8.31232 11.7458,8.76246 11.588,9.23613 L11.2279,10.3162 C11.0918,10.7246 10.7097,11 10.2792,11 L5.72075,11 C5.29032,11 4.90818,10.7246 4.77207,10.3162 L4.41205,9.23615 C4.25415,8.76247 4.03517,8.31233 3.81612,7.86205 C3.65682,7.53462 3.4975,7.20711 3.3616,6.87042 C3.12839,6.29264 3,5.66131 3,5 C3,2.23858 5.23858,0 8,0 Z",fillRule:"evenodd",clipRule:"evenodd"}],link:[{d:"M0 8C0 5.79086 1.79086 4 4 4H5.5C6.32843 4 7 4.67157 7 5.5H4C2.61929 5.5 1.5 6.61929 1.5 8C1.5 9.38071 2.61929 10.5 4 10.5H7C7 11.3284 6.32843 12 5.5 12H4C1.79086 12 0 10.2091 0 8ZM16 8C16 5.79086 14.2091 4 12 4H10.5C9.67157 4 9 4.67157 9 5.5H12C13.3807 5.5 14.5 6.61929 14.5 8C14.5 9.38071 13.3807 10.5 12 10.5H9C9 11.3284 9.67157 12 10.5 12H12C14.2091 12 16 10.2091 16 8ZM5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75H11C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25H5Z",fillRule:"evenodd",clipRule:"evenodd"}],listBullet:[{d:"M2.5 4.5C3.32843 4.5 4 3.82843 4 3C4 2.17157 3.32843 1.5 2.5 1.5C1.67157 1.5 1 2.17157 1 3C1 3.82843 1.67157 4.5 2.5 4.5ZM7 2C6.44772 2 6 2.44772 6 3C6 3.55228 6.44772 4 7 4H14C14.5523 4 15 3.55228 15 3C15 2.44772 14.5523 2 14 2H7ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H7ZM6 13C6 12.4477 6.44772 12 7 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H7C6.44772 14 6 13.5523 6 13ZM4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM2.5 14.5C3.32843 14.5 4 13.8284 4 13C4 12.1716 3.32843 11.5 2.5 11.5C1.67157 11.5 1 12.1716 1 13C1 13.8284 1.67157 14.5 2.5 14.5Z",fillRule:"evenodd",clipRule:"evenodd"}],listNumber:[{d:"M2.74098 0.0591502C2.90331 0.146015 3.00477 0.315063 3.00507 0.499174L3.01086 3.99917C3.01131 4.27532 2.78783 4.49954 2.51168 4.5C2.23554 4.50046 2.01131 4.27697 2.01086 4.00083L2.00661 1.43151L1.27676 1.91645C1.04676 2.06927 0.736424 2.00671 0.583602 1.77671C0.43078 1.54671 0.493345 1.23637 0.723345 1.08355L2.22836 0.0835489C2.38171 -0.0183416 2.57865 -0.027715 2.74098 0.0591502ZM6.00003 3.00001C6.00003 2.44772 6.44774 2.00001 7.00003 2.00001H14C14.5523 2.00001 15 2.44772 15 3.00001C15 3.55229 14.5523 4.00001 14 4.00001H7.00003C6.44774 4.00001 6.00003 3.55229 6.00003 3.00001ZM6.00003 8.00001C6.00003 7.44773 6.44774 7.00001 7.00003 7.00001H14C14.5523 7.00001 15 7.44773 15 8.00001C15 8.5523 14.5523 9.00001 14 9.00001H7.00003C6.44774 9.00001 6.00003 8.5523 6.00003 8.00001ZM7.00003 12C6.44774 12 6.00003 12.4477 6.00003 13C6.00003 13.5523 6.44774 14 7.00003 14H14C14.5523 14 15 13.5523 15 13C15 12.4477 14.5523 12 14 12H7.00003ZM2.00001 6.5C2.00001 6.22386 2.22387 6 2.50001 6C2.77616 6 3.00001 6.22386 3.00001 6.5C3.00001 6.63654 2.94595 6.75945 2.85692 6.85016C2.75844 6.95052 2.65052 7.05737 2.53842 7.16834C2.25761 7.44634 1.95059 7.75029 1.70002 8.04331C1.52041 8.25335 1.35066 8.47868 1.22421 8.71237C1.09875 8.94423 1.00001 9.21333 1.00001 9.50323C1.00001 9.63584 1.05269 9.76302 1.14646 9.85679C1.24023 9.95056 1.3674 10.0032 1.50001 10.0032H3.50007C3.77622 10.0032 4.00007 9.77938 4.00007 9.50323C4.00007 9.22709 3.77622 9.00323 3.50007 9.00323H2.21841C2.28525 8.90639 2.36611 8.80304 2.46004 8.69321C2.68234 8.43324 2.94001 8.17825 3.20774 7.9133C3.32744 7.79485 3.44921 7.67434 3.57067 7.55057C3.83572 7.28048 4.00001 6.90893 4.00001 6.5C4.00001 5.67157 3.32844 5 2.50001 5C1.67159 5 1.00001 5.67157 1.00001 6.5C1.00001 6.77614 1.22387 7 1.50001 7C1.77616 7 2.00001 6.77614 2.00001 6.5ZM1.92281 11.1142C2.1969 11.0006 2.4985 10.9709 2.78947 11.0288C3.08045 11.0867 3.34772 11.2296 3.5575 11.4393C3.76728 11.6491 3.91014 11.9164 3.96802 12.2074C4.02589 12.4983 3.99619 12.7999 3.88266 13.074C3.81767 13.2309 3.72689 13.3748 3.61487 13.5C3.72689 13.6252 3.81767 13.7691 3.88266 13.926C3.99619 14.2001 4.0259 14.5017 3.96802 14.7926C3.91014 15.0836 3.76728 15.3509 3.5575 15.5607C3.34772 15.7704 3.08045 15.9133 2.78947 15.9712C2.4985 16.0291 2.1969 15.9994 1.92281 15.8858C1.64872 15.7723 1.41446 15.58 1.24963 15.3334C1.08481 15.0867 0.996839 14.7967 0.996839 14.5C0.996839 14.2239 1.2207 14 1.49684 14C1.77298 14 1.99684 14.2239 1.99684 14.5C1.99684 14.5989 2.02616 14.6956 2.0811 14.7778C2.13605 14.86 2.21413 14.9241 2.3055 14.9619C2.39686 14.9998 2.49739 15.0097 2.59438 14.9904C2.69138 14.9711 2.78047 14.9235 2.85039 14.8536C2.92032 14.7836 2.96794 14.6945 2.98723 14.5975C3.00652 14.5006 2.99662 14.4 2.95878 14.3087C2.92094 14.2173 2.85685 14.1392 2.77462 14.0843C2.6924 14.0293 2.59573 14 2.49684 14C2.2207 14 1.99684 13.7761 1.99684 13.5C1.99684 13.2239 2.2207 13 2.49684 13C2.59573 13 2.6924 12.9707 2.77462 12.9157C2.85685 12.8608 2.92094 12.7827 2.95878 12.6913C2.99662 12.6 3.00652 12.4994 2.98723 12.4025C2.96794 12.3055 2.92032 12.2164 2.85039 12.1464C2.78047 12.0765 2.69138 12.0289 2.59438 12.0096C2.49739 11.9903 2.39686 12.0002 2.3055 12.0381C2.21413 12.0759 2.13605 12.14 2.0811 12.2222C2.02616 12.3044 1.99684 12.4011 1.99684 12.5C1.99684 12.7761 1.77298 13 1.49684 13C1.2207 13 0.996839 12.7761 0.996839 12.5C0.996839 12.2033 1.08481 11.9133 1.24963 11.6666C1.41446 11.42 1.64872 11.2277 1.92281 11.1142Z",fillRule:"evenodd",clipRule:"evenodd"}],lock:[{d:"M4 7V5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7ZM5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5V7H5.5V5Z",fillRule:"evenodd",clipRule:"evenodd"}],login:[{d:"M15 2.75C15 1.7835 14.2165 1 13.25 1H9.74564C9.33142 1 8.99564 1.33579 8.99564 1.75C8.99564 2.16421 9.33142 2.5 9.74564 2.5H13.25C13.3881 2.5 13.5 2.61193 13.5 2.75V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H9.74564C9.33142 13.5 8.99564 13.8358 8.99564 14.25C8.99564 14.6642 9.33142 15 9.74564 15H13.25C14.2165 15 15 14.2165 15 13.25V2.75ZM5.46967 4.21979C5.76256 3.9269 6.23744 3.9269 6.53033 4.21979L9.78033 7.46978C10.0732 7.76268 10.0732 8.23755 9.78033 8.53044L6.53033 11.7805C6.23744 12.0733 5.76256 12.0733 5.46967 11.7805C5.17678 11.4876 5.17678 11.0127 5.46967 10.7198L7.43946 8.75L1.75 8.75C1.33579 8.75 1 8.41421 1 8C1 7.58579 1.33579 7.25 1.75 7.25L7.43922 7.25L5.46967 5.28045C5.17678 4.98756 5.17678 4.51269 5.46967 4.21979Z",fillRule:"evenodd",clipRule:"evenodd"}],logout:[{d:"M0.995605 2.75C0.995605 1.7835 1.77911 1 2.74561 1H6.24997C6.66418 1 6.99997 1.33579 6.99997 1.75C6.99997 2.16421 6.66418 2.5 6.24997 2.5H2.74561C2.60753 2.5 2.49561 2.61193 2.49561 2.75V13.25C2.49561 13.3881 2.60753 13.5 2.74561 13.5H6.24997C6.66418 13.5 6.99997 13.8358 6.99997 14.25C6.99997 14.6642 6.66418 15 6.24997 15H2.74561C1.77911 15 0.995605 14.2165 0.995605 13.25V2.75ZM10.4696 4.21979C10.7625 3.9269 11.2374 3.9269 11.5303 4.21979L14.7803 7.46978C15.0732 7.76268 15.0732 8.23755 14.7803 8.53044L11.5303 11.7805C11.2374 12.0733 10.7625 12.0733 10.4696 11.7805C10.1767 11.4876 10.1767 11.0127 10.4696 10.7198L12.4394 8.75L6.74997 8.75C6.33576 8.75 5.99997 8.41421 5.99997 8C5.99997 7.58579 6.33576 7.25 6.74997 7.25L12.4392 7.25L10.4696 5.28045C10.1767 4.98756 10.1767 4.51269 10.4696 4.21979Z",fillRule:"evenodd",clipRule:"evenodd"}],mapPinLine:[{d:"M8 8.875C8.94677 8.875 9.71429 8.0915 9.71429 7.125C9.71429 6.1585 8.94677 5.375 8 5.375C7.05323 5.375 6.28571 6.1585 6.28571 7.125C6.28571 8.0915 7.05323 8.875 8 8.875Z M3.75416 2.814C6.09801 0.395334 9.902 0.395334 12.2458 2.814C14.5847 5.22752 14.5847 9.13688 12.2458 11.5504L12.244 11.5523L11.345 12.4687L9.40746 14.4128L9.40667 14.4136C8.66709 15.1519 7.51388 15.1934 6.72741 14.5359L6.72003 14.5297L6.59991 14.4199L4.9661 12.7823L3.75415 11.5504C1.41528 9.13688 1.41529 5.22752 3.75416 2.814ZM11.0666 4.00453C9.37191 2.25572 6.62809 2.25572 4.93338 4.00453C3.27854 5.71219 3.23463 8.45714 4.80301 10.2195L4.93594 10.3625L5.38514 10.8224L7.74452 13.1944L7.79603 13.2399C7.91822 13.3295 8.08204 13.3295 8.20423 13.24L8.25594 13.1943L10.0179 11.4274L10.0202 11.4251L11.0645 10.362L11.197 10.2195C12.7654 8.45712 12.7215 5.71218 11.0666 4.00453Z",fillRule:"evenodd",clipRule:"evenodd"}],matchHeight:[{d:"M4 1C2.89543 1 2 1.89543 2 3V13C2 14.1046 2.89543 15 4 15C5.10457 15 6 14.1046 6 13V3C6 1.89543 5.10457 1 4 1ZM8.75 1C8.33579 1 8 1.33579 8 1.75C8 2.16421 8.33579 2.5 8.75 2.5H10.25V13.5H8.75C8.33579 13.5 8 13.8358 8 14.25C8 14.6642 8.33579 15 8.75 15H13.25C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5H11.75V2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H11.75H10.25H8.75Z",fillRule:"evenodd",clipRule:"evenodd"}],matchSize:[{d:"M1 3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V7C9 8.10457 8.10457 9 7 9H3C1.89543 9 1 8.10457 1 7V3ZM2.5 12.75H7.5V11.75C7.5 11.3358 7.83579 11 8.25 11C8.66421 11 9 11.3358 9 11.75V12.75V14.25V15.25C9 15.6642 8.66421 16 8.25 16C7.83579 16 7.5 15.6642 7.5 15.25V14.25H2.5V15.25C2.5 15.6642 2.16421 16 1.75 16C1.33579 16 1 15.6642 1 15.25V14.25V12.75V11.75C1 11.3358 1.33579 11 1.75 11C2.16421 11 2.5 11.3358 2.5 11.75V12.75ZM11 1.75C11 1.33579 11.3358 1 11.75 1H15.25C15.6642 1 16 1.33579 16 1.75C16 2.16421 15.6642 2.5 15.25 2.5H14.25V7.5H15.25C15.6642 7.5 16 7.83579 16 8.25C16 8.66421 15.6642 9 15.25 9H14.25H12.75H11.75C11.3358 9 11 8.66421 11 8.25C11 7.83579 11.3358 7.5 11.75 7.5H12.75V2.5H11.75C11.3358 2.5 11 2.16421 11 1.75Z",fillRule:"evenodd",clipRule:"evenodd"}],matchWidth:[{d:"M15 4C15 2.89543 14.1046 2 13 2L3 2C1.89543 2 1 2.89543 1 4C1 5.10457 1.89543 6 3 6L13 6C14.1046 6 15 5.10457 15 4ZM15 8.75C15 8.33579 14.6642 8 14.25 8C13.8358 8 13.5 8.33579 13.5 8.75V10.25H2.5V8.75C2.5 8.33579 2.16421 8 1.75 8C1.33579 8 1 8.33579 1 8.75V13.25C1 13.6642 1.33579 14 1.75 14C2.16421 14 2.5 13.6642 2.5 13.25V11.75H13.5V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V11.75V10.25V8.75Z",fillRule:"evenodd",clipRule:"evenodd"}],megaphone:[{d:"M14 1.49942C14 0.474307 12.9924 -0.248055 12.0201 0.0799236L1.02008 3.79023C0.410426 3.99587 0 4.567 0 5.20973V6.77338C0 7.41535 0.409472 7.98598 1.01813 8.19222L12.0181 11.9194C12.9909 12.249 14 11.5266 14 10.5006V1.49942Z M2 13.5V9.58076L5 10.5973V13.5C5 14.3284 4.32843 15 3.5 15C2.67157 15 2 14.3284 2 13.5Z",fillRule:"evenodd",clipRule:"evenodd"}],microsoft:[{d:"M7 7H2V2H7V7ZM14.001 7H9.00058V2H14.001V7ZM2 14.001H7.00142V9.001H2V14.001ZM14.001 14.001H9.00058V9.001H14.001V14.001Z",fillRule:"evenodd",clipRule:"evenodd"}],minus:[{d:"M1 8C1 7.44772 1.44772 7 2 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H2C1.44772 9 1 8.55228 1 8Z",fillRule:"",clipRule:""}],minusBold:[{d:"M5 6H11C11.5523 6 12 6.44772 12 7V8C12 8.55228 11.5523 9 11 9H5C4.44772 9 4 8.55228 4 8V7C4 6.44772 4.44772 6 5 6Z",fillRule:"evenodd",clipRule:"evenodd"}],minusCircle:[{d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 8C4 8.55229 4.44772 9 5 9H11C11.5523 9 12 8.55228 12 8C12 7.44771 11.5523 7 11 7L5 7C4.44772 7 4 7.44772 4 8Z",fillRule:"evenodd",clipRule:"evenodd"}],minusCircleLine:[{d:"M4 8C4 8.55229 4.44772 9 5 9H11C11.5523 9 12 8.55228 12 8C12 7.44771 11.5523 7 11 7L5 7C4.44772 7 4 7.44772 4 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z",fillRule:"evenodd",clipRule:"evenodd"}],minusSmall:[{d:"M5 9C4.44772 9 4 8.55229 4 8C4 7.44772 4.44772 7 5 7L11 7C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9L5 9Z",fillRule:"",clipRule:""}],mobile:[{d:"M3 2C3 0.895431 3.89543 0 5 0H11C12.1046 0 13 0.895431 13 2V14C13 15.1046 12.1046 16 11 16H5C3.89543 16 3 15.1046 3 14V2ZM4.5 3.5C4.5 3.22386 4.72386 3 5 3H11C11.2761 3 11.5 3.22386 11.5 3.5V12.5C11.5 12.7761 11.2761 13 11 13H5C4.72386 13 4.5 12.7761 4.5 12.5V3.5ZM7.5 14C7.22386 14 7 14.2239 7 14.5C7 14.7761 7.22386 15 7.5 15H8.5C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14H7.5Z",fillRule:"evenodd",clipRule:"evenodd"}],mobileAuthenticate:[{d:"M3 2C3 0.895431 3.89543 0 5 0H11C12.1046 0 13 0.895431 13 2V6H11.5V3.5C11.5 3.22386 11.2761 3 11 3H5C4.72386 3 4.5 3.22386 4.5 3.5V12.5C4.5 12.7761 4.72386 13 5 13H7V16H5C3.89543 16 3 15.1046 3 14V2ZM8 12C8 11.4477 8.44772 11 9 11H9.5V9.50149C9.5 8.11995 10.62 7 12.0015 7C13.383 7 14.503 8.11995 14.503 9.50149V11H15C15.5523 11 16 11.4477 16 12V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V12ZM13.003 11V9.50149C13.003 8.94838 12.5546 8.5 12.0015 8.5C11.4484 8.5 11 8.94838 11 9.50149V11H13.003Z",fillRule:"evenodd",clipRule:"evenodd"}],money:[{d:"M8.00002 0C7.5858 0 7.25002 0.335786 7.25002 0.75V2.00098L7.24303 2.00211C6.49442 2.12373 5.79025 2.42615 5.22482 2.88794C4.65822 3.35069 4.24926 3.9599 4.08108 4.6504C3.91214 5.34406 4.00123 6.06068 4.32583 6.7007C4.64846 7.33682 5.18146 7.85577 5.83246 8.21102C6.4833 8.56619 7.23624 8.75 7.99733 8.75C8.52172 8.75 9.02543 8.8776 9.44348 9.1059C9.86136 9.33411 10.1615 9.6445 10.331 9.97879C10.4984 10.3092 10.5381 10.6605 10.4562 10.9971C10.3735 11.3369 10.1633 11.6739 9.82082 11.9538C9.4772 12.2346 9.02323 12.4379 8.51104 12.5212C7.99916 12.6044 7.46971 12.5609 6.99413 12.3999C6.51822 12.2388 6.13411 11.9733 5.87573 11.6573C5.61943 11.3438 5.49735 10.9953 5.49735 10.6562C5.49735 10.242 5.16156 9.90625 4.74735 9.90625C4.33314 9.90625 3.99735 10.242 3.99735 10.6562C3.99735 11.3679 4.25649 12.0466 4.71442 12.6067C5.17027 13.1643 5.80132 13.5797 6.51313 13.8207C6.75256 13.9018 6.99938 13.9625 7.25002 14.0029V15.25C7.25002 15.6642 7.5858 16 8.00002 16C8.41423 16 8.75002 15.6642 8.75002 15.25V14.002L8.75174 14.0017C9.50044 13.88 10.2046 13.5773 10.7701 13.1152C11.3367 12.6521 11.7455 12.0426 11.9136 11.3518C12.0825 10.6579 11.9935 9.94102 11.6689 9.3007C11.3464 8.66426 10.8135 8.14496 10.1624 7.78942C9.51155 7.43397 8.75854 7.25 7.99735 7.25C7.47287 7.25 6.96908 7.12247 6.551 6.89432C6.13308 6.66626 5.83296 6.35611 5.66361 6.02221C5.49625 5.69222 5.45662 5.34145 5.53848 5.00535C5.62111 4.66608 5.83121 4.32939 6.17365 4.04972C6.51726 3.76909 6.97128 3.56592 7.48355 3.4827C7.99552 3.39953 8.52507 3.44299 9.00072 3.6039C9.4767 3.76492 9.8608 4.03021 10.1191 4.34597C10.3754 4.65916 10.4973 5.00719 10.4973 5.3457C10.4973 5.75992 10.8331 6.0957 11.2473 6.0957C11.6615 6.0957 11.9973 5.75992 11.9973 5.3457C11.9973 4.63428 11.7381 3.95594 11.2801 3.39614C10.8242 2.8389 10.1931 2.42378 9.48139 2.183C9.24371 2.1026 8.99876 2.04216 8.75002 2.00185V0.75C8.75002 0.335786 8.41423 0 8.00002 0Z",fillRule:"",clipRule:""}],move:[{d:"M8.20743 2.23216C8.49343 1.93253 8.96817 1.92148 9.2678 2.20747L14.768 7.45745C14.9163 7.59897 15.0001 7.795 15.0001 7.99997C15.0001 8.20494 14.9163 8.40098 14.768 8.5425L9.26781 13.7925C8.96818 14.0785 8.49343 14.0675 8.20743 13.7678C7.92143 13.4682 7.93248 12.9935 8.23211 12.7075L12.3782 8.74997H5.75C3.95507 8.74997 2.5 10.205 2.5 12V13.25C2.5 13.6642 2.16421 14 1.75 14C1.33579 14 1 13.6642 1 13.25V12C1 9.37662 3.12664 7.24997 5.75 7.24997H12.3782L8.23211 3.29253C7.93248 3.00653 7.92143 2.53178 8.20743 2.23216Z",fillRule:"evenodd",clipRule:"evenodd"}],multiSelect:[{d:"M12.5 2.5H6.06301C6.28503 1.63739 7.06808 1 8 1H14C15.1046 1 16 1.89543 16 3V7C16 7.93192 15.3626 8.71497 14.5 8.93699V4.5C14.5 3.39543 13.6046 2.5 12.5 2.5ZM3.06301 5.5H9.5C10.6046 5.5 11.5 6.39543 11.5 7.5V11.937C12.3626 11.715 13 10.9319 13 10V6C13 4.89543 12.1046 4 11 4H5C4.06808 4 3.28503 4.63739 3.06301 5.5ZM0 9C0 7.89543 0.895431 7 2 7H8C9.10457 7 10 7.89543 10 9V13C10 14.1046 9.10457 15 8 15H2C0.89543 15 0 14.1046 0 13V9Z",fillRule:"evenodd",clipRule:"evenodd"}],noAccess:[{d:"M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87896 15.1542 3.84544 13.6544 2.34564C12.1546 0.845839 10.121 0.00225883 8 0ZM8 2C9.24421 2.00189 10.4565 2.39366 11.4666 3.12023L3.1195 11.4656C2.47795 10.5703 2.09603 9.51536 2.01584 8.4169C1.93565 7.31845 2.16031 6.21918 2.66504 5.24026C3.16977 4.26135 3.93499 3.44079 4.87634 2.86905C5.81769 2.29731 6.89863 1.99657 8 2ZM8 14C6.7558 13.9981 5.54347 13.6063 4.53345 12.8798L12.8805 4.53442C13.5221 5.42965 13.904 6.48464 13.9842 7.58309C14.0644 8.68155 13.8397 9.78082 13.335 10.7597C12.8302 11.7387 12.065 12.5592 11.1237 13.1309C10.1823 13.7027 9.10137 14.0034 8 14Z",fillRule:"evenodd",clipRule:"evenodd"}],notificationSetting:[{d:"M11.6524 8H12.3435C12.579 8 12.7826 7.8356 12.8323 7.60535L12.9989 6.83203C13.3518 6.70757 13.6744 6.51901 13.9528 6.28037L14.7015 6.52636C14.9263 6.60018 15.1722 6.50626 15.2905 6.30131L15.636 5.70281C15.7538 5.49882 15.7132 5.24029 15.5386 5.08219L14.9523 4.55119C14.9854 4.3726 15.0022 4.18818 15.0022 4C15.0022 3.81182 14.9849 3.62768 14.9518 3.44909L15.5386 2.91616C15.7127 2.75797 15.753 2.4998 15.6354 2.29607L15.2922 1.70162C15.1742 1.49735 14.9296 1.40328 14.7052 1.47591L13.9536 1.71916C13.6752 1.48052 13.3518 1.29244 12.9989 1.16798L12.8308 0.393875C12.7809 0.163988 12.5775 0 12.3422 0H11.6558C11.4199 0 11.2161 0.164833 11.1668 0.395489L11.0018 1.16771C10.6487 1.29213 10.326 1.48068 10.0474 1.71938L9.29259 1.47772C9.06853 1.40601 8.8248 1.5002 8.70718 1.70393L8.36397 2.29838C8.24603 2.50265 8.28689 2.76155 8.46199 2.91958L9.04826 3.44866C9.01509 3.62738 8.99775 3.81167 8.99775 4C8.99775 4.18833 9.01509 4.37261 9.04826 4.55133L8.46185 5.07609C8.2855 5.23391 8.24394 5.49374 8.36226 5.69869L8.70781 6.29719C8.82558 6.50118 9.06976 6.59531 9.29398 6.52316L10.047 6.28084C10.3256 6.51954 10.6487 6.70787 11.0018 6.83229L11.163 7.60246C11.2115 7.83409 11.4157 8 11.6524 8ZM12.9989 4C12.9989 4.55169 12.5517 4.99893 12 4.99893C11.4483 4.99893 11.0011 4.55169 11.0011 4C11.0011 3.44831 11.4483 3.00107 12 3.00107C12.5517 3.00107 12.9989 3.44831 12.9989 4ZM7 4C7 2.87439 7.37194 1.83566 7.99963 1C5.23838 1.0002 3 3.2387 3 6V7.67157C3 8.20201 2.78929 8.71071 2.41421 9.08579L1.87868 9.62132C1.31607 10.1839 1 10.947 1 11.7426V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V11.7426C15 10.947 14.6839 10.1839 14.1213 9.62132L13.5858 9.08579C13.5579 9.05791 13.5309 9.0293 13.5049 9H12C9.23858 9 7 6.76142 7 4ZM8 16C9.10457 16 10 15.1046 10 14H6C6 15.1046 6.89543 16 8 16Z",fillRule:"evenodd",clipRule:"evenodd"}],office:[{d:"M3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H5V11H7V15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11V3C11 1.89543 10.1046 1 9 1H3ZM5 3H3V5H5V3ZM7 3H9V5H7V3ZM5 7H3V9H5V7ZM7 7H9V9H7V7ZM13 7H11V9H13V7ZM11 11H13V13H11V11Z",fillRule:"evenodd",clipRule:"evenodd"}],openEnvelope:[{d:"M13.2 16H2.8C1.26 16 0 14.74 0 13.2V5.13C0 4 0.680001 2.98 1.72 2.55L7.69 0.06C7.89 -0.02 8.11 -0.02 8.31 0.06L14.28 2.55C15.33 2.99 16 4 16 5.13V13.2C16 14.74 14.74 16 13.2 16ZM1.6 6.39V13.2C1.6 13.86 2.14 14.4 2.8 14.4H13.2C13.86 14.4 14.4 13.86 14.4 13.2V6.37L9.54 9.54C8.61 10.15 7.41 10.15 6.47 9.54L1.6 6.39ZM1.74 4.57L7.34 8.2C7.74 8.46 8.26 8.46 8.66 8.2L14.25 4.56C14.12 4.33 13.92 4.13 13.66 4.03L8 1.67L2.34 4.03C2.08 4.14 1.87 4.34 1.74 4.58V4.57Z",fillRule:"evenodd",clipRule:"evenodd"}],openNewWindow:[{d:"M14.777 1.21952C14.9177 1.36018 14.9968 1.55101 14.9968 1.75V6.25C14.9968 6.66421 14.661 7 14.2468 7C13.8326 7 13.4968 6.66421 13.4968 6.25V3.56388L8.27902 8.78039C7.98609 9.07325 7.51121 9.07319 7.21836 8.78027C6.9255 8.48734 6.92555 8.01247 7.21848 7.71961L12.4383 2.50102L9.75042 2.50254C9.33621 2.50278 9.00023 2.16718 9 1.75297C8.99977 1.33875 9.33536 1.00278 9.74958 1.00254L14.2464 1C14.4453 0.999888 14.6362 1.07886 14.777 1.21952ZM4 2H8V3.5H4C3.72386 3.5 3.5 3.72386 3.5 4V12C3.5 12.2761 3.72386 12.5 4 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V8H14V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2Z",fillRule:"evenodd",clipRule:"evenodd"}],paragraph:[{d:"M4.49998 2.99902C4.78407 2.99902 5.04378 3.15954 5.17082 3.41365L8.92082 10.9146C9.10604 11.2851 8.95585 11.7356 8.58536 11.9208C8.21486 12.1061 7.76437 11.9559 7.57914 11.5854L6.53726 9.50135C6.52492 9.50195 6.51249 9.50226 6.49999 9.50226H2.46224L1.42082 11.5854C1.2356 11.9559 0.7851 12.1061 0.414606 11.9208C0.0441126 11.7356 -0.106079 11.2851 0.0791433 10.9146L3.82914 3.41365C3.95618 3.15954 4.21589 2.99902 4.49998 2.99902ZM4.49998 5.42625L5.78782 8.00226H3.21215L4.49998 5.42625ZM12.5843 3.99676C11.6226 3.99676 10.758 4.58271 10.4016 5.47593L10.3034 5.72206C10.1499 6.10679 10.3373 6.5431 10.7221 6.69659C11.1068 6.85009 11.5431 6.66264 11.6966 6.27791L11.7948 6.03178C11.9237 5.7087 12.2364 5.49676 12.5843 5.49676H13.25C13.9403 5.49676 14.5 6.05641 14.5 6.74676V6.99607H12.5021C11.1207 6.99607 10.0008 8.11592 10.0008 9.49733C10.0008 10.8795 11.1219 11.9997 12.5041 11.9986L14.2514 11.9972C15.2173 11.9964 16 11.2131 16 10.2472V6.74676C16 5.22798 14.7688 3.99676 13.25 3.99676H12.5843ZM12.5021 8.49607H14.5V10.2472C14.5 10.3852 14.3882 10.4971 14.2502 10.4972L12.5029 10.4986C11.9496 10.499 11.5008 10.0506 11.5008 9.49733C11.5008 8.94435 11.9491 8.49607 12.5021 8.49607Z",fillRule:"evenodd",clipRule:"evenodd"}],pen:[{d:"M1.0185 14.3551L1.8565 11.4905C1.95064 11.1687 2.12418 10.8757 2.36116 10.6385L8.93332 4.06003L11.9404 7.06605L5.36314 13.6372C5.12489 13.8752 4.8304 14.0492 4.50697 14.1431L1.63773 14.9757C1.25875 15.0857 0.907702 14.7339 1.0185 14.3551ZM13.0015 6.00588L14.7077 4.3013C15.0986 3.91075 15.0987 3.27718 14.7078 2.88656L13.1124 1.29208C12.7217 0.901615 12.0885 0.901858 11.6981 1.29262L9.99347 2.99886L13.0015 6.00588Z",fillRule:"evenodd",clipRule:"evenodd"}],percentage:[{d:"M12.8702 2.17174C13.1031 1.82922 13.0143 1.36273 12.6717 1.12982C12.3292 0.896901 11.8627 0.985756 11.6298 1.32828L3.1298 13.8283C2.89689 14.1708 2.98574 14.6373 3.32827 14.8702C3.67079 15.1031 4.13728 15.0143 4.3702 14.6718L12.8702 2.17174ZM4 7.00001C5.65685 7.00001 7 5.65687 7 4.00001C7 2.34316 5.65685 1.00001 4 1.00001C2.34315 1.00001 1 2.34316 1 4.00001C1 5.65687 2.34315 7.00001 4 7.00001ZM4 5.50001C4.82843 5.50001 5.5 4.82844 5.5 4.00001C5.5 3.17159 4.82843 2.50001 4 2.50001C3.17157 2.50001 2.5 3.17159 2.5 4.00001C2.5 4.82844 3.17157 5.50001 4 5.50001ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3432 13.6569 9.00001 12 9.00001C10.3431 9.00001 9 10.3432 9 12C9 13.6569 10.3431 15 12 15ZM12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z",fillRule:"evenodd",clipRule:"evenodd"}],pin:[{d:"M4 0C3.44772 0 3 0.447715 3 1C3 1.55228 3.44772 2 4 2H5V5.41604C3.2341 6.1876 2 7.94968 2 10C2 10.5523 2.44772 11 3 11H7V13.5279C7 13.8384 7.07229 14.1446 7.21115 14.4223L8 16L8.78885 14.4223C8.92771 14.1446 9 13.8384 9 13.5279V11H13C13.5523 11 14 10.5523 14 10C14 7.94968 12.7659 6.1876 11 5.41604V2H12C12.5523 2 13 1.55228 13 1C13 0.447715 12.5523 0 12 0H4Z",fillRule:"evenodd",clipRule:"evenodd"}],plus:[{d:"M8 2C7.44772 2 7 2.44772 7 3V7H3C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H7V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H9V3C9 2.44772 8.55228 2 8 2Z",fillRule:"",clipRule:""}],plusCircle:[{d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM7 5C7 4.44772 7.44772 4 8 4C8.55229 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44771 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55229 4 8C4 7.44772 4.44772 7 5 7H7V5Z",fillRule:"evenodd",clipRule:"evenodd"}],plusCircleLine:[{d:"M7 5C7 4.44772 7.44772 4 8 4C8.55229 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44771 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55229 4 8C4 7.44772 4.44772 7 5 7H7V5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z",fillRule:"evenodd",clipRule:"evenodd"}],plusSmall:[{d:"M8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44771 11.5523 7 11 7H9V5C9 4.44772 8.55228 4 8 4Z",fillRule:"",clipRule:""}],print:[{d:"M5 0C3.89543 0 3 0.895431 3 2V4.00427L3.00006 4.02002H2C0.895431 4.02002 0 4.91545 0 6.02002V10.02C0 11.1246 0.895431 12.02 2 12.02H3V14C3 15.1046 3.89543 16 5 16H11C12.1046 16 13 15.1046 13 14V12.02H14C15.1046 12.02 16 11.1246 16 10.02V6.02002C16 4.91545 15.1046 4.02002 14 4.02002H12.9999L13 4.00427V2C13 0.895431 12.1046 0 11 0H5ZM4.5 1.5H11.5V4H4.5V1.5ZM11.5 9H4.5V14.5H11.5V9Z",fillRule:"evenodd",clipRule:"evenodd"}],pulse:[{d:"M5.37627 3.00251C5.69707 2.99236 5.98878 3.18746 6.10189 3.48783L8.6587 10.2777L10.8151 5.44442C10.9328 5.18046 11.1918 5.00767 11.4808 5.00025C11.7697 4.99283 12.0372 5.15212 12.1683 5.40969L13.9965 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H13.5367C13.2546 10.5 12.9964 10.3417 12.8684 10.0903L11.5447 7.49063L9.28492 12.5556C9.16102 12.8333 8.88167 13.0087 8.57769 12.9997C8.27371 12.9906 8.00529 12.7989 7.89811 12.5143L5.47354 6.07565L4.28244 9.96939C4.186 10.2847 3.89496 10.5 3.56525 10.5H0.75C0.335786 10.5 0 10.1642 0 9.75C0 9.33579 0.335786 9 0.75 9H3.01037L4.68281 3.53275C4.77669 3.22583 5.05547 3.01267 5.37627 3.00251Z",fillRule:"evenodd",clipRule:"evenodd"}],pulseCircle:[{d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.69073 4.45777C6.56644 4.16398 6.2699 3.98096 5.95156 4.00157C5.63322 4.02217 5.36275 4.2419 5.27737 4.54926L4.17992 8.5H2.74998C2.33577 8.5 1.99998 8.83579 1.99998 9.25C1.99998 9.66421 2.33577 10 2.74998 10H4.74998C5.08689 10 5.38245 9.77535 5.47262 9.45074L6.14712 7.02259L8.05925 11.5422C8.17794 11.8228 8.4545 12.0036 8.75908 11.9999C9.06366 11.9962 9.33575 11.8087 9.44759 11.5254L10.6476 8.48546L11.3615 9.64358C11.4981 9.8651 11.7397 10 12 10H13.25C13.6642 10 14 9.66421 14 9.25C14 8.83579 13.6642 8.5 13.25 8.5H12.4187L11.1384 6.42323C10.9894 6.18154 10.7167 6.04471 10.4339 6.06973C10.1511 6.09475 9.90662 6.27733 9.80237 6.54143L8.72594 9.2683L6.69073 4.45777Z",fillRule:"evenodd",clipRule:"evenodd"}],question:[{d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8 4.5C7.17164 4.5 6.50012 5.17152 6.50012 5.99988C6.50012 6.41409 6.16434 6.74988 5.75012 6.74988C5.33591 6.74988 5.00012 6.41409 5.00012 5.99988C5.00012 4.34309 6.34321 3 8 3C9.65679 3 10.9999 4.34309 10.9999 5.99988C10.9999 7.10929 10.3973 8.07708 9.50511 8.59529C9.22988 8.75515 9.04259 8.87315 8.9131 8.96603C8.82289 9.03073 8.77526 9.07312 8.75175 9.09656L8.75117 9.10854C8.74972 9.14318 8.7496 9.18382 8.7496 9.25C8.7496 9.66421 8.41381 10 7.9996 10C7.58538 10 7.2496 9.66421 7.2496 9.25L7.2495 9.2139C7.24859 8.97761 7.24707 8.58398 7.54895 8.19605C7.79414 7.88098 8.20927 7.61329 8.7517 7.29822C9.2007 7.03742 9.49988 6.55315 9.49988 5.99988C9.49988 5.17152 8.82836 4.5 8 4.5ZM8 13C8.55229 13 9 12.5523 9 12C9 11.4477 8.55229 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z",fillRule:"evenodd",clipRule:"evenodd"}],questionCircleLine:[{d:"M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.50012 5.99988C6.50012 5.17152 7.17164 4.5 8 4.5C8.82836 4.5 9.49988 5.17152 9.49988 5.99988C9.49988 6.55315 9.2007 7.03742 8.7517 7.29822C8.20927 7.61329 7.79414 7.88098 7.54895 8.19605C7.24707 8.58398 7.24859 8.97761 7.2495 9.2139L7.2496 9.25C7.2496 9.66421 7.58538 10 7.9996 10C8.41381 10 8.7496 9.66421 8.7496 9.25C8.7496 9.18382 8.74972 9.14318 8.75117 9.10854L8.75175 9.09656C8.77526 9.07312 8.82289 9.03073 8.9131 8.96603C9.04259 8.87315 9.22988 8.75515 9.50511 8.59529C10.3973 8.07708 10.9999 7.10929 10.9999 5.99988C10.9999 4.34309 9.65679 3 8 3C6.34321 3 5.00012 4.34309 5.00012 5.99988C5.00012 6.41409 5.33591 6.74988 5.75012 6.74988C6.16434 6.74988 6.50012 6.41409 6.50012 5.99988ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12Z",fillRule:"evenodd",clipRule:"evenodd"}],questionnaire:[{d:"M2 2C2 0.895431 2.89543 0 4 0H12C13.1046 0 14 0.895431 14 2V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V2ZM7 3.75C7 3.33579 7.33579 3 7.75 3H11.25C11.6642 3 12 3.33579 12 3.75C12 4.16421 11.6642 4.5 11.25 4.5H7.75C7.33579 4.5 7 4.16421 7 3.75ZM5 5C5.55228 5 6 4.55228 6 4C6 3.44772 5.55228 3 5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5ZM7 7.75C7 7.33579 7.33579 7 7.75 7H11.25C11.6642 7 12 7.33579 12 7.75C12 8.16421 11.6642 8.5 11.25 8.5H7.75C7.33579 8.5 7 8.16421 7 7.75ZM7.75 11C7.33579 11 7 11.3358 7 11.75C7 12.1642 7.33579 12.5 7.75 12.5H10.25C10.6642 12.5 11 12.1642 11 11.75C11 11.3358 10.6642 11 10.25 11H7.75ZM6 8C6 8.55229 5.55228 9 5 9C4.44772 9 4 8.55229 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",fillRule:"evenodd",clipRule:"evenodd"}],radio:[{d:"M6 2.5C7.02953 2.5 7.95525 2.94452 8.59568 3.6521C9.04792 3.5525 9.51783 3.5 10 3.5C10.1127 3.5 10.2247 3.50287 10.336 3.50854C9.47271 2.00933 7.85423 1 6 1C3.23858 1 1 3.23858 1 6C1 7.85423 2.00933 9.47271 3.50854 10.336C3.50287 10.2247 3.5 10.1127 3.5 10C3.5 9.51783 3.5525 9.04792 3.6521 8.59568C2.94452 7.95525 2.5 7.02953 2.5 6C2.5 4.067 4.067 2.5 6 2.5ZM12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10ZM10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5Z",fillRule:"evenodd",clipRule:"evenodd"}],redline:[{d:"M4 21h13v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v16zM8 3v14h11V5.424L16.585 3H8zM7 1h9.792a1.5 1.5 0 0 1 1.063.441l2.707 2.717A1.5 1.5 0 0 1 21 5.217V18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm3 12h6v2h-6v-2zm1-4h6v2h-6V9zm-1-4h4v2h-4V5z",fillRule:"evenodd",clipRule:"evenodd"}],redo:[{d:"M10.1936 3.26861C9.90068 2.97572 9.90068 2.50084 10.1936 2.20795C10.4865 1.91506 10.9613 1.91506 11.2542 2.20795L14.7803 5.73404C15.0732 6.02694 15.0732 6.50181 14.7803 6.7947L11.2542 10.3208C10.9613 10.6137 10.4865 10.6137 10.1936 10.3208C9.90068 10.0279 9.90068 9.55303 10.1936 9.26014L12.4517 7.00201L5.74899 7.00202C3.95462 7.00202 2.5 8.45664 2.5 10.251C2.5 12.0454 3.95462 13.5 5.74899 13.5H8.25C8.66421 13.5 9 13.8358 9 14.25C9 14.6642 8.66421 15 8.25 15H5.74899C3.1262 15 1 12.8738 1 10.251C1 7.62821 3.12619 5.50202 5.74899 5.50202L12.427 5.50201L10.1936 3.26861Z",fillRule:"",clipRule:""}],refresh:[{d:"M14.25 1C14.6642 1 15 1.33579 15 1.75L15 5.75186C15 6.16607 14.6642 6.50186 14.25 6.50186H10.75C10.3358 6.50186 10 6.16607 10 5.75186C10 5.33764 10.3358 5.00186 10.75 5.00186H12.6119C11.6302 3.49487 9.93066 2.5 7.99999 2.5C5.18469 2.5 2.86248 4.61592 2.53866 7.34382C2.48983 7.75515 2.1168 8.04901 1.70547 8.00018C1.29415 7.95135 1.00029 7.57832 1.04911 7.167C1.46147 3.69334 4.41565 1 7.99999 1C10.2318 1 12.2186 2.04438 13.5 3.66963L13.5 1.74999C13.5 1.33578 13.8358 0.999997 14.25 1ZM13.4606 8.66197C13.1342 11.3871 10.8133 13.5 8 13.5C6.06933 13.5 4.36979 12.5051 3.38807 10.9982H5.25C5.66421 10.9982 6 10.6624 6 10.2482C6 9.83394 5.66421 9.49815 5.25 9.49815H1.75003C1.33582 9.49815 1.00004 9.83393 1.00003 10.2481L1 14.25C0.999997 14.6642 1.33578 15 1.74999 15C2.16421 15 2.5 14.6642 2.5 14.25L2.50002 12.3304C3.78136 13.9556 5.76821 15 8 15C11.5818 15 14.5343 12.3105 14.95 8.84037C14.9993 8.4291 14.7058 8.05576 14.2945 8.0065C13.8832 7.95723 13.5099 8.2507 13.4606 8.66197Z",fillRule:"evenodd",clipRule:"evenodd"}],reopen:[{d:"M3.48223 4.86199C4.47627 3.43362 6.12967 2.5 7.99996 2.5C11.0375 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0375 13.5 7.99996 13.5C5.7439 13.5 3.80345 12.1415 2.95517 10.1949C2.78969 9.81514 2.34772 9.64146 1.968 9.80693C1.58827 9.9724 1.41458 10.4144 1.58006 10.7941C2.65814 13.2681 5.12596 15 7.99996 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 7.99996 1C5.77402 1 3.79174 2.0389 2.51006 3.65685L2.24267 1.75426C2.18502 1.34408 1.80577 1.05829 1.39559 1.11594C0.985409 1.17359 0.699623 1.55284 0.75727 1.96302L1.31396 5.92409C1.37161 6.33428 1.75086 6.62006 2.16104 6.56242L6.12212 6.00572C6.5323 5.94808 6.81808 5.56883 6.76044 5.15864C6.70279 4.74846 6.32354 4.46267 5.91336 4.52032L3.48223 4.86199Z",fillRule:"evenodd",clipRule:"evenodd"}],repeat:[{d:"M11.2195 3.28547C10.9267 2.99248 10.9269 2.51761 11.2198 2.22481C11.5128 1.93201 11.9877 1.93216 12.2805 2.22515L14.7805 4.72676C14.9211 4.86746 15.0001 5.05825 15 5.25716C14.9999 5.45607 14.9209 5.64681 14.7802 5.78742L12.2802 8.28581C11.9872 8.57861 11.5123 8.57846 11.2195 8.28547C10.9267 7.99248 10.9269 7.51761 11.2198 7.22481L12.4454 6H4.24727C3.28077 6 2.49727 6.7835 2.49727 7.75V7.9822C2.49727 8.39641 2.16148 8.7322 1.74727 8.7322C1.33306 8.7322 0.997269 8.39641 0.997269 7.9822V7.75C0.997269 5.95508 2.45234 4.5 4.24727 4.5H12.4332L11.2195 3.28547ZM4.7805 9.78016C5.0733 9.48717 5.07315 9.0123 4.78016 8.7195C4.48717 8.4267 4.0123 8.42685 3.7195 8.71984L1.2195 11.2214C1.07889 11.3621 0.999936 11.5529 1 11.7519C1.00006 11.9508 1.07914 12.1415 1.21984 12.2821L3.71984 14.7805C4.01283 15.0733 4.4877 15.0731 4.7805 14.7802C5.0733 14.4872 5.07315 14.0123 4.78016 13.7195L3.55987 12.5H11.75C13.5449 12.5 15 11.0449 15 9.25V9.0178C15 8.60359 14.6642 8.2678 14.25 8.2678C13.8358 8.2678 13.5 8.60359 13.5 9.0178V9.25C13.5 10.2165 12.7165 11 11.75 11H3.56145L4.7805 9.78016Z",fillRule:"evenodd",clipRule:"evenodd"}],reply:[{d:"M6.7805 3.28016C7.0733 2.98717 7.07315 2.5123 6.78016 2.2195C6.48717 1.9267 6.0123 1.92685 5.7195 2.21984L1.2195 6.72274C1.07889 6.86344 0.999936 7.05423 1 7.25314C1.00006 7.45205 1.07914 7.64279 1.21984 7.7834L5.71984 12.2805C6.01283 12.5733 6.4877 12.5731 6.7805 12.2802C7.0733 11.9872 7.07315 11.5123 6.78016 11.2195L3.55859 8H9.25C11.0449 8 12.5 9.45508 12.5 11.25V14.25C12.5 14.6642 12.8358 15 13.25 15C13.6642 15 14 14.6642 14 14.25V11.25C14 8.62665 11.8734 6.5 9.25 6.5H3.56273L6.7805 3.28016Z",fillRule:"",clipRule:""}],replyAll:[{d:"M5.77999 2.21353C6.07307 2.50623 6.07338 2.98111 5.78067 3.27419L1.81032 7.24966L5.78033 11.2197C6.07322 11.5126 6.07322 11.9874 5.78033 12.2803C5.48744 12.5732 5.01256 12.5732 4.71967 12.2803L0.21967 7.78033C-0.07309 7.48757 -0.0732428 7.01296 0.219329 6.72001L4.71933 2.21421C5.01203 1.92113 5.48691 1.92083 5.77999 2.21353ZM9.77999 2.21353C10.0731 2.50623 10.0734 2.98111 9.78067 3.27419L6.55901 6.5H11.25C13.8734 6.5 16 8.62665 16 11.25V14.25C16 14.6642 15.6642 15 15.25 15C14.8358 15 14.5 14.6642 14.5 14.25V11.25C14.5 9.45508 13.0449 8 11.25 8H6.56066L9.78033 11.2197C10.0732 11.5126 10.0732 11.9874 9.78033 12.2803C9.48744 12.5732 9.01256 12.5732 8.71967 12.2803L4.21967 7.78033C3.92691 7.48757 3.92676 7.01296 4.21933 6.72001L8.71933 2.21421C9.01203 1.92113 9.48691 1.92083 9.77999 2.21353Z",fillRule:"evenodd",clipRule:"evenodd"}],retweet:[{d:"M4.62719 3.2495H11.2592C13.7722 3.2495 15.8342 5.2095 15.9992 7.6805C16.0102 7.8525 15.8642 7.9995 15.6922 7.9995H14.7902C14.6322 7.9995 14.5112 7.8755 14.4982 7.7185C14.3542 6.0575 12.9572 4.7495 11.2592 4.7495H4.62719L6.91019 6.8975C7.03019 7.0175 7.03019 7.2095 6.91019 7.3275L6.32219 7.9105C6.20219 8.0285 6.00919 8.0285 5.88919 7.9105L2.14919 4.3565C2.05019 4.2585 2.00019 4.1295 2.00019 3.9995C2.00019 3.8695 2.05019 3.7405 2.14919 3.6415L5.88919 0.0885C6.00919 -0.0295 6.20219 -0.0295 6.32219 0.0885L6.91019 0.6715C7.03019 0.7895 7.03019 0.9815 6.91019 1.1015L4.62719 3.2495Z",fillRule:"",clipRule:""},{d:"M9.67669 8.0884C9.79669 7.9704 9.99069 7.9704 10.1107 8.0884L13.8497 11.6424C13.9497 11.7404 13.9997 11.8694 13.9997 11.9994C13.9997 12.1294 13.9497 12.2584 13.8497 12.3584L10.1107 15.9104C9.99069 16.0284 9.79669 16.0284 9.67669 15.9104L9.08969 15.3274C8.96969 15.2094 8.96969 15.0174 9.08969 14.8984L11.3717 12.7494H4.73969C2.22769 12.7494 0.165691 10.7894 0.000690893 8.3184C-0.0113091 8.1474 0.134691 7.9994 0.307691 7.9994H1.20969C1.36669 7.9994 1.48869 8.1234 1.50169 8.2804C1.64569 9.9424 3.04269 11.2494 4.73969 11.2494H11.3717L9.08969 9.1014C8.96969 8.9824 8.96969 8.7894 9.08969 8.6714L9.67669 8.0884Z",fillRule:"",clipRule:""}],rollBack:[{d:"M6.7805 3.28016C7.0733 2.98717 7.07315 2.5123 6.78016 2.2195C6.48717 1.9267 6.0123 1.92685 5.7195 2.21984L1.2195 6.72274C1.07889 6.86344 0.999936 7.05423 1 7.25314C1.00006 7.45205 1.07914 7.64279 1.21984 7.7834L5.71984 12.2805C6.01283 12.5733 6.4877 12.5731 6.7805 12.2802C7.0733 11.9872 7.07315 11.5123 6.78016 11.2195L3.55859 8H9.25C11.0449 8 12.5 9.45508 12.5 11.25V14.25C12.5 14.6642 12.8358 15 13.25 15C13.6642 15 14 14.6642 14 14.25V11.25C14 8.62665 11.8734 6.5 9.25 6.5H3.56273L6.7805 3.28016Z",fillRule:"",clipRule:""}],rotateLeft:[{d:"M10.2803 1.21968C10.5732 1.51257 10.5732 1.98745 10.2803 2.28034L9.53784 3.0228C12.6001 3.2948 15.001 5.86702 15.001 9C15.001 12.3142 12.3142 15.001 9 15.001C8.44786 15.001 7.89424 14.9238 7.35509 14.7701C6.95675 14.6565 6.72588 14.2416 6.83944 13.8432C6.953 13.4449 7.36797 13.214 7.76632 13.3276C8.81263 13.6258 9.93158 13.5349 10.916 13.0717C10.9316 13.0643 10.9474 13.0576 10.9632 13.0514C12.4654 12.3221 13.501 10.782 13.501 9C13.501 6.71735 11.8018 4.83158 9.59924 4.53857L10.2803 5.21968C10.5732 5.51257 10.5732 5.98745 10.2803 6.28034C9.98743 6.57323 9.51255 6.57322 9.21966 6.28032L7.21966 4.28028C7.07901 4.13962 7 3.94885 7 3.74994C7 3.55103 7.07902 3.36027 7.21968 3.21961L9.21968 1.21966C9.51257 0.926774 9.98745 0.92678 10.2803 1.21968Z M5.70936 5.29139C5.31883 4.90086 4.68567 4.90086 4.29514 5.29139L1.28994 8.29659C0.899416 8.68712 0.899416 9.32028 1.28994 9.71081L4.29514 12.716C4.68567 13.1065 5.31883 13.1065 5.70936 12.716L8.71456 9.71081C9.10509 9.32028 9.10509 8.68712 8.71456 8.29659L5.70936 5.29139ZM5.00225 6.7056L2.70415 9.0037L5.00225 11.3018L7.30035 9.0037L5.00225 6.7056Z",fillRule:"evenodd",clipRule:"evenodd"}],rotateRight:[{d:"M5.71769 1.21968C5.4248 1.51257 5.4248 1.98745 5.7177 2.28034L6.46018 3.0228C3.39791 3.2948 0.997047 5.86702 0.997047 9C0.997047 12.3142 3.68378 15.001 6.99802 15.001C7.55016 15.001 8.10378 14.9238 8.64293 14.7701C9.04128 14.6565 9.27214 14.2416 9.15858 13.8432C9.04503 13.4449 8.63005 13.214 8.23171 13.3276C7.18539 13.6258 6.06645 13.5349 5.082 13.0717C5.06638 13.0643 5.05063 13.0576 5.03478 13.0514C3.53261 12.3221 2.49705 10.782 2.49705 9C2.49705 6.71735 4.19626 4.83158 6.39878 4.53857L5.71769 5.21968C5.4248 5.51257 5.4248 5.98745 5.7177 6.28034C6.0106 6.57323 6.48547 6.57322 6.77836 6.28032L8.77836 4.28028C8.91901 4.13962 8.99803 3.94885 8.99802 3.74994C8.99802 3.55103 8.919 3.36027 8.77835 3.21961L6.77835 1.21966C6.48545 0.926774 6.01058 0.92678 5.71769 1.21968Z M10.2887 5.29139C10.6792 4.90086 11.3124 4.90086 11.7029 5.29139L14.7081 8.29659C15.0986 8.68712 15.0986 9.32028 14.7081 9.71081L11.7029 12.716C11.3124 13.1065 10.6792 13.1065 10.2887 12.716L7.28346 9.71081C6.89294 9.32028 6.89294 8.68712 7.28346 8.29659L10.2887 5.29139ZM10.9958 6.7056L13.2939 9.0037L10.9958 11.3018L8.69768 9.0037L10.9958 6.7056Z",fillRule:"evenodd",clipRule:"evenodd"}],safe:[{d:"M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM2 4H14V6H12.5C12.2239 6 12 6.22386 12 6.5C12 6.77614 12.2239 7 12.5 7H14V9H12.5C12.2239 9 12 9.22386 12 9.5C12 9.77614 12.2239 10 12.5 10H14V12H2V4ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM3.5 6C3.22386 6 3 6.22386 3 6.5V9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5V6.5C4 6.22386 3.77614 6 3.5 6ZM2 2C0.895431 2 0 2.89543 0 4V12C0 13.1046 0.895431 14 2 14C2 14.5523 2.44772 15 3 15H5C5.55228 15 6 14.5523 6 14H10C10 14.5523 10.4477 15 11 15H13C13.5523 15 14 14.5523 14 14C15.1046 14 16 13.1046 16 12V4C16 2.89543 15.1046 2 14 2H2ZM14 13C14.5523 13 15 12.5523 15 12V4C15 3.44772 14.5523 3 14 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H14Z",fillRule:"evenodd",clipRule:"evenodd"}],sandClock:[{d:"M2.75 0C2.33579 0 2 0.335786 2 0.75C2 1.16421 2.33579 1.5 2.75 1.5H3V3.08202C3 4.52961 3.66012 5.8982 4.793 6.79936L5.02816 6.98642C5.32628 7.22357 5.5 7.58372 5.5 7.96467V8.03565C5.5 8.41491 5.32781 8.77366 5.03192 9.0109L4.7787 9.21392C3.6543 10.1154 3 11.4787 3 12.9198V14.5H2.75C2.33579 14.5 2 14.8358 2 15.25C2 15.6642 2.33579 16 2.75 16H13.25C13.6642 16 14 15.6642 14 15.25C14 14.8358 13.6642 14.5 13.25 14.5H13V12.4386C13 11.3017 12.4843 10.2263 11.5978 9.51451L10.971 9.01121C10.6755 8.77396 10.5036 8.41547 10.5036 8.03652V7.9638C10.5036 7.58316 10.677 7.22327 10.9748 6.9861L11.5865 6.49876C12.4797 5.78726 13 4.70756 13 3.56565V1.5H13.25C13.6642 1.5 14 1.16421 14 0.75C14 0.335786 13.6642 0 13.25 0H2.75ZM4.5 3.08202V1.5H11.5V3.56565C11.5 4.2508 11.1878 4.89861 10.6519 5.32551L10.0401 5.81286C9.38516 6.33462 9.00361 7.1264 9.00361 7.9638V8.03652C9.00361 8.87021 9.3818 9.65888 10.0319 10.1808L10.6587 10.6841C10.7772 10.7793 10.8846 10.8852 10.98 11H5.12763C5.29446 10.7721 5.49197 10.5646 5.71701 10.3842L5.97023 10.1812C6.62119 9.65926 7 8.87002 7 8.03565V7.96467C7 7.12659 6.61783 6.33425 5.96195 5.81252L5.72679 5.62546C4.95166 5.00888 4.5 4.07248 4.5 3.08202Z",fillRule:"evenodd",clipRule:"evenodd"}],scope:[{d:"m7.25.75c0-.414214.33579-.75.75-.75s.75.335786.75.75v1.29642c2.714.33844 4.8651 2.48954 5.2036 5.20358h1.2964c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-1.2964c-.3385 2.714-2.4896 4.8651-5.2036 5.2036v1.2964c0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75v-1.2964c-2.71404-.3385-4.86514-2.4896-5.20358-5.2036h-1.29642c-.414214 0-.75-.33579-.75-.75s.335786-.75.75-.75h1.29642c.33844-2.71404 2.48954-4.86514 5.20358-5.20358zm5.1878 6.5h-1.6878c-.4142 0-.75.33579-.75.75s.3358.75.75.75h1.6878c-.3162 1.8844-1.8034 3.3716-3.6878 3.6878v-1.6878c0-.4142-.33579-.75-.75-.75s-.75.3358-.75.75v1.6878c-1.88438-.3162-3.37164-1.8034-3.68778-3.6878h1.68778c.41421 0 .75-.33579.75-.75s-.33579-.75-.75-.75h-1.68778c.31614-1.88438 1.8034-3.37164 3.68778-3.68778v1.68778c0 .41421.33579.75.75.75s.75-.33579.75-.75v-1.68778c1.8844.31614 3.3716 1.8034 3.6878 3.68778z",fillRule:"evenodd",clipRule:"evenodd"}],search:[{d:"M11.2001 12.6004C10.0302 13.4792 8.57591 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.57591 13.4792 10.0302 12.6004 11.2001C12.6376 11.2281 12.6733 11.259 12.7071 11.2929L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.259 12.6733 11.2281 12.6376 11.2001 12.6004ZM12.5 7C12.5 10.0376 10.0376 12.5 7 12.5C3.96243 12.5 1.5 10.0376 1.5 7C1.5 3.96243 3.96243 1.5 7 1.5C10.0376 1.5 12.5 3.96243 12.5 7Z",fillRule:"evenodd",clipRule:"evenodd"}],searchInline:[{d:"M1 1.75C1 1.33579 1.33579 1 1.75 1H9.25C9.66421 1 10 1.33579 10 1.75C10 2.16421 9.66421 2.5 9.25 2.5H1.75C1.33579 2.5 1 2.16421 1 1.75ZM12.8958 14.3099C12.202 14.7471 11.3806 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5C15 11.3805 14.7471 12.202 14.31 12.8957L15.7071 14.2928C16.0976 14.6834 16.0976 15.3165 15.7071 15.707C15.3166 16.0976 14.6834 16.0976 14.2929 15.707L12.8958 14.3099ZM13.5 10.5C13.5 12.1569 12.1569 13.5 10.5 13.5C8.84315 13.5 7.5 12.1569 7.5 10.5C7.5 8.84315 8.84315 7.5 10.5 7.5C12.1569 7.5 13.5 8.84315 13.5 10.5ZM1.75 4.00201C1.33579 4.00201 1 4.3378 1 4.75201C1 5.16623 1.33579 5.50201 1.75 5.50201H6.25C6.66421 5.50201 7 5.16623 7 4.75201C7 4.3378 6.66421 4.00201 6.25 4.00201H1.75ZM1 7.75403C1 7.33981 1.33579 7.00403 1.75 7.00403H4.24933C4.66354 7.00403 4.99933 7.33981 4.99933 7.75403C4.99933 8.16824 4.66354 8.50403 4.24933 8.50403H1.75C1.33579 8.50403 1 8.16824 1 7.75403ZM1.75 10.006C1.33579 10.006 1 10.3418 1 10.756C1 11.1703 1.33579 11.506 1.75 11.506H4.25C4.66421 11.506 5 11.1703 5 10.756C5 10.3418 4.66421 10.006 4.25 10.006H1.75Z",fillRule:"evenodd",clipRule:"evenodd"}],send:[{d:"M14.8076 7.61982L2.70664 1.05127C2.3688 0.867884 1.95599 1.1347 2.01599 1.49767L2.83404 6.44662C2.89585 6.82055 3.20581 7.11466 3.60224 7.17557L8.96161 7.9989L3.46443 9.68792C3.13993 9.78763 2.89963 10.047 2.83861 10.3634L2.04587 14.4741C1.97519 14.8406 2.39198 15.1173 2.73457 14.9314L14.8076 8.37798C15.1177 8.20968 15.1177 7.78813 14.8076 7.61982Z",fillRule:"",clipRule:""}],share:[{d:"M11.4697 2.22162C11.7626 1.92873 12.2374 1.92873 12.5303 2.22162L14.4971 4.18838C14.5199 4.20857 14.5414 4.23012 14.5616 4.25291L14.7784 4.46967C15.0713 4.76256 15.0713 5.23744 14.7784 5.53033L12.5303 7.77838C12.2374 8.07127 11.7626 8.07127 11.4697 7.77838C11.1768 7.48548 11.1768 7.01061 11.4697 6.71772L12.6874 5.5H11.75C9.95508 5.5 8.5 6.95508 8.5 8.75V9.24884C8.5 9.66306 8.16421 9.99884 7.75 9.99884C7.33579 9.99884 7 9.66306 7 9.24884V8.75C7 6.12665 9.12665 4 11.75 4H12.1874L11.4697 3.28228C11.1768 2.98939 11.1768 2.51452 11.4697 2.22162ZM4 3H7V4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V13C3.5 13.2761 3.72386 13.5 4 13.5H12C12.2761 13.5 12.5 13.2761 12.5 13V9H14V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V5C2 3.89543 2.89543 3 4 3Z",fillRule:"evenodd",clipRule:"evenodd"}],sidebar:[{d:"M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h2.5v-11zm4 0v11h8a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"}],sign:[{d:"M8.30012 2.30013L13.7058 7.70572C14.0963 8.09623 14.7294 8.09624 15.1199 7.70572L15.7057 7.11997C16.0963 6.72945 16.0963 6.09628 15.7057 5.70575L10.3001 0.300098C9.90961 -0.0904329 9.27643 -0.0904295 8.88591 0.300106L8.30011 0.885926C7.90959 1.27645 7.9096 1.90961 8.30012 2.30013ZM7.03888 4.10331L2.12385 6.43804C1.51873 6.72548 1.09772 7.29679 1.00236 7.95989L0.0104525 14.8574C-0.0103634 15.0021 0.000580844 15.1424 0.0373198 15.2721L4.15159 11.1579C4.0545 10.9593 4 10.736 4 10.5C4 9.67157 4.67157 9 5.5 9C6.32843 9 7 9.67157 7 10.5C7 11.3284 6.32843 12 5.5 12C5.27285 12 5.0575 11.9495 4.86455 11.8591L0.753981 15.9697C0.875833 16.0006 1.00641 16.0089 1.14092 15.9898L8.08317 15.0036C8.75283 14.9085 9.32904 14.4813 9.61473 13.8682L11.9042 8.95485C12.0818 8.5737 12.002 8.12216 11.7045 7.82499L8.17467 4.29908C7.87553 4.00027 7.42079 3.92189 7.03888 4.10331Z",fillRule:"evenodd",clipRule:"evenodd"}],signatureEdit:[{d:"M6.5405 2.04909L9.95474 5.46741C10.3468 5.85995 10.9835 5.85828 11.3735 5.46369L11.7124 5.1208C12.0989 4.72978 12.0972 4.10013 11.7087 3.71115L8.29447 0.292828C7.9024 -0.0997119 7.26571 -0.098041 6.87571 0.296552L6.5368 0.639444C6.15034 1.03046 6.15199 1.66011 6.5405 2.04909ZM5.28474 3.08507L1.52369 4.68893C1.21056 4.82247 0.986861 5.10612 0.930001 5.44176L0.0170613 10.8308C-0.00760046 10.9764 0.000128783 11.1178 0.0341802 11.2491L3.89686 7.396C4.09236 7.20098 4.40895 7.20138 4.60396 7.39688C4.79898 7.59239 4.79859 7.90897 4.60308 8.10399L0.735237 11.9622C0.871895 12.0002 1.02 12.0096 1.17256 11.9833L6.54509 11.0591C6.87727 11.0019 7.15832 10.7813 7.29267 10.4721L8.91864 6.731C9.08228 6.35449 8.99918 5.91622 8.70907 5.62575L6.38457 3.29827C6.09591 3.00924 5.66049 2.92484 5.28474 3.08507ZM11.9524 16H12.6435C12.8791 16 13.0827 15.8356 13.1323 15.6053L13.299 14.832C13.6518 14.7076 13.9744 14.519 14.2528 14.2804L15.0015 14.5264C15.2264 14.6002 15.4722 14.5063 15.5905 14.3013L15.936 13.7028C16.0538 13.4988 16.0132 13.2403 15.8387 13.0822L15.2523 12.5512C15.2854 12.3726 15.3022 12.1882 15.3022 12C15.3022 11.8118 15.2849 11.6277 15.2518 11.4491L15.8386 10.9162C16.0127 10.758 16.053 10.4998 15.9354 10.2961L15.5922 9.70162C15.4742 9.49735 15.2296 9.40328 15.0052 9.47591L14.2537 9.71916C13.9752 9.48052 13.6518 9.29244 13.299 9.16798L13.1308 8.39388C13.0809 8.16399 12.8775 8 12.6422 8H11.9558C11.7199 8 11.5161 8.16483 11.4668 8.39549L11.3018 9.16771C10.9488 9.29213 10.626 9.48068 10.3474 9.71938L9.5926 9.47772C9.36855 9.40601 9.12482 9.5002 9.0072 9.70393L8.66399 10.2984C8.54605 10.5026 8.58691 10.7616 8.76201 10.9196L9.34828 11.4487C9.31511 11.6274 9.29777 11.8117 9.29777 12C9.29777 12.1883 9.31511 12.3726 9.34828 12.5513L8.76187 13.0761C8.58552 13.2339 8.54396 13.4937 8.66228 13.6987L9.00783 14.2972C9.1256 14.5012 9.36977 14.5953 9.594 14.5232L10.347 14.2808C10.6256 14.5195 10.9488 14.7079 11.3018 14.8323L11.463 15.6025C11.5115 15.8341 11.7158 16 11.9524 16ZM13.299 12C13.299 12.5517 12.8517 12.9989 12.3 12.9989C11.7483 12.9989 11.3011 12.5517 11.3011 12C11.3011 11.4483 11.7483 11.0011 12.3 11.0011C12.8517 11.0011 13.299 11.4483 13.299 12Z",fillRule:"evenodd",clipRule:"evenodd"}],signatureRequest:[{d:"M6.5405 2.04909L9.95474 5.46741C10.3468 5.85995 10.9835 5.85828 11.3735 5.46369L11.7124 5.1208C12.0989 4.72978 12.0972 4.10013 11.7087 3.71115L8.29447 0.292828C7.9024 -0.0997119 7.26571 -0.098041 6.87571 0.296552L6.5368 0.639444C6.15034 1.03046 6.15199 1.66011 6.5405 2.04909ZM5.28474 3.08507L1.52369 4.68893C1.21056 4.82247 0.986861 5.10612 0.930001 5.44176L0.0170613 10.8308C-0.00760046 10.9764 0.000128783 11.1178 0.0341802 11.2491L3.89686 7.396C4.09236 7.20098 4.40895 7.20138 4.60396 7.39688C4.79898 7.59239 4.79859 7.90897 4.60308 8.10399L0.735237 11.9622C0.871895 12.0002 1.02 12.0096 1.17256 11.9833L6.54509 11.0591C6.87727 11.0019 7.15832 10.7813 7.29267 10.4721L8.91864 6.731C9.08228 6.35449 8.99918 5.91622 8.70907 5.62575L6.38457 3.29827C6.09591 3.00924 5.66049 2.92484 5.28474 3.08507ZM13.5 10.25C13.5 9.83579 13.1642 9.5 12.75 9.5C12.3358 9.5 12 9.83579 12 10.25V12H10.25C9.83579 12 9.5 12.3358 9.5 12.75C9.5 13.1642 9.83579 13.5 10.25 13.5H12V15.25C12 15.6642 12.3358 16 12.75 16C13.1642 16 13.5 15.6642 13.5 15.25V13.5H15.25C15.6642 13.5 16 13.1642 16 12.75C16 12.3358 15.6642 12 15.25 12H13.5V10.25Z",fillRule:"evenodd",clipRule:"evenodd"}],snapshot:[{d:"M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3ZM3 3.75C3 3.33579 3.33579 3 3.75 3H6.25271C6.66692 3 7.00271 3.33579 7.00271 3.75C7.00271 4.16421 6.66692 4.5 6.25271 4.5H4.5V6.25C4.5 6.66421 4.16421 7 3.75 7C3.33579 7 3 6.66421 3 6.25V3.75ZM3.75 13C3.33579 13 3 12.6642 3 12.25V9.75165C3 9.33743 3.33579 9.00165 3.75 9.00165C4.16421 9.00165 4.5 9.33743 4.5 9.75165V11.5H6.25269C6.6669 11.5 7.00269 11.8358 7.00269 12.25C7.00269 12.6642 6.6669 13 6.25269 13H3.75ZM13 3.75C13 3.33579 12.6642 3 12.25 3H9.74615C9.33194 3 8.99615 3.33579 8.99615 3.75C8.99615 4.16421 9.33194 4.5 9.74615 4.5H11.5V6.25C11.5 6.66421 11.8358 7 12.25 7C12.6642 7 13 6.66421 13 6.25V3.75ZM12.25 13C12.6642 13 13 12.6642 13 12.25V9.75165C13 9.33743 12.6642 9.00165 12.25 9.00165C11.8358 9.00165 11.5 9.33743 11.5 9.75165V11.5H9.74615C9.33194 11.5 8.99615 11.8358 8.99615 12.25C8.99615 12.6642 9.33194 13 9.74615 13H12.25Z",fillRule:"evenodd",clipRule:"evenodd"}],sortAlphaAsc:[{d:"M11.7599 6.8214e-07C12.0541 0.000397411 12.3208 0.172659 12.4421 0.440569L14.9332 5.94057C15.1041 6.31789 14.9367 6.7623 14.5594 6.93319C14.1821 7.10409 13.7377 6.93675 13.5668 6.55943L13.3231 6.02133C13.299 6.02365 13.2747 6.02484 13.25 6.02484L10.1771 6.02484L9.93236 6.56127C9.76045 6.93813 9.31558 7.10427 8.93873 6.93236C8.56187 6.76045 8.39573 6.31559 8.56764 5.93873L11.0766 0.43873C11.1986 0.171148 11.4658 -0.000394735 11.7599 6.8214e-07ZM10.8613 4.52484L12.6453 4.52484L11.7565 2.56246L10.8613 4.52484ZM2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 13.489L4.24451 12.7445C4.5374 12.4516 5.01228 12.4516 5.30517 12.7445C5.59806 13.0374 5.59807 13.5123 5.30517 13.8052L3.30518 15.8052C3.16453 15.9458 2.97377 16.0248 2.77485 16.0248C2.57594 16.0248 2.38518 15.9458 2.24452 15.8052L0.244513 13.8052C-0.0483814 13.5123 -0.0483826 13.0374 0.24451 12.7445C0.537402 12.4516 1.01228 12.4516 1.30517 12.7445L2 13.4393L2 8.75C2 8.33579 2.33579 8 2.75 8ZM9.7511 9C9.33689 9 9.0011 9.33579 9.0011 9.75C9.0011 10.1642 9.33689 10.5 9.7511 10.5H12.6681L9.17044 14.7784C8.98706 15.0027 8.94928 15.3126 9.07341 15.5744C9.19754 15.8362 9.46136 16.0031 9.7511 16.0031H14.25C14.6642 16.0031 15 15.6673 15 15.2531C15 14.8389 14.6642 14.5031 14.25 14.5031H11.333L14.8306 10.2247C15.014 10.0004 15.0518 9.6905 14.9277 9.42869C14.8035 9.16689 14.5397 9 14.25 9H9.7511Z",fillRule:"evenodd",clipRule:"evenodd"}],sortAlphaDes:[{d:"M9.75113 0C9.33692 0 9.00113 0.335786 9.00113 0.75C9.00113 1.16421 9.33692 1.5 9.75113 1.5H12.6681L9.17047 5.77842C8.98709 6.00274 8.94931 6.31262 9.07344 6.57442C9.19757 6.83622 9.46139 7.00311 9.75113 7.00311H14.25C14.6642 7.00311 15 6.66733 15 6.25311C15 5.8389 14.6642 5.50311 14.25 5.50311H11.333L14.8307 1.2247C15.014 1.00038 15.0518 0.690494 14.9277 0.428692C14.8036 0.166889 14.5397 0 14.25 0H9.75113ZM2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 13.489L4.24451 12.7445C4.5374 12.4516 5.01228 12.4516 5.30517 12.7445C5.59806 13.0374 5.59807 13.5123 5.30517 13.8052L3.30518 15.8052C3.16453 15.9458 2.97377 16.0248 2.77485 16.0248C2.57594 16.0248 2.38518 15.9458 2.24452 15.8052L0.244513 13.8052C-0.0483814 13.5123 -0.0483826 13.0374 0.24451 12.7445C0.537402 12.4516 1.01228 12.4516 1.30517 12.7445L2 13.4393L2 8.75C2 8.33579 2.33579 8 2.75 8ZM11.7599 9C12.0541 9.0004 12.3208 9.17266 12.4421 9.44057L14.9332 14.9406C15.1041 15.3179 14.9367 15.7623 14.5594 15.9332C14.1821 16.1041 13.7377 15.9367 13.5668 15.5594L13.3231 15.0213C13.299 15.0237 13.2747 15.0248 13.25 15.0248H10.1771L9.93236 15.5613C9.76045 15.9381 9.31558 16.1043 8.93873 15.9324C8.56187 15.7604 8.39573 15.3156 8.56764 14.9387L11.0766 9.43873C11.1986 9.17115 11.4658 8.9996 11.7599 9ZM10.8613 13.5248H12.6453L11.7565 11.5625L10.8613 13.5248Z",fillRule:"evenodd",clipRule:"evenodd"}],sortAsc:[{d:"M8.00026 1C7.44797 1 7.00026 1.44772 7.00026 2C7.00026 2.55228 7.44797 3 8.00026 3H9.00026C9.55254 3 10.0003 2.55228 10.0003 2C10.0003 1.44772 9.55254 1 9.00026 1H8.00026ZM7.00026 6C7.00026 5.44772 7.44797 5 8.00026 5L11 5C11.5523 5 12 5.44772 12 6C12 6.55229 11.5523 7 11 7L8.00026 7C7.44797 7 7.00026 6.55228 7.00026 6ZM8.00026 9C7.44797 9 7.00026 9.44771 7.00026 10C7.00026 10.5523 7.44797 11 8.00026 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H8.00026ZM8.00026 13C7.44797 13 7.00026 13.4477 7.00026 14C7.00026 14.5523 7.44797 15 8.00026 15L15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13L8.00026 13ZM2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 13.489L4.24451 12.7445C4.5374 12.4516 5.01228 12.4516 5.30517 12.7445C5.59806 13.0374 5.59807 13.5123 5.30517 13.8052L3.30518 15.8052C3.16453 15.9458 2.97377 16.0248 2.77485 16.0248C2.57594 16.0248 2.38518 15.9458 2.24452 15.8052L2.22199 15.7826C2.22044 15.7811 2.2189 15.7796 2.21737 15.778L0.244513 13.8052C-0.0483814 13.5123 -0.0483826 13.0374 0.24451 12.7445C0.537402 12.4516 1.01228 12.4516 1.30517 12.7445L2 13.4393L2 8.75C2 8.33579 2.33579 8 2.75 8Z",fillRule:"evenodd",clipRule:"evenodd"}],sortDes:[{d:"M8.00026 1C7.44797 1 7.00026 1.44772 7.00026 2C7.00026 2.55228 7.44797 3 8.00026 3L15 3C15.5523 3 16 2.55229 16 2C16 1.44772 15.5523 1 15 1H8.00026ZM8.00026 5C7.44797 5 7.00026 5.44772 7.00026 6C7.00026 6.55228 7.44797 7 8.00026 7L13 7C13.5523 7 14 6.55229 14 6C14 5.44772 13.5523 5 13 5L8.00026 5ZM7.00026 10C7.00026 9.44771 7.44797 9 8.00026 9H11C11.5523 9 12 9.44772 12 10C12 10.5523 11.5523 11 11 11H8.00026C7.44797 11 7.00026 10.5523 7.00026 10ZM8.00026 13C7.44797 13 7.00026 13.4477 7.00026 14C7.00026 14.5523 7.44797 15 8.00026 15H9.00026C9.55254 15 10.0003 14.5523 10.0003 14C10.0003 13.4477 9.55254 13 9.00026 13H8.00026ZM2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 13.489L4.24451 12.7445C4.5374 12.4516 5.01228 12.4516 5.30517 12.7445C5.59806 13.0374 5.59807 13.5123 5.30517 13.8052L3.30518 15.8052C3.16453 15.9458 2.97377 16.0248 2.77485 16.0248C2.57594 16.0248 2.38518 15.9458 2.24452 15.8052L2.22199 15.7826C2.22044 15.7811 2.2189 15.7796 2.21737 15.778L0.244513 13.8052C-0.0483814 13.5123 -0.0483826 13.0374 0.24451 12.7445C0.537402 12.4516 1.01228 12.4516 1.30517 12.7445L2 13.4393L2 8.75C2 8.33579 2.33579 8 2.75 8Z",fillRule:"evenodd",clipRule:"evenodd"}],sortGeneric:[{d:"M8.00024 1C7.44796 1 7.00024 1.44772 7.00024 2C7.00024 2.55228 7.44796 3 8.00024 3L14 3C14.5523 3 15 2.55229 15 2C15 1.44772 14.5523 1 14 1H8.00024ZM2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 13.489L4.24451 12.7445C4.5374 12.4516 5.01228 12.4516 5.30517 12.7445C5.59806 13.0374 5.59807 13.5123 5.30517 13.8052L3.30518 15.8052C3.16453 15.9458 2.97377 16.0248 2.77485 16.0248C2.57594 16.0248 2.38518 15.9458 2.24452 15.8052L0.244513 13.8052C-0.0483814 13.5123 -0.0483826 13.0374 0.24451 12.7445C0.537402 12.4516 1.01228 12.4516 1.30517 12.7445L2 13.4393L2 8.75C2 8.33579 2.33579 8 2.75 8ZM7.00024 5C7.00024 4.44772 7.44796 4 8.00024 4L14 4C14.5523 4 15 4.44772 15 5C15 5.55229 14.5523 6 14 6L8.00024 6C7.44796 6 7.00024 5.55228 7.00024 5ZM8.00024 7C7.44796 7 7.00024 7.44772 7.00024 8C7.00024 8.55228 7.44796 9 8.00024 9L14 9C14.5523 9 15 8.55229 15 8C15 7.44772 14.5523 7 14 7L8.00024 7ZM7.00024 11C7.00024 10.4477 7.44796 10 8.00024 10L14 10C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12L8.00024 12C7.44796 12 7.00024 11.5523 7.00024 11ZM8.00024 13C7.44796 13 7.00024 13.4477 7.00024 14C7.00024 14.5523 7.44796 15 8.00024 15L14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13L8.00024 13Z",fillRule:"evenodd",clipRule:"evenodd"}],sortNumberAsc:[{d:"M13 0.750183C13 0.48015 12.8548 0.230963 12.6199 0.0977683C12.385 -0.0354263 12.0967 -0.0320632 11.8649 0.106573L9.36495 1.60225C9.00949 1.8149 8.89373 2.27545 9.10639 2.63091C9.31905 2.98636 9.7796 3.10212 10.1351 2.88946L11.5 2.07286V6.24524C11.5 6.65945 11.8358 6.99524 12.25 6.99524C12.6642 6.99524 13 6.65945 13 6.24524V0.750183ZM11.5 8C12.8807 8 14 9.11929 14 10.5V13.5C14 14.8807 12.8807 16 11.5 16C10.3672 16 9.34517 15.2472 9.03729 14.2162C8.91876 13.8193 9.14443 13.4014 9.54132 13.2829C9.93822 13.1644 10.356 13.39 10.4746 13.7869C10.5979 14.2001 11.0484 14.5 11.5 14.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.792C12.1938 12.9258 11.8556 13 11.5 13C10.1193 13 9 11.8807 9 10.5C9 9.11929 10.1193 8 11.5 8ZM11.5 9.5C10.9477 9.5 10.5 9.94772 10.5 10.5C10.5 11.0523 10.9477 11.5 11.5 11.5C12.0523 11.5 12.5 11.0523 12.5 10.5C12.5 9.94772 12.0523 9.5 11.5 9.5ZM2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 13.4393L4.21967 12.7197C4.51256 12.4268 4.98743 12.4268 5.28033 12.7197C5.57322 13.0126 5.57322 13.4874 5.28033 13.7803L3.28034 15.7803C3.27008 15.7906 3.25955 15.8005 3.24877 15.8101C3.11623 15.9282 2.94149 16 2.75 16C2.54172 16 2.35327 15.9151 2.21737 15.778L0.219671 13.7803C-0.0732227 13.4874 -0.0732239 13.0126 0.219669 12.7197C0.512561 12.4268 0.987435 12.4268 1.28033 12.7197L2 13.4393L2 8.75C2 8.33579 2.33579 8 2.75 8Z",fillRule:"evenodd",clipRule:"evenodd"}],sortNumberDes:[{d:"M9 2.5C9 1.11929 10.1193 0 11.5 0C12.8807 0 14 1.11929 14 2.5L14 5.50002C14 6.88073 12.8807 8.00002 11.5 8.00002C10.3672 8.00002 9.34109 7.23217 9.0332 6.20117C8.91468 5.80428 9.14034 5.38645 9.53724 5.26792C9.93413 5.1494 10.352 5.37506 10.4705 5.77196C10.5939 6.18511 11.0484 6.50002 11.5 6.50002C12.0523 6.50002 12.5 6.0523 12.5 5.50002V4.79198C12.1938 4.92578 11.8556 5 11.5 5C10.1193 5 9 3.88071 9 2.5ZM11.5 1.5C10.9477 1.5 10.5 1.94772 10.5 2.5C10.5 3.05228 10.9477 3.5 11.5 3.5C12.0523 3.5 12.5 3.05228 12.5 2.5C12.5 1.94772 12.0523 1.5 11.5 1.5ZM13 9.75018C13 9.48015 12.8548 9.23096 12.6199 9.09777C12.385 8.96457 12.0967 8.96794 11.8649 9.10657L9.36495 10.6022C9.00949 10.8149 8.89373 11.2755 9.10639 11.6309C9.31905 11.9864 9.7796 12.1021 10.1351 11.8895L11.5 11.0729V15.2452C11.5 15.6594 11.8358 15.9952 12.25 15.9952C12.6642 15.9952 13 15.6594 13 15.2452V9.75018ZM2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 13.4393L4.21967 12.7197C4.51256 12.4268 4.98743 12.4268 5.28033 12.7197C5.57322 13.0126 5.57322 13.4874 5.28033 13.7803L3.28034 15.7803C3.27008 15.7906 3.25955 15.8005 3.24877 15.8101C3.11623 15.9282 2.94149 16 2.75 16C2.54172 16 2.35327 15.9151 2.21737 15.778L0.219671 13.7803C-0.0732227 13.4874 -0.0732239 13.0126 0.219669 12.7197C0.512561 12.4268 0.987435 12.4268 1.28033 12.7197L2 13.4393L2 8.75C2 8.33579 2.33579 8 2.75 8Z",fillRule:"evenodd",clipRule:"evenodd"}],spacer:[{d:"M0 0.75C0 0.335786 0.335786 0 0.75 0H15.25C15.6642 0 16 0.335786 16 0.75C16 1.16421 15.6642 1.5 15.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z M7.46967 3.21967C7.76256 2.92678 8.23744 2.92678 8.53033 3.21967L10.7809 5.47022C11.0738 5.76311 11.0738 6.23799 10.7809 6.53088C10.488 6.82377 10.0131 6.82377 9.72022 6.53088L8.75 5.56066V10.4393L9.71943 9.46991C10.0123 9.17702 10.4872 9.17702 10.7801 9.46991C11.073 9.76281 11.073 10.2377 10.7801 10.5306L8.53033 12.7803C8.23744 13.0732 7.76256 13.0732 7.46967 12.7803L5.21991 10.5306C4.92702 10.2377 4.92702 9.76281 5.21991 9.46991C5.51281 9.17702 5.98768 9.17702 6.28057 9.46991L7.25 10.4393L7.25 5.56066L6.27978 6.53088C5.98689 6.82377 5.51201 6.82377 5.21912 6.53088C4.92623 6.23799 4.92623 5.76311 5.21912 5.47022L7.46967 3.21967Z M0.75 14.5C0.335786 14.5 0 14.8358 0 15.25C0 15.6642 0.335786 16 0.75 16H15.25C15.6642 16 16 15.6642 16 15.25C16 14.8358 15.6642 14.5 15.25 14.5H0.75Z",fillRule:"evenodd",clipRule:"evenodd"}],sparkle:[{d:"M6.92295 1.75171C7.29122 0.749431 8.70878 0.749428 9.07705 1.75171L10.2835 5.03519C10.3996 5.35127 10.6487 5.60037 10.9648 5.7165L14.2483 6.92295C15.2506 7.29122 15.2506 8.70878 14.2483 9.07705L10.9648 10.2835C10.6487 10.3996 10.3996 10.6487 10.2835 10.9648L9.07705 14.2483C8.70878 15.2506 7.29122 15.2506 6.92295 14.2483L5.7165 10.9648C5.60037 10.6487 5.35127 10.3996 5.0352 10.2835L1.75171 9.07705C0.749431 8.70878 0.749428 7.29122 1.75171 6.92295L5.03519 5.7165C5.35127 5.60037 5.60037 5.35127 5.7165 5.0352L6.92295 1.75171Z",fillRule:"",clipRule:""}],sparkles:[{d:"M4.76056 5.23522C5.08842 4.35033 6.33989 4.35037 6.66779 5.23522L7.61213 7.78698C7.71514 8.06537 7.93529 8.28454 8.21369 8.38756L10.7645 9.3319C11.65 9.65956 11.65 10.9124 10.7645 11.2401L8.21369 12.1844C7.93529 12.2875 7.71514 12.5066 7.61213 12.785L6.66779 15.3368C6.33994 16.2218 5.08838 16.2218 4.76056 15.3368L3.81623 12.785C3.71326 12.5067 3.49386 12.2875 3.21564 12.1844L0.663885 11.2401C-0.22162 10.9124 -0.22162 9.65956 0.663885 9.3319L3.21564 8.38756C3.49384 8.28448 3.71326 8.06523 3.81623 7.78698L4.76056 5.23522ZM11.9666 0.410999C12.1832 -0.137345 12.96 -0.137305 13.1766 0.410999L13.7547 1.87877C13.8207 2.04615 13.9536 2.17884 14.1209 2.24498L15.5887 2.82408C16.1374 3.04051 16.1374 3.81664 15.5887 4.03307L14.1209 4.61217C13.9536 4.67831 13.8207 4.81099 13.7547 4.97838L13.1766 6.44615C12.96 6.99456 12.1831 6.9946 11.9666 6.44615L11.3885 4.97838C11.3225 4.81094 11.1897 4.67829 11.0223 4.61217L9.55451 4.03307C9.00591 3.81659 9.00589 3.04054 9.55451 2.82408L11.0223 2.24498C11.1897 2.17886 11.3225 2.0462 11.3885 1.87877L11.9666 0.410999Z",fillRule:"",clipRule:""}],square:[{d:"M3 5C3 3.89543 3.89543 3 5 3H11C12.1046 3 13 3.89543 13 5V11C13 12.1046 12.1046 13 11 13H5C3.89543 13 3 12.1046 3 11V5Z",fillRule:"",clipRule:""}],stack:[{d:"M1 2.75C1 2.33579 1.33579 2 1.75 2H14.25C14.6642 2 15 2.33579 15 2.75C15 3.16421 14.6642 3.5 14.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z M1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H14.25C14.6642 12.5 15 12.8358 15 13.25C15 13.6642 14.6642 14 14.25 14H1.75C1.33579 14 1 13.6642 1 13.25Z M5 6C4.44772 6 4 6.44772 4 7V9C4 9.55228 4.44772 10 5 10H11C11.5523 10 12 9.55228 12 9V7C12 6.44772 11.5523 6 11 6H5Z",fillRule:"evenodd",clipRule:"evenodd"}],star:[{d:"M7.54282 0.311683C7.71382 -0.09893 8.29552 -0.0989301 8.46651 0.311683L10.3776 4.90063C10.4479 5.0695 10.6048 5.18652 10.7867 5.2058L15.5565 5.71138C15.9818 5.75646 16.1581 6.27988 15.8467 6.5731L12.232 9.97719C12.1056 10.0962 12.05 10.2723 12.085 10.4423L13.1079 15.409C13.1963 15.8384 12.7287 16.1658 12.3554 15.9358L8.26709 13.417C8.10619 13.3178 7.90315 13.3178 7.74224 13.417L3.65391 15.9358C3.28059 16.1658 2.81303 15.8384 2.90147 15.409L3.92434 10.4423C3.95936 10.2723 3.90372 10.0962 3.77732 9.97719L0.162618 6.5731C-0.148747 6.27988 0.0275558 5.75646 0.452875 5.71138L5.22267 5.2058C5.40457 5.18652 5.56145 5.0695 5.63178 4.90063L7.54282 0.311683Z",fillRule:"evenodd",clipRule:"evenodd"}],starLine:[{d:"M5.63178 4.89777C5.56145 5.06653 5.40457 5.18349 5.22267 5.20276L0.452875 5.70804C0.0275558 5.7531 -0.148747 6.2762 0.162618 6.56926L3.77732 9.97136C3.90372 10.0903 3.95936 10.2663 3.92434 10.4362L2.90147 15.4C2.81303 15.8292 3.28059 16.1564 3.65391 15.9265L7.74224 13.4091C7.90315 13.31 8.10619 13.31 8.26709 13.4091L12.3554 15.9265C12.7287 16.1564 13.1963 15.8292 13.1079 15.4L12.085 10.4362C12.05 10.2663 12.1056 10.0903 12.232 9.97136L15.8467 6.56925C16.1581 6.2762 15.9818 5.7531 15.5565 5.70804L10.7867 5.20276C10.6048 5.18349 10.4479 5.06653 10.3776 4.89777L8.46651 0.311502C8.29552 -0.09887 7.71382 -0.0988699 7.54282 0.311503L5.63178 4.89777ZM8.00467 3.1049L7.01731 5.47443C6.73601 6.1495 6.10849 6.61732 5.38087 6.6944L2.77778 6.97016L4.80629 8.87936C5.31187 9.3552 5.53445 10.059 5.39437 10.7388L4.83874 13.4351L6.95497 12.132C7.59859 11.7357 8.41074 11.7357 9.05437 12.132L11.1706 13.4351L10.615 10.7388C10.4749 10.059 10.6975 9.3552 11.203 8.87936L13.2316 6.97016L10.6285 6.6944C9.90085 6.61732 9.27332 6.1495 8.99203 5.47443L8.00467 3.1049Z",fillRule:"evenodd",clipRule:"evenodd"}],stepBackward:[{d:"M2 2.75C2 2.33579 2.33579 2 2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V13.2477C3.5 13.6619 3.16421 13.9977 2.75 13.9977C2.33579 13.9977 2 13.6619 2 13.2477V2.75ZM11.7787 2.16655C12.0035 1.985 12.3126 1.94872 12.5733 2.07327C12.834 2.19783 13 2.46107 13 2.75001V13.25C13 13.5389 12.834 13.8022 12.5733 13.9267C12.3126 14.0513 12.0035 14.015 11.7787 13.8335L5.27875 8.58346C5.10246 8.44108 5 8.22662 5 8.00001C5 7.7734 5.10246 7.55894 5.27875 7.41655L11.7787 2.16655Z",fillRule:"evenodd",clipRule:"evenodd"}],stepForward:[{d:"M13 2.75C13 2.33579 12.6642 2 12.25 2C11.8358 2 11.5 2.33579 11.5 2.75V13.2477C11.5 13.6619 11.8358 13.9977 12.25 13.9977C12.6642 13.9977 13 13.6619 13 13.2477V2.75ZM3.22125 2.16655C2.99648 1.985 2.6874 1.94872 2.42669 2.07327C2.16598 2.19783 2 2.46107 2 2.75001V13.25C2 13.5389 2.16598 13.8022 2.42669 13.9267C2.6874 14.0513 2.99648 14.015 3.22125 13.8335L9.72125 8.58346C9.89754 8.44108 10 8.22662 10 8.00001C10 7.7734 9.89754 7.55894 9.72125 7.41655L3.22125 2.16655Z",fillRule:"evenodd",clipRule:"evenodd"}],strikethrough:[{d:"M8 1.0025C6.39555 1.0025 5.24822 1.50161 4.50348 2.27217C3.77176 3.02926 3.5 3.97551 3.5 4.75C3.5 5.98149 4.23102 6.83922 5.0812 7.39494C5.13627 7.43094 5.19221 7.46595 5.24892 7.5L1.75 7.5C1.33579 7.5 1 7.83579 1 8.25C1 8.66421 1.33579 9 1.75 9L9.62155 9C9.90217 9.12564 10.1679 9.26828 10.4069 9.4285C11.118 9.90512 11.5 10.4655 11.5 11.1415C11.5 11.981 11.1224 12.5295 10.5192 12.9034C9.87827 13.3007 8.96854 13.5003 8 13.5003C5.94236 13.5003 4.7637 12.3844 4.45863 11.5043C4.32295 11.113 3.89571 10.9057 3.50434 11.0414C3.11298 11.177 2.9057 11.6043 3.04137 11.9957C3.58471 13.563 5.3964 15.0003 8 15.0003C9.1364 15.0003 10.3517 14.7721 11.3095 14.1783C12.3051 13.5611 13 12.5552 13 11.1415C13 10.272 12.6682 9.56373 12.181 9H14.25C14.6642 9 15 8.66421 15 8.25C15 7.83579 14.6642 7.5 14.25 7.5L9.92536 7.5C9.32447 7.2592 8.70786 7.08917 8.15002 6.97528C7.34793 6.81153 6.51515 6.54023 5.90191 6.13938C5.29939 5.74553 5 5.29563 5 4.75C5 4.30351 5.16026 3.75102 5.58206 3.3146C5.99082 2.89166 6.71849 2.5025 8 2.5025C8.96658 2.5025 9.69438 2.84175 10.1982 3.25661C10.7251 3.69051 10.9693 4.1732 11.0152 4.39758C11.0981 4.8034 11.4943 5.06516 11.9002 4.98223C12.306 4.8993 12.5677 4.50309 12.4848 4.09726C12.355 3.46215 11.8787 2.69738 11.1517 2.0987C10.4016 1.48097 9.34219 1.0025 8 1.0025Z",fillRule:"",clipRule:""}],swap:[{d:"M4.78033 3.28033C5.07322 2.98744 5.07322 2.51256 4.78033 2.21967C4.48744 1.92678 4.01256 1.92678 3.71967 2.21967L1.21997 4.71937L1.21808 4.72126C1.14696 4.7928 1.09324 4.87511 1.05691 4.96291C1.02024 5.05134 1 5.14831 1 5.25C1 5.35169 1.02024 5.44866 1.05691 5.53709C1.09351 5.62555 1.14776 5.70842 1.21967 5.78033L3.71967 8.28033C4.01256 8.57322 4.48744 8.57322 4.78033 8.28033C5.07322 7.98744 5.07322 7.51256 4.78033 7.21967L3.56066 6H14.25C14.6642 6 15 5.66421 15 5.25C15 4.83579 14.6642 4.5 14.25 4.5H3.56066L4.78033 3.28033ZM11.2235 9.28033C10.9306 8.98744 10.9306 8.51256 11.2235 8.21967C11.5164 7.92678 11.9913 7.92678 12.2842 8.21967L14.7842 10.7197C15.0771 11.0126 15.0771 11.4874 14.7842 11.7803L12.2842 14.2803C11.9913 14.5732 11.5164 14.5732 11.2235 14.2803C10.9306 13.9874 10.9306 13.5126 11.2235 13.2197L12.4432 12H1.75C1.33579 12 1 11.6642 1 11.25C1 10.8358 1.33579 10.5 1.75 10.5H12.4432L11.2235 9.28033Z",fillRule:"evenodd",clipRule:"evenodd"}],swapLeft:[{d:"M14.7002 7.50025H4.20323L6.70623 5.10125C6.82623 4.98225 6.82623 4.79025 6.70623 4.67225L6.11823 4.08925C5.99923 3.97025 5.80423 3.97025 5.68523 4.08925C5.68523 4.08925 1.25723 8.35025 1.13923 8.46825C0.893232 8.71425 0.995232 9.00025 1.27323 9.00025H14.7002C14.8662 9.00025 15.0002 8.86525 15.0002 8.70025V7.80025C15.0002 7.63425 14.8662 7.50025 14.7002 7.50025Z",fillRule:"evenodd",clipRule:"evenodd"}],swapRight:[{d:"M1.3 7.50025H11.796L9.294 5.10125C9.174 4.98225 9.174 4.79025 9.294 4.67225L9.882 4.08925C10.001 3.97025 10.195 3.97025 10.315 4.08925C10.315 4.08925 14.742 8.35025 14.861 8.46825C15.107 8.71325 15.004 9.00025 14.727 9.00025H1.3C1.134 9.00025 1 8.86525 1 8.70025V7.80025C1 7.63425 1.134 7.50025 1.3 7.50025Z",fillRule:"evenodd",clipRule:"evenodd"}],table:[{d:"M2 1C0.895431 1 0 1.89543 0 3V13C0 14.1046 0.895431 15 2 15H14C15.1046 15 16 14.1046 16 13V3C16 1.89543 15.1046 1 14 1H2ZM14.5 5V7H6V5H14.5ZM1.5 5H5V7H1.5V5ZM1.5 10V8H5V10H1.5ZM1.5 13V11H5V13.5H2C1.72386 13.5 1.5 13.2761 1.5 13ZM14 13.5H6V11H14.5V13C14.5 13.2761 14.2761 13.5 14 13.5ZM14.5 8V10H6V8H14.5Z",fillRule:"evenodd",clipRule:"evenodd"}],tableCog:[{d:"M14.5 5V6.95765C15.0534 7.19946 15.5594 7.52972 16 7.93056V3C16 1.89543 15.1046 1 14 1H2C0.895431 1 0 1.89543 0 3V13C0 14.1046 0.895431 15 2 15H7.68945C7.39121 14.5426 7.1592 14.0381 7.00702 13.5H6V11H6.89068C6.95418 10.6543 7.05001 10.3199 7.17493 10H6V8H8.52505C8.95811 7.59115 9.45755 7.25187 10.0055 7H6V5H14.5ZM1.5 5H5V7H1.5V5ZM1.5 10V8H5V10H1.5ZM1.5 13V11H5V13.5H2C1.72386 13.5 1.5 13.2761 1.5 13ZM11.9524 16H12.6435C12.8791 16 13.0827 15.8356 13.1323 15.6053L13.299 14.832C13.6518 14.7076 13.9744 14.519 14.2528 14.2804L15.0015 14.5264C15.2264 14.6002 15.4722 14.5063 15.5905 14.3013L15.936 13.7028C16.0538 13.4988 16.0132 13.2403 15.8387 13.0822L15.2523 12.5512C15.2854 12.3726 15.3022 12.1882 15.3022 12C15.3022 11.8118 15.2849 11.6277 15.2518 11.4491L15.8386 10.9162C16.0127 10.758 16.053 10.4998 15.9354 10.2961L15.5922 9.70162C15.4742 9.49735 15.2296 9.40328 15.0052 9.47591L14.2537 9.71916C13.9752 9.48052 13.6518 9.29244 13.299 9.16798L13.1308 8.39387C13.0809 8.16399 12.8775 8 12.6422 8H11.9558C11.7199 8 11.5161 8.16483 11.4668 8.39549L11.3018 9.16771C10.9488 9.29213 10.626 9.48068 10.3474 9.71938L9.5926 9.47772C9.36855 9.40601 9.12482 9.5002 9.0072 9.70393L8.66399 10.2984C8.54605 10.5026 8.58691 10.7616 8.76201 10.9196L9.34828 11.4487C9.31511 11.6274 9.29777 11.8117 9.29777 12C9.29777 12.1883 9.31511 12.3726 9.34828 12.5513L8.76187 13.0761C8.58552 13.2339 8.54396 13.4937 8.66228 13.6987L9.00783 14.2972C9.1256 14.5012 9.36977 14.5953 9.594 14.5232L10.347 14.2808C10.6256 14.5195 10.9488 14.7079 11.3018 14.8323L11.463 15.6025C11.5115 15.8341 11.7158 16 11.9524 16ZM13.299 12C13.299 12.5517 12.8517 12.9989 12.3 12.9989C11.7483 12.9989 11.3011 12.5517 11.3011 12C11.3011 11.4483 11.7483 11.0011 12.3 11.0011C12.8517 11.0011 13.299 11.4483 13.299 12Z",fillRule:"evenodd",clipRule:"evenodd"}],tableLock:[{d:"M14.5 5V6.3757C15.3784 7.07874 15.954 8.14434 16 9.34569V3C16 1.89543 15.1046 1 14 1H2C0.895431 1 0 1.89543 0 3V13C0 14.1046 0.895431 15 2 15H6.5V13.5H6V11H6.70802C6.88197 10.6019 7.15661 10.2578 7.49976 10H6V8H8.29124C8.43822 7.63716 8.63688 7.30079 8.87809 7H6V5H14.5ZM1.5 5H5V7H1.5V5ZM1.5 10V8H5V10H1.5ZM1.5 13V11H5V13.5H2C1.72386 13.5 1.5 13.2761 1.5 13ZM9 11C8.44772 11 8 11.4477 8 12V15C8 15.5523 8.44772 16 9 16H15C15.5523 16 16 15.5523 16 15V12C16 11.4477 15.5523 11 15 11H14.503V9.50149C14.503 8.11995 13.383 7 12.0015 7C10.62 7 9.5 8.11995 9.5 9.50149V11H9ZM13.003 9.50149V11H11V9.50149C11 8.94838 11.4484 8.5 12.0015 8.5C12.5546 8.5 13.003 8.94838 13.003 9.50149Z",fillRule:"evenodd",clipRule:"evenodd"}],tablet:[{d:"M6.75 12C6.33579 12 6 12.3358 6 12.75C6 13.1642 6.33579 13.5 6.75 13.5H9.25C9.66421 13.5 10 13.1642 10 12.75C10 12.3358 9.66421 12 9.25 12H6.75Z M2 2C2 0.895431 2.89543 0 4 0H12C13.1046 0 14 0.895431 14 2V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V2ZM4 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V14C12.5 14.2761 12.2761 14.5 12 14.5H4C3.72386 14.5 3.5 14.2761 3.5 14V2C3.5 1.72386 3.72386 1.5 4 1.5Z",fillRule:"evenodd",clipRule:"evenodd"}],tag:[{d:"M13 1.03784H8.81637C8.28676 1.03784 7.77876 1.24791 7.40383 1.62196L1.58258 7.42946C0.799951 8.21024 0.799202 9.47786 1.5809 10.2596L5.75052 14.4292C6.53168 15.2103 7.79823 15.2102 8.57923 14.4289L14.4145 8.5912C14.7894 8.21615 15 7.70756 15 7.17727V3.03784C15 1.93327 14.1046 1.03784 13 1.03784ZM11.5 6C12.3284 6 13 5.32843 13 4.5C13 3.67158 12.3284 3 11.5 3C10.6716 3 10 3.67158 10 4.5C10 5.32843 10.6716 6 11.5 6Z",fillRule:"evenodd",clipRule:"evenodd"}],task:[{d:"M3 0.999939H12.8351C12.7228 1.09097 12.6176 1.19423 12.5215 1.30952L11.5295 2.49994H3C2.72386 2.49994 2.5 2.7238 2.5 2.99994V12.9999C2.5 13.2761 2.72386 13.4999 3 13.4999H13C13.2761 13.4999 13.5 13.2761 13.5 12.9999V7.16455L15 5.36455V12.9999C15 14.1045 14.1046 14.9999 13 14.9999H3C1.89543 14.9999 1 14.1045 1 12.9999V2.99994C1 1.89537 1.89543 0.999939 3 0.999939ZM14.8262 3.23008C15.0913 2.91187 15.0483 2.43895 14.7301 2.17377C14.4119 1.9086 13.939 1.95159 13.6738 2.2698L7.97819 9.10457L6.30747 7.24822C6.03038 6.94034 5.55616 6.91538 5.24828 7.19248C4.94039 7.46957 4.91544 7.94379 5.19253 8.25167L7.44253 10.7517C7.58809 10.9134 7.79672 11.0039 8.01428 10.9998C8.23183 10.9957 8.43687 10.8972 8.57617 10.7301L14.8262 3.23008Z",fillRule:"evenodd",clipRule:"evenodd"}],template:[{d:"M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V5H1V3ZM1 6.48657H9V14.9866H3C1.89543 14.9866 1 14.0911 1 12.9866V6.48657ZM15 6.5H10.5V15H13C14.1046 15 15 14.1046 15 13V6.5Z",fillRule:"evenodd",clipRule:"evenodd"}],text:[{d:"M8.91058 1.61448C8.75496 1.24202 8.39068 0.999654 7.98702 1C7.58337 1.00035 7.2195 1.24334 7.06452 1.61606L2.07663 13.6119C1.86458 14.1218 2.10609 14.7071 2.61605 14.9191C3.12601 15.1312 3.7113 14.8897 3.92335 14.3797L5.32865 11H10.6645L12.0773 14.3813C12.2902 14.8909 12.8759 15.1314 13.3855 14.9185C13.8951 14.7056 14.1356 14.1199 13.9227 13.6103L8.91058 1.61448ZM9.82886 9L7.99012 4.59922L6.16026 9H9.82886Z",fillRule:"evenodd",clipRule:"evenodd"}],textColor:[{d:"M8.01619 0.999024C8.31193 0.999419 8.57983 1.17357 8.70023 1.44369L12.935 10.9447C13.1037 11.323 12.9337 11.7664 12.5553 11.935C12.177 12.1037 11.7336 11.9337 11.565 11.5553L10.2042 8.50228H5.80562L4.43422 11.5572C4.26458 11.935 3.82073 12.1039 3.44284 11.9342C3.06496 11.7646 2.89615 11.3207 3.06579 10.9428L7.33098 1.44186C7.4521 1.17207 7.72046 0.998631 8.01619 0.999024ZM8.01275 3.58577L9.53557 7.00228H6.479L8.01275 3.58577ZM2 13.0115C1.44772 13.0115 1 13.4592 1 14.0115V15C1 15.5523 1.44772 16 2 16H14C14.5523 16 15 15.5523 15 15V14.0115C15 13.4592 14.5523 13.0115 14 13.0115H2Z",fillRule:"evenodd",clipRule:"evenodd"}],textStyle:[{d:"M8.91058 1.61448C8.75496 1.24202 8.39068 0.999654 7.98702 1C7.58337 1.00035 7.2195 1.24334 7.06452 1.61606L2.07663 13.6119C1.86458 14.1218 2.10609 14.7071 2.61605 14.9191C3.12601 15.1312 3.7113 14.8897 3.92335 14.3797L5.32865 11H10.6645L12.0773 14.3813C12.2902 14.8909 12.8759 15.1314 13.3855 14.9185C13.8951 14.7056 14.1356 14.1199 13.9227 13.6103L8.91058 1.61448ZM9.82886 9L7.99012 4.59922L6.16026 9H9.82886Z",fillRule:"evenodd",clipRule:"evenodd"}],textarea:[{d:"M4 5H3.5C3.22386 5 3 4.77614 3 4.5C3 4.22386 3.22386 4 3.5 4H5.5C5.77614 4 6 4.22386 6 4.5C6 4.77614 5.77614 5 5.5 5H5V8H5.5C5.77614 8 6 8.22386 6 8.5C6 8.77614 5.77614 9 5.5 9H3.5C3.22386 9 3 8.77614 3 8.5C3 8.22386 3.22386 8 3.5 8H4V5Z",fillRule:"",clipRule:""},{d:"M10 12H13V9L10 12Z",fillRule:"",clipRule:""},{d:"M2 1C0.895431 1 0 1.89543 0 3V13C0 14.1046 0.895431 15 2 15H14C15.1046 15 16 14.1046 16 13V3C16 1.89543 15.1046 1 14 1H2ZM14 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V13C1.5 13.2761 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.2761 14.5 13V3C14.5 2.72386 14.2761 2.5 14 2.5Z",fillRule:"evenodd",clipRule:"evenodd"}],toolbox:[{d:"M4.00195 2.75195V4H3C1.89543 4 1 4.89543 1 6V7.49457H4V7.25C4 6.83579 4.33579 6.5 4.75 6.5C5.16421 6.5 5.5 6.83579 5.5 7.25V7.49457H10.5V7.25C10.5 6.83579 10.8358 6.5 11.25 6.5C11.6642 6.5 12 6.83579 12 7.25V7.49457H15V6C15 4.89543 14.1046 4 13 4H11.998V2.75195C11.998 1.78546 11.2145 1.00195 10.248 1.00195H5.75195C4.78546 1.00195 4.00195 1.78545 4.00195 2.75195ZM5.75195 2.50195C5.61388 2.50195 5.50195 2.61388 5.50195 2.75195V4H10.498V2.75195C10.498 2.61388 10.3861 2.50195 10.248 2.50195H5.75195ZM15 8.99457H12V9.25C12 9.66421 11.6642 10 11.25 10C10.8358 10 10.5 9.66421 10.5 9.25V8.99457H5.5V9.25C5.5 9.66421 5.16421 10 4.75 10C4.33579 10 4 9.66421 4 9.25V8.99457H1V12C1 13.1046 1.89543 14 3 14H13C14.1046 14 15 13.1046 15 12V8.99457Z",fillRule:"evenodd",clipRule:"evenodd"}],trash:[{d:"M6 1C5.44772 1 5 1.44772 5 2V3H3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5L3 13C3 14.1046 3.89543 15 5 15H11C12.1046 15 13 14.1046 13 13V5C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H11V2C11 1.44772 10.5523 1 10 1H6ZM5.5 7.75C5.5 7.33579 5.83579 7 6.25 7C6.66421 7 7 7.33579 7 7.75V11.25C7 11.6642 6.66421 12 6.25 12C5.83579 12 5.5 11.6642 5.5 11.25V7.75ZM9.75 7C9.33579 7 9 7.33579 9 7.75V11.25C9 11.6642 9.33579 12 9.75 12C10.1642 12 10.5 11.6642 10.5 11.25V7.75C10.5 7.33579 10.1642 7 9.75 7Z",fillRule:"evenodd",clipRule:"evenodd"}],treeArrow:[{d:"M9.2195 14.7198C8.9267 15.0128 8.92685 15.4877 9.21984 15.7805C9.51283 16.0733 9.9877 16.0731 10.2805 15.7802L14.7805 11.2773C14.9211 11.1366 15.0001 10.9458 15 10.7469C14.9999 10.5479 14.9209 10.3572 14.7802 10.2166L10.2802 5.7195C9.98717 5.4267 9.5123 5.42685 9.2195 5.71984C8.9267 6.01283 8.92685 6.4877 9.21984 6.7805L12.4414 10L6.75 10C4.95507 10 3.5 8.54492 3.5 6.75L3.5 3.75C3.5 3.33578 3.16421 3 2.75 3C2.33579 3 2 3.33578 2 3.75L2 6.75C2 9.37335 4.12664 11.5 6.75 11.5L12.4373 11.5L9.2195 14.7198Z",fillRule:"",clipRule:""}],underline:[{d:"M5.00003 2C5.00003 1.44772 4.55232 1 4.00003 1C3.44775 1 3.00003 1.44772 3.00003 2V7C3.00003 9.76142 5.23861 12 8.00003 12C10.7615 12 13 9.76142 13 7V2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V7C11 8.65685 9.65688 10 8.00003 10C6.34318 10 5.00003 8.65685 5.00003 7V2ZM2.74963 13.5C2.33542 13.5 1.99963 13.8358 1.99963 14.25C1.99963 14.6642 2.33542 15 2.74963 15L13.248 15C13.6622 15 13.998 14.6642 13.998 14.25C13.998 13.8358 13.6622 13.5 13.248 13.5L2.74963 13.5Z",fillRule:"evenodd",clipRule:"evenodd"}],undo:[{d:"M5.80642 3.26861C6.09932 2.97572 6.09932 2.50084 5.80642 2.20795C5.51353 1.91506 5.03866 1.91506 4.74576 2.20795L1.21967 5.73404C0.926777 6.02694 0.926777 6.50181 1.21967 6.7947L4.74576 10.3208C5.03866 10.6137 5.51353 10.6137 5.80642 10.3208C6.09932 10.0279 6.09932 9.55303 5.80642 9.26014L3.5483 7.00201L10.251 7.00202C12.0454 7.00202 13.5 8.45664 13.5 10.251C13.5 12.0454 12.0454 13.5 10.251 13.5H7.75C7.33579 13.5 7 13.8358 7 14.25C7 14.6642 7.33579 15 7.75 15H10.251C12.8738 15 15 12.8738 15 10.251C15 7.62821 12.8738 5.50202 10.251 5.50202L3.57302 5.50201L5.80642 3.26861Z",fillRule:"",clipRule:""}],unlink:[{d:"M10.4872 0.038691C10.8801 0.169677 11.0925 0.594417 10.9615 0.987374L10.4615 2.48737C10.3305 2.88033 9.90579 3.0927 9.51283 2.96172C9.11987 2.83073 8.9075 2.40599 9.03849 2.01303L9.53849 0.513033C9.66947 0.120075 10.0942 -0.0922948 10.4872 0.038691ZM4 4.0002C1.79086 4.0002 0 5.79106 0 8.0002C0 10.2093 1.79086 12.0002 4 12.0002H6.25C6.66421 12.0002 7 11.6644 7 11.2502C7 10.836 6.66421 10.5002 6.25 10.5002H4C2.61929 10.5002 1.5 9.38091 1.5 8.0002C1.5 6.61949 2.61929 5.5002 4 5.5002H6.25C6.66421 5.5002 7 5.16441 7 4.7502C7 4.33598 6.66421 4.0002 6.25 4.0002H4ZM12 4.0002C14.2091 4.0002 16 5.79106 16 8.0002C16 10.2093 14.2091 12.0002 12 12.0002H9.75C9.33579 12.0002 9 11.6644 9 11.2502C9 10.836 9.33579 10.5002 9.75 10.5002H12C13.3807 10.5002 14.5 9.38091 14.5 8.0002C14.5 6.61949 13.3807 5.5002 12 5.5002H9.75C9.33579 5.5002 9 5.16441 9 4.7502C9 4.33598 9.33579 4.0002 9.75 4.0002H12ZM6.96151 13.9874C7.0925 13.5944 6.88013 13.1697 6.48717 13.0387C6.09421 12.9077 5.66947 13.1201 5.53849 13.513L5.03849 15.013C4.9075 15.406 5.11987 15.8307 5.51283 15.9617C5.90579 16.0927 6.33053 15.8803 6.46151 15.4874L6.96151 13.9874ZM6.48717 2.96172C6.88013 2.83073 7.0925 2.40599 6.96151 2.01303L6.46151 0.513033C6.33053 0.120075 5.90579 -0.0922948 5.51283 0.0386911C5.11987 0.169677 4.9075 0.594417 5.03849 0.987374L5.53849 2.48737C5.66947 2.88033 6.09421 3.0927 6.48717 2.96172ZM10.9615 15.013C11.0925 15.406 10.8801 15.8307 10.4872 15.9617C10.0942 16.0927 9.66947 15.8803 9.53849 15.4874L9.03849 13.9874C8.9075 13.5944 9.11987 13.1697 9.51283 13.0387C9.90579 12.9077 10.3305 13.1201 10.4615 13.513L10.9615 15.013Z",fillRule:"evenodd",clipRule:"evenodd"}],unlock:[{d:"M11.5 3C11.5 2.17157 12.1716 1.5 13 1.5C13.8284 1.5 14.5 2.17157 14.5 3V5.5C14.5 5.91421 14.8358 6.25 15.25 6.25C15.6642 6.25 16 5.91421 16 5.5V3C16 1.34315 14.6569 0 13 0C11.3431 0 10 1.34315 10 3V7H4C2.89543 7 2 7.89543 2 9V13C2 14.1046 2.89543 15 4 15H12C13.1046 15 14 14.1046 14 13V9C14 7.89543 13.1046 7 12 7H11.5V3Z",fillRule:"",clipRule:""}],upgrade:[{d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.45715 3.54284L11.7067 6.04132C12.0351 6.29379 12.0966 6.76466 11.8441 7.09304C11.5917 7.42141 11.1208 7.48294 10.7924 7.23047L8 5.08347L5.20757 7.23047C4.8792 7.48294 4.40833 7.42141 4.15585 7.09304C3.90338 6.76466 3.96491 6.29379 4.29328 6.04132L7.54285 3.54284C7.81239 3.33561 8.18761 3.33561 8.45715 3.54284ZM11.7069 10.0439L8.45734 7.54373C8.18773 7.33629 7.81227 7.33629 7.54266 7.54373L4.29309 10.0439C3.96479 10.2965 3.90342 10.7674 4.156 11.0957C4.40859 11.424 4.87948 11.4853 5.20777 11.2328L8 9.08445L10.7922 11.2328C11.1205 11.4853 11.5914 11.424 11.844 11.0957C12.0966 10.7674 12.0352 10.2965 11.7069 10.0439Z",fillRule:"evenodd",clipRule:"evenodd"}],upload:[{d:"M8.53033 1.21967C8.23744 0.926777 7.76256 0.926777 7.46967 1.21967L3.21967 5.46967C2.92678 5.76256 2.92678 6.23744 3.21967 6.53033C3.51256 6.82322 3.98744 6.82322 4.28033 6.53033L7.25 3.56066V10.25C7.25 10.6642 7.58579 11 8 11C8.41421 11 8.75 10.6642 8.75 10.25V3.56066L11.7197 6.53033C12.0126 6.82322 12.4874 6.82322 12.7803 6.53033C13.0732 6.23744 13.0732 5.76256 12.7803 5.46967L8.53033 1.21967ZM1.75 10C2.16421 10 2.5 10.3358 2.5 10.75V13.25C2.5 13.3881 2.61193 13.5 2.75 13.5H13.25C13.3881 13.5 13.5 13.3881 13.5 13.25V10.75C13.5 10.3358 13.8358 10 14.25 10C14.6642 10 15 10.3358 15 10.75V13.25C15 14.2165 14.2165 15 13.25 15H2.75C1.7835 15 1 14.2165 1 13.25V10.75C1 10.3358 1.33579 10 1.75 10Z",fillRule:"evenodd",clipRule:"evenodd"}],userAccept:[{d:"M15.8922 1.13047C16.102 0.773297 15.9825 0.313707 15.6253 0.103947C15.2681 -0.105812 14.8085 0.0136915 14.5988 0.370866L12.5305 3.89272L11.3525 2.30343C11.1059 1.97066 10.6362 1.90083 10.3034 2.14747C9.97062 2.39412 9.9008 2.86383 10.1474 3.19661L12.0005 5.69677C12.1504 5.899 12.3917 6.01255 12.6431 5.99911C12.8944 5.98568 13.1223 5.84704 13.2498 5.62999L15.8922 1.13047ZM8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM0 13C0 10.7909 1.79086 9 4 9H6C8.20914 9 10 10.7909 10 13C10 13.5523 9.55228 14 9 14H1C0.447716 14 0 13.5523 0 13Z",fillRule:"evenodd",clipRule:"evenodd"}],userAdd:[{d:"M12.75 0C13.1642 0 13.5 0.335786 13.5 0.75V2.5H15.25C15.6642 2.5 16 2.83579 16 3.25C16 3.66421 15.6642 4 15.25 4H13.5V5.75C13.5 6.16421 13.1642 6.5 12.75 6.5C12.3358 6.5 12 6.16421 12 5.75V4H10.25C9.83579 4 9.5 3.66421 9.5 3.25C9.5 2.83579 9.83579 2.5 10.25 2.5H12V0.75C12 0.335786 12.3358 0 12.75 0ZM8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM0 13C0 10.7909 1.79086 9 4 9H6C8.20914 9 10 10.7909 10 13C10 13.5523 9.55228 14 9 14H1C0.447716 14 0 13.5523 0 13Z",fillRule:"evenodd",clipRule:"evenodd"}],userBlock:[{d:"M12.5 7C14.433 7 16 5.433 16 3.5C16 1.567 14.433 0 12.5 0C10.567 0 9 1.567 9 3.5C9 5.433 10.567 7 12.5 7ZM12.5 6C13.8807 6 15 4.88071 15 3.5C15 2.99046 14.8476 2.51652 14.5858 2.1213L11.1213 5.5858C11.5165 5.84756 11.9905 6 12.5 6ZM13.8787 1.4142L10.4142 4.87869C10.1524 4.48348 10 4.00954 10 3.5C10 2.11929 11.1193 1 12.5 1C13.0095 1 13.4835 1.15244 13.8787 1.4142ZM8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM0 13C0 10.7909 1.79086 9 4 9H6C8.20914 9 10 10.7909 10 13C10 13.5523 9.55228 14 9 14H1C0.447716 14 0 13.5523 0 13Z",fillRule:"evenodd",clipRule:"evenodd"}],userCompany:[{d:"M15 5.50018C15.6072 5.04408 16 4.31791 16 3.5C16 2.11929 14.8807 1 13.5 1C12.1193 1 11 2.11929 11 3.5C11 4.31791 11.3928 5.04408 12 5.50018V6.5C12 6.77614 12.2239 7 12.5 7H14.5C14.7761 7 15 6.77614 15 6.5V5.50018ZM8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM0 13C0 10.7909 1.79086 9 4 9H6C8.20914 9 10 10.7909 10 13C10 13.5523 9.55228 14 9 14H1C0.447716 14 0 13.5523 0 13ZM12 8.75C12 8.33579 12.3358 8 12.75 8H14.25C14.6642 8 15 8.33579 15 8.75C15 9.16421 14.6642 9.5 14.25 9.5H12.75C12.3358 9.5 12 9.16421 12 8.75Z",fillRule:"evenodd",clipRule:"evenodd"}],userEdit:[{d:"M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5ZM7.99963 9H6C3.79086 9 2 10.7909 2 13C2 13.5523 2.44772 14 3 14H7.41604C7.14845 13.3875 7 12.7111 7 12C7 10.8744 7.37194 9.83566 7.99963 9ZM11.9572 16H12.6482C12.8838 16 13.0874 15.8356 13.137 15.6053L13.3037 14.832C13.6565 14.7076 13.9792 14.519 14.2576 14.2804L15.0063 14.5264C15.2311 14.6002 15.4769 14.5063 15.5952 14.3013L15.9408 13.7028C16.0585 13.4988 16.018 13.2403 15.8434 13.0822L15.257 12.5512C15.2901 12.3726 15.307 12.1882 15.307 12C15.307 11.8118 15.2896 11.6277 15.2565 11.4491L15.8433 10.9162C16.0174 10.758 16.0577 10.4998 15.9401 10.2961L15.5969 9.70162C15.479 9.49735 15.2343 9.40328 15.0099 9.47591L14.2584 9.71916C13.98 9.48052 13.6565 9.29244 13.3037 9.16798L13.1356 8.39387C13.0856 8.16399 12.8822 8 12.647 8H11.9605C11.7247 8 11.5209 8.16483 11.4716 8.39549L11.3065 9.16771C10.9535 9.29213 10.6307 9.48068 10.3522 9.71938L9.59733 9.47772C9.37328 9.40601 9.12955 9.5002 9.01193 9.70393L8.66872 10.2984C8.55078 10.5026 8.59164 10.7616 8.76674 10.9196L9.35301 11.4487C9.31984 11.6274 9.3025 11.8117 9.3025 12C9.3025 12.1883 9.31984 12.3726 9.35301 12.5513L8.7666 13.0761C8.59025 13.2339 8.54869 13.4937 8.66701 13.6987L9.01256 14.2972C9.13033 14.5012 9.37451 14.5953 9.59873 14.5232L10.3518 14.2808C10.6303 14.5195 10.9535 14.7079 11.3065 14.8323L11.4678 15.6025C11.5163 15.8341 11.7205 16 11.9572 16ZM13.3037 12C13.3037 12.5517 12.8564 12.9989 12.3047 12.9989C11.7531 12.9989 11.3058 12.5517 11.3058 12C11.3058 11.4483 11.7531 11.0011 12.3047 11.0011C12.8564 11.0011 13.3037 11.4483 13.3037 12Z",fillRule:"evenodd",clipRule:"evenodd"}],userGroup:[{d:"M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8ZM4 9C1.79086 9 0 10.7909 0 13C0 13.5523 0.447716 14 1 14H9C9.55228 14 10 13.5523 10 13C10 10.7909 8.20914 9 6 9H4ZM9.78116 9.0049C10.8397 9.84027 11.5 11.0225 11.5 12.3333V13.1667C11.5 13.463 11.4258 13.7448 11.292 14H15C15.5523 14 16 13.6269 16 13.1667V12.3333C16 10.4924 14.2091 9 12 9H10C9.92657 9 9.85361 9.00165 9.78116 9.0049ZM8.99999 4.5C8.99999 5.286 8.82087 6.02493 8.50604 6.66795C9.04433 7.47122 9.96041 8 11 8C12.6568 8 14 6.65685 14 5C14 3.34315 12.6568 2 11 2C10.1149 2 9.31929 2.38331 8.77018 2.99299C8.91899 3.46414 8.99999 3.97143 8.99999 4.5Z",fillRule:"evenodd",clipRule:"evenodd"}],userGroupLarge:[{d:"M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8ZM8 9C5.79086 9 4 10.7909 4 13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13C12 10.7909 10.2091 9 8 9ZM4.21884 9.00589C4.14639 9.00198 4.07343 9 4 9C1.79086 9 0 10.7909 0 13C0 13.5523 0.447716 14 1 14H2.70802C2.57422 13.6938 2.5 13.3556 2.5 13C2.5 11.4271 3.1603 10.0083 4.21884 9.00589ZM13.292 14H15C15.5523 14 16 13.5523 16 13C16 10.7909 14.2091 9 12 9C11.9266 9 11.8536 9.00198 11.7812 9.00589C12.8397 10.0083 13.5 11.4271 13.5 13C13.5 13.3556 13.4258 13.6938 13.292 14ZM11.5219 7.80141C11.8223 7.92926 12.1529 8 12.5 8C13.8807 8 15 6.88071 15 5.5C15 4.11929 13.8807 3 12.5 3C12.347 3 12.1973 3.01374 12.0519 3.04005C12.339 3.63251 12.5 4.29745 12.5 5C12.5 6.05909 12.1341 7.03273 11.5219 7.80141ZM3.94811 3.04005C3.80272 3.01374 3.65297 3 3.5 3C2.11929 3 1 4.11929 1 5.5C1 6.88071 2.11929 8 3.5 8C3.84711 8 4.17769 7.92926 4.47812 7.80141C3.86587 7.03273 3.5 6.05909 3.5 5C3.5 4.29745 3.661 3.63251 3.94811 3.04005Z",fillRule:"evenodd",clipRule:"evenodd"}],userInfo:[{d:"M0 4C0 2.89543 0.895431 2 2 2H14C15.1046 2 16 2.89543 16 4V12C16 13.1046 15.1046 14 14 14H2C0.895431 14 0 13.1046 0 12V4ZM7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6ZM4.4 9C3.07452 9 2 10.0745 2 11.4C2 11.7314 2.26863 12 2.6 12H7.4C7.73137 12 8 11.7314 8 11.4C8 10.0745 6.92548 9 5.6 9H4.4ZM9 6.25C9 5.83579 9.33579 5.5 9.75 5.5H13.25C13.6642 5.5 14 5.83579 14 6.25C14 6.66421 13.6642 7 13.25 7H9.75C9.33579 7 9 6.66421 9 6.25ZM10.75 8.5C10.3358 8.5 10 8.83579 10 9.25C10 9.66421 10.3358 10 10.75 10H13.25C13.6642 10 14 9.66421 14 9.25C14 8.83579 13.6642 8.5 13.25 8.5H10.75Z",fillRule:"evenodd",clipRule:"evenodd"}],userInvestor:[{d:"M13 0.5C13 0.223858 13.2239 0 13.5 0C13.7761 0 14 0.223858 14 0.5V1.03989C14.1405 1.06254 14.2789 1.09482 14.4137 1.13669C14.852 1.27284 15.247 1.50939 15.5363 1.83404C15.8277 2.1611 16 2.56647 16 3C16 3.27614 15.7761 3.5 15.5 3.5C15.2239 3.5 15 3.27614 15 3C15 2.84018 14.9378 2.66553 14.7896 2.49925C14.6393 2.33055 14.4097 2.18258 14.117 2.09167C13.8252 2.00102 13.4991 1.97628 13.1836 2.02335C12.8676 2.0705 12.5913 2.18518 12.3858 2.33934C12.1808 2.49307 12.0656 2.67022 12.0217 2.83554C11.979 2.99651 11.9981 3.16601 12.0899 3.3323C12.1844 3.50331 12.3581 3.67252 12.6129 3.80019C12.8671 3.92759 13.1762 4 13.5 4C13.9674 4 14.4316 4.10353 14.8352 4.30578C15.2382 4.50776 15.5771 4.80708 15.7854 5.18425C15.9964 5.56614 16.0565 5.99984 15.9449 6.42081C15.8344 6.83743 15.5687 7.19483 15.2142 7.46066C14.8696 7.71911 14.4466 7.88808 14 7.96011V8.5C14 8.77614 13.7761 9 13.5 9C13.2239 9 13 8.77614 13 8.5V7.96011C12.8595 7.93746 12.7211 7.90518 12.5863 7.86331C12.148 7.72716 11.753 7.49061 11.4637 7.16596C11.1723 6.8389 11 6.43353 11 6C11 5.72386 11.2239 5.5 11.5 5.5C11.7761 5.5 12 5.72386 12 6C12 6.15982 12.0622 6.33447 12.2104 6.50075C12.3607 6.66945 12.5903 6.81742 12.883 6.90833C13.1748 6.99898 13.5009 7.02372 13.8164 6.97665C14.1324 6.9295 14.4087 6.81482 14.6142 6.66066C14.8192 6.50693 14.9344 6.32978 14.9783 6.16446C15.021 6.00349 15.0019 5.83399 14.9101 5.6677C14.8156 5.49669 14.6419 5.32748 14.3871 5.19981C14.1329 5.07241 13.8238 5 13.5 5C13.0326 5 12.5684 4.89647 12.1648 4.69422C11.7618 4.49224 11.4229 4.19292 11.2146 3.81575C11.0036 3.43386 10.9435 3.00016 11.0551 2.57919C11.1656 2.16257 11.4313 1.80517 11.7858 1.53934C12.1304 1.28089 12.5534 1.11192 13 1.03989V0.5ZM5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8ZM4 9C1.79086 9 0 10.7909 0 13C0 13.5523 0.447716 14 1 14H9C9.55228 14 10 13.5523 10 13C10 10.7909 8.20914 9 6 9H4Z",fillRule:"evenodd",clipRule:"evenodd"}],userLink:[{d:"M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5ZM6 9C3.79086 9 2 10.7909 2 13C2 13.5523 2.44772 14 3 14H6.03544C6.01209 13.8367 6 13.6698 6 13.5C6 11.567 7.567 10 9.5 10H12.6458C11.9407 9.37764 11.0144 9 10 9H6ZM9.5 11C8.11929 11 7 12.1193 7 13.5C7 14.8807 8.11929 16 9.5 16H10.5C10.7761 16 11 15.7761 11 15.5C11 15.2239 10.7761 15 10.5 15H9.5C8.67157 15 8 14.3284 8 13.5C8 12.6716 8.67157 12 9.5 12H10.5C10.7761 12 11 11.7761 11 11.5C11 11.2239 10.7761 11 10.5 11H9.5ZM12 11.5C12 11.2239 12.2239 11 12.5 11H13.5C14.8807 11 16 12.1193 16 13.5C16 14.8807 14.8807 16 13.5 16H12.5C12.2239 16 12 15.7761 12 15.5C12 15.2239 12.2239 15 12.5 15H13.5C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12H12.5C12.2239 12 12 11.7761 12 11.5ZM10 13C9.72386 13 9.5 13.2239 9.5 13.5C9.5 13.7761 9.72386 14 10 14H13C13.2761 14 13.5 13.7761 13.5 13.5C13.5 13.2239 13.2761 13 13 13H10Z",fillRule:"evenodd",clipRule:"evenodd"}],userRemove:[{d:"M15.7803 2.28033C16.0732 1.98744 16.0732 1.51256 15.7803 1.21967C15.4874 0.926777 15.0126 0.926777 14.7197 1.21967L12.9985 2.94087L11.2773 1.21967C10.9844 0.926777 10.5095 0.926777 10.2166 1.21967C9.92373 1.51256 9.92373 1.98744 10.2166 2.28033L11.9378 4.00153L10.2197 5.71967C9.92678 6.01256 9.92678 6.48744 10.2197 6.78033C10.5126 7.07322 10.9874 7.07322 11.2803 6.78033L12.9985 5.06219L14.7189 6.78259C15.0118 7.07548 15.4866 7.07548 15.7795 6.78259C16.0724 6.4897 16.0724 6.01482 15.7795 5.72193L14.0591 4.00153L15.7803 2.28033ZM5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8ZM4 9C1.79086 9 0 10.7909 0 13C0 13.5523 0.447716 14 1 14H9C9.55228 14 10 13.5523 10 13C10 10.7909 8.20914 9 6 9H4Z",fillRule:"evenodd",clipRule:"evenodd"}],userEnvelope:[{d:"M16 14.5996C16 15.3696 15.2911 16 14.4248 16H8.5752C7.70895 16 7 15.3696 7 14.5996V11.8086L11.2764 13.9473C11.4171 14.0176 11.5829 14.0176 11.7236 13.9473L16 11.8086V14.5996Z",fillRule:"",clipRule:""},{d:"M6 9C6.49465 9 6.96798 9.09072 7.40527 9.25488C6.57389 9.66103 6 10.5124 6 11.5V14H1C0.447715 14 0 13.5523 0 13C0 10.7909 1.79086 9 4 9H6Z",fillRule:"",clipRule:""},{d:"M14.4248 10C15.0382 10 15.5713 10.3167 15.8311 10.7744L11.5 12.9404L7.16797 10.7744C7.42763 10.3164 7.96166 10 8.5752 10H14.4248Z",fillRule:"",clipRule:""},{d:"M5 2C6.65685 2 8 3.34315 8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2Z",fillRule:"",clipRule:""}],userSingle:[{d:"M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8ZM4.39607 9.43046C2.99148 9.76433 2 11.0191 2 12.4628V13.0386C2 13.5696 2.43043 14 2.96139 14H13.0386C13.5696 14 14 13.5696 14 13.0386V12.4628C14 11.0191 13.0085 9.76433 11.6039 9.43046C9.23432 8.86721 6.76568 8.86721 4.39607 9.43046Z",fillRule:"evenodd",clipRule:"evenodd"}],userStar:[{d:"M12.9734 0.343966C12.8244 -0.114655 12.1756 -0.114655 12.0266 0.343965L11.4298 2.18054H9.49875C9.01652 2.18054 8.81602 2.79761 9.20615 3.08105L10.7684 4.21612L10.1717 6.05269C10.0227 6.51131 10.5476 6.89268 10.9377 6.60924L12.2074 5.68676C12.3819 5.56 12.6181 5.56 12.7926 5.68676L14.0623 6.60924C14.4524 6.89268 14.9773 6.51131 14.8283 6.05269L14.2316 4.21612L15.7938 3.08105C16.184 2.79761 15.9835 2.18054 15.5013 2.18054H13.5702L12.9734 0.343966ZM8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM0 13C0 10.7909 1.79086 9 4 9H6C8.20914 9 10 10.7909 10 13C10 13.5523 9.55228 14 9 14H1C0.447716 14 0 13.5523 0 13Z",fillRule:"evenodd",clipRule:"evenodd"}],vault:[{d:"M11 7.99999C11 8.55228 10.5523 8.99999 10 8.99999C9.44772 8.99999 9.00001 8.55228 9.00001 7.99999C9.00001 7.44771 9.44772 6.99999 10 6.99999C10.5523 6.99999 11 7.44771 11 7.99999ZM0 4C0 2.89543 0.895431 2 2 2H14C15.1046 2 16 2.89543 16 4V12C16 13.1046 15.1046 14 14 14H2C0.895431 14 0 13.1046 0 12V4ZM2 4.5C2 4.22386 2.22386 4 2.5 4C2.77614 4 3 4.22386 3 4.5V11.5C3 11.7761 2.77614 12 2.5 12C2.22386 12 2 11.7761 2 11.5V4.5ZM13.7837 4.22001C14.0765 4.51299 14.0763 4.98787 13.7833 5.28067L12.2178 6.84525C12.3981 7.19071 12.5 7.58355 12.5 8.00019C12.5 8.4176 12.3977 8.81113 12.2168 9.15706L13.7777 10.718C14.0706 11.0109 14.0706 11.4857 13.7777 11.7786C13.4848 12.0715 13.0099 12.0715 12.7171 11.7786L11.1559 10.2175C10.8102 10.3981 10.417 10.5002 9.99999 10.5002C9.5828 10.5002 9.18948 10.398 8.84369 10.2173L7.27932 11.7807C6.98634 12.0735 6.51146 12.0733 6.21866 11.7804C5.92586 11.4874 5.926 11.0125 6.21899 10.7197L7.78299 9.15667C7.60221 8.81083 7.49999 8.41745 7.49999 8.00019C7.49999 7.58315 7.6021 7.18997 7.78269 6.84427L6.21912 5.2807C5.92622 4.98781 5.92622 4.51293 6.21912 4.22004C6.51201 3.92715 6.98688 3.92715 7.27978 4.22004L8.84312 5.78338C9.18905 5.60249 9.58257 5.50019 9.99999 5.50019C10.4178 5.50019 10.8117 5.60268 11.1578 5.7839L12.723 4.21968C13.016 3.92688 13.4909 3.92703 13.7837 4.22001Z",fillRule:"evenodd",clipRule:"evenodd"}],video:[{d:"M2 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V12C12.5 12.2761 12.2761 12.5 12 12.5H2C1.72386 12.5 1.5 12.2761 1.5 12V2C1.5 1.72386 1.72386 1.5 2 1.5ZM0 2C0 0.89543 0.895431 0 2 0H12C13.1046 0 14 0.895431 14 2V12C14 13.1046 13.1046 14 12 14H2C0.89543 14 0 13.1046 0 12V2ZM9.7649 7.4242C10.0784 7.22843 10.0784 6.77153 9.7649 6.57576L5.76383 4.07701C5.43115 3.86924 5 4.10869 5 4.50122V9.49873C5 9.89126 5.43115 10.1307 5.76383 9.92295L9.7649 7.4242Z",fillRule:"evenodd",clipRule:"evenodd"}],viewGrid:[{d:"M3 2C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H6C6.55228 7 7 6.55228 7 6V3C7 2.44772 6.55228 2 6 2H3ZM3 9C2.44772 9 2 9.44772 2 10V13C2 13.5523 2.44772 14 3 14H6C6.55228 14 7 13.5523 7 13V10C7 9.44772 6.55228 9 6 9H3ZM9 3C9 2.44772 9.44772 2 10 2H13C13.5523 2 14 2.44772 14 3V6C14 6.55228 13.5523 7 13 7H10C9.44772 7 9 6.55228 9 6V3ZM10 9C9.44772 9 9 9.44772 9 10V13C9 13.5523 9.44772 14 10 14H13C13.5523 14 14 13.5523 14 13V10C14 9.44772 13.5523 9 13 9H10Z",fillRule:"evenodd",clipRule:"evenodd"}],viewList:[{d:"M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H2ZM2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H14C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5H2ZM1 10C1 9.44771 1.44772 9 2 9H14C14.5523 9 15 9.44771 15 10C15 10.5523 14.5523 11 14 11H2C1.44772 11 1 10.5523 1 10ZM2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H2Z",fillRule:"evenodd",clipRule:"evenodd"}],wallet:[{d:"M2 2C0.895431 2 0 2.89543 0 4V5H16V4C16 2.89543 15.1046 2 14 2H2ZM16 6.5H0V12C0 13.1046 0.895431 14 2 14H14C15.1046 14 16 13.1046 16 12V6.5ZM2 11.5C2 11.2239 2.22386 11 2.5 11H4.5C4.77614 11 5 11.2239 5 11.5C5 11.7761 4.77614 12 4.5 12H2.5C2.22386 12 2 11.7761 2 11.5ZM6.5 11C6.22386 11 6 11.2239 6 11.5C6 11.7761 6.22386 12 6.5 12H8.5C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11H6.5Z",fillRule:"evenodd",clipRule:"evenodd"}],warning:[{d:"M15.8541 13.3871L8.95405 1.54312C8.53205 0.819122 7.46806 0.819122 7.04506 1.54312L0.146055 13.3871C-0.271945 14.1051 0.257055 15.0001 1.10106 15.0001H14.8991C15.7431 15.0001 16.2721 14.1051 15.8541 13.3871ZM7 7C7 6.44772 7.44772 6 8 6C8.55229 6 9 6.44772 9 7V9C9 9.55229 8.55229 10 8 10C7.44772 10 7 9.55229 7 9V7ZM8 13C8.55229 13 9 12.5523 9 12C9 11.4477 8.55229 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z",fillRule:"evenodd",clipRule:"evenodd"}],wrench:[{d:"M12.7082 0.299394L9.59317 3.41439C8.81212 4.19544 8.81212 5.46177 9.59317 6.24282L9.76474 6.41439C10.5458 7.19544 11.8121 7.19544 12.5932 6.41439L15.7046 3.30294C15.8958 3.83281 16 4.40423 16 5C16 7.76142 13.7614 10 11 10C10.1335 10 9.31858 9.77962 8.6081 9.39186L2.29582 15.7041C1.9053 16.0947 1.27213 16.0947 0.88161 15.7041L0.295823 15.1184C-0.0947011 14.7278 -0.0947015 14.0947 0.295822 13.7041L6.6081 7.39185C6.22035 6.68137 5.99997 5.86642 5.99997 5C5.99997 2.23858 8.23855 0 11 0C11.5999 0 12.1752 0.105663 12.7082 0.299394Z",fillRule:"",clipRule:""}],zoomIn:[{d:"M7 3.75C7.41421 3.75 7.75 4.08579 7.75 4.5V6.25H9.5C9.91421 6.25 10.25 6.58579 10.25 7C10.25 7.41421 9.91421 7.75 9.5 7.75H7.75V9.5C7.75 9.91421 7.41421 10.25 7 10.25C6.58579 10.25 6.25 9.91421 6.25 9.5V7.75H4.5C4.08579 7.75 3.75 7.41421 3.75 7C3.75 6.58579 4.08579 6.25 4.5 6.25H6.25V4.5C6.25 4.08579 6.58579 3.75 7 3.75ZM7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5Z",fillRule:"evenodd",clipRule:"evenodd"}],zoomOut:[{d:"M4.5 6.25C4.08579 6.25 3.75 6.58579 3.75 7C3.75 7.41421 4.08579 7.75 4.5 7.75H9.5C9.91421 7.75 10.25 7.41421 10.25 7C10.25 6.58579 9.91421 6.25 9.5 6.25H4.5ZM7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5Z",fillRule:"evenodd",clipRule:"evenodd"}],zz:[{d:"M9.75 1.02686C9.33579 1.02686 9 1.36264 9 1.77686C9 2.19107 9.33579 2.52686 9.75 2.52686H12.8186L9.13336 7.84995C8.97457 8.07931 8.9562 8.37784 9.08567 8.62494C9.21513 8.87203 9.47104 9.02686 9.75 9.02686H14.25C14.6642 9.02686 15 8.69107 15 8.27686C15 7.86264 14.6642 7.52686 14.25 7.52686H11.1814L14.8666 2.20376C15.0254 1.97441 15.0438 1.67587 14.9143 1.42878C14.7849 1.18168 14.529 1.02686 14.25 1.02686H9.75ZM1.75 7.02686C1.33579 7.02686 1 7.36264 1 7.77686C1 8.19107 1.33579 8.52686 1.75 8.52686H4.81858L1.13336 13.8499C0.974572 14.0793 0.956201 14.3778 1.08567 14.6249C1.21513 14.872 1.47104 15.0269 1.75 15.0269H6.25C6.66422 15.0269 7 14.6911 7 14.2769C7 13.8626 6.66422 13.5269 6.25 13.5269H3.18143L6.86665 8.20376C7.02543 7.97441 7.0438 7.67587 6.91434 7.42878C6.78487 7.18168 6.52896 7.02686 6.25 7.02686H1.75Z",fillRule:"evenodd",clipRule:"evenodd"}]};var M7=Object.defineProperty,F3=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&M7(e,t,i),i};const e4=class e4 extends g{constructor(){super(...arguments),this.name="",this.size=16}render(){const e=this.name&&I3[this.name]?I3[this.name]:[],t=!this.name;return P2`
      <svg
        class=${t?"icon--hidden":""}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 16 16"
      >
        ${e.map(o=>P2`
          <path
            fill="currentColor"
            d="${o.d}"
            fill-rule="${o.fillRule??h}"
            clip-rule="${o.clipRule??h}"
          />`)}
      </svg>
    `}};e4.styles=f`
    :host { display: block; line-height: 0; font-family: var(--font-sans); }
    .icon--hidden { display: none; }
  `;let W1=e4;F3([a()],W1.prototype,"name"),F3([a({type:Number})],W1.prototype,"size"),customElements.get("anduin-icon")||customElements.define("anduin-icon",W1);var w7=Object.defineProperty,Z7=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&w7(e,t,i),i};const R5=f`
  :host { display: inline-block; font-family: var(--font-sans); }
  .badge {
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    height: 16px;
    width: fit-content;
    padding-inline: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .badge--square { width: 16px; padding-inline: 0; }
  .badge--light-gray { background-color: var(--color-semantic-gray-3); color: var(--color-semantic-gray-7); }
  .badge--light-primary { background-color: var(--color-semantic-primary-1); color: var(--color-semantic-primary-5); }
  .badge--light-success { background-color: var(--color-semantic-success-1); color: var(--color-semantic-success-5); }
  .badge--light-danger { background-color: var(--color-semantic-danger-1); color: var(--color-semantic-danger-5); }
  .badge--light-warning { background-color: var(--color-semantic-warning-1); color: var(--color-semantic-warning-5); }
  .badge--bold-gray { background-color: var(--color-semantic-gray-6); color: var(--color-semantic-gray-0); }
  .badge--bold-primary { background-color: var(--color-semantic-primary-4); color: var(--color-semantic-gray-0); }
  .badge--bold-success { background-color: var(--color-semantic-success-4); color: var(--color-semantic-gray-0); }
  .badge--bold-danger { background-color: var(--color-semantic-danger-4); color: var(--color-semantic-gray-0); }
  .badge--bold-warning { background-color: var(--color-semantic-warning-3); color: var(--color-semantic-gray-8); }
  .badge--hidden { display: none; }
`;function E5(l){return{gray:"badge--light-gray",primary:"badge--light-primary",success:"badge--light-success",warning:"badge--light-warning",danger:"badge--light-danger",boldGray:"badge--bold-gray",boldPrimary:"badge--bold-primary",boldSuccess:"badge--bold-success",boldWarning:"badge--bold-warning",boldDanger:"badge--bold-danger"}[l||"gray"]||"badge--light-gray"}const t4=class t4 extends g{constructor(){super(...arguments),this.variant="gray"}render(){const e=E5(this.variant);return s`<div class="badge ${e}" part="badge"><slot></slot></div>`}};t4.styles=[R5];let m2=t4;Z7([a()],m2.prototype,"variant"),customElements.get("anduin-badge")||customElements.define("anduin-badge",m2);var k7=Object.defineProperty,N3=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&k7(e,t,i),i};const i4=class i4 extends g{constructor(){super(...arguments),this.variant="gray",this.count=0}formatCount(e){return e>99?"99+":e.toString()}render(){const e=E5(this.variant),t=this.count===0,o=this.count>0&&this.count<10,i=["badge",e,t?"badge--hidden":"",o?"badge--square":""].filter(Boolean).join(" ");return s`<div class="${i}" part="badge">${this.formatCount(this.count)}</div>`}};i4.styles=[R5];let Y1=i4;N3([a()],Y1.prototype,"variant"),N3([a({type:Number})],Y1.prototype,"count"),customElements.get("anduin-badge-count")||customElements.define("anduin-badge-count",Y1);var R7=Object.defineProperty,P=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&R7(e,t,i),i};function E7(l){return l.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const o4=class o4 extends g{constructor(){super(...arguments),this.iconOnly=!1,this.appearance="filled",this.variant="",this.size="medium",this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.pill=!1,this.selected=!1,this.href="",this.openNewTab=!1,this.download="",this.startIcon="",this.endIcon="",this.label=""}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");e&&(this.iconOnly=e.assignedNodes({flatten:!0}).length===0)}onSlotChange(e){const t=e.target;this.iconOnly=t.assignedNodes({flatten:!0}).length===0}getVariant(){return this.variant?this.variant:this.appearance==="filled"?"gray0":this.appearance==="text"?"primary":"gray9"}getSizeKebab(){return E7(this.size)}iconSize(){return this.size==="tiny"||this.size==="extraSmall"||this.size==="small"?"12":"16"}render(){const e=this.getVariant(),t=this.getSizeKebab(),o=["button",`button--${this.appearance}`,`button--${e}`,`button--${t}`,this.fullWidth?"button--full-width":"",this.pill?"button--pill":"",this.disabled?"button--disabled":"",this.loading?"button--loading":"",this.selected?"button--selected":"",this.iconOnly&&this.appearance!=="text"&&!this.fullWidth?"button--icon-only":""].filter(Boolean).join(" "),i=s`
      <div class="button__content button__content--${t}">
        ${this.startIcon?s`<anduin-icon name="${this.startIcon}" size="${this.iconSize()}"></anduin-icon>`:h}
        <slot @slotchange=${this.onSlotChange}></slot>
        ${this.endIcon?s`<anduin-icon name="${this.endIcon}" size="${this.iconSize()}"></anduin-icon>`:h}
      </div>
      ${this.loading&&this.appearance!=="text"?s`<div class="button__loading"><anduin-spinner size="small"></anduin-spinner></div>`:h}
    `;return this.href?s`
        <a
          class="${o}"
          href="${this.disabled?"":this.href}"
          target="${this.openNewTab?"_blank":h}"
          rel="${this.openNewTab?"noreferrer noopener":h}"
          download="${this.download||h}"
          aria-label="${this.label||h}"
        >${i}</a>
      `:s`
      <button
        type="button"
        class="${o}"
        ?disabled="${this.disabled}"
        aria-label="${this.label||h}"
      >${i}</button>
    `}};o4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    :host([full-width]) { display: block; width: 100%; }
    .button {
      background: none; border-radius: 4px; display: block; flex-shrink: 0; font-weight: 500;
      border-width: 1px; border-style: solid; line-height: 16px; white-space: nowrap;
      transition-property: opacity; position: relative; outline-offset: 2px; cursor: pointer;
      text-decoration: none; font-family: var(--font-sans); box-sizing: border-box;
    }
    .button:focus { outline: none; }
    .button:hover { text-decoration: none; }
    .button:disabled, .button--disabled { cursor: not-allowed; pointer-events: none; }
    .button--tiny { font-size: 11px; width: max-content; height: 16px; padding-left: 6px; padding-right: 6px; }
    .button--extra-small { font-size: 11px; width: max-content; height: 20px; padding-left: 8px; padding-right: 8px; }
    .button--small { font-size: 11px; width: max-content; height: 24px; padding-left: 8px; padding-right: 8px; }
    .button--medium { font-size: 13px; line-height: 20px; width: max-content; height: 32px; padding-left: 12px; padding-right: 12px; }
    .button--large { font-size: 15px; line-height: 20px; width: max-content; height: 40px; padding-left: 20px; padding-right: 20px; }
    .button--full-width { width: 100%; }
    .button--pill { border-radius: 9999px; }
    .button--disabled { opacity: 0.4; pointer-events: none; }
    .button--loading { opacity: 0.4; pointer-events: none; }
    .button__content { display: flex; align-items: center; justify-content: center; height: 100%; gap: 8px; }
    .button__content--tiny, .button__content--extra-small, .button__content--small { gap: 4px; }
    .button__content--large { gap: 12px; }
    .button--loading .button__content { opacity: 0; }
    .button__loading { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); display: flex; align-items: center; justify-content: center; }
    .button--filled { box-shadow: 0 1px 2px 0 rgba(29,41,57,0.07); }
    .button--filled.button--gray0 { color: var(--color-gray-8); border-color: var(--color-gray-4); background-color: var(--color-gray-0); }
    .button--filled.button--gray0:hover { background-color: var(--color-gray-2); }
    .button--filled.button--gray0:active { background-color: var(--color-gray-3); }
    .button--filled.button--gray9 { color: var(--color-gray-0); border-color: transparent; background-color: var(--color-gray-7); }
    .button--filled.button--gray9:hover { background-color: var(--color-gray-6); }
    .button--filled.button--gray9:active { background-color: var(--color-gray-8); }
    .button--filled.button--danger { color: var(--color-gray-0); border-color: transparent; background-color: var(--color-danger-4); }
    .button--filled.button--danger:hover { background-color: var(--color-danger-3); }
    .button--filled.button--danger:active { background-color: var(--color-danger-5); }
    .button--filled.button--primary { color: var(--color-gray-0); border-color: transparent; background-color: var(--color-primary-4); }
    .button--filled.button--primary:hover { background-color: var(--color-primary-3); }
    .button--filled.button--primary:active { background-color: var(--color-primary-5); }
    .button--filled.button--success { color: var(--color-gray-0); border-color: transparent; background-color: var(--color-success-4); }
    .button--filled.button--success:hover { background-color: var(--color-success-3); }
    .button--filled.button--success:active { background-color: var(--color-success-5); }
    .button--filled.button--warning { color: var(--color-gray-8); border-color: transparent; background-color: var(--color-warning-3); }
    .button--filled.button--warning:hover { background-color: var(--color-warning-2); }
    .button--filled.button--warning:active { background-color: var(--color-warning-4); }
    .button--filled.button--purple { color: var(--color-gray-0); border-color: transparent; background-color: var(--color-purple-600); }
    .button--filled.button--purple:hover { background-color: var(--color-purple-500); }
    .button--filled.button--purple:active { background-color: var(--color-purple-700); }
    .button--outlined.button--gray9 { border-color: var(--color-gray-4); color: var(--color-gray-7); background-color: transparent; }
    .button--outlined.button--gray9:hover { background-color: var(--color-gray-3); }
    .button--outlined.button--gray9:active { background-color: var(--color-gray-4); }
    .button--outlined.button--gray0 { border-color: var(--color-gray-7); color: var(--color-gray-4); background-color: transparent; }
    .button--outlined.button--gray0:hover { background-color: var(--color-gray-7); }
    .button--outlined.button--gray0:active { background-color: var(--color-gray-3); }
    .button--outlined.button--danger { border-color: var(--color-danger-3); color: var(--color-danger-5); background-color: transparent; }
    .button--outlined.button--danger:hover { background-color: var(--color-danger-1); }
    .button--outlined.button--danger:active { background-color: var(--color-danger-2); }
    .button--outlined.button--primary { border-color: var(--color-primary-3); color: var(--color-primary-4); background-color: transparent; }
    .button--outlined.button--primary:hover { background-color: var(--color-primary-1); }
    .button--outlined.button--primary:active { background-color: var(--color-primary-2); }
    .button--outlined.button--success { border-color: var(--color-success-3); color: var(--color-success-5); background-color: transparent; }
    .button--outlined.button--success:hover { background-color: var(--color-success-1); }
    .button--outlined.button--success:active { background-color: var(--color-success-2); }
    .button--outlined.button--warning { border-color: var(--color-warning-3); color: var(--color-warning-5); background-color: transparent; }
    .button--outlined.button--warning:hover { background-color: var(--color-warning-1); }
    .button--outlined.button--warning:active { background-color: var(--color-warning-2); }
    .button--outlined.button--purple { border-color: var(--color-purple-300); color: var(--color-purple-500); background-color: transparent; }
    .button--outlined.button--purple:hover { background-color: var(--color-purple-50); }
    .button--outlined.button--purple:active { background-color: var(--color-purple-100); }
    .button--plain.button--gray9 { border-color: transparent; color: var(--color-gray-7); background-color: transparent; }
    .button--plain.button--gray9:hover { background-color: var(--color-gray-3); }
    .button--plain.button--gray9:active { background-color: var(--color-gray-4); }
    .button--plain.button--gray0 { border-color: transparent; color: var(--color-gray-4); background-color: transparent; }
    .button--plain.button--gray0:hover { background-color: var(--color-gray-7); }
    .button--plain.button--gray0:active { background-color: var(--color-gray-8); }
    .button--plain.button--danger { border-color: transparent; color: var(--color-danger-5); background-color: transparent; }
    .button--plain.button--danger:hover { background-color: var(--color-danger-1); }
    .button--plain.button--danger:active { background-color: var(--color-danger-2); }
    .button--plain.button--primary { border-color: transparent; color: var(--color-primary-4); background-color: transparent; }
    .button--plain.button--primary:hover { background-color: var(--color-primary-1); }
    .button--plain.button--primary:active { background-color: var(--color-primary-2); }
    .button--plain.button--success { border-color: transparent; color: var(--color-success-5); background-color: transparent; }
    .button--plain.button--success:hover { background-color: var(--color-success-1); }
    .button--plain.button--success:active { background-color: var(--color-success-2); }
    .button--plain.button--warning { border-color: transparent; color: var(--color-warning-5); background-color: transparent; }
    .button--plain.button--warning:hover { background-color: var(--color-warning-1); }
    .button--plain.button--warning:active { background-color: var(--color-warning-2); }
    .button--plain.button--purple { border-color: transparent; color: var(--color-purple-500); background-color: transparent; }
    .button--plain.button--purple:hover { background-color: var(--color-purple-50); }
    .button--plain.button--purple:active { background-color: var(--color-purple-100); }
    .button--text { border: none; background: none; padding: 0; height: auto; width: auto; display: inline-flex; align-items: center; vertical-align: bottom; }
    .button--text:hover { text-decoration: underline; }
    .button--text .button__content { display: inline-flex; align-items: center; gap: 4px; height: auto; }
    .button--text.button--gray0 { color: var(--color-gray-5); }
    .button--text.button--gray9 { color: var(--color-gray-8); }
    .button--text.button--primary { color: var(--color-primary-5); }
    .button--text.button--success { color: var(--color-success-5); }
    .button--text.button--danger { color: var(--color-danger-5); }
    .button--text.button--warning { color: var(--color-warning-5); }
    .button--text.button--purple { color: var(--color-purple-600); }
    .button--selected.button--filled.button--gray0 { background-color: var(--color-gray-4); }
    .button--selected.button--filled.button--gray9 { background-color: var(--color-gray-8); }
    .button--selected.button--filled.button--primary { background-color: var(--color-primary-5); }
    .button--selected.button--filled.button--danger { background-color: var(--color-danger-5); }
    .button--selected.button--filled.button--success { background-color: var(--color-success-5); }
    .button--selected.button--filled.button--warning { background-color: var(--color-warning-4); }
    .button--selected.button--filled.button--purple { background-color: var(--color-purple-600); }
    .button--icon-only.button--tiny { width: 16px; min-width: 16px; padding-left: 0; padding-right: 0; }
    .button--icon-only.button--extra-small { width: 20px; min-width: 20px; padding-left: 0; padding-right: 0; }
    .button--icon-only.button--small { width: 24px; min-width: 24px; padding-left: 0; padding-right: 0; }
    .button--icon-only.button--medium { width: 32px; min-width: 32px; padding-left: 0; padding-right: 0; }
    .button--icon-only.button--large { width: 40px; min-width: 40px; padding-left: 0; padding-right: 0; }
  `;let R=o4;P([y()],R.prototype,"iconOnly"),P([a({converter:l=>l||"filled"})],R.prototype,"appearance"),P([a()],R.prototype,"variant"),P([a()],R.prototype,"size"),P([a({type:Boolean})],R.prototype,"disabled"),P([a({type:Boolean})],R.prototype,"loading"),P([a({type:Boolean,attribute:"full-width",reflect:!0})],R.prototype,"fullWidth"),P([a({type:Boolean})],R.prototype,"pill"),P([a({type:Boolean})],R.prototype,"selected"),P([a()],R.prototype,"href"),P([a({type:Boolean,attribute:"open-new-tab"})],R.prototype,"openNewTab"),P([a()],R.prototype,"download"),P([a({attribute:"start-icon"})],R.prototype,"startIcon"),P([a({attribute:"end-icon"})],R.prototype,"endIcon"),P([a()],R.prototype,"label"),customElements.get("anduin-button")||customElements.define("anduin-button",R);var $7=Object.defineProperty,A7=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&$7(e,t,i),i};const n4=class n4 extends g{constructor(){super(...arguments),this.variant="gray"}render(){return s`
      <div class="callout callout--${this.variant}" part="callout">
        <slot name="icon"></slot>
        <div><slot></slot></div>
      </div>
    `}};n4.styles=f`
    :host { display: block; font-family: var(--font-sans); }
    .callout {
      display: flex; align-items: center; justify-content: center;
      column-gap: 8px; padding-top: 8px; padding-bottom: 8px;
    }
    .callout--gray { background-color: var(--color-semantic-gray-7); color: var(--color-semantic-gray-0); }
    .callout--primary { background-color: var(--color-semantic-primary-4); color: var(--color-semantic-gray-0); }
    .callout--success { background-color: var(--color-semantic-success-4); color: var(--color-semantic-gray-0); }
    .callout--danger { background-color: var(--color-semantic-danger-4); color: var(--color-semantic-gray-0); }
    .callout--warning { background-color: var(--color-semantic-warning-3); color: var(--color-semantic-gray-8); }
  `;let b2=n4;A7([a()],b2.prototype,"variant"),customElements.get("anduin-callout")||customElements.define("anduin-callout",b2);var z7=Object.defineProperty,G3=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&z7(e,t,i),i};const l4=class l4 extends g{constructor(){super(...arguments),this.direction="horizontal",this.hasContent=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator"),this.setAttribute("aria-orientation",this.direction==="vertical"?"vertical":"horizontal")}updated(e){e.has("direction")&&this.setAttribute("aria-orientation",this.direction==="vertical"?"vertical":"horizontal")}onSlotChange(e){const o=e.target.assignedNodes({flatten:!0});this.hasContent=o.some(i=>{var n;return((n=i.textContent)==null?void 0:n.trim())!==""})}render(){return this.direction==="vertical"?this.hasContent?s`
            <div class="divider--vertical">
              <div class="divider__line--vertical"></div>
              <div><slot @slotchange=${this.onSlotChange}></slot></div>
              <div class="divider__line--vertical"></div>
            </div>`:s`<div class="divider--vertical divider--vertical-empty"><slot @slotchange=${this.onSlotChange}></slot></div>`:this.hasContent?s`
            <div class="divider--horizontal">
              <div class="divider__line--horizontal"></div>
              <div><slot @slotchange=${this.onSlotChange}></slot></div>
              <div class="divider__line--horizontal"></div>
            </div>`:s`<div class="divider--horizontal divider--horizontal-empty"><slot @slotchange=${this.onSlotChange}></slot></div>`}};l4.styles=f`
    :host { display: block; width: 100%; font-family: var(--font-sans); }
    :host([direction="vertical"]) { width: auto; height: 100%; }
    .divider--horizontal { margin-top: 8px; margin-bottom: 8px; width: 100%; display: grid; grid-template-columns: 1fr auto 1fr; column-gap: 8px; text-align: center; }
    .divider--horizontal-empty { background-color: var(--color-gray-3); height: 1px; }
    .divider__line--horizontal { border-top: 1px solid var(--color-gray-3); align-self: center; }
    .divider--vertical { margin-left: 8px; margin-right: 8px; height: 100%; display: grid; grid-template-rows: 1fr auto 1fr; row-gap: 8px; text-align: center; }
    .divider--vertical-empty { background-color: var(--color-gray-3); width: 1px; }
    .divider__line--vertical { border-left: 1px solid var(--color-gray-3); justify-self: center; }
  `;let q1=l4;G3([a({reflect:!0})],q1.prototype,"direction"),G3([y()],q1.prototype,"hasContent"),customElements.get("anduin-divider")||customElements.define("anduin-divider",q1);var S7=Object.defineProperty,D7=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&S7(e,t,i),i};const r4=class r4 extends g{constructor(){super(...arguments),this.variant="gray"}render(){return s`<div class="dot dot--${this.variant}" part="dot"></div>`}};r4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    .dot { width: 10px; height: 10px; border-radius: 9999px; }
    .dot--gray { background-color: var(--color-semantic-gray-6); color: var(--color-semantic-gray-0); }
    .dot--success { background-color: var(--color-semantic-success-4); color: var(--color-semantic-gray-0); }
    .dot--primary { background-color: var(--color-semantic-primary-4); color: var(--color-semantic-gray-0); }
    .dot--danger { background-color: var(--color-semantic-danger-4); color: var(--color-semantic-gray-0); }
    .dot--warning { background-color: var(--color-semantic-warning-3); color: var(--color-semantic-gray-8); }
  `;let H2=r4;D7([a()],H2.prototype,"variant"),customElements.get("anduin-dot")||customElements.define("anduin-dot",H2);var B7=Object.defineProperty,U3=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&B7(e,t,i),i};const a4=class a4 extends g{constructor(){super(...arguments),this.percent="",this.height="medium"}render(){const e=this.height==="large"?8:3,t=this.percent===""||this.percent===null;let o="";const i=["progress__fill"];return t?i.push("progress__fill--indeterminate"):o=`width: ${Math.max(0,Math.min(1,parseFloat(this.percent)||0))*100}%;`,s`
      <div class="progress" style="height: ${e}px;" part="progress">
        <div class="${i.join(" ")}" style="${o}"></div>
        <div class="progress__background"></div>
      </div>
    `}};a4.styles=f`
    :host { display: block; font-family: var(--font-sans); }
    .progress { overflow-x: hidden; position: relative; border-radius: 9999px; }
    .progress__fill {
      position: absolute; top: 0; left: 0; background-color: currentColor;
      height: 100%; border-radius: 9999px; transition: width 0.4s linear;
    }
    .progress__fill--indeterminate {
      width: 33.333333%; animation: indeterminate 1s linear infinite; transition: none;
    }
    .progress__background { position: absolute; inset: 0; background-color: currentColor; opacity: 0.2; }
    @keyframes indeterminate {
      from { transform: translateX(-100%); }
      to { transform: translateX(330%); }
    }
  `;let X1=a4;U3([a()],X1.prototype,"percent"),U3([a()],X1.prototype,"height"),customElements.get("anduin-progress")||customElements.define("anduin-progress",X1);var P7=Object.defineProperty,J1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&P7(e,t,i),i};const s4=class s4 extends g{constructor(){super(...arguments),this.effect="pulse",this.shape="rectangle",this.height="",this.width="100%",this.duration=1500,this.fontSize=""}render(){const e=["skeleton",this.shape==="circle"?"skeleton--circle":"",this.shape==="rounded"?"skeleton--rounded":"",this.shape==="rectangle"?"skeleton--rectangle":"",this.shape==="text"&&this.fontSize?"skeleton--text":""].filter(Boolean).join(" "),t=this.shape==="text"&&this.fontSize?`--anduin-skeleton-font-size: ${this.fontSize};`:"",o=`${this.height?`height: ${this.height};`:""} width: ${this.width};`,i=this.effect==="pulse"?`animation: skeleton-pulse ${this.duration}ms ease-in-out infinite;`:"";return s`
      <div class="${e}" style="${t} ${o} ${i}" part="skeleton">
        ${this.effect==="wave"?s`<div class="skeleton__wave" style="animation: skeleton-wave ${this.duration}ms linear infinite;"></div>`:""}
      </div>
    `}};s4.styles=f`
    :host { display: block; height: 100%; font-family: var(--font-sans); }
    .skeleton { background-color: var(--color-gray-3); position: relative; overflow: hidden; }
    .skeleton--circle { border-radius: 9999px; }
    .skeleton--rounded { border-radius: 4px; }
    .skeleton--rectangle { border-radius: 0; }
    .skeleton--text::before { content: '\\00a0'; font-size: var(--anduin-skeleton-font-size); }
    .skeleton__wave {
      position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(0,0,0,0.04), transparent);
      transform: translateX(-100%);
    }
    @keyframes skeleton-pulse {
      0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; }
    }
    @keyframes skeleton-wave {
      0% { transform: translateX(-100%); } 100% { transform: translateX(100%); }
    }
  `;let t1=s4;J1([a()],t1.prototype,"effect"),J1([a()],t1.prototype,"shape"),J1([a()],t1.prototype,"height"),J1([a()],t1.prototype,"width"),J1([a({type:Number})],t1.prototype,"duration"),J1([a({attribute:"font-size"})],t1.prototype,"fontSize"),customElements.get("anduin-skeleton")||customElements.define("anduin-skeleton",t1);var O7=Object.defineProperty,T7=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&O7(e,t,i),i};const d4=class d4 extends g{constructor(){super(...arguments),this.height="256px"}render(){return s`
      <div class="loading-state" style="height: ${this.height};" part="loading-state">
        <div class="loading-state__indicator">
          <anduin-spinner size="large"></anduin-spinner>
        </div>
        <slot class="loading-state__content"></slot>
      </div>
    `}};d4.styles=f`
    :host { display: block; height: 100%; font-family: var(--font-sans); }
    .loading-state { display: flex; flex-direction: column; justify-content: center; align-items: center; }
    .loading-state__indicator { color: var(--color-primary-4); }
    .loading-state__content { margin-top: 12px; font-size: 15px; color: var(--color-gray-6); }
  `;let y2=d4;T7([a()],y2.prototype,"height"),customElements.get("anduin-loading-state")||customElements.define("anduin-loading-state",y2);var I7=Object.defineProperty,$5=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&I7(e,t,i),i};const A5="anduin-field:label-click",r1="anduin-field:label-click-coordinated",c4=class c4 extends g{constructor(){super(...arguments),this.orientation="vertical"}connectedCallback(){super.connectedCallback(),this.addEventListener(A5,e=>{const t=e;this.dispatchEvent(new CustomEvent(r1,{detail:t.detail,bubbles:!1,composed:!1}))})}render(){const e=this.orientation==="horizontal";return s`
      <div class="field ${e?"field--horizontal":"field--vertical"}" part="field">
        <slot></slot>
      </div>
    `}};c4.styles=f`
    :host { display: block; font-family: var(--font-sans); }
    .field { display: flex; flex-wrap: wrap; }
    .field--vertical { flex-direction: column; row-gap: 4px; }
    .field--horizontal { column-gap: 4px; }
  `;let _2=c4;$5([a()],_2.prototype,"orientation");const C4=class C4 extends g{constructor(){super(...arguments),this.htmlfor="",this.required=!1}connectedCallback(){super.connectedCallback()}onLabelClick(e){this.htmlfor&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(A5,{detail:this.htmlfor,bubbles:!0,composed:!0})))}render(){return s`
      <label
        class="field-label"
        part="label"
        for=${this.htmlfor||""}
        @click=${this.onLabelClick}
      >
        <slot></slot>${this.required?s`<span class="field-label__required"> *</span>`:""}
      </label>
    `}};C4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    .field-label { font-size: 13px; line-height: 20px; font-weight: 600; cursor: default; color: var(--color-gray-8, #101828); }
    .field-label__required { color: var(--color-danger-5); }
  `;let Q1=C4;$5([a()],Q1.prototype,"htmlfor"),$5([a({type:Boolean})],Q1.prototype,"required");const u4=class u4 extends g{render(){return s`<div class="field-description" part="description"><slot></slot></div>`}};u4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    .field-description { display: block; line-height: 16px; font-size: 11px; color: var(--color-gray-7); }
  `;let T2=u4;const p4=class p4 extends g{render(){return s`<div class="field-error" part="error"><slot></slot></div>`}};p4.styles=f`
    :host { display: block; font-family: var(--font-sans); }
    .field-error { color: var(--color-danger-4); }
  `;let I2=p4;const h4=class h4 extends g{render(){return s`<div class="field-group" part="group"><slot></slot></div>`}};h4.styles=f`
    :host { display: block; font-family: var(--font-sans); }
    .field-group { display: flex; flex-direction: column; row-gap: 24px; }
  `;let F2=h4;customElements.get("anduin-field")||customElements.define("anduin-field",_2),customElements.get("anduin-field-label")||customElements.define("anduin-field-label",Q1),customElements.get("anduin-field-description")||customElements.define("anduin-field-description",T2),customElements.get("anduin-field-error")||customElements.define("anduin-field-error",I2),customElements.get("anduin-field-group")||customElements.define("anduin-field-group",F2);var F7=Object.defineProperty,L2=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&F7(e,t,i),i};const j3="anduin-checkbox:change",g4=class g4 extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.readonly=!1,this.inputid=""}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-field");e&&e.addEventListener(r1,t=>{const o=t;this.inputid&&this.inputid===o.detail&&!this.disabled&&!this.readonly&&this.toggle()})}toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent(j3,{detail:this.checked,bubbles:!0,composed:!0}))}onInputChange(){this.toggle()}render(){const e=["checkbox__box",this.indeterminate||this.checked?"checkbox__box--checked":"",this.readonly&&!this.indeterminate&&!this.checked?"checkbox__box--readonly":"",this.disabled&&!this.indeterminate&&!this.checked?"checkbox__box--disabled":"",!this.indeterminate&&!this.checked&&!this.readonly&&!this.disabled?"checkbox__box--unchecked":""].filter(Boolean).join(" "),t=this.indeterminate?"minusBold":this.checked?"checkBold":"",o=!this.disabled&&!this.readonly,i=o?0:-1;return s`
      <label class="${this.disabled?"is-disabled":""}">
        <div
          class="checkbox ${o?"checkbox--interactive":""} ${this.disabled?"checkbox--disabled":""}"
          part="checkbox"
        >
          <input
            class="checkbox__input"
            type="checkbox"
            .checked=${this.checked}
            ?disabled=${this.disabled||this.readonly}
            tabindex="${i}"
            @change=${o?this.onInputChange:h}
          />
          <div class="${e}" tabindex="${i}"></div>
          <div class="checkbox__icon ${this.indeterminate||this.checked?"checkbox__icon--visible":""}">
            ${t?s`<anduin-icon name="${t}" size="16"></anduin-icon>`:h}
          </div>
        </div>
        <span class="checkbox__label"><slot></slot></span>
      </label>
    `}};g4.styles=f`
    :host { display: inline-flex; font-family: var(--font-sans); }

    label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    label.is-disabled { cursor: default; opacity: 0.4; }

    .checkbox__label {
      font-size: var(--text-13, 13px);
      color: var(--color-gray-8, #101828);
      line-height: 20px;
    }
    .checkbox { width: 16px; height: 16px; position: relative; }
    .checkbox--interactive { cursor: pointer; }
    .checkbox--disabled { opacity: 0.4; }
    .checkbox__input { position: absolute; inset: 0; height: 100%; width: 100%; cursor: pointer; opacity: 0; }
    .checkbox__box {
      position: absolute; inset: 0; pointer-events: none; width: 16px; height: 16px;
      box-sizing: border-box; border-radius: 3px; transition: all 0.1s, outline 0.3s ease;
      outline: 12px solid transparent; outline-offset: 2px;
    }
    .checkbox__box:focus { outline: 2px solid #ACDBF8; }
    .checkbox__box--checked { background-color: var(--color-primary-4); }
    .checkbox__box--checked:hover { background-color: var(--color-primary-3); }
    .checkbox__box--checked:active { background-color: var(--color-primary-5); }
    .checkbox__box--readonly { background-color: var(--color-gray-2); border: 1px solid var(--color-gray-4); }
    .checkbox__box--disabled { background-color: var(--color-gray-3); border: 1px solid var(--color-gray-4); }
    .checkbox__box--unchecked { background-color: var(--color-gray-0); border: 1px solid var(--color-gray-4); }
    .checkbox__box--unchecked:hover { background-color: var(--color-gray-0); }
    .checkbox__box--unchecked:active { background-color: var(--color-gray-2); }
    .checkbox__icon { position: absolute; inset: 0; pointer-events: none; color: var(--color-gray-4); display: flex; align-items: center; justify-content: center; }
    .checkbox__icon--visible { color: var(--color-gray-0); }
  `;let a1=g4;L2([a({type:Boolean})],a1.prototype,"checked"),L2([a({type:Boolean})],a1.prototype,"disabled"),L2([a({type:Boolean})],a1.prototype,"indeterminate"),L2([a({type:Boolean})],a1.prototype,"readonly"),L2([a()],a1.prototype,"inputid"),customElements.get("anduin-checkbox")||customElements.define("anduin-checkbox",a1);var N7=Object.defineProperty,K=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&N7(e,t,i),i};const z5="anduin-input:change",K3="anduin-input:clear",f4=class f4 extends g{constructor(){super(...arguments),this.value="",this.size="default",this.disabled=!1,this.readonly=!1,this.placeholder="",this.inputid="",this.status="",this.startIcon="",this.endIcon="",this.clearable=!1}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-field");e&&e.addEventListener(r1,t=>{var i;const o=t;this.inputid&&this.inputid===o.detail&&((i=this.inputEl)==null||i.focus())})}updated(){this.inputEl&&this.inputEl.value!==this.value&&(this.inputEl.value=this.value)}onInput(){this.value=this.inputEl.value,this.dispatchEvent(new CustomEvent(z5,{detail:this.value,bubbles:!0,composed:!0}))}onClear(){var e;this.value="",this.inputEl&&(this.inputEl.value=""),this.dispatchEvent(new CustomEvent(z5,{detail:"",bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(K3,{bubbles:!0,composed:!0})),(e=this.inputEl)==null||e.focus()}render(){const e=this.size==="small"?"input--small":this.size==="large"?"input--large":"input--default",t=this.status?`input--${this.status}`:"",o=!!this.startIcon,i=!!this.endIcon||this.clearable&&!!this.value,n=this.clearable&&!!this.value&&!this.disabled&&!this.readonly,r=this.size==="small"?"12":this.size==="large"?"20":"16",d=this.size==="small"?"10":this.size==="large"?"16":"14";return s`
      <div class="input-wrapper">
        ${o?s`
          <span class="input__start">
            <anduin-icon name=${this.startIcon} size=${r}></anduin-icon>
          </span>
        `:h}

        <input
          class="input ${e}
            ${o?"input--has-start":""}
            ${i?"input--has-end":""}
            ${this.disabled?"input--disabled":""}
            ${this.readonly?"input--readonly":""}
            ${t}"
          type="text"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          id=${this.inputid||""}
          placeholder=${this.placeholder||""}
          part="input"
          @input=${this.onInput}
        />

        ${i?s`
          <span class="input__end">
            ${n?s`
              <button class="input__clear" type="button" @click=${this.onClear} aria-label="Clear">
                <anduin-icon name="cross" size=${d}></anduin-icon>
              </button>
            `:h}
            ${this.endIcon?s`
              <anduin-icon name=${this.endIcon} size=${r}></anduin-icon>
            `:h}
          </span>
        `:h}
      </div>
    `}};f4.styles=f`
    :host { display: block; font-family: var(--font-sans); }

    .input-wrapper { position: relative; display: flex; align-items: center; }

    .input {
      display: block; width: 100%; border: 1px solid var(--color-gray-4); border-radius: 4px;
      transition: all 0.1s, box-shadow 0.3s ease; line-height: 20px;
      color: var(--color-gray-8); background-color: var(--color-gray-0);
      box-sizing: border-box; font-family: var(--font-sans);
    }
    .input:focus { outline: none; border-color: var(--color-primary-4); }
    .input:active { box-shadow: 0 0 0 2px var(--color-primary-1); }

    .input--small   { height: 24px; padding: 0 6px; font-size: 11px; }
    .input--default { height: 32px; padding: 0 12px; font-size: 13px; }
    .input--large   { height: 40px; padding: 0 16px; font-size: 15px; }

    /* Shift padding to make room for icons */
    .input--has-start.input--small   { padding-left: 26px; }
    .input--has-start.input--default { padding-left: 32px; }
    .input--has-start.input--large   { padding-left: 42px; }

    .input--has-end.input--small   { padding-right: 26px; }
    .input--has-end.input--default { padding-right: 32px; }
    .input--has-end.input--large   { padding-right: 42px; }

    .input--disabled { color: var(--color-gray-7); background-color: var(--color-gray-2); cursor: not-allowed; }
    .input--readonly { background-color: var(--color-gray-2); }
    .input--valid    { border-color: var(--color-success-4); }
    .input--invalid  { border-color: var(--color-danger-4); }
    .input--warning  { border-color: var(--color-warning-4); }
    .input--loading  { border-color: var(--color-gray-4); }

    .input__start,
    .input__end {
      position: absolute; top: 0; bottom: 0;
      display: flex; align-items: center;
      pointer-events: none;
      color: var(--color-gray-6);
    }
    .input__start { left: 8px; }
    .input__end   { right: 8px; gap: 2px; }

    .input__clear {
      display: flex; align-items: center; justify-content: center;
      pointer-events: auto; cursor: pointer;
      background: none; border: none; padding: 0;
      color: var(--color-gray-5);
      border-radius: 3px;
      line-height: 0;
    }
    .input__clear:hover { color: var(--color-gray-7); }
  `;let O=f4;K([a()],O.prototype,"value"),K([a()],O.prototype,"size"),K([a({type:Boolean})],O.prototype,"disabled"),K([a({type:Boolean})],O.prototype,"readonly"),K([a()],O.prototype,"placeholder"),K([a()],O.prototype,"inputid"),K([a()],O.prototype,"status"),K([a({attribute:"start-icon"})],O.prototype,"startIcon"),K([a({attribute:"end-icon"})],O.prototype,"endIcon"),K([a({type:Boolean})],O.prototype,"clearable"),K([z("input")],O.prototype,"inputEl"),customElements.get("anduin-input")||customElements.define("anduin-input",O);var G7=Object.defineProperty,m1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&G7(e,t,i),i};const W3="anduin-textarea:change",v4=class v4 extends g{constructor(){super(...arguments),this.value="",this.disabled=!1,this.readonly=!1,this.placeholder="",this.inputid="",this.rows=3,this.status=""}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-field");e&&e.addEventListener(r1,t=>{var i;const o=t;this.inputid&&this.inputid===o.detail&&((i=this.textareaEl)==null||i.focus())})}updated(){this.textareaEl&&this.textareaEl.value!==this.value&&(this.textareaEl.value=this.value)}onInput(){this.value=this.textareaEl.value,this.dispatchEvent(new CustomEvent(W3,{detail:this.value,bubbles:!0,composed:!0}))}render(){const e=this.status?`textarea--${this.status}`:"";return s`
      <textarea
        class="textarea
          ${this.disabled?"textarea--disabled":""}
          ${this.readonly?"textarea--readonly":""}
          ${e}"
        rows="${this.rows}"
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        id=${this.inputid||""}
        placeholder=${this.placeholder||""}
        part="textarea"
        @input=${this.onInput}
      ></textarea>
    `}};v4.styles=f`
    :host { display: block; font-family: var(--font-sans); }

    .textarea {
      display: block; width: 100%; border: 1px solid var(--color-gray-4); border-radius: 4px;
      transition: border-color 0.1s; font-size: 13px; line-height: 20px;
      color: var(--color-gray-8); background-color: var(--color-gray-0);
      padding: 6px 12px; resize: vertical; font-family: var(--font-sans); box-sizing: border-box;
    }
    .textarea:focus   { outline: none; border-color: var(--color-primary-4); }
    .textarea--disabled { color: var(--color-gray-7); background-color: var(--color-gray-2); cursor: not-allowed; resize: none; }
    .textarea--readonly { background-color: var(--color-gray-2); resize: none; }
    .textarea--valid    { border-color: var(--color-success-4); }
    .textarea--invalid  { border-color: var(--color-danger-4); }
    .textarea--warning  { border-color: var(--color-warning-4); }
    .textarea--loading  { border-color: var(--color-gray-4); }
  `;let U=v4;m1([a()],U.prototype,"value"),m1([a({type:Boolean})],U.prototype,"disabled"),m1([a({type:Boolean})],U.prototype,"readonly"),m1([a()],U.prototype,"placeholder"),m1([a()],U.prototype,"inputid"),m1([a({type:Number})],U.prototype,"rows"),m1([a()],U.prototype,"status"),m1([z("textarea")],U.prototype,"textareaEl"),customElements.get("anduin-textarea")||customElements.define("anduin-textarea",U);var U7=Object.defineProperty,G=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&U7(e,t,i),i};const S5="anduin-tab:trigger-click",V2="anduin-tab:value-changed",Y3="anduin-tab:change",m4=class m4 extends g{constructor(){super(...arguments),this.defaultValue="",this.value="",this.fill=!1}connectedCallback(){super.connectedCallback(),this.addEventListener(S5,e=>{e.stopPropagation();const t=e;this.value=t.detail,this.broadcastValueChanged(t.detail),this.dispatchEvent(new CustomEvent(Y3,{detail:t.detail,bubbles:!0,composed:!0}))}),requestAnimationFrame(()=>{const e=this.value||this.defaultValue;e&&(this.value||(this.value=e),this.broadcastValueChanged(e))})}updated(e){if(e.has("value")||e.has("defaultValue")){const t=this.value||this.defaultValue;t&&this.broadcastValueChanged(t)}}broadcastValueChanged(e){this.dispatchEvent(new CustomEvent(V2,{detail:e,bubbles:!1,composed:!1}))}render(){return s`<div class="tabs" part="tabs"><slot></slot></div>`}};m4.styles=f`
    :host { display: flex; flex-direction: column; font-family: var(--font-sans); }
    :host([fill]) { flex: 1; min-height: 0; --_tab-fill-flex: 1; --_tab-fill-height: 100%; }
    .tabs { display: flex; flex-direction: column; width: 100%; }
    :host([fill]) .tabs { flex: 1; min-height: 0; }
  `;let R1=m4;G([a({attribute:"default-value"})],R1.prototype,"defaultValue"),G([a()],R1.prototype,"value"),G([a({type:Boolean,reflect:!0})],R1.prototype,"fill");const b4=class b4 extends g{constructor(){super(...arguments),this.alignment="left",this.lastActiveValue="",this.resizeObserver=null}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-tabs");e&&e.addEventListener(V2,t=>{const o=t;this.lastActiveValue=o.detail,requestAnimationFrame(()=>{this.animateIndicator(o.detail)})})}firstUpdated(){const e=this.closest("anduin-tabs"),t=(e==null?void 0:e.value)||(e==null?void 0:e.defaultValue);t&&(this.lastActiveValue=t,requestAnimationFrame(()=>this.animateIndicator(t))),this.resizeObserver=new ResizeObserver(o=>{this.lastActiveValue&&o.length>0&&o[0].contentRect.width>0&&this.animateIndicator(this.lastActiveValue)}),this.resizeObserver.observe(this)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null}animateIndicator(e){const t=this.querySelectorAll(":scope > anduin-tab-trigger");for(let o=0;o<t.length;o++){const i=t[o];if((i.value||i.getAttribute("value"))===e){const r=i.getBoundingClientRect(),d=this.getBoundingClientRect(),C=r.left-d.left+this.scrollLeft;this.indicator&&(this.indicator.style.width=`${r.width}px`,this.indicator.style.transform=`translateX(${C}px)`);break}}}render(){return s`
      <div class="tabs-list tabs-list--${this.alignment}" role="tablist" aria-orientation="horizontal" part="tabs-list">
        <slot></slot>
        <div class="tabs-list__indicator"></div>
      </div>
    `}};b4.styles=f`
    :host { display: block; font-family: var(--font-sans); }
    /* Transparent by default so the list picks up whatever it sits on. Set a
     * background via anduin-tabs-list::part(tabs-list) when one is wanted. */
    .tabs-list {
      display: flex; background-color: transparent;
      border-bottom: 1px solid var(--color-gray-3); white-space: nowrap; overflow: hidden;
      padding: 0 4px; position: relative; gap: 8px;
    }
    .tabs-list--left { justify-content: flex-start; }
    .tabs-list--center { justify-content: center; }
    .tabs-list--right { justify-content: flex-end; }
    .tabs-list__indicator {
      position: absolute; bottom: 0; background-color: var(--color-primary-4);
      left: 0; height: 2px; transition-duration: 200ms; transition-property: transform, width;
    }
  `;let e2=b4;G([a()],e2.prototype,"alignment"),G([z(".tabs-list__indicator")],e2.prototype,"indicator");const H4=class H4 extends g{constructor(){super(...arguments),this.value="",this.startIcon="",this.disabled=!1,this.showBadge=!1,this.badgeCount="",this.isActive=!1}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-tabs");e&&e.addEventListener(V2,t=>{const o=t;this.isActive=o.detail===this.value})}onClick(){this.dispatchEvent(new CustomEvent(S5,{detail:this.value,bubbles:!0,composed:!0}))}render(){return s`
      <button
        class="tab-trigger ${this.isActive?"tab-trigger--active":"tab-trigger--normal"}"
        role="tab"
        aria-selected="${this.isActive}"
        ?disabled="${this.disabled}"
        part="tab-trigger"
        @click=${this.onClick}
      >
        <div class="tab-trigger__content">
          ${this.startIcon?s`<anduin-icon name="${this.startIcon}" size="16"></anduin-icon>`:h}
          <slot></slot>
          ${this.showBadge?s`<span class="tab-trigger__badge">${this.badgeCount}</span>`:h}
        </div>
      </button>
    `}};H4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    .tab-trigger {
      cursor: pointer; background: none; border: none; display: block;
      font-family: var(--font-sans); font-size: 13px; font-weight: 500; line-height: 20px;
      padding: 4px 0 6px;
    }
    .tab-trigger__content { padding: 8px 12px; border-radius: 4px; display: flex; align-items: center; gap: 8px; }
    .tab-trigger--active { color: var(--color-primary-5); }
    .tab-trigger--active .tab-trigger__content:hover { background-color: var(--color-primary-1); }
    .tab-trigger--normal { color: var(--color-gray-7); }
    .tab-trigger--normal .tab-trigger__content { opacity: 0.8; }
    .tab-trigger--normal:hover { color: var(--color-gray-9); }
    .tab-trigger--normal:hover .tab-trigger__content { opacity: 1; }
    .tab-trigger--normal .tab-trigger__content:hover { background-color: var(--color-gray-3); }
    .tab-trigger[disabled] { cursor: not-allowed; opacity: 0.4; pointer-events: none; }
    .tab-trigger__badge {
      background-color: var(--color-gray-3); border-radius: 8px; min-width: 16px;
      padding: 0 4px; display: flex; align-items: center; justify-content: center;
      font-size: 11px; line-height: 16px; font-weight: 590; letter-spacing: 0.066px;
      color: var(--color-gray-7); white-space: nowrap;
    }
  `;let i1=H4;G([a({reflect:!0})],i1.prototype,"value"),G([a({attribute:"start-icon"})],i1.prototype,"startIcon"),G([a({type:Boolean})],i1.prototype,"disabled"),G([a({type:Boolean,attribute:"show-badge"})],i1.prototype,"showBadge"),G([a({attribute:"badge-count"})],i1.prototype,"badgeCount"),G([y()],i1.prototype,"isActive");const y4=class y4 extends g{constructor(){super(...arguments),this.value="",this.isActive=!1}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-tabs");e&&e.addEventListener(V2,t=>{const o=t;this.isActive=o.detail===this.value})}updated(e){e.has("isActive")&&this.toggleAttribute("active",this.isActive)}render(){return s`
      <div class="tab-content" role="tabpanel" tabindex="0" part="tab-content">
        <slot></slot>
      </div>
    `}};y4.styles=f`
    :host { display: block; font-family: var(--font-sans); flex: var(--_tab-fill-flex, 0 0 auto); min-height: 0; }
    :host(:not([active])) { display: none; }
    .tab-content { width: 100%; height: var(--_tab-fill-height, auto); overflow-x: hidden; overflow-y: auto; }
  `;let t2=y4;G([a()],t2.prototype,"value"),G([y()],t2.prototype,"isActive"),customElements.get("anduin-tabs")||customElements.define("anduin-tabs",R1),customElements.get("anduin-tabs-list")||customElements.define("anduin-tabs-list",e2),customElements.get("anduin-tab-trigger")||customElements.define("anduin-tab-trigger",i1),customElements.get("anduin-tab-content")||customElements.define("anduin-tab-content",t2);var j7=Object.defineProperty,D5=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&j7(e,t,i),i};const q3="anduin-tag-close:click",K7={gray:"tag--light-gray",primary:"tag--light-primary",success:"tag--light-success",warning:"tag--light-warning",danger:"tag--light-danger",boldGray:"tag--bold-gray",boldPrimary:"tag--bold-primary",boldSuccess:"tag--bold-success",boldWarning:"tag--bold-warning",boldDanger:"tag--bold-danger",customAqua:"tag--custom-aqua",customBlue:"tag--custom-blue",customBlueGreen:"tag--custom-blue-green",customGreen:"tag--custom-green",customHotPink:"tag--custom-hot-pink",customIndigo:"tag--custom-indigo",customMagenta:"tag--custom-magenta",customOrange:"tag--custom-orange",customPink:"tag--custom-pink",customPurple:"tag--custom-purple",customRed:"tag--custom-red",customYellow:"tag--custom-yellow",customYellowGreen:"tag--custom-yellow-green",customYellowOrange:"tag--custom-yellow-orange"},W7={gray:"tag__icon--light-gray",primary:"tag__icon--light-primary",success:"tag__icon--light-success",warning:"tag__icon--light-warning",danger:"tag__icon--light-danger",boldGray:"tag__icon--bold-gray",boldPrimary:"tag__icon--bold-primary",boldSuccess:"tag__icon--bold-success",boldWarning:"tag__icon--bold-warning",boldDanger:"tag__icon--bold-danger",customRed:"tag__icon--custom-red",customBlue:"tag__icon--custom-blue",customIndigo:"tag__icon--custom-indigo",customPurple:"tag__icon--custom-purple",customGreen:"tag__icon--custom-green",customHotPink:"tag__icon--custom-hot-pink",customAqua:"tag__icon--custom-aqua",customOrange:"tag__icon--custom-orange",customYellowOrange:"tag__icon--custom-yellow-orange",customYellow:"tag__icon--custom-yellow",customYellowGreen:"tag__icon--custom-yellow-green",customMagenta:"tag__icon--custom-magenta",customBlueGreen:"tag__icon--custom-blue-green",customPink:"tag__icon--custom-pink"},_4=class _4 extends g{constructor(){super(...arguments),this.variant="gray",this.icon="",this.disabled=!1}render(){const e=K7[this.variant]||"tag--light-gray",t=W7[this.variant]||"tag__icon--light-gray";return s`
      <div class="tag ${e} ${this.disabled?"tag--disabled":""}" part="tag">
        ${this.icon?s`<anduin-icon name="${this.icon}" size="12" class="tag__icon ${t}"></anduin-icon>`:h}
        <div class="tag__label"><slot></slot></div>
        <slot name="closeButton" class="tag__close"></slot>
      </div>
    `}};_4.styles=f`
    :host { display: inline-flex; max-width: 100%; font-family: var(--font-sans); }
    .tag {
      font-weight: 500; font-size: 11px; height: 20px; padding-left: 6px; padding-right: 6px;
      border-radius: 3px; display: inline-flex; align-items: center; gap: 4px; overflow: hidden;
    }
    .tag__icon { flex-shrink: 0; display: inline-flex; align-items: center; }
    .tag__close { flex-shrink: 0; }
    ::slotted([slot="closeButton"]) { display: inline-flex; align-items: center; height: 100%; }
    .tag__label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
    .tag--disabled { opacity: 0.6; }
    .tag__icon--light-gray { color: var(--color-gray-7); }
    .tag__icon--light-primary { color: var(--color-primary-4); }
    .tag__icon--light-success { color: var(--color-success-4); }
    .tag__icon--light-warning { color: var(--color-warning-4); }
    .tag__icon--light-danger { color: var(--color-danger-4); }
    .tag__icon--bold-gray, .tag__icon--bold-primary, .tag__icon--bold-success, .tag__icon--bold-danger { color: var(--color-gray-0); }
    .tag__icon--bold-warning { color: var(--color-gray-8); }
    .tag__icon--custom-red, .tag__icon--custom-blue, .tag__icon--custom-indigo,
    .tag__icon--custom-purple, .tag__icon--custom-green, .tag__icon--custom-hot-pink { color: var(--color-gray-0); }
    .tag__icon--custom-aqua, .tag__icon--custom-orange, .tag__icon--custom-yellow-orange,
    .tag__icon--custom-yellow, .tag__icon--custom-yellow-green, .tag__icon--custom-magenta,
    .tag__icon--custom-blue-green, .tag__icon--custom-pink { color: var(--color-gray-9); }
    .tag--light-gray { color: var(--color-gray-8); background-color: var(--color-gray-3); }
    .tag--light-primary { color: var(--color-primary-5); background-color: var(--color-primary-1); }
    .tag--light-success { color: var(--color-success-5); background-color: var(--color-success-1); }
    .tag--light-warning { color: var(--color-warning-5); background-color: var(--color-warning-1); }
    .tag--light-danger { color: var(--color-danger-5); background-color: var(--color-danger-1); }
    .tag--bold-gray { color: var(--color-gray-0); background-color: var(--color-gray-7); }
    .tag--bold-primary { color: var(--color-gray-0); background-color: var(--color-primary-4); }
    .tag--bold-success { color: var(--color-gray-0); background-color: var(--color-success-4); }
    .tag--bold-warning { color: var(--color-gray-8); background-color: var(--color-warning-3); }
    .tag--bold-danger { color: var(--color-gray-0); background-color: var(--color-danger-4); }
    .tag--custom-aqua { color: var(--color-gray-9); background-color: rgb(158,231,227); }
    .tag--custom-blue { color: var(--color-gray-0); background-color: rgb(69,115,210); }
    .tag--custom-blue-green { color: var(--color-gray-9); background-color: rgb(78,203,196); }
    .tag--custom-green { color: var(--color-gray-0); background-color: rgb(75,155,114); }
    .tag--custom-hot-pink { color: var(--color-gray-0); background-color: rgb(246,81,165); }
    .tag--custom-indigo { color: var(--color-gray-0); background-color: rgb(141,132,232); }
    .tag--custom-magenta { color: var(--color-gray-9); background-color: rgb(249,170,239); }
    .tag--custom-orange { color: var(--color-gray-9); background-color: rgb(241,152,126); }
    .tag--custom-pink { color: var(--color-gray-9); background-color: rgb(252,151,154); }
    .tag--custom-purple { color: var(--color-gray-0); background-color: rgb(179,107,212); }
    .tag--custom-red { color: var(--color-gray-0); background-color: rgb(233,98,98); }
    .tag--custom-yellow { color: var(--color-gray-9); background-color: rgb(248,223,114); }
    .tag--custom-yellow-green { color: var(--color-gray-9); background-color: rgb(174,207,85); }
    .tag--custom-yellow-orange { color: var(--color-gray-9); background-color: rgb(255,193,107); }
  `;let E1=_4;D5([a()],E1.prototype,"variant"),D5([a()],E1.prototype,"icon"),D5([a({type:Boolean})],E1.prototype,"disabled");const L4=class L4 extends g{onClick(){this.dispatchEvent(new CustomEvent(q3,{bubbles:!0,composed:!0}))}render(){return s`
      <button class="tag-close__button" part="tag-close" @click=${this.onClick}>
        <anduin-icon name="crossSmall" size="12"></anduin-icon>
      </button>
    `}};L4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    .tag-close__button {
      flex: none; width: 16px; height: 16px; display: flex; align-items: center;
      justify-content: center; border: none; padding: 0; cursor: pointer;
      background-color: inherit; color: inherit;
    }
    .tag-close__button:hover { opacity: 0.7; }
    .tag-close__button:active { opacity: 0.5; }
  `;let N2=L4;customElements.get("anduin-tag")||customElements.define("anduin-tag",E1),customElements.get("anduin-tag-close")||customElements.define("anduin-tag-close",N2);var Y7=Object.defineProperty,T=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&Y7(e,t,i),i};const X3="anduin-toggle-group:change",J3="anduin-toggle-group-item:change",Q3="anduin-toggle-group-item:select",ee="anduin-toggle-group-item:deselect",G2="anduin-toggle-group-item:item-click",V4=class V4 extends g{constructor(){super(...arguments),this.mode="single",this.defaultValue="",this.value=null,this.size="medium",this.variant="gray",this.gap=!1,this.internalValue=[],this.userInteracted=!1,this.onItemClick=e=>{var C;e.stopPropagation();const o=e.detail,i=this.selection,n=i.includes(o);let r;this.mode==="multiple"?r=n?i.filter(u=>u!==o):[...i,o]:r=n?[]:[o];const d=this.items.find(u=>u.value===o);if(d==null||d.emitSelectionChange(!n),this.mode==="single"&&!n)for(const u of i)(C=this.items.find(p=>p.value===u))==null||C.emitSelectionChange(!1);this.dispatchEvent(new CustomEvent(X3,{detail:r.join(" "),bubbles:!0,composed:!0})),this.isControlled||(this.userInteracted=!0,this.internalValue=r)}}get isControlled(){return this.value!=null}get selection(){return this.isControlled?B5(this.value):this.internalValue}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.internalValue=B5(this.defaultValue)),this.addEventListener(G2,this.onItemClick)}willUpdate(e){e.has("defaultValue")&&!this.isControlled&&!this.userInteracted&&(this.internalValue=B5(this.defaultValue))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(G2,this.onItemClick)}updated(){this.syncItems()}get items(){return Array.from(this.querySelectorAll("anduin-toggle-group-item"))}syncItems(){const e=this.selection;for(const t of this.items)t.selected=e.includes(t.value),t.groupSize=this.size,t.groupVariant=this.variant,t.groupMode=this.mode}render(){return s`
      <div class="toggle-group toggle-group--${this.size} ${this.gap?"toggle-group--gap":""}" role="group" part="toggle-group">
        <slot @slotchange=${this.syncItems}></slot>
      </div>
    `}};V4.styles=f`
    :host { display: inline-flex; font-family: var(--font-sans); }
    .toggle-group { display: inline-flex; align-items: center; }
    .toggle-group--small {
      --toggle-group-item-height: 24px; --toggle-group-item-font-size: 11px;
      --toggle-group-item-padding: 0 8px; --toggle-group-item-line-height: 16px;
      --toggle-group-item-icon-gap: 4px;
    }
    .toggle-group--medium {
      --toggle-group-item-height: 32px; --toggle-group-item-font-size: 13px;
      --toggle-group-item-padding: 0 12px; --toggle-group-item-line-height: 20px;
      --toggle-group-item-icon-gap: 8px;
    }
    .toggle-group--large {
      --toggle-group-item-height: 40px; --toggle-group-item-font-size: 15px;
      --toggle-group-item-padding: 0 20px; --toggle-group-item-line-height: 20px;
      --toggle-group-item-icon-gap: 12px;
    }
    .toggle-group--free {
      --toggle-group-item-height: auto; --toggle-group-item-font-size: inherit;
      --toggle-group-item-padding: 0; --toggle-group-item-line-height: inherit;
      --toggle-group-item-icon-gap: 8px;
    }
    /* Each item draws its own left border only when it's the first in the row;
       every other item omits its left border so the divider between two items
       is a single 1px line (item N's right border), never a doubled one. */
    ::slotted(anduin-toggle-group-item) { --toggle-group-item-radius: 0; --toggle-group-item-border-left: 0; }
    ::slotted(anduin-toggle-group-item:first-child) { --toggle-group-item-radius: 4px 0 0 4px; --toggle-group-item-border-left: 1px; }
    ::slotted(anduin-toggle-group-item:last-child) { --toggle-group-item-radius: 0 4px 4px 0; }
    ::slotted(anduin-toggle-group-item:only-child) { --toggle-group-item-radius: 4px; }
    .toggle-group--gap { flex-wrap: wrap; gap: 8px; }
    /* Gapped pills stand alone, so each keeps all four borders. */
    .toggle-group--gap ::slotted(anduin-toggle-group-item) { --toggle-group-item-radius: 4px; --toggle-group-item-border-left: 1px; }
  `;let W=V4;T([a()],W.prototype,"mode"),T([a({attribute:"default-value"})],W.prototype,"defaultValue"),T([a()],W.prototype,"value"),T([a()],W.prototype,"size"),T([a()],W.prototype,"variant"),T([a({type:Boolean})],W.prototype,"gap"),T([y()],W.prototype,"internalValue");const x4=class x4 extends g{constructor(){super(...arguments),this.value="",this.startIcon="",this.disabled=!1,this.selected=!1,this.groupSize="medium",this.groupVariant="gray",this.groupMode="single"}emitSelectionChange(e){this.dispatchEvent(new CustomEvent(J3,{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(e?Q3:ee,{detail:this.value,bubbles:!0,composed:!0}))}updated(e){(e.has("selected")||e.has("groupMode"))&&(this.groupMode==="single"?(this.setAttribute("role","radio"),this.setAttribute("aria-checked",String(this.selected))):(this.removeAttribute("role"),this.removeAttribute("aria-checked")))}onClick(){this.dispatchEvent(new CustomEvent(G2,{detail:this.value,bubbles:!0,composed:!0}))}render(){const e=["toggle-item",this.selected?"toggle-item--selected":"",this.disabled?"toggle-item--disabled":"",`toggle-item--variant-${this.groupVariant}`].filter(Boolean).join(" ");return s`
      <button
        type="button"
        class="${e}"
        aria-pressed="${this.selected}"
        ?disabled=${this.disabled}
        part="toggle-item"
        @click=${this.onClick}
      >
        <div class="toggle-item__content">
          ${this.startIcon?s`<div class="toggle-item__icon"><anduin-icon name="${this.startIcon}" size="${this.groupSize==="small"?12:16}"></anduin-icon></div>`:h}
          <slot></slot>
        </div>
      </button>
    `}};x4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    .toggle-item {
      position: relative; z-index: 0; box-sizing: border-box;
      display: flex; align-items: center; justify-content: center;
      background: none; border: 1px solid var(--color-gray-4);
      /* Group omits the left border on all but the first item so dividers never double. */
      border-left-width: var(--toggle-group-item-border-left, 1px);
      border-radius: var(--toggle-group-item-radius, 4px);
      color: var(--color-gray-7); cursor: pointer; font-family: inherit;
      font-size: var(--toggle-group-item-font-size, 13px); font-weight: 500;
      height: var(--toggle-group-item-height, 32px);
      line-height: var(--toggle-group-item-line-height, 20px);
      padding: var(--toggle-group-item-padding, 0 12px);
      white-space: nowrap;
    }
    .toggle-item:hover { z-index: 1; background-color: var(--color-gray-2); color: var(--color-gray-8); }
    .toggle-item:focus { outline: none; }
    .toggle-item:focus-visible {
      z-index: 2; outline: none;
      box-shadow: 0 0 0 3px oklch(from var(--color-primary-4) l c h / 0.5);
    }
    .toggle-item--selected { z-index: 1; background-color: var(--color-gray-3); color: var(--color-gray-8); }
    .toggle-item--selected:hover { background-color: var(--color-gray-4); }
    .toggle-item--variant-primary.toggle-item--selected {
      background-color: var(--color-primary-1); border-color: var(--color-primary-2);
      color: var(--color-primary-5);
    }
    .toggle-item--variant-primary.toggle-item--selected:hover { background-color: var(--color-primary-2); }
    .toggle-item--disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
    .toggle-item__content { display: flex; align-items: center; gap: var(--toggle-group-item-icon-gap, 8px); }
    .toggle-item__icon { display: flex; color: var(--color-gray-6); }
    .toggle-item:hover .toggle-item__icon { color: var(--color-gray-7); }
    .toggle-item--selected .toggle-item__icon { color: var(--color-gray-7); }
    .toggle-item--variant-primary.toggle-item--selected .toggle-item__icon { color: var(--color-primary-4); }
  `;let Y=x4;T([a({reflect:!0})],Y.prototype,"value"),T([a({attribute:"start-icon"})],Y.prototype,"startIcon"),T([a({type:Boolean})],Y.prototype,"disabled"),T([a({attribute:!1})],Y.prototype,"selected"),T([a({attribute:!1})],Y.prototype,"groupSize"),T([a({attribute:!1})],Y.prototype,"groupVariant"),T([a({attribute:!1})],Y.prototype,"groupMode");function B5(l){return l.split(" ").map(e=>e.trim()).filter(Boolean)}customElements.get("anduin-toggle-group")||customElements.define("anduin-toggle-group",W),customElements.get("anduin-toggle-group-item")||customElements.define("anduin-toggle-group-item",Y);var q7=Object.defineProperty,te=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&q7(e,t,i),i};const P5="anduin-tooltip:show",U2="anduin-tooltip:hide",O5="anduin-tooltip:trigger-mounted",T5="anduin-tooltip:content-popup-mounted",I5="anduin-tooltip:content-popup-unmounted",F5="anduin-tooltip:visibility-changed",X7=["top-start","top-center","top-end","right-start","right-center","right-end","bottom-start","bottom-center","bottom-end","left-start","left-center","left-end"];function ie(l,e,t,o,i){switch(o){case"top-start":return{left:l.left,top:l.top-t-i};case"top-center":return{left:l.left+l.width/2-e/2,top:l.top-t-i};case"top-end":return{left:l.left+l.width-e,top:l.top-t-i};case"right-start":return{left:l.right+i,top:l.top};case"right-center":return{left:l.right+i,top:l.top+l.height/2-t/2};case"right-end":return{left:l.right+i,top:l.top+l.height-t};case"bottom-start":return{left:l.left,top:l.bottom+i};case"bottom-center":return{left:l.left+l.width/2-e/2,top:l.bottom+i};case"bottom-end":return{left:l.left+l.width-e,top:l.bottom+i};case"left-start":return{left:l.left-e-i,top:l.top};case"left-center":return{left:l.left-e-i,top:l.top+l.height/2-t/2};case"left-end":return{left:l.left-e-i,top:l.top+l.height-t};default:return{left:0,top:0}}}function oe(l,e){return e.right>=l.left&&e.left<=l.right&&e.top<=l.bottom&&e.bottom>=l.top}function ne(l,e){const t=Math.max(l.left,e.left),o=Math.max(l.top,e.top),i=Math.min(l.right,e.right),n=Math.min(l.bottom,e.bottom);return i<t||n<o?0:(i-t)*(n-o)}function J7(l,e,t,o=8){const i=window.innerWidth,n=window.innerHeight,r={left:0,top:0,right:i,bottom:n},d=e.width,C=e.height;if(!oe({left:l.left,top:l.top,right:l.right,bottom:l.bottom},r))return null;const u=ie(l,d,C,t,o),p=X7.map(b=>({p:b,off:ie(l,d,C,b,o)})).filter(({off:b})=>oe({left:b.left,top:b.top,right:b.left+d,bottom:b.top+C},r));if(p.length===0)return{placement:t,left:Math.round(Math.min(Math.max(u.left,0),i-d)),top:Math.round(Math.min(Math.max(u.top,0),n-C))};p.sort((b,x)=>{const L={left:b.off.left,top:b.off.top,right:b.off.left+d,bottom:b.off.top+C},m={left:x.off.left,top:x.off.top,right:x.off.left+d,bottom:x.off.top+C},w=ne(L,r),Z=ne(m,r);if(Z!==w)return Z-w;const B=Math.abs(b.off.left-u.left)+Math.abs(b.off.top-u.top),e1=Math.abs(x.off.left-u.left)+Math.abs(x.off.top-u.top);return B-e1});const{p:v,off:H}=p[0];return{placement:v,left:Math.round(Math.min(Math.max(H.left,0),i-d)),top:Math.round(Math.min(Math.max(H.top,0),n-C))}}function N5(l){return l.split("-")[0]||"top"}function Q7(l,e,t){let o=!1,i=t.length-1;for(let n=0;n<t.length;n++){const r=t[n][0],d=t[n][1],C=t[i][0],u=t[i][1];d>e!=u>e&&l<(C-r)*(e-d)/(u-d)+r&&(o=!o),i=n}return o}const M4=class M4 extends g{constructor(){super(...arguments),this.disabled=!1,this.placement="top-center",this.triggerElement=null,this.contentPopupElement=null,this.containingBlockLeft=0,this.containingBlockTop=0,this.rafId=0,this.prevTriggerTop=NaN,this.prevTriggerLeft=NaN,this.isVisible=!1}connectedCallback(){super.connectedCallback(),this.addEventListener(O5,e=>{e.stopPropagation(),this.triggerElement=e.detail,this.maybeStartPositionLoop()}),this.addEventListener(T5,e=>{e.stopPropagation(),this.contentPopupElement=e.detail,this.computeContainingBlockOffset(this.contentPopupElement),this.maybeStartPositionLoop()}),this.addEventListener(I5,e=>{e.stopPropagation(),this.stopPositionLoop(),this.contentPopupElement=null}),this.addEventListener(P5,e=>{e.stopPropagation(),!this.disabled&&(this.isVisible=!0,this.broadcastVisibilityChanged(`show:${this.placement}`))}),this.addEventListener(U2,e=>{e.stopPropagation(),this.isVisible=!1,this.stopPositionLoop(),this.broadcastVisibilityChanged("hide")})}updated(e){e.has("disabled")&&this.disabled&&this.isVisible&&(this.isVisible=!1,this.stopPositionLoop(),this.broadcastVisibilityChanged("hide"))}disconnectedCallback(){super.disconnectedCallback(),this.stopPositionLoop(),this.triggerElement=null,this.contentPopupElement=null}maybeStartPositionLoop(){this.isVisible&&this.triggerElement&&this.contentPopupElement&&this.startPositionLoop()}startPositionLoop(){this.stopPositionLoop(),this.prevTriggerTop=NaN,this.prevTriggerLeft=NaN;const e=this.triggerElement,t=this.contentPopupElement,o=this.placement,i=()=>{const n=e.getBoundingClientRect();(n.top!==this.prevTriggerTop||n.left!==this.prevTriggerLeft)&&(this.prevTriggerTop=n.top,this.prevTriggerLeft=n.left,this.positionPopup(t,e,o)),this.rafId=requestAnimationFrame(i)};this.rafId=requestAnimationFrame(i)}stopPositionLoop(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0),this.prevTriggerTop=NaN,this.prevTriggerLeft=NaN}computeContainingBlockOffset(e){const t=e,o=t.style.transform;t.style.transform="none";const i=e.getBoundingClientRect();this.containingBlockLeft=i.left,this.containingBlockTop=i.top,t.style.transform=o}positionPopup(e,t,o){const i=t.getBoundingClientRect(),n=e.getBoundingClientRect(),r=J7(i,n,o,8);if(r){const d=e;d.style.transform=`translate(${r.left-this.containingBlockLeft}px, ${r.top-this.containingBlockTop}px)`;const C=N5(r.placement),u=N5(o);if(C!==u){const p=e.querySelector(".tooltip-arrow");p&&(p.classList.remove(`tooltip-arrow--${u}`),p.classList.add(`tooltip-arrow--${C}`))}}}broadcastVisibilityChanged(e){this.dispatchEvent(new CustomEvent(F5,{detail:e,bubbles:!1,composed:!1}))}render(){return s`<div class="tooltip-root" part="tooltip"><slot></slot></div>`}};M4.styles=f`
    /* inline-flex, not inline-block: the wrapper is purely structural (it exists
       to position the popup), so it must not add height of its own. As an
       inline-block it establishes a line box, and an inline-level trigger sits
       on that baseline — leaving the font's descender space visible beneath it.
       A 12px icon in a 12/18 label then measures 18px, 6px of it phantom.
       Flex blockifies the trigger instead, which drops the line box while
       keeping the wrapper inline in the surrounding text flow. */
    :host { display: inline-flex; position: relative; max-width: 100%; font-family: var(--font-sans); }
    .tooltip-root { display: inline-flex; position: relative; max-width: 100%; }
  `;let i2=M4;te([a({type:Boolean})],i2.prototype,"disabled"),te([a()],i2.prototype,"placement");const w4=class w4 extends g{firstUpdated(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent(O5,{detail:this,bubbles:!0,composed:!0}))}),this.addEventListener("pointerenter",()=>{this.dispatchEvent(new CustomEvent(P5,{bubbles:!0,composed:!0}))}),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent(U2,{bubbles:!0,composed:!0}))})}render(){return s`<span class="tooltip-trigger" part="tooltip-trigger"><slot></slot></span>`}};w4.styles=f`
    :host { display: inline-block; max-width: 100%; font-family: var(--font-sans); }
    .tooltip-trigger { display: flex; align-items: center; max-width: 100%; }
  `;let j2=w4;const Z4=class Z4 extends g{constructor(){super(...arguments),this.graceArea=null,this.triggerEl=null,this.popupEl=null,this.handlePointerMove=e=>{var n,r;if(!this.graceArea)return;const t=e.target,o=((n=this.triggerEl)==null?void 0:n.contains(t))??!1,i=((r=this.popupEl)==null?void 0:r.contains(t))??!1;o||i?this.graceArea=null:Q7(e.clientX,e.clientY,this.graceArea)||(this.graceArea=null,this.dispatchEvent(new CustomEvent(U2,{bubbles:!0,composed:!0})))},this.handleTriggerLeave=e=>{this.triggerEl&&this.popupEl&&this.createGraceArea(this.triggerEl,this.popupEl,e)},this.handleContentLeave=e=>{this.triggerEl&&this.popupEl&&this.createGraceArea(this.popupEl,this.triggerEl,e)}}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-tooltip");e&&e.addEventListener(F5,t=>{const o=t.detail;o.startsWith("show:")?this.showPopup(o.slice(5)):this.hidePopup()})}disconnectedCallback(){super.disconnectedCallback(),this.hidePopup()}createGraceArea(e,t,o){const i=t.getBoundingClientRect(),n=o.clientX,r=o.clientY;this.graceArea=[[n,r],[i.left,i.top],[i.right,i.top],[i.right,i.bottom],[i.left,i.bottom]]}setupGraceAreaListeners(e,t){this.cleanupGraceAreaListeners(),this.triggerEl=e,this.popupEl=t,e.addEventListener("pointerleave",this.handleTriggerLeave),t.addEventListener("pointerleave",this.handleContentLeave),document.addEventListener("pointermove",this.handlePointerMove)}cleanupGraceAreaListeners(){this.triggerEl&&this.triggerEl.removeEventListener("pointerleave",this.handleTriggerLeave),this.popupEl&&this.popupEl.removeEventListener("pointerleave",this.handleContentLeave),document.removeEventListener("pointermove",this.handlePointerMove),this.graceArea=null,this.triggerEl=null,this.popupEl=null}showPopup(e){this.hidePopup();const t=N5(e),o=document.createElement("div");o.className="tooltip-popup",o.setAttribute("role","tooltip");const i=document.createElement("div");i.className=`tooltip-arrow tooltip-arrow--${t}`;const n=document.createElement("div");n.className="tooltip-body",n.appendChild(document.createElement("slot")),o.appendChild(i),o.appendChild(n);const r=this.shadowRoot.querySelector(".tooltip-content-wrapper");r&&r.appendChild(o),this.popupEl=o;const d=this.closest("anduin-tooltip");if(d){const C=d.querySelector("anduin-tooltip-trigger");C&&this.setupGraceAreaListeners(C,o)}this.dispatchEvent(new CustomEvent(T5,{detail:o,bubbles:!0,composed:!0}))}hidePopup(){this.popupEl&&(this.popupEl.remove(),this.popupEl=null,this.dispatchEvent(new CustomEvent(I5,{bubbles:!0,composed:!0}))),this.cleanupGraceAreaListeners()}render(){return s`<div class="tooltip-content-wrapper"></div>`}};Z4.styles=f`
    :host {
      display: contents;
      --tooltip-bg: var(--anduin-tooltip-content-background, var(--color-gray-9));
      --tooltip-color: var(--anduin-tooltip-content-color, var(--color-gray-0));
      --tooltip-max-width: var(--anduin-tooltip-content-max-width, 256px);
    }
    .tooltip-content-wrapper { display: contents; }
    .tooltip-popup {
      position: fixed; top: 0; left: 0;
      pointer-events: auto; width: max-content; z-index: 1000;
    }
    .tooltip-body {
      background: var(--tooltip-bg); color: var(--tooltip-color);
      font-size: 12px; line-height: 16px; font-weight: 600; text-align: center;
      padding: 4px 8px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      max-width: var(--tooltip-max-width); white-space: pre-wrap; overflow-wrap: break-word;
    }
    .tooltip-arrow { position: absolute; width: 0; height: 0; border: 4px solid transparent; }
    .tooltip-arrow--top { bottom: -4px; left: 50%; transform: translateX(-50%); border-top-color: var(--tooltip-bg); border-bottom: none; }
    .tooltip-arrow--bottom { top: -4px; left: 50%; transform: translateX(-50%); border-bottom-color: var(--tooltip-bg); border-top: none; }
    .tooltip-arrow--left { right: -4px; top: 50%; transform: translateY(-50%); border-left-color: var(--tooltip-bg); border-right: none; }
    .tooltip-arrow--right { left: -4px; top: 50%; transform: translateY(-50%); border-right-color: var(--tooltip-bg); border-left: none; }
  `;let K2=Z4;customElements.get("anduin-tooltip")||customElements.define("anduin-tooltip",i2),customElements.get("anduin-tooltip-trigger")||customElements.define("anduin-tooltip-trigger",j2),customElements.get("anduin-tooltip-content")||customElements.define("anduin-tooltip-content",K2);var e0=Object.defineProperty,t0=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&e0(e,t,i),i};const le="anduin-well-close:click",k4=class k4 extends g{constructor(){super(...arguments),this.variant="gray"}render(){return s`
      <div class="well well--${this.variant}" part="well">
        <slot
          name="icon"
          class="well__icon well__icon--${this.variant}"
        ></slot>
        <div class="well__content">
          <slot name="title" class="well__title"></slot>
          <div><slot></slot></div>
        </div>
        <slot name="closeButton" class="well__close"></slot>
      </div>
    `}};k4.styles=f`
    :host {
      display: block;
      font-family: var(--font-sans);
    }
    .well {
      display: flex;
      align-items: flex-start;
      border-radius: 8px;
      line-height: 20px;
      padding: 12px;
      gap: 12px;
    }
    /*
     * The icon slot must stay a bare <slot> so that an unslotted icon keeps its
     * default display: contents and never becomes a flex item of .well -- a 0px
     * wide flex item would still collect the 12px gap and push the content in.
     * The box that centres the icon on the first 20px line therefore lives on
     * the slotted element, not on a wrapper.
     */
    slot[name='icon'] {
      flex-shrink: 0;
    }
    slot[name='icon']::slotted(*) {
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .well__content {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 4px;
    }
    .well__title {
      color: var(--color-gray-8);
      font-weight: 500;
      font-size: var(--text-15);
    }
    .well__close {
      flex-shrink: 0;
    }
    .well--gray {
      background-color: var(--color-gray-2);
    }
    .well--primary {
      background-color: var(--color-primary-1);
    }
    .well--success {
      background-color: var(--color-success-1);
    }
    .well--danger {
      background-color: var(--color-danger-1);
    }
    .well--warning {
      background-color: var(--color-warning-1);
    }
    .well__icon--gray {
      color: var(--color-gray-7);
    }
    .well__icon--primary {
      color: var(--color-primary-4);
    }
    .well__icon--success {
      color: var(--color-success-4);
    }
    .well__icon--danger {
      color: var(--color-danger-4);
    }
    .well__icon--warning {
      color: var(--color-warning-4);
    }
  `;let x2=k4;t0([a()],x2.prototype,"variant");const R4=class R4 extends g{onClick(){this.dispatchEvent(new CustomEvent(le,{bubbles:!0,composed:!0}))}render(){return s`
      <button
        class="well-close__button"
        part="well-close"
        @click=${this.onClick}
      >
        <anduin-icon name="cross" size="16"></anduin-icon>
      </button>
    `}};R4.styles=f`
    :host {
      display: inline-block;
      font-family: var(--font-sans);
    }
    .well-close__button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: none;
      border-radius: 4px;
      background: transparent;
      cursor: pointer;
      color: var(--color-gray-8);
      padding: 0;
    }
    .well-close__button:hover {
      background-color: var(--color-gray-2);
    }
    .well-close__button:active {
      background-color: var(--color-gray-3);
    }
  `;let W2=R4;customElements.get("anduin-well")||customElements.define("anduin-well",x2),customElements.get("anduin-well-close")||customElements.define("anduin-well-close",W2);var i0=Object.defineProperty,$1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&i0(e,t,i),i};const Y2="anduin-popover:close",q2="anduin-popover:open-change",E4=class E4 extends g{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.fullWidth=!1,this._visible=!1,this._closing=!1,this._closeTransitionEndHandler=null,this._onOutsideClick=e=>{e.composedPath().includes(this)||(this.open=!1)},this._onScrollOrResize=()=>{this.open&&this._updatePosition()},this._onPopoverClose=()=>{this.open=!1}}_onTriggerClick(){this.open=!this.open}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOutsideClick),window.addEventListener("scroll",this._onScrollOrResize,{passive:!0,capture:!0}),window.addEventListener("resize",this._onScrollOrResize),this.addEventListener(Y2,this._onPopoverClose)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOutsideClick),window.removeEventListener("scroll",this._onScrollOrResize,{capture:!0}),window.removeEventListener("resize",this._onScrollOrResize),this.removeEventListener(Y2,this._onPopoverClose)}updated(e){e.has("open")&&(this.dispatchEvent(new CustomEvent(q2,{detail:this.open,bubbles:!0,composed:!0})),this.open?(this._cancelCloseAnimation(),this._closing=!1,this._visible=!0,requestAnimationFrame(()=>this._updatePosition())):this._startCloseAnimation())}_cancelCloseAnimation(){this._closeTransitionEndHandler&&this._panelEl&&(this._panelEl.removeEventListener("transitionend",this._closeTransitionEndHandler),this._closeTransitionEndHandler=null),this._closing=!1}_startCloseAnimation(){if(!this._visible)return;this._closing=!0;const e=t=>{var o;t.propertyName==="opacity"&&((o=this._panelEl)==null||o.removeEventListener("transitionend",e),this._closeTransitionEndHandler=null,this._closing=!1,this._visible=!1)};this._closeTransitionEndHandler=e,requestAnimationFrame(()=>{var t;return(t=this._panelEl)==null?void 0:t.addEventListener("transitionend",e)})}_updatePosition(){const e=this._triggerEl,t=this._panelEl;if(!e||!t)return;const o=e.getBoundingClientRect(),i=t.style.transform;t.style.transform="none";const n=t.getBoundingClientRect();t.style.transform=i;const r=t.getBoundingClientRect(),d=4,C=window.innerWidth,u=window.innerHeight,p=8;let v=0,H=0,b="bottom";const x=!this.placement.startsWith("top"),L=u-o.bottom-d,m=o.top-d,w=L>=r.height,Z=m>=r.height,B=x?w||L>=m:!Z&&w;b=B?"bottom":"top",H=B?o.bottom+d:o.top-r.height-d;const e1=this.placement.endsWith("end")?"end":this.placement.endsWith("start")?"start":"center";e1==="start"?v=o.left:e1==="end"?v=o.right-r.width:v=o.left+o.width/2-r.width/2,v=Math.max(p,Math.min(v,C-r.width-p)),H=Math.max(p,Math.min(H,u-r.height-p)),t.style.transform=`translate(${Math.round(v-n.left)}px, ${Math.round(H-n.top)}px)`,t.dataset.side=b}render(){return s`
      <div class="popover__trigger" @click=${this._onTriggerClick} part="trigger">
        <slot name="trigger"></slot>
      </div>
      <div class="popover__panel ${this._visible&&!this._closing?"popover__panel--open":this._closing?"popover__panel--closing":""}" part="popover">
        <div class="popover__inner">
          <slot></slot>
        </div>
      </div>
    `}};E4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    :host([full-width]) { display: block; width: 100%; }

    .popover__trigger { display: inline-block; }
    :host([full-width]) .popover__trigger { display: block; width: 100%; }

    .popover__panel {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 50;
      visibility: hidden;
      pointer-events: none;
    }
    .popover__panel--open    { visibility: visible; pointer-events: auto; }
    .popover__panel--closing { visibility: visible; pointer-events: none; }

    .popover__inner {
      background-color: var(--color-white, white);
      border-radius: 8px;
      box-shadow: 0px 2px 8px 0px rgba(29, 41, 57, 0.08),
                  0px 8px 24px 0px rgba(29, 41, 57, 0.12);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: var(--popover-min-width, 192px);
      max-width: var(--popover-max-width, 640px);
      max-height: var(--popover-max-height, 480px);
      padding: 8px;
      overflow: auto;
      opacity: 0;
      transform: scale(0.97) translateY(-4px);
      transform-origin: top center;
      transition: opacity 150ms ease, transform 150ms ease;
    }
    /* Settled open state uses transform:none so nested position:fixed panels
       (anduin-suggestion/dropdown/tooltip) aren't trapped by a containing
       block. The scale-in still animates because browsers interpolate between
       a non-none transform and 'none' via the identity matrix. */
    .popover__panel--open .popover__inner {
      opacity: 1;
      transform: none;
    }
    /* Top placements animate upward from below */
    .popover__panel[data-side="top"] .popover__inner {
      transform: scale(0.97) translateY(4px);
      transform-origin: bottom center;
    }
    .popover__panel--open[data-side="top"] .popover__inner {
      transform: none;
    }
  `;let q=E4;$1([a({type:Boolean,reflect:!0})],q.prototype,"open"),$1([a()],q.prototype,"placement"),$1([a({type:Boolean,attribute:"full-width",reflect:!0})],q.prototype,"fullWidth"),$1([y()],q.prototype,"_visible"),$1([y()],q.prototype,"_closing"),$1([z(".popover__trigger")],q.prototype,"_triggerEl"),$1([z(".popover__panel")],q.prototype,"_panelEl"),customElements.get("anduin-popover")||customElements.define("anduin-popover",q);const $4=class $4 extends g{_onClick(){this.dispatchEvent(new CustomEvent(Y2,{bubbles:!0,composed:!0}))}render(){return s`<span @click=${this._onClick}><slot></slot></span>`}};$4.styles=f`:host { display: contents; }`;let X2=$4;customElements.get("anduin-popover-close")||customElements.define("anduin-popover-close",X2);var o0=Object.defineProperty,A1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&o0(e,t,i),i};const J2="anduin-menu-item:click",A4=class A4 extends g{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this._onOutsideClick=e=>{e.composedPath().includes(this)||(this.open=!1)},this._onItemClick=()=>{this.open=!1},this._onScrollOrResize=()=>{this.open&&this._updatePosition()}}_onTriggerClick(){this.open=!this.open}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOutsideClick),this.addEventListener(J2,this._onItemClick),window.addEventListener("scroll",this._onScrollOrResize,{passive:!0,capture:!0}),window.addEventListener("resize",this._onScrollOrResize)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOutsideClick),this.removeEventListener(J2,this._onItemClick),window.removeEventListener("scroll",this._onScrollOrResize,{capture:!0}),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){e.has("open")&&this.open&&requestAnimationFrame(()=>this._updatePosition())}_updatePosition(){const e=this._triggerEl,t=this._panelEl;if(!e||!t)return;const o=e.getBoundingClientRect(),i=t.style.transform;t.style.transform="none";const n=t.getBoundingClientRect();t.style.transform=i;const r=t.getBoundingClientRect(),d=4;let C=0,u=0,p="bottom";switch(this.placement){case"bottom-start":C=o.left,u=o.bottom+d,p="bottom";break;case"bottom-end":C=o.right-r.width,u=o.bottom+d,p="bottom";break;case"bottom":C=o.left+o.width/2-r.width/2,u=o.bottom+d,p="bottom";break;case"top-start":C=o.left,u=o.top-r.height-d,p="top";break;case"top-end":C=o.right-r.width,u=o.top-r.height-d,p="top";break;case"top":C=o.left+o.width/2-r.width/2,u=o.top-r.height-d,p="top";break}t.style.transform=`translate(${Math.round(C-n.left)}px, ${Math.round(u-n.top)}px)`,t.dataset.side=p}render(){return s`
      <div class="menu__trigger" @click=${this._onTriggerClick} part="trigger">
        <slot name="trigger"></slot>
      </div>
      <div class="menu__panel ${this.open?"menu__panel--open":""}" part="menu">
        <div class="menu__inner" role="menu">
          <slot></slot>
        </div>
      </div>
    `}};A4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }

    .menu__trigger { display: inline-block; }

    .menu__panel {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 50;
      visibility: hidden;
      pointer-events: none;
    }
    .menu__panel--open { visibility: visible; pointer-events: auto; }

    .menu__inner {
      background-color: var(--color-white, white);
      border-radius: 8px;
      box-shadow: 0px 2px 8px 0px rgba(29, 41, 57, 0.08),
                  0px 8px 24px 0px rgba(29, 41, 57, 0.12);
      display: flex;
      flex-direction: column;
      align-items: stretch;
      min-width: 180px;
      max-width: 480px;
      padding: 8px;
      opacity: 0;
      transform: scale(0.97) translateY(-4px);
      transform-origin: top center;
      transition: opacity 150ms ease, transform 150ms ease;
    }
    .menu__panel--open .menu__inner {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    .menu__panel[data-side="top"] .menu__inner {
      transform: scale(0.97) translateY(4px);
      transform-origin: bottom center;
    }
    .menu__panel--open[data-side="top"] .menu__inner {
      transform: scale(1) translateY(0);
    }
  `;let b1=A4;A1([a({type:Boolean,reflect:!0})],b1.prototype,"open"),A1([a()],b1.prototype,"placement"),A1([z(".menu__trigger")],b1.prototype,"_triggerEl"),A1([z(".menu__panel")],b1.prototype,"_panelEl");const z4=class z4 extends g{constructor(){super(...arguments),this.icon="",this.variant="default",this.disabled=!1}_onClick(){this.dispatchEvent(new CustomEvent(J2,{bubbles:!0,composed:!0}))}render(){return s`
      <button
        class="menu-item ${this.variant==="danger"?"menu-item--danger":""}"
        role="menuitem"
        ?disabled=${this.disabled}
        part="menu-item"
        @click=${this._onClick}
      >
        ${this.icon?s`<anduin-icon name="${this.icon}" size="16"></anduin-icon>`:h}
        <span class="menu-item__label"><slot></slot></span>
      </button>
    `}};z4.styles=f`
    :host { display: block; width: 100%; font-family: var(--font-sans); }
    .menu-item {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 100%;
      padding: 8px 8px 8px 12px;
      border-radius: 4px;
      border: none;
      background: none;
      cursor: pointer;
      font-family: var(--font-sans);
      font-size: 13px;
      line-height: 16px;
      font-weight: 400;
      color: var(--color-gray-9);
      text-align: left;
      box-sizing: border-box;
    }
    .menu-item:hover  { background-color: var(--color-gray-2); }
    .menu-item:active { background-color: var(--color-gray-3); }
    .menu-item--danger { color: var(--color-danger-5); }
    .menu-item--danger:hover  { background-color: var(--color-danger-1); }
    .menu-item--danger:active { background-color: var(--color-danger-2); }
    .menu-item:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
    .menu-item__label { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    anduin-icon { color: var(--color-gray-7); }
    .menu-item--danger anduin-icon { color: var(--color-danger-4); }
  `;let z1=z4;A1([a()],z1.prototype,"icon"),A1([a()],z1.prototype,"variant"),A1([a({type:Boolean})],z1.prototype,"disabled"),customElements.get("anduin-menu")||customElements.define("anduin-menu",b1),customElements.get("anduin-menu-item")||customElements.define("anduin-menu-item",z1);var n0=Object.defineProperty,S1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&n0(e,t,i),i};const o2="anduin-close",re="anduin-after-close",G5=300,U5=200,ae=250;let M2=0,se="";function l0(){typeof document>"u"||(M2===0&&(se=document.body.style.overflow,document.body.style.overflow="hidden"),M2++)}function de(){typeof document>"u"||M2!==0&&(M2--,M2===0&&(document.body.style.overflow=se))}const H1=(V1=class extends g{constructor(){super(...arguments),this.open=!1,this.heading="",this.hideHeader=!1,this.hideFooter=!1,this.maxWidth="480",this.fullscreen=!1,this._leaving=!1,this._holdsScrollLock=!1,this.onAnduinClose=e=>{e.target!==this&&e.stopPropagation()}}updated(e){if(e.has("maxWidth")){const t=this.maxWidth,o=V1._PRESETS.has(t)?`${t}px`:t;this.style.setProperty("--_modal-width",o)}e.has("open")&&(this.open?(this._leaving=!1,this.classList.add("is-shown"),this._holdsScrollLock||(this._holdsScrollLock=!0,l0())):this.classList.contains("is-shown")&&(this._leaving=!0,setTimeout(()=>{this._leaving=!1,this.classList.remove("is-shown"),this._holdsScrollLock&&(this._holdsScrollLock=!1,de()),this.dispatchEvent(new CustomEvent(re,{bubbles:!0,composed:!0}))},Math.max(U5,ae))))}dispatch(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}onOverlayClick(){this.dispatch(o2)}onClose(){this.dispatch(o2)}connectedCallback(){super.connectedCallback(),this.addEventListener(o2,this.onAnduinClose)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(o2,this.onAnduinClose),this._holdsScrollLock&&(this._holdsScrollLock=!1,de())}render(){const e=this._leaving,t=this.fullscreen;return s`
      <div
        class=${`overlay${e?" is-leaving":""}`}
        @click=${this.onOverlayClick}
      ></div>
      <div class=${`modal-wrapper${t?" modal-wrapper--fullscreen":""}`}>
        <div
          class=${`modal${t?" modal--fullscreen":""}${e?" is-leaving":""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          ${this.hideHeader?h:s` <div class="header">
                <div class="header-slot">
                  <slot name="header">
                    ${this.heading?s`<span id="modal-title" class="title"
                          >${this.heading}</span
                        >`:h}
                  </slot>
                </div>
                <span class="header-sep"></span>
                <anduin-button
                  appearance="plain"
                  variant="gray9"
                  size="medium"
                  label="Close"
                  start-icon="cross"
                  @click=${this.onClose}
                ></anduin-button>
              </div>`}
          <div class="body">
            <slot></slot>
          </div>
          ${this.hideFooter?h:s`<div class="footer"><slot name="footer"></slot></div>`}
        </div>
      </div>
    `}},V1.styles=f`
    :host {
      display: none;
      font-family: var(--font-sans);
    }
    :host(.is-shown) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--z-modal, 1000);
    }
    @keyframes overlayIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes overlayOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    @keyframes modalIn {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes modalOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(12px);
      }
    }
    @keyframes modalFullscreenIn {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes modalFullscreenOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(24px);
      }
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(50, 60, 77, 0.6);
      cursor: default;
      animation: overlayIn ${G5}ms cubic-bezier(0.2, 0, 0, 1)
        forwards;
    }
    .overlay.is-leaving {
      animation: overlayOut ${ae}ms
        cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
    }
    .modal-wrapper {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 32px 16px;
      overflow-y: auto;
      pointer-events: none;
    }
    .modal {
      pointer-events: auto;
      background: #fff;
      border-radius: 12px;
      width: 100%;
      max-width: var(--_modal-width, 480px);
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - 64px);
      box-shadow:
        0 8px 24px 0 rgba(29, 41, 57, 0.12),
        0 2px 8px 0 rgba(29, 41, 57, 0.08);
      flex-shrink: 0;
      animation: modalIn ${G5}ms cubic-bezier(0.05, 0.7, 0.1, 1)
        forwards;
    }
    .modal.is-leaving {
      animation: modalOut ${U5}ms
        cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
    }
    .modal-wrapper--fullscreen {
      padding: 0;
      align-items: stretch;
      height: 100%;
      overflow: hidden;
    }
    .modal--fullscreen .header {
      flex-direction: row-reverse;
      align-items: center;
      padding: 8px;
      border-bottom: 1px solid var(--color-gray-3, #e4e7ec);
    }
    .modal--fullscreen .header-sep {
      display: block;
      width: 1px;
      height: 20px;
      margin-left: 8px;
      margin-right: 16px;
      background: var(--color-gray-3, #e4e7ec);
      flex-shrink: 0;
    }
    .modal--fullscreen {
      border-radius: 0;
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      box-shadow: none;
      animation: modalFullscreenIn ${G5}ms
        cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
    }
    .modal--fullscreen.is-leaving {
      animation: modalFullscreenOut ${U5}ms
        cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
    }
    .header {
      flex-shrink: 0;
      display: flex;
      align-items: flex-start;
      padding: 20px 28px;
    }
    .header-slot {
      flex: 1;
      min-width: 0;
    }
    .header-sep {
      display: none;
    }
    .title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      color: var(--color-gray-8, #323c4d);
      font-family: var(--font-sans);
      margin: 0;
    }
    .body {
      flex: 1;
      overflow-y: auto;
      min-height: 0;
      padding: 0 28px;
    }
    .footer {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 24px 28px;
    }
    .modal--fullscreen .body {
      padding: 0;
    }
    .modal--fullscreen .footer {
      padding: 16px 24px;
      border-top: 1px solid var(--color-gray-3, #e4e7ec);
    }
  `,V1._PRESETS=new Set(["480","600","720","960","1160"]),V1);S1([a({type:Boolean,reflect:!0})],H1.prototype,"open"),S1([a()],H1.prototype,"heading"),S1([a({type:Boolean,attribute:"hide-header"})],H1.prototype,"hideHeader"),S1([a({type:Boolean,attribute:"hide-footer"})],H1.prototype,"hideFooter"),S1([a({attribute:"max-width"})],H1.prototype,"maxWidth"),S1([a({type:Boolean})],H1.prototype,"fullscreen"),S1([y()],H1.prototype,"_leaving");let ce=H1;customElements.get("anduin-modal")||customElements.define("anduin-modal",ce);class Ce extends HTMLElement{constructor(){super(...arguments),this._onClick=()=>{this.dispatchEvent(new CustomEvent(o2,{bubbles:!0,composed:!0}))}}connectedCallback(){this.style.display="contents",this.addEventListener("click",this._onClick)}disconnectedCallback(){this.removeEventListener("click",this._onClick)}}customElements.get("anduin-modal-close")||customElements.define("anduin-modal-close",Ce);var r0=Object.defineProperty,s1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&r0(e,t,i),i};const Q2="anduin-radio:change",ue="anduin-radio-group:change",S4=class S4 extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.readonly=!1,this.value="",this.name="",this.inputid=""}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-field");e&&e.addEventListener(r1,t=>{const o=t;this.inputid&&this.inputid===o.detail&&!this.disabled&&!this.readonly&&this._select()})}_select(){this.checked||(this.checked=!0,this.dispatchEvent(new CustomEvent(Q2,{detail:this.value,bubbles:!0,composed:!0})))}_onInputChange(){this._select()}render(){const e=!this.disabled&&!this.readonly,t=["radio__circle",this.checked?"radio__circle--checked":"",!this.checked&&this.readonly?"radio__circle--readonly":"",!this.checked&&this.disabled?"radio__circle--disabled":"",!this.checked&&!this.readonly&&!this.disabled?"radio__circle--unchecked":""].filter(Boolean).join(" ");return s`
      <label class="${this.disabled?"is-disabled":""}">
        <div
          class="radio ${e?"radio--interactive":""} ${this.disabled?"radio--disabled":""}"
          part="radio"
        >
          <input
            class="radio__input"
            type="radio"
            .checked=${this.checked}
            .value=${this.value}
            name=${this.name||h}
            ?disabled=${this.disabled||this.readonly}
            tabindex="${e?0:-1}"
            @change=${e?this._onInputChange:h}
          />
          <div class="${t}" tabindex="${e?0:-1}"></div>
          <div class="radio__dot ${this.checked?"radio__dot--visible":""}"></div>
        </div>
        <span class="radio__label"><slot></slot></span>
      </label>
    `}};S4.styles=f`
    :host { display: inline-flex; font-family: var(--font-sans); }

    label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    label.is-disabled { cursor: default; opacity: 0.4; }

    .radio__label {
      font-size: var(--text-13, 13px);
      color: var(--color-gray-8, #101828);
      line-height: 20px;
    }

    .radio { width: 16px; height: 16px; position: relative; flex-shrink: 0; }
    .radio--interactive { cursor: pointer; }
    .radio--disabled { opacity: 0.4; }

    .radio__input {
      position: absolute; inset: 0; width: 100%; height: 100%;
      opacity: 0; cursor: pointer; margin: 0;
    }

    .radio__circle {
      position: absolute; inset: 0; pointer-events: none;
      width: 16px; height: 16px; box-sizing: border-box;
      border-radius: 50%;
      transition: all 0.1s, outline 0.3s ease;
      outline: 12px solid transparent; outline-offset: 2px;
    }
    .radio__circle:focus { outline: 2px solid #ACDBF8; }

    .radio__circle--unchecked {
      background-color: var(--color-gray-0);
      border: 1px solid var(--color-gray-4);
    }
    .radio__circle--unchecked:hover  { background-color: var(--color-gray-0); }
    .radio__circle--unchecked:active { background-color: var(--color-gray-2); }

    .radio__circle--checked {
      background-color: var(--color-primary-4);
      border: 1px solid var(--color-primary-4);
    }
    .radio__circle--checked:hover  { background-color: var(--color-primary-3); border-color: var(--color-primary-3); }
    .radio__circle--checked:active { background-color: var(--color-primary-5); border-color: var(--color-primary-5); }

    .radio__circle--readonly { background-color: var(--color-gray-2); border: 1px solid var(--color-gray-4); }
    .radio__circle--disabled { background-color: var(--color-gray-3); border: 1px solid var(--color-gray-4); }

    .radio__dot {
      position: absolute; inset: 0; pointer-events: none;
      display: flex; align-items: center; justify-content: center;
    }
    .radio__dot::after {
      content: '';
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--color-gray-0);
      opacity: 0;
      transform: scale(0.5);
      transition: opacity 0.1s, transform 0.1s;
    }
    .radio__dot--visible::after {
      opacity: 1;
      transform: scale(1);
    }
  `;let o1=S4;s1([a({type:Boolean})],o1.prototype,"checked"),s1([a({type:Boolean})],o1.prototype,"disabled"),s1([a({type:Boolean})],o1.prototype,"readonly"),s1([a()],o1.prototype,"value"),s1([a()],o1.prototype,"name"),s1([a()],o1.prototype,"inputid"),customElements.get("anduin-radio")||customElements.define("anduin-radio",o1);const D4=class D4 extends g{constructor(){super(...arguments),this.value="",this.name="",this.orientation="vertical",this._onRadioChange=e=>{const o=e.detail;o!==this.value&&(this.value=o,this.querySelectorAll("anduin-radio").forEach(i=>{const n=i;n.checked=n.value===o}),this.dispatchEvent(new CustomEvent(ue,{detail:o,bubbles:!0,composed:!0})),e.stopPropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener(Q2,this._onRadioChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Q2,this._onRadioChange)}render(){return s`
      <div class="group group--${this.orientation}" role="radiogroup" part="group">
        <slot></slot>
      </div>
    `}};D4.styles=f`
    :host { display: block; font-family: var(--font-sans); }

    .group {
      display: flex;
      gap: 8px;
    }
    .group--vertical   { flex-direction: column; }
    .group--horizontal { flex-direction: row; flex-wrap: wrap; align-items: center; }
  `;let D1=D4;s1([a()],D1.prototype,"value"),s1([a()],D1.prototype,"name"),s1([a()],D1.prototype,"orientation"),customElements.get("anduin-radio-group")||customElements.define("anduin-radio-group",D1);var a0=Object.defineProperty,B1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&a0(e,t,i),i};const pe=[{bg:"#6172F3",text:"#ffffff"},{bg:"#B692F6",text:"#ffffff"},{bg:"#F670C7",text:"#ffffff"},{bg:"#F79009",text:"#ffffff"},{bg:"#32D583",text:"#ffffff"},{bg:"#36BFFA",text:"#ffffff"},{bg:"#F97066",text:"#ffffff"},{bg:"#7A5AF8",text:"#ffffff"}];function s0(l){let e=0;for(let t=0;t<l.length;t++)e=e*31+l.charCodeAt(t)>>>0;return pe[e%pe.length]}function d0(l){var t;const e=l.trim().split(/\s+/);return e.length===1?((t=e[0][0])==null?void 0:t.toUpperCase())??"":((e[0][0]??"")+(e[e.length-1][0]??"")).toUpperCase()}const B4=class B4 extends g{constructor(){super(...arguments),this.src="",this.name="",this.alt="",this.icon="",this.size=32,this.shape="circle",this._imgError=!1}_onImgError(){this._imgError=!0}_iconSize(){return this.size<=16?10:this.size<=20?12:this.size<=24?14:18}render(){const e=!!this.src&&!this._imgError,t=this.name||this.icon?s0(this.name||this.icon):{bg:"#F2F4F7",text:"#667085"},o=this.name?d0(this.name):"";return s`
      <div
        class="avatar avatar--${this.shape} avatar--${this.size}"
        style=${e?"":`background:${t.bg}`}
        aria-label=${this.alt||this.name||this.icon||"avatar"}
        role="img"
        part="avatar"
      >
        ${e?s`<img src=${this.src} alt=${this.alt||this.name} @error=${this._onImgError} />`:this.icon?s`<span style="color:${t.text};width:100%;height:100%;display:flex;align-items:center;justify-content:center"><anduin-icon name=${this.icon} size=${this._iconSize()}></anduin-icon></span>`:o?s`<span style="color:${t.text};background:${t.bg};width:100%;height:100%;display:flex;align-items:center;justify-content:center">${o}</span>`:s`<span style="color:#98A2B3;background:#F2F4F7;width:100%;height:100%;display:flex;align-items:center;justify-content:center">
                  <svg width="60%" height="60%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8C9.93 8 11.5 6.43 11.5 4.5S9.93 1 8 1 4.5 2.57 4.5 4.5 6.07 8 8 8zm0 1.5C5.66 9.5 1 10.67 1 13v1h14v-1c0-2.33-4.66-3.5-7-3.5z" fill="currentColor"/>
                  </svg>
                </span>`}
      </div>
    `}};B4.styles=f`
    :host { display: inline-flex; }

    .avatar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
      user-select: none;
      font-family: var(--font-sans);
      font-weight: 600;
      line-height: 1;
    }
    .avatar--circle  { border-radius: 50%; }
    .avatar--rounded { border-radius: 4px; }

    .avatar--16 { width: 16px; height: 16px; font-size: 8px; }
    .avatar--20 { width: 20px; height: 20px; font-size: 9px; }
    .avatar--24 { width: 24px; height: 24px; font-size: 10px; }
    .avatar--32 { width: 32px; height: 32px; font-size: 13px; }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  `;let X=B4;B1([a()],X.prototype,"src"),B1([a({reflect:!0})],X.prototype,"name"),B1([a()],X.prototype,"alt"),B1([a()],X.prototype,"icon"),B1([a({type:Number})],X.prototype,"size"),B1([a()],X.prototype,"shape"),B1([y()],X.prototype,"_imgError"),customElements.get("anduin-avatar")||customElements.define("anduin-avatar",X);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c0={CHILD:2},C0=l=>(...e)=>({_$litDirective$:l,values:e});class u0{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class j5 extends u0{constructor(e){if(super(e),this.it=h,e.type!==c0.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===h||e==null)return this._t=void 0,this.it=e;if(e===w1)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}j5.directiveName="unsafeHTML",j5.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class K5 extends j5{}K5.directiveName="unsafeSVG",K5.resultType=2;const p0=C0(K5),he={archive:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 1H4V1.5C4 1.77614 4.22386 2 4.5 2H5V3H4.5C4.22386 3 4 3.22386 4 3.5C4 3.77614 4.22386 4 4.5 4H5V5H4.5C4.22386 5 4 5.22386 4 5.5C4 5.77614 4.22386 6 4.5 6H5V7H4.5C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H5V9H4.5C4.22386 9 4 9.22386 4 9.5V12C4 12.5523 4.44772 13 5 13H6C6.55228 13 7 12.5523 7 12V8.5C7 8.22386 6.77614 8 6.5 8H6V7H6.5C6.77614 7 7 6.77614 7 6.5C7 6.22386 6.77614 6 6.5 6H6V5H6.5C6.77614 5 7 4.77614 7 4.5C7 4.22386 6.77614 4 6.5 4H6V3H6.5C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H6V1ZM6 11H5V12H6V11Z" fill="#98A1B2"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H10V4H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H10V6H11.5C11.7761 6 12 6.22386 12 6.5C12 6.77614 11.7761 7 11.5 7H10V8H11.5C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H10V10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H10V12H11.5C11.7761 12 12 12.2239 12 12.5V18C12 18.5523 11.5523 19 11 19H8C7.44772 19 7 18.5523 7 18V13.5C7 13.2239 7.22386 13 7.5 13H9V12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H9V10H7.5C7.22386 10 7 9.77614 7 9.5C7 9.22386 7.22386 9 7.5 9H9V8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H9V6H7.5C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5H9V4H7.5C7.22386 4 7 3.77614 7 3.5V3ZM8.5 16.5C8.5 16.2239 8.72386 16 9 16H10C10.2761 16 10.5 16.2239 10.5 16.5V17C10.5 17.2761 10.2761 17.5 10 17.5H9C8.72386 17.5 8.5 17.2761 8.5 17V16.5Z" fill="#98A1B2"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2H8V3.5C8 3.77614 8.22386 4 8.5 4H11V6H8.5C8.22386 6 8 6.22386 8 6.5V7.5C8 7.77614 8.22386 8 8.5 8H11V10H8.5C8.22386 10 8 10.2239 8 10.5V11.5C8 11.7761 8.22386 12 8.5 12H11V14H8.5C8.22386 14 8 14.2239 8 14.5V15.5C8 15.7761 8.22386 16 8.5 16H11V18H9C8.44772 18 8 18.4477 8 19V24C8 25.1046 8.89543 26 10 26H13C14.1046 26 15 25.1046 15 24V16.5C15 16.2239 14.7761 16 14.5 16H12V14H14.5C14.7761 14 15 13.7761 15 13.5V12.5C15 12.2239 14.7761 12 14.5 12H12V10H14.5C14.7761 10 15 9.77614 15 9.5V8.5C15 8.22386 14.7761 8 14.5 8H12V6H14.5C14.7761 6 15 5.77614 15 5.5V4.5C15 4.22386 14.7761 4 14.5 4H12V2ZM10 23.5C10 23.7761 10.2239 24 10.5 24H12.5C12.7761 24 13 23.7761 13 23.5V22.5C13 22.2239 12.7761 22 12.5 22H10.5C10.2239 22 10 22.2239 10 22.5V23.5Z" fill="#98A1B2"/>`}},audio:{16:{viewBox:"0 0 16 16",paths:`<path d="M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5Z" fill="#FFBDD5"/>
<path d="M8.5 4H11.5C11.7761 4 12 4.22386 12 4.5V5.5C12 5.77614 11.7761 6 11.5 6H9V10C9 11.1046 8.10457 12 7 12C5.89543 12 5 11.1046 5 10C5 8.89543 5.89543 8 7 8C7.36429 8 7.70583 8.09739 8 8.26756V4.5C8 4.22386 8.22386 4 8.5 4Z" fill="#F06595"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z" fill="#FFBDD5"/>
<path d="M9.42929 7.86226L15.4293 7.00512C15.7305 6.96209 16 7.19582 16 7.50009V15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5C13 14.6715 13.6716 14 14.5 14C14.6753 14 14.8436 14.03 15 14.0853V10.0664L10 10.7807V16.5C10 17.3284 9.32843 18 8.5 18C7.67157 18 7 17.3284 7 16.5C7 15.6715 7.67157 15 8.5 15C8.67532 15 8.84361 15.0301 9 15.0853V8.35724C9 8.10841 9.18297 7.89745 9.42929 7.86226Z" fill="#F06595"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M3 5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 4H5C4.44772 4 4 4.44772 4 5V27C4 27.5523 4.44772 28 5 28H27C27.5523 28 28 27.5523 28 27V5C28 4.44772 27.5523 4 27 4ZM5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5Z" fill="#FFBDD5"/>
<path d="M12.4502 10.9025L21.4502 10.0025C21.7446 9.9731 22 10.2042 22 10.5V20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C20.3643 18 20.7058 18.0974 21 18.2676V13.1L13 13.9V21C13 22.1046 12.1046 23 11 23C9.89543 23 9 22.1046 9 21C9 19.8954 9.89543 19 11 19C11.3643 19 11.7058 19.0974 12 19.2676V11.4C12 11.1432 12.1946 10.9281 12.4502 10.9025Z" fill="#F06595"/>`}},blueprint:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="#48AFF0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#2F8CEC"/>
<mask id="path-3-inside-1_5277_446" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 13H5C4.44772 13 4 12.5523 4 12V10V9V8C4 7.44772 4.44772 7 5 7H11C11.5523 7 12 7.44772 12 8V9V10V12C12 12.5523 11.5523 13 11 13H7H6ZM6 12H5V10H6V12ZM7 12H11V10H7V12ZM7 9H11V8H5V9H6H7Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 13H5C4.44772 13 4 12.5523 4 12V10V9V8C4 7.44772 4.44772 7 5 7H11C11.5523 7 12 7.44772 12 8V9V10V12C12 12.5523 11.5523 13 11 13H7H6ZM6 12H5V10H6V12ZM7 12H11V10H7V12ZM7 9H11V8H5V9H6H7Z" fill="#AADAF9"/>
<path d="M5 12H4V13H5V12ZM6 12V13H7V12H6ZM5 10V9H4V10H5ZM6 10H7V9H6V10ZM7 12H6V13H7V12ZM11 12V13H12V12H11ZM11 10H12V9H11V10ZM7 10V9H6V10H7ZM11 9V10H12V9H11ZM11 8H12V7H11V8ZM5 8V7H4V8H5ZM5 9H4V10H5V9ZM5 13V14H6V13V12H5V13ZM4 12H3C3 13.1046 3.89543 14 5 14V13V12H4ZM4 10H3V12H4H5V10H4ZM4 9H3V10H4H5V9H4ZM4 8H3V9H4H5V8H4ZM5 7V6C3.89543 6 3 6.89543 3 8H4H5V7ZM11 7V6H5V7V8H11V7ZM12 8H13C13 6.89543 12.1046 6 11 6V7V8H12ZM12 9H13V8H12H11V9H12ZM12 10H13V9H12H11V10H12ZM12 12H13V10H12H11V12H12ZM11 13V14C12.1046 14 13 13.1046 13 12H12H11V13ZM7 13V14H11V13V12H7V13ZM7 13V12H6V13V14H7V13ZM5 12V13H6V12V11H5V12ZM5 10H4V12H5H6V10H5ZM6 10V9H5V10V11H6V10ZM6 12H7V10H6H5V12H6ZM7 12V13H11V12V11H7V12ZM11 12H12V10H11H10V12H11ZM11 10V9H7V10V11H11V10ZM7 10H6V12H7H8V10H7ZM7 9V10H11V9V8H7V9ZM11 9H12V8H11H10V9H11ZM11 8V7H5V8V9H11V8ZM5 8H4V9H5H6V8H5ZM5 9V10H6V9V8H5V9ZM6 9V10H7V9V8H6V9Z" fill="#DCF2FA" mask="url(#path-3-inside-1_5277_446)"/>
<path d="M6 2L4 5H8L6 2Z" fill="#AADAF9"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="#48AFF0"/>
<path d="M8 4L6 7H10L8 4Z" fill="#AADAF9"/>
<rect x="6" y="19" width="3" height="1" rx="0.5" fill="#AADAF9"/>
<rect x="15" y="19" width="3" height="1" rx="0.5" fill="#AADAF9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#2F8CEC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44772 16.5523 9 16 9H8C7.44772 9 7 9.44772 7 10V16C7 16.5523 7.44772 17 8 17ZM10 16H8V12H10V16ZM11 16V12H16V16H11ZM16 11V10H8V11H16Z" fill="#DCF2FA"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="#48AFF0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4V28C6 28.5523 6.44772 29 7 29H25C25.5523 29 26 28.5523 26 28V8.41406C26 8.1489 25.8945 7.89453 25.707 7.70703L21.293 3.29297C21.1289 3.12886 20.9135 3.0276 20.6846 3.00488L20.5859 3H7C6.44772 3 6 3.44772 6 4ZM25 8.41406V28H7V4H20.5859L25 8.41406ZM9 9L11.5 5L14 9H9ZM8 26.5C8 26.2239 8.22386 26 8.5 26H11.5C11.7761 26 12 26.2239 12 26.5C12 26.7761 11.7761 27 11.5 27H8.5C8.22386 27 8 26.7761 8 26.5ZM22.5 26C22.2239 26 22 26.2239 22 26.5C22 26.7761 22.2239 27 22.5 27H23.5C23.7761 27 24 26.7761 24 26.5C24 26.2239 23.7761 26 23.5 26H22.5Z" fill="#AADAF9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#2F8CEC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 23H10C9.44772 23 9 22.5523 9 22V16V15V13C9 12.4477 9.44772 12 10 12H22C22.5523 12 23 12.4477 23 13V15V16V22C23 22.5523 22.5523 23 22 23H14H13ZM13 22H10V16H13V22ZM14 22H22V16H14V22ZM14 15H22V13H10V15H13H14Z" fill="#DCF2FA"/>`}},box:{16:{viewBox:"0 0 16 16",paths:`<path d="M1 5H15V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V5Z" fill="#FFB829"/>
<path d="M5 8C5 7.44772 5.44772 7 6 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H6C5.44772 9 5 8.55228 5 8Z" fill="#DE990F"/>
<rect y="1" width="16" height="4" rx="0.5" fill="#FFC78D"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M3 8H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8Z" fill="#FFB829"/>
<path d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z" fill="#DE990F"/>
<rect x="1" y="3" width="22" height="5" rx="1" fill="#FFC78D"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 10H28V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V10Z" fill="#FFB829"/>
<rect x="2" y="4" width="28" height="6" rx="1" fill="#FFC78D"/>
<path d="M10 15.5C10 14.6716 10.6716 14 11.5 14H20.5C21.3284 14 22 14.6716 22 15.5C22 16.3284 21.3284 17 20.5 17H11.5C10.6716 17 10 16.3284 10 15.5Z" fill="#DE990F"/>`}},csv:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14C11.7761 14 12 13.7761 12 13.5V8.5C12 8.22386 11.7761 8 11.5 8H4.5C4.22386 8 4 8.22386 4 8.5V13.5C4 13.7761 4.22386 14 4.5 14H11.5ZM5 11.5V13H7V11.5H5ZM5 10.5H7V9H5V10.5ZM8 11.5V13H11V11.5H8ZM11 10.5V9H8V10.5H11Z" fill="#98A1B2"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C7 10.7239 7.22386 10.5 7.5 10.5H16.5C16.7761 10.5 17 10.7239 17 11V18.5C17 18.7761 16.7761 19 16.5 19H7.5C7.22386 19 7 18.7761 7 18.5V11ZM8 15.5V14H10V15.5H8ZM16 15.5V14H11V15.5H16ZM11 16.5H16V18H11V16.5ZM10 16.5V18H8V16.5H10ZM16 11.5V13H11V11.5H16ZM10 11.5V13H8V11.5H10Z" fill="#98A1B2"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#CCD2DB"/>
<mask id="path-3-inside-1_73_51" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C8 14.4477 8.44772 14 9 14H23C23.5523 14 24 14.4477 24 15V26C24 26.5523 23.5523 27 23 27H9C8.44772 27 8 26.5523 8 26V15ZM14 15H23V18H14V15ZM14 19H23V22H14V19ZM13 22V19H9V22H13ZM9 23H13V26H9V23ZM14 23H23V26H14V23ZM13 15V18H9V15H13Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C8 14.4477 8.44772 14 9 14H23C23.5523 14 24 14.4477 24 15V26C24 26.5523 23.5523 27 23 27H9C8.44772 27 8 26.5523 8 26V15ZM14 15H23V18H14V15ZM14 19H23V22H14V19ZM13 22V19H9V22H13ZM9 23H13V26H9V23ZM14 23H23V26H14V23ZM13 15V18H9V15H13Z" fill="#CCD2DB"/>
<path d="M23 15H24V14H23V15ZM14 15V14H13V15H14ZM23 18V19H24V18H23ZM14 18H13V19H14V18ZM23 19H24V18H23V19ZM14 19V18H13V19H14ZM23 22V23H24V22H23ZM14 22H13V23H14V22ZM13 19H14V18H13V19ZM13 22V23H14V22H13ZM9 19V18H8V19H9ZM9 22H8V23H9V22ZM13 23H14V22H13V23ZM9 23V22H8V23H9ZM13 26V27H14V26H13ZM9 26H8V27H9V26ZM23 23H24V22H23V23ZM14 23V22H13V23H14ZM23 26V27H24V26H23ZM14 26H13V27H14V26ZM13 18V19H14V18H13ZM13 15H14V14H13V15ZM9 18H8V19H9V18ZM9 15V14H8V15H9ZM23 15V14H14V15V16H23V15ZM23 18H24V15H23H22V18H23ZM14 18V19H23V18V17H14V18ZM14 15H13V18H14H15V15H14ZM23 19V18H14V19V20H23V19ZM23 22H24V19H23H22V22H23ZM14 22V23H23V22V21H14V22ZM14 19H13V22H14H15V19H14ZM13 19H12V22H13H14V19H13ZM9 19V20H13V19V18H9V19ZM9 22H10V19H9H8V22H9ZM9 22V23H13V22V21H9V22ZM13 23V22H9V23V24H13V23ZM13 23H12V26H13H14V23H13ZM13 26V25H9V26V27H13V26ZM9 26H10V23H9H8V26H9ZM8 15H9V15V14V13C7.89543 13 7 13.8954 7 15H8ZM23 14V15H24H25C25 13.8954 24.1046 13 23 13V14ZM24 15H23V26H24H25V15H24ZM24 26H23V27V28C24.1046 28 25 27.1046 25 26H24ZM9 27V26H8H7C7 27.1046 7.89543 28 9 28V27ZM23 23V22H14V23V24H23V23ZM23 26H24V23H23H22V26H23ZM14 26V27H23V26V25H14V26ZM14 23H13V26H14H15V23H14ZM13 18H14V15H13H12V18H13ZM9 18V19H13V18V17H9V18ZM9 15H8V18H9H10V15H9ZM13 15V14H9V15V16H13V15ZM8 26H9V15H8H7V26H8ZM9 14V15H23V14V13H9V14ZM23 27V26H9V27V28H23V27Z" fill="#98A1B2" mask="url(#path-3-inside-1_73_51)"/>`}},excel:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#9DE6AB"/>
<path d="M8 9.06868L8.99658 7.13545C9.03946 7.05227 9.12521 7 9.21879 7H9.98877C10.1795 7 10.3 7.20496 10.2072 7.3716L8.75781 9.97527L10.2478 12.6276C10.3414 12.7942 10.221 13 10.0298 13H9.24547C9.15224 13 9.06675 12.9481 9.02371 12.8654L8 10.8984L6.97629 12.8654C6.93325 12.9481 6.84776 13 6.75453 13H5.97016C5.77902 13 5.65858 12.7942 5.7522 12.6276L7.24219 9.97527L5.79279 7.3716C5.70003 7.20496 5.82052 7 6.01123 7H6.78121C6.87479 7 6.96054 7.05227 7.00342 7.13545L8 9.06868Z" fill="#239E47"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#9DE6AB"/>
<path d="M12 12.7582L13.3958 10.1326C13.4392 10.051 13.5241 10 13.6165 10H14.8876C15.0797 10 15.2 10.2078 15.1044 10.3745L13.042 13.967L15.161 17.6247C15.2575 17.7913 15.1373 18 14.9447 18H13.6535C13.5614 18 13.4767 17.9494 13.4332 17.8682L12 15.1978L10.5668 17.8682C10.5233 17.9494 10.4386 18 10.3465 18H9.05534C8.86272 18 8.74246 17.7913 8.83902 17.6247L10.958 13.967L8.89563 10.3745C8.79996 10.2078 8.92027 10 9.11245 10H10.3835C10.4759 10 10.5608 10.051 10.6042 10.1326L12 12.7582Z" fill="#239E47"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#9DE6AB"/>
<path d="M16 17.1374L17.9932 13.2709C18.0789 13.1045 18.2504 13 18.4376 13H19.9809C20.3616 13 20.6026 13.4084 20.4187 13.7417L17.5156 19L20.4913 24.2536C20.6801 24.5869 20.4393 25 20.0562 25H18.4909C18.3045 25 18.1335 24.8962 18.0474 24.7308L16 20.7967L13.9526 24.7308C13.8665 24.8962 13.6955 25 13.5091 25H11.9438C11.5607 25 11.3199 24.5869 11.5087 24.2536L14.4844 19L11.5813 13.7417C11.3974 13.4084 11.6384 13 12.0191 13H13.5624C13.7496 13 13.9211 13.1045 14.0068 13.2709L16 17.1374Z" fill="#239E47"/>`}},folder:{16:{viewBox:"0 0 16 16",paths:'<path d="M0 13.5V2.5C0 1.67157 0.671573 1 1.5 1H6.37868C6.7765 1 7.15803 1.15803 7.43934 1.43934L9 3H14.5C15.3284 3 16 3.67157 16 4.5V13.5C16 14.3284 15.3284 15 14.5 15H1.5C0.671573 15 0 14.3284 0 13.5Z" fill="#F5D494"/>'},24:{viewBox:"0 0 24 24",paths:'<path d="M2 18V6C2 4.89543 2.89543 4 4 4H9.17157C9.70201 4 10.2107 4.21071 10.5858 4.58579L12 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18Z" fill="#F5D494"/>'},32:{viewBox:"0 0 32 32",paths:'<path d="M1 26V6C1 4.89543 1.89543 4 3 4H10.1716C10.702 4 11.2107 4.21071 11.5858 4.58579L14 7H29C30.1046 7 31 7.89543 31 9V26C31 27.1046 30.1046 28 29 28H3C1.89543 28 1 27.1046 1 26Z" fill="#F5D494"/>'}},"folder-empty":{16:{viewBox:"0 0 16 16",paths:'<path d="M0 13.5V2.5C0 1.67157 0.671573 1 1.5 1H6.37868C6.7765 1 7.15803 1.15803 7.43934 1.43934L9 3H14.5C15.3284 3 16 3.67157 16 4.5V13.5C16 14.3284 15.3284 15 14.5 15H1.5C0.671573 15 0 14.3284 0 13.5Z" fill="#CCD2DB"/>'},24:{viewBox:"0 0 24 24",paths:'<path d="M2 18V6C2 4.89543 2.89543 4 4 4H9.17157C9.70201 4 10.2107 4.21071 10.5858 4.58579L12 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18Z" fill="#CCD2DB"/>'},32:{viewBox:"0 0 32 32",paths:'<path d="M1 26V6C1 4.89543 1.89543 4 3 4H10.1716C10.702 4 11.2107 4.21071 11.5858 4.58579L14 7H29C30.1046 7 31 7.89543 31 9V26C31 27.1046 30.1046 28 29 28H3C1.89543 28 1 27.1046 1 26Z" fill="#CCD2DB"/>'}},form:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#BFBFF3"/>
<path d="M6 3L4 6H8L6 3Z" fill="#BFBFF3"/>
<rect x="7" y="9" width="5" height="1" rx="0.5" fill="#5C7CFA"/>
<rect x="7" y="12" width="5" height="1" rx="0.5" fill="#5C7CFA"/>
<rect x="4" y="8.5" width="2" height="2" rx="1" fill="#BFBFF3"/>
<rect x="4" y="11.5" width="2" height="2" rx="1" fill="#BFBFF3"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path d="M9 6L7 9H11L9 6Z" fill="#BFBFF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#BFBFF3"/>
<rect x="11" y="12.5" width="6" height="1.5" rx="0.75" fill="#5C7CFA"/>
<rect x="11" y="16.5" width="6" height="1.5" rx="0.75" fill="#5C7CFA"/>
<rect x="7" y="12" width="3" height="3" rx="1" fill="#BFBFF3"/>
<rect x="7" y="16" width="3" height="3" rx="1" fill="#BFBFF3"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#BFBFF3"/>
<rect x="8" y="12" width="3" height="3" rx="1" fill="#BFBFF3"/>
<rect x="8" y="16" width="3" height="3" rx="1" fill="#BFBFF3"/>
<rect x="8" y="20" width="3" height="3" rx="1" fill="#BFBFF3"/>
<rect x="8" y="24" width="3" height="3" rx="1" fill="#BFBFF3"/>
<rect x="13" y="13" width="11" height="1.5" rx="0.75" fill="#5C7CFA"/>
<rect x="13" y="17" width="11" height="1.5" rx="0.75" fill="#5C7CFA"/>
<rect x="13" y="21" width="11" height="1.5" rx="0.75" fill="#5C7CFA"/>
<rect x="13" y="25" width="8" height="1.5" rx="0.75" fill="#5C7CFA"/>
<path d="M10.5 5L8 9H13L10.5 5Z" fill="#BFBFF3"/>`}},generic:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#CCD2DB"/>
<path d="M7.58241 11.5683C7.44386 11.5683 7.33051 11.4562 7.33823 11.3183C7.35498 11.019 7.40324 10.7723 7.48301 10.5782C7.58399 10.3326 7.76812 10.0914 8.03541 9.85461C8.30567 9.61487 8.48535 9.42101 8.57445 9.27303C8.66355 9.12209 8.70809 8.96374 8.70809 8.798C8.70809 8.29782 8.47644 8.04772 8.01314 8.04772C7.79337 8.04772 7.61666 8.1158 7.48301 8.25194C7.40061 8.33593 7.34301 8.44051 7.3102 8.56569C7.27581 8.69692 7.16952 8.80688 7.03342 8.80688H6.23969C6.10011 8.80688 5.98567 8.693 6.00146 8.55479C6.05248 8.1084 6.23004 7.74996 6.53413 7.47947C6.89646 7.15982 7.38946 7 8.01314 7C8.64276 7 9.13131 7.15242 9.47878 7.45727C9.82626 7.75916 10 8.18683 10 8.74029C10 8.99186 9.94357 9.23011 9.83072 9.45505C9.71786 9.67703 9.52036 9.92416 9.23822 10.1964L8.87738 10.5383C8.65167 10.7543 8.52248 11.0074 8.48981 11.2974L8.48736 11.3346C8.47871 11.4661 8.36921 11.5683 8.23704 11.5683H7.58241ZM7.20236 12.9312C7.20236 12.7329 7.26918 12.5701 7.40282 12.4428C7.53944 12.3126 7.71318 12.2475 7.92404 12.2475C8.1349 12.2475 8.30716 12.3126 8.4408 12.4428C8.57742 12.5701 8.64573 12.7329 8.64573 12.9312C8.64573 13.1265 8.5789 13.2878 8.44526 13.4151C8.31458 13.5424 8.14084 13.606 7.92404 13.606C7.70724 13.606 7.53202 13.5424 7.39837 13.4151C7.26769 13.2878 7.20236 13.1265 7.20236 12.9312Z" fill="#98A1B2"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#CCD2DB"/>
<path d="M11.1928 14.9608C11.1624 15.2331 11.3921 15.456 11.669 15.456H12.2895C12.46 15.456 12.6016 15.3259 12.6141 15.1577C12.6549 14.8096 12.8163 14.5059 13.0981 14.2465L13.5487 13.8363C13.901 13.5095 14.1477 13.2129 14.2886 12.9465C14.4295 12.6765 14.5 12.3906 14.5 12.0886C14.5 11.4244 14.283 10.9111 13.8491 10.5488C13.4152 10.1829 12.8051 10 12.0189 10C11.2401 10 10.6244 10.1918 10.172 10.5754C9.77994 10.9106 9.55632 11.3582 9.50109 11.9183C9.48755 12.0556 9.60157 12.1686 9.74104 12.1686H10.8568C10.9926 12.1686 11.0999 12.0602 11.1289 11.9288C11.1668 11.7563 11.2428 11.6143 11.3569 11.5025C11.5238 11.3391 11.7444 11.2574 12.0189 11.2574C12.5974 11.2574 12.8867 11.5576 12.8867 12.1579C12.8867 12.3568 12.8311 12.5469 12.7198 12.728C12.6086 12.9056 12.3842 13.1383 12.0467 13.426C11.7129 13.7102 11.483 13.9997 11.3569 14.2945C11.2767 14.4819 11.222 14.6995 11.1928 14.9608Z" fill="#98A1B2"/>
<path d="M10.9889 17.1901C10.9889 16.9521 11.0697 16.7568 11.2312 16.604C11.3964 16.4477 11.6063 16.3696 11.8612 16.3696C12.1161 16.3696 12.3242 16.4477 12.4858 16.604C12.6509 16.7568 12.7335 16.9521 12.7335 17.1901C12.7335 17.4246 12.6527 17.6181 12.4912 17.7709C12.3332 17.9236 12.1232 18 11.8612 18C11.5992 18 11.3874 17.9236 11.2258 17.7709C11.0679 17.6181 10.9889 17.4246 10.9889 17.1901Z" fill="#98A1B2"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.696 21.5003C14.6785 21.7759 14.9054 22 15.1815 22H16.4861C16.7496 22 16.9679 21.7955 16.985 21.5325L16.9901 21.4554C17.0552 20.872 17.3127 20.5506 17.7625 20.1161L18.4818 19.4286C19.0441 18.881 19.4377 18.3839 19.6627 17.9375C19.8876 17.4851 20.0001 17.006 20.0001 16.5C20.0001 15.3869 19.6538 14.5268 18.9612 13.9196C18.2687 13.3065 17.2949 13 16.04 13C14.797 13 13.8143 13.3214 13.0922 13.9643C12.4855 14.5088 12.1315 15.2307 12.0302 16.1297C11.9991 16.4062 12.2271 16.6339 12.5053 16.6339H14.0873C14.3586 16.6339 14.5705 16.414 14.6383 16.1514C14.7036 15.8985 14.8186 15.6873 14.9834 15.5179C15.2498 15.244 15.602 15.1071 16.04 15.1071C16.9634 15.1071 17.4251 15.6101 17.4251 16.6161C17.4251 16.9494 17.3364 17.2679 17.1588 17.5714C16.9812 17.869 16.6231 18.2589 16.0844 18.7411C15.5517 19.2173 15.1847 19.7024 14.9834 20.1964C14.8262 20.5824 14.7304 20.9574 14.696 21.5003ZM14.424 24.9285C14.424 24.5297 14.5572 24.2023 14.8236 23.9463C15.0959 23.6844 15.4421 23.5535 15.8624 23.5535C16.2827 23.5535 16.626 23.6844 16.8924 23.9463C17.1647 24.2023 17.3008 24.5297 17.3008 24.9285C17.3008 25.3213 17.1676 25.6457 16.9013 25.9017C16.6408 26.1576 16.2945 26.2856 15.8624 26.2856C15.4303 26.2856 15.0811 26.1576 14.8147 25.9017C14.5542 25.6457 14.424 25.3213 14.424 24.9285Z" fill="#98A1B2"/>`}},image:{16:{viewBox:"0 0 16 16",paths:`<path d="M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5Z" fill="#AADAF9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.78281 8.23977C5.9929 7.93325 6.45031 7.91786 6.68168 8.20952L8.61645 10.6486C8.8171 10.9015 9.20129 10.9008 9.40102 10.6472L10.0844 9.77924C10.3036 9.50089 10.7334 9.49728 10.9575 9.7719L12.879 12.1268C13.1669 12.4797 12.9086 13 12.4454 13H3.5545C3.11237 13 2.84865 12.5207 3.0939 12.1629L5.78281 8.23977Z" fill="#AADAF9"/>
<circle cx="10.5" cy="5.5" r="1.5" fill="#1075DC"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z" fill="#AADAF9"/>
<circle cx="15" cy="9" r="2" fill="#1075DC"/>
<path d="M9.5671 12.2148L6.09047 17.2137C5.85965 17.5456 6.09721 18 6.50154 18H17.4984C17.9218 18 18.154 17.5072 17.8845 17.1808L15.4122 14.187C15.2056 13.9368 14.819 13.9463 14.6249 14.2063L13.4405 15.793C13.2301 16.0748 12.8022 16.0576 12.6152 15.7597L10.4022 12.2345C10.2114 11.9305 9.77203 11.9201 9.5671 12.2148Z" fill="#AADAF9"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M3 5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 4H5C4.44772 4 4 4.44772 4 5V27C4 27.5523 4.44772 28 5 28H27C27.5523 28 28 27.5523 28 27V5C28 4.44772 27.5523 4 27 4ZM5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5Z" fill="#AADAF9"/>
<path d="M17.1054 21.5882L13.2628 16.4044C12.8535 15.8522 12.0236 15.8682 11.6358 16.4358L6.17214 24.4316C5.71771 25.0966 6.1927 26 6.99678 26H24.994C25.8335 26 26.299 25.0254 25.7728 24.3697L21.7782 19.3925C21.3586 18.8697 20.5551 18.8999 20.1758 19.4528L18.7313 21.5583C18.3429 22.1245 17.5143 22.1397 17.1054 21.5882Z" fill="#AADAF9"/>
<circle cx="21" cy="11" r="3" fill="#1075DC"/>`}},link:{16:{viewBox:"0 0 16 16",paths:`<path d="M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5Z" fill="#AADAF9"/>
<path d="M10.7106 5.28789C10.3254 4.90358 9.70169 4.9041 9.31719 5.28907L7.71846 6.88973C7.33439 7.27426 7.33443 7.89718 7.71843 8.28167L7.01132 8.98878C6.23697 8.21393 6.23674 6.95817 7.01093 6.18305L8.60965 4.58239C9.38431 3.8068 10.6409 3.80574 11.4169 4.58001C12.1937 5.35513 12.1944 6.61341 11.4185 7.38941L10.5646 8.24333C10.5425 7.85735 10.4457 7.47485 10.2744 7.1193L10.7114 6.68233C11.0965 6.29717 11.0961 5.67262 10.7106 5.28789Z" fill="#1075DC"/>
<path d="M4.58051 8.61296L5.43532 7.75712C5.45739 8.14326 5.55413 8.52593 5.72552 8.88164L5.28804 9.31964C4.90382 9.70433 4.90401 10.3276 5.28847 10.7121C5.6731 11.0967 6.29671 11.0967 6.68132 10.712L8.28094 9.11225C8.66573 8.72743 8.66571 8.10364 8.28116 7.71883L8.98827 7.01172C9.76329 7.78698 9.7634 9.04393 8.98807 9.81933L7.38845 11.4191C6.61333 12.1943 5.35655 12.1943 4.58138 11.4192C3.80655 10.6444 3.80616 9.38825 4.58051 8.61296Z" fill="#1075DC"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z" fill="#AADAF9"/>
<path d="M13.4352 8.44005L11.2151 10.6602C10.6283 11.247 10.6283 12.1982 11.2151 12.785C11.3396 12.9095 11.4807 13.0077 11.6311 13.0793L10.8988 13.8116C10.7607 13.7202 10.6296 13.6137 10.508 13.4921C9.53071 12.5148 9.53071 10.9304 10.508 9.95311L12.7281 7.73294C13.7054 6.75569 15.2898 6.75569 16.2671 7.73294C17.2444 8.7102 17.2444 10.2946 16.2671 11.2719L15.2241 12.3149C15.2284 11.9047 15.161 11.4938 15.0221 11.1027L15.56 10.5648C16.1467 9.97806 16.1467 9.02678 15.56 8.44005C14.9733 7.85332 14.022 7.85332 13.4352 8.44005Z" fill="#1075DC"/>
<path d="M7.73221 12.7287L8.99946 11.4615C8.99518 11.8717 9.06254 12.2825 9.20153 12.6736L8.43932 13.4358C7.85258 14.0226 7.85258 14.9738 8.43932 15.5606C9.02605 16.1473 9.97733 16.1473 10.5641 15.5606L12.7842 13.3404C13.371 12.7537 13.371 11.8024 12.7842 11.2157C12.6596 11.0911 12.5186 10.9929 12.3681 10.9213L13.1004 10.189C13.2386 10.2803 13.3697 10.3869 13.4913 10.5086C14.4686 11.4858 14.4686 13.0703 13.4913 14.0475L11.2712 16.2677C10.2939 17.2449 8.70947 17.2449 7.73221 16.2677C6.75495 15.2904 6.75495 13.706 7.73221 12.7287Z" fill="#1075DC"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M29 5C29 3.89543 28.1046 3 27 3H5C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H27C27.5523 4 28 4.44772 28 5V27C28 27.5523 27.5523 28 27 28H5C4.44772 28 4 27.5523 4 27V5C4 4.44772 4.44772 4 5 4ZM27 3C28.1046 3 29 3.89543 29 5V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V5C3 3.89543 3.89543 3 5 3H27Z" fill="#AADAF9"/>
<path d="M17.2487 11.2221L15.2412 13.2134C14.2272 14.2192 14.2576 15.8698 15.3077 16.8375C15.5071 17.0212 15.7286 17.1665 15.9629 17.2736C15.9181 17.4343 15.8325 17.5861 15.7057 17.7126L14.9708 18.4459C14.7315 18.3046 14.5035 18.1362 14.2912 17.9405C12.6124 16.3935 12.564 13.7562 14.1848 12.1484L16.1924 10.1571C17.7099 8.65182 20.1416 8.60795 21.7123 10.0575C23.3839 11.6003 23.435 14.2267 21.8246 15.8335L20.4978 17.1573C20.5153 16.5314 20.4266 15.9036 20.2325 15.3031L20.7652 14.7716C21.772 13.7671 21.74 12.1242 20.695 11.1599C19.7142 10.2547 18.1964 10.282 17.2487 11.2221Z" fill="#1075DC"/>
<path d="M10.1848 16.1513L11.5021 14.8447C11.485 15.4691 11.5735 16.0955 11.7669 16.6947L11.2412 17.2162C10.2272 18.222 10.2576 19.8727 11.3077 20.8403C12.2923 21.7477 13.8154 21.7175 14.7635 20.7716L16.7652 18.7745C17.772 17.7699 17.74 16.1271 16.695 15.1627C16.4949 14.978 16.2724 14.8322 16.037 14.7249C16.0822 14.5623 16.1689 14.4088 16.2975 14.2812L17.0311 13.5535C17.271 13.6951 17.4996 13.8641 17.7123 14.0604C19.3839 15.6031 19.435 18.2296 17.8246 19.8363L15.8229 21.8335C14.3058 23.3472 11.8671 23.3956 10.2912 21.9434C8.61245 20.3964 8.56403 17.759 10.1848 16.1513Z" fill="#1075DC"/>`}},pdf:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#F7C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.76567 13.9979C4.52756 13.9811 4.33099 13.8636 4.19183 13.6939C4.0513 13.5224 3.97918 13.3097 4.00527 13.0809C4.02926 12.8704 4.13055 12.6959 4.23654 12.5634C4.44386 12.3044 4.77481 12.0763 5.12753 11.8801C5.38927 11.7345 5.69059 11.5917 6.01607 11.4552C6.25856 11.0359 6.49957 10.5666 6.72034 10.0842C6.93808 9.6085 7.13064 9.13207 7.2832 8.69093C7.11983 8.37302 6.98775 8.06206 6.90059 7.775C6.80052 7.44541 6.73881 7.08165 6.81455 6.75783C6.85466 6.58637 6.9368 6.41233 7.0842 6.27065C7.23286 6.12776 7.41707 6.04746 7.6104 6.01477C7.81044 5.98095 8.03686 5.99939 8.23863 6.13141C8.43514 6.25999 8.53764 6.45039 8.5899 6.62003C8.68794 6.93823 8.65737 7.33657 8.58959 7.71353C8.5414 7.98159 8.46659 8.27786 8.37126 8.5905C8.52609 8.85606 8.70522 9.12957 8.90105 9.39759C9.17296 9.76973 9.46437 10.1139 9.74929 10.3995C10.0736 10.3515 10.3749 10.3226 10.6381 10.3179C10.8242 10.3145 11.0043 10.3228 11.1673 10.3493C11.3238 10.3747 11.5016 10.4227 11.6554 10.5233C11.8247 10.6342 11.973 10.8177 11.9968 11.0727C12.018 11.3 11.9311 11.5001 11.8372 11.65C11.6083 12.0155 11.2502 12.1903 10.8508 12.1705C10.499 12.1532 10.1554 11.9883 9.85759 11.7908C9.71588 11.6969 9.57241 11.5873 9.42902 11.4653C9.02934 11.5425 8.59451 11.6466 8.15255 11.7716C7.65188 11.9131 7.15669 12.0773 6.70833 12.2514C6.51786 12.5617 6.32526 12.8449 6.13702 13.0857C5.88869 13.4034 5.61203 13.6949 5.32383 13.8571C5.17642 13.94 4.98359 14.0133 4.76567 13.9979ZM4.79382 13.0069C4.79383 13.0069 4.79415 13.0068 4.79479 13.0066L4.79382 13.0069ZM7.42003 10.9492C7.57223 10.9018 7.72503 10.8565 7.87729 10.8135C8.11704 10.7457 8.35858 10.6827 8.59738 10.6258C8.4198 10.4191 8.24858 10.2022 8.08787 9.98222C8.03929 9.91573 7.99132 9.84848 7.94408 9.78064C7.84694 10.0195 7.74311 10.2594 7.6348 10.4961C7.5654 10.6477 7.49365 10.7991 7.42003 10.9492ZM11.0029 11.0896C11.0029 11.0895 11.0027 11.0903 11.002 11.0919C11.0025 11.0904 11.0028 11.0896 11.0029 11.0896Z" fill="#E32D2D"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#F7C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99813 18.9891C7.74444 18.9537 7.52328 18.834 7.3421 18.6559C7.16865 18.4855 7.04091 18.2742 7.00812 18.0245C6.97544 17.7758 7.04481 17.5481 7.15513 17.3579C7.3631 16.9994 7.75868 16.6992 8.18636 16.4513C8.71193 16.1466 9.39019 15.8627 10.1282 15.6179C10.3565 15.1831 10.5754 14.716 10.7756 14.2381C10.977 13.7573 11.1558 13.2741 11.3041 12.8111C11.002 12.2609 10.7592 11.7188 10.612 11.2314C10.4755 10.7794 10.4012 10.3108 10.4936 9.9098C10.542 9.70016 10.6396 9.49389 10.8115 9.32717C10.985 9.15886 11.2039 9.06041 11.443 9.01935C11.6833 8.97808 11.9337 8.99849 12.1596 9.12284C12.3833 9.24603 12.5254 9.43955 12.6122 9.63894C12.7761 10.0155 12.7859 10.509 12.7344 11.0019C12.6821 11.5035 12.5568 12.0835 12.3795 12.6945C12.5786 13.0303 12.8015 13.371 13.0401 13.7037C13.3219 14.0966 13.6184 14.4684 13.9142 14.8002C14.4218 14.752 14.8962 14.7384 15.3064 14.7684C15.7818 14.8031 16.2683 14.9018 16.6012 15.1587C16.7824 15.2985 16.9271 15.4928 16.9794 15.743C17.0302 15.9861 16.9824 16.2269 16.8867 16.4469C16.7911 16.6667 16.6513 16.8609 16.4537 16.9987C16.2526 17.139 16.0252 17.1975 15.7987 17.1966C15.3727 17.1948 14.9432 16.9849 14.5656 16.7272C14.2272 16.4964 13.8742 16.1878 13.5244 15.8304C13.0088 15.8996 12.4568 16.003 11.9021 16.1344C11.5328 16.2219 11.1682 16.3204 10.8182 16.4271C10.495 17.0056 10.1519 17.5292 9.80728 17.946C9.47129 18.3522 9.0944 18.706 8.69175 18.8812C8.48289 18.9721 8.24635 19.0238 7.99813 18.9891ZM9.29674 16.9876C9.07424 17.088 8.8711 17.1907 8.6924 17.2942C8.30139 17.5209 8.09504 17.7139 8.02041 17.8426C8.00186 17.8745 7.99726 17.8926 7.99624 17.8995C7.9994 17.9074 8.01077 17.9289 8.04636 17.9639C8.09549 18.0121 8.12527 18.0183 8.13845 18.0202C8.1571 18.0228 8.20335 18.0233 8.28851 17.9863C8.47391 17.9056 8.73 17.6967 9.03437 17.3287C9.12123 17.2237 9.20885 17.1096 9.29674 16.9876ZM7.99517 17.896C7.99523 17.896 7.99547 17.8967 7.9957 17.898L7.99517 17.896ZM7.99605 17.9009C7.99613 17.9021 7.99607 17.9028 7.99602 17.9028C7.99597 17.9028 7.99593 17.9022 7.99605 17.9009ZM11.418 15.2441C11.5015 15.2231 11.5851 15.2027 11.6687 15.1829C12.0285 15.0977 12.393 15.0223 12.7528 14.9593C12.5715 14.7352 12.3949 14.503 12.226 14.2676C12.141 14.149 12.0573 14.0287 11.9753 13.9072C11.8874 14.1425 11.7941 14.3777 11.6966 14.6106C11.6077 14.8228 11.5146 15.0347 11.418 15.2441ZM14.8749 15.7312C14.9632 15.8017 15.0495 15.866 15.1336 15.9233C15.4613 16.1469 15.6841 16.2174 15.8028 16.2179C15.8485 16.2181 15.8665 16.2081 15.8771 16.2007C15.8911 16.1909 15.9292 16.1582 15.9709 16.0623C16.0008 15.9935 16.004 15.9568 16.0039 15.9442C16.0009 15.9409 15.9954 15.9357 15.9861 15.9285C15.8984 15.8608 15.6679 15.7762 15.2325 15.7444C15.1203 15.7362 15.0008 15.7318 14.8749 15.7312ZM16.0073 15.9486C16.0072 15.9486 16.0067 15.9479 16.006 15.9466C16.007 15.9479 16.0074 15.9486 16.0073 15.9486ZM11.6875 11.3029C11.7116 11.1627 11.7305 11.0287 11.7437 10.9021C11.7911 10.4477 11.7569 10.1625 11.6965 10.0239C11.6861 9.99996 11.6774 9.98617 11.6719 9.97887C11.6619 9.97817 11.6436 9.97844 11.6144 9.98346C11.5422 9.99585 11.5184 10.0167 11.5111 10.0237C11.5022 10.0324 11.4807 10.0577 11.465 10.1261C11.4292 10.2812 11.4465 10.5546 11.5668 10.953C11.6006 11.065 11.6411 11.1819 11.6875 11.3029ZM11.6819 9.98043C11.6818 9.98049 11.6809 9.98033 11.6793 9.97974C11.6811 9.98007 11.6819 9.98037 11.6819 9.98043ZM11.6671 9.97303C11.6661 9.9723 11.6657 9.97185 11.6657 9.97181C11.6657 9.97177 11.6662 9.97213 11.6671 9.97303Z" fill="#E32D2D"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804ZM6 2H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2Z" fill="#F7C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.35554 25.9715C8.97562 25.896 8.65688 25.689 8.40852 25.3968C8.16069 25.1053 8.00496 24.7542 8.00105 24.3602C7.99725 23.9771 8.13778 23.6373 8.32589 23.3568C8.68719 22.818 9.31962 22.3548 10.0182 21.9615C10.8331 21.5027 11.8604 21.0726 12.9759 20.6964C13.3019 20.1278 13.6179 19.5259 13.9134 18.9112C14.3167 18.0721 14.673 17.2269 14.9599 16.4293C14.5182 15.6786 14.1615 14.9418 13.9381 14.275C13.7169 13.6148 13.5858 12.9072 13.7425 12.2954C13.8257 11.9705 13.9937 11.661 14.2763 11.4223C14.556 11.186 14.8971 11.0618 15.257 11.0168C15.6259 10.9707 16.0033 11.0145 16.3396 11.2086C16.6773 11.4035 16.8925 11.7031 17.0208 12.0196C17.2615 12.6131 17.2436 13.3757 17.1304 14.1248C17.0336 14.7649 16.852 15.4855 16.6077 16.2445C16.9403 16.7614 17.3165 17.2888 17.7211 17.8039C18.1515 18.3518 18.6032 18.8719 19.0546 19.3397C19.8868 19.252 20.6633 19.2211 21.3311 19.262C22.0797 19.3078 22.8335 19.4497 23.3531 19.8253C23.6349 20.029 23.8724 20.3203 23.9652 20.709C24.0558 21.089 23.9853 21.4661 23.8393 21.8066C23.6933 22.1473 23.4783 22.4438 23.1781 22.655C22.8753 22.868 22.5338 22.9605 22.1933 22.9678C21.5472 22.9818 20.8791 22.6922 20.2777 22.3196C19.7072 21.9662 19.1077 21.4814 18.5142 20.9171C17.6941 21.0313 16.8163 21.1987 15.9335 21.4095C15.2676 21.5685 14.6092 21.7497 13.9807 21.9468C13.3846 22.9346 12.7534 23.8263 12.1345 24.5121C11.5982 25.1062 11.0078 25.618 10.399 25.8565C10.0833 25.9802 9.72524 26.0449 9.35554 25.9715ZM11.5551 22.8625C11.2659 22.9959 10.9974 23.1316 10.7541 23.2686C10.1108 23.6308 9.73206 23.9531 9.57168 24.1922C9.53589 24.2456 9.51784 24.285 9.50906 24.3104C9.50077 24.3344 9.50097 24.3449 9.50098 24.3453L9.50098 24.3453L9.50107 24.3462C9.50114 24.3465 9.50162 24.3489 9.50354 24.3536C9.50728 24.3629 9.51897 24.3872 9.55143 24.4254C9.60907 24.4932 9.64078 24.4989 9.64722 24.5001C9.64746 24.5001 9.64766 24.5002 9.64783 24.5002C9.66279 24.5032 9.72343 24.5102 9.85193 24.4599C10.1316 24.3503 10.532 24.0488 11.021 23.507C11.1963 23.3128 11.3749 23.0969 11.5551 22.8625ZM15.0019 20.0957C15.196 20.0454 15.3906 19.997 15.5851 19.9506C16.142 19.8176 16.7045 19.6993 17.2595 19.5992C17.0133 19.3162 16.773 19.0252 16.5415 18.7305C16.3469 18.4827 16.1564 18.2298 15.9721 17.9739C15.7549 18.5038 15.5171 19.0371 15.2653 19.561C15.1794 19.7397 15.0915 19.9181 15.0019 20.0957ZM20.626 20.7445C20.7769 20.8554 20.9245 20.9558 21.0677 21.0445C21.5874 21.3665 21.9517 21.4727 22.1609 21.4682C22.2479 21.4663 22.2898 21.4459 22.3149 21.4282C22.3428 21.4086 22.4004 21.3563 22.4606 21.2158C22.4951 21.1353 22.5033 21.0877 22.505 21.0659C22.4989 21.06 22.4892 21.0516 22.4743 21.0409C22.3193 20.9289 21.9346 20.8017 21.2395 20.7592C21.0475 20.7474 20.8424 20.7427 20.626 20.7445ZM22.5141 21.0764C22.514 21.0764 22.5133 21.0755 22.5122 21.0737C22.5137 21.0755 22.5143 21.0764 22.5141 21.0764ZM15.5685 14.3393C15.5997 14.1876 15.626 14.0411 15.6472 13.9005C15.7511 13.2136 15.7138 12.788 15.6308 12.5834C15.6114 12.5356 15.5957 12.5149 15.5888 12.5076C15.5763 12.5034 15.5342 12.4938 15.443 12.5052C15.3029 12.5228 15.2546 12.5595 15.2443 12.5682C15.237 12.5743 15.2145 12.5939 15.1956 12.6675C15.1482 12.8527 15.1667 13.2204 15.3604 13.7985C15.4181 13.9708 15.4878 14.1516 15.5685 14.3393ZM15.5929 12.5093C15.5929 12.5093 15.5921 12.509 15.5907 12.5083C15.5923 12.5089 15.593 12.5092 15.5929 12.5093ZM15.5876 12.5064C15.5858 12.5052 15.585 12.5044 15.585 12.5043C15.585 12.5042 15.586 12.5048 15.5876 12.5064Z" fill="#E32D2D"/>`}},powerpoint:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#F3B7A8"/>
<path d="M7.17188 10.6836V12.75C7.17188 12.8881 7.05995 13 6.92188 13H6.25C6.11193 13 6 12.8881 6 12.75V7.25C6 7.11193 6.11193 7 6.25 7H8.21875C8.64583 7 9.02083 7.07812 9.34375 7.23438C9.66927 7.39062 9.91927 7.61328 10.0938 7.90234C10.2682 8.1888 10.3555 8.51562 10.3555 8.88281C10.3555 9.4401 10.1641 9.88021 9.78125 10.2031C9.40104 10.5234 8.8737 10.6836 8.19922 10.6836H7.17188ZM7.17188 9.73438H8.21875C8.52865 9.73438 8.76432 9.66146 8.92578 9.51562C9.08984 9.36979 9.17188 9.16146 9.17188 8.89062C9.17188 8.61198 9.08984 8.38672 8.92578 8.21484C8.76172 8.04297 8.53516 7.95443 8.24609 7.94922H7.17188V9.73438Z" fill="#E86D50"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#F3B7A8"/>
<path d="M10.6143 15.0649V17.75C10.6143 17.8881 10.5024 18 10.3643 18H9.25C9.11193 18 9 17.8881 9 17.75V10.25C9 10.1119 9.11193 10 9.25 10H12.0565C12.6448 10 13.1614 10.1074 13.6063 10.3223C14.0547 10.5371 14.3991 10.8433 14.6395 11.2407C14.8798 11.6346 15 12.084 15 12.5889C15 13.3551 14.7363 13.9603 14.209 14.4043C13.6852 14.8447 12.9587 15.0649 12.0296 15.0649H10.6143ZM10.6143 13.7598H12.0565C12.4834 13.7598 12.8081 13.6595 13.0305 13.459C13.2565 13.2585 13.3695 12.972 13.3695 12.5996C13.3695 12.2165 13.2565 11.9067 13.0305 11.6704C12.8045 11.4341 12.4924 11.3123 12.0942 11.3052H10.6143V13.7598Z" fill="#E86D50"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804ZM6 2H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2Z" fill="#F3B7A8"/>
<path d="M14.3438 20.9922V24.5C14.3438 24.7761 14.1199 25 13.8438 25H12.5C12.2239 25 12 24.7761 12 24.5V14.625C12 14.0727 12.4477 13.625 13 13.625H16.4375C17.2917 13.625 18.0417 13.7812 18.6875 14.0938C19.3385 14.4062 19.8385 14.8516 20.1875 15.4297C20.5365 16.0026 20.7109 16.6562 20.7109 17.3906C20.7109 18.5052 20.3281 19.3854 19.5625 20.0312C18.8021 20.6719 17.7474 20.9922 16.3984 20.9922H14.3438ZM14.3438 19.0938H16.4375C17.0573 19.0938 17.5286 18.9479 17.8516 18.6562C18.1797 18.3646 18.3438 17.9479 18.3438 17.4062C18.3438 16.849 18.1797 16.3984 17.8516 16.0547C17.5234 15.7109 17.0703 15.5339 16.4922 15.5234H14.3438V19.0938Z" fill="#E86D50"/>`}},signed:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#BFBFF3"/>
<path d="M6.89094 9.33512C6.41326 10.2278 6.04604 11.4046 5.99957 12.5187C5.98807 12.7946 5.75508 13.0089 5.47917 12.9974C5.20327 12.9859 4.98894 12.7529 5.00044 12.477C5.05398 11.1933 5.4702 9.87063 6.00925 8.86331C6.27892 8.35935 6.59 7.91418 6.92034 7.58739C7.23534 7.27577 7.64219 6.99896 8.10001 6.99896C8.274 6.99896 8.45432 7.05563 8.59869 7.19336C8.73198 7.32053 8.79228 7.47668 8.82108 7.60098C8.87586 7.83738 8.85132 8.11405 8.81312 8.3578C8.74311 8.80448 8.58437 9.37428 8.43233 9.92001L8.37315 10.1329C8.20895 10.726 8.06726 11.269 8.01988 11.6753C8.06849 11.5955 8.11819 11.5096 8.17192 11.4167C8.22517 11.3247 8.28242 11.2258 8.34647 11.1191C8.50737 10.8512 8.71299 10.5331 8.96483 10.3121C9.09527 10.1976 9.26122 10.0881 9.46376 10.0362C9.67692 9.98164 9.89854 9.99948 10.1112 10.0934C10.5613 10.2923 10.5988 10.7505 10.5907 10.9818C10.583 11.2024 10.528 11.4552 10.4856 11.6499L10.4691 11.7261C10.4445 11.8413 10.4277 11.931 10.4176 12.0001C10.5748 12 10.7783 11.9996 10.9668 11.9992L11.5012 11.9985C11.7769 11.9981 12.0008 12.221 12.0018 12.4967C12.0028 12.7733 11.7791 12.9981 11.5025 12.9985L10.9691 12.9992C10.6856 12.9998 10.3643 13.0004 10.2191 13C10.0306 12.9995 9.82064 12.9481 9.65285 12.7881C9.49124 12.634 9.43501 12.4416 9.41585 12.2963C9.3811 12.0328 9.44677 11.7252 9.49068 11.5195L9.50779 11.4397C9.53521 11.312 9.55823 11.2049 9.5732 11.1128C9.4641 11.2257 9.34314 11.4019 9.20374 11.634C9.16013 11.7066 9.11329 11.7874 9.06474 11.8711C8.95517 12.0601 8.83689 12.264 8.72738 12.4231C8.64508 12.5427 8.54508 12.6722 8.42695 12.7758C8.31242 12.8763 8.1266 13 7.88066 13C7.71657 13 7.54656 12.9593 7.39583 12.8548C7.24686 12.7515 7.15392 12.6118 7.09783 12.4759C6.99394 12.2242 6.99292 11.929 7.01478 11.6756C7.05998 11.152 7.23938 10.4802 7.4094 9.86608L7.4682 9.65435C7.62386 9.09464 7.76491 8.5875 7.82518 8.20295C7.83008 8.17172 7.8342 8.14262 7.83764 8.11557C7.77568 8.15934 7.70418 8.2186 7.62362 8.2983C7.38523 8.53413 7.12962 8.88909 6.89094 9.33512Z" fill="#6666CC"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#BFBFF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0966 13.7011C10.3918 14.7291 9.70789 16.3231 9.49589 18.328C9.45228 18.7405 9.083 19.0394 8.67109 18.9958C8.25918 18.9521 7.96062 18.5823 8.00423 18.1698C8.24223 15.919 9.01264 14.0868 9.85997 12.851C10.2811 12.2368 10.7391 11.7438 11.1864 11.4238C11.4093 11.2644 11.6552 11.1294 11.9137 11.0569C12.1711 10.9848 12.4983 10.9605 12.8175 11.1098C13.1672 11.2734 13.2784 11.5936 13.3127 11.7615C13.3482 11.935 13.3393 12.1063 13.3255 12.2347C13.2967 12.5005 13.2172 12.8183 13.1263 13.1339C13.0161 13.5163 12.8624 13.9826 12.7056 14.4579C12.6057 14.7608 12.5046 15.0674 12.4128 15.3583C12.1955 16.0466 12.0226 16.6689 11.9524 17.1412C12.0791 16.9912 12.2153 16.8134 12.3704 16.6111C12.3884 16.5876 12.4066 16.5638 12.4251 16.5397C12.6599 16.2337 12.9395 15.8733 13.2369 15.5914C13.5136 15.329 13.947 14.9945 14.5001 14.9945C14.7903 14.9945 15.1333 15.0951 15.3631 15.4109C15.5593 15.6806 15.5759 15.9825 15.57 16.1617C15.5588 16.497 15.44 16.8918 15.3576 17.166C15.3527 17.1821 15.348 17.1978 15.3434 17.213C15.311 17.3215 15.2833 17.4158 15.2604 17.4979H16.2503C16.6645 17.4979 17.0003 17.8342 17.0003 18.2489C17.0003 18.6637 16.6645 18.9999 16.2503 18.9999H14.7501C14.4598 18.9999 14.1168 18.8993 13.887 18.5836C13.6908 18.3139 13.6742 18.012 13.6802 17.8328C13.6864 17.6463 13.7259 17.4414 13.7739 17.2491C13.7224 17.3148 13.6694 17.3834 13.6146 17.4548C13.5933 17.4826 13.5715 17.511 13.5495 17.5398C13.3374 17.817 13.0956 18.133 12.8549 18.3811C12.7194 18.5208 12.5594 18.6656 12.3776 18.7789C12.1966 18.8918 11.9511 18.9999 11.6586 18.9999C11.4361 18.9999 11.2007 18.9469 10.9882 18.8062C10.7765 18.6661 10.641 18.4745 10.5582 18.2856C10.406 17.9386 10.4049 17.5404 10.4334 17.216C10.4927 16.5413 10.7353 15.6889 10.9825 14.9057C11.0892 14.5675 11.1963 14.2435 11.2976 13.9367C11.3962 13.6385 11.4893 13.3566 11.5715 13.0939C11.4201 13.2612 11.2596 13.4633 11.0966 13.7011Z" fill="#6666CC"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8099 22.0916C14.0807 23.2932 13.5 24.8708 13.5 26.25C13.5 26.6642 13.1642 27 12.75 27C12.3358 27 12 26.6642 12 26.25C12 24.5092 12.7093 22.6618 13.5276 21.3134C13.9389 20.6357 14.4027 20.0421 14.8621 19.6322C15.0905 19.4285 15.345 19.2455 15.6164 19.1305C15.8835 19.0172 16.2443 18.939 16.6166 19.0753C17.2215 19.2945 17.2933 19.8964 17.2945 20.1608C17.296 20.4716 17.2187 20.8231 17.1281 21.1482C16.9833 21.6682 16.7498 22.302 16.5231 22.9171C16.4618 23.0835 16.4009 23.2485 16.3425 23.4095C16.0648 24.1751 15.8424 24.8471 15.7681 25.3269C15.8 25.2952 15.8349 25.2576 15.8726 25.2131C16.0956 24.9508 16.3142 24.5758 16.5479 24.1365C16.5971 24.044 16.6478 23.9469 16.6996 23.8478C16.8741 23.5135 17.0605 23.1568 17.2408 22.8774C17.3598 22.6932 17.5064 22.493 17.6839 22.3336C17.8574 22.1779 18.1428 21.9885 18.522 22.0003C18.7092 22.0055 18.9013 22.0607 19.0713 22.1818C19.2366 22.2996 19.3396 22.4501 19.4031 22.5832C19.5199 22.8282 19.542 23.097 19.5459 23.29C19.5533 23.6499 19.4953 24.0981 19.446 24.4798C19.4406 24.5215 19.4353 24.5624 19.4302 24.6024C19.3985 24.8515 19.3732 25.0693 19.3601 25.2534C19.4085 25.1979 19.4632 25.1301 19.5257 25.0475C19.5452 25.0217 19.5665 24.993 19.5894 24.9622C19.7011 24.812 19.8503 24.6114 20.0052 24.4555C20.2017 24.258 20.5313 24 21 24C21.2859 24 21.4912 24.148 21.6049 24.2823C21.7018 24.3968 21.7464 24.514 21.7655 24.5689C21.8032 24.6779 21.8227 24.7974 21.8327 24.858L21.8335 24.8633C21.8367 24.883 21.8398 24.9021 21.8428 24.9206C21.8649 25.0575 21.8819 25.163 21.9163 25.2691C21.9531 25.3829 21.9905 25.4292 22.012 25.4477C22.0212 25.4558 22.0719 25.5 22.2454 25.5H23.25C23.6642 25.5 24 25.8358 24 26.25C24 26.6642 23.6642 27 23.25 27H22.2454C21.7626 27 21.3505 26.8582 21.0322 26.5835C20.8506 26.4268 20.7225 26.2467 20.6308 26.0714C20.3423 26.4403 19.8305 27 19 27C18.6128 27 18.2882 26.8135 18.0903 26.5109C17.9269 26.2609 17.8788 25.9771 17.861 25.7699C17.8354 25.4707 17.8604 25.122 17.896 24.7961C17.8881 24.811 17.8801 24.8259 17.8721 24.841C17.6383 25.2805 17.3544 25.7861 17.0155 26.1847C16.6871 26.571 16.1859 27 15.5 27C15.2816 27 15.0457 26.9534 14.829 26.8197C14.6083 26.6836 14.4622 26.4908 14.3736 26.2904C14.2129 25.9271 14.2296 25.5148 14.2721 25.1929C14.3608 24.5207 14.6524 23.6699 14.9325 22.898C14.999 22.7144 15.0654 22.5342 15.1302 22.3584C15.3122 21.8639 15.4815 21.4043 15.6064 21.0045C15.354 21.2798 15.0787 21.6487 14.8099 22.0916Z" fill="#6666CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804ZM6 2H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2Z" fill="#BFBFF3"/>`}},text:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 8C5.33579 8 5 8.33579 5 8.75C5 9.16421 5.33579 9.5 5.75 9.5H10.25C10.6642 9.5 11 9.16421 11 8.75C11 8.33579 10.6642 8 10.25 8H5.75ZM5.75 11C5.33579 11 5 11.3358 5 11.75C5 12.1642 5.33579 12.5 5.75 12.5H8.25C8.66421 12.5 9 12.1642 9 11.75C9 11.3358 8.66421 11 8.25 11H5.75Z" fill="#98A1B2"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.75C7 11.3358 7.33579 11 7.75 11H16.25C16.6642 11 17 11.3358 17 11.75C17 12.1642 16.6642 12.5 16.25 12.5H7.75C7.33579 12.5 7 12.1642 7 11.75ZM7 14.75C7 14.3358 7.33579 14 7.75 14H16.25C16.6642 14 17 14.3358 17 14.75C17 15.1642 16.6642 15.5 16.25 15.5H7.75C7.33579 15.5 7 15.1642 7 14.75ZM7.75 17C7.33579 17 7 17.3358 7 17.75C7 18.1642 7.33579 18.5 7.75 18.5H12.25C12.6642 18.5 13 18.1642 13 17.75C13 17.3358 12.6642 17 12.25 17H7.75Z" fill="#98A1B2"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#CCD2DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C9 15.4477 9.44772 15 10 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H10C9.44772 17 9 16.5523 9 16ZM9 20C9 19.4477 9.44772 19 10 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H10C9.44772 21 9 20.5523 9 20ZM10 23C9.44772 23 9 23.4477 9 24C9 24.5523 9.44772 25 10 25H18C18.5523 25 19 24.5523 19 24C19 23.4477 18.5523 23 18 23H10Z" fill="#98A1B2"/>`}},video:{16:{viewBox:"0 0 16 16",paths:`<path d="M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5Z" fill="#ADBEFF"/>
<path d="M4 3H3V4H4V3Z" fill="#ADBEFF"/>
<path d="M4 12H3V13H4V12Z" fill="#ADBEFF"/>
<path d="M5.25 3H6.25V4H5.25V3Z" fill="#ADBEFF"/>
<path d="M6.25 12H5.25V13H6.25V12Z" fill="#ADBEFF"/>
<path d="M7.5 3H8.5V4H7.5V3Z" fill="#ADBEFF"/>
<path d="M8.5 12H7.5V13H8.5V12Z" fill="#ADBEFF"/>
<path d="M9.75 3H10.75V4H9.75V3Z" fill="#ADBEFF"/>
<path d="M10.75 12H9.75V13H10.75V12Z" fill="#ADBEFF"/>
<path d="M12 3H13V4H12V3Z" fill="#ADBEFF"/>
<path d="M13 12H12V13H13V12Z" fill="#ADBEFF"/>
<path d="M10.7649 7.57576C11.0784 7.77153 11.0784 8.22843 10.7649 8.4242L6.76383 10.9229C6.43115 11.1307 6 10.8913 6 10.4987V5.50122C6 5.10869 6.43115 4.86924 6.76383 5.07701L10.7649 7.57576Z" fill="#5C7CFA"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z" fill="#ADBEFF"/>
<path d="M14.7649 11.5758C15.0784 11.7715 15.0784 12.2284 14.7649 12.4242L10.7638 14.9229C10.4312 15.1307 10 14.8913 10 14.4987V9.50123C10 9.10869 10.4311 8.86924 10.7638 9.07701L14.7649 11.5758Z" fill="#5C7CFA"/>
<path d="M7 5.5C7 5.22386 6.77614 5 6.5 5H5.5C5.22386 5 5 5.22386 5 5.5V6.5C5 6.77614 5.22386 7 5.5 7H6.5C6.77614 7 7 6.77614 7 6.5V5.5Z" fill="#ADBEFF"/>
<path d="M7 17.5C7 17.2239 6.77614 17 6.5 17H5.5C5.22386 17 5 17.2239 5 17.5V18.5C5 18.7761 5.22386 19 5.5 19H6.5C6.77614 19 7 18.7761 7 18.5V17.5Z" fill="#ADBEFF"/>
<path d="M10 17.5C10 17.2239 9.77614 17 9.5 17H8.5C8.22386 17 8 17.2239 8 17.5V18.5C8 18.7761 8.22386 19 8.5 19H9.5C9.77614 19 10 18.7761 10 18.5V17.5Z" fill="#ADBEFF"/>
<path d="M11 17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V18.5C13 18.7761 12.7761 19 12.5 19H11.5C11.2239 19 11 18.7761 11 18.5V17.5Z" fill="#ADBEFF"/>
<path d="M16 17.5C16 17.2239 15.7761 17 15.5 17H14.5C14.2239 17 14 17.2239 14 17.5V18.5C14 18.7761 14.2239 19 14.5 19H15.5C15.7761 19 16 18.7761 16 18.5V17.5Z" fill="#ADBEFF"/>
<path d="M17 17.5C17 17.2239 17.2239 17 17.5 17H18.5C18.7761 17 19 17.2239 19 17.5V18.5C19 18.7761 18.7761 19 18.5 19H17.5C17.2239 19 17 18.7761 17 18.5V17.5Z" fill="#ADBEFF"/>
<path d="M8 5.5C8 5.22386 8.22386 5 8.5 5H9.5C9.77614 5 10 5.22386 10 5.5V6.5C10 6.77614 9.77614 7 9.5 7H8.5C8.22386 7 8 6.77614 8 6.5V5.5Z" fill="#ADBEFF"/>
<path d="M13 5.5C13 5.22386 12.7761 5 12.5 5H11.5C11.2239 5 11 5.22386 11 5.5V6.5C11 6.77614 11.2239 7 11.5 7H12.5C12.7761 7 13 6.77614 13 6.5V5.5Z" fill="#ADBEFF"/>
<path d="M14 5.5C14 5.22386 14.2239 5 14.5 5H15.5C15.7761 5 16 5.22386 16 5.5V6.5C16 6.77614 15.7761 7 15.5 7H14.5C14.2239 7 14 6.77614 14 6.5V5.5Z" fill="#ADBEFF"/>
<path d="M19 5.5C19 5.22386 18.7761 5 18.5 5H17.5C17.2239 5 17 5.22386 17 5.5V6.5C17 6.77614 17.2239 7 17.5 7H18.5C18.7761 7 19 6.77614 19 6.5V5.5Z" fill="#ADBEFF"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M3 5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 4H5C4.44772 4 4 4.44772 4 5V27C4 27.5523 4.44772 28 5 28H27C27.5523 28 28 27.5523 28 27V5C28 4.44772 27.5523 4 27 4ZM5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5Z" fill="#ADBEFF"/>
<path d="M19.5149 15.1483C20.1617 15.5362 20.1617 16.4731 19.5149 16.861L14.5131 19.8608C13.8472 20.2602 13 19.7807 13 19.0044V13.0048C13 12.2286 13.8472 11.7491 14.5131 12.1485L19.5149 15.1483Z" fill="#5C7CFA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5.5C5 5.22386 5.22386 5 5.5 5H6.5C6.77614 5 7 5.22386 7 5.5V6.5C7 6.77614 6.77614 7 6.5 7H5.5C5.22386 7 5 6.77614 5 6.5V5.5ZM9 5.5C9 5.22386 9.22386 5 9.5 5H10.5C10.7761 5 11 5.22386 11 5.5V6.5C11 6.77614 10.7761 7 10.5 7H9.5C9.22386 7 9 6.77614 9 6.5V5.5ZM13.5 5C13.2239 5 13 5.22386 13 5.5V6.5C13 6.77614 13.2239 7 13.5 7H14.5C14.7761 7 15 6.77614 15 6.5V5.5C15 5.22386 14.7761 5 14.5 5H13.5ZM17 5.5C17 5.22386 17.2239 5 17.5 5H18.5C18.7761 5 19 5.22386 19 5.5V6.5C19 6.77614 18.7761 7 18.5 7H17.5C17.2239 7 17 6.77614 17 6.5V5.5ZM21.5 5C21.2239 5 21 5.22386 21 5.5V6.5C21 6.77614 21.2239 7 21.5 7H22.5C22.7761 7 23 6.77614 23 6.5V5.5C23 5.22386 22.7761 5 22.5 5H21.5ZM25 5.5C25 5.22386 25.2239 5 25.5 5H26.5C26.7761 5 27 5.22386 27 5.5V6.5C27 6.77614 26.7761 7 26.5 7H25.5C25.2239 7 25 6.77614 25 6.5V5.5ZM5 25.5C5 25.2239 5.22386 25 5.5 25H6.5C6.77614 25 7 25.2239 7 25.5V26.5C7 26.7761 6.77614 27 6.5 27H5.5C5.22386 27 5 26.7761 5 26.5V25.5ZM9 25.5C9 25.2239 9.22386 25 9.5 25H10.5C10.7761 25 11 25.2239 11 25.5V26.5C11 26.7761 10.7761 27 10.5 27H9.5C9.22386 27 9 26.7761 9 26.5V25.5ZM13.5 25C13.2239 25 13 25.2239 13 25.5V26.5C13 26.7761 13.2239 27 13.5 27H14.5C14.7761 27 15 26.7761 15 26.5V25.5C15 25.2239 14.7761 25 14.5 25H13.5ZM17 25.5C17 25.2239 17.2239 25 17.5 25H18.5C18.7761 25 19 25.2239 19 25.5V26.5C19 26.7761 18.7761 27 18.5 27H17.5C17.2239 27 17 26.7761 17 26.5V25.5ZM21.5 25C21.2239 25 21 25.2239 21 25.5V26.5C21 26.7761 21.2239 27 21.5 27H22.5C22.7761 27 23 26.7761 23 26.5V25.5C23 25.2239 22.7761 25 22.5 25H21.5ZM25 25.5C25 25.2239 25.2239 25 25.5 25H26.5C26.7761 25 27 25.2239 27 25.5V26.5C27 26.7761 26.7761 27 26.5 27H25.5C25.2239 27 25 26.7761 25 26.5V25.5Z" fill="#ADBEFF"/>`}},word:{16:{viewBox:"0 0 16 16",paths:`<path d="M2 1.5C2 0.671573 2.67157 0 3.5 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 5.22386 12.7761 5 12.5 5H9.5C9.22386 5 9 4.77614 9 4.5V1.5C9 1.22386 8.77614 1 8.5 1H6H3.5C3.22386 1 3 1.22386 3 1.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8V5.5ZM14 8V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V1.5C2 0.671573 2.67157 0 3.5 0H6H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L13.4142 3.41421C13.7893 3.78929 14 4.29799 14 4.82843V8Z" fill="#AADAF9"/>
<path d="M9.4375 11.3594L10.1668 7.20675C10.1878 7.0872 10.2917 7 10.413 7H11.0631C11.2218 7 11.3404 7.14607 11.3077 7.30145L10.1511 12.8014C10.1268 12.9172 10.0247 13 9.90648 13H9.12615C9.01085 13 8.9105 12.9211 8.88324 12.8091L8.00391 9.19531L7.12457 12.8091C7.09731 12.9211 6.99697 13 6.88166 13H6.10133C5.98309 13 5.88102 12.9172 5.85668 12.8014L4.70011 7.30145C4.66744 7.14607 4.78599 7 4.94476 7H5.59502C5.7163 7 5.82008 7.08704 5.8412 7.20647L6.57422 11.3516L7.4692 7.19735C7.49401 7.08221 7.59581 7 7.71359 7H8.30178C8.41967 7 8.52155 7.08237 8.54623 7.19765L9.4375 11.3594Z" fill="#1075DC"/>`},24:{viewBox:"0 0 24 24",paths:`<path d="M4 4C4 2.89543 4.89543 2 6 2H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 8.44772 18.5523 8 18 8H15C14.4477 8 14 7.55228 14 7V4C14 3.44772 13.5523 3 13 3H12H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V10V9ZM20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12H13.3431C14.404 2 15.4214 2.42143 16.1716 3.17157L18.8284 5.82843C19.5786 6.57857 20 7.59599 20 8.65685V10Z" fill="#AADAF9"/>
<path d="M13.9766 15.7441L14.9917 10.2049C15.0135 10.0862 15.117 10 15.2376 10H16.3252C16.4846 10 16.6033 10.1472 16.5695 10.303L14.9431 17.803C14.9182 17.918 14.8164 18 14.6988 18H13.4748C13.3595 18 13.2591 17.9211 13.2319 17.8091L12.0054 12.7686L10.7789 17.8091C10.7516 17.9211 10.6513 18 10.536 18H9.31195C9.19429 18 9.09256 17.918 9.06763 17.803L7.44119 10.303C7.40741 10.1472 7.5261 10 7.68551 10H8.77336C8.89393 10 8.99733 10.0861 9.01921 10.2046L10.0396 15.7334L11.2847 10.1952C11.3104 10.0811 11.4117 10 11.5286 10H12.4926C12.6096 10 12.711 10.0812 12.7366 10.1955L13.9766 15.7441Z" fill="#1075DC"/>`},32:{viewBox:"0 0 32 32",paths:`<path d="M4 3C4 1.89543 4.89543 1 6 1H18.5147C20.106 1 21.6321 1.63214 22.7574 2.75736L26.2426 6.24264C27.3679 7.36786 28 8.89398 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18.5H18.5147C18.8078 2 19.0982 2.02573 19.3829 2.07593C19.7452 2.22622 20 2.58335 20 3V8C20 8.55228 20.4477 9 21 9H26C26.4166 9 26.7738 9.25482 26.9241 9.6171C26.9743 9.90183 27 10.1922 27 10.4853V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3C5 2.44772 5.44772 2 6 2ZM27.9804 10C27.9934 10.1608 28 10.3227 28 10.4853V29C28 30.1046 27.1046 31 26 31H6C4.89543 31 4 30.1046 4 29V3C4 1.89543 4.89543 1 6 1H18.5H18.5147C20.0951 1 21.6113 1.62353 22.7342 2.73435C22.742 2.742 22.7497 2.74967 22.7574 2.75736L26.2426 6.24264L26.5858 6.58579C27.4913 7.49129 28 8.71942 28 10H27.9804Z" fill="#AADAF9"/>
<path d="M18.875 21.5385L20.3324 13.4117C20.3751 13.1734 20.5825 13 20.8246 13H22.1261C22.4436 13 22.6808 13.2921 22.6154 13.6029L20.3023 24.6029C20.2536 24.8343 20.0494 25 19.813 25H18.2572C18.0243 25 17.8223 24.8393 17.77 24.6124L16.0078 16.9725L14.2457 24.6124C14.1933 24.8393 13.9913 25 13.7584 25H12.2027C11.9662 25 11.762 24.8343 11.7134 24.6029L9.40022 13.6029C9.33487 13.2921 9.57198 13 9.88952 13H11.1916C11.4335 13 11.6406 13.1731 11.6836 13.4111L13.1484 21.522L14.9371 13.3926C14.9875 13.1633 15.1906 13 15.4254 13H16.6053C16.8403 13 17.0436 13.1636 17.0938 13.3932L18.875 21.5385Z" fill="#1075DC"/>`}}},h0=[32,24,16];function ge(l,e){const t=he[l];if(!t)return null;if(t[e])return t[e];for(const o of h0)if(t[o])return t[o];return null}var g0=Object.defineProperty,fe=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&g0(e,t,i),i};const P4=class P4 extends g{constructor(){super(...arguments),this.type="pdf",this.size=32}render(){const e=ge(this.type,this.size);return e?s`
      <svg
        width=${this.size}
        height=${this.size}
        viewBox=${e.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="${this.type} file"
        role="img"
      >
        ${p0(e.paths)}
      </svg>
    `:h}};P4.styles=f`
    :host { display: inline-flex; align-items: center; justify-content: center; }
    svg { display: block; }
  `;let n2=P4;fe([a()],n2.prototype,"type"),fe([a({type:Number})],n2.prototype,"size"),customElements.get("anduin-file-icon")||customElements.define("anduin-file-icon",n2);var f0=Object.defineProperty,P1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&f0(e,t,i),i};const ve={gray:"info",primary:"infoCircleLine",success:"checkCircle",warning:"warning",danger:"error"},v0="anduin-toast:dismiss",O4=class O4 extends g{constructor(){super(...arguments),this.variant="gray",this.heading="",this.description="",this._dismissing=!1}dismiss(){var t;if(this._dismissing)return;this._dismissing=!0;const e=o=>{var i;o.propertyName==="opacity"&&((i=this._toastEl)==null||i.removeEventListener("transitionend",e),this.dispatchEvent(new CustomEvent(v0,{bubbles:!0,composed:!0})))};(t=this._toastEl)==null||t.addEventListener("transitionend",e)}_onClose(){this.dismiss()}render(){const e=ve[this.variant]??ve.gray;return s`
      <div
        class="toast toast--${this.variant} ${this._dismissing?"toast--dismissing":""}"
        part="toast"
        role="alert"
        aria-live="assertive"
      >
        <div class="toast__icon toast__icon--${this.variant}">
          <anduin-icon name=${e} size="16"></anduin-icon>
        </div>
        <div class="toast__body">
          ${this.heading?s`<div class="toast__title">${this.heading}</div>`:""}
          ${this.description?s`<div class="toast__description">${this.description}</div>`:s`<div class="toast__description"><slot></slot></div>`}
        </div>
        <button
          class="toast__close"
          aria-label="Dismiss"
          @click=${this._onClose}
        >
          <anduin-icon name="crossSmall" size="16"></anduin-icon>
        </button>
      </div>
    `}};O4.styles=f`
    :host {
      display: block;
      font-family: var(--font-sans);
      pointer-events: auto;
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translateX(-12px) scale(0.97);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    .toast {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 4px;
      border-radius: 12px;
      box-shadow: var(
        --shadow-4,
        0px 4px 8px rgba(29, 41, 57, 0.08),
        0px 16px 48px rgba(29, 41, 57, 0.16)
      );
      min-width: 300px;
      max-width: 420px;
      width: max-content;
      opacity: 1;
      transform: translateX(0) scale(1);
      transition:
        opacity 200ms ease,
        transform 200ms ease;
      animation: toast-in 220ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .toast--dismissing {
      opacity: 0;
      transform: translateX(-12px) scale(0.97);
    }

    /* Light surface for all variants */
    .toast {
      background: var(--color-gray-0, #ffffff);
    }

    .toast__icon {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: stretch;
      padding: 12px;
      border-radius: 8px;
    }
    .toast__icon--gray {
      color: var(--color-gray-6, #475467);
      background: var(--color-gray-2, #eaecf0);
    }
    .toast__icon--primary {
      color: var(--color-primary-4, #444ce7);
      background: var(--color-primary-1, #eef4ff);
    }
    .toast__icon--success {
      color: var(--color-success-4, #17b26a);
      background: var(--color-success-1, #dcfae6);
    }
    .toast__icon--warning {
      color: var(--color-warning-4, #dc6803);
      background: var(--color-warning-1, #fef0c7);
    }
    .toast__icon--danger {
      color: var(--color-danger-4, #d92d20);
      background: var(--color-danger-1, #fee4e2);
    }

    .toast__body {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      padding-top: 2px;
      padding-bottom: 2px;
      align-self: stretch;
      justify-content: center;
    }

    .toast__title {
      font-size: var(--text-13, 13px);
      font-weight: 500;
      color: var(--color-gray-9, #101828);
      line-height: 20px;
    }

    .toast__description {
      font-size: var(--text-12, 12px);
      font-weight: 400;
      color: var(--color-gray-7, #344054);
      line-height: 20px;
    }

    .toast__close {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background: none;
      border: none;
      cursor: pointer;
      border-radius: 8px;
      padding: 0;
      color: var(--color-gray-6, #475467);
    }

    .toast__close:hover {
      background: var(--color-gray-2, #eaecf0);
      color: var(--color-gray-9, #101828);
    }
    .toast__close:active {
      background: var(--color-gray-3, #d0d5dd);
    }
  `;let d1=O4;P1([a()],d1.prototype,"variant"),P1([a()],d1.prototype,"heading"),P1([a()],d1.prototype,"description"),P1([y()],d1.prototype,"_dismissing"),P1([z(".toast")],d1.prototype,"_toastEl"),customElements.get("anduin-toast")||customElements.define("anduin-toast",d1);const T4=class T4 extends g{constructor(){super(...arguments),this.position="bottom-left",this._toasts=[],this._nextId=0}show(e){const t=this._nextId++,o=e.position??this.position;this._toasts=[...this._toasts,{id:t,opts:{...e,position:o}}];const i=e.duration??4e3;return i>0&&setTimeout(()=>this._dismissById(t),i),t}dismiss(e){this._dismissById(e)}_dismissById(e){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`anduin-toast[data-id="${e}"]`);t?t.dismiss():this._removeById(e)}_removeById(e){this._toasts=this._toasts.filter(t=>t.id!==e)}_onDismiss(e,t){e.stopPropagation(),this._removeById(t)}render(){return s`
      <div class="toaster toaster--${this.position}" part="toaster">
        ${this._toasts.map(({id:e,opts:t})=>s`
            <anduin-toast
              data-id=${e}
              variant=${t.variant??"gray"}
              heading=${t.heading??""}
              description=${t.description??""}
              @anduin-toast:dismiss=${o=>this._onDismiss(o,e)}
            ></anduin-toast>
          `)}
      </div>
    `}};T4.styles=f`
    :host {
      display: contents;
      pointer-events: none;
    }

    .toaster {
      position: fixed;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
    }

    /* Vertical positioning */
    .toaster--top-left,
    .toaster--top-center,
    .toaster--top-right {
      top: 20px;
      flex-direction: column;
    }
    .toaster--bottom-left,
    .toaster--bottom-center,
    .toaster--bottom-right {
      bottom: 20px;
      flex-direction: column-reverse;
    }

    /* Horizontal positioning */
    .toaster--top-left,
    .toaster--bottom-left {
      left: 20px;
      align-items: flex-start;
    }
    .toaster--top-center,
    .toaster--bottom-center {
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
    }
    .toaster--top-right,
    .toaster--bottom-right {
      right: 20px;
      align-items: flex-end;
    }
  `;let l2=T4;P1([a()],l2.prototype,"position"),P1([y()],l2.prototype,"_toasts"),customElements.get("anduin-toaster")||customElements.define("anduin-toaster",l2);const m0={show(l){return b0(l.position).show(l)},success(l,e,t){return this.show({...t,variant:"success",heading:l,description:e})},danger(l,e,t){return this.show({...t,variant:"danger",heading:l,description:e})},warning(l,e,t){return this.show({...t,variant:"warning",heading:l,description:e})},primary(l,e,t){return this.show({...t,variant:"primary",heading:l,description:e})},gray(l,e,t){return this.show({...t,variant:"gray",heading:l,description:e})}},W5=new Map;function b0(l="bottom-left"){if(W5.has(l))return W5.get(l);const e=document.createElement("anduin-toaster");return e.position=l,document.body.appendChild(e),W5.set(l,e),e}var H0=Object.defineProperty,me=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&H0(e,t,i),i};const be="anduin-switcher:change",I4=class I4 extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}onChange(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent(be,{detail:this.checked,bubbles:!0,composed:!0}))}render(){return s`
      <label class="${this.disabled?"is-disabled":""}">
        <div class="track${this.checked?" track--checked":""}" part="track">
          <input
            class="switcher__input"
            type="checkbox"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this.onChange}
          />
          <div class="thumb${this.checked?" thumb--checked":""}"></div>
        </div>
        <span class="switcher__label"><slot></slot></span>
      </label>
    `}};I4.styles=f`
    :host { display: inline-flex; font-family: var(--font-sans); }

    label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    label.is-disabled {
      cursor: default;
      opacity: 0.4;
    }

    .track {
      position: relative;
      width: 28px;
      height: 16px;
      border-radius: 999px;
      background: var(--color-gray-4, #cdd3da);
      flex-shrink: 0;
      transition: background 0.2s ease-in-out;
    }
    .track--checked {
      background: var(--color-primary-4, #106ef6);
    }
    .track:focus-within {
      outline: 2px solid #acdbf8;
      outline-offset: 2px;
    }

    .switcher__input {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      margin: 0;
    }
    .switcher__input:disabled { cursor: default; }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ffffff;
      pointer-events: none;
      transition: transform 0.2s ease-in-out;
    }
    .thumb--checked {
      transform: translateX(12px);
    }

    .switcher__label {
      font-size: var(--text-13, 13px);
      color: var(--color-gray-8, #101828);
      line-height: 20px;
    }
  `;let r2=I4;me([a({type:Boolean})],r2.prototype,"checked"),me([a({type:Boolean})],r2.prototype,"disabled"),customElements.get("anduin-switcher")||customElements.define("anduin-switcher",r2);var y0=Object.defineProperty,D=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&y0(e,t,i),i};const Y5="anduin-dropdown:change",F4=class F4 extends g{constructor(){super(...arguments),this.value="",this.placeholder="Select...",this.options=[],this.icon="",this.searchable=!0,this.disabled=!1,this.placement="bottom-start",this.appearance="filled",this.variant="gray0",this.size="default",this.fullWidth=!1,this._open=!1,this._query="",this._onOutsideClick=e=>{var t;!this.contains(e.target)&&!((t=this.shadowRoot)!=null&&t.contains(e.target))&&(this._open=!1,this._query="")},this._onScrollOrResize=()=>{this._open&&this._updatePosition()}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOutsideClick),window.addEventListener("scroll",this._onScrollOrResize,{passive:!0,capture:!0}),window.addEventListener("resize",this._onScrollOrResize)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOutsideClick),window.removeEventListener("scroll",this._onScrollOrResize,{capture:!0}),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){e.has("_open")&&this._open&&requestAnimationFrame(()=>{var t,o;if(this._updatePosition(),this.searchable){const i=(o=(t=this._searchEl)==null?void 0:t.shadowRoot)==null?void 0:o.querySelector("input");i==null||i.focus()}})}_onTriggerClick(){this.disabled||(this._open=!this._open,this._open||(this._query=""))}_onKeyDown(e){var t;e.key==="Escape"&&(this._open=!1,this._query="",(t=this._triggerEl)==null||t.focus())}_onClear(e){e.stopPropagation(),this.value="",this.dispatchEvent(new CustomEvent(Y5,{detail:"",bubbles:!0,composed:!0}))}_selectOption(e){this.value=e.value,this._open=!1,this._query="",this.dispatchEvent(new CustomEvent(Y5,{detail:e.value,bubbles:!0,composed:!0}))}_updatePosition(){const e=this._triggerEl,t=this._panelEl;if(!e||!t)return;const o=e.getBoundingClientRect(),i=t.style.transform;t.style.transform="none";const n=t.getBoundingClientRect();t.style.transform=i;const r=t.querySelector(".panel__inner");r&&(r.style.minWidth=`${o.width}px`);const d=t.getBoundingClientRect(),C=4,u=window.innerWidth,p=window.innerHeight,v=8,H=p-o.bottom-C,b=o.top-C,L=d.height<=H||H>=b?o.bottom+C:o.top-d.height-C;let m=o.left;this.placement==="bottom-end"?m=o.right-d.width:this.placement==="bottom"&&(m=o.left+o.width/2-d.width/2),m=Math.max(v,Math.min(m,u-d.width-v));const w=Math.max(v,Math.min(L,p-d.height-v));t.style.transform=`translate(${Math.round(m-n.left)}px, ${Math.round(w-n.top)}px)`}get _filteredOptions(){if(!this._query)return this.options;const e=this._query.toLowerCase();return this.options.filter(t=>t.label.toLowerCase().includes(e))}render(){const e=this.options.find(n=>n.value===this.value),t=(e==null?void 0:e.label)??"",o=e?e.icon??"":this.icon,i=this._filteredOptions;return s`
      <button
        class="trigger trigger--${this.appearance} trigger--${this.variant}${this.size==="small"?" trigger--small":""}${this.value?" has-value":""}"
        part="trigger"
        ?disabled=${this.disabled}
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        @click=${this._onTriggerClick}
        @keydown=${this._onKeyDown}
      >
        ${o&&t?s`<anduin-icon name="${o}" size="16"></anduin-icon>`:h}
        <span class="trigger__label${t?"":" trigger__label--placeholder"}">${t||this.placeholder}</span>
        <span class="trigger__caret">
          <span class="trigger__chevron">
            <anduin-icon name="caretDown" size="16"></anduin-icon>
          </span>
          ${this.value&&!this.disabled?s`
            <span class="trigger__clear" @click=${this._onClear}>
              <anduin-icon name="crossSmall" size="16"></anduin-icon>
            </span>
          `:h}
        </span>
      </button>

      <div class="panel${this._open?" panel--open":""}" part="panel" @keydown=${this._onKeyDown}>
        <div class="panel__inner" role="listbox">
          ${this.searchable?s`
            <div class="search-wrap">
              <anduin-input
                placeholder="Search ..."
                .value=${this._query}
                @anduin-input:change=${n=>{this._query=n.detail}}
              ></anduin-input>
            </div>
          `:h}
          <div class="options">
            ${i.length?i.map(n=>s`
                  <div
                    class="option"
                    role="option"
                    aria-selected=${n.value===this.value}
                    @click=${()=>this._selectOption(n)}
                  >
                    <span class="option__check">
                      ${n.value===this.value?s`<anduin-icon name="checkSmall" size="16"></anduin-icon>`:h}
                    </span>
                    ${n.icon?s`<anduin-icon name="${n.icon}" size="16"></anduin-icon>`:h}
                    <span class="option__label">${n.label}</span>
                  </div>
                `):s`<div class="empty">No results</div>`}
          </div>
        </div>
      </div>
    `}};F4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    :host([full-width]) { display: block; width: 100%; }
    :host([full-width]) .trigger { width: 100%; }

    /* ── Trigger ───────────────────────────────────────────────── */
    .trigger {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      padding: 0 8px 0 12px;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      cursor: pointer;
      font-family: var(--font-sans);
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
      white-space: nowrap;
      user-select: none;
      box-sizing: border-box;
    }
    .trigger:disabled { opacity: 0.4; cursor: default; pointer-events: none; }
    .trigger__label { flex: 1; min-width: 0; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .trigger__label--placeholder { color: var(--color-gray-6, #667085); }

    /* filled */
    .trigger--filled { box-shadow: 0 1px 2px 0 rgba(29,41,57,0.07); }
    .trigger--filled.trigger--gray0  { color: var(--color-gray-8);  border-color: var(--color-gray-4);    background-color: var(--color-gray-0); }
    .trigger--filled.trigger--gray0:hover  { background-color: var(--color-gray-2); }
    .trigger--filled.trigger--gray0:active { background-color: var(--color-gray-3); }
    .trigger--filled.trigger--gray9  { color: var(--color-gray-0);  border-color: transparent;             background-color: var(--color-gray-7); }
    .trigger--filled.trigger--gray9:hover  { background-color: var(--color-gray-6); }
    .trigger--filled.trigger--gray9:active { background-color: var(--color-gray-8); }
    .trigger--filled.trigger--primary { color: var(--color-gray-0); border-color: transparent;             background-color: var(--color-primary-4); }
    .trigger--filled.trigger--primary:hover  { background-color: var(--color-primary-3); }
    .trigger--filled.trigger--primary:active { background-color: var(--color-primary-5); }
    .trigger--filled.trigger--danger  { color: var(--color-gray-0); border-color: transparent;             background-color: var(--color-danger-4); }
    .trigger--filled.trigger--danger:hover  { background-color: var(--color-danger-3); }
    .trigger--filled.trigger--danger:active { background-color: var(--color-danger-5); }
    .trigger--filled.trigger--success { color: var(--color-gray-0); border-color: transparent;             background-color: var(--color-success-4); }
    .trigger--filled.trigger--success:hover  { background-color: var(--color-success-3); }
    .trigger--filled.trigger--success:active { background-color: var(--color-success-5); }
    .trigger--filled.trigger--warning { color: var(--color-gray-8); border-color: transparent;             background-color: var(--color-warning-3); }
    .trigger--filled.trigger--warning:hover  { background-color: var(--color-warning-2); }
    .trigger--filled.trigger--warning:active { background-color: var(--color-warning-4); }

    /* outlined */
    .trigger--outlined.trigger--gray9   { border-color: var(--color-gray-4);    color: var(--color-gray-7);    background-color: transparent; }
    .trigger--outlined.trigger--gray9:hover  { background-color: var(--color-gray-3); }
    .trigger--outlined.trigger--gray9:active { background-color: var(--color-gray-4); }
    .trigger--outlined.trigger--gray0   { border-color: var(--color-gray-7);    color: var(--color-gray-4);    background-color: transparent; }
    .trigger--outlined.trigger--gray0:hover  { background-color: var(--color-gray-7); }
    .trigger--outlined.trigger--gray0:active { background-color: var(--color-gray-3); }
    .trigger--outlined.trigger--primary { border-color: var(--color-primary-3); color: var(--color-primary-4); background-color: transparent; }
    .trigger--outlined.trigger--primary:hover  { background-color: var(--color-primary-1); }
    .trigger--outlined.trigger--primary:active { background-color: var(--color-primary-2); }
    .trigger--outlined.trigger--danger  { border-color: var(--color-danger-3);  color: var(--color-danger-5);  background-color: transparent; }
    .trigger--outlined.trigger--danger:hover  { background-color: var(--color-danger-1); }
    .trigger--outlined.trigger--danger:active { background-color: var(--color-danger-2); }
    .trigger--outlined.trigger--success { border-color: var(--color-success-3); color: var(--color-success-5); background-color: transparent; }
    .trigger--outlined.trigger--success:hover  { background-color: var(--color-success-1); }
    .trigger--outlined.trigger--success:active { background-color: var(--color-success-2); }
    .trigger--outlined.trigger--warning { border-color: var(--color-warning-3); color: var(--color-warning-5); background-color: transparent; }
    .trigger--outlined.trigger--warning:hover  { background-color: var(--color-warning-1); }
    .trigger--outlined.trigger--warning:active { background-color: var(--color-warning-2); }

    /* plain */
    .trigger--plain.trigger--gray9   { border-color: transparent; color: var(--color-gray-7);    background-color: transparent; }
    .trigger--plain.trigger--gray9:hover  { background-color: var(--color-gray-3); }
    .trigger--plain.trigger--gray9:active { background-color: var(--color-gray-4); }
    .trigger--plain.trigger--gray0   { border-color: transparent; color: var(--color-gray-4);    background-color: transparent; }
    .trigger--plain.trigger--gray0:hover  { background-color: var(--color-gray-7); }
    .trigger--plain.trigger--gray0:active { background-color: var(--color-gray-8); }
    .trigger--plain.trigger--primary { border-color: transparent; color: var(--color-primary-4); background-color: transparent; }
    .trigger--plain.trigger--primary:hover  { background-color: var(--color-primary-1); }
    .trigger--plain.trigger--primary:active { background-color: var(--color-primary-2); }
    .trigger--plain.trigger--danger  { border-color: transparent; color: var(--color-danger-5);  background-color: transparent; }
    .trigger--plain.trigger--danger:hover  { background-color: var(--color-danger-1); }
    .trigger--plain.trigger--danger:active { background-color: var(--color-danger-2); }
    .trigger--plain.trigger--success { border-color: transparent; color: var(--color-success-5); background-color: transparent; }
    .trigger--plain.trigger--success:hover  { background-color: var(--color-success-1); }
    .trigger--plain.trigger--success:active { background-color: var(--color-success-2); }
    .trigger--plain.trigger--warning { border-color: transparent; color: var(--color-warning-5); background-color: transparent; }
    .trigger--plain.trigger--warning:hover  { background-color: var(--color-warning-1); }
    .trigger--plain.trigger--warning:active { background-color: var(--color-warning-2); }
    .trigger__caret {
      position: relative;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .trigger--small { height: 24px; padding: 0 6px 0 8px; font-size: 11px; font-weight: 500; }

    .trigger__chevron { display: flex; transition: opacity 100ms; color: var(--color-gray-7, #344054); }
    .trigger__clear {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 100ms;
      color: var(--color-gray-6, #667085);
      border-radius: 3px;
    }
    .trigger__clear:hover { color: var(--color-gray-9, #101828); background-color: var(--color-gray-3); }
    .trigger__clear:active { background-color: var(--color-gray-4); }
    .trigger__caret:hover .trigger__chevron { opacity: 0; }
    .trigger__caret:hover .trigger__clear { opacity: 1; }

    /* ── Panel ─────────────────────────────────────────────────── */
    .panel {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 200;
      visibility: hidden;
      pointer-events: none;
    }
    .panel--open { visibility: visible; pointer-events: auto; }

    .panel__inner {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0px 2px 8px 0px rgba(29, 41, 57, 0.08),
                  0px 8px 24px 0px rgba(29, 41, 57, 0.12);
      min-width: 200px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: scale(0.97) translateY(-4px);
      transform-origin: top left;
      transition: opacity 150ms ease, transform 150ms ease;
    }
    .panel--open .panel__inner {
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    /* ── Search ────────────────────────────────────────────────── */
    .search-wrap { padding: 8px 8px 4px; }
    .search-wrap anduin-input { display: block; }

    /* ── Options ───────────────────────────────────────────────── */
    .options {
      overflow-y: auto;
      max-height: 280px;
      padding: 4px 8px 8px;
    }
    .option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 13px;
      line-height: 20px;
      color: var(--color-gray-9, #101828);
      user-select: none;
    }
    .option:hover  { background: var(--color-gray-2, #f2f4f7); }
    .option:active { background: var(--color-gray-3, #e4e7ec); }
    .option__check { flex-shrink: 0; width: 16px; display: flex; align-items: center; color: var(--color-gray-7, #344054); }
    .option__label { flex: 1; min-width: 0; }

    .empty {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--color-gray-5, #98a1b2);
      text-align: center;
    }
  `;let k=F4;D([a()],k.prototype,"value"),D([a()],k.prototype,"placeholder"),D([a({attribute:!1})],k.prototype,"options"),D([a()],k.prototype,"icon"),D([a({type:Boolean})],k.prototype,"searchable"),D([a({type:Boolean})],k.prototype,"disabled"),D([a()],k.prototype,"placement"),D([a()],k.prototype,"appearance"),D([a()],k.prototype,"variant"),D([a()],k.prototype,"size"),D([a({type:Boolean,attribute:"full-width",reflect:!0})],k.prototype,"fullWidth"),D([y()],k.prototype,"_open"),D([y()],k.prototype,"_query"),D([z(".trigger")],k.prototype,"_triggerEl"),D([z(".panel")],k.prototype,"_panelEl"),D([z("anduin-input")],k.prototype,"_searchEl"),customElements.get("anduin-dropdown")||customElements.define("anduin-dropdown",k);var _0=Object.defineProperty,y1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&_0(e,t,i),i};const e5="anduin-close",He="anduin-after-close",L0=300,ye=250,V0=new Map([["320",320],["360",360],["400",400],["640",640]]),N4=class N4 extends g{constructor(){super(...arguments),this.open=!1,this.heading="",this.hideHeader=!1,this.hideFooter=!1,this.defaultWidth="320",this.allowInteractOutside=!1,this._leaving=!1,this._width=320,this._resizing=!1,this._startX=0,this._startWidth=0,this._onResizeStart=e=>{this._resizing=!0,this._startX=e.clientX,this._startWidth=this._width,e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault()},this._onResizeMove=e=>{var n;if(!this._resizing)return;const t=this._startX-e.clientX,o=Math.max(200,Math.min(window.innerWidth*.9,this._startWidth+t));this._width=Math.round(o);const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".drawer");i&&(i.style.width=`${this._width}px`)},this._onResizeEnd=()=>{this._resizing=!1}}willUpdate(e){e.has("defaultWidth")&&(this._width=V0.get(this.defaultWidth)??(parseInt(this.defaultWidth)||320))}updated(e){e.has("open")&&(this.open?(this._leaving=!1,this.classList.add("is-shown")):this.classList.contains("is-shown")&&(this._leaving=!0,setTimeout(()=>{this._leaving=!1,this.classList.remove("is-shown"),this.dispatchEvent(new CustomEvent(He,{bubbles:!0,composed:!0}))},ye)))}_dispatch(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}_onClose(){this._dispatch(e5)}_onBackdropClick(){this._dispatch(e5)}render(){const e=this._leaving;return s`
      ${this.allowInteractOutside?h:s`<div class="backdrop" @click=${this._onBackdropClick}></div>`}
      <div
        class=${`drawer${e?" is-leaving":""}`}
        style="width: ${this._width}px"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div
          class="resize-handle"
          @pointerdown=${this._onResizeStart}
          @pointermove=${this._onResizeMove}
          @pointerup=${this._onResizeEnd}
          @pointercancel=${this._onResizeEnd}
        ></div>
        ${this.hideHeader?h:s` <div class="header">
              <slot name="header">
                ${this.heading?s`<span id="drawer-title" class="title"
                      >${this.heading}</span
                    >`:h}
              </slot>
              <anduin-button
                appearance="plain"
                variant="gray9"
                size="medium"
                label="Close"
                start-icon="cross"
                @click=${this._onClose}
              ></anduin-button>
            </div>`}
        <div class="body">
          <slot></slot>
        </div>
        ${this.hideFooter?h:s`<div class="footer"><slot name="footer"></slot></div>`}
      </div>
    `}};N4.styles=f`
    :host {
      display: none;
      font-family: var(--font-sans);
    }
    :host(.is-shown) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--z-modal, 1000);
      /* Host itself is transparent to pointer events — only drawer panel catches clicks */
      pointer-events: none;
    }
    @keyframes drawerIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes drawerOut {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }
    /* Transparent backdrop — only rendered when dismiss-on-outside-click is set */
    .backdrop {
      position: absolute;
      inset: 0;
      pointer-events: auto;
      background: transparent;
    }
    .drawer {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      background: #fff;
      box-shadow:
        -8px 0 24px 0 rgba(29, 41, 57, 0.12),
        -2px 0 8px 0 rgba(29, 41, 57, 0.08);
      animation: drawerIn ${L0}ms cubic-bezier(0.05, 0.7, 0.1, 1)
        forwards;
      min-width: 200px;
      max-width: 90vw;
      pointer-events: auto;
    }
    .drawer.is-leaving {
      animation: drawerOut ${ye}ms
        cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
    }
    @media (max-width: 640px) {
      .drawer {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100% !important;
        max-width: 100%;
        min-width: unset;
      }
      .resize-handle {
        display: none;
      }
    }
    .resize-handle {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      cursor: col-resize;
      z-index: 1;
      transition: background 150ms;
    }
    .resize-handle:hover {
      background: var(--color-primary-3, #84caff);
    }
    .header {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 12px 12px 16px;
      border-bottom: 1px solid var(--color-gray-3, #e4e7ec);
    }
    .title {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: var(--color-gray-8, #323c4d);
      font-family: var(--font-sans);
      margin: 0;
    }
    .body {
      flex: 1;
      overflow-y: auto;
      min-height: 0;

      color: var(--color-gray-8, #323c4d);
    }
    .footer {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 16px 20px;
      border-top: 1px solid var(--color-gray-3, #e4e7ec);
    }
  `;let j=N4;y1([a({type:Boolean,reflect:!0})],j.prototype,"open"),y1([a()],j.prototype,"heading"),y1([a({type:Boolean,attribute:"hide-header"})],j.prototype,"hideHeader"),y1([a({type:Boolean,attribute:"hide-footer"})],j.prototype,"hideFooter"),y1([a({attribute:"default-width"})],j.prototype,"defaultWidth"),y1([a({type:Boolean,attribute:"allow-interact-outside"})],j.prototype,"allowInteractOutside"),y1([y()],j.prototype,"_leaving"),y1([y()],j.prototype,"_width"),customElements.get("anduin-drawer")||customElements.define("anduin-drawer",j);class _e extends HTMLElement{constructor(){super(...arguments),this._onClick=()=>{this.dispatchEvent(new CustomEvent(e5,{bubbles:!0,composed:!0}))}}connectedCallback(){this.style.display="contents",this.addEventListener("click",this._onClick)}disconnectedCallback(){this.removeEventListener("click",this._onClick)}}customElements.get("anduin-drawer-close")||customElements.define("anduin-drawer-close",_e);var x0=Object.defineProperty,E=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&x0(e,t,i),i};const t5="anduin-suggestion:change",Le="anduin-suggestion:select",Ve="anduin-suggestion:clear",G4=class G4 extends g{constructor(){super(...arguments),this.value="",this.size="default",this.disabled=!1,this.readonly=!1,this.placeholder="",this.inputid="",this.status="",this.startIcon="",this.endIcon="",this.clearable=!1,this.suggestions=[],this.filter=!1,this.hideWhenEmpty=!1,this.emptyText="No suggestions",this._open=!1,this._activeIndex=-1,this._onDocumentMouseDown=e=>{var t;!this.contains(e.target)&&!((t=this.shadowRoot)!=null&&t.contains(e.target))&&(this._open=!1)},this._onScrollOrResize=()=>{this._open&&this._updatePosition()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._onDocumentMouseDown),window.addEventListener("scroll",this._onScrollOrResize,{passive:!0,capture:!0}),window.addEventListener("resize",this._onScrollOrResize);const e=this.closest("anduin-field");e&&e.addEventListener(r1,t=>{var i;const o=t;this.inputid&&this.inputid===o.detail&&((i=this._inputEl)==null||i.focus())})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onDocumentMouseDown),window.removeEventListener("scroll",this._onScrollOrResize,{capture:!0}),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){this._inputEl&&this._inputEl.value!==this.value&&(this._inputEl.value=this.value),this._open&&(e.has("_open")||e.has("value"))&&requestAnimationFrame(()=>this._updatePosition())}_normalized(){return this.suggestions.map(e=>typeof e=="string"?{value:e,label:e}:{label:e.value,...e})}get _filteredSuggestions(){const e=this._normalized();if(!this.filter||!this.value)return e;const t=this.value.toLowerCase();return e.filter(o=>(o.label??o.value).toLowerCase().includes(t))}_openPanel(){this.disabled||this.readonly||(this._open=!0,this._activeIndex=-1)}_onFocus(){this._openPanel()}_onInput(){this.value=this._inputEl.value,this._open||this._openPanel(),this._activeIndex=-1,this.dispatchEvent(new CustomEvent(t5,{detail:this.value,bubbles:!0,composed:!0}))}_onKeyDown(e){const t=this._filteredSuggestions;if(e.key==="ArrowDown"){if(e.preventDefault(),!this._open){this._openPanel();return}if(t.length===0)return;this._activeIndex=(this._activeIndex+1)%t.length,this._scrollActiveIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this._open){this._openPanel();return}if(t.length===0)return;this._activeIndex=this._activeIndex<=0?t.length-1:this._activeIndex-1,this._scrollActiveIntoView()}else e.key==="Enter"?this._open&&this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._selectSuggestion(t[this._activeIndex])):e.key==="Escape"&&this._open&&(e.preventDefault(),this._open=!1)}_scrollActiveIntoView(){requestAnimationFrame(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".option--active");e==null||e.scrollIntoView({block:"nearest"})})}_selectSuggestion(e){var t;this.value=e.value,this._inputEl&&(this._inputEl.value=e.value),this._open=!1,this.dispatchEvent(new CustomEvent(t5,{detail:this.value,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(Le,{detail:e,bubbles:!0,composed:!0})),(t=this._inputEl)==null||t.focus()}_onClear(){var e;this.value="",this._inputEl&&(this._inputEl.value=""),this._activeIndex=-1,this.dispatchEvent(new CustomEvent(t5,{detail:"",bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(Ve,{bubbles:!0,composed:!0})),(e=this._inputEl)==null||e.focus()}_updatePosition(){var Z;const e=(Z=this.shadowRoot)==null?void 0:Z.querySelector(".input-wrapper"),t=this._panelEl;if(!e||!t)return;const o=e.getBoundingClientRect(),i=t.style.transform;t.style.transform="none";const n=t.getBoundingClientRect();t.style.transform=i;const r=t.querySelector(".panel__inner");r&&(r.style.minWidth=`${o.width}px`);const d=t.getBoundingClientRect(),C=4,u=window.innerWidth,p=window.innerHeight,v=8,H=p-o.bottom-C,b=o.top-C,L=d.height<=H||H>=b?o.bottom+C:o.top-d.height-C;let m=o.left;m=Math.max(v,Math.min(m,u-d.width-v));const w=Math.max(v,Math.min(L,p-d.height-v));t.style.transform=`translate(${Math.round(m-n.left)}px, ${Math.round(w-n.top)}px)`}render(){const e=this.size==="small"?"input--small":this.size==="large"?"input--large":"input--default",t=this.status?`input--${this.status}`:"",o=!!this.startIcon,i=!!this.endIcon||this.clearable&&!!this.value,n=this.clearable&&!!this.value&&!this.disabled&&!this.readonly,r=this.size==="small"?"12":this.size==="large"?"20":"16",d=this.size==="small"?"10":this.size==="large"?"16":"14",C=this._filteredSuggestions,u=this._open&&(!this.hideWhenEmpty||C.length>0);return s`
      <div class="input-wrapper">
        ${o?s`
          <span class="input__start">
            <anduin-icon name=${this.startIcon} size=${r}></anduin-icon>
          </span>
        `:h}

        <input
          class="input ${e}
            ${o?"input--has-start":""}
            ${i?"input--has-end":""}
            ${this.disabled?"input--disabled":""}
            ${this.readonly?"input--readonly":""}
            ${t}"
          type="text"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          id=${this.inputid||""}
          placeholder=${this.placeholder||""}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded=${this._open}
          part="input"
          @input=${this._onInput}
          @focus=${this._onFocus}
          @keydown=${this._onKeyDown}
        />

        ${i?s`
          <span class="input__end">
            ${n?s`
              <button class="input__clear" type="button" @click=${this._onClear} aria-label="Clear">
                <anduin-icon name="cross" size=${d}></anduin-icon>
              </button>
            `:h}
            ${this.endIcon?s`
              <anduin-icon name=${this.endIcon} size=${r}></anduin-icon>
            `:h}
          </span>
        `:h}
      </div>

      <div class="panel${u?" panel--open":""}" part="panel">
        <div class="panel__inner" role="listbox">
          <div class="options">
            ${C.length?C.map((p,v)=>s`
                  <div
                    class="option${v===this._activeIndex?" option--active":""}"
                    role="option"
                    aria-selected=${v===this._activeIndex}
                    @mouseenter=${()=>{this._activeIndex=v}}
                    @mousedown=${H=>{H.preventDefault(),this._selectSuggestion(p)}}
                  >
                    ${p.icon?s`<anduin-icon name=${p.icon} size="16"></anduin-icon>`:h}
                    <span class="option__label">${p.label??p.value}</span>
                  </div>
                `):s`<div class="empty">${this.emptyText}</div>`}
          </div>
        </div>
      </div>
    `}};G4.styles=f`
    :host { display: block; font-family: var(--font-sans); position: relative; }

    .input-wrapper { position: relative; display: flex; align-items: center; }

    .input {
      display: block; width: 100%; border: 1px solid var(--color-gray-4); border-radius: 4px;
      transition: all 0.1s, box-shadow 0.3s ease; line-height: 20px;
      color: var(--color-gray-8); background-color: var(--color-gray-0);
      box-sizing: border-box; font-family: var(--font-sans);
    }
    .input:focus { outline: none; border-color: var(--color-primary-4); }
    .input:active { box-shadow: 0 0 0 2px var(--color-primary-1); }

    .input--small   { height: 24px; padding: 0 6px; font-size: 11px; }
    .input--default { height: 32px; padding: 0 12px; font-size: 13px; }
    .input--large   { height: 40px; padding: 0 16px; font-size: 15px; }

    .input--has-start.input--small   { padding-left: 26px; }
    .input--has-start.input--default { padding-left: 32px; }
    .input--has-start.input--large   { padding-left: 42px; }

    .input--has-end.input--small   { padding-right: 26px; }
    .input--has-end.input--default { padding-right: 32px; }
    .input--has-end.input--large   { padding-right: 42px; }

    .input--disabled { color: var(--color-gray-7); background-color: var(--color-gray-2); cursor: not-allowed; }
    .input--readonly { background-color: var(--color-gray-2); }
    .input--valid    { border-color: var(--color-success-4); }
    .input--invalid  { border-color: var(--color-danger-4); }
    .input--warning  { border-color: var(--color-warning-4); }
    .input--loading  { border-color: var(--color-gray-4); }

    .input__start,
    .input__end {
      position: absolute; top: 0; bottom: 0;
      display: flex; align-items: center;
      pointer-events: none;
      color: var(--color-gray-6);
    }
    .input__start { left: 8px; }
    .input__end   { right: 8px; gap: 2px; }

    .input__clear {
      display: none; align-items: center; justify-content: center;
      pointer-events: auto; cursor: pointer;
      background: none; border: none; padding: 0;
      color: var(--color-gray-5);
      border-radius: 3px;
      line-height: 0;
    }
    .input__clear:hover { color: var(--color-gray-7); }
    :host(:focus-within) .input__clear { display: flex; }

    /* ── Panel ─────────────────────────────────────────────────── */
    .panel {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 200;
      visibility: hidden;
      pointer-events: none;
    }
    .panel--open { visibility: visible; pointer-events: auto; }

    .panel__inner {
      background: var(--color-white, #fff);
      border-radius: 8px;
      box-shadow: 0px 2px 8px 0px rgba(29, 41, 57, 0.08),
                  0px 8px 24px 0px rgba(29, 41, 57, 0.12);
      min-width: 200px;
      max-height: var(--suggestion-max-height, 280px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: scale(0.97) translateY(-4px);
      transform-origin: top left;
      transition: opacity 150ms ease, transform 150ms ease;
    }
    .panel--open .panel__inner {
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    .options {
      overflow-y: auto;
      padding: 4px;
    }
    .option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 13px;
      line-height: 20px;
      color: var(--color-gray-9, #101828);
      user-select: none;
    }
    .option:hover,
    .option--active { background: var(--color-gray-2, #f2f4f7); }
    .option:active  { background: var(--color-gray-3, #e4e7ec); }
    .option__label  { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    .empty {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--color-gray-5, #98a1b2);
      text-align: center;
    }
  `;let M=G4;E([a()],M.prototype,"value"),E([a()],M.prototype,"size"),E([a({type:Boolean})],M.prototype,"disabled"),E([a({type:Boolean})],M.prototype,"readonly"),E([a()],M.prototype,"placeholder"),E([a()],M.prototype,"inputid"),E([a()],M.prototype,"status"),E([a({attribute:"start-icon"})],M.prototype,"startIcon"),E([a({attribute:"end-icon"})],M.prototype,"endIcon"),E([a({type:Boolean})],M.prototype,"clearable"),E([a({attribute:!1})],M.prototype,"suggestions"),E([a({type:Boolean})],M.prototype,"filter"),E([a({type:Boolean,attribute:"hide-when-empty"})],M.prototype,"hideWhenEmpty"),E([a({attribute:"empty-text"})],M.prototype,"emptyText"),E([y()],M.prototype,"_open"),E([y()],M.prototype,"_activeIndex"),E([z("input")],M.prototype,"_inputEl"),E([z(".panel")],M.prototype,"_panelEl"),customElements.get("anduin-suggestion")||customElements.define("anduin-suggestion",M);var M0=Object.defineProperty,J=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&M0(e,t,i),i};const xe="anduin-navigation:change",i5="anduin-navigation-item:item-click",U4=class U4 extends g{constructor(){super(...arguments),this.defaultValue="",this.value=null,this.theme="light",this.alignment="left",this.internalValue="",this.onItemClick=e=>{e.stopPropagation();const o=e.detail;o!==this.selection&&(this.dispatchEvent(new CustomEvent(xe,{detail:o,bubbles:!0,composed:!0})),this.isControlled||(this.internalValue=o))}}get isControlled(){return this.value!=null}get selection(){return this.isControlled?this.value:this.internalValue}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.internalValue=this.defaultValue),this.addEventListener(i5,this.onItemClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(i5,this.onItemClick)}updated(){this.syncItems()}get items(){return Array.from(this.querySelectorAll("anduin-navigation-item"))}syncItems(){const e=this.selection;for(const t of this.items)t.selected=t.value===e,t.theme=this.theme}render(){return s`
      <div class="navigation navigation--${this.alignment}" role="navigation" part="navigation">
        <slot @slotchange=${this.syncItems}></slot>
      </div>
    `}};U4.styles=f`
    :host {
      display: block;
      font-family: var(--font-sans);
    }

    /* Light theme (default) — private vars resolve consumer overrides first,
       then fall back to design tokens. */
    :host,
    :host([theme='light']) {
      --_nav-color: var(--nav-color, var(--color-gray-7));
      --_nav-hover-color: var(--nav-hover-color, var(--color-gray-9));
      --_nav-hover-bg: var(--nav-hover-bg, var(--color-gray-2));
      --_nav-active-color: var(--nav-active-color, var(--color-gray-8));
      --_nav-active-bg: var(--nav-active-bg, var(--color-gray-3));
      --_nav-surface: var(--nav-surface, transparent);
    }

    :host([theme='dark']) {
      --_nav-color: var(--nav-color, var(--color-gray-5));
      --_nav-hover-color: var(--nav-hover-color, var(--color-gray-0));
      --_nav-hover-bg: var(--nav-hover-bg, oklch(from var(--color-gray-0) l c h / 0.08));
      --_nav-active-color: var(--nav-active-color, var(--color-gray-0));
      --_nav-active-bg: var(--nav-active-bg, oklch(from var(--color-gray-0) l c h / 0.16));
      --_nav-surface: var(--nav-surface, transparent);
    }

    .navigation {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px;
      border-radius: 8px;
      background-color: var(--_nav-surface);
      white-space: nowrap;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .navigation::-webkit-scrollbar { display: none; }
    .navigation--left { justify-content: flex-start; }
    .navigation--center { justify-content: center; }
    .navigation--right { justify-content: flex-end; }
  `;let c1=U4;J([a({attribute:"default-value"})],c1.prototype,"defaultValue"),J([a()],c1.prototype,"value"),J([a({reflect:!0})],c1.prototype,"theme"),J([a()],c1.prototype,"alignment"),J([y()],c1.prototype,"internalValue");const j4=class j4 extends g{constructor(){super(...arguments),this.value="",this.startIcon="",this.href="",this.disabled=!1,this.selected=!1,this.theme="light"}onClick(e){if(this.disabled){e.preventDefault();return}this.dispatchEvent(new CustomEvent(i5,{detail:this.value,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.setAttribute("aria-current",this.selected?"page":"false")}render(){const e=["nav-item",this.selected?"nav-item--active":"",this.disabled?"nav-item--disabled":""].filter(Boolean).join(" "),t=s`
      ${this.startIcon?s`<span class="nav-item__icon"><anduin-icon name="${this.startIcon}" size="16"></anduin-icon></span>`:h}
      <slot></slot>
    `;return this.href?s`
          <a
            class="${e}"
            href="${this.href}"
            part="nav-item"
            aria-current="${this.selected?"page":"false"}"
            @click=${this.onClick}
          >${t}</a>
        `:s`
          <button
            type="button"
            class="${e}"
            part="nav-item"
            ?disabled=${this.disabled}
            aria-current="${this.selected?"page":"false"}"
            @click=${this.onClick}
          >${t}</button>
        `}};j4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    .nav-item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      min-width: var(--nav-item-min-width, auto);
      padding: 8px 14px;
      border: none;
      border-radius: 999px;
      background: none;
      color: var(--_nav-color, var(--color-gray-7));
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
      text-decoration: none;
      white-space: nowrap;
      transition: background-color 120ms ease, color 120ms ease;
    }
    .nav-item:hover {
      color: var(--_nav-hover-color, var(--color-gray-9));
      background-color: var(--_nav-hover-bg, var(--color-gray-2));
    }
    .nav-item:focus { outline: none; }
    .nav-item:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px oklch(from var(--color-primary-4) l c h / 0.5);
    }
    .nav-item--active,
    .nav-item--active:hover {
      color: var(--_nav-active-color, var(--color-gray-8));
      background-color: var(--_nav-active-bg, var(--color-gray-3));
    }
    .nav-item--disabled {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    .nav-item__icon { display: flex; }
  `;let n1=j4;J([a()],n1.prototype,"value"),J([a({attribute:"start-icon"})],n1.prototype,"startIcon"),J([a()],n1.prototype,"href"),J([a({type:Boolean})],n1.prototype,"disabled"),J([a({attribute:!1})],n1.prototype,"selected"),J([a({attribute:!1})],n1.prototype,"theme"),customElements.get("anduin-navigation")||customElements.define("anduin-navigation",c1),customElements.get("anduin-navigation-item")||customElements.define("anduin-navigation-item",n1);var w0=Object.defineProperty,O1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&w0(e,t,i),i};const Me="anduin-resizable:resize",we="anduin-resizable-panel",Ze=l=>!!l&&l.tagName.toLowerCase()===we;function ke(l,e,t){const o=(l||"").trim();if(!o)return t;const i=parseFloat(o);return Number.isNaN(i)?t:o.endsWith("%")?i/100*e:i}const K4=class K4 extends g{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}get isVertical(){return this.orientation==="vertical"}get axisSize(){const e=this.getBoundingClientRect();return this.isVertical?e.height:e.width}get panels(){return Array.from(this.querySelectorAll(`:scope > ${we}`))}updated(){for(const e of this.querySelectorAll(":scope > anduin-resizable-handle"))e.setOrientation(this.isVertical)}normalizeToGrow(){const e=this.axisSize;if(e<=0)return;const t=this.panels,o=t.map(i=>i.axisSize(this.isVertical));t.forEach((i,n)=>i.setGrow(o[n]/e*100))}render(){return s`
      <div class="panel-group ${this.isVertical?"panel-group--vertical":""}" part="panel-group">
        <slot></slot>
      </div>
    `}};K4.styles=f`
    :host { display: block; width: 100%; height: 100%; font-family: var(--font-sans); }
    .panel-group {
      display: flex; flex-direction: row;
      width: 100%; height: 100%; min-width: 0; min-height: 0;
    }
    .panel-group--vertical { flex-direction: column; }
  `;let w2=K4;O1([a({reflect:!0})],w2.prototype,"orientation");const W4=class W4 extends g{constructor(){super(...arguments),this.defaultSize="",this.minSize="",this.maxSize="",this.applied=!1}updated(e){e.has("defaultSize")&&!this.applied&&this.applyDefaultSize()}applyDefaultSize(){const e=(this.defaultSize||"").trim();if(!e)return;this.applied=!0;const t=parseFloat(e);Number.isNaN(t)||(e.endsWith("%")?this.setGrow(t):this.style.flex=`0 0 ${t}px`)}setGrow(e){this.style.flex="",this.style.flexGrow=String(e),this.style.flexShrink="1",this.style.flexBasis="0"}axisSize(e){const t=this.getBoundingClientRect();return e?t.height:t.width}minPx(e){return ke(this.minSize,e,0)}maxPx(e){return ke(this.maxSize,e,e)}render(){return s`<div class="panel" part="panel"><slot></slot></div>`}};W4.styles=f`
    :host { display: block; flex: 1 1 0; min-width: 0; min-height: 0; overflow: hidden; font-family: var(--font-sans); }
    .panel { width: 100%; height: 100%; overflow: hidden; }
  `;let T1=W4;O1([a({attribute:"default-size"})],T1.prototype,"defaultSize"),O1([a({attribute:"min-size"})],T1.prototype,"minSize"),O1([a({attribute:"max-size"})],T1.prototype,"maxSize");const Y4=class Y4 extends g{constructor(){super(...arguments),this.withHandle=!1,this.groupVertical=!1,this.dragging=!1,this.group=null,this.startPos=0,this.startPrevPx=0,this.combinedPx=0,this.combinedGrow=0,this.activePointerId=null,this.onPointerDown=e=>{const t=this.closest("anduin-resizable-panel-group"),o=this.prevPanel,i=this.nextPanel;if(!t||!o||!i)return;e.preventDefault(),this.group=t,this.dragging=!0,this.activePointerId=e.pointerId,this.setPointerCapture(e.pointerId),t.normalizeToGrow();const n=t.isVertical;this.startPos=n?e.clientY:e.clientX,this.startPrevPx=o.axisSize(n),this.combinedPx=this.startPrevPx+i.axisSize(n),this.combinedGrow=(parseFloat(o.style.flexGrow)||0)+(parseFloat(i.style.flexGrow)||0),document.body.style.userSelect="none",document.body.style.cursor=n?"row-resize":"col-resize",window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp)},this.onPointerMove=e=>{if(!this.dragging||!this.group)return;const o=(this.group.isVertical?e.clientY:e.clientX)-this.startPos;this.resizeTo(this.startPrevPx+o)},this.onPointerUp=()=>{this.dragging&&(this.endDrag(),this.emitResize())},this.onKeyDown=e=>{const t=this.closest("anduin-resizable-panel-group");if(!t)return;const o=t.isVertical;let i=0;if(!o&&e.key==="ArrowRight")i=1;else if(!o&&e.key==="ArrowLeft")i=-1;else if(o&&e.key==="ArrowDown")i=1;else if(o&&e.key==="ArrowUp")i=-1;else return;const n=this.prevPanel,r=this.nextPanel;if(!n||!r)return;e.preventDefault(),this.group=t,t.normalizeToGrow();const d=n.axisSize(o);this.combinedPx=d+r.axisSize(o),this.combinedGrow=(parseFloat(n.style.flexGrow)||0)+(parseFloat(r.style.flexGrow)||0);const C=Math.max(t.axisSize*.02,8);this.resizeTo(d+i*C),this.emitResize()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("pointerdown",this.onPointerDown),this.addEventListener("keydown",this.onKeyDown);const e=this.closest("anduin-resizable-panel-group");e&&this.setOrientation(e.isVertical)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerdown",this.onPointerDown),this.removeEventListener("keydown",this.onKeyDown),this.endDrag()}setOrientation(e){this.groupVertical=e,this.setAttribute("aria-orientation",e?"horizontal":"vertical")}get prevPanel(){return Ze(this.previousElementSibling)?this.previousElementSibling:null}get nextPanel(){return Ze(this.nextElementSibling)?this.nextElementSibling:null}endDrag(){if(!(!this.dragging&&this.activePointerId===null)){if(this.dragging=!1,this.activePointerId!==null){try{this.releasePointerCapture(this.activePointerId)}catch{}this.activePointerId=null}document.body.style.userSelect="",document.body.style.cursor="",window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp)}}resizeTo(e){const t=this.group,o=this.prevPanel,i=this.nextPanel;if(!t||!o||!i||this.combinedPx<=0)return;const n=t.axisSize,r=Math.max(o.minPx(n),this.combinedPx-i.maxPx(n),0),d=Math.min(o.maxPx(n),this.combinedPx-i.minPx(n),this.combinedPx),C=Math.max(r,Math.min(d,e)),u=this.combinedGrow*(C/this.combinedPx);o.setGrow(u),i.setGrow(this.combinedGrow-u)}emitResize(){const e=this.group,t=this.prevPanel,o=this.nextPanel;if(!e||!t||!o)return;const i=e.axisSize;if(i<=0)return;const n=e.isVertical;this.dispatchEvent(new CustomEvent(Me,{detail:{sizes:[t.axisSize(n)/i*100,o.axisSize(n)/i*100]},bubbles:!0,composed:!0}))}render(){const e=["handle",this.groupVertical?"handle--vertical":"",this.dragging?"handle--dragging":""].filter(Boolean).join(" ");return s`
      <div class="${e}" part="handle">
        ${this.withHandle?s`<div class="handle__grip" part="grip"><anduin-icon name="ellipsisVertical" size="12" aria-label="Drag"></anduin-icon></div>`:h}
      </div>
    `}};Y4.styles=f`
    :host { display: block; flex: 0 0 auto; position: relative; z-index: 1; outline: none; font-family: var(--font-sans); }
    .handle {
      position: relative; display: flex; align-items: center; justify-content: center;
      width: 2px; height: 100%; background-color: var(--color-gray-3); cursor: col-resize;
    }
    .handle--vertical { width: 100%; height: 2px; cursor: row-resize; }
    /* Widen the hit area beyond the 2px visual line. */
    .handle::after { content: ''; position: absolute; inset: 0 -3px; }
    .handle--vertical::after { inset: -3px 0; }
    .handle:hover, .handle--dragging { background-color: var(--color-primary-4); }
    :host(:focus-visible) .handle { background-color: var(--color-primary-4); }
    .handle__grip {
      position: relative; z-index: 1; display: flex; align-items: center; justify-content: center;
      width: 10px; height: 20px; border-radius: 999px;
      border: none; background-color: var(--color-primary-4);
      color: #fff; opacity: 0; transition: opacity 150ms;
    }
    .handle:hover .handle__grip, .handle--dragging .handle__grip, :host(:focus-visible) .handle__grip { opacity: 1; }
    .handle--vertical .handle__grip { transform: rotate(90deg); }
  `;let I1=Y4;O1([a({type:Boolean,attribute:"with-handle"})],I1.prototype,"withHandle"),O1([y()],I1.prototype,"groupVertical"),O1([y()],I1.prototype,"dragging"),customElements.get("anduin-resizable-panel-group")||customElements.define("anduin-resizable-panel-group",w2),customElements.get("anduin-resizable-panel")||customElements.define("anduin-resizable-panel",T1),customElements.get("anduin-resizable-handle")||customElements.define("anduin-resizable-handle",I1);var Z0=Object.defineProperty,a2=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&Z0(e,t,i),i};const Re="anduin-pagination:change",o5="anduin-pagination:jump";function Z2(l,e){const t=Math.max(e-l+1,0);return Array.from({length:t},(o,i)=>l+i)}const q4=class q4 extends g{constructor(){super(...arguments),this.numberOfPages=0,this.defaultValue=1,this.value=null,this.internalValue=1,this.indicatorReady=!1,this.onJump=e=>{e.stopPropagation(),this.goTo(e.detail==="first"?1:this.count)},this.onSlotChange=()=>this.syncBoundaryButtons()}get isControlled(){return this.value!=null}get count(){return Math.max(0,Math.floor(this.numberOfPages||0))}get selection(){const e=this.isControlled?this.value:this.internalValue;return Math.min(Math.max(Math.floor(e||1),1),Math.max(this.count,1))}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.internalValue=this.defaultValue||1),this.addEventListener(o5,this.onJump)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(o5,this.onJump)}buildItems(){const e=this.count,t=this.selection,o=1,i=1,n=Z2(1,Math.min(o,e)),r=Z2(Math.max(e-o+1,o+1),e),d=Math.max(Math.min(t-i,e-o-i*2-1),o+2),C=Math.min(Math.max(t+i,o+i*2+2),r.length>0?r[0]-2:e-1);return[...n,...d>o+2?["start-ellipsis"]:o+1<e-o?[o+1]:[],...Z2(d,C),...C<e-o-1?["end-ellipsis"]:e-o>o?[e-o]:[],...r].map(p=>p==="start-ellipsis"?{type:"ellipsis",pages:Z2(o+1,d-1)}:p==="end-ellipsis"?{type:"ellipsis",pages:Z2(C+1,e-o)}:{type:"page",page:p})}goTo(e){const t=this.count,o=Math.min(Math.max(Math.floor(e),1),t);o!==this.selection&&(this.isControlled||(this.internalValue=o),this.dispatchEvent(new CustomEvent(Re,{detail:o,bubbles:!0,composed:!0})))}updated(){this.syncBoundaryButtons(),requestAnimationFrame(()=>this.positionIndicator())}syncBoundaryButtons(){const e=this.selection,t=this.count;this.querySelectorAll("anduin-pagination-first-page").forEach(o=>{o.disabled=e<=1}),this.querySelectorAll("anduin-pagination-last-page").forEach(o=>{o.disabled=e>=t})}positionIndicator(){var o;const e=this.indicatorEl,t=(o=this.shadowRoot)==null?void 0:o.querySelector(".pagination__button--active");if(e){if(!t){e.style.opacity="0",this.indicatorReady=!1;return}this.indicatorReady||(e.style.transition="none"),e.style.width=`${t.offsetWidth}px`,e.style.transform=`translateX(${t.offsetLeft}px)`,e.style.opacity="1",this.indicatorReady||(e.offsetWidth,e.style.transition="",this.indicatorReady=!0)}}render(){const e=this.count;if(e<2)return h;const t=this.selection,o=this.buildItems();return s`
      <div class="pagination">
        <div class="pagination__indicator"></div>
        <slot name="start" @slotchange=${this.onSlotChange}></slot>
        <anduin-button
          appearance="plain"
          size="medium"
          start-icon="chevronLeft"
          label="Go to previous page"
          ?disabled=${t<=1}
          @click=${()=>this.goTo(t-1)}
        ></anduin-button>
        ${o.map(i=>this.renderItem(i,t))}
        <anduin-button
          appearance="plain"
          size="medium"
          start-icon="chevronRight"
          label="Go to next page"
          ?disabled=${t>=e}
          @click=${()=>this.goTo(t+1)}
        ></anduin-button>
        <slot name="end" @slotchange=${this.onSlotChange}></slot>
      </div>
    `}renderItem(e,t){if(e.type==="page"){const n=e.page===t;return s`
        <button
          class="pagination__button ${n?"pagination__button--active":""}"
          aria-current=${n?"page":h}
          aria-label="Go to page ${e.page}"
          @click=${()=>this.goTo(e.page)}
        >${e.page}</button>
      `}const{pages:o}=e,i=o.length>1?`Pages ${o[0]} to ${o[o.length-1]}`:`Page ${o[0]}`;return s`
      <anduin-menu placement="bottom">
        <anduin-button
          slot="trigger"
          appearance="plain"
          size="medium"
          start-icon="ellipsisHorizontal"
          label=${i}
        ></anduin-button>
        <div class="pagination__ellipsis-list">
          ${o.map(n=>s`
            <anduin-menu-item @click=${()=>this.goTo(n)}>${n}</anduin-menu-item>
          `)}
        </div>
      </anduin-menu>
    `}};q4.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
    :host(:not([number-of-pages])),
    :host([number-of-pages='0']),
    :host([number-of-pages='1']) { display: none; }

    .pagination { display: flex; align-items: center; position: relative; }

    .pagination__indicator {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      background: var(--color-gray-6);
      opacity: 0;
      transition-duration: 200ms;
      transition-property: transform, width;
      pointer-events: none;
    }

    anduin-button,
    anduin-menu { margin: 0 2px; position: relative; z-index: 1; }
    ::slotted(anduin-pagination-first-page),
    ::slotted(anduin-pagination-last-page) { margin: 0 2px; position: relative; z-index: 1; }

    .pagination__button {
      border: none;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      width: 32px;
      height: 32px;
      margin: 0 2px;
      cursor: pointer;
      background: transparent;
      color: var(--color-gray-7);
      position: relative;
      z-index: 1;
      transition: background-color 150ms;
      padding: 0;
    }
    .pagination__button:focus { outline: none; }
    .pagination__button:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px oklch(from var(--color-primary-4) l c h / 0.5);
    }
    .pagination__button:hover { background: var(--color-gray-3); }
    .pagination__button--active { color: var(--color-gray-0); }
    .pagination__button--active:hover { background: transparent; }

    .pagination__ellipsis-list {
      max-height: 200px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  `;let C1=q4;a2([a({type:Number,attribute:"number-of-pages",reflect:!0})],C1.prototype,"numberOfPages"),a2([a({type:Number,attribute:"default-value"})],C1.prototype,"defaultValue"),a2([a({type:Number})],C1.prototype,"value"),a2([y()],C1.prototype,"internalValue"),a2([z(".pagination__indicator")],C1.prototype,"indicatorEl");const X4=class X4 extends g{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label="",this.target="first",this.onClick=()=>{this.disabled||this.dispatchEvent(new CustomEvent(o5,{detail:this.target,bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.getAttribute("slot")||this.setAttribute("slot",this.target==="first"?"start":"end")}render(){return s`
      <anduin-button
        appearance="plain"
        size="medium"
        start-icon=${this.icon}
        label=${this.label}
        ?disabled=${this.disabled}
        @click=${this.onClick}
      ></anduin-button>
    `}};X4.styles=f`
    :host { display: inline-flex; }
  `;let k2=X4;a2([a({type:Boolean})],k2.prototype,"disabled");class Ee extends k2{constructor(){super(...arguments),this.icon="chevronVerticalLeft",this.label="Go to first page",this.target="first"}}class $e extends k2{constructor(){super(...arguments),this.icon="chevronVerticalRight",this.label="Go to last page",this.target="last"}}customElements.get("anduin-pagination")||customElements.define("anduin-pagination",C1),customElements.get("anduin-pagination-first-page")||customElements.define("anduin-pagination-first-page",Ee),customElements.get("anduin-pagination-last-page")||customElements.define("anduin-pagination-last-page",$e);const J4=class J4 extends g{render(){return s`<div class="timeline"><slot></slot></div>`}};J4.styles=f`
    :host {
      display: block;
    }

    /* Flex column with no gap — each child (item or group) manages its own
     * vertical spacing via padding-bottom on the content area. This lets the
     * per-item rail column stretch continuously through the spacing, producing
     * a seamless vertical connector line with no gaps. */
    .timeline {
      display: flex;
      flex-direction: column;
    }
  `;let n5=J4;const Q4=class Q4 extends g{render(){return s`
      <div class="item">
        <div class="item__rail"><div class="item__dot"></div></div>
        <div class="item__content"><slot></slot></div>
      </div>
    `}};Q4.styles=f`
    /* Host padding-left: 29px positions the rail so the dot center
     * (29 + 7 = 36px from left edge) aligns with the timeline axis. */
    :host {
      display: block;
      padding-left: 29px;
    }

    /* Grid layout: 14px rail column + 1fr content column.
     * column-gap: 16px separates dot from content text. */
    .item {
      display: grid;
      grid-template-columns: 14px 1fr;
      column-gap: 16px;
    }

    /* Rail column — a flex column that stretches the full height of the grid
     * row. The dot sits in the middle (vertically), and ::before / ::after
     * pseudo-elements draw the top and bottom line segments. The rail stretches
     * through the content's padding-bottom, so the line is seamless between
     * consecutive items. */
    .item__rail {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Top line segment — extends from the top of the rail down to the dot.
     * min-height: 2px matches the dot's visual offset from the first line of
     * text. flex-shrink: 0 prevents collapse when content is short. */
    .item__rail::before {
      content: "";
      display: block;
      width: 1px;
      min-height: 2px;
      flex-shrink: 0;
      background-color: var(--color-gray-4);
    }

    /* Bottom line segment — extends from below the dot to the bottom of the
     * rail. flex: 1 makes it fill all remaining vertical space, including the
     * content area's padding-bottom spacing. */
    .item__rail::after {
      content: "";
      display: block;
      width: 1px;
      flex: 1;
      background-color: var(--color-gray-4);
    }

    /* The dot indicator. A 10px filled circle with a 2px transparent border
     * creating a 14px total box that visually separates the dot from the line
     * segments above and below. */
    .item__dot {
      flex-shrink: 0;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      padding: 2px;
      border-radius: 9999px;
      background-color: var(--color-gray-4);
      background-clip: content-box;
    }

    /* Content area. padding-bottom: 24px provides inter-item spacing. Because
     * the grid row stretches to include this padding, the rail's ::after line
     * segment extends through it seamlessly. min-width: 0 prevents long text
     * from overflowing. */
    .item__content {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-bottom: 24px;
    }

    /* Hide the top line for the first item in a flat (ungrouped) timeline.
     * :first-child targets the first anduin-timeline-item slotted directly into
     * anduin-timeline. Inside a group the label precedes the items, so the
     * first item keeps its top line to connect up to the label. */
    :host(:first-child) .item__rail::before {
      background-color: transparent;
    }

    /* Remove bottom spacing for the last item. The ::after line segment
     * naturally shrinks when there's no extra space below the dot. */
    :host(:last-child) .item__content {
      padding-bottom: 0;
    }
  `;let l5=Q4;const e3=class e3 extends g{render(){return s`<div class="date"><slot></slot></div>`}};e3.styles=f`
    :host {
      display: block;
    }

    /* Muted date text — 12px/16px matches the design system's textSmall token. */
    .date {
      font-size: 12px;
      line-height: 16px;
      color: var(--color-gray-7);
    }
  `;let r5=e3;const t3=class t3 extends g{render(){return s`<div class="title"><slot></slot></div>`}};t3.styles=f`
    /* Block-level element inheriting the parent's font size and color. */
    :host {
      display: block;
    }
  `;let a5=t3;const i3=class i3 extends g{render(){return s`<div class="group__items"><slot></slot></div>`}};i3.styles=f`
    :host {
      display: block;
    }

    /* First group hides the label's top line via a custom property that
     * inherits across the shadow boundary into anduin-timeline-label. */
    :host(:first-child) {
      --_timeline-label-top-line: transparent;
    }

    /* Items container below the label. No gap or padding needed — each
     * anduin-timeline-item manages its own spacing via padding-bottom on its
     * content area, and the per-item rail draws a continuous line. */
    .group__items {
      display: flex;
      flex-direction: column;
    }
  `;let s5=i3;const o3=class o3 extends g{render(){return s`<div class="label-center"><div class="label-pill"><slot></slot></div></div>`}};o3.styles=f`
    /* Sticky positioning keeps the label visible while scrolling. The gray-0
     * background covers content behind it during scroll. z-index: 1 ensures the
     * label sits above item dots and rails. */
    :host {
      display: block;
      position: sticky;
      top: 0;
      background-color: var(--color-gray-0);
      z-index: 1;
    }

    /* Flex column centered at the timeline axis (36px from left edge).
     * margin-left: 36px positions the left edge at the axis, then
     * transform: translateX(-50%) shifts it left by half its width, centering
     * the pill on the axis. width: fit-content keeps the container tight around
     * the pill. */
    .label-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: fit-content;
      margin-left: 36px;
      transform: translateX(-50%);
    }

    /* Top line segment — connects from the previous group's last item down to
     * the pill. Reads --_timeline-label-top-line from the parent group; the
     * first group sets it to transparent to hide this line. */
    .label-center::before {
      content: "";
      width: 1px;
      height: 12px;
      background-color: var(--_timeline-label-top-line, var(--color-gray-4));
    }

    /* Bottom line segment — connects from the pill down to the first item in
     * this group. Provides spacing below the pill. */
    .label-center::after {
      content: "";
      width: 1px;
      height: 20px;
      background-color: var(--color-gray-4);
    }

    /* Pill badge styling. Inline-flex keeps the pill width proportional to
     * text. Rounded corners (9999px) create a full pill shape. */
    .label-pill {
      display: inline-flex;
      align-items: center;
      padding: 4px 20px;
      background-color: var(--color-gray-2);
      border-radius: 9999px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
    }
  `;let d5=o3;customElements.get("anduin-timeline")||customElements.define("anduin-timeline",n5),customElements.get("anduin-timeline-item")||customElements.define("anduin-timeline-item",l5),customElements.get("anduin-timeline-date")||customElements.define("anduin-timeline-date",r5),customElements.get("anduin-timeline-title")||customElements.define("anduin-timeline-title",a5),customElements.get("anduin-timeline-group")||customElements.define("anduin-timeline-group",s5),customElements.get("anduin-timeline-label")||customElements.define("anduin-timeline-label",d5);var k0=Object.defineProperty,F1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&k0(e,t,i),i};const Ae="anduin-sidebar:select",n3=class n3 extends g{connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation")}render(){return s`<div class="sidebar" part="sidebar"><slot></slot></div>`}};n3.styles=f`
    :host {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      min-height: 0;
      font-family: var(--font-sans);
    }
    .sidebar {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
    }
  `;let c5=n3;const l3=class l3 extends g{render(){return s`<div class="sidebar-content" part="content"><slot></slot></div>`}};l3.styles=f`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
      overflow-y: auto;
    }
    .sidebar-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px 16px;
    }
  `;let C5=l3;const r3=class r3 extends g{constructor(){super(...arguments),this.divider=!1}render(){return s`<div class="sidebar-header" part="header"><slot></slot></div>`}};r3.styles=f`
    :host {
      display: block;
      flex: 0 0 auto;
      box-sizing: border-box;
      padding: 12px 16px;
    }
    :host([divider]) {
      border-bottom: 1px solid var(--color-gray-3);
    }
  `;let R2=r3;F1([a({type:Boolean,reflect:!0})],R2.prototype,"divider");const a3=class a3 extends g{constructor(){super(...arguments),this.divider=!1}render(){return s`<div class="sidebar-footer" part="footer"><slot></slot></div>`}};a3.styles=f`
    :host {
      display: block;
      flex: 0 0 auto;
      box-sizing: border-box;
      padding: 12px 16px;
    }
    :host([divider]) {
      border-top: 1px solid var(--color-gray-3);
    }
  `;let E2=a3;F1([a({type:Boolean,reflect:!0})],E2.prototype,"divider");const s3=class s3 extends g{render(){return s`<div class="sidebar-group" part="group" role="group"><slot></slot></div>`}};s3.styles=f`
    :host {
      display: block;
    }
    .sidebar-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  `;let u5=s3;const d3=class d3 extends g{render(){return s`
      <div class="sidebar-group-label" part="group-label">
        <span class="sidebar-group-label__text"><slot></slot></span>
        <slot name="badge" class="sidebar-group-label__badge"></slot>
        <slot name="action" class="sidebar-group-label__action"></slot>
      </div>
    `}};d3.styles=f`
    :host {
      display: block;
    }
    .sidebar-group-label {
      display: flex;
      align-items: center;
      gap: 12px;
      height: 32px;
      padding-left: 12px;
      color: var(--color-gray-8);
      font-size: 13px;
      font-weight: 600;
      line-height: 20px;
    }
    .sidebar-group-label__text {
      flex: 1 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sidebar-group-label__badge,
    .sidebar-group-label__action {
      display: flex;
      flex-shrink: 0;
      align-items: center;
    }
    .sidebar-group-label__action {
      padding-right: 6px;
    }
  `;let p5=d3;const c3=class c3 extends g{render(){return s`<div class="sidebar-menu" part="menu"><slot></slot></div>`}};c3.styles=f`
    :host {
      display: block;
    }
    .sidebar-menu {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  `;let h5=c3;const C3=class C3 extends g{constructor(){super(...arguments),this.startIcon="",this.selected=!1,this.disabled=!1,this.href="",this.openNewTab=!1,this.onClick=e=>{if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent(Ae,{detail:this,bubbles:!0,composed:!0}))}}render(){const e=["sidebar-menu-item-wrapper",this.disabled?"sidebar-menu-item-wrapper--disabled":"sidebar-menu-item-wrapper--interactive",this.selected?"sidebar-menu-item-wrapper--selected":""].filter(Boolean).join(" "),t=["sidebar-menu-item",this.disabled?"sidebar-menu-item--disabled":""].filter(Boolean).join(" "),o=s`
      ${this.startIcon?s`<anduin-icon class="sidebar-menu-item__icon" name="${this.startIcon}" size="16"></anduin-icon>`:h}
      <span class="sidebar-menu-item__label"><slot></slot></span>
      <slot name="badge" class="sidebar-menu-item__badge"></slot>
    `,i=this.href?s`
          <a
            class="${t}"
            part="menu-item"
            href="${this.disabled?h:this.href}"
            target="${this.openNewTab?"_blank":"_self"}"
            rel="${this.openNewTab?"noreferrer noopener":h}"
            aria-current="${this.selected?"page":"false"}"
            aria-disabled="${this.disabled?"true":"false"}"
            tabindex="${this.disabled?"-1":"0"}"
            @click=${this.onClick}
          >${o}</a>
        `:s`
          <button
            type="button"
            class="${t}"
            part="menu-item"
            ?disabled=${this.disabled}
            aria-current="${this.selected?"page":"false"}"
            @click=${this.onClick}
          >${o}</button>
        `;return s`
      <div class="${e}">
        ${i}
        <slot name="action" class="sidebar-menu-item__action"></slot>
      </div>
    `}};C3.styles=f`
    :host {
      display: block;
    }
    .sidebar-menu-item-wrapper {
      display: flex;
      align-items: center;
      border-radius: 4px;
    }
    .sidebar-menu-item-wrapper--interactive:hover {
      background-color: var(--color-gray-2);
    }
    .sidebar-menu-item-wrapper--interactive:hover .sidebar-menu-item {
      color: var(--color-gray-8);
    }
    .sidebar-menu-item-wrapper--selected,
    .sidebar-menu-item-wrapper--selected:hover {
      background-color: var(--color-primary-1);
    }
    .sidebar-menu-item-wrapper--selected .sidebar-menu-item {
      color: var(--color-primary-5);
    }
    .sidebar-menu-item-wrapper--selected .sidebar-menu-item__icon {
      color: var(--color-primary-4);
    }

    .sidebar-menu-item {
      box-sizing: border-box;
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      gap: 12px;
      min-width: 0;
      height: 32px;
      padding: 0 12px;
      border: none;
      border-radius: 4px;
      background: none;
      color: var(--color-gray-7);
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
      text-decoration: none;
      transition: background-color 120ms ease, color 120ms ease;
    }
    .sidebar-menu-item:focus {
      outline: none;
    }
    .sidebar-menu-item:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px oklch(from var(--color-primary-4) l c h / 0.5);
    }
    .sidebar-menu-item--disabled {
      color: var(--color-gray-4);
      cursor: not-allowed;
    }

    .sidebar-menu-item__icon {
      display: flex;
      flex-shrink: 0;
    }
    .sidebar-menu-item__label {
      flex: 1 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sidebar-menu-item__badge {
      display: flex;
      flex-shrink: 0;
      align-items: center;
    }
    .sidebar-menu-item__action {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      padding-right: 6px;
    }
  `;let u1=C3;F1([a({attribute:"start-icon"})],u1.prototype,"startIcon"),F1([a({type:Boolean,reflect:!0})],u1.prototype,"selected"),F1([a({type:Boolean,reflect:!0})],u1.prototype,"disabled"),F1([a()],u1.prototype,"href"),F1([a({type:Boolean,attribute:"open-new-tab"})],u1.prototype,"openNewTab");const u3=class u3 extends g{connectedCallback(){super.connectedCallback(),this.hasAttribute("slot")||this.setAttribute("slot","action")}render(){return s`<div class="sidebar-action" part="action"><slot></slot></div>`}};u3.styles=f`
    :host {
      display: flex;
      align-items: center;
    }
    .sidebar-action {
      display: flex;
      align-items: center;
    }
  `;let g5=u3;const p3=class p3 extends g{connectedCallback(){super.connectedCallback(),this.hasAttribute("slot")||this.setAttribute("slot","badge")}render(){return s`<div class="sidebar-badge" part="badge"><slot></slot></div>`}};p3.styles=f`
    :host {
      display: flex;
      align-items: center;
    }
    .sidebar-badge {
      display: flex;
      align-items: center;
    }
  `;let f5=p3;const h3=class h3 extends g{connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","separator")}render(){return s`<div class="sidebar-separator" part="separator"></div>`}};h3.styles=f`
    :host {
      display: block;
    }
    .sidebar-separator {
      height: 1px;
      background-color: var(--color-gray-3);
    }
  `;let v5=h3;customElements.get("anduin-sidebar")||customElements.define("anduin-sidebar",c5),customElements.get("anduin-sidebar-content")||customElements.define("anduin-sidebar-content",C5),customElements.get("anduin-sidebar-header")||customElements.define("anduin-sidebar-header",R2),customElements.get("anduin-sidebar-footer")||customElements.define("anduin-sidebar-footer",E2),customElements.get("anduin-sidebar-group")||customElements.define("anduin-sidebar-group",u5),customElements.get("anduin-sidebar-group-label")||customElements.define("anduin-sidebar-group-label",p5),customElements.get("anduin-sidebar-menu")||customElements.define("anduin-sidebar-menu",h5),customElements.get("anduin-sidebar-menu-item")||customElements.define("anduin-sidebar-menu-item",u1),customElements.get("anduin-sidebar-action")||customElements.define("anduin-sidebar-action",g5),customElements.get("anduin-sidebar-badge")||customElements.define("anduin-sidebar-badge",f5),customElements.get("anduin-sidebar-separator")||customElements.define("anduin-sidebar-separator",v5);function S(l){if(!l)return null;const e=/^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(l.trim());if(!e)return null;const[t,o,i]=[Number(e[1]),Number(e[2]),Number(e[3])],n=new Date(t,o-1,i);return n.getFullYear()!==t||n.getMonth()!==o-1||n.getDate()!==i?null:n}function _1(l){const e=t=>String(t).padStart(2,"0");return`${l.getFullYear()}-${e(l.getMonth()+1)}-${e(l.getDate())}`}function N1(){const l=new Date;return new Date(l.getFullYear(),l.getMonth(),l.getDate())}function p1(l,e){const t=l.getFullYear(),o=l.getMonth()+e,i=new Date(t,o+1,0).getDate();return new Date(t,o,Math.min(l.getDate(),i))}function R0(l,e){return new Date(l,e+1,0).getDate()}var E0=Object.defineProperty,l1=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&E0(e,t,i),i};const s2="anduin-calendar:change",m5="anduin-calendar:day-hover",ze=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Se=["January","February","March","April","May","June","July","August","September","October","November","December"],$0=["Su","Mo","Tu","We","Th","Fr","Sa"],De=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function d2(l,e){return new Date(l.getFullYear(),l.getMonth(),l.getDate()+e)}function A0(l){const e=["th","st","nd","rd"],t=l%100;return`${l}${e[(t-20)%10]??e[t]??e[0]}`}const g3=class g3 extends g{constructor(){super(...arguments),this.value="",this.minDate="",this.maxDate="",this.rangeStart="",this.rangeEnd="",this.rangeMode=!1,this._viewMonth=N1().getMonth(),this._viewYear=N1().getFullYear(),this._focus="",this._openSelect=null,this._viewSeeded=!1,this._pendingFocus=!1,this._onOutsideClick=e=>{this._openSelect&&!e.composedPath().includes(this)&&(this._openSelect=null)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOutsideClick)}willUpdate(e){if(e.has("value")){const t=S(this.value);if(t)this._viewYear=t.getFullYear(),this._viewMonth=t.getMonth(),this._viewSeeded=!0;else if(!this._viewSeeded){const o=N1();this._viewYear=o.getFullYear(),this._viewMonth=o.getMonth()}}}updated(){var t;if(!this._pendingFocus)return;this._pendingFocus=!1;const e=(t=this.shadowRoot)==null?void 0:t.querySelector('.calendar__day-button[tabindex="0"]');e==null||e.focus()}get _min(){return S(this.minDate)}get _max(){return S(this.maxDate)}_isDisabled(e){const t=this._min,o=this._max;return!!(t&&e.getTime()<t.getTime()||o&&e.getTime()>o.getTime())}_clamp(e){const t=this._min,o=this._max;return t&&e.getTime()<t.getTime()?t:o&&e.getTime()>o.getTime()?o:e}_shiftMonth(e){const t=p1(new Date(this._viewYear,this._viewMonth,1),e);this._viewYear=t.getFullYear(),this._viewMonth=t.getMonth(),this._viewSeeded=!0}_moveFocus(e,t){const o=this._clamp(t);this._isDisabled(o)||(this._focus=_1(o),(o.getMonth()!==e.getMonth()||o.getFullYear()!==e.getFullYear())&&(this._viewYear=o.getFullYear(),this._viewMonth=o.getMonth(),this._viewSeeded=!0),this._pendingFocus=!0)}_onGridKeyDown(e){const t=S(this._focus)??this._defaultFocusDate();switch(e.key){case"ArrowLeft":this._moveFocus(t,e.shiftKey?p1(t,-1):d2(t,-1));break;case"ArrowRight":this._moveFocus(t,e.shiftKey?p1(t,1):d2(t,1));break;case"ArrowUp":this._moveFocus(t,e.shiftKey?p1(t,-12):d2(t,-7));break;case"ArrowDown":this._moveFocus(t,e.shiftKey?p1(t,12):d2(t,7));break;case"Home":this._moveFocus(t,d2(t,-t.getDay()));break;case"End":this._moveFocus(t,d2(t,6-t.getDay()));break;case"PageUp":this._moveFocus(t,p1(t,e.shiftKey?-12:-1));break;case"PageDown":this._moveFocus(t,p1(t,e.shiftKey?12:1));break;case"Enter":case" ":this._isDisabled(t)||this._pick(t);break;default:return}e.preventDefault()}_pick(e){const t=_1(e);this.value=t,this._focus=t,this.dispatchEvent(new CustomEvent(s2,{detail:t,bubbles:!0,composed:!0}))}_emitHover(e){this.dispatchEvent(new CustomEvent(m5,{detail:e,bubbles:!0,composed:!0}))}_defaultFocusDate(){const e=S(this._focus);if(e&&e.getMonth()===this._viewMonth&&e.getFullYear()===this._viewYear)return e;const t=S(this.value);if(t&&t.getMonth()===this._viewMonth&&t.getFullYear()===this._viewYear)return t;const o=N1();return o.getMonth()===this._viewMonth&&o.getFullYear()===this._viewYear?o:this._clamp(new Date(this._viewYear,this._viewMonth,1))}get _yearOptions(){const e=this._min,t=this._max,o=e?e.getFullYear():this._viewYear-10,i=t?t.getFullYear():this._viewYear+10,n=Math.min(o,this._viewYear),r=Math.max(i,this._viewYear);return Array.from({length:r-n+1},(d,C)=>n+C)}_selectMonth(e){this._viewMonth=e,this._viewSeeded=!0,this._openSelect=null}_selectYear(e){this._viewYear=e,this._viewSeeded=!0,this._openSelect=null}_renderSelect(e,t,o,i,n){const r=this._openSelect===e;return s`
      <div class="calendar__select">
        <anduin-button
          appearance="text"
          variant="gray9"
          end-icon="caretDown"
          label="${o}"
          aria-haspopup="listbox"
          aria-expanded="${r}"
          @click=${()=>{this._openSelect=r?null:e}}
        >${t}</anduin-button>
        ${r?s`
              <div class="calendar__listbox" role="listbox" aria-label="${o}">
                ${i.map(d=>s`
                  <button
                    type="button"
                    class="calendar__option${d.selected?" calendar__option--selected":""}"
                    role="option"
                    aria-selected="${d.selected}"
                    @click=${()=>n(d.value)}
                  >${d.label}</button>
                `)}
              </div>
            `:h}
      </div>
    `}render(){const e=_1(N1()),t=S(this.value),o=S(this.rangeStart),i=S(this.rangeEnd),n=this.rangeMode||!!(o||i),r=_1(this._defaultFocusDate()),d=new Date(this._viewYear,this._viewMonth,1),C=new Date(this._viewYear,this._viewMonth+1,0).getDate(),u=d.getDay(),p=[...Array.from({length:u},()=>null),...Array.from({length:C},(L,m)=>m+1)];for(;p.length%7!==0;)p.push(null);const v=Array.from({length:p.length/7},(L,m)=>p.slice(m*7,m*7+7)),H=`${Se[this._viewMonth]} ${this._viewYear}`,b=(()=>{const L=this._min;return L?new Date(this._viewYear,this._viewMonth,0).getTime()<L.getTime():!1})(),x=(()=>{const L=this._max;return L?new Date(this._viewYear,this._viewMonth+1,1).getTime()>L.getTime():!1})();return s`
      <div class="calendar" part="calendar">
        <div class="calendar__header" part="header">
          <anduin-button
            appearance="plain"
            size="small"
            start-icon="chevronLeft"
            label="Previous month"
            ?disabled=${b}
            @click=${()=>this._shiftMonth(-1)}
          ></anduin-button>
          <div class="calendar__header-spacer"></div>
          ${this._renderSelect("month",ze[this._viewMonth],"Choose the month",ze.map((L,m)=>({value:m,label:L,selected:m===this._viewMonth})),L=>this._selectMonth(L))}
          ${this._renderSelect("year",String(this._viewYear),"Choose the year",this._yearOptions.map(L=>({value:L,label:String(L),selected:L===this._viewYear})),L=>this._selectYear(L))}
          <div class="calendar__header-spacer"></div>
          <anduin-button
            appearance="plain"
            size="small"
            start-icon="chevronRight"
            label="Next month"
            ?disabled=${x}
            @click=${()=>this._shiftMonth(1)}
          ></anduin-button>
        </div>

        <table
          class="calendar__grid"
          part="grid"
          role="grid"
          aria-multiselectable="false"
          aria-label="${H}"
          @keydown=${this._onGridKeyDown}
          @mouseleave=${()=>this._emitHover(null)}
        >
          <thead aria-hidden="true">
            <tr>
              ${$0.map((L,m)=>s`
                <th class="calendar__day-header" aria-label="${De[m]}">${L}</th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${v.map(L=>s`
              <tr>
                ${L.map(m=>{if(m===null)return s`<td class="calendar__day-cell"></td>`;const w=new Date(this._viewYear,this._viewMonth,m),Z=_1(w),B=w.getTime(),e1=this._isDisabled(w),z2=!!o&&B===o.getTime(),g1=!!i&&B===i.getTime(),Qe=!!o&&!!i&&B>o.getTime()&&B<i.getTime(),e7=!n&&!!t&&B===t.getTime(),F0=["calendar__day-cell",Qe?"calendar__day-cell--in-range":"",z2&&i?"calendar__day-cell--range-start":"",g1&&o?"calendar__day-cell--range-end":""].filter(Boolean).join(" "),N0=["calendar__day-button",Z===e?"calendar__day-button--today":"",e7?"calendar__day-button--selected":"",z2?"calendar__day-button--range-start":"",g1?"calendar__day-button--range-end":"",Qe?"calendar__day-button--in-range":"",e1?"calendar__day-button--disabled":""].filter(Boolean).join(" ");return s`
                    <td
                      class="${F0}"
                      role="gridcell"
                      aria-selected="${e7||z2||g1}"
                    >
                      <button
                        type="button"
                        class="${N0}"
                        part="day"
                        aria-disabled="${e1}"
                        aria-label="${De[w.getDay()]}, ${Se[w.getMonth()]} ${A0(m)}, ${w.getFullYear()}"
                        tabindex="${Z===r?0:-1}"
                        @click=${()=>{e1||this._pick(w)}}
                        @mouseenter=${()=>{e1||this._emitHover(Z)}}
                      >${m}</button>
                    </td>
                  `})}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}};g3.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }

    .calendar { display: flex; flex-direction: column; font-family: inherit; font-size: 13px; }

    /* ── Header ─────────────────────────────────────────────────── */
    .calendar__header { display: flex; align-items: center; gap: 8px; padding: 0 4px 4px; }
    .calendar__header-spacer { flex: 1; }

    /* Anchor for the absolutely-positioned month/year listbox. */
    .calendar__select { position: relative; }

    .calendar__listbox {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      box-sizing: border-box;
      min-width: 100%;
      max-height: 208px;
      overflow-y: auto;
      padding: 4px;
      border-radius: 8px;
      background-color: var(--color-gray-0);
      box-shadow: 0 2px 8px 0 rgba(29, 41, 57, 0.08),
                  0 8px 24px 0 rgba(29, 41, 57, 0.12);
    }

    .calendar__option {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 4px 12px;
      border: none;
      border-radius: 4px;
      background: none;
      font-family: inherit;
      font-size: 13px;
      line-height: 20px;
      color: var(--color-gray-9);
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
    }
    .calendar__option:hover { background-color: var(--color-gray-2); }
    .calendar__option:focus-visible { box-shadow: 0 0 0 2px var(--color-primary-2); outline: none; }
    .calendar__option--selected { color: var(--color-gray-0); background-color: var(--color-primary-4); }
    .calendar__option--selected:hover { background-color: var(--color-primary-5); }

    /* ── Grid ───────────────────────────────────────────────────── */
    .calendar__grid { border-collapse: collapse; width: 100%; }
    .calendar__day-header {
      text-align: center;
      font-weight: 500;
      color: var(--color-gray-6);
      padding: 4px 0;
      width: 32px;
    }
    .calendar__day-cell { text-align: center; padding: 1px; vertical-align: middle; }

    .calendar__day-button {
      all: unset;
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 8px 0;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      color: var(--color-gray-7);
    }
    .calendar__day-button:focus-visible { box-shadow: 0 0 0 2px var(--color-primary-2); outline: none; }
    .calendar__day-button:hover { background-color: var(--color-gray-3); }
    .calendar__day-button:active { background-color: var(--color-gray-4); }
    .calendar__day-button--today { background-color: var(--color-gray-3); }
    .calendar__day-button--selected { color: var(--color-gray-0); background-color: var(--color-primary-4); }
    .calendar__day-button--selected:hover { background-color: var(--color-primary-5); }
    .calendar__day-button--selected:active { background-color: var(--color-primary-6, var(--color-primary-5)); }
    .calendar__day-button--disabled { opacity: 0.4; pointer-events: none; cursor: not-allowed; }

    /* ── Range painting ─────────────────────────────────────────── */
    /* The tint lives on the cell so it bleeds edge-to-edge between days,
     * while the rounded accent markers live on the button. */
    .calendar__day-cell--in-range { background-color: var(--color-primary-1); }
    .calendar__day-cell--range-start { background-color: var(--color-primary-1); border-radius: 4px 0 0 4px; }
    .calendar__day-cell--range-end { background-color: var(--color-primary-1); border-radius: 0 4px 4px 0; }
    .calendar__day-cell--range-start.calendar__day-cell--range-end { border-radius: 4px; }

    .calendar__day-button--range-start,
    .calendar__day-button--range-end { color: var(--color-gray-0); background-color: var(--color-primary-4); }
    .calendar__day-button--range-start:hover,
    .calendar__day-button--range-end:hover { background-color: var(--color-primary-5); }
    .calendar__day-button--in-range { color: var(--color-primary-7, var(--color-primary-5)); }
    .calendar__day-button--in-range:hover { background-color: var(--color-primary-2); }
  `;let I=g3;l1([a({reflect:!0})],I.prototype,"value"),l1([a({attribute:"min-date"})],I.prototype,"minDate"),l1([a({attribute:"max-date"})],I.prototype,"maxDate"),l1([a({attribute:"range-start"})],I.prototype,"rangeStart"),l1([a({attribute:"range-end"})],I.prototype,"rangeEnd"),l1([a({type:Boolean,attribute:"range-mode"})],I.prototype,"rangeMode"),l1([y()],I.prototype,"_viewMonth"),l1([y()],I.prototype,"_viewYear"),l1([y()],I.prototype,"_focus"),l1([y()],I.prototype,"_openSelect"),customElements.get("anduin-calendar")||customElements.define("anduin-calendar",I);var z0=Object.defineProperty,c2=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&z0(e,t,i),i};const Be="anduin-date-range:change",f3=class f3 extends g{constructor(){super(...arguments),this.startDate="",this.endDate="",this.minDate="",this.maxDate="",this._anchor=null,this._hover=null,this._panels=new Map,this._pushedValue=new Map,this._onCalendarChange=e=>{e.stopPropagation();const t=e.detail;if(!S(t))return;if(this._anchor===null){this._anchor=t,this._hover=null;return}const[o,i]=this._sorted(this._anchor,t);this._anchor=null,this._hover=null,this.startDate=o,this.endDate=i,this.dispatchEvent(new CustomEvent(Be,{detail:{startDate:o,endDate:i},bubbles:!0,composed:!0}))},this._onCalendarHover=e=>{e.stopPropagation(),this._anchor!==null&&(this._hover=e.detail)}}connectedCallback(){super.connectedCallback(),this.addEventListener(s2,this._onCalendarChange),this.addEventListener(m5,this._onCalendarHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(s2,this._onCalendarChange),this.removeEventListener(m5,this._onCalendarHover)}updated(){this._sync()}registerPanel(e,t){this._panels.set(e,t),this._pushedValue.delete(e),this._sync()}unregisterPanel(e){for(const[t,o]of this._panels)o===e&&(this._panels.delete(t),this._pushedValue.delete(t))}_sync(){const[e,t]=this._displayedRange();for(const[o,i]of this._panels){const n=i.calendar;if(!n)continue;n.minDate=this.minDate,n.maxDate=this.maxDate,n.rangeStart=e,n.rangeEnd=t;const r=this._panelValue(o);this._pushedValue.get(o)!==r&&(this._pushedValue.set(o,r),n.value=r)}}_panelValue(e){const t=S(this.startDate)??N1();return _1(e==="start"?t:p1(t,1))}_displayedRange(){if(this._anchor===null)return[this.startDate,this.endDate];if(this._hover===null)return[this._anchor,""];const[e,t]=this._sorted(this._anchor,this._hover);return[e,t]}_sorted(e,t){const o=S(e),i=S(t);return!o||!i?[e,t]:o.getTime()<=i.getTime()?[e,t]:[t,e]}render(){return s`<div class="date-range" part="date-range"><slot></slot></div>`}};f3.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
  `;let Q=f3;c2([a({attribute:"start-date",reflect:!0})],Q.prototype,"startDate"),c2([a({attribute:"end-date",reflect:!0})],Q.prototype,"endDate"),c2([a({attribute:"min-date"})],Q.prototype,"minDate"),c2([a({attribute:"max-date"})],Q.prototype,"maxDate"),c2([y()],Q.prototype,"_anchor"),c2([y()],Q.prototype,"_hover");const v3=class v3 extends g{constructor(){super(...arguments),this._host=null}get calendar(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector("anduin-calendar"))??null}firstUpdated(){var e;this._host=this._findRangeHost(),(e=this._host)==null||e.registerPanel(this.panelRole,this)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._host)==null||e.unregisterPanel(this),this._host=null}_findRangeHost(){let e=this;for(;e;){if(e instanceof Q)return e;e=e instanceof ShadowRoot?e.host:e.parentNode}return null}render(){return s`<anduin-calendar part="calendar" range-mode></anduin-calendar>`}};v3.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }
  `;let $2=v3;class Pe extends $2{constructor(){super(...arguments),this.panelRole="start"}}class Oe extends $2{constructor(){super(...arguments),this.panelRole="end"}}const m3=class m3 extends g{render(){return s`
      <div class="date-range-default" part="layout">
        <anduin-date-range-start part="start"></anduin-date-range-start>
        <anduin-date-range-end part="end"></anduin-date-range-end>
      </div>
    `}};m3.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }

    .date-range-default { display: flex; flex-direction: row; gap: 16px; }
  `;let b5=m3;customElements.get("anduin-date-range")||customElements.define("anduin-date-range",Q),customElements.get("anduin-date-range-default")||customElements.define("anduin-date-range-default",b5),customElements.get("anduin-date-range-start")||customElements.define("anduin-date-range-start",Pe),customElements.get("anduin-date-range-end")||customElements.define("anduin-date-range-end",Oe);var S0=Object.defineProperty,F=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&S0(e,t,i),i};const H5="anduin-date-input:change",Te={M:"month",d:"day",y:"year"};function D0(l){const e=[];let t=0,o=0;for(;o<l.length;){const i=l[o],n=Te[i];if(!n){let d="";for(;o<l.length&&!Te[l[o]];)d+=l[o++];e.push({literal:d}),t+=d.length;continue}let r="";for(;o<l.length&&l[o]===i;)r+=l[o++];e.push({segment:{type:n,placeholder:r,length:r.length,start:t}}),t+=r.length}return e}function q5(l){return l.type==="year"?10**l.length-1:l.length===1?9:l.type==="month"?12:31}const A2=1,y5=class y5 extends g{constructor(){super(...arguments),this.format="MM/dd/yyyy",this.value="",this.size="default",this.disabled=!1,this.readonly=!1,this.status="",this.startIcon="",this.minDate="",this.maxDate="",this.inputid="",this._digits=[],this._active=0,this._buffer="",this._pendingSelection=null,this._tokens=[],this._segments=[],this._onFieldLabelClick=e=>{const t=e.detail;this.inputid&&this.inputid===t&&this._focusSegment(0)}}connectedCallback(){super.connectedCallback();const e=this.closest("anduin-field");e==null||e.addEventListener(r1,this._onFieldLabelClick)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closest("anduin-field"))==null||e.removeEventListener(r1,this._onFieldLabelClick)}willUpdate(e){e.has("format")?(this._tokens=D0(this.format),this._segments=this._tokens.flatMap(t=>"segment"in t?[t.segment]:[]),this._digits=this._segments.map(()=>null),this._active=0,this._buffer="",this.value&&this._adoptValue(this.value)):e.has("value")&&this.value!==this._composeValue()&&this._adoptValue(this.value)}updated(){const e=this._display();if(this._inputEl&&this._inputEl.value!==e&&(this._inputEl.value=e),this._pendingSelection&&this._inputEl){const[t,o]=this._pendingSelection;this._pendingSelection=null,this._inputEl.setSelectionRange(t,o)}}_adoptValue(e){const t=this._segments.map(o=>{const i=e.slice(o.start,o.start+o.length);return/^\d+$/.test(i)?i:null});this._digits=t,this._buffer=""}_display(){return this._tokens.map(e=>{if("literal"in e)return e.literal;const t=e.segment,o=this._segments.indexOf(t);return o===this._active&&this._buffer?this._buffer.padStart(t.length,"0"):this._digits[o]??t.placeholder}).join("")}_composeValue(){return!this._segments.length||this._digits.some(e=>e===null)?"":this._tokens.map(e=>"literal"in e?e.literal:this._digits[this._segments.indexOf(e.segment)]).join("")}_setDigits(e){if(this._digits=e,!this._composeValue()){this.value="";return}const o=this._clampToBounds(e);this._digits=o,this.value=this._composeValue(),this.dispatchEvent(new CustomEvent(H5,{detail:this.value,bubbles:!0,composed:!0}))}_indexOfType(e){return this._segments.findIndex(t=>t.type===e)}_clampToBounds(e){const t=S(this.minDate),o=S(this.maxDate);if(!t&&!o)return e;const i=this._indexOfType("month"),n=this._indexOfType("day"),r=this._indexOfType("year");if(i<0||n<0||r<0)return e;const d=Number(e[r]),C=Number(e[i]),u=Number(e[n]),p=Math.min(u,R0(d,C-1)),v=new Date(d,C-1,p),H=t&&v.getTime()<t.getTime()?t:o&&v.getTime()>o.getTime()?o:null;if(!H){if(p===u)return e;const x=[...e];return x[n]=String(p).padStart(this._segments[n].length,"0"),x}const b=[...e];return b[r]=String(H.getFullYear()).padStart(this._segments[r].length,"0").slice(-this._segments[r].length),b[i]=String(H.getMonth()+1).padStart(this._segments[i].length,"0"),b[n]=String(H.getDate()).padStart(this._segments[n].length,"0"),b}_focusSegment(e){var o,i;const t=this._segments[e];t&&(this._flushBuffer(),this._active=e,this._buffer="",this._pendingSelection=[t.start,t.start+t.length],(o=this._inputEl)==null||o.focus(),(i=this._inputEl)==null||i.setSelectionRange(t.start,t.start+t.length))}_segmentAt(e){for(let t=0;t<this._segments.length;t++){const o=this._segments[t];if(e>=o.start&&e<=o.start+o.length)return t}return this._segments.length-1}_onSelectionIntent(){if(this.disabled||this.readonly||!this._inputEl)return;const e=this._inputEl.selectionStart??0;this._focusSegment(this._segmentAt(e))}_writeSegment(e,t){const o=this._segments[e];if(!o)return;const i=Math.min(Math.max(Number(t),A2),q5(o)),n=[...this._digits];n[e]=String(i).padStart(o.length,"0"),this._buffer="",this._setDigits(n)}_flushBuffer(){this._buffer&&this._writeSegment(this._active,this._buffer)}_commitBuffer(e,t,o){this._writeSegment(e,t),o&&e<this._segments.length-1?this._focusSegment(e+1):this._focusSegment(e)}_typeDigit(e){const t=this._active,o=this._segments[t];if(!o)return;const i=this._buffer+e;if(o.length-i.length<=0){this._commitBuffer(t,i,!0);return}const r=Number(i.padEnd(o.length,"0")),d=Number(i.padEnd(o.length,"9"));if(r>q5(o)||d<A2){this._commitBuffer(t,i,!0);return}this._buffer=i,this._pendingSelection=[o.start,o.start+o.length]}_step(e){const t=this._active,o=this._segments[t];if(!o)return;const i=q5(o),n=this._digits[t];let r;n===null?r=e>0?A2:i:(r=Number(n)+e,r>i&&(r=A2),r<A2&&(r=i));const d=[...this._digits];d[t]=String(r).padStart(o.length,"0"),this._buffer="",this._setDigits(d),this._pendingSelection=[o.start,o.start+o.length]}_clearSegment(){const e=this._active,t=this._segments[e];if(!t)return;const o=[...this._digits];o[e]=null,this._buffer="",this._setDigits(o),this._pendingSelection=[t.start,t.start+t.length]}_onKeyDown(e){if(this.disabled||this.readonly)return;const t=this._segments.length-1;if(/^\d$/.test(e.key)&&!e.metaKey&&!e.ctrlKey&&!e.altKey){e.preventDefault(),this._typeDigit(e.key);return}switch(e.key){case"ArrowRight":this._active<t&&(e.preventDefault(),this._focusSegment(this._active+1));return;case"ArrowLeft":this._active>0&&(e.preventDefault(),this._focusSegment(this._active-1));return;case"ArrowUp":e.preventDefault(),this._step(1);return;case"ArrowDown":e.preventDefault(),this._step(-1);return;case"Backspace":case"Delete":e.preventDefault(),this._clearSegment();return;case"Tab":e.shiftKey&&this._active>0?(e.preventDefault(),this._focusSegment(this._active-1)):!e.shiftKey&&this._active<t&&(e.preventDefault(),this._focusSegment(this._active+1));return}}render(){const e=!!this.startIcon,t=["date-input-container",e?"date-input-container--has-icon":""].filter(Boolean).join(" "),o=["date-input",`date-input--${this.size}`,this.disabled?"date-input--disabled":"",this.readonly?"date-input--readonly":"",this.status?`date-input--${this.status}`:""].filter(Boolean).join(" "),i=this.size==="small"?"12":"16";return s`
      <div class="${t}" part="container">
        ${e?s`<span class="date-input__icon" part="icon">
              <anduin-icon name="${this.startIcon}" size="${i}"></anduin-icon>
            </span>`:h}
        <input
          class="${o}"
          part="input"
          type="text"
          inputmode="numeric"
          autocomplete="off"
          spellcheck="false"
          role="textbox"
          .value=${this._display()}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          aria-invalid=${this.status==="invalid"?"true":h}
          @keydown=${this._onKeyDown}
          @mouseup=${this._onSelectionIntent}
          @focus=${this._onSelectionIntent}
          @blur=${()=>this._flushBuffer()}
          @beforeinput=${n=>n.preventDefault()}
          @paste=${n=>n.preventDefault()}
          @drop=${n=>n.preventDefault()}
        />
      </div>
    `}};y5.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0},y5.styles=f`
    :host { display: block; font-family: var(--font-sans); }

    .date-input-container { position: relative; display: flex; align-items: center; }

    .date-input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding-top: 0;
      padding-bottom: 0;
      border: 1px solid var(--color-gray-4);
      border-radius: 4px;
      transition: all 0.1s, box-shadow 0.3s;
      font-size: 13px;
      line-height: 20px;
      color: var(--color-gray-8);
      background-color: var(--color-gray-0);
      font-family: var(--font-sans);
      /* Keeps digits and placeholder letters from jittering as segments fill. */
      letter-spacing: 0.5px;
    }
    .date-input:focus { outline: none; border-color: var(--color-primary-4); }
    .date-input:active { box-shadow: 0 0 0 2px var(--color-primary-1); }

    /* Font size stays 13px across sizes so segment widths don't shift. */
    .date-input--small   { height: 24px; padding-left: 6px;  padding-right: 6px; }
    .date-input--default { height: 32px; padding-left: 12px; padding-right: 12px; }
    .date-input--large   { height: 40px; padding-left: 16px; padding-right: 16px; }

    .date-input-container--has-icon .date-input { padding-left: 32px; }

    .date-input__icon {
      position: absolute;
      left: 8px;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      color: var(--color-gray-6);
    }

    .date-input--disabled { color: var(--color-gray-7); background-color: var(--color-gray-2); cursor: not-allowed; }
    .date-input--readonly { background-color: var(--color-gray-2); }
    .date-input--valid    { border-color: var(--color-success-4); }
    .date-input--invalid  { border-color: var(--color-danger-4); }
    .date-input--warning  { border-color: var(--color-warning-4); }
    .date-input--loading  { border-color: var(--color-gray-4); }
  `;let $=y5;F([a()],$.prototype,"format"),F([a()],$.prototype,"value"),F([a()],$.prototype,"size"),F([a({type:Boolean})],$.prototype,"disabled"),F([a({type:Boolean})],$.prototype,"readonly"),F([a()],$.prototype,"status"),F([a({attribute:"start-icon"})],$.prototype,"startIcon"),F([a({attribute:"min-date"})],$.prototype,"minDate"),F([a({attribute:"max-date"})],$.prototype,"maxDate"),F([a()],$.prototype,"inputid"),F([y()],$.prototype,"_digits"),F([y()],$.prototype,"_active"),F([y()],$.prototype,"_buffer"),F([z("input")],$.prototype,"_inputEl"),customElements.get("anduin-date-input")||customElements.define("anduin-date-input",$);var B0=Object.defineProperty,N=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&B0(e,t,i),i};const Ie="anduin-date-picker:change",Fe={M:"month",d:"day",y:"year"};function P0(l,e){if(!l)return null;const t={};let o=0,i=0;for(;i<e.length;){const d=e[i],C=Fe[d];if(!C){i++,o++;continue}let u=0;for(;i<e.length&&e[i]===d;)i++,u++;const p=l.slice(o,o+u);if(!/^\d+$/.test(p))return null;t[C]=p,o+=u}if(!t.month||!t.day||!t.year)return null;const n=Number(t.year),r=new Date(n,Number(t.month)-1,Number(t.day));return r.getMonth()!==Number(t.month)-1||r.getDate()!==Number(t.day)?null:r}function O0(l,e){const t={month:l.getMonth()+1,day:l.getDate(),year:l.getFullYear()};let o="",i=0;for(;i<e.length;){const n=e[i],r=Fe[n];if(!r){o+=n,i++;continue}let d=0;for(;i<e.length&&e[i]===n;)i++,d++;o+=String(t[r]).padStart(d,"0").slice(-d)}return o}const b3=class b3 extends g{constructor(){super(...arguments),this.format="MM/dd/yyyy",this.value="",this.size="default",this.disabled=!1,this.readonly=!1,this.status="",this.startIcon="",this.minDate="",this.maxDate="",this.placement="bottom-start",this.inputid="",this._open=!1,this._onPopoverOpenChange=e=>{e.stopPropagation(),this._open=e.detail},this._onInputChange=e=>{e.stopPropagation(),this._emit(e.detail)},this._onCalendarChange=e=>{e.stopPropagation();const t=S(e.detail);t&&(this._emit(O0(t,this.format)),this._closePopover())},this._onKeyDown=e=>{var t;e.key==="Escape"&&this._open&&(e.stopPropagation(),this._closePopover(),(t=this._inputEl)==null||t.focus())},this._onTriggerClick=e=>{(this.disabled||this.readonly)&&e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener(H5,this._onInputChange),this.addEventListener(s2,this._onCalendarChange),this.addEventListener(q2,this._onPopoverOpenChange),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(H5,this._onInputChange),this.removeEventListener(s2,this._onCalendarChange),this.removeEventListener(q2,this._onPopoverOpenChange),this.removeEventListener("keydown",this._onKeyDown)}_closePopover(){this._popoverEl&&(this._popoverEl.open=!1),this._open=!1}get _date(){return P0(this.value,this.format)}get _isoValue(){const e=this._date;return e?_1(e):""}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent(Ie,{detail:e,bubbles:!0,composed:!0}))}render(){return s`
      <div class="datepicker" part="datepicker">
        <anduin-popover full-width placement=${this.placement}>
          <anduin-date-input
            slot="trigger"
            part="input"
            @click=${this._onTriggerClick}
            format=${this.format}
            size=${this.size}
            status=${this.status}
            start-icon=${this.startIcon}
            min-date=${this.minDate}
            max-date=${this.maxDate}
            inputid=${this.inputid}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            .value=${this.value}
          ></anduin-date-input>

          <div class="datepicker__panel" part="panel">
            ${this._open?s`<anduin-calendar
                  part="calendar"
                  min-date=${this.minDate}
                  max-date=${this.maxDate}
                  .value=${this._isoValue}
                ></anduin-calendar>`:h}
            <slot name="actions"></slot>
          </div>
        </anduin-popover>
      </div>
    `}};b3.styles=f`
    :host { display: inline-block; font-family: var(--font-sans); }

    .datepicker { display: block; }
    /* The popover wraps the input, so it has to span the picker's full width. */
    anduin-popover { display: block; width: 100%; }

    /* The popover contributes 8px; the calendar reads better with 16px total. */
    .datepicker__panel { padding: 8px; display: flex; flex-direction: column; }
  `;let A=b3;N([a()],A.prototype,"format"),N([a()],A.prototype,"value"),N([a()],A.prototype,"size"),N([a({type:Boolean})],A.prototype,"disabled"),N([a({type:Boolean})],A.prototype,"readonly"),N([a()],A.prototype,"status"),N([a({attribute:"start-icon"})],A.prototype,"startIcon"),N([a({attribute:"min-date"})],A.prototype,"minDate"),N([a({attribute:"max-date"})],A.prototype,"maxDate"),N([a()],A.prototype,"placement"),N([a()],A.prototype,"inputid"),N([y()],A.prototype,"_open"),N([z("anduin-date-input")],A.prototype,"_inputEl"),N([z("anduin-popover")],A.prototype,"_popoverEl"),customElements.get("anduin-date-picker")||customElements.define("anduin-date-picker",A);var T0=Object.defineProperty,V=(l,e,t,o)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&T0(e,t,i),i};const Ne="anduin-table:sort",Ge="anduin-table:column-click",Ue="anduin-table:row-click",je="anduin-table:selection-change",Ke="anduin-table:cell-context-menu",We="anduin-table:row-expand",Ye="anduin-table:row-collapse",qe="anduin-table:group-toggle",X5="anduin-table:column-resize",Xe=40,h1=l=>l.type==="selection",L1=(l,e)=>{if(!e)return;let t=l;for(const o of e.split(".")){if(t===null||typeof t!="object")return;t=t[o]}return t},I0=(l,e)=>l===e?0:l==null?1:e==null?-1:typeof l=="number"&&typeof e=="number"?l-e:typeof l=="boolean"&&typeof e=="boolean"?Number(l)-Number(e):l instanceof Date&&e instanceof Date?l.getTime()-e.getTime():String(l).localeCompare(String(e),void 0,{numeric:!0,sensitivity:"base"}),H3=class H3 extends g{constructor(){super(...arguments),this.columns=[],this.data=[],this.layout="fit-data",this.renderMode="basic",this.rowHeight=40,this.height="",this.maxHeight="",this.minHeight="",this.resizableColumns=!0,this.hideHeader=!1,this.loading=!1,this.selectable="clickable",this.indexColumn="id",this.columnAlign="left",this.columnVerticalAlign="middle",this.sortField="",this.sortDirection="asc",this.dataTree=!1,this.treeChildrenField="children",this.treeChildIndent=20,this.groupBy="",this.selectedRows=[],this.expandedKeys=new Set,this.collapsedGroups=new Set,this.virtualScrollTop=0,this.viewportHeight=0,this.scrolledX=!1,this.scrollableXEnd=!1,this.resizedWidths={},this.resizingKey="",this.rangeAnchorKey=null,this.isDraggingRange=!1,this.dragBaseKeys=[],this.dragSelects=!0,this.autoExpandedKeys=new Set,this.resizeDrag=null,this.resizeFrame=0,this.renderSelectedKeys=new Set,this.renderSelectableRows=[],this.cachedRenderRows=[],this.rowsDirty=!0,this.onWindowMouseUp=()=>{this.isDraggingRange=!1},this.onScroll=e=>{const t=e.currentTarget;this.renderMode==="virtual"&&(this.virtualScrollTop=t.scrollTop),this.syncHorizontalScrollState()},this.onResizeMove=e=>{const t=this.resizeDrag;if(!t)return;const o=48;t.width=Math.max(o,t.startWidth+(e.clientX-t.startX)),!this.resizeFrame&&(this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.resizeDrag&&(this.resizedWidths={...this.resizedWidths,[t.key]:t.width})}))},this.onResizeEnd=e=>{const t=this.resizeDrag;t&&(this.resizeFrame&&(cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0),this.resizedWidths={...this.resizedWidths,[t.key]:t.width},this.resizeDrag=null,this.resizingKey="",this.dispatchEvent(new CustomEvent(X5,{detail:{column:e,field:t.key,width:t.width},bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=void 0}firstUpdated(){const e=this.scrollEl;e&&(this.resizeObserver=new ResizeObserver(()=>{this.viewportHeight=e.clientHeight,this.syncHorizontalScrollState()}),this.resizeObserver.observe(e),this.viewportHeight=e.clientHeight)}willUpdate(e){["data","columns","sortField","sortDirection","groupBy","dataTree","treeChildrenField","indexColumn","onStartExpanded","isRowDisabled","selectedRows","expandedKeys","collapsedGroups"].some(o=>e.has(o))&&(this.rowsDirty=!0),this.rowsDirty&&(this.cachedRenderRows=this.buildRenderRows(),this.renderSelectedKeys=this.selectedKeySet,this.renderSelectableRows=this.cachedRenderRows.filter(o=>o.kind==="row"&&!this.rowIsDisabled(o.data)),this.rowsDirty=!1)}updated(e){this.applyFrozenOffsets(),(e.has("data")||e.has("columns"))&&this.syncHorizontalScrollState()}get scrollEl(){return this.renderRoot.querySelector(".table__scroll")}keyFor(e,t){const o=L1(e,this.indexColumn);return o==null?`__index:${t}`:String(o)}get selectedKeySet(){const e=new Set;return this.selectedRows.forEach((t,o)=>e.add(this.keyFor(t,o))),e}rowIsDisabled(e){return this.isRowDisabled?this.isRowDisabled(e):!1}get frozenSides(){const e=this.columns,t=e.map(()=>null);for(let o=0;o<e.length;o++){const i=e[o].isFrozen;if(!i)break;t[o]=i==="right"?"right":"left"}for(let o=e.length-1;o>=0;o--){const i=e[o].isFrozen;if(!i)break;t[o]===null&&(t[o]=i==="left"?"left":"right")}for(let o=0;o<e.length;o++){const i=e[o].isFrozen;(i==="left"||i==="right")&&(t[o]=i)}return t}applyFrozenOffsets(){const e=this.frozenSides;if(!e.some(Boolean))return;const t=Array.from(this.renderRoot.querySelectorAll("thead th[data-col]"));if(t.length===0)return;const o=t.map(C=>C.getBoundingClientRect().width),i=e.map(()=>null);let n=0;for(let C=0;C<e.length;C++)e[C]==="left"&&(i[C]=n,n+=o[C]??0);let r=0;for(let C=e.length-1;C>=0;C--)e[C]==="right"&&(i[C]=r,r+=o[C]??0);this.renderRoot.querySelectorAll("[data-col]").forEach(C=>{const u=Number(C.dataset.col),p=e[u],v=i[u];!p||v===null||(C.style[p]=`${v}px`)})}get sortedColumn(){if(this.sortField)return this.columns.find(e=>!h1(e)&&e.field===this.sortField)}sortRows(e){const t=this.sortedColumn;if(!t)return e;const o=this.sortDirection==="desc"?-1:1,i=t.sortWith?(n,r)=>t.sortWith({a:n,b:r}):(n,r)=>I0(L1(n,t.field),L1(r,t.field));return[...e].sort((n,r)=>i(n,r)*o)}onHeaderClick(e){if(this.dispatchEvent(new CustomEvent(Ge,{detail:{column:e},bubbles:!0,composed:!0})),!e.isSortable)return;let t=e.field,o="asc";this.sortField===e.field&&(this.sortDirection==="asc"?o="desc":(t="",o=null)),this.sortField=t,o&&(this.sortDirection=o),this.dispatchEvent(new CustomEvent(Ne,{detail:{field:t,direction:o,column:e},bubbles:!0,composed:!0}))}buildRenderRows(){return this.groupBy?this.buildGroupedRows():this.buildFlatRows(this.sortRows(this.data),0)}buildFlatRows(e,t){const o=[];return e.forEach((i,n)=>{const r=this.keyFor(i,n),d=this.dataTree?L1(i,this.treeChildrenField):void 0,C=Array.isArray(d)&&d.length>0,u=C&&this.isExpanded(r,i);o.push({kind:"row",data:i,key:r,depth:t,hasChildren:C,expanded:u}),u&&o.push(...this.buildFlatRows(this.sortRows(d),t+1))}),o}buildGroupedRows(){const e=new Map;this.data.forEach(o=>{const i=L1(o,this.groupBy),n=String(i),r=e.get(n);r?r.rows.push(o):e.set(n,{value:i,rows:[o]})});const t=[];return e.forEach(({value:o,rows:i},n)=>{const r=!this.collapsedGroups.has(n);t.push({kind:"group",key:n,value:o,rows:i,expanded:r}),r&&t.push(...this.buildFlatRows(this.sortRows(i),0))}),t}isExpanded(e,t){return this.expandedKeys.has(e)?!0:this.onStartExpanded&&!this.autoExpandedKeys.has(e)&&(this.autoExpandedKeys.add(e),this.onStartExpanded(t))?(this.expandedKeys.add(e),!0):!1}toggleTreeRow(e){const t=!e.expanded,o=new Set(this.expandedKeys);t?o.add(e.key):o.delete(e.key),this.expandedKeys=o,this.dispatchEvent(new CustomEvent(t?We:Ye,{detail:{data:e.data,key:e.key,expanded:t},bubbles:!0,composed:!0}))}toggleGroup(e){const t=!e.expanded,o=new Set(this.collapsedGroups);t?o.delete(e.key):o.add(e.key),this.collapsedGroups=o,this.dispatchEvent(new CustomEvent(qe,{detail:{value:e.value,rows:e.rows,expanded:t},bubbles:!0,composed:!0}))}expandAll(){const e=new Set,t=o=>{o.forEach((i,n)=>{const r=L1(i,this.treeChildrenField);Array.isArray(r)&&r.length>0&&(e.add(this.keyFor(i,n)),t(r))})};t(this.data),this.expandedKeys=e}collapseAll(){this.expandedKeys=new Set}get selectableRows(){return this.buildRenderRows().filter(e=>e.kind==="row"&&!this.rowIsDisabled(e.data))}commitSelection(e){const t=new Map,o=n=>{n.forEach((r,d)=>{t.set(this.keyFor(r,d),r);const C=this.dataTree?L1(r,this.treeChildrenField):void 0;Array.isArray(C)&&o(C)})};o(this.data);const i=[...e].filter(n=>t.has(n));this.selectedRows=i.map(n=>t.get(n)),this.dispatchEvent(new CustomEvent(je,{detail:{selectedRows:this.selectedRows,selectedKeys:i},bubbles:!0,composed:!0}))}setRowSelected(e,t){if(this.rowIsDisabled(e.data))return;const o=this.selectedKeySet;t?o.add(e.key):o.delete(e.key),this.rangeAnchorKey=e.key,this.commitSelection(o)}toggleAllRows(e){const t=this.selectedKeySet;this.selectableRows.forEach(o=>{e?t.add(o.key):t.delete(o.key)}),this.commitSelection(t)}selectRange(e,t,o){const i=this.selectableRows,n=i.findIndex(v=>v.key===e.key);if(n<0)return;const r=this.rangeAnchorKey?i.findIndex(v=>v.key===this.rangeAnchorKey):-1,d=r<0?n:r,[C,u]=d<=n?[d,n]:[n,d],p=new Set(o);for(let v=C;v<=u;v++)t?p.add(i[v].key):p.delete(i[v].key);this.commitSelection(p)}onRowMouseDown(e,t){this.selectable!=="selectable-by-dragging"||!e.shiftKey||this.rowIsDisabled(t.data)||(e.preventDefault(),this.isDraggingRange=!0,this.dragBaseKeys=[...this.selectedKeySet],this.dragSelects=!this.selectedKeySet.has(t.key),this.rangeAnchorKey=t.key,this.selectRange(t,this.dragSelects,this.dragBaseKeys))}onRowMouseEnter(e){this.isDraggingRange&&this.selectRange(e,this.dragSelects,this.dragBaseKeys)}onRowClick(e,t,o){this.dispatchEvent(new CustomEvent(Ue,{detail:{data:t.data,key:t.key,index:o,originalEvent:e},bubbles:!0,composed:!0}));const i=this.selectable;if(i==="unselectable"||i==="clickable"||this.rowIsDisabled(t.data))return;const n=this.selectedKeySet.has(t.key);if(i==="selectable-by-clicking"&&e.shiftKey){this.selectRange(t,!0,e.metaKey||e.ctrlKey?[...this.selectedKeySet]:[]);return}if(i==="selectable-by-clicking"&&!(e.metaKey||e.ctrlKey)){this.rangeAnchorKey=t.key,this.commitSelection(new Set(n&&this.selectedRows.length===1?[]:[t.key]));return}this.setRowSelected(t,!n)}onCellContextMenu(e,t,o,i){this.dispatchEvent(new CustomEvent(Ke,{detail:{data:t.data,key:t.key,index:o,column:i,x:e.clientX,y:e.clientY,originalEvent:e},bubbles:!0,composed:!0,cancelable:!0}))}syncHorizontalScrollState(){const e=this.scrollEl;e&&(this.scrolledX=e.scrollLeft>0,this.scrollableXEnd=Math.ceil(e.scrollLeft+e.clientWidth)<e.scrollWidth)}columnKey(e,t){return h1(e)?`__selection:${t}`:e.field||`__col:${t}`}widthFor(e,t){return this.resizedWidths[this.columnKey(e,t)]??e.width}isStretchColumn(e,t){return this.layout!=="fit-data-stretch"||t!==this.columns.length-1?!1:this.resizedWidths[this.columnKey(e,t)]===void 0}sizingClass(e,t){return this.isStretchColumn(e,t)?"table__cell--stretch":this.widthFor(e,t)?"table__cell--sized":""}cellStyle(e,t){if(this.isStretchColumn(e,t))return"width:100%";const o=this.widthFor(e,t),i=[];return o&&(i.push(`width:${o}px`),this.layout!=="fit-columns"&&i.push(`max-width:${o}px`)),e.minWidth?i.push(`min-width:${e.minWidth}px`):o&&i.push(`min-width:${o}px`),i.join(";")}fitColumnsMinWidth(){return this.layout!=="fit-columns"||!this.columns.some(e=>e.minWidth)?0:this.columns.reduce((e,t,o)=>{const i=h1(t)&&!t.width&&!t.minWidth?Xe:Math.max(this.widthFor(t,o)??0,t.minWidth??0);return e+i},0)}isColumnResizable(e){return e.isResizable??this.resizableColumns}onResizeStart(e,t,o){e.preventDefault(),e.stopPropagation();const i=e.currentTarget,n=i.closest("th");if(!n)return;const r=n.getBoundingClientRect().width;this.resizeDrag={key:this.columnKey(t,o),startX:e.clientX,startWidth:r,width:r},this.resizingKey=this.resizeDrag.key,i.setPointerCapture(e.pointerId)}onResizeReset(e,t,o){e.preventDefault(),e.stopPropagation();const i=this.columnKey(t,o);if(this.resizedWidths[i]===void 0)return;const n={...this.resizedWidths};delete n[i],this.resizedWidths=n,this.dispatchEvent(new CustomEvent(X5,{detail:{column:t,field:i,width:null},bubbles:!0,composed:!0}))}resetColumnWidths(){this.resizedWidths={}}alignClass(e){const t=e.align??this.columnAlign,o=e.verticalAlign??this.columnVerticalAlign;return[t!=="left"?`table__cell--${t}`:"",o!=="middle"?`table__cell--${o}`:""].filter(Boolean).join(" ")}renderHeaderCell(e,t){const o=this.frozenSides,i=o[t],n=i==="left"?o[t+1]!=="left":i==="right"?o[t-1]!=="right":!1,r=["table__header-cell",i?"table__header-cell--frozen":"",i&&n?`table__header-cell--frozen-${i}-edge`:"",!h1(e)&&e.isSortable?"table__header-cell--sortable":"",h1(e)?"table__cell--selection":"",this.sizingClass(e,t)].filter(Boolean).join(" "),d=this.cellStyle(e,t),C=e.headerAlign??e.align??this.columnAlign,u=["table__header-inner",C!=="left"?`table__header-inner--${C}`:""].filter(Boolean).join(" "),p=this.columnKey(e,t),v=this.isColumnResizable(e)?s`
          <span
            class="table__resize-handle ${this.resizingKey===p?"table__resize-handle--active":""}"
            part="resize-handle"
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize ${e.title??"column"}"
            @pointerdown=${m=>this.onResizeStart(m,e,t)}
            @pointermove=${this.onResizeMove}
            @pointerup=${()=>this.onResizeEnd(e)}
            @pointercancel=${()=>this.onResizeEnd(e)}
            @dblclick=${m=>this.onResizeReset(m,e,t)}
            @click=${m=>m.stopPropagation()}
          ></span>
        `:h;if(h1(e)){const m=this.renderSelectableRows,w=this.renderSelectedKeys,Z=m.filter(g1=>w.has(g1.key)).length,B=m.length>0&&Z===m.length,e1=Z>0&&!B,z2=e.renderHeader?e.renderHeader({areAllRowsSelected:B,hasSelectedRow:Z>0,onChange:g1=>this.toggleAllRows(g1)}):s`
            <anduin-checkbox
              .checked=${B}
              .indeterminate=${e1}
              aria-label="${B?"Deselect all rows":"Select all rows"}"
              @anduin-checkbox:change=${g1=>{g1.stopPropagation(),this.toggleAllRows(!B)}}
            ></anduin-checkbox>
          `;return s`
        <th
          class="${r}"
          part="header-cell"
          scope="col"
          data-col="${t}"
          style="${d}"
        ><div class="${u}">${z2}</div>${v}</th>
      `}const H=this.sortField===e.field,b=H?this.sortDirection:null,x=e.renderHeader?e.renderHeader({column:e,sortDirection:b}):s`<span class="table__header-text">${e.title??""}</span>`,L=e.isSortable?s`
          <anduin-icon
            class="table__sort-icon ${H?"table__sort-icon--active":""}"
            name="${b==="desc"?"caretDown":"caretUp"}"
            size="16"
          ></anduin-icon>
        `:h;return s`
      <th
        class="${r}"
        part="header-cell"
        scope="col"
        data-col="${t}"
        style="${d}"
        tabindex="${e.isSortable?"0":h}"
        aria-sort="${H?b==="desc"?"descending":"ascending":e.isSortable?"none":h}"
        @click=${()=>this.onHeaderClick(e)}
        @keydown=${m=>{e.isSortable&&(m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),this.onHeaderClick(e)))}}
      ><div class="${u}">${x}${L}</div>${v}</th>
    `}renderCell(e,t,o,i){const n=this.frozenSides,r=n[i],d=r==="left"?n[i+1]!=="left":r==="right"?n[i-1]!=="right":!1,C=["table__cell",this.alignClass(o),r?"table__cell--frozen":"",r&&d?`table__cell--frozen-${r}-edge`:"",h1(o)?"table__cell--selection":"",o.showOnRowHover?"table__cell--hover-only":"",this.sizingClass(o,i)].filter(Boolean).join(" "),u=this.cellStyle(o,i);if(h1(o)){const x=this.renderSelectedKeys.has(e.key),L=this.rowIsDisabled(e.data),m=Z=>this.setRowSelected(e,Z),w=o.renderCell?o.renderCell({data:e.data,isChecked:x,isDisabled:L,onChange:m}):s`
            <anduin-checkbox
              .checked=${x}
              .disabled=${L}
              aria-label="${x?"Deselect row":"Select row"}"
              @anduin-checkbox:change=${Z=>{Z.stopPropagation(),m(!x)}}
            ></anduin-checkbox>
          `;return s`
        <td
          class="${C}"
          part="cell"
          data-col="${i}"
          style="${u}"
          @click=${Z=>Z.stopPropagation()}
        >${w}</td>
      `}const p=L1(e.data,o.field),v=o.renderCell?o.renderCell({data:e.data,value:p,rowIndex:t,column:o}):p==null?h:String(p),b=this.dataTree&&i===this.firstDataColumnIndex?s`
          <div class="table__tree-cell" style="padding-left:${e.depth*this.treeChildIndent}px">
            ${e.hasChildren?s`
                  <button
                    class="table__tree-toggle"
                    type="button"
                    aria-expanded="${e.expanded}"
                    aria-label="${e.expanded?"Collapse row":"Expand row"}"
                    @click=${x=>{x.stopPropagation(),this.toggleTreeRow(e)}}
                  >
                    <anduin-icon
                      name="${e.expanded?"chevronDown":"chevronRight"}"
                      size="16"
                    ></anduin-icon>
                  </button>
                `:s`<span class="table__tree-spacer"></span>`}
            <span>${v}</span>
          </div>
        `:v;return s`
      <td
        class="${C}"
        part="cell"
        data-col="${i}"
        style="${u}"
        @contextmenu=${x=>this.onCellContextMenu(x,e,t,o)}
      >${b}</td>
    `}get firstDataColumnIndex(){const e=this.columns.findIndex(t=>!h1(t));return e<0?0:e}renderRow(e,t){const o=this.renderSelectedKeys.has(e.key),i=this.selectable!=="unselectable",n=this.rowClass?this.rowClass(e.data,t).trim():"",r=["table__row",i?"table__row--interactive":"",o?"table__row--selected":"",n].filter(Boolean).join(" ");return s`
      <tr
        class="${r}"
        part="${n?`row ${n}`:"row"}"
        aria-selected="${this.selectable==="unselectable"||this.selectable==="clickable"?h:String(o)}"
        style="${this.renderMode==="virtual"?`height:${this.rowHeight}px`:""}"
        @click=${d=>this.onRowClick(d,e,t)}
        @mousedown=${d=>this.onRowMouseDown(d,e)}
        @mouseenter=${()=>this.onRowMouseEnter(e)}
      >
        ${this.columns.map((d,C)=>this.renderCell(e,t,d,C))}
        ${this.layout==="fit-data-fill"?s`<td class="table__cell" style="width:100%"></td>`:h}
      </tr>
    `}renderGroupRow(e){const t=this.renderGroupHeader?this.renderGroupHeader(e.value,e.rows.length,e.rows):s`
          <span>${String(e.value)}</span>
          <span class="table__group-count">${e.rows.length}</span>
        `;return s`
      <tr class="table__group-row" part="group-row">
        <td class="table__group-cell" colspan="${this.columnCount}">
          <button
            class="table__group-toggle"
            type="button"
            aria-expanded="${e.expanded}"
            @click=${()=>this.toggleGroup(e)}
          >
            <anduin-icon
              name="${e.expanded?"chevronDown":"chevronRight"}"
              size="16"
            ></anduin-icon>
            ${t}
          </button>
        </td>
      </tr>
    `}get columnCount(){return this.columns.length+(this.layout==="fit-data-fill"?1:0)}renderPlaceholder(){return s`
      <tr>
        <td class="table__placeholder-cell" part="placeholder" colspan="${this.columnCount}">
          <slot name="empty">No data to display</slot>
        </td>
      </tr>
    `}render(){const e=this.cachedRenderRows,t=[this.height?`height:${this.height}`:"",this.maxHeight?`max-height:${this.maxHeight}`:"",this.minHeight?`min-height:${this.minHeight}`:""].filter(Boolean).join(";"),o=this.fitColumnsMinWidth(),i=["table",this.scrolledX?"table--scrolled-x":"",this.scrollableXEnd?"table--scrollable-x-end":""].filter(Boolean).join(" ");let n=e,r=0,d=0,C=0;if(this.renderMode==="virtual"&&e.length>0){const p=Math.ceil((this.viewportHeight||400)/this.rowHeight),v=Math.max(0,Math.floor(this.virtualScrollTop/this.rowHeight)-6),H=Math.min(e.length,v+p+12);n=e.slice(v,H),r=v*this.rowHeight,d=(e.length-H)*this.rowHeight,C=v}return s`
      <div class="${i}" part="table" style="${t}">
        <div class="table__scroll" part="scroll" @scroll=${this.onScroll}>
          <table
            class="table__el table__el--${this.layout}"
            style="${o?`min-width:${o}px`:""}"
          >
            ${this.hideHeader?h:s`
                  <thead part="header">
                    <tr class="table__header-row" part="header-row">
                      ${this.columns.map((u,p)=>this.renderHeaderCell(u,p))}
                      ${this.layout==="fit-data-fill"?s`<th class="table__header-cell" style="width:100%"></th>`:h}
                    </tr>
                  </thead>
                `}
            <tbody part="body">
              ${e.length===0?this.renderPlaceholder():h}
              ${r>0?s`<tr style="height:${r}px" aria-hidden="true"><td colspan="${this.columnCount}"></td></tr>`:h}
              ${n.map((u,p)=>u.kind==="group"?this.renderGroupRow(u):this.renderRow(u,C+p))}
              ${d>0?s`<tr style="height:${d}px" aria-hidden="true"><td colspan="${this.columnCount}"></td></tr>`:h}
            </tbody>
          </table>
        </div>
        ${this.loading?s`
              <div class="table__loading" part="loading">
                <slot name="loading"><anduin-spinner size="medium"></anduin-spinner></slot>
              </div>
            `:h}
      </div>
    `}};H3.styles=f`
    :host {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      min-height: 0;
      font-family: var(--font-sans);
      font-size: var(--text-13, 13px);
      color: var(--color-gray-8);
    }

    .table {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
      box-sizing: border-box;
    }
    .table__scroll {
      flex: 1 1 auto;
      min-height: 0;
      overflow: auto;
      overscroll-behavior: contain;
    }

    table {
      border-collapse: separate;
      border-spacing: 0;
      table-layout: auto;
      /* fit-data / fit-data-table: the table is exactly as wide as its columns
         need, overflowing the scroll container rather than squeezing them. Any
         space left over in the container stays empty, so rows stop at the last
         column — which is what separates these from fit-data-fill. */
      width: max-content;
    }
    table.table__el--fit-columns {
      table-layout: fixed;
      width: 100%;
    }
    /* The slack goes to the spacer column (fill) or the last column (stretch),
       both of which claim it with a width of 100%. The other columns hold their
       size via the min-width that cellStyle pins on them, so the table still
       overflows and scrolls when the columns do not fit. */
    table.table__el--fit-data-fill,
    table.table__el--fit-data-stretch {
      /* A definite width, so the table always spans the container. The columns
         are held at their data's size by the min-width rule below, and any
         slack goes to the spacer (fill) or the last column (stretch). When the
         columns need more than the container, those same min-widths push the
         table wider and the container scrolls. */
      width: 100%;
    }
    /* The spacer/stretch column claims the slack with a percentage width, and a
       percentage outranks the other columns in the auto table algorithm — left
       alone it crushes them to min-content and wraps their text. Chrome ignores
       min-width: max-content on a table cell, so hold the columns at their
       data's width by making min-content equal max-content instead. Columns
       given an explicit width opt back out and wrap inside it. */
    table.table__el--fit-data-fill th,
    table.table__el--fit-data-fill td,
    table.table__el--fit-data-stretch th,
    table.table__el--fit-data-stretch td {
      white-space: nowrap;
    }
    table.table__el--fit-data-fill .table__cell--sized,
    table.table__el--fit-data-stretch .table__cell--sized,
    table.table__el--fit-data-stretch .table__cell--stretch {
      white-space: normal;
    }
    /* A column held to a width has to wrap inside it — including long unbroken
       strings like emails, which would otherwise spill into the next column. */
    .table__cell--sized {
      overflow-wrap: break-word;
    }

    th,
    td {
      box-sizing: border-box;
      padding: 0;
      text-align: left;
      font-weight: inherit;
    }

    /* ── Header ─────────────────────────────────────────────────────────── */
    .table__header-cell {
      position: sticky;
      top: 0;
      z-index: 3;
      height: 36px;
      padding: 0 12px;
      border-bottom: 1px solid var(--color-gray-3);
      background-color: var(--color-gray-1);
      color: var(--color-gray-7);
      font-size: var(--text-12, 12px);
      font-weight: 600;
      line-height: 16px;
      white-space: nowrap;
      vertical-align: middle;
    }
    .table__header-cell--sortable {
      cursor: pointer;
      user-select: none;
    }
    .table__header-cell--sortable:hover {
      background-color: var(--color-gray-2);
    }
    .table__header-cell--sortable:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 2px var(--color-primary-4);
    }
    .table__header-inner {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .table__header-inner--center {
      justify-content: center;
    }
    .table__header-inner--right {
      justify-content: flex-end;
    }
    .table__header-text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .table__sort-icon {
      display: flex;
      flex-shrink: 0;
      color: var(--color-gray-5);
    }
    .table__sort-icon--active {
      color: var(--color-primary-4);
    }

    /* The divider between headers is the resize affordance: a hairline at rest,
       straddling the column edge so the grab area covers both sides of it. The
       header cell is sticky, which makes it the containing block. */
    .table__resize-handle {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 9px;
      transform: translateX(50%);
      cursor: col-resize;
      touch-action: none;
      user-select: none;
    }
    /* The last column's edge is the table's edge, so there is no next column to
       straddle — and a centred handle would hang half its box outside the
       scroll container, inflating scrollWidth and raising a phantom horizontal
       scrollbar on a table whose columns fit exactly. Keep this one's box
       inside the cell, with its line still sitting on the edge. */
    thead th:last-child .table__resize-handle {
      transform: none;
      width: 5px;
      justify-content: flex-end;
    }
    .table__resize-handle::after {
      content: '';
      width: 1px;
      height: 16px;
      background-color: var(--color-gray-3);
      transition: background-color 120ms ease, height 120ms ease, width 120ms ease;
    }
    .table__resize-handle:hover::after,
    .table__resize-handle--active::after {
      width: 2px;
      height: 100%;
      background-color: var(--color-primary-4);
    }

    /* ── Body ───────────────────────────────────────────────────────────── */
    /* Row state lives on the <tr> and every cell inherits it, so a consumer's
       ::part(row) override reaches the whole row — frozen cells included — and
       sticky cells still get an opaque background to scroll content under. */
    .table__row {
      background-color: var(--color-gray-0);
    }
    .table__row--interactive {
      cursor: pointer;
    }
    .table__row:hover {
      background-color: var(--color-gray-1);
    }
    .table__row--selected,
    .table__row--selected:hover {
      background-color: var(--color-primary-1);
    }

    .table__cell {
      height: 40px;
      padding: 8px 12px;
      border-bottom: 1px solid var(--color-gray-2);
      background-color: inherit;
      line-height: 20px;
      vertical-align: middle;
    }
    .table__cell--top {
      vertical-align: top;
    }
    .table__cell--bottom {
      vertical-align: bottom;
    }
    .table__cell--center {
      text-align: center;
    }
    .table__cell--right {
      text-align: right;
    }
    .table__cell--selection {
      width: ${Xe}px;
      padding: 8px 0 8px 12px;
    }

    /* Cells revealed on row hover — kept in flow so the layout never shifts. */
    .table__cell--hover-only > * {
      visibility: hidden;
    }
    .table__row:hover > .table__cell--hover-only > *,
    .table__row--selected > .table__cell--hover-only > *,
    .table__cell--hover-only:focus-within > * {
      visibility: visible;
    }

    /* ── Frozen columns ─────────────────────────────────────────────────── */
    .table__cell--frozen,
    .table__header-cell--frozen {
      position: sticky;
      z-index: 2;
    }
    .table__header-cell--frozen {
      z-index: 4;
    }
    /* Only the column at the boundary casts the shadow, so it reads as one edge.
       It has to be a gradient rather than a box-shadow: a box-shadow is drawn
       per cell and its blur tapers away at each cell's top and bottom, so every
       row border shows a gap. A gradient pinned to the cell's full height tiles
       into one unbroken strip. The -1px bottom reaches over the row border,
       which sits outside the padding box this is positioned against. */
    .table__cell--frozen-left-edge::after,
    .table__header-cell--frozen-left-edge::after,
    .table__cell--frozen-right-edge::after,
    .table__header-cell--frozen-right-edge::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: -1px;
      width: 8px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 150ms ease;
    }
    .table__cell--frozen-left-edge::after,
    .table__header-cell--frozen-left-edge::after {
      left: 100%;
      background: linear-gradient(to right, oklch(0 0 0 / 0.13), oklch(0 0 0 / 0));
    }
    .table__cell--frozen-right-edge::after,
    .table__header-cell--frozen-right-edge::after {
      right: 100%;
      background: linear-gradient(to left, oklch(0 0 0 / 0.13), oklch(0 0 0 / 0));
    }
    .table--scrolled-x .table__cell--frozen-left-edge::after,
    .table--scrolled-x .table__header-cell--frozen-left-edge::after,
    .table--scrollable-x-end .table__cell--frozen-right-edge::after,
    .table--scrollable-x-end .table__header-cell--frozen-right-edge::after {
      opacity: 1;
    }

    /* ── Tree data ──────────────────────────────────────────────────────── */
    .table__tree-cell {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .table__tree-toggle {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      padding: 0;
      border: none;
      border-radius: 4px;
      background: none;
      color: var(--color-gray-6);
      cursor: pointer;
    }
    .table__tree-toggle:hover {
      background-color: var(--color-gray-2);
      color: var(--color-gray-8);
    }
    .table__tree-toggle:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px var(--color-primary-4);
    }
    /* Leaf rows keep the toggle's footprint so siblings stay aligned. */
    .table__tree-spacer {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }

    /* ── Group headers ──────────────────────────────────────────────────── */
    .table__group-cell {
      height: 32px;
      padding: 0;
      border-bottom: 1px solid var(--color-gray-2);
      background-color: var(--color-gray-1);
    }
    .table__group-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      width: 100%;
      height: 32px;
      padding: 0 12px;
      border: none;
      background: none;
      color: var(--color-gray-8);
      cursor: pointer;
      font-family: inherit;
      font-size: var(--text-12, 12px);
      font-weight: 600;
      line-height: 16px;
      text-align: left;
    }
    .table__group-toggle:hover {
      background-color: var(--color-gray-2);
    }
    .table__group-toggle:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 2px var(--color-primary-4);
    }
    .table__group-count {
      color: var(--color-gray-6);
      font-weight: 500;
    }

    /* ── Placeholder & loading ──────────────────────────────────────────── */
    .table__placeholder-cell {
      padding: 32px 12px;
      border-bottom: 1px solid var(--color-gray-2);
      background-color: var(--color-gray-0);
      color: var(--color-gray-6);
      text-align: center;
    }
    .table__loading {
      position: absolute;
      inset: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: oklch(from var(--color-gray-0) l c h / 0.6);
      cursor: progress;
    }
  `;let _=H3;if(V([a({attribute:!1})],_.prototype,"columns"),V([a({attribute:!1})],_.prototype,"data"),V([a({reflect:!0})],_.prototype,"layout"),V([a({attribute:"render-mode",reflect:!0})],_.prototype,"renderMode"),V([a({type:Number,attribute:"row-height"})],_.prototype,"rowHeight"),V([a()],_.prototype,"height"),V([a({attribute:"max-height"})],_.prototype,"maxHeight"),V([a({attribute:"min-height"})],_.prototype,"minHeight"),V([a({attribute:"resizable-columns",converter:l=>l!=="false"})],_.prototype,"resizableColumns"),V([a({type:Boolean,attribute:"hide-header",reflect:!0})],_.prototype,"hideHeader"),V([a({type:Boolean,reflect:!0})],_.prototype,"loading"),V([a({reflect:!0})],_.prototype,"selectable"),V([a({attribute:"index-column"})],_.prototype,"indexColumn"),V([a({attribute:"column-align"})],_.prototype,"columnAlign"),V([a({attribute:"column-vertical-align"})],_.prototype,"columnVerticalAlign"),V([a({attribute:"sort-field"})],_.prototype,"sortField"),V([a({attribute:"sort-direction"})],_.prototype,"sortDirection"),V([a({type:Boolean,attribute:"data-tree",reflect:!0})],_.prototype,"dataTree"),V([a({attribute:"tree-children-field"})],_.prototype,"treeChildrenField"),V([a({type:Number,attribute:"tree-child-indent"})],_.prototype,"treeChildIndent"),V([a({attribute:"group-by"})],_.prototype,"groupBy"),V([a({attribute:!1})],_.prototype,"selectedRows"),V([a({attribute:!1})],_.prototype,"isRowDisabled"),V([a({attribute:!1})],_.prototype,"onStartExpanded"),V([a({attribute:!1})],_.prototype,"rowClass"),V([a({attribute:!1})],_.prototype,"renderGroupHeader"),V([y()],_.prototype,"expandedKeys"),V([y()],_.prototype,"collapsedGroups"),V([y()],_.prototype,"virtualScrollTop"),V([y()],_.prototype,"viewportHeight"),V([y()],_.prototype,"scrolledX"),V([y()],_.prototype,"scrollableXEnd"),V([y()],_.prototype,"resizedWidths"),V([y()],_.prototype,"resizingKey"),customElements.get("anduin-table")||customElements.define("anduin-table",_),typeof document<"u"&&!document.getElementById("acl-tokens")){const l=document.createElement("style");l.id="acl-tokens",l.textContent=t7,document.head.appendChild(l)}return c.AnduinAvatar=X,c.AnduinBadge=m2,c.AnduinBadgeCount=Y1,c.AnduinButton=R,c.AnduinCalendar=I,c.AnduinCallout=b2,c.AnduinCheckbox=a1,c.AnduinDateInput=$,c.AnduinDatePicker=A,c.AnduinDateRange=Q,c.AnduinDateRangeDefault=b5,c.AnduinDateRangeEnd=Oe,c.AnduinDateRangePanel=$2,c.AnduinDateRangeStart=Pe,c.AnduinDivider=q1,c.AnduinDot=H2,c.AnduinDrawer=j,c.AnduinDrawerClose=_e,c.AnduinDropdown=k,c.AnduinField=_2,c.AnduinFieldDescription=T2,c.AnduinFieldError=I2,c.AnduinFieldGroup=F2,c.AnduinFieldLabel=Q1,c.AnduinFileIcon=n2,c.AnduinIcon=W1,c.AnduinInput=O,c.AnduinLoadingState=y2,c.AnduinMenu=b1,c.AnduinMenuItem=z1,c.AnduinModal=ce,c.AnduinModalClose=Ce,c.AnduinNavigation=c1,c.AnduinNavigationItem=n1,c.AnduinPagination=C1,c.AnduinPaginationFirstPage=Ee,c.AnduinPaginationLastPage=$e,c.AnduinPopover=q,c.AnduinPopoverClose=X2,c.AnduinProgress=X1,c.AnduinRadio=o1,c.AnduinRadioGroup=D1,c.AnduinResizableHandle=I1,c.AnduinResizablePanel=T1,c.AnduinResizablePanelGroup=w2,c.AnduinSidebar=c5,c.AnduinSidebarAction=g5,c.AnduinSidebarBadge=f5,c.AnduinSidebarContent=C5,c.AnduinSidebarFooter=E2,c.AnduinSidebarGroup=u5,c.AnduinSidebarGroupLabel=p5,c.AnduinSidebarHeader=R2,c.AnduinSidebarMenu=h5,c.AnduinSidebarMenuItem=u1,c.AnduinSidebarSeparator=v5,c.AnduinSkeleton=t1,c.AnduinSparkleSpinner=K1,c.AnduinSpinner=j1,c.AnduinSuggestion=M,c.AnduinSwitcher=r2,c.AnduinTabContent=t2,c.AnduinTabTrigger=i1,c.AnduinTable=_,c.AnduinTabs=R1,c.AnduinTabsList=e2,c.AnduinTag=E1,c.AnduinTagClose=N2,c.AnduinTextarea=U,c.AnduinTimeline=n5,c.AnduinTimelineDate=r5,c.AnduinTimelineGroup=s5,c.AnduinTimelineItem=l5,c.AnduinTimelineLabel=d5,c.AnduinTimelineTitle=a5,c.AnduinToast=d1,c.AnduinToaster=l2,c.AnduinToggleGroup=W,c.AnduinToggleGroupItem=Y,c.AnduinTooltip=i2,c.AnduinTooltipContent=K2,c.AnduinTooltipTrigger=j2,c.AnduinWell=x2,c.AnduinWellClose=W2,c.BADGE_STYLES=R5,c.CALENDAR_CHANGE=s2,c.CALENDAR_DAY_HOVER=m5,c.CHECKBOX_CHANGE=j3,c.DATE_INPUT_CHANGE=H5,c.DATE_PICKER_CHANGE=Ie,c.DATE_RANGE_CHANGE=Be,c.DRAWER_AFTER_CLOSE_EVENT=He,c.DRAWER_CLOSE_EVENT=e5,c.DROPDOWN_CHANGE=Y5,c.FIELD_LABEL_CLICK=A5,c.FIELD_LABEL_CLICK_COORDINATED=r1,c.FILE_ICONS=he,c.INPUT_CHANGE=z5,c.INPUT_CLEAR=K3,c.MENU_ITEM_CLICK=J2,c.MODAL_AFTER_CLOSE_EVENT=re,c.MODAL_CLOSE_EVENT=o2,c.NAVIGATION_CHANGE=xe,c.NAVIGATION_ITEM_CLICK=i5,c.PAGINATION_CHANGE=Re,c.PAGINATION_JUMP=o5,c.POPOVER_CLOSE=Y2,c.POPOVER_OPEN_CHANGE=q2,c.RADIO_CHANGE=Q2,c.RADIO_GROUP_CHANGE=ue,c.RESIZE_EVENT=Me,c.SIDEBAR_SELECT=Ae,c.SUGGESTION_CHANGE=t5,c.SUGGESTION_CLEAR=Ve,c.SUGGESTION_SELECT=Le,c.SWITCHER_CHANGE=be,c.TABLE_CELL_CONTEXT_MENU=Ke,c.TABLE_COLUMN_CLICK=Ge,c.TABLE_COLUMN_RESIZE=X5,c.TABLE_GROUP_TOGGLE=qe,c.TABLE_ROW_CLICK=Ue,c.TABLE_ROW_COLLAPSE=Ye,c.TABLE_ROW_EXPAND=We,c.TABLE_SELECTION_CHANGE=je,c.TABLE_SORT=Ne,c.TAB_CHANGE=Y3,c.TAB_TRIGGER_CLICK=S5,c.TAB_VALUE_CHANGED=V2,c.TAG_CLOSE_CLICK=q3,c.TEXTAREA_CHANGE=W3,c.TOGGLE_GROUP_CHANGE=X3,c.TOGGLE_GROUP_ITEM_CHANGE=J3,c.TOGGLE_GROUP_ITEM_CLICK=G2,c.TOGGLE_GROUP_ITEM_DESELECT=ee,c.TOGGLE_GROUP_ITEM_SELECT=Q3,c.TOOLTIP_CONTENT_POPUP_MOUNTED=T5,c.TOOLTIP_CONTENT_POPUP_UNMOUNTED=I5,c.TOOLTIP_HIDE=U2,c.TOOLTIP_SHOW=P5,c.TOOLTIP_TRIGGER_MOUNTED=O5,c.TOOLTIP_VISIBILITY_CHANGED=F5,c.WELL_CLOSE_CLICK=le,c.addMonths=p1,c.formatISODate=_1,c.getBadgeVariantClass=E5,c.parseISODate=S,c.resolveFileIcon=ge,c.startOfToday=N1,c.toast=m0,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),c})({});

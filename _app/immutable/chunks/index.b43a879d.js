var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,h as v,i as B,j as S,k as I,l as b,m as M,p as P,q as N,v as T,w as q,x as H}from"./scheduler.a7e64d23.js";let $=!1;function L(){$=!0}function O(){$=!1}function z(e,t,n,a){for(;e<t;){const s=e+(t-e>>1);n(s)<=a?e=s+1:t=s}return e}function D(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let r=0;r<t.length;r++){const o=t[r];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),a=new Int32Array(t.length);n[0]=-1;let s=0;for(let i=0;i<t.length;i++){const r=t[i].claim_order,o=(s>0&&t[n[s]].claim_order<=r?s+1:z(1,s,_=>t[n[_]].claim_order,r))-1;a[i]=n[o]+1;const u=o+1;n[u]=i,s=Math.max(u,s)}const f=[],l=[];let c=t.length-1;for(let i=n[s]+1;i!=0;i=a[i-1]){for(f.push(t[i-1]);c>=i;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);f.reverse(),l.sort((i,r)=>i.claim_order-r.claim_order);for(let i=0,r=0;i<l.length;i++){for(;r<f.length&&l[i].claim_order>=f[r].claim_order;)r++;const o=r<f.length?f[r]:null;e.insertBefore(l[i],o)}}function R(e,t){if($){for(D(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e){return document.createElement(e)}function F(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return e.dataset.svelteH}function G(e){return Array.from(e.childNodes)}function J(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,a,s=!1){J(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const i=n(c);return i===void 0?e.splice(l,1):e[l]=i,s||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const i=n(c);return i===void 0?e.splice(l,1):e[l]=i,s?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return a()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function E(e,t,n,a){return A(e,s=>s.nodeName===t,s=>{const f=[];for(let l=0;l<s.attributes.length;l++){const c=s.attributes[l];n[c.name]||f.push(c.name)}f.forEach(l=>s.removeAttribute(l))},()=>a(t))}function le(e,t,n){return E(e,t,n,W)}function se(e,t,n){return E(e,t,n,F)}function K(e,t){return A(e,n=>n.nodeType===3,n=>{const a=""+t;if(n.data.startsWith(a)){if(n.data.length!==a.length)return n.splitText(a.length)}else n.data=a},()=>x(t),!0)}function ce(e){return K(e," ")}function fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function ue(e,t,n,a){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,a?"important":"")}function oe(e,t){return new e(t)}const m=new Set;let d;function de(){d={r:0,c:[],p:d}}function _e(){d.r||h(d.c),d=d.p}function Q(e,t){e&&e.i&&(m.delete(e),e.i(t))}function me(e,t,n,a){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}else a&&a()}function he(e){e&&e.c()}function $e(e,t){e&&e.l(t)}function U(e,t,n){const{fragment:a,after_update:s}=e.$$;a&&a.m(t,n),b(()=>{const f=e.$$.on_mount.map(T).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),s.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(M(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(q.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,n,a,s,f,l,c=[-1]){const i=P;N(e);const r=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:s,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||i.$$.root};l&&l(r.root);let o=!1;if(r.ctx=n?n(e,t.props||{},(u,_,...g)=>{const w=g.length?g[0]:_;return r.ctx&&s(r.ctx[u],r.ctx[u]=w)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](w),o&&Y(e,u)),_}):[],r.update(),o=!0,h(r.before_update),r.fragment=a?a(r.ctx):!1,t.target){if(t.hydrate){L();const u=G(t.target);r.fragment&&r.fragment.l(u),u.forEach(V)}else r.fragment&&r.fragment.c();t.intro&&Q(e.$$.fragment),U(e,t.target,t.anchor),O(),B()}N(i)}class ye{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{se as A,ye as S,te as a,_e as b,ce as c,Q as d,ie as e,V as f,W as g,le as h,pe as i,G as j,re as k,ue as l,x as m,K as n,fe as o,de as p,oe as q,he as r,ne as s,me as t,$e as u,U as v,X as w,R as x,ae as y,F as z};

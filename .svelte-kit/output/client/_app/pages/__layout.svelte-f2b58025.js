import{F as U,S as F,i as G,s as J,e as h,t as A,k as y,c as d,a as _,h as w,d as u,m as I,b as i,G as $,g as K,H as c,n as T,I as j,J as B,x as D,y as O,z as P,K as Q,L as R,M as V,r as q,p as z,C as W}from"../chunks/index-0a1e5588.js";const X=()=>{const s=U("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},Y={subscribe(s){return X().page.subscribe(s)}};function Z(s){let t,a,o,r,p,l,e,n,E,k,m,g,x;return{c(){t=h("main"),a=h("ul"),o=h("li"),r=h("a"),p=A("Home"),l=y(),e=h("li"),n=h("a"),E=A("About"),k=y(),m=h("li"),g=h("a"),x=A("Todo"),this.h()},l(f){t=d(f,"MAIN",{});var b=_(t);a=d(b,"UL",{class:!0});var v=_(a);o=d(v,"LI",{class:!0});var L=_(o);r=d(L,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var H=_(r);p=w(H,"Home"),H.forEach(u),L.forEach(u),l=I(v),e=d(v,"LI",{class:!0});var C=_(e);n=d(C,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var M=_(n);E=w(M,"About"),M.forEach(u),C.forEach(u),k=I(v),m=d(v,"LI",{class:!0});var S=_(m);g=d(S,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var N=_(g);x=w(N,"Todo"),N.forEach(u),S.forEach(u),v.forEach(u),b.forEach(u),this.h()},h(){i(r,"class","text-white"),i(r,"sveltekit:prefetch",""),i(r,"href","/"),i(o,"class","px-5 py-3 bg-transparent hover:bg-green-200 duration-200"),$(o,"active",s[0].url.pathname==="/"),i(n,"class","text-white"),i(n,"sveltekit:prefetch",""),i(n,"href","/about"),i(e,"class","px-5 py-3 bg-transparent hover:bg-green-200 duration-200"),$(e,"active",s[0].url.pathname==="/about"),i(g,"class","text-white"),i(g,"sveltekit:prefetch",""),i(g,"href","/todos"),i(m,"class","px-5 py-3 bg-transparent hover:bg-green-200 duration-200"),$(m,"active",s[0].url.pathname==="/todos"),i(a,"class","flex flex-row content-between place-content-center bg-lime-500 font-extrabold")},m(f,b){K(f,t,b),c(t,a),c(a,o),c(o,r),c(r,p),c(a,l),c(a,e),c(e,n),c(n,E),c(a,k),c(a,m),c(m,g),c(g,x)},p(f,[b]){b&1&&$(o,"active",f[0].url.pathname==="/"),b&1&&$(e,"active",f[0].url.pathname==="/about"),b&1&&$(m,"active",f[0].url.pathname==="/todos")},i:T,o:T,d(f){f&&u(t)}}}function ee(s,t,a){let o;return j(s,Y,r=>a(0,o=r)),[o]}class te extends F{constructor(t){super(),G(this,t,ee,Z,J,{})}}function ae(s){let t,a,o,r;a=new te({});const p=s[1].default,l=B(p,s,s[0],null);return{c(){t=h("main"),D(a.$$.fragment),o=y(),l&&l.c()},l(e){t=d(e,"MAIN",{});var n=_(t);O(a.$$.fragment,n),o=I(n),l&&l.l(n),n.forEach(u)},m(e,n){K(e,t,n),P(a,t,null),c(t,o),l&&l.m(t,null),r=!0},p(e,[n]){l&&l.p&&(!r||n&1)&&Q(l,p,e,e[0],r?V(p,e[0],n,null):R(e[0]),null)},i(e){r||(q(a.$$.fragment,e),q(l,e),r=!0)},o(e){z(a.$$.fragment,e),z(l,e),r=!1},d(e){e&&u(t),W(a),l&&l.d(e)}}}function se(s,t,a){let{$$slots:o={},$$scope:r}=t;return s.$$set=p=>{"$$scope"in p&&a(0,r=p.$$scope)},[r,o]}class ne extends F{constructor(t){super(),G(this,t,se,ae,J,{})}}export{ne as default};
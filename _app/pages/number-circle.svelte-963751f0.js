import{S as t,i as e,s as a,e as s,k as l,c as n,a as i,d as r,n as o,b as c,M as u,f as v,F as h,J as f,$ as p,A as d,L as b,W as m,t as E,g,O as y,R as I,j as w,m as k,N as x,o as T,Q as M,Z as $,x as P,u as V,v as D,U as L}from"../chunks/vendor-773b9a11.js";import{g as A,s as N,a as C,b as B}from"../chunks/palettes-b24f50f4.js";function S(t){let e,a,p,d;return{c(){e=s("div"),a=s("canvas"),p=l(),d=s("canvas"),this.h()},l(t){e=n(t,"DIV",{style:!0,tabindex:!0,class:!0});var s=i(e);a=n(s,"CANVAS",{class:!0}),i(a).forEach(r),p=o(s),d=n(s,"CANVAS",{class:!0}),i(d).forEach(r),s.forEach(r),this.h()},h(){c(a,"class","svelte-s64d2e"),c(d,"class","svelte-s64d2e"),u(e,"width",U+"px"),u(e,"height",t[3]+"px"),c(e,"tabindex","0"),c(e,"class","svelte-s64d2e")},m(s,l){v(s,e,l),h(e,a),t[9](a),h(e,p),h(e,d),t[10](d),t[11](e)},p:f,i:f,o:f,d(a){a&&r(e),t[9](null),t[10](null),t[11](null)}}}let U=350;function O(t,e,a){const s=p();let l,n,i,r,o,c,u,v,{value:h}=e,{levels:f=3}=e,{scale:m=1}=e,{base:E=10}=e,g=35*f;d((()=>{a(0,n.width=U,n),a(0,n.height=g,n),i=A(n,U,g),a(2,o.width=U,o),a(2,o.height=g,o),l=N(B),function(t){t.strokeStyle="#ddd",t.lineWidth=1,t.beginPath();for(let e=U/E;e<U;e+=U/E)t.moveTo(e,0),t.lineTo(e,g);t.stroke()}(A(o,U,g)),V(),r.addEventListener("pointerdown",M,{passive:!0}),r.addEventListener("focus",k),r.addEventListener("blur",T)}));let y,I,w=!1;function k(t){void 0===y&&(y=0),w=!0,V(),r.addEventListener("keydown",x)}function x(t){let e=!1;"ArrowLeft"===t.key||37===t.keyCode?(a(4,h-=m/Math.pow(E,y)/100),s("input",{value:h}),e=!0):"ArrowRight"===t.key||39===t.keyCode?(a(4,h+=m/Math.pow(E,y)/100),s("input",{value:h}),e=!0):"ArrowUp"===t.key||38===t.keyCode?(y<f-1&&(y+=1),e=!0):"ArrowDown"!==t.key&&40!==t.keyCode||(y>0&&(y-=1),e=!0),e&&(w=!0,t.preventDefault(),V())}function T(t){w=!1,V(),r.removeEventListener("keydown",x)}function M(t){let e=n.getBoundingClientRect();c=t.clientX-e.left,u=t.clientY-e.top,y=f-(Math.floor(u/35)+1),I=U/m*Math.pow(E,y),v=h,w=!0,V(),r.setPointerCapture(t.pointerId),r.addEventListener("pointermove",$,{passive:!0}),r.addEventListener("pointerup",P),r.addEventListener("pointercancel",P)}function $(t){let e=r.getBoundingClientRect(),l=t.clientX-e.left-c;a(4,h=v+l/I),s("input",{value:h}),V()}function P(t){w=!1,V(),"pointercancel"==t.type&&(a(4,h=v),s("input",{value:h})),r.removeEventListener("pointermove",$),r.removeEventListener("pointerup",P),r.removeEventListener("pointercancel",P)}function V(){window.requestAnimationFrame(D)}function D(){i.clearRect(0,0,U,g),i.strokeStyle="#444";let t=h;for(let e=0;e<f;e++){let a=t/m*U%U;t=t*E%m,a=a>=0?a:a+U;let s=35*(f-e-.5);w&&y==e&&(i.lineWidth=1,i.beginPath(),i.moveTo(0,s),i.lineTo(U,s),i.stroke());let n=Math.floor(a/U*E);i.fillStyle=C(l,n),i.beginPath(),i.arc(a,s,17.5,0,2*Math.PI),i.arc(a+U,s,17.5,0,2*Math.PI),i.arc(a-U,s,17.5,0,2*Math.PI),i.fill(),w&&y==e&&(i.lineWidth=5,i.beginPath(),i.arc(a,s,15,0,2*Math.PI),i.stroke())}}return t.$$set=t=>{"value"in t&&a(4,h=t.value),"levels"in t&&a(5,f=t.levels),"scale"in t&&a(6,m=t.scale),"base"in t&&a(7,E=t.base)},[n,r,o,g,h,f,m,E,V,function(t){b[t?"unshift":"push"]((()=>{o=t,a(2,o)}))},function(t){b[t?"unshift":"push"]((()=>{n=t,a(0,n)}))},function(t){b[t?"unshift":"push"]((()=>{r=t,a(1,r)}))}]}class R extends t{constructor(t){super(),e(this,t,O,S,a,{value:4,levels:5,scale:6,base:7,redraw:8})}get redraw(){return this.$$.ctx[8]}}function W(t,e,a){const s=t.slice();return s[20]=e[a],s}function F(t){let e,a,u,p,d,b,m,w,k,x,T,M,$,P,V;return{c(){e=s("div"),a=s("button"),u=E("x"),b=l(),m=s("div"),w=E(t[20]),k=l(),x=s("button"),T=E("÷"),this.h()},l(s){e=n(s,"DIV",{class:!0});var l=i(e);a=n(l,"BUTTON",{class:!0,"aria-label":!0});var c=i(a);u=g(c,"x"),c.forEach(r),b=o(l),m=n(l,"DIV",{class:!0});var v=i(m);w=g(v,t[20]),v.forEach(r),k=o(l),x=n(l,"BUTTON",{class:!0,"aria-label":!0});var h=i(x);T=g(h,"÷"),h.forEach(r),l.forEach(r),this.h()},h(){c(a,"class","top svelte-v6rp8x"),a.value=p=t[20],c(a,"aria-label",d=`Multiply ${t[20]}`),c(m,"class","value svelte-v6rp8x"),c(x,"class","bottom svelte-v6rp8x"),x.value=M=t[20],c(x,"aria-label",$=`divide ${t[20]}`),c(e,"class","factor-btn svelte-v6rp8x")},m(s,l){v(s,e,l),h(e,a),h(a,u),h(e,b),h(e,m),h(m,w),h(e,k),h(e,x),h(x,T),P||(V=[y(a,"click",t[4]),y(x,"click",t[5])],P=!0)},p:f,d(t){t&&r(e),P=!1,I(V)}}}function j(t){let e,a,f,p,d,A,N,C,B,S,U,O,j,q,X,J,Q,Y,Z,z,G,H,K,_,tt,et,at,st,lt,nt,it,rt,ot,ct,ut,vt,ht,ft,pt,dt,bt,mt,Et;function gt(e){t[11](e)}let yt={levels:"6",base:"10",scale:2*Math.PI};void 0!==t[0]&&(yt.value=t[0]),J=new R({props:yt}),b.push((()=>m(J,"value",gt))),t[12](J),J.$on("input",t[7]);let It=[2,3,5,7,11,13,17,19,23,29],wt=[];for(let s=0;s<10;s+=1)wt[s]=F(W(t,It,s));return{c(){e=s("section"),a=s("div"),f=s("canvas"),p=l(),d=s("div"),A=s("div"),N=s("label"),C=E("Base angle:"),B=l(),S=s("div"),U=s("input"),O=l(),j=s("input"),q=l(),X=s("div"),w(J.$$.fragment),Y=l(),Z=s("div"),z=s("div"),G=s("button"),H=E("𝜋"),K=l(),_=s("button"),tt=E("𝜏"),et=l(),at=s("div"),st=s("div");for(let t=0;t<10;t+=1)wt[t].c();lt=l(),nt=s("div"),it=s("button"),rt=E("x"),ct=l(),ut=s("div"),vt=s("input"),ht=l(),ft=s("button"),pt=E("÷"),this.h()},l(t){e=n(t,"SECTION",{class:!0});var s=i(e);a=n(s,"DIV",{class:!0});var l=i(a);f=n(l,"CANVAS",{id:!0,class:!0}),i(f).forEach(r),l.forEach(r),p=o(s),d=n(s,"DIV",{class:!0});var c=i(d);A=n(c,"DIV",{class:!0});var u=i(A);N=n(u,"LABEL",{for:!0});var v=i(N);C=g(v,"Base angle:"),v.forEach(r),B=o(u),S=n(u,"DIV",{class:!0});var h=i(S);U=n(h,"INPUT",{id:!0,type:!0,step:!0,style:!0}),O=o(h),j=n(h,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0}),h.forEach(r),u.forEach(r),q=o(c),X=n(c,"DIV",{class:!0});var b=i(X);k(J.$$.fragment,b),b.forEach(r),Y=o(c),Z=n(c,"DIV",{class:!0});var m=i(Z);z=n(m,"DIV",{class:!0});var E=i(z);G=n(E,"BUTTON",{class:!0});var y=i(G);H=g(y,"𝜋"),y.forEach(r),K=o(E),_=n(E,"BUTTON",{class:!0});var I=i(_);tt=g(I,"𝜏"),I.forEach(r),E.forEach(r),m.forEach(r),et=o(c),at=n(c,"DIV",{class:!0});var w=i(at);st=n(w,"DIV",{class:!0});var x=i(st);for(let e=0;e<10;e+=1)wt[e].l(x);lt=o(x),nt=n(x,"DIV",{class:!0});var T=i(nt);it=n(T,"BUTTON",{class:!0,"aria-label":!0});var M=i(it);rt=g(M,"x"),M.forEach(r),ct=o(T),ut=n(T,"DIV",{class:!0,style:!0});var $=i(ut);vt=n($,"INPUT",{type:!0,style:!0}),$.forEach(r),ht=o(T),ft=n(T,"BUTTON",{class:!0,"aria-label":!0});var P=i(ft);pt=g(P,"÷"),P.forEach(r),T.forEach(r),x.forEach(r),w.forEach(r),c.forEach(r),s.forEach(r),this.h()},h(){c(f,"id","nubmer-circle"),c(f,"class","svelte-v6rp8x"),c(a,"class","big-canvas svelte-v6rp8x"),c(N,"for","number-circle-points"),c(U,"id","number-circle-points"),c(U,"type","number"),c(U,"step","0.00001"),u(U,"width","10em"),c(j,"type","range"),c(j,"min","0"),c(j,"max","7"),c(j,"step","0.00001"),u(j,"width","100%"),c(S,"class","control-group"),c(A,"class","control-item"),c(X,"class","control-item"),c(G,"class","btn"),G.value=Math.PI,c(_,"class","btn"),_.value=2*Math.PI,c(z,"class","control-group"),c(Z,"class","control-item"),c(it,"class","top svelte-v6rp8x"),it.value=t[1],c(it,"aria-label",ot=`Multiply ${t[1]}`),c(vt,"type","number"),u(vt,"width","4em"),c(ut,"class","value svelte-v6rp8x"),u(ut,"padding","0.25em"),c(ft,"class","bottom svelte-v6rp8x"),ft.value=t[1],c(ft,"aria-label",dt=`divide ${t[1]}`),c(nt,"class","factor-btn svelte-v6rp8x"),c(st,"class","control-group"),c(at,"class","control-item"),c(d,"class","control svelte-v6rp8x"),c(e,"class","svelte-v6rp8x")},m(s,l){v(s,e,l),h(e,a),h(a,f),t[8](f),h(e,p),h(e,d),h(d,A),h(A,N),h(N,C),h(A,B),h(A,S),h(S,U),x(U,t[0]),h(S,O),h(S,j),x(j,t[0]),h(d,q),h(d,X),T(J,X,null),h(d,Y),h(d,Z),h(Z,z),h(z,G),h(G,H),h(z,K),h(z,_),h(_,tt),h(d,et),h(d,at),h(at,st);for(let t=0;t<10;t+=1)wt[t].m(st,null);h(st,lt),h(st,nt),h(nt,it),h(it,rt),h(nt,ct),h(nt,ut),h(ut,vt),x(vt,t[1]),h(nt,ht),h(nt,ft),h(ft,pt),bt=!0,mt||(Et=[y(U,"input",t[9]),y(U,"input",t[7]),y(j,"change",t[10]),y(j,"input",t[10]),y(j,"input",t[7]),y(G,"click",t[6]),y(_,"click",t[6]),y(it,"click",t[4]),y(vt,"input",t[13]),y(ft,"click",t[5])],mt=!0)},p(t,[e]){1&e&&M(U.value)!==t[0]&&x(U,t[0]),1&e&&x(j,t[0]);const a={};if(!Q&&1&e&&(Q=!0,a.value=t[0],$((()=>Q=!1))),J.$set(a),48&e){let a;for(It=[2,3,5,7,11,13,17,19,23,29],a=0;a<10;a+=1){const s=W(t,It,a);wt[a]?wt[a].p(s,e):(wt[a]=F(s),wt[a].c(),wt[a].m(st,lt))}for(;a<10;a+=1)wt[a].d(1)}(!bt||2&e)&&(it.value=t[1]),(!bt||2&e&&ot!==(ot=`Multiply ${t[1]}`))&&c(it,"aria-label",ot),2&e&&M(vt.value)!==t[1]&&x(vt,t[1]),(!bt||2&e)&&(ft.value=t[1]),(!bt||2&e&&dt!==(dt=`divide ${t[1]}`))&&c(ft,"aria-label",dt)},i(t){bt||(P(J.$$.fragment,t),bt=!0)},o(t){V(J.$$.fragment,t),bt=!1},d(a){a&&r(e),t[8](null),t[12](null),D(J),L(wt,a),mt=!1,I(Et)}}}function q(t,e,a){let s,l,n,i,r,o=.3141592653589793,c=31;d((()=>{s=2500,l=2500,a(2,n.width=s,n),a(2,n.height=l,n),i=n.getContext("2d"),h(o)}));class u{constructor(t,e,a=[s/2,l/2],n=3*Math.PI/2){this.radius=t,this.center=a,this.theta=e,this.phase=n}point(t,e){let a=this.radius;void 0!==e&&(a+=e);let s=this.phase+t*this.theta;return[this.center[0]+a*Math.cos(s),this.center[1]+a*Math.sin(s)]}drawIndicator(){i.beginPath(),v(this.point(0,15),this.point(0,60)),v(this.point(1,15),this.point(1,60)),i.stroke()}}function v(t,e){let[a,s]=t;i.moveTo(a,s),[a,s]=e,i.lineTo(a,s)}function h(t){console.log(t/(2*Math.PI)),i.fillStyle="#fffdf2",i.fillRect(0,0,s,l);let e=.45*Math.min(s,l),a=new u(e,t);i.lineWidth=1,i.strokeStyle="#0f0a36",i.beginPath();for(let s=0;s<100;s++)for(let t=1;t<100;t++)v(a.point(s),a.point(s+t));i.stroke(),i.lineWidth=5,i.strokeStyle="#E94F37",a.drawIndicator()}function f(){window.requestAnimationFrame((function(){h(o),r.redraw()}))}return[o,c,n,r,function(t){a(0,o*=t.target.value),f()},function(t){a(0,o/=t.target.value),f()},function(t){a(0,o=parseFloat(t.target.value)),f()},f,function(t){b[t?"unshift":"push"]((()=>{n=t,a(2,n)}))},function(){o=M(this.value),a(0,o)},function(){o=M(this.value),a(0,o)},function(t){o=t,a(0,o)},function(t){b[t?"unshift":"push"]((()=>{r=t,a(3,r)}))},function(){c=M(this.value),a(1,c)}]}class X extends t{constructor(t){super(),e(this,t,q,j,a,{})}}export{X as default};

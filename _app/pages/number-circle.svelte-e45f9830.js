import{S as e,i as t,s as a,e as s,k as l,c as n,a as i,d as r,n as o,b as c,M as u,f as v,F as h,J as f,$ as p,A as d,L as b,W as m,t as E,g,O as y,R as w,j as I,m as k,N as x,o as T,Q as M,Z as $,x as D,u as P,v as V,U as L}from"../chunks/vendor-773b9a11.js";import{g as A,s as N,a as C,b as B}from"../chunks/palettes-b24f50f4.js";function S(e){let t,a,p,d;return{c(){t=s("div"),a=s("canvas"),p=l(),d=s("canvas"),this.h()},l(e){t=n(e,"DIV",{style:!0,tabindex:!0,class:!0});var s=i(t);a=n(s,"CANVAS",{class:!0}),i(a).forEach(r),p=o(s),d=n(s,"CANVAS",{class:!0}),i(d).forEach(r),s.forEach(r),this.h()},h(){c(a,"class","svelte-s64d2e"),c(d,"class","svelte-s64d2e"),u(t,"width",U+"px"),u(t,"height",e[3]+"px"),c(t,"tabindex","0"),c(t,"class","svelte-s64d2e")},m(s,l){v(s,t,l),h(t,a),e[9](a),h(t,p),h(t,d),e[10](d),e[11](t)},p:f,i:f,o:f,d(a){a&&r(t),e[9](null),e[10](null),e[11](null)}}}let U=350;function O(e,t,a){const s=p();let l,n,i,r,o,c,u,v,{value:h}=t,{levels:f=3}=t,{scale:m=1}=t,{base:E=10}=t,g=35*f;d((()=>{a(0,n.width=U,n),a(0,n.height=g,n),i=A(n,U,g),a(2,o.width=U,o),a(2,o.height=g,o),l=N(B),function(e){e.strokeStyle="#ddd",e.lineWidth=1,e.beginPath();for(let t=U/E;t<U;t+=U/E)e.moveTo(t,0),e.lineTo(t,g);e.stroke()}(A(o,U,g)),V(),r.addEventListener("pointerdown",$,{passive:!0}),r.addEventListener("focus",x),r.addEventListener("blur",M)}));let y,w,I=!1,k=!1;function x(e){void 0===y&&(y=0),I=!0,k=!0,V(),r.addEventListener("keydown",T)}function T(e){"ArrowLeft"===e.key||37===e.keyCode?(a(4,h-=m/Math.pow(E,y)/100),s("input",{value:h}),e.preventDefault()):"ArrowRight"===e.key||39===e.keyCode?(a(4,h+=m/Math.pow(E,y)/100),s("input",{value:h}),e.preventDefault()):"ArrowUp"===e.key||38===e.keyCode?(y<f-1&&(y+=1),e.preventDefault()):"ArrowDown"!==e.key&&40!==e.keyCode||(y>0&&(y-=1),e.preventDefault()),V()}function M(e){I=!1,k=!1,V(),r.removeEventListener("keydown",T)}function $(e){let t=n.getBoundingClientRect();c=e.clientX-t.left,u=e.clientY-t.top,y=f-(Math.floor(u/35)+1),w=U/m*Math.pow(E,y),v=h,I=!0,V(),r.setPointerCapture(e.pointerId),r.addEventListener("pointermove",D,{passive:!0}),r.addEventListener("pointerup",P),r.addEventListener("pointercancel",P),r.addEventListener("keydown",(()=>{r.focus()}))}function D(e){let t=r.getBoundingClientRect(),l=e.clientX-t.left-c;a(4,h=v+l/w),s("input",{value:h}),V()}function P(e){k||(I=!1),V(),"pointercancel"==e.type&&(a(4,h=v),s("input",{value:h})),r.removeEventListener("pointermove",D),r.removeEventListener("pointerup",P),r.removeEventListener("pointercancel",P)}function V(){window.requestAnimationFrame(L)}function L(){i.clearRect(0,0,U,g),i.strokeStyle="#444";let e=h;for(let t=0;t<f;t++){let a=e/m*U%U;e=e*E%m,a=a>=0?a:a+U;let s=35*(f-t-.5);I&&y==t&&(i.lineWidth=1,i.beginPath(),i.moveTo(0,s),i.lineTo(U,s),i.stroke());let n=Math.floor(a/U*E);i.fillStyle=C(l,n),i.beginPath(),i.arc(a,s,17.5,0,2*Math.PI),i.arc(a+U,s,17.5,0,2*Math.PI),i.arc(a-U,s,17.5,0,2*Math.PI),i.fill(),I&&y==t&&(i.lineWidth=5,i.beginPath(),i.arc(a,s,15,0,2*Math.PI),i.stroke())}}return e.$$set=e=>{"value"in e&&a(4,h=e.value),"levels"in e&&a(5,f=e.levels),"scale"in e&&a(6,m=e.scale),"base"in e&&a(7,E=e.base)},[n,r,o,g,h,f,m,E,V,function(e){b[e?"unshift":"push"]((()=>{o=e,a(2,o)}))},function(e){b[e?"unshift":"push"]((()=>{n=e,a(0,n)}))},function(e){b[e?"unshift":"push"]((()=>{r=e,a(1,r)}))}]}class R extends e{constructor(e){super(),t(this,e,O,S,a,{value:4,levels:5,scale:6,base:7,redraw:8})}get redraw(){return this.$$.ctx[8]}}function W(e,t,a){const s=e.slice();return s[20]=t[a],s}function F(e){let t,a,u,p,d,b,m,I,k,x,T,M,$,D,P;return{c(){t=s("div"),a=s("button"),u=E("x"),b=l(),m=s("div"),I=E(e[20]),k=l(),x=s("button"),T=E("÷"),this.h()},l(s){t=n(s,"DIV",{class:!0});var l=i(t);a=n(l,"BUTTON",{class:!0,"aria-label":!0});var c=i(a);u=g(c,"x"),c.forEach(r),b=o(l),m=n(l,"DIV",{class:!0});var v=i(m);I=g(v,e[20]),v.forEach(r),k=o(l),x=n(l,"BUTTON",{class:!0,"aria-label":!0});var h=i(x);T=g(h,"÷"),h.forEach(r),l.forEach(r),this.h()},h(){c(a,"class","top svelte-v6rp8x"),a.value=p=e[20],c(a,"aria-label",d=`Multiply ${e[20]}`),c(m,"class","value svelte-v6rp8x"),c(x,"class","bottom svelte-v6rp8x"),x.value=M=e[20],c(x,"aria-label",$=`divide ${e[20]}`),c(t,"class","factor-btn svelte-v6rp8x")},m(s,l){v(s,t,l),h(t,a),h(a,u),h(t,b),h(t,m),h(m,I),h(t,k),h(t,x),h(x,T),D||(P=[y(a,"click",e[4]),y(x,"click",e[5])],D=!0)},p:f,d(e){e&&r(t),D=!1,w(P)}}}function j(e){let t,a,f,p,d,A,N,C,B,S,U,O,j,q,X,J,Q,Y,Z,z,G,H,K,_,ee,te,ae,se,le,ne,ie,re,oe,ce,ue,ve,he,fe,pe,de,be,me,Ee;function ge(t){e[11](t)}let ye={levels:"6",base:"10",scale:2*Math.PI};void 0!==e[0]&&(ye.value=e[0]),J=new R({props:ye}),b.push((()=>m(J,"value",ge))),e[12](J),J.$on("input",e[7]);let we=[2,3,5,7,11,13,17,19,23,29],Ie=[];for(let s=0;s<10;s+=1)Ie[s]=F(W(e,we,s));return{c(){t=s("section"),a=s("div"),f=s("canvas"),p=l(),d=s("div"),A=s("div"),N=s("label"),C=E("Base angle:"),B=l(),S=s("div"),U=s("input"),O=l(),j=s("input"),q=l(),X=s("div"),I(J.$$.fragment),Y=l(),Z=s("div"),z=s("div"),G=s("button"),H=E("𝜋"),K=l(),_=s("button"),ee=E("𝜏"),te=l(),ae=s("div"),se=s("div");for(let e=0;e<10;e+=1)Ie[e].c();le=l(),ne=s("div"),ie=s("button"),re=E("x"),ce=l(),ue=s("div"),ve=s("input"),he=l(),fe=s("button"),pe=E("÷"),this.h()},l(e){t=n(e,"SECTION",{class:!0});var s=i(t);a=n(s,"DIV",{class:!0});var l=i(a);f=n(l,"CANVAS",{id:!0,class:!0}),i(f).forEach(r),l.forEach(r),p=o(s),d=n(s,"DIV",{class:!0});var c=i(d);A=n(c,"DIV",{class:!0});var u=i(A);N=n(u,"LABEL",{for:!0});var v=i(N);C=g(v,"Base angle:"),v.forEach(r),B=o(u),S=n(u,"DIV",{class:!0});var h=i(S);U=n(h,"INPUT",{id:!0,type:!0,step:!0,style:!0}),O=o(h),j=n(h,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0}),h.forEach(r),u.forEach(r),q=o(c),X=n(c,"DIV",{class:!0});var b=i(X);k(J.$$.fragment,b),b.forEach(r),Y=o(c),Z=n(c,"DIV",{class:!0});var m=i(Z);z=n(m,"DIV",{class:!0});var E=i(z);G=n(E,"BUTTON",{class:!0});var y=i(G);H=g(y,"𝜋"),y.forEach(r),K=o(E),_=n(E,"BUTTON",{class:!0});var w=i(_);ee=g(w,"𝜏"),w.forEach(r),E.forEach(r),m.forEach(r),te=o(c),ae=n(c,"DIV",{class:!0});var I=i(ae);se=n(I,"DIV",{class:!0});var x=i(se);for(let t=0;t<10;t+=1)Ie[t].l(x);le=o(x),ne=n(x,"DIV",{class:!0});var T=i(ne);ie=n(T,"BUTTON",{class:!0,"aria-label":!0});var M=i(ie);re=g(M,"x"),M.forEach(r),ce=o(T),ue=n(T,"DIV",{class:!0,style:!0});var $=i(ue);ve=n($,"INPUT",{type:!0,style:!0}),$.forEach(r),he=o(T),fe=n(T,"BUTTON",{class:!0,"aria-label":!0});var D=i(fe);pe=g(D,"÷"),D.forEach(r),T.forEach(r),x.forEach(r),I.forEach(r),c.forEach(r),s.forEach(r),this.h()},h(){c(f,"id","nubmer-circle"),c(f,"class","svelte-v6rp8x"),c(a,"class","big-canvas svelte-v6rp8x"),c(N,"for","number-circle-points"),c(U,"id","number-circle-points"),c(U,"type","number"),c(U,"step","0.00001"),u(U,"width","10em"),c(j,"type","range"),c(j,"min","0"),c(j,"max","7"),c(j,"step","0.00001"),u(j,"width","100%"),c(S,"class","control-group"),c(A,"class","control-item"),c(X,"class","control-item"),c(G,"class","btn"),G.value=Math.PI,c(_,"class","btn"),_.value=2*Math.PI,c(z,"class","control-group"),c(Z,"class","control-item"),c(ie,"class","top svelte-v6rp8x"),ie.value=e[1],c(ie,"aria-label",oe=`Multiply ${e[1]}`),c(ve,"type","number"),u(ve,"width","4em"),c(ue,"class","value svelte-v6rp8x"),u(ue,"padding","0.25em"),c(fe,"class","bottom svelte-v6rp8x"),fe.value=e[1],c(fe,"aria-label",de=`divide ${e[1]}`),c(ne,"class","factor-btn svelte-v6rp8x"),c(se,"class","control-group"),c(ae,"class","control-item"),c(d,"class","control svelte-v6rp8x"),c(t,"class","svelte-v6rp8x")},m(s,l){v(s,t,l),h(t,a),h(a,f),e[8](f),h(t,p),h(t,d),h(d,A),h(A,N),h(N,C),h(A,B),h(A,S),h(S,U),x(U,e[0]),h(S,O),h(S,j),x(j,e[0]),h(d,q),h(d,X),T(J,X,null),h(d,Y),h(d,Z),h(Z,z),h(z,G),h(G,H),h(z,K),h(z,_),h(_,ee),h(d,te),h(d,ae),h(ae,se);for(let e=0;e<10;e+=1)Ie[e].m(se,null);h(se,le),h(se,ne),h(ne,ie),h(ie,re),h(ne,ce),h(ne,ue),h(ue,ve),x(ve,e[1]),h(ne,he),h(ne,fe),h(fe,pe),be=!0,me||(Ee=[y(U,"input",e[9]),y(U,"input",e[7]),y(j,"change",e[10]),y(j,"input",e[10]),y(j,"input",e[7]),y(G,"click",e[6]),y(_,"click",e[6]),y(ie,"click",e[4]),y(ve,"input",e[13]),y(fe,"click",e[5])],me=!0)},p(e,[t]){1&t&&M(U.value)!==e[0]&&x(U,e[0]),1&t&&x(j,e[0]);const a={};if(!Q&&1&t&&(Q=!0,a.value=e[0],$((()=>Q=!1))),J.$set(a),48&t){let a;for(we=[2,3,5,7,11,13,17,19,23,29],a=0;a<10;a+=1){const s=W(e,we,a);Ie[a]?Ie[a].p(s,t):(Ie[a]=F(s),Ie[a].c(),Ie[a].m(se,le))}for(;a<10;a+=1)Ie[a].d(1)}(!be||2&t)&&(ie.value=e[1]),(!be||2&t&&oe!==(oe=`Multiply ${e[1]}`))&&c(ie,"aria-label",oe),2&t&&M(ve.value)!==e[1]&&x(ve,e[1]),(!be||2&t)&&(fe.value=e[1]),(!be||2&t&&de!==(de=`divide ${e[1]}`))&&c(fe,"aria-label",de)},i(e){be||(D(J.$$.fragment,e),be=!0)},o(e){P(J.$$.fragment,e),be=!1},d(a){a&&r(t),e[8](null),e[12](null),V(J),L(Ie,a),me=!1,w(Ee)}}}function q(e,t,a){let s,l,n,i,r,o=.3141592653589793,c=31;d((()=>{s=2500,l=2500,a(2,n.width=s,n),a(2,n.height=l,n),i=n.getContext("2d"),h(o)}));class u{constructor(e,t,a=[s/2,l/2],n=3*Math.PI/2){this.radius=e,this.center=a,this.theta=t,this.phase=n}point(e,t){let a=this.radius;void 0!==t&&(a+=t);let s=this.phase+e*this.theta;return[this.center[0]+a*Math.cos(s),this.center[1]+a*Math.sin(s)]}drawIndicator(){i.beginPath(),v(this.point(0,15),this.point(0,60)),v(this.point(1,15),this.point(1,60)),i.stroke()}}function v(e,t){let[a,s]=e;i.moveTo(a,s),[a,s]=t,i.lineTo(a,s)}function h(e){console.log(e/(2*Math.PI)),i.fillStyle="#fffdf2",i.fillRect(0,0,s,l);let t=.45*Math.min(s,l),a=new u(t,e);i.lineWidth=1,i.strokeStyle="#0f0a36",i.beginPath();for(let s=0;s<100;s++)for(let e=1;e<100;e++)v(a.point(s),a.point(s+e));i.stroke(),i.lineWidth=5,i.strokeStyle="#E94F37",a.drawIndicator()}function f(){window.requestAnimationFrame((function(){h(o),r.redraw()}))}return[o,c,n,r,function(e){a(0,o*=e.target.value),f()},function(e){a(0,o/=e.target.value),f()},function(e){a(0,o=parseFloat(e.target.value)),f()},f,function(e){b[e?"unshift":"push"]((()=>{n=e,a(2,n)}))},function(){o=M(this.value),a(0,o)},function(){o=M(this.value),a(0,o)},function(e){o=e,a(0,o)},function(e){b[e?"unshift":"push"]((()=>{r=e,a(3,r)}))},function(){c=M(this.value),a(1,c)}]}class X extends e{constructor(e){super(),t(this,e,q,j,a,{})}}export{X as default};

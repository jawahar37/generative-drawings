import{S as e,i as t,s as r,D as n,e as a,c as s,a as o,d as i,b as l,f as c,G as u,v as h,r as f,k as d,n as p,F as m,B as v,u as g,I as $,z as b,J as y,j as E,m as w,o as I,w as P,t as x,g as k,H as T,K as N,L,M as q,N as D,O as M,P as B,Q as C,R as S,T as V,U as z}from"../chunks/vendor-95ca21d0.js";import{b as A}from"../chunks/paths-45dac81d.js";import{g as R}from"../chunks/canvasUtil-f1953d74.js";const U=e=>({}),W=e=>({}),_=e=>({}),O=e=>({}),G=e=>({}),j=e=>({});function H(e){let t,r;const d=e[6].control,p=n(d,e,e[5],W),m=p||function(e){let t;return{c(){t=a("div"),this.h()},l(e){t=s(e,"DIV",{class:!0}),o(t).forEach(i),this.h()},h(){l(t,"class","row")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}();return{c(){t=a("div"),m&&m.c(),this.h()},l(e){t=s(e,"DIV",{class:!0});var r=o(t);m&&m.l(r),r.forEach(i),this.h()},h(){l(t,"class","control")},m(e,n){c(e,t,n),m&&m.m(t,null),r=!0},p(e,t){p&&p.p&&(!r||32&t)&&u(p,d,e,e[5],t,U,W)},i(e){r||(h(m,e),r=!0)},o(e){f(m,e),r=!1},d(e){e&&i(t),m&&m.d(e)}}}function F(e){let t,r,$,b,y,E,w,I,P,x,k,T,N;const L=e[6].title,q=n(L,e,e[5],j),D=e[6].about,M=n(D,e,e[5],O);let B=e[3].control&&H(e);return{c(){t=a("section"),r=a("div"),$=a("div"),b=a("div"),y=a("div"),E=a("h2"),q&&q.c(),w=d(),M&&M.c(),I=d(),B&&B.c(),P=d(),x=a("div"),k=a("canvas"),this.h()},l(e){t=s(e,"SECTION",{});var n=o(t);r=s(n,"DIV",{class:!0,style:!0});var a=o(r);$=s(a,"DIV",{class:!0});var l=o($);b=s(l,"DIV",{class:!0});var c=o(b);y=s(c,"DIV",{class:!0});var u=o(y);E=s(u,"H2",{class:!0});var h=o(E);q&&q.l(h),h.forEach(i),w=p(u),M&&M.l(u),u.forEach(i),I=p(c),B&&B.l(c),c.forEach(i),l.forEach(i),P=p(a),x=s(a,"DIV",{class:!0});var f=o(x);k=s(f,"CANVAS",{id:!0,class:!0}),o(k).forEach(i),f.forEach(i),a.forEach(i),n.forEach(i),this.h()},h(){l(E,"class","svelte-d2i0he"),l(y,"class","about"),l(b,"class","info svelte-d2i0he"),l($,"class","info-container svelte-d2i0he"),l(k,"id",e[0]),l(k,"class","svelte-d2i0he"),l(x,"class","canvas svelte-d2i0he"),l(r,"class","container svelte-d2i0he"),l(r,"style",T=`--backgroundColor: ${e[1].background}; --textColor: ${e[1].text}`)},m(n,a){c(n,t,a),m(t,r),m(r,$),m($,b),m(b,y),m(y,E),q&&q.m(E,null),m(y,w),M&&M.m(y,null),m(b,I),B&&B.m(b,null),m(r,P),m(r,x),m(x,k),e[7](k),N=!0},p(e,[t]){q&&q.p&&(!N||32&t)&&u(q,L,e,e[5],t,G,j),M&&M.p&&(!N||32&t)&&u(M,D,e,e[5],t,_,O),e[3].control?B?(B.p(e,t),8&t&&h(B,1)):(B=H(e),B.c(),h(B,1),B.m(b,null)):B&&(v(),f(B,1,1,(()=>{B=null})),g()),(!N||1&t)&&l(k,"id",e[0]),(!N||2&t&&T!==(T=`--backgroundColor: ${e[1].background}; --textColor: ${e[1].text}`))&&l(r,"style",T)},i(e){N||(h(q,e),h(M,e),h(B),N=!0)},o(e){f(q,e),f(M,e),f(B),N=!1},d(r){r&&i(t),q&&q.d(r),M&&M.d(r),B&&B.d(),e[7](null)}}}function J(e,t,r){let{$$slots:n={},$$scope:a}=t;const s=$(n);let o,{id:i}=t,{init:l}=t,{style:c={background:"#000404",text:"#ffffff"}}=t;return b((()=>{let[e,t]=window.innerWidth>576?[600,600]:[500,500];l(o,e,t)})),e.$$set=e=>{"id"in e&&r(0,i=e.id),"init"in e&&r(4,l=e.init),"style"in e&&r(1,c=e.style),"$$scope"in e&&r(5,a=e.$$scope)},[i,c,o,s,l,a,n,function(e){y[e?"unshift":"push"]((()=>{o=e,r(2,o)}))}]}class K extends e{constructor(e){super(),t(this,e,J,F,r,{id:0,init:4,style:1})}}let Q,X,Y,Z,ee,te,re,ne;function ae(e,t=[Y/2,Z/2]){this.makePoints=function(r,n=3*Math.PI/2){let a=2*Math.PI/r;return function(r){return function(r){return[t[0]+e*Math.cos(r),t[1]+e*Math.sin(r)]}(n+r*a)}}}function se(e){X.clearRect(0,0,Y,Z),function(e,t,r="#0f0a36"){X.lineWidth=1;for(let n=0;n<t-1;n++)for(let a=t-1;a>n;a--)oe(e(n),e(a),r)}(new ae(.45*Z).makePoints(e),e)}function oe(e,t,r="#0f0a36"){X.strokeStyle=r,X.beginPath();let[n,a]=e;X.moveTo(n,a),[n,a]=t,X.lineTo(n,a),X.stroke()}function ie(e,t,r){Q=e,Y=t,Z=r,X=R(Q,Y,Z);se(10)}function le(e){let t;return{c(){t=x(">")},l(e){t=k(e,">")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}function ce(e){let t,r;return{c(){t=a("a"),r=x("Number Circle"),this.h()},l(e){t=s(e,"A",{href:!0,class:!0});var n=o(t);r=k(n,"Number Circle"),n.forEach(i),this.h()},h(){l(t,"href",A+"/number-circle"),l(t,"class","link")},m(e,n){c(e,t,n),m(t,r)},p:T,d(e){e&&i(t)}}}function ue(e){let t,r,n,u;return{c(){t=a("p"),r=x("Get evenly spaced points on a circle. Draw lines between them all. "),n=a("a"),u=x("See more..."),this.h()},l(e){t=s(e,"P",{});var a=o(t);r=k(a,"Get evenly spaced points on a circle. Draw lines between them all. "),n=s(a,"A",{href:!0,class:!0});var l=o(n);u=k(l,"See more..."),l.forEach(i),a.forEach(i),this.h()},h(){l(n,"href",A+"/number-circle"),l(n,"class","link")},m(e,a){c(e,t,a),m(t,r),m(t,n),m(n,u)},p:T,d(e){e&&i(t)}}}function he(e){let t,r,n,u,h,f,v,g,$,b;return{c(){t=a("div"),r=a("label"),n=x("Points:"),u=d(),h=a("div"),f=a("input"),v=d(),g=a("input"),this.h()},l(e){t=s(e,"DIV",{class:!0});var a=o(t);r=s(a,"LABEL",{for:!0});var l=o(r);n=k(l,"Points:"),l.forEach(i),u=p(a),h=s(a,"DIV",{class:!0});var c=o(h);f=s(c,"INPUT",{id:!0,type:!0,min:!0,max:!0,style:!0}),v=p(c),g=s(c,"INPUT",{type:!0,min:!0,max:!0,step:!0}),c.forEach(i),a.forEach(i),this.h()},h(){l(r,"for","number-circle-points"),l(f,"id","number-circle-points"),l(f,"type","number"),l(f,"min","2"),l(f,"max","24"),N(f,"width","6em"),l(g,"type","range"),l(g,"min","2"),l(g,"max","24"),l(g,"step","1"),l(h,"class","control-group"),l(t,"class","control-item")},m(a,s){c(a,t,s),m(t,r),m(r,n),m(t,u),m(t,h),m(h,f),L(f,e[0]),m(h,v),m(h,g),L(g,e[0]),$||(b=[q(f,"input",e[1]),q(f,"input",(function(){D(se(e[0]))&&se(e[0]).apply(this,arguments)})),q(g,"change",e[2]),q(g,"input",e[2]),q(g,"input",(function(){D(se(e[0]))&&se(e[0]).apply(this,arguments)}))],$=!0)},p(t,r){e=t,1&r&&M(f.value)!==e[0]&&L(f,e[0]),1&r&&L(g,e[0])},d(e){e&&i(t),$=!1,B(b)}}}function fe(e){let t,r;return t=new K({props:{id:"number-circle",init:ie,style:{background:"#fffdf2",text:"#000000"},$$slots:{control:[he],about:[ue],title:[ce],default:[le]},$$scope:{ctx:e}}}),{c(){E(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){I(t,e,n),r=!0},p(e,[r]){const n={};9&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}function de(e,t,r){let n=10;return[n,function(){n=M(this.value),r(0,n)},function(){n=M(this.value),r(0,n)}]}class pe extends e{constructor(e){super(),t(this,e,de,fe,r,{})}}let me=["#ff595e","#ffca3a","#8ac926","#1982c4","#6A4C93"];function ve(e,t,r){this.x=e,this.y=t,this.size=r,this.children=[]}function ge(e,t,r){let n=r;return r.children.length>0&&r.children.forEach((function(r){r.isPointEnclosed(e,t)&&(n=ge(e,t,r))})),n}function $e(e,t,r){let n=r.size;return n=Math.min(r.size-r.getChebyshevCenterDistance(e,t),n),r.children.forEach((function(r){n=Math.min(r.getChebyshevCenterDistance(e,t)-r.size,n)})),n}function be(e){e.stroke(),e.children.forEach(be)}function ye(e){e.fill(),e.children.forEach(ye)}function Ee(e,t){return Math.floor(Math.random()*(t-e)+e)}function we(e,t,r){ee=e,re=t,ne=r,te=R(ee,re,ne);let{padding:n,threshold:a,borderWidth:s}=Ne.medium;Ie(n,a,s)}function Ie(e,t,r,n){te.clearRect(0,0,re,ne);let a=new ve(re/2,ne/2,(re+e)/2);!function(e,t,r){let n=0;for(;n<1e4;){let a=100;for(;--a>0;){let a=Ee(0,re),s=Ee(0,ne),o=ge(a,s,e),i=$e(a,s,o)-t;if(i>r){let e=new ve(a,s,i);o.children.push(e),n++;break}}if(a<=0)break}}(a,e,t),te.lineWidth=r,"Border"==n?be(a):"Fill"==n?ye(a):be(a)}ve.prototype.getChebyshevCenterDistance=function(e,t){return Math.max(Math.abs(this.x-e),Math.abs(this.y-t))},ve.prototype.isPointEnclosed=function(e,t){return this.getChebyshevCenterDistance(e,t)<=this.size},ve.prototype.stroke=function(){te.strokeStyle=me[Ee(0,me.length)],te.beginPath(),te.rect(this.x-this.size,this.y-this.size,2*this.size,2*this.size),te.stroke()},ve.prototype.fill=function(){te.fillStyle=me[Ee(0,me.length)],te.beginPath(),te.rect(this.x-this.size,this.y-this.size,2*this.size,2*this.size),te.fill()};let Pe,xe,ke,Te,Ne={small:{name:"Small",padding:2,threshold:1,borderWidth:1},medium:{name:"Medium",padding:4,threshold:2,borderWidth:2},large:{name:"Large",padding:9,threshold:6,borderWidth:5}};function Le(e,t,r){const n=e.slice();return n[12]=t[r],n}function qe(e){let t;return{c(){t=x(">")},l(e){t=k(e,">")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}function De(e){let t;return{c(){t=x("Square Bloom")},l(e){t=k(e,"Square Bloom")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}function Me(e){let t,r,n,l,u;return{c(){t=a("p"),r=x("Its rule is simple: pick a random spot and draw the largest square possible that doesn't touch any existing square."),n=d(),l=a("p"),u=x("Try tweaking the parameters. While proper inputs lets the canvas draw following the rule, negative values are fun too!")},l(e){t=s(e,"P",{});var a=o(t);r=k(a,"Its rule is simple: pick a random spot and draw the largest square possible that doesn't touch any existing square."),a.forEach(i),n=p(e),l=s(e,"P",{});var c=o(l);u=k(c,"Try tweaking the parameters. While proper inputs lets the canvas draw following the rule, negative values are fun too!"),c.forEach(i)},m(e,a){c(e,t,a),m(t,r),c(e,n,a),c(e,l,a),m(l,u)},d(e){e&&i(t),e&&i(n),e&&i(l)}}}function Be(e){let t,r,n,u,h,f,v,g,$=e[12]+"";return{c(){t=a("span"),r=a("input"),n=d(),u=a("label"),h=x($),f=d(),this.h()},l(e){t=s(e,"SPAN",{});var a=o(t);r=s(a,"INPUT",{type:!0,name:!0,value:!0,class:!0,id:!0}),n=p(a),u=s(a,"LABEL",{for:!0});var l=o(u);h=k(l,$),l.forEach(i),f=p(a),a.forEach(i),this.h()},h(){l(r,"type","radio"),l(r,"name","square-bloom-style"),r.__value=e[12],r.value=r.__value,l(r,"class","btn-radio"),l(r,"id","square-bloom-style-"+e[12]),e[10][0].push(r),l(u,"for","square-bloom-style-"+e[12])},m(a,s){c(a,t,s),m(t,r),r.checked=r.__value===e[3],m(t,n),m(t,u),m(u,h),m(t,f),v||(g=q(r,"change",e[9]),v=!0)},p(e,t){8&t&&(r.checked=r.__value===e[3])},d(n){n&&i(t),e[10][0].splice(e[10][0].indexOf(r),1),v=!1,g()}}}function Ce(e){let t,r,n,u,h,f,v,g,$,b;return{c(){t=a("div"),r=a("label"),n=x("Border width:"),u=d(),h=a("input"),this.h()},l(e){t=s(e,"DIV",{class:!0,style:!0});var a=o(t);r=s(a,"LABEL",{for:!0});var l=o(r);n=k(l,"Border width:"),l.forEach(i),u=p(a),h=s(a,"INPUT",{type:!0,id:!0,min:!0,step:!0,disabled:!0}),a.forEach(i),this.h()},h(){l(r,"for","square-bloom-border-width"),l(h,"type","number"),l(h,"id","square-bloom-border-width"),l(h,"min","1"),l(h,"step","1"),h.disabled=f="Border"!=e[3],l(t,"class","control-item"),N(t,"margin-top","0.2em")},m(a,s){c(a,t,s),m(t,r),m(r,n),m(t,u),m(t,h),L(h,e[2]),g=!0,$||(b=q(h,"input",e[11]),$=!0)},p(e,t){(!g||8&t&&f!==(f="Border"!=e[3]))&&(h.disabled=f),4&t&&M(h.value)!==e[2]&&L(h,e[2])},i(e){g||(C((()=>{v||(v=S(t,z,{},!0)),v.run(1)})),g=!0)},o(e){v||(v=S(t,z,{},!1)),v.run(0),g=!1},d(e){e&&i(t),e&&v&&v.end(),$=!1,b()}}}function Se(e){let t,r,n,u,$,b,y,E,w,I,P,T,D,C,S,z,A,R,U,W,_,O,G,j,H,F,J,K,Q,X,Y,Z,ee,te,re,ne,ae,se,oe,ie,le=e[4],ce=[];for(let a=0;a<le.length;a+=1)ce[a]=Be(Le(e,le,a));let ue="Border"==e[3]&&Ce(e);return{c(){t=a("div"),r=a("span"),n=a("input"),u=d(),$=a("label"),b=x("Small"),y=d(),E=a("span"),w=a("input"),I=d(),P=a("label"),T=x("Medium"),D=d(),C=a("span"),S=a("input"),z=d(),A=a("label"),R=x("Large"),U=d(),W=a("div"),_=a("label"),O=x("Space between squares:"),G=d(),j=a("input"),H=d(),F=a("div"),J=a("label"),K=x("Minimum square size:"),Q=d(),X=a("input"),Y=d(),Z=a("div");for(let e=0;e<ce.length;e+=1)ce[e].c();ee=d(),ue&&ue.c(),te=d(),re=a("div"),ne=a("button"),ae=x("Redraw"),this.h()},l(e){t=s(e,"DIV",{class:!0,style:!0});var a=o(t);r=s(a,"SPAN",{});var l=o(r);n=s(l,"INPUT",{type:!0,name:!0,value:!0,class:!0,id:!0}),u=p(l),$=s(l,"LABEL",{for:!0});var c=o($);b=k(c,"Small"),c.forEach(i),l.forEach(i),y=p(a),E=s(a,"SPAN",{});var h=o(E);w=s(h,"INPUT",{type:!0,name:!0,value:!0,checked:!0,class:!0,id:!0}),I=p(h),P=s(h,"LABEL",{for:!0});var f=o(P);T=k(f,"Medium"),f.forEach(i),h.forEach(i),D=p(a),C=s(a,"SPAN",{});var d=o(C);S=s(d,"INPUT",{type:!0,name:!0,value:!0,class:!0,id:!0}),z=p(d),A=s(d,"LABEL",{for:!0});var m=o(A);R=k(m,"Large"),m.forEach(i),d.forEach(i),a.forEach(i),U=p(e),W=s(e,"DIV",{class:!0});var v=o(W);_=s(v,"LABEL",{for:!0});var g=o(_);O=k(g,"Space between squares:"),g.forEach(i),G=p(v),j=s(v,"INPUT",{type:!0,id:!0,step:!0}),v.forEach(i),H=p(e),F=s(e,"DIV",{class:!0});var x=o(F);J=s(x,"LABEL",{for:!0});var N=o(J);K=k(N,"Minimum square size:"),N.forEach(i),Q=p(x),X=s(x,"INPUT",{type:!0,id:!0,step:!0}),x.forEach(i),Y=p(e),Z=s(e,"DIV",{class:!0,style:!0});var L=o(Z);for(let t=0;t<ce.length;t+=1)ce[t].l(L);L.forEach(i),ee=p(e),ue&&ue.l(e),te=p(e),re=s(e,"DIV",{class:!0});var q=o(re);ne=s(q,"BUTTON",{class:!0,id:!0});var M=o(ne);ae=k(M,"Redraw"),M.forEach(i),q.forEach(i),this.h()},h(){l(n,"type","radio"),l(n,"name","square-bloom-preset"),n.value="small",l(n,"class","btn-radio"),l(n,"id","square-bloom-preset-small"),l($,"for","square-bloom-preset-small"),l(w,"type","radio"),l(w,"name","square-bloom-preset"),w.value="medium",w.checked=!0,l(w,"class","btn-radio"),l(w,"id","square-bloom-preset-medium"),l(P,"for","square-bloom-preset-medium"),l(S,"type","radio"),l(S,"name","square-bloom-preset"),S.value="large",l(S,"class","btn-radio"),l(S,"id","square-bloom-preset-large"),l(A,"for","square-bloom-preset-large"),l(t,"class","control-item control-group"),N(t,"padding","0.5em 0"),l(_,"for","square-bloom-padding"),l(j,"type","number"),l(j,"id","square-bloom-padding"),l(j,"step","1"),l(W,"class","control-item"),l(J,"for","square-bloom-threshold"),l(X,"type","number"),l(X,"id","square-bloom-threshold"),l(X,"step","1"),l(F,"class","control-item"),l(Z,"class","control-item control-group"),N(Z,"padding","0.5em 0"),l(ne,"class","btn"),l(ne,"id","square-bloom-redraw"),l(re,"class","control-item")},m(a,s){c(a,t,s),m(t,r),m(r,n),m(r,u),m(r,$),m($,b),m(t,y),m(t,E),m(E,w),m(E,I),m(E,P),m(P,T),m(t,D),m(t,C),m(C,S),m(C,z),m(C,A),m(A,R),c(a,U,s),c(a,W,s),m(W,_),m(_,O),m(W,G),m(W,j),L(j,e[0]),c(a,H,s),c(a,F,s),m(F,J),m(J,K),m(F,Q),m(F,X),L(X,e[1]),c(a,Y,s),c(a,Z,s);for(let e=0;e<ce.length;e+=1)ce[e].m(Z,null);c(a,ee,s),ue&&ue.m(a,s),c(a,te,s),c(a,re,s),m(re,ne),m(ne,ae),se=!0,oe||(ie=[q(n,"input",e[6]),q(w,"input",e[6]),q(S,"input",e[6]),q(j,"input",e[7]),q(X,"input",e[8]),q(ne,"click",e[5])],oe=!0)},p(e,t){if(1&t&&M(j.value)!==e[0]&&L(j,e[0]),2&t&&M(X.value)!==e[1]&&L(X,e[1]),24&t){let r;for(le=e[4],r=0;r<le.length;r+=1){const n=Le(e,le,r);ce[r]?ce[r].p(n,t):(ce[r]=Be(n),ce[r].c(),ce[r].m(Z,null))}for(;r<ce.length;r+=1)ce[r].d(1);ce.length=le.length}"Border"==e[3]?ue?(ue.p(e,t),8&t&&h(ue,1)):(ue=Ce(e),ue.c(),h(ue,1),ue.m(te.parentNode,te)):ue&&(v(),f(ue,1,1,(()=>{ue=null})),g())},i(e){se||(h(ue),se=!0)},o(e){f(ue),se=!1},d(e){e&&i(t),e&&i(U),e&&i(W),e&&i(H),e&&i(F),e&&i(Y),e&&i(Z),V(ce,e),e&&i(ee),ue&&ue.d(e),e&&i(te),e&&i(re),oe=!1,B(ie)}}}function Ve(e){let t,r;return t=new K({props:{id:"square-bloom",init:we,style:{background:"#0D1821",text:"#ffffff"},$$slots:{control:[Se],about:[Me],title:[De],default:[qe]},$$scope:{ctx:e}}}),{c(){E(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){I(t,e,n),r=!0},p(e,[r]){const n={};32783&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}function ze(e,t,r){let{padding:n,threshold:a,borderWidth:s}=Ne.medium,o=["Fill","Border"],i=o[Math.floor(Math.random()*o.length)];function l(){Ie(n,a,s,i)}b(l);return[n,a,s,i,o,l,function(e){r(0,({padding:n,threshold:a,borderWidth:s}=Ne[e.target.value]),n,r(1,a),r(2,s)),Ie(n,a,s,i)},function(){n=M(this.value),r(0,n)},function(){a=M(this.value),r(1,a)},function(){i=this.__value,r(3,i)},[[]],function(){s=M(this.value),r(2,s)}]}class Ae extends e{constructor(e){super(),t(this,e,ze,Ve,r,{})}}function Re(e,t,r){Pe=e,ke=t,Te=r,xe=R(Pe,ke,Te),Ue()}function Ue(){xe.clearRect(0,0,ke,Te),function(e,t){xe.lineCap="square",xe.lineWidth=t,xe.strokeStyle="#847ad8",xe.beginPath();for(let r=0;r<ke;r+=e)for(let t=0;t<Te;t+=e)We(r,t,e,e);xe.stroke()}(25,5)}function We(e,t,r,n){var a;((a=.5)>1||a<=0?0:Math.random()>=a)?(xe.moveTo(e,t),xe.lineTo(e+r,t+n)):(xe.moveTo(e+r,t),xe.lineTo(e,t+n))}function _e(e){let t;return{c(){t=x(">")},l(e){t=k(e,">")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}function Oe(e){let t;return{c(){t=x("10 PRINT")},l(e){t=k(e,"10 PRINT")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}function Ge(e){let t,r,n,u,h;return{c(){t=a("p"),r=x("10 PRINT is a program written in the early 80s to run on a Commodore 64 system that generates a maze with a surprisingly simple condition. It prints either a \\ or a / with a 50% probability."),n=d(),u=a("p"),h=x("10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10"),this.h()},l(e){t=s(e,"P",{});var a=o(t);r=k(a,"10 PRINT is a program written in the early 80s to run on a Commodore 64 system that generates a maze with a surprisingly simple condition. It prints either a \\ or a / with a 50% probability."),a.forEach(i),n=p(e),u=s(e,"P",{class:!0});var l=o(u);h=k(l,"10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10"),l.forEach(i),this.h()},h(){l(u,"class","code svelte-v31k2v")},m(e,a){c(e,t,a),m(t,r),c(e,n,a),c(e,u,a),m(u,h)},d(e){e&&i(t),e&&i(n),e&&i(u)}}}function je(e){let t,r,n,u,h;return{c(){t=a("div"),r=a("button"),n=x("Redraw"),this.h()},l(e){t=s(e,"DIV",{class:!0});var a=o(t);r=s(a,"BUTTON",{class:!0,id:!0});var l=o(r);n=k(l,"Redraw"),l.forEach(i),a.forEach(i),this.h()},h(){l(r,"class","btn"),l(r,"id","10-print-redraw"),l(t,"class","control-item")},m(e,a){c(e,t,a),m(t,r),m(r,n),u||(h=q(r,"click",Ue),u=!0)},p:T,d(e){e&&i(t),u=!1,h()}}}function He(e){let t,r;return t=new K({props:{id:"10-print",init:Re,style:{background:"#453ba4",text:"#ffffff"},$$slots:{control:[je],about:[Ge],title:[Oe],default:[_e]},$$scope:{ctx:e}}}),{c(){E(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){I(t,e,n),r=!0},p(e,[r]){const n={};1&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}class Fe extends e{constructor(e){super(),t(this,e,null,He,r,{})}}let Je,Ke,Qe,Xe,Ye;function Ze(e,t,r){Je=e,Qe=t,Xe=r,Ke=R(Je,Qe,Xe),Ye=0,et(.667,3)}function et(e,t){Ke.clearRect(0,0,Qe,Xe),Ke.lineWidth=7;let r=.45*Xe,n=t+1;!function(e,t,r,n,a,s){let o=e+r+n*Math.cos(Ye),i=t+n*Math.sin(Ye);for(let l=0;l<2*s*Math.PI+.01;l+=.005){let s=e+r*Math.cos(l)+n*Math.cos(l*a+Ye),c=t+r*Math.sin(l)+n*Math.sin(l*a+Ye);tt(o,i,s,c,"hsl("+Math.floor(360*(l-Ye)/(2*Math.PI))+", 100%, 50%)"),o=s,i=c}}(Qe/2,Xe/2,r*e,r*(1-e),1/n,n),Ye+=.01}function tt(e,t,r,n,a){Ke.beginPath(),Ke.moveTo(e,t),Ke.lineTo(r,n),Ke.strokeStyle=a,Ke.stroke()}function rt(e){let t;return{c(){t=x(">")},l(e){t=k(e,">")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}function nt(e){let t;return{c(){t=x("Spiro")},l(e){t=k(e,"Spiro")},m(e,r){c(e,t,r)},d(e){e&&i(t)}}}function at(e){let t,r,n,l,u;return{c(){t=a("p"),r=x("Tracing the path of a circle rolling around the perimeter of another circle gives a simple spirograph."),n=d(),l=a("p"),u=x("Loopiness controls the relative sizes of the inner and outer circles, and Loops controls how many times the outer circle rolls around the inner one.")},l(e){t=s(e,"P",{});var a=o(t);r=k(a,"Tracing the path of a circle rolling around the perimeter of another circle gives a simple spirograph."),a.forEach(i),n=p(e),l=s(e,"P",{});var c=o(l);u=k(c,"Loopiness controls the relative sizes of the inner and outer circles, and Loops controls how many times the outer circle rolls around the inner one."),c.forEach(i)},m(e,a){c(e,t,a),m(t,r),c(e,n,a),c(e,l,a),m(l,u)},d(e){e&&i(t),e&&i(n),e&&i(l)}}}function st(e){let t,r,n,u,h,f,v,g,$,b,y,E,w,I,P,T,D,C,S;return{c(){t=a("div"),r=a("label"),n=x("Loopiness:"),u=d(),h=a("div"),f=a("input"),v=d(),g=a("input"),$=d(),b=a("div"),y=a("label"),E=x("Loops:"),w=d(),I=a("div"),P=a("input"),T=d(),D=a("input"),this.h()},l(e){t=s(e,"DIV",{class:!0});var a=o(t);r=s(a,"LABEL",{for:!0});var l=o(r);n=k(l,"Loopiness:"),l.forEach(i),u=p(a),h=s(a,"DIV",{class:!0});var c=o(h);f=s(c,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,style:!0}),v=p(c),g=s(c,"INPUT",{type:!0,min:!0,max:!0,step:!0}),c.forEach(i),a.forEach(i),$=p(e),b=s(e,"DIV",{class:!0});var d=o(b);y=s(d,"LABEL",{for:!0});var m=o(y);E=k(m,"Loops:"),m.forEach(i),w=p(d),I=s(d,"DIV",{class:!0});var x=o(I);P=s(x,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,style:!0}),T=p(x),D=s(x,"INPUT",{type:!0,min:!0,max:!0,step:!0}),x.forEach(i),d.forEach(i),this.h()},h(){l(r,"for","spiro-radius"),l(f,"id","spiro-radius"),l(f,"type","number"),l(f,"min","0"),l(f,"max","1"),l(f,"step","0.01"),N(f,"width","6em"),l(g,"type","range"),l(g,"min","0"),l(g,"max","1"),l(g,"step","0.01"),l(h,"class","control-group"),l(t,"class","control-item"),l(y,"for","spiro-loops"),l(P,"id","spiro-loops"),l(P,"type","number"),l(P,"min","0"),l(P,"max","9"),l(P,"step","1"),N(P,"width","6em"),l(D,"type","range"),l(D,"min","0"),l(D,"max","9"),l(D,"step","1"),l(I,"class","control-group"),l(b,"class","control-item")},m(a,s){c(a,t,s),m(t,r),m(r,n),m(t,u),m(t,h),m(h,f),L(f,e[0]),m(h,v),m(h,g),L(g,e[0]),c(a,$,s),c(a,b,s),m(b,y),m(y,E),m(b,w),m(b,I),m(I,P),L(P,e[1]),m(I,T),m(I,D),L(D,e[1]),C||(S=[q(f,"input",e[3]),q(f,"input",e[2]),q(g,"change",e[4]),q(g,"input",e[4]),q(g,"input",e[2]),q(P,"input",e[5]),q(P,"input",e[2]),q(D,"change",e[6]),q(D,"input",e[6]),q(D,"input",e[2])],C=!0)},p(e,t){1&t&&M(f.value)!==e[0]&&L(f,e[0]),1&t&&L(g,e[0]),2&t&&M(P.value)!==e[1]&&L(P,e[1]),2&t&&L(D,e[1])},d(e){e&&i(t),e&&i($),e&&i(b),C=!1,B(S)}}}function ot(e){let t,r;return t=new K({props:{id:"spiro",init:Ze,style:{background:"#4C5454",text:"#ffffff"},$$slots:{control:[st],about:[at],title:[nt],default:[rt]},$$scope:{ctx:e}}}),{c(){E(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){I(t,e,n),r=!0},p(e,[r]){const n={};131&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}function it(e,t,r){let n=.667,a=3;return[n,a,function(){et(n,a)},function(){n=M(this.value),r(0,n)},function(){n=M(this.value),r(0,n)},function(){a=M(this.value),r(1,a)},function(){a=M(this.value),r(1,a)}]}class lt extends e{constructor(e){super(),t(this,e,it,ot,r,{})}}function ct(e){let t,r,n,l,u,v,g,$,b;return r=new pe({}),l=new Ae({}),v=new Fe({}),$=new lt({}),{c(){t=a("main"),E(r.$$.fragment),n=d(),E(l.$$.fragment),u=d(),E(v.$$.fragment),g=d(),E($.$$.fragment)},l(e){t=s(e,"MAIN",{});var a=o(t);w(r.$$.fragment,a),n=p(a),w(l.$$.fragment,a),u=p(a),w(v.$$.fragment,a),g=p(a),w($.$$.fragment,a),a.forEach(i)},m(e,a){c(e,t,a),I(r,t,null),m(t,n),I(l,t,null),m(t,u),I(v,t,null),m(t,g),I($,t,null),b=!0},p:T,i(e){b||(h(r.$$.fragment,e),h(l.$$.fragment,e),h(v.$$.fragment,e),h($.$$.fragment,e),b=!0)},o(e){f(r.$$.fragment,e),f(l.$$.fragment,e),f(v.$$.fragment,e),f($.$$.fragment,e),b=!1},d(e){e&&i(t),P(r),P(l),P(v),P($)}}}export default class extends e{constructor(e){super(),t(this,e,null,ct,r,{})}}

import{S as t,i as e,s as n,D as a,e as s,c as r,a as i,d as l,b as o,f as c,G as h,H as u,I as f,x as d,u as p,k as m,n as $,F as v,r as g,w as b,K as y,A as w,L as E,j as k,m as I,o as x,v as P,t as T,g as D,J as M,M as N,N as V,O as L,P as B,Q as S,R,T as C,h as q,U as z,V as A,W as _,X as U,Y as W,Z as O,_ as G}from"../chunks/vendor-773b9a11.js";import{b as H}from"../chunks/paths-45dac81d.js";import{g as j,s as F,p as J}from"../chunks/palettes-b24f50f4.js";const Y=t=>({}),K=t=>({}),Q=t=>({}),X=t=>({}),Z=t=>({}),tt=t=>({});function et(t){let e,n;const m=t[6].control,$=a(m,t,t[5],K),v=$||function(t){let e;return{c(){e=s("div"),this.h()},l(t){e=r(t,"DIV",{class:!0}),i(e).forEach(l),this.h()},h(){o(e,"class","row")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}();return{c(){e=s("div"),v&&v.c(),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=i(e);v&&v.l(n),n.forEach(l),this.h()},h(){o(e,"class","control")},m(t,a){c(t,e,a),v&&v.m(e,null),n=!0},p(t,e){$&&$.p&&(!n||32&e)&&h($,m,t,t[5],n?f(m,t[5],e,Y):u(t[5]),K)},i(t){n||(d(v,t),n=!0)},o(t){p(v,t),n=!1},d(t){t&&l(e),v&&v.d(t)}}}function nt(t){let e,n,y,w,E,k,I,x,P,T,D,M,N;const V=t[6].title,L=a(V,t,t[5],tt),B=t[6].about,S=a(B,t,t[5],X);let R=t[3].control&&et(t);return{c(){e=s("section"),n=s("div"),y=s("div"),w=s("div"),E=s("div"),k=s("h2"),L&&L.c(),I=m(),S&&S.c(),x=m(),R&&R.c(),P=m(),T=s("div"),D=s("canvas"),this.h()},l(t){e=r(t,"SECTION",{});var a=i(e);n=r(a,"DIV",{class:!0,style:!0});var s=i(n);y=r(s,"DIV",{class:!0});var o=i(y);w=r(o,"DIV",{class:!0});var c=i(w);E=r(c,"DIV",{class:!0});var h=i(E);k=r(h,"H2",{class:!0});var u=i(k);L&&L.l(u),u.forEach(l),I=$(h),S&&S.l(h),h.forEach(l),x=$(c),R&&R.l(c),c.forEach(l),o.forEach(l),P=$(s),T=r(s,"DIV",{class:!0});var f=i(T);D=r(f,"CANVAS",{id:!0,class:!0}),i(D).forEach(l),f.forEach(l),s.forEach(l),a.forEach(l),this.h()},h(){o(k,"class","svelte-d2i0he"),o(E,"class","about"),o(w,"class","info svelte-d2i0he"),o(y,"class","info-container svelte-d2i0he"),o(D,"id",t[0]),o(D,"class","svelte-d2i0he"),o(T,"class","canvas svelte-d2i0he"),o(n,"class","container svelte-d2i0he"),o(n,"style",M=`--backgroundColor: ${t[1].background}; --textColor: ${t[1].text}`)},m(a,s){c(a,e,s),v(e,n),v(n,y),v(y,w),v(w,E),v(E,k),L&&L.m(k,null),v(E,I),S&&S.m(E,null),v(w,x),R&&R.m(w,null),v(n,P),v(n,T),v(T,D),t[7](D),N=!0},p(t,[e]){L&&L.p&&(!N||32&e)&&h(L,V,t,t[5],N?f(V,t[5],e,Z):u(t[5]),tt),S&&S.p&&(!N||32&e)&&h(S,B,t,t[5],N?f(B,t[5],e,Q):u(t[5]),X),t[3].control?R?(R.p(t,e),8&e&&d(R,1)):(R=et(t),R.c(),d(R,1),R.m(w,null)):R&&(g(),p(R,1,1,(()=>{R=null})),b()),(!N||1&e)&&o(D,"id",t[0]),(!N||2&e&&M!==(M=`--backgroundColor: ${t[1].background}; --textColor: ${t[1].text}`))&&o(n,"style",M)},i(t){N||(d(L,t),d(S,t),d(R),N=!0)},o(t){p(L,t),p(S,t),p(R),N=!1},d(n){n&&l(e),L&&L.d(n),S&&S.d(n),R&&R.d(),t[7](null)}}}function at(t,e,n){let{$$slots:a={},$$scope:s}=e;const r=y(a);let i,{id:l}=e,{init:o}=e,{style:c={background:"#000404",text:"#ffffff"}}=e;return w((()=>{let[t,e]=window.innerWidth>576?[600,600]:[500,500];o(i,t,e)})),t.$$set=t=>{"id"in t&&n(0,l=t.id),"init"in t&&n(4,o=t.init),"style"in t&&n(1,c=t.style),"$$scope"in t&&n(5,s=t.$$scope)},[l,c,i,r,o,s,a,function(t){E[t?"unshift":"push"]((()=>{i=t,n(2,i)}))}]}class st extends t{constructor(t){super(),e(this,t,at,nt,n,{id:0,init:4,style:1})}}let rt,it,lt,ot,ct,ht,ut,ft;class dt{constructor(t,e,n=[lt/2,ot/2],a=3*Math.PI/2){this.radius=t,this.center=n,this.theta=e,this.phase=a}point(t,e){let n=this.radius;void 0!==e&&(n+=e);let a=this.phase+t*this.theta;return[this.center[0]+n*Math.cos(a),this.center[1]+n*Math.sin(a)]}drawIndicator(){it.beginPath(),mt(this.point(0,15),this.point(0,60)),mt(this.point(1,15),this.point(1,60)),it.stroke()}}function pt(t){it.clearRect(0,0,lt,ot);let e=new dt(.45*ot,2*Math.PI/t);it.lineWidth=1,it.strokeStyle="#0f0a36";for(let n=0;n<t-1;n++)for(let a=t-1;a>n;a--)mt(e.point(n),e.point(a))}function mt(t,e){it.beginPath();let[n,a]=t;it.moveTo(n,a),[n,a]=e,it.lineTo(n,a),it.stroke()}function $t(t,e,n){rt=t,lt=e,ot=n,it=j(rt,lt,ot,4);pt(10)}function vt(t){let e;return{c(){e=T(">")},l(t){e=D(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function gt(t){let e,n;return{c(){e=s("a"),n=T("Number Circle"),this.h()},l(t){e=r(t,"A",{href:!0,class:!0});var a=i(e);n=D(a,"Number Circle"),a.forEach(l),this.h()},h(){o(e,"href",H+"/number-circle"),o(e,"class","link")},m(t,a){c(t,e,a),v(e,n)},p:M,d(t){t&&l(e)}}}function bt(t){let e,n,a,h;return{c(){e=s("p"),n=T("Get evenly spaced points on a circle. Draw lines between them all. "),a=s("a"),h=T("See more..."),this.h()},l(t){e=r(t,"P",{});var s=i(e);n=D(s,"Get evenly spaced points on a circle. Draw lines between them all. "),a=r(s,"A",{href:!0,class:!0});var o=i(a);h=D(o,"See more..."),o.forEach(l),s.forEach(l),this.h()},h(){o(a,"href",H+"/number-circle"),o(a,"class","link")},m(t,s){c(t,e,s),v(e,n),v(e,a),v(a,h)},p:M,d(t){t&&l(e)}}}function yt(t){let e,n,a,h,u,f,d,p,g,b;return{c(){e=s("div"),n=s("label"),a=T("Points:"),h=m(),u=s("div"),f=s("input"),d=m(),p=s("input"),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=i(e);n=r(s,"LABEL",{for:!0});var o=i(n);a=D(o,"Points:"),o.forEach(l),h=$(s),u=r(s,"DIV",{class:!0});var c=i(u);f=r(c,"INPUT",{id:!0,type:!0,min:!0,max:!0,style:!0}),d=$(c),p=r(c,"INPUT",{type:!0,min:!0,max:!0,step:!0}),c.forEach(l),s.forEach(l),this.h()},h(){o(n,"for","number-circle-points"),o(f,"id","number-circle-points"),o(f,"type","number"),o(f,"min","2"),o(f,"max","24"),N(f,"width","6em"),o(p,"type","range"),o(p,"min","2"),o(p,"max","24"),o(p,"step","1"),o(u,"class","control-group"),o(e,"class","control-item")},m(s,r){c(s,e,r),v(e,n),v(n,a),v(e,h),v(e,u),v(u,f),V(f,t[0]),v(u,d),v(u,p),V(p,t[0]),g||(b=[L(f,"input",t[1]),L(f,"input",(function(){B(pt(t[0]))&&pt(t[0]).apply(this,arguments)})),L(p,"change",t[2]),L(p,"input",t[2]),L(p,"input",(function(){B(pt(t[0]))&&pt(t[0]).apply(this,arguments)}))],g=!0)},p(e,n){t=e,1&n&&S(f.value)!==t[0]&&V(f,t[0]),1&n&&V(p,t[0])},d(t){t&&l(e),g=!1,R(b)}}}function wt(t){let e,n;return e=new st({props:{id:"number-circle",init:$t,style:{background:"#fffdf2",text:"#000000"},$$slots:{control:[yt],about:[bt],title:[gt],default:[vt]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){x(e,t,a),n=!0},p(t,[n]){const a={};9&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Et(t,e,n){let a=10;return[a,function(){a=S(this.value),n(0,a)},function(){a=S(this.value),n(0,a)}]}class kt extends t{constructor(t){super(),e(this,t,Et,wt,n,{})}}let It=["#ff595e","#ffca3a","#8ac926","#1982c4","#6A4C93"];function xt(t,e,n){this.x=t,this.y=e,this.size=n,this.children=[]}function Pt(t,e,n){let a=n;return n.children.length>0&&n.children.forEach((function(n){n.isPointEnclosed(t,e)&&(a=Pt(t,e,n))})),a}function Tt(t,e,n){let a=n.size;return a=Math.min(n.size-n.getChebyshevCenterDistance(t,e),a),n.children.forEach((function(n){a=Math.min(n.getChebyshevCenterDistance(t,e)-n.size,a)})),a}function Dt(t){t.stroke(),t.children.forEach(Dt)}function Mt(t){t.fill(),t.children.forEach(Mt)}function Nt(t,e){return Math.floor(Math.random()*(e-t)+t)}function Vt(t,e,n){ct=t,ut=e,ft=n,ht=j(ct,ut,ft);let{padding:a,threshold:s,borderWidth:r}=Bt.medium;Lt(a,s,r)}function Lt(t,e,n,a){ht.clearRect(0,0,ut,ft);let s=new xt(ut/2,ft/2,(ut+t)/2);!function(t,e,n){let a=0;for(;a<1e4;){let s=100;for(;--s>0;){let s=Nt(0,ut),r=Nt(0,ft),i=Pt(s,r,t),l=Tt(s,r,i)-e;if(l>n){let t=new xt(s,r,l);i.children.push(t),a++;break}}if(s<=0)break}}(s,t,e),ht.lineWidth=n,"Border"==a?Dt(s):"Fill"==a?Mt(s):Dt(s)}xt.prototype.getChebyshevCenterDistance=function(t,e){return Math.max(Math.abs(this.x-t),Math.abs(this.y-e))},xt.prototype.isPointEnclosed=function(t,e){return this.getChebyshevCenterDistance(t,e)<=this.size},xt.prototype.stroke=function(){ht.strokeStyle=It[Nt(0,It.length)],ht.beginPath(),ht.rect(this.x-this.size,this.y-this.size,2*this.size,2*this.size),ht.stroke()},xt.prototype.fill=function(){ht.fillStyle=It[Nt(0,It.length)],ht.beginPath(),ht.rect(this.x-this.size,this.y-this.size,2*this.size,2*this.size),ht.fill()};let Bt={small:{name:"Small",padding:2,threshold:1,borderWidth:1},medium:{name:"Medium",padding:4,threshold:2,borderWidth:2},large:{name:"Large",padding:9,threshold:6,borderWidth:5},"spaced-out":{name:"Spaced out",padding:16,threshold:-4,borderWidth:1.5}};function St(t,e,n){const a=t.slice();return a[9]=e[n],a[11]=n,a}function Rt(t){let e,n,a,h,u,f,d,p,g,b,y,w=(null!=t[4]?t[4][t[11]]:t[9])+"";return{c(){e=s("div"),n=s("input"),u=m(),f=s("label"),d=T(w),g=m(),this.h()},l(t){e=r(t,"DIV",{class:!0});var a=i(e);n=r(a,"INPUT",{type:!0,name:!0,id:!0,class:!0}),u=$(a),f=r(a,"LABEL",{for:!0,class:!0});var s=i(f);d=D(s,w),s.forEach(l),g=$(a),a.forEach(l),this.h()},h(){o(n,"type","radio"),o(n,"name",t[1]),o(n,"id",a=`${t[1]}-${t[9]}`),n.__value=h=t[9],n.value=n.__value,n.disabled=t[2],o(n,"class","svelte-4n3csw"),t[8][0].push(n),o(f,"for",p=`${t[1]}-${t[9]}`),o(f,"class","svelte-4n3csw"),C(f,"active",t[0]==t[9]),o(e,"class","radio svelte-4n3csw")},m(a,s){c(a,e,s),v(e,n),n.checked=n.__value===t[0],v(e,u),v(e,f),v(f,d),v(e,g),b||(y=[L(n,"change",t[7]),L(n,"input",t[5]),L(n,"change",t[6])],b=!0)},p(t,e){2&e&&o(n,"name",t[1]),10&e&&a!==(a=`${t[1]}-${t[9]}`)&&o(n,"id",a),8&e&&h!==(h=t[9])&&(n.__value=h,n.value=n.__value),4&e&&(n.disabled=t[2]),1&e&&(n.checked=n.__value===t[0]),24&e&&w!==(w=(null!=t[4]?t[4][t[11]]:t[9])+"")&&q(d,w),10&e&&p!==(p=`${t[1]}-${t[9]}`)&&o(f,"for",p),9&e&&C(f,"active",t[0]==t[9])},d(a){a&&l(e),t[8][0].splice(t[8][0].indexOf(n),1),b=!1,R(y)}}}function Ct(t){let e,n=t[3],a=[];for(let s=0;s<n.length;s+=1)a[s]=Rt(St(t,n,s));return{c(){e=s("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var n=i(e);for(let e=0;e<a.length;e+=1)a[e].l(n);n.forEach(l),this.h()},h(){o(e,"class","radioGroup svelte-4n3csw")},m(t,n){c(t,e,n);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(t,[s]){if(31&s){let r;for(n=t[3],r=0;r<n.length;r+=1){const i=St(t,n,r);a[r]?a[r].p(i,s):(a[r]=Rt(i),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},i:M,o:M,d(t){t&&l(e),z(a,t)}}}let qt,zt,At,_t,Ut=0;function Wt(t,e,n){let{value:a}=e,{name:s="radio"+Ut++}=e,{disabled:r=!1}=e,{values:i}=e,{labels:l}=e;return t.$$set=t=>{"value"in t&&n(0,a=t.value),"name"in t&&n(1,s=t.name),"disabled"in t&&n(2,r=t.disabled),"values"in t&&n(3,i=t.values),"labels"in t&&n(4,l=t.labels)},[a,s,r,i,l,function(e){A.call(this,t,e)},function(e){A.call(this,t,e)},function(){a=this.__value,n(0,a)},[[]]]}class Ot extends t{constructor(t){super(),e(this,t,Wt,Ct,n,{value:0,name:1,disabled:2,values:3,labels:4})}}function Gt(t){let e;return{c(){e=T(">")},l(t){e=D(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Ht(t){let e;return{c(){e=T("Square Bloom")},l(t){e=D(t,"Square Bloom")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function jt(t){let e,n,a,o,h;return{c(){e=s("p"),n=T("Its rule is simple: pick a random spot and draw the largest square possible that doesn't touch any existing square."),a=m(),o=s("p"),h=T("Try tweaking the parameters. While proper inputs lets the canvas draw following the rule, negative values are fun too!")},l(t){e=r(t,"P",{});var s=i(e);n=D(s,"Its rule is simple: pick a random spot and draw the largest square possible that doesn't touch any existing square."),s.forEach(l),a=$(t),o=r(t,"P",{});var c=i(o);h=D(c,"Try tweaking the parameters. While proper inputs lets the canvas draw following the rule, negative values are fun too!"),c.forEach(l)},m(t,s){c(t,e,s),v(e,n),c(t,a,s),c(t,o,s),v(o,h)},d(t){t&&l(e),t&&l(a),t&&l(o)}}}function Ft(t){let e,n,a,h,u,f,d,p,g,b;return{c(){e=s("div"),n=s("label"),a=T("Border width:"),h=m(),u=s("input"),this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0});var s=i(e);n=r(s,"LABEL",{for:!0});var o=i(n);a=D(o,"Border width:"),o.forEach(l),h=$(s),u=r(s,"INPUT",{type:!0,id:!0,min:!0,step:!0}),s.forEach(l),this.h()},h(){o(n,"for","square-bloom-border-width"),o(u,"type","number"),o(u,"id","square-bloom-border-width"),o(u,"min","1"),o(u,"step","1"),u.disabled=f="Border"!=t[0],o(e,"class","control-item"),N(e,"margin-top","0.2em")},m(s,r){c(s,e,r),v(e,n),v(n,a),v(e,h),v(e,u),V(u,t[3]),p=!0,g||(b=L(u,"input",t[12]),g=!0)},p(t,e){(!p||1&e&&f!==(f="Border"!=t[0]))&&(u.disabled=f),8&e&&S(u.value)!==t[3]&&V(u,t[3])},i(t){p||(U((()=>{d||(d=W(e,G,{},!0)),d.run(1)})),p=!0)},o(t){d||(d=W(e,G,{},!1)),d.run(0),p=!1},d(t){t&&l(e),t&&d&&d.end(),g=!1,b()}}}function Jt(t){let e,n,a,h,u,f,y,w,M,N,B,C,q,z,A,U,W,G,H,j,F,J,Y,K,Q,X;function Z(e){t[11](e)}n=new Ot({props:{values:t[5],labels:t[6],value:t[5][1]}}),n.$on("change",t[8]);let tt={values:t[4],name:"drawStyle"};void 0!==t[0]&&(tt.value=t[0]),W=new Ot({props:tt}),E.push((()=>_(W,"value",Z))),W.$on("change",t[7]);let et="Border"==t[0]&&Ft(t);return{c(){e=s("div"),k(n.$$.fragment),a=m(),h=s("div"),u=s("label"),f=T("Space between squares:"),y=m(),w=s("input"),M=m(),N=s("div"),B=s("label"),C=T("Minimum square size:"),q=m(),z=s("input"),A=m(),U=s("div"),k(W.$$.fragment),H=m(),et&&et.c(),j=m(),F=s("div"),J=s("button"),Y=T("Redraw"),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=i(e);I(n.$$.fragment,s),s.forEach(l),a=$(t),h=r(t,"DIV",{class:!0});var o=i(h);u=r(o,"LABEL",{for:!0});var c=i(u);f=D(c,"Space between squares:"),c.forEach(l),y=$(o),w=r(o,"INPUT",{type:!0,id:!0,step:!0}),o.forEach(l),M=$(t),N=r(t,"DIV",{class:!0});var d=i(N);B=r(d,"LABEL",{for:!0});var p=i(B);C=D(p,"Minimum square size:"),p.forEach(l),q=$(d),z=r(d,"INPUT",{type:!0,id:!0,step:!0}),d.forEach(l),A=$(t),U=r(t,"DIV",{class:!0});var m=i(U);I(W.$$.fragment,m),m.forEach(l),H=$(t),et&&et.l(t),j=$(t),F=r(t,"DIV",{class:!0});var v=i(F);J=r(v,"BUTTON",{class:!0,id:!0});var g=i(J);Y=D(g,"Redraw"),g.forEach(l),v.forEach(l),this.h()},h(){o(e,"class","control-item"),o(u,"for","square-bloom-padding"),o(w,"type","number"),o(w,"id","square-bloom-padding"),o(w,"step","1"),o(h,"class","control-item"),o(B,"for","square-bloom-threshold"),o(z,"type","number"),o(z,"id","square-bloom-threshold"),o(z,"step","1"),o(N,"class","control-item"),o(U,"class","control-item"),o(J,"class","btn"),o(J,"id","square-bloom-redraw"),o(F,"class","control-item")},m(s,r){c(s,e,r),x(n,e,null),c(s,a,r),c(s,h,r),v(h,u),v(u,f),v(h,y),v(h,w),V(w,t[1]),c(s,M,r),c(s,N,r),v(N,B),v(B,C),v(N,q),v(N,z),V(z,t[2]),c(s,A,r),c(s,U,r),x(W,U,null),c(s,H,r),et&&et.m(s,r),c(s,j,r),c(s,F,r),v(F,J),v(J,Y),K=!0,Q||(X=[L(w,"input",t[9]),L(z,"input",t[10]),L(J,"click",t[7])],Q=!0)},p(t,e){2&e&&S(w.value)!==t[1]&&V(w,t[1]),4&e&&S(z.value)!==t[2]&&V(z,t[2]);const n={};!G&&1&e&&(G=!0,n.value=t[0],O((()=>G=!1))),W.$set(n),"Border"==t[0]?et?(et.p(t,e),1&e&&d(et,1)):(et=Ft(t),et.c(),d(et,1),et.m(j.parentNode,j)):et&&(g(),p(et,1,1,(()=>{et=null})),b())},i(t){K||(d(n.$$.fragment,t),d(W.$$.fragment,t),d(et),K=!0)},o(t){p(n.$$.fragment,t),p(W.$$.fragment,t),p(et),K=!1},d(t){t&&l(e),P(n),t&&l(a),t&&l(h),t&&l(M),t&&l(N),t&&l(A),t&&l(U),P(W),t&&l(H),et&&et.d(t),t&&l(j),t&&l(F),Q=!1,R(X)}}}function Yt(t){let e,n;return e=new st({props:{id:"square-bloom",init:Vt,style:{background:"#0D1821",text:"#ffffff"},$$slots:{control:[Jt],about:[jt],title:[Ht],default:[Gt]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){x(e,t,a),n=!0},p(t,[n]){const a={};8207&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Kt(t,e,n){let a=["Fill","Border"],s=a[Math.floor(Math.random()*a.length)],r=Object.keys(Bt),i=r.map((t=>Bt[t].name)),{padding:l,threshold:o,borderWidth:c}=Bt.medium;function h(){Lt(l,o,c,s)}return w(h),[s,l,o,c,a,r,i,h,function(t){n(1,({padding:l,threshold:o,borderWidth:c}=Bt[t.target.value]),l,n(2,o),n(3,c)),Lt(l,o,c,s)},function(){l=S(this.value),n(1,l)},function(){o=S(this.value),n(2,o)},function(t){s=t,n(0,s)},function(){c=S(this.value),n(3,c)}]}class Qt extends t{constructor(t){super(),e(this,t,Kt,Yt,n,{})}}function Xt(t,e,n){qt=t,At=e,_t=n,zt=j(qt,At,_t),Zt()}function Zt(){zt.clearRect(0,0,At,_t),function(t,e){zt.lineCap="square",zt.lineWidth=e,zt.strokeStyle="#847ad8",zt.beginPath();for(let n=0;n<At;n+=t)for(let e=0;e<_t;e+=t)te(n,e,t,t);zt.stroke()}(25,5)}function te(t,e,n,a){var s;((s=.5)>1||s<=0?0:Math.random()>=s)?(zt.moveTo(t,e),zt.lineTo(t+n,e+a)):(zt.moveTo(t+n,e),zt.lineTo(t,e+a))}function ee(t){let e;return{c(){e=T(">")},l(t){e=D(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function ne(t){let e;return{c(){e=T("10 PRINT")},l(t){e=D(t,"10 PRINT")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function ae(t){let e,n,a,h,u;return{c(){e=s("p"),n=T("10 PRINT is a program written in the early 80s to run on a Commodore 64 system that generates a maze with a surprisingly simple condition. It prints either a \\ or a / with a 50% probability."),a=m(),h=s("p"),u=T("10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10"),this.h()},l(t){e=r(t,"P",{});var s=i(e);n=D(s,"10 PRINT is a program written in the early 80s to run on a Commodore 64 system that generates a maze with a surprisingly simple condition. It prints either a \\ or a / with a 50% probability."),s.forEach(l),a=$(t),h=r(t,"P",{class:!0});var o=i(h);u=D(o,"10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10"),o.forEach(l),this.h()},h(){o(h,"class","code svelte-v31k2v")},m(t,s){c(t,e,s),v(e,n),c(t,a,s),c(t,h,s),v(h,u)},d(t){t&&l(e),t&&l(a),t&&l(h)}}}function se(t){let e,n,a,h,u;return{c(){e=s("div"),n=s("button"),a=T("Redraw"),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=i(e);n=r(s,"BUTTON",{class:!0,id:!0});var o=i(n);a=D(o,"Redraw"),o.forEach(l),s.forEach(l),this.h()},h(){o(n,"class","btn"),o(n,"id","10-print-redraw"),o(e,"class","control-item")},m(t,s){c(t,e,s),v(e,n),v(n,a),h||(u=L(n,"click",Zt),h=!0)},p:M,d(t){t&&l(e),h=!1,u()}}}function re(t){let e,n;return e=new st({props:{id:"10-print",init:Xt,style:{background:"#453ba4",text:"#ffffff"},$$slots:{control:[se],about:[ae],title:[ne],default:[ee]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){x(e,t,a),n=!0},p(t,[n]){const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}class ie extends t{constructor(t){super(),e(this,t,null,re,n,{})}}function le(t){let e,n,a,h,u,f,d;return{c(){e=s("div"),n=s("input"),a=m(),h=s("label"),u=T(t[2]),this.h()},l(s){e=r(s,"DIV",{class:!0});var o=i(e);n=r(o,"INPUT",{type:!0,id:!0,class:!0}),a=$(o),h=r(o,"LABEL",{for:!0,class:!0});var c=i(h);u=D(c,t[2]),c.forEach(l),o.forEach(l),this.h()},h(){o(n,"type","checkbox"),o(n,"id",t[3]),n.disabled=t[1],o(n,"class","svelte-1vipn0r"),o(h,"for",t[3]),o(h,"class","svelte-1vipn0r"),o(e,"class","svelte-1vipn0r"),C(e,"checked",t[0]),C(e,"disabled",t[1])},m(s,r){c(s,e,r),v(e,n),n.checked=t[0],v(e,a),v(e,h),v(h,u),f||(d=[L(n,"change",t[6]),L(n,"input",t[4]),L(n,"change",t[5])],f=!0)},p(t,[a]){8&a&&o(n,"id",t[3]),2&a&&(n.disabled=t[1]),1&a&&(n.checked=t[0]),4&a&&q(u,t[2]),8&a&&o(h,"for",t[3]),1&a&&C(e,"checked",t[0]),2&a&&C(e,"disabled",t[1])},i:M,o:M,d(t){t&&l(e),f=!1,R(d)}}}let oe,ce,he,ue,fe,de=0;function pe(t,e,n){let{checked:a}=e,{disabled:s=!1}=e,{label:r=""}=e,{id:i="check"+de++}=e;return t.$$set=t=>{"checked"in t&&n(0,a=t.checked),"disabled"in t&&n(1,s=t.disabled),"label"in t&&n(2,r=t.label),"id"in t&&n(3,i=t.id)},[a,s,r,i,function(e){A.call(this,t,e)},function(e){A.call(this,t,e)},function(){a=this.checked,n(0,a)}]}class me extends t{constructor(t){super(),e(this,t,pe,le,n,{checked:0,disabled:1,label:2,id:3})}}function $e(t,e,n){oe=t,he=e,ue=n,ce=j(oe,he,ue),fe=0,ve(.667,3)}function ve(t,e,n){ce.clearRect(0,0,he,ue),ce.lineWidth=7;let a=.45*ue,s=e+1;!function(t,e,n,a,s,r){let i=t+n+a*Math.cos(fe),l=e+a*Math.sin(fe);for(let o=0;o<2*r*Math.PI+.01;o+=.005){let r=t+n*Math.cos(o)+a*Math.cos(o*s+fe),c=e+n*Math.sin(o)+a*Math.sin(o*s+fe);ge(i,l,r,c,"hsl("+Math.floor(360*(o-fe)/(2*Math.PI))+", 100%, 50%)"),i=r,l=c}}(he/2,ue/2,a*t,a*(1-t),1/s,s),n&&(fe+=.01)}function ge(t,e,n,a,s){ce.beginPath(),ce.moveTo(t,e),ce.lineTo(n,a),ce.strokeStyle=s,ce.stroke()}function be(t){let e;return{c(){e=T(">")},l(t){e=D(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function ye(t){let e;return{c(){e=T("Spiro")},l(t){e=D(t,"Spiro")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function we(t){let e,n,a,o,h;return{c(){e=s("p"),n=T("Tracing the path of a circle rolling around the perimeter of another circle gives a simple spirograph."),a=m(),o=s("p"),h=T("Loopiness controls the relative sizes of the inner and outer circles, and Loops controls how many times the outer circle rolls around the inner one.")},l(t){e=r(t,"P",{});var s=i(e);n=D(s,"Tracing the path of a circle rolling around the perimeter of another circle gives a simple spirograph."),s.forEach(l),a=$(t),o=r(t,"P",{});var c=i(o);h=D(c,"Loopiness controls the relative sizes of the inner and outer circles, and Loops controls how many times the outer circle rolls around the inner one."),c.forEach(l)},m(t,s){c(t,e,s),v(e,n),c(t,a,s),c(t,o,s),v(o,h)},d(t){t&&l(e),t&&l(a),t&&l(o)}}}function Ee(t){let e,n,a,h,u,f,g,b,y,w,M,B,C,q,z,A,U,W,G,H,j,F,J,Y;function K(e){t[8](e)}let Q={label:"Spin"};return void 0!==t[2]&&(Q.checked=t[2]),H=new me({props:Q}),E.push((()=>_(H,"checked",K))),{c(){e=s("div"),n=s("label"),a=T("Loopiness:"),h=m(),u=s("div"),f=s("input"),g=m(),b=s("input"),y=m(),w=s("div"),M=s("label"),B=T("Loops:"),C=m(),q=s("div"),z=s("input"),A=m(),U=s("input"),W=m(),G=s("div"),k(H.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=i(e);n=r(s,"LABEL",{for:!0});var o=i(n);a=D(o,"Loopiness:"),o.forEach(l),h=$(s),u=r(s,"DIV",{class:!0});var c=i(u);f=r(c,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,style:!0}),g=$(c),b=r(c,"INPUT",{type:!0,min:!0,max:!0,step:!0}),c.forEach(l),s.forEach(l),y=$(t),w=r(t,"DIV",{class:!0});var d=i(w);M=r(d,"LABEL",{for:!0});var p=i(M);B=D(p,"Loops:"),p.forEach(l),C=$(d),q=r(d,"DIV",{class:!0});var m=i(q);z=r(m,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,style:!0}),A=$(m),U=r(m,"INPUT",{type:!0,min:!0,max:!0,step:!0}),m.forEach(l),W=$(d),G=r(d,"DIV",{class:!0});var v=i(G);I(H.$$.fragment,v),v.forEach(l),d.forEach(l),this.h()},h(){o(n,"for","spiro-radius"),o(f,"id","spiro-radius"),o(f,"type","number"),o(f,"min","0"),o(f,"max","1"),o(f,"step","0.01"),N(f,"width","6em"),o(b,"type","range"),o(b,"min","0"),o(b,"max","1"),o(b,"step","0.01"),o(u,"class","control-group"),o(e,"class","control-item"),o(M,"for","spiro-loops"),o(z,"id","spiro-loops"),o(z,"type","number"),o(z,"min","0"),o(z,"max","9"),o(z,"step","1"),N(z,"width","6em"),o(U,"type","range"),o(U,"min","0"),o(U,"max","9"),o(U,"step","1"),o(q,"class","control-group"),o(G,"class","control-group control-item"),o(w,"class","control-item")},m(s,r){c(s,e,r),v(e,n),v(n,a),v(e,h),v(e,u),v(u,f),V(f,t[0]),v(u,g),v(u,b),V(b,t[0]),c(s,y,r),c(s,w,r),v(w,M),v(M,B),v(w,C),v(w,q),v(q,z),V(z,t[1]),v(q,A),v(q,U),V(U,t[1]),v(w,W),v(w,G),x(H,G,null),F=!0,J||(Y=[L(f,"input",t[4]),L(f,"input",t[3]),L(b,"change",t[5]),L(b,"input",t[5]),L(b,"input",t[3]),L(z,"input",t[6]),L(z,"input",t[3]),L(U,"change",t[7]),L(U,"input",t[7]),L(U,"input",t[3])],J=!0)},p(t,e){1&e&&S(f.value)!==t[0]&&V(f,t[0]),1&e&&V(b,t[0]),2&e&&S(z.value)!==t[1]&&V(z,t[1]),2&e&&V(U,t[1]);const n={};!j&&4&e&&(j=!0,n.checked=t[2],O((()=>j=!1))),H.$set(n)},i(t){F||(d(H.$$.fragment,t),F=!0)},o(t){p(H.$$.fragment,t),F=!1},d(t){t&&l(e),t&&l(y),t&&l(w),P(H),J=!1,R(Y)}}}function ke(t){let e,n;return e=new st({props:{id:"spiro",init:$e,style:{background:"#4C5454",text:"#ffffff"},$$slots:{control:[Ee],about:[we],title:[ye],default:[be]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){x(e,t,a),n=!0},p(t,[n]){const a={};519&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Ie(t,e,n){let a=.667,s=3,r=!0;return[a,s,r,function(){ve(a,s,r)},function(){a=S(this.value),n(0,a)},function(){a=S(this.value),n(0,a)},function(){s=S(this.value),n(1,s)},function(){s=S(this.value),n(1,s)},function(t){r=t,n(2,r)}]}class xe extends t{constructor(t){super(),e(this,t,Ie,ke,n,{})}}function Pe(t){let e;return{c(){e=T(">")},l(t){e=D(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Te(t){let e;return{c(){e=T("Half all the way down")},l(t){e=D(t,"Half all the way down")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function De(t){let e,n,a,h,u,f,d;return{c(){e=s("p"),n=T("1/2 + 1/4 + 1/8 + 1/16 + ..."),a=m(),h=s("p"),u=T("Based on the album art for "),f=s("a"),d=T("Blue - Eiffel 65 (Flume Remix)"),this.h()},l(t){e=r(t,"P",{});var s=i(e);n=D(s,"1/2 + 1/4 + 1/8 + 1/16 + ..."),s.forEach(l),a=$(t),h=r(t,"P",{});var o=i(h);u=D(o,"Based on the album art for "),f=r(o,"A",{class:!0,href:!0});var c=i(f);d=D(c,"Blue - Eiffel 65 (Flume Remix)"),c.forEach(l),o.forEach(l),this.h()},h(){o(f,"class","link"),o(f,"href","https://www.youtube.com/watch?v=_JmTatkAMwY")},m(t,s){c(t,e,s),v(e,n),c(t,a,s),c(t,h,s),v(h,u),v(h,f),v(f,d)},d(t){t&&l(e),t&&l(a),t&&l(h)}}}function Me(t){let e,n,a,h,u,f,g,b,y,w;function M(e){t[3](e)}let N={label:"Draw circles"};return void 0!==t[0]&&(N.checked=t[0]),n=new me({props:N}),E.push((()=>_(n,"checked",M))),n.$on("change",t[2]),{c(){e=s("div"),k(n.$$.fragment),h=m(),u=s("div"),f=s("button"),g=T("Redraw"),this.h()},l(t){e=r(t,"DIV",{class:!0});var a=i(e);I(n.$$.fragment,a),a.forEach(l),h=$(t),u=r(t,"DIV",{class:!0});var s=i(u);f=r(s,"BUTTON",{class:!0,id:!0});var o=i(f);g=D(o,"Redraw"),o.forEach(l),s.forEach(l),this.h()},h(){o(e,"class","control-group"),o(f,"class","btn"),o(f,"id","half-redraw"),o(u,"class","control-item")},m(a,s){c(a,e,s),x(n,e,null),c(a,h,s),c(a,u,s),v(u,f),v(f,g),b=!0,y||(w=L(f,"click",t[2]),y=!0)},p(t,e){const s={};!a&&1&e&&(a=!0,s.checked=t[0],O((()=>a=!1))),n.$set(s)},i(t){b||(d(n.$$.fragment,t),b=!0)},o(t){p(n.$$.fragment,t),b=!1},d(t){t&&l(e),P(n),t&&l(h),t&&l(u),y=!1,w()}}}function Ne(t){let e,n;return e=new st({props:{id:"new",init:t[1],style:{background:"#001427",text:"#ffffff"},$$slots:{control:[Me],about:[De],title:[Te],default:[Pe]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){x(e,t,a),n=!0},p(t,[n]){const a={};2049&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Ve(t,e,n,a,s,r){t(e,n,a,s),Le(t,e,n+s,a/2,s/2,r),Le(t,e+a/2,n+s,a/2,s/2,r),Be(t,e+a,n,a/2,s/2,r),Be(t,e+a,n+s/2,a/2,s/2,r),r-- >0?Ve(t,e+a,n+s,a/2,s/2,r):(t(e+=a,n+=s,a/2,s/2),t(e,n+s/2,a/2,s/2),t(e+a/2,n,a/2,s/2),t(e+a/2,n+s/2,a/2,s/2))}function Le(t,e,n,a,s,r){t(e,n,a,s),r-- >0?(Le(t,e,n+s,a/2,s/2,r),Le(t,e+a/2,n+s,a/2,s/2,r)):t(e,n+s,a,s)}function Be(t,e,n,a,s,r){t(e,n,a,s),r-- >0?(Be(t,e+a,n,a/2,s/2,r),Be(t,e+a,n+s/2,a/2,s/2,r)):t(e+a,n,a,s)}function Se(t,e,n){let a,s,r,i,l,o=!0;function c(){let t;l=F(J),s.clearRect(0,0,r,i),t=o?function(...t){h(...t),function(t,e,n,a){o&&(s.fillStyle=l[4],s.beginPath(),s.arc(t,e,n/20,0,2*Math.PI),s.fill())}(...t)}:h,Ve(t,0,0,r/2,i/2,7)}function h(t,e,n,a){n/=2,a/=2,s.fillStyle=l[0],s.beginPath(),s.rect(t,e,n,a),s.fill(),s.fillStyle=l[1],s.beginPath(),s.rect(t,e+a,n,a),s.fill(),s.fillStyle=l[2],s.beginPath(),s.rect(t+n,e,n,a),s.fill(),s.fillStyle=l[3],s.beginPath(),s.rect(t+n,e+a,n,a),s.fill()}return[o,function(t,e,n){a=t,r=e,i=n,s=j(a,r,i,3),c()},c,function(t){o=t,n(0,o)}]}class Re extends t{constructor(t){super(),e(this,t,Se,Ne,n,{})}}function Ce(t){let e,n,a,o,h,u,f,g,b,y,w;return n=new Re({}),o=new kt({}),u=new Qt({}),g=new ie({}),y=new xe({}),{c(){e=s("main"),k(n.$$.fragment),a=m(),k(o.$$.fragment),h=m(),k(u.$$.fragment),f=m(),k(g.$$.fragment),b=m(),k(y.$$.fragment)},l(t){e=r(t,"MAIN",{});var s=i(e);I(n.$$.fragment,s),a=$(s),I(o.$$.fragment,s),h=$(s),I(u.$$.fragment,s),f=$(s),I(g.$$.fragment,s),b=$(s),I(y.$$.fragment,s),s.forEach(l)},m(t,s){c(t,e,s),x(n,e,null),v(e,a),x(o,e,null),v(e,h),x(u,e,null),v(e,f),x(g,e,null),v(e,b),x(y,e,null),w=!0},p:M,i(t){w||(d(n.$$.fragment,t),d(o.$$.fragment,t),d(u.$$.fragment,t),d(g.$$.fragment,t),d(y.$$.fragment,t),w=!0)},o(t){p(n.$$.fragment,t),p(o.$$.fragment,t),p(u.$$.fragment,t),p(g.$$.fragment,t),p(y.$$.fragment,t),w=!1},d(t){t&&l(e),P(n),P(o),P(u),P(g),P(y)}}}class qe extends t{constructor(t){super(),e(this,t,null,Ce,n,{})}}export{qe as default};

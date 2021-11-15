import{S as t,i as e,s as n,D as s,e as a,c as i,a as r,d as l,b as o,f as c,G as h,H as u,I as d,x as f,u as p,k as m,n as $,F as g,r as v,w as b,K as y,A as w,L as x,j as E,m as k,o as I,v as P,t as S,g as M,J as z,M as D,N as T,O as N,P as L,Q as V,R as q,T as B,h as R,U as A,V as C,W,X as _,Y as U,Z as j,_ as O,$ as F,a0 as H,a1 as G}from"../chunks/vendor-285195c6.js";import{b as J}from"../chunks/paths-45dac81d.js";import{g as Y,p as K,r as Q,s as X,a as Z}from"../chunks/palettes-f4ba7ad8.js";const tt=t=>({}),et=t=>({}),nt=t=>({}),st=t=>({}),at=t=>({}),it=t=>({});function rt(t){let e,n;const m=t[6].control,$=s(m,t,t[5],et),g=$||function(t){let e;return{c(){e=a("div"),this.h()},l(t){e=i(t,"DIV",{class:!0}),r(e).forEach(l),this.h()},h(){o(e,"class","row")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}();return{c(){e=a("div"),g&&g.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);g&&g.l(n),n.forEach(l),this.h()},h(){o(e,"class","control")},m(t,s){c(t,e,s),g&&g.m(e,null),n=!0},p(t,e){$&&$.p&&(!n||32&e)&&h($,m,t,t[5],n?d(m,t[5],e,tt):u(t[5]),et)},i(t){n||(f(g,t),n=!0)},o(t){p(g,t),n=!1},d(t){t&&l(e),g&&g.d(t)}}}function lt(t){let e,n,y,w,x,E,k,I,P,S,M,z,D;const T=t[6].title,N=s(T,t,t[5],it),L=t[6].about,V=s(L,t,t[5],st);let q=t[3].control&&rt(t);return{c(){e=a("section"),n=a("div"),y=a("div"),w=a("div"),x=a("div"),E=a("h2"),N&&N.c(),k=m(),V&&V.c(),I=m(),q&&q.c(),P=m(),S=a("div"),M=a("canvas"),this.h()},l(t){e=i(t,"SECTION",{id:!0});var s=r(e);n=i(s,"DIV",{class:!0,style:!0});var a=r(n);y=i(a,"DIV",{class:!0});var o=r(y);w=i(o,"DIV",{class:!0});var c=r(w);x=i(c,"DIV",{class:!0});var h=r(x);E=i(h,"H2",{class:!0});var u=r(E);N&&N.l(u),u.forEach(l),k=$(h),V&&V.l(h),h.forEach(l),I=$(c),q&&q.l(c),c.forEach(l),o.forEach(l),P=$(a),S=i(a,"DIV",{class:!0});var d=r(S);M=i(d,"CANVAS",{class:!0}),r(M).forEach(l),d.forEach(l),a.forEach(l),s.forEach(l),this.h()},h(){o(E,"class","svelte-jw2bxf"),o(x,"class","about"),o(w,"class","info svelte-jw2bxf"),o(y,"class","info-container svelte-jw2bxf"),o(M,"class","svelte-jw2bxf"),o(S,"class","canvas svelte-jw2bxf"),o(n,"class","container svelte-jw2bxf"),o(n,"style",z=`--backgroundColor: ${t[1].background}; --textColor: ${t[1].text}`),o(e,"id",t[0])},m(s,a){c(s,e,a),g(e,n),g(n,y),g(y,w),g(w,x),g(x,E),N&&N.m(E,null),g(x,k),V&&V.m(x,null),g(w,I),q&&q.m(w,null),g(n,P),g(n,S),g(S,M),t[7](M),D=!0},p(t,[s]){N&&N.p&&(!D||32&s)&&h(N,T,t,t[5],D?d(T,t[5],s,at):u(t[5]),it),V&&V.p&&(!D||32&s)&&h(V,L,t,t[5],D?d(L,t[5],s,nt):u(t[5]),st),t[3].control?q?(q.p(t,s),8&s&&f(q,1)):(q=rt(t),q.c(),f(q,1),q.m(w,null)):q&&(v(),p(q,1,1,(()=>{q=null})),b()),(!D||2&s&&z!==(z=`--backgroundColor: ${t[1].background}; --textColor: ${t[1].text}`))&&o(n,"style",z),(!D||1&s)&&o(e,"id",t[0])},i(t){D||(f(N,t),f(V,t),f(q),D=!0)},o(t){p(N,t),p(V,t),p(q),D=!1},d(n){n&&l(e),N&&N.d(n),V&&V.d(n),q&&q.d(),t[7](null)}}}function ot(t,e,n){let{$$slots:s={},$$scope:a}=e;const i=y(s);let r,{id:l}=e,{init:o}=e,{style:c={background:"#000404",text:"#ffffff"}}=e;return w((()=>{let[t,e]=window.innerWidth>576?[600,600]:[500,500];o(r,t,e)})),t.$$set=t=>{"id"in t&&n(0,l=t.id),"init"in t&&n(4,o=t.init),"style"in t&&n(1,c=t.style),"$$scope"in t&&n(5,a=t.$$scope)},[l,c,r,i,o,a,s,function(t){x[t?"unshift":"push"]((()=>{r=t,n(2,r)}))}]}class ct extends t{constructor(t){super(),e(this,t,ot,lt,n,{id:0,init:4,style:1})}}let ht,ut,dt,ft,pt,mt,$t,gt;class vt{constructor(t,e,n=[dt/2,ft/2],s=3*Math.PI/2){this.radius=t,this.center=n,this.theta=e,this.phase=s}point(t,e){let n=this.radius;void 0!==e&&(n+=e);let s=this.phase+t*this.theta;return[this.center[0]+n*Math.cos(s),this.center[1]+n*Math.sin(s)]}drawIndicator(){ut.beginPath(),yt(this.point(0,15),this.point(0,60)),yt(this.point(1,15),this.point(1,60)),ut.stroke()}}function bt(t){ut.clearRect(0,0,dt,ft);let e=new vt(.45*ft,2*Math.PI/t);ut.lineWidth=1,ut.strokeStyle="#0f0a36";for(let n=0;n<t-1;n++)for(let s=t-1;s>n;s--)yt(e.point(n),e.point(s))}function yt(t,e){ut.beginPath();let[n,s]=t;ut.moveTo(n,s),[n,s]=e,ut.lineTo(n,s),ut.stroke()}function wt(t,e,n){ht=t,dt=e,ft=n,ut=Y(ht,dt,ft,4);bt(10)}function xt(t){let e;return{c(){e=S(">")},l(t){e=M(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Et(t){let e,n;return{c(){e=a("a"),n=S("Number Circle"),this.h()},l(t){e=i(t,"A",{href:!0,class:!0});var s=r(e);n=M(s,"Number Circle"),s.forEach(l),this.h()},h(){o(e,"href",J+"/number-circle"),o(e,"class","link")},m(t,s){c(t,e,s),g(e,n)},p:z,d(t){t&&l(e)}}}function kt(t){let e,n,s,h;return{c(){e=a("p"),n=S("Get evenly spaced points on a circle. Draw lines between them all. "),s=a("a"),h=S("See more..."),this.h()},l(t){e=i(t,"P",{});var a=r(e);n=M(a,"Get evenly spaced points on a circle. Draw lines between them all. "),s=i(a,"A",{href:!0,class:!0});var o=r(s);h=M(o,"See more..."),o.forEach(l),a.forEach(l),this.h()},h(){o(s,"href",J+"/number-circle"),o(s,"class","link")},m(t,a){c(t,e,a),g(e,n),g(e,s),g(s,h)},p:z,d(t){t&&l(e)}}}function It(t){let e,n,s,h,u,d,f,p,v,b;return{c(){e=a("div"),n=a("label"),s=S("Points:"),h=m(),u=a("div"),d=a("input"),f=m(),p=a("input"),this.h()},l(t){e=i(t,"DIV",{class:!0});var a=r(e);n=i(a,"LABEL",{for:!0});var o=r(n);s=M(o,"Points:"),o.forEach(l),h=$(a),u=i(a,"DIV",{class:!0});var c=r(u);d=i(c,"INPUT",{id:!0,type:!0,min:!0,max:!0,style:!0}),f=$(c),p=i(c,"INPUT",{type:!0,min:!0,max:!0,step:!0}),c.forEach(l),a.forEach(l),this.h()},h(){o(n,"for","number-circle-points"),o(d,"id","number-circle-points"),o(d,"type","number"),o(d,"min","2"),o(d,"max","24"),D(d,"width","6em"),o(p,"type","range"),o(p,"min","2"),o(p,"max","24"),o(p,"step","1"),o(u,"class","control-group"),o(e,"class","control-item")},m(a,i){c(a,e,i),g(e,n),g(n,s),g(e,h),g(e,u),g(u,d),T(d,t[0]),g(u,f),g(u,p),T(p,t[0]),v||(b=[N(d,"input",t[1]),N(d,"input",(function(){L(bt(t[0]))&&bt(t[0]).apply(this,arguments)})),N(p,"change",t[2]),N(p,"input",t[2]),N(p,"input",(function(){L(bt(t[0]))&&bt(t[0]).apply(this,arguments)}))],v=!0)},p(e,n){t=e,1&n&&V(d.value)!==t[0]&&T(d,t[0]),1&n&&T(p,t[0])},d(t){t&&l(e),v=!1,q(b)}}}function Pt(t){let e,n;return e=new ct({props:{id:"number-circle",init:wt,style:{background:"#fffdf2",text:"#000000"},$$slots:{control:[It],about:[kt],title:[Et],default:[xt]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},p(t,[n]){const s={};9&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function St(t,e,n){let s=10;return[s,function(){s=V(this.value),n(0,s)},function(){s=V(this.value),n(0,s)}]}class Mt extends t{constructor(t){super(),e(this,t,St,Pt,n,{})}}function zt(t,e){this.x=void 0===t?0:t,this.y=void 0===e?0:e}zt.prototype={set:function(t,e){this.x=t||0,this.y=e||0},clone:function(){return new zt(this.x,this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},add:function(t){return new zt(this.x+t.x,this.y+t.y)},subtract:function(t){return new zt(this.x-t.x,this.y-t.y)},multiply:function(t){return new zt(this.x*t,this.y*t)},divide:function(t){return new zt(this.x/t,this.y/t)},dot:function(t){return this.x*t.x+this.y+t.y},magnitude:function(){return Math.sqrt(this.magnitudeSqr())},magnitudeSqr:function(){return this.x*this.x+this.y*this.y},distance:function(t){return Math.sqrt(this.distanceSqr(t))},distanceSqr:function(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n},chebyshev:function(t){return Math.max(Math.abs(this.x-t.x),Math.abs(this.y-t.y))},normalize:function(){let t=this.magnitude(),e=this.clone();return Math.abs(t)<1e-9?(e.x=0,e.y=0):(e.x/=t,e.y/=t),e},angle:function(){return Math.atan2(this.y,this.x)},rotate:function(t){let e=Math.cos(t),n=Math.sin(t),s=new zt;return s.x=this.x*e-this.y*n,s.y=this.x*n+this.y*e,s},toPrecision:function(t){let e=this.clone();return e.x=e.x.toFixed(t),e.y=e.y.toFixed(t),e},toString:function(){let t=this.toPrecision(1);return"["+t.x+"; "+t.y+"]"}},zt.fromArray=function(t){return new zt(t[0],t[1])},zt.zero=function(){return new zt(0,0)},zt.lerp=function(t,e,n){n=Math.min(n,1);let s=e.subtract(t);return this.add(s.scale(n))};let Dt=Q;let Tt,Nt=new Lt(zt.zero(),1e6,null);function Lt(t,e,n,s){this.pos=t,this.size=e,this.parent=n,this.children=[],this.color=s}function Vt(t,e,n){let s=e.size-zt.zero().chebyshev(t);for(let a=0;a<e.children.length;a++){let i=e.children[a],r=i.distance(t);if(i.isDistanceEnclosed(r))return Vt(t.subtract(i.pos),i,n.add(i.pos));s=Math.min(r-i.size,s)}return{offsetPoint:t,parent:e,potentialSize:s}}function qt(t,e,n){t.push(e);let s=t.length-1;for(;s>0&&n(e,t[s-1])>0;)t[s]=t[s-1],s--;t[s]=e}function Bt(t){mt.strokeStyle=t.color,mt.beginPath();let e=t.pos.subtract(new zt(t.size,t.size));mt.rect(e.x,e.y,2*t.size,2*t.size),mt.stroke()}function Rt(t){mt.fillStyle=t.color,mt.beginPath();let e=t.pos.subtract(new zt(t.size,t.size));mt.rect(e.x,e.y,2*t.size,2*t.size),mt.fill()}function At(t,e){return Math.floor(Math.random()*(e-t)+t)}function Ct(t,e,n){pt=t,$t=e,gt=n,mt=Y(pt,$t,gt),$t/=2,gt/=2,mt.translate($t,gt);let{padding:s,threshold:a,borderWidth:i}=_t.medium;Wt(s,a,i)}function Wt(t,e,n,s,a=!1,i=!0){mt.fillStyle="#0D1821",mt.rect(-$t,-gt,2*$t,2*gt),mt.fill(),(i||void 0===Tt)&&(Tt=new Lt(zt.zero(),$t-n,Nt,K(Dt)),function(t,e,n){let s=0;for(;s<25e3;){let a=100;for(;--a>0;){let a=new zt(At(-t.size,t.size),At(-t.size,t.size)),{offsetPoint:i,parent:r,potentialSize:l}=Vt(a,t,t.pos),o=l-e;if(o>n){let t=new Lt(i,o,r,K(Dt));t.globalPos=a,qt(r.children,t,((t,e)=>t.size-e.size)),s++;break}}if(a<=0)break}}(Tt,t,e)),function(t,e,n=!1){let s=Bt;"Fill"==t&&(s=Rt),mt.lineWidth=e;let a=function(t){n&&0!=t.children.length||s(t),t.children.length>0&&(mt.save(),mt.translate(t.pos.x,t.pos.y),t.children.forEach(a),mt.restore())};return a}(s,n,a)(Tt)}Lt.prototype.distance=function(t){return this.pos.chebyshev(t)},Lt.prototype.isDistanceEnclosed=function(t){return t<=this.size};let _t={verySmall:{name:"Very Small",padding:1,threshold:1,borderWidth:.75},small:{name:"Small",padding:2,threshold:1,borderWidth:1},medium:{name:"Medium",padding:4,threshold:2,borderWidth:2},large:{name:"Large",padding:9,threshold:6,borderWidth:5},"spaced-out":{name:"Spaced out",padding:16,threshold:-4,borderWidth:1.5}};function Ut(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function jt(t){let e,n,s,h,u,d,f,p,v,b,y,w=(null!=t[4]?t[4][t[11]]:t[9])+"";return{c(){e=a("div"),n=a("input"),u=m(),d=a("label"),f=S(w),v=m(),this.h()},l(t){e=i(t,"DIV",{class:!0});var s=r(e);n=i(s,"INPUT",{type:!0,name:!0,id:!0,class:!0}),u=$(s),d=i(s,"LABEL",{for:!0,class:!0});var a=r(d);f=M(a,w),a.forEach(l),v=$(s),s.forEach(l),this.h()},h(){o(n,"type","radio"),o(n,"name",t[1]),o(n,"id",s=`${t[1]}-${t[9]}`),n.__value=h=t[9],n.value=n.__value,n.disabled=t[2],o(n,"class","svelte-165y4b6"),t[8][0].push(n),o(d,"for",p=`${t[1]}-${t[9]}`),o(d,"class","svelte-165y4b6"),B(d,"active",t[0]==t[9]),o(e,"class","radio svelte-165y4b6")},m(s,a){c(s,e,a),g(e,n),n.checked=n.__value===t[0],g(e,u),g(e,d),g(d,f),g(e,v),b||(y=[N(n,"change",t[7]),N(n,"input",t[5]),N(n,"change",t[6])],b=!0)},p(t,e){2&e&&o(n,"name",t[1]),10&e&&s!==(s=`${t[1]}-${t[9]}`)&&o(n,"id",s),8&e&&h!==(h=t[9])&&(n.__value=h,n.value=n.__value),4&e&&(n.disabled=t[2]),1&e&&(n.checked=n.__value===t[0]),24&e&&w!==(w=(null!=t[4]?t[4][t[11]]:t[9])+"")&&R(f,w),10&e&&p!==(p=`${t[1]}-${t[9]}`)&&o(d,"for",p),9&e&&B(d,"active",t[0]==t[9])},d(s){s&&l(e),t[8][0].splice(t[8][0].indexOf(n),1),b=!1,q(y)}}}function Ot(t){let e,n=t[3],s=[];for(let a=0;a<n.length;a+=1)s[a]=jt(Ut(t,n,a));return{c(){e=a("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(l),this.h()},h(){o(e,"class","radioGroup svelte-165y4b6")},m(t,n){c(t,e,n);for(let a=0;a<s.length;a+=1)s[a].m(e,null)},p(t,[a]){if(31&a){let i;for(n=t[3],i=0;i<n.length;i+=1){const r=Ut(t,n,i);s[i]?s[i].p(r,a):(s[i]=jt(r),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},i:z,o:z,d(t){t&&l(e),A(s,t)}}}let Ft=0;function Ht(t,e,n){let{value:s}=e,{name:a="radio"+Ft++}=e,{disabled:i=!1}=e,{values:r}=e,{labels:l}=e;return t.$$set=t=>{"value"in t&&n(0,s=t.value),"name"in t&&n(1,a=t.name),"disabled"in t&&n(2,i=t.disabled),"values"in t&&n(3,r=t.values),"labels"in t&&n(4,l=t.labels)},[s,a,i,r,l,function(e){C.call(this,t,e)},function(e){C.call(this,t,e)},function(){s=this.__value,n(0,s)},[[]]]}class Gt extends t{constructor(t){super(),e(this,t,Ht,Ot,n,{value:0,name:1,disabled:2,values:3,labels:4})}}function Jt(t){let e,n,v,b,y,w,x,E,k,I,P,S,M;const z=t[2].default,D=s(z,t,t[1],null);return{c(){e=a("button"),n=a("span"),v=m(),b=a("span"),y=m(),w=a("span"),x=m(),E=a("span"),D&&D.c(),k=m(),I=a("span"),this.h()},l(t){e=i(t,"BUTTON",{class:!0});var s=r(e);n=i(s,"SPAN",{class:!0,"aria-hidden":!0}),r(n).forEach(l),v=$(s),b=i(s,"SPAN",{class:!0,"aria-hidden":!0}),r(b).forEach(l),y=$(s),w=i(s,"SPAN",{class:!0,"aria-hidden":!0}),r(w).forEach(l),x=$(s),E=i(s,"SPAN",{class:!0});var a=r(E);D&&D.l(a),k=$(a),I=i(a,"SPAN",{class:!0,"aria-hidden":!0}),r(I).forEach(l),a.forEach(l),s.forEach(l),this.h()},h(){o(n,"class","shadow svelte-1wykwit"),o(n,"aria-hidden","true"),o(b,"class","edge svelte-1wykwit"),o(b,"aria-hidden","true"),o(w,"class","edge-shadow svelte-1wykwit"),o(w,"aria-hidden","true"),o(I,"class","disabled-overlay svelte-1wykwit"),o(I,"aria-hidden","true"),o(E,"class","face svelte-1wykwit"),e.disabled=t[0],o(e,"class","svelte-1wykwit")},m(s,a){c(s,e,a),g(e,n),g(e,v),g(e,b),g(e,y),g(e,w),g(e,x),g(e,E),D&&D.m(E,null),g(E,k),g(E,I),P=!0,S||(M=[N(e,"keydown",t[3]),N(e,"click",t[4])],S=!0)},p(t,[n]){D&&D.p&&(!P||2&n)&&h(D,z,t,t[1],P?d(z,t[1],n,null):u(t[1]),null),(!P||1&n)&&(e.disabled=t[0])},i(t){P||(f(D,t),P=!0)},o(t){p(D,t),P=!1},d(t){t&&l(e),D&&D.d(t),S=!1,q(M)}}}function Yt(t,e,n){let{$$slots:s={},$$scope:a}=e,{disabled:i=!1}=e;return t.$$set=t=>{"disabled"in t&&n(0,i=t.disabled),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,s,function(e){C.call(this,t,e)},function(e){C.call(this,t,e)}]}class Kt extends t{constructor(t){super(),e(this,t,Yt,Jt,n,{disabled:0})}}function Qt(t){let e,n,s,h,u,d,f;return{c(){e=a("div"),n=a("input"),s=m(),h=a("label"),u=S(t[2]),this.h()},l(a){e=i(a,"DIV",{class:!0});var o=r(e);n=i(o,"INPUT",{type:!0,id:!0,class:!0}),s=$(o),h=i(o,"LABEL",{for:!0,class:!0});var c=r(h);u=M(c,t[2]),c.forEach(l),o.forEach(l),this.h()},h(){o(n,"type","checkbox"),o(n,"id",t[3]),n.disabled=t[1],o(n,"class","svelte-1eiu0np"),o(h,"for",t[3]),o(h,"class","svelte-1eiu0np"),o(e,"class","svelte-1eiu0np"),B(e,"checked",t[0]),B(e,"disabled",t[1])},m(a,i){c(a,e,i),g(e,n),n.checked=t[0],g(e,s),g(e,h),g(h,u),d||(f=[N(n,"change",t[6]),N(n,"input",t[4]),N(n,"change",t[5])],d=!0)},p(t,[s]){8&s&&o(n,"id",t[3]),2&s&&(n.disabled=t[1]),1&s&&(n.checked=t[0]),4&s&&R(u,t[2]),8&s&&o(h,"for",t[3]),1&s&&B(e,"checked",t[0]),2&s&&B(e,"disabled",t[1])},i:z,o:z,d(t){t&&l(e),d=!1,q(f)}}}let Xt=0;function Zt(t,e,n){let{checked:s}=e,{disabled:a=!1}=e,{label:i=""}=e,{id:r="check"+Xt++}=e;return t.$$set=t=>{"checked"in t&&n(0,s=t.checked),"disabled"in t&&n(1,a=t.disabled),"label"in t&&n(2,i=t.label),"id"in t&&n(3,r=t.id)},[s,a,i,r,function(e){C.call(this,t,e)},function(e){C.call(this,t,e)},function(){s=this.checked,n(0,s)}]}class te extends t{constructor(t){super(),e(this,t,Zt,Qt,n,{checked:0,disabled:1,label:2,id:3})}}function ee(t){let e,n,s;return{c(){e=W("svg"),n=W("rect"),s=W("path"),this.h()},l(t){e=_(t,"svg",{xmlns:!0,"enable-background":!0,height:!0,viewBox:!0,width:!0,class:!0});var a=r(e);n=_(a,"rect",{fill:!0,height:!0,width:!0}),r(n).forEach(l),s=_(a,"path",{d:!0}),r(s).forEach(l),a.forEach(l),this.h()},h(){o(n,"fill","none"),o(n,"height","24"),o(n,"width","24"),o(s,"d","M15.08,9.59L12,12.67L8.92,9.59L7.5,11l4.5,4.5l4.5-4.5L15.08,9.59z M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"enable-background","new 0 0 24 24"),o(e,"height","24px"),o(e,"viewBox","0 0 24 24"),o(e,"width","24px"),o(e,"class","svelte-1coyq2z")},m(t,a){c(t,e,a),g(e,n),g(e,s)},d(t){t&&l(e)}}}function ne(t){let e,n,s;return{c(){e=W("svg"),n=W("path"),s=W("path"),this.h()},l(t){e=_(t,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,class:!0});var a=r(e);n=_(a,"path",{d:!0,fill:!0}),r(n).forEach(l),s=_(a,"path",{d:!0}),r(s).forEach(l),a.forEach(l),this.h()},h(){o(n,"d","M0 0h24v24H0V0z"),o(n,"fill","none"),o(s,"d","M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"height","24px"),o(e,"viewBox","0 0 24 24"),o(e,"width","24px"),o(e,"class","svelte-1coyq2z")},m(t,a){c(t,e,a),g(e,n),g(e,s)},d(t){t&&l(e)}}}function se(t){let e,n,s;function h(t,e){return t[0]?ne:ee}let u=h(t),d=u(t);return{c(){e=a("button"),d.c(),this.h()},l(t){e=i(t,"BUTTON",{"aria-label":!0,title:!0,class:!0});var n=r(e);d.l(n),n.forEach(l),this.h()},h(){o(e,"aria-label",t[1]),o(e,"title",t[1]),o(e,"class","svelte-1coyq2z")},m(a,i){c(a,e,i),d.m(e,null),n||(s=[N(e,"click",t[2]),N(e,"click",t[3])],n=!0)},p(t,[n]){u!==(u=h(t))&&(d.d(1),d=u(t),d&&(d.c(),d.m(e,null))),2&n&&o(e,"aria-label",t[1]),2&n&&o(e,"title",t[1])},i:z,o:z,d(t){t&&l(e),d.d(),n=!1,q(s)}}}function ae(t,e,n){let s,{expanded:a=!0}=e;return t.$$set=t=>{"expanded"in t&&n(0,a=t.expanded)},t.$$.update=()=>{1&t.$$.dirty&&n(1,s=a?"Collapse":"Expand")},[a,s,function(){n(0,a=!a)},function(e){C.call(this,t,e)}]}class ie extends t{constructor(t){super(),e(this,t,ae,se,n,{expanded:0})}}function re(t){let e;return{c(){e=S(">")},l(t){e=M(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function le(t){let e;return{c(){e=S("Square Bloom")},l(t){e=M(t,"Square Bloom")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function oe(t){let e,n,s,o,h;return{c(){e=a("p"),n=S("Its rule is simple: pick a random spot and draw the largest square possible that doesn't touch any existing square."),s=m(),o=a("p"),h=S("Try tweaking the parameters. While proper inputs lets the canvas draw following the rule, negative values are fun too!")},l(t){e=i(t,"P",{});var a=r(e);n=M(a,"Its rule is simple: pick a random spot and draw the largest square possible that doesn't touch any existing square."),a.forEach(l),s=$(t),o=i(t,"P",{});var c=r(o);h=M(c,"Try tweaking the parameters. While proper inputs lets the canvas draw following the rule, negative values are fun too!"),c.forEach(l)},m(t,a){c(t,e,a),g(e,n),c(t,s,a),c(t,o,a),g(o,h)},d(t){t&&l(e),t&&l(s),t&&l(o)}}}function ce(t){let e,n,s,h,u,d,f,p,v,b,y,w,x,E,k,I;return{c(){e=a("div"),n=a("div"),s=a("label"),h=S("Space between squares:"),u=m(),d=a("input"),f=m(),p=a("div"),v=a("label"),b=S("Minimum square size:"),y=m(),w=a("input"),this.h()},l(t){e=i(t,"DIV",{});var a=r(e);n=i(a,"DIV",{class:!0});var o=r(n);s=i(o,"LABEL",{for:!0});var c=r(s);h=M(c,"Space between squares:"),c.forEach(l),u=$(o),d=i(o,"INPUT",{type:!0,id:!0,step:!0}),o.forEach(l),f=$(a),p=i(a,"DIV",{class:!0});var m=r(p);v=i(m,"LABEL",{for:!0});var g=r(v);b=M(g,"Minimum square size:"),g.forEach(l),y=$(m),w=i(m,"INPUT",{type:!0,id:!0,step:!0}),m.forEach(l),a.forEach(l),this.h()},h(){o(s,"for","square-bloom-padding"),o(d,"type","number"),o(d,"id","square-bloom-padding"),o(d,"step","1"),o(n,"class","control-item"),o(v,"for","square-bloom-threshold"),o(w,"type","number"),o(w,"id","square-bloom-threshold"),o(w,"step","1"),o(p,"class","control-item")},m(a,i){c(a,e,i),g(e,n),g(n,s),g(s,h),g(n,u),g(n,d),T(d,t[3]),g(e,f),g(e,p),g(p,v),g(v,b),g(p,y),g(p,w),T(w,t[4]),E=!0,k||(I=[N(d,"input",t[13]),N(w,"input",t[14])],k=!0)},p(e,n){t=e,8&n&&V(d.value)!==t[3]&&T(d,t[3]),16&n&&V(w.value)!==t[4]&&T(w,t[4])},i(t){E||(j((()=>{x||(x=O(e,G,{duration:400,easing:H},!0)),x.run(1)})),E=!0)},o(t){x||(x=O(e,G,{duration:400,easing:H},!1)),x.run(0),E=!1},d(t){t&&l(e),t&&x&&x.end(),k=!1,q(I)}}}function he(t){let e,n,s,h,u,d,f,p,v,b;return{c(){e=a("div"),n=a("label"),s=S("Border width:"),h=m(),u=a("input"),this.h()},l(t){e=i(t,"DIV",{class:!0,style:!0});var a=r(e);n=i(a,"LABEL",{for:!0});var o=r(n);s=M(o,"Border width:"),o.forEach(l),h=$(a),u=i(a,"INPUT",{type:!0,id:!0,min:!0,step:!0}),a.forEach(l),this.h()},h(){o(n,"for","square-bloom-border-width"),o(u,"type","number"),o(u,"id","square-bloom-border-width"),o(u,"min","1"),o(u,"step","1"),u.disabled=d="Border"!=t[0],o(e,"class","control-item"),D(e,"margin-top","0.2em")},m(a,i){c(a,e,i),g(e,n),g(n,s),g(e,h),g(e,u),T(u,t[5]),p=!0,v||(b=N(u,"input",t[16]),v=!0)},p(e,n){t=e,(!p||1&n&&d!==(d="Border"!=t[0]))&&(u.disabled=d),32&n&&V(u.value)!==t[5]&&T(u,t[5])},i(t){p||(j((()=>{f||(f=O(e,G,{duration:400,easing:H},!0)),f.run(1)})),p=!0)},o(t){f||(f=O(e,G,{duration:400,easing:H},!1)),f.run(0),p=!1},d(t){t&&l(e),t&&f&&f.end(),v=!1,b()}}}function ue(t){let e;return{c(){e=S("Redraw")},l(t){e=M(t,"Redraw")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function de(t){let e,n,s,h,u,d,y,w,S,M,z,D,T,N,L,V,q,B,R;function A(e){t[12](e)}n=new Gt({props:{values:t[7],labels:t[8],value:t[7][1]}}),n.$on("change",t[11]);let C={};void 0!==t[2]&&(C.expanded=t[2]),h=new ie({props:C}),x.push((()=>U(h,"expanded",A)));let W=t[2]&&ce(t);function _(e){t[15](e)}let j={values:t[6],name:"drawStyle"};void 0!==t[0]&&(j.value=t[0]),S=new Gt({props:j}),x.push((()=>U(S,"value",_))),S.$on("change",t[10]);let O=t[2]&&"Border"==t[0]&&he(t);function H(e){t[17](e)}let G={label:"Show inner squares only"};return void 0!==t[1]&&(G.checked=t[1]),N=new te({props:G}),x.push((()=>U(N,"checked",H))),N.$on("change",t[10]),B=new Kt({props:{$$slots:{default:[ue]},$$scope:{ctx:t}}}),B.$on("click",t[9]),{c(){e=a("div"),E(n.$$.fragment),s=m(),E(h.$$.fragment),d=m(),W&&W.c(),y=m(),w=a("div"),E(S.$$.fragment),z=m(),O&&O.c(),D=m(),T=a("div"),E(N.$$.fragment),V=m(),q=a("div"),E(B.$$.fragment),this.h()},l(t){e=i(t,"DIV",{class:!0});var a=r(e);k(n.$$.fragment,a),s=$(a),k(h.$$.fragment,a),a.forEach(l),d=$(t),W&&W.l(t),y=$(t),w=i(t,"DIV",{class:!0});var o=r(w);k(S.$$.fragment,o),o.forEach(l),z=$(t),O&&O.l(t),D=$(t),T=i(t,"DIV",{class:!0});var c=r(T);k(N.$$.fragment,c),c.forEach(l),V=$(t),q=i(t,"DIV",{class:!0});var u=r(q);k(B.$$.fragment,u),u.forEach(l),this.h()},h(){o(e,"class","control-group"),o(w,"class","control-item"),o(T,"class","control-group control-item"),o(q,"class","control-item")},m(t,a){c(t,e,a),I(n,e,null),g(e,s),I(h,e,null),c(t,d,a),W&&W.m(t,a),c(t,y,a),c(t,w,a),I(S,w,null),c(t,z,a),O&&O.m(t,a),c(t,D,a),c(t,T,a),I(N,T,null),c(t,V,a),c(t,q,a),I(B,q,null),R=!0},p(t,e){const n={};!u&&4&e&&(u=!0,n.expanded=t[2],F((()=>u=!1))),h.$set(n),t[2]?W?(W.p(t,e),4&e&&f(W,1)):(W=ce(t),W.c(),f(W,1),W.m(y.parentNode,y)):W&&(v(),p(W,1,1,(()=>{W=null})),b());const s={};!M&&1&e&&(M=!0,s.value=t[0],F((()=>M=!1))),S.$set(s),t[2]&&"Border"==t[0]?O?(O.p(t,e),5&e&&f(O,1)):(O=he(t),O.c(),f(O,1),O.m(D.parentNode,D)):O&&(v(),p(O,1,1,(()=>{O=null})),b());const a={};!L&&2&e&&(L=!0,a.checked=t[1],F((()=>L=!1))),N.$set(a);const i={};262144&e&&(i.$$scope={dirty:e,ctx:t}),B.$set(i)},i(t){R||(f(n.$$.fragment,t),f(h.$$.fragment,t),f(W),f(S.$$.fragment,t),f(O),f(N.$$.fragment,t),f(B.$$.fragment,t),R=!0)},o(t){p(n.$$.fragment,t),p(h.$$.fragment,t),p(W),p(S.$$.fragment,t),p(O),p(N.$$.fragment,t),p(B.$$.fragment,t),R=!1},d(t){t&&l(e),P(n),P(h),t&&l(d),W&&W.d(t),t&&l(y),t&&l(w),P(S),t&&l(z),O&&O.d(t),t&&l(D),t&&l(T),P(N),t&&l(V),t&&l(q),P(B)}}}function fe(t){let e,n;return e=new ct({props:{id:"square-bloom",init:Ct,style:{background:"#0D1821",text:"#ffffff"},$$slots:{control:[de],about:[oe],title:[le],default:[re]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},p(t,[n]){const s={};262207&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function pe(t,e,n){let s=["Fill","Border"],a=s[Math.floor(Math.random()*s.length)],i=!1,r=!1,l=Object.keys(_t),o=l.map((t=>_t[t].name)),{padding:c,threshold:h,borderWidth:u}=_t.medium;function d(){Wt(c,h,u,a,i,!0)}return w(d),[a,i,r,c,h,u,s,l,o,d,function(){Wt(c,h,u,a,i,!1)},function(t){n(3,({padding:c,threshold:h,borderWidth:u}=_t[t.target.value]),c,n(4,h),n(5,u)),d()},function(t){r=t,n(2,r)},function(){c=V(this.value),n(3,c)},function(){h=V(this.value),n(4,h)},function(t){a=t,n(0,a)},function(){u=V(this.value),n(5,u)},function(t){i=t,n(1,i)}]}class me extends t{constructor(t){super(),e(this,t,pe,fe,n,{})}}let $e,ge,ve,be;function ye(t,e,n){$e=t,ve=e,be=n,ge=Y($e,ve,be),we()}function we(){ge.clearRect(0,0,ve,be),function(t,e){ge.lineCap="square",ge.lineWidth=e,ge.strokeStyle="#847ad8",ge.beginPath();for(let n=0;n<ve;n+=t)for(let e=0;e<be;e+=t)xe(n,e,t,t);ge.stroke()}(25,5)}function xe(t,e,n,s){var a;((a=.5)>1||a<=0?0:Math.random()>=a)?(ge.moveTo(t,e),ge.lineTo(t+n,e+s)):(ge.moveTo(t+n,e),ge.lineTo(t,e+s))}function Ee(t){let e;return{c(){e=S(">")},l(t){e=M(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function ke(t){let e;return{c(){e=S("10 PRINT")},l(t){e=M(t,"10 PRINT")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Ie(t){let e,n,s,h,u;return{c(){e=a("p"),n=S("10 PRINT is a program written in the early 80s to run on a Commodore 64 system that generates a maze with a surprisingly simple condition. It prints either a \\ or a / with a 50% probability."),s=m(),h=a("p"),u=S("10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10"),this.h()},l(t){e=i(t,"P",{});var a=r(e);n=M(a,"10 PRINT is a program written in the early 80s to run on a Commodore 64 system that generates a maze with a surprisingly simple condition. It prints either a \\ or a / with a 50% probability."),a.forEach(l),s=$(t),h=i(t,"P",{class:!0});var o=r(h);u=M(o,"10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10"),o.forEach(l),this.h()},h(){o(h,"class","code svelte-v31k2v")},m(t,a){c(t,e,a),g(e,n),c(t,s,a),c(t,h,a),g(h,u)},d(t){t&&l(e),t&&l(s),t&&l(h)}}}function Pe(t){let e;return{c(){e=S("Redraw")},l(t){e=M(t,"Redraw")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Se(t){let e,n,s;return n=new Kt({props:{$$slots:{default:[Pe]},$$scope:{ctx:t}}}),n.$on("click",we),{c(){e=a("div"),E(n.$$.fragment),this.h()},l(t){e=i(t,"DIV",{class:!0});var s=r(e);k(n.$$.fragment,s),s.forEach(l),this.h()},h(){o(e,"class","control-item")},m(t,a){c(t,e,a),I(n,e,null),s=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(f(n.$$.fragment,t),s=!0)},o(t){p(n.$$.fragment,t),s=!1},d(t){t&&l(e),P(n)}}}function Me(t){let e,n;return e=new ct({props:{id:"10-print",init:ye,style:{background:"#453ba4",text:"#ffffff"},$$slots:{control:[Se],about:[Ie],title:[ke],default:[Ee]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}class ze extends t{constructor(t){super(),e(this,t,null,Me,n,{})}}let De,Te,Ne,Le,Ve;function qe(t,e,n){De=t,Ne=e,Le=n,Te=Y(De,Ne,Le),Ve=0,Be(.667,3)}function Be(t,e,n){Te.clearRect(0,0,Ne,Le),Te.lineWidth=7;let s=.45*Le,a=e+1;!function(t,e,n,s,a,i){let r=t+n+s*Math.cos(Ve),l=e+s*Math.sin(Ve);for(let o=0;o<2*i*Math.PI+.01;o+=.005){let i=t+n*Math.cos(o)+s*Math.cos(o*a+Ve),c=e+n*Math.sin(o)+s*Math.sin(o*a+Ve);Re(r,l,i,c,"hsl("+Math.floor(360*(o-Ve)/(2*Math.PI))+", 100%, 50%)"),r=i,l=c}}(Ne/2,Le/2,s*t,s*(1-t),1/a,a),n&&(Ve+=.01)}function Re(t,e,n,s,a){Te.beginPath(),Te.moveTo(t,e),Te.lineTo(n,s),Te.strokeStyle=a,Te.stroke()}function Ae(t){let e;return{c(){e=S(">")},l(t){e=M(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Ce(t){let e;return{c(){e=S("Spiro")},l(t){e=M(t,"Spiro")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function We(t){let e,n,s,o,h;return{c(){e=a("p"),n=S("Tracing the path of a circle rolling around the perimeter of another circle gives a simple spirograph."),s=m(),o=a("p"),h=S("Loopiness controls the relative sizes of the inner and outer circles, and Loops controls how many times the outer circle rolls around the inner one.")},l(t){e=i(t,"P",{});var a=r(e);n=M(a,"Tracing the path of a circle rolling around the perimeter of another circle gives a simple spirograph."),a.forEach(l),s=$(t),o=i(t,"P",{});var c=r(o);h=M(c,"Loopiness controls the relative sizes of the inner and outer circles, and Loops controls how many times the outer circle rolls around the inner one."),c.forEach(l)},m(t,a){c(t,e,a),g(e,n),c(t,s,a),c(t,o,a),g(o,h)},d(t){t&&l(e),t&&l(s),t&&l(o)}}}function _e(t){let e,n,s,h,u,d,v,b,y,w,z,L,B,R,A,C,W,_,j,O,H,G,J,Y;function K(e){t[8](e)}let Q={label:"Spin"};return void 0!==t[2]&&(Q.checked=t[2]),O=new te({props:Q}),x.push((()=>U(O,"checked",K))),{c(){e=a("div"),n=a("label"),s=S("Loopiness:"),h=m(),u=a("div"),d=a("input"),v=m(),b=a("input"),y=m(),w=a("div"),z=a("label"),L=S("Loops:"),B=m(),R=a("div"),A=a("input"),C=m(),W=a("input"),_=m(),j=a("div"),E(O.$$.fragment),this.h()},l(t){e=i(t,"DIV",{class:!0});var a=r(e);n=i(a,"LABEL",{for:!0});var o=r(n);s=M(o,"Loopiness:"),o.forEach(l),h=$(a),u=i(a,"DIV",{class:!0});var c=r(u);d=i(c,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,style:!0}),v=$(c),b=i(c,"INPUT",{type:!0,min:!0,max:!0,step:!0}),c.forEach(l),a.forEach(l),y=$(t),w=i(t,"DIV",{class:!0});var f=r(w);z=i(f,"LABEL",{for:!0});var p=r(z);L=M(p,"Loops:"),p.forEach(l),B=$(f),R=i(f,"DIV",{class:!0});var m=r(R);A=i(m,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,style:!0}),C=$(m),W=i(m,"INPUT",{type:!0,min:!0,max:!0,step:!0}),m.forEach(l),_=$(f),j=i(f,"DIV",{class:!0});var g=r(j);k(O.$$.fragment,g),g.forEach(l),f.forEach(l),this.h()},h(){o(n,"for","spiro-radius"),o(d,"id","spiro-radius"),o(d,"type","number"),o(d,"min","0"),o(d,"max","1"),o(d,"step","0.01"),D(d,"width","6em"),o(b,"type","range"),o(b,"min","0"),o(b,"max","1"),o(b,"step","0.01"),o(u,"class","control-group"),o(e,"class","control-item"),o(z,"for","spiro-loops"),o(A,"id","spiro-loops"),o(A,"type","number"),o(A,"min","0"),o(A,"max","9"),o(A,"step","1"),D(A,"width","6em"),o(W,"type","range"),o(W,"min","0"),o(W,"max","9"),o(W,"step","1"),o(R,"class","control-group"),o(j,"class","control-group control-item"),o(w,"class","control-item")},m(a,i){c(a,e,i),g(e,n),g(n,s),g(e,h),g(e,u),g(u,d),T(d,t[0]),g(u,v),g(u,b),T(b,t[0]),c(a,y,i),c(a,w,i),g(w,z),g(z,L),g(w,B),g(w,R),g(R,A),T(A,t[1]),g(R,C),g(R,W),T(W,t[1]),g(w,_),g(w,j),I(O,j,null),G=!0,J||(Y=[N(d,"input",t[4]),N(d,"input",t[3]),N(b,"change",t[5]),N(b,"input",t[5]),N(b,"input",t[3]),N(A,"input",t[6]),N(A,"input",t[3]),N(W,"change",t[7]),N(W,"input",t[7]),N(W,"input",t[3])],J=!0)},p(t,e){1&e&&V(d.value)!==t[0]&&T(d,t[0]),1&e&&T(b,t[0]),2&e&&V(A.value)!==t[1]&&T(A,t[1]),2&e&&T(W,t[1]);const n={};!H&&4&e&&(H=!0,n.checked=t[2],F((()=>H=!1))),O.$set(n)},i(t){G||(f(O.$$.fragment,t),G=!0)},o(t){p(O.$$.fragment,t),G=!1},d(t){t&&l(e),t&&l(y),t&&l(w),P(O),J=!1,q(Y)}}}function Ue(t){let e,n;return e=new ct({props:{id:"spiro",init:qe,style:{background:"#4C5454",text:"#ffffff"},$$slots:{control:[_e],about:[We],title:[Ce],default:[Ae]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},p(t,[n]){const s={};519&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function je(t,e,n){let s=.667,a=3,i=!0;return[s,a,i,function(){Be(s,a,i)},function(){s=V(this.value),n(0,s)},function(){s=V(this.value),n(0,s)},function(){a=V(this.value),n(1,a)},function(){a=V(this.value),n(1,a)},function(t){i=t,n(2,i)}]}class Oe extends t{constructor(t){super(),e(this,t,je,Ue,n,{})}}function Fe(t){let e;return{c(){e=S(">")},l(t){e=M(t,">")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function He(t){let e;return{c(){e=S("Half all the way down")},l(t){e=M(t,"Half all the way down")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Ge(t){let e,n,s,h,u,d,f;return{c(){e=a("p"),n=S("1/2 + 1/4 + 1/8 + 1/16 + ..."),s=m(),h=a("p"),u=S("Based on the album art for "),d=a("a"),f=S("Blue - Eiffel 65 (Flume Remix)"),this.h()},l(t){e=i(t,"P",{});var a=r(e);n=M(a,"1/2 + 1/4 + 1/8 + 1/16 + ..."),a.forEach(l),s=$(t),h=i(t,"P",{});var o=r(h);u=M(o,"Based on the album art for "),d=i(o,"A",{class:!0,href:!0});var c=r(d);f=M(c,"Blue - Eiffel 65 (Flume Remix)"),c.forEach(l),o.forEach(l),this.h()},h(){o(d,"class","link"),o(d,"href","https://www.youtube.com/watch?v=_JmTatkAMwY")},m(t,a){c(t,e,a),g(e,n),c(t,s,a),c(t,h,a),g(h,u),g(h,d),g(d,f)},d(t){t&&l(e),t&&l(s),t&&l(h)}}}function Je(t){let e;return{c(){e=S("Redraw")},l(t){e=M(t,"Redraw")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function Ye(t){let e,n,s,h,u,d,g;function v(e){t[3](e)}let b={label:"Draw circles"};return void 0!==t[0]&&(b.checked=t[0]),n=new te({props:b}),x.push((()=>U(n,"checked",v))),n.$on("change",t[2]),d=new Kt({props:{$$slots:{default:[Je]},$$scope:{ctx:t}}}),d.$on("click",t[2]),{c(){e=a("div"),E(n.$$.fragment),h=m(),u=a("div"),E(d.$$.fragment),this.h()},l(t){e=i(t,"DIV",{class:!0});var s=r(e);k(n.$$.fragment,s),s.forEach(l),h=$(t),u=i(t,"DIV",{class:!0});var a=r(u);k(d.$$.fragment,a),a.forEach(l),this.h()},h(){o(e,"class","control-group"),o(u,"class","control-item")},m(t,s){c(t,e,s),I(n,e,null),c(t,h,s),c(t,u,s),I(d,u,null),g=!0},p(t,e){const a={};!s&&1&e&&(s=!0,a.checked=t[0],F((()=>s=!1))),n.$set(a);const i={};2048&e&&(i.$$scope={dirty:e,ctx:t}),d.$set(i)},i(t){g||(f(n.$$.fragment,t),f(d.$$.fragment,t),g=!0)},o(t){p(n.$$.fragment,t),p(d.$$.fragment,t),g=!1},d(t){t&&l(e),P(n),t&&l(h),t&&l(u),P(d)}}}function Ke(t){let e,n;return e=new ct({props:{id:"half-all-the-way",init:t[1],style:{background:"#001427",text:"#ffffff"},$$slots:{control:[Ye],about:[Ge],title:[He],default:[Fe]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},p(t,[n]){const s={};2049&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Qe(t,e,n,s,a,i){t(e,n,s,a),Xe(t,e,n+a,s/2,a/2,i),Xe(t,e+s/2,n+a,s/2,a/2,i),Ze(t,e+s,n,s/2,a/2,i),Ze(t,e+s,n+a/2,s/2,a/2,i),i-- >0?Qe(t,e+s,n+a,s/2,a/2,i):(t(e+=s,n+=a,s/2,a/2),t(e,n+a/2,s/2,a/2),t(e+s/2,n,s/2,a/2),t(e+s/2,n+a/2,s/2,a/2))}function Xe(t,e,n,s,a,i){t(e,n,s,a),i-- >0?(Xe(t,e,n+a,s/2,a/2,i),Xe(t,e+s/2,n+a,s/2,a/2,i)):t(e,n+a,s,a)}function Ze(t,e,n,s,a,i){t(e,n,s,a),i-- >0?(Ze(t,e+s,n,s/2,a/2,i),Ze(t,e+s,n+a/2,s/2,a/2,i)):t(e+s,n,s,a)}function tn(t,e,n){let s,a,i,r,l,o=!0;function c(){let t;l=X(Z),a.clearRect(0,0,i,r),t=o?function(...t){h(...t),function(t,e,n,s){o&&(a.fillStyle=l[4],a.beginPath(),a.arc(t,e,n/20,0,2*Math.PI),a.fill())}(...t)}:h,Qe(t,0,0,i/2,r/2,7)}function h(t,e,n,s){n/=2,s/=2,a.fillStyle=l[0],a.beginPath(),a.rect(t,e,n,s),a.fill(),a.fillStyle=l[1],a.beginPath(),a.rect(t,e+s,n,s),a.fill(),a.fillStyle=l[2],a.beginPath(),a.rect(t+n,e,n,s),a.fill(),a.fillStyle=l[3],a.beginPath(),a.rect(t+n,e+s,n,s),a.fill()}return[o,function(t,e,n){s=t,i=e,r=n,a=Y(s,i,r,3),c()},c,function(t){o=t,n(0,o)}]}class en extends t{constructor(t){super(),e(this,t,tn,Ke,n,{})}}function nn(t){let e,n,s,o,h,u,d,v,b,y,w;return n=new en({}),o=new Mt({}),u=new me({}),v=new ze({}),y=new Oe({}),{c(){e=a("main"),E(n.$$.fragment),s=m(),E(o.$$.fragment),h=m(),E(u.$$.fragment),d=m(),E(v.$$.fragment),b=m(),E(y.$$.fragment)},l(t){e=i(t,"MAIN",{});var a=r(e);k(n.$$.fragment,a),s=$(a),k(o.$$.fragment,a),h=$(a),k(u.$$.fragment,a),d=$(a),k(v.$$.fragment,a),b=$(a),k(y.$$.fragment,a),a.forEach(l)},m(t,a){c(t,e,a),I(n,e,null),g(e,s),I(o,e,null),g(e,h),I(u,e,null),g(e,d),I(v,e,null),g(e,b),I(y,e,null),w=!0},p:z,i(t){w||(f(n.$$.fragment,t),f(o.$$.fragment,t),f(u.$$.fragment,t),f(v.$$.fragment,t),f(y.$$.fragment,t),w=!0)},o(t){p(n.$$.fragment,t),p(o.$$.fragment,t),p(u.$$.fragment,t),p(v.$$.fragment,t),p(y.$$.fragment,t),w=!1},d(t){t&&l(e),P(n),P(o),P(u),P(v),P(y)}}}class sn extends t{constructor(t){super(),e(this,t,null,nn,n,{})}}export{sn as default};

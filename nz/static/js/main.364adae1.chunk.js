(this.webpackJsonpchristmas=this.webpackJsonpchristmas||[]).push([[0],{15:function(t,e,c){"use strict";c.r(e);var s=c(2),a=c.n(s),l=c(7),n=c.n(l),i=c(1),r=c(4),x=c(3),o=c.n(x),j=c(5);function m(t){return decodeURI((RegExp(t+"=(.+?)(&|$)").exec(window.location.search)||[,null])[1]||"")}m("subid"),m("subid2"),m("firstname"),m("surname"),m("city"),m("zipcode"),m("address"),m("phone"),m("mobile"),m("pid"),m("nrp");var b="https://"+m("ffdomain"),f=m("session"),d=m("fluxf"),u=m("fluxffn");var h=1;function w(){var t=document.querySelector("#spinner"),e=void 0;switch(h){case 1:t.classList.add("spinAround"),e=new Promise((function(t){setTimeout(t,7e3)}));break;case 2:t.classList.add("spinAround2"),e=new Promise((function(t){setTimeout(t,7e3)}));break;default:t.classList.add("spinAround3"),e=new Promise((function(t){setTimeout(t,7e3)}))}return h++,e}var O=c(0),p=(window.txt.start,function(t){var e=t.set,c=Object(s.useState)(!1),a=Object(r.a)(c,2),l=a[0],n=a[1],i=Object(s.useState)(!1),x=Object(r.a)(i,2);x[0],x[1];return Object(s.useEffect)((function(){setTimeout(Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){setTimeout(t,1500)}));case 2:return n(!0),t.next=5,new Promise((function(t){setTimeout(t,2e3)}));case 5:e(!0);case 6:case"end":return t.stop()}}),t)}))),1e3)}),[]),Object(O.jsx)("div",{className:"h-vh pos-rel flx flx-jc-ce flx-ai-ce startBg over-hide",children:l?Object(O.jsxs)("div",{className:"flx flx-col flx-jc-ce flx-ai-ce w-100 h-100 fade z-top strt fade",children:[Object(O.jsx)("h2",{className:"mont txt-wht w-30 txt-al-ce fade brd-ln m-b-2",children:window.txt.load}),Object(O.jsx)("img",{src:"./imgNz/travel.png",alt:"intro",className:"w-20 gift fade"}),Object(O.jsx)("h2",{className:"mont txt-wht w-30 txt-al-ce fade",children:window.txt.loadMes})]}):Object(O.jsxs)("div",{className:"flx flx-col h-100 flx-jc-ce flx-ai-ce",children:[Object(O.jsx)("img",{src:"./imgNz/img1.png",alt:"cnd1",className:"fade-r"}),Object(O.jsx)("img",{src:"./imgNz/img2.png",alt:"cnd2",className:"fade-l m-t-2 m-b-2"}),Object(O.jsx)("img",{src:"./imgNz/img3.png",alt:"cnd3",className:"fade-r"})]})})}),N=window.txt.main,v=N.head,g=N.greet,C=N.mes,k=N.congrats,z=function(){return Object(O.jsx)("div",{className:"flx flx-jc-ce flx-ai-ce p-20 bg-grad w-80 h-10",children:Object(O.jsx)("p",{className:"mont txt-wht txt-al-ce",children:v})})},y=function(t){return Object(O.jsxs)("div",{className:"flx flx-col flx-jc-sa flx-ai-ce p-20 bg-grad h-80 w-80",children:[Object(O.jsx)("img",{src:"./imgNz/greet.png",alt:"jackpot",className:"w-80"}),Object(O.jsx)("h4",{className:"mont txt-wht txt-al-ce",children:g}),Object(O.jsx)("p",{className:"lato txt-wht txt-al-ce",children:C}),Object(O.jsx)("p",{className:"mont txt-wht txt-al-ce",children:k})]})},L=function(t){var e=t.stat,c=t.set;return Object(O.jsxs)("section",{className:"flx flx-col flx-jc-sa flx-ai-ce h-100 w-50 fade-t",children:[Object(O.jsx)(z,{}),Object(O.jsx)(y,{stat:e,set:c})]})},T=function(t){var e=t.stat,c=t.set,s=e.ctr,a=e.bal,l=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:setTimeout((function(){c(Object(i.a)(Object(i.a)({},e),{},{show:!0,bal:a-50,ctr:s-1,clk:!1}));var t=document.querySelector("#spinBtn");t.classList.remove("pulse"),t.style.transform="scale(1)"}),1e3);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"pos-rel w-80 fade-l h-100 flx flx-jc-ce flx-ai-ce",children:[Object(O.jsx)("img",{src:"./imgNz/spinner.png",alt:"wheel",id:"spinner",className:"w-100 pos-abs z-bg"}),Object(O.jsx)("img",{src:"./imgNz/btn.png",alt:"wheel",id:"spinBtn",className:"cursor pulse",onClick:e.clk?l:void 0})]})},S=function(){var t=window.txt.terms;return Object(O.jsx)("small",{className:"lato w-80 txt-al-ce txt-wht",children:t})},M=function(t){var e=t.stat,c=t.set,s=t.mobile,a=t.mob,l=t.setCom,n=function(){l(!0)};return s?a?Object(O.jsx)(L,{stat:e,set:c}):Object(O.jsxs)("div",{className:"flx flx-col flx-jc-sa flx-ai-ce h-100",children:[Object(O.jsx)("div",{className:"w-80 flx flx-jc-strt flx-ai-ce fade-t",children:Object(O.jsx)("img",{src:"./imgNz/comments.svg",alt:"comments",className:"w-10 cursor com fade-l",onClick:n})}),Object(O.jsx)(T,{stat:e,set:c}),Object(O.jsx)(S,{})]}):Object(O.jsxs)("main",{className:"w-100 h-100 flx flx-jc-ce flx-ai-ce ",children:[Object(O.jsxs)("div",{className:"flx flx-col flx-jc-ce flx-ai-ce h-100 w-50",children:[Object(O.jsx)("div",{className:"w-80 flx flx-jc-strt flx-ai-ce",children:Object(O.jsx)("img",{src:"./imgNz/comments.svg",alt:"comments",className:"w-10 cursor com fade-l",onClick:n})}),Object(O.jsx)(T,{stat:e,set:c}),Object(O.jsx)(S,{})]}),Object(O.jsx)(L,{stat:e,set:c})]})},q=window.txt.pop,B=q.start,P=q.loss,A=q.win,E=B.bal,R=B.spins,_=function(t){var e=t.stat,c=t.set,s=(t.mob,t.setMob),a=B.head,l=B.mes,n=B.btn,r=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector(".targ"),c(Object(i.a)(Object(i.a)({},e),{},{show:!1,start:!1,lose:!0})),setTimeout((function(){s(!1)}),1250);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"bg-blu w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t targ pop",children:[Object(O.jsx)("h4",{className:"mont txt-al-ce",children:a}),Object(O.jsx)("img",{src:"./imgNz/start.png",alt:"welcome"}),Object(O.jsx)("p",{className:"lato w-80 txt-al-ce",children:l}),Object(O.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-80",children:[Object(O.jsx)("p",{className:"mont txt-wht",children:E.label}),Object(O.jsxs)("p",{className:"lato txt-wht m-l-auto",children:[window.txt.currency,e.bal]})]}),Object(O.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-80",children:[Object(O.jsx)("p",{className:"mont txt-wht",children:R.label}),Object(O.jsx)("p",{className:"lato txt-wht m-l-auto",children:e.ctr})]}),Object(O.jsx)("button",{className:"btn btn-wht mont",onClick:r,children:n})]})},I=function(t){var e=t.stat,c=(t.set,A.head),s=A.mes,a=A.btn;return Object(O.jsxs)("div",{className:"bg-blu w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t pop",children:[Object(O.jsx)("h4",{className:"mont txt-al-ce",children:c}),Object(O.jsx)("img",{src:"./imgNz/win.png",alt:"win",className:"w-70"}),Object(O.jsx)("p",{className:"lato w-80 txt-al-ce",children:s}),Object(O.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-80",children:[Object(O.jsx)("p",{className:"mont txt-wht",children:E.label}),Object(O.jsxs)("p",{className:"lato txt-wht m-l-auto",children:[window.txt.currency,e.bal]})]}),Object(O.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-80",children:[Object(O.jsx)("p",{className:"mont txt-wht",children:R.label}),Object(O.jsx)("p",{className:"lato txt-wht m-l-auto",children:e.ctr})]}),Object(O.jsx)("button",{className:"mont btn btn-wht exit-button","data-product-id":"1",onClick:function(t){return e=t.target.dataset.productId,void window.location.replace(b+"/?flux_action="+e+"&flux_f="+d+"&flux_ffn="+u+"&flux_sess="+f);var e},children:a})]})},J=function(t){var e=t.stat,c=t.set,s=P.head,a=P.mes,l=P.btn,n=function(){var t=Object(j.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=e.ctr,a=e.bal,!(s>1)){t.next=8;break}return c(Object(i.a)(Object(i.a)({},e),{},{ctr:s-1,bal:a-50,show:!1})),t.next=5,w();case 5:setTimeout((function(){c(Object(i.a)(Object(i.a)({},e),{},{ctr:s-1,bal:a-50,show:!0}))}),1e3),t.next=12;break;case 8:return c(Object(i.a)(Object(i.a)({},e),{},{ctr:s-1,bal:2500,lose:!1,win:!0,show:!1})),t.next=11,w();case 11:setTimeout((function(){c(Object(i.a)(Object(i.a)({},e),{},{ctr:s-1,bal:2500,show:!0,lose:!1,win:!0}))}),1e3);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"bg-blu w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t pop",children:[Object(O.jsx)("h4",{className:"mont txt-al-ce",children:s}),Object(O.jsx)("img",{src:"./imgNz/lose.png",alt:"lose"}),Object(O.jsx)("p",{className:"lato w-80 txt-al-ce",children:a}),Object(O.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-80",children:[Object(O.jsx)("p",{className:"mont txt-wht",children:E.label}),Object(O.jsxs)("p",{className:"lato txt-wht m-l-auto",children:[window.txt.currency,e.bal]})]}),Object(O.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-80",children:[Object(O.jsx)("p",{className:"mont txt-wht",children:R.label}),Object(O.jsx)("p",{className:"lato txt-wht m-l-auto",children:e.ctr})]}),Object(O.jsx)("button",{className:"mont btn btn-wht",onClick:n,children:l})]})},Z=function(t){var e=t.stat,c=t.set,s=t.mobile,a=t.setMob,l=e.start,n=e.win,i=e.lose;return Object(O.jsxs)("div",{className:"w-100 h-100 flx flx-jc-ce flx-ai-ce bg-pop fade pos-abs z-top",children:[n&&Object(O.jsx)(I,{stat:e,set:c}),l&&Object(O.jsx)(_,{stat:e,set:c,mob:s,setMob:a}),i&&Object(O.jsx)(J,{stat:e,set:c})]})},Q=c(8),U=function(t){return Object(O.jsx)("svg",{className:"exit txt-wht w-2 pos-abs cursor",onClick:t.click,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16364 0 0 7.16364 0 16C0 24.8364 7.16364 32 16 32C24.8364 32 32 24.8364 32 16C32 7.16364 24.8364 0 16 0ZM21.392 12.6647C21.657 12.3904 21.8036 12.023 21.8003 11.6416C21.7969 11.2602 21.644 10.8954 21.3743 10.6257C21.1046 10.356 20.7398 10.2031 20.3584 10.1997C19.977 10.1964 19.6096 10.343 19.3353 10.608L16 13.9433L12.6647 10.608C12.5306 10.4691 12.37 10.3583 12.1926 10.282C12.0151 10.2058 11.8243 10.1657 11.6311 10.164C11.438 10.1623 11.2465 10.1991 11.0677 10.2723C10.8889 10.3454 10.7265 10.4534 10.59 10.59C10.4534 10.7265 10.3454 10.8889 10.2723 11.0677C10.1991 11.2465 10.1623 11.438 10.164 11.6311C10.1657 11.8243 10.2058 12.0151 10.282 12.1926C10.3583 12.37 10.4691 12.5306 10.608 12.6647L13.9433 16L10.608 19.3353C10.4691 19.4695 10.3583 19.63 10.282 19.8074C10.2058 19.9849 10.1657 20.1757 10.164 20.3689C10.1623 20.562 10.1991 20.7535 10.2723 20.9323C10.3454 21.1111 10.4534 21.2735 10.59 21.41C10.7265 21.5466 10.8889 21.6546 11.0677 21.7277C11.2465 21.8009 11.438 21.8377 11.6311 21.836C11.8243 21.8343 12.0151 21.7942 12.1926 21.718C12.37 21.6417 12.5306 21.5309 12.6647 21.392L16 18.0567L19.3353 21.392C19.6096 21.657 19.977 21.8036 20.3584 21.8003C20.7398 21.7969 21.1046 21.644 21.3743 21.3743C21.644 21.1046 21.7969 20.7398 21.8003 20.3584C21.8036 19.977 21.657 19.6096 21.392 19.3353L18.0567 16L21.392 12.6647Z",fill:"white"})})},$=window.txt.comment,D=function(t){var e=t.set,c=$.comments,s=$.head;return Object(O.jsxs)("div",{className:"comments flx flx-jc-ce flx-ai-ce flx-col bg-pop fade pos-abs z-top h-100",children:[Object(O.jsxs)("div",{className:"p-20 bg-blu flx flx-jc-ce flx-ai-ce fade-t brd w-50 headCom pos-rel",children:[Object(O.jsx)("h4",{className:"txt-wht txt-al-ce mont",children:s}),Object(O.jsx)(U,{click:function(){document.querySelector(".comments").classList.add("fade-out"),setTimeout((function(){e(!1)}),300)}})]}),Object(O.jsx)("div",{className:"w-80 flx flx-jc-sa flx-ai-ce flx-wrp fade-t comCont",children:c.map((function(t,e){return Object(O.jsxs)("div",{className:"comment w-30 h-50 m-t-2 m-b-2 flx flx-jc-ce flx-ai-ce p-20 brd ".concat(e%2===0?"m-r-2 m-l-2 bg-blu":" bg-grn"),children:[Object(O.jsx)("img",{src:t.src,alt:t.alt,className:"w-30"}),Object(O.jsxs)("div",{className:"flx flx-col flx-jc-sa w-70 m-l-5",children:[Object(O.jsx)("p",{className:"mont txt-al-l ".concat(e%2===0?"txt-wht":"txt-blu"),children:t.name}),Object(O.jsx)("small",{className:"lato txt-al-l ".concat(e%2===0?"txt-wht":"txt-blu"),children:t.time}),Object(O.jsx)("p",{className:"lato txt-al-l ".concat(e%2===0?"txt-wht":"txt-blu"),children:t.mes})]})]},e)}))})]})},F=window.txt.pop.start,G=F.bal,H=F.spins;var K=function(){var t=Object(Q.useMediaQuery)({query:"(max-width: 1000px)"}),e=Object(s.useState)(!1),c=Object(r.a)(e,2),a=c[0],l=c[1],n=Object(s.useState)(!0),x=Object(r.a)(n,2),o=x[0],j=x[1],m=Object(s.useState)(!1),b=Object(r.a)(m,2),f=b[0],d=b[1],u=Object(s.useState)({show:!1,start:!0,win:!1,lose:!1,bal:G.val,ctr:H.val,clk:!1}),h=Object(r.a)(u,2),w=h[0],N=h[1];return Object(s.useEffect)((function(){setTimeout((function(){N(Object(i.a)(Object(i.a)({},w),{},{clk:!0,show:!0}))}),7e3)}),[]),a?Object(O.jsxs)("div",{className:"App flx flx-ai-ce flx-jc-ce w-100 h-100 pos-rel",children:[w.show&&Object(O.jsx)(Z,{stat:w,set:N,mobile:t,setMob:j}),f&&Object(O.jsx)(D,{set:d}),Object(O.jsx)(M,{stat:w,set:N,mobile:t,mob:o,setCom:d})]}):Object(O.jsx)(p,{set:l})};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(K,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.364adae1.chunk.js.map
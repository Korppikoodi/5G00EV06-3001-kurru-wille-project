(this.webpackJsonpprojekti=this.webpackJsonpprojekti||[]).push([[0],{122:function(e,t,c){},124:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(66),a=c.n(s),i=c(6),r=c(28),o=c.n(r),j=c(38),l=c(22),d=c.n(l),h=c(1),u=Object(n.createContext)(),p=function(e){var t=e.game,c=e.comp,s=Object(n.useState)(null),a=Object(i.a)(s,2),r=a[0],l=a[1],p=Object(n.useState)(!0),b=Object(i.a)(p,2),v=b[0],x=b[1];return Object(n.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var c,n,s,a,i,r,j,h,u,p,b,v,m,O,f,g,k,N,w;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t,console.log(t),void 0===t.videos){e.next=8;break}return e.next=5,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/game_videos?where=".concat(t.videos.join(),"&key=*"));case 5:n=e.sent,s=n.data,c.videos=s;case 8:if(void 0===t.screenshots){e.next=14;break}return e.next=11,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/screenshots?where=".concat(t.screenshots.join(),"&key=*"));case 11:a=e.sent,i=a.data,c.screenshots=i;case 14:if(void 0===t.age_ratings){e.next=20;break}return e.next=17,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/age_ratings?where=".concat(t.age_ratings.join(),"&key=*"));case 17:r=e.sent,j=r.data,c.age_ratings=j;case 20:if(void 0===t.cover){e.next=26;break}return e.next=23,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/covers?where=".concat(t.cover,"&key=*"));case 23:h=e.sent,u=h.data,c.cover=u;case 26:if(void 0===t.genres){e.next=32;break}return e.next=29,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/genres?where=".concat(t.genres.join(),"&key=*"));case 29:p=e.sent,b=p.data,c.genres=b;case 32:if(void 0===t.involved_companies){e.next=45;break}return e.next=35,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/involved_companies?where=".concat(t.involved_companies.join(),"&key=*"));case 35:if(v=e.sent,m=v.data,O=[],m.forEach((function(e){!0===e.developer&&O.push(e.company)})),c.involved_companies=m,!(O.length>0)){e.next=45;break}return e.next=43,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/companies?where=".concat(O.join(),"&key=*"));case 43:f=e.sent,c.dev=f.data;case 45:if(void 0===t.platforms){e.next=51;break}return e.next=48,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/platforms?where=".concat(t.platforms.join(),"&key=*"));case 48:g=e.sent,k=g.data,c.platforms=k;case 51:if(void 0===t.websites){e.next=57;break}return e.next=54,d.a.get("https://korppi-loppuprojekti.herokuapp.com/specific/websites?where=".concat(t.websites.join(),"&key=*"));case 54:N=e.sent,w=N.data,c.websites=w;case 57:console.log(c),l(c),x(!1);case 60:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsx)(u.Provider,{value:{newData:r,loading:v},children:c})},b=(c(58),["red","yellow","green"]),v=function(e){for(var t="",c=0;c<b.length;c++){if(33*c+33>=e){t=b[c];break}}return t};var x=function(e){var t=e.rating,c=e.amount,n=Math.round(t);return Object(h.jsxs)("div",{className:"ratings-div",children:[Object(h.jsx)("h3",{children:"Score"}),Object(h.jsx)("div",{className:"rating-circle",style:{backgroundColor:v(n)},children:Object(h.jsx)("p",{children:n})}),Object(h.jsxs)("p",{children:["Reviews: ",c]})]})},m=["released","alpha","beta","early_access","offline","cancelled","rumored","delisted"];var O=function(){var e,t=Object(n.useContext)(u).newData;return Object(h.jsxs)("div",{className:"info-container",children:[Object(h.jsxs)("div",{className:"first-row",children:[void 0!==t.cover?Object(h.jsx)("img",{width:"25%",height:"95%",src:"https://images.igdb.com/igdb/image/upload/t_original/".concat(t.cover[0].image_id,".jpg")}):"picture N/A",Object(h.jsx)("div",{className:"game-header",children:Object(h.jsx)("h1",{children:t.name})}),Object(h.jsx)(x,{rating:t.total_rating,amount:t.total_rating_count})]}),Object(h.jsxs)("div",{className:"info-block",children:[Object(h.jsx)("div",{className:"header-div",children:Object(h.jsx)("h3",{children:"Details"})}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsxs)("p",{children:["Release date: ",void 0!==t.first_release_date?new Date(1e3*t.first_release_date).toDateString():"N/A"]}),Object(h.jsxs)("p",{children:["Developer: ",void 0!==t.dev?t.dev[0].name:"N/A"]}),Object(h.jsxs)("p",{children:["Genre: ",void 0!==t.genres?t.genres.map((function(e){return" ".concat(e.name)})).toString():"N/A"]}),Object(h.jsxs)("p",{children:["Platforms: ",void 0!==t.platforms?t.platforms.map((function(e){return" ".concat(e.abbreviation)})).toString():"N/A"]}),Object(h.jsxs)("p",{children:["Websites: ",void 0!==t.websites?t.websites.map((function(e){return" ".concat(e.url)})).toString():"N/A"]}),void 0!==t.status&&Object(h.jsxs)("p",{children:["Status: ",m[t.status]]})]})]}),(e=t,void 0!==e.storyline?Object(h.jsxs)("div",{className:"text-container",children:[Object(h.jsx)("div",{className:"header-div",children:Object(h.jsx)("h3",{children:"Storyline"})}),Object(h.jsx)("div",{className:"text-block",children:Object(h.jsx)("p",{children:e.storyline})})]}):void 0!==e.summary?Object(h.jsxs)("div",{className:"text-container",children:[Object(h.jsx)("div",{className:"header-div",children:Object(h.jsx)("h3",{children:"Summary"})}),Object(h.jsx)("div",{className:"text-block",children:Object(h.jsx)("p",{children:e.summary})})]}):Object(h.jsxs)("div",{className:"text-container",children:[Object(h.jsx)("div",{className:"header-div",children:Object(h.jsx)("h3",{children:"Storyline"})}),Object(h.jsx)("p",{children:"N/A"})]}))]})},f=c(138),g=(c(59),c(40)),k=c.n(g),N=c(41),w=c.n(N);var y=function(){var e=Object(n.useContext)(u).newData,t=Object(n.useState)(0),c=Object(i.a)(t,2),s=c[0],a=c[1],r=void 0!==e.screenshots&&function(e){for(var t=[],c=Math.ceil(e.length/4),n=0;n<c;n++)if(4*n<=e.length){var s=e.slice(4*n,4+4*n);t.push(s)}else{var a=e.slice(4*n,e.length);t.push(a)}return t}(e.screenshots);return void 0!==e.screenshots?Object(h.jsxs)("div",{className:"media-view",children:[Object(h.jsx)("div",{className:"paging",children:s>0&&Object(h.jsx)(f.a,{variant:"contained",startIcon:Object(h.jsx)(k.a,{}),onClick:function(){return a((function(e){return e-1}))},children:"Back"})}),Object(h.jsx)("div",{className:"media-container",children:r[s].map((function(e,t){return Object(h.jsx)("div",{className:"media-item",children:Object(h.jsx)("img",{width:"100%",height:"100%",src:"https://images.igdb.com/igdb/image/upload/t_original/".concat(e.image_id,".jpg")})},t)}))}),Object(h.jsx)("div",{className:"paging",children:s<r.length-1&&Object(h.jsx)(f.a,{variant:"contained",endIcon:Object(h.jsx)(w.a,{}),onClick:function(){return a((function(e){return e+1}))},children:"Next"})})]}):Object(h.jsx)("div",{className:"empty",children:"No Screenshots for this game"})},S=c(69),_=c.n(S);var C=function(){var e=Object(n.useContext)(u).newData,t=Object(n.useState)(0),c=Object(i.a)(t,2),s=c[0],a=c[1],r=void 0!==e.videos&&function(e){for(var t=[],c=Math.ceil(e.length/4),n=0;n<c;n++)if(4*n<=e.length){var s=e.slice(4*n,4+4*n);t.push(s)}else{var a=e.slice(4*n,e.length);t.push(a)}return t}(e.videos);return void 0!==e.videos?Object(h.jsxs)("div",{className:"media-view",children:[Object(h.jsx)("div",{className:"paging",children:s>0&&Object(h.jsx)(f.a,{variant:"contained",startIcon:Object(h.jsx)(k.a,{}),onClick:function(){return a((function(e){return e-1}))},children:"Back"})}),Object(h.jsx)("div",{className:"media-container",children:r[s].map((function(e,t){return Object(h.jsx)("div",{className:"media-item",children:Object(h.jsx)(_.a,{controls:!0,width:"100%",height:"100%",url:"https://www.youtube.com/watch?v=".concat(e.video_id)})},t)}))}),Object(h.jsx)("div",{className:"paging",children:s<r.length-1&&Object(h.jsx)(f.a,{variant:"contained",endIcon:Object(h.jsx)(w.a,{}),onClick:function(){return a((function(e){return e+1}))},children:"Next"})})]}):Object(h.jsx)("div",{className:"empty",children:"No videos for this game"})},D=c(140);var A=function(){var e=Object(n.useState)(Object(h.jsx)(O,{})),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(u).loading;return Object(h.jsx)("div",{className:"overview-area",children:!0!==a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"navigation",children:[Object(h.jsx)("button",{onClick:function(){return s(Object(h.jsx)(O,{}))},children:"Info"}),Object(h.jsx)("button",{onClick:function(){return s(Object(h.jsx)(y,{}))},children:"Screenshots"}),Object(h.jsx)("button",{onClick:function(){return s(Object(h.jsx)(C,{}))},children:"Videos"})]}),Object(h.jsx)("div",{className:"view",children:c})]}):Object(h.jsx)(D.a,{style:{alignSelf:"center"}})})},I=(c(122),function(){var e=Object(j.a)(o.a.mark((function e(t,c,n){var s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://korppi-loppuprojekti.herokuapp.com/search?search=".concat(t));case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,c(a),n(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}());var E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(i.a)(a,2),o=r[0],j=r[1],l=Object(n.useState)(null),d=Object(i.a)(l,2),u=d[0],b=d[1],v=Object(n.useState)(!1),x=Object(i.a)(v,2),m=x[0],O=x[1],f=function(){b(null),s([]),O(!0),I(o,s,O)};return Object(h.jsxs)("div",{className:"Main",children:[Object(h.jsxs)("div",{className:"search-bar",children:[Object(h.jsx)("div",{className:"headline",children:Object(h.jsx)("h2",{children:"Gaming app"})}),Object(h.jsxs)("div",{className:"search",children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&f()}}),Object(h.jsx)("button",{onClick:function(){return f()},children:"Search"})]})]}),Object(h.jsx)("div",{className:"background",children:null===u?Object(h.jsx)("div",{className:"results-div",children:!0===m?Object(h.jsx)(D.a,{}):Object(h.jsx)("ul",{children:c.map((function(e){return Object(h.jsxs)("li",{className:"result-row",children:[Object(h.jsx)("label",{children:e.name}),Object(h.jsx)("button",{onClick:function(){b(e)},children:"Select"})]},e.id)}))})}):Object(h.jsx)(p,{game:u,comp:Object(h.jsx)(A,{})})})]})};a.a.render(Object(h.jsx)(E,{}),document.getElementById("root"))},58:function(e,t,c){},59:function(e,t,c){}},[[124,1,2]]]);
//# sourceMappingURL=main.9ae4d03c.chunk.js.map
(this.webpackJsonpnew_cemi=this.webpackJsonpnew_cemi||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);n(0);var a,c,r,o,i,d=n(13),l=n.n(d),s=(n(35),n(36),n(7)),u=n(8),b=n(26),f=n.n(b),g=n(12),j=n(73),p=n(70),h="calendar/PREV",m="calendar/TODAY",x="calendar/NEXT",O="calendar/CHANGE",v={selectedDate:new Date},D=n(71),y=n(72),w=n(2),E=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],_=u.a.div(a||(a=Object(s.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: left;\n  padding-left: 20px;\n  padding-bottom: 30px;\n  /* border: solid; */\n  & > .title {\n    font-size: 23px;\n    padding-bottom: 15px;\n    font-family: "Bold";\n    color: #f2702f;\n  }\n']))),T=u.a.div(c||(c=Object(s.a)(["\n  button {\n    border-radius: 50px;\n    border: none;\n    margin-right: 5px;\n  }\n"]))),N=u.a.div(r||(r=Object(s.a)(["\n  display: grid;\n  height: 500px;\n  grid-template-columns: repeat(7, 1fr);\n  grid-auto-rows: minmax(100px, auto);\n  border-left: solid 1px #f0f1f1;\n  border-bottom: solid 2px #f0f1f1;\n  border-right: solid 1px #f0f1f1;\n  & > .item {\n    border: solid 1px #f0f1f1;\n    padding-top: 5px;\n  }\n  & > .select {\n    color: #f2702f;\n  }\n"]))),M=u.a.div(o||(o=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  color: #5e647b;\n  height: 40px;\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  border: solid 2px #f0f1f1;\n  border-bottom: solid 1px #f0f1f1;\n"]))),k=function(){var e=Object(g.c)((function(e){return e.calendar.selectedDate})),t=Object(g.b)(),n=function(e){for(var t=[],n=Object(D.a)(new Date(e.getFullYear(),e.getMonth(),1)),a=Object(y.a)(Object(j.a)(e,{months:1}))-n+1,c=0;c<n;c++){var r=Object(j.a)(e,{months:1}),o=new Date(r.getFullYear(),r.getMonth(),a),i={id:o.getTime(),date:o};t.push(i),a++}for(var d=1;d<=Object(y.a)(e);d++){var l=new Date(e.getFullYear(),e.getMonth(),d),s={id:l.getTime(),date:l};t.push(s)}for(var u=35-t.length,b=1;b<=u;b++){var f=Object(p.a)(e,{months:1}),g=new Date(f.getFullYear(),f.getMonth(),b),h={id:g.getTime(),date:g};t.push(h)}if(t.length>35){u=42-t.length;for(var m=1;m<=u;m++){var x=Object(p.a)(e,{months:1}),O=new Date(x.getFullYear(),x.getMonth(),m),v={id:O.getTime(),date:O};t.push(v)}}return t}(e),a=function(n){var a=n.target.id;console.log(a);var c=document.getElementById(e.getTime().toString());c&&(c.className="item"),t(function(e){return{type:O,id:e}}(parseInt(a)));var r=document.getElementById(a);r&&(r.className="item select")};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(_,{children:[Object(w.jsx)("div",{className:"title",children:f()(e,"MMMM, yyyy")}),Object(w.jsxs)(T,{children:[Object(w.jsx)("button",{onClick:function(){t({type:h})},children:"<"}),Object(w.jsx)("button",{onClick:function(){t({type:m})},children:"today"}),Object(w.jsx)("button",{onClick:function(){t({type:x})},children:">"})]})]}),Object(w.jsx)(M,{children:E.map((function(e,t){return Object(w.jsx)("div",{children:e},t)}))}),Object(w.jsx)(N,{children:n.map((function(e){return Object(w.jsx)("div",{className:"item",id:e.id,onClick:a,children:e.date.getDate()},e.id)}))})]})},F=u.a.div(i||(i=Object(s.a)(["\n  /* background-color: green; */\n  width: 1300px;\n  height: 700px;\n  margin: 0 auto;\n  margin-top: 100px;\n"]))),S=function(){return Object(w.jsx)(F,{children:Object(w.jsx)(k,{})})};var I=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(S,{})})},Y=n(14),C=Object(Y.b)({calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return console.log("action prev"),{selectedDate:Object(j.a)(e.selectedDate,{months:1})};case m:return console.log("today"),{selectedDate:new Date};case x:return console.log("action next"),{selectedDate:Object(p.a)(e.selectedDate,{months:1})};case O:return console.log("change state"),{selectedDate:new Date(t.id)};default:return e}}}),X=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),B=Object(Y.c)(C,X);l.a.render(Object(w.jsx)(g.a,{store:B,children:Object(w.jsx)(I,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.861910ab.chunk.js.map
(this.webpackJsonpnew_cemi=this.webpackJsonpnew_cemi||[]).push([[0],{38:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var i,a,c,r,d,o,l,s,b,j,u,x,p,f,O,h,g,v,m=t(0),y=t(14),M=t.n(y),w=(t(38),t(4)),D=t(7),T=t(5),k=t(78),A=t(30),_=t.n(A),E=t(13),P=t(76),S=t(73),C="calendar/PREV",N="calendar/TODAY",F="calendar/NEXT",z="calendar/CHANGE",X={selectedDate:new Date,visibleDate:new Date},Y=t(29),I=t(74),L=t(1),R=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],V=T.a.div(i||(i=Object(w.a)(["\n  flex: 3;\n  text-align: center;\n"]))),B=T.a.div(a||(a=Object(w.a)(['\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n  padding: 32px;\n  & > .title {\n    font-size: 23px;\n    font-family: "Bold";\n    color: #f2702f;\n  }\n']))),J=T.a.div(c||(c=Object(w.a)(["\n  button {\n    border-radius: 50px;\n    border: none;\n    margin-right: 5px;\n  }\n"]))),U=T.a.div(r||(r=Object(w.a)(["\n  display: grid;\n  height: 500px;\n  grid-template-columns: repeat(7, 1fr);\n  grid-auto-rows: minmax(100px, auto);\n  border-left: solid 1px #f0f1f1;\n  border-bottom: solid 2px #f0f1f1;\n"]))),W=T.a.div(d||(d=Object(w.a)(["\n  border: solid 1px #f0f1f1;\n  padding-top: 5px;\n  &:nth-child(7n) {\n    border-right: none;\n  }\n  color: ",";\n"])),(function(e){return e.selected&&"#f2702f"})),G=T.a.div(o||(o=Object(w.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  color: #5e647b;\n  height: 40px;\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  border: solid 2px #f0f1f1;\n  border-bottom: solid 1px #f0f1f1;\n  border-right: none;\n"]))),H=function(){var e=Object(D.c)((function(e){return e.calendar.selectedDate})),n=Object(D.c)((function(e){return e.calendar.visibleDate})),t=Object(D.b)(),i=function(e){for(var n=[],t=Object(Y.a)(new Date(e.getFullYear(),e.getMonth(),1)),i=Object(I.a)(Object(P.a)(e,{months:1}))-t+1,a=0;a<t;a++){var c=Object(P.a)(e,{months:1}),r=new Date(c.getFullYear(),c.getMonth(),i),d={id:r.getTime(),date:r};n.push(d),i++}for(var o=1;o<=Object(I.a)(e);o++){var l=new Date(e.getFullYear(),e.getMonth(),o),s={id:l.getTime(),date:l};n.push(s)}for(var b=35-n.length,j=1;j<=b;j++){var u=Object(S.a)(e,{months:1}),x=new Date(u.getFullYear(),u.getMonth(),j),p={id:x.getTime(),date:x};n.push(p)}if(n.length>35){b=42-n.length;for(var f=1;f<=b;f++){var O=Object(S.a)(e,{months:1}),h=new Date(O.getFullYear(),O.getMonth(),f),g={id:h.getTime(),date:h};n.push(g)}}return n}(n),a=function(e){var n=e.currentTarget.id;t(function(e){return{type:z,id:e}}(parseInt(n)))};return Object(L.jsxs)(V,{children:[Object(L.jsxs)(B,{children:[Object(L.jsx)("div",{className:"title",children:_()(n,"MMMM, yyyy")}),Object(L.jsxs)(J,{children:[Object(L.jsx)("button",{onClick:function(){t({type:C})},children:"<"}),Object(L.jsx)("button",{onClick:function(){t({type:N})},children:"today"}),Object(L.jsx)("button",{onClick:function(){t({type:F})},children:">"})]})]}),Object(L.jsx)(G,{children:R.map((function(e,n){return Object(L.jsx)("div",{children:e},n)}))}),Object(L.jsx)("div",{children:Object(L.jsx)(U,{children:i.map((function(n){return Object(L.jsx)(W,{id:n.id.toString(),onClick:a,selected:Object(k.a)(e,n.date),children:n.date.getDate()},n.id)}))})})]})},q=t(18),K="mocal/MODAL",Q=function(){return{type:K}},Z={addModalOn:!1},$=t(75),ee="todo/ADDTODO",ne=[],te=["12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM"],ie=T.a.div(l||(l=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ae=T.a.div(s||(s=Object(w.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"]))),ce=T.a.div(b||(b=Object(w.a)(["\n  width: 25%;\n  position: relative;\n  padding: 20px;\n  background-color: white;\n  text-align: center;\n  border-radius: 6px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > .exit {\n    margin-left: 90%;\n    cursor: pointer;\n  }\n  & > input {\n    border: none;\n    border-bottom: 2px solid lightgray;\n    width: 60%;\n    font-size: 15px;\n    outline: none;\n  }\n  & > select {\n    margin: 10px 0px;\n    border: none;\n    border-bottom: 2px solid lightgray;\n    outline: none;\n  }\n"]))),re=T.a.div(j||(j=Object(w.a)(["\n  display: flex;\n  margin: 10px 0px;\n  font-size: 12px;\n  cursor: pointer;\n  & > span {\n    margin-right: 10px;\n  }\n"]))),de=T.a.button(u||(u=Object(w.a)(["\n  border: none;\n  padding: 5px 20px;\n  outline: none;\n  cursor: pointer;\n"]))),oe=function(){var e=Object(m.useState)(!1),n=Object(q.a)(e,2),t=n[0],i=n[1],a=Object(m.useState)(""),c=Object(q.a)(a,2),r=c[0],d=c[1],o=Object(m.useState)(""),l=Object(q.a)(o,2),s=l[0],b=l[1],j=Object(D.c)((function(e){return e.calendar.selectedDate})),u=Object(D.b)(),x=function(){u(Q())};return Object(L.jsxs)(ie,{children:[Object(L.jsx)(ae,{onClick:x}),Object(L.jsxs)(ce,{children:[Object(L.jsx)("span",{className:"exit",onClick:x,children:"X"}),Object(L.jsx)("input",{id:"todo",type:"text",placeholder:"Enter your to do",onChange:function(e){var n=e.target.value;d(n)},value:r}),t?Object(L.jsx)("select",{id:"deadline",value:s,onChange:function(e){var n=e.target.value;b(n)},children:te.map((function(e,n){return Object(L.jsx)("option",{value:e,children:e},n)}))}):Object(L.jsxs)(re,{onClick:function(){i(!0),b(te[0])},children:[Object(L.jsx)("span",{children:"+"}),Object(L.jsx)("span",{children:"Add deadline"})]}),Object(L.jsx)(de,{onClick:function(){var e;console.log(s),""!==r&&u((e=j.getTime(),{type:ee,dateTime:e,text:r,deadline:s})),d(""),b(""),u(Q())},children:"Submit"})]})]})},le=t(77),se=T.a.div(x||(x=Object(w.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 24px;\n  border-bottom: 2px solid #f0f1f1;\n  & > div {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),be=T.a.span(p||(p=Object(w.a)(["\n  display: block;\n  background-color: red;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: 4px;\n"]))),je=function(e){var n=e.text,t=e.deadline;return Object(L.jsxs)(se,{children:[Object(L.jsx)(be,{}),Object(L.jsxs)("div",{children:[Object(L.jsx)("span",{children:n}),Object(L.jsx)("span",{children:t})]})]})},ue=["Sunday","Monday","Tuesday","Wednesday","Thurseday","Friday","Saturday"],xe=["1st","2nd","3rd","4th","5th"],pe=T.a.div(f||(f=Object(w.a)(["\n  flex: 1;\n  height: 100vh;\n  border-left: solid 3px #f0f1f1;\n"]))),fe=T.a.div(O||(O=Object(w.a)(["\n  display: flex;\n  padding: 32px;\n  border-bottom: solid #f0f1f1 2px;\n  justify-content: space-between;\n  align-items: center;\n  & > .add {\n    background-color: white;\n    border-radius: 50%;\n    border: 2px solid #f0f1f1;\n    font-size: 20px;\n    color: gray;\n  }\n"]))),Oe=T.a.div(h||(h=Object(w.a)(["\n  display: flex;\n  align-items: flex-end;\n  & > .day {\n    font-size: 23px;\n  }\n  & > .week {\n    font-size: 18px;\n    margin-left: 10px;\n  }\n"]))),he=T.a.div(g||(g=Object(w.a)(["\n  height: 100%;\n  overflow-y: scroll;\n"]))),ge=function(){var e=Object(D.b)(),n=Object(D.c)((function(e){return e.calendar.selectedDate})),t=Object(D.c)((function(e){return e.todo})).filter((function(e){return Object(k.a)(e.dateTime,n)}));return Object(L.jsxs)(pe,{children:[Object(L.jsxs)(fe,{children:[Object(L.jsxs)(Oe,{children:[Object(L.jsxs)("span",{className:"day",children:[ue[Object(Y.a)(n)],", "]}),Object(L.jsx)("span",{className:"week",children:xe[Object(le.a)(n)-1]})]}),Object(L.jsx)("button",{className:"add",onClick:function(){e(Q())},children:"+"})]}),Object(L.jsx)(he,{children:t.map((function(e){return Object(L.jsx)(je,{text:e.text,deadline:e.deadline},e.id)}))})]})},ve=T.a.div(v||(v=Object(w.a)(["\n  display: flex;\n"]))),me=function(){var e=Object(D.c)((function(e){return e.modal.addModalOn}));return Object(L.jsxs)(ve,{children:[Object(L.jsx)(H,{}),Object(L.jsx)(ge,{}),e&&Object(L.jsx)(oe,{})]})};var ye=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(me,{})})},Me=t(15),we=Object(Me.b)({calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C:return console.log("action prev"),Object(E.a)(Object(E.a)({},e),{},{visibleDate:Object(P.a)(e.visibleDate,{months:1})});case N:return console.log("today"),{visibleDate:new Date,selectedDate:new Date};case F:return console.log("action next"),Object(E.a)(Object(E.a)({},e),{},{visibleDate:Object(S.a)(e.visibleDate,{months:1})});case z:return console.log("change state"),{visibleDate:new Date(n.id),selectedDate:new Date(n.id)};default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case K:return console.log("switching modal"),{addModalOn:!e.addModalOn};default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ee:return console.log("add Todo"),e.concat({id:Object($.a)(),dateTime:n.dateTime,text:n.text,deadline:n.deadline});default:return e}}}),De=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Te=Object(Me.c)(we,De);M.a.render(Object(L.jsx)(D.a,{store:Te,children:Object(L.jsx)(ye,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.30153dbd.chunk.js.map
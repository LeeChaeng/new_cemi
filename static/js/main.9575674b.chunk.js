(this.webpackJsonpnew_cemi=this.webpackJsonpnew_cemi||[]).push([[0],{44:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var i,a,c,r,o,d,l,s,b,u,j,x,O,f,p,h,m,g,v,y,w=t(0),D=t(17),S=t.n(D),T=(t(44),t(5)),M=t(8),k=t(6),_=t(83),C=t(27),N=t.n(C),A=t(7),E=t(81),I=t(78),P="calendar/PREV",J="calendar/TODAY",z="calendar/NEXT",F="calendar/CHANGE",Y={selectedDate:new Date,visibleDate:new Date},L=t(36),R=t(79),G=t(1),X=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],U=k.a.div(i||(i=Object(T.a)(["\n  flex: 3;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  & > .container {\n    flex: 1 1 0;\n  }\n"]))),V=k.a.div(a||(a=Object(T.a)(['\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n  padding: 32px;\n  & > .title {\n    font-size: 30px;\n    font-family: "SCDream_bold";\n    color: #3e4496;\n    & > .title__month {\n      font-size: 40px;\n      font-family: "SCDream_bold";\n      margin-left: 10px;\n    }\n  }\n']))),W=k.a.div(c||(c=Object(T.a)(['\n  font-family: "SCDream_light";\n  & > button {\n    border-radius: 50px;\n    border: none;\n    margin-right: 5px;\n    cursor: pointer;\n    outline: none;\n  }\n']))),B=k.a.div(r||(r=Object(T.a)(["\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(7, 1fr);\n  grid-auto-rows: minmax(80px, auto);\n"]))),H=k.a.div(o||(o=Object(T.a)(["\n  border: solid 1px #f0f1f1;\n  padding-top: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: background-color 0.2s;\n  &:hover {\n    cursor: pointer;\n    background-color: #f0f1f1;\n  }\n  &:nth-child(7n) {\n    border-right: none;\n  }\n  &:nth-last-child(7) {\n    border-bottom-left-radius: 40px;\n  }\n  &:nth-last-child(n) {\n    border-bottom: none;\n    border-left: none;\n  }\n\n  color: ",";\n  font-family: ",";\n\n  & > .color_container {\n    display: flex;\n    margin: 10px;\n  }\n"])),(function(e){return e.selected&&"#e3535a"}),(function(e){return e.selected&&"SCDream_bold"})),q=k.a.div(d||(d=Object(T.a)(["\n  background-color: ",";\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 7px;\n"])),(function(e){return e.color})),K=k.a.div(l||(l=Object(T.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  color: #5e647b;\n  height: 40px;\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  border: solid 2px #f0f1f1;\n  border-bottom: solid 1px #f0f1f1;\n  border-right: none;\n"]))),Q=function(){var e=Object(M.c)((function(e){return e.calendar.selectedDate})),n=Object(M.c)((function(e){return e.calendar.visibleDate})),t=Object(M.c)((function(e){return e.todo})),i=Object(M.b)(),a=Object(w.useCallback)((function(){i({type:P})}),[i]),c=Object(w.useCallback)((function(){i({type:J})}),[i]),r=Object(w.useCallback)((function(){i({type:z})}),[i]),o=Object(w.useMemo)((function(){return function(e){for(var n=[],t=Object(L.a)(new Date(e.getFullYear(),e.getMonth(),1)),i=Object(R.a)(Object(E.a)(e,{months:1}))-t+1,a=0;a<t;a++){var c=Object(E.a)(e,{months:1}),r=new Date(c.getFullYear(),c.getMonth(),i),o={id:r.getTime(),date:r};n.push(o),i++}for(var d=1;d<=Object(R.a)(e);d++){var l=new Date(e.getFullYear(),e.getMonth(),d),s={id:l.getTime(),date:l};n.push(s)}for(var b=35-n.length,u=1;u<=b;u++){var j=Object(I.a)(e,{months:1}),x=new Date(j.getFullYear(),j.getMonth(),u),O={id:x.getTime(),date:x};n.push(O)}if(n.length>35){b=42-n.length;for(var f=1;f<=b;f++){var p=Object(I.a)(e,{months:1}),h=new Date(p.getFullYear(),p.getMonth(),f),m={id:h.getTime(),date:h};n.push(m)}}return n}(n)}),[n]),d=Object(w.useCallback)((function(e){var n=e.currentTarget.id;i(function(e){return{type:F,id:e}}(parseInt(n)))}),[i]);return Object(G.jsxs)(U,{children:[Object(G.jsxs)(V,{children:[Object(G.jsxs)("div",{className:"title",children:[Object(G.jsx)("span",{children:N()(n,"yyyy")}),Object(G.jsx)("span",{className:"title__month",children:N()(n,"MMMM")})]}),Object(G.jsxs)(W,{children:[Object(G.jsx)("button",{onClick:a,children:"<"}),Object(G.jsx)("button",{onClick:c,children:"TODAY"}),Object(G.jsx)("button",{onClick:r,children:">"})]})]}),Object(G.jsx)(K,{children:X.map((function(e,n){return Object(G.jsx)("div",{children:e},n)}))}),Object(G.jsx)("div",{className:"container",children:Object(G.jsx)(B,{children:o.map((function(n){return Object(G.jsxs)(H,{id:n.id.toString(),onClick:d,selected:Object(_.a)(e,n.date),children:[n.date.getDate(),Object(G.jsxs)("div",{className:"color_container",children:[t.find((function(e){return!e.done&&Object(_.a)(new Date(e.dateTime),new Date(n.id))}))?Object(G.jsx)(q,{color:"#e3535a"}):"",t.find((function(e){return e.done&&Object(_.a)(new Date(e.dateTime),new Date(n.id))}))?Object(G.jsx)(q,{color:"#3e4496"}):""]})]},n.id)}))})})]})},Z=t(21),$="modal/MODAL",ee="modal/TARGETTODO",ne="modal/CLEARTARGET",te=function(){return{type:$}},ie=function(){return{type:ne}},ae={addModalOn:!1,todo:{id:"",dateTime:0,text:"",deadline:""}},ce=t(80),re=function(e,n,t,i){var a=localStorage.getItem("new_cemi");if(null===a||""===a){var c=[{id:e,dateTime:n,text:t,deadline:i,done:!1}];localStorage.setItem("new_cemi",JSON.stringify(c))}else{var r={id:e,dateTime:n,text:t,deadline:i,done:!1},o=JSON.parse(localStorage.getItem("new_cemi")||"");o.push(r),localStorage.setItem("new_cemi",JSON.stringify(o))}},oe=function(e,n,t){var i=JSON.parse(localStorage.getItem("new_cemi")||"").map((function(i){return i.id===e?Object(A.a)(Object(A.a)({},i),{},{text:n,deadline:t}):i}));localStorage.setItem("new_cemi",JSON.stringify(i))},de=function(e){var n=JSON.parse(localStorage.getItem("new_cemi")||"").map((function(n){return n.id===e?Object(A.a)(Object(A.a)({},n),{},{done:!n.done}):n}));localStorage.setItem("new_cemi",JSON.stringify(n))},le=function(e){var n=JSON.parse(localStorage.getItem("new_cemi")||"").filter((function(n){return n.id!==e}));localStorage.setItem("new_cemi",JSON.stringify(n))},se=[],be=function(){return null===localStorage.getItem("new_cemi")?(localStorage.setItem("new_cemi",se.toString()),se):JSON.parse(localStorage.getItem("new_cemi")||JSON.stringify(se))},ue="todo/ADDTODO",je="todo/DELTODO",xe="todo/TOGGLETODO",Oe="todo/UPDATETODO",fe=["12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM"],pe=k.a.div(s||(s=Object(T.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),he=k.a.div(b||(b=Object(T.a)(["\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"]))),me=k.a.div(u||(u=Object(T.a)(["\n  width: 35%;\n  height: 170px;\n  position: relative;\n  padding: 10px;\n  background-color: white;\n  text-align: center;\n  border-radius: 16px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > .exit {\n    margin-left: 95%;\n    cursor: pointer;\n    font-size: 25px;\n    font-weight: bold;\n    color: #e3535a;\n  }\n  & > input {\n    border: none;\n    border-bottom: 1.8px solid gray;\n    width: 70%;\n    font-size: 25px;\n    outline: none;\n  }\n\n  & > input::placeholder {\n    font-style: italic;\n    color: #e3535a;\n  }\n  & > select {\n    margin: 10px 0px;\n    border: none;\n    border-bottom: 2px solid lightgray;\n    outline: none;\n  }\n"]))),ge=k.a.div(j||(j=Object(T.a)(['\n  display: flex;\n  margin: 10px 0px;\n  font-size: 14px;\n  font-family: "SCDream_normal";\n  cursor: pointer;\n  & > span {\n    margin-right: 10px;\n  }\n']))),ve=k.a.button(x||(x=Object(T.a)(['\n  border: none;\n  padding: 2px 12px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 10px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "SCDream_bold";\n  color: white;\n  background-color: #e3535a;\n']))),ye=function(){var e=Object(M.c)((function(e){return e.calendar.selectedDate})),n=Object(M.c)((function(e){return e.modal.todo})),t=Object(w.useState)(""!==n.deadline),i=Object(Z.a)(t,2),a=i[0],c=i[1],r=Object(w.useState)(""===n.text?"":n.text),o=Object(Z.a)(r,2),d=o[0],l=o[1],s=Object(w.useState)(n.deadline),b=Object(Z.a)(s,2),u=b[0],j=b[1],x=Object(w.useCallback)((function(){c(!0),j(fe[0])}),[]),O=Object(M.b)(),f=Object(w.useCallback)((function(){O(te()),O(ie())}),[O]),p=Object(w.useCallback)((function(e){var n=e.target.value;l(n)}),[]),h=Object(w.useCallback)((function(e){var n=e.target.value;j(n)}),[]),m=Object(w.useCallback)((function(){var e;O((e=n.id,{type:Oe,id:e,text:d,deadline:u})),O(te()),O(ie())}),[u,O,d,n.id]),g=Object(w.useCallback)((function(){var n;""!==d&&O((n=e.getTime(),{type:ue,dateTime:n,text:d,deadline:u})),l(""),j(""),O(te())}),[u,O,d,e]);return Object(G.jsxs)(pe,{children:[Object(G.jsx)(he,{onClick:f}),Object(G.jsxs)(me,{children:[Object(G.jsx)("span",{className:"exit",onClick:f,children:"x"}),Object(G.jsx)("input",{id:"todo",type:"text",placeholder:"Enter your to do",onChange:p,value:d}),a?Object(G.jsx)("select",{id:"deadline",value:u,onChange:h,children:fe.map((function(e,n){return Object(G.jsx)("option",{value:e,children:e},n)}))}):Object(G.jsxs)(ge,{onClick:x,children:[Object(G.jsx)("span",{children:"+"}),Object(G.jsx)("span",{children:"Add deadline"})]}),""!==n.id?Object(G.jsx)(ve,{onClick:m,children:"update"}):Object(G.jsx)(ve,{onClick:g,children:"Submit"})]})]})},we=t(82),De=t(29),Se=t(28),Te=k.a.div(O||(O=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 24px;\n  border-bottom: 2px solid #f0f1f1;\n  transition: background-color 0.2s;\n  &:hover {\n    cursor: pointer;\n    background-color: #f0f1f1;\n  }\n  & > div {\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n  }\n  & > div > div > .done {\n    font-style: italic;\n    text-decoration: line-through;\n    color: lightgray;\n  }\n"]))),Me=k.a.span(f||(f=Object(T.a)(["\n  display: block;\n  background-color: ",";\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: 4px;\n"])),(function(e){return e.color})),ke=k.a.div(p||(p=Object(T.a)(["\n  width: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),_e=function(e){var n=e.id,t=e.text,i=e.deadline,a=e.done,c=e.dateTime,r=Object(M.b)();return Object(G.jsxs)(Te,{onClick:function(){r(function(e){return{type:xe,id:e}}(n))},children:[a?Object(G.jsxs)("div",{children:[Object(G.jsx)(Me,{color:"#3e4496"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{className:"done",children:t}),Object(G.jsx)("span",{className:"done",children:i})]})]}):Object(G.jsxs)("div",{children:[Object(G.jsx)(Me,{color:"#e3535a"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{children:t}),Object(G.jsx)("span",{children:i})]})]}),Object(G.jsxs)(ke,{children:[Object(G.jsx)(Se.a,{icon:De.a,color:"lightgray",size:"sm",onClick:function(e){e.stopPropagation(),r(function(e,n,t,i){return{type:ee,id:e,dateTime:n,text:t,deadline:i}}(n,c,t,i))}}),Object(G.jsx)(Se.a,{icon:De.b,color:"lightgray",size:"sm",onClick:function(e){e.stopPropagation(),r(function(e){return{type:je,id:e}}(n))}})]})]})},Ce=["Sunday","Monday","Tuesday","Wednesday","Thurseday","Friday","Saturday"],Ne=["1st","2nd","3rd","4th","5th"],Ae=k.a.div(h||(h=Object(T.a)(["\n  flex: 1;\n  height: 78vh;\n  border-left: solid 3px #f0f1f1;\n"]))),Ee=k.a.div(m||(m=Object(T.a)(["\n  display: flex;\n  padding: 32px;\n  border-bottom: solid #f0f1f1 2px;\n  justify-content: space-between;\n  align-items: center;\n  & > .add {\n    background-color: white;\n    border-radius: 50%;\n    border: 2px solid #f0f1f1;\n    font-size: 20px;\n    color: gray;\n    outline: none;\n    cursor: pointer;\n  }\n"]))),Ie=k.a.div(g||(g=Object(T.a)(['\n  display: flex;\n  align-items: flex-end;\n  font-family: "SCDream_bold";\n  color: #e3535a;\n  & > .day {\n    font-size: 39.5px;\n  }\n  & > .week {\n    font-size: 23px;\n    margin-left: 10px;\n  }\n']))),Pe=k.a.div(v||(v=Object(T.a)(["\n  overflow-y: scroll;\n"]))),Je=function(){var e=Object(M.c)((function(e){return e.calendar.selectedDate})),n=Object(M.c)((function(e){return e.todo})).filter((function(n){return Object(_.a)(n.dateTime,e)})),t=Object(M.b)(),i=Object(w.useCallback)((function(){t(te())}),[t]);return Object(G.jsxs)(Ae,{children:[Object(G.jsxs)(Ee,{children:[Object(G.jsxs)(Ie,{children:[Object(G.jsxs)("span",{className:"day",children:[Ce[Object(L.a)(e)],", "]}),Object(G.jsx)("span",{className:"week",children:Ne[Object(we.a)(e)-1]})]}),Object(G.jsx)("button",{className:"add",onClick:i,children:"+"})]}),Object(G.jsx)(Pe,{children:n.map((function(e){return Object(G.jsx)(_e,{id:e.id,text:e.text,deadline:e.deadline,done:e.done,dateTime:e.dateTime},e.id)}))})]})},ze=k.a.div(y||(y=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  margin: 0px 50px;\n  border-radius: 40px 0px 40px 40px;\n  border: none;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);\n  min-width: 850px;\n  width: calc(100vw - 120px);\n"]))),Fe=function(){var e=Object(M.c)((function(e){return e.modal.addModalOn}));return Object(G.jsxs)(ze,{children:[Object(G.jsx)(Q,{}),Object(G.jsx)(Je,{}),e&&Object(G.jsx)(ye,{})]})};var Ye=function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Fe,{})})},Le=t(18),Re=Object(Le.b)({calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case P:return Object(A.a)(Object(A.a)({},e),{},{visibleDate:Object(E.a)(e.visibleDate,{months:1})});case J:return{visibleDate:new Date,selectedDate:new Date};case z:return Object(A.a)(Object(A.a)({},e),{},{visibleDate:Object(I.a)(e.visibleDate,{months:1})});case F:return{visibleDate:new Date(n.id),selectedDate:new Date(n.id)};default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $:return Object(A.a)(Object(A.a)({},e),{},{addModalOn:!e.addModalOn});case ee:return{addModalOn:!e.addModalOn,todo:{id:n.id,dateTime:n.dateTime,text:n.text,deadline:n.deadline}};case ne:return Object(A.a)(Object(A.a)({},e),{},{todo:ae.todo});default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ue:return re(Object(ce.a)(),n.dateTime,n.text,n.deadline),e.concat({id:Object(ce.a)(),dateTime:n.dateTime,text:n.text,deadline:n.deadline,done:!1});case je:return le(n.id),e.filter((function(e){return e.id!==n.id}));case Oe:return oe(n.id,n.text,n.deadline),e.map((function(e){return e.id===n.id?Object(A.a)(Object(A.a)({},e),{},{text:n.text,deadline:n.deadline}):e}));case xe:return de(n.id),e.map((function(e){return e.id===n.id?Object(A.a)(Object(A.a)({},e),{},{done:!e.done}):e}));default:return e}}}),Ge=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Xe=Object(Le.c)(Re,Ge);S.a.render(Object(G.jsx)(M.a,{store:Xe,children:Object(G.jsx)(Ye,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.9575674b.chunk.js.map
(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),l=t(4),o=t(2),i=t(3),m=t.n(i),s="https://salty-river-40592.herokuapp.com/api/persons",d=function(){return m.a.get(s)},f=function(e){return m.a.post(s,e)},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete(s+"/"+e)},p=function(e){return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:e.value,onChange:e.handleChange}))},v=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.nameValue,onChange:e.handleNameUpdate,required:!0})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.numberValue,onChange:e.handlePhoneUpdate,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){return r.a.createElement("div",null,e.filter.map((function(n){return r.a.createElement("div",{key:n.name},r.a.createElement("span",null,n.name," ",n.number),r.a.createElement("button",{onClick:function(){return e.handleDelete(n)}},"delete"))})))},g=(t(37),function(e){return e.errorMessage?r.a.createElement("div",{className:"error"},e.errorMessage):e.successMessage?r.a.createElement("div",{className:"success"},e.successMessage):null}),O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1];Object(a.useEffect)((function(){d().then((function(e){console.log("promise fulfilled"),u(e.data)}))}),[]);var c=Object(a.useState)(""),i=Object(o.a)(c,2),m=i[0],s=i[1],O=Object(a.useState)(""),w=Object(o.a)(O,2),j=w[0],S=w[1],C=Object(a.useState)(""),k=Object(o.a)(C,2),N=k[0],y=k[1],M=Object(a.useState)(""),D=Object(o.a)(M,2),P=D[0],U=D[1],V=Object(a.useState)(""),x=Object(o.a)(V,2),T=x[0],q=x[1],J=N?t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(N.toLowerCase())})):t;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{errorMessage:T,successMessage:P}),r.a.createElement(p,{value:N,handleChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(v,{handleSubmit:function(e){if(e.preventDefault(),-1===t.map((function(e){return e.name})).indexOf(m)){var n={name:m,number:j};f(n).then((function(){u(t.concat(n)),U("Number was added"),setTimeout((function(){U(null)}),5e3),s(""),S("")}))}else if(window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one ?"))){var a=t.find((function(e){return e.name===m})),r=Object(l.a)(Object(l.a)({},a),{},{number:j});h(a.id,r).then((function(){u(t.map((function(e){return e.id!==a.id?e:r}))),U("Number was updated"),setTimeout((function(){U(null)}),5e3),s(""),S("")})).catch((function(e){q("Person ".concat(a.name," was already removed from server")),setTimeout((function(){q(null)}),5e3),u(t.filter((function(e){return e.id!==a.id})))}))}},nameValue:m,numberValue:j,handleNameUpdate:function(e){s(e.target.value)},handlePhoneUpdate:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{filter:J,handleDelete:function(e){window.confirm("Delete ".concat(e.name," ?"))&&b(e.id).then((function(){u(t.filter((function(n){return n.id!==e.id})))}))}}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.31000b4c.chunk.js.map
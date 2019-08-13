(window["webpackJsonpsignin-react-app"]=window["webpackJsonpsignin-react-app"]||[]).push([[0],{129:function(e,n,t){e.exports=t(269)},269:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(116),o=t.n(i),u=t(5),c=t(45),s=t(11),l=t(117),d=t(27);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach(function(n){Object(l.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var p=a.a.createContext(),b=function(e){var n=e.children,t=a.a.useReducer(g,{user:null,isAuthenticated:!1}),r=Object(d.a)(t,2),i=r[0],o=r[1];return a.a.createElement(p.Provider,{value:f({},i,{signin:function(e){return o({type:h,payload:{user:e}})},signout:function(){return o({type:v})}})},n)},g=function(e,n){var t=n.type,r=n.payload;switch(t){case h:return f({},e,{user:r.user,isAuthenticated:!0});case v:return f({},e,{user:null,isAuthenticated:!1});default:return e}},h="SIGNIN",v="SIGNOUT",w=t(4);function E(){var e=Object(u.a)(["\n  height: 3rem;\n  margin: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 1rem 0;\n  border-bottom: 2px #000083 solid;\n\n  span {\n    font-size: 1.5rem;\n  }\n"]);return E=function(){return e},e}var y=function(){var e=a.a.useContext(p),n=e.signout,t=e.user,r=e.isAuthenticated;return a.a.createElement(j,null,a.a.createElement("span",null,r?"Hello ".concat(t.name,"!"):"Please sign-in"),r?a.a.createElement(x,{signout:n}):a.a.createElement(O,null))},x=function(e){var n=e.signout;return a.a.createElement("button",{onClick:n},"Sign-out")},O=function(){return a.a.createElement(c.b,{to:"/signin"},a.a.createElement("button",null,"Sign-in"))},j=w.default.header(E());function P(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4rem;\n\n  h1 {\n    text-align: center;\n    font-size: 4rem;\n    font-weight: 600;\n  }\n"]);return P=function(){return e},e}var k=function(){var e=a.a.useContext(p),n=e.user,t=e.isAuthenticated;return a.a.createElement(S,null,a.a.createElement("h1",null,t?"Now you can use the app ".concat(n.name,"!"):"In order to use the app, you have to sign-in!"))},S=w.default.div(P()),z=t(126),N=a.a.createContext(),A=function(e){var n=e.children,t=a.a.useState([]),r=Object(d.a)(t,2),i=r[0],o=r[1],u=function(e){return o(function(n){return n.filter(function(n){return n.id!==e})})};return a.a.createElement(N.Provider,{value:{state:i,showNotification:function(e){o(function(n){return[].concat(Object(z.a)(n),[e])}),setTimeout(function(){return u(e.id)},3e3)},createNotification:function(e,n){return{id:Date.now(),message:e,status:n}}}},n)};function C(){var e=Object(u.a)(["\n  height: 2.5rem;\n  font-size: 1.5rem;\n  padding: 0 2rem;\n  display: flex;\n  align-items: center;\n  border: "," solid\n    1px;\n  color: ",";\n  background-color: ",";\n"]);return C=function(){return e},e}function D(){var e=Object(u.a)(["\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n"]);return D=function(){return e},e}var I=function(){var e=a.a.useContext(N).state;return 0===e.length?null:a.a.createElement(T,null,e.map(function(e){return a.a.createElement(q,{key:e.id,status:e.status,className:"notification"},e.message)}))},T=w.default.div(D()),q=w.default.div(C(),function(e){return"success"===e.status?"#155724":"#721c24"},function(e){return"success"===e.status?"#155724":"#721c24"},function(e){return"success"===e.status?"#d4edda":"#f8d7da"}),J=t(73),F=t.n(J),G=t(121),L=t(29),R=t(124),Z=t.n(R),B=t(49),H=function(e){var n=e.email,t=e.password;return new Promise(function(e,r){"test@test.pl"===n&&"Password1"===t?setTimeout(function(){return e({name:"John Doe",token:"Sample JWT Token"})},2e3):setTimeout(function(){return r(new Error("Authentication failed"))},2e3)})};function U(){var e=Object(u.a)(["\n  padding: 0.2rem;\n  height: 5rem;\n\n  label {\n    font-size: 1rem;\n  }\n\n  span {\n    margin-top: 5px;\n    font-size: 0.6rem;\n    color: red;\n  }\n\n  input {\n    width: 100%;\n    height: 2.5rem;\n    border: none;\n    border-bottom: 2px "," solid;\n    background-color: #e9edf6;\n    font-size: 1.5rem;\n  }\n\n  @media screen and (min-width: 900px) {\n    span {\n      font-size: 1rem;\n    }\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 1rem;\n  padding: 1rem;\n  border: 2px #000083 solid;\n  border-radius: 1rem;\n\n  @media screen and (min-width: 900px) {\n    margin: 3rem;\n    padding: 3rem;\n  }\n\n  & > * {\n    margin-bottom: 1rem;\n  }\n"]);return V=function(){return e},e}var W=function(){var e=a.a.useContext(p).signin,n=a.a.useContext(N),t=n.showNotification,r=n.createNotification,i=Z()().history,o=a.a.useState(!1),u=Object(d.a)(o,2),c=u[0],s=u[1],l=function(){var n=Object(G.a)(F.a.mark(function n(a){var o;return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,H(a);case 4:o=n.sent,e(o),t(r("Login successful!","success")),i.push("/"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),t(r("Invalid email or password!","error")),s(!1);case 14:case"end":return n.stop()}},n,null,[[0,10]])}));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(L.c,{initialErrors:M,initialValues:M,onSubmit:l,validationSchema:Q},a.a.createElement(L.b,null,a.a.createElement($,{loading:c}))))},$=function(e){var n=e.loading,t=Object(L.d)(),r=t.errors,i=t.touched;return a.a.createElement(X,null,a.a.createElement(Y,{error:r.email&&i.email},a.a.createElement("label",{htmlFor:"email"},"Email"),a.a.createElement(L.a,{name:"email",id:"email",disabled:n}),r.email&&i.email?a.a.createElement("span",{className:""},r.email):null),a.a.createElement(Y,{error:r.password&&i.password},a.a.createElement("label",{htmlFor:"password"},"Password"),a.a.createElement(L.a,{name:"password",id:"password",type:"password",disabled:n}),r.password&&i.password?a.a.createElement("span",null,r.password):null),a.a.createElement(K,{loading:n}))},K=function(e){var n=e.loading;return a.a.createElement("button",{type:"submit",disabled:n},n?"Loading...":"Submit")},M={email:"",password:""},Q=B.object().shape({email:B.string().required("Email is required!").email("Email is not valid!"),password:B.string().required("Password is required!").min(6,"Password has to be longer then 6 characters!").matches(/^[a-zA-Z0-9]+$/,"Password can only contain Latin letters and numbers!").matches(/(?=.*?[0-9])(?=.*?[A-Z])(?=.*[a-z])/,"Password has to contain one uppercase, one lowercase and one digit!")}),X=w.default.div(V()),Y=w.default.div(U(),function(e){return e.error?"red":"#000083"}),_=t(125);function ee(){var e=Object(u.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n  ","\n\n  body {\n    background-color: #e9edf6;\n    font-family: sans-serif;\n    font-size: 10px;\n    color: #000083;\n\n    button {\n      cursor: pointer;\n      text-decoration: none;\n      height: 2.5rem;\n      padding: 0 2rem;\n      font-size: 1.5rem;\n      background: white;\n      border: 2px #000083 solid;\n      \n    }\n  }\n"]);return ne=function(){return e},e}var te=Object(w.createGlobalStyle)(ne(),_.normalize),re=w.default.div(ee());o.a.render(a.a.createElement(function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(te,null),a.a.createElement(re,null,a.a.createElement(A,null,a.a.createElement(b,null,a.a.createElement(c.a,null,a.a.createElement(y,null),a.a.createElement(I,null),a.a.createElement(s.Route,{exact:!0,path:"/",component:k}),a.a.createElement(s.Route,{path:"/signin",component:W}))))))},null),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.748d09d7.chunk.js.map
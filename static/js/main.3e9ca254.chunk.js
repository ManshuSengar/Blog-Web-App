(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{54:function(t,e,c){},64:function(t,e,c){"use strict";c.r(e);var n=c(11),s=c(46),a=c.n(s),o=c(14),i=(c(54),c(15)),b=c(33);c(56),c(65);b.a.initializeApp({apiKey:"AIzaSyATw6Hp8vwndnZBu3b5rFj3s6aM_k2ecBs",authDomain:"blogwebsite-991fd.firebaseapp.com",projectId:"blogwebsite-991fd",storageBucket:"blogwebsite-991fd.appspot.com",messagingSenderId:"625517080866",appId:"1:625517080866:web:aa9e86905f452a68f0b57b"});var j=b.a.firestore(),r=b.a.auth(),l=new b.a.auth.GoogleAuthProvider,d=function(){return r.signInWithPopup(l)},u=(b.a,c(12));var p=function(t){var e=Object(n.useState)(null),c=Object(o.a)(e,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){r.onAuthStateChanged((function(t){null==s&&a(t)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[s?Object(u.jsx)(i.a,{to:"/"}):"",Object(u.jsx)("div",{className:"loginBtn",children:Object(u.jsx)("button",{onClick:d,type:"submit",children:"Login With Google"})})]})},h=c(27);var O=function(t){var e=Object(n.useState)(0),c=Object(o.a)(e,2),s=(c[0],c[1],Object(n.useState)()),a=Object(o.a)(s,2),i=a[0],b=a[1];return Object(n.useEffect)((function(){j.collection("posts").onSnapshot((function(e){var c=[];e.docs.map((function(t){c.push({data:t.data(),id:t.id})})),t.setTextApp(c)}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"posts",children:[Object(u.jsx)("textarea",{className:"textarea",value:i,onChange:function(t){b(t.currentTarget.value)}}),Object(u.jsx)("div",{className:"postbtn",children:Object(u.jsx)("button",{type:"submit",onClick:function(t){j.collection("posts").add({Body:i}),b("")},children:"Post"})}),Object(u.jsx)("div",{className:"home-btn",children:Object(u.jsxs)(h.b,{to:"/",children:[" ",Object(u.jsx)("button",{children:"Home"})," "]})})]})})};var x=function(t){return Object(u.jsxs)("div",{className:"home-conatiner",children:[Object(u.jsxs)("div",{className:"homebtn",children:[Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{type:"button",children:"Home"})}),Object(u.jsx)(h.b,{to:"/login",children:Object(u.jsx)("button",{onClick:function(){r.signOut()},type:"button",children:"Logout"})}),Object(u.jsx)(h.b,{to:"/post",children:Object(u.jsx)("button",{type:"button",children:"Posts"})})]}),Object(u.jsx)("div",{className:"postdiv",children:t.textApp.map((function(t){return Object(u.jsx)("div",{className:"post-block",children:Object(u.jsx)("p",{children:t.data.Body})})}))})]})};var f=function(t){var e=Object(n.useState)([]),c=Object(o.a)(e,2),s=c[0],a=c[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"/login",children:Object(u.jsx)(p,{})}),Object(u.jsx)(i.b,{path:"/post",children:Object(u.jsx)(O,{setTextApp:a})}),Object(u.jsx)(i.b,{path:"/",children:Object(u.jsx)(x,{textApp:s})})]})})})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.3e9ca254.chunk.js.map
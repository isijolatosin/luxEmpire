"use strict";(self.webpackChunknetlify_functions=self.webpackChunknetlify_functions||[]).push([[476],{6151:function(e,t,n){n.d(t,{ZP:function(){return s}});var r={_origin:"https://api.emailjs.com"},i=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var o=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(i,a){var s=new XMLHttpRequest;s.addEventListener("load",(function(e){var t=e.target,n=new o(t);200===n.status||"OK"===n.text?i(n):a(n)})),s.addEventListener("error",(function(e){var t=e.target;a(new o(t))})),s.open("POST",r._origin+e,!0),Object.keys(n).forEach((function(e){s.setRequestHeader(e,n[e])})),s.send(t)}))},s={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";r._userID=e,r._origin=t},send:function(e,t,n,o){var s=o||r._userID;i(s,e,t);var u={lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:n};return a("/api/v1.0/email/send",JSON.stringify(u),{"Content-type":"application/json"})},sendForm:function(e,t,n,o){var s=o||r._userID,u=function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);i(s,e,t);var c=new FormData(u);return c.append("lib_version","3.2.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",s),a("/api/v1.0/email/send-form",c)}}},5390:function(e,t,n){n.d(t,{ww:function(){return r},rf:function(){return i},Ae:function(){return o},Tu:function(){return a},Ps:function(){return s},nb:function(){return u},zt:function(){return c},$I:function(){return l},wA:function(){return d},bM:function(){return f},UP:function(){return m}});var r="isijolatosin2210@gmail.com",i="bandgluxuryinternal@gmail.com",o="bandgluxuryinternal@gmail.com",a={canada:6.99,usa:20.99,london:20.99},s="canada",u="users",c="bookings",l=200,d="cad",f=.13,m="https://www.bandgluxuryempire.com"},9658:function(e,t,n){n.r(t);var r=n(5444),i=n(7294),o=n(1681),a=n(2101),s=n(8767),u=n(3974),c=n(6562),l=n(6151),d=n(5390),f=n(3218);t.default=function(){var e=(0,o.I0)(),t=(0,o.v9)(a.D1),n=(0,i.useContext)(c.V).user,m=localStorage.getItem("user-name"),p=localStorage.getItem("address"),h=localStorage.getItem("user-name"),g={name:m,message:"Thank you for your patronage. Your order has been processed.",client:null==n?void 0:n.email};setTimeout((function(){(null==n?void 0:n.email)&&0!==t.length&&t.map((function(e){u.db.collection("users").doc((null==n?void 0:n.email)+"/").collection("shoppings").add({id:e.id,title:e.title,description:e.description,quantity:e.quantity,price:e.price,address:p,customer:h}).then((function(){console.log("SUCCESSFULL")})).catch((function(e){return console.log("Error"+e.message)})),u.db.collection("admin").doc(d.AUTHORIZED_ID+"/").collection("all-purchased").add({id:e.id,title:e.title,description:e.description,quantity:e.quantity,price:e.price,address:p,customer:h}).then((function(){console.log("SUCCESSFULL")})).catch((function(e){return console.log("Error"+e.message)}))})),e((0,a.QR)())}),5e3),setTimeout((function(){v()}),1e4);var v=function(){l.ZP.send("service_gtimr9g","template_7pjokln",g,"user_trCtSiPOmjsEtAADPhq71").then((function(e){})).catch((function(e){return console.log(e)}))};return(0,f.tZ)(s.Z,null,(0,f.tZ)("div",{className:"success-page"},(0,f.tZ)("h1",null,"Thank you for your purchase"),(0,f.tZ)("div",null,(0,f.tZ)("span",null,"We are currently processing your order and will send you a confirmation email shortly")),(0,f.tZ)(r.rU,{to:"/"},(0,f.tZ)("button",null,"Continue Shopping"))))}}}]);
//# sourceMappingURL=component---src-pages-success-js-959613813d7cbfb1b56e.js.map
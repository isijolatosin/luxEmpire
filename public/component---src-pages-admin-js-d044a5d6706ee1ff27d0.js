"use strict";(self.webpackChunknetlify_functions=self.webpackChunknetlify_functions||[]).push([[181],{5390:function(t,n,e){e.d(n,{P9:function(){return a},Tu:function(){return i},Ps:function(){return l},nb:function(){return r},zt:function(){return o},$I:function(){return u},wA:function(){return d},UP:function(){return s}});var a="isijolatosin2210@gmail.com",i={canada:50,usa:100,london:100},l="canada",r="users",o="bookings",u=200,d="cad",s="https://www.bandgluxuryempire.com"},9849:function(t,n,e){e.r(n);var a=e(7294),i=e(8767),l=e(3974),r=e(6562),o=e(2775),u=e(5390),d=e(5444),s=e(3218);function c(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var a=0;return function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}n.default=function(){var t,n,e,p,f,v,m=(0,a.useContext)(r.V).user,h=a.useState(!0),b=h[0],g=h[1],Z=a.useState(!1),y=Z[0],k=Z[1],N=a.useState(!1),S=N[0],w=N[1],A=a.useState(""),H=A[0],C=A[1],P=a.useState({shippingHeader:[],shippingData:[]}),j=P[0],O=P[1],D=function(t){var n=[];if(t)for(var e=0;e<t.length;e++){var a;n.push(null==Object?void 0:Object.keys((null==t||null===(a=t[e])||void 0===a?void 0:a.data)||[]))}return n.map((function(t){return t.sort()})),n};a.useEffect((function(){m&&l.db.collection("admin").doc(u.P9+"/").collection("all-purchased").orderBy("title","asc").onSnapshot((function(t){var n=t.docs.map((function(t){return{data:t.data()}}));if(n){for(var e,a=[],i=c(n);!(e=i()).done;){var l=e.value;a.push({address:null==l?void 0:l.data.address,customer:null==l?void 0:l.data.customer,description:null==l?void 0:l.data.description,id:null==l?void 0:l.data.id,price:"CA$ "+(null==l?void 0:l.data.price),quantity:null==l?void 0:l.data.quantity,title:null==l?void 0:l.data.title})}O({shippingHeader:D(n),shippingData:a})}}))}),[m]),b&&setTimeout((function(){g(!1)}),5e3);return(0,s.tZ)("div",null,(0,s.tZ)(i.Z,null,(null==m?void 0:m.email)===u.P9?(0,s.tZ)("main",{className:"history-page"},0===(null==j||null===(t=j.shippingHeader)||void 0===t?void 0:t.length)&&0===(null==j||null===(n=j.shippingHeader)||void 0===n?void 0:n.length)?b?(0,s.tZ)("span",null,"Loading..."):(0,s.tZ)("span",null,"Data not Found"):(0,s.tZ)(a.Fragment,null,(0,s.tZ)("div",{className:"top"},0!==(null==j||null===(e=j.shippingHeader)||void 0===e?void 0:e.length)&&(0,s.tZ)("p",null,"shipping Information"),(0,s.tZ)("table",null,(0,s.tZ)("thead",null,(0,s.tZ)("tr",{className:"table-head-row"},null==j||null===(p=j.shippingHeader)||void 0===p||null===(f=p[0])||void 0===f?void 0:f.map((function(t,n){return(0,s.tZ)("th",{key:n,className:"table-head-item"},t," ","appointment"===t||"reservation"===t?" - date":"")})))),(0,s.tZ)("tbody",null,null==j||null===(v=j.shippingData)||void 0===v?void 0:v.map((function(t){var n;return(0,s.tZ)("tr",{className:"table-item-row",key:t.id},null==Object||null===(n=Object.values(t))||void 0===n?void 0:n.map((function(n,e){return(0,s.tZ)("td",{className:n.length>=200?"table-items align-left":"table-items",key:e,onClick:function(){return n=t.id,C(n),void k(!0);var n}},"string"==typeof n&&n.length>=200?S&&H===t.id?n:n.substring(0,70)+"...":n,n.length>=200&&(0,s.tZ)(a.Fragment,null,(0,s.tZ)("span",{onClick:function(){return n=t.id,C(n),void w(!S);var n}},S&&H===t.id?(0,s.tZ)(a.Fragment,null,(0,s.tZ)("span",null,"Read Less")," ",(0,s.tZ)(o.DJ5,null)):(0,s.tZ)(a.Fragment,null,(0,s.tZ)("span",null,"Read More")," ",(0,s.tZ)(o.x3N,null)))))})),y&&H===t.id&&(0,s.tZ)("div",{className:"been-shipped"},(0,s.tZ)("span",null,"Has this product been shipped ? ",(0,s.tZ)("br",null),(0,s.tZ)("span",{className:"been-shipped-textsm"},"Please verify before clicking on yes")),(0,s.tZ)("div",null,(0,s.tZ)("button",{onClick:function(){return n=t.id,void l.db.collection("admin").doc(u.P9+"/").collection("all-purchased").onSnapshot((function(t){t.docs.map((function(t){return t.data().id===n&&l.db.collection("admin").doc(u.P9+"/").collection("all-purchased").doc(t.id).delete()}))}));var n}},"Yes"),(0,s.tZ)("button",{onClick:function(){return k(!1)}},"No"))))}))))))):(0,s.tZ)("div",{className:"history-page"},(0,s.tZ)("p",{className:"danger"},"UNAUTHORIZED PATH!"),(0,s.tZ)(d.rU,{to:"/",className:"btn block total_btn"},"Back to Home"))))}}}]);
//# sourceMappingURL=component---src-pages-admin-js-d044a5d6706ee1ff27d0.js.map
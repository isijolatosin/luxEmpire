"use strict";(self.webpackChunknetlify_functions=self.webpackChunknetlify_functions||[]).push([[510],{5390:function(t,n,e){e.d(n,{ww:function(){return a},rf:function(){return u},Ae:function(){return i},Tu:function(){return r},Ps:function(){return l},nb:function(){return s},zt:function(){return o},$I:function(){return c},wA:function(){return p},bM:function(){return m},UP:function(){return d}});var a="isijolatosin2210@gmail.com",u="bandgluxuryinternal@gmail.com",i="bandgluxuryinternal@gmail.com",r={canada:50,usa:100,london:100},l="canada",s="users",o="bookings",c=200,p="cad",m=.13,d="https://www.bandgluxuryempire.com"},8880:function(t,n,e){e.d(n,{u:function(){return l},Q:function(){return o}});var a=e(5861),u=e(7757),i=e.n(u),r=e(5390),l=function(t,n){return n.find((function(n){return n.id===t.id}))},s=r.UP;function o(t,n){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)(i().mark((function t(n,e){var a,u,r,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object.assign({method:"POST",body:null},e),u=a.method,r=a.body,t.next=3,fetch(s+"/"+n,Object.assign({method:u},r&&{body:JSON.stringify(r)},{headers:{"Content-Type":"application/json"}}));case 3:return l=t.sent,t.abrupt("return",l.json());case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},867:function(t,n,e){e.r(n),e.d(n,{default:function(){return N}});var a=e(7294),u=e(1681),i=e(8767),r=e(2359),l=e(2775),s=e(1852),o=e(782),c=e(2101),p=e(3218),m=function(t){var n=t.product,e=n.title,i=n.image,m=n.price,d=n.quantity,v=n.description,Z=n.id,y=a.useState(!1),f=y[0],h=y[1],g=(0,u.I0)(),b=(0,r.d)(i),C={title:e,id:Z,image:i,price:m,description:v};return(0,p.tZ)("div",{className:"cart-items-container"},(0,p.tZ)("div",{className:"cart-image"},(0,p.tZ)(r.G,{image:b,alt:e})),(0,p.tZ)("div",{className:"cart-item-info"},(0,p.tZ)("div",null,(0,p.tZ)("h4",null,e)),(0,p.tZ)("div",{className:"price-quantity"},(0,p.tZ)("span",null,"Price: CA$ "+m),(0,p.tZ)("span",null,"Quantity: "+d)),(0,p.tZ)("div",{className:"description-readmore"},!f&&v.length>=100?(0,p.tZ)("span",null,v.substring(0,50),"..."):(0,p.tZ)("span",null,v),v.length>=100&&(0,p.tZ)("span",{onClick:function(){return h(!f)},className:"read_more"},f?(0,p.tZ)(a.Fragment,null,(0,p.tZ)("span",null,"Read Less")," ",(0,p.tZ)(l.DJ5,null)):(0,p.tZ)(a.Fragment,null,(0,p.tZ)("span",null,"Read More")," ",(0,p.tZ)(l.x3N,null)))),(0,p.tZ)("div",{className:"cart-item-icons"},(0,p.tZ)("div",{className:"cart-item-icon",onClick:function(){g((0,c.NB)(C))}},(0,p.tZ)(l.tX2,null),(0,p.tZ)("span",null,"Add")),1===d&&(0,p.tZ)("div",{className:"cart-item-icon",onClick:function(){g((0,c.B8)(C))}},(0,p.tZ)(o.Fe4,null),(0,p.tZ)("span",null,"Delete")),d>1&&(0,p.tZ)("div",{className:"cart-item-icon",onClick:function(){g((0,c.UI)(C))}},(0,p.tZ)(s._0z,null),(0,p.tZ)("span",null,"Remove")))))},d=e(5861),v=e(7757),Z=e.n(v),y=e(5360),f=e(8880),h=e(6562),g=e(5390),b=function(){var t=(0,y.useStripe)(),n=(0,u.v9)(c.D1),e=a.useState(""),i=e[0],r=e[1],l=a.useState(null),o=l[0],m=l[1],v=a.useState(!1),b=v[0],C=v[1],N=a.useState({street:"",city:"",province:"",postalcode:"",country:""}),_=N[0],x=N[1],k=a.useState({country:"",cost:""}),S=k[0],w=k[1],A=a.useState(!1),T=A[0],I=A[1],P=(0,u.I0)(),D=(0,a.useContext)(h.V).user,R=function(t){var n;x(Object.assign({},_,((n={})[t.target.name]=t.target.value,n)))},j=(0,u.v9)(c.mS),E=function(){var e=(0,d.Z)(Z().mark((function e(a){var u,r,l,s,o,c,p;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!b){e.next=13;break}return r=n.map((function(t){var n=t.price*g.bM,e=t.price+n,a=t.description.substring(0,200)+"...";return{quantity:t.quantity,price_data:{currency:g.wA,unit_amount:100*e,product_data:{name:t.title+" - (Including Tax)",description:a}}}})),l=j>=g.$I&&S.country===g.Ps?[{shipping_rate_data:{type:"fixed_amount",fixed_amount:{amount:0,currency:g.wA},display_name:"Free shipping",delivery_estimate:{minimum:{unit:"business_day",value:5},maximum:{unit:"business_day",value:7}}}}]:[{shipping_rate_data:{type:"fixed_amount",fixed_amount:{amount:100*S.cost,currency:g.wA},display_name:"Paid Delivery",delivery_estimate:{minimum:{unit:"business_day",value:5},maximum:{unit:"business_day",value:7}}}}],e.next=6,(0,f.Q)("create-checkout-session",{body:{line_items:r,shipping_options:l,customer_email:D?(null==D?void 0:D.email)||(null==D||null===(u=D.user)||void 0===u?void 0:u.email):i}});case 6:return s=e.sent,o=s.sessionId,e.next=10,null==t?void 0:t.redirectToCheckout({sessionId:o});case 10:c=e.sent,(p=c.error)&&m(p.message);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,p.tZ)("form",{onSubmit:E},(0,p.tZ)("div",{className:"shipping-add-header"},(0,p.tZ)("div",{className:"ship-head"},(0,p.tZ)("p",null,"Shipping - Cost")),(0,p.tZ)("div",{className:"ship-countries"},(0,p.tZ)("ul",null,(0,p.tZ)("li",null,"canada - CA$ ",g.Tu.canada),(0,p.tZ)("li",null,"usa - CA$ ",g.Tu.usa),(0,p.tZ)("li",null,"london - CA$ ",g.Tu.london)))),(0,p.tZ)("div",{className:"inputs"},!D&&(0,p.tZ)("input",{type:"email",onChange:function(t){return r(t.target.value)},placeholder:"Email",value:i,className:T&&!i?"user-email-input input-error":"user-email-input"}),(0,p.tZ)("input",{name:"street",type:"text",value:_.street,onChange:R,placeholder:"Address",className:T&&!_.street?"user-email-input input-error":"user-email-input"}),(0,p.tZ)("input",{name:"city",type:"text",value:_.city,onChange:R,placeholder:"City",className:T&&!_.city?"user-email-input input-error":"user-email-input"}),(0,p.tZ)("input",{name:"province",type:"text",value:_.province,onChange:R,placeholder:"Province",className:T&&!_.province?"user-email-input input-error":"user-email-input"}),(0,p.tZ)("input",{name:"postalcode",type:"text",value:_.postalcode,onChange:R,placeholder:"Postal Code",className:T&&!_.postalcode?"user-email-input input-error":"user-email-input"}),(0,p.tZ)("input",{name:"country",type:"text",value:_.country,onChange:R,placeholder:"Country",className:T&&!_.country?"user-email-input input-error":"user-email-input"}),(0,p.tZ)("span",{onClick:function(){var t=_.street+", "+_.city+". "+_.province+". "+_.postalcode+". "+_.country;D&&i||I(!0),(D&&null!=_&&_.street&&null!=_&&_.city&&null!=_&&_.province&&null!=_&&_.postalcode&&null!=_&&_.country||i&&null!=_&&_.street&&null!=_&&_.city&&null!=_&&_.province&&null!=_&&_.postalcode&&null!=_&&_.country)&&(localStorage.setItem("address",t),C(!0),x({street:"",city:"",province:"",postalcode:"",country:""}),I(!1)),Object.keys(g.Tu).filter((function(t){return t.toLowerCase()===_.country.toLowerCase()&&w({country:t,cost:g.Tu[t]})}))},className:"btn block subt-add"},"SUBMIT ADDRESS")),"com"===i.substr(i.length-3)&&(0,p.tZ)("div",{className:"email-verify"},(0,p.tZ)("span",null,"Please verify you have the correct email and address")),T&&i.length<1&&(0,p.tZ)("div",{className:"user-email-input-error"},(0,p.tZ)("span",null,"Hey! You have missing credentials!")),(0,p.tZ)("div",{className:"total-button"},(0,p.tZ)("button",{onClick:function(){return!b&&I(!0)},className:"btn total-btn",type:"submit"},"PROCEED |"," ",(0,p.tZ)("span",null,(0,p.tZ)(s.EIo,null))),(0,p.tZ)("span",{onClick:function(){return P((0,c.QR)())},className:"btn block total_btn"},"CLEAR CART")),o&&(0,p.tZ)("div",{className:"checkout-error"},(0,p.tZ)("span",null,o)))},C=function(t){var n=t.itemCount,e=t.total;return(0,p.tZ)("div",null,(0,p.tZ)("div",{className:"total-top"},(0,p.tZ)("p",null,"Total Items: ",n),(0,p.tZ)("span",null,"Amount to Pay: CA$ "+e)),(0,p.tZ)(b,null))},N=function(){var t=(0,u.v9)(c.uR),n=(0,u.v9)(c.mS),e=(0,u.v9)(c.D1);return(0,p.tZ)(i.Z,null,(0,p.tZ)("div",{className:"cart"},(0,p.tZ)("h2",null,"Cart"),0===e.length?(0,p.tZ)("div",{className:"empty"},"Your Cart is Empty"):(0,p.tZ)("div",{className:"cart-container"},(0,p.tZ)("div",null,(0,p.tZ)("div",{className:"cart-left"},e.map((function(t){return(0,p.tZ)(m,{product:t,key:t.id})})))),(0,p.tZ)("div",{className:"total"},(0,p.tZ)(C,{itemCount:t,total:n})))))}}}]);
//# sourceMappingURL=component---src-pages-checkout-js-ace4c8d5e976c52f53b4.js.map
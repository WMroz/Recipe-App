(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(5),a=c.n(i),r=(c(12),c(4)),o=c.n(r),j=c(6),l=c(2),u=(c(14),c(7)),p=c.n(u),b=c(0),d=function(e){e.key;var t=e.title,c=e.calories,n=e.image,s=e.ingredients;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:n,alt:""}),Object(b.jsxs)("div",{className:p.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:s.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsxs)("p",{children:["Calories: ",Object(b.jsx)("b",{children:c.toFixed(0)})]})]})]})},h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(l.a)(i,2),r=a[0],u=a[1],p=Object(n.useState)(""),h=Object(l.a)(p,2),f=h[0],x=h[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("fe567995","&app_key=").concat("301c1706ccd468c6212d72dc479b55e4"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"head",children:[Object(b.jsx)("div",{className:"text-label",children:Object(b.jsx)("h1",{children:"What dish do you facy today?"})}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(r),u("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:r,onChange:function(e){u(e.target.value)}}),Object(b.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]})]}),Object(b.jsxs)("div",{className:"recipes",children:[c.map((function(e){return Object(b.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)})),";"]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),f()},7:function(e,t,c){e.exports={recipe:"recipe_recipe__jD6ss"}}},[[16,1,2]]]);
//# sourceMappingURL=main.e94f5f9b.chunk.js.map
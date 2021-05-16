(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{100:function(t,e,a){},209:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(79),r=a.n(o),i=(a(97),a(22)),s=a.n(i),d=a(54),l=a(10),u=a(211),b=a(213),j=(a(99),a(100),a(1));function h(t){var e=Object(n.useState)(t.data.filter((function(t){return"THA"===t.iso_code}))),a=Object(l.a)(e,2),c=a[0];a[1];return console.log(c[0].data[c[0].data.length-1]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"card border-primary mb-3",children:Object(j.jsxs)("div",{className:"card-body text-primary",children:[Object(j.jsx)("h4",{className:"card-title",children:"\ud83c\uddf9\ud83c\udded Thailand Vaccination"}),Object(j.jsxs)("h1",{className:"card-text",children:[(c[0].data[c[0].data.length-1].total_vaccinations/t.covidWorld.THA.population*100).toFixed(2)," ","%"]})]})})})}var p=a(36);function g(t){var e=Object(n.useState)(t.data.filter((function(t){return"THA"===t.iso_code||"LAO"===t.iso_code||"KHM"===t.iso_code||"IDN"===t.iso_code||"MYS"===t.iso_code||"BRN"===t.iso_code||"SGP"===t.iso_code||"MMR"===t.iso_code||"VNM"===t.iso_code||"PHL"===t.iso_code}))),a=Object(l.a)(e,1)[0];console.log(t.covidWorld);var c=a.map((function(e){return{country:e.country,iso_code:e.iso_code,population:t.covidWorld[e.iso_code].population,percentage:null!=e.data[e.data.length-1].total_vaccinations?e.data[e.data.length-1].total_vaccinations/t.covidWorld[e.iso_code].population*100:e.data[e.data.length-2].total_vaccinations/t.covidWorld[e.iso_code].population*100}}));c.sort((function(t,e){return e.percentage-t.percentage})),console.log(c);var o={labels:c.map((function(t){return t.country})),datasets:[{label:"Percentage (%)",data:c.map((function(t){return t.percentage})),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1}]};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Bar Chart"}),Object(j.jsx)(p.a,{height:70,data:o,options:{plugins:{tooltip:{callbacks:{label:function(t){var e=t.dataset.label||"";return e+=t.parsed.y.toFixed(2),e}}}},scales:{y:{ticks:{callback:function(t,e,a){return"$"+t}}}}}})]})}var v=u.a.Header,f=u.a.Content,x=u.a.Footer;function O(){var t=Object(n.useState)(null),e=Object(l.a)(t,2),a=e[0],c=e[1],o=Object(n.useState)(null),r=Object(l.a)(o,2),i=r[0],p=r[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json").then((function(t){return t.json()})).then((function(t){return t.sort((function(t,e){return e.data[e.data.length-1].total_vaccinations-t.data[t.data.length-1].total_vaccinations})),t.filter((function(t){return 3===t.iso_code.length}))}));case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function e(){return(e=Object(d.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://covid.ourworldindata.org/data/owid-covid-data.json").then((function(t){return t.json()}));case 2:e=t.sent,p(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){e.apply(this,arguments)}()}),[]),a&&i?Object(j.jsxs)(u.a,{className:"layout",children:[Object(j.jsx)(v,{children:Object(j.jsx)("div",{className:"logo",children:"\ud83d\udc89\ud83e\udda0 SEA Covid-19 Vaccination Dashboard"})}),Object(j.jsxs)(f,{style:{padding:"20px"},children:[Object(j.jsx)("h1",{children:"Overview"}),Object(j.jsxs)("div",{className:"row",style:{marginTop:"20px"},children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)(h,{data:a,covidWorld:i})}),Object(j.jsx)("div",{className:"col"}),Object(j.jsx)("div",{className:"col"})]}),Object(j.jsx)("div",{className:"row",style:{marginTop:"20px"},children:Object(j.jsx)("div",{className:"col",style:{backgroundColor:"white",borderRadius:"10px",padding:"10px"},children:Object(j.jsx)(g,{data:a,covidWorld:i})})})]}),Object(j.jsx)(x,{style:{textAlign:"center"},children:"Ant Design \xa92021 Created by Ronnakorn Hompoa"})]}):Object(j.jsx)(b.a,{size:"large"})}var m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,215)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),o(t),r(t)}))};a(208);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()},97:function(t,e,a){}},[[209,1,2]]]);
//# sourceMappingURL=main.93438a13.chunk.js.map
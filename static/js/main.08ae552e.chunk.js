(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"date":"2020-03-12","sum":109},{"date":"2020-03-13","sum":143},{"date":"2020-03-14","sum":193},{"date":"2020-03-15","sum":213},{"date":"2020-03-16","sum":298},{"date":"2020-03-17","sum":337},{"date":"2020-03-18","sum":433},{"date":"2020-03-19","sum":677},{"date":"2020-03-20","sum":705},{"date":"2020-03-21","sum":883},{"date":"2020-03-22","sum":1071},{"date":"2020-03-23","sum":1442},{"date":"2020-03-24","sum":1930},{"date":"2020-03-25","sum":2369},{"date":"2020-03-26","sum":2693},{"date":"2020-03-27","sum":3035},{"date":"2020-03-28","sum":3619},{"date":"2020-03-29","sum":4247},{"date":"2020-03-30","sum":4695},{"date":"2020-03-31","sum":5358},{"date":"2020-04-01","sum":6092},{"date":"2020-04-02","sum":6857},{"date":"2020-04-03","sum":7428},{"date":"2020-04-04","sum":7851},{"date":"2020-04-05","sum":8430},{"date":"2020-04-06","sum":8904},{"date":"2020-04-07","sum":9248}]')},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),u=a.n(n),r=a(6),o=a.n(r),s=(a(14),a(1)),c=a(2),l=a(3),d=a(4),m=a(8),i=(a(15),a(16),a(17),a(7)),g=function(){return u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"\u05ea\u05d0\u05e8\u05d9\u05da"),u.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05e0\u05d3\u05d1\u05e7\u05d9\u05dd"),u.a.createElement("th",null,"\u05e7\u05e6\u05d1 \u05d4\u05d3\u05d1\u05e7\u05d4 \u05d9\u05d5\u05de\u05d9"),u.a.createElement("th",null,"\u05de\u05de\u05d5\u05e6\u05e2 \u05e7\u05e6\u05d1 \u05d4\u05d3\u05d1\u05e7\u05d4"),u.a.createElement("th",null,"\u05de\u05de\u05d5\u05e6\u05e2 \u05e7\u05e6\u05d1 \u05d4\u05d3\u05d1\u05e7\u05d4 \u05dc-5 \u05d9\u05de\u05d9\u05dd \u05d0\u05d7\u05d5\u05e8\u05d4")))},h=function(e){var t=e.data,a=function(e){return e<10?"0"+e:e},n=t.map((function(e,t){var n="",r=new Date;return e.date.getTime()-36e5*e.date.getHours()-6e4*e.date.getMinutes()-1e3*e.date.getSeconds()-e.date.getMilliseconds()==r.getTime()-36e5*r.getHours()-6e4*r.getMinutes()-1e3*r.getSeconds()-r.getMilliseconds()&&(n="curdate"),u.a.createElement("tr",{key:t},u.a.createElement("td",{className:n},a(e.date.getDate())+"/"+a(e.date.getMonth()+1)+"/"+e.date.getFullYear()),u.a.createElement("td",null,e.sum.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),u.a.createElement("td",null,""!=e.dailyRate?e.dailyRate.toFixed(2):""),u.a.createElement("td",null,""!=e.averageRate?e.averageRate.toFixed(2):""),u.a.createElement("td",null,""!=e.avgRate5?e.avgRate5.toFixed(2):""))}));return u.a.createElement("tbody",null,n)},p=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data;return u.a.createElement("table",{className:"corona-table"},u.a.createElement(g,null),u.a.createElement(h,{data:e}))}}]),a}(u.a.Component),v=function(e){new Date(e[e.length-1].date);for(var t=function(e){return e.map((function(t,a){var n=0!=a?t.sum/e[a-1].sum:"",u=0!=a?Math.pow(t.sum/e[0].sum,1/(a+1)):"",r=a>=4?Math.pow(t.sum/e[a-4].sum,.2):"";return{date:new Date(t.date),sum:t.sum,dailyRate:n,averageRate:u,avgRate5:r}}))}(e),a=t.length,n=a+40;a<n;a++){var u=new Date(t[a-1].date);u.setDate(u.getDate()+1);var r=Math.pow(t[a-1].sum/t[a-5].sum,.2),o=t[a-1].sum*r,s=o/t[a-1].sum,c=Math.pow(o/t[0].sum,.2);t=[].concat(Object(m.a)(t),[{date:u,sum:o,dailyRate:s,averageRate:c,avgRate5:r}])}return t},f=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement(p,{data:v(i)})}}]),a}(u.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.08ae552e.chunk.js.map
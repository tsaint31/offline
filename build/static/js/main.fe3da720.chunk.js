(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),r=t.n(l),s=(t(80),t(19)),o=t(60),u=t(61),m=t(72),d=t(62),i=t(73),p=t(63),E=t.n(p),h=(t(81),t(130)),v=t(71),y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={brand_1:"",brand_2:"",brand_3:"",brand_4:"",brand_5:"",brand_6:"",brand_7:"",brand_8:"",brand_9:"",brand_10:"",value_1:0,value_2:0,value_3:0,value_4:0,value_5:0,value_6:0,value_7:0,value_8:0,value_9:0,value_10:0},t.handleInputBrand=function(e,a){t.setState(Object(s.a)({},e,a.target.value))},t.handleInputBrandValue=function(e,a){t.setState(Object(s.a)({},e,1))},t.addOne=function(e,a){t.setState(function(a){return Object(s.a)({},e,a[e]+1)})},t.removeOne=function(e,a){t.setState(function(a){return Object(s.a)({},e,a[e]-1)})},t.saveFile=function(){var e="".concat(t.state.brand_1,": ").concat(t.state.value_1,"\n    ").concat(t.state.brand_2,": ").concat(t.state.value_2,"\n    ").concat(t.state.brand_3,": ").concat(t.state.value_3,"\n    ").concat(t.state.brand_4,": ").concat(t.state.value_4,"\n    ").concat(t.state.brand_5,": ").concat(t.state.value_5,"\n    ").concat(t.state.brand_6,": ").concat(t.state.value_6,"\n    ").concat(t.state.brand_7,": ").concat(t.state.value_7,"\n    ").concat(t.state.brand_8,": ").concat(t.state.value_8,"\n    ").concat(t.state.brand_9,": ").concat(t.state.value_9,"\n    ").concat(t.state.brand_10,": ").concat(t.state.value_10,"\n    "),a=new Blob([e],{type:"text/html"}),n=window.URL.createObjectURL(a),c=document.createElement("a");c.href=n,c.setAttribute("download","data.txt"),document.body.appendChild(c),c.click(),c.parentNode.removeChild(c),window.URL.revokeObjectURL(n)},t}return Object(i.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"hello"),c.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),c.a.createElement("div",{className:"container"},c.a.createElement("form",null,c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("button",{className:"button",onClick:this.saveFile},"Sauvegarde")),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_1",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_1",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_1),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_1",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_2",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_2",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_2),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_2",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_3",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_3",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_3),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_3",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_4",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_4",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_4),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_4",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_5",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_5",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_5),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_5",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_6",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_6",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_6),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_6",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_7",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_7",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_7),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_7",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_8",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_8",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_8),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_8",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_9",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_9",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_9),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_9",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-6",type:"text",onChange:function(a){return e.handleInputBrand("brand_10",a)}}),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.removeOne("value_10",a)}},c.a.createElement(v.a,{type:"minus"})),c.a.createElement("p",{className:"col-2",type:"dashed"},this.state.value_10),c.a.createElement(h.a,{className:"col-2",type:"dashed",onClick:function(a){return e.addOne("value_10",a)}},c.a.createElement(v.a,{type:"plus"}))),c.a.createElement("br",null)),c.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous"}),c.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossOrigin:"anonymous"}),c.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossOrigin:"anonymous"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},75:function(e,a,t){e.exports=t(128)},80:function(e,a,t){},81:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.fe3da720.chunk.js.map
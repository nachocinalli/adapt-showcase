function createResetButton(t){$("body").append($('<style id="spoor-clear-button">.spoor-clear-button { position:fixed; right:0px; bottom:0px; } </style>'));var e=$('<button class="spoor-clear-button">Reset</button>');$("body").append(e),e.on("click",function(){t&&t.LMSClear(),alert("Status Reset"),window.location.reload()})}function storageWarning(){var t,e=alert;this.__storageWarningTimeoutId=null,require&&(t=require("coreJS/adapt")),t&&t.config&&t.config.has("_spoor")&&t.config.get("_spoor")._advancedSettings&&!0===t.config.get("_spoor")._advancedSettings._suppressErrors&&(e=console.error),e("Warning: possible cookie storage limit exceeded - tracking may malfunction")}var API={__offlineAPIWrapper:!0,LMSInitialize:function(){return API.LMSFetch()||(this.data["cmi.core.lesson_status"]="not attempted",this.data["cmi.suspend_data"]="",this.data["cmi.core.student_name"]="Surname, Sam",this.data["cmi.core.student_id"]="sam.surname@example.org",this.data["cmi.interactions._count"]=0,API.LMSStore(!0)),"true"},LMSFinish:function(){return"true"},LMSGetValue:function(t){return this.data[t]},LMSSetValue:function(t,e){var n="cmi.interactions.";if(this.data[t]=e,-1!=t.indexOf(n)){var i=[],o=n.length;_.each(_.keys(this.data),function(t){-1!=t.indexOf(n)&&(i[t.substring(o,t.indexOf(".",o))]=!0)}),this.data["cmi.interactions._count"]=_.compact(i).length}return API.LMSStore(),"true"},LMSCommit:function(){return"true"},LMSGetLastError:function(){return 0},LMSGetErrorString:function(){return"Fake error string."},LMSGetDiagnostic:function(){return"Fake diagnostic information."},LMSStore:function(t){if(!1!==window.ISCOOKIELMS&&(t||API.cookie("_spoor")!==undefined)){var e=JSON.stringify(this.data);API.cookie("_spoor",e),API.cookie("_spoor").length!=e.length&&null==this.__storageWarningTimeoutId&&(this.__storageWarningTimeoutId=setTimeout(function(){storageWarning.apply(API)},1e3))}},LMSFetch:function(){if(!1!==window.ISCOOKIELMS)return this.data=API.cookie("_spoor"),this.data===undefined?(this.data={},!1):(this.data=JSON.parse(this.data),!0);this.data={}},LMSClear:function(){API.removeCookie("_spoor")}},API_1484_11={__offlineAPIWrapper:!0,Initialize:function(){return API_1484_11.LMSFetch()||(this.data["cmi.completion_status"]="not attempted",this.data["cmi.suspend_data"]="",this.data["cmi.learner_name"]="Surname, Sam",this.data["cmi.learner_id"]="sam.surname@example.org",this.data["cmi.interactions._count"]=0,API_1484_11.LMSStore(!0)),"true"},Terminate:function(){return"true"},GetValue:function(t){return this.data[t]},SetValue:function(t,e){var n="cmi.interactions.";if(this.data[t]=e,-1!=t.indexOf(n)){var i=[],o=n.length;_.each(_.keys(this.data),function(t){-1!=t.indexOf(n)&&(i[t.substring(o,t.indexOf(".",o))]=!0)}),this.data["cmi.interactions._count"]=_.compact(i).length}return API_1484_11.LMSStore(),"true"},Commit:function(){return"true"},GetLastError:function(){return 0},GetErrorString:function(){return"Fake error string."},GetDiagnostic:function(){return"Fake diagnostic information."},LMSStore:function(t){if(!1!==window.ISCOOKIELMS&&(t||API_1484_11.cookie("_spoor")!==undefined)){var e=JSON.stringify(this.data);API_1484_11.cookie("_spoor",e),API_1484_11.cookie("_spoor").length!=e.length&&null==this.__storageWarningTimeoutId&&(this.__storageWarningTimeoutId=setTimeout(function(){storageWarning.apply(API_1484_11)},1e3))}},LMSFetch:function(){if(!1!==window.ISCOOKIELMS)return this.data=API_1484_11.cookie("_spoor"),this.data===undefined?(this.data={},!1):(this.data=JSON.parse(this.data),!0);this.data={}},LMSClear:function(){API_1484_11.removeCookie("_spoor")}};!function(){for(var t,e=0,n=arguments.length;e<n;e++){(t=arguments[e]).extend=function(){var t,e,n,i=arguments[0]||{},o=1,r=arguments.length;for("object"!=typeof i&&"function"!=typeof i&&(i={}),o===r&&(i=this,o--);o<r;o++)if(null!=(n=arguments[o]))for(e in n)i[e],i!==(t=n[e])&&t!==undefined&&(i[e]=t);return i};var i=/\+/g;function o(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return t=decodeURIComponent(t.replace(i," ")),a.json?JSON.parse(t):t}catch(e){}}function r(t,e){var n=a.raw?t:o(t);return"function"==typeof e?e(n):n}var a=t.cookie=function(e,n,i){if(arguments.length>1&&"function"!=typeof n){if("number"==typeof(i=t.extend({},a.defaults,i)).expires){var o=i.expires,s=i.expires=new Date;s.setTime(+s+864e5*o)}return document.cookie=[e,"=",(c=n,(a.json?JSON.stringify(c):String(c)).replace(/,/g,"%2C")),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var c,u=e?undefined:{},d=document.cookie?document.cookie.split("; "):[],f=0,_=d.length;f<_;f++){var p=d[f].split("="),h=p.shift(),l=p.join("=");if(e&&e===h){u=r(l,n);break}e||(l=r(l))===undefined||(u[h]=l)}return u};a.defaults={},t.removeCookie=function(e,n){return t.cookie(e)!==undefined&&(t.cookie(e,"",t.extend({},n,{expires:-1})),!t.cookie(e))}}}(API,API_1484_11);
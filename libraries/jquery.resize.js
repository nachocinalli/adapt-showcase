"use strict";!function(){if(!$.event.special.resize&&!$.fn.off.elementResizeOriginalOff){var e={index:0,check:function(t){t[$.expando]||(t[$.expando]=++e.index)},make:function(t,n){return e.check(t),n.guid+"-"+t[$.expando]}},t={registered:[],shouldReProcess:!0,register:function(n,r){var a=$(n);t.registered.push({id:e.make(n,r),$element:a,_measurement:i.get(a).uniqueMeasurementId,_hasTriggered:!1}),t.shouldReProcess=!0},unregister:function(n,i){for(var r=t.registered,a=e.make(n,i),s=r.length-1;s>-1;s--){r[s].id==a&&(r.splice(s,1),t.shouldReProcess=!0)}},process:function(){var e,n=t.registered;for(t.shouldReProcess=!0;t.shouldReProcess;){if(t.shouldReProcess=!1,0==(e=n.length))return;for(var r=0;r<e;r++){var a=n[r],s=i.get(a.$element);if(a._measurement!==undefined&&a._hasTriggered)if(!(a._measurement!=s.uniqueMeasurementId))continue;if(a._measurement=s.uniqueMeasurementId,a._hasTriggered=!0,t.trigger(a),t.shouldReProcess)break}}},trigger:function(e){e.$element.trigger("resize")}},n={lastStartEvent:0,timeoutHandle:null,intervalDuration:100,hasRaf:!1,start:function(){n.lastStartEvent=(new Date).getTime(),n.repeat()},repeat:function(){n.stop(),n.hasRaf?n.timeoutHandle=requestAnimationFrame(n.main):n.timeoutHandle=setTimeout(n.main,n.intervalDuration)},hasExpired:function(){if(!((new Date).getTime()-n.lastStartEvent<1500))return n.stop(),!0},lastMain:(new Date).getTime(),isThrottled:function(){return!((new Date).getTime()-n.lastMain>n.intervalDuration)},main:function(){n.isThrottled()?n.repeat():(n.lastMain=(new Date).getTime(),0==t.registered.length?(n.stop(),n.intervalDuration=200,n.repeat()):(n.stop(),n.intervalDuration=100,n.repeat()),t.process())},stop:function(){null!==n.timeoutHandle&&(n.hasRaf?(cancelAnimationFrame(n.timeoutHandle),n.timeoutHandle=null):(clearTimeout(n.timeoutHandle),n.timeoutHandle=null))}};$.extend($.event.special,{resize:{noBubble:!0,add:function(e){this!==window&&t.register(this,e)},remove:function(e){this!==window&&t.unregister(this,e)}}}),$.extend($.fn,{resize:function(e){return e?(this.on("resize",e),this):this}});var i={featureDetect:function(){n.hasRaf=window.requestAnimationFrame&&window.cancelAnimationFrame},get:function(e){return{uniqueMeasurementId:e.outerHeight()+","+e.outerWidth()}}};$(window).on({"touchmove scroll mousedown keydown resize":n.start}),$(i.featureDetect)}}();
!function(n){var e={},t={};n.onKeyCombo=function(o,r){0!==o.length&&"function"==typeof r&&(t[o.length]||(t[o.length]=[]),t[o.length].push({trigger:o,handler:r}),n(document).keydown(function(n){e[n.which]=!0}).keyup(function(n){var o=_.map(_.keys(e),function(n){return parseInt(n,10)}),r=o.length,f=t[r],i=[];if(f)for(var g=0;g<f.length;g++){var h=f[g].trigger,l=f[g].handler;o.length==h.length&&0==_.difference(o,h).length&&i.push(l)}_.each(o,function(n){delete e[n]}),_.each(i,function(e){console.log("$.onKeyCombo: firing handler for keys "+h.toString()),e(n)})}))},n.offKeyCombo=function(n,e){if(0!==n.length&&"function"==typeof e){var o=t[n.length];if(o){var r=_.findIndex(o,function(t){return t.trigger.length==n.length&&0==_.difference(t.trigger,n).length&&t.handler==e});-1!=r&&o.splice(r,1)}}}}($);
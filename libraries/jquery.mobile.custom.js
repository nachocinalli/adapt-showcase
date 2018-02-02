!function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,t),o.mobile}):n(e.jQuery,e,t)}(this,document,function(e,t,n,o){var i,a,s,r;i=function(e){var t,i,a="virtualMouseBindings",s="virtualTouchID",r="clientX clientY pageX pageY screenX screenY".split(" "),u="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),c="altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),p=e.event.mouseHooks?e.event.mouseHooks.props:[],l=c.concat(p),h={},d=0,v=0,f=0,m=!1,g=[],w=!1,T=!1,b="addEventListener"in n,y=e(n),D=1,P=0;function E(e){for(;e&&"undefined"!=typeof e.originalEvent;)e=e.originalEvent;return e}function k(t){for(var n,o,i={};t;){for(o in n=e.data(t,a))n[o]&&(i[o]=i.hasVirtualBinding=!0);t=t.parentNode}return i}function X(){T=!0}function Y(){P=0,g.length=0,w=!1,X()}function M(){T=!1}function x(){d&&(clearTimeout(d),d=0)}function I(){x(),d=setTimeout(function(){d=0,Y()},e.vmouse.resetTimerDuration)}function S(t,n,i){var s;return(i&&i[t]||!i&&function(t,n){for(var o;t;){if((o=e.data(t,a))&&(!n||o[n]))return t;t=t.parentNode}return null}(n.target,t))&&(s=function(t,n){var i,a,s,u,p,h,d,v,f,m=t.type;if((t=e.Event(t)).type=n,i=t.originalEvent,a=c,m.search(/^(mouse|click)/)>-1&&(a=l),i)for(d=a.length;d;)t[u=a[--d]]=i[u];if(m.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==m.search(/^touch/)&&(m=(s=E(i)).touches,p=s.changedTouches,h=m&&m.length?m[0]:p&&p.length?p[0]:o))for(v=0,f=r.length;v<f;v++)t[u=r[v]]=h[u];return t}(n,t),e(n.target).trigger(s)),s}function j(t){var n,o=e.data(t.target,s);"click"===t.type&&"touchstart"===e.data(t.target,"lastTouchType")&&setTimeout(function(){"touchstart"===e.data(t.target,"lastTouchType")&&(Y(),delete e.data(t.target).lastTouchType,j(t))},e.vmouse.maximumTimeBetweenTouches),w||P&&P===o||(n=S("v"+t.type,t))&&(n.isDefaultPrevented()&&t.preventDefault(),n.isPropagationStopped()&&t.stopPropagation(),n.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}function q(t){var n,o,i,a=E(t).touches;a&&1===a.length&&(o=k(n=t.target),e.data(t.target,"lastTouchType",t.type),o.hasVirtualBinding&&(P=D++,e.data(n,s,P),x(),M(),m=!1,i=E(t).touches[0],v=i.pageX,f=i.pageY,S("vmouseover",t,o),S("vmousedown",t,o)))}function B(t){T||(m||S("vmousecancel",t,k(t.target)),e.data(t.target,"lastTouchType",t.type),m=!0,I())}function L(t){if(!T){var n=E(t).touches[0],o=m,i=e.vmouse.moveDistanceThreshold,a=k(t.target);e.data(t.target,"lastTouchType",t.type),(m=m||Math.abs(n.pageX-v)>i||Math.abs(n.pageY-f)>i)&&!o&&S("vmousecancel",t,a),S("vmousemove",t,a),I()}}function O(t){if(!T&&e.data(t.target,"lastTouchType")!==o){X(),delete e.data(t.target).lastTouchType;var n,i,a=k(t.target);S("vmouseup",t,a),m||(n=S("vclick",t,a))&&n.isDefaultPrevented()&&(i=E(t).changedTouches[0],g.push({touchID:P,x:i.clientX,y:i.clientY}),w=!0),S("vmouseout",t,a),m=!1,I()}}function K(t){var n,o=e.data(t,a);if(o)for(n in o)if(o[n])return!0;return!1}function N(){}function R(t){var n=t.substr(1);return{setup:function(){K(this)||e.data(this,a,{}),e.data(this,a)[t]=!0,h[t]=(h[t]||0)+1,1===h[t]&&y.bind(n,j),e(this).bind(n,N),b&&(h.touchstart=(h.touchstart||0)+1,1===h.touchstart&&y.bind("touchstart",q).bind("touchend",O).bind("touchmove",L).bind("scroll",B))},teardown:function(){--h[t],h[t]||y.unbind(n,j),b&&(--h.touchstart,h.touchstart||y.unbind("touchstart",q).unbind("touchmove",L).unbind("touchend",O).unbind("scroll",B));var o=e(this),i=e.data(this,a);i&&(i[t]=!1),o.unbind(n,N),K(this)||o.removeData(a)}}}for(e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500,maximumTimeBetweenTouches:100},i=0;i<u.length;i++)e.event.special[u[i]]=R(u[i]);b&&n.addEventListener("click",function(n){var o,i,a,r,u,c=g.length,p=n.target;if(c)for(o=n.clientX,i=n.clientY,t=e.vmouse.clickDistanceThreshold,a=p;a;){for(r=0;r<c;r++)if(u=g[r],0,a===p&&Math.abs(u.x-o)<t&&Math.abs(u.y-i)<t||e.data(a,s)===u.touchID)return n.preventDefault(),void n.stopPropagation();a=a.parentNode}},!0)},"function"==typeof define&&define.amd?define("vmouse",["jquery"],i):i(e),a=function(e){return e.mobile={version:"@VERSION"},e.mobile},"function"==typeof define&&define.amd?define("ns",["jquery"],a):a(e),s=function(e){var t={touch:"ontouchend"in n};return e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t),e.support},"function"==typeof define&&define.amd?define("support/touch",["jquery","../ns"],s):s(e),r=function(e){var i=e(n),a=e.mobile.support.touch,s=a?"touchstart":"mousedown",r=a?"touchend":"mouseup",u=a?"touchmove":"mousemove";function c(t,n,i,a){var s=i.type;i.type=n,a?e.event.trigger(i,o,t):e.event.dispatch.call(t,i),i.type=s}return e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),o=!1;n.bind("vmousedown",function(a){if(o=!1,a.which&&1!==a.which)return!0;var s,r,u=a.target;function p(){s&&(n.bind("vclick",r),clearTimeout(s))}function l(){p(),n.unbind("vclick",r).unbind("vmouseup",p),i.unbind("vmousecancel",l)}r=function(e){l(),o||u!==e.target?o&&e.preventDefault():c(t,"tap",e)},n.bind("vmouseup",p),i.bind("vmousecancel",l),s=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(o=!0),s=0,c(t,"taphold",e.Event("taphold",{target:u}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:t.devicePixelRatio>=2?15:30,verticalDistanceThreshold:t.devicePixelRatio>=2?15:30,getLocation:function(e){var n=t.pageXOffset,o=t.pageYOffset,i=e.clientX,a=e.clientY;return 0===e.pageY&&Math.floor(a)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(i)>Math.floor(e.pageX)?(i-=n,a-=o):(a<e.pageY-o||i<e.pageX-n)&&(i=e.pageX-n,a=e.pageY-o),{x:i,y:a}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,o=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,o=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y]}},handleSwipe:function(t,n,o,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var a=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return c(o,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),c(o,a,e.Event(a,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,o=e(n),a={};(t=e.data(this,"mobile-events"))||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=a,a.start=function(t){if(!e.event.special.swipe.eventInProgress){e.event.special.swipe.eventInProgress=!0;var o,s=e.event.special.swipe.start(t),c=t.target,p=!1;a.move=function(t){s&&!t.isDefaultPrevented()&&(o=e.event.special.swipe.stop(t),p||(p=e.event.special.swipe.handleSwipe(s,o,n,c))&&(e.event.special.swipe.eventInProgress=!1),Math.abs(s.coords[0]-o.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())},a.stop=function(){p=!0,e.event.special.swipe.eventInProgress=!1,i.off(u,a.move),a.move=null},i.on(u,a.move).one(r,a.stop)}},o.on(s,a.start)},teardown:function(){var t,n;(t=e.data(this,"mobile-events"))&&(n=t.swipe,delete t.swipe,t.length--,0===t.length&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(s,n.start),n.move&&i.off(u,n.move),n.stop&&i.off(r,n.stop))}},e.each({taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}}),e.event.special},"function"==typeof define&&define.amd?define("events/touch",["jquery","../vmouse","../support/touch"],r):r(e)});
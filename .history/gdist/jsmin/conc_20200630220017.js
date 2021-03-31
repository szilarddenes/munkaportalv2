/*!
 * Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
/***the goal is to normalize the height of the BS. Carousel slides.
 * src: https://snook.ca/archives/javascript/normalize-bootstrap-carousel-heights?fbclid=IwAR31WXAwZHInpbVKG9nx3O2LVit1FiO8jlhh2xdXflq63ueIH_cU58RZ_ZE */

function normalizeSlideHeights() {
  $('.carousel').each(function () {
    var items = $('.carousel-item', this);
    // reset the height
    items.css('min-height', 0);
    // set the height
    var maxHeight = Math.max.apply(
      null,
      items
        .map(function () {
          return $(this).outerHeight();
        })
        .get()
    );
    items.css('min-height', maxHeight + 'px');
  });
}

$(window).on('load resize orientationchange', normalizeSlideHeights);


let start // set on the first step to the timestamp provided
const el1 = document.getElementById('count1') // get the element
const el2 = document.getElementById('count2') // get the element
const el3 = document.getElementById('count3') // get the element
const final1 = parseInt(el1.textContent, 10) // parse out the final number
const final2 = parseInt(el2.textContent, 10) // parse out the final number
const final3 = parseInt(el3.textContent, 10) // parse out the final number
const duration = 4000 // duration in ms
const step = ts => {
    if (!start) {
        start = ts
    }
    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration
    let plus = '+';

    el1.textContent =  Math.floor(progress * final1) // set the text
    el2.textContent = Math.floor(progress * final2) // set the text
    el3.textContent = Math.floor(progress * final3) // set the text
    if (progress < 1) {
        // if we're not 100% complete, request another animation frame
        requestAnimationFrame(step)
    }
}

// start the animation
requestAnimationFrame(step)


(function() {
    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    var header = document.getElementById('site-header');
    var pageYOffset = 0;
    header.classList.add('transpp');

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop || pageYOffset;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        } else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }
        if (window.pageYOffset <= 5) {
            header.classList.add('transpp');
            // prevDirection = direction;
        } else if (window.pageYOffset >= 30) {
            header.classList.remove('transpp');
            // prevDirection = direction;
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 100) {
            //replace 52 with the height of your header in px

            header.classList.add('hide');
            prevDirection = direction;
        } else if (direction === 1) {
            header.classList.remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);
})();

//Close Bootstrap 3 navbar when a nav item is clicked
$('.navbar-collapse ul li a:not(.dropdown-toggler)').bind('click', function () {
  var hasflagActive = document.querySelector('.flagActive');

  $('.navbar-toggler:visible').click();
 });




/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

! function(e, t) {
    "use strict";

    function n(e) {
        var t = e.length,
            n = ee.type(e);
        return !ee.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e, n, r, i) {
        if (ee.acceptData(e)) {
            var a, o, s = ee.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                c = l ? ee.cache : e,
                d = l ? e[s] : e[s] && s;
            if (d && c[d] && (i || c[d].data) || !u || r !== t) return d || (l ? e[s] = d = X.pop() || ee.guid++ : d = s), c[d] || (c[d] = {}, l || (c[d].toJSON = ee.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[d] = ee.extend(c[d], n) : c[d].data = ee.extend(c[d].data, n)), a = c[d], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ee.camelCase(n)] = r), u ? null == (o = a[n]) && (o = a[ee.camelCase(n)]) : o = a, o
        }
    }

    function i(e, t, n) {
        if (ee.acceptData(e)) {
            var r, i, a, s = e.nodeType,
                u = s ? ee.cache : e,
                l = s ? e[ee.expando] : ee.expando;
            if (u[l]) { if (t && (r = n ? u[l] : u[l].data)) { ee.isArray(t) ? t = t.concat(ee.map(t, ee.camelCase)) : t in r ? t = [t] : t = (t = ee.camelCase(t)) in r ? [t] : t.split(" "); for (i = 0, a = t.length; a > i; i++) delete r[t[i]]; if (!(n ? o : ee.isEmptyObject)(r)) return }(n || (delete u[l].data, o(u[l]))) && (s ? ee.cleanData([e], !0) : ee.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null) }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(ge, "-$1").toLowerCase();
            if ("string" == typeof(r = e.getAttribute(i))) {
                try { r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : me.test(r) ? ee.parseJSON(r) : r) } catch (e) {}
                ee.data(e, n, r)
            } else r = t
        }
        return r
    }

    function o(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ee.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function s() { return !0 }

    function u() { return !1 }

    function l(e, t) { do { e = e[t] } while (e && 1 !== e.nodeType); return e }

    function c(e, t, n) {
        if (t = t || 0, ee.isFunction(t)) return ee.grep(e, function(e, r) { return !!t.call(e, r, e) === n });
        if (t.nodeType) return ee.grep(e, function(e) { return e === t === n });
        if ("string" == typeof t) {
            var r = ee.grep(e, function(e) { return 1 === e.nodeType });
            if (qe.test(t)) return ee.filter(t, r, !n);
            t = ee.filter(t, r)
        }
        return ee.grep(e, function(e) { return ee.inArray(e, t) >= 0 === n })
    }

    function d(e) {
        var t = Pe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function f(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

    function p(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e }

    function h(e) { var t = Qe.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function m(e, t) { for (var n, r = 0; null != (n = e[r]); r++) ee._data(n, "globalEval", !t || ee._data(t[r], "globalEval")) }

    function g(e, t) {
        if (1 === t.nodeType && ee.hasData(e)) {
            var n, r, i, a = ee._data(e),
                o = ee._data(t, a),
                s = a.events;
            if (s)
                for (n in delete o.handle, o.events = {}, s)
                    for (r = 0, i = s[n].length; i > r; r++) ee.event.add(t, n, s[n][r]);
            o.data && (o.data = ee.extend({}, o.data))
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ee.support.noCloneEvent && t[ee.expando]) {
                for (i in (r = ee._data(t)).events) ee.removeEvent(t, i, r.handle);
                t.removeAttribute(ee.expando)
            }
            "script" === n && t.text !== e.text ? (p(t).text = e.text, h(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ee.support.html5Clone && e.innerHTML && !ee.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ve.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function y(e, n) {
        var r, i, a = 0,
            o = e.getElementsByTagName !== t ? e.getElementsByTagName(n || "*") : e.querySelectorAll !== t ? e.querySelectorAll(n || "*") : t;
        if (!o)
            for (o = [], r = e.childNodes || e; null != (i = r[a]); a++) !n || ee.nodeName(i, n) ? o.push(i) : ee.merge(o, y(i, n));
        return n === t || n && ee.nodeName(e, n) ? ee.merge([e], o) : o
    }

    function b(e) { Ve.test(e.type) && (e.defaultChecked = e.checked) }

    function x(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ht.length; i--;)
            if ((t = ht[i] + n) in e) return t;
        return r
    }

    function w(e, t) { return e = t || e, "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e) }

    function T(e, t) { for (var n, r = [], i = 0, a = e.length; a > i; i++)(n = e[i]).style && (r[i] = ee._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && w(n) && (r[i] = ee._data(n, "olddisplay", N(n.nodeName)))) : r[i] || w(n) || ee._data(n, "olddisplay", ee.css(n, "display"))); for (i = 0; a > i; i++)(n = e[i]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "" : "none")); return e }

    function C(e, t, n) { var r = st.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function k(e, t, n, r, i) { for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += ee.css(e, n + pt[a], !0, i)), r ? ("content" === n && (o -= ee.css(e, "padding" + pt[a], !0, i)), "margin" !== n && (o -= ee.css(e, "border" + pt[a] + "Width", !0, i))) : (o += ee.css(e, "padding" + pt[a], !0, i), "padding" !== n && (o += ee.css(e, "border" + pt[a] + "Width", !0, i))); return o }

    function F(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = et(e),
            o = ee.support.boxSizing && "border-box" === ee.css(e, "boxSizing", !1, a);
        if (0 >= i || null == i) {
            if ((0 > (i = Ke(e, t, a)) || null == i) && (i = e.style[t]), ut.test(i)) return i;
            r = o && (ee.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (o ? "border" : "content"), r, a) + "px"
    }

    function N(e) {
        var t = B,
            n = ct[e];
        return n || ("none" !== (n = E(e, t)) && n || ((t = ((tt = (tt || ee("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || tt[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = E(e, t), tt.detach()), ct[e] = n), n
    }

    function E(e, t) {
        var n = ee(t.createElement(e)).appendTo(t.body),
            r = ee.css(n[0], "display");
        return n.remove(), r
    }

    function S(e, t, n, r) {
        var i;
        if (ee.isArray(t)) ee.each(t, function(t, i) { n || gt.test(e) ? r(e, i) : S(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== ee.type(t)) r(e, t);
        else
            for (i in t) S(e + "[" + i + "]", t[i], n, r)
    }

    function D(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                a = t.toLowerCase().match(ne) || [];
            if (ee.isFunction(n))
                for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function A(e, n, r, i) {
        function a(u) { var l; return o[u] = !0, ee.each(e[u] || [], function(e, u) { var c = u(n, r, i); return "string" != typeof c || s || o[c] ? s ? !(l = c) : t : (n.dataTypes.unshift(c), a(c), !1) }), l }
        var o = {},
            s = e === Lt;
        return a(n.dataTypes[0]) || !o["*"] && a("*")
    }

    function j(e, n) { var r, i, a = ee.ajaxSettings.flatOptions || {}; for (r in n) n[r] !== t && ((a[r] ? e : i || (i = {}))[r] = n[r]); return i && ee.extend(!0, e, i), e }

    function L() { try { return new e.XMLHttpRequest } catch (e) {} }

    function _() { return setTimeout(function() { Bt = t }), Bt = ee.now() }

    function q(e, t, n) {
        var r, i, a = 0,
            o = Xt.length,
            s = ee.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = Bt || _(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), a = 0, o = l.tweens.length; o > a; a++) l.tweens[a].run(r); return s.notifyWith(e, [l, r, n]), 1 > r && o ? n : (s.resolveWith(e, [l]), !1) },
            l = s.promise({
                elem: e,
                props: ee.extend({}, t),
                opts: ee.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Bt || _(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, a, o;
                for (n in e)
                    if (r = ee.camelCase(n), i = t[r], a = e[n], ee.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (o = ee.cssHooks[r]) && "expand" in o)
                        for (n in a = o.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o > a; a++)
            if (r = Xt[a].call(l, e, c, l.opts)) return r;
        return function(e, t) {
            ee.each(t, function(t, n) {
                for (var r = (Vt[t] || []).concat(Vt["*"]), i = 0, a = r.length; a > i; i++)
                    if (r[i].call(e, t, n)) return
            })
        }(l, c), ee.isFunction(l.opts.start) && l.opts.start.call(e, l), ee.fx.timer(ee.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function M(e, t, n, r, i) { return new M.prototype.init(e, t, n, r, i) }

    function H(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) r["margin" + (n = pt[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function P(e) { return ee.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
    var R, O, B = e.document,
        z = e.location,
        I = e.jQuery,
        W = e.$,
        $ = {},
        X = [],
        V = "1.9.0",
        U = X.concat,
        Y = X.push,
        Q = X.slice,
        G = X.indexOf,
        J = $.toString,
        Z = $.hasOwnProperty,
        K = V.trim,
        ee = function(e, t) { return new ee.fn.init(e, t, R) },
        te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = /\S+/g,
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ie = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        oe = /^[\],:{}\s]*$/,
        se = /(?:^|:|,)(?:\s*\[)+/g,
        ue = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        le = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ce = /^-ms-/,
        de = /-([\da-z])/gi,
        fe = function(e, t) { return t.toUpperCase() },
        pe = function() { B.addEventListener ? (B.removeEventListener("DOMContentLoaded", pe, !1), ee.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", pe), ee.ready()) };
    ee.fn = ee.prototype = {
        jquery: V,
        constructor: ee,
        init: function(e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ie.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ee ? n[0] : n, ee.merge(this, ee.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : B, !0)), ae.test(i[1]) && ee.isPlainObject(n))
                        for (i in n) ee.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if ((a = B.getElementById(i[2])) && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = B, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ee.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ee.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return Q.call(this) },
        get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
        pushStack: function(e) { var t = ee.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return ee.each(this, e, t) },
        ready: function(e) { return ee.ready.promise().done(e), this },
        slice: function() { return this.pushStack(Q.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) { return this.pushStack(ee.map(this, function(t, n) { return e.call(t, n, t) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: Y,
        sort: [].sort,
        splice: [].splice
    }, ee.fn.init.prototype = ee.fn, ee.extend = ee.fn.extend = function() {
        var e, n, r, i, a, o, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ee.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (e = arguments[u]))
                for (n in e) r = s[n], s !== (i = e[n]) && (c && i && (ee.isPlainObject(i) || (a = ee.isArray(i))) ? (a ? (a = !1, o = r && ee.isArray(r) ? r : []) : o = r && ee.isPlainObject(r) ? r : {}, s[n] = ee.extend(c, o, i)) : i !== t && (s[n] = i));
        return s
    }, ee.extend({
        noConflict: function(t) { return e.$ === ee && (e.$ = W), t && e.jQuery === ee && (e.jQuery = I), ee },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? ee.readyWait++ : ee.ready(!0) },
        ready: function(e) {
            if (!0 === e ? !--ee.readyWait : !ee.isReady) {
                if (!B.body) return setTimeout(ee.ready);
                ee.isReady = !0, !0 !== e && --ee.readyWait > 0 || (O.resolveWith(B, [ee]), ee.fn.trigger && ee(B).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) { return "function" === ee.type(e) },
        isArray: Array.isArray || function(e) { return "array" === ee.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? $[J.call(e)] || "object" : typeof e },
        isPlainObject: function(e) { if (!e || "object" !== ee.type(e) || e.nodeType || ee.isWindow(e)) return !1; try { if (e.constructor && !Z.call(e, "constructor") && !Z.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 } var n; for (n in e); return n === t || Z.call(e, n) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        error: function(e) { throw Error(e) },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || B;
            var r = ae.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ee.buildFragment([e], t, i), i && ee(i).remove(), ee.merge([], r.childNodes))
        },
        parseJSON: function(n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && ((n = ee.trim(n)) && oe.test(n.replace(ue, "@").replace(le, "]").replace(se, ""))) ? Function("return " + n)() : (ee.error("Invalid JSON: " + n), t) },
        parseXML: function(n) { var r; if (!n || "string" != typeof n) return null; try { e.DOMParser ? r = (new DOMParser).parseFromString(n, "text/xml") : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n)) } catch (e) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ee.error("Invalid XML: " + n), r },
        noop: function() {},
        globalEval: function(t) { t && ee.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(ce, "ms-").replace(de, fe) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, r) {
            var i = 0,
                a = e.length,
                o = n(e);
            if (r) {
                if (o)
                    for (; a > i && !1 !== t.apply(e[i], r); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], r)) break
            } else if (o)
                for (; a > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: K && !K.call("\ufeff ") ? function(e) { return null == e ? "" : K.call(e) } : function(e) { return null == e ? "" : (e + "").replace(re, "") },
        makeArray: function(e, t) { var r = t || []; return null != e && (n(Object(e)) ? ee.merge(r, "string" == typeof e ? [e] : e) : Y.call(r, e)), r },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (G) return G.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                a = 0;
            if ("number" == typeof r)
                for (; r > a; a++) e[i++] = n[a];
            else
                for (; n[a] !== t;) e[i++] = n[a++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r = [],
                i = 0,
                a = e.length;
            for (n = !!n; a > i; i++) n !== !!t(e[i], i) && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, a = 0,
                o = e.length,
                s = [];
            if (n(e))
                for (; o > a; a++) null != (i = t(e[a], a, r)) && (s[s.length] = i);
            else
                for (a in e) null != (i = t(e[a], a, r)) && (s[s.length] = i);
            return U.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) { var r, i, a; return "string" == typeof n && (r = e[n], n = e, e = r), ee.isFunction(e) ? (i = Q.call(arguments, 2), (a = function() { return e.apply(n || this, i.concat(Q.call(arguments))) }).guid = e.guid = e.guid || ee.guid++, a) : t },
        access: function(e, n, r, i, a, o, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === ee.type(r))
                for (u in a = !0, r) ee.access(e, n, u, r[u], !0, o, s);
            else if (i !== t && (a = !0, ee.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) { return c.call(ee(e), n) })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return a ? e : c ? n.call(e) : l ? n(e[0], r) : o
        },
        now: function() { return (new Date).getTime() }
    }), ee.ready.promise = function(t) {
        if (!O)
            if (O = ee.Deferred(), "complete" === B.readyState) setTimeout(ee.ready);
            else if (B.addEventListener) B.addEventListener("DOMContentLoaded", pe, !1), e.addEventListener("load", ee.ready, !1);
        else {
            B.attachEvent("onreadystatechange", pe), e.attachEvent("onload", ee.ready);
            var n = !1;
            try { n = null == e.frameElement && B.documentElement } catch (e) {}
            n && n.doScroll && function e() {
                if (!ee.isReady) {
                    try { n.doScroll("left") } catch (t) { return setTimeout(e, 50) }
                    ee.ready()
                }
            }()
        }
        return O.promise(t)
    }, ee.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { $["[object " + t + "]"] = t.toLowerCase() }), R = ee(B);
    var he = {};
    ee.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || function(e) { var t = he[e] = {}; return ee.each(e.match(ne) || [], function(e, n) { t[n] = !0 }), t }(e) : ee.extend({}, e);
        var n, r, i, a, o, s, u = [],
            l = !e.once && [],
            c = function(t) {
                for (n = e.memory && t, r = !0, s = a || 0, a = 0, o = u.length, i = !0; u && o > s; s++)
                    if (!1 === u[s].apply(t[0], t[1]) && e.stopOnFalse) { n = !1; break }
                i = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
            },
            d = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        (function t(n) { ee.each(n, function(n, r) { var i = ee.type(r); "function" === i ? e.unique && d.has(r) || u.push(r) : r && r.length && "string" !== i && t(r) }) })(arguments), i ? o = u.length : n && (a = t, c(n))
                    }
                    return this
                },
                remove: function() {
                    return u && ee.each(arguments, function(e, t) {
                        for (var n;
                            (n = ee.inArray(t, u, n)) > -1;) u.splice(n, 1), i && (o >= n && o--, s >= n && s--)
                    }), this
                },
                has: function(e) { return ee.inArray(e, u) > -1 },
                empty: function() { return u = [], this },
                disable: function() { return u = l = n = t, this },
                disabled: function() { return !u },
                lock: function() { return l = t, n || d.disable(), this },
                locked: function() { return !l },
                fireWith: function(e, t) { return t = [e, (t = t || []).slice ? t.slice() : t], !u || r && !l || (i ? l.push(t) : c(t)), this },
                fire: function() { return d.fireWith(this, arguments), this },
                fired: function() { return !!r }
            };
        return d
    }, ee.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ee.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ee.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ee.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return ee.Deferred(function(n) {
                            ee.each(t, function(t, a) {
                                var o = a[0],
                                    s = ee.isFunction(e[t]) && e[t];
                                i[a[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ee.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? ee.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, ee.each(t, function(e, a) {
                var o = a[2],
                    s = a[3];
                r[a[1]] = o.add, s && o.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function() { return i[a[0] + "With"](this === i ? r : this, arguments), this }, i[a[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                a = Q.call(arguments),
                o = a.length,
                s = 1 !== o || e && ee.isFunction(e.promise) ? o : 0,
                u = 1 === s ? e : ee.Deferred(),
                l = function(e, n, r) { return function(i) { n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r) } };
            if (o > 1)
                for (t = Array(o), n = Array(o), r = Array(o); o > i; i++) a[i] && ee.isFunction(a[i].promise) ? a[i].promise().done(l(i, r, a)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, a), u.promise()
        }
    }), ee.support = function() {
        var n, r, i, a, o, s, u, l, c, d, f = B.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = f.getElementsByTagName("*"), i = f.getElementsByTagName("a")[0], !r || !i || !r.length) return {};
        o = (a = B.createElement("select")).appendChild(B.createElement("option")), s = f.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", n = { getSetAttribute: "t" !== f.className, leadingWhitespace: 3 === f.firstChild.nodeType, tbody: !f.getElementsByTagName("tbody").length, htmlSerialize: !!f.getElementsByTagName("link").length, style: /top/.test(i.getAttribute("style")), hrefNormalized: "/a" === i.getAttribute("href"), opacity: /^0.5/.test(i.style.opacity), cssFloat: !!i.style.cssFloat, checkOn: !!s.value, optSelected: o.selected, enctype: !!B.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === B.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, s.checked = !0, n.noCloneChecked = s.cloneNode(!0).checked, a.disabled = !0, n.optDisabled = !o.disabled;
        try { delete f.test } catch (e) { n.deleteExpando = !1 }
        for (d in (s = B.createElement("input")).setAttribute("value", ""), n.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), n.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), (u = B.createDocumentFragment()).appendChild(s), n.appendChecked = s.checked, n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() { n.noCloneEvent = !1 }), f.cloneNode(!0).click()), { submit: !0, change: !0, focusin: !0 }) f.setAttribute(l = "on" + d, "t"), n[d + "Bubbles"] = l in e || !1 === f.attributes[l].expando;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", n.clearCloneStyle = "content-box" === f.style.backgroundClip, ee(function() {
            var r, i, a, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = B.getElementsByTagName("body")[0];
            s && ((r = B.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(r).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (a = f.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", n.reliableHiddenOffsets = c && 0 === a[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", n.boxSizing = 4 === f.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, n.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || { width: "4px" }).width, (i = f.appendChild(B.createElement("div"))).style.cssText = f.style.cssText = o, i.style.marginRight = i.style.width = "0", f.style.width = "1px", n.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), f.style.zoom !== t && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", n.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== f.offsetWidth, s.style.zoom = 1), s.removeChild(r), r = f = a = i = null)
        }), r = a = u = o = i = s = null, n
    }();
    var me = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        ge = /([A-Z])/g;
    ee.extend({ cache: {}, expando: "jQuery" + (V + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(e) { return !!(e = e.nodeType ? ee.cache[e[ee.expando]] : e[ee.expando]) && !o(e) }, data: function(e, t, n) { return r(e, t, n, !1) }, removeData: function(e, t) { return i(e, t, !1) }, _data: function(e, t, n) { return r(e, t, n, !0) }, _removeData: function(e, t) { return i(e, t, !0) }, acceptData: function(e) { var t = e.nodeName && ee.noData[e.nodeName.toLowerCase()]; return !t || !0 !== t && e.getAttribute("classid") === t } }), ee.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
                s = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = ee.data(o), 1 === o.nodeType && !ee._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++)(i = r[s].name).indexOf("data-") || (i = ee.camelCase(i.substring(5)), a(o, i, u[i]));
                    ee._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() { ee.data(this, e) }) : ee.access(this, function(n) { return n === t ? o ? a(o, e, ee.data(o, e)) : null : (this.each(function() { ee.data(this, e, n) }), t) }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { ee.removeData(this, e) }) }
    }), ee.extend({
        queue: function(e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = ee._data(e, n), r && (!i || ee.isArray(r) ? i = ee._data(e, n, ee.makeArray(r)) : i.push(r)), i || []) : t },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ee.queue(e, t),
                r = n.length,
                i = n.shift(),
                a = ee._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), a.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, function() { ee.dequeue(e, t) }, a)), !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return ee._data(e, n) || ee._data(e, n, { empty: ee.Callbacks("once memory").add(function() { ee._removeData(e, t + "queue"), ee._removeData(e, n) }) }) }
    }), ee.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ee.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ee.queue(this, e, n);
                ee._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ee.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { ee.dequeue(this, e) }) },
        delay: function(e, t) {
            return e = ee.fx && ee.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) }
            })
        },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, n) {
            var r, i = 1,
                a = ee.Deferred(),
                o = this,
                s = this.length,
                u = function() {--i || a.resolveWith(o, [o]) };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(r = ee._data(o[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(u));
            return u(), a.promise(n)
        }
    });
    var ve, ye, be = /[\t\r\n]/g,
        xe = /\r/g,
        we = /^(?:input|select|textarea|button|object)$/i,
        Te = /^(?:a|area)$/i,
        Ce = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        ke = /^(?:checked|selected)$/i,
        Fe = ee.support.getSetAttribute,
        Ne = ee.support.input;
    ee.fn.extend({
        attr: function(e, t) { return ee.access(this, ee.attr, e, t, arguments.length > 1) },
        removeAttr: function(e) { return this.each(function() { ee.removeAttr(this, e) }) },
        prop: function(e, t) { return ee.access(this, ee.prop, e, t, arguments.length > 1) },
        removeProp: function(e) { return e = ee.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (e) {} }) },
        addClass: function(e) {
            var t, n, r, i, a, o = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (ee.isFunction(e)) return this.each(function(t) { ee(this).addClass(e.call(this, t, this.className)) });
            if (u)
                for (t = (e || "").match(ne) || []; s > o; o++)
                    if (r = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace(be, " ") : " ")) {
                        for (a = 0; i = t[a++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = ee.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, a, o = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ee.isFunction(e)) return this.each(function(t) { ee(this).removeClass(e.call(this, t, this.className)) });
            if (u)
                for (t = (e || "").match(ne) || []; s > o; o++)
                    if (r = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace(be, " ") : "")) {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ee.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return ee.isFunction(e) ? this.each(function(n) { ee(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                if ("string" === n)
                    for (var i, a = 0, o = ee(this), s = t, u = e.match(ne) || []; i = u[a++];) s = r ? s : !o.hasClass(i), o[s ? "addClass" : "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && ee._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ee._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(be, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, a = this[0];
            return arguments.length ? (i = ee.isFunction(e), this.each(function(r) {
                var a, o = ee(this);
                1 === this.nodeType && (null == (a = i ? e.call(this, r, o.val()) : e) ? a = "" : "number" == typeof a ? a += "" : ee.isArray(a) && (a = ee.map(a, function(e) { return null == e ? "" : e + "" })), (n = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, a, "value") !== t || (this.value = a))
            })) : a ? (n = ee.valHooks[a.type] || ee.valHooks[a.nodeName.toLowerCase()]) && "get" in n && (r = n.get(a, "value")) !== t ? r : "string" == typeof(r = a.value) ? r.replace(xe, "") : null == r ? "" : r : void 0
        }
    }), ee.extend({
        valHooks: {
            option: { get: function(e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, u = 0 > i ? s : a ? i : 0; s > u; u++)
                        if (!(!(n = r[u]).selected && u !== i || (ee.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ee.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ee(n).val(), a) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) { var n = ee.makeArray(t); return ee(e).find("option").each(function() { this.selected = ee.inArray(ee(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n }
            }
        },
        attr: function(e, n, r) { var i, a, o, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return e.getAttribute === t ? ee.prop(e, n, r) : ((o = 1 !== s || !ee.isXMLDoc(e)) && (n = n.toLowerCase(), a = ee.attrHooks[n] || (Ce.test(n) ? ye : ve)), r === t ? a && o && "get" in a && null !== (i = a.get(e, n)) ? i : (e.getAttribute !== t && (i = e.getAttribute(n)), null == i ? t : i) : null !== r ? a && o && "set" in a && (i = a.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : (ee.removeAttr(e, n), t)) },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                a = t && t.match(ne);
            if (a && 1 === e.nodeType)
                for (; n = a[i++];) r = ee.propFix[n] || n, Ce.test(n) ? !Fe && ke.test(n) ? e[ee.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ee.attr(e, n, ""), e.removeAttribute(Fe ? n : r)
        },
        attrHooks: { type: { set: function(e, t) { if (!ee.support.radioValue && "radio" === t && ee.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(e, n, r) { var i, a, o = e.nodeType; if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !ee.isXMLDoc(e)) && (n = ee.propFix[n] || n, a = ee.propHooks[n]), r !== t ? a && "set" in a && (i = a.set(e, r, n)) !== t ? i : e[n] = r : a && "get" in a && null !== (i = a.get(e, n)) ? i : e[n] },
        propHooks: { tabIndex: { get: function(e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : we.test(e.nodeName) || Te.test(e.nodeName) && e.href ? 0 : t } } }
    }), ye = {
        get: function(e, n) {
            var r = ee.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                a = "boolean" == typeof r ? Ne && Fe ? null != i : ke.test(n) ? e[ee.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return a && !1 !== a.value ? n.toLowerCase() : t
        },
        set: function(e, t, n) { return !1 === t ? ee.removeAttr(e, n) : Ne && Fe || !ke.test(n) ? e.setAttribute(!Fe && ee.propFix[n] || n, n) : e[ee.camelCase("default-" + n)] = e[n] = !0, n }
    }, Ne && Fe || (ee.attrHooks.value = { get: function(e, n) { var r = e.getAttributeNode(n); return ee.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t }, set: function(e, n, r) { return ee.nodeName(e, "input") ? (e.defaultValue = n, t) : ve && ve.set(e, n, r) } }), Fe || (ve = ee.valHooks.button = { get: function(e, n) { var r = e.getAttributeNode(n); return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t }, set: function(e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, ee.attrHooks.contenteditable = { get: ve.get, set: function(e, t, n) { ve.set(e, "" !== t && t, n) } }, ee.each(["width", "height"], function(e, n) { ee.attrHooks[n] = ee.extend(ee.attrHooks[n], { set: function(e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } }) })), ee.support.hrefNormalized || (ee.each(["href", "src", "width", "height"], function(e, n) { ee.attrHooks[n] = ee.extend(ee.attrHooks[n], { get: function(e) { var r = e.getAttribute(n, 2); return null == r ? t : r } }) }), ee.each(["href", "src"], function(e, t) { ee.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } })), ee.support.style || (ee.attrHooks.style = { get: function(e) { return e.style.cssText || t }, set: function(e, t) { return e.style.cssText = t + "" } }), ee.support.optSelected || (ee.propHooks.selected = ee.extend(ee.propHooks.selected, { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), ee.support.enctype || (ee.propFix.enctype = "encoding"), ee.support.checkOn || ee.each(["radio", "checkbox"], function() { ee.valHooks[this] = { get: function(e) { return null === e.getAttribute("value") ? "on" : e.value } } }), ee.each(["radio", "checkbox"], function() { ee.valHooks[this] = ee.extend(ee.valHooks[this], { set: function(e, n) { return ee.isArray(n) ? e.checked = ee.inArray(ee(e).val(), n) >= 0 : t } }) });
    var Ee = /^(?:input|select|textarea)$/i,
        Se = /^key/,
        De = /^(?:mouse|contextmenu)|click/,
        Ae = /^(?:focusinfocus|focusoutblur)$/,
        je = /^([^.]*)(?:\.(.+)|)$/;
    ee.event = {
            global: {},
            add: function(e, n, r, i, a) {
                var o, s, u, l, c, d, f, p, h, m, g, v = 3 !== e.nodeType && 8 !== e.nodeType && ee._data(e);
                if (v) {
                    for (r.handler && (r = (o = r).handler, a = o.selector), r.guid || (r.guid = ee.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || ((s = v.handle = function(e) { return ee === t || e && ee.event.triggered === e.type ? t : ee.event.dispatch.apply(s.elem, arguments) }).elem = e), c = (n = (n || "").match(ne) || [""]).length; c--;) h = g = (u = je.exec(n[c]) || [])[1], m = (u[2] || "").split(".").sort(), f = ee.event.special[h] || {}, h = (a ? f.delegateType : f.bindType) || h, f = ee.event.special[h] || {}, d = ee.extend({ type: h, origType: g, data: i, handler: r, guid: r.guid, selector: a, needsContext: a && ee.expr.match.needsContext.test(a), namespace: m.join(".") }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, m, s) || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))), f.add && (f.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? p.splice(p.delegateCount++, 0, d) : p.push(d), ee.event.global[h] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var a, o, s, u, l, c, d, f, p, h, m, g = ee.hasData(e) && ee._data(e);
                if (g && (u = g.events)) {
                    for (l = (t = (t || "").match(ne) || [""]).length; l--;)
                        if (p = m = (s = je.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = ee.event.special[p] || {}, f = u[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = f.length; a--;) c = f[a], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(a, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                            o && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || ee.removeEvent(e, p, g.handle), delete u[p])
                        } else
                            for (p in u) ee.event.remove(e, p + t[l], n, r, !0);
                    ee.isEmptyObject(u) && (delete g.handle, ee._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, a) {
                var o, s, u, l, c, d, f, p = [i || B],
                    h = n.type || n,
                    m = n.namespace ? n.namespace.split(".") : [];
                if (s = u = i = i || B, 3 !== i.nodeType && 8 !== i.nodeType && !Ae.test(h + ee.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), c = 0 > h.indexOf(":") && "on" + h, (n = n[ee.expando] ? n : new ee.Event(h, "object" == typeof n && n)).isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ee.makeArray(r, [n]), f = ee.event.special[h] || {}, a || !f.trigger || !1 !== f.trigger.apply(i, r))) {
                    if (!a && !f.noBubble && !ee.isWindow(i)) {
                        for (l = f.delegateType || h, Ae.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
                        u === (i.ownerDocument || B) && p.push(u.defaultView || u.parentWindow || e)
                    }
                    for (o = 0;
                        (s = p[o++]) && !n.isPropagationStopped();) n.type = o > 1 ? l : f.bindType || h, (d = (ee._data(s, "events") || {})[n.type] && ee._data(s, "handle")) && d.apply(s, r), (d = c && s[c]) && ee.acceptData(s) && d.apply && !1 === d.apply(s, r) && n.preventDefault();
                    if (n.type = h, !(a || n.isDefaultPrevented() || f._default && !1 !== f._default.apply(i.ownerDocument, r) || "click" === h && ee.nodeName(i, "a")) && ee.acceptData(i) && c && i[h] && !ee.isWindow(i)) {
                        (u = i[c]) && (i[c] = null), ee.event.triggered = h;
                        try { i[h]() } catch (e) {}
                        ee.event.triggered = t, u && (i[c] = u)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ee.event.fix(e);
                var n, r, i, a, o, s = [],
                    u = Q.call(arguments),
                    l = (ee._data(this, "events") || {})[e.type] || [],
                    c = ee.event.special[e.type] || {};
                if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (s = ee.event.handlers.call(this, e, l), n = 0;
                        (a = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = a.elem, r = 0;
                            (o = a.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, (i = ((ee.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, u)) !== t && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, a, o, s = [],
                    u = n.delegateCount,
                    l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (!0 !== l.disabled || "click" !== e.type) {
                            for (i = [], r = 0; u > r; r++) i[a = (o = n[r]).selector + " "] === t && (i[a] = o.needsContext ? ee(a, this).index(l) >= 0 : ee.find(a, this, null, [l]).length), i[a] && i.push(o);
                            i.length && s.push({ elem: l, handlers: i })
                        }
                return n.length > u && s.push({ elem: this, handlers: n.slice(u) }), s
            },
            fix: function(e) {
                if (e[ee.expando]) return e;
                var t, n, r = e,
                    i = ee.event.fixHooks[e.type] || {},
                    a = i.props ? this.props.concat(i.props) : this.props;
                for (e = new ee.Event(r), t = a.length; t--;) e[n = a[t]] = r[n];
                return e.target || (e.target = r.srcElement || B), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, a, o = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = (r = e.target.ownerDocument || B).documentElement, a = r.body, e.pageX = n.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: { load: { noBubble: !0 }, click: { trigger: function() { return ee.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t } }, focus: { trigger: function() { if (this !== B.activeElement && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === B.activeElement && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, beforeunload: { postDispatch: function(e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } },
            simulate: function(e, t, n, r) {
                var i = ee.extend(new ee.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                r ? ee.event.trigger(i, null, t) : ee.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, ee.removeEvent = B.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, n, r) {
            var i = "on" + n;
            e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r))
        }, ee.Event = function(e, n) { return this instanceof ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? s : u) : this.type = e, n && ee.extend(this, n), this.timeStamp = e && e.timeStamp || ee.now(), this[ee.expando] = !0, t) : new ee.Event(e, n) }, ee.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = s, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = s, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() { this.isImmediatePropagationStopped = s, this.stopPropagation() }
        }, ee.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
            ee.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget,
                        i = e.handleObj;
                    return (!r || r !== this && !ee.contains(this, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ee.support.submitBubbles || (ee.event.special.submit = {
            setup: function() {
                return !ee.nodeName(this, "form") && (ee.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = ee.nodeName(n, "input") || ee.nodeName(n, "button") ? n.form : t;
                    r && !ee._data(r, "submitBubbles") && (ee.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), ee._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ee.event.simulate("submit", this.parentNode, e, !0)) },
            teardown: function() { return !ee.nodeName(this, "form") && (ee.event.remove(this, "._submit"), t) }
        }), ee.support.changeBubbles || (ee.event.special.change = {
            setup: function() {
                return Ee.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ee.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), ee.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), ee.event.simulate("change", this, e, !0) })), !1) : (ee.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ee.test(t.nodeName) && !ee._data(t, "changeBubbles") && (ee.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || ee.event.simulate("change", this.parentNode, e, !0) }), ee._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t },
            teardown: function() { return ee.event.remove(this, "._change"), !Ee.test(this.nodeName) }
        }), ee.support.focusinBubbles || ee.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = 0,
                r = function(e) { ee.event.simulate(t, e.target, ee.event.fix(e), !0) };
            ee.event.special[t] = { setup: function() { 0 == n++ && B.addEventListener(e, r, !0) }, teardown: function() { 0 == --n && B.removeEventListener(e, r, !0) } }
        }), ee.fn.extend({
            on: function(e, n, r, i, a) {
                var o, s;
                if ("object" == typeof e) { for (s in "string" != typeof n && (r = r || n, n = t), e) this.on(s, n, r, e[s], a); return this }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = u;
                else if (!i) return this;
                return 1 === a && (o = i, (i = function(e) { return ee().off(e), o.apply(this, arguments) }).guid = o.guid || (o.guid = ee.guid++)), this.each(function() { ee.event.add(this, e, i, r, n) })
            },
            one: function(e, t, n, r) { return this.on(e, t, n, r, 1) },
            off: function(e, n, r) { var i, a; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ee(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (a in e) this.off(a, n, e[a]); return this } return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = u), this.each(function() { ee.event.remove(this, e, r, n) }) },
            bind: function(e, t, n) { return this.on(e, null, t, n) },
            unbind: function(e, t) { return this.off(e, null, t) },
            delegate: function(e, t, n, r) { return this.on(t, e, n, r) },
            undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) },
            trigger: function(e, t) { return this.each(function() { ee.event.trigger(e, t, this) }) },
            triggerHandler: function(e, n) { var r = this[0]; return r ? ee.event.trigger(e, n, r, !0) : t },
            hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }
        }), ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { ee.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) }, Se.test(t) && (ee.event.fixHooks[t] = ee.event.keyHooks), De.test(t) && (ee.event.fixHooks[t] = ee.event.mouseHooks) }),
        function(e, t) {
            function n(e) { return de.test(e + "") }

            function r() { var e, t = []; return e = function(n, r) { return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r } }

            function i(e) { return e[R] = !0, e }

            function a(e) { var t = A.createElement("div"); try { return e(t) } catch (e) { return !1 } finally { t = null } }

            function o(e, t, n, r) {
                var i, a, o, s, u, l, c, p, h, m;
                if ((t ? t.ownerDocument || t : O) !== A && D(t), n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = (t = t || A).nodeType) && 9 !== s) return [];
                if (!L && !r) {
                    if (i = fe.exec(e))
                        if (o = i[1]) { if (9 === s) { if (!(a = t.getElementById(o)) || !a.parentNode) return n; if (a.id === o) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && H(t, a) && a.id === o) return n.push(a), n } else { if (i[2]) return Q.apply(n, G.call(t.getElementsByTagName(e), 0)), n; if ((o = i[3]) && B.getByClassName && t.getElementsByClassName) return Q.apply(n, G.call(t.getElementsByClassName(o), 0)), n }
                    if (B.qsa && !_.test(e)) {
                        if (c = !0, p = R, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = d(e), (c = t.getAttribute("id")) ? p = c.replace(me, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
                            h = ce.test(e) && t.parentNode || t, m = l.join(",")
                        }
                        if (m) try { return Q.apply(n, G.call(h.querySelectorAll(m), 0)), n } catch (e) {} finally { c || t.removeAttribute("id") }
                    }
                }
                return function(e, t, n, r) {
                    var i, a, o, s, u, l = d(e);
                    if (!r && 1 === l.length) {
                        if ((a = l[0] = l[0].slice(0)).length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && !L && C.relative[a[1].type]) {
                            if (!(t = C.find.ID(o.matches[0].replace(ve, ye), t)[0])) return n;
                            e = e.slice(a.shift().value.length)
                        }
                        for (i = le.needsContext.test(e) ? -1 : a.length - 1; i >= 0 && (o = a[i], !C.relative[s = o.type]); i--)
                            if ((u = C.find[s]) && (r = u(o.matches[0].replace(ve, ye), ce.test(a[0].type) && t.parentNode || t))) { if (a.splice(i, 1), !(e = r.length && f(a))) return Q.apply(n, G.call(r, 0)), n; break }
                    }
                    return N(e, l)(r, t, L, n, ce.test(e)), n
                }(e.replace(ie, "$1"), t, n, r)
            }

            function s(e, t) {
                for (var n = e && t && e.nextSibling; n; n = n.nextSibling)
                    if (n === t) return -1;
                return e ? 1 : -1
            }

            function u(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

            function l(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function c(e) { return i(function(t) { return t = +t, i(function(n, r) { for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i])) }) }) }

            function d(e, t) { var n, r, i, a, s, u, l, c = $[e + " "]; if (c) return t ? 0 : c.slice(0); for (s = e, u = [], l = C.preFilter; s;) { for (a in (!n || (r = ae.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = oe.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(ie, " ") }), s = s.slice(n.length)), C.filter) !(r = le[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? o.error(e) : $(e, u).slice(0) }

            function f(e) { for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value; return r }

            function p(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === t.dir,
                    a = I++;
                return t.first ? function(t, n, a) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, a)
                } : function(t, n, o) {
                    var s, u, l, c = z + " " + a;
                    if (o) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if ((u = (l = t[R] || (t[R] = {}))[r]) && u[0] === c) { if (!0 === (s = u[1]) || s === T) return !0 === s } else if ((u = l[r] = [c])[1] = e(t, n, o) || T, !0 === u[1]) return !0
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, t, n, r, i) { for (var a, o = [], s = 0, u = e.length, l = null != t; u > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), l && t.push(s)); return o }

            function g(e, t, n, r, a, o) {
                return r && !r[R] && (r = g(r)), a && !a[R] && (a = g(a, o)), i(function(i, o, s, u) {
                    var l, c, d, f = [],
                        p = [],
                        h = o.length,
                        g = i || b(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !i && t ? g : m(g, f, e, s, u),
                        y = n ? a || (i ? e : h || r) ? [] : o : v;
                    if (n && n(v, y, s, u), r)
                        for (l = m(y, p), r(l, [], s, u), c = l.length; c--;)(d = l[c]) && (y[p[c]] = !(v[p[c]] = d));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (l = [], c = y.length; c--;)(d = y[c]) && l.push(v[c] = d);
                                a(null, y = [], l, u)
                            }
                            for (c = y.length; c--;)(d = y[c]) && (l = a ? J.call(i, d) : f[c]) > -1 && (i[l] = !(o[l] = d))
                        }
                    } else y = m(y === o ? y.splice(h, y.length) : y), a ? a(null, o, y, u) : Q.apply(o, y)
                })
            }

            function v(e) {
                for (var t, n, r, i = e.length, a = C.relative[e[0].type], o = a || C.relative[" "], s = a ? 1 : 0, u = p(function(e) { return e === t }, o, !0), l = p(function(e) { return J.call(t, e) > -1 }, o, !0), c = [function(e, n, r) { return !a && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)) }]; i > s; s++)
                    if (n = C.relative[e[s].type]) c = [p(h(c), n)];
                    else {
                        if ((n = C.filter[e[s].type].apply(null, e[s].matches))[R]) { for (r = ++s; i > r && !C.relative[e[r].type]; r++); return g(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1)).replace(ie, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && f(e)) }
                        c.push(n)
                    }
                return h(c)
            }

            function y(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(i, s, u, l, c) {
                        var d, f, p, h = [],
                            g = 0,
                            v = "0",
                            y = i && [],
                            b = null != c,
                            x = S,
                            w = i || a && C.find.TAG("*", c && s.parentNode || s),
                            k = z += null == x ? 1 : Math.E;
                        for (b && (S = s !== A && s, T = n); null != (d = w[v]); v++) {
                            if (a && d) {
                                for (f = 0; p = e[f]; f++)
                                    if (p(d, s, u)) { l.push(d); break }
                                b && (z = k, T = ++n)
                            }
                            r && ((d = !p && d) && g--, i && y.push(d))
                        }
                        if (g += v, r && v !== g) {
                            for (f = 0; p = t[f]; f++) p(y, h, s, u);
                            if (i) {
                                if (g > 0)
                                    for (; v--;) y[v] || h[v] || (h[v] = Y.call(l));
                                h = m(h)
                            }
                            Q.apply(l, h), b && !i && h.length > 0 && g + t.length > 1 && o.uniqueSort(l)
                        }
                        return b && (z = k, S = x), y
                    };
                return r ? i(s) : s
            }

            function b(e, t, n) { for (var r = 0, i = t.length; i > r; r++) o(e, t[r], n); return n }

            function x() {}
            var w, T, C, k, F, N, E, S, D, A, j, L, _, q, M, H, P, R = "sizzle" + -new Date,
                O = e.document,
                B = {},
                z = 0,
                I = 0,
                W = r(),
                $ = r(),
                X = r(),
                V = typeof t,
                U = [],
                Y = U.pop,
                Q = U.push,
                G = U.slice,
                J = U.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                Z = "[\\x20\\t\\r\\n\\f]",
                K = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                te = K.replace("w", "w#"),
                ne = "\\[" + Z + "*(" + K + ")" + Z + "*(?:([*^$|!~]?=)" + Z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + te + ")|)|)" + Z + "*\\]",
                re = ":(" + K + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ne.replace(3, 8) + ")*)|.*)\\)|)",
                ie = RegExp("^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$", "g"),
                ae = RegExp("^" + Z + "*," + Z + "*"),
                oe = RegExp("^" + Z + "*([\\x20\\t\\r\\n\\f>+~])" + Z + "*"),
                se = RegExp(re),
                ue = RegExp("^" + te + "$"),
                le = { ID: RegExp("^#(" + K + ")"), CLASS: RegExp("^\\.(" + K + ")"), NAME: RegExp("^\\[name=['\"]?(" + K + ")['\"]?\\]"), TAG: RegExp("^(" + K.replace("w", "w*") + ")"), ATTR: RegExp("^" + ne), PSEUDO: RegExp("^" + re), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Z + "*(even|odd|(([+-]|)(\\d*)n|)" + Z + "*(?:([+-]|)" + Z + "*(\\d+)|))" + Z + "*\\)|)", "i"), needsContext: RegExp("^" + Z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Z + "*((?:-\\d)?\\d*)" + Z + "*\\)|)(?=[^-]|$)", "i") },
                ce = /[\x20\t\r\n\f]*[+~]/,
                de = /\{\s*\[native code\]\s*\}/,
                fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                pe = /^(?:input|select|textarea|button)$/i,
                he = /^h\d$/i,
                me = /'|\\/g,
                ge = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                ve = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                ye = function(e, t) { var n = "0x" + t - 65536; return n != n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n) };
            try { G.call(j.childNodes, 0)[0].nodeType } catch (e) { G = function(e) { for (var t, n = []; t = this[e]; e++) n.push(t); return n } }
            for (w in F = o.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, D = o.setDocument = function(e) {
                    var r = e ? e.ownerDocument || e : O;
                    return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, j = r.documentElement, L = F(r), B.tagNameNoComments = a(function(e) { return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), B.attributes = a(function(e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), B.getByClassName = a(function(e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) }), B.getByName = a(function(e) { e.id = R + 0, e.innerHTML = "<a name='" + R + "'></a><div name='" + R + "'></div>", j.insertBefore(e, j.firstChild); var t = r.getElementsByName && r.getElementsByName(R).length === 2 + r.getElementsByName(R + 0).length; return B.getIdNotName = !r.getElementById(R), j.removeChild(e), t }), C.attrHandle = a(function(e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function(e) { return e.getAttribute("href", 2) }, type: function(e) { return e.getAttribute("type") } }, B.getIdNotName ? (C.find.ID = function(e, t) { if (typeof t.getElementById !== V && !L) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, C.filter.ID = function(e) { var t = e.replace(ve, ye); return function(e) { return e.getAttribute("id") === t } }) : (C.find.ID = function(e, n) { if (typeof n.getElementById !== V && !L) { var r = n.getElementById(e); return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : [] } }, C.filter.ID = function(e) { var t = e.replace(ve, ye); return function(e) { var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id"); return n && n.value === t } }), C.find.TAG = B.tagNameNoComments ? function(e, n) { return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) { for (; n = a[i]; i++) 1 === n.nodeType && r.push(n); return r }
                        return a
                    }, C.find.NAME = B.getByName && function(e, n) { return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t }, C.find.CLASS = B.getByClassName && function(e, n) { return typeof n.getElementsByClassName === V || L ? t : n.getElementsByClassName(e) }, q = [], _ = [":focus"], (B.qsa = n(r.querySelectorAll)) && (a(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || _.push("\\[" + Z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || _.push(":checked") }), a(function(e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && _.push("[*^$]=" + Z + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:") })), (B.matchesSelector = n(M = j.matchesSelector || j.mozMatchesSelector || j.webkitMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && a(function(e) { B.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), q.push("!=", re) }), _ = RegExp(_.join("|")), q = RegExp(q.join("|")), H = n(j.contains) || j.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, P = j.compareDocumentPosition ? function(e, t) { var n; return e === t ? (E = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || H(O, e) ? -1 : t === r || H(O, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                        var n, i = 0,
                            a = e.parentNode,
                            o = t.parentNode,
                            u = [e],
                            l = [t];
                        if (e === t) return E = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || 1 << 31) - (H(O, e) && ~e.sourceIndex || 1 << 31);
                        if (!a || !o) return e === r ? -1 : t === r ? 1 : a ? -1 : o ? 1 : 0;
                        if (a === o) return s(e, t);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; u[i] === l[i];) i++;
                        return i ? s(u[i], l[i]) : u[i] === O ? -1 : l[i] === O ? 1 : 0
                    }, E = !1, [0, 0].sort(P), B.detectDuplicates = E, A) : A
                }, o.matches = function(e, t) { return o(e, null, null, t) }, o.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== A && D(e), t = t.replace(ge, "='$1']"), !(!B.matchesSelector || L || q && q.test(t) || _.test(t))) try { var n = M.call(e, t); if (n || B.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) {}
                    return o(t, A, null, [e]).length > 0
                }, o.contains = function(e, t) { return (e.ownerDocument || e) !== A && D(e), H(e, t) }, o.attr = function(e, t) { var n; return (e.ownerDocument || e) !== A && D(e), L || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : L || B.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : n && n.specified ? n.value : null }, o.error = function(e) { throw Error("Syntax error, unrecognized expression: " + e) }, o.uniqueSort = function(e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    if (E = !B.detectDuplicates, e.sort(P), E) { for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
                    return e
                }, k = o.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += k(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                        for (; t = e[r]; r++) n += k(t);
                    return n
                }, C = o.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: le,
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function(e) { return e[1] = e[1].replace(ve, ye), e[3] = (e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[5] && e[2]; return le.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && se.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                    filter: {
                        TAG: function(e) { return "*" === e ? function() { return !0 } : (e = e.replace(ve, ye).toLowerCase(), function(t) { return t.nodeName && t.nodeName.toLowerCase() === e }) },
                        CLASS: function(e) { var t = W[e + " "]; return t || (t = RegExp("(^|" + Z + ")" + e + "(" + Z + "|$)")) && W(e, function(e) { return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "") }) },
                        ATTR: function(e, t, n) { return function(r) { var i = o.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.substr(0, n.length + 1) === n + "-")) } },
                        CHILD: function(e, t, n, r, i) {
                            var a = "nth" !== e.slice(0, 3),
                                o = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                                var l, c, d, f, p, h, m = a !== o ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s;
                                if (g) {
                                    if (a) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [o ? g.firstChild : g.lastChild], o && y) {
                                        for (p = (l = (c = g[R] || (g[R] = {}))[e] || [])[0] === z && l[1], f = l[0] === z && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++f && d === t) { c[e] = [z, p, f]; break }
                                    } else if (y && (l = (t[R] || (t[R] = {}))[e]) && l[0] === z) f = l[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[R] || (d[R] = {}))[e] = [z, f]), d !== t)););
                                    return (f -= i) === r || 0 == f % r && f / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) { var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e); return r[R] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) { for (var i, a = r(e, t), o = a.length; o--;) e[i = J.call(e, a[o])] = !(n[i] = a[o]) }) : function(e) { return r(e, 0, n) }) : r }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = N(e.replace(ie, "$1"));
                            return r[R] ? i(function(e, t, n, i) { for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a)) }) : function(e, i, a) { return t[0] = e, r(t, null, a, n), !n.pop() }
                        }),
                        has: i(function(e) { return function(t) { return o(e, t).length > 0 } }),
                        contains: i(function(e) { return function(t) { return (t.textContent || t.innerText || k(t)).indexOf(e) > -1 } }),
                        lang: i(function(e) {
                            return ue.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                                function(t) {
                                    var n;
                                    do { if (n = L ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                        root: function(e) { return e === j },
                        focus: function(e) { return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                        enabled: function(e) { return !1 === e.disabled },
                        disabled: function(e) { return !0 === e.disabled },
                        checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                        selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) { return !C.pseudos.empty(e) },
                        header: function(e) { return he.test(e.nodeName) },
                        input: function(e) { return pe.test(e.nodeName) },
                        button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                        text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) },
                        first: c(function() { return [0] }),
                        last: c(function(e, t) { return [t - 1] }),
                        eq: c(function(e, t, n) { return [0 > n ? n + t : n] }),
                        even: c(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                        odd: c(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                        lt: c(function(e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r); return e }),
                        gt: c(function(e, t, n) { for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r); return e })
                    }
                }, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[w] = u(w);
            for (w in { submit: !0, reset: !0 }) C.pseudos[w] = l(w);
            N = o.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    a = X[e + " "];
                if (!a) {
                    for (t || (t = d(e)), n = t.length; n--;)(a = v(t[n]))[R] ? r.push(a) : i.push(a);
                    a = X(e, y(i, r))
                }
                return a
            }, C.pseudos.nth = C.pseudos.eq, C.filters = x.prototype = C.pseudos, C.setFilters = new x, D(), o.attr = ee.attr, ee.find = o, ee.expr = o.selectors, ee.expr[":"] = ee.expr.pseudos, ee.unique = o.uniqueSort, ee.text = o.getText, ee.isXMLDoc = o.isXML, ee.contains = o.contains
        }(e);
    var Le = /Until$/,
        _e = /^(?:parents|prev(?:Until|All))/,
        qe = /^.[^:#\[\.,]*$/,
        Me = ee.expr.match.needsContext,
        He = { children: !0, contents: !0, next: !0, prev: !0 };
    ee.fn.extend({
        find: function(e) {
            var t, n, r;
            if ("string" != typeof e) return r = this, this.pushStack(ee(e).filter(function() {
                for (t = 0; r.length > t; t++)
                    if (ee.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; this.length > t; t++) ee.find(e, this[t], n);
            return (n = this.pushStack(ee.unique(n))).selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = ee(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ee.contains(this, n[t])) return !0
            })
        },
        not: function(e) { return this.pushStack(c(this, e, !1)) },
        filter: function(e) { return this.pushStack(c(this, e, !0)) },
        is: function(e) { return !!e && ("string" == typeof e ? Me.test(e) ? ee(e, this.context).index(this[0]) >= 0 : ee.filter(e, this).length > 0 : this.filter(e).length > 0) },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, a = [], o = Me.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (o ? o.index(n) > -1 : ee.find.matchesSelector(n, e)) { a.push(n); break }
                    n = n.parentNode
                }
            return this.pushStack(a.length > 1 ? ee.unique(a) : a)
        },
        index: function(e) { return e ? "string" == typeof e ? ee.inArray(this[0], ee(e)) : ee.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) {
            var n = "string" == typeof e ? ee(e, t) : ee.makeArray(e && e.nodeType ? [e] : e),
                r = ee.merge(this.get(), n);
            return this.pushStack(ee.unique(r))
        },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), ee.fn.andSelf = ee.fn.addBack, ee.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return ee.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return ee.dir(e, "parentNode", n) }, next: function(e) { return l(e, "nextSibling") }, prev: function(e) { return l(e, "previousSibling") }, nextAll: function(e) { return ee.dir(e, "nextSibling") }, prevAll: function(e) { return ee.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return ee.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return ee.dir(e, "previousSibling", n) }, siblings: function(e) { return ee.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return ee.sibling(e.firstChild) }, contents: function(e) { return ee.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ee.merge([], e.childNodes) } }, function(e, t) { ee.fn[e] = function(n, r) { var i = ee.map(this, t, n); return Le.test(e) || (r = n), r && "string" == typeof r && (i = ee.filter(r, i)), i = this.length > 1 && !He[e] ? ee.unique(i) : i, this.length > 1 && _e.test(e) && (i = i.reverse()), this.pushStack(i) } }), ee.extend({ filter: function(e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? ee.find.matchesSelector(t[0], e) ? [t[0]] : [] : ee.find.matches(e, t) }, dir: function(e, n, r) { for (var i = [], a = e[n]; a && 9 !== a.nodeType && (r === t || 1 !== a.nodeType || !ee(a).is(r));) 1 === a.nodeType && i.push(a), a = a[n]; return i }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } });
    var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Re = / jQuery\d+="(?:null|\d+)"/g,
        Oe = RegExp("<(?:" + Pe + ")[\\s/>]", "i"),
        Be = /^\s+/,
        ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        We = /<tbody/i,
        $e = /<|&#?\w+;/,
        Xe = /<(?:script|style|link)/i,
        Ve = /^(?:checkbox|radio)$/i,
        Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ye = /^$|\/(?:java|ecma)script/i,
        Qe = /^true\/(.*)/,
        Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Je = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ee.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        Ze = d(B).appendChild(B.createElement("div"));
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, ee.fn.extend({
        text: function(e) { return ee.access(this, function(e) { return e === t ? ee.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(e)) }, null, e, arguments.length) },
        wrapAll: function(e) {
            if (ee.isFunction(e)) return this.each(function(t) { ee(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = ee(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ee.isFunction(e) ? this.each(function(t) { ee(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = ee(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = ee.isFunction(e); return this.each(function(n) { ee(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes) }).end() },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() { return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) { for (var n, r = 0; null != (n = this[r]); r++)(!e || ee.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ee.cleanData(y(n)), n.parentNode && (t && ee.contains(n.ownerDocument, n) && m(y(n, "script")), n.parentNode.removeChild(n))); return this },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ee.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ee.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return ee.clone(this, e, t) }) },
        html: function(e) {
            return ee.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Re, "") : t;
                if (!("string" != typeof e || Xe.test(e) || !ee.support.htmlSerialize && Oe.test(e) || !ee.support.leadingWhitespace && Be.test(e) || Je[(Ie.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ze, "<$1></$2>");
                    try {
                        for (; i > r; r++) 1 === (n = this[r] || {}).nodeType && (ee.cleanData(y(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return ee.isFunction(e) || "string" == typeof e || (e = ee(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                (n && 1 === this.nodeType || 11 === this.nodeType) && (ee(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
            })
        },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, n, r) {
            e = U.apply([], e);
            var i, a, o, s, u, l, c = 0,
                d = this.length,
                m = this,
                g = d - 1,
                v = e[0],
                b = ee.isFunction(v);
            if (b || !(1 >= d || "string" != typeof v || ee.support.checkClone) && Ue.test(v)) return this.each(function(i) {
                var a = m.eq(i);
                b && (e[0] = v.call(this, i, n ? a.html() : t)), a.domManip(e, n, r)
            });
            if (d && (a = (i = ee.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === i.childNodes.length && (i = a), a)) {
                for (n = n && ee.nodeName(a, "tr"), s = (o = ee.map(y(i, "script"), p)).length; d > c; c++) u = i, c !== g && (u = ee.clone(u, !0, !0), s && ee.merge(o, y(u, "script"))), r.call(n && ee.nodeName(this[c], "table") ? f(this[c], "tbody") : this[c], u, c);
                if (s)
                    for (l = o[o.length - 1].ownerDocument, ee.map(o, h), c = 0; s > c; c++) u = o[c], Ye.test(u.type || "") && !ee._data(u, "globalEval") && ee.contains(l, u) && (u.src ? ee.ajax({ url: u.src, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) : ee.globalEval((u.text || u.textContent || u.innerHTML || "").replace(Ge, "")));
                i = a = null
            }
            return this
        }
    }), ee.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { ee.fn[e] = function(e) { for (var n, r = 0, i = [], a = ee(e), o = a.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), ee(a[r])[t](n), Y.apply(i, n.get()); return this.pushStack(i) } }), ee.extend({
        clone: function(e, t, n) {
            var r, i, a, o, s, u = ee.contains(e.ownerDocument, e);
            if (ee.support.html5Clone || ee.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ze.innerHTML = e.outerHTML, Ze.removeChild(s = Ze.firstChild)), !(ee.support.noCloneEvent && ee.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ee.isXMLDoc(e)))
                for (r = y(s), i = y(e), o = 0; null != (a = i[o]); ++o) r[o] && v(a, r[o]);
            if (t)
                if (n)
                    for (i = i || y(e), r = r || y(s), o = 0; null != (a = i[o]); o++) g(a, r[o]);
                else g(e, s);
            return (r = y(s, "script")).length > 0 && m(r, !u && y(e, "script")), r = i = a = null, s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, a, o, s, u, l, c, f = e.length, p = d(t), h = [], g = 0; f > g; g++)
                if ((a = e[g]) || 0 === a)
                    if ("object" === ee.type(a)) ee.merge(h, a.nodeType ? [a] : a);
                    else if ($e.test(a)) {
                for (s = s || p.appendChild(t.createElement("div")), o = (Ie.exec(a) || ["", ""])[1].toLowerCase(), u = Je[o] || Je._default, s.innerHTML = u[1] + a.replace(ze, "<$1></$2>") + u[2], c = u[0]; c--;) s = s.lastChild;
                if (!ee.support.leadingWhitespace && Be.test(a) && h.push(t.createTextNode(Be.exec(a)[0])), !ee.support.tbody)
                    for (c = (a = "table" !== o || We.test(a) ? "<table>" !== u[1] || We.test(a) ? 0 : s : s.firstChild) && a.childNodes.length; c--;) ee.nodeName(l = a.childNodes[c], "tbody") && !l.childNodes.length && a.removeChild(l);
                for (ee.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(t.createTextNode(a));
            for (s && p.removeChild(s), ee.support.appendChecked || ee.grep(y(h, "input"), b), g = 0; a = h[g++];)
                if ((!r || -1 === ee.inArray(a, r)) && (i = ee.contains(a.ownerDocument, a), s = y(p.appendChild(a), "script"), i && m(s), n))
                    for (c = 0; a = s[c++];) Ye.test(a.type || "") && n.push(a);
            return s = null, p
        },
        cleanData: function(e, n) {
            for (var r, i, a, o, s = 0, u = ee.expando, l = ee.cache, c = ee.support.deleteExpando, d = ee.event.special; null != (a = e[s]); s++)
                if ((n || ee.acceptData(a)) && (r = (i = a[u]) && l[i])) {
                    if (r.events)
                        for (o in r.events) d[o] ? ee.event.remove(a, o) : ee.removeEvent(a, o, r.handle);
                    l[i] && (delete l[i], c ? delete a[u] : a.removeAttribute !== t ? a.removeAttribute(u) : a[u] = null, X.push(i))
                }
        }
    });
    var Ke, et, tt, nt = /alpha\([^)]*\)/i,
        rt = /opacity\s*=\s*([^)]*)/,
        it = /^(top|right|bottom|left)$/,
        at = /^(none|table(?!-c[ea]).+)/,
        ot = /^margin/,
        st = RegExp("^(" + te + ")(.*)$", "i"),
        ut = RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        lt = RegExp("^([+-])=(" + te + ")", "i"),
        ct = { BODY: "block" },
        dt = { position: "absolute", visibility: "hidden", display: "block" },
        ft = { letterSpacing: 0, fontWeight: 400 },
        pt = ["Top", "Right", "Bottom", "Left"],
        ht = ["Webkit", "O", "Moz", "ms"];
    ee.fn.extend({
        css: function(e, n) {
            return ee.access(this, function(e, n, r) {
                var i, a, o = {},
                    s = 0;
                if (ee.isArray(n)) { for (i = et(e), a = n.length; a > s; s++) o[n[s]] = ee.css(e, n[s], !1, i); return o }
                return r !== t ? ee.style(e, n, r) : ee.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() { return T(this, !0) },
        hide: function() { return T(this) },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : w(this)) ? ee(this).show(): ee(this).hide()
            })
        }
    }), ee.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Ke(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: ee.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, o, s, u = ee.camelCase(n),
                    l = e.style;
                if (n = ee.cssProps[u] || (ee.cssProps[u] = x(l, u)), s = ee.cssHooks[n] || ee.cssHooks[u], r === t) return s && "get" in s && (a = s.get(e, !1, i)) !== t ? a : l[n];
                if ("string" === (o = typeof r) && (a = lt.exec(r)) && (r = (a[1] + 1) * a[2] + parseFloat(ee.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || ee.cssNumber[u] || (r += "px"), ee.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { l[n] = r } catch (e) {}
            }
        },
        css: function(e, n, r, i) { var a, o, s, u = ee.camelCase(n); return n = ee.cssProps[u] || (ee.cssProps[u] = x(e.style, u)), (s = ee.cssHooks[n] || ee.cssHooks[u]) && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Ke(e, n, i)), "normal" === a && n in ft && (a = ft[n]), r ? (o = parseFloat(a), !0 === r || ee.isNumeric(o) ? o || 0 : a) : a },
        swap: function(e, t, n, r) { var i, a, o = {}; for (a in t) o[a] = e.style[a], e.style[a] = t[a]; for (a in i = n.apply(e, r || []), t) e.style[a] = o[a]; return i }
    }), e.getComputedStyle ? (et = function(t) { return e.getComputedStyle(t, null) }, Ke = function(e, n, r) {
        var i, a, o, s = r || et(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || ee.contains(e.ownerDocument, e) || (u = ee.style(e, n)), ut.test(u) && ot.test(n) && (i = l.width, a = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = a, l.maxWidth = o)), u
    }) : B.documentElement.currentStyle && (et = function(e) { return e.currentStyle }, Ke = function(e, n, r) {
        var i, a, o, s = r || et(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), ut.test(u) && !it.test(n) && (i = l.left, (o = (a = e.runtimeStyle) && a.left) && (a.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, o && (a.left = o)), "" === u ? "auto" : u
    }), ee.each(["height", "width"], function(e, n) { ee.cssHooks[n] = { get: function(e, r, i) { return r ? 0 === e.offsetWidth && at.test(ee.css(e, "display")) ? ee.swap(e, dt, function() { return F(e, n, i) }) : F(e, n, i) : t }, set: function(e, t, r) { var i = r && et(e); return C(0, t, r ? k(e, n, r, ee.support.boxSizing && "border-box" === ee.css(e, "boxSizing", !1, i), i) : 0) } } }), ee.support.opacity || (ee.cssHooks.opacity = {
        get: function(e, t) { return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ee.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                a = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ee.trim(a.replace(nt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = nt.test(a) ? a.replace(nt, i) : a + " " + i)
        }
    }), ee(function() { ee.support.reliableMarginRight || (ee.cssHooks.marginRight = { get: function(e, n) { return n ? ee.swap(e, { display: "inline-block" }, Ke, [e, "marginRight"]) : t } }), !ee.support.pixelPosition && ee.fn.position && ee.each(["top", "left"], function(e, n) { ee.cssHooks[n] = { get: function(e, r) { return r ? (r = Ke(e, n), ut.test(r) ? ee(e).position()[n] + "px" : r) : t } } }) }), ee.expr && ee.expr.filters && (ee.expr.filters.hidden = function(e) { return 0 === e.offsetWidth && 0 === e.offsetHeight || !ee.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ee.css(e, "display")) }, ee.expr.filters.visible = function(e) { return !ee.expr.filters.hidden(e) }), ee.each({ margin: "", padding: "", border: "Width" }, function(e, t) { ee.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + pt[r] + t] = a[r] || a[r - 2] || a[0]; return i } }, ot.test(e) || (ee.cssHooks[e + t].set = C) });
    var mt = /%20/g,
        gt = /\[\]$/,
        vt = /\r?\n/g,
        yt = /^(?:submit|button|image|reset)$/i,
        bt = /^(?:input|select|textarea|keygen)/i;
    ee.fn.extend({ serialize: function() { return ee.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = ee.prop(this, "elements"); return e ? ee.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !ee(this).is(":disabled") && bt.test(this.nodeName) && !yt.test(e) && (this.checked || !Ve.test(e)) }).map(function(e, t) { var n = ee(this).val(); return null == n ? null : ee.isArray(n) ? ee.map(n, function(e) { return { name: t.name, value: e.replace(vt, "\r\n") } }) : { name: t.name, value: n.replace(vt, "\r\n") } }).get() } }), ee.param = function(e, n) {
        var r, i = [],
            a = function(e, t) { t = ee.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (n === t && (n = ee.ajaxSettings && ee.ajaxSettings.traditional), ee.isArray(e) || e.jquery && !ee.isPlainObject(e)) ee.each(e, function() { a(this.name, this.value) });
        else
            for (r in e) S(r, e[r], n, a);
        return i.join("&").replace(mt, "+")
    };
    var xt, wt, Tt = ee.now(),
        Ct = /\?/,
        kt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Et = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Dt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        At = ee.fn.load,
        jt = {},
        Lt = {},
        _t = "*/".concat("*");
    try { wt = z.href } catch (e) {
        (wt = B.createElement("a")).href = "", wt = wt.href
    }
    xt = Dt.exec(wt.toLowerCase()) || [], ee.fn.load = function(e, n, r) {
        if ("string" != typeof e && At) return At.apply(this, arguments);
        var i, a, o, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ee.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ee.ajax({ url: e, type: a, dataType: "html", data: n }).done(function(e) { o = arguments, s.html(i ? ee("<div>").append(ee.parseHTML(e)).find(i) : e) }).complete(r && function(e, t) { s.each(r, o || [e.responseText, t, e]) }), this
    }, ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { ee.fn[t] = function(e) { return this.on(t, e) } }), ee.each(["get", "post"], function(e, n) { ee[n] = function(e, r, i, a) { return ee.isFunction(r) && (a = a || i, i = r, r = t), ee.ajax({ url: e, type: n, dataType: a, data: r, success: i }) } }), ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: wt, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": _t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": ee.parseJSON, "text xml": ee.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? j(j(e, ee.ajaxSettings), t) : j(ee.ajaxSettings, e) },
        ajaxPrefilter: D(jt),
        ajaxTransport: D(Lt),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var l, d, y, b, w, C = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, o = s || "", T.readyState = e > 0 ? 4 : 0, r && (b = function(e, n, r) {
                    var i, a, o, s, u = e.contents,
                        l = e.dataTypes,
                        c = e.responseFields;
                    for (a in c) a in r && (n[c[a]] = r[a]);
                    for (;
                        "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
                    if (i)
                        for (a in u)
                            if (u[a] && u[a].test(i)) { l.unshift(a); break }
                    if (l[0] in r) o = l[0];
                    else {
                        for (a in r) {
                            if (!l[0] || e.converters[a + " " + l[0]]) { o = a; break }
                            s || (s = a)
                        }
                        o = o || s
                    }
                    return o ? (o !== l[0] && l.unshift(o), r[o]) : t
                }(f, T, r)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (ee.lastModified[a] = w), (w = T.getResponseHeader("etag")) && (ee.etag[a] = w)), 304 === e ? (l = !0, C = "notmodified") : (C = (l = function(e, t) {
                    var n, r, i, a, o = {},
                        s = 0,
                        u = e.dataTypes.slice(),
                        l = u[0];
                    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
                        for (n in e.converters) o[n.toLowerCase()] = e.converters[n];
                    for (; i = u[++s];)
                        if ("*" !== i) {
                            if ("*" !== l && l !== i) {
                                if (!(n = o[l + " " + i] || o["* " + i]))
                                    for (r in o)
                                        if ((a = r.split(" "))[1] === i && (n = o[l + " " + a[0]] || o["* " + a[0]])) {!0 === n ? n = o[r] : !0 !== o[r] && (i = a[0], u.splice(s--, 0, i)); break }
                                if (!0 !== n)
                                    if (n && e.throws) t = n(t);
                                    else try { t = n(t) } catch (e) { return { state: "parsererror", error: n ? e : "No conversion from " + l + " to " + i } }
                            }
                            l = i
                        }
                    return { state: "success", data: t }
                }(f, b)).state, d = l.data, l = !(y = l.error))) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", l ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = t, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, f, l ? d : y]), g.fireWith(p, [T, C]), c && (h.trigger("ajaxComplete", [T, f]), --ee.active || ee.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, a, o, s, u, l, c, d, f = ee.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ee(p) : ee.event,
                m = ee.Deferred(),
                g = ee.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = Nt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === x ? o : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return x || (e = b[n] = b[n] || e, y[e] = t), this },
                    overrideMimeType: function(e) { return x || (f.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) { var t = e || w; return i && i.abort(t), r(0, t), this }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || wt) + "").replace(kt, "").replace(St, xt[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ee.trim(f.dataType || "*").toLowerCase().match(ne) || [""], null == f.crossDomain && (l = Dt.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === xt[1] && l[2] === xt[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (xt[3] || ("http:" === xt[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = ee.param(f.data, f.traditional)), A(jt, f, n, T), 2 === x) return T;
            for (d in (c = f.global) && 0 == ee.active++ && ee.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Et.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Ct.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Ft.test(a) ? a.replace(Ft, "$1_=" + Tt++) : a + (Ct.test(a) ? "&" : "?") + "_=" + Tt++)), f.ifModified && (ee.lastModified[a] && T.setRequestHeader("If-Modified-Since", ee.lastModified[a]), ee.etag[a] && T.setRequestHeader("If-None-Match", ee.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === x)) return T.abort();
            for (d in w = "abort", { success: 1, error: 1, complete: 1 }) T[d](f[d]);
            if (i = A(Lt, f, n, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [T, f]), f.async && f.timeout > 0 && (u = setTimeout(function() { T.abort("timeout") }, f.timeout));
                try { x = 1, i.send(y, r) } catch (e) {
                    if (!(2 > x)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return T
        },
        getScript: function(e, n) { return ee.get(e, t, n, "script") },
        getJSON: function(e, t, n) { return ee.get(e, t, n, "json") }
    }), ee.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return ee.globalEval(e), e } } }), ee.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), ee.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = B.head || ee("head")[0] || B.documentElement;
            return {
                send: function(t, i) {
                    (n = B.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() { n && n.onload(t, !0) }
            }
        }
    });
    var qt = [],
        Mt = /(=)\?(?=&|$)|\?\?/;
    ee.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = qt.pop() || ee.expando + "_" + Tt++; return this[e] = !0, e } }), ee.ajaxPrefilter("json jsonp", function(n, r, i) { var a, o, s, u = !1 !== n.jsonp && (Mt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(n.data) && "data"); return u || "jsonp" === n.dataTypes[0] ? (a = n.jsonpCallback = ee.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Mt, "$1" + a) : !1 !== n.jsonp && (n.url += (Ct.test(n.url) ? "&" : "?") + n.jsonp + "=" + a), n.converters["script json"] = function() { return s || ee.error(a + " was not called"), s[0] }, n.dataTypes[0] = "json", o = e[a], e[a] = function() { s = arguments }, i.always(function() { e[a] = o, n[a] && (n.jsonpCallback = r.jsonpCallback, qt.push(a)), s && ee.isFunction(o) && o(s[0]), s = o = t }), "script") : t });
    var Ht, Pt, Rt = 0,
        Ot = e.ActiveXObject && function() { var e; for (e in Ht) Ht[e](t, !0) };
    ee.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && L() || function() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }() } : L, Pt = ee.ajaxSettings.xhr(), ee.support.cors = !!Pt && "withCredentials" in Pt, (Pt = ee.support.ajax = !!Pt) && ee.ajaxTransport(function(n) {
        var r;
        if (!n.crossDomain || ee.support.cors) return {
            send: function(i, a) {
                var o, s, u = n.xhr();
                if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                    for (s in n.xhrFields) u[s] = n.xhrFields[s];
                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try { for (s in i) u.setRequestHeader(s, i[s]) } catch (e) {}
                u.send(n.hasContent && n.data || null), r = function(e, i) {
                    var s, l, c, d, f;
                    try {
                        if (r && (i || 4 === u.readyState))
                            if (r = t, o && (u.onreadystatechange = ee.noop, Ot && delete Ht[o]), i) 4 !== u.readyState && u.abort();
                            else {
                                d = {}, s = u.status, f = u.responseXML, c = u.getAllResponseHeaders(), f && f.documentElement && (d.xml = f), "string" == typeof u.responseText && (d.text = u.responseText);
                                try { l = u.statusText } catch (e) { l = "" }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                            }
                    } catch (e) { i || a(-1, e) }
                    d && a(s, l, d, c)
                }, n.async ? 4 === u.readyState ? setTimeout(r) : (o = ++Rt, Ot && (Ht || (Ht = {}, ee(e).unload(Ot)), Ht[o] = r), u.onreadystatechange = r) : r()
            },
            abort: function() { r && r(t, !0) }
        }
    });
    var Bt, zt, It = /^(?:toggle|show|hide)$/,
        Wt = RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        $t = /queueHooks$/,
        Xt = [function(e, t, n) {
            var r, i, a, o, s, u, l, c, d, f = this,
                p = e.style,
                h = {},
                m = [],
                g = e.nodeType && w(e);
            for (r in n.queue || (null == (c = ee._queueHooks(e, "fx")).unqueued && (c.unqueued = 0, d = c.empty.fire, c.empty.fire = function() { c.unqueued || d() }), c.unqueued++, f.always(function() { f.always(function() { c.unqueued--, ee.queue(e, "fx").length || c.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ee.css(e, "display") && "none" === ee.css(e, "float") && (ee.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ee.support.shrinkWrapBlocks || f.done(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })), t)
                if (a = t[r], It.exec(a)) {
                    if (delete t[r], u = u || "toggle" === a, a === (g ? "hide" : "show")) continue;
                    m.push(r)
                }
            if (o = m.length) { "hidden" in (s = ee._data(e, "fxshow") || ee._data(e, "fxshow", {})) && (g = s.hidden), u && (s.hidden = !g), g ? ee(e).show() : f.done(function() { ee(e).hide() }), f.done(function() { var t; for (t in ee._removeData(e, "fxshow"), h) ee.style(e, t, h[t]) }); for (r = 0; o > r; r++) i = m[r], l = f.createTween(i, g ? s[i] : 0), h[i] = s[i] || ee.style(e, i), i in s || (s[i] = l.start, g && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0)) }
        }],
        Vt = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    a = Wt.exec(t),
                    o = i.cur(),
                    s = +o || 0,
                    u = 1,
                    l = 20;
                if (a) {
                    if (n = +a[2], "px" !== (r = a[3] || (ee.cssNumber[e] ? "" : "px")) && s) {
                        s = ee.css(i.elem, e, !0) || n || 1;
                        do { s /= u = u || ".5", ee.style(i.elem, e, s + r) } while (u !== (u = i.cur() / o) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = a[1] ? s + (a[1] + 1) * n : n
                }
                return i
            }]
        };
    ee.Animation = ee.extend(q, { tweener: function(e, t) { ee.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Vt[n] = Vt[n] || [], Vt[n].unshift(t) }, prefilter: function(e, t) { t ? Xt.unshift(e) : Xt.push(e) } }), ee.Tween = M, M.prototype = { constructor: M, init: function(e, t, n, r, i, a) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (ee.cssNumber[n] ? "" : "px") }, cur: function() { var e = M.propHooks[this.prop]; return e && e.get ? e.get(this) : M.propHooks._default.get(this) }, run: function(e) { var t, n = M.propHooks[this.prop]; return this.pos = t = this.options.duration ? ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this } }, M.prototype.init.prototype = M.prototype, M.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ee.css(e.elem, e.prop, "auto")) && "auto" !== t ? t : 0 : e.elem[e.prop] }, set: function(e) { ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop]) ? ee.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ee.each(["toggle", "show", "hide"], function(e, t) {
        var n = ee.fn[t];
        ee.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, i) }
    }), ee.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(w).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(e, t, n, r) {
            var i = ee.isEmptyObject(e),
                a = ee.speed(t, n, r),
                o = function() {
                    var t = q(this, ee.extend({}, e), a);
                    o.finish = function() { t.stop(!0) }, (i || ee._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    a = ee.timers,
                    o = ee._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && $t.test(n) && i(o[n]);
                for (n = a.length; n--;) a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(r), t = !1, a.splice(n, 1));
                (t || !r) && ee.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = ee._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    a = ee.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, ee.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ee.each({ slideDown: H("show"), slideUp: H("hide"), slideToggle: H("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { ee.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), ee.speed = function(e, t, n) { var r = e && "object" == typeof e ? ee.extend({}, e) : { complete: n || !n && t || ee.isFunction(e) && e, duration: e, easing: n && t || t && !ee.isFunction(t) && t }; return r.duration = ee.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ee.fx.speeds ? ee.fx.speeds[r.duration] : ee.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { ee.isFunction(r.old) && r.old.call(this), r.queue && ee.dequeue(this, r.queue) }, r }, ee.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, ee.timers = [], ee.fx = M.prototype.init, ee.fx.tick = function() {
        var e, n = ee.timers,
            r = 0;
        for (Bt = ee.now(); n.length > r; r++)(e = n[r])() || n[r] !== e || n.splice(r--, 1);
        n.length || ee.fx.stop(), Bt = t
    }, ee.fx.timer = function(e) { e() && ee.timers.push(e) && ee.fx.start() }, ee.fx.interval = 13, ee.fx.start = function() { zt || (zt = setInterval(ee.fx.tick, ee.fx.interval)) }, ee.fx.stop = function() { clearInterval(zt), zt = null }, ee.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ee.fx.step = {}, ee.expr && ee.expr.filters && (ee.expr.filters.animated = function(e) { return ee.grep(ee.timers, function(t) { return e === t.elem }).length }), ee.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) { ee.offset.setOffset(this, e, t) });
        var n, r, i = { top: 0, left: 0 },
            a = this[0],
            o = a && a.ownerDocument;
        return o ? (n = o.documentElement, ee.contains(n, a) ? (a.getBoundingClientRect !== t && (i = a.getBoundingClientRect()), r = P(o), { top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : i) : void 0
    }, ee.offset = {
        setOffset: function(e, t, n) {
            var r = ee.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, a, o = ee(e),
                s = o.offset(),
                u = ee.css(e, "top"),
                l = ee.css(e, "left"),
                c = {},
                d = {};
            ("absolute" === r || "fixed" === r) && ee.inArray("auto", [u, l]) > -1 ? (i = (d = o.position()).top, a = d.left) : (i = parseFloat(u) || 0, a = parseFloat(l) || 0), ee.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + a), "using" in t ? t.using.call(e, c) : o.css(c)
        }
    }, ee.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === ee.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ee.nodeName(e[0], "html") || (n = e.offset()), n.top += ee.css(e[0], "borderTopWidth", !0), n.left += ee.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - ee.css(r, "marginTop", !0), left: t.left - n.left - ee.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || B.documentElement; e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position");) e = e.offsetParent; return e || B.documentElement }) }
    }), ee.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
        var r = /Y/.test(n);
        ee.fn[e] = function(i) { return ee.access(this, function(e, i, a) { var o = P(e); return a === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? ee(o).scrollLeft() : a, r ? a : ee(o).scrollTop()) : e[i] = a, t) }, e, i, arguments.length, null) }
    }), ee.each({ Height: "height", Width: "width" }, function(e, n) {
        ee.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) {
            ee.fn[i] = function(i, a) {
                var o = arguments.length && (r || "boolean" != typeof i),
                    s = r || (!0 === i || !0 === a ? "margin" : "border");
                return ee.access(this, function(n, r, i) { var a; return ee.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + e], a["scroll" + e], n.body["offset" + e], a["offset" + e], a["client" + e])) : i === t ? ee.css(n, r, s) : ee.style(n, r, i, s) }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = ee, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return ee })
}(window),
function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto) }(function(e) {
    "use strict";

    function t(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
    }

    function n(t) {
        var n = t.target,
            r = e(n);
        if (!r.is("[type=submit],[type=image]")) {
            var i = r.closest("[type=submit]");
            if (0 === i.length) return;
            n = i[0]
        }
        var a = this;
        if (a.clk = n, "image" == n.type)
            if (void 0 !== t.offsetX) a.clk_x = t.offsetX, a.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = r.offset();
            a.clk_x = t.pageX - o.left, a.clk_y = t.pageY - o.top
        } else a.clk_x = t.pageX - n.offsetLeft, a.clk_y = t.pageY - n.offsetTop;
        setTimeout(function() { a.clk = a.clk_x = a.clk_y = null }, 100)
    }

    function r() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var i = {};
    i.fileapi = void 0 !== e("<input type='file'/>").get(0).files, i.formdata = void 0 !== window.FormData;
    var a = !!e.fn.prop;
    e.fn.attr2 = function() { if (!a) return this.attr.apply(this, arguments); var e = this.prop.apply(this, arguments); return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, e.fn.ajaxSubmit = function(t) {
        function n(n) {
            function i(e) { var t = null; try { e.contentWindow && (t = e.contentWindow.document) } catch (e) { r("cannot get iframe.contentWindow document: " + e) } if (t) return t; try { t = e.contentDocument ? e.contentDocument : e.document } catch (n) { r("cannot get iframe.contentDocument: " + n), t = e.document } return t }

            function s() {
                var t = l.attr2("target"),
                    n = l.attr2("action"),
                    a = l.attr("enctype") || l.attr("encoding") || "multipart/form-data";
                C.setAttribute("target", m), (!o || /post/i.test(o)) && C.setAttribute("method", "POST"), n != f.url && C.setAttribute("action", f.url), f.skipEncodingOverride || o && !/post/i.test(o) || l.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), f.timeout && (T = setTimeout(function() { w = !0, u(F) }, f.timeout));
                var s = [];
                try {
                    if (f.extraData)
                        for (var c in f.extraData) f.extraData.hasOwnProperty(c) && s.push(e.isPlainObject(f.extraData[c]) && f.extraData[c].hasOwnProperty("name") && f.extraData[c].hasOwnProperty("value") ? e('<input type="hidden" name="' + f.extraData[c].name + '">').val(f.extraData[c].value).appendTo(C)[0] : e('<input type="hidden" name="' + c + '">').val(f.extraData[c]).appendTo(C)[0]);
                    f.iframeTarget || g.appendTo("body"), v.attachEvent ? v.attachEvent("onload", u) : v.addEventListener("load", u, !1), setTimeout(function e() {
                        try {
                            var t = i(v).readyState;
                            r("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (e) { r("Server abort: ", e, " (", e.name, ")"), u(N), T && clearTimeout(T), T = void 0 }
                    }, 15);
                    try { C.submit() } catch (e) { document.createElement("form").submit.apply(C) }
                } finally { C.setAttribute("action", n), C.setAttribute("enctype", a), t ? C.setAttribute("target", t) : l.removeAttr("target"), e(s).remove() }
            }

            function u(t) {
                if (!y.aborted && !j) {
                    if ((A = i(v)) || (r("cannot access response document"), t = N), t === F && y) return y.abort("timeout"), void k.reject(y, "timeout");
                    if (t == N && y) return y.abort("server abort"), void k.reject(y, "error", "server abort");
                    if (A && A.location.href != f.iframeSrc || w) {
                        v.detachEvent ? v.detachEvent("onload", u) : v.removeEventListener("load", u, !1);
                        var n, a = "success";
                        try {
                            if (w) throw "timeout";
                            var o = "xml" == f.dataType || A.XMLDocument || e.isXMLDoc(A);
                            if (r("isXml=" + o), !o && window.opera && (null === A.body || !A.body.innerHTML) && --L) return r("requeing onLoad callback, DOM not available"), void setTimeout(u, 250);
                            var s = A.body ? A.body : A.documentElement;
                            y.responseText = s ? s.innerHTML : null, y.responseXML = A.XMLDocument ? A.XMLDocument : A, o && (f.dataType = "xml"), y.getResponseHeader = function(e) { return { "content-type": f.dataType }[e.toLowerCase()] }, s && (y.status = Number(s.getAttribute("status")) || y.status, y.statusText = s.getAttribute("statusText") || y.statusText);
                            var l = (f.dataType || "").toLowerCase(),
                                c = /(json|script|text)/.test(l);
                            if (c || f.textarea) {
                                var d = A.getElementsByTagName("textarea")[0];
                                if (d) y.responseText = d.value, y.status = Number(d.getAttribute("status")) || y.status, y.statusText = d.getAttribute("statusText") || y.statusText;
                                else if (c) {
                                    var p = A.getElementsByTagName("pre")[0],
                                        m = A.getElementsByTagName("body")[0];
                                    p ? y.responseText = p.textContent ? p.textContent : p.innerText : m && (y.responseText = m.textContent ? m.textContent : m.innerText)
                                }
                            } else "xml" == l && !y.responseXML && y.responseText && (y.responseXML = _(y.responseText));
                            try { D = M(y, l, f) } catch (e) { a = "parsererror", y.error = n = e || a }
                        } catch (e) { r("error caught: ", e), a = "error", y.error = n = e || a }
                        y.aborted && (r("upload aborted"), a = null), y.status && (a = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === a ? (f.success && f.success.call(f.context, D, "success", y), k.resolve(y.responseText, "success", y), h && e.event.trigger("ajaxSuccess", [y, f])) : a && (void 0 === n && (n = y.statusText), f.error && f.error.call(f.context, y, a, n), k.reject(y, "error", n), h && e.event.trigger("ajaxError", [y, f, n])), h && e.event.trigger("ajaxComplete", [y, f]), h && !--e.active && e.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, y, a), j = !0, f.timeout && clearTimeout(T), setTimeout(function() { f.iframeTarget ? g.attr("src", f.iframeSrc) : g.remove(), y.responseXML = null }, 100)
                    }
                }
            }
            var c, d, f, h, m, g, v, y, b, x, w, T, C = l[0],
                k = e.Deferred();
            if (k.abort = function(e) { y.abort(e) }, n)
                for (d = 0; d < p.length; d++) c = e(p[d]), a ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if ((f = e.extend(!0, {}, e.ajaxSettings, t)).context = f.context || f, m = "jqFormIO" + (new Date).getTime(), f.iframeTarget ? (x = (g = e(f.iframeTarget)).attr2("name")) ? m = x : g.attr2("name", m) : (g = e('<iframe name="' + m + '" src="' + f.iframeSrc + '" />')).css({ position: "absolute", top: "-1000px", left: "-1000px" }), v = g[0], y = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var n = "timeout" === t ? "timeout" : "aborted";
                        r("aborting upload... " + n), this.aborted = 1;
                        try { v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop") } catch (e) {}
                        g.attr("src", f.iframeSrc), y.error = n, f.error && f.error.call(f.context, y, n, t), h && e.event.trigger("ajaxError", [y, f, n]), f.complete && f.complete.call(f.context, y, n)
                    }
                }, (h = f.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), h && e.event.trigger("ajaxSend", [y, f]), f.beforeSend && !1 === f.beforeSend.call(f.context, y, f)) return f.global && e.active--, k.reject(), k;
            if (y.aborted) return k.reject(), k;
            (b = C.clk) && ((x = b.name) && !b.disabled && (f.extraData = f.extraData || {}, f.extraData[x] = b.value, "image" == b.type && (f.extraData[x + ".x"] = C.clk_x, f.extraData[x + ".y"] = C.clk_y)));
            var F = 1,
                N = 2,
                E = e("meta[name=csrf-token]").attr("content"),
                S = e("meta[name=csrf-param]").attr("content");
            S && E && (f.extraData = f.extraData || {}, f.extraData[S] = E), f.forceSync ? s() : setTimeout(s, 10);
            var D, A, j, L = 50,
                _ = e.parseXML || function(e, t) { return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null },
                q = e.parseJSON || function(e) { return window.eval("(" + e + ")") },
                M = function(t, n, r) {
                    var i = t.getResponseHeader("content-type") || "",
                        a = "xml" === n || !n && i.indexOf("xml") >= 0,
                        o = a ? t.responseXML : t.responseText;
                    return a && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), r && r.dataFilter && (o = r.dataFilter(o, n)), "string" == typeof o && ("json" === n || !n && i.indexOf("json") >= 0 ? o = q(o) : ("script" === n || !n && i.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return k
        }
        if (!this.length) return r("ajaxSubmit: skipping submit process - no element selected"), this;
        var o, s, u, l = this;
        "function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), o = t.type || this.attr2("method"), (u = (u = "string" == typeof(s = t.url || this.attr2("action")) ? e.trim(s) : "") || window.location.href || "") && (u = (u.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: u, success: e.ajaxSettings.success, type: o || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t);
        var c = {};
        if (this.trigger("form-pre-serialize", [this, t, c]), c.veto) return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return r("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var f, p = [],
            h = this.formToArray(t.semantic, p);
        if (t.data && (t.extraData = t.data, f = e.param(t.data, d)), t.beforeSubmit && !1 === t.beforeSubmit(h, this, t)) return r("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [h, this, t, c]), c.veto) return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var m = e.param(h, d);
        f && (m = m ? m + "&" + f : f), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + m, t.data = null) : t.data = m;
        var g = [];
        if (t.resetForm && g.push(function() { l.resetForm() }), t.clearForm && g.push(function() { l.clearForm(t.includeHidden) }), !t.dataType && t.target) {
            var v = t.success || function() {};
            g.push(function(n) {
                var r = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[r](n).each(v, arguments)
            })
        } else t.success && g.push(t.success);
        if (t.success = function(e, n, r) { for (var i = t.context || this, a = 0, o = g.length; o > a; a++) g[a].apply(i, [e, n, r || l, l]) }, t.error) {
            var y = t.error;
            t.error = function(e, n, r) {
                var i = t.context || this;
                y.apply(i, [e, n, r, l])
            }
        }
        if (t.complete) {
            var b = t.complete;
            t.complete = function(e, n) {
                var r = t.context || this;
                b.apply(r, [e, n, l])
            }
        }
        var x = e("input[type=file]:enabled", this).filter(function() { return "" !== e(this).val() }).length > 0,
            w = "multipart/form-data",
            T = l.attr("enctype") == w || l.attr("encoding") == w,
            C = i.fileapi && i.formdata;
        r("fileAPI :" + C);
        var k, F = (x || T) && !C;
        !1 !== t.iframe && (t.iframe || F) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() { k = n(h) }) : k = n(h) : k = (x || T) && C ? function(n) {
            for (var r = new FormData, i = 0; i < n.length; i++) r.append(n[i].name, n[i].value);
            if (t.extraData) {
                var a = function(n) {
                    var r, i, a = e.param(n, t.traditional).split("&"),
                        o = a.length,
                        s = [];
                    for (r = 0; o > r; r++) a[r] = a[r].replace(/\+/g, " "), i = a[r].split("="), s.push([decodeURIComponent(i[0]), decodeURIComponent(i[1])]);
                    return s
                }(t.extraData);
                for (i = 0; i < a.length; i++) a[i] && r.append(a[i][0], a[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: o || "POST" });
            t.uploadProgress && (s.xhr = function() {
                var n = e.ajaxSettings.xhr();
                return n.upload && n.upload.addEventListener("progress", function(e) {
                    var n = 0,
                        r = e.loaded || e.position,
                        i = e.total;
                    e.lengthComputable && (n = Math.ceil(r / i * 100)), t.uploadProgress(e, r, i, n)
                }, !1), n
            }), s.data = null;
            var u = s.beforeSend;
            return s.beforeSend = function(e, n) { n.data = t.formData ? t.formData : r, u && u.call(this, e, n) }, e.ajax(s)
        }(h) : e.ajax(t), l.removeData("jqxhr").data("jqxhr", k);
        for (var N = 0; N < p.length; N++) p[N] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(i) { if ((i = i || {}).delegation = i.delegation && e.isFunction(e.fn.on), !i.delegation && 0 === this.length) { var a = { s: this.selector, c: this.context }; return !e.isReady && a.s ? (r("DOM not ready, queuing ajaxForm"), e(function() { e(a.s, a.c).ajaxForm(i) }), this) : (r("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) } return i.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, i, t).on("click.form-plugin", this.selector, i, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", i, t).bind("click.form-plugin", i, n) }, e.fn.ajaxFormUnbind = function() { return this.unbind("submit.form-plugin click.form-plugin") }, e.fn.formToArray = function(t, n) {
        var r = [];
        if (0 === this.length) return r;
        var a, o, s, u, l, c, d, f, p = this[0],
            h = this.attr("id"),
            m = t ? p.getElementsByTagName("*") : p.elements;
        if (m && !/MSIE [678]/.test(navigator.userAgent) && (m = e(m).get()), h && ((a = e(':input[form="' + h + '"]').get()).length && (m = (m || []).concat(a))), !m || !m.length) return r;
        for (o = 0, d = m.length; d > o; o++)
            if ((u = (c = m[o]).name) && !c.disabled)
                if (t && p.clk && "image" == c.type) p.clk == c && (r.push({ name: u, value: e(c).val(), type: c.type }), r.push({ name: u + ".x", value: p.clk_x }, { name: u + ".y", value: p.clk_y }));
                else if ((l = e.fieldValue(c, !0)) && l.constructor == Array)
            for (n && n.push(c), s = 0, f = l.length; f > s; s++) r.push({ name: u, value: l[s] });
        else if (i.fileapi && "file" == c.type) {
            n && n.push(c);
            var g = c.files;
            if (g.length)
                for (s = 0; s < g.length; s++) r.push({ name: u, value: g[s], type: c.type });
            else r.push({ name: u, value: "", type: c.type })
        } else null != l && (n && n.push(c), r.push({ name: u, value: l, type: c.type, required: c.required }));
        if (!t && p.clk) {
            var v = e(p.clk),
                y = v[0];
            (u = y.name) && !y.disabled && "image" == y.type && (r.push({ name: u, value: v.val() }), r.push({ name: u + ".x", value: p.clk_x }, { name: u + ".y", value: p.clk_y }))
        }
        return r
    }, e.fn.formSerialize = function(t) { return e.param(this.formToArray(t)) }, e.fn.fieldSerialize = function(t) {
        var n = [];
        return this.each(function() {
            var r = this.name;
            if (r) {
                var i = e.fieldValue(this, t);
                if (i && i.constructor == Array)
                    for (var a = 0, o = i.length; o > a; a++) n.push({ name: r, value: i[a] });
                else null != i && n.push({ name: this.name, value: i })
            }
        }), e.param(n)
    }, e.fn.fieldValue = function(t) {
        for (var n = [], r = 0, i = this.length; i > r; r++) {
            var a = this[r],
                o = e.fieldValue(a, t);
            null == o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(n, o) : n.push(o))
        }
        return n
    }, e.fieldValue = function(t, n) {
        var r = t.name,
            i = t.type,
            a = t.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!r || t.disabled || "reset" == i || "button" == i || ("checkbox" == i || "radio" == i) && !t.checked || ("submit" == i || "image" == i) && t.form && t.form.clk != t || "select" == a && -1 == t.selectedIndex)) return null;
        if ("select" == a) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, l = "select-one" == i, c = l ? o + 1 : u.length, d = l ? o : 0; c > d; d++) {
                var f = u[d];
                if (f.selected) {
                    var p = f.value;
                    if (p || (p = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), l) return p;
                    s.push(p)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) { return this.each(function() { e("input,select,textarea", this).clearFields(t) }) }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var r = this.type,
                i = this.tagName.toLowerCase();
            n.test(r) || "textarea" == i ? this.value = "" : "checkbox" == r || "radio" == r ? this.checked = !1 : "select" == i ? this.selectedIndex = -1 : "file" == r ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(r) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) { return void 0 === e && (e = !0), this.each(function() { this.disabled = !e }) }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var r = e(this).parent("select");
                t && r[0] && "select-one" == r[0].type && r.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}),
function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (this.length) {
                var n = e.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) { n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0) }), this.submit(function(t) {
                    function r() { var r; return !n.settings.submitHandler || (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1)
                })), n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() { var t, n; return e(this[0]).is("form") ? t = this.validate().form() : (t = !0, n = e(this[0].form).validate(), this.each(function() { t = n.element(this) && t })), t },
        removeAttrs: function(t) {
            var n = {},
                r = this;
            return e.each(t.split(/\s/), function(e, t) { n[t] = r.attr(t), r.removeAttr(t) }), n
        },
        rules: function(t, n) {
            var r, i, a, o, s, u, l = this[0];
            if (t) switch (r = e.data(l.form, "validator").settings, i = r.rules, a = e.validator.staticRules(l), t) {
                case "add":
                    e.extend(a, e.validator.normalizeRule(n)), delete a.messages, i[l.name] = a, n.messages && (r.messages[l.name] = e.extend(r.messages[l.name], n.messages));
                    break;
                case "remove":
                    return n ? (u = {}, e.each(n.split(/\s/), function(t, n) { u[n] = a[n], delete a[n], "required" === n && e(l).removeAttr("aria-required") }), u) : (delete i[l.name], a)
            }
            return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (s = o.required, delete o.required, o = e.extend({ required: s }, o), e(l).attr("aria-required", "true")), o.remote && (s = o.remote, delete o.remote, o = e.extend(o, { remote: s })), o
        }
    }), e.extend(e.expr[":"], { blank: function(t) { return !e.trim("" + e(t).val()) }, filled: function(t) { return !!e.trim("" + e(t).val()) }, unchecked: function(t) { return !e(t).prop("checked") } }), e.validator = function(t, n) { this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init() }, e.validator.format = function(t, n) { return 1 === arguments.length ? function() { var n = e.makeArray(arguments); return n.unshift(t), e.validator.format.apply(this, n) } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) { t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() { return n }) }), t) }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) { this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide()) },
            onfocusout: function(e) { this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e) },
            onkeyup: function(e, t) {
                (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(e) { e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode) },
            highlight: function(t, n, r) { "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r) },
            unhighlight: function(t, n, r) { "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r) }
        },
        setDefaults: function(t) { e.extend(e.validator.defaults, t) },
        messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}.") },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var n = e.data(this[0].form, "validator"),
                        r = "on" + t.type.replace(/^validate/, ""),
                        i = n.settings;
                    i[r] && !this.is(i.ignore) && i[r].call(n, this[0], t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, r = this.groups = {};
                e.each(this.settings.groups, function(t, n) { "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) { r[n] = t }) }), n = this.settings.rules, e.each(n, function(t, r) { n[t] = e.validator.normalizeRule(r) }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() { return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
            checkForm: function() { this.prepareForm(); for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]); return this.valid() },
            element: function(t) {
                var n = this.clean(t),
                    r = this.validationTargetFor(n),
                    i = !0;
                return this.lastElement = r, void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = e(r), (i = !1 !== this.check(r)) ? delete this.invalid[r.name] : this.invalid[r.name] = !0), e(t).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(t) {
                if (t) {
                    for (var n in e.extend(this.errorMap, t), this.errorList = [], t) this.errorList.push({ message: t[n], element: this.findByName(n)[0] });
                    this.successList = e.grep(this.successList, function(e) { return !(e.name in t) })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() { e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid") },
            numberOfInvalids: function() { return this.objectLength(this.invalid) },
            objectLength: function(e) { var t, n = 0; for (t in e) n++; return n },
            hideErrors: function() { this.addWrapper(this.toHide).hide() },
            valid: function() { return 0 === this.size() },
            size: function() { return this.errorList.length },
            focusInvalid: function() { if (this.settings.focusInvalid) try { e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (e) {} },
            findLastActive: function() { var t = this.lastActive; return t && 1 === e.grep(this.errorList, function(e) { return e.element.name === t.name }).length && t },
            elements: function() {
                var t = this,
                    n = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() { return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in n || !t.objectLength(e(this).rules())) && (n[this.name] = !0, !0) })
            },
            clean: function(t) { return e(t)[0] },
            errors: function() { var t = this.settings.errorClass.split(" ").join("."); return e(this.settings.errorElement + "." + t, this.errorContext) },
            reset: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([]) },
            prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) },
            prepareElement: function(e) { this.reset(), this.toHide = this.errorsFor(e) },
            elementValue: function(t) {
                var n, r = e(t),
                    i = r.attr("type");
                return "radio" === i || "checkbox" === i ? e("input[name='" + r.attr("name") + "']:checked").val() : "string" == typeof(n = r.val()) ? n.replace(/\r/g, "") : n
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, r, i, a = e(t).rules(),
                    o = e.map(a, function(e, t) { return t }).length,
                    s = !1,
                    u = this.elementValue(t);
                for (r in a) { i = { method: r, parameters: a[r] }; try { if ("dependency-mismatch" === (n = e.validator.methods[r].call(this, u, t, i.parameters)) && 1 === o) { s = !0; continue } if (s = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t))); if (!n) return this.formatAndAdd(t, i), !1 } catch (e) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e } }
                if (!s) return this.objectLength(a) && this.successList.push(t), !0
            },
            customDataMessage: function(t, n) { return e(t).data("msg" + n[0].toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg") },
            customMessage: function(e, t) { var n = this.settings.messages[e]; return n && (n.constructor === String ? n : n[t]) },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(t, n) { return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>") },
            formatAndAdd: function(t, n) {
                var r = this.defaultMessage(t, n.method),
                    i = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({ message: r, element: t, method: n.method }), this.errorMap[t.name] = r, this.submitted[t.name] = r
            },
            addWrapper: function(e) { return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() { return this.currentElements.not(this.invalidElements()) },
            invalidElements: function() { return e(this.errorList).map(function() { return this.element }) },
            showLabel: function(t, n) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(n)) : (r = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) { var n = this.idOrName(t); return this.errors().filter(function() { return e(this).attr("for") === n }) },
            idOrName: function(e) { return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name) },
            validationTargetFor: function(e) { return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e },
            checkable: function(e) { return /radio|checkbox/i.test(e.type) },
            findByName: function(t) { return e(this.currentForm).find("[name='" + t + "']") },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) { return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t) },
            dependTypes: { boolean: function(e) { return e }, string: function(t, n) { return !!e(t, n.form).length }, function: function(e, t) { return e(t) } },
            optional: function(t) { var n = this.elementValue(t); return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch" },
            startRequest: function(e) { this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0) },
            stopRequest: function(t, n) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
            previousValue: function(t) { return e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, "remote") }) }
        },
        classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
        addClassRules: function(t, n) { t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t) },
        classRules: function(t) {
            var n = {},
                r = e(t).attr("class");
            return r && e.each(r.split(" "), function() { this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]) }), n
        },
        attributeRules: function(t) {
            var n, r, i = {},
                a = e(t),
                o = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? ("" === (r = t.getAttribute(n)) && (r = !0), r = !!r) : r = a.attr(n), /min|max/.test(n) && (null === o || /number|range|text/.test(o)) && (r = Number(r)), r || 0 === r ? i[n] = r : o === n && "range" !== o && (i[n] = !0);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(t) {
            var n, r, i = {},
                a = e(t);
            for (n in e.validator.methods) void 0 !== (r = a.data("rule" + n[0].toUpperCase() + n.substring(1).toLowerCase())) && (i[n] = r);
            return i
        },
        staticRules: function(t) {
            var n = {},
                r = e.data(t.form, "validator");
            return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function(t, n) {
            return e.each(t, function(r, i) {
                if (!1 !== i) {
                    if (i.param || i.depends) {
                        var a = !0;
                        switch (typeof i.depends) {
                            case "string":
                                a = !!e(i.depends, n.form).length;
                                break;
                            case "function":
                                a = i.depends.call(n, n)
                        }
                        a ? t[r] = void 0 === i.param || i.param : delete t[r]
                    }
                } else delete t[r]
            }), e.each(t, function(r, i) { t[r] = e.isFunction(i) ? i(n) : i }), e.each(["minlength", "maxlength"], function() { t[this] && (t[this] = Number(t[this])) }), e.each(["rangelength", "range"], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
            }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() { n[this] = !0 }), t = n
            }
            return t
        },
        addMethod: function(t, n, r) { e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== r ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t)) },
        methods: {
            required: function(t, n, r) { if (!this.depend(r, n)) return "dependency-mismatch"; if ("select" === n.nodeName.toLowerCase()) { var i = e(n).val(); return i && i.length > 0 } return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0 },
            email: function(e, t) { return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) },
            url: function(e, t) { return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e) },
            date: function(e, t) { return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString()) },
            dateISO: function(e, t) { return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e) },
            number: function(e, t) { return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e) },
            digits: function(e, t) { return this.optional(t) || /^\d+$/.test(e) },
            creditcard: function(e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e)) return !1;
                var n, r, i = 0,
                    a = 0,
                    o = !1;
                if ((e = e.replace(/\D/g, "")).length < 13 || e.length > 19) return !1;
                for (n = e.length - 1; n >= 0; n--) r = e.charAt(n), a = parseInt(r, 10), o && (a *= 2) > 9 && (a -= 9), i += a, o = !o;
                return i % 10 == 0
            },
            minlength: function(t, n, r) { var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n); return this.optional(n) || i >= r },
            maxlength: function(t, n, r) { var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n); return this.optional(n) || r >= i },
            rangelength: function(t, n, r) { var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n); return this.optional(n) || i >= r[0] && i <= r[1] },
            min: function(e, t, n) { return this.optional(t) || e >= n },
            max: function(e, t, n) { return this.optional(t) || n >= e },
            range: function(e, t, n) { return this.optional(t) || e >= n[0] && e <= n[1] },
            equalTo: function(t, n, r) { var i = e(r); return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() { e(n).valid() }), t === i.val() },
            remote: function(t, n, r) {
                if (this.optional(n)) return "dependency-mismatch";
                var i, a, o = this.previousValue(n);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), o.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = o.message, r = "string" == typeof r && { url: r } || r, o.old === t ? o.valid : (o.old = t, i = this, this.startRequest(n), (a = {})[n.name] = t, e.ajax(e.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: a,
                    context: i.currentForm,
                    success: function(r) {
                        var a, s, u, l = !0 === r || "true" === r;
                        i.settings.messages[n.name].remote = o.originalMessage, l ? (u = i.formSubmitted, i.prepareElement(n), i.formSubmitted = u, i.successList.push(n), delete i.invalid[n.name], i.showErrors()) : (a = {}, s = r || i.defaultMessage(n, "remote"), a[n.name] = o.message = e.isFunction(s) ? s(t) : s, i.invalid[n.name] = !0, i.showErrors(a)), o.valid = l, i.stopRequest(n, l)
                    }
                }, r)), "pending")
            }
        }
    }), e.format = function() { throw "$.format has been deprecated. Please use $.validator.format instead." }
}(jQuery),
function(e) {
    var t, n = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, r) { var i = e.port; "abort" === e.mode && (n[i] && n[i].abort(), n[i] = r) }) : (t = e.ajax, e.ajax = function(r) {
        var i = ("mode" in r ? r : e.ajaxSettings).mode,
            a = ("port" in r ? r : e.ajaxSettings).port;
        return "abort" === i ? (n[a] && n[a].abort(), n[a] = t.apply(this, arguments), n[a]) : t.apply(this, arguments)
    })
}(jQuery),
function(e) { e.extend(e.fn, { validateDelegate: function(t, n, r) { return this.bind(n, function(n) { var i = e(n.target); return i.is(t) ? r.apply(i, arguments) : void 0 }) } }) }(jQuery),
function(e) {
    e.validator.addMethod("mc_birthday", function(t, n, r) {
        var i = !1,
            a = e("input:not(:hidden)", e(n).closest(r));
        if (0 == a.filter(":filled").length && this.optional(n)) i = !0;
        else {
            var o = new Array;
            o.month = a.filter("input[name*='[month]']").val(), o.day = a.filter("input[name*='[day]']").val(), o.month = o.month - 1;
            var s = new Date(1970, o.month, o.day);
            i = s.getDate() == o.day && s.getMonth() == o.month
        }
        return i
    }, "Please enter a valid month and day."), e.validator.addMethod("mc_date", function(t, n, r) {
        var i = !1,
            a = e("input:not(:hidden)", e(n).closest(r));
        if (0 == a.filter(":filled").length && this.optional(n)) i = !0;
        else {
            var o = new Array;
            o.month = a.filter("input[name*='[month]']").val(), o.day = a.filter("input[name*='[day]']").val(), o.year = a.filter("input[name*='[year]']").val(), o.month = o.month - 1, o.year.length < 4 && (o.year = parseInt(o.year) < 50 ? 2e3 + parseInt(o.year) : 1900 + parseInt(o.year));
            var s = new Date(o.year, o.month, o.day);
            i = s.getDate() == o.day && s.getMonth() == o.month && s.getFullYear() == o.year
        }
        return i
    }, "Please enter a valid date"), e.validator.addMethod("mc_phone", function(t, n, r) { var i = e("input:filled:not(:hidden)", e(n).closest(r)); return !(0 != i.length || !this.optional(n)) || 10 == (t = i.eq(0).val() + i.eq(1).val() + i.eq(2).val()).length && t.match(/[0-9]{9}/) }, "Please specify a valid phone number"), e.validator.addMethod("skip_or_complete_group", function(t, n, r) {
        var i = e("input:not(:hidden)", e(n).closest(r)),
            a = i.eq(0),
            o = a.data("valid_skip") ? a.data("valid_skip") : e.extend({}, this),
            s = i.filter(function() { return o.elementValue(this) }).length,
            u = 0 === s || s === i.length;
        return a.data("valid_skip", o), e(n).data("being_validated") || (i.data("being_validated", !0), i.each(function() { o.element(this) }), i.data("being_validated", !1)), u
    }, e.validator.format("Please supply missing fields.")), e.validator.addMethod("skip_or_fill_minimum", function(t, n, r) {
        var i = e(r[1], n.form),
            a = i.eq(0),
            o = a.data("valid_skip") ? a.data("valid_skip") : e.extend({}, this),
            s = i.filter(function() { return o.elementValue(this) }).length,
            u = 0 === s || s >= r[0];
        return console.log(i.eq(0)), a.data("valid_skip", o), e(n).data("being_validated") || (i.data("being_validated", !0), i.each(function() { o.element(this) }), i.data("being_validated", !1)), u
    }, e.validator.format("Please either skip these fields or fill at least {0} of them.")), e.validator.addMethod("zipcodeUS", function(e, t) { return this.optional(t) || /^\d{5}-\d{4}$|^\d{5}$/.test(e) }, "The specified US ZIP Code is invalid"), e.validator.addMethod("mc_gdpr", function(t, n, r) { return 0 !== e("input:not(:hidden)", e(n).closest(r)).filter(":checked").length }, "Please choose an option.")
}(jQuery),
function(e) {
    var t = "";
    try { t = mc_custom_error_style } catch (e) { t = "#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }" }
    var n = document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t)), n.appendChild(r), window.mc = {
        openPopup: function() { e("#mc_embed_signup a.mc_embed_close").show(), setTimeout(function() { e("#mc_embed_signup").fadeIn() }, mc.delayPopup) },
        closePopup: function() {
            e("#mc_embed_signup").hide();
            var t = new Date,
                n = new Date(t.getTime() + 31536e6);
            document.cookie = "MCPopupClosed=yes;expires=" + n.toGMTString() + ";path=/"
        },
        evalPopup: function() {
            for (e("#mc_embed_signup").hide(), cks = document.cookie.split(";"), i = 0; i < cks.length; i++) parts = cks[i].split("="), -1 != parts[0].indexOf("MCPopupClosed") && (mc.showPopup = !1);
            mc.showPopup && mc.openPopup()
        },
        getAjaxSubmitUrl: function() { var t = e("form#mc-embedded-subscribe-form").attr("action"); return t = t.replace("/post?u=", "/post-json?u="), t += "&c=?" },
        getGroups: function() {
            var t = {};
            return e(".mc-field-group").each(function(n) {
                var r = e(this).find("input:text:not(:hidden), input:checkbox:not(:hidden)");
                if (r.length > 1) {
                    var i = r.first().attr("name"),
                        a = e.map(r, function(e) { return e.name });
                    t[i.substring(0, i.indexOf("["))] = a.join(" ")
                }
            }), t
        },
        isMultiPartField: function(t) { return e("input:not(:hidden)", e(t).closest(".mc-field-group")).length > 1 },
        isTooEarly: function(t) { var n = e("input:not(:hidden)", e(t).closest(".mc-field-group")); return e(n).eq(-1).attr("id") != e(t).attr("id") },
        mce_success_cb: function(t) {
            if (e("#mce-success-response").hide(), e("#mce-error-response").hide(), "success" == t.result) e("#mce-" + t.result + "-response").show(), e("#mce-" + t.result + "-response").html(t.msg), e("#mc-embedded-subscribe-form").each(function() { this.reset() });
            else {
                if ("captcha" === t.msg) {
                    var n = e("form#mc-embedded-subscribe-form").attr("action"),
                        r = e.param(t.params);
                    n = n.split("?")[0], n += "?", n += r, window.open(n)
                }
                var a, o = -1;
                try {
                    var s = t.msg.split(" - ", 2);
                    null == s[1] ? a = t.msg : (i = parseInt(s[0]), i.toString() == s[0] ? (o = s[0], a = s[1]) : (o = -1, a = t.msg))
                } catch (e) { o = -1, a = t.msg }
                try {
                    if (-1 == o) e("#mce-" + t.result + "-response").show(), e("#mce-" + t.result + "-response").html(a);
                    else {
                        var u = e("input[name*='" + fnames[o] + "']").attr("name"),
                            l = {};
                        l[u] = a, mc.mce_validator.showErrors(l)
                    }
                } catch (n) { e("#mce-" + t.result + "-response").show(), e("#mce-" + t.result + "-response").html(a) }
            }
        }
    }, window.mc.mce_validator = e("#mc-embedded-subscribe-form").validate({ errorClass: "mce_inline_error", errorElement: "div", onkeyup: !1, onfocusout: function(t) { mc.isTooEarly(t) || e(t).valid() }, onblur: function(t) { mc.isTooEarly(t) || e(t).valid() }, groups: mc.getGroups(), errorPlacement: function(e, t) { t.closest(".mc-field-group").append(e) }, submitHandler: function(t) { e(t).ajaxSubmit(mc.ajaxOptions) } }), window.mc.ajaxOptions = { url: mc.getAjaxSubmitUrl(), type: "GET", dataType: "json", contentType: "application/json; charset=utf-8", success: mc.mce_success_cb }, e.validator.addClassRules("birthday", { digits: !0, mc_birthday: ".datefield" }), e.validator.addClassRules("datepart", { digits: !0, mc_date: ".datefield" }), e.validator.addClassRules("phonepart", { digits: !0, mc_phone: ".phonefield" }), e.validator.addClassRules("gdpr", { mc_gdpr: ".gdprRequired" }), e("#mc_embed_signup a.mc_embed_close").click(function() { mc.closePopup() }), e(document).keydown(function(e) { keycode = null == e ? event.keyCode : e.which, 27 == keycode && void 0 !== mc.showPopup && mc.closePopup() })
}(jQuery);
const menuBtn = document.querySelector('.navbar-toggler');
const navbarBcg = document.querySelector('.navbar');
const navbarFlexJustify = document.querySelector('.navbar-collapse');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('nyitva');
    navbarBcg.classList.add('nyitva');
    navbarFlexJustify.classList.add('nyitva');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('nyitva');
    navbarBcg.classList.remove('nyitva');
    navbarFlexJustify.classList.remove('nyitva');
    menuOpen = false;
  }
});


/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */
(function(
    e,
    t
) {
    'use strict';

    function n(e) {
        var t = e.length,
            n = st.type(e);
        return st.isWindow(e) ?
            !1 :
            1 === e.nodeType && t ?
            !0 :
            'array' === n ||
            ('function' !== n &&
                (0 === t || ('number' == typeof t && t > 0 && t - 1 in e)));
    }

    function r(e) {
        var t = (Tt[e] = {});
        return (
            st.each(e.match(lt) || [], function(e, n) {
                t[n] = !0;
            }),
            t
        );
    }

    function i(e, n, r, i) {
        if (st.acceptData(e)) {
            var o,
                a,
                s = st.expando,
                u = 'string' == typeof n,
                l = e.nodeType,
                c = l ? st.cache : e,
                f = l ? e[s] : e[s] && s;
            if ((f && c[f] && (i || c[f].data)) || !u || r !== t)
                return (
                    f || (l ? (e[s] = f = K.pop() || st.guid++) : (f = s)),
                    c[f] || ((c[f] = {}), l || (c[f].toJSON = st.noop)),
                    ('object' == typeof n || 'function' == typeof n) &&
                    (i ?
                        (c[f] = st.extend(c[f], n)) :
                        (c[f].data = st.extend(c[f].data, n))),
                    (o = c[f]),
                    i || (o.data || (o.data = {}), (o = o.data)),
                    r !== t && (o[st.camelCase(n)] = r),
                    u ? ((a = o[n]), null == a && (a = o[st.camelCase(n)])) : (a = o),
                    a
                );
        }
    }

    function o(e, t, n) {
        if (st.acceptData(e)) {
            var r,
                i,
                o,
                a = e.nodeType,
                u = a ? st.cache : e,
                l = a ? e[st.expando] : st.expando;
            if (u[l]) {
                if (t && (r = n ? u[l] : u[l].data)) {
                    st.isArray(t) ?
                        (t = t.concat(st.map(t, st.camelCase))) :
                        t in r ?
                        (t = [t]) :
                        ((t = st.camelCase(t)), (t = t in r ? [t] : t.split(' ')));
                    for (i = 0, o = t.length; o > i; i++) delete r[t[i]];
                    if (!(n ? s : st.isEmptyObject)(r)) return;
                }
                (n || (delete u[l].data, s(u[l]))) &&
                (a ?
                    st.cleanData([e], !0) :
                    st.support.deleteExpando || u != u.window ?
                    delete u[l] :
                    (u[l] = null));
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = 'data-' + n.replace(Nt, '-$1').toLowerCase();
            if (((r = e.getAttribute(i)), 'string' == typeof r)) {
                try {
                    r =
                        'true' === r ?
                        !0 :
                        'false' === r ?
                        !1 :
                        'null' === r ?
                        null :
                        +r + '' === r ?
                        +r :
                        wt.test(r) ?
                        st.parseJSON(r) :
                        r;
                } catch (o) {}
                st.data(e, n, r);
            } else r = t;
        }
        return r;
    }

    function s(e) {
        var t;
        for (t in e)
            if (('data' !== t || !st.isEmptyObject(e[t])) && 'toJSON' !== t)
                return !1;
        return !0;
    }

    function u() {
        return !0;
    }

    function l() {
        return !1;
    }

    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e;
    }

    function f(e, t, n) {
        if (((t = t || 0), st.isFunction(t)))
            return st.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n;
            });
        if (t.nodeType)
            return st.grep(e, function(e) {
                return (e === t) === n;
            });
        if ('string' == typeof t) {
            var r = st.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (Wt.test(t)) return st.filter(t, r, !n);
            t = st.filter(t, r);
        }
        return st.grep(e, function(e) {
            return st.inArray(e, t) >= 0 === n;
        });
    }

    function p(e) {
        var t = zt.split('|'),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n;
    }

    function d(e, t) {
        return (
            e.getElementsByTagName(t)[0] ||
            e.appendChild(e.ownerDocument.createElement(t))
        );
    }

    function h(e) {
        var t = e.getAttributeNode('type');
        return (e.type = (t && t.specified) + '/' + e.type), e;
    }

    function g(e) {
        var t = nn.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            st._data(n, 'globalEval', !t || st._data(t[r], 'globalEval'));
    }

    function y(e, t) {
        if (1 === t.nodeType && st.hasData(e)) {
            var n,
                r,
                i,
                o = st._data(e),
                a = st._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, (a.events = {});
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) st.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = st.extend({}, a.data));
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (
                ((n = t.nodeName.toLowerCase()), !st.support.noCloneEvent && t[st.expando])
            ) {
                r = st._data(t);
                for (i in r.events) st.removeEvent(t, i, r.handle);
                t.removeAttribute(st.expando);
            }
            'script' === n && t.text !== e.text ?
                ((h(t).text = e.text), g(t)) :
                'object' === n ?
                (t.parentNode && (t.outerHTML = e.outerHTML),
                    st.support.html5Clone &&
                    e.innerHTML &&
                    !st.trim(t.innerHTML) &&
                    (t.innerHTML = e.innerHTML)) :
                'input' === n && Zt.test(e.type) ?
                ((t.defaultChecked = t.checked = e.checked),
                    t.value !== e.value && (t.value = e.value)) :
                'option' === n ?
                (t.defaultSelected = t.selected = e.defaultSelected) :
                ('input' === n || 'textarea' === n) &&
                (t.defaultValue = e.defaultValue);
        }
    }

    function b(e, n) {
        var r,
            i,
            o = 0,
            a =
            e.getElementsByTagName !== t ?
            e.getElementsByTagName(n || '*') :
            e.querySelectorAll !== t ?
            e.querySelectorAll(n || '*') :
            t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)
                !n || st.nodeName(i, n) ? a.push(i) : st.merge(a, b(i, n));
        return n === t || (n && st.nodeName(e, n)) ? st.merge([e], a) : a;
    }

    function x(e) {
        Zt.test(e.type) && (e.defaultChecked = e.checked);
    }

    function T(e, t) {
        if (t in e) return t;
        for (
            var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;

        )
            if (((t = Nn[i] + n), t in e)) return t;
        return r;
    }

    function w(e, t) {
        return (
            (e = t || e),
            'none' === st.css(e, 'display') || !st.contains(e.ownerDocument, e)
        );
    }

    function N(e, t) {
        for (var n, r = [], i = 0, o = e.length; o > i; i++)
            (n = e[i]),
            n.style &&
            ((r[i] = st._data(n, 'olddisplay')),
                t ?
                (r[i] || 'none' !== n.style.display || (n.style.display = ''),
                    '' === n.style.display &&
                    w(n) &&
                    (r[i] = st._data(n, 'olddisplay', S(n.nodeName)))) :
                r[i] || w(n) || st._data(n, 'olddisplay', st.css(n, 'display')));
        for (i = 0; o > i; i++)
            (n = e[i]),
            n.style &&
            ((t && 'none' !== n.style.display && '' !== n.style.display) ||
                (n.style.display = t ? r[i] || '' : 'none'));
        return e;
    }

    function C(e, t, n) {
        var r = mn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
    }

    function k(e, t, n, r, i) {
        for (
            var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
                a = 0; 4 > o; o += 2
        )
            'margin' === n && (a += st.css(e, n + wn[o], !0, i)),
            r ?
            ('content' === n && (a -= st.css(e, 'padding' + wn[o], !0, i)),
                'margin' !== n &&
                (a -= st.css(e, 'border' + wn[o] + 'Width', !0, i))) :
            ((a += st.css(e, 'padding' + wn[o], !0, i)),
                'padding' !== n &&
                (a += st.css(e, 'border' + wn[o] + 'Width', !0, i)));
        return a;
    }

    function E(e, t, n) {
        var r = !0,
            i = 'width' === t ? e.offsetWidth : e.offsetHeight,
            o = ln(e),
            a =
            st.support.boxSizing && 'border-box' === st.css(e, 'boxSizing', !1, o);
        if (0 >= i || null == i) {
            if (
                ((i = un(e, t, o)),
                    (0 > i || null == i) && (i = e.style[t]),
                    yn.test(i))
            )
                return i;
            (r = a && (st.support.boxSizingReliable || i === e.style[t])),
            (i = parseFloat(i) || 0);
        }
        return i + k(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
    }

    function S(e) {
        var t = V,
            n = bn[e];
        return (
            n ||
            ((n = A(e, t)),
                ('none' !== n && n) ||
                ((cn = (
                        cn ||
                        st("<iframe frameborder='0' width='0' height='0'/>").css(
                            'cssText',
                            'display:block !important'
                        )
                    ).appendTo(t.documentElement)),
                    (t = (cn[0].contentWindow || cn[0].contentDocument).document),
                    t.write('<!doctype html><html><body>'),
                    t.close(),
                    (n = A(e, t)),
                    cn.detach()),
                (bn[e] = n)),
            n
        );
    }

    function A(e, t) {
        var n = st(t.createElement(e)).appendTo(t.body),
            r = st.css(n[0], 'display');
        return n.remove(), r;
    }

    function j(e, t, n, r) {
        var i;
        if (st.isArray(t))
            st.each(t, function(t, i) {
                n || kn.test(e) ?
                    r(e, i) :
                    j(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
            });
        else if (n || 'object' !== st.type(t)) r(e, t);
        else
            for (i in t) j(e + '[' + i + ']', t[i], n, r);
    }

    function D(e) {
        return function(t, n) {
            'string' != typeof t && ((n = t), (t = '*'));
            var r,
                i = 0,
                o = t.toLowerCase().match(lt) || [];
            if (st.isFunction(n))
                for (;
                    (r = o[i++]);)
                    '+' === r[0] ?
                    ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n)) :
                    (e[r] = e[r] || []).push(n);
        };
    }

    function L(e, n, r, i) {
        function o(u) {
            var l;
            return (
                (a[u] = !0),
                st.each(e[u] || [], function(e, u) {
                    var c = u(n, r, i);
                    return 'string' != typeof c || s || a[c] ?
                        s ?
                        !(l = c) :
                        t :
                        (n.dataTypes.unshift(c), o(c), !1);
                }),
                l
            );
        }
        var a = {},
            s = e === $n;
        return o(n.dataTypes[0]) || (!a['*'] && o('*'));
    }

    function H(e, n) {
        var r,
            i,
            o = st.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && st.extend(!0, e, i), e;
    }

    function M(e, n, r) {
        var i,
            o,
            a,
            s,
            u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
            '*' === l[0];)
            l.shift(),
            i === t && (i = e.mimeType || n.getResponseHeader('Content-Type'));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    l.unshift(o);
                    break;
                }
        if (l[0] in r) a = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + ' ' + l[0]]) {
                    a = o;
                    break;
                }
                s || (s = o);
            }
            a = a || s;
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t;
    }

    function q(e, t) {
        var n,
            r,
            i,
            o,
            a = {},
            s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if ((e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]))
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (;
            (i = u[++s]);)
            if ('*' !== i) {
                if ('*' !== l && l !== i) {
                    if (((n = a[l + ' ' + i] || a['* ' + i]), !n))
                        for (r in a)
                            if (
                                ((o = r.split(' ')),
                                    o[1] === i && (n = a[l + ' ' + o[0]] || a['* ' + o[0]]))
                            ) {
                                n === !0 ?
                                    (n = a[r]) :
                                    a[r] !== !0 && ((i = o[0]), u.splice(s--, 0, i));
                                break;
                            }
                    if (n !== !0)
                        if (n && e['throws']) t = n(t);
                        else
                            try {
                                t = n(t);
                            } catch (c) {
                                return {
                                    state: 'parsererror',
                                    error: n ? c : 'No conversion from ' + l + ' to ' + i,
                                };
                            }
                }
                l = i;
            }
        return { state: 'success', data: t };
    }

    function _() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }

    function F() {
        try {
            return new e.ActiveXObject('Microsoft.XMLHTTP');
        } catch (t) {}
    }

    function O() {
        return (
            setTimeout(function() {
                Qn = t;
            }),
            (Qn = st.now())
        );
    }

    function B(e, t) {
        st.each(t, function(t, n) {
            for (
                var r = (rr[t] || []).concat(rr['*']), i = 0, o = r.length; o > i; i++
            )
                if (r[i].call(e, t, n)) return;
        });
    }

    function P(e, t, n) {
        var r,
            i,
            o = 0,
            a = nr.length,
            s = st.Deferred().always(function() {
                delete u.elem;
            }),
            u = function() {
                if (i) return !1;
                for (
                    var t = Qn || O(),
                        n = Math.max(0, l.startTime + l.duration - t),
                        r = n / l.duration || 0,
                        o = 1 - r,
                        a = 0,
                        u = l.tweens.length; u > a; a++
                )
                    l.tweens[a].run(o);
                return (
                    s.notifyWith(e, [l, o, n]),
                    1 > o && u ? n : (s.resolveWith(e, [l]), !1)
                );
            },
            l = s.promise({
                elem: e,
                props: st.extend({}, t),
                opts: st.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qn || O(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = st.Tween(
                        e,
                        l.opts,
                        t,
                        n,
                        l.opts.specialEasing[t] || l.opts.easing
                    );
                    return l.tweens.push(r), r;
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
                },
            }),
            c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++)
            if ((r = nr[o].call(l, e, c, l.opts))) return r;
        return (
            B(l, c),
            st.isFunction(l.opts.start) && l.opts.start.call(e, l),
            st.fx.timer(st.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always)
        );
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (
                ((r = st.camelCase(n)),
                    (i = t[r]),
                    (o = e[n]),
                    st.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = st.cssHooks[r]),
                    a && 'expand' in a)
            ) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }

    function W(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && w(e);
        n.queue ||
            ((c = st._queueHooks(e, 'fx')),
                null == c.unqueued &&
                ((c.unqueued = 0),
                    (f = c.empty.fire),
                    (c.empty.fire = function() {
                        c.unqueued || f();
                    })),
                c.unqueued++,
                p.always(function() {
                    p.always(function() {
                        c.unqueued--, st.queue(e, 'fx').length || c.empty.fire();
                    });
                })),
            1 === e.nodeType &&
            ('height' in t || 'width' in t) &&
            ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                'inline' === st.css(e, 'display') &&
                'none' === st.css(e, 'float') &&
                (st.support.inlineBlockNeedsLayout && 'inline' !== S(e.nodeName) ?
                    (d.zoom = 1) :
                    (d.display = 'inline-block'))),
            n.overflow &&
            ((d.overflow = 'hidden'),
                st.support.shrinkWrapBlocks ||
                p.done(function() {
                    (d.overflow = n.overflow[0]),
                    (d.overflowX = n.overflow[1]),
                    (d.overflowY = n.overflow[2]);
                }));
        for (r in t)
            if (((o = t[r]), Zn.exec(o))) {
                if (
                    (delete t[r], (u = u || 'toggle' === o), o === (m ? 'hide' : 'show'))
                )
                    continue;
                g.push(r);
            }
        if ((a = g.length)) {
            (s = st._data(e, 'fxshow') || st._data(e, 'fxshow', {})),
            'hidden' in s && (m = s.hidden),
                u && (s.hidden = !m),
                m ?
                st(e).show() :
                p.done(function() {
                    st(e).hide();
                }),
                p.done(function() {
                    var t;
                    st._removeData(e, 'fxshow');
                    for (t in h) st.style(e, t, h[t]);
                });
            for (r = 0; a > r; r++)
                (i = g[r]),
                (l = p.createTween(i, m ? s[i] : 0)),
                (h[i] = s[i] || st.style(e, i)),
                i in s ||
                ((s[i] = l.start),
                    m &&
                    ((l.end = l.start),
                        (l.start = 'width' === i || 'height' === i ? 1 : 0)));
        }
    }

    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i);
    }

    function I(e, t) {
        var n,
            r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            (n = wn[i]), (r['margin' + n] = r['padding' + n] = e);
        return t && (r.opacity = r.width = e), r;
    }

    function z(e) {
        return st.isWindow(e) ?
            e :
            9 === e.nodeType ?
            e.defaultView || e.parentWindow :
            !1;
    }
    var X,
        U,
        V = e.document,
        Y = e.location,
        J = e.jQuery,
        G = e.$,
        Q = {},
        K = [],
        Z = '1.9.0',
        et = K.concat,
        tt = K.push,
        nt = K.slice,
        rt = K.indexOf,
        it = Q.toString,
        ot = Q.hasOwnProperty,
        at = Z.trim,
        st = function(e, t) {
            return new st.fn.init(e, t, X);
        },
        ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        lt = /\S+/g,
        ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^[\],:{}\s]*$/,
        ht = /(?:^|:|,)(?:\s*\[)+/g,
        gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        yt = /^-ms-/,
        vt = /-([\da-z])/gi,
        bt = function(e, t) {
            return t.toUpperCase();
        },
        xt = function() {
            V.addEventListener ?
                (V.removeEventListener('DOMContentLoaded', xt, !1), st.ready()) :
                'complete' === V.readyState &&
                (V.detachEvent('onreadystatechange', xt), st.ready());
        };
    (st.fn = st.prototype = {
        jquery: Z,
        constructor: st,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ('string' == typeof e) {
                if (
                    ((i =
                        '<' === e.charAt(0) &&
                        '>' === e.charAt(e.length - 1) &&
                        e.length >= 3 ? [null, e, null] :
                        ft.exec(e)), !i || (!i[1] && n))
                )
                    return !n || n.jquery ?
                        (n || r).find(e) :
                        this.constructor(n).find(e);
                if (i[1]) {
                    if (
                        ((n = n instanceof st ? n[0] : n),
                            st.merge(
                                this,
                                st.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : V, !0)
                            ),
                            pt.test(i[1]) && st.isPlainObject(n))
                    )
                        for (i in n)
                            st.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if (((o = V.getElementById(i[2])), o && o.parentNode)) {
                    if (o.id !== i[2]) return r.find(e);
                    (this.length = 1), (this[0] = o);
                }
                return (this.context = V), (this.selector = e), this;
            }
            return e.nodeType ?
                ((this.context = this[0] = e), (this.length = 1), this) :
                st.isFunction(e) ?
                r.ready(e) :
                (e.selector !== t &&
                    ((this.selector = e.selector), (this.context = e.context)),
                    st.makeArray(e, this));
        },
        selector: '',
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return nt.call(this);
        },
        get: function(e) {
            return null == e ?
                this.toArray() :
                0 > e ?
                this[this.length + e] :
                this[e];
        },
        pushStack: function(e) {
            var t = st.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function(e, t) {
            return st.each(this, e, t);
        },
        ready: function(e) {
            return st.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(nt.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        map: function(e) {
            return this.pushStack(
                st.map(this, function(t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: tt,
        sort: [].sort,
        splice: [].splice,
    }),
    (st.fn.init.prototype = st.fn),
    (st.extend = st.fn.extend = function() {
        var e,
            n,
            r,
            i,
            o,
            a,
            s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for (
            'boolean' == typeof s && ((c = s), (s = arguments[1] || {}), (u = 2)),
            'object' == typeof s || st.isFunction(s) || (s = {}),
            l === u && ((s = this), --u); l > u; u++
        )
            if (null != (e = arguments[u]))
                for (n in e)
                    (r = s[n]),
                    (i = e[n]),
                    s !== i &&
                    (c && i && (st.isPlainObject(i) || (o = st.isArray(i))) ?
                        (o ?
                            ((o = !1), (a = r && st.isArray(r) ? r : [])) :
                            (a = r && st.isPlainObject(r) ? r : {}),
                            (s[n] = st.extend(c, a, i))) :
                        i !== t && (s[n] = i));
        return s;
    }),
    st.extend({
            noConflict: function(t) {
                return (
                    e.$ === st && (e.$ = G), t && e.jQuery === st && (e.jQuery = J), st
                );
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? st.readyWait++ : st.ready(!0);
            },
            ready: function(e) {
                if (e === !0 ? !--st.readyWait : !st.isReady) {
                    if (!V.body) return setTimeout(st.ready);
                    (st.isReady = !0),
                    (e !== !0 && --st.readyWait > 0) ||
                    (U.resolveWith(V, [st]),
                        st.fn.trigger && st(V).trigger('ready').off('ready'));
                }
            },
            isFunction: function(e) {
                return 'function' === st.type(e);
            },
            isArray: Array.isArray ||
                function(e) {
                    return 'array' === st.type(e);
                },
            isWindow: function(e) {
                return null != e && e == e.window;
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            type: function(e) {
                return null == e ?
                    e + '' :
                    'object' == typeof e || 'function' == typeof e ?
                    Q[it.call(e)] || 'object' :
                    typeof e;
            },
            isPlainObject: function(e) {
                if (!e || 'object' !== st.type(e) || e.nodeType || st.isWindow(e))
                    return !1;
                try {
                    if (
                        e.constructor &&
                        !ot.call(e, 'constructor') &&
                        !ot.call(e.constructor.prototype, 'isPrototypeOf')
                    )
                        return !1;
                } catch (n) {
                    return !1;
                }
                var r;
                for (r in e);
                return r === t || ot.call(e, r);
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            error: function(e) {
                throw Error(e);
            },
            parseHTML: function(e, t, n) {
                if (!e || 'string' != typeof e) return null;
                'boolean' == typeof t && ((n = t), (t = !1)), (t = t || V);
                var r = pt.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] :
                    ((r = st.buildFragment([e], t, i)),
                        i && st(i).remove(),
                        st.merge([], r.childNodes));
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ?
                    e.JSON.parse(n) :
                    null === n ?
                    n :
                    'string' == typeof n &&
                    ((n = st.trim(n)),
                        n && dt.test(n.replace(gt, '@').replace(mt, ']').replace(ht, ''))) ?
                    Function('return ' + n)() :
                    (st.error('Invalid JSON: ' + n), t);
            },
            parseXML: function(n) {
                var r, i;
                if (!n || 'string' != typeof n) return null;
                try {
                    e.DOMParser ?
                        ((i = new DOMParser()), (r = i.parseFromString(n, 'text/xml'))) :
                        ((r = new ActiveXObject('Microsoft.XMLDOM')),
                            (r.async = 'false'),
                            r.loadXML(n));
                } catch (o) {
                    r = t;
                }
                return (
                    (r &&
                        r.documentElement &&
                        !r.getElementsByTagName('parsererror').length) ||
                    st.error('Invalid XML: ' + n),
                    r
                );
            },
            noop: function() {},
            globalEval: function(t) {
                t &&
                    st.trim(t) &&
                    (
                        e.execScript ||
                        function(t) {
                            e.eval.call(e, t);
                        }
                    )(t);
            },
            camelCase: function(e) {
                return e.replace(yt, 'ms-').replace(vt, bt);
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function(e, t, r) {
                var i,
                    o = 0,
                    a = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; a > o && ((i = t.apply(e[o], r)), i !== !1); o++);
                    else
                        for (o in e)
                            if (((i = t.apply(e[o], r)), i === !1)) break;
                } else if (s)
                    for (; a > o && ((i = t.call(e[o], o, e[o])), i !== !1); o++);
                else
                    for (o in e)
                        if (((i = t.call(e[o], o, e[o])), i === !1)) break;
                return e;
            },
            trim: at && !at.call('\ufeff\u00a0') ?

                function(e) {
                    return null == e ? '' : at.call(e);
                } : function(e) {
                    return null == e ? '' : (e + '').replace(ct, '');
                },
            makeArray: function(e, t) {
                var r = t || [];
                return (
                    null != e &&
                    (n(Object(e)) ?
                        st.merge(r, 'string' == typeof e ? [e] : e) :
                        tt.call(r, e)),
                    r
                );
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (rt) return rt.call(t, e, n);
                    for (
                        r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0; r > n; n++
                    )
                        if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ('number' == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return (e.length = i), e;
            },
            grep: function(e, t, n) {
                var r,
                    i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++)(r = !!t(e[o], o)), n !== r && i.push(e[o]);
                return i;
            },
            map: function(e, t, r) {
                var i,
                    o = 0,
                    a = e.length,
                    s = n(e),
                    u = [];
                if (s)
                    for (; a > o; o++)
                        (i = t(e[o], o, r)), null != i && (u[u.length] = i);
                else
                    for (o in e)(i = t(e[o], o, r)), null != i && (u[u.length] = i);
                return et.apply([], u);
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return (
                    'string' == typeof n && ((r = e[n]), (n = e), (e = r)),
                    st.isFunction(e) ?
                    ((i = nt.call(arguments, 2)),
                        (o = function() {
                            return e.apply(n || this, i.concat(nt.call(arguments)));
                        }),
                        (o.guid = e.guid = e.guid || st.guid++),
                        o) :
                    t
                );
            },
            access: function(e, n, r, i, o, a, s) {
                var u = 0,
                    l = e.length,
                    c = null == r;
                if ('object' === st.type(r)) {
                    o = !0;
                    for (u in r) st.access(e, n, u, r[u], !0, a, s);
                } else if (
                    i !== t &&
                    ((o = !0),
                        st.isFunction(i) || (s = !0),
                        c &&
                        (s ?
                            (n.call(e, i), (n = null)) :
                            ((c = n),
                                (n = function(e, t, n) {
                                    return c.call(st(e), n);
                                }))),
                        n)
                )
                    for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
                return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
            },
            now: function() {
                return new Date().getTime();
            },
        }),
        (st.ready.promise = function(t) {
            if (!U)
                if (((U = st.Deferred()), 'complete' === V.readyState))
                    setTimeout(st.ready);
                else if (V.addEventListener)
                V.addEventListener('DOMContentLoaded', xt, !1),
                e.addEventListener('load', st.ready, !1);
            else {
                V.attachEvent('onreadystatechange', xt),
                    e.attachEvent('onload', st.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && V.documentElement;
                } catch (r) {}
                n &&
                    n.doScroll &&
                    (function i() {
                        if (!st.isReady) {
                            try {
                                n.doScroll('left');
                            } catch (e) {
                                return setTimeout(i, 50);
                            }
                            st.ready();
                        }
                    })();
            }
            return U.promise(t);
        }),
        st.each(
            'Boolean Number String Function Array Date RegExp Object Error'.split(
                ' '
            ),
            function(e, t) {
                Q['[object ' + t + ']'] = t.toLowerCase();
            }
        ),
        (X = st(V));
    var Tt = {};
    (st.Callbacks = function(e) {
        e = 'string' == typeof e ? Tt[e] || r(e) : st.extend({}, e);
        var n,
            i,
            o,
            a,
            s,
            u,
            l = [],
            c = !e.once && [],
            f = function(t) {
                for (
                    n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++
                )
                    if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break;
                    }
                    (o = !1),
                l && (c ? c.length && f(c.shift()) : n ? (l = []) : p.disable());
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function r(t) {
                            st.each(t, function(t, n) {
                                var i = st.type(n);
                                'function' === i
                                    ?
                                    (e.unique && p.has(n)) || l.push(n) :
                                    n && n.length && 'string' !== i && r(n);
                            });
                        })(arguments),
                        o ? (s = l.length) : n && ((a = t), f(n));
                    }
                    return this;
                },
                remove: function() {
                    return (
                        l &&
                        st.each(arguments, function(e, t) {
                            for (var n;
                                (n = st.inArray(t, l, n)) > -1;)
                                l.splice(n, 1), o && (s >= n && s--, u >= n && u--);
                        }),
                        this
                    );
                },
                has: function(e) {
                    return st.inArray(e, l) > -1;
                },
                empty: function() {
                    return (l = []), this;
                },
                disable: function() {
                    return (l = c = n = t), this;
                },
                disabled: function() {
                    return !l;
                },
                lock: function() {
                    return (c = t), n || p.disable(), this;
                },
                locked: function() {
                    return !c;
                },
                fireWith: function(e, t) {
                    return (
                        (t = t || []),
                        (t = [e, t.slice ? t.slice() : t]), !l || (i && !c) || (o ? c.push(t) : f(t)),
                        this
                    );
                },
                fire: function() {
                    return p.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!i;
                },
            };
        return p;
    }),
    st.extend({
            Deferred: function(e) {
                var t = [
                        ['resolve', 'done', st.Callbacks('once memory'), 'resolved'],
                        ['reject', 'fail', st.Callbacks('once memory'), 'rejected'],
                        ['notify', 'progress', st.Callbacks('memory')],
                    ],
                    n = 'pending',
                    r = {
                        state: function() {
                            return n;
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function() {
                            var e = arguments;
                            return st
                                .Deferred(function(n) {
                                    st.each(t, function(t, o) {
                                            var a = o[0],
                                                s = st.isFunction(e[t]) && e[t];
                                            i[o[1]](function() {
                                                var e = s && s.apply(this, arguments);
                                                e && st.isFunction(e.promise) ?
                                                    e
                                                    .promise()
                                                    .done(n.resolve)
                                                    .fail(n.reject)
                                                    .progress(n.notify) :
                                                    n[a + 'With'](
                                                        this === r ? n.promise() : this,
                                                        s ? [e] : arguments
                                                    );
                                            });
                                        }),
                                        (e = null);
                                })
                                .promise();
                        },
                        promise: function(e) {
                            return null != e ? st.extend(e, r) : r;
                        },
                    },
                    i = {};
                return (
                    (r.pipe = r.then),
                    st.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        (r[o[1]] = a.add),
                        s &&
                            a.add(
                                function() {
                                    n = s;
                                },
                                t[1 ^ e][2].disable,
                                t[2][2].lock
                            ),
                            (i[o[0]] = function() {
                                return i[o[0] + 'With'](this === i ? r : this, arguments), this;
                            }),
                            (i[o[0] + 'With'] = a.fireWith);
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                );
            },
            when: function(e) {
                var t,
                    n,
                    r,
                    i = 0,
                    o = nt.call(arguments),
                    a = o.length,
                    s = 1 !== a || (e && st.isFunction(e.promise)) ? a : 0,
                    u = 1 === s ? e : st.Deferred(),
                    l = function(e, n, r) {
                        return function(i) {
                            (n[e] = this),
                            (r[e] = arguments.length > 1 ? nt.call(arguments) : i),
                            r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
                        };
                    };
                if (a > 1)
                    for (t = Array(a), n = Array(a), r = Array(a); a > i; i++)
                        o[i] && st.isFunction(o[i].promise) ?
                        o[i]
                        .promise()
                        .done(l(i, r, o))
                        .fail(u.reject)
                        .progress(l(i, n, t)) :
                        --s;
                return s || u.resolveWith(r, o), u.promise();
            },
        }),
        (st.support = (function() {
            var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = V.createElement('div');
            if (
                (p.setAttribute('className', 't'),
                    (p.innerHTML =
                        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                    (r = p.getElementsByTagName('*')),
                    (i = p.getElementsByTagName('a')[0]), !r || !i || !r.length)
            )
                return {};
            (o = V.createElement('select')),
            (a = o.appendChild(V.createElement('option'))),
            (s = p.getElementsByTagName('input')[0]),
            (i.style.cssText = 'top:1px;float:left;opacity:.5'),
            (n = {
                getSetAttribute: 't' !== p.className,
                leadingWhitespace: 3 === p.firstChild.nodeType,
                tbody: !p.getElementsByTagName('tbody').length,
                htmlSerialize: !!p.getElementsByTagName('link').length,
                style: /top/.test(i.getAttribute('style')),
                hrefNormalized: '/a' === i.getAttribute('href'),
                opacity: /^0.5/.test(i.style.opacity),
                cssFloat: !!i.style.cssFloat,
                checkOn: !!s.value,
                optSelected: a.selected,
                enctype: !!V.createElement('form').enctype,
                html5Clone: '<:nav></:nav>' !== V.createElement('nav').cloneNode(!0).outerHTML,
                boxModel: 'CSS1Compat' === V.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1,
            }),
            (s.checked = !0),
            (n.noCloneChecked = s.cloneNode(!0).checked),
            (o.disabled = !0),
            (n.optDisabled = !a.disabled);
            try {
                delete p.test;
            } catch (d) {
                n.deleteExpando = !1;
            }
            (s = V.createElement('input')),
            s.setAttribute('value', ''),
                (n.input = '' === s.getAttribute('value')),
                (s.value = 't'),
                s.setAttribute('type', 'radio'),
                (n.radioValue = 't' === s.value),
                s.setAttribute('checked', 't'),
                s.setAttribute('name', 't'),
                (u = V.createDocumentFragment()),
                u.appendChild(s),
                (n.appendChecked = s.checked),
                (n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked),
                p.attachEvent &&
                (p.attachEvent('onclick', function() {
                        n.noCloneEvent = !1;
                    }),
                    p.cloneNode(!0).click());
            for (f in { submit: !0, change: !0, focusin: !0 })
                p.setAttribute((l = 'on' + f), 't'),
                (n[f + 'Bubbles'] = l in e || p.attributes[l].expando === !1);
            return (
                (p.style.backgroundClip = 'content-box'),
                (p.cloneNode(!0).style.backgroundClip = ''),
                (n.clearCloneStyle = 'content-box' === p.style.backgroundClip),
                st(function() {
                    var r,
                        i,
                        o,
                        a =
                        'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
                        s = V.getElementsByTagName('body')[0];
                    s &&
                        ((r = V.createElement('div')),
                            (r.style.cssText =
                                'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px'),
                            s.appendChild(r).appendChild(p),
                            (p.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
                            (o = p.getElementsByTagName('td')),
                            (o[0].style.cssText = 'padding:0;margin:0;border:0;display:none'),
                            (c = 0 === o[0].offsetHeight),
                            (o[0].style.display = ''),
                            (o[1].style.display = 'none'),
                            (n.reliableHiddenOffsets = c && 0 === o[0].offsetHeight),
                            (p.innerHTML = ''),
                            (p.style.cssText =
                                'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;'),
                            (n.boxSizing = 4 === p.offsetWidth),
                            (n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop),
                            e.getComputedStyle &&
                            ((n.pixelPosition =
                                    '1%' !== (e.getComputedStyle(p, null) || {}).top),
                                (n.boxSizingReliable =
                                    '4px' ===
                                    (e.getComputedStyle(p, null) || { width: '4px' }).width),
                                (i = p.appendChild(V.createElement('div'))),
                                (i.style.cssText = p.style.cssText = a),
                                (i.style.marginRight = i.style.width = '0'),
                                (p.style.width = '1px'),
                                (n.reliableMarginRight = !parseFloat(
                                    (e.getComputedStyle(i, null) || {}).marginRight
                                ))),
                            p.style.zoom !== t &&
                            ((p.innerHTML = ''),
                                (p.style.cssText =
                                    a + 'width:1px;padding:1px;display:inline;zoom:1'),
                                (n.inlineBlockNeedsLayout = 3 === p.offsetWidth),
                                (p.style.display = 'block'),
                                (p.innerHTML = '<div></div>'),
                                (p.firstChild.style.width = '5px'),
                                (n.shrinkWrapBlocks = 3 !== p.offsetWidth),
                                (s.style.zoom = 1)),
                            s.removeChild(r),
                            (r = p = o = i = null));
                }),
                (r = o = u = a = i = s = null),
                n
            );
        })());
    var wt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Nt = /([A-Z])/g;
    st.extend({
            cache: {},
            expando: 'jQuery' + (Z + Math.random()).replace(/\D/g, ''),
            noData: {
                embed: !0,
                object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
                applet: !0,
            },
            hasData: function(e) {
                return (
                    (e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando]), !!e && !s(e)
                );
            },
            data: function(e, t, n) {
                return i(e, t, n, !1);
            },
            removeData: function(e, t) {
                return o(e, t, !1);
            },
            _data: function(e, t, n) {
                return i(e, t, n, !0);
            },
            _removeData: function(e, t) {
                return o(e, t, !0);
            },
            acceptData: function(e) {
                var t = e.nodeName && st.noData[e.nodeName.toLowerCase()];
                return !t || (t !== !0 && e.getAttribute('classid') === t);
            },
        }),
        st.fn.extend({
            data: function(e, n) {
                var r,
                    i,
                    o = this[0],
                    s = 0,
                    u = null;
                if (e === t) {
                    if (
                        this.length &&
                        ((u = st.data(o)), 1 === o.nodeType && !st._data(o, 'parsedAttrs'))
                    ) {
                        for (r = o.attributes; r.length > s; s++)
                            (i = r[s].name),
                            i.indexOf('data-') ||
                            ((i = st.camelCase(i.substring(5))), a(o, i, u[i]));
                        st._data(o, 'parsedAttrs', !0);
                    }
                    return u;
                }
                return 'object' == typeof e ?
                    this.each(function() {
                        st.data(this, e);
                    }) :
                    st.access(
                        this,
                        function(n) {
                            return n === t ?
                                o ?
                                a(o, e, st.data(o, e)) :
                                null :
                                (this.each(function() {
                                        st.data(this, e, n);
                                    }),
                                    t);
                        },
                        null,
                        n,
                        arguments.length > 1,
                        null, !0
                    );
            },
            removeData: function(e) {
                return this.each(function() {
                    st.removeData(this, e);
                });
            },
        }),
        st.extend({
            queue: function(e, n, r) {
                var i;
                return e ?
                    ((n = (n || 'fx') + 'queue'),
                        (i = st._data(e, n)),
                        r &&
                        (!i || st.isArray(r) ?
                            (i = st._data(e, n, st.makeArray(r))) :
                            i.push(r)),
                        i || []) :
                    t;
            },
            dequeue: function(e, t) {
                t = t || 'fx';
                var n = st.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = st._queueHooks(e, t),
                    a = function() {
                        st.dequeue(e, t);
                    };
                'inprogress' === i && ((i = n.shift()), r--),
                    (o.cur = i),
                    i &&
                    ('fx' === t && n.unshift('inprogress'),
                        delete o.stop,
                        i.call(e, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + 'queueHooks';
                return (
                    st._data(e, n) ||
                    st._data(e, n, {
                        empty: st.Callbacks('once memory').add(function() {
                            st._removeData(e, t + 'queue'), st._removeData(e, n);
                        }),
                    })
                );
            },
        }),
        st.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return (
                    'string' != typeof e && ((n = e), (e = 'fx'), r--),
                    r > arguments.length ?
                    st.queue(this[0], e) :
                    n === t ?
                    this :
                    this.each(function() {
                        var t = st.queue(this, e, n);
                        st._queueHooks(this, e),
                            'fx' === e && 'inprogress' !== t[0] && st.dequeue(this, e);
                    })
                );
            },
            dequeue: function(e) {
                return this.each(function() {
                    st.dequeue(this, e);
                });
            },
            delay: function(e, t) {
                return (
                    (e = st.fx ? st.fx.speeds[e] || e : e),
                    (t = t || 'fx'),
                    this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r);
                        };
                    })
                );
            },
            clearQueue: function(e) {
                return this.queue(e || 'fx', []);
            },
            promise: function(e, n) {
                var r,
                    i = 1,
                    o = st.Deferred(),
                    a = this,
                    s = this.length,
                    u = function() {
                        --i || o.resolveWith(a, [a]);
                    };
                for ('string' != typeof e && ((n = e), (e = t)), e = e || 'fx'; s--;)
                    (r = st._data(a[s], e + 'queueHooks')),
                    r && r.empty && (i++, r.empty.add(u));
                return u(), o.promise(n);
            },
        });
    var Ct,
        kt,
        Et = /[\t\r\n]/g,
        St = /\r/g,
        At = /^(?:input|select|textarea|button|object)$/i,
        jt = /^(?:a|area)$/i,
        Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Lt = /^(?:checked|selected)$/i,
        Ht = st.support.getSetAttribute,
        Mt = st.support.input;
    st.fn.extend({
            attr: function(e, t) {
                return st.access(this, st.attr, e, t, arguments.length > 1);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    st.removeAttr(this, e);
                });
            },
            prop: function(e, t) {
                return st.access(this, st.prop, e, t, arguments.length > 1);
            },
            removeProp: function(e) {
                return (
                    (e = st.propFix[e] || e),
                    this.each(function() {
                        try {
                            (this[e] = t), delete this[e];
                        } catch (n) {}
                    })
                );
            },
            addClass: function(e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    a = 0,
                    s = this.length,
                    u = 'string' == typeof e && e;
                if (st.isFunction(e))
                    return this.each(function(t) {
                        st(this).addClass(e.call(this, t, this.className));
                    });
                if (u)
                    for (t = (e || '').match(lt) || []; s > a; a++)
                        if (
                            ((n = this[a]),
                                (r =
                                    1 === n.nodeType &&
                                    (n.className ? (' ' + n.className + ' ').replace(Et, ' ') : ' ')))
                        ) {
                            for (o = 0;
                                (i = t[o++]);)
                                0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
                            n.className = st.trim(r);
                        }
                return this;
            },
            removeClass: function(e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    a = 0,
                    s = this.length,
                    u = 0 === arguments.length || ('string' == typeof e && e);
                if (st.isFunction(e))
                    return this.each(function(t) {
                        st(this).removeClass(e.call(this, t, this.className));
                    });
                if (u)
                    for (t = (e || '').match(lt) || []; s > a; a++)
                        if (
                            ((n = this[a]),
                                (r =
                                    1 === n.nodeType &&
                                    (n.className ? (' ' + n.className + ' ').replace(Et, ' ') : '')))
                        ) {
                            for (o = 0;
                                (i = t[o++]);)
                                for (; r.indexOf(' ' + i + ' ') >= 0;)
                                    r = r.replace(' ' + i + ' ', ' ');
                            n.className = e ? st.trim(r) : '';
                        }
                return this;
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = 'boolean' == typeof t;
                return st.isFunction(e) ?
                    this.each(function(n) {
                        st(this).toggleClass(e.call(this, n, this.className, t), t);
                    }) :
                    this.each(function() {
                        if ('string' === n)
                            for (
                                var i, o = 0, a = st(this), s = t, u = e.match(lt) || [];
                                (i = u[o++]);

                            )
                                (s = r ? s : !a.hasClass(i)),
                                a[s ? 'addClass' : 'removeClass'](i);
                        else
                            ('undefined' === n || 'boolean' === n) &&
                            (this.className &&
                                st._data(this, '__className__', this.className),
                                (this.className =
                                    this.className || e === !1 ?
                                    '' :
                                    st._data(this, '__className__') || ''));
                    });
            },
            hasClass: function(e) {
                for (var t = ' ' + e + ' ', n = 0, r = this.length; r > n; n++)
                    if (
                        1 === this[n].nodeType &&
                        (' ' + this[n].className + ' ').replace(Et, ' ').indexOf(t) >= 0
                    )
                        return !0;
                return !1;
            },
            val: function(e) {
                var n,
                    r,
                    i,
                    o = this[0]; {
                    if (arguments.length)
                        return (
                            (i = st.isFunction(e)),
                            this.each(function(r) {
                                var o,
                                    a = st(this);
                                1 === this.nodeType &&
                                    ((o = i ? e.call(this, r, a.val()) : e),
                                        null == o ?
                                        (o = '') :
                                        'number' == typeof o ?
                                        (o += '') :
                                        st.isArray(o) &&
                                        (o = st.map(o, function(e) {
                                            return null == e ? '' : e + '';
                                        })),
                                        (n =
                                            st.valHooks[this.type] ||
                                            st.valHooks[this.nodeName.toLowerCase()]),
                                        (n && 'set' in n && n.set(this, o, 'value') !== t) ||
                                        (this.value = o));
                            })
                        );
                    if (o)
                        return (
                            (n = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()]),
                            n && 'get' in n && (r = n.get(o, 'value')) !== t ?
                            r :
                            ((r = o.value),
                                'string' == typeof r ? r.replace(St, '') : null == r ? '' : r)
                        );
                }
            },
        }),
        st.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text;
                    },
                },
                select: {
                    get: function(e) {
                        for (
                            var t,
                                n,
                                r = e.options,
                                i = e.selectedIndex,
                                o = 'select-one' === e.type || 0 > i,
                                a = o ? null : [],
                                s = o ? i + 1 : r.length,
                                u = 0 > i ? s : o ? i : 0; s > u; u++
                        )
                            if (
                                ((n = r[u]), !(
                                    (!n.selected && u !== i) ||
                                    (st.support.optDisabled ?
                                        n.disabled :
                                        null !== n.getAttribute('disabled')) ||
                                    (n.parentNode.disabled &&
                                        st.nodeName(n.parentNode, 'optgroup'))
                                ))
                            ) {
                                if (((t = st(n).val()), o)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function(e, t) {
                        var n = st.makeArray(t);
                        return (
                            st(e)
                            .find('option')
                            .each(function() {
                                this.selected = st.inArray(st(this).val(), n) >= 0;
                            }),
                            n.length || (e.selectedIndex = -1),
                            n
                        );
                    },
                },
            },
            attr: function(e, n, r) {
                var i,
                    o,
                    a,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return e.getAttribute === t ?
                        st.prop(e, n, r) :
                        ((a = 1 !== s || !st.isXMLDoc(e)),
                            a &&
                            ((n = n.toLowerCase()),
                                (o = st.attrHooks[n] || (Dt.test(n) ? kt : Ct))),
                            r === t ?
                            o && a && 'get' in o && null !== (i = o.get(e, n)) ?
                            i :
                            (e.getAttribute !== t && (i = e.getAttribute(n)),
                                null == i ? t : i) :
                            null !== r ?
                            o && a && 'set' in o && (i = o.set(e, r, n)) !== t ?
                            i :
                            (e.setAttribute(n, r + ''), r) :
                            (st.removeAttr(e, n), t));
            },
            removeAttr: function(e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(lt);
                if (o && 1 === e.nodeType)
                    for (;
                        (n = o[i++]);)
                        (r = st.propFix[n] || n),
                        Dt.test(n) ?
                        !Ht && Lt.test(n) ?
                        (e[st.camelCase('default-' + n)] = e[r] = !1) :
                        (e[r] = !1) :
                        st.attr(e, n, ''),
                        e.removeAttribute(Ht ? n : r);
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!st.support.radioValue &&
                            'radio' === t &&
                            st.nodeName(e, 'input')
                        ) {
                            var n = e.value;
                            return e.setAttribute('type', t), n && (e.value = n), t;
                        }
                    },
                },
            },
            propFix: {
                tabindex: 'tabIndex',
                readonly: 'readOnly',
                for: 'htmlFor',
                class: 'className',
                maxlength: 'maxLength',
                cellspacing: 'cellSpacing',
                cellpadding: 'cellPadding',
                rowspan: 'rowSpan',
                colspan: 'colSpan',
                usemap: 'useMap',
                frameborder: 'frameBorder',
                contenteditable: 'contentEditable',
            },
            prop: function(e, n, r) {
                var i,
                    o,
                    a,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return (
                        (a = 1 !== s || !st.isXMLDoc(e)),
                        a && ((n = st.propFix[n] || n), (o = st.propHooks[n])),
                        r !== t ?
                        o && 'set' in o && (i = o.set(e, r, n)) !== t ?
                        i :
                        (e[n] = r) :
                        o && 'get' in o && null !== (i = o.get(e, n)) ?
                        i :
                        e[n]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode('tabindex');
                        return n && n.specified ?
                            parseInt(n.value, 10) :
                            At.test(e.nodeName) || (jt.test(e.nodeName) && e.href) ?
                            0 :
                            t;
                    },
                },
            },
        }),
        (kt = {
            get: function(e, n) {
                var r = st.prop(e, n),
                    i = 'boolean' == typeof r && e.getAttribute(n),
                    o =
                    'boolean' == typeof r ?
                    Mt && Ht ?
                    null != i :
                    Lt.test(n) ?
                    e[st.camelCase('default-' + n)] :
                    !!i :
                    e.getAttributeNode(n);
                return o && o.value !== !1 ? n.toLowerCase() : t;
            },
            set: function(e, t, n) {
                return (
                    t === !1 ?
                    st.removeAttr(e, n) :
                    (Mt && Ht) || !Lt.test(n) ?
                    e.setAttribute((!Ht && st.propFix[n]) || n, n) :
                    (e[st.camelCase('default-' + n)] = e[n] = !0),
                    n
                );
            },
        }),
        (Mt && Ht) ||
        (st.attrHooks.value = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return st.nodeName(e, 'input') ?
                    e.defaultValue :
                    r && r.specified ?
                    r.value :
                    t;
            },
            set: function(e, n, r) {
                return st.nodeName(e, 'input') ?
                    ((e.defaultValue = n), t) :
                    Ct && Ct.set(e, n, r);
            },
        }),
        Ht ||
        ((Ct = st.valHooks.button = {
                get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return r &&
                        ('id' === n || 'name' === n || 'coords' === n ?
                            '' !== r.value :
                            r.specified) ?
                        r.value :
                        t;
                },
                set: function(e, n, r) {
                    var i = e.getAttributeNode(r);
                    return (
                        i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
                        (i.value = n += ''),
                        'value' === r || n === e.getAttribute(r) ? n : t
                    );
                },
            }),
            (st.attrHooks.contenteditable = {
                get: Ct.get,
                set: function(e, t, n) {
                    Ct.set(e, '' === t ? !1 : t, n);
                },
            }),
            st.each(['width', 'height'], function(e, n) {
                st.attrHooks[n] = st.extend(st.attrHooks[n], {
                    set: function(e, r) {
                        return '' === r ? (e.setAttribute(n, 'auto'), r) : t;
                    },
                });
            })),
        st.support.hrefNormalized ||
        (st.each(['href', 'src', 'width', 'height'], function(e, n) {
                st.attrHooks[n] = st.extend(st.attrHooks[n], {
                    get: function(e) {
                        var r = e.getAttribute(n, 2);
                        return null == r ? t : r;
                    },
                });
            }),
            st.each(['href', 'src'], function(e, t) {
                st.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4);
                    },
                };
            })),
        st.support.style ||
        (st.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t;
            },
            set: function(e, t) {
                return (e.style.cssText = t + '');
            },
        }),
        st.support.optSelected ||
        (st.propHooks.selected = st.extend(st.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return (
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                    null
                );
            },
        })),
        st.support.enctype || (st.propFix.enctype = 'encoding'),
        st.support.checkOn ||
        st.each(['radio', 'checkbox'], function() {
            st.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute('value') ? 'on' : e.value;
                },
            };
        }),
        st.each(['radio', 'checkbox'], function() {
            st.valHooks[this] = st.extend(st.valHooks[this], {
                set: function(e, n) {
                    return st.isArray(n) ?
                        (e.checked = st.inArray(st(e).val(), n) >= 0) :
                        t;
                },
            });
        });
    var qt = /^(?:input|select|textarea)$/i,
        _t = /^key/,
        Ft = /^(?:mouse|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        Bt = /^([^.]*)(?:\.(.+)|)$/;
    (st.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                m,
                y = 3 !== e.nodeType && 8 !== e.nodeType && st._data(e);
            if (y) {
                for (
                    r.handler && ((a = r), (r = a.handler), (o = a.selector)),
                    r.guid || (r.guid = st.guid++),
                    (l = y.events) || (l = y.events = {}),
                    (s = y.handle) ||
                    ((s = y.handle = function(e) {
                            return st === t || (e && st.event.triggered === e.type) ?
                                t :
                                st.event.dispatch.apply(s.elem, arguments);
                        }),
                        (s.elem = e)),
                    n = (n || '').match(lt) || [''],
                    c = n.length; c--;

                )
                    (u = Bt.exec(n[c]) || []),
                    (h = m = u[1]),
                    (g = (u[2] || '').split('.').sort()),
                    (p = st.event.special[h] || {}),
                    (h = (o ? p.delegateType : p.bindType) || h),
                    (p = st.event.special[h] || {}),
                    (f = st.extend({
                            type: h,
                            origType: m,
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: o,
                            needsContext: o && st.expr.match.needsContext.test(o),
                            namespace: g.join('.'),
                        },
                        a
                    )),
                    (d = l[h]) ||
                    ((d = l[h] = []),
                        (d.delegateCount = 0),
                        (p.setup && p.setup.call(e, i, g, s) !== !1) ||
                        (e.addEventListener ?
                            e.addEventListener(h, s, !1) :
                            e.attachEvent && e.attachEvent('on' + h, s))),
                    p.add &&
                    (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)),
                    o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                    (st.event.global[h] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                m = st.hasData(e) && st._data(e);
            if (m && (u = m.events)) {
                for (t = (t || '').match(lt) || [''], l = t.length; l--;)
                    if (
                        ((s = Bt.exec(t[l]) || []),
                            (d = g = s[1]),
                            (h = (s[2] || '').split('.').sort()),
                            d)
                    ) {
                        for (
                            f = st.event.special[d] || {},
                            d = (r ? f.delegateType : f.bindType) || d,
                            p = u[d] || [],
                            s =
                            s[2] &&
                            RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                            a = o = p.length; o--;

                        )
                            (c = p[o]),
                            (!i && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (s && !s.test(c.namespace)) ||
                            (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                            (p.splice(o, 1),
                                c.selector && p.delegateCount--,
                                f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown && f.teardown.call(e, h, m.handle) !== !1) ||
                                st.removeEvent(e, d, m.handle),
                                delete u[d]);
                    } else
                        for (d in u) st.event.remove(e, d + t[l], n, r, !0);
                st.isEmptyObject(u) && (delete m.handle, st._removeData(e, 'events'));
            }
        },
        trigger: function(n, r, i, o) {
            var a,
                s,
                u,
                l,
                c,
                f,
                p,
                d = [i || V],
                h = n.type || n,
                g = n.namespace ? n.namespace.split('.') : [];
            if (
                ((s = u = i = i || V),
                    3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !Ot.test(h + st.event.triggered) &&
                    (h.indexOf('.') >= 0 &&
                        ((g = h.split('.')), (h = g.shift()), g.sort()),
                        (c = 0 > h.indexOf(':') && 'on' + h),
                        (n = n[st.expando] ? n : new st.Event(h, 'object' == typeof n && n)),
                        (n.isTrigger = !0),
                        (n.namespace = g.join('.')),
                        (n.namespace_re = n.namespace ?
                            RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') :
                            null),
                        (n.result = t),
                        n.target || (n.target = i),
                        (r = null == r ? [n] : st.makeArray(r, [n])),
                        (p = st.event.special[h] || {}),
                        o || !p.trigger || p.trigger.apply(i, r) !== !1))
            ) {
                if (!o && !p.noBubble && !st.isWindow(i)) {
                    for (
                        l = p.delegateType || h, Ot.test(l + h) || (s = s.parentNode); s; s = s.parentNode
                    )
                        d.push(s), (u = s);
                    u === (i.ownerDocument || V) &&
                        d.push(u.defaultView || u.parentWindow || e);
                }
                for (a = 0;
                    (s = d[a++]) && !n.isPropagationStopped();)
                    (n.type = a > 1 ? l : p.bindType || h),
                    (f =
                        (st._data(s, 'events') || {})[n.type] && st._data(s, 'handle')),
                    f && f.apply(s, r),
                    (f = c && s[c]),
                    f &&
                    st.acceptData(s) &&
                    f.apply &&
                    f.apply(s, r) === !1 &&
                    n.preventDefault();
                if (
                    ((n.type = h), !(
                        o ||
                        n.isDefaultPrevented() ||
                        (p._default && p._default.apply(i.ownerDocument, r) !== !1) ||
                        ('click' === h && st.nodeName(i, 'a')) ||
                        !st.acceptData(i) ||
                        !c ||
                        !i[h] ||
                        st.isWindow(i)
                    ))
                ) {
                    (u = i[c]), u && (i[c] = null), (st.event.triggered = h);
                    try {
                        i[h]();
                    } catch (m) {}
                    (st.event.triggered = t), u && (i[c] = u);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = st.event.fix(e);
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = nt.call(arguments),
                l = (st._data(this, 'events') || {})[e.type] || [],
                c = st.event.special[e.type] || {};
            if (
                ((u[0] = e),
                    (e.delegateTarget = this), !c.preDispatch || c.preDispatch.call(this, e) !== !1)
            ) {
                for (
                    s = st.event.handlers.call(this, e, l), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();

                )
                    for (
                        e.currentTarget = o.elem, r = 0;
                        (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();

                    )
                        (!e.namespace_re || e.namespace_re.test(a.namespace)) &&
                        ((e.handleObj = a),
                            (e.data = a.data),
                            (i = (
                                (st.event.special[a.origType] || {}).handle || a.handler
                            ).apply(o.elem, u)),
                            i !== t &&
                            (e.result = i) === !1 &&
                            (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r,
                i,
                o,
                a,
                s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || 'click' !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (l.disabled !== !0 || 'click' !== e.type) {
                        for (i = [], r = 0; u > r; r++)
                            (a = n[r]),
                            (o = a.selector + ' '),
                            i[o] === t &&
                            (i[o] = a.needsContext ?
                                st(o, this).index(l) >= 0 :
                                st.find(o, this, null, [l]).length),
                            i[o] && i.push(a);
                        i.length && s.push({ elem: l, handlers: i });
                    }
            return n.length > u && s.push({ elem: this, handlers: n.slice(u) }), s;
        },
        fix: function(e) {
            if (e[st.expando]) return e;
            var t,
                n,
                r = e,
                i = st.event.fixHooks[e.type] || {},
                o = i.props ? this.props.concat(i.props) : this.props;
            for (e = new st.Event(r), t = o.length; t--;)(n = o[t]), (e[n] = r[n]);
            return (
                e.target || (e.target = r.srcElement || V),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                (e.metaKey = !!e.metaKey),
                i.filter ? i.filter(e, r) : e
            );
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
            ' '
        ),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function(e, t) {
                return (
                    null == e.which &&
                    (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                );
            },
        },
        mouseHooks: {
            props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
                ' '
            ),
            filter: function(e, n) {
                var r,
                    i,
                    o,
                    a = n.button,
                    s = n.fromElement;
                return (
                    null == e.pageX &&
                    null != n.clientX &&
                    ((r = e.target.ownerDocument || V),
                        (i = r.documentElement),
                        (o = r.body),
                        (e.pageX =
                            n.clientX +
                            ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
                            ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
                        (e.pageY =
                            n.clientY +
                            ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
                            ((i && i.clientTop) || (o && o.clientTop) || 0))), !e.relatedTarget &&
                    s &&
                    (e.relatedTarget = s === e.target ? n.toElement : s),
                    e.which ||
                    a === t ||
                    (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                    e
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            click: {
                trigger: function() {
                    return st.nodeName(this, 'input') &&
                        'checkbox' === this.type &&
                        this.click ?
                        (this.click(), !1) :
                        t;
                },
            },
            focus: {
                trigger: function() {
                    if (this !== V.activeElement && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (e) {}
                },
                delegateType: 'focusin',
            },
            blur: {
                trigger: function() {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: 'focusout',
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function(e, t, n, r) {
            var i = st.extend(new st.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {},
            });
            r ? st.event.trigger(i, null, t) : st.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault();
        },
    }),
    (st.removeEvent = V.removeEventListener ?

        function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
        } :
        function(e, n, r) {
            var i = 'on' + n;
            e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r));
        }),
    (st.Event = function(e, n) {
        return this instanceof st.Event ?
            (e && e.type ?
                ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                        e.defaultPrevented ||
                        e.returnValue === !1 ||
                        (e.getPreventDefault && e.getPreventDefault()) ?
                        u :
                        l)) :
                (this.type = e),
                n && st.extend(this, n),
                (this.timeStamp = (e && e.timeStamp) || st.now()),
                (this[st.expando] = !0),
                t) :
            new st.Event(e, n);
    }),
    (st.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = u),
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = u),
            e &&
                (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function() {
            (this.isImmediatePropagationStopped = u), this.stopPropagation();
        },
    }),
    st.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function(
            e,
            t
        ) {
            st.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (
                        (!i || (i !== r && !st.contains(r, i))) &&
                        ((e.type = o.origType),
                            (n = o.handler.apply(this, arguments)),
                            (e.type = t)),
                        n
                    );
                },
            };
        }),
        st.support.submitBubbles ||
        (st.event.special.submit = {
            setup: function() {
                return st.nodeName(this, 'form') ?
                    !1 :
                    (st.event.add(this, 'click._submit keypress._submit', function(
                            e
                        ) {
                            var n = e.target,
                                r =
                                st.nodeName(n, 'input') || st.nodeName(n, 'button') ?
                                n.form :
                                t;
                            r &&
                                !st._data(r, 'submitBubbles') &&
                                (st.event.add(r, 'submit._submit', function(e) {
                                        e._submit_bubble = !0;
                                    }),
                                    st._data(r, 'submitBubbles', !0));
                        }),
                        t);
            },
            postDispatch: function(e) {
                e._submit_bubble &&
                    (delete e._submit_bubble,
                        this.parentNode &&
                        !e.isTrigger &&
                        st.event.simulate('submit', this.parentNode, e, !0));
            },
            teardown: function() {
                return st.nodeName(this, 'form') ?
                    !1 :
                    (st.event.remove(this, '._submit'), t);
            },
        }),
        st.support.changeBubbles ||
        (st.event.special.change = {
            setup: function() {
                return qt.test(this.nodeName) ?
                    (('checkbox' === this.type || 'radio' === this.type) &&
                        (st.event.add(this, 'propertychange._change', function(e) {
                                'checked' === e.originalEvent.propertyName &&
                                    (this._just_changed = !0);
                            }),
                            st.event.add(this, 'click._change', function(e) {
                                this._just_changed &&
                                    !e.isTrigger &&
                                    (this._just_changed = !1),
                                    st.event.simulate('change', this, e, !0);
                            })), !1) :
                    (st.event.add(this, 'beforeactivate._change', function(e) {
                            var t = e.target;
                            qt.test(t.nodeName) &&
                                !st._data(t, 'changeBubbles') &&
                                (st.event.add(t, 'change._change', function(e) {
                                        !this.parentNode ||
                                            e.isSimulated ||
                                            e.isTrigger ||
                                            st.event.simulate('change', this.parentNode, e, !0);
                                    }),
                                    st._data(t, 'changeBubbles', !0));
                        }),
                        t);
            },
            handle: function(e) {
                var n = e.target;
                return this !== n ||
                    e.isSimulated ||
                    e.isTrigger ||
                    ('radio' !== n.type && 'checkbox' !== n.type) ?
                    e.handleObj.handler.apply(this, arguments) :
                    t;
            },
            teardown: function() {
                return st.event.remove(this, '._change'), !qt.test(this.nodeName);
            },
        }),
        st.support.focusinBubbles ||
        st.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
            var n = 0,
                r = function(e) {
                    st.event.simulate(t, e.target, st.event.fix(e), !0);
                };
            st.event.special[t] = {
                setup: function() {
                    0 === n++ && V.addEventListener(e, r, !0);
                },
                teardown: function() {
                    0 === --n && V.removeEventListener(e, r, !0);
                },
            };
        }),
        st.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ('object' == typeof e) {
                    'string' != typeof n && ((r = r || n), (n = t));
                    for (s in e) this.on(s, n, r, e[s], o);
                    return this;
                }
                if (
                    (null == r && null == i ?
                        ((i = n), (r = n = t)) :
                        null == i &&
                        ('string' == typeof n ?
                            ((i = r), (r = t)) :
                            ((i = r), (r = n), (n = t))),
                        i === !1)
                )
                    i = l;
                else if (!i) return this;
                return (
                    1 === o &&
                    ((a = i),
                        (i = function(e) {
                            return st().off(e), a.apply(this, arguments);
                        }),
                        (i.guid = a.guid || (a.guid = st.guid++))),
                    this.each(function() {
                        st.event.add(this, e, i, r, n);
                    })
                );
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1);
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        st(e.delegateTarget).off(
                            i.namespace ? i.origType + '.' + i.namespace : i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ('object' == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this;
                }
                return (
                    (n === !1 || 'function' == typeof n) && ((r = n), (n = t)),
                    r === !1 && (r = l),
                    this.each(function() {
                        st.event.remove(this, e, r, n);
                    })
                );
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ?
                    this.off(e, '**') :
                    this.off(t, e || '**', n);
            },
            trigger: function(e, t) {
                return this.each(function() {
                    st.event.trigger(e, t, this);
                });
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? st.event.trigger(e, n, r, !0) : t;
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        st.each(
            'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
                ' '
            ),
            function(e, t) {
                (st.fn[t] = function(e, n) {
                    return arguments.length > 0 ?
                        this.on(t, null, e, n) :
                        this.trigger(t);
                }),
                _t.test(t) && (st.event.fixHooks[t] = st.event.keyHooks),
                    Ft.test(t) && (st.event.fixHooks[t] = st.event.mouseHooks);
            }
        ),
        (function(e, t) {
            function n(e) {
                return ht.test(e + '');
            }

            function r() {
                var e,
                    t = [];
                return (e = function(n, r) {
                    return (
                        t.push((n += ' ')) > C.cacheLength && delete e[t.shift()],
                        (e[n] = r)
                    );
                });
            }

            function i(e) {
                return (e[P] = !0), e;
            }

            function o(e) {
                var t = L.createElement('div');
                try {
                    return e(t);
                } catch (n) {
                    return !1;
                } finally {
                    t = null;
                }
            }

            function a(e, t, n, r) {
                var i, o, a, s, u, l, c, d, h, g;
                if (
                    ((t ? t.ownerDocument || t : R) !== L && D(t),
                        (t = t || L),
                        (n = n || []), !e || 'string' != typeof e)
                )
                    return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!M && !r) {
                    if ((i = gt.exec(e)))
                        if ((a = i[1])) {
                            if (9 === s) {
                                if (((o = t.getElementById(a)), !o || !o.parentNode)) return n;
                                if (o.id === a) return n.push(o), n;
                            } else if (
                                t.ownerDocument &&
                                (o = t.ownerDocument.getElementById(a)) &&
                                O(t, o) &&
                                o.id === a
                            )
                                return n.push(o), n;
                        } else {
                            if (i[2])
                                return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                            if ((a = i[3]) && W.getByClassName && t.getElementsByClassName)
                                return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n;
                        }
                    if (W.qsa && !q.test(e)) {
                        if (
                            ((c = !0),
                                (d = P),
                                (h = t),
                                (g = 9 === s && e),
                                1 === s && 'object' !== t.nodeName.toLowerCase())
                        ) {
                            for (
                                l = f(e),
                                (c = t.getAttribute('id')) ?
                                (d = c.replace(vt, '\\$&')) :
                                t.setAttribute('id', d),
                                d = "[id='" + d + "'] ",
                                u = l.length; u--;

                            )
                                l[u] = d + p(l[u]);
                            (h = (dt.test(e) && t.parentNode) || t), (g = l.join(','));
                        }
                        if (g)
                            try {
                                return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n;
                            } catch (m) {} finally {
                                c || t.removeAttribute('id');
                            }
                    }
                }
                return x(e.replace(at, '$1'), t, n, r);
            }

            function s(e, t) {
                for (var n = e && t && e.nextSibling; n; n = n.nextSibling)
                    if (n === t) return -1;
                return e ? 1 : -1;
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return 'input' === n && t.type === e;
                };
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ('input' === n || 'button' === n) && t.type === e;
                };
            }

            function c(e) {
                return i(function(t) {
                    return (
                        (t = +t),
                        i(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;)
                                n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                        })
                    );
                });
            }

            function f(e, t) {
                var n,
                    r,
                    i,
                    o,
                    s,
                    u,
                    l,
                    c = X[e + ' '];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = C.preFilter; s;) {
                    (!n || (r = ut.exec(s))) &&
                    (r && (s = s.slice(r[0].length) || s), u.push((i = []))),
                    (n = !1),
                    (r = lt.exec(s)) &&
                    ((n = r.shift()),
                        i.push({ value: n, type: r[0].replace(at, ' ') }),
                        (s = s.slice(n.length)));
                    for (o in C.filter)
                        !(r = pt[o].exec(s)) ||
                        (l[o] && !(r = l[o](r))) ||
                        ((n = r.shift()),
                            i.push({ value: n, type: o, matches: r }),
                            (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? a.error(e) : X(e, u).slice(0);
            }

            function p(e) {
                for (var t = 0, n = e.length, r = ''; n > t; t++) r += e[t].value;
                return r;
            }

            function d(e, t, n) {
                var r = t.dir,
                    i = n && 'parentNode' === t.dir,
                    o = I++;
                return t.first ?

                    function(t, n, o) {
                        for (;
                            (t = t[r]);)
                            if (1 === t.nodeType || i) return e(t, n, o);
                    } :
                    function(t, n, a) {
                        var s,
                            u,
                            l,
                            c = $ + ' ' + o;
                        if (a) {
                            for (;
                                (t = t[r]);)
                                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                        } else
                            for (;
                                (t = t[r]);)
                                if (1 === t.nodeType || i)
                                    if (((l = t[P] || (t[P] = {})), (u = l[r]) && u[0] === c)) {
                                        if ((s = u[1]) === !0 || s === N) return s === !0;
                                    } else if (
                            ((u = l[r] = [c]), (u[1] = e(t, n, a) || N), u[1] === !0)
                        )
                            return !0;
                    };
            }

            function h(e) {
                return e.length > 1 ?

                    function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0;
                    } :
                    e[0];
            }

            function g(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                    (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a;
            }

            function m(e, t, n, r, o, a) {
                return (
                    r && !r[P] && (r = m(r)),
                    o && !o[P] && (o = m(o, a)),
                    i(function(i, a, s, u) {
                        var l,
                            c,
                            f,
                            p = [],
                            d = [],
                            h = a.length,
                            m = i || b(t || '*', s.nodeType ? [s] : s, []),
                            y = !e || (!i && t) ? m : g(m, p, e, s, u),
                            v = n ? (o || (i ? e : h || r) ? [] : a) : y;
                        if ((n && n(y, v, s, u), r))
                            for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)
                                (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = v.length; c--;)
                                        (f = v[c]) && l.push((y[c] = f));
                                    o(null, (v = []), l, u);
                                }
                                for (c = v.length; c--;)
                                    (f = v[c]) &&
                                    (l = o ? Z.call(i, f) : p[c]) > -1 &&
                                    (i[l] = !(a[l] = f));
                            }
                        } else(v = g(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, u) : Q.apply(a, v);
                    })
                );
            }

            function y(e) {
                for (
                    var t,
                        n,
                        r,
                        i = e.length,
                        o = C.relative[e[0].type],
                        a = o || C.relative[' '],
                        s = o ? 1 : 0,
                        u = d(
                            function(e) {
                                return e === t;
                            },
                            a, !0
                        ),
                        l = d(
                            function(e) {
                                return Z.call(t, e) > -1;
                            },
                            a, !0
                        ),
                        c = [
                            function(e, n, r) {
                                return (
                                    (!o && (r || n !== j)) ||
                                    ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                                );
                            },
                        ]; i > s; s++
                )
                    if ((n = C.relative[e[s].type])) c = [d(h(c), n)];
                    else {
                        if (((n = C.filter[e[s].type].apply(null, e[s].matches)), n[P])) {
                            for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                            return m(
                                s > 1 && h(c),
                                s > 1 && p(e.slice(0, s - 1)).replace(at, '$1'),
                                n,
                                r > s && y(e.slice(s, r)),
                                i > r && y((e = e.slice(r))),
                                i > r && p(e)
                            );
                        }
                        c.push(n);
                    }
                return h(c);
            }

            function v(e, t) {
                var n = 0,
                    r = t.length > 0,
                    o = e.length > 0,
                    s = function(i, s, u, l, c) {
                        var f,
                            p,
                            d,
                            h = [],
                            m = 0,
                            y = '0',
                            v = i && [],
                            b = null != c,
                            x = j,
                            T = i || (o && C.find.TAG('*', (c && s.parentNode) || s)),
                            w = ($ += null == x ? 1 : Math.E);
                        for (b && ((j = s !== L && s), (N = n)); null != (f = T[y]); y++) {
                            if (o && f) {
                                for (p = 0;
                                    (d = e[p]); p++)
                                    if (d(f, s, u)) {
                                        l.push(f);
                                        break;
                                    }
                                b && (($ = w), (N = ++n));
                            }
                            r && ((f = !d && f) && m--, i && v.push(f));
                        }
                        if (((m += y), r && y !== m)) {
                            for (p = 0;
                                (d = t[p]); p++) d(v, h, s, u);
                            if (i) {
                                if (m > 0)
                                    for (; y--;) v[y] || h[y] || (h[y] = G.call(l));
                                h = g(h);
                            }
                            Q.apply(l, h),
                                b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l);
                        }
                        return b && (($ = w), (j = x)), v;
                    };
                return r ? i(s) : s;
            }

            function b(e, t, n) {
                for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
                return n;
            }

            function x(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = f(e);
                if (!r && 1 === l.length) {
                    if (
                        ((o = l[0] = l[0].slice(0)),
                            o.length > 2 &&
                            'ID' === (a = o[0]).type &&
                            9 === t.nodeType &&
                            !M &&
                            C.relative[o[1].type])
                    ) {
                        if (((t = C.find.ID(a.matches[0].replace(xt, Tt), t)[0]), !t))
                            return n;
                        e = e.slice(o.shift().value.length);
                    }
                    for (
                        i = pt.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && ((a = o[i]), !C.relative[(s = a.type)]); i--
                    )
                        if (
                            (u = C.find[s]) &&
                            (r = u(
                                a.matches[0].replace(xt, Tt),
                                (dt.test(o[0].type) && t.parentNode) || t
                            ))
                        ) {
                            if ((o.splice(i, 1), (e = r.length && p(o)), !e))
                                return Q.apply(n, K.call(r, 0)), n;
                            break;
                        }
                }
                return S(e, l)(r, t, M, n, dt.test(e)), n;
            }

            function T() {}
            var w,
                N,
                C,
                k,
                E,
                S,
                A,
                j,
                D,
                L,
                H,
                M,
                q,
                _,
                F,
                O,
                B,
                P = 'sizzle' + -new Date(),
                R = e.document,
                W = {},
                $ = 0,
                I = 0,
                z = r(),
                X = r(),
                U = r(),
                V = typeof t,
                Y = 1 << 31,
                J = [],
                G = J.pop,
                Q = J.push,
                K = J.slice,
                Z =
                J.indexOf ||
                function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1;
                },
                et = '[\\x20\\t\\r\\n\\f]',
                tt = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
                nt = tt.replace('w', 'w#'),
                rt = '([*^$|!~]?=)',
                it =
                '\\[' +
                et +
                '*(' +
                tt +
                ')' +
                et +
                '*(?:' +
                rt +
                et +
                '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
                nt +
                ')|)|)' +
                et +
                '*\\]',
                ot =
                ':(' +
                tt +
                ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' +
                it.replace(3, 8) +
                ')*)|.*)\\)|)',
                at = RegExp('^' + et + '+|((?:^|[^\\\\])(?:\\\\.)*)' + et + '+$', 'g'),
                ut = RegExp('^' + et + '*,' + et + '*'),
                lt = RegExp('^' + et + '*([\\x20\\t\\r\\n\\f>+~])' + et + '*'),
                ct = RegExp(ot),
                ft = RegExp('^' + nt + '$'),
                pt = {
                    ID: RegExp('^#(' + tt + ')'),
                    CLASS: RegExp('^\\.(' + tt + ')'),
                    NAME: RegExp('^\\[name=[\'"]?(' + tt + ')[\'"]?\\]'),
                    TAG: RegExp('^(' + tt.replace('w', 'w*') + ')'),
                    ATTR: RegExp('^' + it),
                    PSEUDO: RegExp('^' + ot),
                    CHILD: RegExp(
                        '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                        et +
                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                        et +
                        '*(?:([+-]|)' +
                        et +
                        '*(\\d+)|))' +
                        et +
                        '*\\)|)',
                        'i'
                    ),
                    needsContext: RegExp(
                        '^' +
                        et +
                        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                        et +
                        '*((?:-\\d)?\\d*)' +
                        et +
                        '*\\)|)(?=[^-]|$)',
                        'i'
                    ),
                },
                dt = /[\x20\t\r\n\f]*[+~]/,
                ht = /\{\s*\[native code\]\s*\}/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /^(?:input|select|textarea|button)$/i,
                yt = /^h\d$/i,
                vt = /'|\\/g,
                bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                Tt = function(e, t) {
                    var n = '0x' + t - 65536;
                    return n !== n ?
                        t :
                        0 > n ?
                        String.fromCharCode(n + 65536) :
                        String.fromCharCode(55296 | (n >> 10), 56320 | (1023 & n));
                };
            try {
                K.call(H.childNodes, 0)[0].nodeType;
            } catch (wt) {
                K = function(e) {
                    for (var t, n = [];
                        (t = this[e]); e++) n.push(t);
                    return n;
                };
            }
            (E = a.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? 'HTML' !== t.nodeName : !1;
            }),
            (D = a.setDocument = function(e) {
                var r = e ? e.ownerDocument || e : R;
                return r !== L && 9 === r.nodeType && r.documentElement ?
                    ((L = r),
                        (H = r.documentElement),
                        (M = E(r)),
                        (W.tagNameNoComments = o(function(e) {
                            return (
                                e.appendChild(r.createComment('')), !e.getElementsByTagName('*').length
                            );
                        })),
                        (W.attributes = o(function(e) {
                            e.innerHTML = '<select></select>';
                            var t = typeof e.lastChild.getAttribute('multiple');
                            return 'boolean' !== t && 'string' !== t;
                        })),
                        (W.getByClassName = o(function(e) {
                            return (
                                (e.innerHTML =
                                    "<div class='hidden e'></div><div class='hidden'></div>"),
                                e.getElementsByClassName &&
                                e.getElementsByClassName('e').length ?
                                ((e.lastChild.className = 'e'),
                                    2 === e.getElementsByClassName('e').length) :
                                !1
                            );
                        })),
                        (W.getByName = o(function(e) {
                            (e.id = P + 0),
                            (e.innerHTML =
                                "<a name='" + P + "'></a><div name='" + P + "'></div>"),
                            H.insertBefore(e, H.firstChild);
                            var t =
                                r.getElementsByName &&
                                r.getElementsByName(P).length ===
                                2 + r.getElementsByName(P + 0).length;
                            return (
                                (W.getIdNotName = !r.getElementById(P)), H.removeChild(e), t
                            );
                        })),
                        (C.attrHandle = o(function(e) {
                            return (
                                (e.innerHTML = "<a href='#'></a>"),
                                e.firstChild &&
                                typeof e.firstChild.getAttribute !== V &&
                                '#' === e.firstChild.getAttribute('href')
                            );
                        }) ? {} : {
                            href: function(e) {
                                return e.getAttribute('href', 2);
                            },
                            type: function(e) {
                                return e.getAttribute('type');
                            },
                        }),
                        W.getIdNotName ?
                        ((C.find.ID = function(e, t) {
                                if (typeof t.getElementById !== V && !M) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : [];
                                }
                            }),
                            (C.filter.ID = function(e) {
                                var t = e.replace(xt, Tt);
                                return function(e) {
                                    return e.getAttribute('id') === t;
                                };
                            })) :
                        ((C.find.ID = function(e, n) {
                                if (typeof n.getElementById !== V && !M) {
                                    var r = n.getElementById(e);
                                    return r ?
                                        r.id === e ||
                                        (typeof r.getAttributeNode !== V &&
                                            r.getAttributeNode('id').value === e) ? [r] :
                                        t : [];
                                }
                            }),
                            (C.filter.ID = function(e) {
                                var t = e.replace(xt, Tt);
                                return function(e) {
                                    var n =
                                        typeof e.getAttributeNode !== V &&
                                        e.getAttributeNode('id');
                                    return n && n.value === t;
                                };
                            })),
                        (C.find.TAG = W.tagNameNoComments ?

                            function(e, n) {
                                return typeof n.getElementsByTagName !== V ?
                                    n.getElementsByTagName(e) :
                                    t;
                            } :
                            function(e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ('*' === e) {
                                    for (;
                                        (n = o[i]); i++) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                        (C.find.NAME =
                            W.getByName &&
                            function(e, n) {
                                return typeof n.getElementsByName !== V ?
                                    n.getElementsByName(name) :
                                    t;
                            }),
                        (C.find.CLASS =
                            W.getByClassName &&
                            function(e, n) {
                                return typeof n.getElementsByClassName === V || M ?
                                    t :
                                    n.getElementsByClassName(e);
                            }),
                        (_ = []),
                        (q = [':focus']),
                        (W.qsa = n(r.querySelectorAll)) &&
                        (o(function(e) {
                                (e.innerHTML =
                                    "<select><option selected=''></option></select>"),
                                e.querySelectorAll('[selected]').length ||
                                    q.push(
                                        '\\[' +
                                        et +
                                        '*(?:checked|disabled|ismap|multiple|readonly|selected|value)'
                                    ),
                                    e.querySelectorAll(':checked').length || q.push(':checked');
                            }),
                            o(function(e) {
                                (e.innerHTML = "<input type='hidden' i=''/>"),
                                e.querySelectorAll("[i^='']").length &&
                                    q.push('[*^$]=' + et + '*(?:""|\'\')'),
                                    e.querySelectorAll(':enabled').length ||
                                    q.push(':enabled', ':disabled'),
                                    e.querySelectorAll('*,:x'),
                                    q.push(',.*:');
                            })),
                        (W.matchesSelector = n(
                            (F =
                                H.matchesSelector ||
                                H.mozMatchesSelector ||
                                H.webkitMatchesSelector ||
                                H.oMatchesSelector ||
                                H.msMatchesSelector)
                        )) &&
                        o(function(e) {
                            (W.disconnectedMatch = F.call(e, 'div')),
                            F.call(e, "[s!='']:x"),
                                _.push('!=', ot);
                        }),
                        (q = RegExp(q.join('|'))),
                        (_ = RegExp(_.join('|'))),
                        (O =
                            n(H.contains) || H.compareDocumentPosition ?

                            function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return (
                                    e === r ||
                                    !(!r ||
                                        1 !== r.nodeType ||
                                        !(n.contains ?
                                            n.contains(r) :
                                            e.compareDocumentPosition &&
                                            16 & e.compareDocumentPosition(r))
                                    )
                                );
                            } :
                            function(e, t) {
                                if (t)
                                    for (;
                                        (t = t.parentNode);)
                                        if (t === e) return !0;
                                return !1;
                            }),
                        (B = H.compareDocumentPosition ?

                            function(e, t) {
                                var n;
                                return e === t ?
                                    ((A = !0), 0) :
                                    (n =
                                        t.compareDocumentPosition &&
                                        e.compareDocumentPosition &&
                                        e.compareDocumentPosition(t)) ?
                                    1 & n || (e.parentNode && 11 === e.parentNode.nodeType) ?
                                    e === r || O(R, e) ?
                                    -1 :
                                    t === r || O(R, t) ?
                                    1 :
                                    0 :
                                    4 & n ?
                                    -1 :
                                    1 :
                                    e.compareDocumentPosition ?
                                    -1 :
                                    1;
                            } :
                            function(e, t) {
                                var n,
                                    i = 0,
                                    o = e.parentNode,
                                    a = t.parentNode,
                                    u = [e],
                                    l = [t];
                                if (e === t) return (A = !0), 0;
                                if (e.sourceIndex && t.sourceIndex)
                                    return (
                                        (~t.sourceIndex || Y) -
                                        ((O(R, e) && ~e.sourceIndex) || Y)
                                    );
                                if (!o || !a)
                                    return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                                if (o === a) return s(e, t);
                                for (n = e;
                                    (n = n.parentNode);) u.unshift(n);
                                for (n = t;
                                    (n = n.parentNode);) l.unshift(n);
                                for (; u[i] === l[i];) i++;
                                return i ?
                                    s(u[i], l[i]) :
                                    u[i] === R ?
                                    -1 :
                                    l[i] === R ?
                                    1 :
                                    0;
                            }),
                        (A = !1), [0, 0].sort(B),
                        (W.detectDuplicates = A),
                        L) :
                    L;
            }),
            (a.matches = function(e, t) {
                return a(e, null, null, t);
            }),
            (a.matchesSelector = function(e, t) {
                if (
                    ((e.ownerDocument || e) !== L && D(e),
                        (t = t.replace(bt, "='$1']")), !(!W.matchesSelector || M || (_ && _.test(t)) || q.test(t)))
                )
                    try {
                        var n = F.call(e, t);
                        if (
                            n ||
                            W.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return n;
                    } catch (r) {}
                return a(t, L, null, [e]).length > 0;
            }),
            (a.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && D(e), O(e, t);
            }),
            (a.attr = function(e, t) {
                var n;
                return (
                    (e.ownerDocument || e) !== L && D(e),
                    M || (t = t.toLowerCase()),
                    (n = C.attrHandle[t]) ?
                    n(e) :
                    M || W.attributes ?
                    e.getAttribute(t) :
                    ((n = e.getAttributeNode(t)) || e.getAttribute(t)) &&
                    e[t] === !0 ?
                    t :
                    n && n.specified ?
                    n.value :
                    null
                );
            }),
            (a.error = function(e) {
                throw Error('Syntax error, unrecognized expression: ' + e);
            }),
            (a.uniqueSort = function(e) {
                var t,
                    n = [],
                    r = 1,
                    i = 0;
                if (((A = !W.detectDuplicates), e.sort(B), A)) {
                    for (;
                        (t = e[r]); r++) t === e[r - 1] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1);
                }
                return e;
            }),
            (k = a.getText = function(e) {
                var t,
                    n = '',
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ('string' == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else
                    for (;
                        (t = e[r]); r++) n += k(t);
                return n;
            }),
            (C = a.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                find: {},
                relative: {
                    '>': { dir: 'parentNode', first: !0 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: !0 },
                    '~': { dir: 'previousSibling' },
                },
                preFilter: {
                    ATTR: function(e) {
                        return (
                            (e[1] = e[1].replace(xt, Tt)),
                            (e[3] = (e[4] || e[5] || '').replace(xt, Tt)),
                            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function(e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            'nth' === e[1].slice(0, 3) ?
                            (e[3] || a.error(e[0]),
                                (e[4] = +(e[4] ?
                                    e[5] + (e[6] || 1) :
                                    2 * ('even' === e[3] || 'odd' === e[3]))),
                                (e[5] = +(e[7] + e[8] || 'odd' === e[3]))) :
                            e[3] && a.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function(e) {
                        var t,
                            n = !e[5] && e[2];
                        return pt.CHILD.test(e[0]) ?
                            null :
                            (e[4] ?
                                (e[2] = e[4]) :
                                n &&
                                ct.test(n) &&
                                (t = f(n, !0)) &&
                                (t = n.indexOf(')', n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function(e) {
                        return '*' === e ?

                            function() {
                                return !0;
                            } :
                            ((e = e.replace(xt, Tt).toLowerCase()),
                                function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e;
                                });
                    },
                    CLASS: function(e) {
                        var t = z[e + ' '];
                        return (
                            t ||
                            ((t = RegExp('(^|' + et + ')' + e + '(' + et + '|$)')) &&
                                z(e, function(e) {
                                    return t.test(
                                        e.className ||
                                        (typeof e.getAttribute !== V &&
                                            e.getAttribute('class')) ||
                                        ''
                                    );
                                }))
                        );
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = a.attr(r, e);
                            return null == i ?
                                '!=' === t :
                                t ?
                                ((i += ''),
                                    '=' === t ?
                                    i === n :
                                    '!=' === t ?
                                    i !== n :
                                    '^=' === t ?
                                    n && 0 === i.indexOf(n) :
                                    '*=' === t ?
                                    n && i.indexOf(n) > -1 :
                                    '$=' === t ?
                                    n && i.substr(i.length - n.length) === n :
                                    '~=' === t ?
                                    (' ' + i + ' ').indexOf(n) > -1 :
                                    '|=' === t ?
                                    i === n || i.substr(0, n.length + 1) === n + '-' :
                                    !1) :
                                !0;
                        };
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = 'nth' !== e.slice(0, 3),
                            a = 'last' !== e.slice(-4),
                            s = 'of-type' === t;
                        return 1 === r && 0 === i ?

                            function(e) {
                                return !!e.parentNode;
                            } :
                            function(t, n, u) {
                                var l,
                                    c,
                                    f,
                                    p,
                                    d,
                                    h,
                                    g = o !== a ? 'nextSibling' : 'previousSibling',
                                    m = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !u && !s;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = t;
                                                (f = f[g]);)
                                                if (
                                                    s ?
                                                    f.nodeName.toLowerCase() === y :
                                                    1 === f.nodeType
                                                )
                                                    return !1;
                                            h = g = 'only' === e && !h && 'nextSibling';
                                        }
                                        return !0;
                                    }
                                    if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                                        for (
                                            c = m[P] || (m[P] = {}),
                                            l = c[e] || [],
                                            d = l[0] === $ && l[1],
                                            p = l[0] === $ && l[2],
                                            f = d && m.childNodes[d];
                                            (f = (++d && f && f[g]) || (p = d = 0) || h.pop());

                                        )
                                            if (1 === f.nodeType && ++p && f === t) {
                                                c[e] = [$, d, p];
                                                break;
                                            }
                                    } else if (
                                        v &&
                                        (l = (t[P] || (t[P] = {}))[e]) &&
                                        l[0] === $
                                    )
                                        p = l[1];
                                    else
                                        for (;
                                            (f = (++d && f && f[g]) || (p = d = 0) || h.pop()) &&
                                            ((s ?
                                                    f.nodeName.toLowerCase() !== y :
                                                    1 !== f.nodeType) ||
                                                !++p ||
                                                (v && ((f[P] || (f[P] = {}))[e] = [$, p]),
                                                    f !== t));

                                        );
                                    return (p -= i), p === r || (0 === p % r && p / r >= 0);
                                }
                            };
                    },
                    PSEUDO: function(e, t) {
                        var n,
                            r =
                            C.pseudos[e] ||
                            C.setFilters[e.toLowerCase()] ||
                            a.error('unsupported pseudo: ' + e);
                        return r[P] ?
                            r(t) :
                            r.length > 1 ?
                            ((n = [e, e, '', t]),
                                C.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                i(function(e, n) {
                                    for (var i, o = r(e, t), a = o.length; a--;)
                                        (i = Z.call(e, o[a])), (e[i] = !(n[i] = o[a]));
                                }) :
                                function(e) {
                                    return r(e, 0, n);
                                }) :
                            r;
                    },
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(at, '$1'));
                        return r[P] ?
                            i(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)
                                    (o = a[s]) && (e[s] = !(t[s] = o));
                            }) :
                            function(e, i, o) {
                                return (t[0] = e), r(t, null, o, n), !n.pop();
                            };
                    }),
                    has: i(function(e) {
                        return function(t) {
                            return a(e, t).length > 0;
                        };
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1;
                        };
                    }),
                    lang: i(function(e) {
                        return (
                            ft.test(e || '') || a.error('unsupported lang: ' + e),
                            (e = e.replace(xt, Tt).toLowerCase()),
                            function(t) {
                                var n;
                                do
                                    if (
                                        (n = M ?
                                            t.getAttribute('xml:lang') || t.getAttribute('lang') :
                                            t.lang)
                                    )
                                        return (
                                            (n = n.toLowerCase()),
                                            n === e || 0 === n.indexOf(e + '-')
                                        );
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function(e) {
                        return e === H;
                    },
                    focus: function(e) {
                        return (
                            e === L.activeElement &&
                            (!L.hasFocus || L.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: function(e) {
                        return e.disabled === !1;
                    },
                    disabled: function(e) {
                        return e.disabled === !0;
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ('input' === t && !!e.checked) ||
                            ('option' === t && !!e.selected)
                        );
                    },
                    selected: function(e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        );
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType)
                                return !1;
                        return !0;
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e);
                    },
                    header: function(e) {
                        return yt.test(e.nodeName);
                    },
                    input: function(e) {
                        return mt.test(e.nodeName);
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ('input' === t && 'button' === e.type) || 'button' === t;
                    },
                    text: function(e) {
                        var t;
                        return (
                            'input' === e.nodeName.toLowerCase() &&
                            'text' === e.type &&
                            (null == (t = e.getAttribute('type')) ||
                                t.toLowerCase() === e.type)
                        );
                    },
                    first: c(function() {
                        return [0];
                    }),
                    last: c(function(e, t) {
                        return [t - 1];
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n];
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e;
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e;
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e;
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                        return e;
                    }),
                },
            });
            for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                C.pseudos[w] = u(w);
            for (w in { submit: !0, reset: !0 }) C.pseudos[w] = l(w);
            (S = a.compile = function(e, t) {
                var n,
                    r = [],
                    i = [],
                    o = U[e + ' '];
                if (!o) {
                    for (t || (t = f(e)), n = t.length; n--;)
                        (o = y(t[n])), o[P] ? r.push(o) : i.push(o);
                    o = U(e, v(i, r));
                }
                return o;
            }),
            (C.pseudos.nth = C.pseudos.eq),
            (C.filters = T.prototype = C.pseudos),
            (C.setFilters = new T()),
            D(),
                (a.attr = st.attr),
                (st.find = a),
                (st.expr = a.selectors),
                (st.expr[':'] = st.expr.pseudos),
                (st.unique = a.uniqueSort),
                (st.text = a.getText),
                (st.isXMLDoc = a.isXML),
                (st.contains = a.contains);
        })(e);
    var Pt = /Until$/,
        Rt = /^(?:parents|prev(?:Until|All))/,
        Wt = /^.[^:#\[\.,]*$/,
        $t = st.expr.match.needsContext,
        It = { children: !0, contents: !0, next: !0, prev: !0 };
    st.fn.extend({
            find: function(e) {
                var t, n, r;
                if ('string' != typeof e)
                    return (
                        (r = this),
                        this.pushStack(
                            st(e).filter(function() {
                                for (t = 0; r.length > t; t++)
                                    if (st.contains(r[t], this)) return !0;
                            })
                        )
                    );
                for (n = [], t = 0; this.length > t; t++) st.find(e, this[t], n);
                return (
                    (n = this.pushStack(st.unique(n))),
                    (n.selector = (this.selector ? this.selector + ' ' : '') + e),
                    n
                );
            },
            has: function(e) {
                var t,
                    n = st(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++)
                        if (st.contains(this, n[t])) return !0;
                });
            },
            not: function(e) {
                return this.pushStack(f(this, e, !1));
            },
            filter: function(e) {
                return this.pushStack(f(this, e, !0));
            },
            is: function(e) {
                return (!!e &&
                    ('string' == typeof e ?
                        $t.test(e) ?
                        st(e, this.context).index(this[0]) >= 0 :
                        st.filter(e, this).length > 0 :
                        this.filter(e).length > 0)
                );
            },
            closest: function(e, t) {
                for (
                    var n,
                        r = 0,
                        i = this.length,
                        o = [],
                        a = $t.test(e) || 'string' != typeof e ? st(e, t || this.context) : 0; i > r; r++
                )
                    for (
                        n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;

                    ) {
                        if (a ? a.index(n) > -1 : st.find.matchesSelector(n, e)) {
                            o.push(n);
                            break;
                        }
                        n = n.parentNode;
                    }
                return this.pushStack(o.length > 1 ? st.unique(o) : o);
            },
            index: function(e) {
                return e ?
                    'string' == typeof e ?
                    st.inArray(this[0], st(e)) :
                    st.inArray(e.jquery ? e[0] : e, this) :
                    this[0] && this[0].parentNode ?
                    this.first().prevAll().length :
                    -1;
            },
            add: function(e, t) {
                var n =
                    'string' == typeof e ?
                    st(e, t) :
                    st.makeArray(e && e.nodeType ? [e] : e),
                    r = st.merge(this.get(), n);
                return this.pushStack(st.unique(r));
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        (st.fn.andSelf = st.fn.addBack),
        st.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return st.dir(e, 'parentNode');
                },
                parentsUntil: function(e, t, n) {
                    return st.dir(e, 'parentNode', n);
                },
                next: function(e) {
                    return c(e, 'nextSibling');
                },
                prev: function(e) {
                    return c(e, 'previousSibling');
                },
                nextAll: function(e) {
                    return st.dir(e, 'nextSibling');
                },
                prevAll: function(e) {
                    return st.dir(e, 'previousSibling');
                },
                nextUntil: function(e, t, n) {
                    return st.dir(e, 'nextSibling', n);
                },
                prevUntil: function(e, t, n) {
                    return st.dir(e, 'previousSibling', n);
                },
                siblings: function(e) {
                    return st.sibling((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return st.sibling(e.firstChild);
                },
                contents: function(e) {
                    return st.nodeName(e, 'iframe') ?
                        e.contentDocument || e.contentWindow.document :
                        st.merge([], e.childNodes);
                },
            },
            function(e, t) {
                st.fn[e] = function(n, r) {
                    var i = st.map(this, t, n);
                    return (
                        Pt.test(e) || (r = n),
                        r && 'string' == typeof r && (i = st.filter(r, i)),
                        (i = this.length > 1 && !It[e] ? st.unique(i) : i),
                        this.length > 1 && Rt.test(e) && (i = i.reverse()),
                        this.pushStack(i)
                    );
                };
            }
        ),
        st.extend({
            filter: function(e, t, n) {
                return (
                    n && (e = ':not(' + e + ')'),
                    1 === t.length ?
                    st.find.matchesSelector(t[0], e) ? [t[0]] : [] :
                    st.find.matches(e, t)
                );
            },
            dir: function(e, n, r) {
                for (
                    var i = [], o = e[n]; o &&
                    9 !== o.nodeType &&
                    (r === t || 1 !== o.nodeType || !st(o).is(r));

                )
                    1 === o.nodeType && i.push(o), (o = o[n]);
                return i;
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n;
            },
        });
    var zt =
        'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
        Xt = / jQuery\d+="(?:null|\d+)"/g,
        Ut = RegExp('<(?:' + zt + ')[\\s/>]', 'i'),
        Vt = /^\s+/,
        Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Jt = /<([\w:]+)/,
        Gt = /<tbody/i,
        Qt = /<|&#?\w+;/,
        Kt = /<(?:script|style|link)/i,
        Zt = /^(?:checkbox|radio)$/i,
        en = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tn = /^$|\/(?:java|ecma)script/i,
        nn = /^true\/(.*)/,
        rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        on = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            legend: [1, '<fieldset>', '</fieldset>'],
            area: [1, '<map>', '</map>'],
            param: [1, '<object>', '</object>'],
            thead: [1, '<table>', '</table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: st.support.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'],
        },
        an = p(V),
        sn = an.appendChild(V.createElement('div'));
    (on.optgroup = on.option),
    (on.tbody = on.tfoot = on.colgroup = on.caption = on.thead),
    (on.th = on.td),
    st.fn.extend({
            text: function(e) {
                return st.access(
                    this,
                    function(e) {
                        return e === t ?
                            st.text(this) :
                            this.empty().append(
                                ((this[0] && this[0].ownerDocument) || V).createTextNode(e)
                            );
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            wrapAll: function(e) {
                if (st.isFunction(e))
                    return this.each(function(t) {
                        st(this).wrapAll(e.call(this, t));
                    });
                if (this[0]) {
                    var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                        .map(function() {
                            for (
                                var e = this; e.firstChild && 1 === e.firstChild.nodeType;

                            )
                                e = e.firstChild;
                            return e;
                        })
                        .append(this);
                }
                return this;
            },
            wrapInner: function(e) {
                return st.isFunction(e) ?
                    this.each(function(t) {
                        st(this).wrapInner(e.call(this, t));
                    }) :
                    this.each(function() {
                        var t = st(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function(e) {
                var t = st.isFunction(e);
                return this.each(function(n) {
                    st(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function() {
                return this.parent()
                    .each(function() {
                        st.nodeName(this, 'body') || st(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType) &&
                    this.appendChild(e);
                });
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType) &&
                    this.insertBefore(e, this.firstChild);
                });
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function(e, t) {
                for (var n, r = 0; null != (n = this[r]); r++)
                    (!e || st.filter(e, [n]).length > 0) &&
                    (t || 1 !== n.nodeType || st.cleanData(b(n)),
                        n.parentNode &&
                        (t && st.contains(n.ownerDocument, n) && m(b(n, 'script')),
                            n.parentNode.removeChild(n)));
                return this;
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && st.cleanData(b(e, !1)); e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.options && st.nodeName(e, 'select') && (e.options.length = 0);
                }
                return this;
            },
            clone: function(e, t) {
                return (
                    (e = null == e ? !1 : e),
                    (t = null == t ? e : t),
                    this.map(function() {
                        return st.clone(this, e, t);
                    })
                );
            },
            html: function(e) {
                return st.access(
                    this,
                    function(e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t)
                            return 1 === n.nodeType ? n.innerHTML.replace(Xt, '') : t;
                        if (!(
                                'string' != typeof e ||
                                Kt.test(e) ||
                                (!st.support.htmlSerialize && Ut.test(e)) ||
                                (!st.support.leadingWhitespace && Vt.test(e)) ||
                                on[(Jt.exec(e) || ['', ''])[1].toLowerCase()]
                            )) {
                            e = e.replace(Yt, '<$1></$2>');
                            try {
                                for (; i > r; r++)
                                    (n = this[r] || {}),
                                    1 === n.nodeType &&
                                    (st.cleanData(b(n, !1)), (n.innerHTML = e));
                                n = 0;
                            } catch (o) {}
                        }
                        n && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function(e) {
                var t = st.isFunction(e);
                return (
                    t || 'string' == typeof e || (e = st(e).not(this).detach()),
                    this.domManip([e], !0, function(e) {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        ((n && 1 === this.nodeType) || 11 === this.nodeType) &&
                        (st(this).remove(),
                            t ? t.parentNode.insertBefore(e, t) : n.appendChild(e));
                    })
                );
            },
            detach: function(e) {
                return this.remove(e, !0);
            },
            domManip: function(e, n, r) {
                e = et.apply([], e);
                var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = 0,
                    f = this.length,
                    p = this,
                    m = f - 1,
                    y = e[0],
                    v = st.isFunction(y);
                if (
                    v ||
                    (!(1 >= f || 'string' != typeof y || st.support.checkClone) &&
                        en.test(y))
                )
                    return this.each(function(i) {
                        var o = p.eq(i);
                        v && (e[0] = y.call(this, i, n ? o.html() : t)),
                            o.domManip(e, n, r);
                    });
                if (
                    f &&
                    ((i = st.buildFragment(e, this[0].ownerDocument, !1, this)),
                        (o = i.firstChild),
                        1 === i.childNodes.length && (i = o),
                        o)
                ) {
                    for (
                        n = n && st.nodeName(o, 'tr'),
                        a = st.map(b(i, 'script'), h),
                        s = a.length; f > c; c++
                    )
                        (u = i),
                        c !== m &&
                        ((u = st.clone(u, !0, !0)), s && st.merge(a, b(u, 'script'))),
                        r.call(
                            n && st.nodeName(this[c], 'table') ?
                            d(this[c], 'tbody') :
                            this[c],
                            u,
                            c
                        );
                    if (s)
                        for (
                            l = a[a.length - 1].ownerDocument, st.map(a, g), c = 0; s > c; c++
                        )
                            (u = a[c]),
                            tn.test(u.type || '') &&
                            !st._data(u, 'globalEval') &&
                            st.contains(l, u) &&
                            (u.src ?
                                st.ajax({
                                    url: u.src,
                                    type: 'GET',
                                    dataType: 'script',
                                    async: !1,
                                    global: !1,
                                    throws: !0,
                                }) :
                                st.globalEval(
                                    (u.text || u.textContent || u.innerHTML || '').replace(
                                        rn,
                                        ''
                                    )
                                ));
                    i = o = null;
                }
                return this;
            },
        }),
        st.each({
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
            },
            function(e, t) {
                st.fn[e] = function(e) {
                    for (var n, r = 0, i = [], o = st(e), a = o.length - 1; a >= r; r++)
                        (n = r === a ? this : this.clone(!0)),
                        st(o[r])[t](n),
                        tt.apply(i, n.get());
                    return this.pushStack(i);
                };
            }
        ),
        st.extend({
            clone: function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u = st.contains(e.ownerDocument, e);
                if (
                    (st.support.html5Clone ||
                        st.isXMLDoc(e) ||
                        !Ut.test('<' + e.nodeName + '>') ?
                        (s = e.cloneNode(!0)) :
                        ((sn.innerHTML = e.outerHTML),
                            sn.removeChild((s = sn.firstChild))), !(
                            (st.support.noCloneEvent && st.support.noCloneChecked) ||
                            (1 !== e.nodeType && 11 !== e.nodeType) ||
                            st.isXMLDoc(e)
                        ))
                )
                    for (r = b(s), i = b(e), a = 0; null != (o = i[a]); ++a)
                        r[a] && v(o, r[a]);
                if (t)
                    if (n)
                        for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]); a++)
                            y(o, r[a]);
                    else y(e, s);
                return (
                    (r = b(s, 'script')),
                    r.length > 0 && m(r, !u && b(e, 'script')),
                    (r = i = o = null),
                    s
                );
            },
            buildFragment: function(e, t, n, r) {
                for (
                    var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++
                )
                    if (((o = e[g]), o || 0 === o))
                        if ('object' === st.type(o)) st.merge(h, o.nodeType ? [o] : o);
                        else if (Qt.test(o)) {
                    for (
                        s = s || d.appendChild(t.createElement('div')),
                        a = (Jt.exec(o) || ['', ''])[1].toLowerCase(),
                        u = on[a] || on._default,
                        s.innerHTML = u[1] + o.replace(Yt, '<$1></$2>') + u[2],
                        c = u[0]; c--;

                    )
                        s = s.lastChild;
                    if (
                        (!st.support.leadingWhitespace &&
                            Vt.test(o) &&
                            h.push(t.createTextNode(Vt.exec(o)[0])), !st.support.tbody)
                    )
                        for (
                            o =
                            'table' !== a || Gt.test(o) ?
                            '<table>' !== u[1] || Gt.test(o) ?
                            0 :
                            s :
                            s.firstChild,
                            c = o && o.childNodes.length; c--;

                        )
                            st.nodeName((l = o.childNodes[c]), 'tbody') &&
                            !l.childNodes.length &&
                            o.removeChild(l);
                    for (
                        st.merge(h, s.childNodes), s.textContent = ''; s.firstChild;

                    )
                        s.removeChild(s.firstChild);
                    s = d.lastChild;
                } else h.push(t.createTextNode(o));
                for (
                    s && d.removeChild(s),
                    st.support.appendChecked || st.grep(b(h, 'input'), x),
                    g = 0;
                    (o = h[g++]);

                )
                    if (
                        (!r || -1 === st.inArray(o, r)) &&
                        ((i = st.contains(o.ownerDocument, o)),
                            (s = b(d.appendChild(o), 'script')),
                            i && m(s),
                            n)
                    )
                        for (c = 0;
                            (o = s[c++]);) tn.test(o.type || '') && n.push(o);
                return (s = null), d;
            },
            cleanData: function(e, n) {
                for (
                    var r,
                        i,
                        o,
                        a,
                        s = 0,
                        u = st.expando,
                        l = st.cache,
                        c = st.support.deleteExpando,
                        f = st.event.special; null != (o = e[s]); s++
                )
                    if ((n || st.acceptData(o)) && ((i = o[u]), (r = i && l[i]))) {
                        if (r.events)
                            for (a in r.events)
                                f[a] ? st.event.remove(o, a) : st.removeEvent(o, a, r.handle);
                        l[i] &&
                            (delete l[i],
                                c ?
                                delete o[u] :
                                o.removeAttribute !== t ?
                                o.removeAttribute(u) :
                                (o[u] = null),
                                K.push(i));
                    }
            },
        });
    var un,
        ln,
        cn,
        fn = /alpha\([^)]*\)/i,
        pn = /opacity\s*=\s*([^)]*)/,
        dn = /^(top|right|bottom|left)$/,
        hn = /^(none|table(?!-c[ea]).+)/,
        gn = /^margin/,
        mn = RegExp('^(' + ut + ')(.*)$', 'i'),
        yn = RegExp('^(' + ut + ')(?!px)[a-z%]+$', 'i'),
        vn = RegExp('^([+-])=(' + ut + ')', 'i'),
        bn = { BODY: 'block' },
        xn = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Tn = { letterSpacing: 0, fontWeight: 400 },
        wn = ['Top', 'Right', 'Bottom', 'Left'],
        Nn = ['Webkit', 'O', 'Moz', 'ms'];
    st.fn.extend({
            css: function(e, n) {
                return st.access(
                    this,
                    function(e, n, r) {
                        var i,
                            o,
                            a = {},
                            s = 0;
                        if (st.isArray(n)) {
                            for (i = ln(e), o = n.length; o > s; s++)
                                a[n[s]] = st.css(e, n[s], !1, i);
                            return a;
                        }
                        return r !== t ? st.style(e, n, r) : st.css(e, n);
                    },
                    e,
                    n,
                    arguments.length > 1
                );
            },
            show: function() {
                return N(this, !0);
            },
            hide: function() {
                return N(this);
            },
            toggle: function(e) {
                var t = 'boolean' == typeof e;
                return this.each(function() {
                    (t ? e : w(this)) ? st(this).show(): st(this).hide();
                });
            },
        }),
        st.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = un(e, 'opacity');
                            return '' === n ? '1' : n;
                        }
                    },
                },
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: { float: st.support.cssFloat ? 'cssFloat' : 'styleFloat' },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o,
                        a,
                        s,
                        u = st.camelCase(n),
                        l = e.style;
                    if (
                        ((n = st.cssProps[u] || (st.cssProps[u] = T(l, u))),
                            (s = st.cssHooks[n] || st.cssHooks[u]),
                            r === t)
                    )
                        return s && 'get' in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                    if (
                        ((a = typeof r),
                            'string' === a &&
                            (o = vn.exec(r)) &&
                            ((r = (o[1] + 1) * o[2] + parseFloat(st.css(e, n))),
                                (a = 'number')), !(
                                null == r ||
                                ('number' === a && isNaN(r)) ||
                                ('number' !== a || st.cssNumber[u] || (r += 'px'),
                                    st.support.clearCloneStyle ||
                                    '' !== r ||
                                    0 !== n.indexOf('background') ||
                                    (l[n] = 'inherit'),
                                    s && 'set' in s && (r = s.set(e, r, i)) === t)
                            ))
                    )
                        try {
                            l[n] = r;
                        } catch (c) {}
                }
            },
            css: function(e, n, r, i) {
                var o,
                    a,
                    s,
                    u = st.camelCase(n);
                return (
                    (n = st.cssProps[u] || (st.cssProps[u] = T(e.style, u))),
                    (s = st.cssHooks[n] || st.cssHooks[u]),
                    s && 'get' in s && (o = s.get(e, !0, r)),
                    o === t && (o = un(e, n, i)),
                    'normal' === o && n in Tn && (o = Tn[n]),
                    r ?
                    ((a = parseFloat(o)), r === !0 || st.isNumeric(a) ? a || 0 : o) :
                    o
                );
            },
            swap: function(e, t, n, r) {
                var i,
                    o,
                    a = {};
                for (o in t)(a[o] = e.style[o]), (e.style[o] = t[o]);
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i;
            },
        }),
        e.getComputedStyle ?
        ((ln = function(t) {
                return e.getComputedStyle(t, null);
            }),
            (un = function(e, n, r) {
                var i,
                    o,
                    a,
                    s = r || ln(e),
                    u = s ? s.getPropertyValue(n) || s[n] : t,
                    l = e.style;
                return (
                    s &&
                    ('' !== u ||
                        st.contains(e.ownerDocument, e) ||
                        (u = st.style(e, n)),
                        yn.test(u) &&
                        gn.test(n) &&
                        ((i = l.width),
                            (o = l.minWidth),
                            (a = l.maxWidth),
                            (l.minWidth = l.maxWidth = l.width = u),
                            (u = s.width),
                            (l.width = i),
                            (l.minWidth = o),
                            (l.maxWidth = a))),
                    u
                );
            })) :
        V.documentElement.currentStyle &&
        ((ln = function(e) {
                return e.currentStyle;
            }),
            (un = function(e, n, r) {
                var i,
                    o,
                    a,
                    s = r || ln(e),
                    u = s ? s[n] : t,
                    l = e.style;
                return (
                    null == u && l && l[n] && (u = l[n]),
                    yn.test(u) &&
                    !dn.test(n) &&
                    ((i = l.left),
                        (o = e.runtimeStyle),
                        (a = o && o.left),
                        a && (o.left = e.currentStyle.left),
                        (l.left = 'fontSize' === n ? '1em' : u),
                        (u = l.pixelLeft + 'px'),
                        (l.left = i),
                        a && (o.left = a)),
                    '' === u ? 'auto' : u
                );
            })),
        st.each(['height', 'width'], function(e, n) {
            st.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ?
                        0 === e.offsetWidth && hn.test(st.css(e, 'display')) ?
                        st.swap(e, xn, function() {
                            return E(e, n, i);
                        }) :
                        E(e, n, i) :
                        t;
                },
                set: function(e, t, r) {
                    var i = r && ln(e);
                    return C(
                        e,
                        t,
                        r ?
                        k(
                            e,
                            n,
                            r,
                            st.support.boxSizing &&
                            'border-box' === st.css(e, 'boxSizing', !1, i),
                            i
                        ) :
                        0
                    );
                },
            };
        }),
        st.support.opacity ||
        (st.cssHooks.opacity = {
            get: function(e, t) {
                return pn.test(
                        (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ''
                    ) ?
                    0.01 * parseFloat(RegExp.$1) + '' :
                    t ?
                    '1' :
                    '';
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = st.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
                    o = (r && r.filter) || n.filter || '';
                (n.zoom = 1),
                ((t >= 1 || '' === t) &&
                    '' === st.trim(o.replace(fn, '')) &&
                    n.removeAttribute &&
                    (n.removeAttribute('filter'), '' === t || (r && !r.filter))) ||
                (n.filter = fn.test(o) ? o.replace(fn, i) : o + ' ' + i);
            },
        }),
        st(function() {
            st.support.reliableMarginRight ||
                (st.cssHooks.marginRight = {
                    get: function(e, n) {
                        return n ?
                            st.swap(e, { display: 'inline-block' }, un, [e, 'marginRight']) :
                            t;
                    },
                }), !st.support.pixelPosition &&
                st.fn.position &&
                st.each(['top', 'left'], function(e, n) {
                    st.cssHooks[n] = {
                        get: function(e, r) {
                            return r ?
                                ((r = un(e, n)),
                                    yn.test(r) ? st(e).position()[n] + 'px' : r) :
                                t;
                        },
                    };
                });
        }),
        st.expr &&
        st.expr.filters &&
        ((st.expr.filters.hidden = function(e) {
                return (
                    (0 === e.offsetWidth && 0 === e.offsetHeight) ||
                    (!st.support.reliableHiddenOffsets &&
                        'none' === ((e.style && e.style.display) || st.css(e, 'display')))
                );
            }),
            (st.expr.filters.visible = function(e) {
                return !st.expr.filters.hidden(e);
            })),
        st.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
            (st.cssHooks[e + t] = {
                expand: function(n) {
                    for (
                        var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; 4 > r; r++
                    )
                        i[e + wn[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
            gn.test(e) || (st.cssHooks[e + t].set = C);
        });
    var Cn = /%20/g,
        kn = /\[\]$/,
        En = /\r?\n/g,
        Sn = /^(?:submit|button|image|reset)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    st.fn.extend({
            serialize: function() {
                return st.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                        var e = st.prop(this, 'elements');
                        return e ? st.makeArray(e) : this;
                    })
                    .filter(function() {
                        var e = this.type;
                        return (
                            this.name &&
                            !st(this).is(':disabled') &&
                            An.test(this.nodeName) &&
                            !Sn.test(e) &&
                            (this.checked || !Zt.test(e))
                        );
                    })
                    .map(function(e, t) {
                        var n = st(this).val();
                        return null == n ?
                            null :
                            st.isArray(n) ?
                            st.map(n, function(e) {
                                return { name: t.name, value: e.replace(En, '\r\n') };
                            }) : { name: t.name, value: n.replace(En, '\r\n') };
                    })
                    .get();
            },
        }),
        (st.param = function(e, n) {
            var r,
                i = [],
                o = function(e, t) {
                    (t = st.isFunction(t) ? t() : null == t ? '' : t),
                    (i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t));
                };
            if (
                (n === t && (n = st.ajaxSettings && st.ajaxSettings.traditional),
                    st.isArray(e) || (e.jquery && !st.isPlainObject(e)))
            )
                st.each(e, function() {
                    o(this.name, this.value);
                });
            else
                for (r in e) j(r, e[r], n, o);
            return i.join('&').replace(Cn, '+');
        });
    var jn,
        Dn,
        Ln = st.now(),
        Hn = /\?/,
        Mn = /#.*$/,
        qn = /([?&])_=[^&]*/,
        _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        On = /^(?:GET|HEAD)$/,
        Bn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Rn = st.fn.load,
        Wn = {},
        $n = {},
        In = '*/'.concat('*');
    try {
        Dn = Y.href;
    } catch (zn) {
        (Dn = V.createElement('a')), (Dn.href = ''), (Dn = Dn.href);
    }
    (jn = Pn.exec(Dn.toLowerCase()) || []),
    (st.fn.load = function(e, n, r) {
        if ('string' != typeof e && Rn) return Rn.apply(this, arguments);
        var i,
            o,
            a,
            s = this,
            u = e.indexOf(' ');
        return (
            u >= 0 && ((i = e.slice(u, e.length)), (e = e.slice(0, u))),
            st.isFunction(n) ?
            ((r = n), (n = t)) :
            n && 'object' == typeof n && (o = 'POST'),
            s.length > 0 &&
            st
            .ajax({ url: e, type: o, dataType: 'html', data: n })
            .done(function(e) {
                (a = arguments),
                s.html(i ? st('<div>').append(st.parseHTML(e)).find(i) : e);
            })
            .complete(
                r &&
                function(e, t) {
                    s.each(r, a || [e.responseText, t, e]);
                }
            ),
            this
        );
    }),
    st.each(
            [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend',
            ],
            function(e, t) {
                st.fn[t] = function(e) {
                    return this.on(t, e);
                };
            }
        ),
        st.each(['get', 'post'], function(e, n) {
            st[n] = function(e, r, i, o) {
                return (
                    st.isFunction(r) && ((o = o || i), (i = r), (r = t)),
                    st.ajax({ url: e, type: n, dataType: o, data: r, success: i })
                );
            };
        }),
        st.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dn,
                type: 'GET',
                isLocal: Fn.test(jn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    '*': In,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript',
                },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: 'responseXML', text: 'responseText' },
                converters: {
                    '* text': e.String,
                    'text html': !0,
                    'text json': st.parseJSON,
                    'text xml': st.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function(e, t) {
                return t ? H(H(e, st.ajaxSettings), t) : H(st.ajaxSettings, e);
            },
            ajaxPrefilter: D(Wn),
            ajaxTransport: D($n),
            ajax: function(e, n) {
                function r(e, n, r, s) {
                    var l,
                        f,
                        v,
                        b,
                        T,
                        N = n;
                    2 !== x &&
                        ((x = 2),
                            u && clearTimeout(u),
                            (i = t),
                            (a = s || ''),
                            (w.readyState = e > 0 ? 4 : 0),
                            r && (b = M(p, w, r)),
                            (e >= 200 && 300 > e) || 304 === e ?
                            (p.ifModified &&
                                ((T = w.getResponseHeader('Last-Modified')),
                                    T && (st.lastModified[o] = T),
                                    (T = w.getResponseHeader('etag')),
                                    T && (st.etag[o] = T)),
                                304 === e ?
                                ((l = !0), (N = 'notmodified')) :
                                ((l = q(p, b)),
                                    (N = l.state),
                                    (f = l.data),
                                    (v = l.error),
                                    (l = !v))) :
                            ((v = N), (e || !N) && ((N = 'error'), 0 > e && (e = 0))),
                            (w.status = e),
                            (w.statusText = (n || N) + ''),
                            l ? g.resolveWith(d, [f, N, w]) : g.rejectWith(d, [w, N, v]),
                            w.statusCode(y),
                            (y = t),
                            c && h.trigger(l ? 'ajaxSuccess' : 'ajaxError', [w, p, l ? f : v]),
                            m.fireWith(d, [w, N]),
                            c &&
                            (h.trigger('ajaxComplete', [w, p]),
                                --st.active || st.event.trigger('ajaxStop')));
                }
                'object' == typeof e && ((n = e), (e = t)), (n = n || {});
                var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f,
                    p = st.ajaxSetup({}, n),
                    d = p.context || p,
                    h = p.context && (d.nodeType || d.jquery) ? st(d) : st.event,
                    g = st.Deferred(),
                    m = st.Callbacks('once memory'),
                    y = p.statusCode || {},
                    v = {},
                    b = {},
                    x = 0,
                    T = 'canceled',
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!s)
                                    for (s = {};
                                        (t = _n.exec(a));) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null;
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || ((e = b[n] = b[n] || e), (v[e] = t)), this;
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else w.always(e[w.status]);
                            return this;
                        },
                        abort: function(e) {
                            var t = e || T;
                            return i && i.abort(t), r(0, t), this;
                        },
                    };
                if (
                    ((g.promise(w).complete = m.add),
                        (w.success = w.done),
                        (w.error = w.fail),
                        (p.url = ((e || p.url || Dn) + '')
                            .replace(Mn, '')
                            .replace(Bn, jn[1] + '//')),
                        (p.type = n.method || n.type || p.method || p.type),
                        (p.dataTypes = st
                            .trim(p.dataType || '*')
                            .toLowerCase()
                            .match(lt) || ['']),
                        null == p.crossDomain &&
                        ((l = Pn.exec(p.url.toLowerCase())),
                            (p.crossDomain = !(!l ||
                                (l[1] === jn[1] &&
                                    l[2] === jn[2] &&
                                    (l[3] || ('http:' === l[1] ? 80 : 443)) ==
                                    (jn[3] || ('http:' === jn[1] ? 80 : 443)))
                            ))),
                        p.data &&
                        p.processData &&
                        'string' != typeof p.data &&
                        (p.data = st.param(p.data, p.traditional)),
                        L(Wn, p, n, w),
                        2 === x)
                )
                    return w;
                (c = p.global),
                c && 0 === st.active++ && st.event.trigger('ajaxStart'),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !On.test(p.type)),
                    (o = p.url),
                    p.hasContent ||
                    (p.data &&
                        ((o = p.url += (Hn.test(o) ? '&' : '?') + p.data), delete p.data),
                        p.cache === !1 &&
                        (p.url = qn.test(o) ?
                            o.replace(qn, '$1_=' + Ln++) :
                            o + (Hn.test(o) ? '&' : '?') + '_=' + Ln++)),
                    p.ifModified &&
                    (st.lastModified[o] &&
                        w.setRequestHeader('If-Modified-Since', st.lastModified[o]),
                        st.etag[o] && w.setRequestHeader('If-None-Match', st.etag[o])),
                    ((p.data && p.hasContent && p.contentType !== !1) || n.contentType) &&
                    w.setRequestHeader('Content-Type', p.contentType),
                    w.setRequestHeader(
                        'Accept',
                        p.dataTypes[0] && p.accepts[p.dataTypes[0]] ?
                        p.accepts[p.dataTypes[0]] +
                        ('*' !== p.dataTypes[0] ? ', ' + In + '; q=0.01' : '') :
                        p.accepts['*']
                    );
                for (f in p.headers) w.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x))
                    return w.abort();
                T = 'abort';
                for (f in { success: 1, error: 1, complete: 1 }) w[f](p[f]);
                if ((i = L($n, p, n, w))) {
                    (w.readyState = 1),
                    c && h.trigger('ajaxSend', [w, p]),
                        p.async &&
                        p.timeout > 0 &&
                        (u = setTimeout(function() {
                            w.abort('timeout');
                        }, p.timeout));
                    try {
                        (x = 1), i.send(v, r);
                    } catch (N) {
                        if (!(2 > x)) throw N;
                        r(-1, N);
                    }
                } else r(-1, 'No Transport');
                return w;
            },
            getScript: function(e, n) {
                return st.get(e, t, n, 'script');
            },
            getJSON: function(e, t, n) {
                return st.get(e, t, n, 'json');
            },
        }),
        st.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                'text script': function(e) {
                    return st.globalEval(e), e;
                },
            },
        }),
        st.ajaxPrefilter('script', function(e) {
            e.cache === t && (e.cache = !1),
                e.crossDomain && ((e.type = 'GET'), (e.global = !1));
        }),
        st.ajaxTransport('script', function(e) {
            if (e.crossDomain) {
                var n,
                    r = V.head || st('head')[0] || V.documentElement;
                return {
                    send: function(t, i) {
                        (n = V.createElement('script')),
                        (n.async = !0),
                        e.scriptCharset && (n.charset = e.scriptCharset),
                            (n.src = e.url),
                            (n.onload = n.onreadystatechange = function(e, t) {
                                (t || !n.readyState || /loaded|complete/.test(n.readyState)) &&
                                ((n.onload = n.onreadystatechange = null),
                                    n.parentNode && n.parentNode.removeChild(n),
                                    (n = null),
                                    t || i(200, 'success'));
                            }),
                            r.insertBefore(n, r.firstChild);
                    },
                    abort: function() {
                        n && n.onload(t, !0);
                    },
                };
            }
        });
    var Xn = [],
        Un = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function() {
                var e = Xn.pop() || st.expando + '_' + Ln++;
                return (this[e] = !0), e;
            },
        }),
        st.ajaxPrefilter('json jsonp', function(n, r, i) {
            var o,
                a,
                s,
                u =
                n.jsonp !== !1 &&
                (Un.test(n.url) ?
                    'url' :
                    'string' == typeof n.data &&
                    !(n.contentType || '').indexOf(
                        'application/x-www-form-urlencoded'
                    ) &&
                    Un.test(n.data) &&
                    'data');
            return u || 'jsonp' === n.dataTypes[0] ?
                ((o = n.jsonpCallback = st.isFunction(n.jsonpCallback) ?
                        n.jsonpCallback() :
                        n.jsonpCallback),
                    u ?
                    (n[u] = n[u].replace(Un, '$1' + o)) :
                    n.jsonp !== !1 &&
                    (n.url += (Hn.test(n.url) ? '&' : '?') + n.jsonp + '=' + o),
                    (n.converters['script json'] = function() {
                        return s || st.error(o + ' was not called'), s[0];
                    }),
                    (n.dataTypes[0] = 'json'),
                    (a = e[o]),
                    (e[o] = function() {
                        s = arguments;
                    }),
                    i.always(function() {
                        (e[o] = a),
                        n[o] && ((n.jsonpCallback = r.jsonpCallback), Xn.push(o)),
                            s && st.isFunction(a) && a(s[0]),
                            (s = a = t);
                    }),
                    'script') :
                t;
        });
    var Vn,
        Yn,
        Jn = 0,
        Gn =
        e.ActiveXObject &&
        function() {
            var e;
            for (e in Vn) Vn[e](t, !0);
        };
    (st.ajaxSettings.xhr = e.ActiveXObject ?

        function() {
            return (!this.isLocal && _()) || F();
        } :
        _),
    (Yn = st.ajaxSettings.xhr()),
    (st.support.cors = !!Yn && 'withCredentials' in Yn),
    (Yn = st.support.ajax = !!Yn),
    Yn &&
        st.ajaxTransport(function(n) {
            if (!n.crossDomain || st.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a,
                            s,
                            u = n.xhr();
                        if (
                            (n.username ?
                                u.open(n.type, n.url, n.async, n.username, n.password) :
                                u.open(n.type, n.url, n.async),
                                n.xhrFields)
                        )
                            for (s in n.xhrFields) u[s] = n.xhrFields[s];
                        n.mimeType &&
                            u.overrideMimeType &&
                            u.overrideMimeType(n.mimeType),
                            n.crossDomain ||
                            i['X-Requested-With'] ||
                            (i['X-Requested-With'] = 'XMLHttpRequest');
                        try {
                            for (s in i) u.setRequestHeader(s, i[s]);
                        } catch (l) {}
                        u.send((n.hasContent && n.data) || null),
                            (r = function(e, i) {
                                var s, l, c, f, p;
                                try {
                                    if (r && (i || 4 === u.readyState))
                                        if (
                                            ((r = t),
                                                a &&
                                                ((u.onreadystatechange = st.noop),
                                                    Gn && delete Vn[a]),
                                                i)
                                        )
                                            4 !== u.readyState && u.abort();
                                        else {
                                            (f = {}),
                                            (s = u.status),
                                            (p = u.responseXML),
                                            (c = u.getAllResponseHeaders()),
                                            p && p.documentElement && (f.xml = p),
                                                'string' == typeof u.responseText &&
                                                (f.text = u.responseText);
                                            try {
                                                l = u.statusText;
                                            } catch (d) {
                                                l = '';
                                            }
                                            s || !n.isLocal || n.crossDomain ?
                                                1223 === s && (s = 204) :
                                                (s = f.text ? 200 : 404);
                                        }
                                } catch (h) {
                                    i || o(-1, h);
                                }
                                f && o(s, l, f, c);
                            }),
                            n.async ?
                            4 === u.readyState ?
                            setTimeout(r) :
                            ((a = ++Jn),
                                Gn && (Vn || ((Vn = {}), st(e).unload(Gn)), (Vn[a] = r)),
                                (u.onreadystatechange = r)) :
                            r();
                    },
                    abort: function() {
                        r && r(t, !0);
                    },
                };
            }
        });
    var Qn,
        Kn,
        Zn = /^(?:toggle|show|hide)$/,
        er = RegExp('^(?:([+-])=|)(' + ut + ')([a-z%]*)$', 'i'),
        tr = /queueHooks$/,
        nr = [W],
        rr = {
            '*': [
                function(e, t) {
                    var n,
                        r,
                        i = this.createTween(e, t),
                        o = er.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (
                            ((n = +o[2]),
                                (r = o[3] || (st.cssNumber[e] ? '' : 'px')),
                                'px' !== r && s)
                        ) {
                            s = st.css(i.elem, e, !0) || n || 1;
                            do(u = u || '.5'), (s /= u), st.style(i.elem, e, s + r);
                            while (u !== (u = i.cur() / a) && 1 !== u && --l);
                        }
                        (i.unit = r),
                        (i.start = s),
                        (i.end = o[1] ? s + (o[1] + 1) * n : n);
                    }
                    return i;
                },
            ],
        };
    (st.Animation = st.extend(P, {
        tweener: function(e, t) {
            st.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '));
            for (var n, r = 0, i = e.length; i > r; r++)
                (n = e[r]), (rr[n] = rr[n] || []), rr[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? nr.unshift(e) : nr.push(e);
        },
    })),
    (st.Tween = $),
    ($.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            (this.elem = e),
            (this.prop = n),
            (this.easing = i || 'swing'),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (st.cssNumber[n] ? '' : 'px'));
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this);
        },
        run: function(e) {
            var t,
                n = $.propHooks[this.prop];
            return (
                (this.pos = t = this.options.duration ?
                    st.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                    ) :
                    e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : $.propHooks._default.set(this),
                this
            );
        },
    }),
    ($.prototype.init.prototype = $.prototype),
    ($.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] ||
                    (e.elem.style && null != e.elem.style[e.prop]) ?
                    ((t = st.css(e.elem, e.prop, 'auto')), t && 'auto' !== t ? t : 0) :
                    e.elem[e.prop];
            },
            set: function(e) {
                st.fx.step[e.prop] ?
                    st.fx.step[e.prop](e) :
                    e.elem.style &&
                    (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ?
                    st.style(e.elem, e.prop, e.now + e.unit) :
                    (e.elem[e.prop] = e.now);
            },
        },
    }),
    ($.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
    }),
    st.each(['toggle', 'show', 'hide'], function(e, t) {
            var n = st.fn[t];
            st.fn[t] = function(e, r, i) {
                return null == e || 'boolean' == typeof e ?
                    n.apply(this, arguments) :
                    this.animate(I(t, !0), e, r, i);
            };
        }),
        st.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(w)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function(e, t, n, r) {
                var i = st.isEmptyObject(e),
                    o = st.speed(t, n, r),
                    a = function() {
                        var t = P(this, st.extend({}, e), o);
                        (a.finish = function() {
                            t.stop(!0);
                        }),
                        (i || st._data(this, 'finish')) && t.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r);
                };
                return (
                    'string' != typeof e && ((r = n), (n = e), (e = t)),
                    n && e !== !1 && this.queue(e || 'fx', []),
                    this.each(function() {
                        var t = !0,
                            n = null != e && e + 'queueHooks',
                            o = st.timers,
                            a = st._data(this);
                        if (n) a[n] && a[n].stop && i(a[n]);
                        else
                            for (n in a) a[n] && a[n].stop && tr.test(n) && i(a[n]);
                        for (n = o.length; n--;)
                            o[n].elem !== this ||
                            (null != e && o[n].queue !== e) ||
                            (o[n].anim.stop(r), (t = !1), o.splice(n, 1));
                        (t || !r) && st.dequeue(this, e);
                    })
                );
            },
            finish: function(e) {
                return (
                    e !== !1 && (e = e || 'fx'),
                    this.each(function() {
                        var t,
                            n = st._data(this),
                            r = n[e + 'queue'],
                            i = n[e + 'queueHooks'],
                            o = st.timers,
                            a = r ? r.length : 0;
                        for (
                            n.finish = !0,
                            st.queue(this, e, []),
                            i && i.cur && i.cur.finish && i.cur.finish.call(this),
                            t = o.length; t--;

                        )
                            o[t].elem === this &&
                            o[t].queue === e &&
                            (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        st.each({
                slideDown: I('show'),
                slideUp: I('hide'),
                slideToggle: I('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' },
            },
            function(e, t) {
                st.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }
        ),
        (st.speed = function(e, t, n) {
            var r =
                e && 'object' == typeof e ?
                st.extend({}, e) : {
                    complete: n || (!n && t) || (st.isFunction(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !st.isFunction(t) && t),
                };
            return (
                (r.duration = st.fx.off ?
                    0 :
                    'number' == typeof r.duration ?
                    r.duration :
                    r.duration in st.fx.speeds ?
                    st.fx.speeds[r.duration] :
                    st.fx.speeds._default),
                (null == r.queue || r.queue === !0) && (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function() {
                    st.isFunction(r.old) && r.old.call(this),
                        r.queue && st.dequeue(this, r.queue);
                }),
                r
            );
        }),
        (st.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
        }),
        (st.timers = []),
        (st.fx = $.prototype.init),
        (st.fx.tick = function() {
            var e,
                n = st.timers,
                r = 0;
            for (Qn = st.now(); n.length > r; r++)
                (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
            n.length || st.fx.stop(), (Qn = t);
        }),
        (st.fx.timer = function(e) {
            e() && st.timers.push(e) && st.fx.start();
        }),
        (st.fx.interval = 13),
        (st.fx.start = function() {
            Kn || (Kn = setInterval(st.fx.tick, st.fx.interval));
        }),
        (st.fx.stop = function() {
            clearInterval(Kn), (Kn = null);
        }),
        (st.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (st.fx.step = {}),
        st.expr &&
        st.expr.filters &&
        (st.expr.filters.animated = function(e) {
            return st.grep(st.timers, function(t) {
                return e === t.elem;
            }).length;
        }),
        (st.fn.offset = function(e) {
            if (arguments.length)
                return e === t ?
                    this :
                    this.each(function(t) {
                        st.offset.setOffset(this, e, t);
                    });
            var n,
                r,
                i = { top: 0, left: 0 },
                o = this[0],
                a = o && o.ownerDocument;
            if (a)
                return (
                    (n = a.documentElement),
                    st.contains(n, o) ?
                    (o.getBoundingClientRect !== t && (i = o.getBoundingClientRect()),
                        (r = z(a)), {
                            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                            left: i.left +
                                (r.pageXOffset || n.scrollLeft) -
                                (n.clientLeft || 0),
                        }) :
                    i
                );
        }),
        (st.offset = {
            setOffset: function(e, t, n) {
                var r = st.css(e, 'position');
                'static' === r && (e.style.position = 'relative');
                var i,
                    o,
                    a = st(e),
                    s = a.offset(),
                    u = st.css(e, 'top'),
                    l = st.css(e, 'left'),
                    c =
                    ('absolute' === r || 'fixed' === r) &&
                    st.inArray('auto', [u, l]) > -1,
                    f = {},
                    p = {};
                c
                    ?
                    ((p = a.position()), (i = p.top), (o = p.left)) :
                    ((i = parseFloat(u) || 0), (o = parseFloat(l) || 0)),
                    st.isFunction(t) && (t = t.call(e, n, s)),
                    null != t.top && (f.top = t.top - s.top + i),
                    null != t.left && (f.left = t.left - s.left + o),
                    'using' in t ? t.using.call(e, f) : a.css(f);
            },
        }),
        st.fn.extend({
            position: function() {
                if (this[0]) {
                    var e,
                        t,
                        n = { top: 0, left: 0 },
                        r = this[0];
                    return (
                        'fixed' === st.css(r, 'position') ?
                        (t = r.getBoundingClientRect()) :
                        ((e = this.offsetParent()),
                            (t = this.offset()),
                            st.nodeName(e[0], 'html') || (n = e.offset()),
                            (n.top += st.css(e[0], 'borderTopWidth', !0)),
                            (n.left += st.css(e[0], 'borderLeftWidth', !0))), {
                            top: t.top - n.top - st.css(r, 'marginTop', !0),
                            left: t.left - n.left - st.css(r, 'marginLeft', !0),
                        }
                    );
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (
                        var e = this.offsetParent || V.documentElement; e && !st.nodeName(e, 'html') && 'static' === st.css(e, 'position');

                    )
                        e = e.offsetParent;
                    return e || V.documentElement;
                });
            },
        }),
        st.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(
            e,
            n
        ) {
            var r = /Y/.test(n);
            st.fn[e] = function(i) {
                return st.access(
                    this,
                    function(e, i, o) {
                        var a = z(e);
                        return o === t ?
                            a ?
                            n in a ?
                            a[n] :
                            a.document.documentElement[i] :
                            e[i] :
                            (a ?
                                a.scrollTo(
                                    r ? st(a).scrollLeft() : o,
                                    r ? o : st(a).scrollTop()
                                ) :
                                (e[i] = o),
                                t);
                    },
                    e,
                    i,
                    arguments.length,
                    null
                );
            };
        }),
        st.each({ Height: 'height', Width: 'width' }, function(e, n) {
            st.each({ padding: 'inner' + e, content: n, '': 'outer' + e }, function(
                r,
                i
            ) {
                st.fn[i] = function(i, o) {
                    var a = arguments.length && (r || 'boolean' != typeof i),
                        s = r || (i === !0 || o === !0 ? 'margin' : 'border');
                    return st.access(
                        this,
                        function(n, r, i) {
                            var o;
                            return st.isWindow(n) ?
                                n.document.documentElement['client' + e] :
                                9 === n.nodeType ?
                                ((o = n.documentElement),
                                    Math.max(
                                        n.body['scroll' + e],
                                        o['scroll' + e],
                                        n.body['offset' + e],
                                        o['offset' + e],
                                        o['client' + e]
                                    )) :
                                i === t ?
                                st.css(n, r, s) :
                                st.style(n, r, i, s);
                        },
                        n,
                        a ? i : t,
                        a,
                        null
                    );
                };
            });
        }),
        (e.jQuery = e.$ = st),
        'function' == typeof define &&
        define.amd &&
        define.amd.jQuery &&
        define('jquery', [], function() {
            return st;
        });
})(window);

/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */

<<
<<
<
HEAD
    ! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto) }(function(e) {
            "use strict";

            function t(t) {
                var r = t.data;
                t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
            }

            function r(t) {
                var r = t.target,
                    a = e(r);
                if (!a.is("[type=submit],[type=image]")) {
                    var n = a.closest("[type=submit]");
                    if (0 === n.length) return;
                    r = n[0]
                }
                var i = this;
                if (i.clk = r, "image" == r.type)
                    if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
                    else if ("function" == typeof e.fn.offset) {
                    var o = a.offset();
                    i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
                } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
                setTimeout(function() { i.clk = i.clk_x = i.clk_y = null }, 100)
            }

            function a() {
                if (e.fn.ajaxSubmit.debug) {
                    var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                    window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
                }
            }
            var n = {};
            n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
            var i = !!e.fn.prop;
            e.fn.attr2 = function() { if (!i) return this.attr.apply(this, arguments); var e = this.prop.apply(this, arguments); return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, e.fn.ajaxSubmit = function(t) {
                    function r(r) {
                        var a, n, i = e.param(r, t.traditional).split("&"),
                            o = i.length,
                            s = [];
                        for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
                        return s
                    }

                    function o(a) {
                        for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
                        if (t.extraData) { var o = r(t.extraData); for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]) }
                        t.data = null;
                        var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });
                        t.uploadProgress && (s.xhr = function() {
                            var r = e.ajaxSettings.xhr();
                            return r.upload && r.upload.addEventListener("progress", function(e) {
                                var r = 0,
                                    a = e.loaded || e.position,
                                    n = e.total;
                                e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                            }, !1), r
                        }), s.data = null;
                        var c = s.beforeSend;
                        return s.beforeSend = function(e, r) { r.data = t.formData ? t.formData : n, c && c.call(this, e, r) }, e.ajax(s)
                    }

                    function s(r) {
                        function n(e) { var t = null; try { e.contentWindow && (t = e.contentWindow.document) } catch (r) { a("cannot get iframe.contentWindow document: " + r) } if (t) return t; try { t = e.contentDocument ? e.contentDocument : e.document } catch (r) { a("cannot get iframe.contentDocument: " + r), t = e.document } return t }

                        function o() {
                            function t() {
                                try {
                                    var e = n(g).readyState;
                                    a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                                } catch (r) { a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0 }
                            }
                            var r = f.attr2("target"),
                                i = f.attr2("action"),
                                o = "multipart/form-data",
                                c = f.attr("enctype") || f.attr("encoding") || o;
                            w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m.timeout && (j = setTimeout(function() { T = !0, s(D) }, m.timeout));
                            var l = [];
                            try {
                                if (m.extraData)
                                    for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                                m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                                try { w.submit() } catch (h) {
                                    var x = document.createElement("form").submit;
                                    x.apply(w)
                                }
                            } finally { w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove() }
                        }

                        function s(t) {
                            if (!x.aborted && !F) {
                                if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                                if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                                if (M && M.location.href != m.iframeSrc || T) {
                                    g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                                    var r, i = "success";
                                    try {
                                        if (T) throw "timeout";
                                        var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                                        if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                                        var u = M.body ? M.body : M.documentElement;
                                        x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) { var t = { "content-type": m.dataType }; return t[e.toLowerCase()] }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                                        var c = (m.dataType || "").toLowerCase(),
                                            l = /(json|script|text)/.test(c);
                                        if (l || m.textarea) {
                                            var f = M.getElementsByTagName("textarea")[0];
                                            if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                            else if (l) {
                                                var p = M.getElementsByTagName("pre")[0],
                                                    h = M.getElementsByTagName("body")[0];
                                                p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                            }
                                        } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                                        try { E = _(x, c, m) } catch (y) { i = "parsererror", x.error = r = y || i }
                                    } catch (y) { a("error caught: ", y), i = "error", x.error = r = y || i }
                                    x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() { m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null }, 100)
                                }
                            }
                        }
                        var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                            S = e.Deferred();
                        if (S.abort = function(e) { x.abort(e) }, r)
                            for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
                        if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g = v[0], x = {
                                aborted: 0,
                                responseText: null,
                                responseXML: null,
                                status: 0,
                                statusText: "n/a",
                                getAllResponseHeaders: function() {},
                                getResponseHeader: function() {},
                                setRequestHeader: function() {},
                                abort: function(t) {
                                    var r = "timeout" === t ? "timeout" : "aborted";
                                    a("aborting upload... " + r), this.aborted = 1;
                                    try { g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop") } catch (n) {}
                                    v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                                }
                            }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
                        if (x.aborted) return S.reject(), S;
                        y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
                        var D = 1,
                            k = 2,
                            A = e("meta[name=csrf-token]").attr("content"),
                            L = e("meta[name=csrf-param]").attr("content");
                        L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
                        var E, M, F, O = 50,
                            X = e.parseXML || function(e, t) { return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null },
                            C = e.parseJSON || function(e) { return window.eval("(" + e + ")") },
                            _ = function(t, r, a) {
                                var n = t.getResponseHeader("content-type") || "",
                                    i = "xml" === r || !r && n.indexOf("xml") >= 0,
                                    o = i ? t.responseXML : t.responseText;
                                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                            };
                        return S
                    }
                    if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
                    var u, c, l, f = this;
                    "function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t);
                    var m = {};
                    if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
                    if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
                    var d = t.traditional;
                    void 0 === d && (d = e.ajaxSettings.traditional);
                    var p, h = [],
                        v = this.formToArray(t.semantic, h);
                    if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
                    if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
                    var g = e.param(v, d);
                    p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
                    var x = [];
                    if (t.resetForm && x.push(function() { f.resetForm() }), t.clearForm && x.push(function() { f.clearForm(t.includeHidden) }), !t.dataType && t.target) {
                        var y = t.success || function() {};
                        x.push(function(r) {
                            var a = t.replaceTarget ? "replaceWith" : "html";
                            e(t.target)[a](r).each(y, arguments)
                        })
                    } else t.success && x.push(t.success);
                    if (t.success = function(e, r, a) { for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f]) }, t.error) {
                        var b = t.error;
                        t.error = function(e, r, a) {
                            var n = t.context || this;
                            b.apply(n, [e, r, a, f])
                        }
                    }
                    if (t.complete) {
                        var T = t.complete;
                        t.complete = function(e, r) {
                            var a = t.context || this;
                            T.apply(a, [e, r, f])
                        }
                    }
                    var j = e("input[type=file]:enabled", this).filter(function() { return "" !== e(this).val() }),
                        w = j.length > 0,
                        S = "multipart/form-data",
                        D = f.attr("enctype") == S || f.attr("encoding") == S,
                        k = n.fileapi && n.formdata;
                    a("fileAPI :" + k);
                    var A, L = (w || D) && !k;
                    t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() { A = s(v) }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
                    for (var E = 0; E < h.length; E++) h[E] = null;
                    return this.trigger("form-submit-notify", [this, t]), this
                }, e.fn.ajaxForm = function(n) { if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) { var i = { s: this.selector, c: this.context }; return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() { e(i.s, i.c).ajaxForm(n) }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) } return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r) }, e.fn.ajaxFormUnbind = function() { return this.unbind("submit.form-plugin click.form-plugin") }, e.fn.formToArray = function(t, r) {
                    var a = [];
                    if (0 === this.length) return a;
                    var i, o = this[0],
                        s = this.attr("id"),
                        u = t ? o.getElementsByTagName("*") : o.elements;
                    if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
                    var c, l, f, m, d, p, h;
                    for (c = 0, p = u.length; p > c; c++)
                        if (d = u[c], f = d.name, f && !d.disabled)
                            if (t && o.clk && "image" == d.type) o.clk == d && (a.push({ name: f, value: e(d).val(), type: d.type }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
                            else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
                        for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({ name: f, value: m[l] });
                    else if (n.fileapi && "file" == d.type) {
                        r && r.push(d);
                        var v = d.files;
                        if (v.length)
                            for (l = 0; l < v.length; l++) a.push({ name: f, value: v[l], type: d.type });
                        else a.push({ name: f, value: "", type: d.type })
                    } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({ name: f, value: m, type: d.type, required: d.required }));
                    if (!t && o.clk) {
                        var g = e(o.clk),
                            x = g[0];
                        f = x.name, f && !x.disabled && "image" == x.type && (a.push({ name: f, value: g.val() }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }))
                    }
                    return a
                }, e.fn.formSerialize = function(t) { return e.param(this.formToArray(t)) }, e.fn.fieldSerialize = function(t) {
                    var r = [];
                    return this.each(function() {
                        var a = this.name;
                        if (a) {
                            var n = e.fieldValue(this, t);
                            if (n && n.constructor == Array)
                                for (var i = 0, o = n.length; o > i; i++) r.push({ name: a, value: n[i] });
                            else null !== n && "undefined" != typeof n && r.push({ name: this.name, value: n })
                        }
                    }), e.param(r)
                }, e.fn.fieldValue = function(t) {
                    for (var r = [], a = 0, n = this.length; n > a; a++) {
                        var i = this[a],
                            o = e.fieldValue(i, t);
                        null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
                    }
                    return r
                }, e.fieldValue = function(t, r) {
                    var a = t.name,
                        n = t.type,
                        i = t.tagName.toLowerCase();
                    if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
                    if ("select" == i) {
                        var o = t.selectedIndex;
                        if (0 > o) return null;
                        for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                            var m = u[f];
                            if (m.selected) {
                                var d = m.value;
                                if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                                s.push(d)
                            }
                        }
                        return s
                    }
                    return e(t).val()
                }, e.fn.clearForm = function(t) { return this.each(function() { e("input,select,textarea", this).clearFields(t) }) }, e.fn.clearFields = e.fn.clearInputs = function(t) {
                    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                    return this.each(function() {
                        var a = this.type,
                            n = this.tagName.toLowerCase();
                        r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
                    })
                }, e.fn.resetForm = function() {
                    return this.each(function() {
                        ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
                    })
                }, e.fn.enable = function(e) { return void 0 === e && (e = !0), this.each(function() { this.disabled = !e }) }, e.fn.selected = function(t) {
                    return void 0 === t && (t = !0), this.each(function() {
                        var r = this.type;
                        if ("checkbox" == r || "radio" == r) this.checked = t;
                        else if ("option" == this.tagName.toLowerCase()) {
                            var a = e(this).parent("select");
                            t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
                        }
                    })
                }, e.fn.ajaxSubmit.debug = !1 ===
                ===
                = !(function(e) {
                    'use strict';
                    'function' == typeof define && define.amd ?
                        define(['jquery'], e) :
                        e('undefined' != typeof jQuery ? jQuery : window.Zepto);
                })(function(e) {
                    'use strict';

                    function t(t) {
                        var r = t.data;
                        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r));
                    }

                    function r(t) {
                        var r = t.target,
                            a = e(r);
                        if (!a.is('[type=submit],[type=image]')) {
                            var n = a.closest('[type=submit]');
                            if (0 === n.length) return;
                            r = n[0];
                        }
                        var i = this;
                        if (((i.clk = r), 'image' == r.type))
                            if (void 0 !== t.offsetX)(i.clk_x = t.offsetX), (i.clk_y = t.offsetY);
                            else if ('function' == typeof e.fn.offset) {
                            var o = a.offset();
                            (i.clk_x = t.pageX - o.left), (i.clk_y = t.pageY - o.top);
                        } else
                            (i.clk_x = t.pageX - r.offsetLeft), (i.clk_y = t.pageY - r.offsetTop);
                        setTimeout(function() {
                            i.clk = i.clk_x = i.clk_y = null;
                        }, 100);
                    }

                    function a() {
                        if (e.fn.ajaxSubmit.debug) {
                            var t = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
                            window.console && window.console.log ?
                                window.console.log(t) :
                                window.opera && window.opera.postError && window.opera.postError(t);
                        }
                    }
                    var n = {};
                    (n.fileapi = void 0 !== e("<input type='file'/>").get(0).files),
                    (n.formdata = void 0 !== window.FormData);
                    var i = !!e.fn.prop;
                    (e.fn.attr2 = function() {
                        if (!i) return this.attr.apply(this, arguments);
                        var e = this.prop.apply(this, arguments);
                        return (e && e.jquery) || 'string' == typeof e ?
                            e :
                            this.attr.apply(this, arguments);
                    }),
                    (e.fn.ajaxSubmit = function(t) {
                        function r(r) {
                            var a,
                                n,
                                i = e.param(r, t.traditional).split('&'),
                                o = i.length,
                                s = [];
                            for (a = 0; o > a; a++)
                                (i[a] = i[a].replace(/\+/g, ' ')),
                                (n = i[a].split('=')),
                                s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
                            return s;
                        }

                        function o(a) {
                            for (var n = new FormData(), i = 0; i < a.length; i++)
                                n.append(a[i].name, a[i].value);
                            if (t.extraData) {
                                var o = r(t.extraData);
                                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]);
                            }
                            t.data = null;
                            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                                contentType: !1,
                                processData: !1,
                                cache: !1,
                                type: u || 'POST',
                            });
                            t.uploadProgress &&
                                (s.xhr = function() {
                                    var r = e.ajaxSettings.xhr();
                                    return (
                                        r.upload &&
                                        r.upload.addEventListener(
                                            'progress',
                                            function(e) {
                                                var r = 0,
                                                    a = e.loaded || e.position,
                                                    n = e.total;
                                                e.lengthComputable && (r = Math.ceil((a / n) * 100)),
                                                    t.uploadProgress(e, a, n, r);
                                            }, !1
                                        ),
                                        r
                                    );
                                }),
                                (s.data = null);
                            var c = s.beforeSend;
                            return (
                                (s.beforeSend = function(e, r) {
                                    (r.data = t.formData ? t.formData : n), c && c.call(this, e, r);
                                }),
                                e.ajax(s)
                            );
                        }

                        function s(r) {
                            function n(e) {
                                var t = null;
                                try {
                                    e.contentWindow && (t = e.contentWindow.document);
                                } catch (r) {
                                    a('cannot get iframe.contentWindow document: ' + r);
                                }
                                if (t) return t;
                                try {
                                    t = e.contentDocument ? e.contentDocument : e.document;
                                } catch (r) {
                                    a('cannot get iframe.contentDocument: ' + r), (t = e.document);
                                }
                                return t;
                            }

                            function o() {
                                function t() {
                                    try {
                                        var e = n(g).readyState;
                                        a('state = ' + e),
                                            e && 'uninitialized' == e.toLowerCase() && setTimeout(t, 50);
                                    } catch (r) {
                                        a('Server abort: ', r, ' (', r.name, ')'),
                                            s(k),
                                            j && clearTimeout(j),
                                            (j = void 0);
                                    }
                                }
                                var r = f.attr2('target'),
                                    i = f.attr2('action'),
                                    o = 'multipart/form-data',
                                    c = f.attr('enctype') || f.attr('encoding') || o;
                                w.setAttribute('target', p),
                                    (!u || /post/i.test(u)) && w.setAttribute('method', 'POST'),
                                    i != m.url && w.setAttribute('action', m.url),
                                    m.skipEncodingOverride ||
                                    (u && !/post/i.test(u)) ||
                                    f.attr({
                                        encoding: 'multipart/form-data',
                                        enctype: 'multipart/form-data',
                                    }),
                                    m.timeout &&
                                    (j = setTimeout(function() {
                                        (T = !0), s(D);
                                    }, m.timeout));
                                var l = [];
                                try {
                                    if (m.extraData)
                                        for (var d in m.extraData)
                                            m.extraData.hasOwnProperty(d) &&
                                            l.push(
                                                e.isPlainObject(m.extraData[d]) &&
                                                m.extraData[d].hasOwnProperty('name') &&
                                                m.extraData[d].hasOwnProperty('value') ?
                                                e(
                                                    '<input type="hidden" name="' +
                                                    m.extraData[d].name +
                                                    '">'
                                                )
                                                .val(m.extraData[d].value)
                                                .appendTo(w)[0] :
                                                e('<input type="hidden" name="' + d + '">')
                                                .val(m.extraData[d])
                                                .appendTo(w)[0]
                                            );
                                    m.iframeTarget || v.appendTo('body'),
                                        g.attachEvent ?
                                        g.attachEvent('onload', s) :
                                        g.addEventListener('load', s, !1),
                                        setTimeout(t, 15);
                                    try {
                                        w.submit();
                                    } catch (h) {
                                        var x = document.createElement('form').submit;
                                        x.apply(w);
                                    }
                                } finally {
                                    w.setAttribute('action', i),
                                        w.setAttribute('enctype', c),
                                        r ? w.setAttribute('target', r) : f.removeAttr('target'),
                                        e(l).remove();
                                }
                            }

                            function s(t) {
                                if (!x.aborted && !F) {
                                    if (
                                        ((M = n(g)),
                                            M || (a('cannot access response document'), (t = k)),
                                            t === D && x)
                                    )
                                        return x.abort('timeout'), void S.reject(x, 'timeout');
                                    if (t == k && x)
                                        return (
                                            x.abort('server abort'),
                                            void S.reject(x, 'error', 'server abort')
                                        );
                                    if ((M && M.location.href != m.iframeSrc) || T) {
                                        g.detachEvent ?
                                            g.detachEvent('onload', s) :
                                            g.removeEventListener('load', s, !1);
                                        var r,
                                            i = 'success';
                                        try {
                                            if (T) throw 'timeout';
                                            var o = 'xml' == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                                            if (
                                                (a('isXml=' + o), !o &&
                                                    window.opera &&
                                                    (null === M.body || !M.body.innerHTML) &&
                                                    --O)
                                            )
                                                return (
                                                    a('requeing onLoad callback, DOM not available'),
                                                    void setTimeout(s, 250)
                                                );
                                            var u = M.body ? M.body : M.documentElement;
                                            (x.responseText = u ? u.innerHTML : null),
                                            (x.responseXML = M.XMLDocument ? M.XMLDocument : M),
                                            o && (m.dataType = 'xml'),
                                                (x.getResponseHeader = function(e) {
                                                    var t = { 'content-type': m.dataType };
                                                    return t[e.toLowerCase()];
                                                }),
                                                u &&
                                                ((x.status = Number(u.getAttribute('status')) || x.status),
                                                    (x.statusText =
                                                        u.getAttribute('statusText') || x.statusText));
                                            var c = (m.dataType || '').toLowerCase(),
                                                l = /(json|script|text)/.test(c);
                                            if (l || m.textarea) {
                                                var f = M.getElementsByTagName('textarea')[0];
                                                if (f)
                                                    (x.responseText = f.value),
                                                    (x.status = Number(f.getAttribute('status')) || x.status),
                                                    (x.statusText =
                                                        f.getAttribute('statusText') || x.statusText);
                                                else if (l) {
                                                    var p = M.getElementsByTagName('pre')[0],
                                                        h = M.getElementsByTagName('body')[0];
                                                    p
                                                        ?
                                                        (x.responseText = p.textContent ?
                                                            p.textContent :
                                                            p.innerText) :
                                                        h &&
                                                        (x.responseText = h.textContent ?
                                                            h.textContent :
                                                            h.innerText);
                                                }
                                            } else
                                                'xml' == c &&
                                                !x.responseXML &&
                                                x.responseText &&
                                                (x.responseXML = X(x.responseText));
                                            try {
                                                E = _(x, c, m);
                                            } catch (y) {
                                                (i = 'parsererror'), (x.error = r = y || i);
                                            }
                                        } catch (y) {
                                            a('error caught: ', y), (i = 'error'), (x.error = r = y || i);
                                        }
                                        x.aborted && (a('upload aborted'), (i = null)),
                                            x.status &&
                                            (i =
                                                (x.status >= 200 && x.status < 300) || 304 === x.status ?
                                                'success' :
                                                'error'),
                                            'success' === i ?
                                            (m.success && m.success.call(m.context, E, 'success', x),
                                                S.resolve(x.responseText, 'success', x),
                                                d && e.event.trigger('ajaxSuccess', [x, m])) :
                                            i &&
                                            (void 0 === r && (r = x.statusText),
                                                m.error && m.error.call(m.context, x, i, r),
                                                S.reject(x, 'error', r),
                                                d && e.event.trigger('ajaxError', [x, m, r])),
                                            d && e.event.trigger('ajaxComplete', [x, m]),
                                            d && !--e.active && e.event.trigger('ajaxStop'),
                                            m.complete && m.complete.call(m.context, x, i),
                                            (F = !0),
                                            m.timeout && clearTimeout(j),
                                            setTimeout(function() {
                                                m.iframeTarget ? v.attr('src', m.iframeSrc) : v.remove(),
                                                    (x.responseXML = null);
                                            }, 100);
                                    }
                                }
                            }
                            var c,
                                l,
                                m,
                                d,
                                p,
                                v,
                                g,
                                x,
                                y,
                                b,
                                T,
                                j,
                                w = f[0],
                                S = e.Deferred();
                            if (
                                ((S.abort = function(e) {
                                        x.abort(e);
                                    }),
                                    r)
                            )
                                for (l = 0; l < h.length; l++)
                                    (c = e(h[l])),
                                    i ? c.prop('disabled', !1) : c.removeAttr('disabled');
                            if (
                                ((m = e.extend(!0, {}, e.ajaxSettings, t)),
                                    (m.context = m.context || m),
                                    (p = 'jqFormIO' + new Date().getTime()),
                                    m.iframeTarget ?
                                    ((v = e(m.iframeTarget)),
                                        (b = v.attr2('name')),
                                        b ? (p = b) : v.attr2('name', p)) :
                                    ((v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />')),
                                        v.css({ position: 'absolute', top: '-1000px', left: '-1000px' })),
                                    (g = v[0]),
                                    (x = {
                                        aborted: 0,
                                        responseText: null,
                                        responseXML: null,
                                        status: 0,
                                        statusText: 'n/a',
                                        getAllResponseHeaders: function() {},
                                        getResponseHeader: function() {},
                                        setRequestHeader: function() {},
                                        abort: function(t) {
                                            var r = 'timeout' === t ? 'timeout' : 'aborted';
                                            a('aborting upload... ' + r), (this.aborted = 1);
                                            try {
                                                g.contentWindow.document.execCommand &&
                                                    g.contentWindow.document.execCommand('Stop');
                                            } catch (n) {}
                                            v.attr('src', m.iframeSrc),
                                                (x.error = r),
                                                m.error && m.error.call(m.context, x, r, t),
                                                d && e.event.trigger('ajaxError', [x, m, r]),
                                                m.complete && m.complete.call(m.context, x, r);
                                        },
                                    }),
                                    (d = m.global),
                                    d && 0 === e.active++ && e.event.trigger('ajaxStart'),
                                    d && e.event.trigger('ajaxSend', [x, m]),
                                    m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
                            )
                                return m.global && e.active--, S.reject(), S;
                            if (x.aborted) return S.reject(), S;
                            (y = w.clk),
                            y &&
                                ((b = y.name),
                                    b &&
                                    !y.disabled &&
                                    ((m.extraData = m.extraData || {}),
                                        (m.extraData[b] = y.value),
                                        'image' == y.type &&
                                        ((m.extraData[b + '.x'] = w.clk_x),
                                            (m.extraData[b + '.y'] = w.clk_y))));
                            var D = 1,
                                k = 2,
                                A = e('meta[name=csrf-token]').attr('content'),
                                L = e('meta[name=csrf-param]').attr('content');
                            L && A && ((m.extraData = m.extraData || {}), (m.extraData[L] = A)),
                                m.forceSync ? o() : setTimeout(o, 10);
                            var E,
                                M,
                                F,
                                O = 50,
                                X =
                                e.parseXML ||
                                function(e, t) {
                                    return (
                                        window.ActiveXObject ?
                                        ((t = new ActiveXObject('Microsoft.XMLDOM')),
                                            (t.async = 'false'),
                                            t.loadXML(e)) :
                                        (t = new DOMParser().parseFromString(e, 'text/xml')),
                                        t &&
                                        t.documentElement &&
                                        'parsererror' != t.documentElement.nodeName ?
                                        t :
                                        null
                                    );
                                },
                                C =
                                e.parseJSON ||
                                function(e) {
                                    return window.eval('(' + e + ')');
                                },
                                _ = function(t, r, a) {
                                    var n = t.getResponseHeader('content-type') || '',
                                        i = 'xml' === r || (!r && n.indexOf('xml') >= 0),
                                        o = i ? t.responseXML : t.responseText;
                                    return (
                                        i &&
                                        'parsererror' === o.documentElement.nodeName &&
                                        e.error &&
                                        e.error('parsererror'),
                                        a && a.dataFilter && (o = a.dataFilter(o, r)),
                                        'string' == typeof o &&
                                        ('json' === r || (!r && n.indexOf('json') >= 0) ?
                                            (o = C(o)) :
                                            ('script' === r || (!r && n.indexOf('javascript') >= 0)) &&
                                            e.globalEval(o)),
                                        o
                                    );
                                };
                            return S;
                        }
                        if (!this.length)
                            return (
                                a('ajaxSubmit: skipping submit process - no element selected'), this
                            );
                        var u,
                            c,
                            l,
                            f = this;
                        'function' == typeof t ? (t = { success: t }) : void 0 === t && (t = {}),
                            (u = t.type || this.attr2('method')),
                            (c = t.url || this.attr2('action')),
                            (l = 'string' == typeof c ? e.trim(c) : ''),
                            (l = l || window.location.href || ''),
                            l && (l = (l.match(/^([^#]+)/) || [])[1]),
                            (t = e.extend(!0, {
                                    url: l,
                                    success: e.ajaxSettings.success,
                                    type: u || e.ajaxSettings.type,
                                    iframeSrc: /^https/i.test(window.location.href || '') ?
                                        'javascript:false' : 'about:blank',
                                },
                                t
                            ));
                        var m = {};
                        if ((this.trigger('form-pre-serialize', [this, t, m]), m.veto))
                            return (
                                a('ajaxSubmit: submit vetoed via form-pre-serialize trigger'), this
                            );
                        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
                            return (
                                a('ajaxSubmit: submit aborted via beforeSerialize callback'), this
                            );
                        var d = t.traditional;
                        void 0 === d && (d = e.ajaxSettings.traditional);
                        var p,
                            h = [],
                            v = this.formToArray(t.semantic, h);
                        if (
                            (t.data && ((t.extraData = t.data), (p = e.param(t.data, d))),
                                t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
                        )
                            return a('ajaxSubmit: submit aborted via beforeSubmit callback'), this;
                        if ((this.trigger('form-submit-validate', [v, this, t, m]), m.veto))
                            return (
                                a('ajaxSubmit: submit vetoed via form-submit-validate trigger'), this
                            );
                        var g = e.param(v, d);
                        p && (g = g ? g + '&' + p : p),
                            'GET' == t.type.toUpperCase() ?
                            ((t.url += (t.url.indexOf('?') >= 0 ? '&' : '?') + g),
                                (t.data = null)) :
                            (t.data = g);
                        var x = [];
                        if (
                            (t.resetForm &&
                                x.push(function() {
                                    f.resetForm();
                                }),
                                t.clearForm &&
                                x.push(function() {
                                    f.clearForm(t.includeHidden);
                                }), !t.dataType && t.target)
                        ) {
                            var y = t.success || function() {};
                            x.push(function(r) {
                                var a = t.replaceTarget ? 'replaceWith' : 'html';
                                e(t.target)[a](r).each(y, arguments);
                            });
                        } else t.success && x.push(t.success);
                        if (
                            ((t.success = function(e, r, a) {
                                    for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
                                        x[i].apply(n, [e, r, a || f, f]);
                                }),
                                t.error)
                        ) {
                            var b = t.error;
                            t.error = function(e, r, a) {
                                var n = t.context || this;
                                b.apply(n, [e, r, a, f]);
                            };
                        }
                        if (t.complete) {
                            var T = t.complete;
                            t.complete = function(e, r) {
                                var a = t.context || this;
                                T.apply(a, [e, r, f]);
                            };
                        }
                        var j = e('input[type=file]:enabled', this).filter(function() {
                                return '' !== e(this).val();
                            }),
                            w = j.length > 0,
                            S = 'multipart/form-data',
                            D = f.attr('enctype') == S || f.attr('encoding') == S,
                            k = n.fileapi && n.formdata;
                        a('fileAPI :' + k);
                        var A,
                            L = (w || D) && !k;
                        t.iframe !== !1 && (t.iframe || L) ?
                            t.closeKeepAlive ?
                            e.get(t.closeKeepAlive, function() {
                                A = s(v);
                            }) :
                            (A = s(v)) :
                            (A = (w || D) && k ? o(v) : e.ajax(t)),
                            f.removeData('jqxhr').data('jqxhr', A);
                        for (var E = 0; E < h.length; E++) h[E] = null;
                        return this.trigger('form-submit-notify', [this, t]), this;
                    }),
                    (e.fn.ajaxForm = function(n) {
                        if (
                            ((n = n || {}),
                                (n.delegation = n.delegation && e.isFunction(e.fn.on)), !n.delegation && 0 === this.length)
                        ) {
                            var i = { s: this.selector, c: this.context };
                            return !e.isReady && i.s ?
                                (a('DOM not ready, queuing ajaxForm'),
                                    e(function() {
                                        e(i.s, i.c).ajaxForm(n);
                                    }),
                                    this) :
                                (a(
                                        'terminating; zero elements found by selector' +
                                        (e.isReady ? '' : ' (DOM not ready)')
                                    ),
                                    this);
                        }
                        return n.delegation ?
                            (e(document)
                                .off('submit.form-plugin', this.selector, t)
                                .off('click.form-plugin', this.selector, r)
                                .on('submit.form-plugin', this.selector, n, t)
                                .on('click.form-plugin', this.selector, n, r),
                                this) :
                            this.ajaxFormUnbind()
                            .bind('submit.form-plugin', n, t)
                            .bind('click.form-plugin', n, r);
                    }),
                    (e.fn.ajaxFormUnbind = function() {
                        return this.unbind('submit.form-plugin click.form-plugin');
                    }),
                    (e.fn.formToArray = function(t, r) {
                        var a = [];
                        if (0 === this.length) return a;
                        var i,
                            o = this[0],
                            s = this.attr('id'),
                            u = t ? o.getElementsByTagName('*') : o.elements;
                        if (
                            (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
                                s &&
                                ((i = e(':input[form="' + s + '"]').get()),
                                    i.length && (u = (u || []).concat(i))), !u || !u.length)
                        )
                            return a;
                        var c, l, f, m, d, p, h;
                        for (c = 0, p = u.length; p > c; c++)
                            if (((d = u[c]), (f = d.name), f && !d.disabled))
                                if (t && o.clk && 'image' == d.type)
                                    o.clk == d &&
                                    (a.push({ name: f, value: e(d).val(), type: d.type }),
                                        a.push({ name: f + '.x', value: o.clk_x }, { name: f + '.y', value: o.clk_y }));
                                else if (((m = e.fieldValue(d, !0)), m && m.constructor == Array))
                            for (r && r.push(d), l = 0, h = m.length; h > l; l++)
                                a.push({ name: f, value: m[l] });
                        else if (n.fileapi && 'file' == d.type) {
                            r && r.push(d);
                            var v = d.files;
                            if (v.length)
                                for (l = 0; l < v.length; l++)
                                    a.push({ name: f, value: v[l], type: d.type });
                            else a.push({ name: f, value: '', type: d.type });
                        } else
                            null !== m &&
                            'undefined' != typeof m &&
                            (r && r.push(d),
                                a.push({
                                    name: f,
                                    value: m,
                                    type: d.type,
                                    required: d.required,
                                }));
                        if (!t && o.clk) {
                            var g = e(o.clk),
                                x = g[0];
                            (f = x.name),
                            f &&
                                !x.disabled &&
                                'image' == x.type &&
                                (a.push({ name: f, value: g.val() }),
                                    a.push({ name: f + '.x', value: o.clk_x }, { name: f + '.y', value: o.clk_y }));
                        }
                        return a;
                    }),
                    (e.fn.formSerialize = function(t) {
                        return e.param(this.formToArray(t));
                    }),
                    (e.fn.fieldSerialize = function(t) {
                        var r = [];
                        return (
                            this.each(function() {
                                var a = this.name;
                                if (a) {
                                    var n = e.fieldValue(this, t);
                                    if (n && n.constructor == Array)
                                        for (var i = 0, o = n.length; o > i; i++)
                                            r.push({ name: a, value: n[i] });
                                    else
                                        null !== n &&
                                        'undefined' != typeof n &&
                                        r.push({ name: this.name, value: n });
                                }
                            }),
                            e.param(r)
                        );
                    }),
                    (e.fn.fieldValue = function(t) {
                        for (var r = [], a = 0, n = this.length; n > a; a++) {
                            var i = this[a],
                                o = e.fieldValue(i, t);
                            null === o ||
                                'undefined' == typeof o ||
                                (o.constructor == Array && !o.length) ||
                                (o.constructor == Array ? e.merge(r, o) : r.push(o));
                        }
                        return r;
                    }),
                    (e.fieldValue = function(t, r) {
                        var a = t.name,
                            n = t.type,
                            i = t.tagName.toLowerCase();
                        if (
                            (void 0 === r && (r = !0),
                                r &&
                                (!a ||
                                    t.disabled ||
                                    'reset' == n ||
                                    'button' == n ||
                                    (('checkbox' == n || 'radio' == n) && !t.checked) ||
                                    (('submit' == n || 'image' == n) && t.form && t.form.clk != t) ||
                                    ('select' == i && -1 == t.selectedIndex)))
                        )
                            return null;
                        if ('select' == i) {
                            var o = t.selectedIndex;
                            if (0 > o) return null;
                            for (
                                var s = [],
                                    u = t.options,
                                    c = 'select-one' == n,
                                    l = c ? o + 1 : u.length,
                                    f = c ? o : 0; l > f; f++
                            ) {
                                var m = u[f];
                                if (m.selected) {
                                    var d = m.value;
                                    if (
                                        (d ||
                                            (d =
                                                m.attributes &&
                                                m.attributes.value &&
                                                !m.attributes.value.specified ?
                                                m.text :
                                                m.value),
                                            c)
                                    )
                                        return d;
                                    s.push(d);
                                }
                            }
                            return s;
                        }
                        return e(t).val();
                    }),
                    (e.fn.clearForm = function(t) {
                        return this.each(function() {
                            e('input,select,textarea', this).clearFields(t);
                        });
                    }),
                    (e.fn.clearFields = e.fn.clearInputs = function(t) {
                        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                        return this.each(function() {
                            var a = this.type,
                                n = this.tagName.toLowerCase();
                            r.test(a) || 'textarea' == n ?
                                (this.value = '') :
                                'checkbox' == a || 'radio' == a ?
                                (this.checked = !1) :
                                'select' == n ?
                                (this.selectedIndex = -1) :
                                'file' == a ?
                                /MSIE/.test(navigator.userAgent) ?
                                e(this).replaceWith(e(this).clone(!0)) :
                                e(this).val('') :
                                t &&
                                ((t === !0 && /hidden/.test(a)) ||
                                    ('string' == typeof t && e(this).is(t))) &&
                                (this.value = '');
                        });
                    }),
                    (e.fn.resetForm = function() {
                        return this.each(function() {
                            ('function' == typeof this.reset ||
                                ('object' == typeof this.reset && !this.reset.nodeType)) &&
                            this.reset();
                        });
                    }),
                    (e.fn.enable = function(e) {
                        return (
                            void 0 === e && (e = !0),
                            this.each(function() {
                                this.disabled = !e;
                            })
                        );
                    }),
                    (e.fn.selected = function(t) {
                        return (
                            void 0 === t && (t = !0),
                            this.each(function() {
                                var r = this.type;
                                if ('checkbox' == r || 'radio' == r) this.checked = t;
                                else if ('option' == this.tagName.toLowerCase()) {
                                    var a = e(this).parent('select');
                                    t &&
                                        a[0] &&
                                        'select-one' == a[0].type &&
                                        a.find('option').selected(!1),
                                        (this.selected = t);
                                }
                            })
                        );
                    }),
                    (e.fn.ajaxSubmit.debug = !1); >>>
                    >>>
                    >
                    05 b47aa87e6f681fa1b31bb320b4a427bc89ca32
                });

            /*! jQuery Validation Plugin - v1.12.0 - 4/1/2014
             * http://jqueryvalidation.org/
             * Copyright (c) 2014 JÃƒÂ¶rn Zaefferer; Licensed MIT */
            <<
            <<
            <<
            <
            HEAD
                ! function(a) {
                    a.extend(a.fn, {
                        validate: function(b) {
                            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                            var c = a.data(this[0], "validator");
                            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) { c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0) }), this.submit(function(b) {
                                function d() { var d; return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0 }
                                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                            })), c)
                        },
                        valid: function() { var b, c; return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() { b = c.element(this) && b })), b },
                        removeAttrs: function(b) {
                            var c = {},
                                d = this;
                            return a.each(b.split(/\s/), function(a, b) { c[b] = d.attr(b), d.removeAttr(b) }), c
                        },
                        rules: function(b, c) {
                            var d, e, f, g, h, i, j = this[0];
                            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                                case "add":
                                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                                    break;
                                case "remove":
                                    return c ? (i = {}, a.each(c.split(/\s/), function(b, c) { i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required") }), i) : (delete e[j.name], f)
                            }
                            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g
                        }
                    }), a.extend(a.expr[":"], { blank: function(b) { return !a.trim("" + a(b).val()) }, filled: function(b) { return !!a.trim("" + a(b).val()) }, unchecked: function(b) { return !a(b).prop("checked") } }), a.validator = function(b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function(b, c) { return 1 === arguments.length ? function() { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) { b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() { return c }) }), b) }, a.extend(a.validator, {
                        defaults: {
                            messages: {},
                            groups: {},
                            rules: {},
                            errorClass: "error",
                            validClass: "valid",
                            errorElement: "label",
                            focusInvalid: !0,
                            errorContainer: a([]),
                            errorLabelContainer: a([]),
                            onsubmit: !0,
                            ignore: ":hidden",
                            ignoreTitle: !1,
                            onfocusin: function(a) { this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide()) },
                            onfocusout: function(a) { this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a) },
                            onkeyup: function(a, b) {
                                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
                            },
                            onclick: function(a) { a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode) },
                            highlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d) },
                            unhighlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d) }
                        },
                        setDefaults: function(b) { a.extend(a.validator.defaults, b) },
                        messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.") },
                        autoCreateRanges: !1,
                        prototype: {
                            init: function() {
                                function b(b) {
                                    var c = a.data(this[0].form, "validator"),
                                        d = "on" + b.type.replace(/^validate/, ""),
                                        e = c.settings;
                                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                                }
                                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                                var c, d = this.groups = {};
                                a.each(this.settings.groups, function(b, c) { "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) { d[c] = b }) }), c = this.settings.rules, a.each(c, function(b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                            },
                            form: function() { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
                            checkForm: function() { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]); return this.valid() },
                            element: function(b) {
                                var c = this.clean(b),
                                    d = this.validationTargetFor(c),
                                    e = !0;
                                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
                            },
                            showErrors: function(b) {
                                if (b) {
                                    a.extend(this.errorMap, b), this.errorList = [];
                                    for (var c in b) this.errorList.push({ message: b[c], element: this.findByName(c)[0] });
                                    this.successList = a.grep(this.successList, function(a) { return !(a.name in b) })
                                }
                                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                            },
                            resetForm: function() { a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid") },
                            numberOfInvalids: function() { return this.objectLength(this.invalid) },
                            objectLength: function(a) { var b, c = 0; for (b in a) c++; return c },
                            hideErrors: function() { this.addWrapper(this.toHide).hide() },
                            valid: function() { return 0 === this.size() },
                            size: function() { return this.errorList.length },
                            focusInvalid: function() { if (this.settings.focusInvalid) try { a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (b) {} },
                            findLastActive: function() { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function(a) { return a.element.name === b.name }).length && b },
                            elements: function() {
                                var b = this,
                                    c = {};
                                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() { return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0) })
                            },
                            clean: function(b) { return a(b)[0] },
                            errors: function() { var b = this.settings.errorClass.split(" ").join("."); return a(this.settings.errorElement + "." + b, this.errorContext) },
                            reset: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]) },
                            prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) },
                            prepareElement: function(a) { this.reset(), this.toHide = this.errorsFor(a) },
                            elementValue: function(b) {
                                var c, d = a(b),
                                    e = d.attr("type");
                                return "radio" === e || "checkbox" === e ? a("input[name='" + d.attr("name") + "']:checked").val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
                            },
                            check: function(b) {
                                b = this.validationTargetFor(this.clean(b));
                                var c, d, e, f = a(b).rules(),
                                    g = a.map(f, function(a, b) { return b }).length,
                                    h = !1,
                                    i = this.elementValue(b);
                                for (d in f) { e = { method: d, parameters: f[d] }; try { if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) { h = !0; continue } if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (j) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j } }
                                if (!h) return this.objectLength(f) && this.successList.push(b), !0
                            },
                            customDataMessage: function(b, c) { return a(b).data("msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg") },
                            customMessage: function(a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String ? c : c[b]) },
                            findDefined: function() {
                                for (var a = 0; a < arguments.length; a++)
                                    if (void 0 !== arguments[a]) return arguments[a];
                                return void 0
                            },
                            defaultMessage: function(b, c) { return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>") },
                            formatAndAdd: function(b, c) {
                                var d = this.defaultMessage(b, c.method),
                                    e = /\$?\{(\d+)\}/g;
                                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({ message: d, element: b, method: c.method }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                            },
                            addWrapper: function(a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a },
                            defaultShowErrors: function() {
                                var a, b, c;
                                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                                if (this.settings.unhighlight)
                                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                            },
                            validElements: function() { return this.currentElements.not(this.invalidElements()) },
                            invalidElements: function() { return a(this.errorList).map(function() { return this.element }) },
                            showLabel: function(b, c) {
                                var d = this.errorsFor(b);
                                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
                            },
                            errorsFor: function(b) { var c = this.idOrName(b); return this.errors().filter(function() { return a(this).attr("for") === c }) },
                            idOrName: function(a) { return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name) },
                            validationTargetFor: function(a) { return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a },
                            checkable: function(a) { return /radio|checkbox/i.test(a.type) },
                            findByName: function(b) { return a(this.currentForm).find("[name='" + b + "']") },
                            getLength: function(b, c) {
                                switch (c.nodeName.toLowerCase()) {
                                    case "select":
                                        return a("option:selected", c).length;
                                    case "input":
                                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                                }
                                return b.length
                            },
                            depend: function(a, b) { return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0 },
                            dependTypes: { "boolean": function(a) { return a }, string: function(b, c) { return !!a(b, c.form).length }, "function": function(a, b) { return a(b) } },
                            optional: function(b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch" },
                            startRequest: function(a) { this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0) },
                            stopRequest: function(b, c) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
                            previousValue: function(b) { return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, "remote") }) }
                        },
                        classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
                        addClassRules: function(b, c) { b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b) },
                        classRules: function(b) {
                            var c = {},
                                d = a(b).attr("class");
                            return d && a.each(d.split(" "), function() { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c
                        },
                        attributeRules: function(b) {
                            var c, d, e = {},
                                f = a(b),
                                g = b.getAttribute("type");
                            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
                            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
                        },
                        dataRules: function(b) {
                            var c, d, e = {},
                                f = a(b);
                            for (c in a.validator.methods) d = f.data("rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
                            return e
                        },
                        staticRules: function(b) {
                            var c = {},
                                d = a.data(b.form, "validator");
                            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
                        },
                        normalizeRules: function(b, c) {
                            return a.each(b, function(d, e) {
                                if (e === !1) return void delete b[d];
                                if (e.param || e.depends) {
                                    var f = !0;
                                    switch (typeof e.depends) {
                                        case "string":
                                            f = !!a(e.depends, c.form).length;
                                            break;
                                        case "function":
                                            f = e.depends.call(c, c)
                                    }
                                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                                }
                            }), a.each(b, function(d, e) { b[d] = a.isFunction(e) ? e(c) : e }), a.each(["minlength", "maxlength"], function() { b[this] && (b[this] = Number(b[this])) }), a.each(["rangelength", "range"], function() {
                                var c;
                                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
                        },
                        normalizeRule: function(b) {
                            if ("string" == typeof b) {
                                var c = {};
                                a.each(b.split(/\s/), function() { c[this] = !0 }), b = c
                            }
                            return b
                        },
                        addMethod: function(b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) },
                        methods: {
                            required: function(b, c, d) { if (!this.depend(d, c)) return "dependency-mismatch"; if ("select" === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length > 0 } return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0 },
                            email: function(a, b) { return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a) },
                            url: function(a, b) { return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a) },
                            date: function(a, b) { return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString()) },
                            dateISO: function(a, b) { return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a) },
                            number: function(a, b) { return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a) },
                            digits: function(a, b) { return this.optional(b) || /^\d+$/.test(a) },
                            creditcard: function(a, b) {
                                if (this.optional(b)) return "dependency-mismatch";
                                if (/[^0-9 \-]+/.test(a)) return !1;
                                var c, d, e = 0,
                                    f = 0,
                                    g = !1;
                                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                                return e % 10 === 0
                            },
                            minlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c); return this.optional(c) || e >= d },
                            maxlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c); return this.optional(c) || d >= e },
                            rangelength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c); return this.optional(c) || e >= d[0] && e <= d[1] },
                            min: function(a, b, c) { return this.optional(b) || a >= c },
                            max: function(a, b, c) { return this.optional(b) || c >= a },
                            range: function(a, b, c) { return this.optional(b) || a >= c[0] && a <= c[1] },
                            equalTo: function(b, c, d) { var e = a(d); return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() { a(c).valid() }), b === e.val() },
                            remote: function(b, c, d) {
                                if (this.optional(c)) return "dependency-mismatch";
                                var e, f, g = this.previousValue(c);
                                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && { url: d } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                                    url: d,
                                    mode: "abort",
                                    port: "validate" + c.name,
                                    dataType: "json",
                                    data: f,
                                    context: e.currentForm,
                                    success: function(d) {
                                        var f, h, i, j = d === !0 || "true" === d;
                                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                                    }
                                }, d)), "pending")
                            }
                        }
                    }), a.format = function() { throw "$.format has been deprecated. Please use $.validator.format instead." }
                }(jQuery),
                function(a) {
                    var b, c = {};
                    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) { var e = a.port; "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d) }) : (b = a.ajax, a.ajax = function(d) {
                        var e = ("mode" in d ? d : a.ajaxSettings).mode,
                            f = ("port" in d ? d : a.ajaxSettings).port;
                        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
                    })
                }(jQuery),
                function(a) { a.extend(a.fn, { validateDelegate: function(b, c, d) { return this.bind(c, function(c) { var e = a(c.target); return e.is(b) ? d.apply(e, arguments) : void 0 }) } }) }(jQuery);

            // ADDITIONAL JQUERY VALIDATE METHODS
            (function($) {
                // Validate a multifield birthday
                $.validator.addMethod("mc_birthday", function(date, element, grouping_class) {
                    var isValid = false;
                    var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
                    if ($fields.filter(':filled').length == 0 && this.optional(element)) {
                        isValid = true; // None have been filled out, so no error	
                    } else {
                        var dateArray = new Array();
                        dateArray['month'] = $fields.filter("input[name*='[month]']").val();
                        dateArray['day'] = $fields.filter("input[name*='[day]']").val();

                        // correct month value
                        dateArray['month'] = dateArray['month'] - 1;

                        var testDate = new Date(1970, dateArray['month'], dateArray['day']);
                        if (testDate.getDate() != dateArray['day'] || testDate.getMonth() != dateArray['month']) {
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                    }
                    return isValid;
                }, "Please enter a valid month and day.");
                // Validate a multifield date
                $.validator.addMethod("mc_date", function(date, element, grouping_class) {
                    var isValid = false;
                    var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
                    if ($fields.filter(':filled').length == 0 && this.optional(element)) {
                        isValid = true; // None have been filled out, so no error	
                    } else {
                        var dateArray = new Array();
                        dateArray['month'] = $fields.filter("input[name*='[month]']").val();
                        dateArray['day'] = $fields.filter("input[name*='[day]']").val();
                        dateArray['year'] = $fields.filter("input[name*='[year]']").val();

                        // correct month value
                        dateArray['month'] = dateArray['month'] - 1;

                        // correct year value
                        if (dateArray['year'].length < 4) {
                            dateArray['year'] = (parseInt(dateArray['year']) < 50) ? 2000 + parseInt(dateArray['year']) : 1900 + parseInt(dateArray['year']);
                        }

                        var testDate = new Date(dateArray['year'], dateArray['month'], dateArray['day']);
                        if (testDate.getDate() != dateArray['day'] || testDate.getMonth() != dateArray['month'] || testDate.getFullYear() != dateArray['year']) {
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                    }
                    return isValid;
                }, "Please enter a valid date");

                // Validate a multifield phone number
                $.validator.addMethod("mc_phone", function(phone_number, element, grouping_class) {
                    var isValid = false;
                    var $fields = $('input:filled:not(:hidden)', $(element).closest(grouping_class));
                    if ($fields.length == 0 && this.optional(element)) {
                        isValid = true; // None have been filled out, so no error	
                    } else {
                        phone_number = $fields.eq(0).val() + $fields.eq(1).val() + $fields.eq(2).val();
                        isValid = phone_number.length == 10 && phone_number.match(/[0-9]{9}/);
                    }
                    return isValid;
                }, "Please specify a valid phone number");

                $.validator.addMethod("skip_or_complete_group", function(value, element, grouping_class) {
                    var $fields = $('input:not(:hidden)', $(element).closest(grouping_class)),
                        $fieldsFirst = $fields.eq(0),
                        validator = $fieldsFirst.data("valid_skip") ? $fieldsFirst.data("valid_skip") : $.extend({}, this),
                        numberFilled = $fields.filter(function() {
                            return validator.elementValue(this);
                        }).length,
                        isValid = numberFilled === 0 || numberFilled === $fields.length;

                    // Store the cloned validator for future validation
                    $fieldsFirst.data("valid_skip", validator);

                    // If element isn't being validated, run each field's validation rules
                    if (!$(element).data("being_validated")) {
                        $fields.data("being_validated", true);
                        $fields.each(function() {
                            validator.element(this);
                        });
                        $fields.data("being_validated", false);
                    }
                    return isValid;
                }, $.validator.format("Please supply missing fields."));

                $.validator.addMethod("skip_or_fill_minimum", function(value, element, options) {
                    var $fields = $(options[1], element.form),
                        $fieldsFirst = $fields.eq(0),
                        validator = $fieldsFirst.data("valid_skip") ? $fieldsFirst.data("valid_skip") : $.extend({}, this),
                        numberFilled = $fields.filter(function() {
                            return validator.elementValue(this);
                        }).length,
                        isValid = numberFilled === 0 || numberFilled >= options[0];
                    console.log($fields.eq(0));
                    // Store the cloned validator for future validation
                    $fieldsFirst.data("valid_skip", validator);

                    // If element isn't being validated, run each skip_or_fill_minimum field's validation rules
                    if (!$(element).data("being_validated")) {
                        $fields.data("being_validated", true);
                        $fields.each(function() {
                            validator.element(this);
                        });
                        $fields.data("being_validated", false);
                    }
                    return isValid;
                }, $.validator.format("Please either skip these fields or fill at least {0} of them."));

                $.validator.addMethod("zipcodeUS", function(value, element) {
                    return this.optional(element) || /^\d{5}-\d{4}$|^\d{5}$/.test(value);
                }, "The specified US ZIP Code is invalid");

                $.validator.addMethod("mc_gdpr", function(value, element, grouping_class) {
                    //if gdpr is required the user must pick at least one option.
                    var $fields = $("input:not(:hidden)", $(element).closest(grouping_class));
                    return $fields.filter(":checked").length !== 0;
                }, "Please choose an option.");

            }(jQuery));

            // MC
            (function($) {
                var err_style = '';
                try {
                    err_style = mc_custom_error_style;
                } catch (e) {
                    err_style = '#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }';
                }
                var head = document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                    style.styleSheet.cssText = err_style;
                } else {
                    style.appendChild(document.createTextNode(err_style));
                }
                head.appendChild(style);

                // Expose extra mc form methods in global var
                window.mc = {
                    openPopup: function() {
                        $('#mc_embed_signup a.mc_embed_close').show();
                        setTimeout(function() { $('#mc_embed_signup').fadeIn(); }, mc.delayPopup);
                    },
                    closePopup: function() {
                        $('#mc_embed_signup').hide();
                        var now = new Date();
                        var expires_date = new Date(now.getTime() + 31536000000);
                        document.cookie = 'MCPopupClosed=yes;expires=' + expires_date.toGMTString() + ';path=/';
                    },
                    /**
                     *	Figure out if we should show the popup (if they've closed it before, don't show it.)
                     */
                    evalPopup: function() {
                        $('#mc_embed_signup').hide();
                        cks = document.cookie.split(';');
                        for (i = 0; i < cks.length; i++) {
                            parts = cks[i].split('=');
                            if (parts[0].indexOf('MCPopupClosed') != -1) mc.showPopup = false;
                        }
                        if (mc.showPopup) mc.openPopup();
                    },
                    /**
                     *	Grab the list subscribe url from the form action and make it work for an ajax post.
                     */
                    getAjaxSubmitUrl: function() {
                        var url = $("form#mc-embedded-subscribe-form").attr("action");
                        url = url.replace("/post?u=", "/post-json?u=");
                        url += "&c=?";
                        return url;
                    },
                    /**
                     *	Classify text inputs in the same field group as group for validation purposes.
                     *	All this does is tell jQueryValidation to create one error div for the group, rather
                     *	than one for each input. Primary use case is birthday and date fields, where we want 
                     *	to display errors about the inputs collectively, not individually.
                     *
                     *	NOTE: Grouping inputs will give you one error div, but you still need to specify where
                     *	that div should be displayed. By default, it's inserted after the first input with a
                     *	validation error, which can break up a set of inputs. Use the errorPlacement setting in
                     *	the validator to control error div placement.
                     */
                    getGroups: function() {
                        var groups = {};
                        $(".mc-field-group").each(function(index) {
                            var inputs = $(this).find("input:text:not(:hidden), input:checkbox:not(:hidden)");
                            if (inputs.length > 1) {
                                var mergeName = inputs.first().attr("name");
                                var fieldNames = $.map(inputs, function(f) { return f.name; });
                                groups[mergeName.substring(0, mergeName.indexOf("["))] = fieldNames.join(" ");
                            }
                        });
                        return groups;
                    },
                    /**
                     *	Check if a field is part of a multipart field
                     * 	(e.g., A date merge field is composed of individual inputs for month, day and year)
                     *	Used in jQuery validation onkeyup method to ensure that we don't evaluate a field
                     *  if a user hasn't reached the last input in a multipart field yet.
                     */
                    isMultiPartField: function(element) {
                        return ($('input:not(:hidden)', $(element).closest(".mc-field-group")).length > 1);
                    },
                    /**
                     *	Checks if the element is the last input in its fieldgroup. 
                     *	If the field is not the last in a set of inputs we don't want to validate it on certain events (onfocusout, onblur)
                     *	because the user might not be finished yet.
                     */
                    isTooEarly: function(element) {
                        var fields = $('input:not(:hidden)', $(element).closest(".mc-field-group"));
                        return ($(fields).eq(-1).attr('id') != $(element).attr('id'));
                    },
                    /**
                     *	Handle the error/success message after successful form submission.
                     *	Success messages are appended to #mce-success-response
                     *	Error messages are displayed with the invalid input when possible, or appended to #mce-error-response
                     */
                    mce_success_cb: function(resp) {

                        $('#mce-success-response').hide();
                        $('#mce-error-response').hide();

                        // On successful form submission, display a success message and reset the form
                        if (resp.result == "success") {
                            $('#mce-' + resp.result + '-response').show();
                            $('#mce-' + resp.result + '-response').html(resp.msg);
                            $('#mc-embedded-subscribe-form').each(function() {
                                this.reset();
                            });

                            // If the form has errors, display them, inline if possible, or appended to #mce-error-response
                        } else {
                            if (resp.msg === "captcha") {
                                var url = $("form#mc-embedded-subscribe-form").attr("action");
                                var parameters = $.param(resp.params);
                                url = url.split("?")[0];
                                url += "?";
                                url += parameters;
                                window.open(url);
                            };
                            // Example errors - Note: You only get one back at a time even if you submit several that are bad. 
                            // Error structure - number indicates the index of the merge field that was invalid, then details
                            // Object {result: "error", msg: "6 - Please enter the date"} 
                            // Object {result: "error", msg: "4 - Please enter a value"} 
                            // Object {result: "error", msg: "9 - Please enter a complete address"} 

                            // Try to parse the error into a field index and a message.
                            // On failure, just put the dump thing into in the msg variable.
                            var index = -1;
                            var msg;
                            try {
                                var parts = resp.msg.split(' - ', 2);
                                if (parts[1] == undefined) {
                                    msg = resp.msg;
                                } else {
                                    i = parseInt(parts[0]);
                                    if (i.toString() == parts[0]) {
                                        index = parts[0];
                                        msg = parts[1];
                                    } else {
                                        index = -1;
                                        msg = resp.msg;
                                    }
                                }
                            } catch (e) {
                                index = -1;
                                msg = resp.msg;
                            }

                            try {
                                // If index is -1 if means we don't have data on specifically which field was invalid.
                                // Just lump the error message into the generic response div.
                                if (index == -1) {
                                    $('#mce-' + resp.result + '-response').show();
                                    $('#mce-' + resp.result + '-response').html(msg);

                                } else {
                                    var fieldName = $("input[name*='" + fnames[index] + "']").attr('name'); // Make sure this exists (they haven't deleted the fnames array lookup)
                                    var data = {};
                                    data[fieldName] = msg;
                                    mc.mce_validator.showErrors(data);
                                }
                            } catch (e) {
                                $('#mce-' + resp.result + '-response').show();
                                $('#mce-' + resp.result + '-response').html(msg);
                            }
                        }
                    }
                }

                window.mc.mce_validator = $("#mc-embedded-subscribe-form").validate({

                    // Set error HTML: <div class="mce_inline_error"></div>
                    errorClass: "mce_inline_error",
                    errorElement: "div",

                    // Validate fields on keyup, focusout and blur. 
                    onkeyup: false,
                    onfocusout: function(element) {
                        if (!mc.isTooEarly(element)) {
                            $(element).valid();
                        }
                    },
                    onblur: function(element) {
                        if (!mc.isTooEarly(element)) {
                            $(element).valid();
                        }
                    },
                    // Grouping fields makes jQuery Validation display one error for all the fields in the group
                    // It doesn't have anything to do with how the fields are validated (together or separately), 
                    // it's strictly for visual display of errors
                    groups: mc.getGroups(),
                    // Place a field's inline error HTML just before the div.mc-field-group closing tag 
                    errorPlacement: function(error, element) {
                        element.closest('.mc-field-group').append(error);
                    },
                    // Submit the form via ajax (see: jQuery Form plugin)
                    submitHandler: function(form) {
                        $(form).ajaxSubmit(mc.ajaxOptions);
                    }
                });

                window.mc.ajaxOptions = {
                    url: mc.getAjaxSubmitUrl(),
                    type: 'GET',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    success: mc.mce_success_cb
                };

                // Custom validation methods for fields with certain css classes
                $.validator.addClassRules("birthday", { digits: true, mc_birthday: ".datefield" });
                $.validator.addClassRules("datepart", { digits: true, mc_date: ".datefield" });
                $.validator.addClassRules("phonepart", { digits: true, mc_phone: ".phonefield" });
                $.validator.addClassRules("gdpr", { mc_gdpr: ".gdprRequired" });

                // Evil Popup
                $('#mc_embed_signup a.mc_embed_close').click(function() {
                    mc.closePopup();
                });
                $(document).keydown(function(e) {
                    keycode = (e == null) ? event.keyCode : e.which;
                    if (keycode == 27 && typeof mc.showPopup != 'undefined') mc.closePopup();
                });

            }(jQuery)); ===
            ===
            = !(function(a) {
                a.extend(a.fn, {
                        validate: function(b) {
                            if (!this.length)
                                return void(
                                    b &&
                                    b.debug &&
                                    window.console &&
                                    console.warn("Nothing selected, can't validate, returning nothing.")
                                );
                            var c = a.data(this[0], 'validator');
                            return c ?
                                c :
                                (this.attr('novalidate', 'novalidate'),
                                    (c = new a.validator(b, this[0])),
                                    a.data(this[0], 'validator', c),
                                    c.settings.onsubmit &&
                                    (this.validateDelegate(':submit', 'click', function(b) {
                                            c.settings.submitHandler && (c.submitButton = b.target),
                                                a(b.target).hasClass('cancel') && (c.cancelSubmit = !0),
                                                void 0 !== a(b.target).attr('formnovalidate') &&
                                                (c.cancelSubmit = !0);
                                        }),
                                        this.submit(function(b) {
                                            function d() {
                                                var d;
                                                return c.settings.submitHandler ?
                                                    (c.submitButton &&
                                                        (d = a("<input type='hidden'/>")
                                                            .attr('name', c.submitButton.name)
                                                            .val(a(c.submitButton).val())
                                                            .appendTo(c.currentForm)),
                                                        c.settings.submitHandler.call(c, c.currentForm, b),
                                                        c.submitButton && d.remove(), !1) :
                                                    !0;
                                            }
                                            return (
                                                c.settings.debug && b.preventDefault(),
                                                c.cancelSubmit ?
                                                ((c.cancelSubmit = !1), d()) :
                                                c.form() ?
                                                c.pendingRequest ?
                                                ((c.formSubmitted = !0), !1) :
                                                d() :
                                                (c.focusInvalid(), !1)
                                            );
                                        })),
                                    c);
                        },
                        valid: function() {
                            var b, c;
                            return (
                                a(this[0]).is('form') ?
                                (b = this.validate().form()) :
                                ((b = !0),
                                    (c = a(this[0].form).validate()),
                                    this.each(function() {
                                        b = c.element(this) && b;
                                    })),
                                b
                            );
                        },
                        removeAttrs: function(b) {
                            var c = {},
                                d = this;
                            return (
                                a.each(b.split(/\s/), function(a, b) {
                                    (c[b] = d.attr(b)), d.removeAttr(b);
                                }),
                                c
                            );
                        },
                        rules: function(b, c) {
                            var d,
                                e,
                                f,
                                g,
                                h,
                                i,
                                j = this[0];
                            if (b)
                                switch (
                                    ((d = a.data(j.form, 'validator').settings),
                                        (e = d.rules),
                                        (f = a.validator.staticRules(j)),
                                        b)
                                ) {
                                    case 'add':
                                        a.extend(f, a.validator.normalizeRule(c)),
                                            delete f.messages,
                                            (e[j.name] = f),
                                            c.messages &&
                                            (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                                        break;
                                    case 'remove':
                                        return c ?
                                            ((i = {}),
                                                a.each(c.split(/\s/), function(b, c) {
                                                    (i[c] = f[c]),
                                                    delete f[c],
                                                        'required' === c && a(j).removeAttr('aria-required');
                                                }),
                                                i) :
                                            (delete e[j.name], f);
                                }
                            return (
                                (g = a.validator.normalizeRules(
                                    a.extend({},
                                        a.validator.classRules(j),
                                        a.validator.attributeRules(j),
                                        a.validator.dataRules(j),
                                        a.validator.staticRules(j)
                                    ),
                                    j
                                )),
                                g.required &&
                                ((h = g.required),
                                    delete g.required,
                                    (g = a.extend({ required: h }, g)),
                                    a(j).attr('aria-required', 'true')),
                                g.remote &&
                                ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
                                g
                            );
                        },
                    }),
                    a.extend(a.expr[':'], {
                        blank: function(b) {
                            return !a.trim('' + a(b).val());
                        },
                        filled: function(b) {
                            return !!a.trim('' + a(b).val());
                        },
                        unchecked: function(b) {
                            return !a(b).prop('checked');
                        },
                    }),
                    (a.validator = function(b, c) {
                        (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
                        (this.currentForm = c),
                        this.init();
                    }),
                    (a.validator.format = function(b, c) {
                        return 1 === arguments.length ?

                            function() {
                                var c = a.makeArray(arguments);
                                return c.unshift(b), a.validator.format.apply(this, c);
                            } :
                            (arguments.length > 2 &&
                                c.constructor !== Array &&
                                (c = a.makeArray(arguments).slice(1)),
                                c.constructor !== Array && (c = [c]),
                                a.each(c, function(a, c) {
                                    b = b.replace(new RegExp('\\{' + a + '\\}', 'g'), function() {
                                        return c;
                                    });
                                }),
                                b);
                    }),
                    a.extend(a.validator, {
                        defaults: {
                            messages: {},
                            groups: {},
                            rules: {},
                            errorClass: 'error',
                            validClass: 'valid',
                            errorElement: 'label',
                            focusInvalid: !0,
                            errorContainer: a([]),
                            errorLabelContainer: a([]),
                            onsubmit: !0,
                            ignore: ':hidden',
                            ignoreTitle: !1,
                            onfocusin: function(a) {
                                (this.lastActive = a),
                                this.settings.focusCleanup &&
                                    !this.blockFocusCleanup &&
                                    (this.settings.unhighlight &&
                                        this.settings.unhighlight.call(
                                            this,
                                            a,
                                            this.settings.errorClass,
                                            this.settings.validClass
                                        ),
                                        this.addWrapper(this.errorsFor(a)).hide());
                            },
                            onfocusout: function(a) {
                                this.checkable(a) ||
                                    (!(a.name in this.submitted) && this.optional(a)) ||
                                    this.element(a);
                            },
                            onkeyup: function(a, b) {
                                (9 !== b.which || '' !== this.elementValue(a)) &&
                                (a.name in this.submitted || a === this.lastElement) &&
                                this.element(a);
                            },
                            onclick: function(a) {
                                a.name in this.submitted ?
                                    this.element(a) :
                                    a.parentNode.name in this.submitted && this.element(a.parentNode);
                            },
                            highlight: function(b, c, d) {
                                'radio' === b.type ?
                                    this.findByName(b.name).addClass(c).removeClass(d) :
                                    a(b).addClass(c).removeClass(d);
                            },
                            unhighlight: function(b, c, d) {
                                'radio' === b.type ?
                                    this.findByName(b.name).removeClass(c).addClass(d) :
                                    a(b).removeClass(c).addClass(d);
                            },
                        },
                        setDefaults: function(b) {
                            a.extend(a.validator.defaults, b);
                        },
                        messages: {
                            required: 'This field is required.',
                            remote: 'Please fix this field.',
                            email: 'Please enter a valid email address.',
                            url: 'Please enter a valid URL.',
                            date: 'Please enter a valid date.',
                            dateISO: 'Please enter a valid date (ISO).',
                            number: 'Please enter a valid number.',
                            digits: 'Please enter only digits.',
                            creditcard: 'Please enter a valid credit card number.',
                            equalTo: 'Please enter the same value again.',
                            maxlength: a.validator.format(
                                'Please enter no more than {0} characters.'
                            ),
                            minlength: a.validator.format('Please enter at least {0} characters.'),
                            rangelength: a.validator.format(
                                'Please enter a value between {0} and {1} characters long.'
                            ),
                            range: a.validator.format('Please enter a value between {0} and {1}.'),
                            max: a.validator.format(
                                'Please enter a value less than or equal to {0}.'
                            ),
                            min: a.validator.format(
                                'Please enter a value greater than or equal to {0}.'
                            ),
                        },
                        autoCreateRanges: !1,
                        prototype: {
                            init: function() {
                                function b(b) {
                                    var c = a.data(this[0].form, 'validator'),
                                        d = 'on' + b.type.replace(/^validate/, ''),
                                        e = c.settings;
                                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
                                }
                                (this.labelContainer = a(this.settings.errorLabelContainer)),
                                (this.errorContext =
                                    (this.labelContainer.length && this.labelContainer) ||
                                    a(this.currentForm)),
                                (this.containers = a(this.settings.errorContainer).add(
                                    this.settings.errorLabelContainer
                                )),
                                (this.submitted = {}),
                                (this.valueCache = {}),
                                (this.pendingRequest = 0),
                                (this.pending = {}),
                                (this.invalid = {}),
                                this.reset();
                                var c,
                                    d = (this.groups = {});
                                a.each(this.settings.groups, function(b, c) {
                                        'string' == typeof c && (c = c.split(/\s/)),
                                            a.each(c, function(a, c) {
                                                d[c] = b;
                                            });
                                    }),
                                    (c = this.settings.rules),
                                    a.each(c, function(b, d) {
                                        c[b] = a.validator.normalizeRule(d);
                                    }),
                                    a(this.currentForm)
                                    .validateDelegate(
                                        ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                                        'focusin focusout keyup',
                                        b
                                    )
                                    .validateDelegate(
                                        "[type='radio'], [type='checkbox'], select, option",
                                        'click',
                                        b
                                    ),
                                    this.settings.invalidHandler &&
                                    a(this.currentForm).bind(
                                        'invalid-form.validate',
                                        this.settings.invalidHandler
                                    ),
                                    a(this.currentForm)
                                    .find('[required], [data-rule-required], .required')
                                    .attr('aria-required', 'true');
                            },
                            form: function() {
                                return (
                                    this.checkForm(),
                                    a.extend(this.submitted, this.errorMap),
                                    (this.invalid = a.extend({}, this.errorMap)),
                                    this.valid() ||
                                    a(this.currentForm).triggerHandler('invalid-form', [this]),
                                    this.showErrors(),
                                    this.valid()
                                );
                            },
                            checkForm: function() {
                                this.prepareForm();
                                for (
                                    var a = 0, b = (this.currentElements = this.elements()); b[a]; a++
                                )
                                    this.check(b[a]);
                                return this.valid();
                            },
                            element: function(b) {
                                var c = this.clean(b),
                                    d = this.validationTargetFor(c),
                                    e = !0;
                                return (
                                    (this.lastElement = d),
                                    void 0 === d ?
                                    delete this.invalid[c.name] :
                                    (this.prepareElement(d),
                                        (this.currentElements = a(d)),
                                        (e = this.check(d) !== !1),
                                        e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
                                    a(b).attr('aria-invalid', !e),
                                    this.numberOfInvalids() ||
                                    (this.toHide = this.toHide.add(this.containers)),
                                    this.showErrors(),
                                    e
                                );
                            },
                            showErrors: function(b) {
                                if (b) {
                                    a.extend(this.errorMap, b), (this.errorList = []);
                                    for (var c in b)
                                        this.errorList.push({
                                            message: b[c],
                                            element: this.findByName(c)[0],
                                        });
                                    this.successList = a.grep(this.successList, function(a) {
                                        return !(a.name in b);
                                    });
                                }
                                this.settings.showErrors ?
                                    this.settings.showErrors.call(this, this.errorMap, this.errorList) :
                                    this.defaultShowErrors();
                            },
                            resetForm: function() {
                                a.fn.resetForm && a(this.currentForm).resetForm(),
                                    (this.submitted = {}),
                                    (this.lastElement = null),
                                    this.prepareForm(),
                                    this.hideErrors(),
                                    this.elements()
                                    .removeClass(this.settings.errorClass)
                                    .removeData('previousValue')
                                    .removeAttr('aria-invalid');
                            },
                            numberOfInvalids: function() {
                                return this.objectLength(this.invalid);
                            },
                            objectLength: function(a) {
                                var b,
                                    c = 0;
                                for (b in a) c++;
                                return c;
                            },
                            hideErrors: function() {
                                this.addWrapper(this.toHide).hide();
                            },
                            valid: function() {
                                return 0 === this.size();
                            },
                            size: function() {
                                return this.errorList.length;
                            },
                            focusInvalid: function() {
                                if (this.settings.focusInvalid)
                                    try {
                                        a(
                                                this.findLastActive() ||
                                                (this.errorList.length && this.errorList[0].element) || []
                                            )
                                            .filter(':visible')
                                            .focus()
                                            .trigger('focusin');
                                    } catch (b) {}
                            },
                            findLastActive: function() {
                                var b = this.lastActive;
                                return (
                                    b &&
                                    1 ===
                                    a.grep(this.errorList, function(a) {
                                        return a.element.name === b.name;
                                    }).length &&
                                    b
                                );
                            },
                            elements: function() {
                                var b = this,
                                    c = {};
                                return a(this.currentForm)
                                    .find('input, select, textarea')
                                    .not(':submit, :reset, :image, [disabled]')
                                    .not(this.settings.ignore)
                                    .filter(function() {
                                        return (!this.name &&
                                            b.settings.debug &&
                                            window.console &&
                                            console.error('%o has no name assigned', this),
                                            this.name in c || !b.objectLength(a(this).rules()) ?
                                            !1 :
                                            ((c[this.name] = !0), !0)
                                        );
                                    });
                            },
                            clean: function(b) {
                                return a(b)[0];
                            },
                            errors: function() {
                                var b = this.settings.errorClass.split(' ').join('.');
                                return a(this.settings.errorElement + '.' + b, this.errorContext);
                            },
                            reset: function() {
                                (this.successList = []),
                                (this.errorList = []),
                                (this.errorMap = {}),
                                (this.toShow = a([])),
                                (this.toHide = a([])),
                                (this.currentElements = a([]));
                            },
                            prepareForm: function() {
                                this.reset(), (this.toHide = this.errors().add(this.containers));
                            },
                            prepareElement: function(a) {
                                this.reset(), (this.toHide = this.errorsFor(a));
                            },
                            elementValue: function(b) {
                                var c,
                                    d = a(b),
                                    e = d.attr('type');
                                return 'radio' === e || 'checkbox' === e ?
                                    a("input[name='" + d.attr('name') + "']:checked").val() :
                                    ((c = d.val()), 'string' == typeof c ? c.replace(/\r/g, '') : c);
                            },
                            check: function(b) {
                                b = this.validationTargetFor(this.clean(b));
                                var c,
                                    d,
                                    e,
                                    f = a(b).rules(),
                                    g = a.map(f, function(a, b) {
                                        return b;
                                    }).length,
                                    h = !1,
                                    i = this.elementValue(b);
                                for (d in f) {
                                    e = { method: d, parameters: f[d] };
                                    try {
                                        if (
                                            ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                                                'dependency-mismatch' === c && 1 === g)
                                        ) {
                                            h = !0;
                                            continue;
                                        }
                                        if (((h = !1), 'pending' === c))
                                            return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                                        if (!c) return this.formatAndAdd(b, e), !1;
                                    } catch (j) {
                                        throw (
                                            (this.settings.debug &&
                                                window.console &&
                                                console.log(
                                                    'Exception occurred when checking element ' +
                                                    b.id +
                                                    ", check the '" +
                                                    e.method +
                                                    "' method.",
                                                    j
                                                ),
                                                j)
                                        );
                                    }
                                }
                                if (!h) return this.objectLength(f) && this.successList.push(b), !0;
                            },
                            customDataMessage: function(b, c) {
                                return (
                                    a(b).data(
                                        'msg' + c[0].toUpperCase() + c.substring(1).toLowerCase()
                                    ) || a(b).data('msg')
                                );
                            },
                            customMessage: function(a, b) {
                                var c = this.settings.messages[a];
                                return c && (c.constructor === String ? c : c[b]);
                            },
                            findDefined: function() {
                                for (var a = 0; a < arguments.length; a++)
                                    if (void 0 !== arguments[a]) return arguments[a];
                                return void 0;
                            },
                            defaultMessage: function(b, c) {
                                return this.findDefined(
                                    this.customMessage(b.name, c),
                                    this.customDataMessage(b, c),
                                    (!this.settings.ignoreTitle && b.title) || void 0,
                                    a.validator.messages[c],
                                    '<strong>Warning: No message defined for ' + b.name + '</strong>'
                                );
                            },
                            formatAndAdd: function(b, c) {
                                var d = this.defaultMessage(b, c.method),
                                    e = /\$?\{(\d+)\}/g;
                                'function' == typeof d
                                    ?
                                    (d = d.call(this, c.parameters, b)) :
                                    e.test(d) &&
                                    (d = a.validator.format(d.replace(e, '{$1}'), c.parameters)),
                                    this.errorList.push({ message: d, element: b, method: c.method }),
                                    (this.errorMap[b.name] = d),
                                    (this.submitted[b.name] = d);
                            },
                            addWrapper: function(a) {
                                return (
                                    this.settings.wrapper &&
                                    (a = a.add(a.parent(this.settings.wrapper))),
                                    a
                                );
                            },
                            defaultShowErrors: function() {
                                var a, b, c;
                                for (a = 0; this.errorList[a]; a++)
                                    (c = this.errorList[a]),
                                    this.settings.highlight &&
                                    this.settings.highlight.call(
                                        this,
                                        c.element,
                                        this.settings.errorClass,
                                        this.settings.validClass
                                    ),
                                    this.showLabel(c.element, c.message);
                                if (
                                    (this.errorList.length &&
                                        (this.toShow = this.toShow.add(this.containers)),
                                        this.settings.success)
                                )
                                    for (a = 0; this.successList[a]; a++)
                                        this.showLabel(this.successList[a]);
                                if (this.settings.unhighlight)
                                    for (a = 0, b = this.validElements(); b[a]; a++)
                                        this.settings.unhighlight.call(
                                            this,
                                            b[a],
                                            this.settings.errorClass,
                                            this.settings.validClass
                                        );
                                (this.toHide = this.toHide.not(this.toShow)),
                                this.hideErrors(),
                                    this.addWrapper(this.toShow).show();
                            },
                            validElements: function() {
                                return this.currentElements.not(this.invalidElements());
                            },
                            invalidElements: function() {
                                return a(this.errorList).map(function() {
                                    return this.element;
                                });
                            },
                            showLabel: function(b, c) {
                                var d = this.errorsFor(b);
                                d.length ?
                                    (d
                                        .removeClass(this.settings.validClass)
                                        .addClass(this.settings.errorClass),
                                        d.html(c)) :
                                    ((d = a('<' + this.settings.errorElement + '>')
                                            .attr('for', this.idOrName(b))
                                            .addClass(this.settings.errorClass)
                                            .html(c || '')),
                                        this.settings.wrapper &&
                                        (d = d
                                            .hide()
                                            .show()
                                            .wrap('<' + this.settings.wrapper + '/>')
                                            .parent()),
                                        this.labelContainer.append(d).length ||
                                        (this.settings.errorPlacement ?
                                            this.settings.errorPlacement(d, a(b)) :
                                            d.insertAfter(b))), !c &&
                                    this.settings.success &&
                                    (d.text(''),
                                        'string' == typeof this.settings.success ?
                                        d.addClass(this.settings.success) :
                                        this.settings.success(d, b)),
                                    (this.toShow = this.toShow.add(d));
                            },
                            errorsFor: function(b) {
                                var c = this.idOrName(b);
                                return this.errors().filter(function() {
                                    return a(this).attr('for') === c;
                                });
                            },
                            idOrName: function(a) {
                                return (
                                    this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                                );
                            },
                            validationTargetFor: function(a) {
                                return (
                                    this.checkable(a) &&
                                    (a = this.findByName(a.name).not(this.settings.ignore)[0]),
                                    a
                                );
                            },
                            checkable: function(a) {
                                return /radio|checkbox/i.test(a.type);
                            },
                            findByName: function(b) {
                                return a(this.currentForm).find("[name='" + b + "']");
                            },
                            getLength: function(b, c) {
                                switch (c.nodeName.toLowerCase()) {
                                    case 'select':
                                        return a('option:selected', c).length;
                                    case 'input':
                                        if (this.checkable(c))
                                            return this.findByName(c.name).filter(':checked').length;
                                }
                                return b.length;
                            },
                            depend: function(a, b) {
                                return this.dependTypes[typeof a] ?
                                    this.dependTypes[typeof a](a, b) :
                                    !0;
                            },
                            dependTypes: {
                                boolean: function(a) {
                                    return a;
                                },
                                string: function(b, c) {
                                    return !!a(b, c.form).length;
                                },
                                function: function(a, b) {
                                    return a(b);
                                },
                            },
                            optional: function(b) {
                                var c = this.elementValue(b);
                                return (!a.validator.methods.required.call(this, c, b) &&
                                    'dependency-mismatch'
                                );
                            },
                            startRequest: function(a) {
                                this.pending[a.name] ||
                                    (this.pendingRequest++, (this.pending[a.name] = !0));
                            },
                            stopRequest: function(b, c) {
                                this.pendingRequest--,
                                    this.pendingRequest < 0 && (this.pendingRequest = 0),
                                    delete this.pending[b.name],
                                    c && 0 === this.pendingRequest && this.formSubmitted && this.form() ?
                                    (a(this.currentForm).submit(), (this.formSubmitted = !1)) :
                                    !c &&
                                    0 === this.pendingRequest &&
                                    this.formSubmitted &&
                                    (a(this.currentForm).triggerHandler('invalid-form', [this]),
                                        (this.formSubmitted = !1));
                            },
                            previousValue: function(b) {
                                return (
                                    a.data(b, 'previousValue') ||
                                    a.data(b, 'previousValue', {
                                        old: null,
                                        valid: !0,
                                        message: this.defaultMessage(b, 'remote'),
                                    })
                                );
                            },
                        },
                        classRuleSettings: {
                            required: { required: !0 },
                            email: { email: !0 },
                            url: { url: !0 },
                            date: { date: !0 },
                            dateISO: { dateISO: !0 },
                            number: { number: !0 },
                            digits: { digits: !0 },
                            creditcard: { creditcard: !0 },
                        },
                        addClassRules: function(b, c) {
                            b.constructor === String ?
                                (this.classRuleSettings[b] = c) :
                                a.extend(this.classRuleSettings, b);
                        },
                        classRules: function(b) {
                            var c = {},
                                d = a(b).attr('class');
                            return (
                                d &&
                                a.each(d.split(' '), function() {
                                    this in a.validator.classRuleSettings &&
                                        a.extend(c, a.validator.classRuleSettings[this]);
                                }),
                                c
                            );
                        },
                        attributeRules: function(b) {
                            var c,
                                d,
                                e = {},
                                f = a(b),
                                g = b.getAttribute('type');
                            for (c in a.validator.methods)
                                'required' === c ?
                                ((d = b.getAttribute(c)), '' === d && (d = !0), (d = !!d)) :
                                (d = f.attr(c)),
                                /min|max/.test(c) &&
                                (null === g || /number|range|text/.test(g)) &&
                                (d = Number(d)),
                                d || 0 === d ? (e[c] = d) : g === c && 'range' !== g && (e[c] = !0);
                            return (
                                e.maxlength &&
                                /-1|2147483647|524288/.test(e.maxlength) &&
                                delete e.maxlength,
                                e
                            );
                        },
                        dataRules: function(b) {
                            var c,
                                d,
                                e = {},
                                f = a(b);
                            for (c in a.validator.methods)
                                (d = f.data(
                                    'rule' + c[0].toUpperCase() + c.substring(1).toLowerCase()
                                )),
                                void 0 !== d && (e[c] = d);
                            return e;
                        },
                        staticRules: function(b) {
                            var c = {},
                                d = a.data(b.form, 'validator');
                            return (
                                d.settings.rules &&
                                (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
                                c
                            );
                        },
                        normalizeRules: function(b, c) {
                            return (
                                a.each(b, function(d, e) {
                                    if (e === !1) return void delete b[d];
                                    if (e.param || e.depends) {
                                        var f = !0;
                                        switch (typeof e.depends) {
                                            case 'string':
                                                f = !!a(e.depends, c.form).length;
                                                break;
                                            case 'function':
                                                f = e.depends.call(c, c);
                                        }
                                        f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
                                    }
                                }),
                                a.each(b, function(d, e) {
                                    b[d] = a.isFunction(e) ? e(c) : e;
                                }),
                                a.each(['minlength', 'maxlength'], function() {
                                    b[this] && (b[this] = Number(b[this]));
                                }),
                                a.each(['rangelength', 'range'], function() {
                                    var c;
                                    b[this] &&
                                        (a.isArray(b[this]) ?
                                            (b[this] = [Number(b[this][0]), Number(b[this][1])]) :
                                            'string' == typeof b[this] &&
                                            ((c = b[this].split(/[\s,]+/)),
                                                (b[this] = [Number(c[0]), Number(c[1])])));
                                }),
                                a.validator.autoCreateRanges &&
                                (b.min &&
                                    b.max &&
                                    ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                                    b.minlength &&
                                    b.maxlength &&
                                    ((b.rangelength = [b.minlength, b.maxlength]),
                                        delete b.minlength,
                                        delete b.maxlength)),
                                b
                            );
                        },
                        normalizeRule: function(b) {
                            if ('string' == typeof b) {
                                var c = {};
                                a.each(b.split(/\s/), function() {
                                        c[this] = !0;
                                    }),
                                    (b = c);
                            }
                            return b;
                        },
                        addMethod: function(b, c, d) {
                            (a.validator.methods[b] = c),
                            (a.validator.messages[b] =
                                void 0 !== d ? d : a.validator.messages[b]),
                            c.length < 3 &&
                                a.validator.addClassRules(b, a.validator.normalizeRule(b));
                        },
                        methods: {
                            required: function(b, c, d) {
                                if (!this.depend(d, c)) return 'dependency-mismatch';
                                if ('select' === c.nodeName.toLowerCase()) {
                                    var e = a(c).val();
                                    return e && e.length > 0;
                                }
                                return this.checkable(c) ?
                                    this.getLength(b, c) > 0 :
                                    a.trim(b).length > 0;
                            },
                            email: function(a, b) {
                                return (
                                    this.optional(b) ||
                                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                                        a
                                    )
                                );
                            },
                            url: function(a, b) {
                                return (
                                    this.optional(b) ||
                                    /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                                        a
                                    )
                                );
                            },
                            date: function(a, b) {
                                return (
                                    this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
                                );
                            },
                            dateISO: function(a, b) {
                                return (
                                    this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
                                );
                            },
                            number: function(a, b) {
                                return (
                                    this.optional(b) ||
                                    /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                                );
                            },
                            digits: function(a, b) {
                                return this.optional(b) || /^\d+$/.test(a);
                            },
                            creditcard: function(a, b) {
                                if (this.optional(b)) return 'dependency-mismatch';
                                if (/[^0-9 \-]+/.test(a)) return !1;
                                var c,
                                    d,
                                    e = 0,
                                    f = 0,
                                    g = !1;
                                if (((a = a.replace(/\D/g, '')), a.length < 13 || a.length > 19))
                                    return !1;
                                for (c = a.length - 1; c >= 0; c--)
                                    (d = a.charAt(c)),
                                    (f = parseInt(d, 10)),
                                    g && (f *= 2) > 9 && (f -= 9),
                                    (e += f),
                                    (g = !g);
                                return e % 10 === 0;
                            },
                            minlength: function(b, c, d) {
                                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                                return this.optional(c) || e >= d;
                            },
                            maxlength: function(b, c, d) {
                                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                                return this.optional(c) || d >= e;
                            },
                            rangelength: function(b, c, d) {
                                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                                return this.optional(c) || (e >= d[0] && e <= d[1]);
                            },
                            min: function(a, b, c) {
                                return this.optional(b) || a >= c;
                            },
                            max: function(a, b, c) {
                                return this.optional(b) || c >= a;
                            },
                            range: function(a, b, c) {
                                return this.optional(b) || (a >= c[0] && a <= c[1]);
                            },
                            equalTo: function(b, c, d) {
                                var e = a(d);
                                return (
                                    this.settings.onfocusout &&
                                    e
                                    .unbind('.validate-equalTo')
                                    .bind('blur.validate-equalTo', function() {
                                        a(c).valid();
                                    }),
                                    b === e.val()
                                );
                            },
                            remote: function(b, c, d) {
                                if (this.optional(c)) return 'dependency-mismatch';
                                var e,
                                    f,
                                    g = this.previousValue(c);
                                return (
                                    this.settings.messages[c.name] ||
                                    (this.settings.messages[c.name] = {}),
                                    (g.originalMessage = this.settings.messages[c.name].remote),
                                    (this.settings.messages[c.name].remote = g.message),
                                    (d = ('string' == typeof d && { url: d }) || d),
                                    g.old === b ?
                                    g.valid :
                                    ((g.old = b),
                                        (e = this),
                                        this.startRequest(c),
                                        (f = {}),
                                        (f[c.name] = b),
                                        a.ajax(
                                            a.extend(!0, {
                                                    url: d,
                                                    mode: 'abort',
                                                    port: 'validate' + c.name,
                                                    dataType: 'json',
                                                    data: f,
                                                    context: e.currentForm,
                                                    success: function(d) {
                                                        var f,
                                                            h,
                                                            i,
                                                            j = d === !0 || 'true' === d;
                                                        (e.settings.messages[c.name].remote =
                                                            g.originalMessage),
                                                        j
                                                            ?
                                                            ((i = e.formSubmitted),
                                                                e.prepareElement(c),
                                                                (e.formSubmitted = i),
                                                                e.successList.push(c),
                                                                delete e.invalid[c.name],
                                                                e.showErrors()) :
                                                            ((f = {}),
                                                                (h = d || e.defaultMessage(c, 'remote')),
                                                                (f[c.name] = g.message = a.isFunction(h) ?
                                                                    h(b) :
                                                                    h),
                                                                (e.invalid[c.name] = !0),
                                                                e.showErrors(f)),
                                                            (g.valid = j),
                                                            e.stopRequest(c, j);
                                                    },
                                                },
                                                d
                                            )
                                        ),
                                        'pending')
                                );
                            },
                        },
                    }),
                    (a.format = function() {
                        throw '$.format has been deprecated. Please use $.validator.format instead.';
                    });
            })(jQuery),
            (function(a) {
                var b,
                    c = {};
                a.ajaxPrefilter ?
                    a.ajaxPrefilter(function(a, b, d) {
                        var e = a.port;
                        'abort' === a.mode && (c[e] && c[e].abort(), (c[e] = d));
                    }) :
                    ((b = a.ajax),
                        (a.ajax = function(d) {
                            var e = ('mode' in d ? d : a.ajaxSettings).mode,
                                f = ('port' in d ? d : a.ajaxSettings).port;
                            return 'abort' === e ?
                                (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f]) :
                                b.apply(this, arguments);
                        }));
            })(jQuery),
            (function(a) {
                a.extend(a.fn, {
                    validateDelegate: function(b, c, d) {
                        return this.bind(c, function(c) {
                            var e = a(c.target);
                            return e.is(b) ? d.apply(e, arguments) : void 0;
                        });
                    },
                });
            })(jQuery);

            // ADDITIONAL JQUERY VALIDATE METHODS
            (function($) {
                // Validate a multifield birthday
                $.validator.addMethod(
                    'mc_birthday',
                    function(date, element, grouping_class) {
                        var isValid = false;
                        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
                        if ($fields.filter(':filled').length == 0 && this.optional(element)) {
                            isValid = true; // None have been filled out, so no error
                        } else {
                            var dateArray = new Array();
                            dateArray['month'] = $fields.filter("input[name*='[month]']").val();
                            dateArray['day'] = $fields.filter("input[name*='[day]']").val();

                            // correct month value
                            dateArray['month'] = dateArray['month'] - 1;

                            var testDate = new Date(1970, dateArray['month'], dateArray['day']);
                            if (
                                testDate.getDate() != dateArray['day'] ||
                                testDate.getMonth() != dateArray['month']
                            ) {
                                isValid = false;
                            } else {
                                isValid = true;
                            }
                        }
                        return isValid;
                    },
                    'Please enter a valid month and day.'
                );
                // Validate a multifield date
                $.validator.addMethod(
                    'mc_date',
                    function(date, element, grouping_class) {
                        var isValid = false;
                        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
                        if ($fields.filter(':filled').length == 0 && this.optional(element)) {
                            isValid = true; // None have been filled out, so no error
                        } else {
                            var dateArray = new Array();
                            dateArray['month'] = $fields.filter("input[name*='[month]']").val();
                            dateArray['day'] = $fields.filter("input[name*='[day]']").val();
                            dateArray['year'] = $fields.filter("input[name*='[year]']").val();

                            // correct month value
                            dateArray['month'] = dateArray['month'] - 1;

                            // correct year value
                            if (dateArray['year'].length < 4) {
                                dateArray['year'] =
                                    parseInt(dateArray['year']) < 50 ?
                                    2000 + parseInt(dateArray['year']) :
                                    1900 + parseInt(dateArray['year']);
                            }

                            var testDate = new Date(
                                dateArray['year'],
                                dateArray['month'],
                                dateArray['day']
                            );
                            if (
                                testDate.getDate() != dateArray['day'] ||
                                testDate.getMonth() != dateArray['month'] ||
                                testDate.getFullYear() != dateArray['year']
                            ) {
                                isValid = false;
                            } else {
                                isValid = true;
                            }
                        }
                        return isValid;
                    },
                    'Please enter a valid date'
                );

                // Validate a multifield phone number
                $.validator.addMethod(
                    'mc_phone',
                    function(phone_number, element, grouping_class) {
                        var isValid = false;
                        var $fields = $(
                            'input:filled:not(:hidden)',
                            $(element).closest(grouping_class)
                        );
                        if ($fields.length == 0 && this.optional(element)) {
                            isValid = true; // None have been filled out, so no error
                        } else {
                            phone_number =
                                $fields.eq(0).val() + $fields.eq(1).val() + $fields.eq(2).val();
                            isValid = phone_number.length == 10 && phone_number.match(/[0-9]{9}/);
                        }
                        return isValid;
                    },
                    'Please specify a valid phone number'
                );

                $.validator.addMethod(
                    'skip_or_complete_group',
                    function(value, element, grouping_class) {
                        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class)),
                            $fieldsFirst = $fields.eq(0),
                            validator = $fieldsFirst.data('valid_skip') ?
                            $fieldsFirst.data('valid_skip') :
                            $.extend({}, this),
                            numberFilled = $fields.filter(function() {
                                return validator.elementValue(this);
                            }).length,
                            isValid = numberFilled === 0 || numberFilled === $fields.length;

                        // Store the cloned validator for future validation
                        $fieldsFirst.data('valid_skip', validator);

                        // If element isn't being validated, run each field's validation rules
                        if (!$(element).data('being_validated')) {
                            $fields.data('being_validated', true);
                            $fields.each(function() {
                                validator.element(this);
                            });
                            $fields.data('being_validated', false);
                        }
                        return isValid;
                    },
                    $.validator.format('Please supply missing fields.')
                );

                $.validator.addMethod(
                    'skip_or_fill_minimum',
                    function(value, element, options) {
                        var $fields = $(options[1], element.form),
                            $fieldsFirst = $fields.eq(0),
                            validator = $fieldsFirst.data('valid_skip') ?
                            $fieldsFirst.data('valid_skip') :
                            $.extend({}, this),
                            numberFilled = $fields.filter(function() {
                                return validator.elementValue(this);
                            }).length,
                            isValid = numberFilled === 0 || numberFilled >= options[0];
                        console.log($fields.eq(0));
                        // Store the cloned validator for future validation
                        $fieldsFirst.data('valid_skip', validator);

                        // If element isn't being validated, run each skip_or_fill_minimum field's validation rules
                        if (!$(element).data('being_validated')) {
                            $fields.data('being_validated', true);
                            $fields.each(function() {
                                validator.element(this);
                            });
                            $fields.data('being_validated', false);
                        }
                        return isValid;
                    },
                    $.validator.format(
                        'Please either skip these fields or fill at least {0} of them.'
                    )
                );

                $.validator.addMethod(
                    'zipcodeUS',
                    function(value, element) {
                        return this.optional(element) || /^\d{5}-\d{4}$|^\d{5}$/.test(value);
                    },
                    'The specified US ZIP Code is invalid'
                );

                $.validator.addMethod(
                    'mc_gdpr',
                    function(value, element, grouping_class) {
                        //if gdpr is required the user must pick at least one option.
                        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
                        return $fields.filter(':checked').length !== 0;
                    },
                    'Please choose an option.'
                );
            })(jQuery);

            // MC
            (function($) {
                var err_style = '';
                try {
                    err_style = mc_custom_error_style;
                } catch (e) {
                    err_style =
                        '#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }';
                }
                var head = document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                    style.styleSheet.cssText = err_style;
                } else {
                    style.appendChild(document.createTextNode(err_style));
                }
                head.appendChild(style);

                // Expose extra mc form methods in global var
                window.mc = {
                    openPopup: function() {
                        $('#mc_embed_signup a.mc_embed_close').show();
                        setTimeout(function() {
                            $('#mc_embed_signup').fadeIn();
                        }, mc.delayPopup);
                    },
                    closePopup: function() {
                        $('#mc_embed_signup').hide();
                        var now = new Date();
                        var expires_date = new Date(now.getTime() + 31536000000);
                        document.cookie =
                            'MCPopupClosed=yes;expires=' + expires_date.toGMTString() + ';path=/';
                    },
                    /**
                     *	Figure out if we should show the popup (if they've closed it before, don't show it.)
                     */
                    evalPopup: function() {
                        $('#mc_embed_signup').hide();
                        cks = document.cookie.split(';');
                        for (i = 0; i < cks.length; i++) {
                            parts = cks[i].split('=');
                            if (parts[0].indexOf('MCPopupClosed') != -1) mc.showPopup = false;
                        }
                        if (mc.showPopup) mc.openPopup();
                    },
                    /**
                     *	Grab the list subscribe url from the form action and make it work for an ajax post.
                     */
                    getAjaxSubmitUrl: function() {
                        var url = $('form#mc-embedded-subscribe-form').attr('action');
                        url = url.replace('/post?u=', '/post-json?u=');
                        url += '&c=?';
                        return url;
                    },
                    /**
                     *	Classify text inputs in the same field group as group for validation purposes.
                     *	All this does is tell jQueryValidation to create one error div for the group, rather
                     *	than one for each input. Primary use case is birthday and date fields, where we want
                     *	to display errors about the inputs collectively, not individually.
                     *
                     *	NOTE: Grouping inputs will give you one error div, but you still need to specify where
                     *	that div should be displayed. By default, it's inserted after the first input with a
                     *	validation error, which can break up a set of inputs. Use the errorPlacement setting in
                     *	the validator to control error div placement.
                     */
                    getGroups: function() {
                        var groups = {};
                        $('.mc-field-group').each(function(index) {
                            var inputs = $(this).find(
                                'input:text:not(:hidden), input:checkbox:not(:hidden)'
                            );
                            if (inputs.length > 1) {
                                var mergeName = inputs.first().attr('name');
                                var fieldNames = $.map(inputs, function(f) {
                                    return f.name;
                                });
                                groups[
                                    mergeName.substring(0, mergeName.indexOf('['))
                                ] = fieldNames.join(' ');
                            }
                        });
                        return groups;
                    },
                    /**
                     *	Check if a field is part of a multipart field
                     * 	(e.g., A date merge field is composed of individual inputs for month, day and year)
                     *	Used in jQuery validation onkeyup method to ensure that we don't evaluate a field
                     *  if a user hasn't reached the last input in a multipart field yet.
                     */
                    isMultiPartField: function(element) {
                        return (
                            $('input:not(:hidden)', $(element).closest('.mc-field-group')).length >
                            1
                        );
                    },
                    /**
                     *	Checks if the element is the last input in its fieldgroup.
                     *	If the field is not the last in a set of inputs we don't want to validate it on certain events (onfocusout, onblur)
                     *	because the user might not be finished yet.
                     */
                    isTooEarly: function(element) {
                        var fields = $(
                            'input:not(:hidden)',
                            $(element).closest('.mc-field-group')
                        );
                        return $(fields).eq(-1).attr('id') != $(element).attr('id');
                    },
                    /**
                     *	Handle the error/success message after successful form submission.
                     *	Success messages are appended to #mce-success-response
                     *	Error messages are displayed with the invalid input when possible, or appended to #mce-error-response
                     */
                    mce_success_cb: function(resp) {
                        $('#mce-success-response').hide();
                        $('#mce-error-response').hide();

                        // On successful form submission, display a success message and reset the form
                        if (resp.result == 'success') {
                            $('#mce-' + resp.result + '-response').show();
                            $('#mce-' + resp.result + '-response').html(resp.msg);
                            $('#mc-embedded-subscribe-form').each(function() {
                                this.reset();
                            });

                            // If the form has errors, display them, inline if possible, or appended to #mce-error-response
                        } else {
                            if (resp.msg === 'captcha') {
                                var url = $('form#mc-embedded-subscribe-form').attr('action');
                                var parameters = $.param(resp.params);
                                url = url.split('?')[0];
                                url += '?';
                                url += parameters;
                                window.open(url);
                            }
                            // Example errors - Note: You only get one back at a time even if you submit several that are bad.
                            // Error structure - number indicates the index of the merge field that was invalid, then details
                            // Object {result: "error", msg: "6 - Please enter the date"}
                            // Object {result: "error", msg: "4 - Please enter a value"}
                            // Object {result: "error", msg: "9 - Please enter a complete address"}

                            // Try to parse the error into a field index and a message.
                            // On failure, just put the dump thing into in the msg variable.
                            var index = -1;
                            var msg;
                            try {
                                var parts = resp.msg.split(' - ', 2);
                                if (parts[1] == undefined) {
                                    msg = resp.msg;
                                } else {
                                    i = parseInt(parts[0]);
                                    if (i.toString() == parts[0]) {
                                        index = parts[0];
                                        msg = parts[1];
                                    } else {
                                        index = -1;
                                        msg = resp.msg;
                                    }
                                }
                            } catch (e) {
                                index = -1;
                                msg = resp.msg;
                            }

                            try {
                                // If index is -1 if means we don't have data on specifically which field was invalid.
                                // Just lump the error message into the generic response div.
                                if (index == -1) {
                                    $('#mce-' + resp.result + '-response').show();
                                    $('#mce-' + resp.result + '-response').html(msg);
                                } else {
                                    var fieldName = $("input[name*='" + fnames[index] + "']").attr(
                                        'name'
                                    ); // Make sure this exists (they haven't deleted the fnames array lookup)
                                    var data = {};
                                    data[fieldName] = msg;
                                    mc.mce_validator.showErrors(data);
                                }
                            } catch (e) {
                                $('#mce-' + resp.result + '-response').show();
                                $('#mce-' + resp.result + '-response').html(msg);
                            }
                        }
                    },
                };

                window.mc.mce_validator = $('#mc-embedded-subscribe-form').validate({
                    // Set error HTML: <div class="mce_inline_error"></div>
                    errorClass: 'mce_inline_error',
                    errorElement: 'div',

                    // Validate fields on keyup, focusout and blur.
                    onkeyup: false,
                    onfocusout: function(element) {
                        if (!mc.isTooEarly(element)) {
                            $(element).valid();
                        }
                    },
                    onblur: function(element) {
                        if (!mc.isTooEarly(element)) {
                            $(element).valid();
                        }
                    },
                    // Grouping fields makes jQuery Validation display one error for all the fields in the group
                    // It doesn't have anything to do with how the fields are validated (together or separately),
                    // it's strictly for visual display of errors
                    groups: mc.getGroups(),
                    // Place a field's inline error HTML just before the div.mc-field-group closing tag
                    errorPlacement: function(error, element) {
                        element.closest('.mc-field-group').append(error);
                    },
                    // Submit the form via ajax (see: jQuery Form plugin)
                    submitHandler: function(form) {
                        $(form).ajaxSubmit(mc.ajaxOptions);
                    },
                });

                window.mc.ajaxOptions = {
                    url: mc.getAjaxSubmitUrl(),
                    type: 'GET',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    success: mc.mce_success_cb,
                };

                // Custom validation methods for fields with certain css classes
                $.validator.addClassRules('birthday', {
                    digits: true,
                    mc_birthday: '.datefield',
                });
                $.validator.addClassRules('datepart', {
                    digits: true,
                    mc_date: '.datefield',
                });
                $.validator.addClassRules('phonepart', {
                    digits: true,
                    mc_phone: '.phonefield',
                });
                $.validator.addClassRules('gdpr', { mc_gdpr: '.gdprRequired' });

                // Evil Popup
                $('#mc_embed_signup a.mc_embed_close').click(function() {
                    mc.closePopup();
                });
                $(document).keydown(function(e) {
                    keycode = e == null ? event.keyCode : e.which;
                    if (keycode == 27 && typeof mc.showPopup != 'undefined') mc.closePopup();
                });
            })(jQuery); >>>
            >>>
            >
            05 b47aa87e6f681fa1b31bb320b4a427bc89ca32
            
$(function() {
    $("#fbpost").load("snippet-fbpost.html");
});
// function validations() {
//variables
const form = document.getElementById('gsheetForm');
const scriptURL =
  'https://script.google.com/macros/s/AKfycbxLcct6zTG82ECD9tt0fM6W8sRjmNHFfgT69DZr71kPeDlC1m4/exec';
const email = document.getElementById('email');
const JobCategory = document.getElementById('JobCategory');
const JobType = document.getElementById('JobType');
const joblocation = document.getElementById('joblocation');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const deaDline = document.getElementById('deaDline');
const TermsConditions = document.getElementById('TermsConditions');
var today = Math.floor(new Date().getTime() / 1000.0);
//var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const checkFacebook = document.getElementById('CheckFacebook');
const CheckInstagram = document.getElementById('CheckInstagram');
const CheckWebSearch = document.getElementById('CheckWebSearch');
const CheckElse = document.getElementById('CheckElse');

let messages = [];

form.addEventListener('submit', (e) => {
  messages = [];

  e.preventDefault();

  checkInputs();
  console.log(messages);
  if (messages.length > 0) {
    console.log('Too many messages.');
    submitDenied();
    return false;
  } else {
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
    submitButtonA();
    console.log('submitButton', submit.value);
    console.log('clicked?', clicked.value);
  }
});
console.log('Az aktualis nyelv valtozo:', nyelv);

function checkInputs() {
  //get the values from the inputs
  const emailValue = email.value;
  const JobCategoryValue = JobCategory.value;
  const JobTypeValue = JobType.value;
  const joblocationValue = joblocation.value;
  const companyValue = company.value;
  const phoneValue = phone.value;
  const deadlineValue = deaDline.value;
  const deadlineUNIX = new Date(deadlineValue.toString()).getTime() / 1000.0;
  const JobAnnouncementValue = JobAnnouncement;
  const TermsConditionsValue = TermsConditions.value;
  const notSelected = ['válassz', 'alege', 'choose', 'wählen'];

  //email
  if (emailValue === '') {
    //add error class
    switch (nyelv) {
      case 'hu':
        setErrorFor(email, 'Az e-mail cím nincs megadva.');
        break;
      case 'ro':
        setErrorFor(email, 'Adresa de e-mail nespecificată.');
        break;
      case 'en':
        setErrorFor(email, 'Email address not specified.');
        break;
      case 'de':
        setErrorFor(email, 'E-Mail-Adresse nicht angegeben.');
        break;
    }
  } else if (!isEmail(emailValue)) {
    //add success class

    //   error message start ---------------->
    switch (nyelv) {
      case 'hu':
        setErrorFor(email, 'Az e-mail cím helytelen.');
        break;
      case 'ro':
        setErrorFor(email, 'Adresa de e-mail este incorectă.');
        break;
      case 'en':
        setErrorFor(email, 'E-mail address is incorrect.');
        break;
      case 'de':
        setErrorFor(email, 'E-Mail-Adresse ist falsch.');
        break;
    }
    //   error message end ---------------->

    checker = checker + 1;
  } else {
    setSuccessFor(email);
  }

  // jobcategory

  if (notSelected.includes(JobCategoryValue)) {
    //show error
    //add error class
    //   error message start ---------------->
    switch (nyelv) {
      case 'hu':
        setErrorFor(JobCategory, 'Válassz egy kategóriát.');
        break;
      case 'ro':
        setErrorFor(JobCategory, 'Alege o categorie.');
        break;
      case 'en':
        setErrorFor(JobCategory, 'Choose a category.');
        break;
      case 'de':
        setErrorFor(JobCategory, 'Wählen Sie eine Kategorie.');
        break;
    }
    //   error message end ---------------->
  } else {
    setSuccessFor(JobCategory);
  }

  // jobtype
  if (notSelected.includes(JobTypeValue)) {
    //show error
    //add error class
    //   error message start ---------------->
    switch (nyelv) {
      case 'hu':
        setErrorFor(JobType, 'Válassz egy típust.');
        break;
      case 'ro':
        setErrorFor(JobType, 'Alege tipul jobului.');
        break;
      case 'en':
        setErrorFor(JobType, 'Choose a job type.');
        break;
      case 'de':
        setErrorFor(JobType, 'Wählen Sie einen Typ.');
        break;
    }
    //   error message end ---------------->
  } else {
    setSuccessFor(JobType);
  }

  // job location

  if (joblocationValue === '') {
    //show error
    //add error class
    //   error message start ---------------->
    switch (nyelv) {
      case 'hu':
        setErrorFor(joblocation, 'Add meg a munkavégzés helyét.');
        break;
      case 'ro':
        setErrorFor(
          joblocation,
          'Introduce locul de desfășurare a activității.'
        );
        break;
      case 'en':
        setErrorFor(joblocation, 'Enter the job location.');
        break;
      case 'de':
        setErrorFor(joblocation, 'Geben Sie den Arbeitsplatz ein.');
        break;
    }
    //   error message end ---------------->
  } else {
    setSuccessFor(joblocation);
  }

  //company name

  if (companyValue === '') {
    //show error
    //add error class
    //   error message start ---------------->
    switch (nyelv) {
      case 'hu':
        setErrorFor(company, 'Add meg a munkaadó cég nevét.');
        break;
      case 'ro':
        setErrorFor(company, 'Introduce numele companiei.');
        break;
      case 'en':
        setErrorFor(company, 'Enter the name of the company.');
        break;
      case 'de':
        setErrorFor(company, 'Geben Sie den Firmennamen ein.');
        break;
    }
    //   error message end ---------------->
  } else {
    setSuccessFor(company);
  }

  //phone number

  if (phoneValue === '' || phoneValue.length < 8) {
    //show error
    //add error class
    //   error message start ---------------->
    switch (nyelv) {
      case 'hu':
        setErrorFor(phone, 'Telefonszám érvénytelen.');
        break;
      case 'ro':
        setErrorFor(phone, 'Introduce numele companiei.');
        break;
      case 'en':
        setErrorFor(phone, 'Enter the name of the phone.');
        break;
      case 'de':
        setErrorFor(company, 'Geben Sie den Firmennamen ein.');
        break;
    }
    //   error message end ---------------->
  } else {
    setSuccessFor(phone);
  }

  //deadline
  if (checkboxDeadline.checked === false) {
    if (deadlineUNIX < today || deadlineValue.toString() == '') {
      //show error
      //add error class
      setErrorForDeadline(deadlineDiv, ``);
    } else {
      setSuccessForDeadline(deadlineDiv);
    }
  }

  //   FindUS
  if (
    checkFacebook.checked === true ||
    CheckInstagram.checked === true ||
    CheckWebSearch.checked === true ||
    CheckElse.checked === true
  ) {
    setSuccessFor(findUS);
  } else {
    //show error
    //add error class
    //   error message start ---------------->
    switch (nyelv) {
      case 'hu':
        setErrorFor(findUS, 'Jelölj meg egy, vagy több mezőt.');
        break;
      case 'ro':
        setErrorFor(findUS, 'Alege o opțiune.');
        break;
      case 'en':
        setErrorFor(findUS, 'Check an option.');
        break;
      case 'de':
        setErrorFor(findUS, 'Wählen Sie eine Option.');
        break;
    }
    //   error message end ---------------->
  }
  // console.log('checkFacebook', checkFacebook.checked);
  // console.log('CheckInstagram', CheckInstagram.value);
  // console.log('CheckWebSearch', CheckWebSearch.value);
  // console.log('CheckElse', CheckElse.value);

  //jobannouncement

  const jobAdiv = document.getElementById('jobAdiv'); //JobAnnouncement
  const karakterhossz = document.getElementById('JobAnnouncement').length;
  const karakterures = document.getElementById('JobAnnouncement').value;

//   console.log(`khossz`, karakterhossz);
//   console.log(`kures`, karakterures);

  if (karakterures === '' || karakterhossz > 2000) {
    //show error
                                //add error class
                                //   error message start ----------------> 
                                switch (nyelv) {
                                    case "hu":
                                        setErrorFor(jobAdiv, 'Kérjük add meg a hírdetés leírását legfeljebb 2000 karakterben.');
                                        break
                                    case "ro":
                                        setErrorFor(jobAdiv, 'Introduce o descriere a anunțului (max. 2000 de caractere).');
                                        break
                                    case "en":
                                        setErrorFor(jobAdiv, 'Please enter the job description (max. 2000 characters).');
                                        break
                                    case "de":
                                        setErrorFor(jobAdiv, 'Bitte geben Sie die Stellenbeschreibung ein (max. 2000 Zeichen)');
                                        break
                                }
                            //   error message end ---------------->
    
  } else {
    setSuccessFor(jobAdiv);
  }

  //Terms And Conditions
  console.log('checkbox TermsConditions is ', form.TermsConditions.checked);
  if (!form.TermsConditions.checked) {
    document.getElementById('chkMessage').style.visibility = 'visible';
    messages.push('Terms and Conditions not accepted');
    return false;
  } else {
    document.getElementById('chkMessage').style.visibility = 'hidden';
    return true;
  }
}

//----------------------------------//
//add success or
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  formGroup.className = 'form-group error';
  // small.setAttribute('data-i18n','tr21');
  small.innerText = message;
  messages.push('common error');
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

function setErrorForDeadline(input, message) {
  const formControl = document.getElementById('deadlineDiv');
  const small = formControl.querySelector('small');
  // formControl.ClassList.remove("success"); //= 'form-group error';
  document.getElementById('deadlineDiv').classList.remove('success'); //= 'form-group error';
  document.getElementById('deadlineDiv').classList.add('error'); //= 'form-group error';
  small.innerText = message;
  messages.push('common error');
}

function setSuccessForDeadline(input) {
  const formControl = document.getElementById('deadlineDiv');
  // formControl.ClassList.remove("error"); //= 'form-group success';
  document.getElementById('deadlineDiv').classList.remove('error'); //= 'form-group success';
  document.getElementById('deadlineDiv').classList.add('success'); //= 'form-group success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function submitButtonA() {
  var clicked = false;
  var submit = document.querySelector('.submit');

  submit.classList.remove('return');
  submit.blur();
  document.querySelector('.loading-dock').classList.add('loaded');
  document.getElementById('load').style.display = 'initial';
  document.getElementById('load-b').style.display = 'initial';
  setTimeout(function () {
    document.getElementById('load').style.opacity = 1;
  }, 550);
  setTimeout(function () {
    document.getElementById('load-b').style.opacity = 1;
  }, 700);
  setTimeout(function () {
    document.querySelector('.loading-dock').classList.remove('loaded');
    document.getElementById('load').style.display = 'none';
    document.getElementById('load-b').style.display = 'none';
    document.getElementById('load').style.opacity = 0;
    document.getElementById('load-b').style.opacity = 0;
    let submit = document.querySelector('.submit');
    submit.classList.add('popout');
    submit.innerHTML = '';
    setTimeout(function () {
      document.getElementById('check').style.display = 'block';
    }, 500);
  }, 2000);

  //reset all
  setTimeout(function () {
    submit.classList.remove('popout');
    submit.classList.remove('denied');
    submit.classList.add('return');
    //   Submit message start ----------------> 
    switch (nyelv) {
        case "hu":
            submit.innerHTML = 'Beküldés';
            break
        case "ro":
            submit.innerHTML = 'Trimitere';
            break
        case "en":
            submit.innerHTML = 'Submit';
            break
        case "de":
            submit.innerHTML = 'Einreichen';
            break
    }
//   Submit message end ---------------->
    document.getElementById('check').style.display = 'none';
    clicked = false;
  }, 4500);
  // }
  // });
}

function submitDenied() {
  var submit = document.querySelector('.submit');
  submit.classList.add('denied');

                                //   Submit error start ----------------> 
                                switch (nyelv) {
                                    case "hu":
                                        submit.innerHTML = 'Sikertelen';
                                        break
                                    case "ro":
                                        submit.innerHTML = 'Nereușit';
                                        break
                                    case "en":
                                        submit.innerHTML = 'Unsuccessful';
                                        break
                                    case "de":
                                        submit.innerHTML = 'Erfolglos';
                                        break
                                }
                            //   Submit error end ---------------->

  //reset all
  setTimeout(function () {
    submit.classList.remove('popout');
    submit.classList.remove('denied');
    submit.classList.add('return');
    //   Submit message start ----------------> 
    switch (nyelv) {
        case "hu":
            submit.innerHTML = 'Beküldés';
            break
        case "ro":
            submit.innerHTML = 'Trimite';
            break
        case "en":
            submit.innerHTML = 'Submit';
            break
        case "de":
            submit.innerHTML = 'Einreichen';
            break
    }
//   Submit message end ---------------->
    document.getElementById('check').style.display = 'none';

    clicked = false;
  }, 3000);
}

//deadline checkbox

var checkboxDeadline = document.getElementById('DeadlineContInp');
var deadline = document.getElementById('deaDline');

document.getElementById('DeadlineContInp').onclick = function () {
  if (checkboxDeadline.checked) {
    deaDline.setAttribute('disabled', 'disabled');
    deadlineDiv.classList.remove('error');
    deadlineDiv.classList.remove('success');
    //    setSuccessFor(DeadlineCont);
  } else {
    deaDline.removeAttribute('disabled');
  }
};
console.log('checkboxDeadline', checkboxDeadline);
console.log('checkboxDeadline.checked', checkboxDeadline.checked);
console.log('deadline', deadline);


//old stuff

// $(document).ready(function () {
//   $('#carousel').swiperight(function () {
//     $(this).carousel('prev');
//   });
//   $('#carousel').swipeleft(function () {
//     $(this).carousel('next');
//   });
// });


// -----------------
$(document).ready(function () {

$(function(){
  // Bind the swiperightHandler callback function to the swipe event on div.box
$( "carousel" ).on( "swiperight", swiperightHandler );

// Callback function references the event target and adds the 'swiperight' class to it
function swiperightHandler( event ){
  $( event.target ).addClass( "swiperight" );
}
});
$(function(){
  // Bind the swipeleftHandler callback function to the swipe event on div.box
$( "carousel" ).on( "swipeleft", swipeleftHandler );

// Callback function references the event target and adds the 'swipeleft' class to it
function swipeleftHandler( event ){
  $( event.target ).addClass( "swipeleft" );
}
});

}

//---------------------------------------

$('.carousel').carousel();
$('.carousel').carousel({
  // percent-per-second
  // default is 50
  // false = disable touch swipe
  swipe: 80,
});

//src : https://codesandbox.io/s/i18n-example-phtsp?file=/src/js/index.js
// 'use strict';
class Translator {
    constructor(options = {}) {
            this._options = Object.assign({}, this.defaultConfig, options);
            this._lang = this.getLanguage();
            this._elements = document.querySelectorAll('[data-i18n]');
        }
        //get default language start
    getLanguage() {
        if (!this._options.detectLanguage) {
            return this._options.defaultLanguage;
        }

        var stored = localStorage.getItem('language');

        if (this._options.persist && stored) {
            return stored;
        }

        var lang = navigator.languages ?
            navigator.languages[0] :
            navigator.language;
        console.log(navigator.languages);

        console.log('getLanguage Default Language', lang.substr(0, 2));
        window.defLang = lang.substr(0, 2);
        return lang.substr(0, 2);
    }

    //get default language end

    load(lang = null) {
        if (lang) {
            if (!this._options.languages.includes(lang)) {
                return;
            }

            this._lang = lang;
        }

        var path = `${this._options.filesLocation}/${this._lang}.json`;

        fetch(path)
            .then((res) => res.json())
            .then((translation) => {
                this.translate(translation);
                this.toggleLangTag();

                if (this._options.persist) {
                    localStorage.setItem('language', this._lang);
                }
            })
            .catch((err) => {
                console.error(
                    `Could not load ${path}.json. Please make sure that the path is correct.`,
                    err
                );
            });
    }

    toggleLangTag() {
        if (document.documentElement.lang !== this._lang) {
            document.documentElement.lang = this._lang;
        }
    }

    translate(translation) {
        function replace(element) {
            var text = element.dataset.i18n
                .split('.')
                .reduce((obj, i) => obj[i], translation);

            if (text) {
                element.innerHTML = text;
            }
        }

        this._elements.forEach(replace);
    }

    get defaultConfig() {
        return {
            persist: false,
            languages: ['en'],
            defaultLanguage: 'en',
            filesLocation: 'i18n/',
        };
    }
}

//  export default Translator;
var translator = new Translator({
    persist: false,
    languages: ['hu', 'ro', 'en', 'de'],
    defaultLanguage: 'hu',
    detectLanguage: true,
    filesLocation: 'i18n/',
});

translator.load();
//adding a default value to our listener variable nyelv, for the submit.js --to be able to see something if somebody didn't choose any language
var nyelv = defLang;

//defining the flag DIV, and not the SVG --important at the removeTransition function

const fleghu = document.querySelector('.flagHU');
const fleghuSVG = document.querySelector('.flagHU svg');
const fleghuNY = document.querySelector('.navbar-collapse.nyitva li .flagHU');
const flegro = document.querySelector('.flagRO');
const flegen = document.querySelector('.flagEN');
const flegde = document.querySelector('.flagDE');

var nav1 = document.getElementById('home');
var nav2 = document.getElementById('facebook');
var nav3 = document.getElementById('postajob');
var nav4 = document.getElementById('aboutus')

//click event HU flag
document.querySelector('.flagHU svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log('nyelv = =', nyelv);
    window.nyelv = nyelv;
    fleghu.classList.add('flagActive');
    // nav1.classList.add('flagSwing');
    nav2.classList.add('flagSwing');
    nav3.classList.add('flagSwing');
    // nav4.classList.add('flagSwing');

});

fleghu.addEventListener('transitionend', removeTransition);
fleghu.addEventListener('webkitTransitionEnd', removeTransition);

//click event RO flag
document.querySelector('.flagRO svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log('nyelv = =', nyelv);
    window.nyelv = nyelv;
    flegro.classList.toggle('flagActive');
    // nav1.classList.add('flagSwing');
    nav2.classList.add('flagSwing');
    nav3.classList.add('flagSwing');
    // nav4.classList.add('flagSwing');
});
flegro.addEventListener('transitionend', removeTransition);
flegro.addEventListener('webkitTransitionEnd', removeTransition);

//click event EN flag
document.querySelector('.flagEN svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log('nyelv = =', nyelv);
    window.nyelv = nyelv;
    flegen.classList.toggle('flagActive');
    // nav1.classList.add('flagSwing');
    nav2.classList.add('flagSwing');
    nav3.classList.add('flagSwing');
    // nav4.classList.add('flagSwing');
});
flegen.addEventListener('transitionend', removeTransition);
flegen.addEventListener('webkitTransitionEnd', removeTransition);

//click event DE flag
document.querySelector('.flagDE svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log('nyelv = =', nyelv);
    window.nyelv = nyelv;
    flegde.classList.add('flagActive');
    // nav1.classList.add('flagSwing');
    nav2.classList.add('flagSwing');
    nav3.classList.add('flagSwing');
    // nav4.classList.add('flagSwing');
});
flegde.addEventListener('transitionend', removeTransition);
flegde.addEventListener('webkitTransitionEnd', removeTransition);

// function swingLinks() {
// var flags = document.querySelectorAll('.flagHU, .flagRO, .flagDE, .flagEN')
// console.log("swingLinks -> flags", flags)


// for (var i = 0; i <= flags.length; i++) {
//     console.log("swingLinks -> flags.length", flags.length)
//     flags[i].classList.add('flagSwing');
//     console.log("swingLinks -> i", i)
//     console.log("swingLinks -> flags[i]", flags[i]);
// }

function removeTransition(evt) {
    if (evt.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('flagActive');
    // nav1.classList.remove('flagSwing');
    nav2.classList.remove('flagSwing');
    nav3.classList.remove('flagSwing');
    // nav4.classList.remove('flagSwing');
    console.log('RM TR', this);
}
/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

//heartbeat start
var heart = document.getElementById('svgFacebookwhiteHeart');
window.addEventListener('scroll', function (event) {
  if (isInViewport(svgFacebookwhiteHeart)) {
    heart.classList.add('beatheart');
    // console.log(`in viewport`);
  } else {
    // console.log(`NOT in viewport`);
  }
});

//heartbeat end

//counter start
let start; // set on the first step to the timestamp provided
const el1 = document.getElementById('count1'); // get the element
const el2 = document.getElementById('count2'); // get the element
const el3 = document.getElementById('count3'); // get the element
const final1 = parseInt(el1.textContent, 10); // parse out the final number
const final2 = parseInt(el2.textContent, 10); // parse out the final number
const final3 = parseInt(el3.textContent, 10); // parse out the final number
const duration = 2500; // duration in ms
var countedUp = false;
window.addEventListener('scroll', function (event) {
  if (isInViewport(count1) && countedUp == false) {
    el1.classList.add('animate__headShake');
    el2.classList.add('animate__headShake');
    el3.classList.add('animate__headShake');
    countUp();

    console.log(`count1 in viewport`);
  } else {
    console.log(`count1 NOT in viewport`);
  }
});

function countUp() {
  const step = (ts) => {
    if (!start) {
      start = ts;
    }
    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration;

    el1.textContent = Math.floor(progress * final1); // set the text
    el2.textContent = Math.floor(progress * final2); // set the text
    el3.textContent = Math.floor(progress * final3); // set the text
    if (progress < 1) {
      // if we're not 100% complete, request another animation frame
      requestAnimationFrame(step);
    }
    countedUp = true;
  };

  // start the animation
  requestAnimationFrame(step);
}

//counter end

// social start
// var soc1 = document.getElementById('socIG');
// var soc2 = document.getElementById('socFB');
// var soc3 = document.getElementById('socIN');
// var rotatedUp = false;
// window.addEventListener('scroll', function (event) {
//   if (isInViewport(soc1) && rotatedUp === false) {
//     delayedRotate(soc1, 500);
//     delayedRotate(soc2, 1500);
//     delayedRotate(soc3, 2500);
//     delayedRotate(soc2, 3500);
//     delayedRotate(soc1, 4500);
//     var rotatedUp = true;

//     console.log(`rotatedUp`, rotatedUp);
//   } else {
//     var rotatedUp = false;
//     console.log(`soci NOT in viewport`);
//   }
// });

//src: https://www.sitepoint.com/delay-sleep-pause-wait/
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function delayedRotate(input, t) {
//   var soci = input;
//   var timing = t;
//   await sleep(t);
//   soci.focus();
//   await sleep(1000);
//   soci.blur();
// }

//endsitepoint
// social end

/*!
 * Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var l,a;l=this,a=function(){"use strict";var l={},a={};try{"undefined"!=typeof window&&(l=window),"undefined"!=typeof document&&(a=document)}catch(l){}var e=(l.navigator||{}).userAgent,r=void 0===e?"":e,n=l,o=a,u=(n.document,!!o.documentElement&&!!o.head&&"function"==typeof o.addEventListener&&o.createElement,~r.indexOf("MSIE")||r.indexOf("Trident/"),"___FONT_AWESOME___"),t=function(){try{return"production"===process.env.NODE_ENV}catch(l){return!1}}();var f=n||{};f[u]||(f[u]={}),f[u].styles||(f[u].styles={}),f[u].hooks||(f[u].hooks={}),f[u].shims||(f[u].shims=[]);var i=f[u],s=[["glass",null,"glass-martini"],["meetup","fab",null],["star-o","far","star"],["remove",null,"times"],["close",null,"times"],["gear",null,"cog"],["trash-o","far","trash-alt"],["file-o","far","file"],["clock-o","far","clock"],["arrow-circle-o-down","far","arrow-alt-circle-down"],["arrow-circle-o-up","far","arrow-alt-circle-up"],["play-circle-o","far","play-circle"],["repeat",null,"redo"],["rotate-right",null,"redo"],["refresh",null,"sync"],["list-alt","far",null],["dedent",null,"outdent"],["video-camera",null,"video"],["picture-o","far","image"],["photo","far","image"],["image","far","image"],["pencil",null,"pencil-alt"],["map-marker",null,"map-marker-alt"],["pencil-square-o","far","edit"],["share-square-o","far","share-square"],["check-square-o","far","check-square"],["arrows",null,"arrows-alt"],["times-circle-o","far","times-circle"],["check-circle-o","far","check-circle"],["mail-forward",null,"share"],["expand",null,"expand-alt"],["compress",null,"compress-alt"],["eye","far",null],["eye-slash","far",null],["warning",null,"exclamation-triangle"],["calendar",null,"calendar-alt"],["arrows-v",null,"arrows-alt-v"],["arrows-h",null,"arrows-alt-h"],["bar-chart","far","chart-bar"],["bar-chart-o","far","chart-bar"],["twitter-square","fab",null],["facebook-square","fab",null],["gears",null,"cogs"],["thumbs-o-up","far","thumbs-up"],["thumbs-o-down","far","thumbs-down"],["heart-o","far","heart"],["sign-out",null,"sign-out-alt"],["linkedin-square","fab","linkedin"],["thumb-tack",null,"thumbtack"],["external-link",null,"external-link-alt"],["sign-in",null,"sign-in-alt"],["github-square","fab",null],["lemon-o","far","lemon"],["square-o","far","square"],["bookmark-o","far","bookmark"],["twitter","fab",null],["facebook","fab","facebook-f"],["facebook-f","fab","facebook-f"],["github","fab",null],["credit-card","far",null],["feed",null,"rss"],["hdd-o","far","hdd"],["hand-o-right","far","hand-point-right"],["hand-o-left","far","hand-point-left"],["hand-o-up","far","hand-point-up"],["hand-o-down","far","hand-point-down"],["arrows-alt",null,"expand-arrows-alt"],["group",null,"users"],["chain",null,"link"],["scissors",null,"cut"],["files-o","far","copy"],["floppy-o","far","save"],["navicon",null,"bars"],["reorder",null,"bars"],["pinterest","fab",null],["pinterest-square","fab",null],["google-plus-square","fab",null],["google-plus","fab","google-plus-g"],["money","far","money-bill-alt"],["unsorted",null,"sort"],["sort-desc",null,"sort-down"],["sort-asc",null,"sort-up"],["linkedin","fab","linkedin-in"],["rotate-left",null,"undo"],["legal",null,"gavel"],["tachometer",null,"tachometer-alt"],["dashboard",null,"tachometer-alt"],["comment-o","far","comment"],["comments-o","far","comments"],["flash",null,"bolt"],["clipboard","far",null],["paste","far","clipboard"],["lightbulb-o","far","lightbulb"],["exchange",null,"exchange-alt"],["cloud-download",null,"cloud-download-alt"],["cloud-upload",null,"cloud-upload-alt"],["bell-o","far","bell"],["cutlery",null,"utensils"],["file-text-o","far","file-alt"],["building-o","far","building"],["hospital-o","far","hospital"],["tablet",null,"tablet-alt"],["mobile",null,"mobile-alt"],["mobile-phone",null,"mobile-alt"],["circle-o","far","circle"],["mail-reply",null,"reply"],["github-alt","fab",null],["folder-o","far","folder"],["folder-open-o","far","folder-open"],["smile-o","far","smile"],["frown-o","far","frown"],["meh-o","far","meh"],["keyboard-o","far","keyboard"],["flag-o","far","flag"],["mail-reply-all",null,"reply-all"],["star-half-o","far","star-half"],["star-half-empty","far","star-half"],["star-half-full","far","star-half"],["code-fork",null,"code-branch"],["chain-broken",null,"unlink"],["shield",null,"shield-alt"],["calendar-o","far","calendar"],["maxcdn","fab",null],["html5","fab",null],["css3","fab",null],["ticket",null,"ticket-alt"],["minus-square-o","far","minus-square"],["level-up",null,"level-up-alt"],["level-down",null,"level-down-alt"],["pencil-square",null,"pen-square"],["external-link-square",null,"external-link-square-alt"],["compass","far",null],["caret-square-o-down","far","caret-square-down"],["toggle-down","far","caret-square-down"],["caret-square-o-up","far","caret-square-up"],["toggle-up","far","caret-square-up"],["caret-square-o-right","far","caret-square-right"],["toggle-right","far","caret-square-right"],["eur",null,"euro-sign"],["euro",null,"euro-sign"],["gbp",null,"pound-sign"],["usd",null,"dollar-sign"],["dollar",null,"dollar-sign"],["inr",null,"rupee-sign"],["rupee",null,"rupee-sign"],["jpy",null,"yen-sign"],["cny",null,"yen-sign"],["rmb",null,"yen-sign"],["yen",null,"yen-sign"],["rub",null,"ruble-sign"],["ruble",null,"ruble-sign"],["rouble",null,"ruble-sign"],["krw",null,"won-sign"],["won",null,"won-sign"],["btc","fab",null],["bitcoin","fab","btc"],["file-text",null,"file-alt"],["sort-alpha-asc",null,"sort-alpha-down"],["sort-alpha-desc",null,"sort-alpha-down-alt"],["sort-amount-asc",null,"sort-amount-down"],["sort-amount-desc",null,"sort-amount-down-alt"],["sort-numeric-asc",null,"sort-numeric-down"],["sort-numeric-desc",null,"sort-numeric-down-alt"],["youtube-square","fab",null],["youtube","fab",null],["xing","fab",null],["xing-square","fab",null],["youtube-play","fab","youtube"],["dropbox","fab",null],["stack-overflow","fab",null],["instagram","fab",null],["flickr","fab",null],["adn","fab",null],["bitbucket","fab",null],["bitbucket-square","fab","bitbucket"],["tumblr","fab",null],["tumblr-square","fab",null],["long-arrow-down",null,"long-arrow-alt-down"],["long-arrow-up",null,"long-arrow-alt-up"],["long-arrow-left",null,"long-arrow-alt-left"],["long-arrow-right",null,"long-arrow-alt-right"],["apple","fab",null],["windows","fab",null],["android","fab",null],["linux","fab",null],["dribbble","fab",null],["skype","fab",null],["foursquare","fab",null],["trello","fab",null],["gratipay","fab",null],["gittip","fab","gratipay"],["sun-o","far","sun"],["moon-o","far","moon"],["vk","fab",null],["weibo","fab",null],["renren","fab",null],["pagelines","fab",null],["stack-exchange","fab",null],["arrow-circle-o-right","far","arrow-alt-circle-right"],["arrow-circle-o-left","far","arrow-alt-circle-left"],["caret-square-o-left","far","caret-square-left"],["toggle-left","far","caret-square-left"],["dot-circle-o","far","dot-circle"],["vimeo-square","fab",null],["try",null,"lira-sign"],["turkish-lira",null,"lira-sign"],["plus-square-o","far","plus-square"],["slack","fab",null],["wordpress","fab",null],["openid","fab",null],["institution",null,"university"],["bank",null,"university"],["mortar-board",null,"graduation-cap"],["yahoo","fab",null],["google","fab",null],["reddit","fab",null],["reddit-square","fab",null],["stumbleupon-circle","fab",null],["stumbleupon","fab",null],["delicious","fab",null],["digg","fab",null],["pied-piper-pp","fab",null],["pied-piper-alt","fab",null],["drupal","fab",null],["joomla","fab",null],["spoon",null,"utensil-spoon"],["behance","fab",null],["behance-square","fab",null],["steam","fab",null],["steam-square","fab",null],["automobile",null,"car"],["envelope-o","far","envelope"],["spotify","fab",null],["deviantart","fab",null],["soundcloud","fab",null],["file-pdf-o","far","file-pdf"],["file-word-o","far","file-word"],["file-excel-o","far","file-excel"],["file-powerpoint-o","far","file-powerpoint"],["file-image-o","far","file-image"],["file-photo-o","far","file-image"],["file-picture-o","far","file-image"],["file-archive-o","far","file-archive"],["file-zip-o","far","file-archive"],["file-audio-o","far","file-audio"],["file-sound-o","far","file-audio"],["file-video-o","far","file-video"],["file-movie-o","far","file-video"],["file-code-o","far","file-code"],["vine","fab",null],["codepen","fab",null],["jsfiddle","fab",null],["life-ring","far",null],["life-bouy","far","life-ring"],["life-buoy","far","life-ring"],["life-saver","far","life-ring"],["support","far","life-ring"],["circle-o-notch",null,"circle-notch"],["rebel","fab",null],["ra","fab","rebel"],["resistance","fab","rebel"],["empire","fab",null],["ge","fab","empire"],["git-square","fab",null],["git","fab",null],["hacker-news","fab",null],["y-combinator-square","fab","hacker-news"],["yc-square","fab","hacker-news"],["tencent-weibo","fab",null],["qq","fab",null],["weixin","fab",null],["wechat","fab","weixin"],["send",null,"paper-plane"],["paper-plane-o","far","paper-plane"],["send-o","far","paper-plane"],["circle-thin","far","circle"],["header",null,"heading"],["sliders",null,"sliders-h"],["futbol-o","far","futbol"],["soccer-ball-o","far","futbol"],["slideshare","fab",null],["twitch","fab",null],["yelp","fab",null],["newspaper-o","far","newspaper"],["paypal","fab",null],["google-wallet","fab",null],["cc-visa","fab",null],["cc-mastercard","fab",null],["cc-discover","fab",null],["cc-amex","fab",null],["cc-paypal","fab",null],["cc-stripe","fab",null],["bell-slash-o","far","bell-slash"],["trash",null,"trash-alt"],["copyright","far",null],["eyedropper",null,"eye-dropper"],["area-chart",null,"chart-area"],["pie-chart",null,"chart-pie"],["line-chart",null,"chart-line"],["lastfm","fab",null],["lastfm-square","fab",null],["ioxhost","fab",null],["angellist","fab",null],["cc","far","closed-captioning"],["ils",null,"shekel-sign"],["shekel",null,"shekel-sign"],["sheqel",null,"shekel-sign"],["meanpath","fab","font-awesome"],["buysellads","fab",null],["connectdevelop","fab",null],["dashcube","fab",null],["forumbee","fab",null],["leanpub","fab",null],["sellsy","fab",null],["shirtsinbulk","fab",null],["simplybuilt","fab",null],["skyatlas","fab",null],["diamond","far","gem"],["intersex",null,"transgender"],["facebook-official","fab","facebook"],["pinterest-p","fab",null],["whatsapp","fab",null],["hotel",null,"bed"],["viacoin","fab",null],["medium","fab",null],["y-combinator","fab",null],["yc","fab","y-combinator"],["optin-monster","fab",null],["opencart","fab",null],["expeditedssl","fab",null],["battery-4",null,"battery-full"],["battery",null,"battery-full"],["battery-3",null,"battery-three-quarters"],["battery-2",null,"battery-half"],["battery-1",null,"battery-quarter"],["battery-0",null,"battery-empty"],["object-group","far",null],["object-ungroup","far",null],["sticky-note-o","far","sticky-note"],["cc-jcb","fab",null],["cc-diners-club","fab",null],["clone","far",null],["hourglass-o","far","hourglass"],["hourglass-1",null,"hourglass-start"],["hourglass-2",null,"hourglass-half"],["hourglass-3",null,"hourglass-end"],["hand-rock-o","far","hand-rock"],["hand-grab-o","far","hand-rock"],["hand-paper-o","far","hand-paper"],["hand-stop-o","far","hand-paper"],["hand-scissors-o","far","hand-scissors"],["hand-lizard-o","far","hand-lizard"],["hand-spock-o","far","hand-spock"],["hand-pointer-o","far","hand-pointer"],["hand-peace-o","far","hand-peace"],["registered","far",null],["creative-commons","fab",null],["gg","fab",null],["gg-circle","fab",null],["tripadvisor","fab",null],["odnoklassniki","fab",null],["odnoklassniki-square","fab",null],["get-pocket","fab",null],["wikipedia-w","fab",null],["safari","fab",null],["chrome","fab",null],["firefox","fab",null],["opera","fab",null],["internet-explorer","fab",null],["television",null,"tv"],["contao","fab",null],["500px","fab",null],["amazon","fab",null],["calendar-plus-o","far","calendar-plus"],["calendar-minus-o","far","calendar-minus"],["calendar-times-o","far","calendar-times"],["calendar-check-o","far","calendar-check"],["map-o","far","map"],["commenting",null,"comment-dots"],["commenting-o","far","comment-dots"],["houzz","fab",null],["vimeo","fab","vimeo-v"],["black-tie","fab",null],["fonticons","fab",null],["reddit-alien","fab",null],["edge","fab",null],["credit-card-alt",null,"credit-card"],["codiepie","fab",null],["modx","fab",null],["fort-awesome","fab",null],["usb","fab",null],["product-hunt","fab",null],["mixcloud","fab",null],["scribd","fab",null],["pause-circle-o","far","pause-circle"],["stop-circle-o","far","stop-circle"],["bluetooth","fab",null],["bluetooth-b","fab",null],["gitlab","fab",null],["wpbeginner","fab",null],["wpforms","fab",null],["envira","fab",null],["wheelchair-alt","fab","accessible-icon"],["question-circle-o","far","question-circle"],["volume-control-phone",null,"phone-volume"],["asl-interpreting",null,"american-sign-language-interpreting"],["deafness",null,"deaf"],["hard-of-hearing",null,"deaf"],["glide","fab",null],["glide-g","fab",null],["signing",null,"sign-language"],["viadeo","fab",null],["viadeo-square","fab",null],["snapchat","fab",null],["snapchat-ghost","fab",null],["snapchat-square","fab",null],["pied-piper","fab",null],["first-order","fab",null],["yoast","fab",null],["themeisle","fab",null],["google-plus-official","fab","google-plus"],["google-plus-circle","fab","google-plus"],["font-awesome","fab",null],["fa","fab","font-awesome"],["handshake-o","far","handshake"],["envelope-open-o","far","envelope-open"],["linode","fab",null],["address-book-o","far","address-book"],["vcard",null,"address-card"],["address-card-o","far","address-card"],["vcard-o","far","address-card"],["user-circle-o","far","user-circle"],["user-o","far","user"],["id-badge","far",null],["drivers-license",null,"id-card"],["id-card-o","far","id-card"],["drivers-license-o","far","id-card"],["quora","fab",null],["free-code-camp","fab",null],["telegram","fab",null],["thermometer-4",null,"thermometer-full"],["thermometer",null,"thermometer-full"],["thermometer-3",null,"thermometer-three-quarters"],["thermometer-2",null,"thermometer-half"],["thermometer-1",null,"thermometer-quarter"],["thermometer-0",null,"thermometer-empty"],["bathtub",null,"bath"],["s15",null,"bath"],["window-maximize","far",null],["window-restore","far",null],["times-rectangle",null,"window-close"],["window-close-o","far","window-close"],["times-rectangle-o","far","window-close"],["bandcamp","fab",null],["grav","fab",null],["etsy","fab",null],["imdb","fab",null],["ravelry","fab",null],["eercast","fab","sellcast"],["snowflake-o","far","snowflake"],["superpowers","fab",null],["wpexplorer","fab",null],["cab",null,"taxi"]];return function(l){try{l()}catch(l){if(!t)throw l}}(function(){var l;"function"==typeof i.hooks.addShims?i.hooks.addShims(s):(l=i.shims).push.apply(l,s)}),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):l["fontawesome-free-shims"]=a();
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){!function(){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var e=document.createElement("div");e.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',e.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(e)}}()},function(e,t,n){"use strict";n.r(t);n(0);var o,r,l,_,i,u={},a=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var o,r,l,_=arguments,i={};for(l in t)"key"==l?o=t[l]:"ref"==l?r=t[l]:i[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(_[l]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return d(e,i,o,r,null)}function d(e,t,n,r,l){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:l};return null==l&&(_.__v=_),null!=o.vnode&&o.vnode(_),_}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||_!==o.debounceRendering)&&((_=o.debounceRendering)||l)(b)}function b(){for(var e;b.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,o,r,l,_,i;e.__d&&(_=(l=(t=e).__v).__e,(i=t.__P)&&(n=[],(o=s({},l)).__v=o,r=E(i,l,o,t.__n,void 0!==i.ownerSVGElement,null,n,null==_?y(l):_),z(n,l),r!=_&&m(l)))}))}function k(e,t,n,o,r,l,_,i,c,s){var f,v,m,g,b,k,x,S=o&&o.__k||a,N=S.length;for(c==u&&(c=null!=_?_[0]:N?y(o,0):null),n.__k=[],f=0;f<t.length;f++)if(null!=(g=n.__k[f]=null==(g=t[f])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?d(null,g,null,null,g):Array.isArray(g)?d(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?d(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=S[f])||m&&g.key==m.key&&g.type===m.type)S[f]=void 0;else for(v=0;v<N;v++){if((m=S[v])&&g.key==m.key&&g.type===m.type){S[v]=void 0;break}m=null}b=E(e,g,m=m||u,r,l,_,i,c,s),(v=g.ref)&&m.ref!=v&&(x||(x=[]),m.ref&&x.push(m.ref,null,g),x.push(v,g.__c||b,g)),null!=b?(null==k&&(k=b),c=w(e,g,m,S,_,b,c),s||"option"!=n.type?"function"==typeof n.type&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=y(m))}if(n.__e=k,null!=_&&"function"!=typeof n.type)for(f=_.length;f--;)null!=_[f]&&p(_[f]);for(f=N;f--;)null!=S[f]&&T(S[f],S[f]);if(x)for(f=0;f<x.length;f++)C(x[f],x[++f],x[++f])}function w(e,t,n,o,r,l,_){var i,u,a;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(r==n||l!=_||null==l.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(l),i=null;else{for(u=_,a=0;(u=u.nextSibling)&&a<o.length;a+=2)if(u==l)break e;e.insertBefore(l,_),i=_}return void 0!==i?i:l.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function S(e,t,n,o,r){var l,_;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style=n;else{if("string"==typeof o&&(e.style=o=""),o)for(t in o)n&&t in n||x(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||x(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),(_=t.toLowerCase())in e&&(t=_),t=t.slice(2),e.l||(e.l={}),e.l[t]=n,n?o||e.addEventListener(t,N,l):e.removeEventListener(t,N,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function N(e){this.l[e.type](o.event?o.event(e):e)}function P(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&P(r,t,n),t=w(n,r,r,e.__k,null,r.__e,t),"function"==typeof e.type&&(e.__d=t)))}function E(e,t,n,r,l,_,i,u,a){var c,p,f,d,y,m,g,b,w,x,S,N=t.type;if(void 0!==t.constructor)return null;(c=o.__b)&&c(t);try{e:if("function"==typeof N){if(b=t.props,w=(c=N.contextType)&&r[c.__c],x=c?w?w.props.value:c.__:r,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in N&&N.prototype.render?t.__c=p=new N(b,x):(t.__c=p=new v(b,x),p.constructor=N,p.render=A),w&&w.sub(p),p.props=b,p.state||(p.state={}),p.context=x,p.__n=r,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=N.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,N.getDerivedStateFromProps(b,p.__s))),d=p.props,y=p.state,f)null==N.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==N.getDerivedStateFromProps&&b!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,x)||t.__v===n.__v){p.props=b,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&i.push(p),P(t,u,e);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(d,y,m)}))}p.context=x,p.props=b,p.state=p.__s,(c=o.__r)&&c(t),p.__d=!1,p.__v=t,p.__P=e,c=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=s(s({},r),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,y)),S=null!=c&&c.type==h&&null==c.key?c.props.children:c,k(e,Array.isArray(S)?S:[S],t,n,r,l,_,i,u,a),p.base=t.__e,p.__h.length&&i.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=M(n.__e,t,n,r,l,_,i,a);(c=o.diffed)&&c(t)}catch(e){t.__v=null,o.__e(e,t,n)}return t.__e}function z(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function M(e,t,n,o,r,l,_,i){var c,s,p,f,d,h=n.props,v=t.props;if(r="svg"===t.type||r,null!=l)for(c=0;c<l.length;c++)if(null!=(s=l[c])&&((null===t.type?3===s.nodeType:s.localName===t.type)||e==s)){e=s,l[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),l=null,i=!1}if(null===t.type)h!==v&&e.data!==v&&(e.data=v);else{if(null!=l&&(l=a.slice.call(e.childNodes)),p=(h=n.props||u).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!i){if(null!=l)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||p)&&(f&&p&&f.__html==p.__html||(e.innerHTML=f&&f.__html||""))}(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||S(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||S(e,l,t[l],n[l],o)})(e,v,h,r,i),f?t.__k=[]:(c=t.props.children,k(e,Array.isArray(c)?c:[c],t,n,o,"foreignObject"!==t.type&&r,l,_,u,i)),i||("value"in v&&void 0!==(c=v.value)&&c!==e.value&&S(e,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==e.checked&&S(e,"checked",c,h.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function T(e,t,n){var r,l,_;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||C(r,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&T(r[_],t,n);null!=l&&p(l)}function A(e,t,n){return this.constructor(e,n)}function L(e,t,n){var r,l,_;o.__&&o.__(e,t),l=(r=n===i)?null:n&&n.__k||t.__k,e=f(h,null,[e]),_=[],E(t,(r?t:n||t).__k=e,l||u,u,void 0!==t.ownerSVGElement,n&&!r?[n]:l?null:t.childNodes.length?a.slice.call(t.childNodes):null,_,n||u,r),z(_,e)}o={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return g(n.__E=n)}catch(t){e=t}throw e}},v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},n),this.props)),e&&s(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,i=u;var j="https://data.irozhlas.cz/anketa-rouskovne";"localhost"===window.location.hostname&&(j="http://localhost/anketa-rouskovne");var D=new XMLHttpRequest;D.addEventListener("load",(function(e){L(f("div",{id:"anketa"},JSON.parse(e.target.response).map((function(e){return f("div",{className:"respondent"},f("img",{className:"portret",src:j+"/foto/"+e.f,alt:e.p}),f("div",{className:"NE"==e.o0?"bio cervene":"ANO"==e.o0?"bio zelene":"bio"},f("div",{className:"jmeno"},"".concat(e.j," ").concat(e.p)),f("div",{className:"vek"},e.s)),f("div",{className:"odpoved",dangerouslySetInnerHTML:{__html:(t=e,null===t.o1&&(t.o1="<i>Bez odpovědi.</i>"),null===t.o2&&(t.o2="<i>Bez odpovědi.</i>"),"<p><b>".concat("1.","</b> ").concat(t.o1,"</p><p><b>").concat("2.","</b> ").concat(t.o2,"</p>"))}}));var t}))),document.getElementById("anketa-wrapper"))})),D.open("GET",j+"/data/data.json"),D.send()}]);
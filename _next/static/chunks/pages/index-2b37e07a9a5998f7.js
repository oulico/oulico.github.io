(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4863)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),s=n(7795),i=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function m(e,t,n,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function j(e){return"string"==typeof e?e:s.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,o;let{href:s,as:h,children:v,prefetch:x,passHref:b,replace:y,shallow:g,scroll:_,locale:C,onClick:N,onMouseEnter:M,onTouchStart:k,legacyBehavior:E=!1}=e,w=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,E&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==x,P=l.default.useContext(c.RouterContext),I=l.default.useContext(u.AppRouterContext),L=null!=P?P:I,S=!P,{href:T,as:R}=l.default.useMemo(()=>{if(!P){let e=j(s);return{href:e,as:h?j(h):e}}let[e,t]=a.resolveHref(P,s,!0);return{href:e,as:h?a.resolveHref(P,h):t||e}},[P,s,h]),B=l.default.useRef(T),D=l.default.useRef(R);E&&(o=l.default.Children.only(n));let H=E?o&&"object"==typeof o&&o.ref:t,[K,U,z]=f.useIntersection({rootMargin:"200px"}),A=l.default.useCallback(e=>{(D.current!==R||B.current!==T)&&(z(),D.current=R,B.current=T),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[R,H,T,z,K]);l.default.useEffect(()=>{L&&U&&O&&m(L,T,R,{locale:C})},[R,T,U,C,O,null==P?void 0:P.locale,L]);let G={ref:A,onClick(e){E||"function"!=typeof N||N(e),E&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,o,r,s,i,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:s,locale:c,scroll:i}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(h):h()}(e,L,T,R,y,g,_,C,S,O)},onMouseEnter(e){E||"function"!=typeof M||M(e),E&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(O||!S)&&m(L,T,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof k||k(e),E&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(O||!S)&&m(L,T,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||b||"a"===o.type&&!("href"in o.props)){let e=void 0!==C?C:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(R,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);G.href=t||p.addBasePath(i.addLocale(R,e,null==P?void 0:P.defaultLocale))}return E?l.default.cloneElement(o,G):l.default.createElement("a",Object.assign({},w,G),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!l,[u,f]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(c||u)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=s.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},s.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let e=s.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!u){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,u,d.current]);let h=o.useCallback(()=>{f(!1)},[]);return[p,u,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},4863:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return i}});var o=n(5893),r=n(1857),l=n(9008),a=n(1664),s=!0;function i(e){let{postsData:t}=e;return(0,o.jsxs)("div",{className:"jsx-1ee25fe49c518e47 info-container",children:[(0,o.jsxs)(l,{children:[(0,o.jsx)("title",{className:"jsx-1ee25fe49c518e47",children:"Coding between lines"}),(0,o.jsx)("meta",{name:"description",content:"Front-end Dev Blog",className:"jsx-1ee25fe49c518e47"})]}),(0,o.jsx)("picture",{className:"jsx-1ee25fe49c518e47",children:(0,o.jsx)("img",{src:"../public/images/anita.jpeg",className:"jsx-1ee25fe49c518e47"})}),(0,o.jsx)("p",{className:"jsx-1ee25fe49c518e47 info-description",children:"Hi I'm Batman, the saviour of Gotham City and I like to roam in nights to bash the bad guys."}),(0,o.jsxs)("p",{className:"jsx-1ee25fe49c518e47 info-description",children:["But please don't call me as a source for ",(0,o.jsx)("b",{className:"jsx-1ee25fe49c518e47",children:"Corona Virus"})," and it could be the ",(0,o.jsx)("b",{className:"jsx-1ee25fe49c518e47",children:"Joker"})," who might have started this mess."]}),(0,o.jsx)("hr",{className:"jsx-1ee25fe49c518e47"}),t.map(e=>(0,o.jsxs)("div",{className:"jsx-1ee25fe49c518e47",children:[(0,o.jsx)(a,{href:"/blog/".concat(e.id),children:e.title},e.title),(0,o.jsx)("p",{className:"jsx-1ee25fe49c518e47 post-description",children:e.description})]},e.id)),(0,o.jsx)(r,{id:"1ee25fe49c518e47",children:".info-container.jsx-1ee25fe49c518e47{margin:0 5%0 5%}img.jsx-1ee25fe49c518e47{width:20%;max-width:20%;height:auto;margin-left:40%}.info-description.jsx-1ee25fe49c518e47{font-size:20px}"})]})}}},function(e){e.O(0,[774,857,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
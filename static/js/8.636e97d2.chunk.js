(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[8],{164:function(t,e,n){"use strict";var c=n(2),a=n(101),s=["mousedown","touchstart"];e.a=function(t,e,n){void 0===n&&(n=s);var r=Object(c.useRef)(e);Object(c.useEffect)((function(){r.current=e}),[e]),Object(c.useEffect)((function(){for(var e=function(e){var n=t.current;n&&!n.contains(e.target)&&r.current(e)},c=0,s=n;c<s.length;c++){var o=s[c];Object(a.d)(document,o,e)}return function(){for(var t=0,c=n;t<c.length;t++){var s=c[t];Object(a.c)(document,s,e)}}}),[n,t])}},236:function(t,e,n){"use strict";n.r(e);var c=n(51),a=n(10),s=n(2),r=n(294),o=n(5),i=n(106),d=n(164),l=n(20),u=void 0,j=function(t){var e=t.stateCode,n=t.trail,j=Object(s.useState)(!1),b=Object(c.a)(j,2),f=b[0],m=b[1],O=Object(s.useRef)(),h=Object(o.g)(),v=Object(r.a)().t;Object(d.a)(O,(function(){m(!1)}));var p=Object(i.useTransition)(f,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),x=Object(s.useCallback)((function(t){m(!1),h.push("/state/".concat(t))}),[h]);return Object(l.jsxs)("div",{className:"StateDropdown",ref:O,children:[Object(l.jsx)(i.animated.h1,{className:"state-name fadeInUp",style:n,onClick:m.bind(u,!f),children:v(a.x[e])}),p((function(t,n){return n&&Object(l.jsx)(i.animated.div,{className:"dropdown",style:t,children:Object.keys(a.n).filter((function(t){return"TT"!==t&&t!==e})).sort((function(t,e){return a.x[t].localeCompare(a.x[e])})).map((function(t){return Object(l.jsx)("h1",{className:"item",onClick:x.bind(u,t),children:v(a.x[t])},t)}))})})),f&&Object(l.jsx)("div",{className:"backdrop"})]})},b=n(25);function f(t){var e,n,c,o,d,u=t.data,f=t.stateCode,m=Object(r.a)().t,O=Object(s.useMemo)((function(){var t=[];return[0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),h=Object(i.useSpring)({total:Object(b.h)(u,"total","tested"),config:a.u});return Object(l.jsxs)("div",{className:"StateHeader",children:[Object(l.jsxs)("div",{className:"header-left",children:[Object(l.jsx)(j,{stateCode:f,hyperlink:!1,trail:O[0]}),(null===u||void 0===u||null===(e=u.meta)||void 0===e?void 0:e.last_updated)&&Object(l.jsx)("h5",{className:"fadeInUp",style:O[1],children:"".concat(m("Last Updated on")," ").concat(Object(b.c)(u.meta.last_updated,"dd MMM, p")," ").concat(m("IST"))})]}),Object(l.jsxs)("div",{className:"header-right fadeInUp",style:O[2],children:[Object(l.jsx)("h5",{children:m("Tested")}),Object(l.jsx)(i.animated.h2,{children:h.total.to((function(t){return Object(b.e)(t,"long")}))}),(null===u||void 0===u||null===(n=u.meta)||void 0===n||null===(c=n.tested)||void 0===c?void 0:c.date)&&Object(l.jsx)("h5",{className:"timestamp",children:"".concat(m("As of")," ").concat(Object(b.c)(u.meta.tested.date,"dd MMMM"))}),(null===u||void 0===u||null===(o=u.meta)||void 0===o||null===(d=o.tested)||void 0===d?void 0:d.source)&&Object(l.jsxs)("h5",{children:["".concat(m("per")," "),Object(l.jsx)("a",{href:u.meta.tested.source,target:"_noblank",children:m("source")})]})]})]})}e.default=Object(s.memo)(f)}}]);
//# sourceMappingURL=8.636e97d2.chunk.js.map
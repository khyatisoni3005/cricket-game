"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33577],{41205:function(e,n,t){t.d(n,{_:function(){return a}});var i=t(70865),o=t(52322),r=(0,t(6620).Z)((0,o.jsx)("path",{d:"M9.867 12.133L8 14l8 8 8-8-1.867-1.867L16 18.266l-6.133-6.133z"}),"ChevronDown.svg"),a=function(e){return(0,o.jsx)(r,(0,i.Z)({viewBox:"0 0 32 32"},e))}},40990:function(e,n,t){t.r(n),t.d(n,{SiteHeaderLinks:function(){return O}});var i=t(47842),o=t(70865),r=t(96670),a=t(87394),s=t(52322),l=t(83249),u=t(62197),c=t(48289),d=t(9390),f=t(99118),v=t(87042),p=t(23490),m=t(52309),h=t(41205),b=t(25237),k=t.n(b),w=t(2784),x=t(8740),L=k()(function(){return t.e(82143).then(t.bind(t,82143)).then(function(e){return e.CrawlableMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[82143]}},ssr:!0}),M=(0,x.ZL)()(function(e,n){var t=e.tokens.fontWeight,i=n.isPricingDropdown;return{dropdown:(0,r.Z)((0,o.Z)({},i&&{position:"relative"}),{display:"inline-block"}),buttonLabel:{fontSize:"inherit",fontWeight:t.bold}}}),Z=function(e){var n=e.buttonLabel,t=e.buttonClasses,i=e.links,o=e.clickAnalyticsLabel,r=e.href,c=e.target,b=e.openedMenu,k=e.setOpenedMenu,x=e.parentLinkId,Z=M({isPricingDropdown:/^\/pricing/.test(r)}).classes,y=(0,a.Z)((0,w.useState)(!1),2),g=y[0],j=y[1],N=(0,a.Z)((0,w.useState)(0),2),C=N[0],I=N[1],D=(0,w.useRef)(),S=(0,a.Z)((0,w.useState)(),2),A=S[0],P=S[1],B=A===i.length-1,E=0===A,O=(0,m.B)(g),T=(0,p.N)().isGoodBot,_=function(){clearTimeout(C),j(!0),k(r)},z=(0,w.useCallback)(function(){clearTimeout(C),j(!1),P(void 0),k(null)},[C,k]),F=function(){I(setTimeout(z,1e3))},K=function(e){if(e.key===v.Mf&&!e.shiftKey){if(e.preventDefault(),B){z();return}j(!0),P(void 0===A?0:A+1)}if(e.key===v.Mf&&e.shiftKey){if(void 0===A){z();return}if(E){setTimeout(function(){var e;return null==D?void 0:null===(e=D.current)||void 0===e?void 0:e.focus()},0),P(void 0);return}P(A-1)}};return(0,w.useEffect)(function(){var e=b===r;b&&!e&&g&&!e&&z()},[b,r,g,z]),(0,s.jsx)(f.Z,{onClickAway:z,children:(0,s.jsxs)("div",{className:Z.dropdown,onMouseLeave:function(){return g&&F()},children:[(0,s.jsx)(l.Z,{"aria-controls":g?"".concat(n,"-menu"):void 0,"aria-haspopup":"true","aria-label":n,"data-automation":"menuDropDownButton_".concat(n),linkAs:r||i[0].as,classes:t,clickAnalyticsLabel:o,component:d.r,endIcon:(0,s.jsx)(h._,{}),href:r||i[0].href,target:c,variant:"text",onKeyDown:K,onMouseEnter:_,onMouseLeave:z,onClick:z,ref:D,children:(0,s.jsx)(u.Z,{className:Z.buttonLabel,color:"inherit",children:n})}),(O||T)&&(0,s.jsx)(L,{links:i,href:r,buttonLabel:n,isMenuOpen:g,openMenu:_,closeMenu:F,closeMenuNow:z,optionSelectedIndex:A,handleTabNavigation:K,isLastItem:B,parentLinkId:x})]})})},y=t(5129),g=t(9823),j=t(50930),N=t(66358),C=t(30299),I=t(73906),D=t(85801),S=t(47999),A=k()(function(){return t.e(82143).then(t.bind(t,82143)).then(function(e){return e.CrawlableMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[82143]}},ssr:!0}),P=(0,x.ZL)()(function(e){var n=e.tokens,t=n.color;return{dropdown:{display:"inline-block"},overflowMenuButton:{marginRight:n.spacing["4xl"],color:t["black-50"]}}}),B=function(e){var n=e.links,t=e.clickAnalyticsLabel,i=e.href,o=e.openedMenu,r=e.setOpenedMenu,l=P().classes,u=(0,a.Z)((0,w.useState)(!1),2),c=u[0],d=u[1],h=(0,a.Z)((0,w.useState)(0),2),b=h[0],k=h[1],x=(0,w.useRef)(),L=(0,a.Z)((0,w.useState)(),2),M=L[0],Z=L[1],y=M===n.length-1,g=0===M,j=(0,m.B)(c),N=(0,p.N)().isGoodBot,C=function(){clearTimeout(b),d(!0),r(i)},B=(0,w.useCallback)(function(){clearTimeout(b),d(!1),Z(void 0),r(null)},[b,r]),E=function(){k(setTimeout(B,1e3))},O=function(e){if(e.key===v.Mf&&!e.shiftKey){if(e.preventDefault(),y){B();return}d(!0),Z(void 0===M?0:M+1)}if(e.key===v.Mf&&e.shiftKey){if(void 0===M){B();return}if(g){setTimeout(function(){return null==x?void 0:x.current},0),Z(void 0);return}Z(M-1)}};return(0,w.useEffect)(function(){var e=o===i;o&&!e&&c&&!e&&B()},[o,i,c,B]),(0,s.jsx)(f.Z,{onClickAway:B,children:(0,s.jsxs)("div",{className:l.dropdown,onMouseLeave:function(){return c&&E()},children:[(0,s.jsx)(S.z,{"aria-controls":c?"overflow-menu":void 0,"aria-haspopup":"true","aria-label":"overflow-menu","data-automation":"menuDropDownButton_overflow-menu",component:D.Z,variant:"text",onKeyDown:O,onMouseEnter:C,onMouseLeave:B,className:l.overflowMenuButton,clickTrackProp:"clickAnalyticsLabel",clickAnalyticsLabel:t,children:(0,s.jsx)(I.Z,{})}),(j||N)&&(0,s.jsx)(A,{links:n,subMenuCols:n,buttonLabel:"",isMenuOpen:c,openMenu:C,closeMenu:E,closeMenuNow:B,optionSelectedIndex:M,handleTabNavigation:O,isLastItem:y,href:"",useInViewFlag:!0})]})})},E=function(e){var n=e.responsiveLinkProps,t=e.overflowMenuItems,i=e.setOverflowMenuItems,l=e.link,u=e.nextItem,d=e.primaryItems,f=e.openedMenu,v=e.setOpenedMenu,m=e.children,h=(0,y.y)().classes,b=(0,a.Z)((0,w.useState)(null),2)[1],k=function(){return b(null)},x=(0,w.useMemo)(function(){return d.filter(function(e){return t.find(function(n){return n.label===e.label})})},[t,d]),L=x[0]&&x[0].label===(null==u?void 0:u.label);(0,w.useEffect)(function(){return null==window||window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}},[]);var M=(0,a.Z)((0,w.useState)(!0),2),Z=M[0],g=M[1],I=(0,p.N)().isGoodBot,D=(0,C.YD)({threshold:.96,initialInView:!0,rootMargin:"500px 0px 0px 0px",onChange:function(e){g(e),e||I?i(function(e){var n=e.filter(function(e){return e.label!==l.label});return(0,j.Z)(n)}):i(function(e){return e.find(function(e){return e.label===l.label})?e:[l].concat((0,j.Z)(e))})}}).ref;return(0,s.jsxs)("div",{className:h.primaryNavItem,ref:D,children:[(0,s.jsx)("div",(0,r.Z)((0,o.Z)({},n),{className:Z?h.showPrimaryNavItem:h.hidePrimaryNavItem,children:m})),L&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:h.overflowButtonDivider,orientation:"vertical"}),(0,s.jsx)(B,{links:x,clickAnalyticsLabel:N.Yjv,href:"overflow",openedMenu:f,setOpenedMenu:v})]})]})},O=function(e){var n=e.classesProps,t=e.isPrimary,f=void 0!==t&&t,v=e.links,p=e.className,m=(0,y.y)(),h=m.classes,b=m.cx,k=(0,g.D)().isBrandSstk,x=(0,a.Z)((0,w.useState)(null),2),L=x[0],M=x[1],j=(0,a.Z)((0,w.useState)([]),2),N=j[0],C=j[1];return(0,s.jsx)(s.Fragment,{children:v.map(function(e,t){var a,m,x=e.clickAnalyticsLabel,y=e.label,g=e.href,j=e.isAbsoluteUrl,I=e.isCoreUrl,D=e.subMenuLinks,S=e.hideLgDown,A=e.hideLgCustomDown,P=e.hideLgCustomUp,B=e.hasLeftDivider,O=e.target,T=e.dataOptimize,_=e.hasRightDivider,z=S||A||P?{className:b((a={},(0,i.Z)(a,h.hideLgCustomDown,A),(0,i.Z)(a,h.hideLgDown,S),(0,i.Z)(a,h.hideLgCustomUp,P),a))}:{},F=D?(0,s.jsx)("div",{className:p,"data-optimize":T,children:(0,s.jsx)(Z,{buttonClasses:{root:b(h.navPrimary,h.navSpacing,null==n?void 0:n.textColor,(0,i.Z)({},h.sstkPrimaryNavLinks,k)),endIcon:h.endIcon},buttonLabel:y,parentLinkId:null==e?void 0:e.id,href:g,links:D,clickAnalyticsLabel:x,target:O,openedMenu:L,setOpenedMenu:M})}):(0,s.jsx)(l.Z,{"aria-label":y,className:b(h.navPrimary,h.pointerEventsNone,null==n?void 0:n.textColor,0===t&&f?h.navPrimaryLeftSpace:h.navSpacing,p),clickAnalyticsLabel:x,component:d.r,onMouseEnter:function(){return L&&M(g)},href:g,isAbsoluteUrl:j,rel:g?"noopener noreferrer":void 0,isCoreUrl:I,role:"link",target:O||(I?"_blank":"_self"),variant:"text","data-optimize":T,children:(0,s.jsx)(u.Z,{className:b(h.navPrimary,h.pointerEventsAuto,h.bold,null==n?void 0:n.textColor,(m={},(0,i.Z)(m,h.sstkPrimaryNavLinks,k),(0,i.Z)(m,h.navSecondaryLink,!f),m)),color:"inherit",children:y})});return(0,s.jsx)(w.Fragment,{children:(0,s.jsxs)(E,(0,r.Z)((0,o.Z)({},z),{overflowMenuItems:N,setOverflowMenuItems:C,link:e,nextItem:v[t+1],primaryItems:v,openedMenu:L,setOpenedMenu:M,children:[B&&(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(c.Z,{className:h.divider,orientation:"vertical"})]}),F,_&&(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(c.Z,{className:h.divider,orientation:"vertical"})]})]}))},y)})})}}}]);
//# sourceMappingURL=SiteHeaderLinks.dc003dfa5136a872.js.map
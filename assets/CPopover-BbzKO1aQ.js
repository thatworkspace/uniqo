import{r,_ as z,R as n,b as i,c as G,P as e,A as J,f as K}from"./index-wjGqhj3o.js";import{u as Q,r as U,s as W}from"./DefaultLayout-iwp_ctrC.js";import{g as X,e as Y}from"./getRTLPlacement-OG9dRBeb.js";var T=r.forwardRef(function(t,C){var L=t.children,p=t.animation,S=p===void 0?!0:p,M=t.className,H=t.container,O=t.content,d=t.delay,c=d===void 0?0:d,m=t.fallbackPlacements,x=m===void 0?["top","right","bottom","left"]:m,v=t.offset,F=v===void 0?[0,8]:v,b=t.onHide,h=t.onShow,g=t.placement,q=g===void 0?"top":g,A=t.title,y=t.trigger,a=y===void 0?"click":y,u=t.visible,_=z(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","title","trigger","visible"]),o=r.useRef(null),l=r.useRef(null),j=Q(C,o),P=r.useRef("popover".concat(Math.floor(Math.random()*1e6))),w=U(),B=w.initPopper,k=w.destroyPopper,R=r.useState(!1),D=R[0],E=R[1],N=r.useState(u),f=N[0],s=N[1],I=typeof c=="number"?{show:c,hide:c}:c,V={modifiers:[{name:"arrow",options:{element:".popover-arrow"}},{name:"flip",options:{fallbackPlacements:x}},{name:"offset",options:{offset:F}}],placement:X(q,l.current)};return r.useEffect(function(){s(u)},[u]),r.useEffect(function(){return f&&(E(!0),o.current&&(o.current.classList.remove("fade","show"),k()),setTimeout(function(){l.current&&o.current&&(S&&o.current.classList.add("fade"),B(l.current,o.current,V),o.current.classList.add("show"),h&&h())},I.show)),function(){o.current&&(o.current.classList.remove("show"),b&&b(),Y(function(){k(),E(!1)},o.current))}},[f]),n.createElement(n.Fragment,null,n.cloneElement(L,i(i(i(i(i({},f&&{"aria-describedby":P.current}),{ref:l}),(a==="click"||a.includes("click"))&&{onClick:function(){return s(!f)}}),(a==="focus"||a.includes("focus"))&&{onFocus:function(){return s(!0)},onBlur:function(){return s(!1)}}),(a==="hover"||a.includes("hover"))&&{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}})),n.createElement(W,{container:H,portal:!0},D&&n.createElement("div",i({className:G("popover","bs-popover-auto",M),id:P.current,ref:j,role:"tooltip"},_),n.createElement("div",{className:"popover-arrow"}),n.createElement("div",{className:"popover-header"},A),n.createElement("div",{className:"popover-body"},O))))});T.propTypes={animation:e.bool,children:e.node,className:e.string,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:J,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),title:e.oneOfType([e.string,e.node]),trigger:K,visible:e.bool};T.displayName="CPopover";export{T as C};

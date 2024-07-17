import{r as c,_ as g,R as d,b as y,c as v,P as r,d as H,j as e}from"./index-BR3ARh_4.js";import{u as P,T as W,a as x}from"./DefaultLayout-DOu8LFMk.js";import{C as q,c as p}from"./index.es-DF-kLOaj.js";import{C as B}from"./CRow-CPxyEdjd.js";import{C as j,a as u}from"./CCardBody-CpMRY2MS.js";import{C as f}from"./CCardHeader-CQKT6Prh.js";import{C as D}from"./CCloseButton-DrxYYZX1.js";var s=c.forwardRef(function(i,t){var o=i.children,n=i.className,a=i.color,h=a===void 0?"primary":a,m=i.dismissible,R=i.variant,b=i.visible,k=b===void 0?!0:b,E=i.onClose,T=g(i,["children","className","color","dismissible","variant","visible","onClose"]),C=c.useRef(null),G=P(t,C),N=c.useState(k),L=N[0],w=N[1];return c.useEffect(function(){w(k)},[k]),d.createElement(W,{in:L,mountOnEnter:!0,nodeRef:C,onExit:E,timeout:150,unmountOnExit:!0},function(F){return d.createElement("div",y({className:v("alert",R==="solid"?"bg-".concat(h," text-white"):"alert-".concat(h),{"alert-dismissible fade":m,show:F==="entered"},n),role:"alert"},T,{ref:G}),o,m&&d.createElement(D,{onClick:function(){return w(!1)}}))})});s.propTypes={children:r.node,className:r.string,color:H.isRequired,dismissible:r.bool,onClose:r.func,variant:r.string,visible:r.bool};s.displayName="CAlert";var A=c.forwardRef(function(i,t){var o=i.children,n=i.as,a=n===void 0?"h4":n,h=i.className,m=g(i,["children","as","className"]);return d.createElement(a,y({className:v("alert-heading",h)},m,{ref:t}),o)});A.propTypes={as:r.elementType,children:r.node,className:r.string};A.displayName="CAlertHeading";var l=c.forwardRef(function(i,t){var o=i.children,n=i.className,a=g(i,["children","className"]);return d.createElement(q,y({className:v("alert-link",n)},a,{ref:t}),o)});l.propTypes={children:r.node,className:r.string};l.displayName="CAlertLink";const K=()=>e.jsxs(B,{children:[e.jsx(p,{xs:12,children:e.jsxs(j,{className:"mb-4",children:[e.jsx(f,{children:e.jsx("strong",{children:"React Alert"})}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["React Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the ",e.jsx("strong",{children:"required"})," contextual ",e.jsx("code",{children:"color"})," ","props (e.g., ",e.jsx("code",{children:"primary"}),"). For inline dismissal, use the"," ",e.jsx("a",{href:"https://coreui.io/react/docs/components/alert#dismissing",children:"dismissing prop"}),"."]}),e.jsxs(x,{href:"components/alert",children:[e.jsx(s,{color:"primary",children:"A simple primary alert—check it out!"}),e.jsx(s,{color:"secondary",children:"A simple secondary alert—check it out!"}),e.jsx(s,{color:"success",children:"A simple success alert—check it out!"}),e.jsx(s,{color:"danger",children:"A simple danger alert—check it out!"}),e.jsx(s,{color:"warning",children:"A simple warning alert—check it out!"}),e.jsx(s,{color:"info",children:"A simple info alert—check it out!"}),e.jsx(s,{color:"light",children:"A simple light alert—check it out!"}),e.jsx(s,{color:"dark",children:"A simple dark alert—check it out!"})]})]})]})}),e.jsx(p,{xs:12,children:e.jsxs(j,{className:"mb-4",children:[e.jsxs(f,{children:[e.jsx("strong",{children:"React Alert"})," ",e.jsx("small",{children:"Link color"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Use the ",e.jsx("code",{children:"<CAlertLink>"})," component to immediately give matching colored links inside any alert."]}),e.jsxs(x,{href:"components/alert#link-color",children:[e.jsxs(s,{color:"primary",children:["A simple primary alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]}),e.jsxs(s,{color:"secondary",children:["A simple secondary alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]}),e.jsxs(s,{color:"success",children:["A simple success alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]}),e.jsxs(s,{color:"danger",children:["A simple danger alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]}),e.jsxs(s,{color:"warning",children:["A simple warning alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]}),e.jsxs(s,{color:"info",children:["A simple info alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]}),e.jsxs(s,{color:"light",children:["A simple light alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]}),e.jsxs(s,{color:"dark",children:["A simple dark alert with ",e.jsx(l,{href:"#",children:"an example link"}),". Give it a click if you like."]})]})]})]})}),e.jsx(p,{xs:12,children:e.jsxs(j,{className:"mb-4",children:[e.jsxs(f,{children:[e.jsx("strong",{children:"React Alert"})," ",e.jsx("small",{children:"Additional content"})]}),e.jsxs(u,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Alert can also incorporate supplementary components & elements like heading, paragraph, and divider."}),e.jsx(x,{href:"components/alert#additional-content",children:e.jsxs(s,{color:"success",children:[e.jsx(A,{as:"h4",children:"Well done!"}),e.jsx("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsx("hr",{}),e.jsx("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})})]})]})}),e.jsx(p,{xs:12,children:e.jsxs(j,{className:"mb-4",children:[e.jsxs(f,{children:[e.jsx("strong",{children:"React Alert"})," ",e.jsx("small",{children:"Dismissing"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Alerts can also be easily dismissed. Just add the ",e.jsx("code",{children:"dismissible"})," prop."]}),e.jsx(x,{href:"components/alert#dismissing",children:e.jsxs(s,{color:"warning",dismissible:!0,onClose:()=>{alert("👋 Well, hi there! Thanks for dismissing me.")},children:[e.jsx("strong",{children:"Go right ahead"})," and click that dimiss over there on the right."]})})]})]})})]});export{K as default};

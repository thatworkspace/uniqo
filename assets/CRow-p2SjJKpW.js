import{r as m,_ as p,R as g,c as x,P as e}from"./index-wjGqhj3o.js";var y=["xxl","xl","lg","md","sm","xs"],l=m.forwardRef(function(c,u){var i=c.children,f=c.className,n=p(c,["children","className"]),s=[];return y.forEach(function(a){var r=n[a];delete n[a];var o=a==="xs"?"":"-".concat(a);typeof r=="object"&&(r.cols&&s.push("row-cols".concat(o,"-").concat(r.cols)),typeof r.gutter=="number"&&s.push("g".concat(o,"-").concat(r.gutter)),typeof r.gutterX=="number"&&s.push("gx".concat(o,"-").concat(r.gutterX)),typeof r.gutterY=="number"&&s.push("gy".concat(o,"-").concat(r.gutterY)))}),g.createElement("div",{className:x("row",s,f),ref:u},i)}),t=e.shape({cols:e.oneOfType([e.oneOf(["auto"]),e.number,e.string]),gutter:e.oneOfType([e.string,e.number]),gutterX:e.oneOfType([e.string,e.number]),gutterY:e.oneOfType([e.string,e.number])});l.propTypes={children:e.node,className:e.string,xs:t,sm:t,md:t,lg:t,xl:t,xxl:t};l.displayName="CRow";export{l as C};

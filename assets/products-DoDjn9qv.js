import{m as Ve,r,D as We,G as He,j as e,C as X,E as he,F as qe}from"./index-CvFK3u57.js";import{a as n,d as S,c as o}from"./index.es-DNhQ2VXc.js";import{C as ue,a as pe}from"./CCardBody-BITuGE7J.js";import{C as xe}from"./CCardHeader-C-RrqkGF.js";import{C as ze,d as Oe,b as Je,e as Y}from"./CTable-DikoLCxN.js";import{a as ee,c as Ue}from"./cil-trash-JhHsuKen.js";import{C as Ze}from"./CForm-FBH2ZRYC.js";import{C as se}from"./CRow-DAKXHcji.js";import{C as c}from"./CFormLabel-B32DasOK.js";import{C as ge}from"./CFormSelect-C4N5YH7s.js";import{C as d}from"./CFormInput-B1cfKJrF.js";import{C as N}from"./CInputGroup-DjbPQiL2.js";import{C as je}from"./CInputGroupText-BnsLK7Ah.js";import{C as ae}from"./CFormTextarea-lxZAkHKx.js";import{C as te}from"./CFormCheck-Dtf_4lFh.js";import{C as Qe,a as Ke,b as Xe,c as Ye}from"./CModalTitle-BUFAEIAm.js";import{C as es}from"./CModalBody-yQzp_CDL.js";import"./CFormControlWrapper-WlQcafr7.js";import"./CFormControlValidation-DRr47XzQ.js";import"./DefaultLayout-32k_-vab.js";import"./CCloseButton-C2Zq3fSQ.js";const ys=()=>{const{t:a,i18n:u}=Ve(),[P,f]=r.useState(!1),[i,re]=r.useState(0),[k,D]=r.useState(!1),[oe,Ce]=r.useState(!1),[ne,be]=r.useState(!1),[le,I]=r.useState(!1),[A,v]=r.useState(""),[E,x]=r.useState(""),[T,g]=r.useState(""),[$,j]=r.useState(""),[L,M]=r.useState(""),[R,B]=r.useState(""),[G,V]=r.useState(""),[W,H]=r.useState(""),[q,z]=r.useState(""),[O,J]=r.useState(""),[h,p]=r.useState([{lang:"ar",key:"",value:""}]),[C,ce]=r.useState([]),[Ne,de]=r.useState("NEW"),m=r.useRef(null),[y,fe]=r.useState([]),[ve,ye]=r.useState(""),[ss,we]=r.useState([]),[U,ie]=r.useState([]),[Z,_e]=r.useState(!0),[Fe,w]=r.useState(!1),[_,me]=r.useState(!1),b=r.useRef(null);r.useEffect(()=>{Se(),Q(),m.current.setAttribute("process","NEW"),document.title="Admin - Products"},[]);const Se=async()=>{const s=await We();fe(s),s.length>0&&v(s[0].id)},Q=async()=>{const s=await He();we(s),ie(s),_e(!1)},Pe=()=>{m.current.setAttribute("process","NEW"),de("NEW"),x(""),g(""),j(""),x(""),g(""),j(""),M(""),B(""),H(""),z(""),J(""),V(""),p([{lang:"ar",key:"",value:""}]),y.length>0&&v(y[0].id),f(!0)},ke=()=>{p([...h,{lang:"ar",key:"",value:""}])},De=s=>{if(h.length==1){I(!1),p([{key:"",value:""}]);return}const t=h.filter((l,F)=>F!==s);p(t)},Ie=s=>{const t=Array.from(s.target.files);ce([...C,...t])},Ae=s=>{const t=[...C];t.splice(s,1),ce(t)},K=(s,t)=>{const l=h.map((F,Ge)=>Ge===s?{...F,[t.target.name]:t.target.value}:F);p(l)},Ee=async s=>{switch(s.preventDefault(),m.current.getAttribute("process")){case"NEW":D(!0),await he(A,E,T,$,L,R,G,C,W,q,O,h,i==1);break;case"EDIT":const t=JSON.parse(m.current.getAttribute("item"));D(!0),await he(A,E,T,$,L,R,G,C,W,q,O,h,i==1,t);break}f(!1),Q(),D(!1),x(""),g(""),j("")},Te=s=>{b.current.setAttribute("process","DELETE"),b.current.setAttribute("id",s),w(!0)},$e=s=>{f(!0),x(s.arName),g(s.frName),j(s.enName),M(s.price),B(s.discount),H(s.arDescription),z(s.frDescription),J(s.enDescription),p(s.properties),V(s.quantity),v(s.category),s.properties!=null&&s.properties.length>0&&I(!0),m.current.setAttribute("process","EDIT"),de("EDIT"),m.current.setAttribute("item",JSON.stringify(s))},Le=async()=>{const s=b.current.getAttribute("process"),t=b.current.getAttribute("id");switch(s){case"DELETE":me(!0),await qe(t),me(!1),w(!1),Q();break}},Me=s=>{ye(s);let t=y.filter(l=>l[`${u.language}Name`].toLowerCase().includes(s.toLowerCase()));ie(t)},Re=e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:m}),!P&&e.jsx(e.Fragment,{children:e.jsxs(ue,{className:"mb-4",children:[e.jsx(xe,{children:a("admin_dashboard.products.all_products")}),e.jsxs(pe,{className:"px-0 py-1",children:[!Z&&e.jsx(ze,{className:"my-0",children:e.jsx(Oe,{children:U.map((s,t)=>e.jsxs(Je,{style:t==U.length-1?{borderColor:"transparent"}:{},children:[e.jsx(Y,{children:e.jsxs("div",{className:"d-flex bd-highlight",children:[e.jsx("div",{className:"p-2 bd-highlight",children:e.jsx("div",{className:"image-container-50",children:e.jsx("img",{className:"rounded image-cover",src:s.imageLinks[0]})})}),e.jsx("div",{className:"p-2 bd-highlight align-self-center",children:s[`${u.language}Name`]})]})}),e.jsx(Y,{className:"py-3 d-none d-sm-table-cell",children:s.discount!=0?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"py-0 my-0 text-secondary",children:e.jsxs("del",{children:[s.price," ",a(`common.${u.language}Currency`)]})}),e.jsxs("p",{className:"py-0 my-0",children:[s.price-s.discount," ",a(`common.${u.language}Currency`)]})]}):e.jsxs("p",{className:"my-0 mt-3",children:[s.price," ",a(`common.${u.language}Currency`)]})}),e.jsx(Y,{width:"40px",children:e.jsxs("div",{className:"d-flex my-2 flex-row-reverse bd-highlight h-50p",children:[e.jsx(n,{color:"danger text-white flex-grow-0 align-self-center bd-highlight",size:"sm",onClick:()=>Te(s.id),children:e.jsx(S,{icon:ee,style:{width:"15px"},customClassName:"nav-icon text-white"})}),e.jsx(n,{color:"primary me-2 flex-grow-0 align-self-center bd-highlight",size:"sm",onClick:()=>$e(s),children:e.jsx(S,{icon:Ue,style:{width:"15px"},customClassName:"nav-icon text-white"})})]})})]},t))})}),Z&&e.jsx("div",{className:"text-center",children:e.jsx(X,{color:"white",className:"ms-2"})}),!Z&&U.length=="0"&&e.jsxs("p",{className:"text-center my-3",children:[" ",a("common.no_results")]})]})]})})]}),Be=e.jsx(e.Fragment,{children:P&&e.jsxs(ue,{className:"mb-4",children:[e.jsx(xe,{className:"py-0",children:e.jsxs("div",{className:"d-flex bd-highlight",children:[e.jsx("div",{className:"flex-grow-1 bd-highlight px-0",children:e.jsx("h4",{className:"mt-2 pt-1",children:m.current.getAttribute("process")=="NEW"?a("admin_dashboard.products.add_new"):a("admin_dashboard.products.edit")})}),e.jsx("div",{className:"p-2 pe-0 bd-highlight",children:e.jsx(n,{className:"float-end btn-block",onClick:()=>f(!1),type:"button",color:"danger",children:e.jsx("span",{className:"text-white",children:a("common.cancel")})})})]})}),e.jsx(pe,{children:e.jsxs(Ze,{onSubmit:Ee,children:[e.jsxs(se,{children:[e.jsx(c,{htmlFor:"exampleFormControlInput1",children:a("admin_dashboard.products.prodduct_type")}),e.jsx(o,{xs:12,children:e.jsxs(se,{children:[e.jsx(o,{xs:6,children:e.jsx("div",{className:"d-grid gap-2",children:e.jsx(n,{onClick:()=>re(0),color:"secondary",variant:i==1?"outline":void 0,children:a("admin_dashboard.products.add_normal")})})}),e.jsx(o,{xs:6,children:e.jsx("div",{className:"d-grid gap-2",children:e.jsx(n,{onClick:()=>re(1),color:"secondary",variant:i==0?"outline":void 0,children:a("admin_dashboard.products.add_special")})})})]})}),e.jsx(c,{htmlFor:"exampleFormControlInput1",children:a("admin_dashboard.products.category")}),e.jsx(o,{xs:12,children:e.jsx(ge,{"aria-label":"Default select example",value:A,onChange:s=>v(s.target.value),children:y.map((s,t)=>e.jsx("option",{value:s.id,children:s[`${u.language}Name`]},t))})}),e.jsx("div",{className:"mt-2"}),e.jsxs(o,{xs:12,sm:4,children:[e.jsxs(c,{className:"mt-2",htmlFor:"exampleFormControlInput1",children:[a("admin_dashboard.products.name")," (",a("common.ar"),")"]}),e.jsx(d,{placeholder:a("admin_dashboard.products.name")+` (${a("common.ar")})...`,value:E,onChange:s=>x(s.target.value)})]}),e.jsxs(o,{xs:12,sm:4,className:"mt-2 mt-sm-0",children:[e.jsxs(c,{className:"mt-2",htmlFor:"exampleFormControlInput1",children:[a("admin_dashboard.products.name")," (",a("common.fr"),")"]}),e.jsx(d,{placeholder:a("admin_dashboard.products.name")+` (${a("common.fr")})...`,value:T,onChange:s=>g(s.target.value)})]}),e.jsxs(o,{xs:12,sm:4,className:"mt-2 mt-sm-0",children:[e.jsxs(c,{className:"mt-2",htmlFor:"exampleFormControlInput1",children:[a("admin_dashboard.products.name")," (",a("common.en"),")"]}),e.jsx(d,{placeholder:a("admin_dashboard.products.name")+` (${a("common.en")})...`,value:$,onChange:s=>j(s.target.value)})]}),e.jsx("div",{className:"mt-2"}),e.jsxs(o,{xs:12,sm:4,children:[e.jsx(c,{className:"mt-2",htmlFor:"exampleFormControlInput1",children:a("admin_dashboard.products.price")}),e.jsxs(N,{children:[e.jsx(d,{pattern:"[0-9]*[.]?[0-9]*",placeholder:a("admin_dashboard.products.price")+"...",value:L,onChange:s=>M(s.target.value)}),e.jsx(je,{id:"basic-addon1",children:"DZD"})]})]}),e.jsxs(o,{xs:12,sm:4,className:"mt-2 mt-sm-0",children:[e.jsx(c,{className:"mt-2",htmlFor:"exampleFormControlInput1",children:a("admin_dashboard.products.discount")}),e.jsxs(N,{children:[e.jsx(d,{pattern:"[0-9]*[.]?[0-9]*",placeholder:a("admin_dashboard.products.discount")+"...",value:R,onChange:s=>B(s.target.value)}),e.jsx(je,{id:"basic-addon1",children:"DZD"})]})]}),e.jsxs(o,{xs:12,sm:4,className:"mt-2 mt-sm-0",children:[e.jsx(c,{className:"mt-2",htmlFor:"exampleFormControlInput1",children:a("admin_dashboard.products.quantity")}),e.jsx(N,{children:e.jsx(d,{pattern:"[0-9]*[.]?[0-9]*",placeholder:a("admin_dashboard.products.quantity")+"...",value:G,onChange:s=>V(s.target.value)})})]}),e.jsxs(o,{xs:12,children:[e.jsxs(c,{className:"mt-2",htmlFor:"exampleFormControlInput1",children:[a("admin_dashboard.products.images"),Ne=="EDIT"&&e.jsxs("small",{className:"text-warning",children:[" (",a("admin_dashboard.products.edit_image_note"),")"]})]}),e.jsx(d,{type:"file",accept:"image/*",multiple:!0,onChange:Ie}),e.jsx("div",{cs:12,className:"overflow-auto mt-2",style:{whiteSpace:"nowrap"},children:C.map((s,t)=>e.jsxs("div",{className:"image-box mx-1",style:{marginBottom:"10px"},children:[e.jsx("div",{className:"image-container-200",children:e.jsx("img",{className:"rounded image-cover",src:URL.createObjectURL(s),alt:`Image ${t}`})}),e.jsx(n,{onClick:()=>Ae(t),shape:"rounded-pill",type:"button",color:"danger",children:e.jsx(S,{icon:ee,className:"text-white"})})]},t))})]}),e.jsxs(o,{xs:12,className:`mt-3 ${i==1?"d-none":""}`,children:[e.jsx(c,{htmlFor:"exampleFormControlTextarea1",children:a("admin_dashboard.products.description")+` (${a("common.ar")})`}),e.jsx(ae,{value:W,onChange:s=>H(s.target.value),id:"exampleFormControlTextarea1",rows:3})]}),e.jsxs(o,{xs:12,className:`mt-3 ${i==1?"d-none":""}`,children:[e.jsx(te,{id:"fr_desc",label:a("admin_dashboard.products.description")+` (${a("common.fr")})`,checked:oe,onChange:s=>Ce(s.target.checked)}),oe&&e.jsx(ae,{className:"force-ltr",value:q,onChange:s=>z(s.target.value),id:"exampleFormControlTextarea1",rows:3})]}),e.jsxs(o,{xs:12,className:`mt-1 ${i==1?"d-none":""}`,children:[e.jsx(te,{id:"en_desc",label:a("admin_dashboard.products.description")+` (${a("common.en")})`,checked:ne,onChange:s=>be(s.target.checked)}),ne&&e.jsx(ae,{className:"force-ltr",value:O,onChange:s=>J(s.target.value),id:"exampleFormControlTextarea1",rows:3})]}),e.jsxs(o,{xs:12,className:`mt-1 ${i==1?"d-none":""}`,children:[e.jsx(te,{id:"props",label:a("admin_dashboard.products.properties"),checked:le,onChange:s=>I(s.target.checked)}),le&&e.jsxs(e.Fragment,{children:[h.map((s,t)=>e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs(N,{children:[e.jsxs(ge,{name:"lang",id:"inputGroupSelect01",value:s.lang,onChange:l=>K(t,l),style:{flex:"0 0 auto",width:"20%"},children:[e.jsx("option",{value:"ar",children:a("common.language.ar")}),e.jsx("option",{value:"fr",children:a("common.language.fr")}),e.jsx("option",{value:"en",children:a("common.language.en")})]}),e.jsx(d,{name:"key",placeholder:a("admin_dashboard.products.property_name"),"aria-label":"Text input with dropdown button",value:s.key,onChange:l=>K(t,l)}),e.jsx(d,{name:"value","aria-label":"Text input with dropdown button",placeholder:a("admin_dashboard.products.property_value"),value:s.value,onChange:l=>K(t,l)}),e.jsx(n,{onClick:()=>De(t),type:"button",color:"danger",children:e.jsx(S,{icon:ee,className:"text-white"})})]})},t)),e.jsx(n,{onClick:ke,type:"button",color:"primary",children:a("common.new")})]})]})]}),e.jsxs(n,{disabled:k,className:"mt-3 float-end btn-block w-25",type:"submit",color:"success",children:[!k&&e.jsx("span",{className:"text-white",children:a("common.save")}),k&&e.jsxs("span",{children:[" ",e.jsx(X,{size:"sm",color:"white"})]})]})]})})]})});return e.jsxs(e.Fragment,{children:[e.jsx(se,{children:e.jsxs(o,{xs:12,className:"px-0 px-sm-2",children:[!P&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex bd-highlight",children:[e.jsx("div",{className:"p-2 flex-grow-1 bd-highlight px-0",children:e.jsx(N,{className:"mb-3",children:e.jsx(d,{value:ve,onChange:s=>Me(s.target.value),placeholder:a("admin_dashboard.products.search.placeholder")})})}),e.jsx("div",{className:"p-2 pe-0 bd-highlight",children:e.jsx(n,{className:"float-end btn-block text-white",onClick:()=>Pe(),type:"button",color:"primary",children:a("admin_dashboard.products.add_new")})})]})}),Be,Re]})}),e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:b}),e.jsxs(Qe,{alignment:"center",backdrop:"static",visible:Fe,onClose:()=>w(!1),unmountOnClose:!0,className:"no-close",children:[e.jsx(Ke,{children:e.jsx(Xe,{id:"VerticallyCenteredExample",children:a("admin_dashboard.products.delete.title")})}),e.jsx(es,{children:a("admin_dashboard.products.delete.description")}),e.jsxs(Ye,{children:[e.jsx(n,{color:"secondary",disabled:_,onClick:()=>w(!1),children:a("common.cancel")}),e.jsxs(n,{color:"danger",disabled:_,className:" text-white",onClick:()=>Le(),children:[!_&&a("common.confirm"),_&&e.jsxs("span",{children:[" ",e.jsx(X,{size:"sm",color:"white"})]})]})]})]})]})]})};export{ys as default};

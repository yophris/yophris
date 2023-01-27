"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{88345:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(85893),i=n(67294),o=n(68245),r=n(15861),s=n(98456),l=n(90629),d=n(13970),u=n(75503),c=n(88767),p=n(87536);function m(e){var t;let{setValue:n,reset:m,label:x,options:v=[{text:"",value:""}],name:f,error:g,isRequired:y,asyncData:h,watch:b,resetField:Z,control:j,getValues:S,...k}=e,C=(0,p.qo)({control:j,name:null==h?void 0:h.lookup}),[E,w]=i.useState("");console.log("watchFields",f,null==h?void 0:h.lookup,C);let{isLoading:F,data:T,error:q,isSuccess:A}=(0,c.useQuery)({queryKey:["get"+(null==h?void 0:h.key),...(null==h?void 0:h.lookup)||[],C,E],queryFn:()=>h.endpointApi("function"==typeof h.endpoint?h.endpoint(C):h.endpoint,{name:E}),enabled:null==h||!h.lookup||(Array.isArray(C)?!C.some(e=>!e):!!C)}),[_,I]=i.useState(!1),[P,R]=i.useState([]),D=_&&0===P.length;return i.useEffect(()=>{let e=!0;if(D)return(async()=>{e&&R([...(null==T?void 0:T.data.map((null==h?void 0:h.optionTransformation)||(e=>({text:e.name,value:e.id||e.stateCode||e.code||e.isoCode}))))||[]])})(),()=>{e=!1}},[D]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[x,y&&(0,a.jsx)(r.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,a.jsx)(o.Z,{popupIcon:F?(0,a.jsx)(s.Z,{color:"inherit",size:20}):(0,a.jsx)(u.Z,{}),sx:{".MuiAutocomplete-option":{color:"#333",fontSize:"1.4rem"},".MuiAutocomplete-endAdornment":{svg:{fontSize:"2rem",fontWeight:500,color:"text.secondary"}}},open:_,onOpen(){I(!0)},onClose(){I(!1)},value:null===(t=S(f))||void 0===t?void 0:t.value,isOptionEqualToValue:(e,t)=>e.value===t.value,onChange:(e,t)=>n(f,t),getOptionLabel:e=>e.text,options:P,loading:F,renderOption:(e,t,n)=>(0,a.jsx)("li",{...e,children:(0,a.jsx)(r.Z,{variant:"body_medium_secondary",component:"p",children:t.text})}),onInputChange(e,t){w(t)},renderInput:e=>(0,a.jsx)(l.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,p:1},ref:e.InputProps.ref,children:(0,a.jsx)(d.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},...e,endAdornment:(0,a.jsx)(i.Fragment,{children:e.InputProps.endAdornment}),...k})})})]},JSON.stringify(C))}},69745:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(85893);n(67294);var i=n(87357),o=n(15861),r=n(18360),s=n(18972),l=n(90948),d=n(13970),u=n(75503);function c(e){let{label:t,name:n,options:l,register:d,setValue:c,error:m,isRequired:x,getValues:v,watch:f,hideLabel:g=!1,...y}=e;return(0,a.jsxs)(i.Z,{sx:{width:"100%"},children:[!g&&(0,a.jsxs)(o.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[t,x&&(0,a.jsx)(o.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,a.jsxs)(r.Z,{...d&&d,...y,input:(0,a.jsx)(p,{}),IconComponent:u.Z,sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary",width:"100%"},children:[(0,a.jsx)(s.Z,{selected:!0,sx:{fontSize:"1.4rem",color:"text.secondary",fontStyle:"italic"},value:"",children:"None"}),l.length&&l.map((e,t)=>(0,a.jsx)(s.Z,{sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},value:e.value,disabled:e.disabled,children:e.text},t))]}),(null==m?void 0:m.message)&&(0,a.jsx)(o.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:m.message})]})}let p=(0,l.ZP)(d.ZP)(e=>{let{theme:t}=e;return{alignItems:"center",backgroundColor:t.palette.background.main,border:"1px solid #EFEFEF",borderRadius:t.spacing(1),display:"flex",fontSize:"1.4rem",transition:t.transitions.create(["border-color","box-shadow"]),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"},"label + &":{marginTop:t.spacing(3)},"& .MuiInputBase-input":{color:t.palette.text.secondary,padding:"".concat(t.spacing(1.25)," ").concat(t.spacing(2))},"& .MuiSvgIcon-root":{fontSize:"2rem",marginRight:2,color:t.palette.text.tertiary}}})},19716:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(85893),i=n(42761),o=n(13970),r=n(90629);function s(e){let{...t}=e;return(0,a.jsxs)(r.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,a.jsx)(i.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,a.jsx)(o.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}n(67294)},44889:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(85893),i=n(26447),o=n(44057),r=n(9576),s=n(76595),l=n(19716),d=n(67294),u=n(34578),c=n(88767);n(80681);var p=n(38560),m=n(39272),x=n(15861),v=n(87357),f=n(93946),g=n(35294),y=n(18972),h=n(57976),b=n(75071),Z=n(41733),j=n(25675),S=n.n(j),k=n(1574);let C=["Edit","Delete"];function E(e){let{label:t="",cb:n={}}=e,[o,r]=d.useState(null),s=Boolean(o),l=e=>{r(e.currentTarget)},u=()=>{r(null)},c=e=>{let t=n[e];t&&(t(),u())};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{border:"1px solid #E4E7EB",borderRadius:1,padding:2},children:[(0,a.jsxs)(i.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,a.jsx)(S(),{src:"/images/starYellow.svg",width:20,height:20,alt:"favourite"}),(0,a.jsx)(k.Z,{size:18,colorVal:"#46C0C0"}),(0,a.jsx)(x.Z,{variant:"h3_medium_secondary",component:"h3",children:t})]}),(0,a.jsx)(i.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",children:(0,a.jsxs)(v.Z,{children:[(0,a.jsx)(f.Z,{"aria-label":"more",id:"long-button","aria-controls":s?"long-menu":void 0,"aria-expanded":s?"true":void 0,"aria-haspopup":"true",onClick:l,children:(0,a.jsx)(h.Z,{sx:{color:"text.secondary",fontSize:"2rem"}})}),(0,a.jsx)(g.Z,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:o,open:s,onClose:u,PaperProps:{style:{maxHeight:216,width:"auto"}},children:C.map(e=>(0,a.jsxs)(y.Z,{selected:"Pyxis"===e,onClick:()=>c(e),children:[(0,a.jsx)(x.Z,{mr:1,variant:"body_medium_tertiary",component:"p",children:"Delete"===e?(0,a.jsx)(Z.Z,{sx:{color:"#F53E40"}}):(0,a.jsx)(b.Z,{})}),(0,a.jsx)(x.Z,{sx:{color:"Delete"===e&&"#F53E40"},variant:"body_medium_tertiary",component:"p",children:e})]},e))})]})})]})})}var w=n(71666);let F=e=>{var t,n;let{config:x}=e,{endpoint:v,texts:f,getAllFn:g,postFn:y,key:h,deleteFn:b,validation:Z,putFn:j,transform:S=e=>e}=x,k=(0,p.Z)(e=>e.setProgress),C=(0,u.VY)(),F=(0,c.useQueryClient)(),[T,q]=d.useState(!1),[A,_]=(0,d.useState)(null),{isLoading:I,data:P,error:R}=(0,c.useQuery)("get"+h,()=>g(v,{page:1})),D=(0,c.useMutation)(e=>A?j(v,A,S(e),k):y(v,S(e),k),{onSuccess(){q(!1),F.invalidateQueries("get"+h),C.success(A?"Updated":"created")},onError(e){C.error("Failed")}}),L=(0,c.useMutation)(e=>b(v,e),{onSuccess(){F.invalidateQueries("get"+h),C("Deleted"),q(!1)},onError(e){C("Failed")}}),z=e=>{q(!0),_(e)},N=e=>{window.confirm("Do you want to delete this ? ")&&L.mutate({id:e})};return(0,d.useEffect)(e=>{T||_(null)},[T]),(0,a.jsxs)(i.Z,{spacing:2,m:2,divider:(0,a.jsx)(r.Z,{}),children:[(0,a.jsxs)(i.Z,{direction:"row",spacing:3,children:[(0,a.jsx)(l.Z,{sx:{flex:1}}),(0,a.jsx)(o.Z,{variant:"contained",onClick:()=>q(!0),children:null==f?void 0:f.drawerTitle}),T&&(0,a.jsx)(w.Z,{open:T,callback:q,title:A?null==f?void 0:null===(t=f.drawerTitle)||void 0===t?void 0:t.replace("Add","Update"):null==f?void 0:f.drawerTitle,children:(0,a.jsx)(s.Z,{form:x.form,edit:A?{...P.data.find(e=>e.id==A)}:null,submitData:e=>D.mutate({...e}),validationSchema:Z,cancelDrawer:()=>q(!1)})})]}),(0,a.jsx)(i.Z,{sx:{rowGap:1},children:I?"Loading":null==P?void 0:null===(n=P.data)||void 0===n?void 0:n.map((e,t)=>(0,a.jsx)(E,{label:(0,m.I)(e,"**.".concat(f.key)),cb:{Edit:()=>z(e.id),Delete:()=>N(e.id)}},t))})]})};var T=F},90022:function(e,t,n){n.r(t),n.d(t,{addressFields:function(){return x},default:function(){return f}});var a=n(85893),i=n(88345),o=n(69745),r=n(77339),s=n(44889),l=n(54742),d=n(67294),u=n(87536),c=n(88767),p=n(558);let m=[{element:r.Z,attr:{label:"Station Name",name:"station.stationName"},validation:{validationType:"string",validations:[{type:"required",params:["Station Name is Required"]}]},xs:6},{element:o.Z,attr:{label:"Is main station?",name:"station.isMainStation",options:[{text:"Yes",value:!0},{text:"No",value:!1}]},xs:6},{element:o.Z,attr:{label:"Station Head",name:"station.stationHead",options:[{text:"Employee 1",value:"e1"},{text:"Employee 2",value:"e2"}]},validation:{validationType:"string",validations:[{type:"required",params:["Station Head is Required"]}]},xs:12}],x=[{element:r.Z,attr:{label:"Address Line 1",name:"address.addressLn1"},validation:{validationType:"string",validations:[{type:"required",params:["Address Line 1 is Required"]}]},xs:12},{element:r.Z,attr:{label:"Address Line 2",name:"address.addressLn2"},xs:12},{element:i.Z,attr:{label:"Country",name:"address.country",asyncData:{endpointApi:p.$8,endpoint:"app/valueHelp/countries",key:"countries",optionTransformation:e=>({text:e.name,value:e.code})}},validation:{validationType:"object",validations:[{type:"nullable",params:["Country is Required"]},{type:"required",params:["Country is Required"]}]},xs:6},{element:i.Z,attr:{label:"State",name:"address.state",asyncData:{endpointApi:p.$8,endpoint(e){var t;return"app/valueHelp/states/".concat((null===(t=e[0])||void 0===t?void 0:t.value)||"")},optionTransformation:e=>({text:e.name,value:e.isoCode}),lookup:["address.country"],key:"states"}},validation:{validationType:"object",validations:[{type:"required",params:["State is Required"]}]},xs:6},{element:i.Z,attr:{label:"City",name:"address.city",asyncData:{endpointApi:p.$8,endpoint(e){var t,n;return"app/valueHelp/cities/".concat((null===(t=e[0])||void 0===t?void 0:t.value)||"","/").concat((null===(n=e[1])||void 0===n?void 0:n.value)||"")},lookup:["address.country","address.state"],key:"city",optionTransformation:e=>({text:e.name,value:e.name})}},validation:{validationType:"object",validations:[{type:"required",params:["City is Required"]}]},xs:6},{element:r.Z,attr:{label:"Postal Code",name:"address.postalCode"},validation:{validationType:"string",validations:[{type:"required",params:["Postal code is Required"]}]},xs:6},{element:r.Z,attr:{label:"Phone",name:"address.phone1"},validation:{validationType:"string",validations:[{type:"required",params:["Phone number is Required"]}]},xs:6}],v={key:"stationName",form:[{header:"",fields:m},{header:"Station Address",fields:x}],endpoint:"settings/station",texts:{key:"stationName",breadcrumbText:"Station",drawerTitle:"Add Station",mainTitle:"List of Stations",mainDescription:"this is short description for division",sideTitle:"Station",sideDescription:"this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},getAllFn:p.$8,postFn:p.fj,putFn:p.m7,deleteFn:p.WN};function f(){let{watch:e}=(0,u.cI)();(0,c.useQueryClient)();let[t,n]=(0,d.useState)(""),[i,o]=(0,d.useState)("");console.log(e("city"),"lklk"),console.log(v,"lklk");let{isLoading:r,data:p,error:m}=(0,c.useQuery)("getcountries",()=>v.getAllFn("app/valueHelp/countries"));return console.log(p,"response"),(0,a.jsx)(l.Z,{texts:v.texts,children:(0,a.jsx)(s.Z,{config:v})})}}}]);
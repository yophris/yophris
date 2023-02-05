(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9369],{42761:function(e,i,t){"use strict";var r=t(64836);i.Z=void 0;var n=r(t(64938)),a=t(85893),s=(0,n.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");i.Z=s},41274:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/v2/settings/general/teams",function(){return t(74602)}])},19716:function(e,i,t){"use strict";t.d(i,{Z:function(){return l}});var r=t(85893),n=t(42761),a=t(13970),s=t(90629);function l(e){let{...i}=e;return(0,r.jsxs)(s.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,r.jsx)(n.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,r.jsx)(a.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}t(67294)},44889:function(e,i,t){"use strict";t.d(i,{Z:function(){return C}});var r=t(85893),n=t(26447),a=t(44057),s=t(9576),l=t(76595),o=t(19716),d=t(67294),c=t(34578),u=t(88767);t(80681);var m=t(38560),p=t(39272),x=t(15861),f=t(87357),h=t(93946),v=t(35294),g=t(18972),j=t(57976),Z=t(75071),b=t(41733),w=t(25675),y=t.n(w),T=t(1574);let k=["Edit","Delete"];function E(e){let{label:i="",cb:t={}}=e,[a,s]=d.useState(null),l=Boolean(a),o=e=>{s(e.currentTarget)},c=()=>{s(null)},u=e=>{let i=t[e];i&&(i(),c())};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(n.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{border:"1px solid #E4E7EB",borderRadius:1,padding:2},children:[(0,r.jsxs)(n.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,r.jsx)(y(),{src:"/images/starYellow.svg",width:20,height:20,alt:"favourite"}),(0,r.jsx)(T.Z,{size:18,colorVal:"#46C0C0"}),(0,r.jsx)(x.Z,{variant:"h3_medium_secondary",component:"h3",children:i})]}),(0,r.jsx)(n.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(h.Z,{"aria-label":"more",id:"long-button","aria-controls":l?"long-menu":void 0,"aria-expanded":l?"true":void 0,"aria-haspopup":"true",onClick:o,children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary",fontSize:"2rem"}})}),(0,r.jsx)(v.Z,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:a,open:l,onClose:c,PaperProps:{style:{maxHeight:216,width:"auto"}},children:k.map(e=>(0,r.jsxs)(g.Z,{selected:"Pyxis"===e,onClick:()=>u(e),children:[(0,r.jsx)(x.Z,{mr:1,variant:"body_medium_tertiary",component:"p",children:"Delete"===e?(0,r.jsx)(b.Z,{sx:{color:"#F53E40"}}):(0,r.jsx)(Z.Z,{})}),(0,r.jsx)(x.Z,{sx:{color:"Delete"===e&&"#F53E40"},variant:"body_medium_tertiary",component:"p",children:e})]},e))})]})})]})})}var _=t(71666);let S=e=>{var i,t;let{config:x}=e,{endpoint:f,texts:h,getAllFn:v,postFn:g,key:j,deleteFn:Z,validation:b,putFn:w,transform:y=e=>e}=x,T=(0,m.Z)(e=>e.setProgress),k=(0,c.VY)(),S=(0,u.useQueryClient)(),[C,D]=d.useState(!1),[N,F]=(0,d.useState)(null),{isLoading:P,data:q,error:z}=(0,u.useQuery)("get"+j,()=>v(f,{page:1})),B=(0,u.useMutation)(e=>N?w(f,N,y(e),T):g(f,y(e),T),{onSuccess(){D(!1),S.invalidateQueries("get"+j),k.success(N?"Updated":"created")},onError(e){k.error("Failed")}}),M=(0,u.useMutation)(e=>Z(f,e),{onSuccess(){S.invalidateQueries("get"+j),k("Deleted"),D(!1)},onError(e){k("Failed")}}),Q=e=>{D(!0),F(e)},A=e=>{window.confirm("Do you want to delete this ? ")&&M.mutate({id:e})};return(0,d.useEffect)(e=>{C||F(null)},[C]),(0,r.jsxs)(n.Z,{spacing:2,m:2,divider:(0,r.jsx)(s.Z,{}),children:[(0,r.jsxs)(n.Z,{direction:"row",spacing:3,children:[(0,r.jsx)(o.Z,{sx:{flex:1}}),(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>D(!0),children:null==h?void 0:h.drawerTitle}),C&&(0,r.jsx)(_.Z,{open:C,callback:D,title:N?null==h?void 0:null===(i=h.drawerTitle)||void 0===i?void 0:i.replace("Add","Update"):null==h?void 0:h.drawerTitle,children:(0,r.jsx)(l.Z,{form:x.form,edit:N?{...q.data.find(e=>e.id==N)}:null,submitData:e=>B.mutate({...e}),validationSchema:b,cancelDrawer:()=>D(!1)})})]}),(0,r.jsx)(n.Z,{sx:{rowGap:1},children:P?"Loading":null==q?void 0:null===(t=q.data)||void 0===t?void 0:t.map((e,i)=>(0,r.jsx)(E,{label:(0,p.I)(e,"**.".concat(h.key)),cb:{Edit:()=>Q(e.id),Delete:()=>A(e.id)}},i))})]})};var C=S},19127:function(e,i,t){"use strict";var r=t(85893),n=t(26447),a=t(87357),s=t(44057),l=t(9576);t(76595);var o=t(19716),d=t(67294),c=t(34578),u=t(88767);t(80681);var m=t(38560);t(39272);var p=t(71666),x=t(45698);let f=e=>{var i;let{plan:t}=e;(0,m.Z)(e=>e.setProgress),(0,c.VY)(),(0,u.useQueryClient)();let[f,h]=d.useState(!1),[v,g]=(0,d.useState)(null);return(0,d.useEffect)(e=>{f||g(null)},[f]),(0,r.jsx)(n.Z,{spacing:2,m:2,divider:(0,r.jsx)(l.Z,{}),children:(0,r.jsxs)(n.Z,{direction:"row",spacing:3,children:[(0,r.jsx)(o.Z,{sx:{flex:1}}),(0,r.jsx)(s.Z,{variant:"contained",onClick:()=>h(!0),children:null==t?void 0:t.sideBarTitle}),f&&(0,r.jsx)(p.Z,{open:f,callback:h,title:v?null==t?void 0:null===(i=t.sideBarTitle)||void 0===i?void 0:i.replace("Add","Update"):null==t?void 0:t.sideBarTitle,children:(0,r.jsx)(a.Z,{p:2,children:(0,r.jsx)(x.Z,{plan:t})})})]})})};i.Z=f},74602:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return p}});var r=t(85893),n=t(19127),a=t(77339);t(44889);var s=t(54742),l=t(558),o=t(7258);let d=o.object().shape({team:o.object().shape({teamName:o.string().required(" name required."),description:o.string().required("type required.")})}),c=[{element:a.Z,attr:{label:"team Name",name:"team.teamName"},xs:6},{element:a.Z,attr:{label:"Description",name:"team.description",isMultiline:!0},xs:12}],u={form:[{header:"",fields:c}],endpoint:"settings/team",texts:{key:"teamName",breadcrumbText:"Teams",drawerTitle:"Add team",mainTitle:"Teams",mainDescription:"this is short description for division",sideTitle:"List of Teams",sideDescription:"this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},validation:d,getAllFn:l.$8,postFn:l.fj,putFn:l.m7,deleteFn:l.WN},m={sideBarTitle:"Add Team",section:{fields:[{label:"Team Name",type:"Text",id:"teamName",gridSizes:{xs:12,sm:6,md:12,lg:12},config:{placeholder:"teamName"},validations:[{type:"required"}]},{label:"Description",type:"Text",id:"description",gridSizes:{xs:12,sm:6,md:12,lg:12},isMultiline:!0,config:{placeholder:"Description"},validations:[{type:"required"}]}]}};function p(){return(0,r.jsx)(s.Z,{texts:u.texts,children:(0,r.jsx)(n.Z,{plan:m})})}}},function(e){e.O(0,[3662,3552,4885,5675,7655,129,2737,343,8360,7417,7888,534,448,5698,9774,2888,179],function(){return e(e.s=41274)}),_N_E=e.O()}]);
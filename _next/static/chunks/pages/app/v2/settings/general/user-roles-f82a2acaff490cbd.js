(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8637],{42761:function(e,t,o){"use strict";var l=o(64836);t.Z=void 0;var r=l(o(64938)),a=o(85893),i=(0,r.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i},23910:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/v2/settings/general/user-roles",function(){return o(21915)}])},19716:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var l=o(85893),r=o(42761),a=o(13970),i=o(90629);function s(e){let{...t}=e;return(0,l.jsxs)(i.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,l.jsx)(r.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,l.jsx)(a.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}o(67294)},32530:function(e,t,o){"use strict";var l=o(85893),r=o(26447),a=o(44057),i=o(9576),s=o(76595),n=o(19716),d=o(67294),c=o(34578),m=o(88767);o(80681);var u=o(38560),p=o(39272),h=o(42019),b=o(71666);let f=e=>{var t,o;let{config:f}=e,{endpoint:y,texts:g,getAllFn:x,postFn:E,key:v,deleteFn:w,validation:R,putFn:Z,transform:j=e=>e}=f,S=(0,u.Z)(e=>e.setProgress),k=(0,c.VY)(),D=(0,m.useQueryClient)(),[q,T]=d.useState(!1),[A,F]=(0,d.useState)(null),{isLoading:C,data:P,error:_}=(0,m.useQuery)("get"+v,()=>x(y,{page:1})),M=(0,m.useMutation)(e=>A?Z(y,A,j(e),S):E(y,j(e),S),{onSuccess(){T(!1),D.invalidateQueries("get"+v),k.success(A?"Updated":"created")},onError(e){k.error("Failed")}}),N=(0,m.useMutation)(e=>w(y,e),{onSuccess(){D.invalidateQueries("get"+v),k("Deleted"),T(!1)},onError(e){k("Failed")}}),L=e=>{T(!0),F(e)},U=e=>{window.confirm("Do you want to delete this ? ")&&N.mutate({id:e})};return(0,d.useEffect)(e=>{q||F(null)},[q]),(0,l.jsxs)(r.Z,{spacing:2,m:2,divider:(0,l.jsx)(i.Z,{}),children:[(0,l.jsxs)(r.Z,{direction:"row",spacing:3,children:[(0,l.jsx)(n.Z,{sx:{flex:1}}),(0,l.jsx)(a.Z,{variant:"contained",onClick:()=>T(!0),children:null==g?void 0:g.drawerTitle}),q&&(0,l.jsx)(b.Z,{open:q,callback:T,title:A?null==g?void 0:null===(t=g.drawerTitle)||void 0===t?void 0:t.replace("Add","Update"):null==g?void 0:g.drawerTitle,children:(0,l.jsx)(s.Z,{form:f.form,edit:A?{...P.data.find(e=>e.id==A)}:null,submitData:e=>M.mutate({...e}),validationSchema:R,cancelDrawer:()=>T(!1)})})]}),(0,l.jsx)(r.Z,{sx:{rowGap:1},children:C?"Loading":null==P?void 0:null===(o=P.data)||void 0===o?void 0:o.map((e,t)=>(0,l.jsx)(h.Z,{label:(0,p.Im)(e,"**.".concat(g.key)),cb:{Edit:()=>L(e.id),Delete:()=>U(e.id)}},t))})]})};t.Z=f},99079:function(e,t,o){"use strict";o.d(t,{Z:function(){return u}});var l=o(85893),r=o(67294),a=o(86886),i=o(26447),s=o(87357),n=o(50480),d=o(69368),c=o(15861);function m(e){let{attr:t,handleChange:o,editAllChanged:a,...i}=e,[m,u]=r.useState(!1),[p,h]=r.useState({borderColor:"#EFEFEF",background:""}),b=e=>{e?h({borderColor:"rgba(55, 125, 255, 0.5)",background:"#DAEDFF"}):h({borderColor:"#EFEFEF",background:""})};return r.useEffect(()=>{u(a),b(a)},[a]),(0,l.jsx)(s.Z,{sx:{border:"1px solid",color:p,px:2,borderRadius:1.25,...i},...i,children:(0,l.jsx)(n.Z,{control:(0,l.jsx)(d.Z,{size:"large",sx:{"& .MuiSvgIcon-root":{fontSize:"2rem"}},checked:m,onChange(e,l){b(l),u(l),o(e,t.name,l)},disableRipple:!0}),label:(0,l.jsx)(c.Z,{variant:"body_medium_secondary",component:"p",children:t.label}),labelPlacement:"end"})})}function u(e){let{attrs:t,selectAllOption:o,setValue:s,getValues:n}=e,[d,c]=r.useState(!1);r.useEffect(()=>{t.forEach(e=>s(e.name,d))},[d]);let u=(e,o,l)=>{c(e.target.checked),t.forEach(e=>s(e.name,l))},p=(e,t,o)=>{s(t,o),o||c(o)};return(0,l.jsxs)(a.ZP,{item:!0,sx:{paddingLeft:0,margin:0,width:"100%"},children:[(null==o?void 0:o.isEnabled)&&(0,l.jsx)(m,{width:"100%",attr:{label:null==o?void 0:o.label},handleChange:u}),(0,l.jsx)(i.Z,{direction:"row",sx:(null==o?void 0:o.isEnabled)&&{borderLeft:"1px solid #efefef",mt:2,ml:4,pl:2},flexWrap:"wrap",rowGap:1,columnGap:1,children:t&&t.map(e=>{void 0===n(e.name)&&s(e.name,!1);let t=n(e.name);return void 0!==t&&(0,l.jsx)(m,{attr:e,editAllChanged:d,handleChange:p},e.name)})})]})}},21915:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return b}});var l=o(85893);o(67294);var r=o(77339),a=o(32530),i=o(54742),s=o(99079),n=o(558);let d=[{element:r.Z,attr:{label:"Role Name",name:"userRoles.name"},validation:{validationType:"string",validations:[{type:"required",params:["User Roles Name is Required"]}]},xs:12},{element:r.Z,attr:{label:"Description",name:"userRoles.description",isMultiline:!0},xs:12}],c=[{element:s.Z,type:"group",attrs:[{name:"employeeRequest.termination",label:"Manage Termination Request"},{name:"employeeRequest.trasfer",label:"Manage Transfer Request"},{name:"employeeRequest.leave",label:"Manage Leave Request"},{name:"employeeRequest.resignation",label:"Manage Resignation Request"},{name:"employeeRequest.reimbursement",label:"Manage Reimbursement Request"}],isRequired:!1}],m=[{element:s.Z,type:"group",attrs:[{name:"employeeDirectory.showEmployeeStatus",label:"Show Inactive / Deleted / Exited Employee"},{name:"employeeDirectory.importEmployee",label:"Import Employee to Directory"},{name:"employeeDirectory.exportEmployee",label:"Export Employee to Directory"},{name:"employeeDirectory.deleteEmployee",label:"Delete employee from Directory"}],isRequired:!1}],u=[{element:s.Z,type:"group",selectAllOption:{isEnabled:!0,label:"View all fields of other employees"},attrs:[{name:"otherEmployeeAccess.personalSectionView",label:"Personal Section"},{name:"otherEmployeeAccess.jobSectionView",label:"Job Section"},{name:"otherEmployeeAccess.employmentEducationView",label:"Employment Education"},{name:"otherEmployeeAccess.compensationView",label:"Compensation Section"}],isRequired:!1},{element:s.Z,type:"group",selectAllOption:{isEnabled:!0,label:"Edit all fields of other employees"},attrs:[{name:"otherEmployeeAccess.personalSectionEdit",label:"Personal Section"},{name:"otherEmployeeAccess.jobSectionEdit",label:"Job Section"},{name:"otherEmployeeAccess.employmentEducationEdit",label:"Employment Education"},{name:"otherEmployeeAccess.compensationEdit",label:"Compensation Section"}],isRequired:!1}],p=[{element:s.Z,type:"group",attrs:[{name:"payroll.manageAllPayrolls",label:"Manage All Payroll Processes"}],isRequired:!1}],h={key:"userRoles",form:[{header:"",fields:d},{header:"Permissions",subHeader:"This will be important to show or hide the pages according to user roles"},{header:"Employee Request Setting",subHeader:"Select the areas where user-role can approve, reject employee request",noDivider:!0,fields:c},{header:"Employee Directory",subHeader:"This will be important to show or hide the pages according to user roles",fields:m},{header:"Access to other employee profile",subHeader:"This will be important to show or hide the pages according to user roles",fields:u},{header:"Payroll",subHeader:"This will be important to show or hide the pages according to user roles",fields:p}],endpoint:"settings/userRoles",texts:{title:"User Roles",key:"userRolesName",breadcrumbText:"Manage Roles",drawerTitle:"Add User Roles",mainTitle:"List of User Roles",mainDescription:"It is short description for userRoles",sideTitle:"User Role",sideDescription:"This is long long long for userRoles saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},getAllFn:n.$8,postFn:n.fj,putFn:n.m7,deleteFn:n.WN};function b(){return(0,l.jsx)(i.Z,{texts:h.texts,children:(0,l.jsx)(a.Z,{config:h})})}}},function(e){e.O(0,[3662,3552,5675,6886,3213,4409,129,5229,5644,9482,9774,2888,179],function(){return e(e.s=23910)}),_N_E=e.O()}]);
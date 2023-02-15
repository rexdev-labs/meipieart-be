"use strict";(self.webpackChunkmeipieart_be=self.webpackChunkmeipieart_be||[]).push([[2544],{92100:(se,y,t)=>{t.r(y),t.d(y,{default:()=>Q});var e=t(67294),a=t(68547),R=t(49656),P=t(87751),d=t(41580),S=t(29728),U=t(67838),Z=t(49066),B=t(185),E=t(7681),D=t(80831),F=t(67109),z=t(27361),L=t.n(z),M=t(97132),j=t(28834),N=t(11276),b=t(74571),K=t(11047),C=t(75515),G=t(64256),O=t(16364),$=t(45697),c=t.n($);const v=({disabled:r,role:s,values:n,errors:i,onChange:p,onBlur:m})=>{const{formatMessage:o}=(0,M.useIntl)();return e.createElement(d.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.K,{spacing:4},e.createElement(K.k,{justifyContent:"space-between"},e.createElement(d.x,null,e.createElement(d.x,null,e.createElement(C.Z,{fontWeight:"bold"},s?s.name:o({id:"global.details",defaultMessage:"Details"}))),e.createElement(d.x,null,e.createElement(C.Z,{textColor:"neutral500",variant:"pi"},s?s.description:o({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(S.z,{disabled:!0,variant:"secondary"},o({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:s.usersCount}))),e.createElement(N.r,{gap:4},e.createElement(b.P,{col:6},e.createElement(O.o,{disabled:r,name:"name",error:i.name&&o({id:i.name}),label:o({id:"global.name",defaultMessage:"Name"}),onChange:p,onBlur:m,value:n.name||""})),e.createElement(b.P,{col:6},e.createElement(G.g,{disabled:r,label:o({id:"global.description",defaultMessage:"Description"}),name:"description",error:i.name&&o({id:i.name}),onChange:p,onBlur:m},n.description||"")))))};v.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},v.propTypes={disabled:c().bool,errors:c().object.isRequired,onBlur:c().func.isRequired,onChange:c().func.isRequired,role:c().object,values:c().object};const H=v;var x=t(48474),T=t(53209);const V=T.Ry().shape({name:T.Z_().required(a.translatedErrors.required)});var W=t(25108);const J=()=>{const r=(0,a.useNotification)(),{formatMessage:s}=(0,M.useIntl)(),{params:{id:n}}=(0,R.useRouteMatch)("/settings/roles/:id"),[i,p]=(0,e.useState)(!1),m=(0,e.useRef)(),{lockApp:o,unlockApp:X}=(0,a.useOverlayBlocker)(),{trackUsage:Y}=(0,a.useTracking)(),{isLoading:k,data:w}=(0,x.U_)(n),{role:u,permissions:q,isLoading:A,onSubmitSucceeded:_}=(0,x.Dq)(n),ee=async g=>{try{o(),p(!0);const{permissionsToSend:l,didUpdateConditions:f}=m.current.getPermissions();await(0,a.request)(`/admin/roles/${n}`,{method:"PUT",body:g}),u.code!=="strapi-super-admin"&&(await(0,a.request)(`/admin/roles/${n}/permissions`,{method:"PUT",body:{permissions:l}}),f&&Y("didUpdateConditions")),m.current.setFormAfterSubmit(),_({name:g.name,description:g.description}),r({type:"success",message:{id:"notification.success.saved"}})}catch(l){W.error(l.response);const f=L()(l,"response.payload.message","An error occured"),h=L()(l,"response.payload.data.permissions[0]",f);r({type:"warning",message:h})}finally{p(!1),X()}},I=u.code==="strapi-super-admin";return e.createElement(B.o,null,e.createElement(a.SettingsPageTitle,{name:"Roles"}),e.createElement(D.Formik,{enableReinitialize:!0,initialValues:{name:u.name,description:u.description},onSubmit:ee,validationSchema:V,validateOnChange:!1},({handleSubmit:g,values:l,errors:f,handleChange:h,handleBlur:te})=>e.createElement("form",{onSubmit:g},e.createElement(U.T,{primaryAction:e.createElement(E.K,{horizontal:!0,spacing:2},e.createElement(S.z,{disabled:u.code==="strapi-super-admin",onClick:g,loading:i,size:"L"},s({id:"global.save",defaultMessage:"Save"}))),title:s({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(a.Link,{startIcon:e.createElement(F.Z,null),to:"/settings/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(Z.D,null,e.createElement(E.K,{spacing:6},e.createElement(H,{isLoading:A,disabled:I,errors:f,values:l,onChange:h,onBlur:te,role:u}),!k&&!A?e.createElement(d.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(j.Z,{isFormDisabled:I,permissions:q,ref:m,layout:w})):e.createElement(d.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(a.LoadingIndicatorPage,null)))))))},Q=()=>{const r=(0,e.useMemo)(()=>({read:P.Z.settings.roles.read,update:P.Z.settings.roles.update}),[]),{isLoading:s,allowedActions:{canRead:n,canUpdate:i}}=(0,a.useRBAC)(r);return s?e.createElement(a.LoadingIndicatorPage,null):!n&&!i?e.createElement(R.Redirect,{to:"/"}):e.createElement(J,null)}}}]);

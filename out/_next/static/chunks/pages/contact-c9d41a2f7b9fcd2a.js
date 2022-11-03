(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{6405:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(4517)}])},4517:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(7297),a=n(5893),i=n(917),l=n(8395),o=n(8641),s=n(7741),d=n(7294),u=n(8387),c=n(6734),m=n(8402),p=n(4520),h=n(2494),f=(...e)=>e.filter(Boolean).join(" "),g=e=>e?"":void 0,v=e=>!!e||void 0;function b(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[x,y]=(0,u.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[_,E]=(0,u.k)({strict:!1,name:"FormControlContext"});function k(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:a,...i}=function(e){let t=E(),{id:n,disabled:r,readOnly:a,required:i,isRequired:l,isInvalid:o,isReadOnly:s,isDisabled:d,onFocus:u,onBlur:c,...m}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&p.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&p.push(t.helpTextId),{...m,"aria-describedby":p.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??d??(null==t?void 0:t.isDisabled),isReadOnly:a??s??(null==t?void 0:t.isReadOnly),isRequired:i??l??(null==t?void 0:t.isRequired),isInvalid:o??(null==t?void 0:t.isInvalid),onFocus:b(null==t?void 0:t.onFocus,u),onBlur:b(null==t?void 0:t.onBlur,c)}}(e);return{...i,disabled:t,readOnly:r,required:a,"aria-invalid":v(n),"aria-required":v(a),"aria-readonly":v(r)}}(0,m.Gp)(function(e,t){let n=(0,m.jC)("Form",e),r=(0,p.Lr)(e),{getRootProps:a,htmlProps:i,...l}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:a,isReadOnly:i,...l}=e,o=(0,d.useId)(),s=t||`field-${o}`,u=`${s}-label`,m=`${s}-feedback`,p=`${s}-helptext`,[h,f]=(0,d.useState)(!1),[v,b]=(0,d.useState)(!1),[x,y]=(0,d.useState)(!1),_=(0,d.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,c.lq)(t,e=>{e&&b(!0)})}),[p]),E=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":g(x),"data-disabled":g(a),"data-invalid":g(r),"data-readonly":g(i),id:e.id??u,htmlFor:e.htmlFor??s}),[s,a,x,r,i,u]),k=(0,d.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,c.lq)(t,e=>{e&&f(!0)}),"aria-live":"polite"}),[m]),I=(0,d.useCallback)((e={},t=null)=>({...e,...l,ref:t,role:"group"}),[l]),N=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!a,isFocused:!!x,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:h,setHasFeedbackText:f,hasHelpText:v,setHasHelpText:b,id:s,labelId:u,feedbackId:m,helpTextId:p,htmlProps:l,getHelpTextProps:_,getErrorMessageProps:k,getRootProps:I,getLabelProps:E,getRequiredIndicatorProps:N}}(r),o=f("chakra-form-control",e.className);return d.createElement(_,{value:l},d.createElement(x,{value:n},d.createElement(m.m$.div,{...a({},t),className:o,__css:n.container})))}).displayName="FormControl",(0,m.Gp)(function(e,t){let n=E(),r=y(),a=f("chakra-form__helper-text",e.className);return d.createElement(m.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:a})}).displayName="FormHelperText";var[I,N]=(0,u.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,m.Gp)((e,t)=>{let n=(0,m.jC)("FormError",e),r=(0,p.Lr)(e),a=E();return(null==a?void 0:a.isInvalid)?d.createElement(I,{value:n},d.createElement(m.m$.div,{...null==a?void 0:a.getErrorMessageProps(r,t),className:f("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,m.Gp)((e,t)=>{let n=N(),r=E();if(!(null==r?void 0:r.isInvalid))return null;let a=f("chakra-form__error-icon",e.className);return d.createElement(h.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:a},d.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var S=(0,m.Gp)(function(e,t){let n=(0,m.mq)("FormLabel",e),r=(0,p.Lr)(e),{className:a,children:i,requiredIndicator:l=d.createElement(j,null),optionalIndicator:o=null,...s}=r,u=E(),c=(null==u?void 0:u.getLabelProps(s,t))??{ref:t,...s};return d.createElement(m.m$.label,{...c,className:f("chakra-form__label",r.className),__css:{display:"block",textAlign:"start",...n}},i,(null==u?void 0:u.isRequired)?l:o)});S.displayName="FormLabel";var j=(0,m.Gp)(function(e,t){let n=E(),r=y();if(!(null==n?void 0:n.isRequired))return null;let a=f("chakra-form__required-indicator",e.className);return d.createElement(m.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:r.requiredIndicator,className:a})});j.displayName="RequiredIndicator";var C=n(5336),F=n(4031),G=n(6076),R=(0,m.Gp)(function(e,t){let{htmlSize:n,...r}=e,a=(0,m.jC)("Input",r),i=(0,p.Lr)(r),l=k(i),o=(0,C.cx)("chakra-input",e.className);return d.createElement(m.m$.input,{size:n,...l,__css:a.field,ref:t,className:o})});R.displayName="Input",R.id="Input";var[w,q]=(0,u.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "});(0,m.Gp)(function(e,t){let n=(0,m.jC)("Input",e),{children:r,className:a,...i}=(0,p.Lr)(e),l=(0,C.cx)("chakra-input__group",a),o={},s=(0,F.W)(r),u=n.field;s.forEach(e=>{n&&(u&&"InputLeftElement"===e.type.id&&(o.paddingStart=u.height??u.h),u&&"InputRightElement"===e.type.id&&(o.paddingEnd=u.height??u.h),"InputRightAddon"===e.type.id&&(o.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(o.borderStartRadius=0))});let c=s.map(t=>{var n,r;let a=(0,G.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,d.cloneElement)(t,a):(0,d.cloneElement)(t,Object.assign(a,o,t.props))});return d.createElement(m.m$.div,{className:l,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...i},d.createElement(w,{value:n},c))}).displayName="InputGroup";var z={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},L=(0,m.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),$=(0,m.Gp)(function(e,t){let{placement:n="left",...r}=e,a=z[n]??{},i=q();return d.createElement(L,{ref:t,...r,__css:{...i.addon,...a}})});$.displayName="InputAddon";var A=(0,m.Gp)(function(e,t){return d.createElement($,{ref:t,placement:"left",...e,className:(0,C.cx)("chakra-input__left-addon",e.className)})});A.displayName="InputLeftAddon",A.id="InputLeftAddon";var O=(0,m.Gp)(function(e,t){return d.createElement($,{ref:t,placement:"right",...e,className:(0,C.cx)("chakra-input__right-addon",e.className)})});O.displayName="InputRightAddon",O.id="InputRightAddon";var T=(0,m.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),M=(0,m.Gp)(function(e,t){let{placement:n="left",...r}=e,a=q(),i=a.field,l={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==i?void 0:i.height)??(null==i?void 0:i.h),height:(null==i?void 0:i.height)??(null==i?void 0:i.h),fontSize:null==i?void 0:i.fontSize,...a.element};return d.createElement(T,{ref:t,__css:l,...r})});M.id="InputElement",M.displayName="InputElement";var P=(0,m.Gp)(function(e,t){let{className:n,...r}=e,a=(0,C.cx)("chakra-input__left-element",n);return d.createElement(M,{ref:t,placement:"left",className:a,...r})});P.id="InputLeftElement",P.displayName="InputLeftElement";var H=(0,m.Gp)(function(e,t){let{className:n,...r}=e,a=(0,C.cx)("chakra-input__right-element",n);return d.createElement(M,{ref:t,placement:"right",className:a,...r})});H.id="InputRightElement",H.displayName="InputRightElement";var B=(...e)=>e.filter(Boolean).join(" "),Z=["h","minH","height","minHeight"],W=(0,m.Gp)((e,t)=>{let n=(0,m.mq)("Textarea",e),{className:r,rows:a,...i}=(0,p.Lr)(e),l=k(i),o=a?function(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}(n,Z):n;return d.createElement(m.m$.textarea,{ref:t,rows:a,...l,className:B("chakra-textarea",r),__css:o})});W.displayName="Textarea";var D=n(9008),X=n.n(D);function J(){let e=(0,r.Z)(["\n  0% {background-position: left}\n  50% {background-position: right}\n  100% {background-position: left}\n"]);return J=function(){return e},e}let K=(0,i.keyframes)(J()),U="".concat(K," 30s ease-in-out infinite"),Q="linear-gradient(248deg, #00e4a9, #aed524, #f8d861, #cd528c)",V="linear-gradient(248deg, #dc2f52,#c55420, #a720c5, #20dcdb)";var Y=function(){let{colorMode:e}=(0,l.If)(),[t,n]=(0,d.useState)("Copy to clipboard"),r=()=>{try{navigator.clipboard.writeText("louismorgan.dev@gmail.com"),n("Copy success")}catch(e){n("Copy failed")}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(X(),{children:(0,a.jsx)("title",{children:"Contact | Louis Morgan"})}),(0,a.jsxs)(o.kC,{p:[5,10,"5rem","10rem"],pt:["10rem","10rem","10rem","10rem"],minHeight:"100vh",align:"center",direction:"column",justify:"center",children:[(0,a.jsx)(o.xv,{fontSize:"1.5rem",fontWeight:"bold",children:"Email:"}),(0,a.jsxs)(o.kC,{direction:["column","column","column","row"],align:"center",gap:3,wrap:!0,p:5,children:[(0,a.jsx)(o.rU,{href:"mailto:louismorgan.dev@gmail.com",fontSize:["1rem","1.25rem"],children:"louismorgan.dev@gmail.com"}),(0,a.jsx)(o.xu,{as:s.zx,onClick:r,animation:U,bgGradient:"light"===e?Q:V,maxWidth:"30ch",backgroundSize:"600%",size:"md",_hover:{color:"light"===e?"background.light":"background.dark",backgroundSize:"600%",bgGradient:"light"===e?V:Q},children:t})]}),(0,a.jsxs)(o.Kq,{as:"form",action:"https://formspree.io/f/maykpawg",method:"POST",width:"50ch",maxWidth:"90%",align:"stretch",mt:10,children:[(0,a.jsxs)(S,{name:"email",children:["Email",(0,a.jsx)(R,{type:"email",name:"email",isRequired:!0})]}),(0,a.jsxs)(S,{name:"subject",isRequired:!0,children:["Subject",(0,a.jsx)(R,{type:"text",name:"subject"})]}),(0,a.jsxs)(S,{name:"message",isRequired:!0,children:["Message",(0,a.jsx)(W,{name:"message"})]}),(0,a.jsx)(o.xu,{as:s.zx,m:5,isExternal:!0,width:"10ch",alignSelf:"center",type:"submit",animation:U,bgGradient:"light"===e?Q:V,backgroundSize:"600%",_hover:{color:"light"===e?"background.light":"background.dark",backgroundSize:"600%",bgGradient:"light"===e?V:Q},children:"Submit"})]})]})]})}},9008:function(e,t,n){e.exports=n(3121)},7297:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6405)}),_N_E=e.O()}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7614],{3281:(n,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var e=t(85893),r=t(11151);const i={},s=void 0,c={id:"primitives/linkdrop/bos/get-drop-id",title:"get-drop-id",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/bos/get-drop-id.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/get-drop-id",permalink:"/ko/primitives/linkdrop/bos/get-drop-id",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/get-drop-id.md",tags:[],version:"current",frontMatter:{}},d={},p=[];function a(n){const o={code:"code",pre:"pre",...(0,r.a)(),...n.components};return(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\n\nconst dropSupplyForOwner = Near.view(\n  keypomContract,\n  "get_drop_supply_for_owner",\n  { account_id: accountId }\n);\n\nconst dropsForOwner = Near.view(keypomContract, "get_drops_for_owner", {\n  account_id: accountId,\n  from_index: (dropSupplyForOwner - 1).toString(),\n});\n\nconst dropId = dropsForOwner[dropsForOwner.length - 1].drop_id;\n'})})}function u(n={}){const{wrapper:o}={...(0,r.a)(),...n.components};return o?(0,e.jsx)(o,{...n,children:(0,e.jsx)(a,{...n})}):a(n)}},11151:(n,o,t)=>{t.d(o,{Z:()=>c,a:()=>s});var e=t(67294);const r={},i=e.createContext(r);function s(n){const o=e.useContext(i);return e.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function c(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),e.createElement(i.Provider,{value:o},n.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6710],{9228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(85893),o=n(11151);const s={},i=void 0,p={id:"primitives/linkdrop/web-app/simple-drop",title:"simple-drop",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/web-app/simple-drop.md",sourceDirName:"7.primitives/linkdrop/web-app",slug:"/primitives/linkdrop/web-app/simple-drop",permalink:"/zh-CN/primitives/linkdrop/web-app/simple-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/web-app/simple-drop.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function l(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst DROP_AMOUNT = "10000000000000000000000"; // 0.1 NEAR\n\nconst wallet = new Wallet({ createAccessKeyFor: KEYPOM_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "create_drop",\n  contractId: KEYPOM_CONTRACT_ADDRESS,\n  args: {\n    public_keys: state.publicKeys,\n    deposit_per_use: DROP_AMOUNT,\n  },\n  deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
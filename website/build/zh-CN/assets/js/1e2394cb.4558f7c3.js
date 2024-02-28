"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8461],{5016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(85893),s=n(11151);const o={},a=void 0,i={id:"primitives/linkdrop/web-app/transfer-ft",title:"transfer-ft",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/web-app/transfer-ft.md",sourceDirName:"7.primitives/linkdrop/web-app",slug:"/primitives/linkdrop/web-app/transfer-ft",permalink:"/zh-CN/primitives/linkdrop/web-app/transfer-ft",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/web-app/transfer-ft.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst FT_CONTRACT_ADDRESS = "ft.primitives.near";\n\nconst wallet = new Wallet({ createAccessKeyFor: FT_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "ft_transfer",\n  contractId: FT_CONTRACT_ADDRESS,\n  args: {\n    receiver_id: KEYPOM_CONTRACT_ADDRESS,\n    amount: "1"\n  },\n  deposit: "1",\n  gas: "100000000000000"\n});\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6508],{462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(85893),a=t(11151);const r={},s=void 0,i={id:"primitives/dao/web-app/create-dao",title:"create-dao",description:"The full list of roles and permissions you can find here.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/dao/web-app/create-dao.md",sourceDirName:"7.primitives/dao/web-app",slug:"/primitives/dao/web-app/create-dao",permalink:"/ko/primitives/dao/web-app/create-dao",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/web-app/create-dao.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst DAO_FACTORY_CONTRACT_ADDRESS = "sputnik-dao.near";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_FACTORY_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'create\',\n  args: {\n    name: "primitives",\n    args: btoa({\n      config: {\n        name: "Primitives",\n        purpose: "Building primitives on NEAR",\n        metadata: ""\n      },\n      policy: ["bob.near"]\n    }),\n  },\n  contractId: DAO_FACTORY_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 6000000000000000000000000\n});\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The full list of roles and permissions you can find ",(0,o.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["The ",(0,o.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(67294);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
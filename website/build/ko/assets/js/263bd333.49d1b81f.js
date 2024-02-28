"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1585],{71559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(85893),r=t(11151);const s={},a=void 0,i={id:"primitives/dex/web-app/swap",title:"swap",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/dex/web-app/swap.md",sourceDirName:"7.primitives/dex/web-app",slug:"/primitives/dex/web-app/swap",permalink:"/ko/primitives/dex/web-app/swap",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/web-app/swap.md",tags:[],version:"current",frontMatter:{}},c={},p=[];function l(e){const n={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst AMM_CONTRACT_ADDRESS = "v2.ref-finance.near";\nconst wallet = new Wallet({ createAccessKeyFor: AMM_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'swap\',\n  args: {\n   actions: [\n      {\n        pool_id: 79,\n        token_in: "token.v2.ref-finance.near",\n        token_out: "wrap.near",\n        amount_in: "100000000000000000",\n        min_amount_out: "1",\n      },\n    ],\n  },\n  contractId: AMM_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 1\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["The ",(0,o.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"5019606679394603179450"\n'})})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
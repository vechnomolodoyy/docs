"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1360],{28622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(85893),a=t(11151);const r={},s=void 0,c={id:"primitives/ft/web-app/check-balance",title:"check-balance",description:"Remember about fungible token precision. You may need this value to show a response of balance requests in an understandable-to-user way in your app. How to get precision value (decimals) you may find above.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/ft/web-app/check-balance.md",sourceDirName:"7.primitives/ft/web-app",slug:"/primitives/ft/web-app/check-balance",permalink:"/ko/primitives/ft/web-app/check-balance",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/web-app/check-balance.md",tags:[],version:"current",frontMatter:{}},i={},l=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Remember about fungible token precision. You may need this value to show a response of balance requests in an understandable-to-user way in your app. How to get precision value (decimals) you may find ",(0,o.jsx)(n.a,{href:"#get-token-metadata",children:"above"}),"."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst TOKEN_CONTRACT_ADDRESS = \"token.v2.ref-finance.near\";\nconst wallet = new Wallet({ createAccessKeyFor: TOKEN_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'ft_balance_of',\n  args: {\n    account_id: 'bob.near'\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"3479615037675962643842"\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["The ",(0,o.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(67294);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
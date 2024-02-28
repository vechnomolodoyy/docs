"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6277],{46207:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(85893),r=o(11151);const a={},s=void 0,i={id:"primitives/dao/web-app/vote-for-proposal",title:"vote-for-proposal",description:"Available vote options: VoteApprove, VoteReject, VoteRemove.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/dao/web-app/vote-for-proposal.md",sourceDirName:"7.primitives/dao/web-app",slug:"/primitives/dao/web-app/vote-for-proposal",permalink:"/zh-CN/primitives/dao/web-app/vote-for-proposal",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/web-app/vote-for-proposal.md",tags:[],version:"current",frontMatter:{}},c={},p=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst DAO_CONTRACT_ADDRESS = \"primitives.sputnik-dao.near\";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: 'act_proposal',\n  args: { id: 0, action: \"VoteApprove\" },\n  contractId: DAO_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n});\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Available vote options: ",(0,n.jsx)(t.code,{children:"VoteApprove"}),", ",(0,n.jsx)(t.code,{children:"VoteReject"}),", ",(0,n.jsx)(t.code,{children:"VoteRemove"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["The ",(0,n.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var n=o(67294);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
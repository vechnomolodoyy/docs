"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8912],{52600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(85893),s=t(11151);const r={},a=void 0,c={id:"primitives/dex/web-app/get-pools",title:"get-pools",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/dex/web-app/get-pools.md",sourceDirName:"7.primitives/dex/web-app",slug:"/primitives/dex/web-app/get-pools",permalink:"/zh-CN/primitives/dex/web-app/get-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/web-app/get-pools.md",tags:[],version:"current",frontMatter:{}},i={},l=[];function p(e){const n={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const AMM_CONTRACT_ADDRESS = \"v2.ref-finance.near\";\nconst wallet = new Wallet({ createAccessKeyFor: AMM_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'get_pools',\n  args: {\n    from_index: 0,\n    limit: 1000\n  },\n  contractId: AMM_CONTRACT_ADDRESS,\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["The ",(0,o.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"[\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [ 'token.skyward.near', 'wrap.near' ],\n    amounts: [ '51865812079751349630100', '6254162663147994789053210138' ],\n    total_fee: 30,\n    shares_total_supply: '1305338644973934698612124055',\n    amp: 0\n  },\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [\n      'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near',\n      'wrap.near'\n    ],\n    amounts: [ '783621938569399817', '1100232280852443291118200599' ],\n    total_fee: 30,\n    shares_total_supply: '33923015415693335344747628',\n    amp: 0\n  }\n]\n"})})})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(67294);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
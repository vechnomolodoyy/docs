"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1286],{93298:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var o=e(85893),r=e(11151);const c={},s=void 0,i={id:"primitives/linkdrop/bos/create-nft-drop",title:"create-nft-drop",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/bos/create-nft-drop.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/create-nft-drop",permalink:"/zh-CN/primitives/linkdrop/bos/create-nft-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/create-nft-drop.md",tags:[],version:"current",frontMatter:{}},a={},p=[];function d(t){const n={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\nconst nftContract = "nft.primitives.near";\nconst dropAmount = "10000000000000000000000";\n\n Near.call([\n  {\n    contractName: keypomContract,\n    methodName: "create_drop",\n    args: {\n      public_keys: state.publicKeys,\n      deposit_per_use: dropAmount,\n      nft: {\n        // Who will be sending the NFTs to the Keypom contract\n        sender_id: accountId,\n        // NFT Contract Id that the tokens will come from\n        contract_id: nftContract,\n      },\n    },\n    deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n    gas: "100000000000000",\n  },\n]);\n'})})}function u(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>i,a:()=>s});var o=e(67294);const r={},c=o.createContext(r);function s(t){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function i(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(c.Provider,{value:n},t.children)}}}]);
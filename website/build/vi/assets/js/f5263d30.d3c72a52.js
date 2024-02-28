"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9209],{23755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=t(85893),s=t(11151);const a={},i=void 0,r={id:"primitives/ft/bos/check-balance",title:"check-balance",description:"Remember about fungible token precision. You may need this value to show a response of balance requests in an understandable-to-user way in your app. How to get precision value (decimals) you may find above.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/ft/bos/check-balance.md",sourceDirName:"7.primitives/ft/bos",slug:"/primitives/ft/bos/check-balance",permalink:"/vi/primitives/ft/bos/check-balance",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/bos/check-balance.md",tags:[],version:"current",frontMatter:{}},c={},u=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Remember about fungible token precision. You may need this value to show a response of balance requests in an understandable-to-user way in your app. How to get precision value (decimals) you may find ",(0,o.jsx)(n.a,{href:"#get-token-metadata",children:"above"}),"."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const tokenContract = "token.v2.ref-finance.near";\nconst userTokenBalance = Near.view(tokenContract, "ft_balance_of", {\n  account_id: "bob.near",\n});\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"3479615037675962643842"\n'})})})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
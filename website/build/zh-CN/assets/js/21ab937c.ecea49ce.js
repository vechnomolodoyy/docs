"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1968],{38225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(85893),s=n(11151);const o={},c=void 0,a={id:"primitives/ft/bos/create",title:"create",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/ft/bos/create.md",sourceDirName:"7.primitives/ft/bos",slug:"/primitives/ft/bos/create",permalink:"/zh-CN/primitives/ft/bos/create",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/bos/create.md",tags:[],version:"current",frontMatter:{}},i={},u=[];function d(e){const t={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const args = {\n  args: {\n    owner_id: "bob.near",\n    total_supply: "1000000000",\n    metadata: {\n      spec: "ft-1.0.0",\n      name: "Test Token",\n      symbol: "test",\n      icon: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",\n      decimals: 18,\n    },\n  },\n  account_id: "bob.near",\n};\n\nNear.call("tkn.near", "create_token", args, 300000000000000, "2234830000000000000000000");\n'})})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(67294);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
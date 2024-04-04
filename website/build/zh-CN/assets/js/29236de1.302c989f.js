"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6803],{21637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(85893),o=n(11151);const a={},r=void 0,i={id:"primitives/ft/bos/get-metadata",title:"get-metadata",description:"Example response",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/ft/bos/get-metadata.md",sourceDirName:"7.primitives/ft/bos",slug:"/primitives/ft/bos/get-metadata",permalink:"/zh-CN/primitives/ft/bos/get-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/bos/get-metadata.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{}},c={},d=[];function l(e){const t={code:"code",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const tokenContract = "token.v2.ref-finance.near";\nconst tokenMetadata = Near.view(tokenContract, "ft_metadata", {});\n'})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Example response"}),(0,s.jsx)("p",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "spec": "ft-1.0.0",\n  "name": "Ref Finance Token",\n  "symbol": "REF",\n  "icon": "data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'16 24 248 248\' style=\'background: %23000\'%3E%3Cpath d=\'M164,164v52h52Zm-45-45,20.4,20.4,20.6-20.6V81H119Zm0,18.39V216h41V137.19l-20.6,20.6ZM166.5,81H164v33.81l26.16-26.17A40.29,40.29,0,0,0,166.5,81ZM72,153.19V216h43V133.4l-11.6-11.61Zm0-18.38,31.4-31.4L115,115V81H72ZM207,121.5h0a40.29,40.29,0,0,0-7.64-23.66L164,133.19V162h2.5A40.5,40.5,0,0,0,207,121.5Z\' fill=\'%23fff\'/%3E%3Cpath d=\'M189 72l27 27V72h-27z\' fill=\'%2300c08b\'/%3E%3C/svg%3E%0A",\n  "reference": null,\n  "reference_hash": null,\n  "decimals": 18\n}\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(67294);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
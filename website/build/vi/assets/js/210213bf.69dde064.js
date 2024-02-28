"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1692],{65842:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(85893),t=r(11151);r(74866),r(85162),r(77229);const s={id:"whatareweb3apps",title:"What are Web3 Apps?"},i=void 0,l={id:"develop/web3-apps/whatareweb3apps",title:"What are Web3 Apps?",description:"Web3 Applications - also known as decentralized apps (dApps) - leverage smart contracts and blockchain data to offer transparency, security and giving back control to users over their assets and data.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/web3-apps/quickstart.md",sourceDirName:"2.develop/web3-apps",slug:"/develop/web3-apps/whatareweb3apps",permalink:"/vi/develop/web3-apps/whatareweb3apps",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/web3-apps/quickstart.md",tags:[],version:"current",frontMatter:{id:"whatareweb3apps",title:"What are Web3 Apps?"},sidebar:"build",previous:{title:"Using components on WebApps",permalink:"/vi/bos/tutorial/bos-gateway"},next:{title:"\u2b50 Quickstart a WebApp",permalink:"/vi/develop/integrate/quickstart-frontend"}},o={},u=[{value:"Why Integrating NEAR to your App?",id:"why-integrating-near-to-your-app",level:3}];function c(e){const n={a:"a",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Web3 Applications - also known as decentralized apps (dApps) - leverage ",(0,a.jsx)(n.a,{href:"/vi/develop/contracts/whatisacontract",children:"smart contracts"})," and blockchain data to offer ",(0,a.jsx)(n.strong,{children:"transparency"}),", ",(0,a.jsx)(n.strong,{children:"security"})," and ",(0,a.jsx)(n.strong,{children:"giving back control"})," to users over their assets and data."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:r(70997).Z+"",width:"1282",height:"470"})}),"\n",(0,a.jsxs)(n.p,{children:["NEAR simplifies building Web3 apps for the general public, making it easy to ",(0,a.jsx)(n.strong,{children:"interact"})," with different blockchains, while helping to ",(0,a.jsx)(n.strong,{children:"onboard users"})," that are not familiarized with crypto."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"why-integrating-near-to-your-app",children:"Why Integrating NEAR to your App?"}),"\n",(0,a.jsx)(n.p,{children:"Any application can benefit from integrating NEAR, including games, financial services, social platforms, and more."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Easy Onboarding"}),": Users can create accounts using familiar methods such as email login. Furthermore, applications can cover all transactional costs for their users, so they never have to worry about handling crypto."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Ownership"}),": Users have true ownership of digital assets within their accounts. Fungible Tokens can be used as reward systems, Non-Fungible Tokens can denote holdings, and wallets can represent digital identities."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Fast, Cheap and Scalable"}),": Near\u2019s efficient consensus mechanism and fee model make transactions cost effective for both users and developers."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Security & Transparency"}),": All transactions and data on the blockchain is transparent and auditable, thus ensuring trust in the application\u2019s behavior."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var a=r(36905);const t={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>j});var a=r(67294),t=r(36905),s=r(12466),i=r(16550),l=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){var n,r;return null!=(n=null==(r=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function p(e){var n=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,s=(0,i.k6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:t});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function b(e){var n,r,t,s,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,d=e.groupId,b=p(e),v=(0,a.useState)((function(){return function(e){var n,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:b})})),g=v[0],m=v[1],w=f({queryString:u,groupId:d}),y=w[0],x=w[1],j=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),t=r[0],s=r[1],[t,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=j[0],A=j[1],I=function(){var e=null!=y?y:k;return h({value:e,tabValues:b})?e:null}();return(0,l.Z)((function(){I&&m(I)}),[I]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);m(e),x(e),A(e)}),[x,A,b]),tabValues:b}}var v=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function w(e){var n=e.className,r=e.block,a=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=o.indexOf(n),t=l[r].value;t!==a&&(u(n),i(t))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,t=o.indexOf(e.currentTarget)+1;r=null!=(a=o[t])?a:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;r=null!=(s=o[i])?s:o[o.length-1]}null==(n=r)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},s,{className:(0,t.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)}))})}function y(e){var n=e.lazy,r=e.children,t=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===t}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function x(e){var n=b(e);return(0,m.jsxs)("div",{className:(0,t.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(w,Object.assign({},e,n)),(0,m.jsx)(y,Object.assign({},e,n))]})}function j(e){var n=(0,v.Z)();return(0,m.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>c,O2:()=>o,SQ:()=>u});r(67294);var a=r(74866),t=r(85162),s=r(95665),i=r.n(s),l=r(85893);function o(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,l.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,l.jsx)(t.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,a=(r.children,r.url),t=r.start,s=r.end,i=r.fname;if(e.type===c)return c({url:a,start:t,end:s,language:n,fname:i});return e}(e,r)})),1==n.length?(0,l.jsx)(t.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,l.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,l.jsx)(t.Z,{value:n,label:e.props.fname,children:e})}))})}function c(e){var n=e.url,r=e.start,a=e.end,t=e.language,s=e.fname,o=n+"#";return r&&a&&(o+="L"+r+"-L"+a+"#"),(0,l.jsx)(i(),{language:t,fname:s,children:o})}},70997:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/examples-67b6887200684575b443f958ab75e1c5.png"}}]);
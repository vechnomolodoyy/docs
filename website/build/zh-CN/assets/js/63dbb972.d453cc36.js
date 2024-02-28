"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5657],{3793:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=n(85893),a=n(11151),i=n(74866),s=n(85162);const l={id:"oracles",title:"Price Oracles"},o=void 0,c={id:"primitives/oracles",title:"Price Oracles",description:"Oracles are smart contracts that enable you to query the current price of an asset.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/oracles.md",sourceDirName:"7.primitives",slug:"/primitives/oracles",permalink:"/zh-CN/primitives/oracles",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/oracles.md",tags:[],version:"current",frontMatter:{id:"oracles",title:"Price Oracles"},sidebar:"build",previous:{title:"Linkdrops",permalink:"/zh-CN/primitives/linkdrop"},next:{title:"Autonomous Organizations (DAO)",permalink:"/zh-CN/primitives/dao"}},u={},d=[{value:"Price Oracles",id:"price-oracles",level:2},{value:"Query Assets",id:"query-assets",level:2},{value:"Get Assets Price",id:"get-assets-price",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Oracles are smart contracts that enable you to query the current price of an asset."}),"\n",(0,t.jsx)(r.p,{children:"Since smart contracts cannot connect to\ninternet and pull information, Oracles rely on having someone constantly updating their prices. Because of that, be mindful\nwhen using an oracle that there might be a delay between the market's latest information and the Oracles data."}),"\n",(0,t.jsx)(r.p,{children:"Oracle contract's are not standardized. We will here list different providers and how to use their Oracle as they are built."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"price-oracles",children:"Price Oracles"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Account: ",(0,t.jsx)(r.strong,{children:"priceoracle.near"})," | ",(0,t.jsx)(r.strong,{children:"priceoracle.testnet"})]}),"\n",(0,t.jsxs)(r.li,{children:["Creator: ",(0,t.jsx)(r.a,{href:"https://github.com/NearDeFi",children:"NearDefi"})]}),"\n",(0,t.jsxs)(r.li,{children:["Smart contract: ",(0,t.jsx)(r.a,{href:"https://github.com/NearDeFi/price-oracle",children:"https://github.com/NearDeFi/price-oracle"})]}),"\n",(0,t.jsxs)(r.li,{children:["Bot to fill contract: ",(0,t.jsx)(r.a,{href:"https://github.com/NearDeFi/near-price-oracle-bot",children:"https://github.com/NearDeFi/near-price-oracle-bot"})]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"query-assets",children:"Query Assets"}),"\n",(0,t.jsx)(i.Z,{children:(0,t.jsx)(s.Z,{value:"\ud83d\udda5\ufe0f CLI",label:"\ud83d\udda5\ufe0f CLI",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"near view priceoracle.near get_assets\n"})})})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:"[\n  [\n    'wrap.near',\n    {\n      reports: [\n        {\n          oracle_id: 'thorinoracle.near',\n          timestamp: '1669795900809627816',\n          price: { multiplier: '17030', decimals: 28 }\n        },\n        {\n          oracle_id: 'npo-aurora.near',\n          timestamp: '1706631791706032710',\n          price: { multiplier: '30641', decimals: 28 }\n        },\n        {\n          oracle_id: 'gloriafoster.near',\n          timestamp: '1706631808550973590',\n          price: { multiplier: '30666', decimals: 28 }\n        },\n        ...\n"})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"get-assets-price",children:"Get Assets Price"}),"\n",(0,t.jsx)(i.Z,{children:(0,t.jsx)(s.Z,{value:"\ud83d\udda5\ufe0f CLI",label:"\ud83d\udda5\ufe0f CLI",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"near view priceoracle.near get_price_data\n"})})})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:"{\n  timestamp: '1706631861981947371',\n  recency_duration_sec: 90,\n  prices: [\n    {\n      asset_id: 'wrap.near',\n      price: { multiplier: '30702', decimals: 28 }\n    },\n    {\n      asset_id: 'aurora',\n      price: { multiplier: '235662', decimals: 20 }\n    },\n    {\n      asset_id: 'meta-pool.near',\n      price: { multiplier: '38770', decimals: 28 }\n    },\n    {\n      asset_id: 'linear-protocol.near',\n      price: { multiplier: '36432', decimals: 28 }\n    },\n"})})]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Divide the returned ",(0,t.jsx)(r.code,{children:"multiplier"})," by ",(0,t.jsx)(r.code,{children:"10000"})," to obtain the price in USD."]})})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>s});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var r=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>w});var t=n(67294),a=n(36905),i=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function p(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function h(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,i=(0,s.k6)(),l=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,t.useCallback)((function(e){if(l){var r=new URLSearchParams(i.location.search);r.set(l,e),i.replace(Object.assign({},i.location,{search:r.toString()}))}}),[l,i])]}function f(e){var r,n,a,i,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=p(e),v=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),b=v[0],g=v[1],x=m({queryString:c,groupId:d}),j=x[0],y=x[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(r),a=n[0],i=n[1],[a,(0,t.useCallback)((function(e){r&&i.set(e)}),[r,i])]),N=w[0],k=w[1],I=function(){var e=null!=j?j:N;return h({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){I&&g(I)}),[I]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var v=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var r=e.className,n=e.block,t=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,n=o.indexOf(r),a=l[n].value;a!==t&&(c(r),s(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;n=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;n=null!=(i=o[s])?i:o[o.length-1]}null==(r=n)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:l.map((function(e){var r=e.value,n=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function j(e){var r=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var s=i.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function y(e){var r=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,r)),(0,g.jsx)(j,Object.assign({},e,r))]})}function w(e){var r=(0,v.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>s});var t=n(67294);const a={},i=t.createContext(a);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
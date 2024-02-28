"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8051],{45871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var r=n(85893),a=n(11151),i=n(74866),o=n(85162);const u={},s=void 0,l={id:"primitives/nft/near-cli/mint",title:"mint",description:"In order to use nft_mint method of the x.paras.near contract you have to be a creator of a particular token series.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/nft/near-cli/mint.md",sourceDirName:"7.primitives/nft/near-cli",slug:"/primitives/nft/near-cli/mint",permalink:"/vi/primitives/nft/near-cli/mint",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/near-cli/mint.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function f(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(i.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsx)(o.Z,{value:"NFT Primitive",label:"Reference",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call nft.primitives.near nft_mint \'{"token_id": "1", "receiver_id": "bob.near", "token_metadata": {"title": "NFT Primitive Token", "description": "Awesome NFT Primitive Token", "media": "string"}}\' --depositYocto 10000000000000000000000, --accountId bob.near\n'})})}),(0,r.jsxs)(o.Z,{value:"Paras",label:"Paras",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call x.paras.near nft_mint \'{"token_series_id": "490641", "receiver_id": "bob.near"}\' --depositYocto 10000000000000000000000 --accountId bob.near\n'})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["In order to use ",(0,r.jsx)(t.code,{children:"nft_mint"})," method of the ",(0,r.jsx)(t.code,{children:"x.paras.near"})," contract you have to be a creator of a particular token series."]})})]}),(0,r.jsxs)(o.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call thomasettorreiv.mintbase1.near nft_batch_mint \'{"num_to_mint": 1, "owner_id": "bob.near", "metadata": {}}\' --accountId bob.near --depositYocto 10000000000000000000000\n'})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["In order to use ",(0,r.jsx)(t.code,{children:"nft_batch_mint"})," method of Mintbase store contract your account have to be a in the contract minters list."]})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),o=n(16550),u=n(20469),s=n(91980),l=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,s._X)(u),(0,r.useCallback)((function(e){if(u){var t=new URLSearchParams(i.location.search);t.set(u,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[u,i])]}function v(e){var t,n,a,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,d=e.groupId,v=f(e),p=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:v})})),h=p[0],g=p[1],x=b({queryString:l,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),I=w[0],_=w[1],k=function(){var e=null!=j?j:I;return m({value:e,tabValues:v})?e:null}();return(0,u.Z)((function(){k&&g(k)}),[k]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),_(e)}),[y,_,v]),tabValues:v}}var p=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,u=e.tabValues,s=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==r&&(l(t),o(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;n=null!=(i=s[o])?i:s[s.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(x,Object.assign({},e,t)),(0,g.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,p.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>o});var r=n(67294);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
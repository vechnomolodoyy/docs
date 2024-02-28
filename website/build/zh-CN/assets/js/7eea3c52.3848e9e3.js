"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5855],{70601:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(85893),a=r(11151),u=r(74866),l=r(85162);const s={},i=void 0,o={id:"primitives/nft/near-cli/buy",title:"buy",description:"Example response:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/nft/near-cli/buy.md",sourceDirName:"7.primitives/nft/near-cli",slug:"/primitives/nft/near-cli/buy",permalink:"/zh-CN/primitives/nft/near-cli/buy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/near-cli/buy.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function f(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(u.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,t.jsxs)(l.Z,{value:"Paras",label:"Paras",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call x.paras.near buy \'{"token_series_id": "299102", "receiver_id": "bob.near"}\' --accountId bob.near --deposit 0.20574\n'})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example response:"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"299102:1"\n'})})]}),(0,t.jsxs)(l.Z,{value:"Mintbase",label:"Mintbase",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call simple.market.mintbase1.near buy \'{"nft_contract_id": "rubennnnnnnn.mintbase1.near", "token_id": "38"}\' --accountId bob.near --deposit 0.001\n'})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example response:"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "payout": {\n    "rub3n.near": "889200000000000000000",\n    "rubenm4rcus.near": "85800000000000000000"\n  }\n}\n'})})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var u=r(85893);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(36905),u=r(12466),l=r(16550),s=r(20469),i=r(91980),o=r(67392),c=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function f(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function b(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,u=(0,l.k6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,i._X)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(u.location.search);n.set(s,e),u.replace(Object.assign({},u.location,{search:n.toString()}))}}),[s,u])]}function v(e){var n,r,a,u,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,d=e.groupId,v=f(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:v})})),h=m[0],g=m[1],x=p({queryString:o,groupId:d}),j=x[0],y=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),a=r[0],u=r[1],[a,(0,t.useCallback)((function(e){n&&u.set(e)}),[n,u])]),I=w[0],k=w[1],N=function(){var e=null!=j?j:I;return b({value:e,tabValues:v})?e:null}();return(0,s.Z)((function(){N&&g(N)}),[N]),{selectedValue:h,selectValue:(0,t.useCallback)((function(e){if(!b({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,v]),tabValues:v}}var m=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){var n=e.className,r=e.block,t=e.selectedValue,l=e.selectValue,s=e.tabValues,i=[],o=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=i.indexOf(n),a=s[r].value;a!==t&&(o(n),l(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=i.indexOf(e.currentTarget)+1;r=null!=(t=i[a])?t:i[0];break;case"ArrowLeft":var u,l=i.indexOf(e.currentTarget)-1;r=null!=(u=i[l])?u:i[i.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,u=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,a=e.selectedValue,u=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=u.find((function(e){return e.props.value===a}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,m.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>l});var t=r(67294);const a={},u=t.createContext(a);function l(e){const n=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(u.Provider,{value:n},e.children)}}}]);
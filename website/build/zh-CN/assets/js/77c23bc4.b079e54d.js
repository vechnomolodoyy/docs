"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6963],{14382:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=n(85893),a=n(11151),u=n(74866),i=n(85162);const l={},o=void 0,s={id:"primitives/linkdrop/near-cli/get-key-pairs",title:"get-key-pairs",description:"Example response:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/near-cli/get-key-pairs.md",sourceDirName:"7.primitives/linkdrop/near-cli",slug:"/primitives/linkdrop/near-cli/get-key-pairs",permalink:"/zh-CN/primitives/linkdrop/near-cli/get-key-pairs",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/near-cli/get-key-pairs.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function p(e){const r={code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(u.Z,{className:"file-tabs",children:[(0,t.jsxs)(i.Z,{value:"Near CLI",label:"Near CLI",children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# This command creates a key pair locally in .near-credentials with an implicit account as the accountId (hash representation of the public key)\n\nnear generate-key\n"})}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Example response:"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'Key pair with ed25519:33Vn9VtNEtWQPPd1f4jf5HzJ5weLcvGHU8oz7o5UnPqy public key for an account "1e5b1346bdb4fc5ccd465f6757a9082a84bcacfd396e7d80b0c726252fe8b3e8"\n'})})]}),(0,t.jsx)(i.Z,{value:"Keypom API",label:"Keypom API",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"export NUMBER_OF_DROPS=2\n\ncurl https://keypom.sctuts.com/keypair/$NUMBER_OF_DROPS/rootEntrophy\n"})})})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var u=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>j});var t=n(67294),a=n(36905),u=n(12466),i=n(16550),l=n(20469),o=n(91980),s=n(67392),c=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function p(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,s.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,u=(0,i.k6)(),l=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,t.useCallback)((function(e){if(l){var r=new URLSearchParams(u.location.search);r.set(l,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[l,u])]}function b(e){var r,n,a,u,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,d=e.groupId,b=p(e),h=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:b})})),m=h[0],g=h[1],y=v({queryString:s,groupId:d}),k=y[0],x=y[1],j=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(r),a=n[0],u=n[1],[a,(0,t.useCallback)((function(e){r&&u.set(e)}),[r,u])]),w=j[0],I=j[1],N=function(){var e=null!=k?k:w;return f({value:e,tabValues:b})?e:null}();return(0,l.Z)((function(){N&&g(N)}),[N]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),I(e)}),[x,I,b]),tabValues:b}}var h=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function y(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],s=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=o.indexOf(r),a=l[n].value;a!==t&&(s(r),i(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;n=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var u,i=o.indexOf(e.currentTarget)-1;n=null!=(u=o[i])?u:o[o.length-1]}null==(r=n)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:l.map((function(e){var r=e.value,n=e.label,u=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",m.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function k(e){var r=e.lazy,n=e.children,a=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=u.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function x(e){var r=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(y,Object.assign({},e,r)),(0,g.jsx)(k,Object.assign({},e,r))]})}function j(e){var r=(0,h.Z)();return(0,g.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>i});var t=n(67294);const a={},u=t.createContext(a);function i(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);
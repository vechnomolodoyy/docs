"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7494],{94891:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=n(85893),a=n(11151),u=n(74866),i=n(85162);const s={},o=void 0,l={id:"primitives/linkdrop/web-app/get-key-pairs",title:"get-key-pairs",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/web-app/get-key-pairs.md",sourceDirName:"7.primitives/linkdrop/web-app",slug:"/primitives/linkdrop/web-app/get-key-pairs",permalink:"/vi/primitives/linkdrop/web-app/get-key-pairs",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/web-app/get-key-pairs.md",tags:[],version:"current",frontMatter:{}},c={},p=[];function d(e){const r={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(u.Z,{className:"file-tabs",children:[(0,t.jsx)(i.Z,{value:"near-api-js",label:"near-api-js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { KeyPair } from 'near-api-js';\n\nconst newKeyPair = KeyPair.fromRandom('ed25519');\nnewKeyPair.public_key = newKeyPair.publicKey.toString();\n"})})}),(0,t.jsx)(i.Z,{value:"Keypom API",label:"Keypom API",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'const state = {};\n\nconst dropsNumber = "2";\nconst keysGeneratorUrl = "https://keypom.sctuts.com/keypair/";\n\nfetch(keysGeneratorUrl + dropsNumber + "/rootEntrophy").then((res) => {\n  const keyPairs = JSON.parse(res.body);\n  const pubKeys = [];\n  const privKeys = [];\n\n  keyPairs.forEach((e) => {\n    pubKeys.push(e.pub);\n    privKeys.push(e.priv);\n  });\n\n  state.publicKeys = pubKeys;\n  state.privKeys = privKeys;\n});\n'})})})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var u=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>j});var t=n(67294),a=n(36905),u=n(12466),i=n(16550),s=n(20469),o=n(91980),l=n(67392),c=n(50012);function p(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function d(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return p(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,l.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,u=(0,i.k6)(),s=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,t.useCallback)((function(e){if(s){var r=new URLSearchParams(u.location.search);r.set(s,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[s,u])]}function b(e){var r,n,a,u,i=e.defaultValue,o=e.queryString,l=void 0!==o&&o,p=e.groupId,b=d(e),m=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:b})})),h=m[0],y=m[1],g=v({queryString:l,groupId:p}),k=g[0],w=g[1],j=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,c.Nk)(r),a=n[0],u=n[1],[a,(0,t.useCallback)((function(e){r&&u.set(e)}),[r,u])]),x=j[0],I=j[1],V=function(){var e=null!=k?k:x;return f({value:e,tabValues:b})?e:null}();return(0,s.Z)((function(){V&&y(V)}),[V]),{selectedValue:h,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),I(e)}),[w,I,b]),tabValues:b}}var m=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function g(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,o=[],l=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=o.indexOf(r),a=s[n].value;a!==t&&(l(r),i(a))},p=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;n=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var u,i=o.indexOf(e.currentTarget)-1;n=null!=(u=o[i])?u:o[o.length-1]}null==(r=n)||r.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:s.map((function(e){var r=e.value,n=e.label,u=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return o.push(e)},onKeyDown:p,onClick:c},u,{className:(0,a.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function k(e){var r=e.lazy,n=e.children,a=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=u.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function w(e){var r=b(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,y.jsx)(g,Object.assign({},e,r)),(0,y.jsx)(k,Object.assign({},e,r))]})}function j(e){var r=(0,m.Z)();return(0,y.jsx)(w,Object.assign({},e,{children:p(e.children)}),String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var t=n(67294);const a={},u=t.createContext(a);function i(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);
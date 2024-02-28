"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6322],{44074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(85893),n=a(11151),s=(a(74866),a(85162),a(77229));const l={id:"advanced-xcc",title:"\ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)"},c=void 0,i={id:"tutorials/examples/advanced-xcc",title:"\ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)",description:"\uc774 \uc608\uc81c\ub294 \ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc758 3\uac00\uc9c0 \uc778\uc2a4\ud134\uc2a4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ud2b9\ud788 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/examples/advanced-xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/advanced-xcc",permalink:"/ko/tutorials/examples/advanced-xcc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/advanced-xcc.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"advanced-xcc",title:"\ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)"},sidebar:"tutorials",previous:{title:"\ud329\ud1a0\ub9ac",permalink:"/ko/tutorials/examples/factory"},next:{title:"\uc790\uccb4 \uc5c5\uadf8\ub808\uc774\ub4dc \ubc0f \uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158",permalink:"/ko/tutorials/examples/update-contract-migrate-state"}},o={},u=[{value:"\uc77c\uad04 Action",id:"\uc77c\uad04-action",level:2},{value:"Getting the Last Response",id:"getting-the-last-response",level:4},{value:"Calling Multiple Contracts",id:"calling-multiple-contracts",level:2},{value:"Getting All Responses",id:"getting-all-responses",level:4},{value:"Multiple Calls - Same Result Type",id:"multiple-calls---same-result-type",level:2},{value:"\ubaa8\ub4e0 \uc751\ub2f5 \uac00\uc838\uc624\uae30",id:"\ubaa8\ub4e0-\uc751\ub2f5-\uac00\uc838\uc624\uae30",level:4}];function d(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\uc774 \uc608\uc81c\ub294 \ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc758 3\uac00\uc9c0 \uc778\uc2a4\ud134\uc2a4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ud2b9\ud788 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"How to batch multiple function calls to a same contract."}),"\n",(0,r.jsx)(t.li,{children:"\uac01\uac01 \ub2e4\ub978 \uc790\ub8cc\ud615\uc744 \ubc18\ud658\ud558\ub294 \uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ubcd1\ub82c\ub85c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95."}),"\n",(0,r.jsx)(t.li,{children:"\ucf5c\ubc31\uc5d0\uc11c \uc751\ub2f5\uc744 \ucc98\ub9ac\ud558\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95."}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"\uc77c\uad04-action",children:"\uc77c\uad04 Action"}),"\n",(0,r.jsxs)(t.p,{children:["\ub3d9\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \uc5ec\ub7ec \uc791\uc5c5\uc744 \ud558\ub098\uc758 \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubaa8\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\uad04 Action\uc740 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uba70, \ud558\ub098\uac00 \uc2e4\ud328 \ud558\uba74 ",(0,r.jsx)(t.strong,{children:"\ubaa8\ub450"})," \ub418\ub3cc\ub824\uc9c4\ub2e4\ub294 \ucd94\uac00 \uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"7",end:"19"})}),(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"67",end:"80"})})]}),"\n",(0,r.jsx)(t.h4,{id:"getting-the-last-response",children:"Getting the Last Response"}),"\n",(0,r.jsxs)(t.p,{children:["In this case, the callback has access to the value returned by the ",(0,r.jsx)(t.strong,{children:"last action"})," from the chain."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"21",end:"34"})}),(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,r.jsx)(s.Ey,{fname:"callback",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"82",end:"93"}),(0,r.jsx)(s.Ey,{fname:"promiseResult",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"127",end:"145"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"calling-multiple-contracts",children:"Calling Multiple Contracts"}),"\n",(0,r.jsxs)(t.p,{children:["A contract can call multiple other contracts. \uc774\ub807\uac8c \ud558\uba74 \ubaa8\ub450 \ubcd1\ub82c\ub85c \uc2e4\ud589\ub418\ub294 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. If one of them fails the rest ",(0,r.jsx)(t.strong,{children:"ARE NOT REVERTED"}),"."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"18",end:"56"})}),(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"95",end:"111"})})]}),"\n",(0,r.jsx)(t.h4,{id:"getting-all-responses",children:"Getting All Responses"}),"\n",(0,r.jsxs)(t.p,{children:["In this case, the callback has access to an ",(0,r.jsx)(t.strong,{children:"array of responses"}),", which have either the value returned by each call, or an error message."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"58",end:"91"})}),(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,r.jsx)(s.Ey,{fname:"callback",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"113",end:"125"}),(0,r.jsx)(s.Ey,{fname:"promiseResult",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"127",end:"145"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"multiple-calls---same-result-type",children:"Multiple Calls - Same Result Type"}),"\n",(0,r.jsxs)(t.p,{children:["This example is a particular case of the previous one (",(0,r.jsx)(t.a,{href:"#2-calling-multiple-contracts",children:"2. \uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"}),") \uc758 \ud2b9\ubcc4\ud55c \uacbd\uc6b0\uc785\ub2c8\ub2e4. \uc774\ub294 \ub2e8\uc21c\ud788 ",(0,r.jsx)(t.code,{children:"promise_result"})," \uc5b4\ub808\uc774\uc5d0 \uc9c1\uc811 \uc561\uc138\uc2a4\ud558\uc5ec \uacb0\uacfc\ub97c \ud655\uc778\ud558\ub294 \ub2e4\ub978 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.p,{children:"\uc774 \uacbd\uc6b0, \ub3d9\uc77c\ud55c \uc790\ub8cc\ud615\uc744 \ubc18\ud658\ud558\ub294 \uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"18",end:"31"})}),(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"95",end:"111"})})]}),"\n",(0,r.jsx)(t.h4,{id:"\ubaa8\ub4e0-\uc751\ub2f5-\uac00\uc838\uc624\uae30",children:"\ubaa8\ub4e0 \uc751\ub2f5 \uac00\uc838\uc624\uae30"}),"\n",(0,r.jsxs)(t.p,{children:["\uc774 \uacbd\uc6b0 \ucf5c\ubc31\uc740 \ub2e4\uc2dc ",(0,r.jsx)(t.strong,{children:"\uc751\ub2f5 \ubc30\uc5f4"}),"\uc5d0 \uc561\uc138\uc2a4\ud558\uc5ec, \uacb0\uacfc\ub97c \ubc18\ubcf5\ud574\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"33",end:"61"})}),(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,r.jsx)(s.Ey,{fname:"callback",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"113",end:"125"}),(0,r.jsx)(s.Ey,{fname:"promiseResult",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"127",end:"145"})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var r=a(36905);const n={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){var t=e.children,a=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(67294),n=a(36905),s=a(12466),l=a(16550),c=a(20469),i=a(91980),o=a(67392),u=a(50012);function d(e){var t,a;return null!=(t=null==(a=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function h(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,s=(0,l.k6)(),c=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:n});return[(0,i._X)(c),(0,r.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function m(e){var t,a,n,s,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,d=e.groupId,m=h(e),v=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:m})})),g=v[0],f=v[1],x=b({queryString:o,groupId:d}),j=x[0],y=x[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,u.Nk)(t),n=a[0],s=a[1],[n,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),E=k[0],S=k[1],w=function(){var e=null!=j?j:E;return p({value:e,tabValues:m})?e:null}();return(0,c.Z)((function(){w&&f(w)}),[w]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),S(e)}),[y,S,m]),tabValues:m}}var v=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(85893);function x(e){var t=e.className,a=e.block,r=e.selectedValue,l=e.selectValue,c=e.tabValues,i=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,a=i.indexOf(t),n=c[a].value;n!==r&&(o(t),l(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,n=i.indexOf(e.currentTarget)+1;a=null!=(r=i[n])?r:i[0];break;case"ArrowLeft":var s,l=i.indexOf(e.currentTarget)-1;a=null!=(s=i[l])?s:i[i.length-1]}null==(t=a)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:c.map((function(e){var t=e.value,a=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,n.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=a?a:t}),t)}))})}function j(e){var t=e.lazy,a=e.children,n=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})}))})}function y(e){var t=m(e);return(0,f.jsxs)("div",{className:(0,n.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(x,Object.assign({},e,t)),(0,f.jsx)(j,Object.assign({},e,t))]})}function k(e){var t=(0,v.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,a)=>{a.d(t,{Ey:()=>u,O2:()=>i,SQ:()=>o});a(67294);var r=a(74866),n=a(85162),s=a(95665),l=a.n(s),c=a(85893);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(n.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=(a.children,a.url),n=a.start,s=a.end,l=a.fname;if(e.type===u)return u({url:r,start:n,end:s,language:t,fname:l});return e}(e,a)})),1==t.length?(0,c.jsx)(n.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(n.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,a=e.start,r=e.end,n=e.language,s=e.fname,i=t+"#";return a&&r&&(i+="L"+a+"-L"+r+"#"),(0,c.jsx)(l(),{language:n,fname:s,children:i})}}}]);
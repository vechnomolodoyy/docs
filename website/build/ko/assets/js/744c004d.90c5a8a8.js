"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3579],{91894:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(85893),i=r(11151),s=(r(74866),r(85162),r(42352));const l={id:"near",title:"Interacting with Near"},a=void 0,c={id:"bos/api/near",title:"Interacting with Near",description:"The components can use the Near object to interact with smart contracts in the NEAR blockchain. \uc138 \uac00\uc9c0 \uba54\uc11c\ub4dc\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/api/near.md",sourceDirName:"bos/api",slug:"/bos/api/near",permalink:"/ko/bos/api/near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/near.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705334457,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 15\uc77c",frontMatter:{id:"near",title:"Interacting with Near"},sidebar:"build",previous:{title:"List of Native Components",permalink:"/ko/bos/api/builtin-components"},next:{title:"Social Interactions",permalink:"/ko/bos/api/social"}},o={},d=[{value:"Near.view",id:"nearview",level:2},{value:"Avoiding a Common Pitfall",id:"avoiding-a-common-pitfall",level:4},{value:"Near.call",id:"nearcall",level:2},{value:"Near.block",id:"nearblock",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The components can use the ",(0,t.jsx)(n.code,{children:"Near"})," object to interact with smart contracts in the NEAR blockchain. \uc138 \uac00\uc9c0 \uba54\uc11c\ub4dc\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#nearview",children:(0,t.jsx)(n.code,{children:"Near.view"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#nearblock",children:(0,t.jsx)(n.code,{children:"Near.block"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#nearcall",children:(0,t.jsx)(n.code,{children:"Near.call"})})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"nearview",children:"Near.view"}),"\n",(0,t.jsx)(n.p,{children:"Queries a read-only method from a NEAR smart contract, returning:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"null"})}),": If the query is still being processed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"undefined"})}),": If the query is complete and no value was returned by the contract"]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.strong,{children:"value"}),": If the query is complete and a value was returned by the contract"]}),"\n"]}),"\n",(0,t.jsx)(s.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const greeting = Near.view("hello.near-examples.testnet", "get_greeting", {});\n\nif (greeting === null) return "Loading...";\n\nreturn `The contract says: ${greeting}`;\n'})})}),"\n",(0,t.jsxs)(r,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,t.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,t.jsx)(n.th,{children:"\uc790\ub8cc\ud615"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"contractName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"\ud544\uc218 \uc5ec\ubd80"})}),(0,t.jsx)(n.td,{children:"\ubb38\uc790\uc5f4"}),(0,t.jsx)(n.td,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc774\ub984"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"methodName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"\ud544\uc218"})}),(0,t.jsx)(n.td,{children:"\ubb38\uc790\uc5f4"}),(0,t.jsx)(n.td,{children:"\ud638\ucd9c\ud560 \uba54\uc11c\ub4dc \uc774\ub984"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"args"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,t.jsx)(n.td,{children:"\uac1d\uccb4 \uc778\uc2a4\ud134\uc2a4"}),(0,t.jsx)(n.td,{children:"\uba54\uc11c\ub4dc\uc5d0 \uc804\ub2ec\ud560 \uc778\uc218"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"blockId/finality"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,t.jsx)(n.td,{children:"\ubb38\uc790\uc5f4"}),(0,t.jsx)(n.td,{children:"\ube14\ub85d ID \ub610\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc644\uacb0\uc131"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"subscribe"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,t.jsx)(n.td,{children:"\ubd80\uc6b8"}),(0,t.jsx)(n.td,{children:"\uc774 \uae30\ub2a5\uc744 \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ucffc\ub9ac\uc5d0 \uac00\uc785\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ub97c \ud1b5\ud574 5\ucd08\ub9c8\ub2e4 \ubaa8\ub4e0 \uac00\uc785\uc790\uc758 \ub370\uc774\ud130\uac00 \uc790\ub3d9\uc73c\ub85c \uc0c8\ub85c \uace0\uccd0\uc9d1\ub2c8\ub2e4."})]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Notice that the optional parameter ",(0,t.jsx)(n.code,{children:"subscribe"})," allows users to subscribe to a query, which automatically refreshes the data every 5 seconds."]})}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h4,{id:"avoiding-a-common-pitfall",children:"Avoiding a Common Pitfall"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to initialize the state with the result of a ",(0,t.jsx)(n.code,{children:"Near.view"})," call, be sure to check first that the value was obtained, to avoid initializing the state with ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(s.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const contractGreet = Near.view("hello.near-examples.testnet", "get_greeting", {});\n\n// you need to first check that the value was obtained\nif (contractGreet === null) return "Loading...";\n\nconst [greeting, setGreeting] = useState(contractGreet);\n\nreturn `The contract says: ${greeting}`;\n'})})}),"\n",(0,t.jsxs)(n.p,{children:["If you don't want to delay the render of your component, you can also use the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook to control the value returned by ",(0,t.jsx)(n.code,{children:"Near.view"})]}),"\n",(0,t.jsx)(s.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const contractGreet = Near.view('hello.near-examples.testnet', 'get_greeting');\n\nconst [greeting, setGreeting] = useState('Loading ...');\n\nuseEffect(() => {\n  if (contractGreet !== null) setGreeting(contractGreet);\n}, [contractGreet]);\n\nreturn `The contract says: ${greeting}`;\n"})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"nearcall",children:"Near.call"}),"\n",(0,t.jsx)(n.p,{children:"Calls a smart contract method from the blockchain. Since a transaction needs to be signed, the user must be logged in in order to make the call."}),"\n",(0,t.jsx)(s.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'if (!context.accountId) return "Please login...";\n\nconst onClick = () => {\n  Near.call(\n    "hello.near-examples.testnet",\n    "set_greeting",\n    { greeting: "Hello!" }\n  );\n};\n\nreturn <>\n  <h5> Hello {context.accountId} </h5>\n  <button onClick={onClick}> Set Greeting </button>\n</>;\n'})})}),"\n",(0,t.jsxs)(r,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"\uc790\ub8cc\ud615"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"contractName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"required"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"\ud638\ucd9c\ud560 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc774\ub984"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"methodName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"\ud544\uc218"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud638\ucd9c\ud560 \uba54\uc11c\ub4dc \uc774\ub984"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"args"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"object instance"}),(0,t.jsx)(n.td,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\uc5d0 \uac1d\uccb4 \uc778\uc2a4\ud134\uc2a4\uc758 \ud615\ud0dc\ub85c \uc804\ub2ec\ud560 \uc778\uc790"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gas"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"\ubb38\uc790\uc5f4 / \uc22b\uc790"}),(0,t.jsx)(n.td,{children:"\ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uac00\uc2a4\uc758 \ucd5c\ub300 \uc591 (\uae30\ubcf8 300Tg)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"deposit"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,t.jsx)(n.td,{children:"\ubb38\uc790\uc5f4 / \uc22b\uc790"}),(0,t.jsx)(n.td,{children:"\ud638\ucd9c\uc5d0 \ubcf4\uc99d\uae08\uc73c\ub85c \ucca8\ubd80\ub418\ub294 NEAR \ud1a0\ud070\uc758 \uc591 (yoctoNEAR \ub2e8\uc704)"})]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Remember that you can login using the ",(0,t.jsx)(n.code,{children:"Login"})," button at the navigation bar."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"nearblock",children:"Near.block"}),"\n",(0,t.jsx)(n.p,{children:"Queries a block from the blockchain."}),"\n",(0,t.jsx)(s.W,{height:"40px",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'return Near.block("optimistic");\n'})})}),"\n",(0,t.jsxs)(r,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"param"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"blockHeightOrFinality"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"\ubaa8\ub450"}),(0,t.jsxs)(n.td,{children:["\ube14\ub85d\uccb4\uc778 \ucffc\ub9ac\uc5d0 \uc0ac\uc6a9\ud560 \ube14\ub85d \ub192\uc774 \ub610\ub294 \uc644\uacb0\uc131 \uc218\uc900(\uc6d0\ud558\ub294 \ube14\ub85d \ub192\uc774 \ub610\ub294 \ub2e4\uc74c \ubb38\uc790\uc5f4 \uc911 \ud558\ub098: ",(0,t.jsx)(n.code,{children:"optimistic"}),", ",(0,t.jsx)(n.code,{children:"final"}),")"]})]})})]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc6d0\ud558\ub294 \ube14\ub85d \ub192\uc774: \uc591\uc758 \uc815\uc218\ub85c \ud45c\ud604\ub418\ub294 \ucffc\ub9ac\ud560 \ud2b9\uc815 \ube14\ub85d\uc758 \ub192\uc774"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"optimistic"}),": Uses the latest block recorded on the node that responded to your query (< 1 second delay)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"final"}),": \ub124\ud2b8\uc6cc\ud06c \ub0b4 \ub178\ub4dc\uc758 66% \uc774\uc0c1\uc5d0\uc11c \uac80\uc99d\ub41c \ube14\ub85d(\uc57d 2\ucd08)"]}),"\n"]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const i={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>N});var t=r(67294),i=r(36905),s=r(12466),l=r(16550),a=r(20469),c=r(91980),o=r(67392),d=r(50012);function h(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function u(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function x(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,i=e.groupId,s=(0,l.k6)(),a=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:i});return[(0,c._X)(a),(0,t.useCallback)((function(e){if(a){var n=new URLSearchParams(s.location.search);n.set(a,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[a,s])]}function m(e){var n,r,i,s,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,h=e.groupId,m=u(e),p=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var i=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:l,tabValues:m})})),f=p[0],b=p[1],g=j({queryString:o,groupId:h}),v=g[0],y=g[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),r=(0,d.Nk)(n),i=r[0],s=r[1],[i,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=N[0],k=N[1],I=function(){var e=null!=v?v:w;return x({value:e,tabValues:m})?e:null}();return(0,a.Z)((function(){I&&b(I)}),[I]),{selectedValue:f,selectValue:(0,t.useCallback)((function(e){if(!x({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var p=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function g(e){var n=e.className,r=e.block,t=e.selectedValue,l=e.selectValue,a=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=c.indexOf(n),i=a[r].value;i!==t&&(o(n),l(i))},h=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,i=c.indexOf(e.currentTarget)+1;r=null!=(t=c[i])?t:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;r=null!=(s=c[l])?s:c[c.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:a.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},s,{className:(0,i.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,i=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===i}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function y(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,Object.assign({},e,n)),(0,b.jsx)(v,Object.assign({},e,n))]})}function N(e){var n=(0,p.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},42352:(e,n,r)=>{r.d(n,{W:()=>a});var t=r(67294),i=r(93293),s=r(91262),l=r(85893);function a(e){var n=e.children,a=e.id,c=void 0===a?1:a,o=e.height,d=void 0===o?"160px":o;return(0,l.jsx)(s.Z,{fallback:(0,l.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(f){}var s=r(58613),a=s.Widget,o=s.useInitNear,h=r(2302).ZP,u=(0,t.useState)(e),x=u[0],j=u[1],m=o().initNear,p=(0,i.O)().selector;return(0,t.useEffect)((function(){m&&p&&m({networkId:"testnet",selector:p})}),[m,p]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"monaco",children:(0,l.jsx)(h,{height:d,value:x,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return j(e)}})}),(0,l.jsx)("div",{className:"code_iframe",children:(0,l.jsx)("div",{className:"bootstrap-scope",children:(0,l.jsx)("div",{className:"vm-widget",children:(0,l.jsx)(a,{code:x},c)})})})]})}})}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var t=r(67294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
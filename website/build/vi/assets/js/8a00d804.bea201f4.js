"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1378],{40914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(85893),r=n(11151),s=n(74866),i=n(85162);const o={id:"ft",title:"Fungible Tokens (FT)"},l=void 0,c={id:"develop/relevant-contracts/ft",title:"Fungible Tokens (FT)",description:"Besides the native NEAR token, NEAR accounts have access to a multitude of fungible tokens (e.g. these whitelisted tokens). Moreover, it is even possible for users to create their own fungible tokens.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/relevant-contracts/ft.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/ft",permalink:"/vi/develop/relevant-contracts/ft",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/ft.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"ft",title:"Fungible Tokens (FT)"}},d={},u=[{value:"Creating a Fungible Token",id:"creating-a-fungible-token",level:2},{value:"Querying Metadata",id:"querying-metadata",level:2},{value:"Registering a User",id:"registering-a-user",level:2},{value:"Getting Balance",id:"getting-balance",level:2},{value:"Transfer",id:"transfer",level:2},{value:"Attaching FTs to a Call",id:"attaching-fts-to-a-call",level:2},{value:"D\u01b0\u1edbi \u0111\xe2y l\xe0 danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c error variant c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 theo lo\u1ea1i request <code>view_access_key_list</code>",id:"d\u01b0\u1edbi-\u0111\xe2y-l\xe0-danh-s\xe1ch-\u0111\u1ea7y-\u0111\u1ee7-c\xe1c-error-variant-c\xf3-th\u1ec3-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-theo-lo\u1ea1i-request-view_access_key_list",level:4},{value:"The ft_on_transfer method",id:"the-ft_on_transfer-method",level:4},{value:"Event",id:"event",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Besides the native NEAR token, NEAR accounts have access to a multitude of fungible tokens (e.g. ",(0,a.jsx)(t.a,{href:"https://guide.ref.finance/developers-1/cli-trading#query-whitelisted-tokens",children:"these whitelisted tokens"}),"). Moreover, it is even possible for users to create their own fungible tokens."]}),"\n",(0,a.jsxs)(t.p,{children:["In contrast with the NEAR native token, fungible token (FT) are ",(0,a.jsx)(t.strong,{children:"not stored"})," in the user's wallet. In fact, each FT lives in ",(0,a.jsx)(t.strong,{children:"their own contract"})," which is in charge of doing ",(0,a.jsx)(t.strong,{children:"bookkeeping"}),". This is, the contract keeps track of how many tokens each user has, and handles transfers internally."]}),"\n",(0,a.jsxs)(t.p,{children:["In order for a contract to be considered a FT-contract it has to follow the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/FungibleToken/",children:(0,a.jsx)(t.strong,{children:"NEP-141 and NEP-148 standards"})}),". The ",(0,a.jsx)(t.strong,{children:"NEP-141"})," & ",(0,a.jsx)(t.strong,{children:"NEP-148"})," standards explain the ",(0,a.jsx)(t.strong,{children:"minimum interface"})," required to be implemented, as well as the expected functionality."]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["Reference Implementation We provide a ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/FT",children:"FT reference implementation"})," ready to be deployed and use. :::"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h2,{id:"creating-a-fungible-token",children:"Creating a Fungible Token"}),(0,a.jsxs)(t.p,{children:["Creating a new FT is as simple as deploying a new FT contract and initializing it. On initialization you will define the token's metadata such as its name (e.g. Ethereum), symbol (e.g. ETH) and total supply (e.g. 10M). You will also define an ",(0,a.jsx)(t.code,{children:"owner"}),", which will own the tokens ",(0,a.jsx)(t.strong,{children:"total supply"}),"."]}),(0,a.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(i.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# 1. Deploy the contract in a testnet account\nnear create-account <account-id> --useFaucet\nnear deploy <account-id> fungible_token.wasm\n\n# 2. Initialize the contract with metadata\nnear call <ft-contract> new \'{"owner_id": "<owner-account>", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "Example Token Name", "symbol": "EXLT", "decimals": 8 }}\' --accountId <ft-contract>\n\n'})})})}),(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["On initialization you will define an ",(0,a.jsx)(t.strong,{children:"owner"}),", who will own ",(0,a.jsx)(t.strong,{children:"ALL"})," the tokens. :::"]}),(0,a.jsx)("hr",{className:"subsection"}),(0,a.jsx)(t.h2,{id:"querying-metadata",children:"Querying Metadata"}),(0,a.jsxs)(t.p,{children:["You can query the FT's metadata by calling the ",(0,a.jsx)(t.code,{children:"ft_metadata"}),"."]}),(0,a.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(i.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view <ft-contract> ft_metadata\n"})})})}),(0,a.jsx)("hr",{className:"subsection"}),(0,a.jsx)(t.h2,{id:"registering-a-user",children:"Registering a User"}),(0,a.jsxs)(t.p,{children:["In order for a user to own and transfer tokens they need to first ",(0,a.jsx)(t.strong,{children:"register"})," in the contract. This is done by calling ",(0,a.jsx)(t.code,{children:"storage_deposit"})," and attaching 0.00125\u24c3. This method also allows to pay for other users to register them."]}),(0,a.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(i.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call <ft-contract> storage_deposit \'{"account_id": "<account-to-register>"}\' --accountId <your-account> --amount 0.00125\n'})})})}),(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["You can make sure a user is registered by asserting they have a ",(0,a.jsx)(t.code,{children:"storage_balance_of"})," greater than 0.00125 \u24c3. :::"]}),(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["After you call the ",(0,a.jsx)(t.code,{children:"storage_deposit"})," the FT will appear in the NEAR WALLET. :::"]}),(0,a.jsx)("hr",{className:"subsection"}),(0,a.jsx)(t.h2,{id:"getting-balance",children:"Getting Balance"}),(0,a.jsxs)(t.p,{children:["To know how many coins a user has you will need to query the method ",(0,a.jsx)(t.code,{children:"ft_balance_of"}),"."]}),(0,a.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(i.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view <ft-contract> ft_balance_of \'{"account_id": "<users-account>"}\'\n'})})})}),(0,a.jsxs)(t.admonition,{type:"caution",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["Keep in mind the ",(0,a.jsx)(t.code,{children:"decimals"})," from the ",(0,a.jsx)(t.a,{href:"#query-metadata",children:"metadata"}),". A balance of ",(0,a.jsx)(t.code,{children:"150 FT"})," for a token with 2 ",(0,a.jsx)(t.code,{children:"decimals"})," actually represents ",(0,a.jsx)(t.code,{children:"1.50 FT"}),". :::"]}),(0,a.jsx)("hr",{className:"subsection"}),(0,a.jsx)(t.h2,{id:"transfer",children:"Transfer"}),(0,a.jsxs)(t.p,{children:["To send FT to another account you will use the ",(0,a.jsx)(t.code,{children:"ft_transfer"})," method, indicating the receiver and the amount of FT you want to send."]}),(0,a.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(i.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call <ft-contract> ft_transfer \'{"receiver_id": "<receiver-account>", "amount": "<amount>"}\' --accountId <your-account> --depositYocto 1\n'})})})}),(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["Implement ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events"})," to be able to ",(0,a.jsx)(t.a,{href:"/vi/tools/realtime",children:"track FT transfers in real time"}),". :::"]}),(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["In order to send a fungible token to an account, both the sender and receiver must be ",(0,a.jsx)(t.a,{href:"#register-a-user",children:"registered"})," in the FT contract. :::"]}),(0,a.jsx)("hr",{className:"subsection"}),(0,a.jsx)(t.h2,{id:"attaching-fts-to-a-call",children:"Attaching FTs to a Call"}),(0,a.jsx)(t.p,{children:"Natively, only NEAR tokens (\u24c3) can be attached to a function calls. However, the FT standard enables to attach fungible tokens in a call by using the FT-contract as intermediary. This means that, instead of you attaching tokens directly to the call, you ask the FT-contract to do both a transfer and a function call in your name."}),(0,a.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(i.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call <ft-contract> ft_transfer_call \'{"receiver_id": "<receiver-contract>", "amount": "<amount>", "msg": "<a-string-message>"}\' --accountId <user_account_id> --depositYocto 1\n'})})})}),(0,a.jsxs)(t.h4,{id:"d\u01b0\u1edbi-\u0111\xe2y-l\xe0-danh-s\xe1ch-\u0111\u1ea7y-\u0111\u1ee7-c\xe1c-error-variant-c\xf3-th\u1ec3-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-theo-lo\u1ea1i-request-view_access_key_list",children:["D\u01b0\u1edbi \u0111\xe2y l\xe0 danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c error variant c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 theo lo\u1ea1i request ",(0,a.jsx)(t.code,{children:"view_access_key_list"})]}),(0,a.jsx)(t.p,{children:"Assume you want to attach some FT (\ud83e\ude99) to a call on the receiver contract. The workflow is as follows:"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["You call ",(0,a.jsx)(t.code,{children:"ft_transfer_call"})," in the \ud83e\ude99-contract passing: the receiver, a message, and the amount."]}),"\n",(0,a.jsx)(t.li,{children:"The FT contract transfers the amount to the receiver."}),"\n",(0,a.jsxs)(t.li,{children:["The FT contract calls ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"receiver.ft_on_transfer(sender, msg, amount)"})}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The FT contract handles errors in the ",(0,a.jsx)(t.code,{children:"ft_resolve_transfer"})," callback."]}),"\n",(0,a.jsx)(t.li,{children:"The FT contract returns you how much of the attached amount was actually used."}),"\n"]}),(0,a.jsx)(t.h4,{id:"the-ft_on_transfer-method",children:"The ft_on_transfer method"}),(0,a.jsxs)(t.p,{children:["From the workflow above it follows that the receiver we want to call needs to implement the ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," method. When executed, such method will know:"]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Which FT was transferred, since it is the ",(0,a.jsx)(t.a,{href:"/vi/develop/contracts/environment/#predecessor-and-signer",children:(0,a.jsx)(t.code,{children:"predecessor"})})," account."]}),"\n",(0,a.jsx)(t.li,{children:"Who is sending the FT, since it is a parameter"}),"\n",(0,a.jsx)(t.li,{children:"How many FT were transferred, since it is a parameter"}),"\n",(0,a.jsx)(t.li,{children:"If there are any parameters encoded as a message"}),"\n"]}),(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," ",(0,a.jsx)(t.strong,{children:"must"})," return ",(0,a.jsx)(t.strong,{children:"how many FT tokens have to be refunded"}),", so the FT contract gives them back to the sender."]}),(0,a.jsx)("hr",{className:"subsection"}),(0,a.jsx)(t.h2,{id:"event",children:"Event"}),(0,a.jsxs)(t.p,{children:["You can track real time events (such as transfers) by implementing the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"FT Event Standards"}),". ",(0,a.jsx)(t.code,{children:"Events"})," are simple to use because they are just log messages formatted in a standardized way. Since these logged messages are public, a service can then be built to ",(0,a.jsx)(t.a,{href:"/vi/tools/realtime",children:"track them in real time"}),"."]})]})]})]})]})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function g(e){var t,n,r,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,g=h(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),p=v[0],x=v[1],b=m({queryString:c,groupId:u}),j=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),T=w[0],k=w[1],_=function(){var e=null!=j?j:T;return f({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){_&&x(_)}),[_]),{selectedValue:p,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),k(e)}),[y,k,g]),tabValues:g}}var v=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function b(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.Z)("tabs__item",p.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",p.tabList),children:[(0,x.jsx)(b,Object.assign({},e,t)),(0,x.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,v.Z)();return(0,x.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
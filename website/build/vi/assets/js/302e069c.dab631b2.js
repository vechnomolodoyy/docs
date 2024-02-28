"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1463],{93447:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(85893),a=r(11151),s=r(74866),o=r(85162);const i={id:"quick-reference",title:"Using JavaScript API to interact with NEAR",sidebar_label:"Using JavaScript API"},l=void 0,c={id:"tools/near-api-js/quick-reference",title:"Using JavaScript API to interact with NEAR",description:"Quick Reference",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/4.tools/near-api-js/quick-reference.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/quick-reference",permalink:"/vi/tools/near-api-js/quick-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/quick-reference.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809,formattedLastUpdatedAt:"22 thg 1, 2024",frontMatter:{id:"quick-reference",title:"Using JavaScript API to interact with NEAR",sidebar_label:"Using JavaScript API"},sidebar:"tools",previous:{title:"Home",permalink:"/vi/tools/welcome"},next:{title:"Wallet",permalink:"/vi/tools/near-api-js/wallet"}},d={},u=[{value:"Quick Reference",id:"quick-reference",level:2},{value:"What is <code>near-api-js</code>",id:"what-is-near-api-js",level:2},{value:"Install",id:"install",level:2},{value:"Import",id:"import",level:2},{value:"L\u01b0u tr\u1eef key",id:"key-store",level:2},{value:"Connecting to NEAR",id:"connect",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"quick-reference",children:"Quick Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#install",children:"Installation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/wallet",children:"Interacting with the Wallet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/account",children:"Accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/contract",children:"Contracts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/utils",children:"Utilities"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"what-is-near-api-js",children:["What is ",(0,t.jsx)(n.code,{children:"near-api-js"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"near-api-js"})," is a complete library to interact with the NEAR blockchain. You can use it in the browser, or in Node.js runtime."]}),"\n",(0,t.jsxs)(n.p,{children:["You'll typically first create a connection to NEAR with ",(0,t.jsx)(n.a,{href:"#connect",children:(0,t.jsx)(n.code,{children:"connect"})})," using a ",(0,t.jsx)(n.a,{href:"#key-store",children:(0,t.jsx)(n.code,{children:"KeyStore"})}),". With the connection object you now can:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Interact with the ",(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/wallet",children:"Wallet"})," in a browser."]}),"\n",(0,t.jsxs)(n.li,{children:["Instantiate an ",(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/account",children:"Account"})," object to:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Send tokens"}),"\n",(0,t.jsx)(n.li,{children:"Deploy contracts"}),"\n",(0,t.jsx)(n.li,{children:"Inspect, create or delete accounts"}),"\n",(0,t.jsx)(n.li,{children:"Manage keys for accounts."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Instantiate a ",(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/contract",children:"Contract"})," object to call smart contract methods."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The library also contains some ",(0,t.jsx)(n.a,{href:"/vi/tools/near-api-js/utils",children:"utility functions"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["To quickly get started with integrating NEAR in a web browser, read our ",(0,t.jsx)(n.a,{href:"/develop/integrate/frontend",children:"Web Frontend integration"})," article. :::"]}),(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["Note the difference between ",(0,t.jsx)(n.code,{children:"near-api-js"})," and ",(0,t.jsx)(n.code,{children:"near-sdk-js"}),":"]}),(0,t.jsxs)(n.p,{children:["The JavaScript ",(0,t.jsx)(n.em,{children:"SDK"})," is a library for developing smart contracts. It contains classes and functions you use to write your smart contract code."]}),(0,t.jsxs)(n.p,{children:["The JavaScript ",(0,t.jsx)(n.em,{children:"API"})," is a complete library for all possible commands to interact with NEAR. It\u2019s a wrapper for the RPC endpoints, a library to interact with NEAR Wallet in the browser, and a tool for keys management. :::"]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"install",children:"Install"}),(0,t.jsxs)(n.p,{children:["Include ",(0,t.jsx)(n.code,{children:"near-api-js"})," as a dependency in your package."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i --save near-api-js\n"})}),(0,t.jsx)(n.h2,{id:"import",children:"Import"}),(0,t.jsxs)(n.p,{children:["You can use the API library in the browser, or in Node.js runtime. Some features are available only in one of the environments. For example, the ",(0,t.jsx)(n.code,{children:"WalletConnection"})," is only for the browser, and there are different ",(0,t.jsx)(n.code,{children:"KeyStore"})," providers for each environment."]}),(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.Z,{value:"Browser",label:"Browser",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import * as nearAPI from "near-api-js";\n'})})}),(0,t.jsx)(o.Z,{value:"Node",label:"Node",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const nearAPI = require("near-api-js");\n'})})})]}),(0,t.jsx)(n.h2,{id:"key-store",children:"L\u01b0u tr\u1eef key"}),(0,t.jsxs)(n.p,{children:["If you sign transactions, you need to create a ",(0,t.jsx)(n.em,{children:"Key Store"}),". In the browser, the LocalStorage KeyStore will be used once you ask your user to Sign In with the Wallet."]}),(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(o.Z,{value:"browser",label:"Using Browser",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// creates keyStore using private key in local storage\n\nconst { keyStores } = nearAPI;\nconst myKeyStore = new keyStores.BrowserLocalStorageKeyStore();\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores_browser.browser_local_storage_key_store.BrowserLocalStorageKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"BrowserLocalStorageKeyStore"})]})})]}),(0,t.jsxs)(o.Z,{value:"dir",label:"Using Credentials Directory",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// creates a keyStore that searches for keys in .near-credentials\n// requires credentials stored locally by using a NEAR-CLI command: `near login`\n// https://docs.near.org/tools/cli#near-login\n\nconst { keyStores } = nearAPI;\nconst homedir = require("os").homedir();\nconst CREDENTIALS_DIR = ".near-credentials";\nconst credentialsPath = require("path").join(homedir, CREDENTIALS_DIR);\nconst myKeyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);\n'})}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores_node.unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"UnencryptedFileSystemKeyStore"})]})})]}),(0,t.jsxs)(o.Z,{value:"file",label:"Using a File",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// creates keyStore from a provided file\n// you will need to pass the location of the .json key pair\n\nconst { KeyPair, keyStores } = require("near-api-js");\nconst fs = require("fs");\nconst homedir = require("os").homedir();\n\nconst ACCOUNT_ID = "near-example.testnet"; // NEAR account tied to the keyPair\nconst NETWORK_ID = "testnet";\n// path to your custom keyPair location (ex. function access key for example account)\nconst KEY_PATH = "/.near-credentials/near-example-testnet/get_token_price.json";\n\nconst credentials = JSON.parse(fs.readFileSync(homedir + KEY_PATH));\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nmyKeyStore.setKey(\n  NETWORK_ID,\n  ACCOUNT_ID,\n  KeyPair.fromString(credentials.private_key)\n);\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores.in_memory_key_store.InMemoryKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"InMemoryKeyStore"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_crypto.key_pair.KeyPair.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"KeyPair"})]})]})]}),(0,t.jsxs)(o.Z,{value:"key",label:"Using a private key string",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// creates keyStore from a private key string\n// you can define your key here or use an environment variable\n\nconst { keyStores, KeyPair } = nearAPI;\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nconst PRIVATE_KEY =\n  "by8kdJoJHu7uUkKfoaLd2J2Dp1q1TigeWMG123pHdu9UREqPcshCM223kWadm";\n// creates a public / private key pair using the provided private key\nconst keyPair = KeyPair.fromString(PRIVATE_KEY);\n// adds the keyPair you created to keyStore\nawait myKeyStore.setKey("testnet", "example-account.testnet", keyPair);\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_keystores.in_memory_key_store.InMemoryKeyStore.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"InMemoryKeyStore"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_crypto.key_pair.KeyPair.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(n.code,{children:"KeyPair"})]})]})]})]}),(0,t.jsx)(n.h2,{id:"connect",children:"Connecting to NEAR"}),(0,t.jsxs)(n.p,{children:["The object returned from ",(0,t.jsx)(n.code,{children:"connect"})," is your entry-point for all commands in the API. To sign a transaction you'll need a ",(0,t.jsx)(n.a,{href:"#key-store",children:(0,t.jsx)(n.code,{children:"KeyStore"})})," to create a connection."]}),(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.Z,{value:"testnet",label:"TestNet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const { connect } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "testnet",\n  keyStore: myKeyStore, // first create a key store\n  nodeUrl: "https://rpc.testnet.near.org",\n  walletUrl: "https://testnet.mynearwallet.com/",\n  helperUrl: "https://helper.testnet.near.org",\n  explorerUrl: "https://testnet.nearblocks.io",\n};\nconst nearConnection = await connect(connectionConfig);\n'})})}),(0,t.jsx)(o.Z,{value:"mainnet",label:"MainNet",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const { connect } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "mainnet",\n  keyStore: myKeyStore, // first create a key store\n  nodeUrl: "https://rpc.mainnet.near.org",\n  walletUrl: "https://wallet.mainnet.near.org",\n  helperUrl: "https://helper.mainnet.near.org",\n  explorerUrl: "https://nearblocks.io",\n};\nconst nearConnection = await connect(connectionConfig);\n'})})}),(0,t.jsx)(o.Z,{value:"localnet",label:"LocalNet",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const { connect } = nearAPI;\nconst connectionConfig = {\n  networkId: "local",\n  nodeUrl: "http://localhost:3030",\n  walletUrl: "http://localhost:4000/wallet",\n};\nconst nearConnection = await connect(connectionConfig);\n'})})})]}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://near.github.io/near-api-js/modules/near_api_js.connect.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-module"})," Module ",(0,t.jsx)(n.code,{children:"connect"})]})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function o(e){var n=e.children,r=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),a=r(36905),s=r(12466),o=r(16550),i=r(20469),l=r(91980),c=r(67392),d=r(50012);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,o.k6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function y(e){var n,r,a,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,y=h(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:y})})),f=m[0],x=m[1],v=j({queryString:c,groupId:u}),b=v[0],g=v[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(n),a=r[0],s=r[1],[a,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=k[0],S=k[1],I=function(){var e=null!=b?b:w;return p({value:e,tabValues:y})?e:null}();return(0,i.Z)((function(){I&&x(I)}),[I]),{selectedValue:f,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:y}))throw new Error("Can't select invalid tab value="+e);x(e),g(e),S(e)}),[g,S,y]),tabValues:y}}var m=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function v(e){var n=e.className,r=e.block,t=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=l.indexOf(n),a=i[r].value;a!==t&&(c(n),o(a))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;r=null!=(s=l[o])?s:l[l.length-1]}null==(n=r)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function b(e){var n=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var o=s.find((function(e){return e.props.value===a}));return o?(0,t.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function g(e){var n=y(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(v,Object.assign({},e,n)),(0,x.jsx)(b,Object.assign({},e,n))]})}function k(e){var n=(0,m.Z)();return(0,x.jsx)(g,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
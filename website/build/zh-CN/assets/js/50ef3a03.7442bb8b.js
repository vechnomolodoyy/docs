"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1235],{31649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(85893),c=t(11151);const a={id:"implicit-accounts",title:"Implicit Accounts",sidebar_label:"Implicit Accounts"},r=void 0,s={id:"integrator/implicit-accounts",title:"Implicit Accounts",description:"Background",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/6.integrator/implicit-accounts.md",sourceDirName:"6.integrator",slug:"/integrator/implicit-accounts",permalink:"/zh-CN/integrator/implicit-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/implicit-accounts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"implicit-accounts",title:"Implicit Accounts",sidebar_label:"Implicit Accounts"},sidebar:"exchanges",previous:{title:"Fungible Tokens",permalink:"/zh-CN/integrator/fungible-tokens"},next:{title:"Introduction",permalink:"/zh-CN/integrator/errors/introduction"}},o={},l=[{value:"Background",id:"background",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Creating an account locally",id:"creating-an-account-locally",level:2},{value:"Set <code>betanet</code> network",id:"set-betanet-network",level:3},{value:"Generating a key-pair first",id:"generating-a-key-pair-first",level:3},{value:"Using the Implicit Account",id:"using-the-implicit-account",level:4},{value:"Transferring to the implicit account",id:"transferring-to-the-implicit-account",level:2},{value:"BONUS: Converting public key using python (for learning purposes)",id:"bonus-converting-public-key-using-python-for-learning-purposes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(n.p,{children:"Implicit accounts work similarly to Bitcoin/Ethereum accounts."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"They allow you to reserve an account ID before it's created by generating a ED25519 key-pair locally."}),"\n",(0,i.jsx)(n.li,{children:"This key-pair has a public key that maps to the account ID."}),"\n",(0,i.jsx)(n.li,{children:"The account ID is a lowercase hex representation of the public key."}),"\n",(0,i.jsx)(n.li,{children:"An ED25519 Public key contains 32 bytes that maps to 64 characters account ID."}),"\n",(0,i.jsx)(n.li,{children:"The corresponding secret key allows you to sign transactions on behalf of this account once it's created on chain."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"specifications",children:(0,i.jsx)(n.a,{href:"https://nomicon.io/DataStructures/Account.html#implicit-account-ids",children:"Specifications"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-account-locally",children:"Creating an account locally"}),"\n",(0,i.jsxs)(n.p,{children:["For the purpose of this demo, we'll use the ",(0,i.jsx)(n.code,{children:"betanet"})," network."]}),"\n",(0,i.jsxs)(n.h3,{id:"set-betanet-network",children:["Set ",(0,i.jsx)(n.code,{children:"betanet"})," network"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export NEAR_ENV=betanet\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generating-a-key-pair-first",children:"Generating a key-pair first"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near generate-key --saveImplicit\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Seed phrase: lumber habit sausage used zebra brain border exist meat muscle river hidden\nKey pair: {"publicKey":"ed25519:AQgnQSR1Mp3v7xrw7egJtu3ibNzoCGwUwnEehypip9od","secretKey":"ed25519:51qTiqybe8ycXwPznA8hz7GJJQ5hyZ45wh2rm5MBBjgZ5XqFjbjta1m41pq9zbRZfWGUGWYJqH4yVhSWoW6pYFkT"}\nImplicit account: 8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8\nStoring credentials for account: 8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8 (network: testnet)\nSaving key to \'~/.near-credentials/testnet/8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8.json\'\n'})}),"\n",(0,i.jsx)(n.h4,{id:"using-the-implicit-account",children:"Using the Implicit Account"}),"\n",(0,i.jsx)(n.p,{children:"We can export our account ID to a bash env variable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export ACCOUNT="8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Assuming you've received tokens on your new account, you can transfer from it using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near $ACCOUNT <receiver> <amount>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also replace ",(0,i.jsx)(n.code,{children:"$ACCOUNT"})," with your actual account ID, e.g."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near send 98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de <receiver> <amount>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"transferring-to-the-implicit-account",children:"Transferring to the implicit account"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say someone gives you their account ID ",(0,i.jsx)(n.code,{children:"0861ea8ddd696525696ccf3148dd706c4fda981c64d8a597490472594400c223"}),". You can just transfer to it by running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near send <your_account_id> 0861ea8ddd696525696ccf3148dd706c4fda981c64d8a597490472594400c223 <amount>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bonus-converting-public-key-using-python-for-learning-purposes",children:"BONUS: Converting public key using python (for learning purposes)"}),"\n",(0,i.jsxs)(n.p,{children:["For this flow we'll use ",(0,i.jsx)(n.code,{children:"python3"})," (with version ",(0,i.jsx)(n.code,{children:"3.5+"}),") with ",(0,i.jsx)(n.code,{children:"base58"})," library."]}),"\n",(0,i.jsxs)(n.p,{children:["You can install this library with ",(0,i.jsx)(n.code,{children:"pip3"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip3 install --user base58\n"})}),"\n",(0,i.jsx)(n.p,{children:"Start python3 interpreter:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The first thing is to get the data part from the public key (without ",(0,i.jsx)(n.code,{children:"ed25519:"})," prefix). Let's store it in a variable ",(0,i.jsx)(n.code,{children:"pk58"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"pk58 = 'BGCCDDHfysuuVnaNVtEhhqeT4k9Muyem3Kpgq2U1m9HX'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now let's import base58:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import base58\n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally, let's convert our base58 public key representation to bytes and then to hex:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"base58.b58decode(pk58).hex()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"'98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This gives us the same account ID as ",(0,i.jsx)(n.code,{children:"near-cli"}),", so this is encouraging."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The default network for ",(0,i.jsx)(n.code,{children:"near-cli"})," is ",(0,i.jsx)(n.code,{children:"testnet"}),". If you would like to change this to ",(0,i.jsx)(n.code,{children:"mainnet"})," or ",(0,i.jsx)(n.code,{children:"betanet"}),", please see ",(0,i.jsxs)(n.a,{href:"/tools/near-cli#network-selection",children:[(0,i.jsx)(n.code,{children:"near-cli"})," network selection"]})," for instructions."]}),"\n",(0,i.jsx)(n.admonition,{title:"Got a question?",type:"tip",children:(0,i.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const c={},a=i.createContext(c);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2780],{18906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const a={id:"chain-signatures",title:"Chain Signatures",sidebar_label:"What are Chain Signatures?"},r=void 0,c={id:"concepts/abstraction/chain-signatures",title:"Chain Signatures",description:"Chain Signatures unlock the ability for a single account to transact across multiple blockchain protocols, giving ownership of cross-chain accounts, data, and assets to one NEAR account.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/abstraction/chain-signatures.md",sourceDirName:"1.concepts/abstraction",slug:"/concepts/abstraction/chain-signatures",permalink:"/vi/concepts/abstraction/chain-signatures",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/chain-signatures.md",tags:[],version:"current",frontMatter:{id:"chain-signatures",title:"Chain Signatures",sidebar_label:"What are Chain Signatures?"},sidebar:"concepts",previous:{title:"Relayers",permalink:"/vi/concepts/abstraction/relayers"},next:{title:"Use cases",permalink:"/vi/concepts/abstraction/signatures/use-cases"}},o={},l=[{value:"How It Works",id:"how-it-works",level:2},{value:"1. Create Payload",id:"1-create-payload",level:3},{value:"2. Signature Request",id:"2-signature-request",level:3},{value:"3. MPC Signing Service",id:"3-mpc-signing-service",level:3},{value:"4. Relaying the Signature",id:"4-relaying-the-signature",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Chain Signatures unlock the ability for a single account to transact across multiple blockchain protocols, giving ownership of cross-chain accounts, data, and assets to one NEAR account."}),"\n",(0,s.jsx)(n.p,{children:"This many-to-one ownership is made possible through a mixture of services across our tech stack:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"/vi/concepts/basics/accounts/smartcontract",children:"smart contract"})," that holds requests for multi-chain signatures."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://www.zellic.io/blog/mpc-from-scratch/",children:"multiparty computation"})," service listening for signature requests."]}),"\n",(0,s.jsxs)(n.li,{children:["A multi-chain ",(0,s.jsx)(n.a,{href:"/vi/concepts/abstraction/relayers",children:"relayer"}),", which can submit signed transactions to other networks."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This section presents an overview of Chain Signatures. To create one, please switch to the ",(0,s.jsx)(n.a,{href:"/vi/abstraction/chain-signatures",children:(0,s.jsx)(n.strong,{children:"building a Chain Signature"})})," document."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"chain-signatures",src:t(81530).Z+"",width:"2172",height:"642"}),"\n",(0,s.jsx)(n.em,{children:"Diagram of a chain signature in NEAR"})]}),"\n",(0,s.jsx)(n.p,{children:"There are four steps involved on Chain Signatures:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#1-create-a-payload",children:"Create a Payload"})," - The user creates the transaction / message they want to sign"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#2-request-signature",children:"Signature Request"})," - The user calls the NEAR ",(0,s.jsx)(n.code,{children:"multichain"})," contract, requesting to sign the transaction"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#3-sign-with-mpc",children:"MPC Signing Service"})," - A service captures the call, and returns the signed the transaction for the user"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#4-relaying-the-signature",children:"Relay Signed Payload"})," - The signed payload is then sent to the destination chain for execution."]}),"\n"]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-payload",children:"1. Create Payload"}),"\n",(0,s.jsx)(n.p,{children:"The first step is to construct a payload (transaction, message, data, etc.) for the target blockchain platform. This variates depending on the target blockchain, but in general, it's a hash of the message or transaction to be signed."}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"2-signature-request",children:"2. Signature Request"}),"\n",(0,s.jsxs)(n.p,{children:["Once a payload is created and ready to sign, a signature request is made by calling ",(0,s.jsx)(n.code,{children:"sign"})," on the deployed smart contract ",(0,s.jsx)(n.code,{children:"multichain.near"}),". This method takes two parameters:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"payload:"})," The payload (transaction, message, data, etc.) to be signed for the target blockchain"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"path:"})," A name representing the account that should be used to sign the payload (e.g. ethereum-1)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"  pub fn sign(payload: [u8; 32], path: String) -> Signature\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"https://github.com/near/mpc-recovery/blob/bc85d66833ffa8537ec61d0b22cd5aa96fbe3197/contract/src/lib.rs#L263",children:"See the full code in Github"})})}),"\n",(0,s.jsxs)(n.p,{children:["For example, a user could request a signature to ",(0,s.jsx)(n.code,{children:"send 0.1 ETH to 0x060f1..."})," ",(0,s.jsx)(n.strong,{children:"(payload)"})," using the ",(0,s.jsx)(n.code,{children:"ethereum-1"})," account ",(0,s.jsx)(n.strong,{children:"(path)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["After a request is made, the ",(0,s.jsx)(n.code,{children:"sign"})," method starts recursively calling itself in order to wait while the ",(0,s.jsx)(n.a,{href:"#3-mpc-signing-service",children:"MPC signing service"})," signs the payload."]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:" A Contract Recursively Calling Itself? "}),(0,s.jsx)(n.p,{children:"NEAR smart contracts are unable to halt execution and await the completion of a process. To solve this, one can make the contract call itself again and again checking on each iteration if the result is ready."}),(0,s.jsx)(n.p,{children:"Note that each call will take one block, and thus result on ~1s of waiting. After some time the contract will either return a result - since somebody external provided it - or run out of GAS waiting."})]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"3-mpc-signing-service",children:"3. MPC Signing Service"}),"\n",(0,s.jsxs)(n.p,{children:["A multi-party computation service (",(0,s.jsx)(n.code,{children:"MPC service"}),", see more below) is constantly listening for signature requests (i.e. users calling the ",(0,s.jsx)(n.code,{children:"sign"})," method). When a call is detected, the service will:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"accountId"})," of the requester, and the ",(0,s.jsx)(n.code,{children:"path"})," (in our example, ",(0,s.jsx)(n.code,{children:"ethereum-1"}),") to derive a key"]}),"\n",(0,s.jsxs)(n.li,{children:["Sign the ",(0,s.jsx)(n.code,{children:"payload"})," (in our example, a transaction transferring ETH) using the stored key"]}),"\n",(0,s.jsxs)(n.li,{children:["Call the contract ",(0,s.jsx)(n.code,{children:"multichain.near"}),", storing the resulting ",(0,s.jsx)(n.code,{children:"Signature"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Every time an account makes a signature request using the same ",(0,s.jsx)(n.code,{children:"path"}),", the same ",(0,s.jsx)(n.code,{children:"key"})," will be derived. This allows to use always the same account to sign different transactions."]})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:" What is an MPC Service? "}),(0,s.jsx)(n.p,{children:"MPC (multi-party computation) allows independent actors to do shared computations on private information, without revealing secrets to each-other."}),(0,s.jsxs)(n.p,{children:["NEAR uses its own MPC service to safely sign transactions for other chains on behalf of the user. In practice, ",(0,s.jsx)(n.strong,{children:"no single node"})," on the MPC can ",(0,s.jsx)(n.strong,{children:"sign by itself"})," since they do ",(0,s.jsx)(n.strong,{children:"not hold the user's keys"}),". Instead, nodes create signature-shares which are aggregated through multiple rounds to jointly sign the payload."]}),(0,s.jsx)(n.p,{children:"Generally, MPC signing services work by sharing a master key, which needs to be re-created each time a node joins or leaves. NEAR's MPC service allows for nodes to safely join and leave, without needing to re-derive a master key."}),(0,s.jsxs)(n.p,{children:["If you want to learn more about how MPC works, we recommend to ",(0,s.jsx)(n.a,{href:"https://www.zellic.io/blog/mpc-from-scratch/",children:(0,s.jsx)(n.strong,{children:"check this article"})})]})]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"4-relaying-the-signature",children:"4. Relaying the Signature"}),"\n",(0,s.jsx)(n.p,{children:"At this point - assuming the contract didn't run out of gas waiting - the contract will return the response for the signature request. This response is a valid signed transaction that can be readily sent to the target blockchain to be executed."}),"\n",(0,s.jsxs)(n.p,{children:["To simplify relaying the transaction, we are building an indexer that will automatically capture the signature, and submit it to the target chain using a multi-chain ",(0,s.jsx)(n.a,{href:"/vi/concepts/abstraction/relayers",children:"relayer"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["A multi-chain ",(0,s.jsx)(n.a,{href:"/vi/concepts/abstraction/relayers",children:"relayer"})," is a service that knows how to relay signed transactions into their target networks so they are executed on-chain."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},81530:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/chain-signatures-overview-056d48fe7d63e04e90aed33826544327.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
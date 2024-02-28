"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[889],{99601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(85893),o=t(11151),r=t(74866),s=t(85162);const l={id:"dao",sidebar_label:"Autonomous Organizations (DAO)",title:"\ud0c8\uc911\uc559\ud654 \uc790\uc728 \uc870\uc9c1(DAO)"},c=void 0,i={id:"develop/relevant-contracts/dao",title:"\ud0c8\uc911\uc559\ud654 \uc790\uc728 \uc870\uc9c1(DAO)",description:"\ud0c8\uc911\uc559\ud654 \uc790\uc728 \uc870\uc9c1(DAO)\ub294 \uacf5\ud1b5\ub41c \ubaa9\uc801\uc744 \uc911\uc2ec\uc73c\ub85c \ud615\uc131\ub418\ub294 \uc790\uccb4 \uc870\uc9c1 \uadf8\ub8f9\uc785\ub2c8\ub2e4. \uba64\ubc84\uc2ed, \uc758\uc0ac \uacb0\uc815 \ubc0f \uc790\uae08 \uc870\ub2ec\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud1b5\ud55c \uc81c\uc548\uc5d0 \ub300\ud55c \uacf5\uac1c \ud22c\ud45c\ub97c \ud1b5\ud574 \uc870\uc815\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/relevant-contracts/dao.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/dao",permalink:"/ko/develop/relevant-contracts/dao",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/dao.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"dao",sidebar_label:"Autonomous Organizations (DAO)",title:"\ud0c8\uc911\uc559\ud654 \uc790\uc728 \uc870\uc9c1(DAO)"}},u={},d=[{value:"DAO \uc0dd\uc131",id:"dao-\uc0dd\uc131",level:2},{value:"Voting policy",id:"voting-policy",level:3},{value:"Adding a Proposal",id:"adding-a-proposal",level:2},{value:"Acting on a Proposal",id:"acting-on-a-proposal",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\ud0c8\uc911\uc559\ud654 \uc790\uc728 \uc870\uc9c1(DAO)\ub294 \uacf5\ud1b5\ub41c \ubaa9\uc801\uc744 \uc911\uc2ec\uc73c\ub85c \ud615\uc131\ub418\ub294 \uc790\uccb4 \uc870\uc9c1 \uadf8\ub8f9\uc785\ub2c8\ub2e4. \uba64\ubc84\uc2ed, \uc758\uc0ac \uacb0\uc815 \ubc0f \uc790\uae08 \uc870\ub2ec\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud1b5\ud55c \uc81c\uc548\uc5d0 \ub300\ud55c \uacf5\uac1c \ud22c\ud45c\ub97c \ud1b5\ud574 \uc870\uc815\ub429\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/ko/develop/relevant-contracts/ft",children:"FT"}),"\ub098 ",(0,a.jsx)(n.a,{href:"/ko/develop/relevant-contracts/nft",children:"NFT"}),"\uc640 \ub2ec\ub9ac, DAO \ucee8\ud2b8\ub799\ud2b8\ub294 \ud45c\uc900\ud654\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 ",(0,a.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract",children:"sputnik dao \uad6c\ud604"}),"\uc744 \ucc38\uace0\ud558\uc5ec \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ub2e4\ub8e8\ub294 \uc8fc\uc694 \uac1c\ub150\uc740 \ub2e4\ub978 DAO \uad6c\ud604\uc5d0 \uc27d\uac8c \uc77c\ubc18\ud654\ub420 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"dao-\uc0dd\uc131",children:"DAO \uc0dd\uc131"}),"\n",(0,a.jsxs)(n.p,{children:["DAO\ub97c \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 ",(0,a.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#setup",children:"DAO \ucee8\ud2b8\ub799\ud2b8 \ud329\ud1a0\ub9ac"}),"\ub97c \ubc30\ud3ec\ud558\uace0 \ucd08\uae30\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.p,{children:["\ubc30\ud3ec \ubc0f \ucd08\uae30\ud654\ub418\uba74, \ud329\ud1a0\ub9ac\uc5d0 \uc0c8 DAO\ub97c ",(0,a.jsx)(n.code,{children:"create"}),"\ud574 \ub2ec\ub77c\uace0 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0dd\uc131 \uc2dc, DAO\uc758 \uc774\ub984, \ubaa9\uc801 \ubc0f \uc704\uc6d0\ud68c\uc640 \uac19\uc740 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4. \uc62c\ubc14\ub978 \uc704\uc6d0\ud68c\ub97c \uc815\uc758\ud558\ub294 \uac83\uc740 \uc911\uc694\ud55c\ub370, \uc774\ub294 \uc704\uc6d0\ub4e4\ub9cc\uc774 \uc81c\uc548\uc5d0 \ud22c\ud45c\ud560 \uc218 \uc788\ub294 ",(0,a.jsx)(n.strong,{children:"\uc720\uc77c\ud55c"})," \uacc4\uc815\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# 1. Deploy the contract in a testnet account\nnear create-account <factory-account> --useFaucet\nnear deploy <factory-account> <sputnikdao-wasm> --accountId <your-account>\n\n# 2. Initialize factory contract\nnear call <factory-account> new --accountId  <your-account> --gas 100000000000000\n\n# 3. Define a council and create DAO\nexport COUNCIL=\'["<council-member-1>", "<council-member-2>"]\'\nexport ARGS=`echo \'{"config": {"name": "<name>", "purpose": "<purpose>", "metadata":"<metadata>"}, "policy": \'$COUNCIL\'}\' | base64`\n\nnear call  <factory-account> create "{\\"name\\": \\"<name>\\", \\"args\\": \\"$ARGS\\"}" --accountId <your-account> --amount 10 --gas 150000000000000\n'})})})}),"\n",(0,a.jsx)(n.h3,{id:"voting-policy",children:"Voting policy"}),"\n",(0,a.jsxs)(n.p,{children:["Currently, the DAO supports two different types of ",(0,a.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#voting-policy",children:"voting policies"}),": ",(0,a.jsx)(n.code,{children:"TokenWeight"}),", and ",(0,a.jsx)(n.code,{children:"RoleWeight"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["When the vote policy is ",(0,a.jsx)(n.code,{children:"TokenWeight"}),", the council votes using ",(0,a.jsx)(n.a,{href:"/ko/develop/relevant-contracts/ft",children:"tokens"}),". The weigh of a vote is the proportion of tokens used for voting over the token's total supply."]}),"\n",(0,a.jsxs)(n.p,{children:["When the vote policy is ",(0,a.jsx)(n.code,{children:"RoleWeight(role)"}),', the vote weigh is computed as "one over the total number of people with the role".']}),"\n",(0,a.jsx)(n.p,{children:'Both voting policies further include a "threshold" for passing a proposal, which can be a ratio or a fixed number. The ratio indicates that you need a proportion of people/tokens to approve the proposal (e.g. half the people need to vote, and to vote positively). A fixed number indicated that you need a specific number of votes/tokens to pass the proposal (e.g. 3 people/tokens are enough to approve the proposal).'}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h2,{id:"adding-a-proposal",children:"Adding a Proposal"}),"\n",(0,a.jsxs)(n.p,{children:["By default, anyone can add a proposal to the DAO, but a minimum of 1\u24c3 needs to be attached as a bond. This however can be changed by ",(0,a.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"setting roles in the DAO"}),". The type of proposals that can be added ",(0,a.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types",children:"is predefined"}),", and include actions such as:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Adding a member to the council."}),"\n",(0,a.jsx)(n.li,{children:"Calling a method in a smart contract."}),"\n",(0,a.jsx)(n.li,{children:"Transferring NEAR or a FT to some account."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Each action has its own kind of arguments. The complete list of actions can be ",(0,a.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types",children:"found here"}),"."]}),"\n",(0,a.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near call <dao-account> add_proposal \\\n\'{"proposal": {"description": "<description>", "kind": {"<proposalKind>": {"<argument>": "<value>", "<argument>": "<value>"}}}}\' \\\n--accountId proposer.testnet \\\n--amount 1\n\n'})})})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h2,{id:"acting-on-a-proposal",children:"Acting on a Proposal"}),"\n",(0,a.jsxs)(n.p,{children:["Once a proposal is added, ",(0,a.jsx)(n.strong,{children:"council members"})," can act on them calling the ",(0,a.jsx)(n.code,{children:"act_proposal"})," method. The available actions are one of the following: AddProposal, RemoveProposal, VoteApprove, VoteReject, VoteRemove, Finalize, or MoveToHub."]}),"\n",(0,a.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near call <dao-account> act_proposal \'{"id": <proposal-id>, "action": "<action>"}\' --accountId <a-council-account-id>\n'})})})}),"\n",(0,a.jsx)(n.p,{children:"Each time somebody acts on the proposal, the DAO checks if the proposal has enough votes to be approved. If the proposal is approve, then the DAO executes the proposal (for example, adding a new member to the council)."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const o={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>A});var a=t(67294),o=t(36905),r=t(12466),s=t(16550),l=t(20469),c=t(91980),i=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,r=(0,s.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:o});return[(0,c._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(r.location.search);n.set(l,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[l,r])]}function v(e){var n,t,o,r,s=e.defaultValue,c=e.queryString,i=void 0!==c&&c,d=e.groupId,v=p(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:v})})),b=m[0],g=m[1],x=f({queryString:i,groupId:d}),j=x[0],y=x[1],A=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),o=t[0],r=t[1],[o,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),k=A[0],w=A[1],I=function(){var e=null!=j?j:k;return h({value:e,tabValues:v})?e:null}();return(0,l.Z)((function(){I&&g(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),w(e)}),[y,w,v]),tabValues:v}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],i=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=c.indexOf(n),o=l[t].value;o!==a&&(i(n),s(o))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,o=c.indexOf(e.currentTarget)+1;t=null!=(a=c[o])?a:c[0];break;case"ArrowLeft":var r,s=c.indexOf(e.currentTarget)-1;t=null!=(r=c[s])?r:c[c.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,r=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},r,{className:(0,o.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,o=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=r.find((function(e){return e.props.value===o}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function y(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function A(e){var n=(0,m.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var a=t(67294);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3627],{37958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>w,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var r=t(85893),s=t(11151);const a=t.p+"assets/images/chapter-2-crossword-blank-007e0f949a30b440e51fd49503971455.png",i=t.p+"assets/images/teaching-just-teacher--herogranada.near--GranadaHero-13deebf35d81b88903da4e4733b46a91.jpeg",o=t.p+"assets/images/erase-recreate-subaccount--3one9.near--3one92-7d5e385b4a5b788168a2419d108180f8.gif",d={sidebar_position:4,sidebar_label:"Add a puzzle",title:"Adding a new puzzle now that we're using a collection that can contain multiple crossword puzzles"},c="Adding a puzzle",l={id:"tutorials/crosswords/beginner/adding-a-puzzle",title:"Adding a new puzzle now that we're using a collection that can contain multiple crossword puzzles",description:"We're going to make a new puzzle, which means we need to provide the smart contract with a set of clues and info about the answers.",source:"@site/../docs/3.tutorials/crosswords/02-beginner/04-adding-a-puzzle.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/adding-a-puzzle",permalink:"/tutorials/crosswords/beginner/adding-a-puzzle",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/04-adding-a-puzzle.md",tags:[],version:"current",lastUpdatedBy:"omahs",lastUpdatedAt:1696510785,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Add a puzzle",title:"Adding a new puzzle now that we're using a collection that can contain multiple crossword puzzles"},sidebar:"contracts",previous:{title:"Actions and sending NEAR",permalink:"/tutorials/crosswords/beginner/actions"},next:{title:"Access keys and login 1/2",permalink:"/tutorials/crosswords/beginner/logging-in"}},h={},u=[{value:"Building and deploying",id:"building-and-deploying",level:2},{value:"The clues",id:"the-clues",level:2},{value:"Solution hash",id:"solution-hash",level:2},{value:"Add the puzzle",id:"add-the-puzzle",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"adding-a-puzzle",children:"Adding a puzzle"}),"\n",(0,r.jsx)(n.p,{children:"We're going to make a new puzzle, which means we need to provide the smart contract with a set of clues and info about the answers."}),"\n",(0,r.jsxs)(n.p,{children:["Of course, we'll not be sending the ",(0,r.jsx)(n.em,{children:"answers"})," to the smart contract, otherwise everyone could see. We will, however, send details about each clue, including:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The clue number"}),"\n",(0,r.jsx)(n.li,{children:"Whether it's a down or across clue"}),"\n",(0,r.jsx)(n.li,{children:"The coordinates (x and y position)"}),"\n",(0,r.jsx)(n.li,{children:"The length of the clue. (How many letters)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Essentially, we're going to tell the smart contract enough information for an empty puzzle like this:"}),"\n",(0,r.jsx)("img",{src:a,alt:"Blank crossword for chapter 2 of the crossword puzzle smart contract tutorial",width:"600"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"(Note that we aren't showing the human-readable clues in the above screenshot, but we will provide that as well.)"}),"\n",(0,r.jsx)(n.h2,{id:"building-and-deploying",children:"Building and deploying"}),"\n",(0,r.jsx)(n.p,{children:"Let's use the same steps we learned from the first chapter:"}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:i,alt:"Teacher shows chalkboard with instructions on how to properly deploy a smart contract. 1. Build smart contract. 2. Create a subaccount (or delete and recreate if it exists) 3. Deploy to subaccount. 4. Interact. Art created by herogranada.near",width:"600"}),(0,r.jsxs)("figcaption",{children:["Art by ",(0,r.jsx)("a",{href:"https://twitter.com/GranadaHero",target:"_blank",children:"herogranada.near"})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"contract"})," directory, then run the build script for your system:"]}),"\n",(0,r.jsx)(n.p,{children:"./build.sh"}),"\n",(0,r.jsxs)(n.p,{children:["If following from the previous chapter, you'll likely have a subaccount already created. For the purpose of demonstration, we're calling the subaccount (where we deploy the contract) ",(0,r.jsx)(n.code,{children:"crossword.friend.testnet"})," and the parent account is thus ",(0,r.jsx)(n.code,{children:"friend.testnet"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Let's delete the subaccount and recreate it, to start from a blank slate."}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:o,alt:"Animation of an alien in space with a computer deleting and re-writing the account crossword.friend.testnet Art by 3one9.near",width:"600"}),(0,r.jsxs)("figcaption",{children:["Art by ",(0,r.jsx)("a",{href:"https://twitter.com/3one92",target:"_blank",children:"3one9.near"})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Here's how to delete and recreate the subaccount using NEAR CLI:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Delete the subaccount and send remaining balance to friend.testnet\nnear delete crossword.friend.testnet friend.testnet\n# Create the subaccount again \nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n# Deploy, calling the "new" method with the parameter for owner_id\nnear deploy crossword.friend.testnet --wasmFile res/crossword_tutorial_chapter_2.wasm --initFunction new --initArgs \'{"owner_id": "crossword.friend.testnet"}\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now we're ready to construct our new crossword puzzle and add it via the ",(0,r.jsx)(n.code,{children:"new_puzzle"})," method. Let's start with the clues for this new puzzle."]}),"\n",(0,r.jsx)(n.h2,{id:"the-clues",children:"The clues"}),"\n",(0,r.jsxs)(n.p,{children:["We're going to use these clues below for our improved puzzle. The ",(0,r.jsx)(n.strong,{children:"Answer"})," column will not get sent to the smart contract when we call ",(0,r.jsx)(n.code,{children:"new_puzzle"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Number"}),(0,r.jsx)(n.th,{children:"Answer"}),(0,r.jsx)(n.th,{children:"Clue"}),(0,r.jsx)(n.th,{children:"(x, y) coords"}),(0,r.jsx)(n.th,{children:"length"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"paras"}),(0,r.jsx)(n.td,{children:"NFT market on NEAR that specializes in cards and comics."}),(0,r.jsx)(n.td,{children:"(1, 1)"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"rainbowbridge"}),(0,r.jsx)(n.td,{children:"You can move assets between NEAR and different chains, including Ethereum, by visiting ______.app"}),(0,r.jsx)(n.td,{children:"(0, 2)"}),(0,r.jsx)(n.td,{children:"13"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"mintbase"}),(0,r.jsx)(n.td,{children:"NFT market on NEAR with art, physical items, tickets, and more."}),(0,r.jsx)(n.td,{children:"(9, 1)"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"yoctonear"}),(0,r.jsx)(n.td,{children:"The smallest denomination of the native token on NEAR."}),(0,r.jsx)(n.td,{children:"(3, 8)"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"cli"}),(0,r.jsx)(n.td,{children:"You typically deploy a smart contract with the NEAR ___ tool."}),(0,r.jsx)(n.td,{children:"(5, 8)"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The x and y coordinates have their origin in the upper-left side of the puzzle grid, and each row and column start at 0."}),"\n",(0,r.jsx)(n.h2,{id:"solution-hash",children:"Solution hash"}),"\n",(0,r.jsxs)(n.p,{children:["Let's derive the sha256 hash using an ",(0,r.jsx)(n.a,{href:"https://www.wolframalpha.com/input/?i=sha256+%22paras+rainbowbridge+mintbase+yoctonear+cli%22",children:"easy online tool"})," (there are many other offline methods as well) to discover the solution hash:"]}),"\n",(0,r.jsx)(n.p,{children:"d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010"}),"\n",(0,r.jsx)(n.h2,{id:"add-the-puzzle",children:"Add the puzzle"}),"\n",(0,r.jsxs)(n.p,{children:["Add a new puzzle using NEAR CLI with this long command, replacing ",(0,r.jsx)(n.code,{children:"crossword.friend.testnet"})," with your subaccount:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'near call crossword.friend.testnet new_puzzle \'{\n  "solution_hash": "d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010",\n  "answers": [\n   {\n     "num": 1,\n     "start": {\n       "x": 1,\n       "y": 1\n     },\n     "direction": "Down",\n     "length": 5,\n     "clue": "NFT market on NEAR that specializes in cards and comics."\n   },\n   {\n     "num": 2,\n     "start": {\n       "x": 0,\n       "y": 2\n     },\n     "direction": "Across",\n     "length": 13,\n     "clue": "You can move assets between NEAR and different chains, including Ethereum, by visiting ______.app"\n   },\n   {\n     "num": 3,\n     "start": {\n       "x": 9,\n       "y": 1\n     },\n     "direction": "Down",\n     "length": 8,\n     "clue": "NFT market on NEAR with art, physical items, tickets, and more."\n   },\n   {\n     "num": 4,\n     "start": {\n       "x": 3,\n       "y": 8\n     },\n     "direction": "Across",\n     "length": 9,\n     "clue": "The smallest denomination of the native token on NEAR."\n   },\n   {\n     "num": 5,\n     "start": {\n       "x": 5,\n       "y": 8\n     },\n     "direction": "Down",\n     "length": 3,\n     "clue": "You typically deploy a smart contract with the NEAR ___ tool."\n   }\n  ]\n}\' --accountId crossword.friend.testnet\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Note that our contract name and the account we're calling this from are both ",(0,r.jsx)(n.code,{children:"crossword.friend.testnet"}),". That's because we added a check at the top of ",(0,r.jsx)(n.code,{children:"new_puzzle"})," to make sure the predecessor is the ",(0,r.jsx)(n.code,{children:"owner_id"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Now our smart contract has information about this second crossword puzzle."}),"\n",(0,r.jsx)(n.p,{children:"Let's explore how to make our frontend have a login button and truly turn this into a decentralized app (dApp)!"})]})}function w(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
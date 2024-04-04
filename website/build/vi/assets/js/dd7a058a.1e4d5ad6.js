"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6058],{91923:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=e(85893),s=e(11151),c=e(77229);const i={id:"skeleton",title:'B\u1ed9 khung v\xe0 Ki\u1ebfn tr\xfac ng\xf4n ng\u1eef Rust"',sidebar_label:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"},l=void 0,a={id:"tutorials/nfts/skeleton",title:'B\u1ed9 khung v\xe0 Ki\u1ebfn tr\xfac ng\xf4n ng\u1eef Rust"',description:'Trong ch\u1ee7 \u0111\u1ec1 n\xe0y, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u v\u1ec1 ki\u1ebfn tr\xfac c\u01a1 b\u1ea3n \u0111\u1eb1ng sau m\u1ed9t NFT contract m\xe0 b\u1ea1n s\u1ebd develop khi tham gia serie "T\u1eeb Zero \u0111\u1ebfn Hero" n\xe0y. B\u1ea1n s\u1ebd kh\xe1m ph\xe1 layout c\u1ee7a contract v\xe0 s\u1ebd th\u1ea5y c\xe1ch m\xe0 c\xe1c file Rust \u0111\u01b0\u1ee3c c\u1ea5u tr\xfac \u0111\u1ec3 build m\u1ed9t smart contract \u0111\u1ea7y \u0111\u1ee7 t\xednh n\u0103ng.',source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/1-skeleton.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/skeleton",permalink:"/vi/tutorials/nfts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,sidebarPosition:1,frontMatter:{id:"skeleton",title:'B\u1ed9 khung v\xe0 Ki\u1ebfn tr\xfac ng\xf4n ng\u1eef Rust"',sidebar_label:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"},sidebar:"tutorials",previous:{title:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n",permalink:"/vi/tutorials/nfts/predeployed-contract"},next:{title:"Minting",permalink:"/vi/tutorials/nfts/minting"}},o={},h=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\u1ea5u tr\xfac file",id:"c\u1ea5u-tr\xfac-file",level:2},{value:"C\xe1c file source",id:"c\xe1c-file-source",level:3},{value:"<code>approval.rs</code>",id:"approvalrs",level:2},{value:"<code>enumeration.rs</code>",id:"enumerationrs",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>mint.rs</code>",id:"mintrs",level:2},{value:"<code>nft_core.rs</code>",id:"nft_corers",level:2},{value:"<code>royalty.rs</code>",id:"royaltyrs",level:2},{value:"Build b\u1ed9 khung n\xe0y",id:"build-b\u1ed9-khung-n\xe0y",level:2},{value:"K\u1ebft lu\u1eadn",id:"k\u1ebft-lu\u1eadn",level:2}];function d(n){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Trong ch\u1ee7 \u0111\u1ec1 n\xe0y, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u v\u1ec1 ki\u1ebfn tr\xfac c\u01a1 b\u1ea3n \u0111\u1eb1ng sau m\u1ed9t NFT contract m\xe0 b\u1ea1n s\u1ebd develop khi tham gia serie ",(0,r.jsx)(t.em,{children:'"T\u1eeb Zero \u0111\u1ebfn Hero"'})," n\xe0y. B\u1ea1n s\u1ebd kh\xe1m ph\xe1 layout c\u1ee7a contract v\xe0 s\u1ebd th\u1ea5y c\xe1ch m\xe0 c\xe1c file Rust \u0111\u01b0\u1ee3c c\u1ea5u tr\xfac \u0111\u1ec3 build m\u1ed9t smart contract \u0111\u1ea7y \u0111\u1ee7 t\xednh n\u0103ng."]}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["B\u1ea1n m\u1edbi \u0111\u1ebfn v\u1edbi Rust? N\u1ebfu b\u1ea1n l\xe0 ng\u01b0\u1eddi m\u1edbi \u0111\u1ebfn v\u1edbi ng\xf4n ng\u1eef Rust v\xe0 mong mu\u1ed1n ti\u1ebfn s\xe2u h\u01a1n n\u1eefa v\xe0o l\u1eadp tr\xecnh smart contract, ph\u1ea7n ",(0,r.jsx)(t.a,{href:"/develop/quickstart-guide",children:"H\u01b0\u1edbng d\u1eabn nhanh"})," c\u1ee7a ch\xfang t\xf4i l\xe0 m\u1ed9t \u0111i\u1ec3m kh\u1edfi \u0111\u1ea7u t\u1ed1t. :::"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),(0,r.jsx)(t.p,{children:"H\u01b0\u1edbng d\u1eabn n\xe0y tr\xecnh b\xe0y b\u1ed9 khung m\xe3 ngu\u1ed3n cho NFT smart contract v\xe0 c\u1ea5u tr\xfac file c\u1ee7a n\xf3. B\u1ea1n s\u1ebd t\xecm th\u1ea5y c\xe1ch m\xe0 t\u1ea5t c\u1ea3 c\xe1c function \u0111\u01b0\u1ee3c b\u1ed1 tr\xed, c\u0169ng nh\u01b0 ph\u1ea7n code Rust b\u1ecb thi\u1ebfu c\u1ea7n \u0111\u01b0\u1ee3c \u0111i\u1ec1n v\xe0o. Khi m\u1ecdi file v\xe0 function \u0111\xe3 \u0111\u01b0\u1ee3c ho\xe0n thi\u1ec7n, b\u1ea1n s\u1ebd th\u1ef1c hi\u1ec7n qu\xe1 tr\xecnh build m\u1ed9t mock-up contract \u0111\u1ec3 x\xe1c nh\u1eadn Rust toolchain c\u1ee7a b\u1ea1n ho\u1ea1t \u0111\u1ed9ng nh\u01b0 mong \u0111\u1ee3i."}),(0,r.jsx)(t.h2,{id:"c\u1ea5u-tr\xfac-file",children:"C\u1ea5u tr\xfac file"}),(0,r.jsxs)(t.p,{children:["C\u0169ng nh\u01b0 c\xe1c project ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," th\xf4ng th\u01b0\u1eddng kh\xe1c, c\u1ea5u tr\xfac file c\u1ee7a smart contract g\u1ed3m:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["File ",(0,r.jsx)(t.code,{children:"Cargo.toml"})," \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a c\xe1c code dependency (gi\u1ed1ng nh\u01b0 ",(0,r.jsx)(t.code,{children:"package.json"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Th\u01b0 m\u1ee5c ",(0,r.jsx)(t.code,{children:"src"})," ch\u1ee9a t\u1ea5t c\u1ea3 c\xe1c file c\u1ee7a Rust"]}),"\n",(0,r.jsxs)(t.li,{children:["Th\u01b0 m\u1ee5c ",(0,r.jsx)(t.code,{children:"target"})," ch\u1ee9a file ",(0,r.jsx)(t.code,{children:"wasm"})," \u0111\u01b0\u1ee3c compile"]}),"\n",(0,r.jsxs)(t.li,{children:["Script ",(0,r.jsx)(t.code,{children:"build.sh"})," \u0111\u01b0\u1ee3c th\xeam v\xe0o \u0111\u1ec3 ti\u1ec7n l\u1ee3i cho vi\u1ec7c compile source code"]}),"\n"]}),(0,r.jsx)(t.h3,{id:"c\xe1c-file-source",children:"C\xe1c file source"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"File"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#approvalrs",children:"approval.rs"})}),(0,r.jsx)(t.td,{children:"C\xf3 c\xe1c function ki\u1ec3m so\xe1t vi\u1ec7c truy c\u1eadp v\xe0 transfer c\xe1c non-fungible token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#enumerationrs",children:"enumeration.rs"})}),(0,r.jsx)(t.td,{children:"Ch\u1ee9a c\xe1c method \u0111\u1ec3 list ra c\xe1c NFT token v\xe0 ch\u1ee7 s\u1edf h\u1eefu c\u1ee7a ch\xfang."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#librs",children:"lib.rs"})}),(0,r.jsx)(t.td,{children:"Ch\u1ee9a c\xe1c function d\xf9ng \u0111\u1ec3 init smart contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#metadatars",children:"metadata.rs"})}),(0,r.jsx)(t.td,{children:"\u0110\u1ecbnh ngh\u0129a token v\xe0 c\u1ea5u tr\xfac metadata."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#mintrs",children:"mint.rs"})}),(0,r.jsx)(t.td,{children:"Ch\u1ee9a ph\u1ea7n logic cho vi\u1ec7c mint token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nft_corers",children:"nft_core.rs"})}),(0,r.jsx)(t.td,{children:"Logic ch\xednh cho ph\xe9p b\u1ea1n transfer c\xe1c NFT gi\u1eefa nh\u1eefng user."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#royaltyrs",children:"royalty.rs"})}),(0,r.jsx)(t.td,{children:"Ch\u1ee9a c\xe1c function li\xean quan \u0111\u1ebfn thanh to\xe1n."})]})]})]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"nft-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.rs\n    \u251c\u2500\u2500 enumeration.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u251c\u2500\u2500 mint.rs\n    \u251c\u2500\u2500 nft_core.rs\n    \u2514\u2500\u2500 royalty.rs\n"})}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["H\xe3y kh\xe1m ph\xe1 code trong ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/",children:"GitHub repository"}),". :::"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"approvalrs",children:(0,r.jsx)(t.code,{children:"approval.rs"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0110o\u1ea1n n\xe0y cho ph\xe9p m\u1ecdi ng\u01b0\u1eddi approve cho c\xe1c t\xe0i kho\u1ea3n kh\xe1c thay m\u1eb7t h\u1ecd transfer c\xe1c NFT."}),"\n"]}),(0,r.jsxs)(t.p,{children:["This file contains the logic that complies with the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approvals management"})," extension. D\u01b0\u1edbi \u0111\xe2y l\xe0 b\u1ea3ng li\u1ec7t k\xea c\xe1c method v\xe0 function c\u1ee7a ch\xfang:"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_approve"})}),(0,r.jsx)(t.td,{children:"Approve m\u1ed9t account ID quy\u1ec1n transfer token d\u01b0\u1edbi danh ngh\u0129a c\u1ee7a b\u1ea1n."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_is_approved"})}),(0,r.jsx)(t.td,{children:"Ki\u1ec3m tra xem account nh\u1eadp v\xe0o c\xf3 quy\u1ec1n truy c\u1eadp \u0111\u1ec3 approve token ID hay kh\xf4ng."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke"})}),(0,r.jsx)(t.td,{children:"Thu h\u1ed3i quy\u1ec1n c\u1ee7a m\u1ed9t account c\u1ee5 th\u1ec3 trong vi\u1ec7c transfer token thay b\u1ea1n."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke_all"})}),(0,r.jsx)(t.td,{children:"Thu h\u1ed3i quy\u1ec1n c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c account trong vi\u1ec7c transfer token thay b\u1ea1n."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_on_approve"})}),(0,r.jsxs)(t.td,{children:["Function callback n\xe0y, \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o trong ",(0,r.jsx)(t.code,{children:"nft_approve"}),", l\xe0 cross contract call t\u1edbi m\u1ed9t contract b\xean ngo\xe0i."]})]})]})]}),(0,r.jsx)(c.Ey,{language:"rust",start:"4",end:"33",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/approval.rs"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/approvals",children:"approvals section"})," of the Zero to Hero series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"enumerationrs",children:(0,r.jsx)(t.code,{children:"enumeration.rs"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This file provides the functions needed to view information about NFTs, and follows the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," extension."]}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_total_supply"})}),(0,r.jsx)(t.td,{children:"Returns the total amount of NFTs stored on the contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens"})}),(0,r.jsx)(t.td,{children:"Tr\u1ea3 v\u1ec1 danh s\xe1ch ph\xe2n trang c\u1ee7a c\xe1c NFT l\u01b0u tr\u1eef tr\xean contract b\u1ea5t k\u1ec3 ch\u1ee7 s\u1edf h\u1eefu c\u1ee7a ch\xfang l\xe0 ai."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_supply_for_owner"})}),(0,r.jsx)(t.td,{children:"Cho ph\xe9p b\u1ea1n xem t\u1ed5ng s\u1ed1 NFT \u0111\u01b0\u1ee3c s\u1edf h\u1eefu b\u1edfi m\u1ed9t ng\u01b0\u1eddi d\xf9ng nh\u1ea5t \u0111\u1ecbnh."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens_for_owner"})}),(0,r.jsx)(t.td,{children:"Tr\u1ea3 v\u1ec1 m\u1ed9t danh s\xe1ch NFT \u0111\u01b0\u1ee3c ph\xe2n trang, thu\u1ed9c v\u1ec1 s\u1edf h\u1eefu c\u1ee7a m\u1ed9t ng\u01b0\u1eddi d\xf9ng nh\u1ea5t \u0111\u1ecbnh."})]})]})]}),(0,r.jsx)(c.Ey,{language:"rust",start:"4",end:"44",url:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/enumeration.rs"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/docs/tutorials/contracts/nfts/enumeration",children:"enumeration section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"librs",children:(0,r.jsx)(t.code,{children:"lib.rs"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"File n\xe0y ph\xe1c th\u1ea3o nh\u1eefng th\xf4ng tin m\xe0 contract l\u01b0u tr\u1eef v\xe0 theo d\xf5i."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new_default_meta"})}),(0,r.jsxs)(t.td,{children:["Init contract v\u1edbi default ",(0,r.jsx)(t.code,{children:"metadata"})," do \u0111\xf3 user kh\xf4ng c\u1ea7n ph\u1ea3i cung c\u1ea5p b\u1ea5t k\xec input n\xe0o."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new"})}),(0,r.jsxs)(t.td,{children:["Init contract v\u1edbi ",(0,r.jsx)(t.code,{children:"metadata"})," m\xe0 user cung c\u1ea5p."]})]})]})]}),(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["H\xe3y ghi nh\u1edb C\xe1c init function (",(0,r.jsx)(t.code,{children:"new"}),", ",(0,r.jsx)(t.code,{children:"new_default_meta"}),") ch\u1ec9 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c call m\u1ed9t l\u1ea7n duy nh\u1ea5t. :::"]}),(0,r.jsx)(c.Ey,{language:"rust",start:"45",end:"71",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/lib.rs"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/docs/tutorials/contracts/nfts/minting",children:"minting section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"metadatars",children:(0,r.jsx)(t.code,{children:"metadata.rs"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["File n\xe0y \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 theo d\xf5i th\xf4ng tin \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef cho c\xe1c token v\xe0 metadata. In addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata"})," extension."]}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"T\xean"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"TokenMetadata"})}),(0,r.jsx)(t.td,{children:"This structure defines the metadata that can be stored for each token (title, description, media, etc.)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Token"})}),(0,r.jsx)(t.td,{children:"Structure n\xe0y li\u1ec7t k\xea nh\u1eefng th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong contract cho m\u1ed7i token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JsonToken"})}),(0,r.jsx)(t.td,{children:"Khi truy v\u1ea5n th\xf4ng tin v\u1ec1 NFT th\xf4ng qua c\xe1c view call, th\xf4ng tin tr\u1ea3 v\u1ec1 \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong JSON token n\xe0y."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_metadata"})}),(0,r.jsx)(t.td,{children:"Function n\xe0y cho ph\xe9p user query metadata b\xean trong contact."})]})]})]}),(0,r.jsx)(c.Ey,{language:"rust",start:"10",end:"55",url:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/metadata.rs"}),(0,r.jsxs)(t.p,{children:["B\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1c function n\xe0y trong ",(0,r.jsx)(t.a,{href:"/docs/tutorials/contracts/nfts/minting",children:"minting section"})," c\u1ee7a serie h\u01b0\u1edbng d\u1eabn."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"mintrs",children:(0,r.jsx)(t.code,{children:"mint.rs"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ch\u1ee9a ph\u1ea7n logic cho vi\u1ec7c mint token."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_mint"})}),(0,r.jsx)(t.td,{children:"Function n\xe0y s\u1ebd mint m\u1ed9t non-fungible token."})]})})]}),(0,r.jsx)(c.Ey,{language:"rust",start:"4",end:"16",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/mint.rs"}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"nft_corers",children:(0,r.jsx)(t.code,{children:"nft_core.rs"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Logic ch\xednh cho ph\xe9p b\u1ea1n transfer c\xe1c NFT gi\u1eefa nh\u1eefng user."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer"})}),(0,r.jsx)(t.td,{children:"Transfer m\u1ed9t NFT \u0111\u1ebfn m\u1ed9t receiver ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_call"})}),(0,r.jsxs)(t.td,{children:["Transfer m\u1ed9t NFT \u0111\u1ebfn m\u1ed9t receiver v\xe0 call m\u1ed9t function trong contract c\u1ee7a receiver ID. Function tr\u1ea3 v\u1ec1 ",(0,r.jsx)(t.code,{children:"true"})," n\u1ebfu token \u0111\xe3 \u0111\u01b0\u1ee3c transfer t\u1eeb account c\u1ee7a sender."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_token"})}),(0,r.jsx)(t.td,{children:"Cho ph\xe9p c\xe1c user query th\xf4ng tin c\u1ee7a m\u1ed9t NFT c\u1ee5 th\u1ec3."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_on_transfer"})}),(0,r.jsxs)(t.td,{children:["\u0110\u01b0\u1ee3c call b\u1edfi c\xe1c contract kh\xe1c khi m\u1ed9t NFT \u0111\u01b0\u1ee3c transfer \u0111\u1ebfn contract account c\u1ee7a b\u1ea1n th\xf4ng qua method ",(0,r.jsx)(t.code,{children:"nft_transfer_call"}),". Method s\u1ebd tr\u1ea3 v\u1ec1 ",(0,r.jsx)(t.code,{children:"true"})," n\u1ebfu token c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 cho sender."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_resolve_transfer"})}),(0,r.jsxs)(t.td,{children:["Khi b\u1ea1n b\u1eaft \u0111\u1ea7u c\xe2u l\u1ec7nh ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," v\xe0 transfer m\u1ed9t NFT, theo chu\u1ea9n m\u1ed9t method c\u0169ng \u0111\u01b0\u1ee3c call tr\xean contract c\u1ee7a receiver. N\u1ebfu receiver c\u1ea7n b\u1ea1n tr\u1ea3 v\u1ec1 NFT cho sender (theo gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1 c\u1ee7a ph\u01b0\u01a1ng th\u1ee9c ",(0,r.jsx)(t.code,{children:"nft_on_transfer"}),"), h\xe0m n\xe0y cho ph\xe9p b\u1ea1n th\u1ef1c thi logic \u0111\xf3."]})]})]})]}),(0,r.jsx)(c.Ey,{language:"rust",start:"7",end:"56",url:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/nft_core.rs"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/core",children:"core section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"royaltyrs",children:(0,r.jsx)(t.code,{children:"royalty.rs"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ch\u1ee9a c\xe1c function li\xean quan \u0111\u1ebfn thanh to\xe1n."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_payout"})}),(0,r.jsx)(t.td,{children:"View method n\xe0y t\xednh to\xe1n kho\u1ea3n thanh to\xe1n cho m\u1ed9t token nh\u1ea5t \u0111\u1ecbnh."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_payout"})}),(0,r.jsx)(t.td,{children:"Transfer token \u0111\u1ebfn receiver ID v\xe0 tr\u1ea3 v\u1ec1 payout object c\u1ea7n \u0111\u01b0\u1ee3c thanh to\xe1n v\u1edbi m\u1ed9t balance cho tr\u01b0\u1edbc."})]})]})]}),(0,r.jsx)(c.Ey,{language:"rust",start:"3",end:"17",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/royalty.rs"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/docs/tutorials/contracts/nfts/royalty",children:"royalty section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"build-b\u1ed9-khung-n\xe0y",children:"Build b\u1ed9 khung n\xe0y"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"N\u1ebfu b\u1ea1n ch\u01b0a clone repository ch\xednh, h\xe3y m\u1edf m\u1ed9t terminal v\xe0 ch\u1ea1y c\xe2u l\u1ec7nh:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial/\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["K\u1ebf ti\u1ebfp, switch \u0111\u1ebfn branch ",(0,r.jsx)(t.code,{children:"1.skeleton"})," v\xe0 build contract v\u1edbi ",(0,r.jsx)(t.code,{children:"yarn"}),":"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"cd nft-tutorial\ngit switch 1.skeleton\nyarn build\n"})}),(0,r.jsx)(t.p,{children:"V\xec source n\xe0y ch\u1ec9 l\xe0 m\u1ed9t b\u1ed9 khung n\xean b\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c nhi\u1ec1u warning v\u1ec1 code kh\xf4ng s\u1eed d\u1ee5ng, ch\u1eb3ng h\u1ea1n nh\u01b0:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"   Compiling nft_simple v0.1.0 (/Users/dparrino/near/nft-tutorial/nft-contract)\nwarning: unused imports: `LazyOption`, `LookupMap`, `UnorderedMap`, `UnorderedSet`\n --\x3e src/lib.rs:3:29\n  |\n3 | use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};\n  |                             ^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^\n  |\n  = note: `#[warn(unused_imports)]` on by default\n...\n...\n...\nwarning: constant is never used: `NO_DEPOSIT`\n --\x3e src/nft_core.rs:6:1\n  |\n6 | const NO_DEPOSIT: Balance = 0;\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `nft_simple` (lib) generated 50 warnings\n    Finished release [optimized] target(s) in 22.58s\n\u2728  Done in 22.74s.\n"})}),(0,r.jsx)(t.p,{children:"\u0110\u1eebng lo l\u1eafng v\u1ec1 nh\u1eefng warning n\xe0y, v\xec b\u1ea1n s\u1ebd kh\xf4ng deploy contract n\xe0y. Vi\u1ec7c build m\u1ed9t b\u1ed9 khung r\u1ea5t h\u1eefu \xedch \u0111\u1ec3 x\xe1c nh\u1eadn r\u1eb1ng Rust toolchain c\u1ee7a b\u1ea1n ho\u1ea1t \u0111\u1ed9ng b\xecnh th\u01b0\u1eddng v\xe0 b\u1ea1n s\u1ebd c\xf3 th\u1ec3 compile c\xe1c phi\xean b\u1ea3n c\u1ea3i ti\u1ebfn c\u1ee7a NFT contract n\xe0y trong c\xe1c h\u01b0\u1edbng d\u1eabn s\u1eafp t\u1edbi."}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"k\u1ebft-lu\u1eadn",children:"K\u1ebft lu\u1eadn"}),(0,r.jsxs)(t.p,{children:["B\u1ea1n \u0111\xe3 xem b\u1ed1 c\u1ee5c c\u1ee7a NFT smart contract n\xe0y v\xe0 c\xe1ch t\u1ea5t c\u1ea3 c\xe1c function \u0111\u01b0\u1ee3c b\u1ed1 tr\xed qua c\xe1c source file kh\xe1c nhau. S\u1eed d\u1ee5ng ",(0,r.jsx)(t.code,{children:"yarn"}),", b\u1ea1n \u0111\xe3 c\xf3 th\u1ec3 compile contract, v\xe0 b\u1ea1n s\u1ebd b\u1eaft \u0111\u1ea7u b\u1ed5 sung th\xeam cho skeleton n\xe0y trong ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"Minting tutorial"})," ti\u1ebfp theo."]}),(0,r.jsx)(t.admonition,{title:"Versioning for this article At the time of this writing, this example works with the following versions:",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.75.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["near-sdk-rs: ",(0,r.jsx)(t.code,{children:"4.1.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.1.0"})]}),"\n"]})})]})]})]})]})}function u(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},85162:(n,t,e)=>{e.d(t,{Z:()=>i});e(67294);var r=e(36905);const s={tabItem:"tabItem_Ymn6"};var c=e(85893);function i(n){var t=n.children,e=n.hidden,i=n.className;return(0,c.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:e,children:t})}},74866:(n,t,e)=>{e.d(t,{Z:()=>k});var r=e(67294),s=e(36905),c=e(12466),i=e(16550),l=e(20469),a=e(91980),o=e(67392),h=e(50012);function d(n){var t,e;return null!=(t=null==(e=r.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,r.isValidElement)(n)&&((t=n.props)&&"object"==typeof t&&"value"in t))return n;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:e.filter(Boolean))?t:[]}function u(n){var t=n.values,e=n.children;return(0,r.useMemo)((function(){var n=null!=t?t:function(n){return d(n).map((function(n){var t=n.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(e);return function(n){var t=(0,o.l)(n,(function(n,t){return n.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[t,e])}function x(n){var t=n.value;return n.tabValues.some((function(n){return n.value===t}))}function j(n){var t=n.queryString,e=void 0!==t&&t,s=n.groupId,c=(0,i.k6)(),l=function(n){var t=n.queryString,e=void 0!==t&&t,r=n.groupId;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:s});return[(0,a._X)(l),(0,r.useCallback)((function(n){if(l){var t=new URLSearchParams(c.location.search);t.set(l,n),c.replace(Object.assign({},c.location,{search:t.toString()}))}}),[l,c])]}function m(n){var t,e,s,c,i=n.defaultValue,a=n.queryString,o=void 0!==a&&a,d=n.groupId,m=u(n),f=(0,r.useState)((function(){return function(n){var t,e=n.defaultValue,r=n.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+e+'" but none of its children has the corresponding value. Available values are: '+r.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return e}var s=null!=(t=r.find((function(n){return n.default})))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:m})})),g=f[0],p=f[1],b=j({queryString:o,groupId:d}),v=b[0],y=b[1],k=(t=function(n){return n?"docusaurus.tab."+n:null}({groupId:d}.groupId),e=(0,h.Nk)(t),s=e[0],c=e[1],[s,(0,r.useCallback)((function(n){t&&c.set(n)}),[t,c])]),T=k[0],_=k[1],w=function(){var n=null!=v?v:T;return x({value:n,tabValues:m})?n:null}();return(0,l.Z)((function(){w&&p(w)}),[w]),{selectedValue:g,selectValue:(0,r.useCallback)((function(n){if(!x({value:n,tabValues:m}))throw new Error("Can't select invalid tab value="+n);p(n),y(n),_(n)}),[y,_,m]),tabValues:m}}var f=e(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=e(85893);function b(n){var t=n.className,e=n.block,r=n.selectedValue,i=n.selectValue,l=n.tabValues,a=[],o=(0,c.o5)().blockElementScrollPositionUntilNextRender,h=function(n){var t=n.currentTarget,e=a.indexOf(t),s=l[e].value;s!==r&&(o(t),i(s))},d=function(n){var t,e=null;switch(n.key){case"Enter":h(n);break;case"ArrowRight":var r,s=a.indexOf(n.currentTarget)+1;e=null!=(r=a[s])?r:a[0];break;case"ArrowLeft":var c,i=a.indexOf(n.currentTarget)-1;e=null!=(c=a[i])?c:a[a.length-1]}null==(t=e)||t.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":e},t),children:l.map((function(n){var t=n.value,e=n.label,c=n.attributes;return(0,p.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(n){return a.push(n)},onKeyDown:d,onClick:h},c,{className:(0,s.Z)("tabs__item",g.tabItem,null==c?void 0:c.className,{"tabs__item--active":r===t}),children:null!=e?e:t}),t)}))})}function v(n){var t=n.lazy,e=n.children,s=n.selectedValue,c=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){var i=c.find((function(n){return n.props.value===s}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:c.map((function(n,t){return(0,r.cloneElement)(n,{key:t,hidden:n.props.value!==s})}))})}function y(n){var t=m(n);return(0,p.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,p.jsx)(b,Object.assign({},n,t)),(0,p.jsx)(v,Object.assign({},n,t))]})}function k(n){var t=(0,f.Z)();return(0,p.jsx)(y,Object.assign({},n,{children:d(n.children)}),String(t))}},77229:(n,t,e)=>{e.d(t,{Ey:()=>h,O2:()=>a,SQ:()=>o});e(67294);var r=e(74866),s=e(85162),c=e(95665),i=e.n(c),l=e(85893);function a(n){var t=n.children;return Array.isArray(t)||(t=[t]),(0,l.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(n,t){return(0,l.jsx)(s.Z,{value:n.props.value,label:n.props.value,children:n})}))})}function o(n){var t=n.children,e=n.language;return Array.isArray(t)||(t=[t]),t=t.map((function(n){return function(n,t){var e=n.props,r=(e.children,e.url),s=e.start,c=e.end,i=e.fname;if(n.type===h)return h({url:r,start:s,end:c,language:t,fname:i});return n}(n,e)})),1==t.length?(0,l.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,l.jsx)(r.Z,{className:"file-tabs",children:t.map((function(n,t){return(0,l.jsx)(s.Z,{value:t,label:n.props.fname,children:n})}))})}function h(n){var t=n.url,e=n.start,r=n.end,s=n.language,c=n.fname,a=t+"#";return e&&r&&(a+="L"+e+"-L"+r+"#"),(0,l.jsx)(i(),{language:s,fname:c,children:a})}}}]);
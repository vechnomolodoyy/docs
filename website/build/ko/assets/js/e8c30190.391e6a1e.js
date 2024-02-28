"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7769],{80293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(85893),a=t(11151),s=(t(74866),t(85162),t(42352));const o={id:"state",title:"Basics"},i=void 0,l={id:"bos/api/state",title:"Basics",description:"Borrowing from React, Near Components use hooks such as useState and useEffect to handle the state's logic, and props to receive parameters.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/api/state.md",sourceDirName:"bos/api",slug:"/bos/api/state",permalink:"/ko/bos/api/state",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/state.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705334457,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 15\uc77c",frontMatter:{id:"state",title:"Basics"},sidebar:"build",previous:{title:"Choose your Dev Environment",permalink:"/ko/bos/dev/intro"},next:{title:"Web Browser Methods",permalink:"/ko/bos/api/web-methods"}},c={},u=[{value:"\uc0c1\ud0dc",id:"\uc0c1\ud0dc",level:2},{value:"Props",id:"props",level:2},{value:"useEffect Hook",id:"useeffect-hook",level:2},{value:"Import",id:"import",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Borrowing from React, Near Components use hooks such as ",(0,r.jsx)(n.a,{href:"#state",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"useState"})})})," and ",(0,r.jsx)(n.a,{href:"#useeffect-hook",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"useEffect"})})})," to handle the state's logic, and ",(0,r.jsx)(n.a,{href:"#props",children:(0,r.jsx)(n.strong,{children:"props"})})," to receive parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["Near Components are stored in the blockchain, for which you will use the ",(0,r.jsx)(n.code,{children:"NEAR VM"})," to ",(0,r.jsx)(n.a,{href:"/ko/develop/integrate/frontend-components",children:"retrieve and execute them in the browser"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Using a VM enforces components to be sandboxed, making them very secure since they cannot access your ",(0,r.jsx)(n.code,{children:"LocalStorage"})," or other elements in the page they are incorporated to. However, because of this, components cannot import external libraries. However, they can ",(0,r.jsx)(n.a,{href:"#import",children:(0,r.jsx)(n.strong,{children:"import functions"})})," from other components."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uc0c1\ud0dc",children:"\uc0c1\ud0dc"}),"\n",(0,r.jsxs)(n.p,{children:["To handle the component's state you can use ",(0,r.jsx)(n.code,{children:"useState"})," hook. The ",(0,r.jsx)(n.code,{children:"useState"})," hook returns a tuple of two values: the current state and a function that updates it."]}),"\n",(0,r.jsx)(s.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const [count, setCount] = useState(0);\n\nreturn (\n  <div>\n    <p>You clicked {count} times</p>\n    <button onClick={() > setCount(count + 1)}>Click me</button>\n  </div>\n);\n\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["Each time a state variable is updated, the component will be ",(0,r.jsx)(n.strong,{children:"re-rendered"}),". This means that the ",(0,r.jsx)(n.strong,{children:"whole code will run again"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(n.p,{children:["Each component has access to a local variable named ",(0,r.jsx)(n.code,{children:"props"})," which holds the properties received as input when the component is composed."]}),"\n",(0,r.jsx)(s.W,{id:"2",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'return <>\n  <p> This component props: {JSON.stringify(props)} </p>\n  <Widget src="influencer.testnet/widget/Greeter" \n          props={{name: "Maria", amount: 2}} />\n</>\n'})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"useeffect-hook",children:"useEffect Hook"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsxs)(n.a,{href:"https://react.dev/learn/synchronizing-with-effects",children:[(0,r.jsx)(n.code,{children:"useEffect"})," hook"]})," is used to handle side effects. It will execute each time one of the dependencies changes."]}),"\n",(0,r.jsx)(s.W,{id:"3",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'const [count, setCount] = useState(0);\nconst [visible, setVisible] = useState(false);\n\nuseEffect(() => {\n  if(count > 5) setVisible(true);\n}, [count]);\n\nreturn (\n  <div>\n    <p>You clicked {count} times</p>\n    <p className="alert alert-danger" hidden={!visible}>\n      You clicked more than 5 times\n    </p>\n    <button onClick={() > setCount(count + 1)}>Click me</button>\n  </div>\n);  \n'})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,r.jsx)(n.p,{children:"Components can import functions from other components. This is useful to reuse code and to create libraries of components."}),"\n",(0,r.jsx)(s.W,{id:"4",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const {add, multiply} = VM.require('influencer.testnet/widget/Math');\n\nreturn <>\n  <p> 2 + 3 = {add(2, 3)} </p>\n  <p> 2 * 3 = {multiply(2, 3)} </p>\n</>\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["Where the code of the ",(0,r.jsx)(n.code,{children:"Math"})," component is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function add(a, b) {\n  return a + b;\n}\n\nfunction multiply(a, b) {\n  return a * b;\n}\n\nreturn { add, multiply };\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),s=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,o.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function m(e){var n,t,a,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),b=v[0],x=v[1],g=f({queryString:c,groupId:d}),j=g[0],k=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),y=w[0],N=w[1],C=function(){var e=null!=j?j:y;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){C&&x(C)}),[C]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),k(e),N(e)}),[k,N,m]),tabValues:m}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;t=null!=(s=l[o])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=s.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function k(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,Object.assign({},e,n)),(0,x.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,v.Z)();return(0,x.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(n))}},42352:(e,n,t)=>{t.d(n,{W:()=>i});var r=t(67294),a=t(93293),s=t(91262),o=t(85893);function i(e){var n=e.children,i=e.id,l=void 0===i?1:i,c=e.height,u=void 0===c?"160px":c;return(0,o.jsx)(s.Z,{fallback:(0,o.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(b){}var s=t(58613),i=s.Widget,c=s.useInitNear,d=t(2302).ZP,h=(0,r.useState)(e),p=h[0],f=h[1],m=c().initNear,v=(0,a.O)().selector;return(0,r.useEffect)((function(){m&&v&&m({networkId:"testnet",selector:v})}),[m,v]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"monaco",children:(0,o.jsx)(d,{height:u,value:p,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return f(e)}})}),(0,o.jsx)("div",{className:"code_iframe",children:(0,o.jsx)("div",{className:"bootstrap-scope",children:(0,o.jsx)("div",{className:"vm-widget",children:(0,o.jsx)(i,{code:p},l)})})})]})}})}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
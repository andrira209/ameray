(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4940],{91260:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidity/create",function(){return l(46111)}])},475:function(e,t,l){"use strict";l.d(t,{u:function(){return n}});var i=l(62512);async function n(){var e;let t=await (0,i.Z)("https://solanacompass.com/api/fees",{cacheFreshTime:3e5}),{avg:l}=null!==(e=null==t?void 0:t[15])&&void 0!==e?e:{};if(l)return{units:4e5,microLamports:Math.min(Math.ceil(1e6*l/4e5),25e3)}}},72259:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var i=l(85893),n=l(67294),a=l(66180),o=l(27993),s=l(31139),r=l(54592),c=l(32029),d=l(82727);function u(e){var t;let{decimalMode:l,className:u,disabled:m,noDisableStyle:f,label:p,labelClassName:x,inputProps:g,renderInput:h,...Z}=e,b=(0,n.useRef)(null);return(0,i.jsxs)(r.Z,{onClick:function(){var e,t,l,i;null===(e=b.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null===(l=b.current)||void 0===l||null===(i=l.click)||void 0===i||i.call(l)},className:(0,a.m)("bg-[#141041] justify-between rounded-xl mobile:rounded-lg py-3 px-6 mobile:py-2 mobile:px-4 cursor-text ".concat(m&&!f?"pointer-events-none-entirely cursor-default opacity-50":""),u),children:[p&&(0,i.jsx)("div",{className:(0,a.m)("text-xs mobile:text-2xs text-[#abc4ff80] font-medium ",x),children:p}),null!==(t=(0,o.u)(h,[b]))&&void 0!==t?t:l?(0,i.jsx)(c.Z,{noCSSInputDefaultWidth:!0,...Z,...g,className:(0,a.m)("w-full py-1 mobile:py-1 font-medium",null==g?void 0:g.className),componentRef:(0,s.Z)(b,null==g?void 0:g.componentRef)}):(0,i.jsx)(d.Z,{noCSSInputDefaultWidth:!0,...Z,...g,className:(0,a.m)("w-full py-1 mobile:py-1 font-medium",null==g?void 0:g.className),componentRef:(0,s.Z)(b,null==g?void 0:g.componentRef)})]})}},46111:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return ee}});var i=l(85893),n=l(11163),a=l(67294),o=l(66180),s=l(91371),r=l(75640),c=l(47511),d=l(42186),u=l(31166),m=l(8667),f=l(53002),p=l(34003),x=l(3363),g=l(62952),h=l(17097),Z=l(81451),b=l(51523),v=l(71375),w=l(59277),j=l(475);function S(e){if(!e)return;let t=f.Z.getState().getRawBalance(e);if(t)return t;let l=f.Z.getState().allTokenAccounts,i=l.filter(t=>(0,x.ZP)(t.mint)===(0,x.ZP)(e)),n=i.length>0?i.reduce((e,t)=>e.gt(t.amount)?e:t.amount,r.xEJ):void 0;return n}var k=l(91148),y=l(9191),N=l(64529);let I=(0,N.Ue)((e,t)=>({createdPoolHistory:{},baseDecimaledAmount:"",quoteDecimaledAmount:"",sdkAssociatedPoolKeys:void 0,currentStep:1,setCurrentStep:t=>{e({currentStep:t})}}));async function P(e){let{onAllSuccess:t}=e;return(0,m.ZP)(async e=>{var t,l,i,n;let{transactionCollector:a,baseUtils:{owner:o,connection:s}}=e,{lpMint:m,marketId:N,ammId:P,baseMint:A,quoteMint:q,baseDecimals:C,quoteDecimals:M,baseDecimaledAmount:T,quoteDecimaledAmount:O,sdkAssociatedPoolKeys:D,startTime:B}=I.getState(),{getToken:L}=u.ZP.getState(),{solBalance:_,tokenAccounts:V,pureRawBalances:E}=f.Z.getState();(0,p.Z)(m,"required create-pool step 1, it will cause info injection"),(0,p.Z)(N,"required create-pool step 1, it will cause info injection"),(0,p.Z)((0,h.gm)(N),"required valid market id"),(0,p.Z)(P,"required create-pool step 1, it will cause info injection"),(0,p.Z)(A,"required create-pool step 1, it will cause info injection"),(0,p.Z)(q,"required create-pool step 1, it will cause info injection"),(0,p.Z)(null!=C,"required create-pool step 1, it will cause info injection"),(0,p.Z)(null!=M,"required create-pool step 1, it will cause info injection"),(0,p.Z)(T,"required create-pool step 1, it will cause info injection"),(0,p.Z)(O,"required create-pool step 1, it will cause info injection"),(0,p.Z)((0,Z.gt)(T,0),"should input > 0 base amount "),(0,p.Z)((0,Z.gt)(O,0),"should input > 0 quote amount "),(0,p.Z)(D,"required create-pool step 1, it will cause info injection");let F=null===(t=await (null==s?void 0:s.getAccountInfo(new c.nh(P))))||void 0===t?void 0:t.data,R=!!((null==F?void 0:F.length)&&(0,Z.$u)(null===(l=r.ZpI.getStateLayout(4).decode(F))||void 0===l?void 0:l.status));(0,p.Z)(!R,"pool already inited");let{tokenAccountRawInfos:K}=f.Z.getState(),W=L(A)||new r.WUB(A,C),H=L(q)||new r.WUB(q,M);(0,p.Z)((0,Z.eg)((0,x.ZP)(A)===(0,x.ZP)(d.DA)?(0,b.kg)(null!==(i=E[A])&&void 0!==i?i:0,null!=_?_:0):(0,g.n)(W,S(W.mint)),(0,g.n)(W,T).raw),"wallet haven't enough base token"),(0,p.Z)((0,Z.eg)((0,x.ZP)(q)===(0,x.ZP)(d.DA)?(0,b.kg)(null!==(n=E[q])&&void 0!==n?n:0,null!=_?_:0):(0,g.n)(H,S(H.mint)),(0,g.n)(H,O).raw),"wallet haven't enough quote token");let{innerTransactions:z}=await r.ZpI.makeCreatePoolV4InstructionV2Simple({connection:s,programId:w.Z.getState().programIds.AmmV4,marketInfo:{programId:w.Z.getState().programIds.OPENBOOK_MARKET,marketId:(0,x.uI)(N)},associatedOnly:!1,ownerInfo:{feePayer:o,wallet:o,tokenAccounts:K,useSOLBalance:!0},baseMintInfo:{mint:(0,x.uI)(A),decimals:C},quoteMintInfo:{mint:(0,x.uI)(q),decimals:M},startTime:(0,v.Z)((B?B.getTime():Date.now())/1e3),baseAmount:(0,v.Z)((0,b.dC)(T,10**C)),quoteAmount:(0,v.Z)((0,b.dC)(O,10**M)),computeBudgetConfig:await (0,j.u)(),checkCreateATAOwner:!0});a.add(z,{onTxSuccess(){!function(){var e;let{lpMint:t,marketId:l,ammId:i,baseMint:n,quoteMint:a,baseDecimals:o,quoteDecimals:s}=I.getState();(0,p.Z)(t,"required create-pool step 1, it will cause info injection"),(0,p.Z)(l,"required create-pool step 1, it will cause info injection"),(0,p.Z)(i,"required create-pool step 1, it will cause info injection"),(0,p.Z)(n,"required create-pool step 1, it will cause info injection"),(0,p.Z)(a,"required create-pool step 1, it will cause info injection"),(0,p.Z)(null!=o,"required create-pool step 1, it will cause info injection"),(0,p.Z)(null!=s,"required create-pool step 1, it will cause info injection");let{adapter:r}=f.Z.getState(),c=null==r?void 0:r.publicKey;(0,p.Z)(c,"no wallet owner");let d={lpMint:t,marketId:l,ammId:i,baseMint:n,quoteMint:a,baseDecimals:o,quoteDecimals:s,timestamp:Date.now(),walletOwner:String(c)};console.log("new created pool history Item: ",d);let{createdPoolHistory:u}=I.getState(),m=(0,k.kt)([...null!==(e=u[String(c)])&&void 0!==e?e:[],d],e=>e.ammId),x={...u,[String(c)]:m};I.setState({createdPoolHistory:x}),(0,y.mM)("RAY_CREATED_POOL_HISTORY",x)}(),I.setState({startTime:void 0})},txHistoryInfo:{title:"Create Pool",description:"".concat(T," ").concat(W.symbol," and ").concat(O," ").concat(H.symbol)}})}).then(e=>{let{allSuccess:l}=e;l&&(null==t||t())})}var A=l(96662),q=l(94355),C=l(2148),M=l(4465),T=l(18559);async function O(e){try{var t,l,i;let{jsonInfos:n}=C.O.getState();(0,p.Z)(!n.some(t=>t.market===String(e.marketId)),"Pool already created");let{connection:a}=A.ZP.getState(),{programIds:o}=w.Z.getState();(0,p.Z)(a,"no rpc connection");let{owner:s}=f.Z.getState();(0,p.Z)(s,"require connect wallet");let u=await a.getAccountInfo(new c.nh(e.marketId));(0,p.Z)(null==u?void 0:u.data,"can't find market ".concat(e.marketId)),(0,p.Z)((0,M.$F)(u.owner,o.OPENBOOK_MARKET),"market program id is not OpenBook program id");let{baseMint:m,quoteMint:g}=r.SsU.decode(u.data),h=await a.getAccountInfo(new c.nh(m));(0,p.Z)(null==h?void 0:h.data,"can't find token ".concat(m));let{decimals:Z}=r.d_N.decode(h.data);(0,p.Z)(null!=Z,"base decimal must exist");let b=await (0,T.WX)(m,{cachedAccountInfo:h,canWhiteList:!0});if(!b)return{isSuccess:!1};let v=await a.getAccountInfo(new c.nh(g));(0,p.Z)(null==v?void 0:v.data,"can't find token ".concat(g));let{decimals:j}=r.d_N.decode(v.data);(0,p.Z)(null!=j,"quote decimal must exist");let S=await (0,T.WX)(g,{cachedAccountInfo:v,canWhiteList:!0});if(!S)return{isSuccess:!1};let{tokenAccounts:k,allTokenAccounts:y}=f.Z.getState(),N=null!==(l=k.find(e=>{let{mint:t}=e;return String(t)===String(m)}))&&void 0!==l?l:y.find(e=>{let{mint:t}=e;return String(t)===String(m)}),P=null!==(i=k.find(e=>{let{mint:t}=e;return String(t)===String(g)}))&&void 0!==i?i:y.find(e=>{let{mint:t}=e;return String(t)===String(g)});(0,p.Z)((0,x.ZP)(g)===(0,x.ZP)(d.DA)||P,"user wallet has no quote token"),(0,p.Z)((0,x.ZP)(g)===(0,x.ZP)(d.DA)||!(null==P?void 0:P.amount.isZero()),"user wallet has 0 quote token"),(0,p.Z)((0,x.ZP)(m)===(0,x.ZP)(d.DA)||N,"user wallet has no base token"),(0,p.Z)((0,x.ZP)(m)===(0,x.ZP)(d.DA)||!(null==N?void 0:N.amount.isZero()),"user wallet has 0 base token");let q=await r.ZpI.getAssociatedPoolKeys({version:4,marketVersion:3,baseMint:m,quoteMint:g,baseDecimals:Z,quoteDecimals:j,marketId:new c.nh(e.marketId),programId:o.AmmV4,marketProgramId:o.OPENBOOK_MARKET}),{id:O,lpMint:D}=q;I.setState({sdkAssociatedPoolKeys:q}),(0,p.Z)(O,"can't find associated poolKeys for market"),I.setState({lpMint:String(D),ammId:String(O),marketId:String(e.marketId),baseMint:String(m),quoteMint:String(g),baseDecimals:Z,quoteDecimals:j});let B=!!(null===(t=await (null==a?void 0:a.getAccountInfo(new c.nh(O))))||void 0===t?void 0:t.data.length);return(0,p.Z)(!B,"has already init this pool"),{isSuccess:!0}}catch(t){let{logError:e}=q.Z.getState();return e(t),{isSuccess:!1}}}function D(){let e=(0,y.Jt)("RAY_CREATED_POOL_HISTORY");e&&I.setState({createdPoolHistory:e})}var B=l(31555),L=l(25647),_=l(43067),V=l(6994),E=l(97664),F=l(54592),R=l(23484),K=l(25194),W=l(48162),H=l(72259),z=l(66042),U=l(57571),Y=l(51800),Q=l(27993);function X(e){let{currentStep:t=1,stepInfos:l,onSetCurrentSetp:n,renderStepContent:a,renderStepLine:o,renderStepNumber:s}=e;return(0,i.jsx)("div",{children:l.map((e,l,r)=>(0,i.jsxs)(Y.Z,{children:[(0,i.jsxs)(F.Z,{className:"items-center",children:[(0,Q.u)(s,[e])||(0,i.jsx)("div",{className:"grid place-items-center h-8 w-8 mobile:h-6 mobile:w-6 text-sm font-medium bg-[#141041] rounded-full ".concat(t===e.stepNumber?"text-[#F1F1F2]":"text-[rgba(171,196,255,.5)]"," ").concat(t>e.stepNumber?"clickable":""),onClick:()=>{t>e.stepNumber&&(null==n||n(e))},children:e.stepNumber}),(0,Q.u)(o,[Object.assign(e,{isLast:l===r.length-1})])||l!==r.length-1&&(0,i.jsx)("div",{className:"my-2 min-h-[16px] mobile:h-2 border-r-1.5 border-[rgba(171,196,255,.5)] flex-1"})]}),(0,i.jsx)("div",{className:"ml-2",children:(0,Q.u)(a,[e])||(0,i.jsx)("div",{className:"text-sm font-medium ".concat(t===e.stepNumber?"text-[#F1F1F2]":"text-[rgba(171,196,255,.5)]"," pt-1.5"),children:e.stepContent})})]},l))})}var $=l(86597),J=l(72573),G=l(92224);function ee(){return(0,i.jsxs)(U.Z,{metaTitle:"Create Liquidity Pool - Raydium",mobileBarTitle:"Create Pool",children:[(0,i.jsx)(et,{close:()=>(0,B.Eh)("/liquidity/add")}),(0,i.jsx)(en,{})]})}function et(e){var t,l,n,o;let{close:r}=e,c=(0,f.Z)(e=>e.connected),d=(0,u.ZP)(e=>e.getToken),m=I(e=>e.currentStep),p=I(e=>e.setCurrentStep),x=(0,s.ZP)(e=>e.isApprovePanelShown),[h,v]=(0,a.useState)(!1),{marketId:w,ammId:j,baseMint:k,quoteMint:y,baseDecimals:N,quoteDecimals:A,baseDecimaledAmount:q,quoteDecimaledAmount:C}=I(),M=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"my-12 mobile:my-6 italic text-center text-sm font-medium text-[rgba(171,196,255,.5)]",children:["This tool is for advanced users. Before attempting to create a new liquidity pool, we suggest going through this"," ",(0,i.jsx)(z.Z,{href:"https://raydium.gitbook.io/raydium/permissionless/creating-a-pool",children:"detailed guide"})]}),(0,i.jsx)(H.Z,{label:"OpenBook Market ID:",className:"mb-5",onUserInput:e=>I.setState({marketId:e})}),(0,i.jsx)(_.Z,{className:"frosted-glass-teal w-full",isLoading:h,validators:[{should:!!w},{should:c,forceActive:!0,fallbackProps:{onClick:()=>s.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}}],onClick:()=>{v(!0),O({marketId:w}).then(e=>{let{isSuccess:t}=e;t&&p(2)}).finally(()=>v(!1))},children:"Confirm"})]}),T=k?null!==(t=d(k))&&void 0!==t?t:null!=N?(0,L.LP)({mint:k,decimals:N}):void 0:void 0,D=y?null!==(l=d(y))&&void 0!==l?l:null!=A?(0,L.LP)({mint:y,decimals:A}):void 0:void 0,B=(0,a.useMemo)(()=>T?(0,g.n)(T,S(T.mint)):void 0,[T]),R=(0,a.useMemo)(()=>D?(0,g.n)(D,S(D.mint)):void 0,[D]),[U,{toggle:Q}]=(0,G.ZP)(),ee=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(F.Z,{className:"my-12 mobile:my-6 py-4 px-6 flex-grow ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-xl items-center gap-3 mobile:gap-1",children:[(0,i.jsx)(ei,{fieldName:"OpenBook Market ID:",fieldValue:null!=w?w:"--"}),(0,i.jsx)(ei,{fieldName:"Base Token Mint Address:",fieldValue:null!=k?k:"--",autoShowTokenSymbol:!0}),(0,i.jsx)(ei,{fieldName:"Quote Token Mint Address:",fieldValue:null!=y?y:"--",autoShowTokenSymbol:!0}),(0,i.jsx)(ei,{fieldName:"AMM ID:",fieldValue:null!=j?j:"--"})]}),q&&C&&(0,Z.$u)(q)&&(0,Z.$u)(C)&&(0,i.jsxs)(Y.Z,{className:"mx-auto my-2 items-center gap-2",children:[(0,i.jsx)("div",{className:"text-sm text-[rgb(171,196,255)]",children:"price:"}),(0,i.jsx)("div",{className:"text-sm text-white",children:(0,J.B)(U?(0,b.hi)(C||0,q||1):(0,b.hi)(q||0,C||1),{decimalLength:"auto ".concat(Math.max(null!==(n=null==T?void 0:T.decimals)&&void 0!==n?n:6,null!==(o=null==D?void 0:D.decimals)&&void 0!==o?o:6))})}),(0,i.jsxs)("div",{className:"text-sm text-white",children:[U?null==D?void 0:D.symbol:null==T?void 0:T.symbol," /"," ",U?null==T?void 0:T.symbol:null==D?void 0:D.symbol]}),(0,i.jsx)(W.Z,{heroIconName:"switch-horizontal",className:"clickable clickable-mask-offset-2",size:"sm",onClick:Q})]}),(0,i.jsx)(E.Z,{topLeftLabel:"Base Token Initial Liquidity:",className:"mb-5",token:T,maxValue:B,onUserInput:e=>I.setState({baseDecimaledAmount:e})}),(0,i.jsx)(E.Z,{topLeftLabel:"Quote Token Initial Liquidity:",className:"mb-5",token:D,maxValue:R,onUserInput:e=>I.setState({quoteDecimaledAmount:e})}),(0,i.jsx)(K.Z,{className:"mb-5",label:"Start time (Optional):",canEditSeconds:!0,onDateChange:e=>I.setState({startTime:e}),showTime:{format:"HH:mm:ss"}}),(0,i.jsx)(_.Z,{className:"frosted-glass-teal w-full",isLoading:x,validators:[{should:!!(q&&C)}],onClick:()=>{P({onAllSuccess:()=>{p(3),setTimeout(()=>{p(1)},8e3)}})},children:"Initialize Liquidity Pool"})]}),et=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(F.Z,{className:"my-12 mobile:my-6 py-4 px-6 flex-grow ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-xl items-center gap-3 mobile:gap-1",children:[(0,i.jsx)(ei,{fieldName:"OpenBook Market ID:",fieldValue:null!=w?w:"--"}),(0,i.jsx)(ei,{fieldName:"AMM ID:",fieldValue:null!=j?j:"--"}),(0,i.jsx)(ei,{fieldName:"Base Mint:",fieldValue:null!=k?k:"--",autoShowTokenSymbol:!0}),(0,i.jsx)(ei,{fieldName:"Quote Mint:",fieldValue:null!=y?y:"--",autoShowTokenSymbol:!0})]}),(0,i.jsx)("div",{className:"font-medium text-center",children:"Pool has been successfully created!"}),(0,i.jsx)(F.Z,{className:"my-6 mobile:my-6 py-4 px-6 flex-grow ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-xl items-center gap-3 mobile:gap-1",children:(0,i.jsx)(el,{fieldName:"AMM ID:",fieldValue:(0,i.jsxs)(Y.Z,{children:[(0,i.jsx)(z.Z,{className:"text-sm",href:"/liquidity/add/?ammId=".concat(j),onClick:r,children:(null==j?void 0:j.slice(0,12))+"......"+(null==j?void 0:j.slice(-12))}),(0,i.jsx)(W.Z,{size:"sm",heroIconName:"clipboard-copy",className:"clickable text-[#ABC4FF] ml-2",onClick:()=>{j&&(0,$.Z)(j)}})]})})})]});return(0,i.jsxs)("div",{className:"self-center w-[min(456px,90vw)]",children:[(0,i.jsx)("div",{className:"pb-8 text-2xl mobile:text-lg font-semibold justify-self-start text-white",children:"Create Pool"}),(0,i.jsxs)(V.Z,{className:"p-8 mobile:p-4 flex flex-col rounded-3xl border-1.5 border-[rgba(171,196,255,0.2)] overflow-y-auto overflow-x-hidden bg-cyberpunk-card-bg shadow-cyberpunk-card",size:"lg",children:[(0,i.jsx)(X,{currentStep:m,stepInfos:[{stepNumber:1,stepContent:"Import OpenBook Market ID"},{stepNumber:2,stepContent:"Price & Initial Liquidity"},{stepNumber:3,stepContent:"Pool Created"}],onSetCurrentSetp:e=>{let{stepNumber:t}=e;return null==p?void 0:p(t)}}),1===m&&M,2===m&&ee,3===m&&et]})]})}function el(e){var t;let{autoShowTokenSymbol:l,className:n,fieldName:a,fieldValue:s}=e,r=(0,u.ZP)(e=>e.getToken);return(0,i.jsxs)(Y.Z,{className:(0,o.m)("w-full justify-between",n),children:[(0,i.jsx)(Y.Z,{className:"items-center text-xs font-medium text-[#ABC4FF] mobile:text-2xs",children:(0,i.jsx)("div",{className:"mr-1",children:a})}),(0,i.jsx)("div",{className:"text-xs font-medium text-white mobile:text-2xs",children:l&&null!==(t=(e=>{let t=r(e);return t?"".concat(e," (").concat(t.symbol,")"):e})(String(s)))&&void 0!==t?t:s})]})}function ei(e){let{autoShowTokenSymbol:t,className:l,fieldName:n,fieldValue:o}=e,s=(0,u.ZP)(e=>e.getToken),r=(0,a.useMemo)(()=>o.slice(0,6)+"......"+o.slice(-6),[o]);return(0,i.jsx)(el,{className:l,fieldName:n,fieldValue:(0,i.jsxs)(Y.Z,{children:[(0,i.jsxs)("div",{title:o,children:[r," ",t&&(e=>{let t=s(e);if(t)return"(".concat(t.symbol,")")})(String(o))]}),(0,i.jsx)(W.Z,{size:"sm",heroIconName:"clipboard-copy",className:"clickable text-[#ABC4FF] ml-2",onClick:()=>{(0,$.Z)(o)}})]})})}function en(){let{push:e}=(0,n.useRouter)();(0,u.ZP)(e=>e.getToken);let t=(0,f.Z)(e=>e.owner),l=I(e=>e.createdPoolHistory),o=(0,a.useMemo)(()=>t&&(null==l?void 0:l[String(t)]),[l,t]);return((0,a.useEffect)(D,[]),null==o?void 0:o.length)?(0,i.jsxs)("div",{className:"self-center w-[min(456px,90vw)] mt-12",children:[(0,i.jsx)("div",{className:"pb-8 text-xl mobile:text-base font-semibold justify-self-start text-white",children:"Your Created Pool"}),(0,i.jsx)(V.Z,{className:"p-4 bg-cyberpunk-card-bg",size:"lg",children:(0,i.jsx)(F.Z,{className:"gap-6 mobile:gap-5",children:o.map((t,l)=>(0,i.jsxs)(R.Z,{className:"py-4 px-6 ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-2xl mobile:rounded-xl",children:[(0,i.jsx)(R.Z.Face,{children:e=>{let{isOpen:l}=e;return(0,i.jsxs)(Y.Z,{className:"items-center justify-between",children:[(0,i.jsx)(Y.Z,{className:"gap-2 items-center",children:(0,i.jsxs)("div",{className:"text-base font-normal text-[#abc4ff]",children:["AMM ID: ",t.ammId.slice(0,6),"...",t.ammId.slice(-6)]})}),(0,i.jsx)(W.Z,{size:"sm",className:"text-[#abc4ff]",heroIconName:"".concat(l?"chevron-up":"chevron-down")})]})}}),(0,i.jsxs)(R.Z.Body,{children:[(0,i.jsxs)(F.Z,{className:"border-t-1.5 border-[rgba(171,196,255,.5)] mt-4 py-5 gap-3",children:[(0,i.jsx)(ei,{fieldName:"Amm Id: ",fieldValue:t.ammId}),(0,i.jsx)(ei,{fieldName:"Market Id: ",fieldValue:t.marketId}),(0,i.jsx)(ei,{fieldName:"Base Mint: ",fieldValue:t.baseMint,autoShowTokenSymbol:!0}),(0,i.jsx)(ei,{fieldName:"Quote Mint: ",fieldValue:t.quoteMint,autoShowTokenSymbol:!0}),(0,i.jsx)(el,{fieldName:"Created On: ",fieldValue:t.timestamp})]}),(0,i.jsx)(Y.Z,{className:"gap-4 mb-1",children:(0,i.jsx)(_.Z,{className:"text-base font-medium frosted-glass frosted-glass-teal rounded-xl flex-grow",onClick:()=>{e("/liquidity/add/?ammId=".concat(t.ammId))},children:"Add Liquidity"})})]})]},l))})})]}):null}}},function(e){e.O(0,[4740,7571,8667,7664,5194,9774,2888,179],function(){return e(e.s=91260)}),_N_E=e.O()}]);
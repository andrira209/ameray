"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2314],{52869:function(e,t,n){function l(e){let t=void 0!==e.jsonInfo;return!t}function a(e){let t=void 0!==e.jsonInfo;return t}function r(e){return"rewardInfos"in e&&"lpMint"in e&&"category"in e&&"authority"in e}n.d(t,{aE:function(){return l},ef:function(){return r},lr:function(){return a}})},29197:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(85893),a=n(18074),r=n(27993),s=n(66180),i=n(45826),o=n(91107);function c(e){let{className:t,style:n,vertical:a,itemClassName:i,itemStyle:c,values:d,currentValue:u=d[0],labels:m=d,onChange:f}=e;return d.filter(Boolean).length?(0,l.jsx)(o.E,{value:u,onChange:null!=f?f:()=>{},className:(0,s.m)("".concat(a?"flex-col":"flex"," ").concat(null!=t?t:"")),style:n,children:d.map((e,t,n)=>(0,l.jsx)(o.E.Option,{value:e,className:"cursor-pointer flex grow",children:s=>{let{checked:o}=s;return e&&(0,l.jsx)("div",{className:"grid grow ".concat(a?"":"place-items-center"," ").concat((0,r.u)(i,[o])),style:(0,r.u)(c,[o,t,n]),children:(0,r.u)(m[t],[o,t,n])})}},t))}):(0,l.jsx)(l.Fragment,{})}function d(e){let{size:t,$valuesLength:n,$transparentBg:o,urlSearchQueryKey:d,className:u,...m}=e;(0,i.i)({currentValue:m.currentValue,values:m.values,onChange:m.onChange,queryKey:d});let f=m.currentValue&&m.values.includes(m.currentValue),p=null!=n?n:m.values.length,x=(f?m.values.findIndex(e=>e===m.currentValue):0)+0;return(0,l.jsx)(c,{...m,currentValue:m.currentValue,className:(0,s.m)("rounded-full p-1",o?"bg-transparent":"bg-cyberpunk-card-bg",u),itemClassName:e=>(0,s.m)("sm"===t?"min-w-[82px] mobile:min-w-[64px] px-2 mobile:px-1.5 h-7 mobile:h-5 text-sm mobile:text-xs":"min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs ","grid rounded-full place-items-center font-medium whitespace-nowrap ".concat(e?"text-white":"text-[#ABC4FF]"),(0,r.u)(m.itemClassName,[e])),itemStyle:e=>e?{background:"linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))",backgroundSize:"".concat(p,"00% 100%"),backgroundPosition:(0,a.Z)(1/(p-1)*x)}:{}})}},99111:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(67294),a=n(27993),r=n(26842);function s(e,t,n){let[s,i]=(0,l.useState)(n),o=(0,l.useRef)(0),c=(0,l.useRef)(0);return(0,r.Z)(async()=>{let t=c.current;c.current+=1,o.current=t;let n=await (0,a.u)(e);return t==o.current?i(n):void 0},null!=t?t:[]),s}},61652:function(e,t,n){n.d(t,{Z:function(){return et}});var l=n(85893),a=n(67294),r=n(84207),s=n(75640),i=n(27713);function o(e){let{tick:t,price:n}=s.c2c.getPriceAndTick({baseIn:"base"===e.baseSide,poolInfo:e.info,price:(0,i.I2)((0,r.Z)(e.price))});return{tick:t,price:(0,i.eZ)(n)}}var c=n(62952),d=n(13550),u=n.n(d),m=n(34003),f=n(3363),p=n(49641),x=n(57435),b=n(475),v=n(8667),h=n(19036),g=n(53002),j=n(62707),y=n(69221),N=n(91371),Z=n(94678),k=n(52869),w=n(26427),C=n(96662),P=n(31166),R=n(49047),S=n(21686),E=n(43067),M=n(6994),I=n(70745),A=n(54592),T=n(32029),q=n(60421),L=n(48162),F=n(66042),B=n(40816),O=n(6325),D=n(51800),z=n(91148),G=n(72616),U=n(18074),V=n(4465),_=n(81451),H=n(51523),K=n(72573),W=n(99111),$=n(47857),J=n(62361),Q=n(92224),Y=n(67858),X=n(71122),ee=n(66180);function et(e){let{info:t,open:n,onClose:r}=e,s=(0,y.p)(e=>e.loadedHydratedClmmInfos),i=(0,y.p)(e=>e.jsonInfos),o=(0,a.useMemo)(()=>i.find(e=>(0,k.ef)(t)?e.farmIds.includes((0,f.ZP)(t.id)):e.ammId===(0,f.ZP)(t.id)),[i,t]),c=(0,a.useMemo)(()=>{if(!o)return;let e=[...s.values()];return e.find(e=>(0,f.ZP)(e.id)===(null==o?void 0:o.clmmId))},[o,s]),d=(0,k.ef)(t)&&(0,k.lr)(t),u=(0,W.Z)(()=>{if(!d)return t;if(!o)return;let e=(0,f.ZP)(o.ammId),{hydrated:n}=function(e){let t=!1,n=()=>{t=!0},l=x.Z.getState(),{jsonInfos:a,sdkParsedInfos:r}=l,s=C.ZP.getState(),{connection:i}=s,o=(0,w.ZP)(r,e=>(0,f.ZP)(e.id)),c=e=>!!o[(0,f.ZP)(e)],d=(0,S.Z)(a.filter(t=>e.includes(t.id)&&!c(t.id)),i).then(e=>{let t=(0,w.ZP)(e,e=>(0,f.ZP)(e.id));return x.Z.setState(t=>({sdkParsedInfos:[...t.sdkParsedInfos,...e]})),{...t,...o}}),u=d.then(e=>{if(t)return;let{getLpToken:n,getToken:l}=P.ZP.getState(),{pureRawBalances:a}=g.Z.getState(),{hydratedInfos:r}=x.Z.getState(),s=(0,w.ZP)(r,e=>(0,f.ZP)(e.id)),i=e=>!!s[(0,f.ZP)(e)],o=Object.values(e).filter(e=>!i(e.id)).map(e=>(0,R.Z)(e,{getToken:l,getLpToken:n,lpBalance:a[(0,f.ZP)(e.lpMint)]}));x.Z.setState(e=>({hydratedInfos:[...e.hydratedInfos,...o]}));let c=(0,w.ZP)(o,e=>(0,f.ZP)(e.id));return{...s,...c}});return{abort:n,hydrated:u,sdkParsed:d}}([e]);return n.then(t=>null==t?void 0:t[e])},[d,t,o]);(0,a.useEffect)(()=>{y.p.setState({shouldLoadedClmmIds:new Set(i.map(e=>e.clmmId))})},[i]);let m=e=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"relative mb-5",children:[(0,l.jsx)("div",{className:"text-white text-lg font-medium mb-3",children:"Migrate to Concentrated Liquidity pool"}),(0,l.jsxs)("div",{className:"text-[#abc4ff] text-sm",children:["Migrate below or learn more about CLMM pools and risks"," ",(0,l.jsx)(F.Z,{className:"inline-block font-bold",href:"https://docs.raydium.io/raydium/liquidity-providers/providing-concentrated-liquidity-clmm",children:"here"}),"."]}),(0,l.jsx)(L.Z,{heroIconName:"x",size:"lg",className:"absolute top-0 right-0 text-[#abc4ff] text-sm cursor-pointer",onClick:e})]}),(0,l.jsx)(en,{clmmInfo:c,migrationJsonInfo:o,farmInfo:d?t:void 0,liquidityInfo:u,onMigrateSuccess:e})]});return(0,l.jsx)(O.Z,{placement:"from-bottom",open:n,onClose:()=>{r()},children:e=>{let{close:t}=e;return(0,l.jsx)(M.Z,{className:"p-6 mobile:p-4 rounded-3xl mobile:rounded-lg ".concat("w-[min(600px,90vw)]"," mobile:w-full max-h-[80vh] overflow-auto border-1.5 border-[rgba(171,196,255,0.2)] bg-cyberpunk-card-bg shadow-cyberpunk-card transition"),size:"lg",children:m(t)})}})}function en(e){var t,n,r,i,d,y,k,w,C,P,R,S,M,F,O;let{liquidityInfo:W,farmInfo:X,migrationJsonInfo:ee,clmmInfo:et,onMigrateSuccess:en}=e,er=(0,g.Z)(e=>e.pureRawBalances),es=(0,N.ZP)(e=>e.slippageTolerance),ei=Number((0,K.B)(es)),[eo,{on:ec,off:ed}]=(0,Q.ZP)(),[eu,em]=(0,a.useState)("quick"),[ef,ep]=(0,a.useState)("base"),ex=(0,a.useMemo)(()=>{let e=et&&(0,G.y)((0,H.hi)(et.ammConfig.tradeFeeRate,1e4),{alreadyDecimaled:!0});return(0,U.Z)(e,{fixed:4,alreadyPercented:!0})},[et]),eb=null==W?void 0:W.lpToken,ev=X?X.userStakedLpAmount:W&&eb&&(0,c.n)(eb,er[(0,f.ZP)(W.lpMint)]),eh=(0,Z.ZP)(e=>e.timeBasis),eg=(0,a.useMemo)(()=>{var e,t;return(0,V.aT)(null==W?void 0:W.baseMint,null==et?void 0:null===(e=et.quote)||void 0===e?void 0:e.mint)&&(0,V.aT)(null==W?void 0:W.quoteMint,null==et?void 0:null===(t=et.base)||void 0===t?void 0:t.mint)},[et,W])//! it may base-quote in lp/liquidity, but quote-base in clmm
,ej=(0,a.useMemo)(()=>eg?null==W?void 0:W.quoteToken:null==W?void 0:W.baseToken,[W,eg]),ey=(0,a.useMemo)(()=>eg?null==W?void 0:W.baseToken:null==W?void 0:W.quoteToken,[W,eg]),eN=W&&eb&&ej&&(0,H.hi)((0,c.n)(ej,eg?W.quoteReserve:W.baseReserve),(0,c.n)(eb,W.lpSupply)),eZ=W&&eb&&ey&&(0,H.hi)((0,c.n)(ey,eg?W.baseReserve:W.quoteReserve),(0,c.n)(eb,W.lpSupply)),ek=ev&&eN?(0,c.n)(ej,(0,H.dC)(ev,eN),{alreadyDecimaled:!0}):void 0,ew=ev&&eZ?(0,c.n)(ey,(0,H.dC)(ev,eZ),{alreadyDecimaled:!0}):void 0,eC=null==et?void 0:et.currentPrice,eP="base"===ef&&ee?ee.defaultPriceMin:1/ee.defaultPriceMax,eR="base"===ef&&ee?ee.defaultPriceMax:1/ee.defaultPriceMin,[eS,eE,eM]=(0,J.$)((0,H.dC)(eC,.85));(0,a.useEffect)(()=>{eE((0,H.dC)(eC,.85))},[eC]);let[eI,eA]=(0,a.useState)(),eT=(0,a.useRef)(),[eq,eL]=(0,a.useState)(),[eF,eB,eO]=(0,J.$)((0,H.dC)(eC,1.15));(0,a.useEffect)(()=>{eB((0,H.dC)(eC,1.15))},[eC]);let eD=(0,a.useRef)(),[ez,eG]=(0,a.useState)(),[eU,eV]=(0,a.useState)(),[e_,eH]=(0,a.useState)(),eK=(0,N.ZP)(e=>e.isApprovePanelShown),eW=(0,a.useMemo)(()=>ek&&(0,c.n)(ek.token,(0,H.h9)(ek,eU),{alreadyDecimaled:!0}),[ek,eU]),e$=(0,a.useMemo)(()=>ew&&(0,c.n)(ew.token,(0,H.h9)(ew,e_),{alreadyDecimaled:!0}),[ew,e_]),eJ=(0,a.useRef)(),eQ=()=>"quick"===eu?eP:eM(),eY=()=>"quick"===eu?eR:eO(),eX=(0,$.z)(()=>{ep("base"===ef?"quote":"base"),eE(eF&&(0,_.gt)(eF,0)?(0,H.hi)(1,eF):eF),eB(eS&&(0,_.gt)(eS,0)?(0,H.hi)(1,eS):eS)}),e0=(0,a.useMemo)(()=>{var e;return eC&&eS&&eF&&(e="base"===ef?eC:(0,H.hi)(1,eC),(0,_.eg)(e,eS)&&(0,_.G)(e,eF))},[eC,ef,eS,eF]),e4=(0,a.useMemo)(()=>(0,_.gt)(eS,0)&&(0,_.gt)(eF,0)&&(0,_.gt)(eF,eS),[eS,eF]);return(0,a.useEffect)(()=>{let e,t;if(et&&eC){if((0,_.gt)(eQ(),0)){let{price:t,tick:n}=o({baseSide:ef,price:eQ(),info:et.state});eT.current=t,eL(n),e=n,"custom"===eu&&eE(t)}if((0,_.gt)(eY(),0)){let{price:e,tick:n}=o({baseSide:ef,price:eY(),info:et.state});eD.current=e,eG(n),t=n,"custom"===eu&&eB(e)}if(null!=e&&null!=t&&t===e&&(t+=1,eL((e-=1)-1),eG(t+1)),ek&&ew&&null!=e&&null!=t){let n={info:et.state,baseAmount:ek,quoteAmount:ew,tickLower:e,tickUpper:t,slippage:ei},{resultBaseAmount:l,resultQuoteAmount:a,liquidity:r,amountSlippageBase:i,amountSlippageQuote:o}=function(e){let{amountA:t,amountB:n,liquidity:l,amountSlippageA:a,amountSlippageB:r}=s.c2c.getLiquidityFromAmounts({add:!0,poolInfo:e.info,amountA:e.baseAmount.raw,amountB:e.quoteAmount.raw,tickLower:Math.min(e.tickLower,e.tickUpper),tickUpper:Math.max(e.tickLower,e.tickUpper),slippage:e.slippage});return{resultBaseAmount:(0,c.n)(e.baseAmount.token,t),resultQuoteAmount:(0,c.n)(e.quoteAmount.token,n),liquidity:l,amountSlippageBase:a,amountSlippageQuote:r}}(n);eJ.current={liquidity:r,amountSlippageBase:i,amountSlippageQuote:o},eA(r),eV(l),eH(a)}}},[ei,(0,K.B)(ek),(0,K.B)(ew),(0,K.B)(eS),(0,K.B)(eF),et,ee,eC,ef,eu]),(0,l.jsxs)(q.Z,{className:"gap-4",children:[(0,l.jsxs)(q.Z,{className:"grid-cols-2 gap-3",children:[(0,l.jsx)(ea,{selected:"quick"===eu,title:"Quick migration",description:"Very wide price range for a more passive strategy.",onClick:()=>{em("quick")}}),(0,l.jsx)(ea,{selected:"custom"===eu,title:"Custom migration",description:"Set a custom price range for higher capital efficiency.",onClick:()=>{em("custom")}})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-[#abc4ff] font-medium mb-2",children:"CLMM Pool"}),(0,l.jsxs)(D.Z,{className:"border-1.5 border-[#abc4ff40] rounded-xl py-2 px-4 justify-between",children:[(0,l.jsxs)(D.Z,{className:"gap-2",children:[(0,l.jsxs)("div",{className:"text-[#abc4ff] font-medium",children:[null!==(t=null==ej?void 0:ej.symbol)&&void 0!==t?t:"--","/",null!==(n=null==ey?void 0:ey.symbol)&&void 0!==n?n:"--"]}),(0,l.jsxs)("div",{className:"text-[#abc4ff] bg-[#abc4ff1f] text-xs rounded-full py-0.5 px-2 font-medium self-center",children:["Fee ",(0,U.Z)(ex)]})]}),(0,l.jsxs)(D.Z,{className:"items-center gap-2",children:[(0,l.jsx)("div",{className:"text-[#abc4ff80] text-sm font-medium",children:"Current price: "}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-base font-medium",children:(0,K.B)("base"===ef?eC:(0,H.hi)(1,eC))}),(0,l.jsx)("div",{className:"text-[#abc4ff80] text-xs font-medium",children:"base"===ef?"".concat(null!==(r=null==ey?void 0:ey.symbol)&&void 0!==r?r:"--"," per ").concat(null!==(i=null==ej?void 0:ej.symbol)&&void 0!==i?i:"--"):"".concat(null!==(d=null==ej?void 0:ej.symbol)&&void 0!==d?d:"--"," per ").concat(null!==(y=null==ey?void 0:ey.symbol)&&void 0!==y?y:"--")})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(D.Z,{className:"items-center justify-between mb-1",children:[(0,l.jsx)("div",{className:"text-[#abc4ff] font-medium",children:"Price Range"}),(0,l.jsx)(B.Z,{tabs:[{label:"".concat(null!==(k=null==ej?void 0:ej.symbol)&&void 0!==k?k:"--"," price"),value:"base"},{label:"".concat(null!==(w=null==ey?void 0:ey.symbol)&&void 0!==w?w:"--"," price"),value:"quote"}],selectedValue:ef,onChange:()=>{eX()}})]}),"quick"===eu&&(0,l.jsxs)(D.Z,{className:"border-1.5 border-[#abc4ff40] rounded-xl py-2 px-4 justify-between",children:[(0,l.jsxs)("div",{className:"text-[#abc4ff] font-medium text-sm",children:[eP||"--"," - ",eR||"--"]}),(0,l.jsx)(D.Z,{className:"items-center gap-2",children:(0,l.jsx)("div",{className:"text-[#abc4ff80] text-sm font-medium",children:"base"===ef?"".concat(null!==(C=null==ey?void 0:ey.symbol)&&void 0!==C?C:"--"," per ").concat(null!==(P=null==ej?void 0:ej.symbol)&&void 0!==P?P:"--"):"".concat(null!==(R=null==ej?void 0:ej.symbol)&&void 0!==R?R:"--"," per ").concat(null!==(S=null==ey?void 0:ey.symbol)&&void 0!==S?S:"--")})})]}),"custom"===eu&&(0,l.jsxs)("div",{children:[(0,l.jsxs)(q.Z,{className:"grid-cols-2-fr gap-3",children:[(0,l.jsxs)(D.Z,{className:"border-1.5 ".concat(e0&&e4?"border-[#abc4ff40]":"border-[#DA2EEF]"," rounded-xl py-2 px-4 justify-between items-center"),children:[(0,l.jsx)("div",{className:"text-[#abc4ff80] text-sm",children:"Min"}),(0,l.jsx)(T.Z,{className:"font-medium text-sm text-white flex-grow",inputClassName:"text-right",decimalCount:ej&&ey&&Math.max(null==ej?void 0:ej.decimals,null==ey?void 0:ey.decimals),value:eS,onUserInput:e=>{null!=e&&eE(e)}})]}),(0,l.jsxs)(D.Z,{className:"border-1.5 ".concat(e0&&e4?"border-[#abc4ff40]":"border-[#DA2EEF]"," rounded-xl py-2 px-4 justify-between items-center"),children:[(0,l.jsx)("div",{className:"text-[#abc4ff80] text-sm",children:"Max"}),(0,l.jsx)(T.Z,{className:"font-medium text-sm text-white flex-grow",inputClassName:"text-right",decimalCount:ej&&ey&&Math.max(null==ej?void 0:ej.decimals,null==ey?void 0:ey.decimals),value:eF,onUserInput:e=>{null!=e&&eB(e)}})]})]}),e4?e0?null:(0,l.jsx)("div",{className:"text-[#da2eef] text-sm mt-1",children:"The current price is out of this range."}):(0,l.jsx)("div",{className:"text-[#da2eef] text-sm mt-1",children:"This range is invalid."})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(D.Z,{className:"pt-6 items-center gap-4",children:[(0,l.jsxs)(A.Z,{className:"relative grow border-1.5 border-[#abc4ff40] rounded-xl p-2 gap-1",children:[(0,l.jsx)("div",{className:"absolute -top-7 text-center left-0 right-0 text-sm text-[#abc4ff]",children:"Current position"}),(0,l.jsxs)(D.Z,{className:"justify-between items-center gap-4",children:[(0,l.jsxs)(D.Z,{className:"gap-1.5 items-center",children:[(0,l.jsx)(I.Z,{token:ej,size:"xs"}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:null!==(M=null==ej?void 0:ej.symbol)&&void 0!==M?M:"--"})]}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:ek?(0,K.B)(ek,{decimalLength:null==ej?void 0:ej.decimals}):"--"})]}),(0,l.jsxs)(D.Z,{className:"justify-between items-center gap-4",children:[(0,l.jsxs)(D.Z,{className:"gap-1.5 items-center",children:[(0,l.jsx)(I.Z,{token:ey,size:"xs"}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:null!==(F=null==ey?void 0:ey.symbol)&&void 0!==F?F:"--"})]}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:ew?(0,K.B)(ew,{decimalLength:null==ey?void 0:ey.decimals}):"--"})]})]}),(0,l.jsx)(L.Z,{iconSrc:"/icons/migrate-clmm-right-arrow.svg",className:"w-6 h-6",iconClassName:"w-6 h-6"}),(0,l.jsxs)(A.Z,{className:"relative grow border-1.5 border-[#abc4ff40] border-dashed rounded-xl p-2 gap-1",children:[(0,l.jsx)("div",{className:"absolute -top-7 text-center left-0 right-0 text-sm text-[#abc4ff]",children:"CLMM Pool"}),(0,l.jsxs)(D.Z,{className:"justify-between items-center gap-4",children:[(0,l.jsx)(I.Z,{token:ej,size:"xs"}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:et?(0,K.B)(eU)||"--":"(loading clmm)"})]}),(0,l.jsxs)(D.Z,{className:"justify-between items-center gap-4",children:[(0,l.jsx)(I.Z,{token:ey,size:"xs"}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:et?(0,K.B)(e_)||"--":"(loading clmm)"})]})]}),(0,l.jsx)(L.Z,{iconSrc:"/icons/migrate-clmm-add-icon.svg",className:"w-4 h-4",iconClassName:"w-4 h-4"}),(0,l.jsxs)(A.Z,{className:"relative grow border-1.5 border-[#abc4ff40] border-dashed rounded-xl p-2 gap-1",children:[(0,l.jsx)("div",{className:"absolute -top-7 text-center left-0 right-0 text-sm text-[#abc4ff]",children:"Wallet"}),(0,l.jsxs)(D.Z,{className:"justify-between items-center gap-4",children:[(0,l.jsx)(I.Z,{token:ej,size:"xs"}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:et?(0,K.B)(eW):"(loading clmm)"})]}),(0,l.jsxs)(D.Z,{className:"justify-between items-center gap-4",children:[(0,l.jsx)(I.Z,{token:ey,size:"xs"}),(0,l.jsx)("div",{className:"text-[#abc4ff] text-xs",children:et?(0,K.B)(e$):"(loading clmm)"})]})]})]}),X&&X.rewards.some(e=>(0,_.gt)(e.userPendingReward,0))&&(0,l.jsxs)("div",{className:"text-[#abc4ff] text-sm mt-2",children:["* Migrating will also harvest"," ",(0,l.jsx)("span",{className:"font-bold",children:(0,z.DB)(X.rewards.map(e=>{let{token:t,userPendingReward:n,userHavedReward:a}=e;return a&&t&&(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{children:(0,K.B)(n)})," ",(0,l.jsx)("span",{children:null!==(O=null==n?void 0:n.token.symbol)&&void 0!==O?O:"UNKNOWN"})]},(0,f.ZP)(null==t?void 0:t.mint))}))})," ","in pending rewards."]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(D.Z,{className:"items-center justify-between mb-1",children:[(0,l.jsxs)(D.Z,{className:"items-center gap-2",children:[(0,l.jsx)("div",{className:"text-[#abc4ff] font-medium",children:"Estimated APR"}),(0,l.jsx)(Y.T,{})]}),(0,l.jsx)(B.Z,{tabs:[{label:"24H",value:"24H"},{label:"7D",value:"7D"},{label:"30D",value:"30D"}],selectedValue:eh,onChange:e=>Z.ZP.setState({timeBasis:e.value})})]}),(0,l.jsx)(D.Z,{className:"border-1.5 border-[#abc4ff40] rounded-xl py-2 px-4 justify-between",children:(0,l.jsx)(el,{className:e4?"":"opacity-0",clmmInfo:et,liquidity:eI,lowerTick:eq,upperTick:ez})})]}),(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsx)(E.Z,{className:"w-full frosted-glass-teal",isLoading:eo||eK,onClick:()=>{(0,m.Z)(null!==eq&&null!==ez,"not calc price range successfully"),(0,m.Z)(eJ.current,"not calc amount slippage successfully"),(0,m.Z)(W,"liquidity info not load successfully"),ec(),(function(e){let{tickLower:t,tickUpper:n,liquidity:l,amountSlippageA:a,amountSlippageB:r,farmInfo:i,liquidityInfo:o,liquidityLpAmount:c,currentClmmPool:d}=e;return(0,v.ZP)(async e=>{var v,y;let{transactionCollector:N,baseUtils:{connection:Z,owner:k}}=e,{tokenAccountRawInfos:w}=g.Z.getState();(0,m.Z)(d,"not seleted clmm pool");let{jsonInfos:C}=x.Z.getState(),P=C.find(e=>{let{id:t}=e;return t===(0,f.ZP)(o.id)});(0,m.Z)(P,"can't find liquidity pool");let{innerTransactions:R}=await s.ZpI.makeRemoveAllLpAndCreateClmmPosition({connection:Z,poolKeys:(0,h.R)(P),clmmPoolKeys:d.state,farmInfo:i?{poolKeys:(0,h.R)(i.jsonInfo),amount:null!==(y=null===(v=i.userStakedLpAmount)||void 0===v?void 0:v.raw)&&void 0!==y?y:s.xEJ}:void 0,createPositionInfo:{tickLower:t,tickUpper:n,liquidity:l.mul(new(u())(99)).div(new(u())(100)),amountSlippageA:a,amountSlippageB:r},removeLpAmount:null!=c?c:s.xEJ,userKeys:{tokenAccounts:w,owner:k},computeBudgetConfig:await (0,b.u)(),checkCreateATAOwner:!0}),S=(0,j.AX)(()=>{p.Z.getState().refreshFarmInfos()},{once:!0});N.add(R,{onTxError:()=>(0,j.Ce)(S),onTxSentError:()=>(0,j.Ce)(S),onTxAllSuccess:()=>{setTimeout(()=>{p.Z.getState().refreshFarmInfos(),(0,j.Ce)(S)},1e3)},txHistoryInfo:{title:"Migrate To CLMM",description:"Migrate LP to CLMM position"}})})})({liquidity:eJ.current.liquidity,tickLower:eq,tickUpper:ez,amountSlippageA:eJ.current.amountSlippageBase,amountSlippageB:eJ.current.amountSlippageQuote,currentClmmPool:et,farmInfo:X,liquidityInfo:W,liquidityLpAmount:X?void 0:null==ev?void 0:ev.raw}).then(e=>{let{allSuccess:t}=e;t&&(null==en||en())}).finally(ed)},validators:[{should:et,fallbackProps:{children:"loading..."}},{should:e4}],children:"Migrate"})})]})}function el(e){let{className:t,clmmInfo:n,liquidity:a,lowerTick:r,upperTick:s}=e,i=["#abc4ff","#37bbe0","#2b6aff","#335095"],o=(0,X.HU)({ammPool:n,forceInfo:{liquidity:a,tickLower:r,tickUpper:s}}),c=o&&[o.fee.percentInTotal,...o.rewards.map(e=>e.percentInTotal)];return(0,l.jsxs)(D.Z,{className:(0,ee.m)("gap-2 w-full justify-between text-[#fff] ".concat(n?"":"opacity-0"),t),children:[(0,l.jsxs)(D.Z,{className:"items-center gap-2",children:[(0,l.jsx)("div",{children:(0,U.Z)(null==o?void 0:o.apr)}),(0,l.jsx)("div",{className:"w-[18px] h-[18px] rounded-full flex-none",style:{background:c&&"conic-gradient(".concat(c.map((e,t)=>{let n=c.slice(0,t).reduce((e,t)=>(0,G.y)((0,H.IH)(e,t)),(0,G.y)(0)),l=(0,G.y)((0,H.IH)(n,e));return["".concat(i[t]," ").concat((0,U.Z)(n)),"".concat(i[t]," ").concat((0,U.Z)(l))].join(", ")}).join(", "),")"),WebkitMaskImage:"radial-gradient(transparent 43%, black 44%)",maskImage:"radial-gradient(transparent 43%, black 44%)"}})]}),(0,l.jsxs)(D.Z,{className:"content-around gap-4",children:[(0,l.jsxs)(D.Z,{className:"items-center gap-2",children:[(0,l.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:"#abc4ff"}}),(0,l.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:"Trade Fee"}),(0,l.jsx)("div",{className:"text-sm",children:(0,U.Z)(null==o?void 0:o.fee.apr)})]}),null==o?void 0:o.rewards.map((e,t)=>{let{token:n,apr:a}=e,r=i.slice(1);return(0,l.jsxs)(D.Z,{className:"items-center gap-2",children:[(0,l.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:r[t]}}),(0,l.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:null==n?void 0:n.symbol}),(0,l.jsx)("div",{className:"text-sm",children:(0,U.Z)(a)})]},(0,f.ZP)(null==n?void 0:n.mint))})]})]})}function ea(e){let{title:t,description:n,selected:a,onClick:r}=e;return(0,l.jsxs)("div",{onClick:r,className:"relative border-1.5 ".concat(a?"border-[#39d0d8]":"border-[#abc4ff40]"," rounded-xl py-3 px-4 bg-[#141041] cursor-pointer"),children:[a&&(0,l.jsx)(L.Z,{size:"sm",className:"absolute right-3 top-3",iconSrc:"/icons/migrate-check-icon.svg"}),(0,l.jsx)("div",{className:"font-medium text-base text-white mb-1",children:t}),(0,l.jsx)("div",{className:"font-normal text-sm  ".concat(a?"text-[#ABC4FF]":"text-[#ABC4FF80]"),children:n})]})}},91107:function(e,t,n){n.d(t,{E:function(){return E}});var l,a,r=n(67294),s=n(12351),i=n(19946),o=n(32984),c=n(16723),d=n(61363),u=n(84575),m=n(95389),f=n(39516),p=n(15466),x=n(23784),b=n(46045),v=n(18689),h=n(73781),g=n(31147),j=n(64103),y=n(3855),N=n(94192),Z=((l=Z||{})[l.RegisterOption=0]="RegisterOption",l[l.UnregisterOption=1]="UnregisterOption",l);let k={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,u.z2)(n,e=>e.element.current)}},1(e,t){let n=e.options.slice(),l=e.options.findIndex(e=>e.id===t.id);return -1===l?e:(n.splice(l,1),{...e,options:n})}},w=(0,r.createContext)(null);w.displayName="RadioGroupDataContext";let C=(0,r.createContext)(null);function P(e,t){return(0,o.E)(t.type,k,e,t)}C.displayName="RadioGroupActionsContext";let R=(0,s.yV)(function(e,t){let n=(0,i.M)(),{id:l=`headlessui-radiogroup-${n}`,value:a,defaultValue:o,name:j,onChange:y,by:Z=(e,t)=>e===t,disabled:k=!1,...R}=e,S=(0,h.z)("string"==typeof Z?(e,t)=>(null==e?void 0:e[Z])===(null==t?void 0:t[Z]):Z),[E,M]=(0,r.useReducer)(P,{options:[]}),I=E.options,[A,T]=(0,m.b)(),[q,L]=(0,f.f)(),F=(0,r.useRef)(null),B=(0,x.T)(F,t),[O,D]=(0,g.q)(a,y,o),z=(0,r.useMemo)(()=>I.find(e=>!e.propsRef.current.disabled),[I]),G=(0,r.useMemo)(()=>I.some(e=>S(e.propsRef.current.value,O)),[I,O]),U=(0,h.z)(e=>{var t;if(k||S(e,O))return!1;let n=null==(t=I.find(t=>S(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==D||D(e),!0)});!function({container:e,accept:t,walk:n,enabled:l=!0}){let a=(0,r.useRef)(t),s=(0,r.useRef)(n);(0,r.useEffect)(()=>{a.current=t,s.current=n},[t,n]),(0,c.e)(()=>{if(!e||!l)return;let t=(0,p.r)(e);if(!t)return;let n=a.current,r=s.current,i=Object.assign(e=>n(e),{acceptNode:n}),o=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;o.nextNode();)r(o.currentNode)},[e,l,a,s])}({container:F.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let V=(0,h.z)(e=>{let t=F.current;if(!t)return;let n=(0,p.r)(t),l=I.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case d.R.Enter:(0,v.g)(e.currentTarget);break;case d.R.ArrowLeft:case d.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(l,u.TO.Previous|u.TO.WrapAround)===u.fE.Success){let e=I.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&U(e.propsRef.current.value)}break;case d.R.ArrowRight:case d.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(l,u.TO.Next|u.TO.WrapAround)===u.fE.Success){let e=I.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&U(e.propsRef.current.value)}break;case d.R.Space:{e.preventDefault(),e.stopPropagation();let t=I.find(e=>e.element.current===(null==n?void 0:n.activeElement));t&&U(t.propsRef.current.value)}}}),_=(0,h.z)(e=>(M({type:0,...e}),()=>M({type:1,id:e.id}))),H=(0,r.useMemo)(()=>({value:O,firstOption:z,containsCheckedOption:G,disabled:k,compare:S,...E}),[O,z,G,k,S,E]),K=(0,r.useMemo)(()=>({registerOption:_,change:U}),[_,U]),W=(0,r.useMemo)(()=>({value:O}),[O]),$=(0,r.useRef)(null),J=(0,N.G)();return(0,r.useEffect)(()=>{$.current&&void 0!==o&&J.addEventListener($.current,"reset",()=>{U(o)})},[$,U]),r.createElement(L,{name:"RadioGroup.Description"},r.createElement(T,{name:"RadioGroup.Label"},r.createElement(C.Provider,{value:K},r.createElement(w.Provider,{value:H},null!=j&&null!=O&&(0,v.t)({[j]:O}).map(([e,t],n)=>r.createElement(b._,{features:b.A.Hidden,ref:0===n?e=>{var t;$.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,s.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,s.sY)({ourProps:{ref:B,id:l,role:"radiogroup","aria-labelledby":A,"aria-describedby":q,onKeyDown:V},theirProps:R,slot:W,defaultTag:"div",name:"RadioGroup"})))))});var S=((a=S||{})[a.Empty=1]="Empty",a[a.Active=2]="Active",a);let E=Object.assign(R,{Option:(0,s.yV)(function(e,t){var n;let l=(0,i.M)(),{id:a=`headlessui-radiogroup-option-${l}`,value:o,disabled:d=!1,...u}=e,p=(0,r.useRef)(null),b=(0,x.T)(p,t),[v,g]=(0,m.b)(),[N,Z]=(0,f.f)(),{addFlag:k,removeFlag:P,hasFlag:R}=function(e=0){let[t,n]=(0,r.useState)(e);return{addFlag:(0,r.useCallback)(e=>n(t=>t|e),[t]),hasFlag:(0,r.useCallback)(e=>!!(t&e),[t]),removeFlag:(0,r.useCallback)(e=>n(t=>t&~e),[n]),toggleFlag:(0,r.useCallback)(e=>n(t=>t^e),[n])}}(1),S=(0,y.E)({value:o,disabled:d}),E=function e(t){let n=(0,r.useContext)(w);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option"),M=function e(t){let n=(0,r.useContext)(C);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option");(0,c.e)(()=>M.registerOption({id:a,element:p,propsRef:S}),[a,M,p,e]);let I=(0,h.z)(e=>{var t;if((0,j.P)(e.currentTarget))return e.preventDefault();M.change(o)&&(k(2),null==(t=p.current)||t.focus())}),A=(0,h.z)(e=>{if((0,j.P)(e.currentTarget))return e.preventDefault();k(2)}),T=(0,h.z)(()=>P(2)),q=(null==(n=E.firstOption)?void 0:n.id)===a,L=E.disabled||d,F=E.compare(E.value,o),B={ref:b,id:a,role:"radio","aria-checked":F?"true":"false","aria-labelledby":v,"aria-describedby":N,"aria-disabled":!!L||void 0,tabIndex:L?-1:F||!E.containsCheckedOption&&q?0:-1,onClick:L?void 0:I,onFocus:L?void 0:A,onBlur:L?void 0:T},O=(0,r.useMemo)(()=>({checked:F,disabled:L,active:R(2)}),[F,L,R]);return r.createElement(Z,{name:"RadioGroup.Description"},r.createElement(g,{name:"RadioGroup.Label"},(0,s.sY)({ourProps:B,theirProps:u,slot:O,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:m._,Description:f.d})}}]);
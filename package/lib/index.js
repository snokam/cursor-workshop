!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.snokam=r():e.snokam=r()}(this,(()=>(()=>{"use strict";var e={104:(e,r,t)=>{t.d(r,{Ay:()=>l,JV:()=>o,Q1:()=>n});var n,o,i=t(732),s=t(619);!function(e){e.Inherit="inherit",e.DarkBlue="#071d41",e.Blue="#67DAFD",e.LightBlue="#E1F8FF",e.LightGreen="#ACFFA4",e.DarkGreen="#11CF7F"}(n||(n={})),function(e){e.DarkBlue="#071d41",e.LightBlue="#E1F8FF"}(o||(o={}));const a=(0,s.createTheme)({typography:{fontFamily:"DMSans-Light"},palette:{primary:{main:o.DarkBlue},secondary:{main:o.LightBlue}},components:{MuiTooltip:{styleOverrides:{tooltip:{color:"var(--color-light-blue)",backgroundColor:"var(--color-primary)"}}}}}),l={theme:a,Provider:({children:e})=>(0,i.jsx)(s.ThemeProvider,{theme:a,children:e})}},223:(e,r,t)=>{var n,o,i,s,a;t.d(r,{ES:()=>o,Po:()=>a,Yq:()=>s,gh:()=>n,yX:()=>i}),function(e){e.Light="light",e.Dark="dark"}(n||(n={})),function(e){e.Wave="wave",e.Curve="curve"}(o||(o={})),function(e){e.Top="top",e.Bottom="bottom"}(i||(i={})),function(e){e.None="none",e.Small="small",e.Medium="medium",e.Large="large"}(s||(s={})),function(e){e.Normal="normal",e.Narrow="narrow",e.ExtraNarrow="extraNarrow"}(a||(a={}))},349:e=>{e.exports=require("@emotion/styled")},352:(e,r,t)=>{t.r(r),t.d(r,{BaseColor:()=>o.JV,Breadcrumbs:()=>d,Color:()=>o.Q1,CommonMetaTags:()=>m,CommonScripts:()=>g,Layout:()=>n.Ay,LoaderVariant:()=>y,LogoLoader:()=>L,PageLoader:()=>$,Theme:()=>o.Ay});var n=t(727),o=t(104),i=t(732),s=t(619);const a=require("next/link");var l=t.n(a),c=t(710);const p={Link:{display:"flex",alignItems:"center",fontSize:"20px",gap:"0.5rem",color:"inherit"},Breadcrumbs:{marginBottom:"1rem",color:"inherit"}},d=({crumbs:e=[],basePath:r=""})=>(0,i.jsxs)(s.Breadcrumbs,{"aria-label":"breadcrumb",separator:(0,i.jsx)(c.A,{fontSize:"small"}),sx:p.Breadcrumbs,children:[e.map((({href:e,name:t,icon:n})=>(0,i.jsxs)(s.Link,{href:`${r}${e}`,component:l(),sx:p.Link,children:[n&&n,t]},e))),(0,i.jsx)(s.Typography,{fontSize:"inherit"})]}),m=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"stylesheet",href:"https://ressurser.snokam.no/global.css"}),(0,i.jsx)("link",{rel:"icon",href:"https://ressurser.snokam.no/favicon.ico",media:"(prefers-color-scheme:no-preference)"}),(0,i.jsx)("link",{rel:"icon",href:"https://ressurser.snokam.no/favicon.ico",media:"(prefers-color-scheme: light)"}),(0,i.jsx)("link",{rel:"icon",href:"https://ressurser.snokam.no/favicon-white.ico",media:"(prefers-color-scheme: dark)"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https://ressurser.snokam.no/favicon-16x16.png",media:"(prefers-color-scheme: light)"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https://ressurser.snokam.no/favicon-16x16-white.png",media:"(prefers-color-scheme: dark)"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https://ressurser.snokam.no/favicon-32x32.png",media:"(prefers-color-scheme: light)"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https://ressurser.snokam.no/favicon-32x32-white.png",media:"(prefers-color-scheme: dark)"})]}),u=require("next/script");var h=t.n(u);const g=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h(),{id:"google-tag-manager",strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=G-6WLLK1H0HW"}),(0,i.jsx)(h(),{id:"google-analytics",strategy:"lazyOnload",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){window.dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-6WLLK1H0HW');\n        "})]});var f=t(349),x=t.n(f);const v={Container:x().div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`};var y,w=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};!function(e){e.Slide="slide",e.Pulse="pulse",e.TriplePulse="triple-pulse"}(y||(y={}));const b=e=>{var r=w(e,[]);return(0,i.jsxs)("svg",Object.assign({width:"50",height:"50",viewBox:"-100 -100 676 669",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r,{children:[(0,i.jsx)("g",{id:"part1",style:{"--order":1},children:(0,i.jsx)("path",{d:"M160.487 12.4386L11.4039 179.477C-2.54697 195.011 -1.62397 205.881 13.4473 219.622L41.5808 245.348C56.6375 259.099 67.295 258.886 81.2495 243.339L230.333 76.302C244.282 60.7264 243.358 49.8556 228.289 36.1554L200.149 10.43C185.097 -3.29097 174.44 -3.07785 160.487 12.4386Z"})}),(0,i.jsx)("g",{id:"part2",style:{"--order":2},children:(0,i.jsx)("path",{d:"M335.181 54.0359L69.5597 351.124C55.5026 366.81 56.4967 377.61 71.8745 391.419L100.66 417.075C115.966 430.755 126.979 430.471 141.025 414.814L406.646 117.725C420.702 102.076 419.636 91.1342 404.331 77.4312L375.545 51.7757C360.167 38.0599 349.225 38.3442 335.181 54.0359Z"})}),(0,i.jsx)("g",{id:"part3",style:{"--order":3},children:(0,i.jsx)("path",{d:"M395.133 225.624L245.791 392.428C231.849 407.948 232.702 418.82 247.772 432.577L275.865 458.346C290.892 472.107 301.549 471.965 315.536 456.4L464.878 289.595C478.82 274.16 477.968 263.219 462.898 249.446L434.805 223.677C419.777 209.932 409.12 210.073 395.133 225.624Z"})})]}))},j=x()(b)`
  color: ${({color:e})=>null!=e?e:o.Q1.Inherit};

  g {
    opacity: 0;
    animation: dropIn 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: calc(var(--order) * 200ms);
    animation-iteration-count: infinite;
  }

  @keyframes dropIn {
    0% {
      opacity: 0;
      transform: translate(20%, -20%);
    }

    40%,
    60% {
      opacity: 1;
      transform: translate(0%);
    }

    100% {
      opacity: 0;
      transform: translate(-20%, 20%);
    }
  }
`,k=x()(b)`
  color: ${({color:e})=>null!=e?e:o.Q1.Inherit};
  g {
    transform-origin: center;
    animation: pulse 1.2s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
`,C=x()(b)`
  color: ${({color:e})=>null!=e?e:o.Q1.Inherit};
  g {
    transform-origin: center;
    animation: pulse 1.2s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: calc(var(--order) * 400ms);
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    33% {
      transform: scale(1.1);
    }

    66% {
      transform: scale(1);
    }
  }
`,L=e=>{var{variant:r}=e,t=w(e,["variant"]);switch(r){case y.TriplePulse:return(0,i.jsx)(C,Object.assign({},t));case y.Pulse:return(0,i.jsx)(k,Object.assign({},t));default:return(0,i.jsx)(j,Object.assign({},t))}},$=e=>(0,i.jsx)(v.Container,{children:(0,i.jsx)(L,Object.assign({},e))})},619:e=>{e.exports=require("@mui/material")},710:(e,r,t)=>{t.d(r,{A:()=>i});const n=require("@mui/material/utils");var o=t(732);const i=(0,n.createSvgIcon)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext")},727:(e,r,t)=>{t.d(r,{Ay:()=>L});var n=t(349),o=t.n(n),i=t(223);const s=require("@emotion/react"),a=e=>{switch(e){case i.Yq.None:return"0";case i.Yq.Large:return"6rem";case i.Yq.Medium:return"4rem";case i.Yq.Small:default:return"2rem"}},l={Section:o().div`
  display: flex;
  flex-direction: column;

  ${({stretchItems:e=!1})=>e?s.css`
          align-items: stretch;
        `:s.css`
          align-items: flex-start;
        `}

  ${({padding:e=i.Yq.Small})=>{var r,t;if("object"==typeof e){const n=a(null!==(r=e.top)&&void 0!==r?r:i.Yq.None),o=a(null!==(t=e.bottom)&&void 0!==t?t:i.Yq.None);return s.css`
        padding-top: ${n};
        padding-bottom: ${o};
      `}const n=a(e);return s.css`
      padding: ${n} 0;
    `}}
`,Content:o().div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 2;
  width: 100%;

  @media only screen and (min-width: 576px) {
    padding: 2rem;
  }

  ${({width:e})=>{switch(e){case i.Po.ExtraNarrow:return s.css`
          max-width: 880px;
        `;case i.Po.Narrow:return s.css`
          max-width: 1080px;
        `;case i.Po.Normal:default:return s.css`
          max-width: 1272px;
        `}}}
`};var c=t(732);const p={Container:o().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({theme:e})=>e===i.gh.Dark?s.css`
          color: var(--color-light-blue);
          background-color: var(--color-primary);
        `:s.css`
          color: var(--color-primary);
          background-color: var(--color-light-blue);
        `}
`,Children:o().div``};var d=t(352);const m=o().div`
  position: absolute;
  z-index: 2;
  height: calc(100vw * ${({sizeInPercent:e})=>null!=e?e:.25});
  width: calc(100vw * ${({sizeInPercent:e})=>null!=e?e:.25});
  right: -1px;
  top: -1px;

  ${({theme:e})=>{const r=`\n      <svg \n        xmlns="http://www.w3.org/2000/svg" \n        viewBox="0 0 100 100" \n        preserveAspectRatio="none"\n      >\n        <path\n          fill="${e===i.gh.Dark?d.Color.LightBlue:d.Color.DarkBlue}"\n          fill-rule="evenodd"\n          d="\n            M 0,0 \n            H 100 \n            V 100 \n            H 0 \n            Z\n            M 0,0\n            A 100,100 0 0,1 100,100\n            L 0,100\n            Z\n          "\n        />\n      </svg>\n    `,t=`data:image/svg+xml;charset=utf8,${encodeURIComponent(r)}`;return s.css`
      background: url("${t}") no-repeat;
      background-size: cover;
      background-position: center;
    `}}
`,u={Container:o().div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  height: calc(100vw * ${({sizeInPercent:e})=>null!=e?e:.25});
  width: 100vw;
  right: 0;

  ${({position:e})=>e===i.yX.Top?s.css`
          top: 0px;
        `:s.css`
          bottom: 0px;
        `}
`,Content:o().div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  transform: ${({flipY:e,flipX:r})=>`${e?"rotateY(180deg)":""} ${r?"rotateX(180deg)":""}`.trim()};
`,Curve:m},h=({theme:e,flipY:r=!1,position:t,sizeInPercent:n})=>(0,c.jsx)(u.Container,{position:t,sizeInPercent:n,children:(0,c.jsx)(u.Content,{flipY:r,flipX:t===i.yX.Bottom,children:(0,c.jsx)(u.Curve,{theme:e,sizeInPercent:n})})});var g=t(104);const f=o().div`
  height: 100%;
  width: 100%;

  ${()=>{const e=`data:image/svg+xml;charset=utf8,${encodeURIComponent('\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" preserveAspectRatio="none">\n        <path d="M0,40 C100,40 100,0 200,0 C300,0 300,40 400,40 L400,80 L0,80 Z"  fill="black" transform="scale(1,-1) translate(0,-80)" />\n      </svg>')}`;return s.css`
      mask: url("${e}") repeat-x;
      mask-position: calc(100vw / 2);
      mask-size: 2500px 100%;
    `}}
`,x=o().div`
  position: absolute;
  z-index: 0;

  ${({theme:e})=>e===i.gh.Dark?s.css`
          background-color: var(--color-light-blue);
        `:s.css`
          background-color: var(--color-primary);
        `}

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
`,v=o().div`
  position: absolute;
  z-index: 1;
  top: 50px;
  height: 200px;
  width: 100%;

  ${({color:e})=>{const r=`data:image/svg+xml;charset=utf8,${encodeURIComponent(`\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 40" preserveAspectRatio="none">\n        <path d="M0,40 C100,40 100,0 200,0 C300,0 300,40 400,40" fill="${e}" />\n      </svg>`)}`;return s.css`
      background: url("${r}") no-repeat;
      background-position: calc(50% - 500px) 50%;
      background-size: 2500px 100%;
    `}}
`,y={Container:o().div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  height: 200px;
  width: 100%;

  ${({position:e})=>e===i.yX.Top?s.css`
          top: -100px;
        `:s.css`
          bottom: -100px;
        `}
`,Content:o().div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  transform: ${({flipY:e,flipX:r})=>`${e?"rotateY(180deg)":""} ${r?"rotateX(180deg)":""}`.trim()};
`,Curve:f,Circle:v,Background:x},w=({position:e,theme:r,flipY:t=!1,flipX:n,color:o=g.Q1.DarkGreen})=>{const s=null!=n?n:e===i.yX.Bottom,a=e===i.yX.Top&&s||e===i.yX.Bottom&&!s,l=a?r===i.gh.Dark?i.gh.Light:i.gh.Dark:r;return(0,c.jsx)(y.Container,{position:e,children:(0,c.jsx)(y.Content,{flipY:t,flipX:s,children:(0,c.jsxs)(y.Curve,{children:[(0,c.jsx)(y.Circle,{color:o}),(0,c.jsx)(y.Background,{theme:a?l:r})]})})})},b=({transition:e,theme:r,position:t})=>{switch(e.type){case i.ES.Wave:return(0,c.jsx)(w,{theme:r,position:t,flipY:e.flipY,flipX:e.flipX,color:e.color});case i.ES.Curve:return(0,c.jsx)(h,{theme:r,position:t,flipY:e.flipY,sizeInPercent:e.sizeInPercent});default:return null}};const j=l.Section,k=l.Content;var C;!function(e){e[e.xs=576]="xs",e[e.sm=768]="sm",e[e.md=992]="md",e[e.lg=1272]="lg",e[e.xl=1920]="xl"}(C||(C={}));const L={Container:e=>{var{children:r,as:t="div",theme:n=i.gh.Dark,transitions:o}=e,s=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(e,["children","as","theme","transitions"]);return(0,c.jsxs)(p.Container,Object.assign({as:t,theme:n},s,{children:[r,(null==o?void 0:o.top)&&(0,c.jsx)(b,{theme:n,transition:o.top,position:i.yX.Top}),(null==o?void 0:o.bottom)&&(0,c.jsx)(b,{theme:n,transition:o.bottom,position:i.yX.Bottom})]}))},Section:j,Content:k}},732:e=>{e.exports=require("react/jsx-runtime")}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}return t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(352)})()));
//# sourceMappingURL=index.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.snokam=t():e.snokam=t()}(this,(()=>(()=>{"use strict";var e={104:(e,t,o)=>{o.d(t,{Q1:()=>n}),o(732);var n,r,i=o(619);!function(e){e.Inherit="inherit",e.DarkBlue="#071d41",e.Blue="#67DAFD",e.LightBlue="#E1F8FF",e.LightGreen="#ACFFA4",e.DarkGreen="#11CF7F"}(n||(n={})),function(e){e.DarkBlue="#071d41",e.LightBlue="#E1F8FF"}(r||(r={})),(0,i.createTheme)({typography:{fontFamily:"DMSans-Light"},palette:{primary:{main:r.DarkBlue},secondary:{main:r.LightBlue}},components:{MuiTooltip:{styleOverrides:{tooltip:{color:"var(--color-light-blue)",backgroundColor:"var(--color-primary)"}}}}})},223:(e,t,o)=>{var n,r,i,a,s;o.d(t,{ES:()=>r,Po:()=>s,Yq:()=>a,gh:()=>n,yX:()=>i}),function(e){e.Light="light",e.Dark="dark"}(n||(n={})),function(e){e.Wave="wave",e.Curve="curve"}(r||(r={})),function(e){e.Top="top",e.Bottom="bottom"}(i||(i={})),function(e){e.None="none",e.Small="small",e.Medium="medium",e.Large="large"}(a||(a={})),function(e){e.Normal="normal",e.Narrow="narrow",e.ExtraNarrow="extraNarrow"}(s||(s={}))},349:e=>{e.exports=require("@emotion/styled")},352:(e,t,o)=>{o.d(t,{Color:()=>n.Q1}),o(727);var n=o(104),r=o(732);o(619),require("next/link"),require("next/script");var i=o(349),a=o.n(i);a().div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;var s;!function(e){e.Slide="slide",e.Pulse="pulse",e.TriplePulse="triple-pulse"}(s||(s={}));const l=e=>{var t=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,[]);return(0,r.jsxs)("svg",Object.assign({width:"50",height:"50",viewBox:"-100 -100 676 669",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},t,{children:[(0,r.jsx)("g",{id:"part1",style:{"--order":1},children:(0,r.jsx)("path",{d:"M160.487 12.4386L11.4039 179.477C-2.54697 195.011 -1.62397 205.881 13.4473 219.622L41.5808 245.348C56.6375 259.099 67.295 258.886 81.2495 243.339L230.333 76.302C244.282 60.7264 243.358 49.8556 228.289 36.1554L200.149 10.43C185.097 -3.29097 174.44 -3.07785 160.487 12.4386Z"})}),(0,r.jsx)("g",{id:"part2",style:{"--order":2},children:(0,r.jsx)("path",{d:"M335.181 54.0359L69.5597 351.124C55.5026 366.81 56.4967 377.61 71.8745 391.419L100.66 417.075C115.966 430.755 126.979 430.471 141.025 414.814L406.646 117.725C420.702 102.076 419.636 91.1342 404.331 77.4312L375.545 51.7757C360.167 38.0599 349.225 38.3442 335.181 54.0359Z"})}),(0,r.jsx)("g",{id:"part3",style:{"--order":3},children:(0,r.jsx)("path",{d:"M395.133 225.624L245.791 392.428C231.849 407.948 232.702 418.82 247.772 432.577L275.865 458.346C290.892 472.107 301.549 471.965 315.536 456.4L464.878 289.595C478.82 274.16 477.968 263.219 462.898 249.446L434.805 223.677C419.777 209.932 409.12 210.073 395.133 225.624Z"})})]}))};a()(l)`
  color: ${({color:e})=>null!=e?e:n.Q1.Inherit};

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
`,a()(l)`
  color: ${({color:e})=>null!=e?e:n.Q1.Inherit};
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
`,a()(l)`
  color: ${({color:e})=>null!=e?e:n.Q1.Inherit};
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
`},619:e=>{e.exports=require("@mui/material")},727:(e,t,o)=>{o.d(t,{Rp:()=>k,Ay:()=>$});var n=o(349),r=o.n(n),i=o(223);const a=require("@emotion/react"),s=e=>{switch(e){case i.Yq.None:return"0";case i.Yq.Large:return"6rem";case i.Yq.Medium:return"4rem";case i.Yq.Small:default:return"2rem"}},l={Section:r().div`
  display: flex;
  flex-direction: column;

  ${({stretchItems:e=!1})=>e?a.css`
          align-items: stretch;
        `:a.css`
          align-items: flex-start;
        `}

  ${({padding:e=i.Yq.Small})=>{var t,o;if("object"==typeof e){const n=s(null!==(t=e.top)&&void 0!==t?t:i.Yq.None),r=s(null!==(o=e.bottom)&&void 0!==o?o:i.Yq.None);return a.css`
        padding-top: ${n};
        padding-bottom: ${r};
      `}const n=s(e);return a.css`
      padding: ${n} 0;
    `}}
`,Content:r().div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 2;
  width: 100%;

  @media only screen and (min-width: 576px) {
    padding: 2rem;
  }

  ${({width:e})=>{switch(e){case i.Po.ExtraNarrow:return a.css`
          max-width: 880px;
        `;case i.Po.Narrow:return a.css`
          max-width: 1080px;
        `;case i.Po.Normal:default:return a.css`
          max-width: 1272px;
        `}}}
`};var c=o(732);const p={Container:r().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({theme:e})=>e===i.gh.Dark?a.css`
          color: var(--color-light-blue);
          background-color: var(--color-primary);
        `:a.css`
          color: var(--color-primary);
          background-color: var(--color-light-blue);
        `}
`,Children:r().div``};var d=o(352);const m=r().div`
  position: absolute;
  z-index: 2;
  height: calc(100vw * ${({sizeInPercent:e})=>null!=e?e:.25});
  width: calc(100vw * ${({sizeInPercent:e})=>null!=e?e:.25});
  right: -1px;
  top: -1px;

  ${({theme:e})=>{const t=`\n      <svg \n        xmlns="http://www.w3.org/2000/svg" \n        viewBox="0 0 100 100" \n        preserveAspectRatio="none"\n      >\n        <path\n          fill="${e===i.gh.Dark?d.Color.LightBlue:d.Color.DarkBlue}"\n          fill-rule="evenodd"\n          d="\n            M 0,0 \n            H 100 \n            V 100 \n            H 0 \n            Z\n            M 0,0\n            A 100,100 0 0,1 100,100\n            L 0,100\n            Z\n          "\n        />\n      </svg>\n    `,o=`data:image/svg+xml;charset=utf8,${encodeURIComponent(t)}`;return a.css`
      background: url("${o}") no-repeat;
      background-size: cover;
      background-position: center;
    `}}
`,u={Container:r().div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  height: calc(100vw * ${({sizeInPercent:e})=>null!=e?e:.25});
  width: 100vw;
  right: 0;

  ${({position:e})=>e===i.yX.Top?a.css`
          top: 0px;
        `:a.css`
          bottom: 0px;
        `}
`,Content:r().div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  transform: ${({flipY:e,flipX:t})=>`${e?"rotateY(180deg)":""} ${t?"rotateX(180deg)":""}`.trim()};
`,Curve:m},h=({theme:e,flipY:t=!1,position:o,sizeInPercent:n})=>(0,c.jsx)(u.Container,{position:o,sizeInPercent:n,children:(0,c.jsx)(u.Content,{flipY:t,flipX:o===i.yX.Bottom,children:(0,c.jsx)(u.Curve,{theme:e,sizeInPercent:n})})});var f=o(104);const g=r().div`
  height: 100%;
  width: 100%;

  ${()=>{const e=`data:image/svg+xml;charset=utf8,${encodeURIComponent('\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" preserveAspectRatio="none">\n        <path d="M0,40 C100,40 100,0 200,0 C300,0 300,40 400,40 L400,80 L0,80 Z"  fill="black" transform="scale(1,-1) translate(0,-80)" />\n      </svg>')}`;return a.css`
      mask: url("${e}") repeat-x;
      mask-position: calc(100vw / 2);
      mask-size: 2500px 100%;
    `}}
`,v=r().div`
  position: absolute;
  z-index: 0;

  ${({theme:e})=>e===i.gh.Dark?a.css`
          background-color: var(--color-light-blue);
        `:a.css`
          background-color: var(--color-primary);
        `}

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
`,x=r().div`
  position: absolute;
  z-index: 1;
  top: 50px;
  height: 200px;
  width: 100%;

  ${({color:e})=>{const t=`data:image/svg+xml;charset=utf8,${encodeURIComponent(`\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 40" preserveAspectRatio="none">\n        <path d="M0,40 C100,40 100,0 200,0 C300,0 300,40 400,40" fill="${e}" />\n      </svg>`)}`;return a.css`
      background: url("${t}") no-repeat;
      background-position: calc(50% - 500px) 50%;
      background-size: 2500px 100%;
    `}}
`,y={Container:r().div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  height: 200px;
  width: 100%;

  ${({position:e})=>e===i.yX.Top?a.css`
          top: -100px;
        `:a.css`
          bottom: -100px;
        `}
`,Content:r().div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  transform: ${({flipY:e,flipX:t})=>`${e?"rotateY(180deg)":""} ${t?"rotateX(180deg)":""}`.trim()};
`,Curve:g,Circle:x,Background:v},w=({position:e,theme:t,flipY:o=!1,flipX:n,color:r=f.Q1.DarkGreen})=>{const a=null!=n?n:e===i.yX.Bottom,s=e===i.yX.Top&&a||e===i.yX.Bottom&&!a,l=s?t===i.gh.Dark?i.gh.Light:i.gh.Dark:t;return(0,c.jsx)(y.Container,{position:e,children:(0,c.jsx)(y.Content,{flipY:o,flipX:a,children:(0,c.jsxs)(y.Curve,{children:[(0,c.jsx)(y.Circle,{color:r}),(0,c.jsx)(y.Background,{theme:s?l:t})]})})})},b=({transition:e,theme:t,position:o})=>{switch(e.type){case i.ES.Wave:return(0,c.jsx)(w,{theme:t,position:o,flipY:e.flipY,flipX:e.flipX,color:e.color});case i.ES.Curve:return(0,c.jsx)(h,{theme:t,position:o,flipY:e.flipY,sizeInPercent:e.sizeInPercent});default:return null}};const C=l.Section,j=l.Content;var k;!function(e){e[e.xs=576]="xs",e[e.sm=768]="sm",e[e.md=992]="md",e[e.lg=1272]="lg",e[e.xl=1920]="xl"}(k||(k={}));const $={Container:e=>{var{children:t,as:o="div",theme:n=i.gh.Dark,transitions:r}=e,a=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["children","as","theme","transitions"]);return(0,c.jsxs)(p.Container,Object.assign({as:o,theme:n},a,{children:[t,(null==r?void 0:r.top)&&(0,c.jsx)(b,{theme:n,transition:r.top,position:i.yX.Top}),(null==r?void 0:r.bottom)&&(0,c.jsx)(b,{theme:n,transition:r.bottom,position:i.yX.Bottom})]}))},Section:C,Content:j}},732:e=>{e.exports=require("react/jsx-runtime")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};o.r(n),o.d(n,{Breakpoints:()=>r.Rp,LayoutTheme:()=>i.gh,Padding:()=>i.Yq,Position:()=>i.yX,TransitionType:()=>i.ES,Width:()=>i.Po,default:()=>a});var r=o(727),i=o(223);const a=r.Ay;return n})()));
//# sourceMappingURL=layout.js.map
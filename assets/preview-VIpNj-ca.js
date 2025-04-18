import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{s as a}from"./usePlatform-CpmMXCo-.js";import{R as f,r as l}from"./index-2yJIXLcc.js";const m=(t,r)=>(a(r.globals.platform),o.jsx(t,{})),n=t=>o.jsx(f.StrictMode,{children:o.jsx(t,{})}),i=`
  --tg-theme-text-color: #ffffff;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-subtitle-text-color: #b1c3d5;
  --tg-theme-section-header-text-color: #b1c3d5;
  --tg-theme-accent-text-color: #2ea6ff;
  --tg-theme-destructive-text-color: #ef5b5b;

  --tg-theme-bg-color: #18222d;
  --tg-theme-header-bg-color: #131415;
  --tg-theme-secondary-bg-color: #131415;
  --tg-theme-section-bg-color: #18222d;

  --tg-theme-link-color: #62bcf9;
  --tg-theme-button-color: #2ea6ff;
  --tg-theme-hint-color: #b1c3d5;
  --tg-theme-section-separator-color: #545458; 
`,g=`
  --tg-theme-text-color: #000000;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-subtitle-text-color: #999999;
  --tg-theme-section-header-text-color: #6d6d71;
  --tg-theme-accent-text-color: #2481cc;  
  --tg-theme-destructive-text-color: #ff3b30;

  --tg-theme-bg-color: #ffffff;
  --tg-theme-header-bg-color: #efeff3;
  --tg-theme-secondary-bg-color: #efeff3;
  --tg-theme-section-bg-color: #ffffff;
  
  --tg-theme-button-color: #2481cc;
  --tg-theme-link-color: #2481cc;
  --tg-theme-hint-color: #999999;
  --tg-theme-section-separator-color: #c8c7cc;
`,h=(t,r)=>{const c=r.globals.theme||"light";return l.useEffect(()=>{const e=document.querySelector("html");e==null||e.setAttribute("style",c==="dark"?i:g)},[c]),l.useEffect(()=>{document.querySelectorAll(".docs-story").forEach(s=>{s.setAttribute("style",`
          background: var(--tg-theme-secondary-bg-color, white);
          color: var(--tg-theme-text-color, black);
        `)})},[]),o.jsx(t,{})},x={tags:["autodocs"],parameters:{docs:{inlineStories:!0,source:{state:"open"}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{disable:!0},centered:!0},globalTypes:{platform:{name:"Platform",description:"Platform for components",defaultValue:"base",toolbar:{icon:"mobile",items:["base","ios"],title:"Platform",dynamicTitle:!0}},theme:{description:"Global theme for components",defaultValue:"light",toolbar:{title:"Theme",icon:"circlehollow",items:["light","dark"],dynamicTitle:!0}}},decorators:[n,m,h]};export{x as default};

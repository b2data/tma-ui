import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{A as c}from"./WarningIcon-nkyPbtWt.js";import{h as B,s as C}from"./control-BLWnEcik.js";import{B as n}from"./Button-Du01PgZH.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./Spinner-R9NLJK8d.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";import"./Typography-C-8rOji7.js";import"./react-C2pAPbtc.js";const P={title:"Blocks/Button",component:n,parameters:{layout:"centered"},argTypes:{...B("startAdornment","endAdornment","Component"),...C(["children"],"text")}},o={args:{children:"Action"}},l=({label:r,...t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:100},children:r}),e.jsx(n,{color:"primary",...t}),e.jsx(n,{color:"secondary",...t}),e.jsx(n,{color:"error",...t}),e.jsx(n,{color:"default",...t})]}),a={args:{children:"Action"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(l,{label:"Contained",...r}),e.jsx(l,{label:"Outlined",variant:"outlined",...r}),e.jsx(l,{label:"Text",variant:"text",...r})]})},s={args:{startAdornment:e.jsx(c,{}),endAdornment:e.jsx(c,{}),children:"Create channel"},render:r=>e.jsx(n,{...r})},i={args:{variant:"text",children:"No hello",target:"_blank",href:"https://nohello.net/en/",Component:"a"}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Action"
  }
} satisfies Story`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Action"
  },
  render: props => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 8
  }}>
      <ButtonVariants label="Contained" {...props} />
      <ButtonVariants label="Outlined" variant="outlined" {...props} />
      <ButtonVariants label="Text" variant="text" {...props} />
    </div>
} satisfies Story`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,f,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    startAdornment: <AddIcon />,
    endAdornment: <AddIcon />,
    children: "Create channel"
  },
  render: args => <Button {...args} />
} satisfies Story`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,A,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "text",
    children: "No hello",
    target: "_blank",
    href: "https://nohello.net/en/",
    Component: "a"
  }
} satisfies Story`,...(v=(A=i.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};const W=["Playground","Variants","WithIcon","Link"];export{i as Link,o as Playground,a as Variants,s as WithIcon,W as __namedExportsOrder,P as default};
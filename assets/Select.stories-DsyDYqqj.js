import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./Select-D1cVnSDP.js";import{L as m}from"./List-CPa4ftU7.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./index-2yJIXLcc.js";import"./dayjs.min-qj4fShTU.js";import"./usePlatform-CpmMXCo-.js";import"./FormInput-BXR-3vMc.js";import"./function-0hL7Y8C6.js";import"./react-B_12zFKA.js";import"./Typography-C9RDb2oI.js";const O={title:"Forms/Select",component:t,parameters:{layout:"fullscreen"}},s={args:{header:"Select",children:[e.jsx("option",{children:"Hello"},1),e.jsx("option",{children:"Okay"},2)]},render:r=>e.jsx(m,{style:{padding:16,background:"var(--tg-theme-bg-color)"},children:e.jsx(t,{...r})})};var n;const o={args:{header:"Select",children:(n=s.args)==null?void 0:n.children},render:r=>e.jsxs(m,{style:{padding:16,background:"var(--tg-theme-bg-color)"},children:[e.jsx(t,{...r}),e.jsx(t,{...r,status:"error"}),e.jsx(t,{...r,status:"focused"}),e.jsx(t,{...r,disabled:!0})]})};var a,i,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    header: "Select",
    children: [<option key={1}>Hello</option>, <option key={2}>Okay</option>]
  },
  render: props => <List style={{
    padding: 16,
    background: "var(--tg-theme-bg-color)"
  }}>
      <Select {...props} />
    </List>
} satisfies Story`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    header: "Select",
    children: Playground.args?.children
  },
  render: props => <List style={{
    padding: 16,
    background: "var(--tg-theme-bg-color)"
  }}>
      <Select {...props} />
      <Select {...props} status="error" />
      <Select {...props} status="focused" />
      <Select {...props} disabled />
    </List>
} satisfies Story`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const P=["Playground","Variants"];export{s as Playground,o as Variants,P as __namedExportsOrder,O as default};

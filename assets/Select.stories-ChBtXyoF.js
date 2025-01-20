import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{S as t}from"./Select-BCV0wFo5.js";import{L as m}from"./List-QmkSd9S4.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./file-zip-B9x0q0B1.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./FormInput-DD8o44sk.js";import"./function-0hL7Y8C6.js";import"./react-C2pAPbtc.js";import"./Typography-CrhEa1Is.js";const O={title:"Forms/Select",component:t,parameters:{layout:"fullscreen"}},s={args:{header:"Select",children:[e.jsx("option",{children:"Hello"},1),e.jsx("option",{children:"Okay"},2)]},render:r=>e.jsx(m,{style:{padding:16,background:"var(--tg-theme-bg-color)"},children:e.jsx(t,{...r})})};var n;const o={args:{header:"Select",children:(n=s.args)==null?void 0:n.children},render:r=>e.jsxs(m,{style:{padding:16,background:"var(--tg-theme-bg-color)"},children:[e.jsx(t,{...r}),e.jsx(t,{...r,status:"error"}),e.jsx(t,{...r,status:"focused"}),e.jsx(t,{...r,disabled:!0})]})};var a,i,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

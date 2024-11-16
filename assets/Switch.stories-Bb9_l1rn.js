import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{S as t}from"./Switch-D40mlCOQ.js";import{P as m}from"./Placeholder-BEKt0QMe.js";import{S as l}from"./Section-BoRpuEpk.js";import{S as h}from"./SectionItem-DaSia-lo.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./VisuallyHidden-DVDVm8UN.js";import"./react-C2pAPbtc.js";import"./Typography-tCI8f8sN.js";import"./SectionHeader-CsVZYXXU.js";import"./Divider-D1dDgo39.js";import"./SectionFooter-CWFWA3TC.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";const T={title:"Forms/Switch",component:t},s={args:{defaultChecked:!0,disabled:!1},render:r=>e.jsx(m,{description:"This component wraps input with type=checkbox, see usage example on the `InSection` story",children:e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx(t,{...r})," ",e.jsx("br",{}),e.jsx(t,{defaultChecked:!0,...r})," ",e.jsx("br",{}),e.jsx(t,{disabled:!0,...r})," ",e.jsx("br",{}),e.jsx(t,{disabled:!0,checked:!0,...r})," ",e.jsx("br",{})]})})},o={render:r=>e.jsx(l,{children:e.jsx(h,{Component:"label",endAdornment:e.jsx(t,{defaultChecked:!0,...r}),multiline:!0,children:"First radio"})})};var n,i,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: false
  },
  render: args => <Placeholder description="This component wraps input with type=checkbox, see usage example on the \`InSection\` story">
      <div style={{
      display: "flex",
      gap: "6px"
    }}>
        <Switch {...args} /> <br />
        <Switch defaultChecked {...args} /> <br />
        <Switch disabled {...args} /> <br />
        <Switch disabled checked {...args} /> <br />
      </div>
    </Placeholder>
} satisfies Story`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Section>
      <SectionItem Component="label" endAdornment={<Switch defaultChecked {...args} />} multiline>
        First radio
      </SectionItem>
    </Section>
} satisfies Story`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["Playground","InSection"];export{o as InSection,s as Playground,_ as __namedExportsOrder,T as default};

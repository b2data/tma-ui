import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{R as n}from"./Radio-egMr1lXj.js";import{P as l}from"./Placeholder-BEKt0QMe.js";import{S as u}from"./Section-BoRpuEpk.js";import{S as a}from"./SectionItem-DaSia-lo.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./VisuallyHidden-DVDVm8UN.js";import"./react-C2pAPbtc.js";import"./Typography-tCI8f8sN.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./SectionHeader-CsVZYXXU.js";import"./Divider-D1dDgo39.js";import"./SectionFooter-CWFWA3TC.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";const E={title:"Forms/Radio",component:n},r={args:{defaultChecked:!0,disabled:!1},render:o=>e.jsx(l,{description:"This component wraps input with type=radio, see usage example on the `InSection` story",children:e.jsx(n,{...o})})},t={render:o=>e.jsxs(u,{Component:"form",children:[e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"1",...o}),multiline:!0,children:"First radio"}),e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"2",...o}),multiline:!0,children:"Second radio"})]})};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: false
  },
  render: args => <Placeholder description="This component wraps input with type=radio, see usage example on the \`InSection\` story">
      <Radio {...args} />
    </Placeholder>
} satisfies Story`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Section Component="form">
      <SectionItem Component="label" startAdornment={<Radio name="radio" value="1" {...args} />} multiline>
        First radio
      </SectionItem>
      <SectionItem Component="label" startAdornment={<Radio name="radio" value="2" {...args} />} multiline>
        Second radio
      </SectionItem>
    </Section>
} satisfies Story`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const T=["Playground","InSection"];export{t as InSection,r as Playground,T as __namedExportsOrder,E as default};

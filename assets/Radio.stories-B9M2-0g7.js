import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{R as n}from"./Radio-BYjrupWv.js";import{P as l}from"./Placeholder-BiaABeaX.js";import{S as u}from"./Section-DSzLtwdd.js";import{S as a}from"./SectionItem-D2_IzEdn.js";import"./index-CTjT7uj6.js";import"./classNames-BjxpnYM-.js";import"./VisuallyHidden-o-2DMb3A.js";import"./react-BrYeE0c6.js";import"./Typography-CVAv-OXT.js";import"./dayjs.min-CDLQcmce.js";import"./usePlatform-CpmMXCo-.js";import"./SectionHeader-85L6bVwp.js";import"./Divider-BPGmi9o0.js";import"./SectionFooter-CRZTi1Kq.js";import"./Tappable-BlvX034W.js";const k={title:"Forms/Radio",component:n},r={args:{defaultChecked:!0,disabled:!1},render:o=>e.jsx(l,{description:"This component wraps input with type=radio, see usage example on the `InSection` story",children:e.jsx(n,{...o})})},t={render:o=>e.jsxs(u,{Component:"form",children:[e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"1",...o}),multiline:!0,children:"First radio"}),e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"2",...o}),multiline:!0,children:"Second radio"})]})};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
} satisfies Story`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["Playground","InSection"];export{t as InSection,r as Playground,E as __namedExportsOrder,k as default};

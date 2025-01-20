import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{R as n}from"./Radio-BdGMH6fw.js";import{P as l}from"./Placeholder-BHW2jTQB.js";import{S as u}from"./Section-CJQk1qCv.js";import{S as a}from"./SectionItem-SVUuVvpu.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./file-zip-B9x0q0B1.js";import"./VisuallyHidden-CLouwpBC.js";import"./react-C2pAPbtc.js";import"./Typography-CrhEa1Is.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./SectionHeader-Do5elWfy.js";import"./Divider-DM0Fmy-m.js";import"./SectionFooter-ByBZRHt-.js";import"./Tappable-CAJESwKs.js";import"./useTimeout-BRhOMhk3.js";const T={title:"Forms/Radio",component:n},r={args:{defaultChecked:!0,disabled:!1},render:o=>e.jsx(l,{description:"This component wraps input with type=radio, see usage example on the `InSection` story",children:e.jsx(n,{...o})})},t={render:o=>e.jsxs(u,{Component:"form",children:[e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"1",...o}),multiline:!0,children:"First radio"}),e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"2",...o}),multiline:!0,children:"Second radio"})]})};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
} satisfies Story`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const _=["Playground","InSection"];export{t as InSection,r as Playground,_ as __namedExportsOrder,T as default};

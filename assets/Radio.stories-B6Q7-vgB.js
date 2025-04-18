import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as n}from"./Radio-8x4uD0Fs.js";import{P as l}from"./Placeholder-2eVNY_TB.js";import{S as u}from"./Section-CfdpsHoY.js";import{S as a}from"./SectionItem-DlfN-nxZ.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./index-2yJIXLcc.js";import"./VisuallyHidden-DpPGOsnD.js";import"./react-B_12zFKA.js";import"./Typography-C9RDb2oI.js";import"./dayjs.min-qj4fShTU.js";import"./usePlatform-CpmMXCo-.js";import"./SectionHeader-DrZwBLtC.js";import"./Divider-By5508MM.js";import"./SectionFooter-CC5bVAZT.js";import"./Tappable-Bi9o3b7s.js";import"./useTimeout-5tW5gS3k.js";const T={title:"Forms/Radio",component:n},r={args:{defaultChecked:!0,disabled:!1},render:o=>e.jsx(l,{description:"This component wraps input with type=radio, see usage example on the `InSection` story",children:e.jsx(n,{...o})})},t={render:o=>e.jsxs(u,{Component:"form",children:[e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"1",...o}),multiline:!0,children:"First radio"}),e.jsx(a,{Component:"label",startAdornment:e.jsx(n,{name:"radio",value:"2",...o}),multiline:!0,children:"Second radio"})]})};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

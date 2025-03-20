import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./Switch-9yDo4sU0.js";import{P as m}from"./Placeholder-2eVNY_TB.js";import{S as l}from"./Section-CfdpsHoY.js";import{S as h}from"./SectionItem-DlfN-nxZ.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./index-2yJIXLcc.js";import"./dayjs.min-qj4fShTU.js";import"./usePlatform-CpmMXCo-.js";import"./VisuallyHidden-DpPGOsnD.js";import"./react-B_12zFKA.js";import"./Typography-C9RDb2oI.js";import"./SectionHeader-DrZwBLtC.js";import"./Divider-By5508MM.js";import"./SectionFooter-CC5bVAZT.js";import"./Tappable-Bi9o3b7s.js";import"./useTimeout-5tW5gS3k.js";const _={title:"Forms/Switch",component:t},o={args:{defaultChecked:!0,disabled:!1},render:r=>e.jsx(m,{description:"This component wraps input with type=checkbox, see usage example on the `InSection` story",children:e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx(t,{...r})," ",e.jsx("br",{}),e.jsx(t,{defaultChecked:!0,...r})," ",e.jsx("br",{}),e.jsx(t,{disabled:!0,...r})," ",e.jsx("br",{}),e.jsx(t,{disabled:!0,checked:!0,...r})," ",e.jsx("br",{})]})})},s={render:r=>e.jsx(l,{children:e.jsx(h,{Component:"label",endAdornment:e.jsx(t,{defaultChecked:!0,...r}),multiline:!0,children:"First radio"})})};var i,n,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
} satisfies Story`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Section>
      <SectionItem Component="label" endAdornment={<Switch defaultChecked {...args} />} multiline>
        First radio
      </SectionItem>
    </Section>
} satisfies Story`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["Playground","InSection"];export{s as InSection,o as Playground,O as __namedExportsOrder,_ as default};

import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{A as r}from"./file-zip-B9x0q0B1.js";import{s as c}from"./control-BLWnEcik.js";import{S as a}from"./Section-CJQk1qCv.js";import{L as l}from"./List-QmkSd9S4.js";import{S as p}from"./SectionItem-SVUuVvpu.js";import{T as t}from"./TextField-CXHUjy-q.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./react-C2pAPbtc.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./SectionHeader-Do5elWfy.js";import"./Typography-CrhEa1Is.js";import"./Divider-DM0Fmy-m.js";import"./SectionFooter-ByBZRHt-.js";import"./Tappable-CAJESwKs.js";import"./useTimeout-BRhOMhk3.js";import"./FormInput-DD8o44sk.js";import"./function-0hL7Y8C6.js";const E={title:"Layouts/Section",component:a,argTypes:c(["header","footer"],"text")},f=[{id:1,icon:e.jsx(r,{}),text:"Chat Settings"},{id:2,icon:e.jsx(r,{}),text:"Data and Storage"},{id:3,icon:e.jsx(r,{}),text:"Devices"}],o={render:n=>e.jsxs(l,{style:{padding:"40px",width:500},children:[e.jsx(a,{header:"Main Settings",footer:"The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux.",...n,children:f.map(i=>e.jsx(p,{startAdornment:i.icon,children:i.text},i.id))}),e.jsxs(a,{header:"Personal Information",footer:"The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux.",...n,children:[e.jsx(t,{header:"First name",placeholder:"21 y.o. designer from San Francisco"}),e.jsx(t,{header:"Last name",placeholder:"21 y.o. designer from San Francisco"})]})]})};var s,d,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <List style={{
    padding: "40px",
    width: 500
  }}>
      <Section header="Main Settings" footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux." {...args}>
        {cells.map(cell => <SectionItem key={cell.id} startAdornment={cell.icon}>
            {cell.text}
          </SectionItem>)}
      </Section>
      <Section header="Personal Information" footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux." {...args}>
        <TextField header="First name" placeholder="21 y.o. designer from San Francisco" />
        <TextField header="Last name" placeholder="21 y.o. designer from San Francisco" />
      </Section>
    </List>
} satisfies Story`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const M=["Playground"];export{o as Playground,M as __namedExportsOrder,E as default};

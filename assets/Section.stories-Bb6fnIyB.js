import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{H as r}from"./WarningIcon-WmplKgkK.js";import{s as c}from"./control-BLWnEcik.js";import{S as a}from"./Section-DSzLtwdd.js";import{L as l}from"./List-BbC8tYAN.js";import{S as p}from"./SectionItem-D2_IzEdn.js";import{T as t}from"./TextField-2zztQZvf.js";import"./index-CTjT7uj6.js";import"./classNames-BjxpnYM-.js";import"./react-BrYeE0c6.js";import"./dayjs.min-CDLQcmce.js";import"./usePlatform-CpmMXCo-.js";import"./SectionHeader-85L6bVwp.js";import"./Typography-CVAv-OXT.js";import"./Divider-BPGmi9o0.js";import"./SectionFooter-CRZTi1Kq.js";import"./Tappable-BlvX034W.js";import"./FormInput-BeAMhBmZ.js";import"./function-0hL7Y8C6.js";const D={title:"Layouts/Section",component:a,argTypes:c(["header","footer"],"text")},f=[{id:1,icon:e.jsx(r,{}),text:"Chat Settings"},{id:2,icon:e.jsx(r,{}),text:"Data and Storage"},{id:3,icon:e.jsx(r,{}),text:"Devices"}],o={render:n=>e.jsxs(l,{style:{padding:"40px",width:500},children:[e.jsx(a,{header:"Main Settings",footer:"The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux.",...n,children:f.map(i=>e.jsx(p,{startAdornment:i.icon,children:i.text},i.id))}),e.jsxs(a,{header:"Personal Information",footer:"The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux.",...n,children:[e.jsx(t,{header:"First name",placeholder:"21 y.o. designer from San Francisco"}),e.jsx(t,{header:"Last name",placeholder:"21 y.o. designer from San Francisco"})]})]})};var s,d,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
} satisfies Story`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["Playground"];export{o as Playground,E as __namedExportsOrder,D as default};

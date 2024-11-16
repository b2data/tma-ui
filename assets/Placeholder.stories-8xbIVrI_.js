import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{h as y,s as f}from"./control-BLWnEcik.js";import{P as g}from"./Placeholder-BEKt0QMe.js";import{B as x}from"./Button-BHkAevSL.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./react-C2pAPbtc.js";import"./Typography-tCI8f8sN.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./Spinner-CSk3H20J.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";const z={title:"Layouts/Placeholder",component:g,parameters:{layout:"centered"},argTypes:{...y("children","action"),...f(["header","description"],"text")}},e={args:{children:s.jsx("img",{alt:"Telegram sticker",src:"https://xelene.me/telegram.gif",style:{display:"block",width:144,height:144}}),header:"Title",description:"Description"},render:u=>s.jsx("div",{style:{maxWidth:400},children:s.jsx(g,{...u})})},r={args:{...e.args,action:s.jsx(x,{fullWidth:!0,size:"large",children:"Action"})},render:e.render};var o;const t={args:{children:(o=e.args)==null?void 0:o.children,description:"Only you can see archived stories unless you choose to post them to your profile."},render:e.render};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <img alt="Telegram sticker" src="https://xelene.me/telegram.gif" style={{
      display: "block",
      width: 144,
      height: 144
    }} />,
    header: "Title",
    description: "Description"
  },
  render: args => <div style={{
    maxWidth: 400
  }}>
      <Placeholder {...args} />
    </div>
} satisfies Story`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    action: <Button fullWidth size="large">
        Action
      </Button>
  },
  render: Playground.render
} satisfies Story`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: Playground.args?.children,
    description: "Only you can see archived stories unless you choose to post them to your profile."
  },
  render: Playground.render
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const C=["Playground","WithAction","OnlyDescription"];export{t as OnlyDescription,e as Playground,r as WithAction,C as __namedExportsOrder,z as default};

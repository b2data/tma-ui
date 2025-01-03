import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{h}from"./control-BLWnEcik.js";import{S as p}from"./SectionItemCollapsible-CTYBauV-.js";import{A as u}from"./Avatar-MezpE3Ps.js";import{B as g}from"./Badge-Be3-ueUq.js";import{r as S}from"./index-DRjF_FHU.js";import{T as f}from"./Typography-C-8rOji7.js";import"./classNames-BjxpnYM-.js";import"./react-C2pAPbtc.js";import"./Tappable-HVuun7D-.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./useTimeout-BRhOMhk3.js";import"./WarningIcon-nkyPbtWt.js";import"./Collapsible-C2Tt_Ji9.js";import"./Image-DL7nKGa0.js";import"./Spinner-R9NLJK8d.js";const L={title:"Layouts/SectionItemCollapsible",component:p,argTypes:{...h("startAdornment","endAdornment","children")}},e={args:{title:"Collapsible Title",hint:"Some helper text",children:"Title",startAdornment:r.jsx(u,{size:24}),endAdornment:r.jsx(g,{children:"99"}),defaultOpen:!1}},t={args:{title:"Collapsed Title",hint:"Some helper text",children:"Title"},render:m=>{const[d,c]=S.useState(!0);return r.jsx(p,{...m,open:d,onToggle:c,children:r.jsx(f,{editableProps:{enabled:!0,markdown:!0,placeholder:"Content here"}})})}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Collapsible Title",
    hint: "Some helper text",
    children: "Title",
    startAdornment: <Avatar size={24} />,
    endAdornment: <Badge>99</Badge>,
    defaultOpen: false
  }
} satisfies Story`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,l,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: "Collapsed Title",
    hint: "Some helper text",
    children: "Title"
  },
  render: args => {
    const [open, setOpen] = useState(true);
    return <SectionItemCollapsible {...args} open={open} onToggle={setOpen}>
        <Typography editableProps={{
        enabled: true,
        markdown: true,
        placeholder: "Content here"
      }} />
      </SectionItemCollapsible>;
  }
} satisfies Story`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const R=["Playground","Collapsed"];export{t as Collapsed,e as Playground,R as __namedExportsOrder,L as default};

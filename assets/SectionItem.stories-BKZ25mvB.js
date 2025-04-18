import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{h}from"./control-BLWnEcik.js";import{S as p}from"./SectionItemCollapsible-jnVlRkNo.js";import{A as u}from"./Avatar-CGDno_3b.js";import{B as g}from"./Badge-BymGsvsn.js";import{r as S}from"./index-2yJIXLcc.js";import{T as f}from"./Typography-C9RDb2oI.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./react-B_12zFKA.js";import"./Tappable-Bi9o3b7s.js";import"./dayjs.min-qj4fShTU.js";import"./usePlatform-CpmMXCo-.js";import"./useTimeout-5tW5gS3k.js";import"./Collapsible-2cdXxrOj.js";import"./Image-CAlrjYSA.js";import"./Spinner-DKZ8EZnv.js";const L={title:"Layouts/SectionItemCollapsible",component:p,argTypes:{...h("startAdornment","endAdornment","children")}},e={args:{title:"Collapsible Title",hint:"Some helper text",children:"Title",startAdornment:r.jsx(u,{size:24}),endAdornment:r.jsx(g,{children:"99"}),defaultOpen:!1}},t={args:{title:"Collapsed Title",hint:"Some helper text",children:"Title"},render:m=>{const[d,c]=S.useState(!0);return r.jsx(p,{...m,open:d,onToggle:c,children:r.jsx(f,{editableProps:{enabled:!0,markdown:!0,placeholder:"Content here"}})})}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

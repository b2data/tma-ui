import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as i}from"./Collapsible-2cdXxrOj.js";import{r as c}from"./index-2yJIXLcc.js";import"./dayjs.min-qj4fShTU.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./useTimeout-5tW5gS3k.js";const x={title:"Misc/Collapsible",component:i},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"})]})},render:r=>{const[t,a]=c.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>a(!t),children:"Click me"}),e.jsx(i,{open:t,...r})]})}};var o,s,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
      </>
  },
  render: args => {
    const [open, setIsOpen] = useState(false);
    return <div>
        <button onClick={() => setIsOpen(!open)}>Click me</button>
        <Collapsible open={open} {...args} />
      </div>;
  }
} satisfies Story`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const j=["Playground"];export{n as Playground,j as __namedExportsOrder,x as default};

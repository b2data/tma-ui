import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as i}from"./Collapsible-C2Tt_Ji9.js";import{r as c}from"./index-DRjF_FHU.js";import"./dayjs.min-B-QGziwU.js";import"./classNames-BjxpnYM-.js";import"./useTimeout-BRhOMhk3.js";const u={title:"Misc/Collapsible",component:i},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"}),e.jsx("div",{children:"Collapsible content"})]})},render:r=>{const[s,a]=c.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>a(!s),children:"Click me"}),e.jsx(i,{open:s,...r})]})}};var t,o,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
} satisfies Story`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const x=["Playground"];export{n as Playground,x as __namedExportsOrder,u as default};
